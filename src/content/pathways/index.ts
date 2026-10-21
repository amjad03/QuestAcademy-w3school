import type { Assignment, Pathway } from "./types";
import { webDeveloper } from "./web-developer";
import { dataAnalyst } from "./data-analyst";
import { pythonAutomation } from "./python-automation";
import { personalFinance } from "./personal-finance";
import { uxDesigner } from "./ux-designer";

export const pathways: Pathway[] = [webDeveloper, dataAnalyst, pythonAutomation, personalFinance, uxDesigner];

export function getPathway(slug: string) {
  return pathways.find((p) => p.slug === slug);
}

export function findAssignment(slug: string, id: string): { pathway: Pathway; assignment: Assignment; moduleIndex: number } | undefined {
  const pathway = getPathway(slug);
  if (!pathway) return undefined;
  for (let i = 0; i < pathway.modules.length; i++) {
    const a = pathway.modules[i].assignment;
    if (a.id === id) return { pathway, assignment: a, moduleIndex: i };
  }
  return undefined;
}

export function pathwayLessonIds(p: Pathway) {
  return Array.from(new Set(p.modules.flatMap((m) => m.lessonIds)));
}

export * from "./types";
