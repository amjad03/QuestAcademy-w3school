"use client";

import { useEffect, useMemo, useState } from "react";
import type { Pathway } from "@/content/pathways";
import { dayKey } from "@/lib/gamification";
import { buildPlan } from "@/lib/planner";
import { loadLessonMeta, pathwayItems, pathwayProgress, type LessonMetaMap } from "@/lib/plan-sources/pathway";
import { useLearner, type StudyPlan } from "@/lib/store";

export function addDays(d: string, n: number) {
  const x = new Date(d + "T00:00:00");
  x.setDate(x.getDate() + n);
  return dayKey(x);
}

export function formatDate(d: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" }) {
  return new Date(d.length === 10 ? d + "T00:00:00" : d).toLocaleDateString("en-IN", opts);
}

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Lesson titles/minutes for pathway lessons (null while loading). */
export function useLessonMeta(initial?: LessonMetaMap) {
  const [meta, setMeta] = useState<LessonMetaMap | null>(initial ?? null);
  useEffect(() => {
    if (initial) return;
    let live = true;
    loadLessonMeta().then((m) => live && setMeta(m));
    return () => {
      live = false;
    };
  }, [initial]);
  return meta;
}

export function usePathwayState() {
  const lessons = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const pathways = useLearner((s) => s.pathways);
  return useMemo(() => ({ lessons, mastery, pathways }), [lessons, mastery, pathways]);
}

export function usePathwayProgress(p: Pathway | undefined) {
  const s = usePathwayState();
  return useMemo(() => (p ? pathwayProgress(p, s) : null), [p, s]);
}

/** The learner's schedule for this pathway, or a sensible default spread over the pathway's suggested weeks. */
export function scheduleFor(p: Pathway, plan: StudyPlan | null, totalHours: number) {
  if (plan?.scope.type === "pathway" && plan.scope.id === p.slug) return { ...plan, custom: true };
  return {
    targetDate: addDays(dayKey(), p.weeks * 7),
    hoursPerWeek: Math.max(3, Math.ceil(totalHours / p.weeks)),
    studyDays: [1, 2, 3, 4, 5],
    custom: false,
  };
}

/** Pathway items + a live plan built from progress, the learner's schedule and today's date. */
export function usePathwaySchedule(p: Pathway | undefined, initialMeta?: LessonMetaMap) {
  const meta = useLessonMeta(initialMeta);
  const s = usePathwayState();
  const plan = useLearner((st) => st.plan);
  return useMemo(() => {
    if (!p || !meta) return null;
    const items = pathwayItems(p, s, meta);
    const totalHours = items.reduce((t, i) => t + i.minutes, 0) / 60;
    const schedule = scheduleFor(p, plan, totalHours);
    const result = buildPlan({ items, targetDate: schedule.targetDate, hoursPerWeek: schedule.hoursPerWeek, studyDays: schedule.studyDays, reviseHref: `/pathways/${p.slug}`, mockHref: `/pathways/${p.slug}` });
    return { items, totalHours, schedule, plan: result, next: items.find((i) => !i.done) };
  }, [p, meta, s, plan]);
}
