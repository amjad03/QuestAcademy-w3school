import type { ExamId, ExamQuestion, ExamSubject } from "@/content/types";

export interface MockTest {
  id: string;
  title: string;
  exam: ExamId | "Mixed";
  minutes: number;
  sections: { subject: ExamSubject; count: number }[];
  /** marks for a correct answer / penalty for a wrong mcq / penalty for a wrong numeric */
  marking: { correct: number; wrong: number; numericWrong: number };
  blurb: string;
  emoji: string;
}

export const SUBJECT_META: Record<ExamSubject, { name: string; emoji: string; color: string }> = {
  physics: { name: "Physics", emoji: "⚛️", color: "#38bdf8" },
  chemistry: { name: "Chemistry", emoji: "🧪", color: "#a78bfa" },
  biology: { name: "Biology", emoji: "🧬", color: "#34d399" },
  maths: { name: "Mathematics", emoji: "📐", color: "#f472b6" },
};

const STD = { correct: 4, wrong: -1, numericWrong: 0 };

export const MOCK_TESTS: MockTest[] = [
  {
    id: "neet-full",
    title: "NEET Mini Mock",
    exam: "NEET",
    minutes: 60,
    sections: [
      { subject: "physics", count: 12 },
      { subject: "chemistry", count: 12 },
      { subject: "biology", count: 24 },
    ],
    marking: STD,
    blurb: "48 questions in NEET’s exact pattern — Biology-heavy, +4 / −1.",
    emoji: "🩺",
  },
  {
    id: "jee-main",
    title: "JEE Main Mini Mock",
    exam: "JEE",
    minutes: 60,
    sections: [
      { subject: "physics", count: 10 },
      { subject: "chemistry", count: 10 },
      { subject: "maths", count: 10 },
    ],
    marking: STD,
    blurb: "30 questions across PCM incl. numerical-value answers. +4 / −1 (0 for numerics).",
    emoji: "🛠️",
  },
  { id: "physics-sprint", title: "Physics Sprint", exam: "Mixed", minutes: 20, sections: [{ subject: "physics", count: 15 }], marking: STD, blurb: "15 physics questions, 20 minutes. Pure speed + accuracy.", emoji: "⚛️" },
  { id: "chemistry-sprint", title: "Chemistry Sprint", exam: "Mixed", minutes: 20, sections: [{ subject: "chemistry", count: 15 }], marking: STD, blurb: "Physical, organic and inorganic in one quick round.", emoji: "🧪" },
  { id: "biology-sprint", title: "Biology Sprint", exam: "NEET", minutes: 20, sections: [{ subject: "biology", count: 20 }], marking: STD, blurb: "20 NCERT-style biology questions in 20 minutes.", emoji: "🧬" },
  { id: "maths-sprint", title: "Maths Sprint", exam: "JEE", minutes: 25, sections: [{ subject: "maths", count: 12 }], marking: STD, blurb: "12 JEE maths problems including integer-type.", emoji: "📐" },
];

export function getMock(id: string) {
  return MOCK_TESTS.find((m) => m.id === id);
}

/** Pick questions for a mock: spread across chapters, balanced difficulty. */
export function assembleMock(test: MockTest, pool: ExamQuestion[], rnd: () => number = Math.random): ExamQuestion[] {
  const out: ExamQuestion[] = [];
  for (const sec of test.sections) {
    const candidates = pool.filter((q) => q.subject === sec.subject && (test.exam === "Mixed" || q.exams.includes(test.exam)));
    // round-robin across chapters so every chapter gets airtime
    const byChapter = new Map<string, ExamQuestion[]>();
    for (const q of candidates.sort(() => rnd() - 0.5)) {
      byChapter.set(q.chapter, [...(byChapter.get(q.chapter) ?? []), q]);
    }
    const chapters = [...byChapter.keys()].sort(() => rnd() - 0.5);
    const picked: ExamQuestion[] = [];
    let k = 0;
    while (picked.length < sec.count && chapters.some((c) => byChapter.get(c)!.length)) {
      const c = chapters[k++ % chapters.length];
      const q = byChapter.get(c)!.shift();
      if (q) picked.push(q);
    }
    out.push(...picked);
  }
  return out;
}

export function scoreQuestion(q: ExamQuestion, answer: number | null | undefined, marking: MockTest["marking"]) {
  if (answer === null || answer === undefined || Number.isNaN(answer)) return { status: "skipped" as const, marks: 0 };
  // Multi-correct answers are stored as a bitmask of the chosen option indexes.
  const ok = q.kind === "mcq" ? answer === q.answer : q.kind === "multi" ? answer === q.answers.reduce((m, i) => m | (1 << i), 0) : Math.abs(answer - q.answer) <= (q.tolerance ?? 0.01) + 1e-9;
  if (ok) return { status: "correct" as const, marks: marking.correct };
  return { status: "wrong" as const, marks: q.kind === "numeric" ? marking.numericWrong : marking.wrong };
}

/**
 * Indicative percentile from score fraction. A smooth logistic curve tuned so
 * ~50% marks ≈ 90th percentile — roughly how competitive exams distribute.
 * Clearly labelled as an estimate in the UI.
 */
export function predictedPercentile(fraction: number) {
  const f = Math.max(-0.25, Math.min(1, fraction));
  const p = 100 / (1 + Math.exp(-9 * (f - 0.25)));
  return Math.min(99.99, Math.max(1, p));
}

export const CANDIDATES: Record<string, number> = { NEET: 2_300_000, JEE: 1_200_000, Mixed: 1_000_000 };

/** Next approximate exam date (NEET: first Sunday of May; JEE Main session 1: ~22 Jan). */
export function nextExamDate(exam: ExamId, now = new Date()) {
  const candidates = [now.getFullYear(), now.getFullYear() + 1].map((y) => {
    if (exam === "JEE") return new Date(y, 0, 22);
    const d = new Date(y, 4, 1);
    while (d.getDay() !== 0) d.setDate(d.getDate() + 1);
    return d;
  });
  return candidates.find((d) => d.getTime() > now.getTime())!;
}
