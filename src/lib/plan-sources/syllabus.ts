import { chapterProgress, drillHref, getGrade, lessonHref, SYLLABI } from "@/content/syllabus";
import { chapterSlug } from "@/content/my-class";
import type { ExamId } from "@/content/types";
import type { Board } from "@/lib/modes";
import { EXAM_META, getMock, nextExamDate } from "@/lib/exam";
import type { PlanItem } from "@/lib/planner";
import type { PlanSource } from "./types";

const PER_LESSON = 30;
const PRACTICE_ONLY = 60;

/**
 * Plan for a board syllabus (id = `${board}:${grade}`): one item per chapter,
 * highest weightage × weakest mastery first. Chapters without lessons are
 * practice drills (or textbook study) that the learner ticks off manually.
 *
 * Entrance exams (board "exam") also get: practice time scaled by weightage,
 * revision rounds over Classes 11 + 12 and full mocks in the final weeks.
 */
export const syllabusPlanSource: PlanSource = async (id, state) => {
  const [board, grade] = id.split(":") as [Board, string];
  if (!SYLLABI[board]) return null;
  const g = getGrade(board, grade);
  if (!g) return null;
  const exam = board === "exam" && g.exam && "examId" in g.exam ? (g.exam.examId as ExamId) : null;
  const items: PlanItem[] = g.subjects.flatMap((s) =>
    s.chapters.map((ch) => {
      const p = chapterProgress(ch, state);
      const drill = drillHref(ch);
      const learn = ch.lessonIds.length ? Math.max(PER_LESSON, Math.round(ch.lessonIds.filter((l) => !state.lessons[l]).length * PER_LESSON) || PER_LESSON) : PRACTICE_ONLY;
      // Exam plans: extra problem practice for heavier chapters (≈ 10 min per weightage point).
      const practice = exam ? Math.round(((ch.weightage ?? 2) * 10) / 5) * 5 : 0;
      return {
        id: ch.id,
        title: ch.lessonIds.length ? ch.title : drill ? `${ch.title} · practice drill` : `${ch.title} · study from your textbook`,
        minutes: learn + practice,
        href: p.nextLesson ? lessonHref(p.nextLesson) : drill ?? (ch.lessonIds[0] ? lessonHref(ch.lessonIds[0]) : "/plan"),
        done: p.done,
        priority: (ch.weightage ?? 1) * (1 - p.mastery),
        group: exam && ch.grade ? `${s.name} · ${ch.grade}` : s.name,
        // Revision happens on the chapter page: lessons, exam questions and the formula sheet in one place.
        reviseHref: exam ? `/class/${s.id}/${chapterSlug(ch)}` : undefined,
      };
    }),
  );
  if (!exam) return { title: `${SYLLABI[board].name} · ${g.name}`, reviseHref: "/practice", mockHref: "/exam/mock", items };

  // Long runways get two or three revision rounds; short ones one.
  const days = Math.max(0, (nextExamDate(exam).getTime() - Date.now()) / 86_400_000);
  const full = getMock(EXAM_META[exam].fullMock)!;
  const half = full.pair ? getMock(full.pair) : undefined;
  const name = EXAM_META[exam].short;
  return {
    title: `${g.name} · Classes 11 + 12`,
    reviseHref: `/exam/practice?exam=${exam}`,
    mockHref: `/exam/mock/${full.id}`,
    items,
    tailShare: days > 240 ? 0.22 : days > 90 ? 0.28 : 0.35,
    revision: { items, rounds: days > 240 ? 3 : days > 60 ? 2 : 1 },
    mocks: {
      full: { href: `/exam/mock/${full.id}`, minutes: full.minutes, label: { key: "plan.task.mockFull", en: "Full mock: {exam} ({h} h) + score check", vars: { exam: name, h: Math.round(full.minutes / 60) } } },
      half: half && { href: `/exam/mock/${half.id}`, minutes: half.minutes, label: { key: "plan.task.mockHalf", en: "Half-length mock: {exam} ({m} min)", vars: { exam: name, m: half.minutes } } },
    },
  };
};
