import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { MOCK_TESTS } from "@/lib/exam";
import { MockCard } from "@/components/exam/ExamHub";

export const metadata = { title: "Mock tests" };

export default function Page() {
  return (
    <div className="mx-auto max-w-[1060px] px-4 py-8 sm:px-6">
      <Link href="/exam" className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent">
        <ChevronLeft className="h-4 w-4" /> Exam prep
      </Link>
      <h1 className="mt-4 text-3xl font-black">Mock tests</h1>
      <p className="mt-2 max-w-2xl font-semibold text-muted">
        The real computer-based-test experience: section tabs, question palette, mark for review, auto-submit and a detailed scorecard. Every attempt draws a fresh mix of questions.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_TESTS.map((m) => (
          <MockCard key={m.id} id={m.id} />
        ))}
      </div>
    </div>
  );
}
