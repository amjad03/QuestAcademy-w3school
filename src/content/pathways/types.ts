/**
 * Professional-mode pathways: goal-oriented sequences of existing lessons plus
 * practical, workplace-style assignments that lead to a (non-accredited)
 * Quest Academy certificate of completion.
 */

export interface RubricCriterion {
  criterion: string;
  description: string;
  points: number;
}

export interface Assignment {
  id: string;
  title: string;
  /** Realistic workplace brief. */
  scenario: string;
  deliverables: string[];
  rubric: RubricCriterion[];
  submission: "text" | "link" | "code";
  /** Language for code submissions. */
  codeLang?: "html" | "css" | "javascript" | "python" | "sql";
  estimatedHours: number;
  hints: string[];
  /** Starter code shown in the editor (code submissions). */
  starter?: string;
  /** SQL run before the learner's query (sample tables for SQL assignments). */
  setup?: string;
}

export interface PathwayModule {
  title: string;
  /** Why this matters at work. */
  why: string;
  lessonIds: string[];
  assignment: Assignment;
}

export interface Pathway {
  slug: string;
  title: string;
  /** What you'll be able to do at the end. */
  goal: string;
  roles: string[];
  skills: string[];
  /** Estimated duration at 4 hours per week. */
  weeks: number;
  prerequisites: string[];
  /** Hex accent for the pathway. */
  color: string;
  modules: PathwayModule[];
}

/** Share of rubric points the learner must self-check for the certificate. */
export const CERTIFICATE_RUBRIC_THRESHOLD = 0.7;
