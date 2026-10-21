import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import { KINDS, MONTHS, STAGES, type Competition } from "@/content/competitions";
import { CompetitionBadge } from "./CompetitionBadge";

/** Catalogue card: kind, stages, one-line summary and the next typical month. */
export function CompetitionCard({ c }: { c: Competition }) {
  const stages = STAGES.filter((s) => c.stages.includes(s.id)).map((s) => s.label);
  const months = [...new Set(c.timeline.map((t) => t.month))].sort((a, b) => a - b);
  return (
    <Link href={`/competitions/${c.slug}`} className="tile flex gap-4 p-5">
      <CompetitionBadge kind={c.kind} size={52} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{KINDS[c.kind]}</span>
          {stages.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-lg font-black leading-tight">{c.name}</h3>
        <p className="mt-1 text-sm font-semibold leading-6 text-muted">{c.short}</p>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-bold text-muted">
          <CalendarDays className="h-3.5 w-3.5" strokeWidth={2.5} />
          Typically {months.map((m) => MONTHS[m - 1].slice(0, 3)).join(" · ")}
        </p>
      </div>
      <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted" />
    </Link>
  );
}
