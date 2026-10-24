import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "general-knowledge";
/** Syllabus family: chapter titles below are matched against `gk` rows in src/content/syllabus/. */
export const family = "gk";

export const topics: Topic[] = [];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {};
