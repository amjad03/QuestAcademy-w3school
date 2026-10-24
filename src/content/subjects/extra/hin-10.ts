import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "hindi";
/** Syllabus family: chapter titles below are matched against `hin` rows in src/content/syllabus/. */
export const family = "hin";

export const topics: Topic[] = [];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {};
