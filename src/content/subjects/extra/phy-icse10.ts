import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "physics-school";

export const topics: Topic[] = [];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {};
