/**
 * Writes src/content/syllabus/chapter-links.json from the Class 9–12 batch files, so the syllabus and
 * My class code (which runs in the browser) read a small JSON instead of bundling every lesson.
 * Runs before `next build`; re-run after editing batch links: npx tsx --tsconfig tsconfig.json scripts/gen-chapter-links.ts
 */
import fs from "node:fs";
import path from "node:path";
import { CHAPTER_LESSONS, EXTRA_TOPICS } from "@/content/subjects/extra";

const out = path.resolve(__dirname, "../src/content/syllabus/chapter-links.json");
fs.writeFileSync(out, JSON.stringify({ chapterLessons: CHAPTER_LESSONS, extraTopics: [...EXTRA_TOPICS].sort() }) + "\n");
console.log("chapter-links.json:", Object.keys(CHAPTER_LESSONS).length, "chapters,", EXTRA_TOPICS.size, "extra topics");
