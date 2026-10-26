import { notFound } from "next/navigation";
import { examQuestions } from "@/content/exam/questions";
import { formulaSheets } from "@/content/exam/formulas";
import { MOCK_TESTS, getMock, poolFor, txtEn } from "@/lib/exam";
import { CbtExam } from "@/components/exam/CbtExam";

export function generateStaticParams() {
  return [...MOCK_TESTS.map((m) => ({ id: m.id })), { id: "neet-full" }, { id: "jee-main" }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = getMock(id);
  return { title: m ? txtEn(m.title) : "Mock test" };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const test = getMock(id);
  if (!test) notFound();
  const pool = poolFor(test, examQuestions);
  const formulaChapters = [...new Set(formulaSheets.map((s) => s.chapter))];
  return <CbtExam test={test} pool={pool} formulaChapters={formulaChapters} />;
}
