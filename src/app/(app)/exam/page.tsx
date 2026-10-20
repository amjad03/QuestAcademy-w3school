import { examQuestions } from "@/content/exam/questions";
import { formulaSheets } from "@/content/exam/formulas";
import { ExamHub } from "@/components/exam/ExamHub";

export const metadata = { title: "Exam prep — NEET & JEE" };

export default function Page() {
  const chapters: Record<string, string[]> = {};
  for (const q of examQuestions) {
    chapters[q.subject] ??= [];
    if (!chapters[q.subject].includes(q.chapter)) chapters[q.subject].push(q.chapter);
  }
  return <ExamHub questionCount={examQuestions.length} formulaCount={formulaSheets.reduce((a, s) => a + s.items.length, 0)} chapters={chapters} />;
}
