/** Shared (client + server) types for the live smartboard tutor. */

import type { BoardOp } from "@/components/board/ops";

/** "ask" is the quick doubt chat that floats over every page (short answers, mini board). */
export type LiveMode = "learn" | "doubt" | "explainback" | "ask";
export const LIVE_MODES: LiveMode[] = ["learn", "doubt", "explainback", "ask"];

/** What is on the student's screen when they ask (all optional, all short). */
export interface PageContext {
  path?: string;
  course?: string;
  lesson?: string;
  summary?: string;
  /** Practice question on screen, options included. */
  question?: string;
  answered?: boolean;
  correct?: boolean;
  /** Only sent once the student has answered. */
  answer?: string;
  /** Age stage of the app (explore/adventure… — younger stages need simpler words). */
  stage?: string;
}

export type TutorLanguage = "English" | "Hindi" | "Kannada" | "Hinglish";
export const TUTOR_LANGUAGES: TutorLanguage[] = ["English", "Hindi", "Kannada", "Hinglish"];

/** What the client tells the tutor about the student (all optional, all short). */
export interface StudentInfo {
  name?: string;
  grade?: string;
  board?: string;
  goal?: string;
  targetExam?: string;
  /** "physics: Laws of Motion, Gravitation; maths: Integrals" */
  weakChapters?: string;
  /** "physics 2/5, maths 4/5" */
  levels?: string;
  /** Short notes from past sessions, newest first. */
  memory?: string[];
}

export type TutorLevel = "simple" | "exam";
export type TutorPace = "slower" | "normal" | "faster";
export const SESSION_GOALS = ["understand", "exam", "revise", "homework"] as const;
export type SessionGoal = (typeof SESSION_GOALS)[number];

/** This session's settings and live state (all optional, all short). */
export interface SessionInfo {
  goal?: SessionGoal;
  /** Planned length in minutes, and minutes elapsed so far. */
  minutes?: number;
  elapsed?: number;
  /** "simple" = explain like to a 10-year-old; "exam" = board/entrance exam depth. */
  level?: TutorLevel;
  pace?: TutorPace;
  /** The lesson plan so far and where we are ("c1 Speed ✓, c2 Velocity ← example, c3 …"). */
  plan?: string;
  /** What was covered / found hard on this topic in earlier sessions. */
  previous?: string;
  /** Chapter / syllabus outline from the link that opened the tutor. */
  outline?: string;
}

export interface LiveRequest {
  kind: "turn" | "recap";
  mode: LiveMode;
  language: TutorLanguage;
  topic: string;
  student: StudentInfo;
  /** Explainers the tutor may embed: id + title. */
  explainers?: { id: string; title: string }[];
  messages: { role: "user" | "assistant"; content: string }[];
  /** A photo of a problem, sent with the first turn of a doubt only. */
  image?: { mediaType: "image/jpeg" | "image/png" | "image/webp"; data: string };
  /** A snapshot of the smartboard (with the student's marks), attached to the latest student turn. */
  boardImage?: { mediaType: "image/png" | "image/jpeg"; data: string };
  page?: PageContext;
  session?: SessionInfo;
}

export interface CheckPoint {
  q: string;
  options?: string[];
  kind?: "mcq" | "short" | "board" | "explain";
  /** The tutor wants the student to work it out ON THE BOARD, then send it to be checked. */
  board?: boolean;
}

/** One small step of a lesson: what to say, what to draw, and maybe a pause. */
export interface LiveStep {
  say: string;
  ops: BoardOp[];
  check?: CheckPoint;
  /** Named when a check-point answer was wrong. */
  misconception?: string;
  /** Doubt mode: the tutor stopped after a hint and waits for "next hint" / "full solution". */
  hint?: boolean;
  end?: boolean;
}

export interface Recap {
  title: string;
  keyPoints: string[];
  formulas: string[];
  practice: { q: string; answer: string }[];
  parentSummary: string;
  /** One or two lines for the tutor's memory of this student. */
  memory: string;
  /** Ideas the student found hard (misconceptions), for next time. */
  struggled?: string[];
  /** What to do next session. */
  nextStep?: string;
}

export const LIVE_LIMITS = {
  maxMessages: 41,
  maxChars: 12000,
  maxImageBytes: 4_500_000,
} as const;

export const TUTOR_PASS_HEADER = "x-tutor-pass";

/** The live tutor is for Class 8 and up (incl. PUC, entrance exams and beyond); null grade = adult/other tracks. */
export const tutorEligible = (grade: string | null | undefined) => !grade || !/^(pre|[1-7])$/.test(grade);

export const tutorHref = (topic: string, mode?: LiveMode, outline?: string) => `/tutor?${new URLSearchParams({ topic, ...(mode ? { mode } : {}), ...(outline ? { outline: outline.slice(0, 600) } : {}) })}`;
