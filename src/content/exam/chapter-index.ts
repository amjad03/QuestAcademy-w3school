import "server-only";
import { examQuestions } from "./questions";
import { formulaSheets } from "./formulas";
import { gradeOf } from "@/lib/exam";

/** Compact lookup for class chapter pages: which chapters have exam questions / a formula sheet. */
export interface ExamChapterIndex {
  /** `${grade}|${subject}|${chapter title}` → number of exam questions. */
  questions: Record<string, number>;
  /** Chapter titles that have a formula sheet. */
  formulas: string[];
}

let cached: ExamChapterIndex | null = null;

export function examChapterIndex(): ExamChapterIndex {
  if (cached) return cached;
  const questions: Record<string, number> = {};
  for (const q of examQuestions) {
    const g = gradeOf(q);
    if (!g) continue;
    const k = `${g}|${q.subject}|${q.chapter}`;
    questions[k] = (questions[k] ?? 0) + 1;
  }
  cached = { questions, formulas: [...new Set(formulaSheets.map((s) => s.chapter))] };
  return cached;
}
