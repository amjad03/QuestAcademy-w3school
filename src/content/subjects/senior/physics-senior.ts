import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const physicsSenior: Subject = {
  slug: "physics-senior",
  title: "Physics · Class 11–12",
  world: "school",
  icon: "⚛️",
  colors: ["#2563eb", "#7c3aed"],
  tagline: "Every CBSE, ISC and PUC chapter, with the depth NEET and JEE expect.",
  description:
    "Class 11–12 physics chapter by chapter: measurement, rotation, matter, heat, magnetism, induction, AC, EM waves, wave optics and semiconductors, each with derivations, worked numericals and board-style practice.",
  levels: ["Class 11", "Class 12"],
  stages: ["secondary", "aspirant"],
  topics: extraTopics("physics-senior"),
};
