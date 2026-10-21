import { notFound } from "next/navigation";
import { getPathway, pathways } from "@/content/pathways";
import { CertificateView } from "@/components/pathways/CertificateView";

export function generateStaticParams() {
  return pathways.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPathway((await params).slug);
  return { title: p ? `Certificate · ${p.title}` : "Certificate" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPathway((await params).slug);
  if (!p) notFound();
  return <CertificateView pathway={p} />;
}
