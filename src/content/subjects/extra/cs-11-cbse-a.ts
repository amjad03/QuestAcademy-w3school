import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

export const topics: Topic[] = [];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {};
