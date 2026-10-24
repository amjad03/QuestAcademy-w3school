/**
 * Browse-by-class model for the Library.
 *
 * A class group is a learner-facing bucket (Pre-primary, Classes 1–5, …).
 * Subjects are mapped into groups from their `stages` and, when they carry
 * "Grade N" levels, from those grades too. Board syllabi map in by grade id.
 */
import type { Stage } from "@/content/types";
import type { Board } from "@/lib/modes";

export type ClassGroupId = "pre-primary" | "classes-1-5" | "classes-6-8" | "classes-9-10" | "classes-11-12" | "undergraduate" | "lifelong";

export type ClassIcon = "baby" | "backpack" | "compass" | "flask" | "target" | "graduation" | "briefcase";

export interface ClassGroup {
  id: ClassGroupId;
  label: string;
  /** Short qualifier shown under the label. */
  hint: string;
  description: string;
  icon: ClassIcon;
  color: string;
  /** Learner stages that belong to this group. */
  stages: Stage[];
  /** Grade numbers (matched against Subject.levels like "Grade 9"). */
  grades?: number[];
  /** Board syllabus grades that belong to this group. */
  boards: { board: Board; grades: string[] }[];
  /** Subjects planned but not yet available. */
  comingSoon: string[];
}

export const CLASS_GROUPS: ClassGroup[] = [
  {
    id: "pre-primary",
    label: "Pre-primary",
    hint: "Ages 3–5 · Nursery, LKG, UKG",
    description: "Letters, numbers, shapes and the world around us — read aloud, full of play and short enough for little attention spans.",
    icon: "baby",
    color: "#EC4899",
    stages: ["preprimary"],
    boards: [],
    comingSoon: ["Rhymes and stories", "Hindi letters", "Drawing and craft"],
  },
  {
    id: "classes-1-5",
    label: "Classes 1–5",
    hint: "Primary school",
    description: "Reading, early maths and environmental science with games, sounds and stickers to keep the habit going.",
    icon: "backpack",
    color: "#FF8A00",
    stages: ["primary"],
    grades: [1, 2, 3, 4, 5],
    boards: [],
    comingSoon: ["English grammar", "Hindi", "Environmental studies", "Computer basics"],
  },
  {
    id: "classes-6-8",
    label: "Classes 6–8",
    hint: "Middle school",
    description: "Maths, science, English and social studies with interactive labs, plus a first taste of real coding.",
    icon: "compass",
    color: "#2F6BFF",
    stages: ["middle"],
    grades: [6, 7, 8],
    boards: [],
    comingSoon: ["Hindi", "Sanskrit", "Computer applications"],
  },
  {
    id: "classes-9-10",
    label: "Classes 9–10",
    hint: "Secondary · board exam years",
    description: "Board-aligned chapters for CBSE, ICSE and Karnataka SSLC in every subject, with worked examples, practice, revision plans and simulations.",
    icon: "flask",
    color: "#14B8A6",
    stages: ["secondary"],
    grades: [9, 10],
    boards: [
      { board: "cbse", grades: ["9", "10"] },
      { board: "kseeb", grades: ["10"] },
      { board: "icse", grades: ["9", "10"] },
    ],
    comingSoon: ["Economics", "Hindi", "Information technology"],
  },
  {
    id: "classes-11-12",
    label: "Classes 11–12",
    hint: "Senior secondary · PUC · NEET / JEE",
    description: "Senior school maths and English alongside full NEET and JEE preparation: concept lessons, chapter drills and mock tests.",
    icon: "target",
    color: "#7C4DFF",
    stages: ["secondary", "aspirant"],
    grades: [11, 12],
    boards: [
      { board: "cbse", grades: ["11", "12"] },
      { board: "pue", grades: ["PUC-1", "PUC-2"] },
      { board: "icse", grades: ["11", "12"] },
      { board: "exam", grades: ["NEET", "JEE"] },
    ],
    comingSoon: ["Accountancy", "Business studies", "Computer science", "Political science"],
  },
  {
    id: "undergraduate",
    label: "Undergraduate",
    hint: "College and university · UG and PG",
    description: "University-level computer science, AI, engineering, medicine, finance, economics, psychology and design.",
    icon: "graduation",
    color: "#2EBE70",
    stages: ["ug", "pg"],
    boards: [],
    comingSoon: ["Organic chemistry", "Linear algebra", "Civil engineering", "Law foundations"],
  },
  {
    id: "lifelong",
    label: "Lifelong and professional",
    hint: "Working adults and the curious",
    description: "Practical skills for work — coding, data, money and design — with career pathways that end in a certificate.",
    icon: "briefcase",
    color: "#334155",
    stages: ["lifelong"],
    boards: [],
    comingSoon: ["Spreadsheets at work", "Public speaking", "Product management"],
  },
];

export const classById = Object.fromEntries(CLASS_GROUPS.map((g) => [g.id, g])) as Record<ClassGroupId, ClassGroup>;

export function isClassGroupId(id: string): id is ClassGroupId {
  return id in classById;
}

const GRADE_RE = /^Grade (\d+)$/;

/** True when a subject belongs in a class group (stage overlap, then grade check when both sides list grades). */
export function subjectMatchesClass(subject: { stages: Stage[]; levels: string[] }, g: ClassGroup): boolean {
  if (!subject.stages.some((s) => g.stages.includes(s))) return false;
  if (!g.grades) return true;
  const grades = subject.levels.map((l) => GRADE_RE.exec(l)?.[1]).filter((x): x is string => Boolean(x)).map(Number);
  if (!grades.length) return true;
  return grades.some((n) => g.grades!.includes(n));
}

/** Levels of a subject worth showing for a class group (grade levels narrowed to the group). */
export function levelsForClass(levels: string[], g: ClassGroup): string[] {
  if (!g.grades) return levels;
  const kept = levels.filter((l) => {
    const m = GRADE_RE.exec(l);
    return !m || g.grades!.includes(Number(m[1]));
  });
  return kept.length ? kept : levels;
}

/** The class group a learner's profile stage lands in. */
export function classForStage(stage: Stage | null | undefined): ClassGroup | null {
  if (!stage) return null;
  if (stage === "aspirant") return classById["classes-11-12"];
  return CLASS_GROUPS.find((g) => g.stages.includes(stage)) ?? null;
}

/** The class group a board grade belongs to. */
export function classForGrade(board: Board, gradeId: string): ClassGroup | null {
  return CLASS_GROUPS.find((g) => g.boards.some((b) => b.board === board && b.grades.includes(gradeId))) ?? null;
}

export interface Goal {
  id: "code" | "exam" | "career" | "early";
  title: string;
  description: string;
  href: string;
  icon: "code" | "target" | "route" | "sparkles";
  color: string;
}

export const GOALS: Goal[] = [
  { id: "code", title: "Learn to code", description: "HTML, CSS, JavaScript, Python and SQL with a live editor on every page.", href: "/courses?c=code", icon: "code", color: "#1CB0F6" },
  { id: "exam", title: "Exam prep", description: "NEET and JEE concept lessons, chapter drills, formula vault and full mock tests.", href: "/exam", icon: "target", color: "#FF4B4B" },
  { id: "career", title: "Career pathways", description: "Goal-led sequences with workplace assignments and a certificate at the end.", href: "/pathways", icon: "route", color: "#2EBE70" },
  { id: "early", title: "Early learning", description: "Playful first steps in letters, numbers and shapes for ages 3 to 7.", href: "/library/class/pre-primary", icon: "sparkles", color: "#FF8A00" },
];
