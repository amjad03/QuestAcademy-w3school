"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";
import type { CatalogSubject } from "@/content";
import { SubjectCard } from "./SubjectCard";

/** Subject grid with filter chips + text search. `groupBy` picks the chip source. */
export function FilterGrid({
  subjects,
  groupBy,
  variant,
  allLabel = "All",
}: {
  subjects: CatalogSubject[];
  groupBy: "domain" | "stage" | "none";
  variant?: "default" | "code" | "campus";
  allLabel?: string;
}) {
  const [filter, setFilter] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const groups = useMemo(() => {
    if (groupBy === "domain") return Array.from(new Set(subjects.map((s) => s.domain ?? "Other")));
    if (groupBy === "stage") return ["Grades 6–8", "Grades 9–12"];
    return [];
  }, [subjects, groupBy]);

  const shown = subjects.filter((s) => {
    if (filter) {
      if (groupBy === "domain" && (s.domain ?? "Other") !== filter) return false;
      if (groupBy === "stage" && !s.stages.includes(filter === "Grades 6–8" ? "middle" : "secondary")) return false;
    }
    if (q) {
      const t = q.toLowerCase();
      return [s.title, s.tagline, s.domain ?? "", ...s.lessons.map((l) => l.title + " " + l.topicTitle)].join(" ").toLowerCase().includes(t);
    }
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {groups.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {[null, ...groups].map((g) => (
              <button
                key={g ?? "all"}
                onClick={() => setFilter(g)}
                className={clsx("rounded-full border px-4 py-1.5 text-sm font-medium transition", filter === g ? "border-accent bg-accent text-white" : "border-line bg-surface text-muted hover:text-ink")}
              >
                {g ?? allLabel}
              </button>
            ))}
          </div>
        )}
        <label className="relative sm:ml-auto sm:w-72">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by topic…" className="input !py-2 pl-10" />
        </label>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s) => (
          <SubjectCard key={s.slug} s={s} variant={variant} />
        ))}
      </div>
      {shown.length === 0 && <p className="py-16 text-center text-muted">Nothing matches that yet — try another word.</p>}
    </div>
  );
}
