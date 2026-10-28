"use client";

/**
 * The live tutor's voice.
 *
 * 1. Kokoro-82M running in the browser (kokoro-js + ONNX Runtime WASM, self-hosted
 *    in /public/kokoro, in a module worker; the ~92 MB q8 model is kept in Cache
 *    Storage after the first load). Voice "hf_alpha" — Kokoro's Hindi female voice — speaking
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
/** The big file; transformers.js keeps it in Cache Storage under this URL. */
const MODEL_URL = `https://huggingface.co/${MODEL}/resolve/main/onnx/model_quantized.onnx`;
/** Rough size of a first download (model + tokenizer + voice), for the loader before real totals arrive. */
export const MODEL_MB = 92;

export type VoiceStage = "idle" | "download" | "warmup" | "ready" | "device";

export interface VoiceSnapshot {
  status: VoiceEngineStatus;
  stage: VoiceStage;
  /** 0..100 */
  progress: number;
  loaded: number;
  total: number;
  /** Model already in Cache Storage (second visit: no download). */
  cached: boolean | null;
  /** Why the device voice is being used, if it is. */
  reason: string | null;
}

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
    if (p.split(" ").length > 20) out.push(...p.split(/(?<=[,;:])\s+/));
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

type Listener = (v: VoiceSnapshot) => void;

class Speaker {
  status: VoiceEngineStatus = "off";
  stage: VoiceStage = "idle";
  progress = 0;
  loaded = 0;
  total = 0;
  cached: boolean | null = null;
  reason: string | null = null;
  speaking = false;
  /** While true, the tutor waits for the model before it starts a lesson (set by the full-screen loader). */
  hold = false;
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
  private waiters: (() => void)[] = [];

  snapshot(): VoiceSnapshot {
    return { status: this.status, stage: this.stage, progress: this.progress, loaded: this.loaded, total: this.total, cached: this.cached, reason: this.reason };
  }
  subscribe(fn: Listener) {
    this.listeners.add(fn);
    fn(this.snapshot());
    return () => void this.listeners.delete(fn);
  }
  private emit() {
    const v = this.snapshot();
    this.listeners.forEach((l) => l(v));
    if (this.status !== "loading") this.waiters.splice(0).forEach((w) => w());
  }
  private set(s: VoiceEngineStatus, progress = this.progress) {
    this.status = s;
    this.progress = progress;
    if (s === "ready") this.stage = "ready";
    this.emit();
  }

  /** Resolves once the model is ready or the device voice has been chosen. */
  settled(): Promise<void> {
    if (this.status !== "loading") return Promise.resolve();
    return new Promise((r) => this.waiters.push(r));
  }

  /** Whether this device should try the in-browser model at all (null = yes, else the reason). */
  private incapable(): string | null {
    if (typeof window === "undefined") return "server";
    if (typeof Worker === "undefined") return "Web Workers are not available";
    if (typeof AudioContext === "undefined") return "Web Audio is not available";
    if (typeof WebAssembly === "undefined") return "WebAssembly is not available";
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) return "Data Saver is on";
    if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return `low-memory device (${nav.deviceMemory} GB)`;
    return null;
  }
  capable() {
    return this.incapable() === null;
  }

  /** Is the model already saved in this browser? */
  private async checkCache() {
    try {
      if (typeof caches === "undefined") return (this.cached = false);
      const c = await caches.open("transformers-cache");
      this.cached = Boolean(await c.match(MODEL_URL));
    } catch {
      this.cached = false;
    }
    this.emit();
    // Ask the browser not to evict the ~92 MB model under storage pressure.
    if (!this.cached) void navigator.storage?.persist?.().catch(() => false);
  }

  /** Start downloading/compiling the model in the background (safe to call repeatedly). */
  preload() {
    if (this.worker || this.status === "unavailable") return;
    const why = this.incapable();
    if (why) return this.fail(why);
    try {
      this.worker = new Worker("/kokoro/tts-worker.js", { type: "module" });
    } catch (e) {
      return this.fail(`could not start the voice worker: ${String(e)}`);
    }
    this.worker.onerror = (e) => {
      e.preventDefault();
      this.fail(`voice worker crashed: ${e.message || "script error"}`);
    };
    this.worker.onmessage = (e: MessageEvent) => {
      const d = e.data as { type: string; id?: number; stage?: VoiceStage; loaded?: number; total?: number; pcm?: Float32Array; rate?: number; error?: string; text?: string; skipped?: boolean };
      if (d.type === "progress" && this.status === "loading") {
        this.loaded = d.loaded ?? 0;
        this.total = d.total ?? 0;
        this.progress = this.total ? Math.min(100, Math.round((this.loaded / this.total) * 100)) : 0;
        this.emit();
      } else if (d.type === "stage" && this.status === "loading") {
        this.stage = d.stage ?? this.stage;
        if (this.stage === "warmup") this.progress = 100;
        this.emit();
      } else if (d.type === "log") console.info("[Questy voice]", d.text);
      else if (d.type === "ready") {
        console.info("[Questy voice] Kokoro ready (voice %s)", KOKORO_VOICE);
        this.set("ready", 100);
      } else if (d.type === "failed") this.fail(`Kokoro failed to load: ${d.error}`);
      else if (d.type === "audio" && d.id) {
        const res = this.pending.get(d.id);
        this.pending.delete(d.id);
        if (d.error) {
          console.warn("[Questy voice] Kokoro could not speak a sentence:", d.error);
          if (++this.failures >= 3) this.fail(`Kokoro failed 3 times: ${d.error}`);
        }
        res?.(d.pcm ? { pcm: d.pcm, rate: d.rate } : null);
      }
    };
    this.stage = "download";
    this.set("loading", 0);
    void this.checkCache();
    this.worker.postMessage({ type: "load", model: MODEL, voice: KOKORO_VOICE });
  }

  /** Give up on Kokoro for this visit and use the device voice ("Continue with device voice"). */
  useDevice() {
    if (this.status === "unavailable") return;
    this.fail("you chose the device voice", true);
  }

  private fail(reason: string, chosen = false) {
    if (chosen) console.info("[Questy voice] Using device voice:", reason);
    else console.warn("[Questy voice] Using device voice:", reason);
    this.reason = reason;
    this.stage = "device";
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
        // Single-threaded WASM can take a few seconds for a long sentence; don't jump to the robotic voice too soon.
        const buf = await Promise.race([this.synth(speakable(s)), new Promise<null>((r) => setTimeout(() => r(null), 20000))]);
        if (my !== this.gen) return;
        if (!buf) console.warn("[Questy voice] Kokoro gave no audio for a sentence; using the device voice for it.");
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
      if (ctx.state === "suspended") void ctx.resume().catch(() => {});
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
