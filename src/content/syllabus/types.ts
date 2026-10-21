import type { ExamSubject } from "@/content/types";
import type { Board } from "@/lib/modes";

export interface SyllabusChapter {
  /** Globally unique, e.g. "cbse:11:physics:4". */
  id: string;
  title: string;
  unitNo?: number;
  /** Approximate share of marks / questions within the subject, in %. */
  weightage?: number;
  /** Existing Quest Academy lesson ids that teach this chapter. */
  lessonIds: string[];
  /** Exam-bank chapters (canonical names) for chapter drills. */
  examChapters: string[];
  /** Subject of the exam-bank chapters above. */
  examSubject?: ExamSubject;
  /** Formula vault chapter, when one exists. */
  formulaChapter?: string;
}

export interface SyllabusSubject {
  id: string;
  name: string;
  chapters: SyllabusChapter[];
}

export interface SyllabusGrade {
  id: string;
  name: string;
  /** Board / entrance exam this year ends in (for the countdown). */
  exam?: { name: string; month: number; day: number } | { name: string; examId: "NEET" | "JEE" };
  subjects: SyllabusSubject[];
}

export interface SyllabusBoard {
  id: Board;
  name: string;
  note: string;
  grades: SyllabusGrade[];
}
