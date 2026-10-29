"use client";

import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/store";
import { EventStream, type LiveEvent } from "./protocol";
import { STREAM_MARK } from "./types";
import { TUTOR_PASS_HEADER, type LiveRequest, type Recap, type StudentInfo, type TutorLanguage } from "./live";

export type LiveError = "tutor_unavailable" | "premium_required" | "rate_limited" | "daily_limit" | "bad_request" | "upstream_busy" | "upstream_error" | "auth_failed" | "network";

async function headers(pass?: string | null) {
  const h: Record<string, string> = { "Content-Type": "application/json" };
  const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
  if (token) h.Authorization = `Bearer ${token}`;
  if (pass) h[TUTOR_PASS_HEADER] = pass;
  return h;
}

/** Stream one tutor turn; `onEvent` fires as soon as each JSON event is complete (malformed output is repaired or skipped). */
export async function streamTurn(
  req: Omit<LiveRequest, "kind">,
  pass: string | null,
  onEvent: (e: LiveEvent) => void,
  signal?: AbortSignal,
): Promise<{ ok: true; raw: string; broken: boolean; events: number; bad: number } | { ok: false; code: LiveError; retryAfter?: number }> {
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
  let broken = false;
  let events = 0;
  const marks = (t: string) => t.split(STREAM_MARK.error).join("").split(STREAM_MARK.refusal).join("");
  const es = new EventStream((e) => {
    events++;
    onEvent(e);
  });
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = dec.decode(value, { stream: true });
      raw += chunk;
      if (chunk.includes(STREAM_MARK.error)) broken = true;
      es.push(marks(chunk));
    }
  } catch {
    broken = !signal?.aborted;
  }
  if (raw.includes(STREAM_MARK.error)) broken = true;
  es.end(events > 0);
  return { ok: true, raw: marks(raw).trim(), broken, events, bad: es.bad };
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
    memory: p.tutor?.sessions.slice(0, 5).map((s) => `${s.at.slice(0, 10)} ${s.topic}: ${s.summary}${s.struggled?.length ? ` (found hard: ${s.struggled.join("; ")})` : ""}`),
  };
}

export const languageForLocale = (locale: string): TutorLanguage => (locale === "hi" ? "Hindi" : locale === "kn" ? "Kannada" : "English");
export const speechLang = (l: TutorLanguage) => (l === "Hindi" ? "hi-IN" : l === "Kannada" ? "kn-IN" : "en-IN");

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
