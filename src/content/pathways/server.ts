/** Server-only helpers: resolve pathway lessons against the content library. */
import { getLessonById } from "@/content";
import type { LessonMetaMap } from "@/lib/plan-sources/pathway";
import { pathwayLessonIds, pathways } from "./index";
import type { Pathway } from "./types";

export function lessonMetaFor(list: Pathway[] = pathways): LessonMetaMap {
  const ids = Array.from(new Set(list.flatMap(pathwayLessonIds)));
  return Object.fromEntries(
    ids.map((id) => {
      const l = getLessonById(id);
      return [id, { title: l?.lesson.title ?? id, minutes: l?.lesson.minutes ?? 15, href: l?.href ?? `/course/${id}`, course: l?.subject.title ?? id.split("/")[0] }];
    }),
  );
}

/** Estimated total study hours: lesson minutes (min 15 each) plus assignment estimates. */
export function pathwayHours(p: Pathway, meta = lessonMetaFor([p])) {
  const lessonMin = pathwayLessonIds(p).reduce((t, id) => t + Math.max(15, meta[id]?.minutes ?? 20), 0);
  return Math.round(lessonMin / 60 + p.modules.reduce((t, m) => t + m.assignment.estimatedHours, 0));
}
