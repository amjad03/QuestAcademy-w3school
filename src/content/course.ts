/**
 * Khan-style course structure derived from the content model:
 *
 *   Course (Subject) → Unit (Topic) → Lesson → Items
 *     items: Video · Article · Practice · Flashcards · Coding challenge
 *   Each unit has a Unit quiz (first half) and a Unit test; each course has a
 *   Course challenge. Every lesson is one mastery "skill".
 */
import { flatLessons, getSubject, subjects } from "./index";
import type { Question, Subject, WorldId } from "./types";
import { lessonVideo } from "./videos";

export type ItemKind = "video" | "article" | "practice" | "cards" | "challenge";

export interface CourseItem {
  id: string;
  kind: ItemKind;
  title: string;
  href: string;
  minutes: number;
  xp: number;
}

export interface CourseLesson {
  id: string;
  slug: string;
  title: string;
  summary: string;
  href: string;
  unitSlug: string;
  items: CourseItem[];
  questions: number;
  minutes: number;
  hasVideo: boolean;
  /** "exam": an Exam edge lesson (JEE / NEET / CET depth). */
  track?: "exam";
}

export interface Assessment {
  key: string;
  kind: "quiz" | "test" | "challenge";
  title: string;
  href: string;
  questions: number;
  /** Lesson ids covered. */
  covers: string[];
}

export interface CourseUnit {
  slug: string;
  title: string;
  description: string;
  index: number;
  href: string;
  lessons: CourseLesson[];
  quiz?: Assessment;
  test: Assessment;
}

export interface CourseOutline {
  slug: string;
  title: string;
  world: WorldId;
  tagline: string;
  description: string;
  levels: string[];
  domain?: string;
  href: string;
  units: CourseUnit[];
  challenge: Assessment;
  stats: { lessons: number; videos: number; questions: number; minutes: number; skills: number };
}

export { ITEM_LABEL } from "./item-label";

/** All questions that belong to a lesson: end quiz + inline checkpoints. */
export function lessonQuestions(subjectSlug: string, unitSlug: string, lessonSlug: string): Question[] {
  const s = getSubject(subjectSlug);
  const l = s?.topics.find((t) => t.slug === unitSlug)?.lessons.find((x) => x.slug === lessonSlug);
  if (!l) return [];
  const checkpoints = l.blocks.flatMap((b) => (b.type === "checkpoint" ? b.questions : []));
  return [...(l.quiz ?? []), ...checkpoints];
}

const cache = new Map<string, CourseOutline>();

export function courseOutline(slug: string): CourseOutline | undefined {
  const hit = cache.get(slug);
  if (hit) return hit;
  const s = getSubject(slug);
  if (!s) return undefined;
  const outline = buildOutline(s);
  cache.set(slug, outline);
  return outline;
}

function buildOutline(s: Subject): CourseOutline {
  const base = `/course/${s.slug}`;
  const units: CourseUnit[] = s.topics.map((t, ti) => {
    const unitHref = `${base}/${t.slug}`;
    const lessons: CourseLesson[] = t.lessons.map((l) => {
      const id = `${s.slug}/${t.slug}/${l.slug}`;
      const href = `${unitHref}/${l.slug}`;
      const video = lessonVideo(id);
      const qCount = lessonQuestions(s.slug, t.slug, l.slug).length;
      const items: CourseItem[] = [];
      if (video) items.push({ id: `${id}:video`, kind: "video", title: video.title || l.title, href: `${href}?item=video`, minutes: Math.max(1, Math.round((video.duration ?? 300) / 60)), xp: 10 });
      items.push({ id: `${id}:article`, kind: "article", title: l.title, href: `${href}?item=article`, minutes: l.minutes, xp: l.xp });
      if (qCount) items.push({ id: `${id}:practice`, kind: "practice", title: `Practice: ${l.title}`, href: `/session/${s.slug}/${t.slug}/${l.slug}`, minutes: Math.max(2, Math.round(qCount * 0.8)), xp: qCount * 5 });
      if (l.flashcards?.length) items.push({ id: `${id}:cards`, kind: "cards", title: "Flashcards", href: `${href}?item=cards`, minutes: 2, xp: 5 });
      if (l.challenge) items.push({ id: `${id}:challenge`, kind: "challenge", title: l.challenge.title, href: `${href}?item=challenge`, minutes: 10, xp: 50 });
      return { id, slug: l.slug, title: l.title, summary: l.summary, href, unitSlug: t.slug, items, questions: qCount, minutes: items.reduce((a, i) => a + i.minutes, 0), hasVideo: Boolean(video), ...(l.track ? { track: l.track } : {}) };
    });
    const withQ = lessons.filter((l) => l.questions > 0);
    const half = withQ.slice(0, Math.ceil(withQ.length / 2));
    return {
      slug: t.slug,
      title: t.title,
      description: t.description,
      index: ti,
      href: unitHref,
      lessons,
      quiz:
        withQ.length >= 3
          ? { key: `${s.slug}/${t.slug}:quiz`, kind: "quiz", title: `Quiz 1 · ${t.title}`, href: `/session/${s.slug}/${t.slug}/quiz`, questions: Math.min(8, half.length * 2), covers: half.map((l) => l.id) }
          : undefined,
      test: { key: `${s.slug}/${t.slug}:test`, kind: "test", title: `Unit test · ${t.title}`, href: `/session/${s.slug}/${t.slug}/test`, questions: Math.min(12, withQ.length * 3), covers: withQ.map((l) => l.id) },
    };
  });
  const all = units.flatMap((u) => u.lessons);
  const withQ = all.filter((l) => l.questions > 0);
  return {
    slug: s.slug,
    title: s.title,
    world: s.world,
    tagline: s.tagline,
    description: s.description,
    levels: s.levels,
    domain: s.domain,
    href: base,
    units,
    challenge: { key: `${s.slug}:challenge`, kind: "challenge", title: "Course challenge", href: `/session/${s.slug}/challenge`, questions: Math.min(24, Math.max(10, withQ.length * 2)), covers: withQ.map((l) => l.id) },
    stats: {
      lessons: all.length,
      videos: all.filter((l) => l.hasVideo).length,
      questions: all.reduce((a, l) => a + l.questions, 0),
      minutes: all.reduce((a, l) => a + l.minutes, 0),
      skills: all.length,
    },
  };
}

export function allCourseOutlines() {
  return subjects.map((s) => courseOutline(s.slug)!);
}

/** Light-weight card data for catalogues. */
export function courseCard(slug: string) {
  const o = courseOutline(slug)!;
  return {
    slug: o.slug,
    title: o.title,
    world: o.world,
    tagline: o.tagline,
    levels: o.levels,
    domain: o.domain,
    href: o.href,
    units: o.units.length,
    lessons: o.stats.lessons,
    videos: o.stats.videos,
    lessonIds: o.units.flatMap((u) => u.lessons.map((l) => l.id)),
    stages: getSubject(slug)?.stages ?? [],
    /** Unit slugs and titles, in order (units are a class's chapters for course-based classes). */
    unitList: o.units.map((u) => [u.slug, u.title] as [string, string]),
  };
}

export type CourseCard = ReturnType<typeof courseCard>;

export function lessonContext(subject: string, unit: string, lesson: string) {
  const outline = courseOutline(subject);
  if (!outline) return undefined;
  const u = outline.units.find((x) => x.slug === unit);
  const l = u?.lessons.find((x) => x.slug === lesson);
  if (!u || !l) return undefined;
  const flat = flatLessons(getSubject(subject)!);
  const i = flat.findIndex((x) => x.id === l.id);
  return { outline, unit: u, lesson: l, ref: flat[i], prev: flat[i - 1], next: flat[i + 1] };
}

/** Questions for an assessment, spread across the lessons it covers. */
export function assessmentQuestions(a: Assessment): { lessonId: string; question: Question }[] {
  const perLesson = Math.max(1, Math.ceil(a.questions / Math.max(1, a.covers.length)));
  const out: { lessonId: string; question: Question }[] = [];
  for (const id of a.covers) {
    const [s, u, l] = id.split("/");
    const qs = lessonQuestions(s, u, l);
    for (const q of qs.slice(0, perLesson + 1)) out.push({ lessonId: id, question: q });
  }
  return out;
}
