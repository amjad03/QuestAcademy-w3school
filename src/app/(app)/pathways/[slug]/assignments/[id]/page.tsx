import { notFound } from "next/navigation";
import { findAssignment, pathways } from "@/content/pathways";
import { lessonMetaFor } from "@/content/pathways/server";
import { AssignmentWorkspace } from "@/components/pathways/AssignmentWorkspace";

export function generateStaticParams() {
  return pathways.flatMap((p) => p.modules.map((m) => ({ slug: p.slug, id: m.assignment.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params;
  const f = findAssignment(slug, id);
  return { title: f ? `${f.assignment.title} · ${f.pathway.title}` : "Assignment" };
}

export default async function Page({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params;
  const f = findAssignment(slug, id);
  if (!f) notFound();
  return <AssignmentWorkspace pathway={f.pathway} assignment={f.assignment} moduleIndex={f.moduleIndex} meta={lessonMetaFor([f.pathway])} />;
}
