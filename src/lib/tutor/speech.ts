"use client";

import { dataSaverOn } from "@/lib/dataSaver";
import { capped, onCapChange, sarvamLang, sarvamTts, voiceConfig, voiceGender, setVoiceGender, type VoiceGender } from "./sarvam-client";

/**
 * The live tutor's voice.
 *
 * 0. Sarvam AI (Bulbul) on the server, when GET /api/voice/config says it is configured: a native Indian
 *    teacher voice in English, Hindi, Kannada and more, fast on any phone. The Kokoro download is skipped
 *    entirely. Sentence N+1 is synthesised while N plays; clips are cached (memory + Cache Storage). Two
 *    failures in a row, or the learner's daily allowance running out, fall back to 1 → 2.
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

export type VoiceStage = "idle" | "connect" | "download" | "warmup" | "ready" | "device";
export type VoiceEngine = "sarvam" | "kokoro" | "device" | null;

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
  /** Kokoro worked earlier this session and then failed (show a notice). */
  lost: boolean;
  /** Which natural voice is (or will be) speaking. */
  engine: VoiceEngine;
  /** Today's server-voice allowance is used up (gentle note; on-device voice meanwhile). */
  capped: boolean;
  /** Server-voice teacher: female / male. */
  gender: VoiceGender;
}

const INDIC = /[ऀ-෿]/;

/** Longest chunk sent to Kokoro in one call (short chunks start sooner and stay far below its 510-token limit). */
const MAX_CHARS = 200;

/** Split one over-long sentence at clause boundaries, then at word boundaries, into chunks of at most MAX_CHARS. */
function clauses(p: string): string[] {
  if (p.length <= MAX_CHARS && p.split(" ").length <= 24) return [p];
  const out: string[] = [];
  let cur = "";
  const push = () => {
    if (cur.trim()) out.push(cur.trim());
    cur = "";
  };
  for (const part of p.split(/(?<=[,;:\u2014)])\s+/)) {
    if (part.length > MAX_CHARS) {
      push();
      for (const w of part.split(" ")) {
        if (cur && cur.length + w.length + 1 > MAX_CHARS) push();
        cur = cur ? `${cur} ${w}` : w;
      }
      push();
    } else if (cur && (cur.length + part.length + 1 > MAX_CHARS || cur.split(" ").length >= 12)) {
      push();
      cur = part;
    } else cur = cur ? `${cur} ${part}` : part;
  }
  push();
  return out;
}

/** Split narration into speakable chunks: sentences, and long sentences at clause boundaries (each at most 200 chars). */
export function sentences(text: string): string[] {
  const parts = text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?\u0964\u0965])\s+(?=\S)/);
  return parts.flatMap(clauses).filter((s) => /[\p{L}\p{N}]/u.test(s));
}

/** Text → what Kokoro's phonemiser can read: markdown, LaTeX, math symbols and emoji become plain spoken words. */
export function speakable(s: string) {
  return s
    .replace(/\\[()[\]]/g, " ")
    .replace(/\\(left|right)\b/g, "")
    .replace(/\\d?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, " $1 over $2 ")
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, " the square root of $1 ")
    .replace(/\\(times|cdot)\b/g, " times ")
    .replace(/\\div\b/g, " divided by ")
    .replace(/\\pm\b/g, " plus or minus ")
    .replace(/\\leq?\b/g, " less than or equal to ")
    .replace(/\\geq?\b/g, " greater than or equal to ")
    .replace(/\\neq?\b/g, " not equal to ")
    .replace(/\\approx\b/g, " approximately ")
    .replace(/\\(rightarrow|to|implies|Rightarrow)\b/g, " gives ")
    .replace(/\\(text|mathrm|mathbf|operatorname)\s*\{([^{}]*)\}/g, " $2 ")
    .replace(/\\([a-zA-Z]+)/g, " $1 ")
    .replace(/\u00d7/g, " times ")
    .replace(/\u00f7/g, " divided by ")
    .replace(/\u00b1/g, " plus or minus ")
    .replace(/\u2264/g, " less than or equal to ")
    .replace(/\u2265/g, " greater than or equal to ")
    .replace(/\u2260/g, " not equal to ")
    .replace(/\u2248/g, " approximately ")
    .replace(/[\u2192\u21d2]/g, " gives ")
    .replace(/\u221a\s*\(?([\w.]+)\)?/g, " the square root of $1 ")
    .replace(/\u03c0/g, " pi ")
    .replace(/\u03b8/g, " theta ")
    .replace(/\u00b0/g, " degrees ")
    .replace(/%/g, " percent ")
    .replace(/\u00b2/g, " squared ")
    .replace(/\u00b3/g, " cubed ")
    .replace(/\^\s*\{?2\}?(?!\d)/g, " squared ")
    .replace(/\^\s*\{?3\}?(?!\d)/g, " cubed ")
    .replace(/\^\s*\{?(-?[\w.]+)\}?/g, " to the power $1 ")
    .replace(/(\d)\s*\/\s*(?=\d)/g, "$1 over ")
    .replace(/(\w)\s*\u2212\s*(?=\w)/g, "$1 minus ")
    .replace(/(\w)\s+-\s+(?=\w)/g, "$1 minus ")
    .replace(/(\w)\s*\+\s*(?=\w)/g, "$1 plus ")
    .replace(/\s+<\s+/g, " is less than ")
    .replace(/\s+>\s+/g, " is greater than ")
    .replace(/\s*=\s*/g, " equals ")
    .replace(/[{}[\]_*`#$\\|~^<>]/g, " ")
    .replace(/[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}\uFE0F\u200D\u20E3]/gu, "")
    .replace(/\s+([,.!?;:])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Worker reply for one chunk. */
type Reply = { pcm?: Float32Array; rate?: number; error?: string; skipped?: boolean; ms?: number };
type Synth = { buf: AudioBuffer; ms: number; cached?: boolean } | { error: string; stuck?: boolean; capped?: boolean } | { skipped: true };
/** No reply from a busy worker for this long = it is stuck (a normal 200-char chunk takes a few seconds). */
const STUCK_MS = 60000;

type Listener = (v: VoiceSnapshot) => void;

class Speaker {
  status: VoiceEngineStatus = "off";
  stage: VoiceStage = "idle";
  progress = 0;
  loaded = 0;
  total = 0;
  cached: boolean | null = null;
  reason: string | null = null;
  /** Kokoro was working this session and then hard-failed (the UI shows a notice). */
  lost = false;
  speaking = false;
  /** While true, the tutor waits for the model before it starts a lesson (set by the full-screen loader). */
  hold = false;
  /** Device-voice speaking rate multiplier (board lesson speed control); Kokoro always speaks at its natural pace. */
  rate = 1;
  private worker: Worker | null = null;
  private seq = 0;
  private gen = 1;
  private pending = new Map<number, (r: Reply) => void>();
  private cache = new Map<string, Promise<Synth>>();
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: AudioBufferSourceNode | null = null;
  private deviceOn = false;
  private listeners = new Set<Listener>();
  private buf: Uint8Array<ArrayBuffer> | null = null;
  /** Kokoro hard failures in a row (any success resets it); 2 → device voice for the rest of the session. */
  private failures = 0;
  /** Last time the worker answered (or was handed work while idle): detects a stuck worker. */
  private lastProgress = 0;
  private respawns = 0;
  private waiters: (() => void)[] = [];
  /** Server voice (Sarvam): unknown until /api/voice/config answers. */
  private sarvam: "unknown" | "checking" | "on" | "off" = "unknown";
  engine: VoiceEngine = null;
  private sFailures = 0;
  gender: VoiceGender = typeof window === "undefined" ? "female" : voiceGender();

  constructor() {
    if (typeof window !== "undefined") onCapChange(() => capped.tts && this.engine === "sarvam" && this.dropSarvam("today's natural-voice allowance is used up"));
  }

  /** Female / male teacher voice (server voice only). */
  setGender(g: VoiceGender) {
    this.gender = g;
    setVoiceGender(g);
    this.cache.clear();
    this.emit();
  }

  snapshot(): VoiceSnapshot {
    return { status: this.status, stage: this.stage, progress: this.progress, loaded: this.loaded, total: this.total, cached: this.cached, reason: this.reason, lost: this.lost, engine: this.engine, capped: capped.tts, gender: this.gender };
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
    if (s === "ready" && this.engine !== "sarvam") this.engine = "kokoro";
    if (s === "unavailable") this.engine = "device";
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
    // The server voice works on any phone; while its config is pending, assume it will.
    return this.sarvam === "on" || this.sarvam === "checking" || this.incapable() === null;
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

  /** Start the voice (safe to call repeatedly): the server voice if configured, else download/compile Kokoro in the background. */
  preload() {
    if (typeof window === "undefined") return;
    if (this.sarvam === "unknown") {
      this.sarvam = "checking";
      this.stage = "connect";
      this.set("loading", 0);
      const t0 = performance.now();
      void voiceConfig().then((c) => {
        if (c.tts && !capped.tts) {
          this.sarvam = "on";
          this.engine = "sarvam";
          this.reason = null;
          console.info(`[voice] engine=sarvam (server voice, ${Math.round(performance.now() - t0)}ms): skipping the Kokoro download`);
          this.set("ready", 100);
        } else {
          this.sarvam = "off";
          this.engine = null;
          this.stage = "idle";
          this.set("off", 0);
          this.preload();
        }
      });
      return;
    }
    if (this.sarvam !== "off") return;
    if (this.worker || this.status === "unavailable") return;
    // Data saver: don't fetch the ~92 MB model just in case; it loads when the voice is actually used.
    if (dataSaverOn() && !this.cached) return;
    const why = this.incapable();
    if (why) return this.fail(why);
    if (!this.spawn()) return;
    this.stage = "download";
    this.set("loading", 0);
    void this.checkCache();
  }

  /** One Kokoro worker; every generate() goes through its single serial queue. */
  private spawn(): boolean {
    let w: Worker;
    try {
      w = new Worker("/kokoro/tts-worker.js", { type: "module" });
    } catch (e) {
      this.fail(`could not start the voice worker: ${String(e)}`);
      return false;
    }
    this.worker = w;
    w.onerror = (e) => {
      e.preventDefault();
      if (this.worker !== w) return;
      const why = `voice worker crashed: ${e.message || "script error"}`;
      // Mid-session: restart it once (the model loads from Cache Storage) instead of dropping to the device voice.
      if (this.status === "ready" && this.respawns < 2) this.respawn(why);
      else this.fail(why);
    };
    w.onmessage = (e: MessageEvent) => {
      if (this.worker !== w) return;
      const d = e.data as Reply & { type: string; id?: number; stage?: VoiceStage; loaded?: number; total?: number; text?: string };
      if (d.type === "progress" && this.status === "loading") {
        this.loaded = d.loaded ?? 0;
        this.total = d.total ?? 0;
        this.progress = this.total ? Math.min(100, Math.round((this.loaded / this.total) * 100)) : 0;
        this.emit();
      } else if (d.type === "stage" && this.status === "loading") {
        this.stage = d.stage ?? this.stage;
        if (this.stage === "warmup") this.progress = 100;
        this.emit();
      } else if (d.type === "log") console.info("[voice]", d.text);
      else if (d.type === "ready") {
        this.lastProgress = performance.now();
        if (this.status !== "ready") {
          console.info("[voice] Kokoro ready (voice %s)", KOKORO_VOICE);
          this.set("ready", 100);
        }
      } else if (d.type === "failed") this.fail(`Kokoro failed to load: ${d.error}`);
      else if (d.type === "audio" && d.id) {
        this.lastProgress = performance.now();
        const res = this.pending.get(d.id);
        this.pending.delete(d.id);
        res?.(d);
      }
    };
    w.postMessage({ type: "load", model: MODEL, voice: KOKORO_VOICE });
    return true;
  }

  /** Replace a crashed/stuck worker; queued chunks are failed so the speaker retries them on the new one. */
  private respawn(why: string) {
    console.warn("[voice] restarting the Kokoro worker:", why);
    this.respawns++;
    this.worker?.terminate();
    this.worker = null;
    this.pending.forEach((r) => r({ error: why }));
    this.pending.clear();
    this.cache.clear();
    this.spawn();
  }

  /** Give up on Kokoro for this visit and use the device voice ("Continue with device voice"). */
  useDevice() {
    if (this.status === "unavailable") return;
    this.fail("you chose the device voice", true);
  }

  private fail(reason: string, chosen = false) {
    if (chosen) console.info("[voice] Using device voice:", reason);
    else console.warn("[voice] Using device voice:", reason);
    if (this.status === "ready" && !chosen) this.lost = true;
    this.reason = reason;
    this.stage = "device";
    this.worker?.terminate();
    this.worker = null;
    this.pending.forEach((r) => r({ error: reason }));
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

  /** Server voice gave up (two failures in a row, or today's allowance): Kokoro in the background, device voice meanwhile. */
  private dropSarvam(why: string) {
    if (this.engine !== "sarvam") return;
    console.warn("[voice] leaving the server voice:", why);
    this.sarvam = "off";
    this.engine = null;
    this.reason = why;
    if (!capped.tts) this.lost = true;
    this.cache.clear();
    // Mid-lesson: never make the learner wait for a 92 MB download.
    this.hold = false;
    this.status = "off";
    this.stage = "idle";
    this.preload();
    if (this.status === "off") this.set("unavailable");
    else this.emit();
  }

  private useSarvam(lang: string) {
    return this.engine === "sarvam" && this.status === "ready" && !capped.tts && sarvamLang(lang) && Boolean(this.ctx);
  }

  /** One sentence from the server voice, decoded for Web Audio (shares the per-turn cache with prefetch). */
  private sarvamSynth(text: string, lang: string): Promise<Synth> {
    const k = `s|${lang}|${this.gender}|${this.rate}|${text}`;
    const hit = this.cache.get(k);
    if (hit) return hit;
    const ctx = this.ctx;
    if (!ctx) return Promise.resolve({ error: "no audio context" });
    const p = sarvamTts(text, lang, { gender: this.gender, pace: this.rate }).then(async (r): Promise<Synth> => {
      if ("error" in r) return { error: r.error, capped: r.capped };
      try {
        // decodeAudioData detaches its input: decode a copy so the cached bytes stay usable.
        const buf = await ctx.decodeAudioData(r.wav.slice(0));
        return { buf, ms: r.ms, cached: r.cached };
      } catch (e) {
        return { error: `bad audio: ${String(e)}` };
      }
    });
    this.cache.set(k, p);
    void p.then((r) => !("buf" in r) && this.cache.get(k) === p && this.cache.delete(k));
    if (this.cache.size > 80) this.cache.delete(this.cache.keys().next().value as string);
    return p;
  }

  private useKokoro(text: string, lang: string) {
    return this.engine === "kokoro" && this.status === "ready" && lang.startsWith("en") && !INDIC.test(text) && Boolean(this.ctx);
  }

  /** Queue one chunk on the worker (cached by text, so prefetch + speak share one generate() call). */
  private synth(text: string, urgent = false): Promise<Synth> {
    const hit = this.cache.get(text);
    if (hit) return hit;
    const w = this.worker;
    const ctx = this.ctx;
    if (!w || !ctx) return Promise.resolve({ error: "voice worker not running" });
    const id = ++this.seq;
    if (!this.pending.size) this.lastProgress = performance.now();
    const p = new Promise<Synth>((resolve) => {
      this.pending.set(id, (r) => {
        if (r.skipped) return resolve({ skipped: true });
        if (!r.pcm?.length || !r.rate) return resolve({ error: r.error || "no audio" });
        try {
          const b = ctx.createBuffer(1, r.pcm.length, r.rate);
          b.copyToChannel(r.pcm as Float32Array<ArrayBuffer>, 0);
          resolve({ buf: b, ms: r.ms ?? 0 });
        } catch (e) {
          resolve({ error: `bad audio: ${String(e)}` });
        }
      });
      w.postMessage({ type: "say", id, text, voice: KOKORO_VOICE, gen: this.gen, urgent });
    });
    this.cache.set(text, p);
    // Never keep a failed/skipped result: the next request must really retry.
    void p.then((r) => !("buf" in r) && this.cache.get(text) === p && this.cache.delete(text));
    if (this.cache.size > 80) this.cache.delete(this.cache.keys().next().value as string);
    return p;
  }

  /** Wait for a chunk however long it takes, unless the turn is stopped or the worker is stuck. */
  private waitFor(p: Promise<Synth>, my: number): Promise<Synth> {
    let iv: ReturnType<typeof setInterval> | undefined;
    const watch = new Promise<Synth>((resolve) => {
      iv = setInterval(() => {
        if (my !== this.gen) resolve({ skipped: true });
        else if (this.pending.size && performance.now() - this.lastProgress > STUCK_MS) resolve({ error: `no reply from Kokoro for ${STUCK_MS / 1000}s`, stuck: true });
      }, 500);
    });
    return Promise.race([p, watch]).finally(() => clearInterval(iv));
  }

  /** Synthesise ahead of time (call as soon as a step arrives from the stream). */
  prefetch(text: string, lang: string) {
    if (this.useSarvam(lang)) {
      // Only the first two sentences: the rest are fetched one ahead while speaking (no wasted cost on barge-in).
      for (const s of sentences(text).slice(0, 2)) {
        const t = speakable(s);
        if (/[\p{L}\p{N}]/u.test(t)) void this.sarvamSynth(t, lang);
      }
      return;
    }
    if (!this.useKokoro(text, lang)) return;
    for (const s of sentences(text)) {
      const t = speakable(s);
      if (/[\p{L}\p{N}]/u.test(t)) void this.synth(t);
    }
  }

  /**
   * Speak text; resolves when finished or stopped. Once Kokoro is ready every chunk is spoken by Kokoro:
   * all chunks are queued at once (the worker runs them one by one), so chunk N+1 is synthesised while N
   * plays; a slow chunk is simply waited for. Only two hard failures in a row switch to the device voice,
   * and then for the rest of the session.
   */
  async speak(text: string, lang: string, onSentence?: (s: string) => void): Promise<void> {
    const my = this.gen;
    // The server-voice check is a single small request: wait for it rather than start in the device voice.
    if (this.sarvam === "checking") await Promise.race([voiceConfig(), new Promise((r) => setTimeout(r, 2500))]);
    if (my !== this.gen) return;
    const list = sentences(text);
    if (this.useKokoro(text, lang)) this.prefetch(text, lang);
    for (let i = 0; i < list.length; i++) {
      const s = list[i];
      if (my !== this.gen) return;
      onSentence?.(s);
      const tag = `chunk ${i + 1}/${list.length}`;
      if (this.useSarvam(lang)) {
        const t = speakable(s);
        if (!/[\p{L}\p{N}]/u.test(t)) continue;
        const t0 = performance.now();
        const p = this.sarvamSynth(t, lang);
        // Pipelining: synthesise sentence N+1 while N is fetched/played.
        const next = list[i + 1] && speakable(list[i + 1]);
        if (next && /[\p{L}\p{N}]/u.test(next)) void this.sarvamSynth(next, lang);
        const r = await this.waitFor(p, my);
        if (my !== this.gen) return;
        if ("buf" in r) {
          this.sFailures = 0;
          console.info(`[voice] ${tag} engine=sarvam ms=${r.ms}${r.cached ? " (cached)" : ""} wait=${Math.round(performance.now() - t0)}ms audio=${Math.round(r.buf.duration * 1000)}ms "${t.slice(0, 60)}"`);
          await this.play(r.buf);
          continue;
        }
        if ("skipped" in r) return;
        console.warn(`[voice] ${tag} sarvam error: ${r.error}`);
        if (r.capped) this.dropSarvam("today's natural-voice allowance is used up");
        else if (++this.sFailures >= 2) this.dropSarvam(`the server voice failed twice in a row (${r.error})`);
        // This sentence: the device voice (below).
      }
      if (this.useKokoro(s, lang)) {
        const t = speakable(s);
        if (!/[\p{L}\p{N}]/u.test(t)) continue;
        const t0 = performance.now();
        let r = await this.waitFor(this.synth(t), my);
        while ("error" in r && this.status === "ready") {
          if (my !== this.gen) return;
          this.failures++;
          console.warn(`[voice] ${tag} kokoro error #${this.failures}: ${r.error}`);
          if (this.failures >= 2) {
            this.fail(`Kokoro failed twice in a row (${r.error})`);
            break;
          }
          if (r.stuck) this.respawn(r.error);
          this.cache.delete(t);
          r = await this.waitFor(this.synth(t, true), my);
        }
        if (my !== this.gen) return;
        if ("buf" in r) {
          this.failures = 0;
          console.info(`[voice] ${tag} engine=kokoro synth=${r.ms}ms wait=${Math.round(performance.now() - t0)}ms audio=${Math.round(r.buf.duration * 1000)}ms "${t.slice(0, 60)}"`);
          await this.play(r.buf);
          continue;
        }
        // Stopped mid-wait (barge-in) or Kokoro has just been given up on: fall through.
        if ("skipped" in r) return;
      }
      if (my !== this.gen) return;
      const t0 = performance.now();
      await this.device(s, lang, my);
      console.info(`[voice] ${tag} engine=device ms=${Math.round(performance.now() - t0)} reason=${this.status === "ready" ? `lang ${lang}` : this.reason ?? this.status}`);
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
        clearTimeout(timer);
        if (this.source === src) {
          this.source = null;
          this.speaking = false;
        }
        resolve();
      };
      src.onended = end;
      // Safety net in case `ended` never fires (suspended context on some phones).
      const timer = setTimeout(end, buf.duration * 1000 + 1500);
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
      u.rate = (lang.startsWith("en") ? 1 : 0.95) * this.rate;
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
      const timer = setTimeout(end, Math.max(2500, (text.split(/\s+/).length * 520) / this.rate + 2500));
      u.onend = end;
      u.onerror = end;
      try {
        synth.speak(u);
      } catch {
        end();
      }
    });
  }

  /** Stop talking now (barge-in). Queued synthesis is cancelled too; Kokoro stays loaded for the next turn. */
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
