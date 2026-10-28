import "server-only";
import { subjects } from "@/content";
import type { LiteSubject } from "./lesson-lite";

let cache: LiteSubject[] | null = null;

/** Builds the slim lesson index from the full content (server only). */
export function lessonIndex(): LiteSubject[] {
  if (cache) return cache;
  cache = subjects.map((s) => ({
    slug: s.slug,
    title: s.title,
    icon: s.icon,
    colors: s.colors,
    topics: Object.fromEntries(s.topics.map((t) => [t.slug, t.title])),
    lessons: s.topics.flatMap((t) => t.lessons.map((l) => [t.slug, l.slug, l.title, l.minutes] as [string, string, string, number])),
  }));
  return cache;
}
