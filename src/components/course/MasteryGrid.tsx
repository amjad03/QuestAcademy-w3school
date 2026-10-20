"use client";

import Link from "next/link";
import clsx from "clsx";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";

/** Khan-style skill squares: one square per lesson, coloured by mastery level. */
export function MasteryGrid({ skills, size = 22 }: { skills: { id: string; title: string; href: string; level: MasteryLevel }[]; size?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((s) => (
        <Link
          key={s.id}
          href={s.href}
          title={`${s.title} — ${MASTERY[s.level].name}`}
          className={clsx("rounded-md transition hover:scale-110", s.level === 0 && "border-2 border-line")}
          style={{ width: size, height: size, background: s.level === 0 ? "transparent" : MASTERY[s.level].color }}
        />
      ))}
    </div>
  );
}

export function MasteryLegend({ counts }: { counts?: Record<number, number> }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-muted">
      {[4, 3, 2, 1, 0].map((l) => (
        <span key={l} className="flex items-center gap-2">
          <span className={clsx("h-3.5 w-3.5 rounded", l === 0 && "border-2 border-line")} style={{ background: l === 0 ? "transparent" : MASTERY[l].color }} />
          {MASTERY[l].name}
          {counts && <span className="text-ink">{counts[l] ?? 0}</span>}
        </span>
      ))}
    </div>
  );
}
