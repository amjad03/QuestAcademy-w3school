import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-applications";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

export const topics: Topic[] = [];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {};
