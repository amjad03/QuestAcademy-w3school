import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const computerApplications: Subject = {
  slug: "computer-applications",
  title: "Computer Applications · Class 9–10",
  world: "school",
  icon: "💻",
  colors: ["#0369a1", "#7c3aed"],
  tagline: "Networks, HTML and CSS, cyber safety and Java programming for the board exams.",
  description:
    "Computer applications for the board exams: how networks and the internet work, building web pages with HTML and CSS, cyber ethics and safety (CBSE), and Java programming with methods, constructors, arrays and strings (ICSE), with examples you can read line by line.",
  levels: ["Grade 10"],
  stages: ["secondary"],
  topics: extraTopics("computer-applications"),
};
