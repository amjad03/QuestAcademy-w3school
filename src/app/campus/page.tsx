import { catalog } from "@/content";
import { worldById } from "@/content/worlds";
import { FilterGrid } from "@/components/world/FilterGrid";

export const metadata = { title: "The Campus — UG & PG" };

export default function Page() {
  const w = worldById.campus;
  const subjects = catalog("campus");
  const domains = Array.from(new Set(subjects.map((s) => s.domain))).filter(Boolean);
  const lessons = subjects.reduce((a, s) => a + s.lessons.length, 0);
  return (
    <div data-world="campus" className="min-h-screen bg-bg text-ink">
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="chip">{w.emoji} Undergraduate · Postgraduate · Professional</span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              A university in your pocket — <em className="text-gradient not-italic">every domain.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{w.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 self-end">
            {[
              [subjects.length, "courses"],
              [domains.length, "domains"],
              [lessons, "lectures"],
              ["∞", "office hours"],
            ].map(([n, l]) => (
              <div key={String(l)} className="card p-5">
                <div className="font-serif text-4xl font-semibold">{n}</div>
                <div className="text-sm text-muted">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 font-serif text-3xl font-semibold">Course catalogue</h2>
        <FilterGrid subjects={subjects} groupBy="domain" variant="campus" allLabel="All domains" />
      </section>
    </div>
  );
}
