import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { catalogSubject, getSubject, subjectStats, subjects } from "@/content";
import { worldById } from "@/content/worlds";
import { SubjectView } from "@/components/subject/SubjectView";

type Params = { subject: string };

export function generateStaticParams(): Params[] {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const s = getSubject((await params).subject);
  return s ? { title: s.title, description: s.description } : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const s = getSubject((await params).subject);
  if (!s) notFound();
  return (
    <SubjectView
      subject={catalogSubject(s)}
      description={s.description}
      topics={s.topics.map((t) => ({ slug: t.slug, title: t.title, icon: t.icon, description: t.description }))}
      stats={subjectStats(s)}
      world={worldById[s.world]}
    />
  );
}
