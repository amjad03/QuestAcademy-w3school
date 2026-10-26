import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "electronics";
/** Syllabus family: chapter titles below are matched against `ele` rows in src/content/syllabus/. */
export const family = "ele";

export const topics: Topic[] = [];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {};
