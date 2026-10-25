import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "math-high";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {};
