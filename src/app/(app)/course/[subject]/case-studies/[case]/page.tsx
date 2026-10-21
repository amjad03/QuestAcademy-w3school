import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courseOutline } from "@/content/course";
import { allCaseStudies, caseStudy } from "@/content/resources";
import { CaseStudyView } from "@/components/mastery/CaseStudyView";

type Params = { subject: string; case: string };

export function generateStaticParams(): Params[] {
  return allCaseStudies()
    .filter(({ course }) => courseOutline(course))
    .map(({ course, study }) => ({ subject: course, case: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const study = caseStudy(p.subject, p.case);
  return study ? { title: `${study.title} · Case study`, description: study.summary } : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = await params;
  const outline = courseOutline(p.subject);
  const study = caseStudy(p.subject, p.case);
  if (!outline || !study) notFound();
  const units = outline.units.filter((u) => study.units.includes(u.slug)).map((u) => ({ slug: u.slug, title: u.title, href: u.href }));
  return <CaseStudyView course={outline.slug} courseTitle={outline.title} study={study} units={units} />;
}
