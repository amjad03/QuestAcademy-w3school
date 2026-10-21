import { notFound } from "next/navigation";
import { getPathway, pathways } from "@/content/pathways";
import { lessonMetaFor, pathwayHours } from "@/content/pathways/server";
import { PathwayDetail } from "@/components/pathways/PathwayDetail";

export function generateStaticParams() {
  return pathways.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPathway((await params).slug);
  return { title: p ? `${p.title} pathway` : "Pathway" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPathway((await params).slug);
  if (!p) notFound();
  const meta = lessonMetaFor([p]);
  return <PathwayDetail pathway={p} meta={meta} hours={pathwayHours(p, meta)} />;
}
