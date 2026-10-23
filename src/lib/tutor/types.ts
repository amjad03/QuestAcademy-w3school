/** Shared (client + server) types and limits for Ask Questy. No imports, safe everywhere. */

export type TutorStage = "explore" | "adventure" | "focus" | "mastery" | "research" | "professional";

export const TUTOR_STAGES: TutorStage[] = ["explore", "adventure", "focus", "mastery", "research", "professional"];

export interface TutorContext {
  stage: TutorStage;
  /** Learner's interface language, in English (e.g. "Hindi"). */
  language: string;
  courseTitle: string;
  lessonTitle: string;
  lessonSummary?: string;
  /** The practice question currently on screen (Md text, options included). */
  questionText?: string;
  /** True once the learner has checked an answer and seen feedback. */
  answered?: boolean;
  /** Whether the checked answer was right (only meaningful when answered). */
  correct?: boolean;
  /** Correct answer, sent ONLY after the learner has answered. */
  answerText?: string;
}

export interface TutorMessage {
  role: "user" | "assistant";
  content: string;
}

export interface TutorRequest {
  context: TutorContext;
  messages: TutorMessage[];
}

export const TUTOR_LIMITS = {
  maxMessages: 20,
  maxChars: 4000,
  /** Per field cap for context strings (lesson summary, question…). */
  maxContextChars: 3000,
  /** Requests per IP per window (in-memory, per server instance). */
  rateLimit: 30,
  rateWindowMs: 10 * 60 * 1000,
} as const;

/** In-band markers the route appends to the text stream. */
export const STREAM_MARK = {
  refusal: "\u0000QA_REFUSAL\u0000",
  error: "\u0000QA_ERROR\u0000",
} as const;

export type TutorErrorCode = "tutor_unavailable" | "rate_limited" | "daily_limit" | "bad_request" | "auth_failed" | "upstream_busy" | "upstream_error";
