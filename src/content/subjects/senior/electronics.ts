import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const electronics: Subject = {
  slug: "electronics",
  title: "Electronics · I and II PUC",
  world: "school",
  icon: "🔌",
  colors: ["#0891b2", "#2563eb"],
  tagline: "Components, circuits, amplifiers, communication and digital electronics for Karnataka PUC.",
  description:
    "Electronics for the PCME stream, chapter by chapter: passive components and network theorems, diodes and transistors, amplifiers and oscillators, op-amps, communication systems and digital circuits, with circuit-by-circuit explanations, solved numericals and board-style practice.",
  levels: ["Class 11", "Class 12"],
  stages: ["secondary"],
  topics: extraTopics("electronics"),
};
