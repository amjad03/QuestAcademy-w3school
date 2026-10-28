"use client";

/**
 * The live tutor's voice.
 *
 * 1. Kokoro-82M running in the browser (kokoro-js in a module worker; WebGPU on
 *    capable desktops, WASM elsewhere; the model is cached by the browser after
 *    the first load). Voice "hf_alpha" — Kokoro's Hindi female voice — speaking
 *    English gives a natural Indian-English accent. Text is spoken sentence by
 *    sentence and the next sentences are synthesised while one plays, so speech
 *    starts fast.
 * 2. The device's own voice for the language (en-IN / hi-IN / kn-IN) while the
 *    model is still downloading, on low-end phones, and for Devanagari/Kannada
 *    script (kokoro-js can only phonemise Latin-script text).
 *
 * Output goes through a Web Audio analyser so the UI can draw a live waveform.
 */

export type VoiceEngineStatus = "off" | "loading" | "ready" | "unavailable";

const MODEL = "onnx-community/Kokoro-82M-v1.0-ONNX";
export const KOKORO_VOICE = "hf_alpha";

const WORKER = `
import { KokoroTTS } from "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm";
let tts = null, loading = null, cancelled = 0, chain = Promise.resolve();
const HINDI = { hf_alpha: "Female", hf_beta: "Female", hm_omega: "Male", hm_psi: "Male" };
async function load(gpu) {
  const progress = (p) => { if (p && p.status === "progress" && /onnx$/.test(p.file || "")) self.postMessage({ type: "progress", value: Math.round(p.progress || 0) }); };
  let m = null;
  if (gpu) { try { m = await KokoroTTS.from_pretrained(${JSON.stringify(MODEL)}, { dtype: "fp32", device: "webgpu", progress_callback: progress }); } catch (e) { m = null; } }
  if (!m) m = await KokoroTTS.from_pretrained(${JSON.stringify(MODEL)}, { dtype: "q8", device: "wasm", progress_callback: progress });
  // kokoro-js lists only the English voices; Kokoro's Hindi voices live in the same model repo.
  const v = m.voices;
  for (const [id, gender] of Object.entries(HINDI)) if (!v[id]) v[id] = { name: id, language: "en-gb", gender };
  // Warm up (first inference compiles kernels).
  await m.generate("Hello.", { voice: ${JSON.stringify(KOKORO_VOICE)} });
  tts = m;
  self.postMessage({ type: "ready" });
}
self.onmessage = (e) => {
  const d = e.data || {};
  if (d.type === "load") {
    loading ??= load(d.gpu).catch((err) => self.postMessage({ type: "failed", error: String((err && err.message) || err) }));
    return;
  }
  if (d.type === "cancel") { cancelled = Math.max(cancelled, d.gen); return; }
  if (d.type === "say") {
    chain = chain.then(async () => {
      if (d.gen <= cancelled) return self.postMessage({ type: "audio", id: d.id, skipped: true });
      try {
        if (!tts) await loading;
        if (!tts) throw new Error("not loaded");
        const a = await tts.generate(d.text, { voice: d.voice, speed: d.speed || 1 });
        const pcm = a.audio;
        self.postMessage({ type: "audio", id: d.id, pcm, rate: a.sampling_rate }, [pcm.buffer]);
      } catch (err) {
        self.postMessage({ type: "audio", id: d.id, error: String((err && err.message) || err) });
      }
    });
  }
};
`;

const INDIC = /[ऀ-෿]/;

/** Split narration into sentences (keeps each Kokoro call short so audio starts quickly). */
export function sentences(text: string): string[] {
  const parts = text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?।॥])\s+(?=\S)/);
  const out: string[] = [];
  for (const p of parts) {
    // Very long sentences: break at a comma/semicolon so the first audio is ready sooner.
    if (p.split(" ").length > 28) out.push(...p.split(/(?<=[,;:])\s+/));
    else out.push(p);
  }
  return out.filter((s) => /[\p{L}\p{N}]/u.test(s));
}

/** Words → speakable text: drop markdown/LaTeX leftovers the model may slip in. */
function speakable(s: string) {
  return s
    .replace(/[*_`#$\\]/g, "")
    .replace(/\^2\b/g, " squared")
    .replace(/\^3\b/g, " cubed")
    .replace(/\s*=\s*/g, " equals ")
    .replace(/\s+/g, " ")
    .trim();
}

type Listener = (s: VoiceEngineStatus, progress: number) => void;

class Speaker {
  status: VoiceEngineStatus = "off";
  progress = 0;
  speaking = false;
  private worker: Worker | null = null;
  private seq = 0;
  private gen = 1;
  private pending = new Map<number, (r: { pcm?: Float32Array; rate?: number } | null) => void>();
  private cache = new Map<string, Promise<AudioBuffer | null>>();
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: AudioBufferSourceNode | null = null;
  private deviceOn = false;
  private listeners = new Set<Listener>();
  private buf: Uint8Array<ArrayBuffer> | null = null;
  private failures = 0;

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    fn(this.status, this.progress);
    return () => void this.listeners.delete(fn);
  }
  private set(s: VoiceEngineStatus, progress = this.progress) {
    this.status = s;
    this.progress = progress;
    this.listeners.forEach((l) => l(s, progress));
  }

  /** Whether this device should try the in-browser model at all. */
  capable() {
    if (typeof window === "undefined" || typeof Worker === "undefined" || typeof AudioContext === "undefined") return false;
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) return false;
    if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
    return true;
  }

  /** Start downloading/compiling the model in the background (safe to call repeatedly). */
  preload() {
    if (this.worker || this.status === "unavailable") return;
    if (!this.capable()) return this.set("unavailable");
    try {
      this.worker = new Worker(URL.createObjectURL(new Blob([WORKER], { type: "text/javascript" })), { type: "module" });
    } catch {
      return this.set("unavailable");
    }
    this.worker.onerror = (e) => {
      e.preventDefault();
      this.fail();
    };
    this.worker.onmessage = (e: MessageEvent) => {
      const d = e.data as { type: string; id?: number; value?: number; pcm?: Float32Array; rate?: number; error?: string; skipped?: boolean };
      if (d.type === "progress") this.status === "loading" && this.set("loading", d.value ?? 0);
      else if (d.type === "ready") this.set("ready", 100);
      else if (d.type === "failed") this.fail();
      else if (d.type === "audio" && d.id) {
        const res = this.pending.get(d.id);
        this.pending.delete(d.id);
        if (d.error && ++this.failures >= 3) this.fail();
        res?.(d.pcm ? { pcm: d.pcm, rate: d.rate } : null);
      }
    };
    const nav = navigator as Navigator & { gpu?: unknown; deviceMemory?: number; userAgentData?: { mobile?: boolean } };
    const mobile = nav.userAgentData?.mobile ?? /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
    // WebGPU needs the larger fp32 model: only on desktops with memory to spare.
    const gpu = Boolean(nav.gpu) && !mobile && (nav.deviceMemory ?? 8) >= 8;
    this.set("loading", 0);
    this.worker.postMessage({ type: "load", gpu });
  }

  private fail() {
    this.worker?.terminate();
    this.worker = null;
    this.pending.forEach((r) => r(null));
    this.pending.clear();
    this.cache.clear();
    this.set("unavailable");
  }

  /** Call from a tap/click: browsers only allow audio to start after a user gesture. */
  unlock() {
    if (typeof window === "undefined") return;
    try {
      if (!this.ctx) {
        this.ctx = new AudioContext();
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 512;
        this.analyser.connect(this.ctx.destination);
      }
      if (this.ctx.state === "suspended") void this.ctx.resume().catch(() => {});
    } catch {
      this.ctx = null;
    }
    // iOS: an empty utterance inside the gesture unlocks speechSynthesis too.
    try {
      if ("speechSynthesis" in window && !this.deviceOn) window.speechSynthesis.getVoices();
    } catch {
      /* ignore */
    }
  }

  private useKokoro(text: string, lang: string) {
    return this.status === "ready" && lang.startsWith("en") && !INDIC.test(text) && Boolean(this.ctx);
  }

  private synth(text: string): Promise<AudioBuffer | null> {
    const hit = this.cache.get(text);
    if (hit) return hit;
    const w = this.worker;
    const ctx = this.ctx;
    if (!w || !ctx) return Promise.resolve(null);
    const id = ++this.seq;
    const p = new Promise<AudioBuffer | null>((resolve) => {
      this.pending.set(id, (r) => {
        if (!r?.pcm || !r.rate) return resolve(null);
        try {
          const b = ctx.createBuffer(1, r.pcm.length, r.rate);
          b.copyToChannel(r.pcm as Float32Array<ArrayBuffer>, 0);
          resolve(b);
        } catch {
          resolve(null);
        }
      });
      w.postMessage({ type: "say", id, text, voice: KOKORO_VOICE, gen: this.gen });
    });
    this.cache.set(text, p);
    if (this.cache.size > 60) this.cache.delete(this.cache.keys().next().value as string);
    return p;
  }

  /** Synthesise ahead of time (call as soon as a step arrives from the stream). */
  prefetch(text: string, lang: string) {
    if (!this.useKokoro(text, lang)) return;
    for (const s of sentences(text)) void this.synth(speakable(s));
  }

  /** Speak text; resolves when finished or stopped. */
  async speak(text: string, lang: string, onSentence?: (s: string) => void): Promise<void> {
    const my = this.gen;
    const list = sentences(text);
    if (this.useKokoro(text, lang)) list.forEach((s) => void this.synth(speakable(s)));
    for (const s of list) {
      if (my !== this.gen) return;
      onSentence?.(s);
      let done = false;
      if (this.useKokoro(s, lang)) {
        const buf = await Promise.race([this.synth(speakable(s)), new Promise<null>((r) => setTimeout(() => r(null), 6000))]);
        if (my !== this.gen) return;
        if (buf) {
          await this.play(buf);
          done = true;
        }
      }
      if (!done) await this.device(s, lang, my);
    }
  }

  private play(buf: AudioBuffer) {
    return new Promise<void>((resolve) => {
      const ctx = this.ctx!;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(this.analyser!);
      this.source = src;
      this.speaking = true;
      let settled = false;
      const end = () => {
        if (settled) return;
        settled = true;
        if (this.source === src) {
          this.source = null;
          this.speaking = false;
        }
        resolve();
      };
      src.onended = end;
      // Safety net in case `ended` never fires (suspended context on some phones).
      setTimeout(end, buf.duration * 1000 + 1500);
      try {
        src.start();
      } catch {
        end();
      }
    });
  }

  private device(text: string, lang: string, my: number) {
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return resolve();
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = lang.startsWith("en") ? 1 : 0.95;
      u.voice = pickVoice(synth.getVoices(), lang);
      this.deviceOn = true;
      this.speaking = true;
      let settled = false;
      const end = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (my === this.gen) {
          this.deviceOn = false;
          this.speaking = false;
        }
        resolve();
      };
      const timer = setTimeout(end, Math.max(2500, text.split(/\s+/).length * 520 + 2500));
      u.onend = end;
      u.onerror = end;
      try {
        synth.speak(u);
      } catch {
        end();
      }
    });
  }

  /** Stop talking now (barge-in). Queued synthesis is cancelled too. */
  stop() {
    this.gen++;
    this.worker?.postMessage({ type: "cancel", gen: this.gen - 1 });
    this.cache.clear();
    try {
      this.source?.stop();
    } catch {
      /* already stopped */
    }
    this.source = null;
    if (this.deviceOn && typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    this.deviceOn = false;
    this.speaking = false;
  }

  /** Output loudness 0..1 for the waveform. */
  level(): number {
    if (!this.speaking) return 0;
    if (this.source && this.analyser) {
      this.buf ??= new Uint8Array(this.analyser.fftSize);
      this.analyser.getByteTimeDomainData(this.buf);
      let sum = 0;
      for (let i = 0; i < this.buf.length; i++) {
        const v = (this.buf[i] - 128) / 128;
        sum += v * v;
      }
      return Math.min(1, Math.sqrt(sum / this.buf.length) * 4);
    }
    // Device voices give no audio stream: a gentle synthetic pulse.
    const t = performance.now() / 1000;
    return 0.35 + 0.25 * Math.abs(Math.sin(t * 7.3) * Math.sin(t * 2.1));
  }
}

function pickVoice(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | null {
  const norm = (l: string) => l.replace("_", "-").toLowerCase();
  const want = lang.toLowerCase();
  const base = want.split("-")[0];
  const exact = voices.filter((v) => norm(v.lang) === want);
  const rank = (v: SpeechSynthesisVoice) => (/natural|neural|online|google/i.test(v.name) ? 2 : 0) + (/female|heera|kalpana|swara|veena|lekha|sapna/i.test(v.name) ? 1 : 0);
  const best = (l: SpeechSynthesisVoice[]) => l.slice().sort((a, b) => rank(b) - rank(a))[0];
  if (exact.length) return best(exact);
  if (base === "en") {
    const gb = voices.filter((v) => /^en[-_](gb|in)/i.test(v.lang));
    if (gb.length) return best(gb);
  }
  const same = voices.filter((v) => norm(v.lang).startsWith(base));
  return same.length ? best(same) : null;
}

let instance: Speaker | null = null;
export function speaker(): Speaker {
  instance ??= new Speaker();
  return instance;
}
