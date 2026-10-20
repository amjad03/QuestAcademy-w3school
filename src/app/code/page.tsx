import Link from "next/link";
import { catalog, subjectsInWorld, flatLessons } from "@/content";
import { worldById } from "@/content/worlds";
import { FilterGrid } from "@/components/world/FilterGrid";
import { Typewriter } from "@/components/world/Typewriter";

export const metadata = { title: "Code Lab — HTML, CSS, JS, Python, SQL" };

export default function Page() {
  const w = worldById.code;
  const subjects = catalog("code");
  const challenges = subjectsInWorld("code").flatMap(flatLessons).filter((l) => l.lesson.challenge).length;
  const campusCode = catalog("campus").filter((s) => s.lessons.some((l) => l.hasChallenge));
  return (
    <div data-world="code" className="min-h-screen bg-bg text-ink">
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-bg absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="chip font-mono">{"<"}code-lab{" />"}</span>
            <h1 className="mt-6 font-mono text-4xl font-bold leading-tight sm:text-5xl">
              Read less.
              <br />
              <span className="text-gradient">Run more.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-muted">{w.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/learn/html" className="btn bg-gradient-to-r from-cyan-400 to-lime-400 font-mono text-slate-900">
                $ start --html
              </Link>
              <Link href="/code/playground" className="btn-ghost font-mono">
                open playground →
              </Link>
            </div>
            <div className="mt-8 flex gap-6 font-mono text-sm text-muted">
              <span><b className="text-accent">{subjects.length}</b> languages</span>
              <span><b className="text-accent">{subjects.reduce((a, s) => a + s.lessons.length, 0)}</b> lessons</span>
              <span><b className="text-accent-2">{challenges}</b> auto-graded labs</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-glow">
            <div className="flex gap-1.5 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-muted">~/quest/hello.py</span>
            </div>
            <Typewriter />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 font-mono text-2xl font-bold">// tracks</h2>
        <FilterGrid subjects={subjects} groupBy="none" variant="code" />
      </section>
      {campusCode.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <h2 className="mb-6 font-mono text-2xl font-bold">// level up: computer science</h2>
          <FilterGrid subjects={campusCode} groupBy="none" variant="code" />
        </section>
      )}
    </div>
  );
}
