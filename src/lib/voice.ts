"use client";

/**
 * Questy's voice (Kokoro, af_heart).
 *
 * 1. Pre-rendered clip: /voice/<hash>.mp3, listed in /voice/manifest.json
 *    (produced by `npm run generate-voice`). Instant and works offline.
 * 2. Live Kokoro in the browser (kokoro-js in a worker, ~90 MB model, cached by
 *    the browser) for text without a clip — only on capable devices.
 * 3. The device's built-in speech voice.
 */

export const VOICE_ID = "af_heart";

/** Normalise text so the same sentence always maps to the same clip. */
export function voiceKey(text: string) {
  const t = text.replace(/\s+/g, " ").trim();
  let h = 2166136261;
  for (let i = 0; i < t.length; i++) h = Math.imul(h ^ t.charCodeAt(i), 16777619);
  return (h >>> 0).toString(16).padStart(8, "0") + t.length.toString(16);
}

let manifest: Set<string> | null = null;
let manifestPromise: Promise<Set<string>> | null = null;

function loadManifest() {
  manifestPromise ??= fetch("/voice/manifest.json")
    .then((r) => (r.ok ? r.json() : { keys: [] }))
    .then((m: { keys: string[] }) => (manifest = new Set(m.keys)))
    .catch(() => (manifest = new Set()));
  return manifestPromise;
}

let current: HTMLAudioElement | null = null;
let token = 0;

export function stopVoice() {
  token++;
  current?.pause();
  current = null;
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

function device(text: string, opts: SayOptions) {
  if (!("speechSynthesis" in window)) return opts.onEnd?.();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = opts.rate ?? 1;
  u.pitch = opts.pitch ?? 1.05;
  const voices = window.speechSynthesis.getVoices();
  if (opts.lang) {
    // Indian-language text: the device's voice for that language (Kokoro speaks English only).
    u.lang = opts.lang;
    const base = opts.lang.split("-")[0];
    const match = voices.find((v) => v.lang.replace("_", "-") === opts.lang) ?? voices.find((v) => v.lang.toLowerCase().startsWith(base));
    if (match) u.voice = match;
  } else {
    const female = voices.find((v) => /en(-|_)(US|GB|IN)/i.test(v.lang) && /female|samantha|zira|aria|jenny|google us english/i.test(v.name));
    if (female) u.voice = female;
  }
  u.onend = () => opts.onEnd?.();
  window.speechSynthesis.speak(u);
}

function playUrl(url: string, my: number, opts: SayOptions, onFail: () => void) {
  const a = new Audio(url);
  current = a;
  a.onended = () => my === token && opts.onEnd?.();
  a.onerror = () => my === token && onFail();
  a.play().catch(() => my === token && onFail());
}

/* ---------------- live Kokoro (lazy, in a module worker) ---------------- */

// kokoro-js + ONNX Runtime wasm are self-hosted in /public/kokoro (see tts-worker.js there).
const workerSource = (origin: string) => `
const { KokoroTTS, env } = await import("${origin}/kokoro/kokoro-1.2.1.web.js");
env.wasmPaths = "${origin}/kokoro/";
let tts = null;
self.onmessage = async (e) => {
  const { id, text, voice } = e.data;
  try {
    tts ??= await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", { dtype: "q8", device: "wasm" });
    const audio = await tts.generate(text, { voice });
    self.postMessage({ id, ok: true, wav: audio.toWav() });
  } catch (err) {
    self.postMessage({ id, ok: false, error: String(err && err.message || err) });
  }
};
`;

let worker: Worker | null = null;
let liveBroken = false;
let seq = 0;
const liveCache = new Map<string, string>();

export function liveVoiceSupported() {
  if (typeof window === "undefined" || liveBroken || typeof Worker === "undefined") return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
  return true;
}

function live(text: string): Promise<string> {
  const k = voiceKey(text);
  const hit = liveCache.get(k);
  if (hit) return Promise.resolve(hit);
  worker ??= new Worker(URL.createObjectURL(new Blob([workerSource(location.origin)], { type: "text/javascript" })), { type: "module" });
  const id = ++seq;
  return new Promise((resolve, reject) => {
    const onMsg = (e: MessageEvent) => {
      if (e.data?.id !== id) return;
      worker!.removeEventListener("message", onMsg);
      if (!e.data.ok) {
        console.warn("[Questy voice] Kokoro unavailable, using device voice:", e.data.error);
        liveBroken = true;
        return reject(new Error(e.data.error));
      }
      const url = URL.createObjectURL(new Blob([e.data.wav], { type: "audio/wav" }));
      liveCache.set(k, url);
      resolve(url);
    };
    worker!.addEventListener("message", onMsg);
    worker!.postMessage({ id, text, voice: VOICE_ID });
  });
}

/** Warm up the live model in the background (call when entering Explore). */
export function preloadLiveVoice() {
  void loadManifest();
  if (liveVoiceSupported()) live("Hi!").catch(() => {});
}

export interface SayOptions {
  rate?: number;
  pitch?: number;
  onEnd?: () => void;
  /** Allow the live Kokoro model for text without a clip (default true). */
  allowLive?: boolean;
  /** BCP-47 language of the text; set automatically for Indian scripts. */
  lang?: string;
}

/** Language of text written in an Indian script, or null for Latin text. */
const SCRIPTS: [RegExp, string][] = [
  [/[\u0900-\u097F]/, "hi-IN"],
  [/[\u0980-\u09FF]/, "bn-IN"],
  [/[\u0B80-\u0BFF]/, "ta-IN"],
  [/[\u0C00-\u0C7F]/, "te-IN"],
  [/[\u0C80-\u0CFF]/, "kn-IN"],
];
function scriptLang(text: string) {
  const hit = SCRIPTS.find(([re]) => re.test(text));
  if (!hit) return null;
  // Devanagari is shared by Hindi and Marathi; follow the page language.
  if (hit[1] === "hi-IN" && document.documentElement.lang.startsWith("mr")) return "mr-IN";
  return hit[1];
}

/** Speak text in Questy's voice. Returns immediately; audio plays async. */
export function say(text: string, opts: SayOptions = {}) {
  if (typeof window === "undefined" || !text.trim()) return;
  stopVoice();
  const lang = opts.lang ?? scriptLang(text);
  if (lang) return device(text, { ...opts, lang });
  const my = token;
  const run = async () => {
    const m = manifest ?? (await loadManifest());
    if (my !== token) return;
    const k = voiceKey(text);
    if (m.has(k)) return playUrl(`/voice/${k}.mp3`, my, opts, () => device(text, opts));
    if (opts.allowLive !== false && liveVoiceSupported()) {
      // Don't make the learner wait for a first-time model download: use the
      // device voice if live synthesis takes longer than a few seconds.
      const timer = setTimeout(() => {
        if (my === token) {
          token++;
          device(text, opts);
        }
      }, 3500);
      try {
        const url = await live(text);
        clearTimeout(timer);
        if (my === token) playUrl(url, my, opts, () => device(text, opts));
      } catch {
        clearTimeout(timer);
        if (my === token) device(text, opts);
      }
      return;
    }
    device(text, opts);
  };
  void run();
}

/** Speak several sentences one after another (each can have its own clip). */
export function sayQueue(texts: string[], opts: Omit<SayOptions, "onEnd"> & { onEach?: (i: number) => void; onEnd?: () => void } = {}) {
  const list = texts.filter((t) => t.trim());
  const step = (i: number) => {
    if (i >= list.length) return opts.onEnd?.();
    opts.onEach?.(i);
    const my = token + 1; // say() increments token via stopVoice
    say(list[i], { ...opts, onEnd: () => my === token && step(i + 1) });
  };
  step(0);
}
