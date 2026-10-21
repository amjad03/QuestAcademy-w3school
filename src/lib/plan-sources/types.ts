import type { LearnerState } from "@/lib/store";
import type { PlanItem } from "@/lib/planner";

/** Learner progress available to plan sources. */
export type PlanState = Pick<LearnerState, "items" | "lessons" | "challengesPassed" | "mastery" | "pathways" | "planDone" | "profile">;

export interface PlanSourceResult {
  title: string;
  items: PlanItem[];
  reviseHref?: string;
  mockHref?: string;
}

/** Async so sources can fetch static JSON (course outlines, syllabus data). */
export type PlanSource = (id: string, state: PlanState) => Promise<PlanSourceResult | null>;
