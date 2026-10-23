import { ExplainOne } from "@/explainers/Gallery";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ExplainOne id={id} />;
}
