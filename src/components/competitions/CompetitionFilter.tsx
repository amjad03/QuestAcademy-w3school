"use client";

import { useState } from "react";
import clsx from "clsx";
import { STAGES, type Competition, type Stage } from "@/content/competitions";
import { useT } from "@/i18n";
import { CompetitionCard } from "./CompetitionCard";
import { useStageLabels } from "./labels";

/** Stage chips plus the filtered card grid. Content arrives from the server page. */
export function CompetitionFilter({ items }: { items: Competition[] }) {
  const t = useT();
  const stageLabel = useStageLabels();
  const [stage, setStage] = useState<Stage | "all">("all");
  const shown = stage === "all" ? items : items.filter((c) => c.stages.includes(stage));
  const chips: { id: Stage | "all"; label: string }[] = [
    { id: "all", label: t("comp.filter.allStages", "All stages") },
    ...STAGES.map((s) => ({ id: s.id, label: stageLabel[s.id] })),
  ];
  return (
    <section className="mt-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={t("comp.filter.ariaLabel", "Filter by stage")}>
        {chips.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === stage}
            onClick={() => setStage(s.id)}
            className={clsx(
              "rounded-xl border-2 px-3 py-1.5 text-sm font-extrabold transition",
              s.id === stage ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:text-ink",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm font-bold text-muted">
        {shown.length === 1
          ? t("comp.filter.entries.one", "{n} entry", { n: shown.length })
          : t("comp.filter.entries.other", "{n} entries", { n: shown.length })}
      </p>
      <div className="mt-3 grid gap-4 2xl:grid-cols-2">
        {shown.map((c) => (
          <CompetitionCard key={c.slug} c={c} />
        ))}
      </div>
    </section>
  );
}
