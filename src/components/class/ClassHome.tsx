"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import clsx from "clsx";
import { ArrowRight, BookOpen, CalendarClock, Check, ClipboardList, Clock, Compass, Eye, Flame, FlaskConical, MessageCircleQuestion, NotebookPen, PartyPopper, Settings2, Sigma, Target, TrendingUp, Zap } from "lucide-react";
import { useT } from "@/i18n";
import { useContentDict, useSharedText } from "@/i18n/content";
import { liveStreak, useLearner } from "@/lib/store";
import { useMode } from "@/lib/useMode";
import type { MasteryLevel } from "@/lib/mastery";
import { tutorEligible, tutorHref } from "@/lib/tutor/live";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { LeagueCard, QuestsCard } from "@/components/shell/RailCards";
import { useMyClass, chapterHref, subjectHref } from "@/lib/useMyClass";
import type { ClassChapter, ClassSubject } from "@/content/my-class";
import { HomeFrame, LanguageNudge, QuickLinks, SeeItCard, WeeklyActivity } from "@/experiences/khan/home/common";
import { MasteryBar, useExamCountdown, useFmt, useGreeting } from "@/experiences/khan/ui";
import { chapterSessionHrefs, useClassProgress, useLessonOutlines, useSubjectName } from "./data";
import { orderChapters, orderSubjects, itemDone, type TodayItem } from "@/lib/personalise";
import { CompleteProfileBanner, PlanReminder, WeekPlanCard, itemHref, usePersonalPlan } from "@/components/personal/PersonalPlan";

/** "My class" home for school learners: a daily routine dashboard built around today's plan. */
export function ClassHome() {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  const mode = useMode();
  const mc = useMyClass()!;
  const { myClass } = mc;
  const personal = useLearner((s) => s.profile.personal ?? null);
  // Weak / low-level subjects and chapters first, so "continue" and the subject list follow the learner's needs.
  const subjects = useMemo(() => orderSubjects(mc.subjects, personal).map((s) => ({ ...s, chapters: orderChapters(s.id, s.chapters, personal) })), [mc.subjects, personal]);
  const progress = useClassProgress(subjects);
  const lastLesson = useLearner((s) => s.lastLesson);
  const lessons = useLearner((s) => s.lessons);
  const subjectName = useSubjectName();
  const todayHasItems = usePersonalPlan().todayItems.length > 0;

  // Continue the last lesson if it belongs to the class and isn't finished; else the first unfinished chapter.
  const next = useMemo(() => {
    const find = (pred: (lessonId: string) => boolean) => {
      for (const s of subjects)
        for (const ch of s.chapters) {
          const p = progress.get(`${s.id}/${ch.slug}`)!;
          if (p.done) continue;
          const id = ch.lessonIds.find(pred);
          if (id) return { subject: s, chapter: ch, lessonId: p.nextLesson && ch.lessonIds.includes(p.nextLesson) && pred(p.nextLesson) ? p.nextLesson : id };
        }
      return null;
    };
    if (lastLesson) {
      const hit = find((id) => id === lastLesson);
      if (hit) return { ...hit, lessonId: lessons[lastLesson] ? (progress.get(`${hit.subject.id}/${hit.chapter.slug}`)!.nextLesson ?? lastLesson) : lastLesson };
    }
    return find((id) => !lessons[id]);
  }, [subjects, progress, lastLesson, lessons]);

  const title = myClass.boardName ? t("class.title", "{class} · {board}", { class: tx(myClass.name), board: tx(myClass.boardName) }) : myClass.grade === "pre" ? t("class.pre", "Pre-primary") : t("class.gradeN", "Class {n}", { n: f.n(Number(myClass.grade)) });
  const playful = mode.id === "adventure";

  return (
    <HomeFrame
      top={<DailyHeader sub={title} />}
      rail={
        <>
          <WeekPlanCard />
          <WeeklyActivity energy={playful} />
          <LanguageNudge />
          {playful && <QuestsCard limit={3} />}
          {playful && <LeagueCard />}
          <QuickLinks
            title={t("class.tools", "Study tools")}
            links={[
              { href: "/practice", label: t("class.nav.practice", "Practice & tests"), icon: FlaskConical },
              { href: "/plan", label: t("nav.plan", "Study plan"), icon: ClipboardList },
              ...(mode.id === "focus" ? [{ href: "/exam/formulas", label: t("khan.focus.formulas", "Formula vault"), icon: Sigma }] : []),
              { href: "/notebook", label: t("nav.notebook", "Notebook"), icon: NotebookPen },
              { href: "/explain", label: t("class.nav.explainers", "Explainers"), icon: Eye },
            ]}
          />
        </>
      }
    >
      <div className="space-y-4 empty:hidden">
        <PlanReminder />
        <CompleteProfileBanner />
      </div>

      <TodayHero fallback={next} />

      <div className="grid gap-4 md:grid-cols-2">
        {next && (lastLesson || !todayHasItems || !tutorEligible(myClass.grade)) ? <ContinueCard subject={next.subject} chapter={next.chapter} lessonId={next.lessonId} /> : next ? <PracticeCard /> : <AllCaughtUp />}
        {tutorEligible(myClass.grade) ? <TutorCard subject={next?.subject} chapter={next?.chapter} /> : <PracticeCard />}
      </div>

      <WeakTopics subjects={subjects} />

      <section aria-labelledby="class-subjects">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="class-subjects" className="kh-h2">
            {t("class.mySubjects", "My subjects")}
          </h2>
          <Link href="/settings#my-class" className="kh-link inline-flex items-center gap-1.5 text-sm">
            <Settings2 className="h-4 w-4" aria-hidden /> {t("class.changeSubjects", "Change class or subjects")}
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {subjects.map((s) => {
            const ps = s.chapters.map((ch) => progress.get(`${s.id}/${ch.slug}`)!);
            const done = ps.filter((p) => p.done).length;
            const pct = ps.length ? Math.round((ps.reduce((n, p) => n + p.completed, 0) / ps.length) * 100) : 0;
            return (
              <li key={s.id} className="min-w-0">
                <Link href={subjectHref(s)} className="card group flex h-full min-w-0 items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lift" data-subject={s.id}>
                  <CourseIcon slug={s.icon} size={48} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="truncate font-bold leading-snug">{subjectName(s)}</span>
                      <span className="shrink-0 text-sm font-bold tabular-nums text-accent">{f.pct(pct / 100)}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">
                      {t("class.chaptersDone", "{done} of {total} chapters done", { done: f.n(done), total: f.n(s.chapters.length) })}
                      {s.parts.length > 1 && ` · ${t("class.partsN", "{n} parts", { n: f.n(s.parts.length) })}`}
                    </span>
                    <MasteryBar levels={ps.map((p) => p.level as MasteryLevel)} height={6} className="mt-2" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <SeeItCard minAge={mode.id === "focus" ? 14 : 11} />

      <p className="text-sm text-muted">
        <Link href="/library" className="kh-link inline-flex items-center gap-1.5">
          <Compass className="h-4 w-4" aria-hidden /> {t("class.exploreOther", "Explore other classes & courses")}
        </Link>
      </p>
    </HomeFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Header: greeting, streak, XP, exam countdown                         */
/* ------------------------------------------------------------------ */

function DailyHeader({ sub }: { sub: string }) {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  const greeting = useGreeting();
  const streak = useLearner((s) => liveStreak(s));
  const xp = useLearner((s) => s.xp);
  const examDate = useLearner((s) => s.profile.personal?.examDate ?? null);
  const target = useLearner((s) => s.profile.personal?.targetExam ?? null);
  const board = useExamCountdown();
  const [today, setToday] = useState("");
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setToday(f.date(new Date(), { weekday: "long", day: "numeric", month: "long" }));
    setNow(Date.now());
  }, [f]);
  // The learner's own exam date wins over the board's approximate one.
  const own = examDate && now ? Math.ceil((new Date(`${examDate}T00:00:00`).getTime() - now) / 86_400_000) : null;
  const exam = own != null && own >= 0 ? { days: own, name: target && target !== "BOARD" ? target.replace("_ADV", " Advanced") : t("class.yourExam", "your exam"), approx: false } : board ? { days: board.days, name: tx(board.name), approx: board.approx } : null;

  return (
    <header className="mb-8 flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <p className="text-sm text-muted" suppressHydrationWarning>
          {today || " "}
        </p>
        <h1 className="mt-1 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]">{greeting}</h1>
        <p className="mt-1.5 text-[0.9375rem] text-muted">{sub}</p>
      </div>
      <dl className="grid min-w-0 grid-cols-3 gap-2 sm:gap-3 lg:w-[440px]">
        <Stat icon={<Flame className="h-5 w-5 text-streak" aria-hidden />} value={f.n(streak)} label={t("khan.streak", "Day streak")} />
        <Stat icon={<Zap className="h-5 w-5 text-warn" aria-hidden />} value={f.n(xp)} label={t("class.xp", "Total XP")} />
        {exam ? (
          <Link href="/plan" className="min-w-0 rounded-xl border border-line bg-surface px-3 py-2.5 transition hover:border-accent">
            <dt className="flex items-center gap-1.5">
              <CalendarClock className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span className="truncate text-lg font-bold tabular-nums leading-tight">{f.n(exam.days)}</span>
            </dt>
            <dd className="mt-0.5 truncate text-xs text-muted">
              {t("class.daysTo", "days to {exam}", { exam: exam.name })}
              {exam.approx ? ` · ${t("khan.approx", "approx.")}` : ""}
            </dd>
          </Link>
        ) : (
          <Stat icon={<CalendarClock className="h-5 w-5 text-accent" aria-hidden />} value="—" label={t("class.noExam", "Set exam date")} href="/onboarding?complete=1" />
        )}
      </dl>
    </header>
  );
}

function Stat({ icon, value, label, href }: { icon: ReactNode; value: string; label: string; href?: string }) {
  const body = (
    <>
      <dt className="flex items-center gap-1.5">
        {icon}
        <span className="truncate text-lg font-bold tabular-nums leading-tight">{value}</span>
      </dt>
      <dd className="mt-0.5 truncate text-xs text-muted">{label}</dd>
    </>
  );
  const cls = "min-w-0 rounded-xl border border-line bg-surface px-3 py-2.5";
  return href ? (
    <Link href={href} className={clsx(cls, "transition hover:border-accent")}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/* ------------------------------------------------------------------ */
/* Today's plan hero                                                    */
/* ------------------------------------------------------------------ */

function Ring({ value, size = 92, children }: { value: number; size?: number; children?: ReactNode }) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeOpacity={0.22} strokeWidth={8} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={8} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(1, Math.max(0, value)))} className="transition-[stroke-dashoffset] duration-700" />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  );
}

type NextLesson = { subject: ClassSubject; chapter: ClassChapter; lessonId: string } | null;

function TodayHero({ fallback }: { fallback: NextLesson }) {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const { mc, todayItems, done, allDone } = usePersonalPlan();
  const lessons = useLearner((s) => s.lessons);
  const planDone = useLearner((s) => s.planDone);
  const toggle = useLearner((s) => s.togglePlanTask);
  const lessonIds = useMemo(() => todayItems.map((i) => i.lessonId).filter((x): x is string => Boolean(x)), [todayItems]);
  const { lessons: outlines } = useLessonOutlines(lessonIds);
  const outlineById = new Map(outlines.map((l) => [l.id, l]));

  if (!mc) return null;
  if (!todayItems.length) return fallback ? <ContinueCard hero subject={fallback.subject} chapter={fallback.chapter} lessonId={fallback.lessonId} /> : null;

  const total = todayItems.length;
  const isDone = (i: TodayItem) => itemDone(i, lessons, planDone);
  const nextItem = todayItems.find((i) => !isDone(i)) ?? null;
  const minutesLeft = todayItems.filter((i) => !isDone(i)).reduce((n, i) => n + i.minutes, 0);
  const subj = (id: string) => {
    const s = mc.subjects.find((x) => x.id === id);
    return s ? subjectName(s) : id;
  };
  const label = (i: TodayItem) => (i.kind === "lesson" ? t("personal.today.lesson", "Learn: {chapter}", { chapter: tx(i.chapterTitle) }) : t("personal.today.practice", "Practise: {chapter}", { chapter: tx(i.chapterTitle) }));

  return (
    <section aria-labelledby="today-plan" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-shade text-white shadow-lift">
      <svg className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] opacity-[0.12]" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="96" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="100" r="68" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2" />
      </svg>
      <div className="relative grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="min-w-0">
          <p className="kh-keep-case text-xs font-bold uppercase tracking-[0.1em] text-white/75" id="today-plan">
            {t("personal.today.title", "Today’s plan")}
          </p>
          {nextItem ? (
            <>
              <p className="mt-3 truncate text-sm text-white/80">
                {t("class.upNextCtx", "Up next · {subject} · {chapter}", { subject: subj(nextItem.subjectId), chapter: tx(nextItem.chapterTitle) })}
              </p>
              <h2 className="mt-1 text-[1.5rem] font-bold leading-snug sm:text-[1.75rem]">
                <ItemTitle lesson={nextItem.lessonId ? outlineById.get(nextItem.lessonId) : undefined} fallback={label(nextItem)} />
              </h2>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  {nextItem.kind === "lesson" ? <BookOpen className="h-4 w-4" aria-hidden /> : <Target className="h-4 w-4" aria-hidden />}
                  {nextItem.kind === "lesson" ? t("class.kindLesson", "Lesson") : t("class.kindPractice", "Practice set")}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden /> {t("khan.minShort", "{n} min", { n: f.n(nextItem.minutes) })}
                </span>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={itemHref(nextItem, mc.subjects)} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-bold text-accent-shade shadow-soft transition hover:bg-white/90">
                  {done === 0 ? t("class.startToday", "Start today’s plan") : t("class.keepGoing", "Keep going")} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="mt-3 flex items-center gap-2 text-[1.5rem] font-bold leading-snug sm:text-[1.75rem]">
                <PartyPopper className="h-7 w-7 shrink-0" aria-hidden /> {t("class.allDone", "Today’s plan is done!")}
              </h2>
              <p className="mt-2 text-sm text-white/85">{t("class.allDoneSub", "Great work. Keep the streak alive with a quick practice set, or come back tomorrow.")}</p>
              <Link href="/practice" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-bold text-accent-shade shadow-soft transition hover:bg-white/90">
                {t("class.practiseMore", "Practise more")} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-4 md:flex-col md:items-center md:text-center">
          <Ring value={done / total}>
            <span>
              <span className="block text-xl font-bold tabular-nums leading-none">
                {f.n(done)}/{f.n(total)}
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide text-white/75">{t("class.tasks", "tasks")}</span>
            </span>
          </Ring>
          <p className="text-sm text-white/85">{allDone ? t("class.doneToday", "All done today") : t("class.minLeft", "About {n} min left", { n: f.n(minutesLeft) })}</p>
        </div>
      </div>
      <ol className="relative grid gap-px border-t border-white/15 bg-white/10 sm:grid-cols-2">
        {todayItems.map((i) => {
          const ok = isDone(i);
          return (
            <li key={i.id} className="flex min-w-0 items-center gap-3 bg-accent-shade/40 px-5 py-3 sm:[&:last-child:nth-child(odd)]:col-span-2">
              <button type="button" onClick={() => toggle(i.id)} aria-pressed={ok} aria-label={t("personal.today.mark", "Mark done")} className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition", ok ? "border-white bg-white text-accent-shade" : "border-white/60 hover:border-white")}>
                {ok && <Check className="h-4 w-4" strokeWidth={3} />}
              </button>
              <Link href={itemHref(i, mc.subjects)} className={clsx("min-w-0 flex-1 hover:underline", ok && "text-white/60 line-through")}>
                <span className="block truncate text-sm font-semibold">
                  <ItemTitle lesson={i.lessonId ? outlineById.get(i.lessonId) : undefined} fallback={label(i)} />
                </span>
                <span className="block truncate text-xs text-white/70">
                  {subj(i.subjectId)} · {t("personal.habits.min", "{n} min", { n: i.minutes })}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function ItemTitle({ lesson, fallback }: { lesson?: { course: string; title: string }; fallback: string }) {
  const dict = useContentDict(lesson?.course ?? "");
  return <>{lesson ? (dict?.[lesson.title] ?? lesson.title) : fallback}</>;
}

/* ------------------------------------------------------------------ */
/* Continue, tutor, weak topics                                         */
/* ------------------------------------------------------------------ */

function ContinueCard({ subject, chapter, lessonId, hero }: { subject: ClassSubject; chapter: ClassChapter; lessonId: string; hero?: boolean }) {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const done = useLearner((s) => s.lessons);
  const ids = useMemo(() => [lessonId], [lessonId]);
  const { lessons } = useLessonOutlines(ids);
  const lesson = lessons[0];
  const dict = useContentDict(lesson?.course ?? "");
  const chTitle = chapter.unit ? chapter.title : tx(chapter.title);
  const doneN = chapter.lessonIds.filter((id) => done[id]).length;
  const started = doneN > 0;
  const pct = chapter.lessonIds.length ? doneN / chapter.lessonIds.length : 0;
  return (
    <section aria-labelledby="continue" className={clsx("card flex min-w-0 flex-col p-5", hero && "sm:p-7")}>
      <div className="flex items-center gap-3">
        <CourseIcon slug={subject.icon} size={40} />
        <div className="min-w-0">
          <p className="eyebrow">{started ? t("class.continue", "Continue learning") : t("class.startHere", "Start here")}</p>
          <p className="truncate text-xs text-muted">{t("class.chapterCtx", "{subject} · Chapter {n}: {title}", { subject: subjectName(subject), n: f.n(chapter.n), title: chTitle })}</p>
        </div>
      </div>
      <h2 id="continue" className={clsx("mt-3 font-bold leading-snug", hero ? "text-[1.5rem]" : "text-lg")}>
        {lesson ? (dict?.[lesson.title] ?? lesson.title) : chTitle}
      </h2>
      {lesson && (
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden /> {t("khan.minShort", "{n} min", { n: f.n(lesson.minutes) })}
        </p>
      )}
      <div className="mt-4">
        <div className="flex items-baseline justify-between text-xs text-muted">
          <span>{t("class.chapterProgress", "Chapter progress")}</span>
          <span className="tabular-nums">{t("class.lessonsDone", "{done} of {total} lessons done", { done: f.n(doneN), total: f.n(chapter.lessonIds.length) })}</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
          <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${Math.round(pct * 100)}%` }} />
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Link href={lesson?.href ?? chapterHref(subject, chapter)} className="btn-primary">
          {started ? t("khan.continueLesson", "Continue lesson") : t("khan.startLesson", "Start lesson")} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href={chapterHref(subject, chapter)} className="btn-ghost">
          {t("class.openChapter", "Open chapter")}
        </Link>
      </div>
    </section>
  );
}

function AllCaughtUp() {
  const t = useT();
  return (
    <section className="card flex min-w-0 flex-col justify-center p-5">
      <p className="eyebrow">{t("class.continue", "Continue learning")}</p>
      <h2 className="mt-2 text-lg font-bold">{t("class.caughtUp", "You’ve finished every lesson in your class")}</h2>
      <p className="mt-1 text-sm text-muted">{t("class.caughtUpSub", "Revise with chapter tests and mock papers to lock it in.")}</p>
      <Link href="/practice" className="btn-primary mt-4 self-start">
        {t("class.nav.practice", "Practice & tests")}
      </Link>
    </section>
  );
}

function TutorCard({ subject, chapter }: { subject?: ClassSubject; chapter?: ClassChapter }) {
  const t = useT();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const topic = subject && chapter ? `${subjectName(subject)}: ${chapter.unit ? chapter.title : tx(chapter.title)}` : null;
  return (
    <section aria-labelledby="ask-tutor" className="card relative flex min-w-0 flex-col overflow-hidden p-5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-soft" aria-hidden />
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-accent text-white shadow-soft">
        <MessageCircleQuestion className="h-6 w-6" aria-hidden />
      </span>
      <h2 id="ask-tutor" className="relative mt-3 text-lg font-bold leading-snug">
        {t("class.askTutor", "Ask the AI tutor")}
      </h2>
      <p className="relative mt-1 text-sm text-muted">
        {topic ? t("class.askTutorSub", "Stuck on {topic}? Get a step-by-step explanation on a live whiteboard, in your language.", { topic }) : t("class.askTutorAny", "Get any doubt explained step by step on a live whiteboard, in your language.")}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Link href={topic ? tutorHref(topic) : "/tutor"} className="btn-primary">
          {t("class.askNow", "Ask a doubt")} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function PracticeCard() {
  const t = useT();
  return (
    <section className="card flex min-w-0 flex-col p-5">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-white">
        <FlaskConical className="h-6 w-6" aria-hidden />
      </span>
      <h2 className="mt-3 text-lg font-bold">{t("class.nav.practice", "Practice & tests")}</h2>
      <p className="mt-1 text-sm text-muted">{t("class.practiseHint", "Questions from every lesson, with explanations")}</p>
      <Link href="/practice" className="btn-primary mt-auto self-start">
        {t("class.practiseNow", "Practise now")} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </section>
  );
}

/** Chapters to strengthen: the learner's own hard topics first, then started chapters with low mastery. */
function WeakTopics({ subjects }: { subjects: ClassSubject[] }) {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const personal = useLearner((s) => s.profile.personal ?? null);
  const progress = useClassProgress(subjects);
  const list = useMemo(() => {
    const out: { subject: ClassSubject; chapter: ClassChapter; why: "marked" | "low" }[] = [];
    const seen = new Set<string>();
    const push = (subject: ClassSubject, chapter: ClassChapter, why: "marked" | "low") => {
      const k = `${subject.id}/${chapter.slug}`;
      if (seen.has(k) || progress.get(k)?.done) return;
      seen.add(k);
      out.push({ subject, chapter, why });
    };
    for (const s of subjects) for (const slug of personal?.weakChapters?.[s.id] ?? []) {
      const ch = s.chapters.find((c) => c.slug === slug);
      if (ch) push(s, ch, "marked");
    }
    for (const s of subjects)
      for (const ch of s.chapters) {
        const p = progress.get(`${s.id}/${ch.slug}`)!;
        if (p.completed > 0 && !p.done && p.level <= 1) push(s, ch, "low");
      }
    return out.slice(0, 4);
  }, [subjects, personal, progress]);
  if (!list.length) return null;
  return (
    <section aria-labelledby="weak-topics">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="weak-topics" className="kh-h2 inline-flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" aria-hidden /> {t("class.focusTopics", "Focus topics")}
        </h2>
        <span className="text-sm text-muted">{t("class.focusTopicsSub", "Ten minutes a day on these makes the biggest difference")}</span>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map(({ subject, chapter, why }) => {
          const p = progress.get(`${subject.id}/${chapter.slug}`)!;
          return (
            <li key={`${subject.id}/${chapter.slug}`} className="card flex min-w-0 items-center gap-3 p-4">
              <span className={clsx("grid h-10 w-10 shrink-0 place-items-center rounded-xl", why === "marked" ? "bg-warn/15 text-warn-shade" : "bg-accent-soft text-accent")}>
                <Target className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <Link href={chapterHref(subject, chapter)} className="block truncate font-semibold hover:text-accent">
                  {chapter.unit ? chapter.title : tx(chapter.title)}
                </Link>
                <span className="block truncate text-xs text-muted">
                  {subjectName(subject)} · {why === "marked" ? t("class.youMarked", "You marked this as hard") : t("class.lessonsPct", "{pct} of lessons", { pct: f.pct(p.completed) })}
                </span>
              </span>
              <Link href={chapterSessionHrefs(chapter).practice} className="shrink-0 rounded-lg border-2 border-line px-3 py-1.5 text-sm font-bold text-accent transition hover:border-accent">
                {t("class.practiseShort", "Practise")}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
