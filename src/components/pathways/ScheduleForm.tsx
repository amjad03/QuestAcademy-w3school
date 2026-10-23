"use client";

import clsx from "clsx";
import { useState } from "react";
import type { Pathway } from "@/content/pathways";
import { useLearner } from "@/lib/store";
import { useT } from "@/i18n";
import { WEEKDAYS, formatDate, scheduleFor, useWeekdayLabels } from "./hooks";

/** Flexible study schedule: target date, hours per week and study days. Saved as the learner's study plan. */
export function ScheduleForm({ pathway, totalHours, onSaved }: { pathway: Pathway; totalHours: number; onSaved?: () => void }) {
  const t = useT();
  const weekdayLabel = useWeekdayLabels();
  const plan = useLearner((s) => s.plan);
  const setPlan = useLearner((s) => s.setPlan);
  const current = scheduleFor(pathway, plan, totalHours);
  const [targetDate, setTarget] = useState(current.targetDate);
  const [hours, setHours] = useState(current.hoursPerWeek);
  const [days, setDays] = useState<number[]>(current.studyDays);
  const [saved, setSaved] = useState(false);
  const otherPlan = plan && !(plan.scope.type === "pathway" && plan.scope.id === pathway.slug);

  const save = () => {
    setPlan({ scope: { type: "pathway", id: pathway.slug }, targetDate, hoursPerWeek: hours, studyDays: [...days].sort((a, b) => a - b), createdAt: new Date().toISOString() });
    setSaved(true);
    onSaved?.();
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-muted">{t("path.schedule.finishBy", "Finish by")}</span>
          <input type="date" className="input mt-1" value={targetDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => (setTarget(e.target.value), setSaved(false))} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-muted">{t("path.schedule.hours", "Hours per week: {n}", { n: hours })}</span>
          <input type="range" min={1} max={20} value={hours} onChange={(e) => (setHours(Number(e.target.value)), setSaved(false))} className="mt-3 w-full accent-[rgb(var(--accent))]" />
        </label>
      </div>
      <div>
        <span className="text-sm font-semibold text-muted">{t("path.schedule.studyDays", "Study days")}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {WEEKDAYS.map((d, i) => {
            const on = days.includes(i);
            return (
              <button
                key={d}
                type="button"
                aria-pressed={on}
                onClick={() => (setDays(on ? days.filter((x) => x !== i) : [...days, i]), setSaved(false))}
                className={clsx("rounded-lg border-2 px-3 py-1.5 text-sm font-semibold transition", on ? "border-accent bg-accent-soft text-accent" : "border-line text-muted hover:bg-surface-2")}
              >
                {weekdayLabel[i]}
              </button>
            );
          })}
        </div>
      </div>
      {otherPlan && <p className="text-sm text-muted">{t("path.schedule.replaces", "Saving replaces your current study plan. You can switch back any time from the Plan page.")}</p>}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={save} disabled={!days.length} className="btn-primary">
          {t("path.schedule.save", "Save schedule")}
        </button>
        {saved && <span className="text-sm font-semibold text-good">{t("path.schedule.saved", "Saved — aiming to finish by {date}.", { date: formatDate(targetDate) })}</span>}
      </div>
    </div>
  );
}
