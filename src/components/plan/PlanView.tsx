"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { AlertTriangle, BookOpen, CalendarPlus, Check, ClipboardCheck, RefreshCw, RotateCcw, Trash2 } from "lucide-react";
import { useLearner } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { planToIcs, type PlanDay, type PlanTask } from "@/lib/planner";
import { useHydrated } from "@/components/providers";
import { ProgressBar } from "@/components/ui/Progress";
import { PlanSetup } from "./PlanSetup";
import { usePlan, type LivePlan } from "./usePlan";

const fmt = (d: string, opts: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric", month: "short" }) => new Date(d + "T00:00:00").toLocaleDateString(undefined, opts);

function startOfWeek(d: string) {
  const x = new Date(d + "T00:00:00");
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return dayKey(x);
}

/** Generic planner: setup when there's no plan, otherwise the live schedule. */
export function PlanView() {
  const hydrated = useHydrated();
  const plan = useLearner((s) => s.plan);
  const [editing, setEditing] = useState(false);
  const { live, loading } = usePlan();

  if (!hydrated) return <div className="card h-64 animate-pulse" />;
  if (!plan || editing) return <PlanSetup initial={editing ? plan : null} onDone={editing ? () => setEditing(false) : undefined} />;
  if (loading) return <div className="card h-64 animate-pulse" />;
  if (!live)
    return (
      <div className="card p-6">
        <p className="font-bold">We couldn’t load this plan’s content.</p>
        <button className="btn-primary mt-4" onClick={() => setEditing(true)}>
          Choose again
        </button>
      </div>
    );
  return <PlanSchedule live={live} onReplan={() => setEditing(true)} />;
}

function PlanSchedule({ live, onReplan }: { live: LivePlan; onReplan: () => void }) {
  const { plan, source, result } = live;
  const setPlan = useLearner((s) => s.setPlan);
  const today = dayKey();
  const [showAll, setShowAll] = useState(false);
  const pct = result.totalItems ? result.doneItems / result.totalItems : 0;
  const replanned = plan.createdAt < today;

  const doneIds = useMemo(() => new Set(source.items.filter((i) => i.done).map((i) => i.id)), [source.items]);
  const manualIds = useMemo(() => new Set(source.items.filter((i) => plan.scope.type === "syllabus" && !i.href.startsWith("/course/")).map((i) => i.id)), [source.items, plan.scope.type]);

  const weekStart = startOfWeek(today);
  const weekEnd = (() => {
    const d = new Date(weekStart + "T00:00:00");
    d.setDate(d.getDate() + 6);
    return dayKey(d);
  })();
  const week = result.days.filter((d) => d.date >= weekStart && d.date <= weekEnd);
  const later = result.days.filter((d) => d.date > weekEnd);
  const shown = showAll ? later : later.slice(0, 14);

  const downloadIcs = () => {
    const ics = planToIcs(result, source.title, window.location.origin);
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "study-plan.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <section className="card p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow">Study plan</p>
            <h1 className="mt-1 text-2xl font-black">{source.title}</h1>
            <p className="mt-1 text-sm font-semibold text-muted">
              Finish by {fmt(plan.targetDate, { day: "numeric", month: "long", year: "numeric" })} · {plan.hoursPerWeek} h/week
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="btn-ghost !px-3 !py-2 text-sm" onClick={onReplan}>
              <RefreshCw className="h-4 w-4" /> Re-plan
            </button>
            <button className="btn-ghost !px-3 !py-2 text-sm" onClick={downloadIcs}>
              <CalendarPlus className="h-4 w-4" /> Add to calendar (.ics)
            </button>
            <button className="btn-ghost !px-3 !py-2 text-sm" onClick={() => setPlan(null)} aria-label="Delete plan">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-sm font-bold">
            <span>
              {result.doneItems} of {result.totalItems} done
            </span>
            <span className="text-muted">{Math.round(pct * 100)}%</span>
          </div>
          <ProgressBar value={pct} height={12} color="rgb(var(--good))" label="Plan progress" />
        </div>

        <div className={clsx("mt-5 flex items-start gap-3 rounded-2xl p-4", result.onTrack ? "bg-good-soft" : "bg-bad-soft")}>
          {result.onTrack ? <Check className="mt-0.5 h-5 w-5 shrink-0 text-good" strokeWidth={3} /> : <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-bad" strokeWidth={2.5} />}
          <div className="text-sm font-semibold">
            {result.onTrack ? (
              <p>
                <b>On track.</b> {result.finishDate ? `New material wraps up ${fmt(result.finishDate)}, leaving time for revision and mock tests.` : "Everything is covered — the rest is revision and mock tests."}
              </p>
            ) : (
              <p>
                <b>Behind schedule.</b> At {plan.hoursPerWeek} h/week you’d finish {result.finishDate ? fmt(result.finishDate) : "late"}. Add about <b>{result.extraHoursNeeded} h/week</b> or move the date.
              </p>
            )}
            {replanned && <p className="mt-1 text-muted">Plan updated for your progress.</p>}
          </div>
        </div>
      </section>

      <section className="card p-5 sm:p-6">
        <h2 className="text-lg font-black">This week</h2>
        <div className="mt-4 space-y-3">
          {week.length ? week.map((d) => <DayRow key={d.date} day={d} today={today} doneIds={doneIds} manualIds={manualIds} />) : <p className="text-sm font-semibold text-muted">No study days left this week.</p>}
        </div>
      </section>

      {later.length > 0 && (
        <section className="card p-5 sm:p-6">
          <h2 className="text-lg font-black">Full calendar</h2>
          <div className="mt-4 space-y-3">
            {shown.map((d) => (
              <DayRow key={d.date} day={d} today={today} doneIds={doneIds} manualIds={manualIds} />
            ))}
          </div>
          {later.length > shown.length && (
            <button className="btn-flat mt-4 w-full" onClick={() => setShowAll(true)}>
              Show all {later.length} days
            </button>
          )}
        </section>
      )}
    </div>
  );
}

const KIND_ICON = { learn: BookOpen, revise: RotateCcw, mock: ClipboardCheck } as const;

function DayRow({ day, today, doneIds, manualIds }: { day: PlanDay; today: string; doneIds: Set<string>; manualIds: Set<string> }) {
  const isToday = day.date === today;
  return (
    <div className={clsx("rounded-2xl border-2 p-3 sm:p-4", isToday ? "border-accent bg-accent-soft/40" : "border-line")}>
      <div className="mb-2 flex items-center justify-between">
        <span className={clsx("text-sm font-extrabold", isToday && "text-accent")}>{isToday ? `Today · ${fmt(day.date)}` : fmt(day.date)}</span>
        <span className="text-xs font-bold text-muted">{day.minutes} min</span>
      </div>
      <ul className="space-y-1.5">
        {day.tasks.map((t, i) => (
          <TaskRow key={`${t.id}-${i}`} task={t} done={doneIds.has(t.id)} manual={t.kind !== "learn" || manualIds.has(t.id)} />
        ))}
      </ul>
    </div>
  );
}

export function TaskRow({ task, done, manual }: { task: PlanTask; done?: boolean; manual: boolean }) {
  const planDone = useLearner((s) => s.planDone);
  const toggle = useLearner((s) => s.togglePlanTask);
  const ticked = done || Boolean(planDone[task.id]);
  const Icon = KIND_ICON[task.kind];
  return (
    <li className="flex items-center gap-3">
      {manual ? (
        <button
          onClick={() => toggle(task.id)}
          aria-pressed={ticked}
          aria-label={ticked ? `Mark “${task.title}” not done` : `Mark “${task.title}” done`}
          className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 transition", ticked ? "border-good bg-good text-white" : "border-line hover:border-good")}
        >
          {ticked && <Check className="h-4 w-4" strokeWidth={3.5} />}
        </button>
      ) : (
        <span className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-md", ticked ? "bg-good text-white" : "bg-surface-2 text-muted")} title="Completes when you finish the lesson">
          {ticked ? <Check className="h-4 w-4" strokeWidth={3.5} /> : <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />}
        </span>
      )}
      <Link href={task.href} className={clsx("min-w-0 flex-1 truncate text-sm font-bold hover:text-accent", ticked && "text-muted line-through")}>
        {task.title}
      </Link>
      {task.group && <span className="hidden shrink-0 text-xs font-semibold text-muted sm:inline">{task.group}</span>}
      <span className="shrink-0 text-xs font-bold text-muted">{task.minutes}m</span>
    </li>
  );
}
