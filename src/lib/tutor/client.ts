"use client";

import { supabase } from "@/lib/supabase";
import { STREAM_MARK, type TutorErrorCode, type TutorRequest } from "./types";

export type TutorOutcome = { ok: true; refused: boolean; broken: boolean } | { ok: false; code: TutorErrorCode | "network"; retryAfter?: number };

/** POST to /api/tutor and stream the reply text into `onText` (full text so far). */
export async function askTutor(req: TutorRequest, onText: (text: string) => void, signal?: AbortSignal): Promise<TutorOutcome> {
  let res: Response;
  try {
    // Signed-in learners get their own (larger) daily allowance.
    const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;
    res = await fetch("/api/tutor", { method: "POST", headers, body: JSON.stringify(req), signal });
  } catch {
    return { ok: false, code: "network" };
  }
  if (!res.ok || !res.body) {
    const j = (await res.json().catch(() => ({}))) as { error?: TutorErrorCode; retryAfter?: number };
    return { ok: false, code: j.error ?? (res.status === 503 ? "tutor_unavailable" : "upstream_error"), retryAfter: j.retryAfter };
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let text = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      text += dec.decode(value, { stream: true });
      onText(clean(text));
    }
  } catch {
    if (signal?.aborted) return { ok: true, refused: false, broken: false };
    return { ok: true, refused: false, broken: true };
  }
  return { ok: true, refused: text.includes(STREAM_MARK.refusal), broken: text.includes(STREAM_MARK.error) };
}

function clean(t: string) {
  return t.split(STREAM_MARK.refusal).join("").split(STREAM_MARK.error).join("").replace(/\u0000[A-Z_]*$/, "");
}
