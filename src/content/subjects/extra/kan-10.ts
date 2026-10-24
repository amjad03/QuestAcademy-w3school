import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "kannada";
/** Syllabus family: chapter titles below are matched against `kan` rows in src/content/syllabus/. */
export const family = "kan";

export const topics: Topic[] = [];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {};
