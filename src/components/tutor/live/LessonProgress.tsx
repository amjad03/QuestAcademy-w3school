"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Check, Clock } from "lucide-react";
import { useT } from "@/i18n";
import type { TutorSession } from "@/lib/tutor/useTutorSession";
import { STAGES, type Stage } from "@/lib/tutor/protocol";

/** The lesson plan as a progress strip: concepts (done / now / next), the stage of the current one, and time used. */
export function LessonProgress({ s, minutes }: { s: TutorSession; minutes?: number }) {
  const t = useT();
  const [now, setNow] = useState(() => performance.now());
  useEffect(() => {
    const id = setInterval(() => setNow(performance.now()), 15000);
    return () => clearInterval(id);
  }, []);
  const used = Math.max(0, Math.floor((now - s.started.current) / 60000));
  const STAGE: Record<Stage, string> = {
    hook: t("tutor.stage.hook", "Hook"),
    intuition: t("tutor.stage.intuition", "Idea"),
    definition: t("tutor.stage.definition", "Definition"),
    example: t("tutor.stage.example", "Example"),
    mistakes: t("tutor.stage.mistakes", "Mistakes"),
    try: t("tutor.stage.try", "You try"),
    recap: t("tutor.stage.recap", "Recap"),
  };
  const plan = s.plan;
  if (!plan) return null;
  const cur = s.progress?.concept;
  const doneN = plan.concepts.filter((c) => s.done.includes(c.id)).length;
  const stageIdx = s.progress ? STAGES.indexOf(s.progress.stage) : -1;
  const pct = Math.round(((doneN + (cur && !s.done.includes(cur) ? (stageIdx + 1) / STAGES.length : 0)) / Math.max(1, plan.concepts.length)) * 100);
  return (
    <section className="card space-y-2 p-3" aria-label={t("tutor.plan.aria", "Lesson plan")} data-testid="lesson-progress">
      <div className="flex items-center gap-2">
        <h2 className="min-w-0 flex-1 truncate text-sm font-black">{plan.title}</h2>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold tabular-nums text-muted">
          <Clock className="h-3.5 w-3.5" /> {minutes ? t("tutor.plan.time", "{u} / {m} min", { u: used, m: minutes }) : t("tutor.plan.timeOpen", "{u} min", { u: used })}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-accent transition-all duration-700" style={{ width: `${pct}%` }} />
      </div>
      <ol className="flex gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none]">
        {plan.concepts.map((c, i) => {
          const done = s.done.includes(c.id);
          const active = c.id === cur && !done;
          return (
            <li key={c.id} className={clsx("flex shrink-0 items-center gap-1 rounded-xl border-2 px-2 py-1 text-xs font-bold", done ? "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : active ? "border-accent bg-accent-soft text-accent" : "border-line text-muted")} aria-current={active ? "step" : undefined}>
              {done ? <Check className="h-3.5 w-3.5" /> : <span className="tabular-nums">{i + 1}</span>}
              <span className="max-w-[11rem] truncate">{c.title}</span>
              {active && s.progress && <span className="rounded-md bg-accent px-1 text-[10px] uppercase text-white">{STAGE[s.progress.stage]}</span>}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
