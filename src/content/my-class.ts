/**
 * "My class": what a school learner sees — their board and class, their subjects,
 * and each subject's chapters in the board's order, with only the lessons that fit
 * the class. Shared by the client pages and the chapter test route.
 *
 * Learners with a board syllabus (Classes 9–12, NEET / JEE) get it from SYLLABI.
 * Younger classes are built from the courses for their grade (see classFromCourses).
 */
import type { Stage } from "@/content/types";
import type { Board } from "@/lib/modes";
import { SYLLABI, resolveBoardGrade, type SyllabusChapter } from "@/content/syllabus";

export interface ClassChapter {
  /** URL slug within the subject, e.g. "history-3" or a course topic slug. */
  slug: string;
  /** Chapter number shown to the learner (board order within its part). */
  n: number;
  title: string;
  /** Part of the subject this chapter belongs to ("History", "Geography" …), if any. */
  part: string | null;
  lessonIds: string[];
  /** The board syllabus chapter, when the class comes from a syllabus. */
  syllabus: SyllabusChapter | null;
  /** Course-based chapters: the course unit (topic) this chapter is. */
  unit: { course: string; topic: string } | null;
}

export interface ClassSubject {
  id: string;
  name: string;
  /** Course slug used for the subject's icon and colours. */
  icon: string;
  parts: { name: string | null; chapters: ClassChapter[] }[];
  chapters: ClassChapter[];
}

export interface MyClass {
  /** Stable key, e.g. "kseeb:10" or "grade:7". */
  key: string;
  board: Board | null;
  grade: string;
  /** "SSLC (Class 10)", "Class 7" … */
  name: string;
  /** "Karnataka SSLC", "CBSE" … (null for course-based classes). */
  boardName: string | null;
  subjects: ClassSubject[];
}

/** Syllabus subject ids that are parts of one "Social Science" subject. */
const SOCIAL_PARTS = ["history", "civics", "politics", "sociology", "geography", "economics", "business"];

/** Course slug whose icon represents each class subject. */
const SUBJECT_ICON: Record<string, string> = {
  maths: "math-high",
  science: "physics-school",
  physics: "physics-school",
  chemistry: "chemistry-school",
  biology: "biology-school",
  social: "social-science",
  english: "english",
  hindi: "hindi",
  kannada: "kannada",
  computers: "computer-applications",
  electronics: "electronics",
  cs: "computer-science",
  gk: "general-knowledge",
};

/** Lessons from these courses are too advanced for Class 10 and below (NEET / JEE and Class 11–12). */
const ADVANCED_COURSE = /^(exam-|[a-z]+-senior$)/;

const isSenior = (grade: string) => /^(11|12|PUC-1|PUC-2|NEET|JEE|JEE_ADV|KCET|COMEDK)$/.test(grade);

/** Only the lessons that fit the class: no NEET / JEE or Class 11–12 lessons up to Class 10. */
export function lessonsForClass(lessonIds: string[], grade: string): string[] {
  if (isSenior(grade)) return lessonIds;
  return lessonIds.filter((id) => !ADVANCED_COURSE.test(id.split("/")[0]));
}

/** URL slug of a syllabus chapter within its class subject. */
export const chapterSlug = (c: SyllabusChapter) => {
  const [, , subject, n] = c.id.split(":");
  return `${subject}-${n}`;
};

/** The learner's class from a board syllabus, or null when the board has no such class. */
export function classFromSyllabus(board: Board, grade: string): MyClass | null {
  const b = SYLLABI[board];
  const g = b?.grades.find((x) => x.id === grade);
  if (!g) return null;
  const subjects: ClassSubject[] = [];
  const toChapters = (s: (typeof g.subjects)[number], part: string | null): ClassChapter[] =>
    s.chapters.map((c, i) => ({ slug: chapterSlug(c), n: c.unitNo ?? i + 1, title: c.title, part, lessonIds: lessonsForClass(c.lessonIds, grade), syllabus: c, unit: null }));

  const social = g.subjects.filter((s) => SOCIAL_PARTS.includes(s.id));
  for (const s of g.subjects) {
    if (SOCIAL_PARTS.includes(s.id)) {
      if (s !== social[0]) continue;
      const parts = social.map((p) => ({ name: p.name, chapters: toChapters(p, p.name) }));
      subjects.push({ id: "social", name: "Social Science", icon: SUBJECT_ICON.social, parts, chapters: parts.flatMap((p) => p.chapters) });
      continue;
    }
    // Entrance-exam syllabi span Classes 11 and 12: one part per class.
    const classes = [...new Set(s.chapters.map((c) => c.grade).filter(Boolean))] as string[];
    if (classes.length > 1) {
      const parts = classes.map((k) => {
        const name = `Class ${k}`;
        return { name, chapters: toChapters({ ...s, chapters: s.chapters.filter((c) => c.grade === k) }, name) };
      });
      subjects.push({ id: s.id, name: s.name, icon: SUBJECT_ICON[s.id] ?? "math-high", parts, chapters: parts.flatMap((p) => p.chapters) });
      continue;
    }
    const chapters = toChapters(s, null);
    subjects.push({ id: s.id, name: s.name, icon: SUBJECT_ICON[s.id] ?? "math-high", parts: [{ name: null, chapters }], chapters });
  }
  return { key: `${board}:${grade}`, board, grade, name: g.name, boardName: b.name, subjects };
}

/** Subjects a learner of this board usually does not take, so they start unticked. */
const OPTIONAL_BY_BOARD: Partial<Record<Board, string[]>> = { cbse: ["kannada"], icse: ["kannada"] };

/** The subjects ticked by default for a class. */
export function defaultSubjects(c: MyClass): string[] {
  // PCME / PCM-CS subjects are opt-in: the learner ticks them during setup.
  const off = [...((c.board && OPTIONAL_BY_BOARD[c.board]) ?? []), "electronics", "cs"];
  return c.subjects.map((s) => s.id).filter((id) => !off.includes(id));
}

/** The learner's chosen subjects, in the class's order (all defaults until they choose). */
export function chosenSubjects(c: MyClass, picked: string[] | null | undefined): ClassSubject[] {
  const ids = picked?.length ? picked : defaultSubjects(c);
  const list = c.subjects.filter((s) => ids.includes(s.id));
  return list.length ? list : c.subjects;
}

/** Stages that have a class (college and lifelong learners browse the full catalogue). */
export const SCHOOL_STAGES: Stage[] = ["preprimary", "primary", "middle", "secondary", "aspirant"];

/** Board + grade for a learner who has a board syllabus (Classes 9–12, NEET / JEE). */
export function boardClassOf(profile: { stage?: Stage | null; board?: Board | null; grade?: string | null }) {
  if (profile.stage !== "secondary" && profile.stage !== "aspirant") return null;
  return resolveBoardGrade(profile.board ?? null, profile.grade ?? null, profile.stage);
}

/** Find a chapter by its global syllabus id ("kseeb:10:maths:2"), with the class lesson filter applied. */
export function syllabusChapterById(id: string): { chapter: ClassChapter; subject: ClassSubject; myClass: MyClass } | null {
  const [board, grade] = id.split(":") as [Board, string];
  const c = classFromSyllabus(board, grade);
  if (!c) return null;
  for (const s of c.subjects) for (const ch of s.chapters) if (ch.syllabus?.id === id) return { chapter: ch, subject: s, myClass: c };
  return null;
}
