import { notFound } from "next/navigation";
import { subjects } from "@/content";
import { courseOutline } from "@/content/course";
import { UnitOverview } from "@/components/course/UnitOverview";

type Params = { subject: string; unit: string };

export function generateStaticParams(): Params[] {
  return subjects.flatMap((s) => s.topics.map((t) => ({ subject: s.slug, unit: t.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { subject, unit } = await params;
  const o = courseOutline(subject);
  const u = o?.units.find((x) => x.slug === unit);
  return u ? { title: `${u.title} · ${o!.title}` } : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { subject, unit } = await params;
  const o = courseOutline(subject);
  const u = o?.units.find((x) => x.slug === unit);
  if (!o || !u) notFound();
  return <UnitOverview outline={o} unitSlug={u.slug} />;
}
