"use client";

import { useEffect, useMemo, useState } from "react";
import { useBcp47, useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useCatalog } from "@/components/shell/CatalogContext";
import { examDateFor, getGrade, resolveBoardGrade } from "@/content/syllabus";
import type { WorldId } from "@/content/types";
import type { ModeId } from "@/lib/modes";

/** "Good morning, Asha" — translated, time-of-day aware. */
export function useGreeting() {
  const t = useT();
  const name = useLearner((s) => s.profile.name);
  const hydrated = useHydrated();
  const first = hydrated && name && name !== "Learner" ? name.trim().split(/\s+/)[0] : "";
  const h = hydrated ? new Date().getHours() : 12;
  if (h < 12) return first ? t("khan.greet.morningName", "Good morning, {name}", { name: first }) : t("khan.greet.morning", "Good morning");
  if (h < 17) return first ? t("khan.greet.afternoonName", "Good afternoon, {name}", { name: first }) : t("khan.greet.afternoon", "Good afternoon");
  return first ? t("khan.greet.eveningName", "Good evening, {name}", { name: first }) : t("khan.greet.evening", "Good evening");
}

/** Locale-aware number and date formatting. */
export function useFmt() {
  const bcp = useBcp47();
  return useMemo(() => {
    const nf = new Intl.NumberFormat(bcp);
    return {
      n: (x: number) => nf.format(x),
      pct: (x: number) => new Intl.NumberFormat(bcp, { style: "percent", maximumFractionDigits: 0 }).format(x),
      date: (d: Date | string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" }) => {
        const x = typeof d === "string" ? new Date(d.length === 10 ? `${d}T00:00:00` : d) : d;
        return Number.isNaN(x.getTime()) ? String(d) : x.toLocaleDateString(bcp, opts);
      },
      bcp,
    };
  }, [bcp]);
}

/** Courses the learner is taking: current course first, then most recently started. */
export function useMyCourses(limit = 6) {
  const catalog = useCatalog();
  const hydrated = useHydrated();
  const current = useLearner((s) => s.profile.course);
  const started = useLearner((s) => s.subjectsStarted);
  return useMemo(() => {
    if (!hydrated) return [];
    const ids = [...new Set([current, ...[...started].reverse()].filter((x): x is string => Boolean(x)))];
    return ids
      .map((id) => catalog.find((c) => c.slug === id))
      .filter((c): c is NonNullable<typeof c> => Boolean(c))
      .slice(0, limit);
  }, [catalog, current, started, hydrated, limit]);
}

/** Days until the learner's board / entrance exam, from their syllabus profile. */
export function useExamCountdown() {
  const hydrated = useHydrated();
  const profile = useLearner((s) => s.profile);
  return useMemo(() => {
    if (!hydrated) return null;
    const { board, grade } = resolveBoardGrade(profile.board, profile.grade, profile.stage);
    const g = getGrade(board, grade);
    const date = g ? examDateFor(g) : null;
    if (!g?.exam || !date) return null;
    const days = Math.max(0, Math.ceil((date.getTime() - Date.now()) / 86_400_000));
    return { days, name: g.exam.name, date, approx: !("examId" in g.exam) };
  }, [hydrated, profile.board, profile.grade, profile.stage]);
}

/** Worlds in the order that suits each stage (kids' world is never listed here). */
export function worldOrder(mode: ModeId): WorldId[] {
  switch (mode) {
    case "adventure":
      return ["school", "code", "exam", "campus"];
    case "focus":
      return ["school", "exam", "code", "campus"];
    default:
      return ["campus", "code", "school", "exam"];
  }
}

export interface ExplainerMeta {
  id: string;
  title: string;
  tagline: string;
  area: string;
  color: string;
  ages: string;
}

let explainerCache: { all: ExplainerMeta[]; byLesson: Record<string, string[]> } | null = null;

/**
 * Explainer metadata, loaded on demand so the home screen doesn't ship every
 * explainer's artwork. null while loading.
 */
export function useExplainerIndex() {
  const [data, setData] = useState(explainerCache);
  useEffect(() => {
    if (explainerCache) return;
    let live = true;
    import("@/explainers")
      .then((m) => {
        const byLesson: Record<string, string[]> = {};
        const all = m.EXPLAINERS.map((e) => {
          e.lessons.forEach((l) => (byLesson[l] ??= []).push(e.id));
          return { id: e.id, title: e.title, tagline: e.tagline, area: e.area, color: e.color, ages: e.ages };
        });
        explainerCache = { all, byLesson };
        if (live) setData(explainerCache);
      })
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, []);
  return data;
}

/** Upper age an explainer is pitched at ("8–16" → 16). */
export const explainerMaxAge = (ages: string) => Number(ages.split(/[–-]/).pop()) || 99;
