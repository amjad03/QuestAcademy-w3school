import { TOPICS, type TopicKey } from "./topics";
import links from "./chapter-links.json";

const CHAPTER_LESSONS: Record<string, string[]> = links.chapterLessons;
import type { SyllabusChapter, SyllabusSubject } from "./types";

/** [chapter title, topic key, approx weightage %] */
export type Row = readonly [title: string, topic: TopicKey, weightage?: number];

/** Class numbers a board grade uses for "<grade>:<title>" links (PUC = Classes 11–12; entrance exams cover both). */
const GRADE_KEYS: Record<string, string[]> = { "PUC-1": ["11"], "PUC-2": ["12"], NEET: ["12", "11"], JEE: ["12", "11"], JEE_ADV: ["12", "11"], KCET: ["12", "11"], COMEDK: ["12", "11"] };

/** Build a subject from rows; chapter ids are `${prefix}:${subjectId}:${n}`. */
export function subject(prefix: string, id: string, name: string, rows: readonly Row[]): SyllabusSubject {
  // Lessons linked to "<grade>:<title>" (e.g. "9:Triangles") apply to that grade only and replace the shared "<title>" links.
  const grade = prefix.split(":")[1];
  const gradeKeys = GRADE_KEYS[grade] ?? [grade];
  return {
    id,
    name,
    chapters: rows.map(([title, key, weightage], i): SyllabusChapter => {
      const t = TOPICS[key] as { lessons: string[]; exam?: { subject: SyllabusChapter["examSubject"] & string; chapters: string[] }; formula?: string };
      return {
        id: `${prefix}:${id}:${i + 1}`,
        title,
        unitNo: i + 1,
        weightage,
        lessonIds: (() => {
          const fam = key.split(".")[0];
          const byGrade = gradeKeys.map((g) => CHAPTER_LESSONS[`${fam}|${g}:${title}`]).find(Boolean);
          return [...new Set(byGrade ?? [...(CHAPTER_LESSONS[`${fam}|${title}`] ?? []), ...t.lessons])];
        })(),
        examChapters: t.exam ? [...t.exam.chapters] : [],
        examSubject: t.exam?.subject,
        formulaChapter: t.formula,
      };
    }),
  };
}
