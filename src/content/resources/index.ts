import type { CaseStudy, CourseResources, Reading } from "./types";
import { cssResources } from "./css";
import { dsaResources } from "./dsa";
import { economicsResources } from "./economics";
import { electricalEngineeringResources } from "./electrical-engineering";
import { financeResources } from "./finance";
import { htmlResources } from "./html";
import { humanAnatomyResources } from "./human-anatomy";
import { javascriptResources } from "./javascript";
import { machineLearningResources } from "./machine-learning";
import { psychologyResources } from "./psychology";
import { pythonResources } from "./python";
import { sqlResources } from "./sql";
import { uxDesignResources } from "./ux-design";

export type { CaseStudy, Competency, CourseResources, Reading, ResourceType } from "./types";

/** Mastery-mode resources (case studies, reading lists, competency maps) keyed by course slug. */
export const RESOURCES: Record<string, CourseResources> = Object.fromEntries(
  [
    dsaResources,
    machineLearningResources,
    electricalEngineeringResources,
    humanAnatomyResources,
    financeResources,
    economicsResources,
    psychologyResources,
    uxDesignResources,
    htmlResources,
    cssResources,
    javascriptResources,
    pythonResources,
    sqlResources,
  ].map((r) => [r.course, r]),
);

export function resourcesFor(course: string): CourseResources | undefined {
  return RESOURCES[course];
}

export function caseStudy(course: string, slug: string): CaseStudy | undefined {
  return RESOURCES[course]?.caseStudies.find((c) => c.slug === slug);
}

export function caseStudyHref(course: string, slug: string) {
  return `/course/${course}/case-studies/${slug}`;
}

export function caseStudiesForUnit(course: string, unit: string): CaseStudy[] {
  return RESOURCES[course]?.caseStudies.filter((c) => c.units.includes(unit)) ?? [];
}

export function readingsForUnit(course: string, unit: string): Reading[] {
  return RESOURCES[course]?.readings[unit] ?? [];
}

export function allCaseStudies(): { course: string; study: CaseStudy }[] {
  return Object.values(RESOURCES).flatMap((r) => r.caseStudies.map((study) => ({ course: r.course, study })));
}
