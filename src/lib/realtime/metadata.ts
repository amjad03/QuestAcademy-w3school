/**
 * Participant metadata for the realtime (LiveKit) voice tutor. The browser sends this to
 * /api/livekit/token; the server sanitises it and puts it on the student's room token,
 * where the Python agent (voice-agent/agent.py + prompt.py) reads it to build the
 * system prompt. Pure: safe on the server and the client.
 */

import { LIVE_MODES, SESSION_GOALS, TUTOR_LANGUAGES, type LiveMode, type PageContext, type SessionInfo, type StudentInfo, type TutorLanguage } from "@/lib/tutor/live";

export type RealtimeLang = "en-IN" | "hi-IN" | "kn-IN";
export type RealtimeSpeaker = "priya" | "rahul";

export interface RealtimeMeta {
  v: 1;
  /** STT/TTS language. */
  language: RealtimeLang;
  /** The tutor's teaching language (Hinglish speaks through en-IN). */
  tutorLanguage: TutorLanguage;
  speaker: RealtimeSpeaker;
  mode: LiveMode;
  topic: string;
  student: StudentInfo;
  session?: SessionInfo;
  page?: PageContext;
  explainers?: { id: string; title: string }[];
}

/** What the client asks for (everything but the derived fields). */
export type RealtimeRequest = Omit<RealtimeMeta, "v" | "language" | "speaker"> & { speaker?: RealtimeSpeaker };

/** Explicit-dispatch agent name; must match AGENT_NAME in voice-agent/agent.py. */
export const REALTIME_AGENT_NAME = "questy-tutor";
/** Data-channel topics (same JSON shapes as the smartboard's ops / LiveEvents). */
export const BOARD_TOPIC = "board";
export const STUDENT_TOPIC = "student";

export const realtimeLang = (l: TutorLanguage): RealtimeLang => (l === "Hindi" ? "hi-IN" : l === "Kannada" ? "kn-IN" : "en-IN");

const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max).trim() : "");
const opt = (v: unknown, max: number) => str(v, max) || undefined;

/** Validate + cap what the browser sent. Null = unusable. */
export function sanitizeMeta(raw: unknown): RealtimeMeta | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const mode = LIVE_MODES.find((m) => m === r.mode) ?? "learn";
  const tutorLanguage = TUTOR_LANGUAGES.find((l) => l === r.tutorLanguage) ?? "English";
  const topic = str(r.topic, 300);
  if (!topic) return null;
  const s = (r.student ?? {}) as Record<string, unknown>;
  const student: StudentInfo = {
    name: opt(s.name, 60),
    grade: opt(s.grade, 20),
    board: opt(s.board, 40),
    goal: opt(s.goal, 80),
    targetExam: opt(s.targetExam, 40),
    weakChapters: opt(s.weakChapters, 800),
    levels: opt(s.levels, 300),
    memory: Array.isArray(s.memory) ? s.memory.slice(0, 6).map((m) => str(m, 300)).filter(Boolean) : undefined,
  };
  let session: SessionInfo | undefined;
  if (r.session && typeof r.session === "object") {
    const se = r.session as Record<string, unknown>;
    const n = (v: unknown, hi: number) => (typeof v === "number" && Number.isFinite(v) ? Math.max(0, Math.min(hi, Math.round(v))) : undefined);
    session = {
      goal: SESSION_GOALS.find((g) => g === se.goal),
      minutes: n(se.minutes, 120),
      level: se.level === "exam" ? "exam" : se.level === "simple" ? "simple" : undefined,
      pace: se.pace === "slower" || se.pace === "faster" || se.pace === "normal" ? se.pace : undefined,
      plan: opt(se.plan, 900),
      previous: opt(se.previous, 600),
      outline: opt(se.outline, 1500),
    };
  }
  let page: PageContext | undefined;
  if (r.page && typeof r.page === "object") {
    const pg = r.page as Record<string, unknown>;
    page = {
      path: opt(pg.path, 200),
      course: opt(pg.course, 120),
      lesson: opt(pg.lesson, 160),
      summary: opt(pg.summary, 1500),
      question: opt(pg.question, 2500),
      answered: pg.answered === true || undefined,
      correct: typeof pg.correct === "boolean" ? pg.correct : undefined,
      answer: pg.answered === true ? opt(pg.answer, 600) : undefined,
      stage: opt(pg.stage, 20),
    };
  }
  const explainers = Array.isArray(r.explainers)
    ? r.explainers.slice(0, 12).flatMap((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        const id = str(o.id, 60);
        return /^[a-z0-9-]+$/.test(id) ? [{ id, title: str(o.title, 80) }] : [];
      })
    : undefined;
  return {
    v: 1,
    language: realtimeLang(tutorLanguage),
    tutorLanguage,
    speaker: r.speaker === "rahul" ? "rahul" : "priya",
    mode,
    topic,
    student,
    session,
    page,
    explainers,
  };
}
