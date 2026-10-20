import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findLesson, flatLessons, subjects } from "@/content";
import { LessonPlayer } from "@/components/learn/LessonPlayer";
import { KidsLessonPlayer } from "@/components/learn/KidsLessonPlayer";
import type { LessonPayload } from "@/components/learn/types";

type Params = { subject: string; topic: string; lesson: string };

export function generateStaticParams(): Params[] {
  return subjects.flatMap((s) => flatLessons(s).map((l) => ({ subject: s.slug, topic: l.topic.slug, lesson: l.lesson.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subject, topic, lesson } = await params;
  const found = findLesson(subject, topic, lesson);
  if (!found) return {};
  return { title: `${found.ref.lesson.title} — ${found.ref.subject.title}`, description: found.ref.lesson.summary };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { subject, topic, lesson } = await params;
  const found = findLesson(subject, topic, lesson);
  if (!found) notFound();
  const { ref, prev, next, all } = found;
  const s = ref.subject;

  const payload: LessonPayload = {
    id: ref.id,
    lesson: ref.lesson,
    world: s.world,
    subject: { slug: s.slug, title: s.title, icon: s.icon, colors: s.colors },
    topic: { slug: ref.topic.slug, title: ref.topic.title, icon: ref.topic.icon },
    outline: s.topics.map((t) => ({
      slug: t.slug,
      title: t.title,
      icon: t.icon,
      lessons: all.filter((l) => l.topic.slug === t.slug).map((l) => ({ id: l.id, href: l.href, title: l.lesson.title, minutes: l.lesson.minutes })),
    })),
    prev: prev && { href: prev.href, title: prev.lesson.title },
    next: next && { href: next.href, title: next.lesson.title },
    position: { index: ref.index, total: all.length },
  };

  return s.world === "kids" ? <KidsLessonPlayer {...payload} /> : <LessonPlayer {...payload} />;
}
