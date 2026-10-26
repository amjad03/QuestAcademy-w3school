import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const computerScience: Subject = {
  slug: "computer-science",
  title: "Computer Science · Class 11–12",
  world: "school",
  icon: "🖥️",
  colors: ["#4f46e5", "#0f766e"],
  tagline: "Python, SQL and networks for CBSE and PUC; Java, Boolean algebra and data structures for ISC.",
  description:
    "Class 11–12 computer science: computer systems and number systems, Python programming, files, stacks, networks and SQL (CBSE 083 and Karnataka PUC), and Java with objects, recursion, Boolean algebra, logic circuits and data structures (ISC), with programs you can run and trace line by line.",
  levels: ["Class 11", "Class 12"],
  stages: ["secondary"],
  topics: extraTopics("computer-science"),
};
