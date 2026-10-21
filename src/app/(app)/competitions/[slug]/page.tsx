import { notFound } from "next/navigation";
import { competitions, getCompetition } from "@/content/competitions";
import { CompetitionDetail } from "@/components/competitions/CompetitionDetail";

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCompetition((await params).slug);
  return { title: c ? c.name : "Competition", description: c?.short };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCompetition((await params).slug);
  if (!c) notFound();
  return <CompetitionDetail c={c} />;
}
