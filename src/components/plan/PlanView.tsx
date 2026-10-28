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
import { useT } from "@/i18n";
import { PlanSetup } from "./PlanSetup";
import { useTxt } from "@/components/exam/labels";
import { usePlan, type LivePlan } from "./usePlan";
import { TodayPlanCard, WeekPlanCard, usePersonalPlan } from "@/components/personal/PersonalPlan";

const fmt = (d: string, opts: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric", month: "short" }) => new Date(d + "T00:00:00").toLocaleDateString(undefined, opts);

function startOfWeek(d: string) {
  const x = new Date(d + "T00:00:00");
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return dayKey(x);
}

/** Generic planner: setup when there's no plan, otherwise the live schedule. */
export function PlanView() {
  const t = useT();
  const hydrated = useHydrated();
  const plan = useLearner((s) => s.plan);
  const [editing, setEditing] = useState(false);
  const { live, loading } = usePlan();
  const personal = usePersonalPlan();

  if (!hydrated) return <div className="card h-64 animate-pulse" />;
  if (!plan && !editing && personal.mc && personal.plan.weeks.length)
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-[1.75rem] font-bold leading-tight">{t("plan.view.yourPlan", "Your study plan")}</h1>
          <p className="mt-1 text-muted">{t("plan.view.yourPlanSub", "Built from your class, subjects and daily study time. It updates as you finish lessons.")}</p>
        </header>
        <TodayPlanCard />
        <WeekPlanCard />
        <section aria-labelledby="plan-custom" className="card flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:gap-4">
          <CalendarPlus className="h-6 w-6 shrink-0 text-accent" aria-hidden />
          <div className="min-w-0 flex-1">
            <h2 id="plan-custom" className="font-bold">
              {t("plan.view.customTitle", "Need a day-by-day calendar?")}
            </h2>
            <p className="text-sm text-muted">{t("plan.view.customHint", "Pick a finish date and study days, and we’ll schedule every lesson. You can add it to your phone’s calendar.")}</p>
          </div>
          <button type="button" className="btn-ghost w-full sm:w-auto" onClick={() => setEditing(true)}>
            {t("plan.view.customCta", "Make a calendar")}
          </button>
        </section>
      </div>
    );
  if (!plan || editing) return <PlanSetup initial={editing ? plan : null} onDone={editing ? () => setEditing(false) : undefined} />;
  if (loading) return <div className="card h-64 animate-pulse" />;
  if (!live)
    return (
      <div className="card p-6">
        <p className="font-bold">{t("plan.view.loadError", "We couldn’t load this plan’s content.")}</p>
        <button className="btn-primary mt-4" onClick={() => setEditing(true)}>
          {t("plan.view.chooseAgain", "Choose again")}
        </button>
      </div>
    );
  return <PlanSchedule live={live} onReplan={() => setEditing(true)} />;
}

function PlanSchedule({ live, onReplan }: { live: LivePlan; onReplan: () => void }) {
  const t = useT();
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
            <p className="eyebrow">{t("plan.view.eyebrow", "Study plan")}</p>
            <h1 className="mt-1 text-2xl font-black">{source.title}</h1>
            <p className="mt-1 text-sm font-semibold text-muted">
              {t("plan.view.summary", "Finish by {date} · {hours} h/week", { date: fmt(plan.targetDate, { day: "numeric", month: "long", year: "numeric" }), hours: plan.hoursPerWeek })}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="btn-ghost !px-3 !py-2 text-sm" onClick={onReplan}>
              <RefreshCw className="h-4 w-4" /> {t("plan.view.replan", "Re-plan")}
            </button>
            <button className="btn-ghost !px-3 !py-2 text-sm" onClick={downloadIcs}>
              <CalendarPlus className="h-4 w-4" /> {t("plan.view.addCalendar", "Add to calendar (.ics)")}
            </button>
            <button className="btn-ghost !px-3 !py-2 text-sm" onClick={() => setPlan(null)} aria-label={t("plan.view.delete", "Delete plan")}>
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-sm font-bold">
            <span>
              {t("plan.view.progress", "{done} of {total} done", { done: result.doneItems, total: result.totalItems })}
            </span>
            <span className="text-muted">{Math.round(pct * 100)}%</span>
          </div>
          <ProgressBar value={pct} height={12} color="rgb(var(--good))" label={t("plan.view.progressLabel", "Plan progress")} />
        </div>

        <div className={clsx("mt-5 flex items-start gap-3 rounded-2xl p-4", result.onTrack ? "bg-good-soft" : "bg-bad-soft")}>
          {result.onTrack ? <Check className="mt-0.5 h-5 w-5 shrink-0 text-good" strokeWidth={3} /> : <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-bad" strokeWidth={2.5} />}
          <div className="text-sm font-semibold">
            {result.onTrack ? (
              <p>
                <b>{t("plan.view.onTrack", "On track.")}</b>{" "}
                {result.finishDate
                  ? t("plan.view.onTrackFinish", "New material wraps up {date}, leaving time for revision and mock tests.", { date: fmt(result.finishDate) })
                  : t("plan.view.onTrackDone", "Everything is covered — the rest is revision and mock tests.")}
              </p>
            ) : (
              <p>
                <b>{t("plan.view.behind", "Behind schedule.")}</b>{" "}
                {t("plan.view.behindFinish", "At {hours} h/week you’d finish {date}.", { hours: plan.hoursPerWeek, date: result.finishDate ? fmt(result.finishDate) : t("plan.view.late", "late") })}{" "}
                {t("plan.view.behindAdd", "Add about")} <b>{t("plan.view.behindHours", "{n} h/week", { n: result.extraHoursNeeded })}</b> {t("plan.view.behindMove", "or move the date.")}
              </p>
            )}
            {replanned && <p className="mt-1 text-muted">{t("plan.view.updated", "Plan updated for your progress.")}</p>}
          </div>
        </div>
      </section>

      <section className="card p-5 sm:p-6">
        <h2 className="text-lg font-black">{t("plan.view.thisWeek", "This week")}</h2>
        <div className="mt-4 space-y-3">
          {week.length ? week.map((d) => <DayRow key={d.date} day={d} today={today} doneIds={doneIds} manualIds={manualIds} />) : <p className="text-sm font-semibold text-muted">{t("plan.view.noDays", "No study days left this week.")}</p>}
        </div>
      </section>

      {later.length > 0 && (
        <section className="card p-5 sm:p-6">
          <h2 className="text-lg font-black">{t("plan.view.fullCalendar", "Full calendar")}</h2>
          <div className="mt-4 space-y-3">
            {shown.map((d) => (
              <DayRow key={d.date} day={d} today={today} doneIds={doneIds} manualIds={manualIds} />
            ))}
          </div>
          {later.length > shown.length && (
            <button className="btn-flat mt-4 w-full" onClick={() => setShowAll(true)}>
              {t("plan.view.showAll", "Show all {n} days", { n: later.length })}
            </button>
          )}
        </section>
      )}
    </div>
  );
}

const KIND_ICON = { learn: BookOpen, revise: RotateCcw, mock: ClipboardCheck } as const;

function DayRow({ day, today, doneIds, manualIds }: { day: PlanDay; today: string; doneIds: Set<string>; manualIds: Set<string> }) {
  const t = useT();
  const isToday = day.date === today;
  return (
    <div className={clsx("rounded-2xl border-2 p-3 sm:p-4", isToday ? "border-accent bg-accent-soft/40" : "border-line")}>
      <div className="mb-2 flex items-center justify-between">
        <span className={clsx("text-sm font-extrabold", isToday && "text-accent")}>{isToday ? t("plan.view.today", "Today · {date}", { date: fmt(day.date) }) : fmt(day.date)}</span>
        <span className="text-xs font-bold text-muted">{t("plan.view.minutes", "{n} min", { n: day.minutes })}</span>
      </div>
      <ul className="space-y-1.5">
        {day.tasks.map((task, i) => (
          <TaskRow key={`${task.id}-${i}`} task={task} done={doneIds.has(task.id)} manual={task.kind !== "learn" || manualIds.has(task.id)} />
        ))}
      </ul>
    </div>
  );
}

export function TaskRow({ task, done, manual }: { task: PlanTask; done?: boolean; manual: boolean }) {
  const t = useT();
  const tx = useTxt();
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
          aria-label={ticked ? t("plan.task.markNotDone", "Mark “{title}” not done", { title: task.label ? tx(task.label) : task.title }) : t("plan.task.markDone", "Mark “{title}” done", { title: task.label ? tx(task.label) : task.title })}
          className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 transition", ticked ? "border-good bg-good text-white" : "border-line hover:border-good")}
        >
          {ticked && <Check className="h-4 w-4" strokeWidth={3.5} />}
        </button>
      ) : (
        <span className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-md", ticked ? "bg-good text-white" : "bg-surface-2 text-muted")} title={t("plan.task.autoHint", "Completes when you finish the lesson")}>
          {ticked ? <Check className="h-4 w-4" strokeWidth={3.5} /> : <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />}
        </span>
      )}
      <Link href={task.href} className={clsx("min-w-0 flex-1 truncate text-sm font-bold hover:text-accent", ticked && "text-muted line-through")} data-kind={task.kind}>
        {task.label ? tx(task.label) : task.title}
      </Link>
      {task.group && <span className="hidden shrink-0 text-xs font-semibold text-muted sm:inline">{task.group}</span>}
      <span className="shrink-0 text-xs font-bold text-muted">{t("plan.task.minutes", "{n}m", { n: task.minutes })}</span>
    </li>
  );
}
