import Link from "next/link";
import { catalog } from "@/content";
import { worldById } from "@/content/worlds";
import { FilterGrid } from "@/components/world/FilterGrid";
import { simulationsIn } from "@/lib/catalog-server";

export const metadata = { title: "Explorer's Atlas — Grades 6–12" };

export default function Page() {
  const w = worldById.school;
  const subjects = catalog("school");
  const sims = [...simulationsIn("school"), ...simulationsIn("exam").filter((x) => !simulationsIn("school").some((y) => y.widget === x.widget))];
  return (
    <div data-world="school" className="min-h-screen bg-bg text-ink">
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-emerald-500/15" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
          <defs>
            <pattern id="topo" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" />
              <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" />
              <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <span className="chip">{w.emoji} Grades 6–12 · {w.mascot.emoji} with {w.mascot.name}</span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
            School subjects you can <span className="text-gradient">touch.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{w.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/learn/${subjects[0]?.slug}`} className="btn-primary">Start exploring</Link>
            <a href="#lab" className="btn-ghost">🔬 Open the simulation lab</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 font-display text-2xl font-bold">Your atlas</h2>
        <FilterGrid subjects={subjects} groupBy="stage" allLabel="All grades" />
      </section>

      {sims.length > 0 && (
        <section id="lab" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6">
          <div className="rounded-4xl border border-line bg-surface p-6 sm:p-10">
            <h2 className="font-display text-3xl font-bold">🔬 Simulation lab</h2>
            <p className="mt-2 text-muted">Every interactive in the atlas — jump straight into the lesson that uses it.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sims.map((s) => (
                <Link key={s.widget} href={s.href} className="group rounded-3xl border border-line bg-bg p-4 transition hover:-translate-y-0.5 hover:border-accent/50">
                  <span className="text-4xl transition group-hover:scale-110">{s.emoji}</span>
                  <div className="mt-2 font-semibold">{s.name}</div>
                  <div className="truncate text-xs text-muted">{s.subject} · {s.lesson}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
