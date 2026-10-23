import type { Metadata } from "next";
import { ExplainGallery } from "@/explainers/Gallery";

export const metadata: Metadata = { title: "See it — visual explainers", description: "Big ideas explained with pictures, animations, stories and hands-on play." };

export default function Page() {
  return <ExplainGallery />;
}
