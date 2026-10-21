import type { CourseOutline } from "@/content/course";
import { lessonProgress } from "@/lib/progress";
import type { PlanSource } from "./types";

/** Plan for a single course: every unfinished lesson, weakest skills first. */
export const coursePlanSource: PlanSource = async (id, state) => {
  const r = await fetch(`/course-data/${id}`);
  if (!r.ok) return null;
  const o = (await r.json()) as CourseOutline;
  return {
    title: o.title,
    reviseHref: "/practice",
    mockHref: o.challenge.href,
    items: o.units.flatMap((u) =>
      u.lessons.map((l) => {
        const p = lessonProgress(state, l);
        return { id: l.id, title: l.title, minutes: Math.max(10, l.minutes), href: p.nextItem.href, done: p.complete && p.level >= 3, priority: p.level === 1 ? 1 : 0, group: u.title };
      }),
    ),
  };
};
