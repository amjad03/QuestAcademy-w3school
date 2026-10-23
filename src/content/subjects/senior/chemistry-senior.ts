import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const chemistrySenior: Subject = {
  slug: "chemistry-senior",
  title: "Chemistry · Class 11–12",
  world: "school",
  icon: "🧪",
  colors: ["#059669", "#0ea5e9"],
  tagline: "Physical, inorganic and organic chemistry for boards and entrance exams.",
  description:
    "Class 11–12 chemistry: thermodynamics, redox, solutions, the s-, p-, d- and f-blocks, coordination compounds, hydrocarbons, biomolecules, environmental and practical chemistry, with reactions, mechanisms and numericals.",
  levels: ["Class 11", "Class 12"],
  stages: ["secondary", "aspirant"],
  topics: extraTopics("chemistry-senior"),
};
