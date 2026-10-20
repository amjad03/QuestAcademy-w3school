import { notFound } from "next/navigation";
import { examQuestions } from "@/content/exam/questions";
import { MOCK_TESTS, getMock } from "@/lib/exam";
import { CbtExam } from "@/components/exam/CbtExam";

export function generateStaticParams() {
  return MOCK_TESTS.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: getMock(id)?.title ?? "Mock test" };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const test = getMock(id);
  if (!test) notFound();
  const subjects = new Set(test.sections.map((s) => s.subject));
  const pool = examQuestions.filter((q) => subjects.has(q.subject));
  return <CbtExam test={test} pool={pool} />;
}
