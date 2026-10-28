"use client";

import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/store";
import { cleanOp, type BoardOp } from "@/components/board/ops";
import { STREAM_MARK } from "./types";
import { TUTOR_PASS_HEADER, type LiveRequest, type LiveStep, type Recap, type StudentInfo, type TutorLanguage } from "./live";

export type LiveError = "tutor_unavailable" | "premium_required" | "rate_limited" | "daily_limit" | "bad_request" | "upstream_busy" | "upstream_error" | "auth_failed" | "network";

async function headers(pass?: string | null) {
  const h: Record<string, string> = { "Content-Type": "application/json" };
  const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
  if (token) h.Authorization = `Bearer ${token}`;
  if (pass) h[TUTOR_PASS_HEADER] = pass;
  return h;
}

/** Validate one NDJSON line from the model into a step (bad ops are dropped). */
export function parseStep(line: string): LiveStep | null {
  const s = line.trim().replace(/^```(json)?|```$/g, "").trim();
  if (!s.startsWith("{")) return null;
  try {
    const r = JSON.parse(s) as Record<string, unknown>;
    const ops = Array.isArray(r.ops) ? r.ops.map(cleanOp).filter((o): o is BoardOp => Boolean(o)) : [];
    const c = r.check as Record<string, unknown> | undefined;
    const check =
      c && typeof c.q === "string" && c.q.trim()
        ? { q: c.q.slice(0, 500), options: Array.isArray(c.options) ? c.options.filter((o): o is string => typeof o === "string").slice(0, 5) : undefined }
        : undefined;
    return {
      say: typeof r.say === "string" ? r.say.slice(0, 600) : "",
      ops,
      check,
      misconception: typeof r.misconception === "string" && r.misconception.trim() ? r.misconception.slice(0, 200) : undefined,
      hint: r.hint === true || undefined,
      end: r.end === true || undefined,
    };
  } catch {
    return null;
  }
}

/** Stream one tutor turn; `onStep` fires as soon as each step's line is complete. Resolves with the raw text. */
export async function streamTurn(req: Omit<LiveRequest, "kind">, pass: string | null, onStep: (s: LiveStep) => void, signal?: AbortSignal): Promise<{ ok: true; raw: string; broken: boolean } | { ok: false; code: LiveError; retryAfter?: number }> {
  let res: Response;
  try {
    res = await fetch("/api/tutor/live", { method: "POST", headers: await headers(pass), body: JSON.stringify({ ...req, kind: "turn" }), signal });
  } catch {
    return { ok: false, code: "network" };
  }
  if (!res.ok || !res.body) {
    const j = (await res.json().catch(() => ({}))) as { error?: LiveError; retryAfter?: number };
    return { ok: false, code: j.error ?? "upstream_error", retryAfter: j.retryAfter };
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let raw = "";
  let buf = "";
  let broken = false;
  const flush = (line: string) => {
    const st = parseStep(line);
    if (st) onStep(st);
  };
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = dec.decode(value, { stream: true });
      raw += chunk;
      buf += chunk;
      let nl: number;
      while ((nl = buf.indexOf("\n")) >= 0) {
        flush(buf.slice(0, nl));
        buf = buf.slice(nl + 1);
      }
    }
  } catch {
    broken = !signal?.aborted;
  }
  if (buf.includes(STREAM_MARK.error) || raw.includes(STREAM_MARK.error)) broken = true;
  flush(buf.split(STREAM_MARK.error).join("").split(STREAM_MARK.refusal).join(""));
  return { ok: true, raw: raw.split(STREAM_MARK.error).join("").split(STREAM_MARK.refusal).join("").trim(), broken };
}

export async function fetchRecap(req: Omit<LiveRequest, "kind" | "image">, pass: string | null): Promise<Recap | null> {
  try {
    const res = await fetch("/api/tutor/live", { method: "POST", headers: await headers(pass), body: JSON.stringify({ ...req, kind: "recap" }) });
    if (!res.ok) return null;
    return ((await res.json()) as { recap?: Recap }).recap ?? null;
  } catch {
    return null;
  }
}

/** The student summary the tutor sees, from the profile and onboarding answers. */
export function studentInfo(p: Profile): StudentInfo {
  const per = p.personal;
  const weak = Object.entries(per?.weakChapters ?? {})
    .filter(([, chs]) => chs.length)
    .map(([sub, chs]) => `${sub}: ${chs.map((c) => c.replace(/-/g, " ")).join(", ")}`)
    .join("; ");
  const levels = Object.entries(per?.diagnostic ?? {})
    .map(([sub, d]) => `${sub} ${d.level}/5`)
    .join(", ");
  const GOAL: Record<string, string> = { pass: "pass comfortably", "80": "score 80%+", "95": "score 95%+", top: "top the class / rank" };
  return {
    name: p.nickname || p.name?.split(" ")[0] || undefined,
    grade: p.grade ?? undefined,
    board: p.board ?? undefined,
    goal: per?.goal ? GOAL[per.goal] : undefined,
    targetExam: per?.targetExam ?? undefined,
    weakChapters: weak || undefined,
    levels: levels || undefined,
    memory: p.tutor?.sessions.slice(0, 5).map((s) => `${s.at.slice(0, 10)} ${s.topic}: ${s.summary}`),
  };
}

export const languageForLocale = (locale: string): TutorLanguage => (locale === "hi" ? "Hindi" : locale === "kn" ? "Kannada" : "English");
export const speechLang = (l: TutorLanguage) => (l === "Hindi" ? "hi-IN" : l === "Kannada" ? "kn-IN" : "en-IN");

/* ---------------- speech recognition (where the browser has it) ---------------- */

interface Recognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start(): void;
  stop(): void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
}

export function recognitionSupported() {
  if (typeof window === "undefined") return false;
  const w = window as unknown as Record<string, unknown>;
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}

/** Listen once; calls onText with the running transcript and onDone at the end. Returns a stop function. */
export function listen(lang: string, onText: (t: string) => void, onDone: (t: string) => void): () => void {
  const w = window as unknown as Record<string, new () => Recognition>;
  const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
  if (!Ctor) {
    onDone("");
    return () => {};
  }
  const rec = new Ctor();
  rec.lang = lang;
  rec.interimResults = true;
  rec.continuous = false;
  let text = "";
  rec.onresult = (e) => {
    text = Array.from(e.results)
      .map((r) => r[0]?.transcript ?? "")
      .join(" ");
    onText(text);
  };
  rec.onerror = () => {};
  rec.onend = () => onDone(text.trim());
  try {
    rec.start();
  } catch {
    onDone("");
  }
  return () => rec.stop();
}

/** Shrink a photo to ≤1280 px JPEG (base64, no prefix) so uploads stay small on phones. */
export async function photoToBase64(file: File): Promise<{ mediaType: "image/jpeg"; data: string; preview: string }> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = url;
    });
    const k = Math.min(1, 1280 / Math.max(img.width, img.height));
    const c = document.createElement("canvas");
    c.width = Math.round(img.width * k);
    c.height = Math.round(img.height * k);
    c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
    const preview = c.toDataURL("image/jpeg", 0.82);
    return { mediaType: "image/jpeg", data: preview.split(",")[1], preview };
  } finally {
    URL.revokeObjectURL(url);
  }
}
