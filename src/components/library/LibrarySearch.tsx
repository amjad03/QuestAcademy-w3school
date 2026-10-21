"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CourseIcon } from "@/components/brand/CourseIcon";

/** Slimmed search index entry (no lesson bodies) passed from a server component. */
export interface LibrarySearchItem {
  kind: "subject" | "topic" | "lesson";
  title: string;
  subtitle: string;
  href: string;
  course: string;
  keywords: string;
}

const KIND_LABEL = { subject: "Course", topic: "Unit", lesson: "Lesson" } as const;
const KIND_RANK = { subject: 0, topic: 1, lesson: 2 } as const;

function score(item: LibrarySearchItem, terms: string[]): number {
  const title = item.title.toLowerCase();
  let s = 0;
  for (const t of terms) {
    if (title.startsWith(t)) s += 4;
    else if (title.includes(t)) s += 3;
    else if (item.keywords.includes(t)) s += 1;
    else return 0;
  }
  return s * 10 - KIND_RANK[item.kind];
}

export function LibrarySearch({ items, placeholder = "Search courses, units and lessons", limit = 8 }: { items: LibrarySearchItem[]; placeholder?: string; limit?: number }) {
  const [q, setQ] = useState("");
  const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const results = useMemo(() => {
    if (!terms.length) return [];
    return items
      .map((item) => ({ item, s: score(item, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)
      .map((r) => r.item);
  }, [items, terms.join(" "), limit]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <label className="relative block">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} className="input pl-12" aria-label="Search the library" />
      </label>
      {terms.length > 0 && (
        <div className="card mt-2 overflow-hidden" role="region" aria-live="polite" aria-label="Search results">
          {results.length ? (
            <ul className="divide-y-2 divide-line">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="flex items-center gap-3 px-4 py-2.5 transition hover:bg-surface-2">
                    <CourseIcon slug={r.course} size={28} flat />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-extrabold">{r.title}</span>
                      <span className="block truncate text-xs font-semibold text-muted">{r.subtitle}</span>
                    </span>
                    <span className="chip !py-0.5 text-xs text-muted">{KIND_LABEL[r.kind]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm font-semibold text-muted">Nothing matches “{q.trim()}”. Try a subject or chapter name.</p>
          )}
        </div>
      )}
    </div>
  );
}
