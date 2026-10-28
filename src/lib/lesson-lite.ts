/**
 * A slim lesson index (titles, links, minutes; no lesson bodies) for client
 * pages that only need names, such as the parent dashboard and insights.
 * Importing "@/content" in a client component ships every lesson (~16 MB of JS);
 * the server page hands this index over instead (see LessonIndex.tsx).
 */

export interface LiteSubject {
  slug: string;
  title: string;
  icon: string;
  colors: [string, string];
  /** topic slug → title */
  topics: Record<string, string>;
  /** [topic slug, lesson slug, title, minutes] in course order */
  lessons: [string, string, string, number][];
}

export interface LiteLessonRef {
  id: string;
  href: string;
  subject: { slug: string; title: string; icon: string; colors: [string, string] };
  topic: { slug: string; title: string };
  lesson: { slug: string; title: string; minutes: number };
  index: number;
}

let subjects = new Map<string, LiteSubject>();
const flat = new Map<string, LiteLessonRef[]>();
const byId = new Map<string, LiteLessonRef>();

export function setLessonIndex(list: LiteSubject[]) {
  if (subjects.size === list.length && list.every((s) => subjects.get(s.slug) === s)) return;
  subjects = new Map(list.map((s) => [s.slug, s]));
  flat.clear();
  byId.clear();
}

export function getSubject(slug: string): LiteSubject | undefined {
  return subjects.get(slug);
}

export function flatLessons(s: LiteSubject): LiteLessonRef[] {
  let out = flat.get(s.slug);
  if (out) return out;
  const subject = { slug: s.slug, title: s.title, icon: s.icon, colors: s.colors };
  out = s.lessons.map(([t, l, title, minutes], index) => ({
    id: `${s.slug}/${t}/${l}`,
    href: `/course/${s.slug}/${t}/${l}`,
    subject,
    topic: { slug: t, title: s.topics[t] ?? t },
    lesson: { slug: l, title, minutes },
    index,
  }));
  flat.set(s.slug, out);
  for (const r of out) byId.set(r.id, r);
  return out;
}

export function getLessonById(id: string): LiteLessonRef | undefined {
  const s = subjects.get(id.split("/")[0]);
  if (!s) return undefined;
  flatLessons(s);
  return byId.get(id);
}
