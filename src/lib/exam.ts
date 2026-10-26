/**
 * Entrance-exam engine: mock test patterns (JEE Main, JEE Advanced, NEET, KCET,
 * COMEDK), question assembly with scope filters, per-section marking schemes
 * (incl. JEE Advanced partial marking) and approximate exam dates.
 *
 * Patterns follow recent official papers; they change from year to year, so the
 * UI always labels them "based on recent papers".
 */
import type { ExamId, ExamQuestion, ExamSubject } from "@/content/types";

/** A translatable label: `t(key, en, vars)` (the i18n extractor picks up `{ key, en }` literals). */
export interface Txt {
  key: string;
  en: string;
  /** Values may themselves be labels (translated first). */
  vars?: Record<string, string | number | Txt>;
}

export type QKind = ExamQuestion["kind"];

/** A stored answer: option index (mcq), chosen option indexes (multi) or the value (numeric). */
export type MockAnswer = number | number[] | null;

export interface SectionMarking {
  /** Marks for a fully correct answer. */
  correct: number;
  /** Marks for a wrong answer (0 or negative). */
  wrong: number;
  /**
   * JEE Advanced one-or-more-correct: when only some of the correct options are
   * chosen and no wrong one, +1 for each correct option chosen (+3 / +2 / +1).
   */
  partial?: boolean;
}

export interface MockSection {
  /** Unique within the test, e.g. "physics-a". */
  id: string;
  subject: ExamSubject;
  /** Question kinds this section draws from. */
  kinds: QKind[];
  count: number;
  marking: SectionMarking;
  /** Marking override for one kind (mixed-kind sprints). */
  byKind?: Partial<Record<QKind, SectionMarking>>;
  /** Short section name ("Section A"), shown with the subject. */
  label?: Txt;
}

export type MockKind = "full" | "half" | "mini" | "sprint";

export interface MockTest {
  id: string;
  title: Txt;
  blurb: Txt;
  exam: ExamId | "Mixed";
  kind: MockKind;
  /** Total minutes (sum of the subject blocks for sectional tests). */
  minutes: number;
  sections: MockSection[];
  /** "sectional": each subject is its own timed block, taken one after another (KCET). */
  timing: { mode: "combined" } | { mode: "sectional"; minutesPerSubject: number };
  /** The other length of the same paper (full ↔ half). */
  pair?: string;
  /** "PCM" / "PCB" etc. */
  variant?: string;
  /** Short paper name, used to title the half-length variant. */
  name?: Txt;
}

export const SUBJECT_META: Record<ExamSubject, { name: string; emoji: string; color: string }> = {
  physics: { name: "Physics", emoji: "⚛️", color: "#38bdf8" },
  chemistry: { name: "Chemistry", emoji: "🧪", color: "#a78bfa" },
  biology: { name: "Biology", emoji: "🧬", color: "#34d399" },
  maths: { name: "Mathematics", emoji: "📐", color: "#f472b6" },
};

/** English text of a label (server-side titles, metadata). */
export function txtEn(x: Txt): string {
  return x.en.replace(/\{(\w+)\}/g, (m, k) => {
    const v = x.vars?.[k];
    return v === undefined ? m : typeof v === "object" ? txtEn(v) : String(v);
  });
}

export const EXAM_IDS: ExamId[] = ["JEE", "JEE_ADV", "NEET", "KCET", "COMEDK"];

/** Static facts per exam. Names are translated in the UI via `useExamNames`. */
export const EXAM_META: Record<ExamId, { name: string; short: string; subjects: ExamSubject[]; fullMock: string; target: 1 | 2 | 3 }> = {
  JEE: { name: "JEE (Main)", short: "JEE Main", subjects: ["physics", "chemistry", "maths"], fullMock: "jee-main-full", target: 2 },
  JEE_ADV: { name: "JEE (Advanced)", short: "JEE Advanced", subjects: ["physics", "chemistry", "maths"], fullMock: "jee-adv-paper", target: 3 },
  NEET: { name: "NEET (UG)", short: "NEET", subjects: ["physics", "chemistry", "biology"], fullMock: "neet-ug-full", target: 2 },
  KCET: { name: "KCET", short: "KCET", subjects: ["physics", "chemistry", "maths", "biology"], fullMock: "kcet-pcm", target: 1 },
  COMEDK: { name: "COMEDK UGET", short: "COMEDK", subjects: ["physics", "chemistry", "maths"], fullMock: "comedk-full", target: 1 },
};

/**
 * Banks a mock may borrow from when a pattern has too few questions tagged for
 * its own exam (in order of preference). Borrowed questions are flagged in the UI.
 */
export const SIMILAR_EXAMS: Record<ExamId, ExamId[]> = {
  JEE: ["JEE", "COMEDK", "JEE_ADV"],
  JEE_ADV: ["JEE_ADV", "JEE"],
  NEET: ["NEET", "KCET"],
  KCET: ["KCET", "COMEDK", "JEE", "NEET"],
  COMEDK: ["COMEDK", "KCET", "JEE"],
};

/* ------------------------------------------------------------------ */
/* Marking schemes                                                      */
/* ------------------------------------------------------------------ */

export const MARK = {
  /** JEE Main (MCQ and numerical alike, current NTA rule) and NEET. */
  nta: { correct: 4, wrong: -1 },
  advSingle: { correct: 3, wrong: -1 },
  advMulti: { correct: 4, wrong: -2, partial: true },
  advNumeric: { correct: 4, wrong: 0 },
  /** KCET and COMEDK: one mark, no negative marking. */
  one: { correct: 1, wrong: 0 },
} satisfies Record<string, SectionMarking>;

export function markingFor(section: MockSection, kind: QKind): SectionMarking {
  return section.byKind?.[kind] ?? section.marking;
}

/* ------------------------------------------------------------------ */
/* Patterns                                                             */
/* ------------------------------------------------------------------ */

const SEC_A: Txt = { key: "exam.section.a", en: "Section A" };
const SEC_B: Txt = { key: "exam.section.b", en: "Section B" };
const SEC_1: Txt = { key: "exam.section.1", en: "Section 1" };
const SEC_2: Txt = { key: "exam.section.2", en: "Section 2" };
const SEC_3: Txt = { key: "exam.section.3", en: "Section 3" };

const PCM: ExamSubject[] = ["physics", "chemistry", "maths"];
const PCB: ExamSubject[] = ["physics", "chemistry", "biology"];

const one = (subject: ExamSubject, count: number, marking: SectionMarking, kinds: QKind[] = ["mcq"]): MockSection => ({ id: subject, subject, kinds, count, marking });

const FULL: MockTest[] = [
  {
    id: "jee-main-full",
    name: { key: "exam.mock.name.jeeMain", en: "JEE Main" },
    title: { key: "exam.mock.jeeMainFull.title", en: "JEE Main · Full paper" },
    blurb: { key: "exam.mock.jeeMainFull.blurb", en: "Physics, Chemistry and Maths: 20 MCQs + 5 numerical answers each. 75 questions, 300 marks, +4 / −1." },
    exam: "JEE",
    kind: "full",
    minutes: 180,
    timing: { mode: "combined" },
    pair: "jee-main-full-half",
    sections: PCM.flatMap((s) => [
      { id: `${s}-a`, subject: s, kinds: ["mcq"], count: 20, marking: MARK.nta, label: SEC_A },
      { id: `${s}-b`, subject: s, kinds: ["numeric"], count: 5, marking: MARK.nta, label: SEC_B },
    ]),
  },
  {
    id: "jee-adv-paper",
    name: { key: "exam.mock.name.jeeAdv", en: "JEE Advanced" },
    title: { key: "exam.mock.jeeAdv.title", en: "JEE Advanced · Paper" },
    blurb: { key: "exam.mock.jeeAdv.blurb", en: "One 3-hour paper per the recent pattern: single-correct, one-or-more-correct with partial marking, and numerical answers in each subject." },
    exam: "JEE_ADV",
    kind: "full",
    minutes: 180,
    timing: { mode: "combined" },
    pair: "jee-adv-paper-half",
    sections: PCM.flatMap((s) => [
      { id: `${s}-1`, subject: s, kinds: ["mcq"], count: 4, marking: MARK.advSingle, label: SEC_1 },
      { id: `${s}-2`, subject: s, kinds: ["multi"], count: 4, marking: MARK.advMulti, label: SEC_2 },
      { id: `${s}-3`, subject: s, kinds: ["numeric"], count: 6, marking: MARK.advNumeric, label: SEC_3 },
    ]),
  },
  {
    id: "neet-ug-full",
    name: { key: "exam.mock.name.neet", en: "NEET (UG)" },
    title: { key: "exam.mock.neetFull.title", en: "NEET (UG) · Full paper" },
    blurb: { key: "exam.mock.neetFull.blurb", en: "180 questions in 3 hours: Physics 45, Chemistry 45, Biology 90. 720 marks, +4 / −1." },
    exam: "NEET",
    kind: "full",
    minutes: 180,
    timing: { mode: "combined" },
    pair: "neet-ug-full-half",
    sections: [one("physics", 45, MARK.nta), one("chemistry", 45, MARK.nta), one("biology", 90, MARK.nta)],
  },
  {
    id: "kcet-pcm",
    name: { key: "exam.mock.name.kcetPcm", en: "KCET · PCM" },
    title: { key: "exam.mock.kcetPcm.title", en: "KCET · PCM" },
    blurb: { key: "exam.mock.kcetPcm.blurb", en: "60 questions per subject, 80 minutes each, taken one subject after another. 1 mark each, no negative marking." },
    exam: "KCET",
    kind: "full",
    variant: "PCM",
    minutes: 240,
    timing: { mode: "sectional", minutesPerSubject: 80 },
    pair: "kcet-pcm-half",
    sections: PCM.map((s) => one(s, 60, MARK.one)),
  },
  {
    id: "kcet-pcb",
    name: { key: "exam.mock.name.kcetPcb", en: "KCET · PCB" },
    title: { key: "exam.mock.kcetPcb.title", en: "KCET · PCB" },
    blurb: { key: "exam.mock.kcetPcb.blurb", en: "Physics, Chemistry and Biology: 60 questions each, 80 minutes per subject. 1 mark each, no negative marking." },
    exam: "KCET",
    kind: "full",
    variant: "PCB",
    minutes: 240,
    timing: { mode: "sectional", minutesPerSubject: 80 },
    pair: "kcet-pcb-half",
    sections: PCB.map((s) => one(s, 60, MARK.one)),
  },
  {
    id: "comedk-full",
    name: { key: "exam.mock.name.comedk", en: "COMEDK UGET" },
    title: { key: "exam.mock.comedk.title", en: "COMEDK UGET · Full paper" },
    blurb: { key: "exam.mock.comedk.blurb", en: "180 questions in 3 hours: Physics, Chemistry and Maths, 60 each. +1 per correct answer, no negative marking." },
    exam: "COMEDK",
    kind: "full",
    minutes: 180,
    timing: { mode: "combined" },
    pair: "comedk-full-half",
    sections: PCM.map((s) => one(s, 60, MARK.one)),
  },
];

/** Same pattern, half the questions and half the time. */
function halfLength(m: MockTest): MockTest {
  return {
    ...m,
    id: `${m.id}-half`,
    kind: "half",
    pair: m.id,
    title: { key: "exam.mock.halfTitle", en: "{title} · Half-length paper", vars: { title: m.name ?? m.title } },
    blurb: { key: "exam.mock.halfBlurb", en: "The same pattern and marking at half the length — good for a weekday evening." },
    minutes: Math.round(m.minutes / 2),
    timing: m.timing.mode === "sectional" ? { mode: "sectional", minutesPerSubject: m.timing.minutesPerSubject / 2 } : m.timing,
    sections: m.sections.map((s) => ({ ...s, count: Math.ceil(s.count / 2) })),
  };
}

const SPRINT_KINDS: QKind[] = ["mcq", "numeric", "multi"];
const sprint = (id: string, subject: ExamSubject, count: number, minutes: number, title: Txt, blurb: Txt, exam: MockTest["exam"] = "Mixed"): MockTest => ({
  id,
  title,
  blurb,
  exam,
  kind: "sprint",
  minutes,
  timing: { mode: "combined" },
  sections: [{ id: subject, subject, kinds: SPRINT_KINDS, count, marking: MARK.nta, byKind: { multi: MARK.advMulti } }],
});

const SHORT: MockTest[] = [
  {
    id: "neet-mini",
    title: { key: "exam.mock.neetMini.title", en: "NEET Mini Mock" },
    blurb: { key: "exam.mock.neetMini.blurb", en: "48 questions in NEET’s pattern — Biology-heavy, +4 / −1." },
    exam: "NEET",
    kind: "mini",
    minutes: 60,
    timing: { mode: "combined" },
    sections: [one("physics", 12, MARK.nta), one("chemistry", 12, MARK.nta), one("biology", 24, MARK.nta)],
  },
  {
    id: "jee-mini",
    title: { key: "exam.mock.jeeMini.title", en: "JEE Main Mini Mock" },
    blurb: { key: "exam.mock.jeeMini.blurb", en: "30 questions across PCM incl. numerical-value answers. +4 / −1." },
    exam: "JEE",
    kind: "mini",
    minutes: 60,
    timing: { mode: "combined" },
    sections: PCM.map((s) => one(s, 10, MARK.nta, ["mcq", "numeric"])),
  },
  sprint("physics-sprint", "physics", 15, 20, { key: "exam.mock.physicsSprint.title", en: "Physics Sprint" }, { key: "exam.mock.physicsSprint.blurb", en: "15 physics questions, 20 minutes. Pure speed + accuracy." }),
  sprint("chemistry-sprint", "chemistry", 15, 20, { key: "exam.mock.chemistrySprint.title", en: "Chemistry Sprint" }, { key: "exam.mock.chemistrySprint.blurb", en: "Physical, organic and inorganic in one quick round." }),
  sprint("biology-sprint", "biology", 20, 20, { key: "exam.mock.biologySprint.title", en: "Biology Sprint" }, { key: "exam.mock.biologySprint.blurb", en: "20 NCERT-style biology questions in 20 minutes." }, "NEET"),
  sprint("maths-sprint", "maths", 12, 25, { key: "exam.mock.mathsSprint.title", en: "Maths Sprint" }, { key: "exam.mock.mathsSprint.blurb", en: "12 JEE maths problems including integer-type." }, "JEE"),
];

export const MOCK_TESTS: MockTest[] = [...FULL, ...FULL.map(halfLength), ...SHORT];

/** Older ids that moved (results and links keep working). */
const ALIASES: Record<string, string> = { "neet-full": "neet-mini", "jee-main": "jee-mini" };

export function getMock(id: string) {
  const real = ALIASES[id] ?? id;
  return MOCK_TESTS.find((m) => m.id === real);
}

export const mockQuestionCount = (m: MockTest) => m.sections.reduce((a, s) => a + s.count, 0);

/** Highest possible marks for the pattern. */
export const mockMaxMarks = (m: MockTest) => m.sections.reduce((a, s) => a + s.count * Math.max(s.marking.correct, ...Object.values(s.byKind ?? {}).map((x) => x.correct)), 0);

/** Subjects in section order; for sectional timing each one is a timed block. */
export const mockSubjects = (m: MockTest) => [...new Set(m.sections.map((s) => s.subject))];

export function blockMinutes(m: MockTest) {
  return m.timing.mode === "sectional" ? m.timing.minutesPerSubject : m.minutes;
}

/* ------------------------------------------------------------------ */
/* Scope + assembly                                                     */
/* ------------------------------------------------------------------ */

/** Class of the older NTA-unit chapters (bank questions carry `grade`). */
const LEGACY_GRADE: Record<string, "11" | "12"> = {
  "Units & Measurement": "11",
  Kinematics: "11",
  "Laws of Motion": "11",
  "Work, Energy & Power": "11",
  Gravitation: "11",
  Thermodynamics: "11",
  "Oscillations & Waves": "11",
  Electrostatics: "12",
  "Current Electricity": "12",
  Magnetism: "12",
  Optics: "12",
  "Modern Physics": "12",
  "Mole Concept": "11",
  "Atomic Structure": "11",
  "Chemical Bonding": "11",
  Thermochemistry: "11",
  Equilibrium: "11",
  "Periodic Table": "11",
  "Organic Basics": "11",
  Hydrocarbons: "11",
  Electrochemistry: "12",
  "Chemical Kinetics": "12",
  "Coordination Compounds": "12",
  "Sets & Functions": "11",
  "Quadratic Equations": "11",
  "Sequences & Series": "11",
  Trigonometry: "11",
  "Coordinate Geometry": "11",
  "Limits & Continuity": "12",
  Differentiation: "12",
  Integration: "12",
  "Matrices & Determinants": "12",
  "Vectors & 3D": "12",
  Probability: "12",
  "Cell Biology": "11",
  Biomolecules: "11",
  "Plant Physiology": "11",
  "Human Physiology": "11",
  Genetics: "12",
  "Molecular Biology": "12",
  Evolution: "12",
  Biotechnology: "12",
  Reproduction: "12",
  Ecology: "12",
};

/** Class 11 or 12 for a question (explicit `grade`, else from its chapter). */
export function gradeOf(q: ExamQuestion): "11" | "12" | null {
  return q.grade ?? LEGACY_GRADE[q.chapter] ?? null;
}

export type MockScope = { kind: "all" } | { kind: "11" } | { kind: "12" } | { kind: "chapters"; chapters: string[] };

/** "subject|chapter" — chapter names repeat across subjects (e.g. Thermodynamics). */
export const chapterKey = (q: { subject: ExamSubject; chapter: string }) => `${q.subject}|${q.chapter}`;

export function inScope(q: ExamQuestion, scope: MockScope) {
  if (scope.kind === "all") return true;
  if (scope.kind === "chapters") return scope.chapters.includes(chapterKey(q));
  return gradeOf(q) === scope.kind;
}

export interface AssembleOptions {
  scope?: MockScope;
  /** Only questions tagged for the test's own exam. */
  strictTags?: boolean;
  rnd?: () => number;
}

export interface SectionFill {
  section: string;
  wanted: number;
  got: number;
  /** Of `got`, questions borrowed from a similar exam's bank. */
  borrowed: number;
}

export interface AssembledMock {
  questions: ExamQuestion[];
  /** Section id per question, parallel to `questions`. */
  sectionOf: string[];
  fill: SectionFill[];
}

function shuffle<T>(arr: T[], rnd: () => number) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Tag priority of a question for a test: 0 = own exam, 1+ = similar exam, -1 = not usable. */
function tagRank(q: ExamQuestion, exam: MockTest["exam"], strict: boolean) {
  if (exam === "Mixed") return 0;
  if (q.exams.includes(exam)) return 0;
  if (strict) return -1;
  const order = SIMILAR_EXAMS[exam];
  const r = Math.min(...q.exams.map((e) => order.indexOf(e)).filter((i) => i > 0));
  return Number.isFinite(r) ? r : -1;
}

/** Round-robin across chapters so every chapter gets airtime; closest difficulty first. */
function pickSpread(candidates: ExamQuestion[], count: number, target: number, rnd: () => number) {
  const byChapter = new Map<string, ExamQuestion[]>();
  for (const q of shuffle(candidates, rnd)) byChapter.set(q.chapter, [...(byChapter.get(q.chapter) ?? []), q]);
  for (const list of byChapter.values()) list.sort((a, b) => Math.abs((a.difficulty ?? 2) - target) - Math.abs((b.difficulty ?? 2) - target));
  const chapters = shuffle([...byChapter.keys()], rnd);
  const picked: ExamQuestion[] = [];
  let k = 0;
  while (picked.length < count && chapters.some((c) => byChapter.get(c)!.length)) {
    const q = byChapter.get(chapters[k++ % chapters.length])!.shift();
    if (q) picked.push(q);
  }
  return picked;
}

/** Questions a test may draw on at all (server-side pre-filter for the page payload). */
export function poolFor(test: MockTest, pool: ExamQuestion[]) {
  const subjects = new Set(test.sections.map((s) => s.subject));
  const kinds = new Set(test.sections.flatMap((s) => s.kinds));
  return pool.filter((q) => subjects.has(q.subject) && kinds.has(q.kind) && tagRank(q, test.exam, false) >= 0);
}

/**
 * Pick questions for a mock section by section. Sections that cannot be filled
 * (small bank, narrow scope) get what exists; `fill` reports the shortfall.
 */
export function assembleMock(test: MockTest, pool: ExamQuestion[], opts: AssembleOptions = {}): AssembledMock {
  const rnd = opts.rnd ?? Math.random;
  const scope = opts.scope ?? { kind: "all" };
  const target = test.exam === "Mixed" ? 2 : EXAM_META[test.exam].target;
  const used = new Set<string>();
  const questions: ExamQuestion[] = [];
  const sectionOf: string[] = [];
  const fill: SectionFill[] = [];
  for (const sec of test.sections) {
    const ranked = pool
      .filter((q) => q.subject === sec.subject && sec.kinds.includes(q.kind) && !used.has(q.id) && inScope(q, scope))
      .map((q) => ({ q, r: tagRank(q, test.exam, Boolean(opts.strictTags)) }))
      .filter((x) => x.r >= 0);
    const picked: ExamQuestion[] = [];
    let borrowed = 0;
    for (const r of [...new Set(ranked.map((x) => x.r))].sort((a, b) => a - b)) {
      if (picked.length >= sec.count) break;
      const got = pickSpread(
        ranked.filter((x) => x.r === r).map((x) => x.q),
        sec.count - picked.length,
        target,
        rnd,
      );
      if (r > 0) borrowed += got.length;
      picked.push(...got);
    }
    // Keep the paper's kind order inside a mixed section (MCQs before numericals).
    picked.sort((a, b) => sec.kinds.indexOf(a.kind) - sec.kinds.indexOf(b.kind));
    for (const q of picked) {
      used.add(q.id);
      questions.push(q);
      sectionOf.push(sec.id);
    }
    fill.push({ section: sec.id, wanted: sec.count, got: picked.length, borrowed });
  }
  return { questions, sectionOf, fill };
}

/* ------------------------------------------------------------------ */
/* Scoring                                                              */
/* ------------------------------------------------------------------ */

export type ScoreStatus = "correct" | "partial" | "wrong" | "skipped";

export function isAttempted(a: MockAnswer | undefined): boolean {
  if (a === null || a === undefined) return false;
  if (Array.isArray(a)) return a.length > 0;
  return !Number.isNaN(a);
}

export function scoreQuestion(q: ExamQuestion, answer: MockAnswer | undefined, marking: SectionMarking): { status: ScoreStatus; marks: number } {
  if (!isAttempted(answer)) return { status: "skipped", marks: 0 };
  if (q.kind === "multi") {
    const chosen = [...new Set(Array.isArray(answer) ? answer : [answer as number])];
    if (chosen.some((i) => !q.answers.includes(i))) return { status: "wrong", marks: marking.wrong };
    if (chosen.length === q.answers.length) return { status: "correct", marks: marking.correct };
    return marking.partial ? { status: "partial", marks: chosen.length } : { status: "wrong", marks: marking.wrong };
  }
  if (Array.isArray(answer)) return { status: "wrong", marks: marking.wrong };
  const ok = q.kind === "mcq" ? answer === q.answer : Math.abs((answer as number) - q.answer) <= (q.tolerance ?? 0.01) + 1e-9;
  return ok ? { status: "correct", marks: marking.correct } : { status: "wrong", marks: marking.wrong };
}

/* ------------------------------------------------------------------ */
/* Rank estimates + dates                                               */
/* ------------------------------------------------------------------ */

/** Score fraction that lands near the 90th percentile, per exam (rough). */
const MIDPOINT: Record<ExamId | "Mixed", number> = { NEET: 0.3, JEE: 0.25, JEE_ADV: 0.2, KCET: 0.4, COMEDK: 0.4, Mixed: 0.25 };

/**
 * Indicative percentile from score fraction: a smooth logistic curve so that the
 * exam's midpoint ≈ 90th percentile. Clearly labelled as an estimate in the UI.
 */
export function predictedPercentile(fraction: number, exam: ExamId | "Mixed" = "Mixed") {
  const f = Math.max(-0.25, Math.min(1, fraction));
  const p = 100 / (1 + Math.exp(-9 * (f - MIDPOINT[exam])));
  return Math.min(99.99, Math.max(1, p));
}

/** Approximate registered candidates (recent years), for the projected rank. */
export const CANDIDATES: Record<ExamId | "Mixed", number> = { NEET: 2_300_000, JEE: 1_200_000, JEE_ADV: 180_000, KCET: 300_000, COMEDK: 100_000, Mixed: 1_000_000 };

const nthWeekday = (y: number, month: number, weekday: number, n: number) => {
  const d = new Date(y, month, 1);
  while (d.getDay() !== weekday) d.setDate(d.getDate() + 1);
  d.setDate(d.getDate() + 7 * (n - 1));
  return d;
};
const lastWeekday = (y: number, month: number, weekday: number) => {
  const d = new Date(y, month + 1, 0);
  while (d.getDay() !== weekday) d.setDate(d.getDate() - 1);
  return d;
};

/**
 * Approximate exam days in a year (all approximate — the UI says so):
 *  JEE Main: session 1 ~22 Jan, session 2 ~4 Apr · JEE Advanced: last Sunday of May ·
 *  NEET: first Sunday of May · KCET: ~16 Apr · COMEDK: ~second Saturday of May.
 */
export function examDatesIn(exam: ExamId, y: number): Date[] {
  switch (exam) {
    case "JEE":
      return [new Date(y, 0, 22), new Date(y, 3, 4)];
    case "JEE_ADV":
      return [lastWeekday(y, 4, 0)];
    case "NEET":
      return [nthWeekday(y, 4, 0, 1)];
    case "KCET":
      return [new Date(y, 3, 16)];
    case "COMEDK":
      return [nthWeekday(y, 4, 6, 2)];
  }
}

/** Next approximate exam date (for JEE Main, the next session). */
export function nextExamDate(exam: ExamId, now = new Date()) {
  const all = [now.getFullYear(), now.getFullYear() + 1].flatMap((y) => examDatesIn(exam, y));
  return all.find((d) => d.getTime() > now.getTime())!;
}

/** Days from now until the next exam (rounded up). */
export const daysToExam = (exam: ExamId, now = new Date()) => Math.max(0, Math.ceil((nextExamDate(exam, now).getTime() - now.getTime()) / 86_400_000));
