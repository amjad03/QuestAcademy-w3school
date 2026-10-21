import { chapterProgress, drillHref, getGrade, lessonHref, SYLLABI } from "@/content/syllabus";
import type { Board } from "@/lib/modes";
import type { PlanSource } from "./types";

const PER_LESSON = 30;
const PRACTICE_ONLY = 60;

/**
 * Plan for a board syllabus (id = `${board}:${grade}`): one item per chapter,
 * highest weightage × weakest mastery first. Chapters without lessons are
 * practice drills (or textbook study) that the learner ticks off manually.
 */
export const syllabusPlanSource: PlanSource = async (id, state) => {
  const [board, grade] = id.split(":") as [Board, string];
  if (!SYLLABI[board]) return null;
  const g = getGrade(board, grade);
  if (!g) return null;
  return {
    title: `${SYLLABI[board].name} · ${g.name}`,
    reviseHref: "/practice",
    mockHref: "/exam/mock",
    items: g.subjects.flatMap((s) =>
      s.chapters.map((ch) => {
        const p = chapterProgress(ch, state);
        const drill = drillHref(ch);
        return {
          id: ch.id,
          title: ch.lessonIds.length ? ch.title : drill ? `${ch.title} · practice drill` : `${ch.title} · study from your textbook`,
          minutes: ch.lessonIds.length ? Math.max(PER_LESSON, Math.round(ch.lessonIds.filter((l) => !state.lessons[l]).length * PER_LESSON) || PER_LESSON) : PRACTICE_ONLY,
          href: p.nextLesson ? lessonHref(p.nextLesson) : drill ?? (ch.lessonIds[0] ? lessonHref(ch.lessonIds[0]) : "/plan"),
          done: p.done,
          priority: (ch.weightage ?? 1) * (1 - p.mastery),
          group: s.name,
        };
      }),
    ),
  };
};
