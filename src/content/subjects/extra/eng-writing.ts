import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "english";
/** Syllabus family: chapter titles below are matched against `eng` rows in src/content/syllabus/. */
export const family = "eng";

export const topics: Topic[] = [];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {};
