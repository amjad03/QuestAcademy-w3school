/**
 * Quest Academy content model.
 *
 * World → Subject → Topic (unit/chapter) → Lesson → Blocks.
 * Every world renders the same content model with its own look, pacing and
 * interactions (Kids = playful & spoken, Exam = timed & analytical, Code = live
 * editors & tests, etc).
 */

export type WorldId = "kids" | "school" | "exam" | "code" | "campus";

/** Learner stage chosen during onboarding. */
export type Stage =
  | "preprimary" // ages 3–5
  | "primary" // grades 1–5
  | "middle" // grades 6–8
  | "secondary" // grades 9–12
  | "aspirant" // NEET / JEE / competitive exams
  | "ug" // undergraduate
  | "pg" // postgraduate
  | "lifelong"; // professionals & curious minds

export type CodeLang = "html" | "css" | "javascript" | "python" | "sql";

/**
 * Inline text supports a tiny markdown subset:
 *   **bold**, *italic*, `code`, $inline tex$, [link text](url), and line breaks.
 * Paragraphs are separated with a blank line ("\n\n").
 */
export type Md = string;

export type Block =
  | { type: "heading"; text: string }
  | { type: "text"; md: Md }
  | { type: "callout"; tone: "tip" | "note" | "warning" | "fact" | "exam"; title?: string; md: Md }
  /** Display maths, KaTeX syntax (no surrounding $$). */
  | { type: "formula"; tex: string; caption?: string }
  /** runnable=true renders a "Try it yourself" live editor. */
  | { type: "code"; lang: CodeLang; code: string; runnable?: boolean; caption?: string }
  /** Big emoji illustration, used instead of images. */
  | { type: "illustration"; emoji: string; caption: string }
  | { type: "list"; ordered?: boolean; items: Md[] }
  | { type: "table"; headers: string[]; rows: Md[][] }
  | { type: "widget"; widget: WidgetId; props?: Record<string, unknown>; caption?: string }
  /** Inline checkpoint question(s) inside the reading flow. */
  | { type: "checkpoint"; questions: Question[] }
  | { type: "keypoints"; items: Md[] };

/**
 * Interactive widgets available to lessons. Props are optional.
 *
 *  count-objects      {emoji?: string, max?: number}          kids: tap objects to count them
 *  phonics            {letters?: string[]}                    kids: tap letters, hear sound + word
 *  clock              {}                                       tell the time with draggable hands
 *  color-mix          {}                                       mix primary colours
 *  fraction           {numerator?: number, denominator?: number}  pizza/bar fraction visualiser
 *  number-line        {min?: number, max?: number}             hop along a number line (add/subtract)
 *  function-plot      {kind?: "linear"|"quadratic"|"sine"|"exponential"}  graph with sliders
 *  triangle           {}                                       drag vertices, angle sum = 180°
 *  projectile         {}                                       launch angle/speed simulation
 *  pendulum           {}                                       length/gravity → period
 *  ohms-law           {}                                       V = IR circuit sliders
 *  wave               {}                                       amplitude/frequency/wavelength
 *  periodic-table     {}                                       explorable periodic table
 *  cell-explorer      {kind?: "animal"|"plant"}                clickable cell organelles
 *  binary             {}                                       flip bits ↔ decimal
 *  sorting            {algorithm?: "bubble"|"selection"|"insertion"}  sorting visualiser
 *  big-o              {}                                       growth-rate curves
 *  perceptron         {}                                       tiny neural network playground
 *  supply-demand      {}                                       market equilibrium curves
 *  compound-interest  {}                                       money growth over time
 */
export type WidgetId =
  | "count-objects"
  | "phonics"
  | "clock"
  | "color-mix"
  | "fraction"
  | "number-line"
  | "function-plot"
  | "triangle"
  | "projectile"
  | "pendulum"
  | "ohms-law"
  | "wave"
  | "periodic-table"
  | "cell-explorer"
  | "binary"
  | "sorting"
  | "big-o"
  | "perceptron"
  | "supply-demand"
  | "compound-interest";

export type Difficulty = 1 | 2 | 3;

interface QBase {
  /** Question text (Md). */
  q: Md;
  explain?: Md;
  difficulty?: Difficulty;
}

export type Question =
  | (QBase & { kind: "mcq"; options: Md[]; answer: number })
  | (QBase & { kind: "multi"; options: Md[]; answers: number[] })
  | (QBase & { kind: "truefalse"; answer: boolean })
  | (QBase & { kind: "numeric"; answer: number; tolerance?: number; unit?: string })
  /** q contains "___"; any of `answer` (case-insensitive, trimmed) is accepted. */
  | (QBase & { kind: "fill"; answer: string[] })
  /** items listed in the CORRECT order; the UI shuffles them. */
  | (QBase & { kind: "order"; items: string[] });

export interface Flashcard {
  front: Md;
  back: Md;
}

/**
 * Code challenge, auto-graded in the browser.
 *  - html / css / javascript: each `check` is a JavaScript expression evaluated
 *    inside the preview iframe AFTER the learner's code runs. `document` and any
 *    globals the learner defined are available. Must evaluate to true.
 *  - python: each `check` is a Python expression evaluated after the learner's
 *    code (same namespace). Must evaluate to True.
 *  - sql: each `check` is a JavaScript expression over `rows` (array of plain
 *    objects returned by the learner's LAST statement) and `columns` (string[]).
 */
export interface CodeChallenge {
  title: string;
  prompt: Md;
  lang: CodeLang;
  starter: string;
  /** For sql: schema + seed data executed before the learner's query. */
  setup?: string;
  tests: { label: string; check: string }[];
  solution: string;
  hints?: Md[];
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  /** Estimated minutes. */
  minutes: number;
  /** XP for completing the lesson (10–60). */
  xp: number;
  blocks: Block[];
  flashcards?: Flashcard[];
  /** End-of-lesson quiz (3–6 questions recommended). */
  quiz?: Question[];
  challenge?: CodeChallenge;
}

export interface Topic {
  slug: string;
  title: string;
  /** Single emoji. */
  icon: string;
  description: string;
  lessons: Lesson[];
}

export interface Subject {
  slug: string;
  title: string;
  world: WorldId;
  /** Single emoji. */
  icon: string;
  /** Two hex colours used for the subject gradient. */
  colors: [string, string];
  tagline: string;
  description: string;
  /** Audience labels shown as chips, e.g. ["Grade 6", "Grade 7"] or ["Beginner"]. */
  levels: string[];
  stages: Stage[];
  /** For campus subjects: the domain they belong to (e.g. "Engineering"). */
  domain?: string;
  topics: Topic[];
}

/* ------------------------------------------------------------------ */
/* Exam world                                                          */
/* ------------------------------------------------------------------ */

export type ExamId = "NEET" | "JEE";
export type ExamSubject = "physics" | "chemistry" | "biology" | "maths";

export type ExamQuestion = Extract<Question, { kind: "mcq" | "numeric" }> & {
  id: string;
  exams: ExamId[];
  subject: ExamSubject;
  chapter: string;
  /** Rough "time to solve" in seconds; used for pacing analytics. */
  idealTime?: number;
};

export interface FormulaSheet {
  subject: ExamSubject;
  chapter: string;
  items: { name: string; tex: string; note?: string }[];
}

/* ------------------------------------------------------------------ */
/* Worlds                                                              */
/* ------------------------------------------------------------------ */

export interface WorldMeta {
  id: WorldId;
  name: string;
  short: string;
  tagline: string;
  description: string;
  emoji: string;
  mascot: { name: string; emoji: string };
  colors: [string, string];
  href: string;
  stages: Stage[];
}
