import type { StudyPlan } from "@/lib/store";
import { coursePlanSource } from "./course";
import { pathwayPlanSource } from "./pathway";
import { syllabusPlanSource } from "./syllabus";
import type { PlanSource } from "./types";

export const PLAN_SOURCES: Record<StudyPlan["scope"]["type"], PlanSource> = {
  course: coursePlanSource,
  syllabus: syllabusPlanSource,
  pathway: pathwayPlanSource,
};

export type { PlanSource, PlanState, PlanSourceResult } from "./types";
