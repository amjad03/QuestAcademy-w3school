import Link from "next/link";
import { MOCK_TESTS } from "@/lib/exam";
import { MockCard } from "@/components/exam/ArenaHub";

export const metadata = { title: "Mock tests" };

export default function Page() {
  return (
    <div data-world="exam" className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Link href="/exam" className="text-sm text-muted hover:text-ink">
          ← The Arena
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold">Mock tests</h1>
        <p className="mt-2 max-w-2xl text-muted">A real computer-based-test interface: section tabs, question palette, mark-for-review, auto-submit and a deep scorecard. Every attempt draws a fresh mix of questions.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_TESTS.map((m) => (
            <MockCard key={m.id} id={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
