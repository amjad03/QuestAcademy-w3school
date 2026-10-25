import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "hindi";
/** Syllabus family: chapter titles below are matched against `hin` rows in src/content/syllabus/. */
export const family = "hin";

export const topics: Topic[] = [];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {};
