"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BellRing, BookOpen, CalendarRange, Check, Sparkles, Target, X } from "lucide-react";
import clsx from "clsx";
import { useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { useMyClass } from "@/lib/useMyClass";
import { lessonHref } from "@/content/syllabus";
import { chapterSessionHrefs, useSubjectName } from "@/components/class/data";
import { useSharedText } from "@/i18n/content";
import { buildStudyPlan, buildTodayPlan, currentWeek, itemDone, reminderDue, type TodayItem } from "@/lib/personalise";

/** Today's plan and the study plan for the signed-in learner's class, rebuilt whenever the profile changes. */
export function usePersonalPlan() {
  const mc = useMyClass();
  const personal = useLearner((s) => s.profile.personal ?? null);
  const lessons = useLearner((s) => s.lessons);
  const planDone = useLearner((s) => s.planDone);
  const today = dayKey();
  const completedBefore = useMemo(() => new Set(Object.entries(lessons).filter(([, v]) => dayKey(new Date(v.completedAt)) < today).map(([k]) => k)), [lessons, today]);
  const subjects = useMemo(() => mc?.subjects ?? [], [mc]);
  const todayItems = useMemo(() => buildTodayPlan({ subjects, personal, completedBefore, date: today }), [subjects, personal, completedBefore, today]);
  const plan = useMemo(() => buildStudyPlan({ subjects, personal, lessonsDone: Object.fromEntries([...completedBefore].map((k) => [k, true])), today }), [subjects, personal, completedBefore, today]);
  const done = todayItems.filter((i) => itemDone(i, lessons, planDone)).length;
  return { mc, personal, todayItems, plan, done, allDone: todayItems.length > 0 && done === todayItems.length, today };
}

export function itemHref(item: TodayItem, subjects: NonNullable<ReturnType<typeof useMyClass>>["subjects"]) {
  if (item.lessonId) return lessonHref(item.lessonId);
  const ch = subjects.find((s) => s.id === item.subjectId)?.chapters.find((c) => c.slug === item.chapterSlug);
  return ch ? chapterSessionHrefs(ch).practice : "/practice";
}

export function TodayPlanCard() {
  const t = useT();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const { mc, todayItems, done } = usePersonalPlan();
  const lessons = useLearner((s) => s.lessons);
  const planDone = useLearner((s) => s.planDone);
  const toggle = useLearner((s) => s.togglePlanTask);
  if (!mc || !todayItems.length) return null;
  const minutes = todayItems.reduce((n, i) => n + i.minutes, 0);
  const name = (id: string) => {
    const s = mc.subjects.find((x) => x.id === id);
    return s ? subjectName(s) : id;
  };
  return (
    <section aria-labelledby="today-plan" className="card overflow-hidden">
      <div className="flex flex-wrap items-baseline justify-between gap-2 p-5 pb-3">
        <h2 id="today-plan" className="kh-h2">
          {t("personal.today.title", "Today’s plan")}
        </h2>
        <span className="text-sm font-semibold text-muted">{t("personal.today.meta", "{done} of {total} done · about {min} min", { done, total: todayItems.length, min: minutes })}</span>
      </div>
      <ol className="divide-y divide-line">
        {todayItems.map((i) => {
          const ok = itemDone(i, lessons, planDone);
          const Icon = i.kind === "lesson" ? BookOpen : Target;
          return (
            <li key={i.id} className="flex items-center gap-3 px-5 py-3">
              <button type="button" onClick={() => toggle(i.id)} aria-pressed={ok} aria-label={t("personal.today.mark", "Mark done")} className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-full border-2", ok ? "border-accent bg-accent text-white" : "border-line")}>
                {ok && <Check className="h-4 w-4" strokeWidth={3} />}
              </button>
              <Link href={itemHref(i, mc.subjects)} className={clsx("flex min-w-0 flex-1 items-center gap-3 hover:text-accent", ok && "text-muted line-through")}>
                <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span className="min-w-0">
                  <span className="block truncate font-semibold">{i.kind === "lesson" ? t("personal.today.lesson", "Learn: {chapter}", { chapter: tx(i.chapterTitle) }) : t("personal.today.practice", "Practise: {chapter}", { chapter: tx(i.chapterTitle) })}</span>
                  <span className="block text-xs text-muted">
                    {name(i.subjectId)} · {t("personal.habits.min", "{n} min", { n: i.minutes })}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function WeekPlanCard() {
  const t = useT();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const { mc, plan, today, personal } = usePersonalPlan();
  const [all, setAll] = useState(false);
  if (!mc || !plan.weeks.length) return null;
  const now = currentWeek(plan, today);
  const from = now?.index ?? 0;
  const shown = all ? plan.weeks.slice(from) : plan.weeks.slice(from, from + 3);
  const name = (id: string) => {
    const s = mc.subjects.find((x) => x.id === id);
    return s ? subjectName(s) : id;
  };
  const kindLabel = { learn: t("personal.week.learn", "Learn"), revise: t("personal.week.revise", "Revision"), mock: t("personal.week.mock", "Mock tests") };
  return (
    <section aria-labelledby="week-plan" className="card min-w-0 overflow-hidden p-5">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="week-plan" className="kh-h2 inline-flex items-center gap-2">
          <CalendarRange className="h-5 w-5 text-accent" aria-hidden /> {t("personal.week.title", "Week plan")}
        </h2>
        <span className="text-sm text-muted">
          {plan.basis === "exam" && personal?.examDate
            ? t("personal.week.toExam", "{n} weeks to your exam", { n: plan.weeks.length })
            : t("personal.week.term", "{n}-week term plan", { n: plan.weeks.length })}
        </span>
      </div>
      <ol className="space-y-3">
        {shown.map((w) => (
          <li key={w.index} className={clsx("min-w-0 rounded-xl border-2 p-3", w === now ? "border-accent bg-accent-soft/40" : "border-line")}>
            <div className="flex min-w-0 items-baseline justify-between gap-2 text-sm font-bold">
              <span className="min-w-0 truncate">
                {t("personal.week.n", "Week {n}", { n: w.index + 1 })} · {kindLabel[w.kind]}
              </span>
              <span className="shrink-0 text-xs font-semibold text-muted">{new Date(`${w.start}T00:00:00`).toLocaleDateString(undefined, { day: "numeric", month: "short" })}</span>
            </div>
            {w.kind === "mock" ? (
              <p className="mt-1 text-sm text-muted">{t("personal.week.mockHint", "Full-length mock tests, then review your mistakes.")}</p>
            ) : (
              <ul className="mt-1 min-w-0 space-y-0.5 text-sm">
                {w.chapters.map((c) => (
                  <li key={`${c.subjectId}/${c.slug}`} className="truncate">
                    <span className="text-muted">{name(c.subjectId)}:</span> {tx(c.title)}
                  </li>
                ))}
                {!w.chapters.length && <li className="text-muted">{t("personal.week.free", "Catch up and practise")}</li>}
              </ul>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        {plan.overflow > 0 ? <span className="text-muted">{t("personal.week.overflow", "{n} chapters don’t fit yet. Add study minutes in Settings.", { n: plan.overflow })}</span> : <span />}
        {plan.weeks.length - from > 3 && (
          <button type="button" className="kh-link" onClick={() => setAll(!all)}>
            {all ? t("personal.week.less", "Show less") : t("personal.week.all", "Show all weeks")}
          </button>
        )}
      </div>
    </section>
  );
}

/** Older profiles (and anyone who skipped) get a gentle invitation instead of a forced flow. */
export function CompleteProfileBanner() {
  const t = useT();
  const done = useLearner((s) => Boolean(s.profile.personal?.completedAt));
  if (done) return null;
  return (
    <Link href="/onboarding?complete=1" className="card flex items-center gap-4 border-accent p-4 transition hover:bg-accent-soft">
      <Sparkles className="h-6 w-6 shrink-0 text-accent" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block font-bold">{t("personal.complete.title", "Complete your profile")}</span>
        <span className="block text-sm text-muted">{t("personal.complete.sub", "Tell us your goal, study time and hard topics, and we’ll build your daily plan.")}</span>
      </span>
    </Link>
  );
}

/** In-app nudge once the reminder time has passed and today's plan is not done. */
export function PlanReminder() {
  const t = useT();
  const { personal, todayItems, done, allDone, today } = usePersonalPlan();
  const [now, setNow] = useState(() => new Date());
  const [hidden, setHidden] = useState<string | null>(null);
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);
  if (!todayItems.length || hidden === today || !reminderDue(personal?.reminderTime, now, allDone)) return null;
  return (
    <div role="status" className="card flex items-center gap-3 border-accent bg-accent-soft p-4">
      <BellRing className="h-5 w-5 shrink-0 text-accent" aria-hidden />
      <p className="min-w-0 flex-1 text-sm font-semibold">{t("personal.reminder.text", "Time to study! {left} of today’s {total} tasks are still waiting.", { left: todayItems.length - done, total: todayItems.length })}</p>
      <button type="button" onClick={() => setHidden(today)} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-surface-2" aria-label={t("personal.reminder.dismiss", "Dismiss")}>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
