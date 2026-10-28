import manifest from "./manifest.json";

/**
 * Board lessons: one narrated smartboard "video" per chapter. This small manifest is bundled; the scripts
 * themselves are static JSON in /public/board-lessons/<id>.json, fetched only when the player opens.
 * Written by scripts/gen-board-lessons.ts (see docs/board-lessons.md).
 */
export interface BoardLessonMeta {
  id: string;
  title: string;
  subject: string;
  grade: string;
  chapter: string;
  minutes: number;
  steps: number;
  /** Lesson ids (every board) of the chapter: the board lesson shows on each of these lessons too. */
  lessons: string[];
}

export const BOARD_LESSONS = manifest as BoardLessonMeta[];

export const boardLessonUrl = (id: string) => `/board-lessons/${id}.json`;

/** File id for a chapter: "11-physics-units-and-measurements". */
export const boardLessonId = (grade: string, subject: string, chapter: string) =>
  `${grade}-${subject}-${chapter.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export function boardLessonForChapter(grade: string | null | undefined, subject: string, chapter: string): BoardLessonMeta | null {
  if (!grade) return null;
  const id = boardLessonId(grade, subject, chapter);
  return BOARD_LESSONS.find((b) => b.id === id) ?? null;
}

export function boardLessonForLesson(lessonId: string): BoardLessonMeta | null {
  return BOARD_LESSONS.find((b) => b.lessons.includes(lessonId)) ?? null;
}
