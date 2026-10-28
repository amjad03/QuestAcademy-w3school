"use client";

import { useMemo } from "react";
import { useLearner } from "@/lib/store";
import { useMyClass } from "@/lib/useMyClass";
import { useHydrated } from "@/components/providers";

/** Who the explainers are for: the learner's age and the explainer areas their subjects cover. */
export interface ExplainerContext {
  age: number;
  areas: Set<string>;
  /** Every lesson in the learner's class (an explainer tied to one of them is always relevant). */
  lessonIds: Set<string>;
}

/** Typical age for a class / year ("PUC-1" → 16, "7" → 12). */
export function ageForGrade(grade: string | null | undefined): number | null {
  if (!grade) return null;
  if (grade === "pre") return 4;
  if (/^\d+$/.test(grade)) return Number(grade) + 5;
  if (grade === "PUC-1") return 16;
  if (/^(PUC-2|NEET|JEE|JEE_ADV|KCET|COMEDK)$/.test(grade)) return 17;
  return null;
}

/** Explainer areas a class subject (syllabus id or course slug) covers. */
function areasFor(subject: string): string[] {
  const s = subject.toLowerCase();
  if (/math/.test(s)) return ["Maths"];
  if (/phys/.test(s)) return ["Physics", "Science"];
  if (/chem/.test(s)) return ["Chemistry", "Science"];
  if (/bio/.test(s)) return ["Biology", "Science"];
  if (/science|my-world|evs/.test(s) && !/computer|social/.test(s)) return ["Science", "Physics", "Chemistry", "Biology"];
  if (/^(cs|computers?)$|computer|coding|python|electronics|javascript|dsa/.test(s)) return ["Coding", "Computer science"];
  return [];
}

const range = (ages: string) => {
  const [a, b] = ages.split(/[–-]/).map((x) => Number(x.trim()));
  return { min: Number.isFinite(a) ? a : 0, max: Number.isFinite(b) ? b : Number.isFinite(a) ? a : 99 };
};

/** Is this explainer pitched at the learner and about one of their subjects? */
export function isRelevant(e: { ages: string; area: string; lessons?: string[] }, ctx: ExplainerContext): boolean {
  const { min, max } = range(e.ages);
  // Pitched at the learner's age (a year's slack either way)…
  const ageOk = ctx.age >= min - 1 && ctx.age <= max + 1;
  // …and about one of their subjects, or tied to a lesson in their class.
  const linked = (e.lessons ?? []).some((l) => ctx.lessonIds.has(l));
  return ageOk && (ctx.areas.has(e.area) || linked);
}

/** The signed-in learner's explainer context, or null when we know nothing about them (show everything). */
export function useExplainerContext(): ExplainerContext | null {
  const hydrated = useHydrated();
  const mc = useMyClass();
  const age = useLearner((s) => s.profile.age);
  return useMemo(() => {
    if (!hydrated) return null;
    const a = ageForGrade(mc?.myClass.grade) ?? age ?? null;
    if (a == null || !mc) return null;
    const areas = new Set<string>();
    const lessonIds = new Set<string>();
    for (const s of mc.subjects) {
      for (const x of [...areasFor(s.id), ...areasFor(s.icon)]) areas.add(x);
      for (const ch of s.chapters) for (const l of ch.lessonIds) lessonIds.add(l);
    }
    return { age: a, areas, lessonIds };
  }, [hydrated, mc, age]);
}
