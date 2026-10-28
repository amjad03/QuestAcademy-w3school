import { ExplainOne } from "@/explainers/Gallery";

// Rendered on first visit, then served from the cache (no per-request server render).
export function generateStaticParams() {
  return [];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ExplainOne id={id} />;
}
