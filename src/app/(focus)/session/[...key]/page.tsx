import { notFound } from "next/navigation";
import { subjects } from "@/content";
import { assessmentQuestions, courseOutline, lessonQuestions } from "@/content/course";
import { Session, type SessionPayload } from "@/components/session/Session";

type Params = { key: string[] };

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const s of subjects) {
    const o = courseOutline(s.slug)!;
    out.push({ key: [s.slug, "challenge"] });
    for (const u of o.units) {
      for (const l of u.lessons) if (l.questions) out.push({ key: [s.slug, u.slug, l.slug] });
      if (u.quiz) out.push({ key: [s.slug, u.slug, "quiz"] });
      out.push({ key: [s.slug, u.slug, "test"] });
    }
  }
  return out;
}

function build(key: string[]): SessionPayload | null {
  const [subject, unitOrChallenge, third] = key;
  const o = courseOutline(subject);
  if (!o) return null;
  const base = { course: { slug: o.slug, title: o.title }, world: o.world };

  if (unitOrChallenge === "challenge" && key.length === 2) {
    return { ...base, kind: "challenge", key: o.challenge.key, title: "Course challenge", count: o.challenge.questions, pool: assessmentQuestions(o.challenge), exitHref: o.href, lessons: o.units.flatMap((u) => u.lessons.map((l) => ({ id: l.id, title: l.title }))) };
  }
  const u = o.units.find((x) => x.slug === unitOrChallenge);
  if (!u || !third) return null;
  if (third === "quiz" || third === "test") {
    const a = third === "quiz" ? u.quiz : u.test;
    if (!a) return null;
    return { ...base, kind: a.kind, key: a.key, title: a.kind === "test" ? `Unit test: ${u.title}` : `Quiz: ${u.title}`, count: a.questions, pool: assessmentQuestions(a), exitHref: u.href, lessons: u.lessons.map((l) => ({ id: l.id, title: l.title })) };
  }
  const l = u.lessons.find((x) => x.slug === third);
  if (!l) return null;
  const qs = lessonQuestions(subject, u.slug, l.slug);
  if (!qs.length) return null;
  return { ...base, kind: "practice", key: l.id, title: l.title, count: qs.length, pool: qs.map((q) => ({ lessonId: l.id, question: q })), exitHref: l.href, lessons: [{ id: l.id, title: l.title }] };
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const p = build((await params).key);
  return { title: p ? `${p.kind === "practice" ? "Practice" : ""} ${p.title}`.trim() : "Session" };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = build((await params).key);
  if (!p) notFound();
  return <Session {...p} />;
}
