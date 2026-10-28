"use client";

/**
 * Recognising finished assignments and challenges from the learner's own progress:
 * the existing session and mock players record results as usual, and this module
 * reads them back. No change to the players is needed.
 */
import type { LearnerState } from "@/lib/store";

const KEY = "qa-school-starts";

interface StartMark {
  at: string;
  quizzes: number;
  mocks: number;
}

function read(): Record<string, StartMark> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

/** Remember the moment the student opened an assignment, so a repeat attempt also counts. */
export function markStarted(id: string, s: Pick<LearnerState, "totals" | "mockResults">) {
  try {
    const all = read();
    all[id] = { at: new Date().toISOString(), quizzes: s.totals.quizzes, mocks: s.mockResults.length };
    // Keep the list short.
    const entries = Object.entries(all).sort((a, b) => b[1].at.localeCompare(a[1].at)).slice(0, 60);
    localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(entries)));
  } catch {
    /* storage unavailable: first-time completion is still recognised */
  }
}

export interface Detected {
  score: number;
  completedAt: string;
  detail: Record<string, unknown>;
}

/**
 * Result of a task since `since`, if the learner has finished it.
 * completionKey: an assessment key ("chapter:<id>:test", "<course>:challenge") or "mock:<test id>".
 */
export function detectResult(task: { id: string; completion_key: string; created_at: string }, s: Pick<LearnerState, "items" | "assessments" | "mockResults" | "totals">): Detected | null {
  const start = read()[task.id];
  if (task.completion_key.startsWith("mock:")) {
    const testId = task.completion_key.slice(5);
    const since = start?.at && start.at < task.created_at ? start.at : task.created_at;
    const hits = s.mockResults.filter((r) => r.testId === testId && r.date >= since);
    if (!hits.length) return null;
    const best = hits.reduce((a, b) => (b.score / (b.max || 1) > a.score / (a.max || 1) ? b : a));
    return { score: best.max ? Math.max(0, best.score) / best.max : 0, completedAt: best.date, detail: { marks: best.score, max: best.max, correct: best.correct, wrong: best.wrong, skipped: best.skipped, seconds: best.seconds } };
  }
  const score = s.assessments[task.completion_key];
  if (typeof score !== "number") return null;
  const first = s.items[task.completion_key];
  const fresh = first && first >= task.created_at;
  const repeated = start && s.totals.quizzes > start.quizzes;
  if (!fresh && !repeated) return null;
  return { score, completedAt: fresh ? first : new Date().toISOString(), detail: {} };
}
