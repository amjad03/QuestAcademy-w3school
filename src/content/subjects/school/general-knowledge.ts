import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const generalKnowledge: Subject = {
  slug: "general-knowledge",
  title: "General Knowledge",
  world: "school",
  icon: "🧭",
  colors: ["#0d9488", "#4f46e5"],
  tagline: "India and the world: the facts every student should know, with the why behind them.",
  description:
    "General knowledge for curious students: India's constitution, states and geography, history milestones, art and culture, science in daily life, space and ISRO, inventions, world organisations, sports, the environment and money, taught as short stories with quizzes.",
  levels: ["Grade 10"],
  stages: ["secondary"],
  topics: extraTopics("general-knowledge"),
};
