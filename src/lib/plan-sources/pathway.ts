import { getPathway, CERTIFICATE_RUBRIC_THRESHOLD, type Assignment, type Pathway } from "@/content/pathways";
import type { AssignmentSubmission } from "@/lib/store";
import type { PlanItem } from "@/lib/planner";
import type { PlanSource, PlanState } from "./types";

export interface LessonMeta {
  title: string;
  minutes: number;
  href: string;
  course: string;
}

export type LessonMetaMap = Record<string, LessonMeta>;

let metaPromise: Promise<LessonMetaMap> | null = null;

/** Titles and minutes for pathway lessons (static JSON, fetched once per session). */
export function loadLessonMeta(): Promise<LessonMetaMap> {
  metaPromise ??= fetch("/pathways/lessons.json")
    .then((r) => (r.ok ? (r.json() as Promise<LessonMetaMap>) : {}))
    .catch(() => {
      metaPromise = null;
      return {};
    });
  return metaPromise;
}

type ProgressState = Pick<PlanState, "lessons" | "mastery" | "pathways">;

export const lessonDone = (s: Pick<PlanState, "lessons" | "mastery">, id: string) => Boolean(s.lessons[id]) || (s.mastery[id] ?? 0) >= 2;

export const assignmentHref = (slug: string, id: string) => `/pathways/${slug}/assignments/${id}`;

/** Share of rubric points the learner self-checked (0–1). */
export function rubricScore(a: Assignment, sub: AssignmentSubmission | undefined) {
  if (!sub) return 0;
  const total = a.rubric.reduce((t, r) => t + r.points, 0);
  const got = sub.checklist.reduce((t, i) => t + (a.rubric[i]?.points ?? 0), 0);
  return total ? got / total : 0;
}

/** Ordered plan items for a pathway: each module's lessons, then its assignment. */
export function pathwayItems(p: Pathway, s: ProgressState, meta: LessonMetaMap): PlanItem[] {
  const seen = new Set<string>();
  return p.modules.flatMap((m) => {
    const lessons: PlanItem[] = m.lessonIds
      .filter((id) => !seen.has(id) && seen.add(id))
      .map((id) => ({ id, title: meta[id]?.title ?? id.split("/").pop()!.replace(/-/g, " "), minutes: Math.max(15, meta[id]?.minutes ?? 20), href: meta[id]?.href ?? `/course/${id}`, done: lessonDone(s, id), group: m.title }));
    const a = m.assignment;
    return [...lessons, { id: `assignment:${a.id}`, title: `Assignment: ${a.title}`, minutes: Math.round(a.estimatedHours * 60), href: assignmentHref(p.slug, a.id), done: Boolean(s.pathways.assignments[a.id]), group: m.title }];
  });
}

/** Progress summary used by the pathway pages, the certificate and the Professional home. */
export function pathwayProgress(p: Pathway, s: ProgressState) {
  const lessonIds = Array.from(new Set(p.modules.flatMap((m) => m.lessonIds)));
  const lessonsDone = lessonIds.filter((id) => lessonDone(s, id)).length;
  const assignments = p.modules.map((m) => {
    const sub = s.pathways.assignments[m.assignment.id];
    const score = rubricScore(m.assignment, sub);
    return { assignment: m.assignment, submitted: Boolean(sub), score, passed: Boolean(sub) && score >= CERTIFICATE_RUBRIC_THRESHOLD };
  });
  const modules = p.modules.map((m, i) => {
    const done = m.lessonIds.filter((id) => lessonDone(s, id)).length;
    const steps = m.lessonIds.length + 1;
    const completed = done + (assignments[i].submitted ? 1 : 0);
    return { title: m.title, completed, steps, fraction: completed / steps, complete: completed === steps };
  });
  const assignmentsDone = assignments.filter((a) => a.submitted).length;
  const total = lessonIds.length + assignments.length;
  return {
    lessonsDone,
    lessonsTotal: lessonIds.length,
    assignmentsDone,
    assignmentsTotal: assignments.length,
    assignments,
    modules,
    fraction: total ? (lessonsDone + assignmentsDone) / total : 0,
    eligible: lessonsDone === lessonIds.length && assignments.every((a) => a.passed),
    enrolled: s.pathways.enrolled.includes(p.slug),
    certificate: s.pathways.certificates[p.slug],
  };
}

/** Pathway plan source: every unfinished lesson and assignment, in module order. */
export const pathwayPlanSource: PlanSource = async (id, state) => {
  const p = getPathway(id);
  if (!p) return null;
  const meta = await loadLessonMeta();
  return { title: p.title, items: pathwayItems(p, state, meta), reviseHref: `/pathways/${p.slug}`, mockHref: `/pathways/${p.slug}` };
};
