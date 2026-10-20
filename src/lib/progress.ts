import type { CourseItem, CourseLesson, CourseOutline } from "@/content/course";
import type { LearnerState } from "./store";
import { masteryPoints, type MasteryLevel } from "./mastery";

type S = Pick<LearnerState, "items" | "lessons" | "challengesPassed" | "mastery">;

export function itemDone(s: S, lessonId: string, item: CourseItem) {
  if (s.items[item.id]) return true;
  if (item.kind === "article") return Boolean(s.lessons[lessonId]);
  if (item.kind === "challenge") return s.challengesPassed.includes(lessonId);
  if (item.kind === "practice") return (s.mastery[lessonId] ?? 0) >= 2;
  return false;
}

export function lessonProgress(s: S, l: CourseLesson) {
  const done = l.items.filter((i) => itemDone(s, l.id, i)).length;
  const level = (s.mastery[l.id] ?? (s.lessons[l.id] ? 1 : 0)) as MasteryLevel;
  return {
    itemsDone: done,
    itemsTotal: l.items.length,
    /** A lesson counts as complete once its article is done (or it has been practised). */
    complete: Boolean(s.lessons[l.id]) || level >= 2,
    level,
    nextItem: l.items.find((i) => !itemDone(s, l.id, i)) ?? l.items[0],
  };
}

export function courseProgress(s: S, o: CourseOutline) {
  const lessons = o.units.flatMap((u) => u.lessons);
  const levels = lessons.map((l) => lessonProgress(s, l).level);
  const mp = masteryPoints(levels);
  const complete = lessons.filter((l) => lessonProgress(s, l).complete).length;
  const next = lessons.find((l) => !lessonProgress(s, l).complete);
  return { ...mp, complete, total: lessons.length, next, levels: Object.fromEntries(lessons.map((l, i) => [l.id, levels[i]])) as Record<string, MasteryLevel> };
}

export function unitProgress(s: S, u: CourseOutline["units"][number]) {
  const levels = u.lessons.map((l) => lessonProgress(s, l).level);
  return { ...masteryPoints(levels), complete: u.lessons.filter((l) => lessonProgress(s, l).complete).length, total: u.lessons.length };
}

/** Progress snapshot used before the persisted store hydrates (avoids SSR mismatches). */
export const EMPTY_PROGRESS: S = { items: {}, lessons: {}, challengesPassed: [], mastery: {} };
