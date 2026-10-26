import { examQuestions } from "@/content/exam/questions";
import { formulaSheets } from "@/content/exam/formulas";
import { gradeOf } from "@/lib/exam";
import { ExamHub, type HubChapter } from "@/components/exam/ExamHub";

export const metadata = { title: "Exam prep — JEE, NEET, KCET & COMEDK" };

export default function Page() {
  const chapters = new Map<string, HubChapter>();
  for (const q of examQuestions) {
    const k = `${q.subject}|${q.chapter}`;
    const c = chapters.get(k) ?? { subject: q.subject, chapter: q.chapter, grade: gradeOf(q), exams: [], n: 0 };
    c.n++;
    for (const e of q.exams) if (!c.exams.includes(e)) c.exams.push(e);
    chapters.set(k, c);
  }
  return <ExamHub questionCount={examQuestions.length} formulaCount={formulaSheets.reduce((a, s) => a + s.items.length, 0)} chapters={[...chapters.values()]} />;
}
