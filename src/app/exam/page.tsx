import { catalog } from "@/content";
import { examQuestions } from "@/content/exam/questions";
import { formulaSheets } from "@/content/exam/formulas";
import { ArenaHub } from "@/components/exam/ArenaHub";

export const metadata = { title: "The Arena — NEET & JEE" };

export default function Page() {
  const chapters: Record<string, string[]> = {};
  for (const q of examQuestions) {
    chapters[q.subject] ??= [];
    if (!chapters[q.subject].includes(q.chapter)) chapters[q.subject].push(q.chapter);
  }
  return <ArenaHub courses={catalog("exam")} questionCount={examQuestions.length} formulaCount={formulaSheets.reduce((a, s) => a + s.items.length, 0)} chapters={chapters} />;
}
