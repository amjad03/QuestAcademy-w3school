import type { Lesson, WorldId } from "@/content/types";

/** Everything the lesson player needs, assembled on the server. */
export interface LessonPayload {
  id: string;
  lesson: Lesson;
  world: WorldId;
  subject: { slug: string; title: string; icon: string; colors: [string, string] };
  topic: { slug: string; title: string; icon: string };
  outline: { slug: string; title: string; icon: string; lessons: { id: string; href: string; title: string; minutes: number }[] }[];
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
  position: { index: number; total: number };
}
