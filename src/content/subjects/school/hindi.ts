import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const hindi: Subject = {
  slug: "hindi",
  title: "Hindi · Grammar and Writing",
  world: "school",
  icon: "🪔",
  colors: ["#ea580c", "#be123c"],
  tagline: "Hindi grammar and writing at second and third language level, explained simply.",
  description:
    "Hindi grammar and writing for CBSE, ICSE and Karnataka SSLC: sentence types, voice, compounds, idioms, vocabulary, letters, paragraphs and unseen passages, explained in simple English with Hindi examples and practice.",
  levels: ["Grade 10"],
  stages: ["secondary"],
  topics: extraTopics("hindi"),
};
