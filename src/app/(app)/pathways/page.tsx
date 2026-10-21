import { pathways } from "@/content/pathways";
import { pathwayHours } from "@/content/pathways/server";
import { PathwayCatalog } from "@/components/pathways/PathwayCatalog";

export const metadata = { title: "Pathways" };

export default function Page() {
  return <PathwayCatalog pathways={pathways} hours={Object.fromEntries(pathways.map((p) => [p.slug, pathwayHours(p)]))} />;
}
