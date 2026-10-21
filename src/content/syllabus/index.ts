/**
 * Board syllabi for Focus mode (CBSE, Karnataka PUC, ICSE/ISC, NEET/JEE).
 * Mapping based on known syllabi — check against the current official editions.
 */
import type { Stage } from "@/content/types";
import type { Board } from "@/lib/modes";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { nextExamDate } from "@/lib/exam";
import { CBSE } from "./cbse";
import { PUE } from "./pue";
import { ICSE } from "./icse";
import { EXAM } from "./exam";
import type { SyllabusChapter, SyllabusGrade } from "./types";

export type { SyllabusBoard, SyllabusChapter, SyllabusGrade, SyllabusSubject } from "./types";

export const SYLLABI: Record<Board, typeof CBSE> = { cbse: CBSE, pue: PUE, icse: ICSE, exam: EXAM };

export function getGrade(board: Board, grade: string | null | undefined): SyllabusGrade | undefined {
  const b = SYLLABI[board];
  return b.grades.find((g) => g.id === grade) ?? undefined;
}

/** Board + grade to show when the learner hasn't picked one yet. */
export function defaultBoardGrade(stage: Stage | null | undefined): { board: Board; grade: string } {
  if (stage === "aspirant") return { board: "exam", grade: "NEET" };
  if (stage === "middle") return { board: "cbse", grade: "9" };
  return { board: "cbse", grade: "10" };
}

/** Resolve a profile's board/grade to a valid pair. */
export function resolveBoardGrade(board: Board | null | undefined, grade: string | null | undefined, stage?: Stage | null) {
  const d = defaultBoardGrade(stage);
  const b = board && SYLLABI[board] ? board : d.board;
  const g = getGrade(b, grade) ? grade! : b === d.board ? d.grade : SYLLABI[b].grades[0].id;
  return { board: b, grade: g };
}

/** Next date of this grade's board / entrance exam. */
export function examDateFor(grade: SyllabusGrade, now = new Date()): Date | null {
  const e = grade.exam;
  if (!e) return null;
  if ("examId" in e) return nextExamDate(e.examId, now);
  const y = now.getFullYear();
  const d = new Date(y, e.month - 1, e.day);
  if (d.getTime() <= now.getTime()) d.setFullYear(y + 1);
  return d;
}

export type ChapterStatus = "learn" | "practice" | "soon";

interface ProgressState {
  lessons: Record<string, unknown>;
  mastery: Record<string, MasteryLevel>;
  planDone?: Record<string, string>;
}

export interface ChapterProgress {
  status: ChapterStatus;
  /** Share of mapped lessons completed (0–1). */
  completed: number;
  /** Average mastery points of mapped lessons (0–1). */
  mastery: number;
  /** Average mastery level, rounded down. */
  level: MasteryLevel;
  done: boolean;
  nextLesson: string | null;
}

export function lessonHref(id: string) {
  const [subject, unit, lesson] = id.split("/");
  return `/course/${subject}/${unit}/${lesson}`;
}

export function drillHref(ch: SyllabusChapter) {
  if (!ch.examSubject || !ch.examChapters.length) return null;
  return `/exam/practice?subject=${ch.examSubject}&chapter=${encodeURIComponent(ch.examChapters[0])}`;
}

export function chapterProgress(ch: SyllabusChapter, s: ProgressState): ChapterProgress {
  const status: ChapterStatus = ch.lessonIds.length ? "learn" : ch.examChapters.length ? "practice" : "soon";
  const ticked = Boolean(s.planDone?.[ch.id]);
  if (!ch.lessonIds.length) {
    return { status, completed: ticked ? 1 : 0, mastery: ticked ? 1 : 0, level: ticked ? 3 : 0, done: ticked, nextLesson: null };
  }
  const n = ch.lessonIds.length;
  const completed = ch.lessonIds.filter((id) => s.lessons[id]).length / n;
  const levels = ch.lessonIds.map((id) => s.mastery[id] ?? 0);
  const mastery = levels.reduce<number>((a, l) => a + MASTERY[l].points, 0) / (n * 100);
  const level = Math.floor(levels.reduce<number>((a, l) => a + l, 0) / n) as MasteryLevel;
  const done = ticked || (completed === 1 && level >= 3);
  const nextLesson = ch.lessonIds.find((id) => !s.lessons[id] || (s.mastery[id] ?? 0) < 3) ?? null;
  return { status, completed, mastery, level, done, nextLesson };
}

/** Counts for reporting / sanity checks. */
export function syllabusStats() {
  return (Object.keys(SYLLABI) as Board[]).map((b) => {
    const chapters = SYLLABI[b].grades.flatMap((g) => g.subjects.flatMap((s) => s.chapters));
    return {
      board: b,
      chapters: chapters.length,
      withLessons: chapters.filter((c) => c.lessonIds.length).length,
      practiceOnly: chapters.filter((c) => !c.lessonIds.length && c.examChapters.length).length,
    };
  });
}
