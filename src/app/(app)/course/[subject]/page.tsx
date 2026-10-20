import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { subjects } from "@/content";
import { courseOutline } from "@/content/course";
import { CourseOverview } from "@/components/course/CourseOverview";

type Params = { subject: string };

export function generateStaticParams(): Params[] {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const o = courseOutline((await params).subject);
  return o ? { title: o.title, description: o.description } : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const o = courseOutline((await params).subject);
  if (!o) notFound();
  return <CourseOverview outline={o} />;
}
