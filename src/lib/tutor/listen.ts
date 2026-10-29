"use client";

import { capped, sarvamStt, voiceConfig, voiceConfigNow } from "./sarvam-client";
import { speaker } from "./speech";
import { latMark } from "./latency";

/**
 * Hands-free listening.
 *
 * PRIMARY (Chrome / Edge / Android Chrome): the browser's streaming recogniser (Web Speech API,
 * continuous + interim results). Live captions while the student speaks; the turn ends on the
 * recogniser's final result (after a 250 ms grace) or when the interim text hasn't changed for
 * ~650 ms. It restarts itself after every end (silence, Chrome's ~60 s cut-off, errors).
 *
 * FALLBACK (Safari / Firefox, or Web Speech failing repeatedly): our own recording (16 kHz WAV, energy
 * VAD: the utterance ends after 600 ms of silence) sent to /api/voice/stt (Sarvam), with a 6 s timeout
 * and a visible retry. While the tutor speaks, ≥ 300 ms of loud speech reports `onSpeech` (barge-in).
 */

export type MicError = "denied" | "nomic" | "unsupported" | "network";
/** Fallback recogniser: what the clip upload is doing ("retry" = it failed, the clip is kept for retry()). */
export type ListenStatus = "transcribing" | "retry" | null;

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
  onstart: (() => void) | null;
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
/** Web Speech failed hard this visit (network/service errors): use the fallback for the rest of it. */
let webSpeechBroken = false;

// Ask early (one tiny cached request) so the fallback choice is ready by the time the mic is tapped.
if (typeof window !== "undefined") void voiceConfig();

export function recognitionSupported() {
  return webSpeechSupported() || recorderSupported();
}

export const TRANSCRIBING = "transcribing…";

/** Turn ends this long after the recogniser's last final result (with no interim words pending). */
const FINAL_GAP = 250;
/** …or this long after the interim text last changed. */
const STABLE_GAP = 650;
/** Fallback VAD: silence that ends an utterance. */
const SILENCE_MS = 600;
const STT_TIMEOUT = 6000;

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

const AUDIO: MediaTrackConstraints = { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 };

/** getUserMedia with the error mapped to what the student must do. */
async function openMic(): Promise<MediaStream | MicError> {
  if (!navigator.mediaDevices?.getUserMedia) return "unsupported";
  try {
    return await navigator.mediaDevices.getUserMedia({ audio: AUDIO });
  } catch (e) {
    const name = (e as { name?: string })?.name;
    if (name === "NotAllowedError" || name === "SecurityError" || name === "PermissionDeniedError") return "denied";
    if (name === "NotFoundError" || name === "OverconstrainedError" || name === "NotReadableError") return "nomic";
    return "unsupported";
  }
}

export interface ListenerOpts {
  lang: string;
  /** Stop after one utterance (push-to-talk). */
  once?: boolean;
  onInterim: (text: string) => void;
  onFinal: (text: string) => void;
  onActive: (on: boolean) => void;
  onError: (e: MicError) => void;
  /** Fallback recogniser status (uploading / failed with a retry). */
  onStatus?: (s: ListenStatus) => void;
  /** ≥ 300 ms of real speech while the tutor talks (fallback VAD only; Web Speech barge-in uses interim text). */
  onSpeech?: () => void;
}

export class VoiceListener {
  private rec: Recognition | null = null;
  private want = false;
  private pending = "";
  /** Results index (in the current recogniser session) below which text was already handed over. */
  private consumed = 0;
  private seen = 0;
  /** Leading words of the current text that were the tutor's own voice (dropped). */
  private skipWords = 0;
  /** The latest result still had interim (not final) words. */
  private interimOpen = false;
  private flushTimer: ReturnType<typeof setTimeout> | undefined;
  private bootTimer: ReturnType<typeof setTimeout> | undefined;
  private watchdog: ReturnType<typeof setInterval> | undefined;
  private restarts: number[] = [];
  private netErrors = 0;
  private startedAt = 0;
  private gotStart = false;
  private dead = 0;
  lastHeard = 0;
  engine: "sarvam" | "webspeech" | null = null;

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
    void this.choose();
  }

  private async choose() {
    if (webSpeechSupported() && !webSpeechBroken) {
      // A quick permission probe gives a clear "blocked" / "no microphone" error up front.
      const m = await openMic();
      if (!this.want) return typeof m !== "string" && m.getTracks().forEach((t) => t.stop());
      if (m === "denied" || m === "nomic") return this.fail(m);
      if (typeof m !== "string") m.getTracks().forEach((t) => t.stop());
      this.engine = "webspeech";
      console.info("[voice] listening with engine=webspeech");
      this.boot();
      clearInterval(this.watchdog);
      // Never stay deaf: if the recogniser died without an `end`, or never started, start it again.
      this.watchdog = setInterval(() => {
        if (!this.want || this.engine !== "webspeech") return;
        if (!this.rec && !this.bootTimer) this.boot();
        else if (this.rec && !this.gotStart && performance.now() - this.startedAt > 4000) {
          // Twice in a row = this browser's recogniser doesn't work (e.g. no speech service): use the fallback.
          if (++this.dead >= 2) return this.toSarvam("the recogniser never started");
          console.warn("[voice] recogniser never started: restarting");
          const r = this.rec;
          this.rec = null;
          try {
            r.abort();
          } catch {
            /* gone */
          }
          this.boot();
        }
      }, 2000);
      return;
    }
    if (!voiceConfigNow()) await Promise.race([voiceConfig(), new Promise((r) => setTimeout(r, 3000))]);
    if (!this.want) return;
    if (sarvamReady()) return void this.startSarvam();
    this.fail(webSpeechBroken ? "network" : "unsupported");
  }

  private fail(e: MicError) {
    this.want = false;
    this.cleanup();
    this.o.onActive(false);
    this.o.onError(e);
  }

  /* ---------------- Fallback: own recording + VAD → Sarvam ---------------- */

  private mic: { stream: MediaStream; ctx: AudioContext; proc: ScriptProcessorNode; src: MediaStreamAudioSourceNode } | null = null;
  private retryClip: Blob | null = null;
  private sttBusy = false;

  private async startSarvam() {
    const stream = await openMic();
    if (typeof stream === "string") return this.fail(stream);
    if (!this.want) return stream.getTracks().forEach((t) => t.stop());
    const ctx = new AudioContext();
    if (ctx.state === "suspended") void ctx.resume().catch(() => {});
    const src = ctx.createMediaStreamSource(stream);
    const proc = ctx.createScriptProcessor(2048, 1, 1);
    src.connect(proc);
    proc.connect(ctx.destination);
    this.mic = { stream, ctx, proc, src };
    this.engine = "sarvam";
    console.info("[voice] listening with engine=sarvam (fallback)");
    this.o.onActive(true);

    const rate = ctx.sampleRate;
    const frameMs = (2048 / rate) * 1000;
    let floor = 0.005;
    let loud = 0;
    let speech: Float32Array[] | null = null;
    const pre: Float32Array[] = [];
    let lastLoud = 0;
    let started = 0;
    let barged = false;
    let idleSince = performance.now();
    proc.onaudioprocess = (ev) => {
      ev.outputBuffer.getChannelData(0).fill(0);
      if (!this.mic || this.mic.proc !== proc) return;
      const f = new Float32Array(ev.inputBuffer.getChannelData(0));
      let sum = 0;
      for (let i = 0; i < f.length; i++) sum += f[i] * f[i];
      const rms = Math.sqrt(sum / f.length);
      const now = performance.now();
      const talking = speaker().speaking;
      // Higher bar while the tutor talks, so its own voice leaking past echo cancellation isn't "speech".
      const thr = Math.max(0.012, floor * 3) * (talking ? 2.2 : 1);
      if (!speech) {
        floor = floor * 0.95 + Math.min(rms, 0.05) * 0.05;
        pre.push(f);
        if (pre.length > Math.ceil(300 / frameMs)) pre.shift();
        loud = rms > thr ? loud + 1 : 0;
        if (loud >= 2) {
          speech = pre.splice(0);
          started = lastLoud = now;
          barged = false;
          this.lastHeard = now;
        } else if (this.o.once && now - idleSince > 10000) this.stop();
        return;
      }
      speech.push(f);
      if (rms > thr * 0.7) lastLoud = this.lastHeard = now;
      const dur = now - started;
      // Barge-in: ≥ 300 ms of sustained speech over the tutor.
      if (!barged && talking && dur >= 300 && now - lastLoud < 150) {
        barged = true;
        this.o.onSpeech?.();
      }
      if (now - lastLoud > SILENCE_MS || dur > 28000) {
        const clip = speech;
        speech = null;
        idleSince = now;
        if (dur - (now - lastLoud) > 250) {
          latMark("speechEnd", lastLoud);
          void this.transcribe(encodeWav(clip, rate));
        }
      }
    };
  }

  /** Send the last failed clip again. */
  retry() {
    const c = this.retryClip;
    if (c && this.want) void this.transcribe(c);
  }

  private async transcribe(clip: Blob) {
    if (this.sttBusy) return; // one upload at a time: a new clip while one is in flight is dropped (no duplicates)
    this.sttBusy = true;
    this.retryClip = null;
    this.o.onStatus?.("transcribing");
    this.o.onInterim(TRANSCRIBING);
    const r = await sarvamStt(clip, this.o.lang, STT_TIMEOUT);
    this.sttBusy = false;
    if (!this.want) return;
    this.o.onInterim("");
    if ("error" in r) {
      console.warn("[voice] sarvam stt error:", r.error);
      if (r.capped) return this.fail("network");
      this.retryClip = clip;
      this.o.onStatus?.("retry");
      return;
    }
    this.o.onStatus?.(null);
    if (!r.transcript) return;
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

  private toSarvam(why: string) {
    webSpeechBroken = true;
    this.cleanup();
    if (!this.want) return;
    console.info("[voice] Web Speech failed, using the server recogniser:", why);
    void this.choose();
  }

  private cleanup() {
    clearTimeout(this.flushTimer);
    clearTimeout(this.bootTimer);
    this.bootTimer = undefined;
    clearInterval(this.watchdog);
    this.closeMic();
    const r = this.rec;
    this.rec = null;
    try {
      r?.abort();
    } catch {
      /* not running */
    }
  }

  stop() {
    const was = this.want;
    this.want = false;
    clearTimeout(this.flushTimer);
    const r = this.rec;
    this.rec = null;
    try {
      r?.stop();
    } catch {
      /* not running */
    }
    this.flush();
    this.cleanup();
    this.o.onStatus?.(null);
    if (was) this.o.onActive(false);
  }

  /** Forget the words heard so far without handing them over (they were the tutor's own voice). */
  discard() {
    clearTimeout(this.flushTimer);
    if (this.pending) this.skipWords += this.pending.split(" ").length;
    this.pending = "";
  }

  /* ---------------- Primary: Web Speech ---------------- */

  private boot() {
    clearTimeout(this.bootTimer);
    this.bootTimer = undefined;
    if (!this.want || this.rec || this.engine !== "webspeech") return;
    const w = window as unknown as Record<string, new () => Recognition>;
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    let rec: Recognition;
    try {
      rec = new Ctor();
    } catch {
      return this.toSarvam("could not create a recogniser");
    }
    const android = /Android/i.test(navigator.userAgent);
    rec.lang = this.o.lang;
    rec.interimResults = true;
    rec.continuous = !android;
    rec.maxAlternatives = 1;
    this.consumed = 0;
    this.seen = 0;
    this.skipWords = 0;
    this.pending = "";
    this.gotStart = false;
    this.startedAt = performance.now();
    rec.onstart = () => {
      this.gotStart = true;
      this.dead = 0;
      this.o.onActive(true);
    };
    rec.onresult = (e) => {
      if (this.rec !== rec) return;
      let fin = "";
      let int = "";
      for (let i = this.consumed; i < e.results.length; i++) {
        const r = e.results[i];
        const txt = r[0]?.transcript ?? "";
        if (r.isFinal) fin += ` ${txt}`;
        else int += ` ${txt}`;
      }
      this.seen = e.results.length;
      this.interimOpen = Boolean(int.trim());
      this.netErrors = 0;
      let text = `${fin} ${int}`.replace(/\s+/g, " ").trim();
      if (this.skipWords) text = text.split(" ").slice(this.skipWords).join(" ");
      if (!text) return;
      this.lastHeard = performance.now();
      const changed = text !== this.pending;
      this.pending = text;
      if (changed) this.o.onInterim(text);
      clearTimeout(this.flushTimer);
      this.flushTimer = setTimeout(() => this.flush(), int.trim() ? STABLE_GAP : FINAL_GAP);
    };
    rec.onspeechstart = () => (this.lastHeard = performance.now());
    rec.onerror = (e) => {
      if (this.rec !== rec) return;
      console.info("[voice] recogniser error:", e.error);
      if (e.error === "not-allowed") return this.fail("denied");
      if (e.error === "audio-capture") return this.fail("nomic");
      if (e.error === "service-not-allowed" || e.error === "language-not-supported") return this.fallbackOr(e.error);
      if (e.error === "network" && ++this.netErrors >= 2) return this.fallbackOr("network errors");
      // "no-speech" / "aborted": the end handler restarts it.
    };
    rec.onend = () => {
      if (this.rec !== rec) return;
      this.rec = null;
      this.flush();
      if (!this.want) return;
      if (this.o.once && this.consumed > 0) return this.stop();
      const now = Date.now();
      this.restarts = this.restarts.filter((t) => now - t < 10000);
      this.restarts.push(now);
      this.bootTimer = setTimeout(() => this.boot(), this.restarts.length > 8 ? 1500 : 60);
    };
    this.rec = rec;
    try {
      rec.start();
    } catch {
      this.rec = null;
      this.bootTimer = setTimeout(() => this.boot(), 400);
    }
  }

  /** Web Speech can't work here: the server recogniser if configured (choose() decides), else a clear error. */
  private fallbackOr(why: string) {
    this.toSarvam(why);
  }

  private flush() {
    clearTimeout(this.flushTimer);
    const text = this.pending.trim();
    if (!text) return;
    this.pending = "";
    if (this.interimOpen) {
      // Handed over on a pause before the recogniser finalised: later words may still land in the same
      // result, so skip what was handed over instead of skipping the result.
      this.skipWords += text.split(" ").length;
    } else {
      this.consumed = this.seen;
      this.skipWords = 0;
    }
    latMark("speechEnd", this.lastHeard);
    this.o.onFinal(text);
    if (this.o.once && this.want) this.stop();
  }
}
