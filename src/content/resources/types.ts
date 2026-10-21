import type { Md, Question } from "@/content/types";

export type ResourceType = "course" | "docs" | "article" | "paper" | "book" | "video";

/** An external, open learning resource (always opens off-site). */
export interface Reading {
  title: string;
  url: string;
  source: string;
  type: ResourceType;
  level: "intro" | "intermediate" | "advanced";
  note: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One-line hook for cards. */
  summary: string;
  /** Unit slugs this case draws on. */
  units: string[];
  /** Estimated reading + thinking time. */
  minutes: number;
  /** Context, the situation and the data. */
  scenario: Md;
  /** Optional data table shown under the scenario. */
  data?: { caption: string; headers: string[]; rows: string[][] };
  /** Open analysis prompts for the learner. */
  questions: Md[];
  /** Revealed after the learner has thought about it. */
  outcome: Md;
  takeaways: Md[];
  /** Optional quick self-check. */
  check?: Question[];
}

export interface Competency {
  id: string;
  name: string;
  description: string;
  /** Lesson ids ("subject/unit/lesson") that build this competency. */
  lessons: string[];
}

export interface CourseResources {
  course: string;
  caseStudies: CaseStudy[];
  /** unit slug → reading list */
  readings: Record<string, Reading[]>;
  competencies: Competency[];
}
