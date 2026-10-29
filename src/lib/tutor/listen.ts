"use client";

import { capped, sarvamStt, voiceConfig, voiceConfigNow } from "./sarvam-client";
import { speaker } from "./speech";

/**
 * Hands-free listening with the Web Speech API: keeps the recogniser running
 * (restarting it after silences and Chrome's ~60 s cut-off), reports interim
 * captions as they come, and hands over a finished utterance after a short
 * pause. Android Chrome's continuous mode repeats results, so there it listens
 * one utterance at a time and restarts.
 *
 * When the server voice (Sarvam AI) is configured, it records the mic itself instead (16 kHz WAV with a
 * simple energy voice-activity detector: an utterance ends after ~800 ms of silence), shows "transcribing…"
 * and sends the clip to /api/voice/stt. While the tutor is talking, the first ~0.9 s of student speech is
 * transcribed early so barge-in works. Web Speech is the fallback when Sarvam fails or the daily cap is hit.
 */

export type MicError = "denied" | "unsupported" | "network";

interface Alt {
  transcript: string;
}
interface Result extends ArrayLike<Alt> {
  isFinal: boolean;
}
interface Recognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<Result> }) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onspeechstart: (() => void) | null;
}

function webSpeechSupported() {
  if (typeof window === "undefined") return false;
  const w = window as unknown as Record<string, unknown>;
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}
const recorderSupported = () => typeof window !== "undefined" && Boolean(navigator.mediaDevices?.getUserMedia) && typeof AudioContext !== "undefined";
const sarvamReady = () => Boolean(voiceConfigNow()?.stt) && !capped.stt && recorderSupported();

// Ask early (one tiny cached request) so the choice is ready by the time the mic is tapped.
if (typeof window !== "undefined") void voiceConfig();

export function recognitionSupported() {
  return webSpeechSupported() || sarvamReady();
}

export const TRANSCRIBING = "transcribing…";

/** Float32 frames at `rate` → 16 kHz mono 16-bit WAV. */
function encodeWav(frames: Float32Array[], rate: number): Blob {
  const total = frames.reduce((n, f) => n + f.length, 0);
  const ratio = rate / 16000;
  const out = Math.floor(total / ratio);
  const pcm = new Int16Array(out);
  let fi = 0;
  let off = 0;
  const at = (i: number) => {
    while (fi < frames.length && i - off >= frames[fi].length) off += frames[fi++].length;
    return fi < frames.length ? frames[fi][i - off] : 0;
  };
  for (let i = 0; i < out; i++) {
    const v = Math.max(-1, Math.min(1, at(Math.floor(i * ratio))));
    pcm[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  const buf = new ArrayBuffer(44 + pcm.byteLength);
  const dv = new DataView(buf);
  const str = (o: number, t: string) => [...t].forEach((c, i) => dv.setUint8(o + i, c.charCodeAt(0)));
  str(0, "RIFF");
  dv.setUint32(4, 36 + pcm.byteLength, true);
  str(8, "WAVE");
  str(12, "fmt ");
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 1, true);
  dv.setUint32(24, 16000, true);
  dv.setUint32(28, 32000, true);
  dv.setUint16(32, 2, true);
  dv.setUint16(34, 16, true);
  str(36, "data");
  dv.setUint32(40, pcm.byteLength, true);
  new Int16Array(buf, 44).set(pcm);
  return new Blob([buf], { type: "audio/wav" });
}

export interface ListenerOpts {
  lang: string;
  /** Stop after one utterance (push-to-talk). */
  once?: boolean;
  onInterim: (text: string) => void;
  onFinal: (text: string) => void;
  onActive: (on: boolean) => void;
  onError: (e: MicError) => void;
}

export class VoiceListener {
  private rec: Recognition | null = null;
  private want = false;
  private finals = "";
  private flushTimer: ReturnType<typeof setTimeout> | undefined;
  private restarts: number[] = [];
  private netErrors = 0;
  lastHeard = 0;

  constructor(private o: ListenerOpts) {}

  get active() {
    return this.want;
  }

  setLang(lang: string) {
    if (lang === this.o.lang) return;
    this.o.lang = lang;
    if (this.rec) this.rec.abort(); // restarts with the new language
  }

  start() {
    this.want = true;
    this.netErrors = 0;
    if (voiceConfigNow()) return this.choose();
    void voiceConfig().then(() => this.want && this.choose());
  }

  private choose() {
    if (sarvamReady()) return void this.startSarvam();
    if (!webSpeechSupported()) {
      this.want = false;
      return this.o.onError("unsupported");
    }
    this.boot();
  }

  /* ---------------- Sarvam: own recording + VAD ---------------- */

  private mic: { stream: MediaStream; ctx: AudioContext; proc: ScriptProcessorNode; src: MediaStreamAudioSourceNode } | null = null;
  private sFails = 0;
  engine: "sarvam" | "webspeech" | null = null;

  private async startSarvam() {
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
    } catch (e) {
      const name = (e as { name?: string })?.name;
      if (name === "NotAllowedError" || name === "SecurityError") {
        this.want = false;
        return this.o.onError("denied");
      }
      return this.toWebSpeech(`mic: ${String(e)}`);
    }
    if (!this.want) return stream.getTracks().forEach((t) => t.stop());
    const ctx = new AudioContext();
    if (ctx.state === "suspended") void ctx.resume().catch(() => {});
    const src = ctx.createMediaStreamSource(stream);
    const proc = ctx.createScriptProcessor(2048, 1, 1);
    src.connect(proc);
    proc.connect(ctx.destination);
    this.mic = { stream, ctx, proc, src };
    this.engine = "sarvam";
    console.info("[voice] listening with engine=sarvam");
    this.o.onActive(true);

    const rate = ctx.sampleRate;
    const frameMs = (2048 / rate) * 1000;
    let floor = 0.005;
    let loud = 0;
    let speech: Float32Array[] | null = null;
    const pre: Float32Array[] = [];
    let lastLoud = 0;
    let started = 0;
    let early = false;
    let idleSince = performance.now();
    proc.onaudioprocess = (ev) => {
      ev.outputBuffer.getChannelData(0).fill(0);
      if (!this.mic || this.mic.proc !== proc) return;
      const f = new Float32Array(ev.inputBuffer.getChannelData(0));
      let sum = 0;
      for (let i = 0; i < f.length; i++) sum += f[i] * f[i];
      const rms = Math.sqrt(sum / f.length);
      const now = performance.now();
      // Higher bar while the tutor talks, so its own voice leaking past echo cancellation isn't "speech".
      const thr = Math.max(0.012, floor * 3) * (speaker().speaking ? 2 : 1);
      if (!speech) {
        floor = floor * 0.95 + Math.min(rms, 0.05) * 0.05;
        pre.push(f);
        if (pre.length > Math.ceil(300 / frameMs)) pre.shift();
        loud = rms > thr ? loud + 1 : 0;
        if (loud >= 2) {
          speech = pre.splice(0);
          started = lastLoud = now;
          early = false;
          this.lastHeard = now;
        } else if (this.o.once && now - idleSince > 10000) this.stop();
        return;
      }
      speech.push(f);
      if (rms > thr * 0.7) lastLoud = this.lastHeard = now;
      const dur = now - started;
      // Barge-in: while the tutor is speaking, transcribe the first moment of speech straight away.
      if (!early && dur > 900 && speaker().speaking) {
        early = true;
        void this.transcribe(speech.slice(), rate, true);
      }
      if (now - lastLoud > 800 || dur > 28000) {
        const clip = speech;
        speech = null;
        idleSince = now;
        if (dur - (now - lastLoud) > 250) void this.transcribe(clip, rate, false);
      }
    };
  }

  private async transcribe(frames: Float32Array[], rate: number, early: boolean) {
    if (!early) this.o.onInterim(TRANSCRIBING);
    const r = await sarvamStt(encodeWav(frames, rate), this.o.lang);
    if ("error" in r) {
      if (early) return;
      this.o.onInterim("");
      console.warn("[voice] sarvam stt error:", r.error);
      if (r.capped || ++this.sFails >= 2) this.toWebSpeech(r.capped ? "daily allowance used" : r.error);
      return;
    }
    this.sFails = 0;
    if (early) {
      if (r.transcript && this.want) this.o.onInterim(r.transcript);
      return;
    }
    if (!r.transcript) return this.o.onInterim("");
    this.o.onFinal(r.transcript);
    if (this.o.once) this.stop();
  }

  private closeMic() {
    const m = this.mic;
    this.mic = null;
    if (!m) return;
    m.proc.onaudioprocess = null;
    try {
      m.src.disconnect();
      m.proc.disconnect();
    } catch {
      /* already */
    }
    m.stream.getTracks().forEach((t) => t.stop());
    void m.ctx.close().catch(() => {});
  }

  private toWebSpeech(why: string) {
    this.closeMic();
    if (!this.want) return;
    if (!webSpeechSupported()) {
      this.want = false;
      this.o.onActive(false);
      return this.o.onError("network");
    }
    console.info("[voice] listening falls back to Web Speech:", why);
    this.engine = "webspeech";
    this.boot();
  }

  stop() {
    this.want = false;
    this.closeMic();
    clearTimeout(this.flushTimer);
    const r = this.rec;
    this.rec = null;
    try {
      r?.stop();
    } catch {
      /* not running */
    }
    this.flush();
    this.o.onActive(false);
  }

  private boot() {
    if (!this.want || this.rec) return;
    const w = window as unknown as Record<string, new () => Recognition>;
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    const rec = new Ctor();
    this.engine = "webspeech";
    const android = /Android/i.test(navigator.userAgent);
    rec.lang = this.o.lang;
    rec.interimResults = true;
    rec.continuous = !android && !this.o.once;
    rec.maxAlternatives = 1;
    let interim = "";
    rec.onresult = (e) => {
      interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        const txt = r[0]?.transcript ?? "";
        if (r.isFinal) this.finals = `${this.finals} ${txt}`.trim();
        else interim += txt;
      }
      this.lastHeard = performance.now();
      this.o.onInterim(`${this.finals} ${interim}`.trim());
      clearTimeout(this.flushTimer);
      // A short pause after a final result ends the utterance.
      if (this.finals && !interim) this.flushTimer = setTimeout(() => this.flush(), 750);
    };
    rec.onspeechstart = () => (this.lastHeard = performance.now());
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") {
        this.want = false;
        this.o.onError("denied");
      } else if (e.error === "network") {
        if (++this.netErrors >= 3) {
          this.want = false;
          this.o.onError("network");
        }
      }
      // "no-speech" / "aborted": just restart.
    };
    rec.onend = () => {
      if (this.rec === rec) this.rec = null;
      if (interim && !this.finals) this.finals = interim; // some browsers end without a final
      this.flush();
      if (this.want && !this.o.once) {
        const now = Date.now();
        this.restarts = this.restarts.filter((t) => now - t < 10000);
        this.restarts.push(now);
        setTimeout(() => this.boot(), this.restarts.length > 8 ? 2000 : 150);
      } else {
        this.want = false;
        this.o.onActive(false);
      }
    };
    this.rec = rec;
    try {
      rec.start();
      this.o.onActive(true);
    } catch {
      this.rec = null;
      setTimeout(() => this.boot(), 400);
    }
  }

  private flush() {
    clearTimeout(this.flushTimer);
    const text = this.finals.trim();
    this.finals = "";
    if (text) this.o.onFinal(text);
    if (this.o.once && text) this.stop();
  }
}
