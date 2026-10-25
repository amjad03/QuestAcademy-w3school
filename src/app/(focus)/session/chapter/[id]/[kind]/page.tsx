import { notFound } from "next/navigation";
import { Session, type SessionPayload } from "@/components/session/Session";
import { courseOutline, lessonQuestions } from "@/content/course";
import { syllabusChapterById } from "@/content/my-class";

type Params = { id: string; kind: string };

/**
 * Chapter practice / test for a class chapter, across all its lessons.
 *   /session/chapter/kseeb_10_maths_2/test      a board syllabus chapter ("_" for ":")
 *   /session/chapter/u.math-middle.integers/practice   a course unit used as a chapter
 */
function build({ id, kind }: Params): SessionPayload | null {
  if (kind !== "practice" && kind !== "test") return null;
  let title: string;
  let lessonIds: string[];
  let course: { slug: string; title: string };
  let exitHref: string;
  if (id.startsWith("u.")) {
    const [, slug, topic] = id.split(".");
    const o = courseOutline(slug);
    const u = o?.units.find((x) => x.slug === topic);
    if (!o || !u) return null;
    title = u.title;
    lessonIds = u.lessons.map((l) => l.id);
    course = { slug: o.slug, title: o.title };
    exitHref = `/class/${slug}/${topic}`;
  } else {
    const found = syllabusChapterById(id.replace(/_/g, ":"));
    if (!found) return null;
    title = found.chapter.title;
    lessonIds = found.chapter.lessonIds;
    const first = lessonIds[0]?.split("/")[0];
    const o = first ? courseOutline(first) : null;
    course = o ? { slug: o.slug, title: o.title } : { slug: "class", title: found.myClass.name };
    exitHref = `/class/${found.subject.id}/${found.chapter.slug}`;
  }
  const pool = lessonIds.flatMap((lid) => {
    const [s, u, l] = lid.split("/");
    return lessonQuestions(s, u, l).map((question) => ({ lessonId: lid, question }));
  });
  if (!pool.length) return null;
  const o = courseOutline(lessonIds[0].split("/")[0]);
  const titles = new Map(o?.units.flatMap((u) => u.lessons.map((l) => [l.id, l.title] as const)) ?? []);
  const count = kind === "test" ? Math.min(15, Math.max(8, lessonIds.length * 4)) : Math.min(10, pool.length);
  return {
    kind: kind === "test" ? "test" : "quiz",
    key: `chapter:${id}:${kind}`,
    title: kind === "test" ? `Chapter test: ${title}` : `Practice: ${title}`,
    count: Math.min(count, pool.length),
    pool,
    exitHref,
    course,
    world: o?.world ?? "school",
    lessons: lessonIds.map((lid) => ({ id: lid, title: titles.get(lid) ?? lid.split("/")[2] })),
  };
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const p = build(await params);
  return { title: p?.title ?? "Session" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = build(await params);
  if (!p) notFound();
  return <Session key={p.key} payload={p} />;
}
