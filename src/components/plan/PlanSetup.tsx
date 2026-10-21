"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import { useLearner, type StudyPlan } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { useMode } from "@/lib/useMode";
import { useCatalog } from "@/components/shell/CatalogContext";
import { pathways } from "@/content/pathways";
import { SYLLABI, examDateFor, getGrade, resolveBoardGrade } from "@/content/syllabus";
import type { Board } from "@/lib/modes";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Scope = StudyPlan["scope"];

function addDays(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return dayKey(d);
}

function defaultTarget(scope: Scope) {
  if (scope.type === "syllabus") {
    const [b, g] = scope.id.split(":") as [Board, string];
    const grade = SYLLABI[b] && getGrade(b, g);
    const date = grade && examDateFor(grade);
    if (date) {
      // Finish two weeks before the exam so the last stretch is revision.
      date.setDate(date.getDate() - 14);
      const k = dayKey(date);
      if (k > addDays(14)) return k;
    }
  }
  return addDays(56);
}

/** Scope picker + target date + weekly hours + study days. */
export function PlanSetup({ initial, onDone }: { initial?: StudyPlan | null; onDone?: () => void }) {
  const mode = useMode();
  const catalog = useCatalog();
  const profile = useLearner((s) => s.profile);
  const enrolled = useLearner((s) => s.pathways.enrolled);
  const setPlan = useLearner((s) => s.setPlan);

  const fallbackScope = useMemo<Scope>(() => {
    if (mode.id === "focus") {
      const { board, grade } = resolveBoardGrade(profile.board, profile.grade, profile.stage);
      return { type: "syllabus", id: `${board}:${grade}` };
    }
    if (mode.id === "professional") return { type: "pathway", id: enrolled[0] ?? pathways[0].slug };
    return { type: "course", id: profile.course ?? catalog[0]?.slug ?? "" };
  }, [mode.id, profile.board, profile.grade, profile.stage, profile.course, enrolled, catalog]);

  const [scope, setScope] = useState<Scope>(initial?.scope ?? fallbackScope);
  const [target, setTarget] = useState(initial?.targetDate ?? defaultTarget(initial?.scope ?? fallbackScope));
  const [hours, setHours] = useState(initial?.hoursPerWeek ?? 6);
  const [days, setDays] = useState<number[]>(initial?.studyDays ?? [1, 2, 3, 4, 5, 6]);

  const value = `${scope.type}|${scope.id}`;
  const onScope = (v: string) => {
    const [type, id] = v.split("|") as [Scope["type"], string];
    const s = { type, id };
    setScope(s);
    if (!initial) setTarget(defaultTarget(s));
  };

  const valid = Boolean(scope.id) && target > dayKey() && hours > 0 && days.length > 0;

  const save = () => {
    if (!valid) return;
    setPlan({ scope, targetDate: target, hoursPerWeek: hours, studyDays: [...days].sort(), createdAt: dayKey() });
    onDone?.();
  };

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
          <CalendarDays className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <div>
          <h2 className="text-lg font-black">{initial ? "Re-plan" : "Make a study plan"}</h2>
          <p className="text-sm font-semibold text-muted">Tell us your deadline and time. We’ll lay out every day, then adjust as you go.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <label className="grid gap-1.5">
          <span className="eyebrow">What to cover</span>
          <select className="input" value={value} onChange={(e) => onScope(e.target.value)}>
            <optgroup label="Board syllabus">
              {Object.values(SYLLABI).flatMap((b) =>
                b.grades.map((g) => (
                  <option key={`${b.id}:${g.id}`} value={`syllabus|${b.id}:${g.id}`}>
                    {b.name} · {g.name}
                  </option>
                )),
              )}
            </optgroup>
            <optgroup label="Career pathway">
              {pathways.map((p) => (
                <option key={p.slug} value={`pathway|${p.slug}`}>
                  {p.title}
                  {enrolled.includes(p.slug) ? " (enrolled)" : ""}
                </option>
              ))}
            </optgroup>
            <optgroup label="Course">
              {catalog.map((c) => (
                <option key={c.slug} value={`course|${c.slug}`}>
                  {c.title}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="eyebrow">Finish by</span>
            <input type="date" className="input" min={addDays(1)} value={target} onChange={(e) => setTarget(e.target.value)} />
          </label>
          <label className="grid gap-1.5">
            <span className="eyebrow">Hours per week · {hours} h</span>
            <input type="range" min={1} max={30} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="mt-3 accent-[rgb(var(--accent))]" aria-label="Hours per week" />
          </label>
        </div>

        <fieldset>
          <legend className="eyebrow mb-2">Study days</legend>
          <div className="flex flex-wrap gap-2">
            {DAYS.map((d, i) => {
              const on = days.includes(i);
              return (
                <button
                  key={d}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setDays(on ? days.filter((x) => x !== i) : [...days, i])}
                  className={clsx("h-10 min-w-[52px] rounded-xl border-2 px-3 text-sm font-extrabold transition", on ? "border-accent bg-accent-soft text-accent" : "border-line text-muted hover:bg-surface-2")}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex flex-wrap justify-end gap-3">
        {onDone && initial && (
          <button type="button" className="btn-ghost" onClick={onDone}>
            Cancel
          </button>
        )}
        <button type="button" className="btn-primary" disabled={!valid} onClick={save}>
          {initial ? "Update plan" : "Create plan"}
        </button>
      </div>
    </div>
  );
}
