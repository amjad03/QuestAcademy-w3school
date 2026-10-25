import { TOPICS, type TopicKey } from "./topics";
import { CHAPTER_LESSONS } from "@/content/subjects/extra";
import type { SyllabusChapter, SyllabusSubject } from "./types";

/** [chapter title, topic key, approx weightage %] */
export type Row = readonly [title: string, topic: TopicKey, weightage?: number];

/** Build a subject from rows; chapter ids are `${prefix}:${subjectId}:${n}`. */
export function subject(prefix: string, id: string, name: string, rows: readonly Row[]): SyllabusSubject {
  // Lessons linked to "<grade>:<title>" (e.g. "9:Triangles") apply to that grade only and replace the shared "<title>" links.
  const grade = prefix.split(":")[1];
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
          const byGrade = CHAPTER_LESSONS[`${fam}|${grade}:${title}`];
          return [...new Set(byGrade ?? [...(CHAPTER_LESSONS[`${fam}|${title}`] ?? []), ...t.lessons])];
        })(),
        examChapters: t.exam ? [...t.exam.chapters] : [],
        examSubject: t.exam?.subject,
        formulaChapter: t.formula,
      };
    }),
  };
}
