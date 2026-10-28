import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { flatLessons, subjects } from "@/content";
import { lessonContext } from "@/content/course";
import { lessonVideo, videoChannel } from "@/content/videos";
import { LessonViewer, type LessonViewerPayload } from "@/components/lesson/LessonViewer";

type Params = { subject: string; unit: string; lesson: string };

// Rendered on first visit and then cached: prebuilding every page made the build exceed the host time limit.
export function generateStaticParams(): Params[] {
  return [];
}

function allParams(): Params[] {
  return subjects.flatMap((s) => flatLessons(s).map((l) => ({ subject: s.slug, unit: l.topic.slug, lesson: l.lesson.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subject, unit, lesson } = await params;
  const c = lessonContext(subject, unit, lesson);
  return c ? { title: `${c.lesson.title} · ${c.outline.title}`, description: c.lesson.summary } : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { subject, unit, lesson } = await params;
  const c = lessonContext(subject, unit, lesson);
  if (!c) notFound();
  const payload: LessonViewerPayload = {
    id: c.lesson.id,
    world: c.outline.world,
    course: { slug: c.outline.slug, title: c.outline.title, href: c.outline.href },
    unit: { slug: c.unit.slug, title: c.unit.title, href: c.unit.href, index: c.unit.index, lessons: c.unit.lessons, quiz: c.unit.quiz, test: c.unit.test },
    lesson: c.ref.lesson,
    items: c.lesson.items,
    video: lessonVideo(c.lesson.id) ?? null,
    channel: videoChannel,
    prev: c.prev ? { href: c.prev.href, title: c.prev.lesson.title } : null,
    next: c.next ? { href: c.next.href, title: c.next.lesson.title } : null,
  };
  return (
    <Suspense>
      <LessonViewer {...payload} />
    </Suspense>
  );
}
