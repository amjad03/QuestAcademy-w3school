import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const mathsSenior: Subject = {
  slug: "maths-senior",
  title: "Mathematics · Class 11–12",
  world: "school",
  icon: "📐",
  colors: ["#7c3aed", "#f59e0b"],
  tagline: "Algebra, vectors, 3D, differential equations and LPP, worked step by step.",
  description:
    "Class 11–12 mathematics: sets, relations and functions, inequalities, permutations and combinations, binomial theorem, 3D geometry, vectors, differential equations and linear programming, with solved examples and board-pattern exercises.",
  levels: ["Class 11", "Class 12"],
  stages: ["secondary", "aspirant"],
  topics: extraTopics("maths-senior"),
};
