import { allLessons } from "@/content";

export const dynamic = "force-static";

/** id → title/href/course for every lesson (used by Practice to list weak skills). */
export function GET() {
  return Response.json(Object.fromEntries(allLessons().map((l) => [l.id, { title: l.lesson.title, href: l.href, course: l.subject.slug, practice: `/session/${l.id}` }])));
}
