"use client";

import { useEffect, useMemo, useState } from "react";
import { useLearner, type StudyPlan } from "@/lib/store";
import { buildPlan, type PlanResult } from "@/lib/planner";
import { PLAN_SOURCES, type PlanSourceResult } from "@/lib/plan-sources";
import { useHydrated } from "@/components/providers";

export interface LivePlan {
  plan: StudyPlan;
  source: PlanSourceResult;
  result: PlanResult;
}

/**
 * Loads the saved plan's source and rebuilds the schedule from today using live
 * progress, so the plan re-plans itself whenever the learner moves ahead or falls behind.
 */
export function usePlan(override?: StudyPlan | null): { live: LivePlan | null; loading: boolean } {
  const hydrated = useHydrated();
  const saved = useLearner((s) => s.plan);
  const plan = override === undefined ? saved : override;
  const items = useLearner((s) => s.items);
  const lessons = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const planDone = useLearner((s) => s.planDone);
  const challengesPassed = useLearner((s) => s.challengesPassed);
  const pathways = useLearner((s) => s.pathways);
  const profile = useLearner((s) => s.profile);
  const [source, setSource] = useState<{ key: string; value: PlanSourceResult | null } | null>(null);

  const key = plan ? `${plan.scope.type}:${plan.scope.id}` : "";
  useEffect(() => {
    if (!hydrated || !plan) return;
    let cancelled = false;
    PLAN_SOURCES[plan.scope.type](plan.scope.id, { items, lessons, mastery, planDone, challengesPassed, pathways, profile })
      .then((value) => !cancelled && setSource({ key, value }))
      .catch(() => !cancelled && setSource({ key, value: null }));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, key, items, lessons, mastery, planDone, challengesPassed, pathways, profile]);

  const live = useMemo(() => {
    if (!plan || !source || source.key !== key || !source.value) return null;
    const result = buildPlan({
      items: source.value.items,
      targetDate: plan.targetDate,
      hoursPerWeek: plan.hoursPerWeek,
      studyDays: plan.studyDays,
      reviseHref: source.value.reviseHref,
      mockHref: source.value.mockHref,
      tailShare: source.value.tailShare,
      revision: source.value.revision,
      mocks: source.value.mocks,
    });
    return { plan, source: source.value, result };
  }, [plan, source, key]);

  return { live, loading: Boolean(plan) && (!source || source.key !== key) };
}
