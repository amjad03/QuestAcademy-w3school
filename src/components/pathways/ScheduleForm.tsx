"use client";

import clsx from "clsx";
import { useState } from "react";
import type { Pathway } from "@/content/pathways";
import { useLearner } from "@/lib/store";
import { WEEKDAYS, formatDate, scheduleFor } from "./hooks";

/** Flexible study schedule: target date, hours per week and study days. Saved as the learner's study plan. */
export function ScheduleForm({ pathway, totalHours, onSaved }: { pathway: Pathway; totalHours: number; onSaved?: () => void }) {
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
          <span className="text-sm font-semibold text-muted">Finish by</span>
          <input type="date" className="input mt-1" value={targetDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => (setTarget(e.target.value), setSaved(false))} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-muted">Hours per week: {hours}</span>
          <input type="range" min={1} max={20} value={hours} onChange={(e) => (setHours(Number(e.target.value)), setSaved(false))} className="mt-3 w-full accent-[rgb(var(--accent))]" />
        </label>
      </div>
      <div>
        <span className="text-sm font-semibold text-muted">Study days</span>
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
                {d}
              </button>
            );
          })}
        </div>
      </div>
      {otherPlan && <p className="text-sm text-muted">Saving replaces your current study plan. You can switch back any time from the Plan page.</p>}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={save} disabled={!days.length} className="btn-primary">
          Save schedule
        </button>
        {saved && <span className="text-sm font-semibold text-good">Saved — aiming to finish by {formatDate(targetDate)}.</span>}
      </div>
    </div>
  );
}
