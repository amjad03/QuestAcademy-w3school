import Link from "next/link";
import { catalog } from "@/content";
import { worlds } from "@/content/worlds";
import { FilterGrid } from "@/components/world/FilterGrid";

export const metadata = { title: "Explore every subject" };

export default function Page() {
  const all = catalog();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Explore the academy</h1>
      <p className="mt-3 text-lg text-muted">
        {all.length} subjects across five worlds. Wander anywhere — your progress follows you.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {worlds.map((w) => (
          <a key={w.id} href={`#${w.id}`} className="chip !px-4 !py-1.5 !text-sm hover:!text-ink">
            {w.emoji} {w.name}
          </a>
        ))}
      </div>
      <div className="mt-10 space-y-16">
        {worlds.map((w) => (
          <section key={w.id} id={w.id} data-world={w.id} className="scroll-mt-24">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl text-2xl" style={{ background: `linear-gradient(135deg, ${w.colors[0]}, ${w.colors[1]})` }}>
                  {w.emoji}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold">{w.name}</h2>
                  <p className="text-sm text-muted">{w.tagline}</p>
                </div>
              </div>
              <Link href={w.href} className="shrink-0 text-sm font-medium text-accent">
                Enter world →
              </Link>
            </div>
            <FilterGrid subjects={all.filter((s) => s.world === w.id)} groupBy={w.id === "campus" ? "domain" : "none"} variant={w.id === "code" ? "code" : w.id === "campus" ? "campus" : "default"} />
          </section>
        ))}
      </div>
    </div>
  );
}
