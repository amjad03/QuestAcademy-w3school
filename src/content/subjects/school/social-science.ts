import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const socialScience: Subject = {
  slug: "social-science",
  title: "Social Science · Class 9–10",
  world: "school",
  icon: "🏛️",
  colors: ["#c2410c", "#0f766e"],
  tagline: "History, geography, civics and economics for the board exams, made simple.",
  description:
    "Board-aligned social science for CBSE, ICSE and Karnataka SSLC: the national movement and modern world history, the resources and geography of India, how our government works, and the economics of development, money and consumers, with maps, timelines, worked answers and practice.",
  levels: ["Grade 10"],
  stages: ["secondary"],
  topics: extraTopics("social-science"),
};
