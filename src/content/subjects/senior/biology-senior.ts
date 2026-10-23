import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const biologySenior: Subject = {
  slug: "biology-senior",
  title: "Biology · Class 11–12",
  world: "school",
  icon: "🧬",
  colors: ["#16a34a", "#db2777"],
  tagline: "Diversity, structure, reproduction and biotechnology, NCERT line by line.",
  description:
    "Class 11–12 biology: the living world, classification, plant and animal kingdoms, plant morphology and anatomy, biomolecules, growth, reproduction, evolution, health, microbes and biotechnology, with labelled diagrams and NEET-style practice.",
  levels: ["Class 11", "Class 12"],
  stages: ["secondary", "aspirant"],
  topics: extraTopics("biology-senior"),
};
