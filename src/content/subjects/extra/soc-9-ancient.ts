import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

export const topics: Topic[] = [];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {};
