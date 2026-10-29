"use client";

import { supabase } from "@/lib/supabase";

/**
 * Browser side of the server voice (Sarvam AI via /api/voice/*): is it configured, TTS clips (in-memory LRU +
 * Cache Storage, so a repeated sentence costs nothing), STT, the learner's voice choice, and the daily-cap state.
 */

export interface VoiceConfig {
  configured: boolean;
  tts: boolean;
  stt: boolean;
  maxChars: number;
  maxSeconds: number;
}

const OFF: VoiceConfig = { configured: false, tts: false, stt: false, maxChars: 500, maxSeconds: 30 };
let cfg: VoiceConfig | null = null;
let cfgP: Promise<VoiceConfig> | null = null;

/** GET /api/voice/config once per visit (fails closed: no Sarvam). */
export function voiceConfig(): Promise<VoiceConfig> {
  if (typeof window === "undefined") return Promise.resolve(OFF);
  cfgP ??= fetch("/api/voice/config")
    .then((r) => (r.ok ? r.json() : OFF))
    .then((j: Partial<VoiceConfig>) => (cfg = { ...OFF, ...j, tts: Boolean(j.configured && j.tts), stt: Boolean(j.configured && j.stt) }))
    .catch(() => (cfg = OFF));
  return cfgP;
}
/** The config if it has already arrived (sync), else null. */
export const voiceConfigNow = () => cfg;

/** Daily allowance used up today (per kind): fall back to on-device voices and show a gentle note. */
export const capped = { tts: false, stt: false };
const capListeners = new Set<() => void>();
export const onCapChange = (fn: () => void) => (capListeners.add(fn), () => void capListeners.delete(fn));
function setCapped(kind: "tts" | "stt") {
  if (capped[kind]) return;
  capped[kind] = true;
  console.info(`[voice] daily ${kind} allowance used: falling back to on-device voice`);
  capListeners.forEach((f) => f());
}

/* ---------------- voice choice ---------------- */

export type VoiceGender = "female" | "male";
const PREF = "qa.voice.gender";
export function voiceGender(): VoiceGender {
  try {
    return localStorage.getItem(PREF) === "male" ? "male" : "female";
  } catch {
    return "female";
  }
}
export function setVoiceGender(g: VoiceGender) {
  try {
    localStorage.setItem(PREF, g);
  } catch {
    /* private mode */
  }
}

/* ---------------- requests ---------------- */

async function authHeaders(): Promise<Record<string, string>> {
  const token = (await supabase()?.auth.getSession().catch(() => null))?.data.session?.access_token;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export type TtsResult = { wav: ArrayBuffer; ms: number; cached: boolean } | { error: string; capped?: boolean };

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return (h >>> 0).toString(16) + s.length.toString(16);
}

const CACHE = "sarvam-tts-v2";
const lru = new Map<string, Promise<TtsResult>>();
const LRU_MAX = 60;

async function fromCacheStorage(key: string): Promise<ArrayBuffer | null> {
  try {
    if (typeof caches === "undefined") return null;
    const r = await (await caches.open(CACHE)).match(`/__voice-cache/${key}`);
    return r ? await r.arrayBuffer() : null;
  } catch {
    return null;
  }
}
function toCacheStorage(key: string, wav: ArrayBuffer) {
  if (typeof caches === "undefined") return;
  void caches
    .open(CACHE)
    .then((c) => c.put(`/__voice-cache/${key}`, new Response(wav.slice(0))))
    .catch(() => {});
}

/** One sentence (≤ 500 chars) → WAV bytes. Identical requests share one fetch and are cached. */
export function sarvamTts(text: string, lang: string, opts: { gender?: VoiceGender; pace?: number } = {}): Promise<TtsResult> {
  const gender = opts.gender ?? voiceGender();
  const pace = Math.round((opts.pace ?? 1) * 100) / 100;
  const key = hash(`${lang}|${gender}|${pace}|${text}`);
  const hit = lru.get(key);
  if (hit) {
    lru.delete(key);
    lru.set(key, hit);
    return hit;
  }
  const p = (async (): Promise<TtsResult> => {
    const t0 = performance.now();
    const stored = await fromCacheStorage(key);
    if (stored) return { wav: stored, ms: Math.round(performance.now() - t0), cached: true };
    if (capped.tts) return { error: "voice_cap", capped: true };
    try {
      const res = await fetch("/api/voice/tts", {
        method: "POST",
        // A stuck request must not hold the lesson: the speaker falls back to the device voice.
        signal: AbortSignal.timeout(7000),
        headers: { "Content-Type": "application/json", ...(await authHeaders()) },
        body: JSON.stringify({ text: text.slice(0, 500), lang, voice: gender, pace }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string; status?: number; detail?: string };
        if (j.detail) console.warn(`[voice] sarvam said (${j.status ?? res.status}): ${j.detail}`);
        if (res.status === 429 && j.error === "voice_cap") {
          setCapped("tts");
          return { error: "voice_cap", capped: true };
        }
        return { error: j.error || `http ${res.status}` };
      }
      const wav = await res.arrayBuffer();
      toCacheStorage(key, wav);
      return { wav, ms: Math.round(performance.now() - t0), cached: false };
    } catch (e) {
      return { error: `network: ${String(e)}` };
    }
  })();
  lru.set(key, p);
  // Never keep a failure: the next request must really retry.
  void p.then((r) => "error" in r && lru.get(key) === p && lru.delete(key));
  while (lru.size > LRU_MAX) lru.delete(lru.keys().next().value as string);
  return p;
}

export type SttResult = { transcript: string; ms: number } | { error: string; capped?: boolean };

/** A recorded clip → transcript. */
export async function sarvamStt(clip: Blob, lang: string, timeoutMs = 8000): Promise<SttResult> {
  if (capped.stt) return { error: "voice_cap", capped: true };
  const t0 = performance.now();
  const fd = new FormData();
  fd.append("file", clip, clip.type.includes("webm") ? "clip.webm" : "clip.wav");
  fd.append("lang", lang);
  try {
    const res = await fetch("/api/voice/stt", { method: "POST", headers: await authHeaders(), body: fd, signal: AbortSignal.timeout(timeoutMs) });
    const j = (await res.json().catch(() => ({}))) as { transcript?: string; error?: string };
    if (!res.ok) {
      if (res.status === 429 && j.error === "voice_cap") {
        setCapped("stt");
        return { error: "voice_cap", capped: true };
      }
      return { error: j.error || `http ${res.status}` };
    }
    const ms = Math.round(performance.now() - t0);
    console.info(`[voice] engine=sarvam stt ms=${ms} audio=${Math.round((clip.size / 32000) * 1000)}ms`);
    return { transcript: (j.transcript ?? "").trim(), ms };
  } catch (e) {
    return { error: `network: ${String(e)}` };
  }
}

/** Sarvam speaks these languages; anything else goes to Kokoro / the device voice. */
export const sarvamLang = (lang: string) => /^(en|hi|kn|bn|ta|te|mr|gu|ml|pa|od)-IN$/i.test(lang);
