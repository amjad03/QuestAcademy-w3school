"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { Atom, BookOpen, CalendarClock, CalendarDays, ClipboardList, FlaskConical, Printer, Sigma, Target, TriangleAlert } from "lucide-react";
import { useT } from "@/i18n";
import { useSharedText } from "@/i18n/content";
import { useLearner } from "@/lib/store";
import { BOARDS, type Board } from "@/lib/modes";
import type { MasteryLevel } from "@/lib/mastery";
import { dayKey } from "@/lib/gamification";
import { nextExamDate } from "@/lib/exam";
import { usePlan } from "@/components/plan/usePlan";
import { TaskRow } from "@/components/plan/PlanView";
import { SIMULATIONS } from "@/components/modes/focus/sims";
import { SYLLABI, chapterProgress, drillHref, getGrade, lessonHref, resolveBoardGrade, type ChapterProgress, type SyllabusChapter, type SyllabusGrade } from "@/content/syllabus";
import { MasteryBar, MasteryLegend, MasterySquare, SectionHeader, useExamCountdown, useFmt, useMasteryName } from "../ui";
import { Greeting, HomeFrame, LanguageNudge, MyCourses, QuickLinks, SeeItCard, UpNextHero, WeeklyActivity } from "./common";

const SENIOR = new Set(["11", "12", "PUC-1", "PUC-2"]);
const daysUntil = (d: Date) => Math.max(0, Math.ceil((d.getTime() - Date.now()) / 86_400_000));

/** Focus (15–18): the board syllabus is the home screen — mapped chapter by chapter to lessons, drills and formulas. */
export function FocusHome() {
  const t = useT();
  const f = useFmt();
  const profile = useLearner((s) => s.profile);
  const lessons = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const planDone = useLearner((s) => s.planDone);
  const { board, grade: gradeId } = resolveBoardGrade(profile.board, profile.grade, profile.stage);
  const grade = getGrade(board, gradeId)!;
  const exam = useExamCountdown();
  const tx = useSharedText();

  const progress = useMemo(() => {
    const st = { lessons, mastery, planDone };
    return new Map(grade.subjects.flatMap((s) => s.chapters.map((c) => [c.id, chapterProgress(c, st)] as const)));
  }, [grade, lessons, mastery, planDone]);

  // The syllabus decides what's next: first unfinished chapter that has lessons.
  const next = useMemo(() => {
    for (const s of grade.subjects)
      for (const [i, c] of s.chapters.entries()) {
        const p = progress.get(c.id)!;
        if (p.status === "learn" && !p.done && p.nextLesson) return { subject: s.name, n: i + 1, chapter: c, lessonId: p.nextLesson };
      }
    return null;
  }, [grade, progress]);

  return (
    <HomeFrame
      top={
        <Greeting
          sub={t("khan.focus.sub", "Your {board} {grade} syllabus, chapter by chapter — with lessons, drills and formula sheets mapped to each one.", { board: tx(SYLLABI[board].name), grade: tx(grade.name) })}
          aside={
            exam && (
              <Link href="/plan" className="card flex items-center gap-3 px-4 py-3 hover:border-accent">
                <CalendarClock className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block text-xl font-bold tabular-nums leading-tight">{t("khan.daysShort", "{n} days", { n: f.n(exam.days) })}</span>
                  <span className="block text-xs text-muted">
                    {t("khan.focus.until", "until {exam}", { exam: tx(exam.name) })}
                    {exam.approx ? ` · ${t("khan.approx", "approx.")}` : ""}
                  </span>
                </span>
              </Link>
            )
          }
        />
      }
      rail={
        <>
          <TodayPlan />
          <WeeklyActivity />
          <LanguageNudge />
          <QuickLinks
            title={t("khan.focus.tools", "Exam tools")}
            links={[
              { href: "/exam/formulas", label: t("khan.focus.formulas", "Formula vault"), icon: Sigma },
              { href: "/exam/mock", label: t("khan.focus.mocks", "Mock tests"), icon: ClipboardList, hint: t("khan.focus.mocksHint", "Real CBT format with negative marking") },
              { href: "/practice", label: t("khan.focus.practice", "Practice & review"), icon: FlaskConical },
              { href: "/worksheets", label: t("khan.focus.worksheets", "Printable worksheets"), icon: Printer },
            ]}
          />
        </>
      }
    >
      {next ? (
        <UpNextHero
          lessonId={next.lessonId}
          eyebrow={t("khan.focus.nextInSyllabus", "Up next in your syllabus")}
          context={t("khan.focus.chapterCtx", "{subject} · Chapter {n}: {title}", { subject: tx(next.subject), n: f.n(next.n), title: tx(next.chapter.title) })}
          secondary={drillHref(next.chapter) ? { href: drillHref(next.chapter)!, label: t("khan.focus.drill", "Chapter drill") } : undefined}
        />
      ) : (
        <UpNextHero />
      )}
      <SyllabusDashboard board={board} grade={grade} progress={progress} />
      <WeakChapters grade={grade} progress={progress} />
      <EntranceExams grade={grade} />
      <MyCourses />
      <SeeItCard minAge={14} />
      <Simulations />
    </HomeFrame>
  );
}

/* ------------------------------------------------------------------ */

function SyllabusDashboard({ board, grade, progress }: { board: Board; grade: SyllabusGrade; progress: Map<string, ChapterProgress> }) {
  const t = useT();
  const f = useFmt();
  const setProfile = useLearner((s) => s.setProfile);
  const [tab, setTab] = useState<string | null>(null);
  const tx = useSharedText();
  const subject = grade.subjects.find((s) => s.id === tab) ?? grade.subjects[0];
  const chapters = grade.subjects.flatMap((s) => s.chapters);
  const done = chapters.filter((c) => progress.get(c.id)?.done).length;
  const levelsOf = (list: SyllabusChapter[]) => list.map((c) => progress.get(c.id)!.level as MasteryLevel);
  const subjectDone = subject.chapters.filter((c) => progress.get(c.id)?.done).length;

  const pickBoard = (b: Board) => {
    const g = SYLLABI[b].grades.find((x) => x.id === grade.id) ?? SYLLABI[b].grades[b === "cbse" || b === "icse" ? 1 : 0];
    setProfile({ board: b, grade: g.id });
    setTab(null);
  };

  return (
    <section aria-labelledby="kh-syllabus" className="card overflow-hidden">
      <div className="border-b border-line p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow">{t("khan.focus.syllabusEyebrow", "Syllabus · mapped to lessons")}</p>
            <h2 id="kh-syllabus" className="kh-h2 mt-1 !text-[1.375rem]">
              {t("khan.focus.syllabusTitle", "{board} · {grade}", { board: tx(SYLLABI[board].name), grade: tx(grade.name) })}
            </h2>
            <p className="mt-1 text-sm text-muted">{tx(SYLLABI[board].note)}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted">
              {t("khan.focus.board", "Board")}
              <select className="input !w-auto !py-1.5 text-sm" value={board} onChange={(e) => pickBoard(e.target.value as Board)}>
                {BOARDS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {tx(b.name)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-muted">
              {t("khan.focus.class", "Class")}
              <select className="input !w-auto !py-1.5 text-sm" value={grade.id} onChange={(e) => (setProfile({ board, grade: e.target.value }), setTab(null))}>
                {SYLLABI[board].grades.map((g) => (
                  <option key={g.id} value={g.id}>
                    {tx(g.name)}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
            <span className="font-semibold">{t("khan.focus.chaptersDone", "{done} of {total} chapters done", { done: f.n(done), total: f.n(chapters.length) })}</span>
            <span className="text-muted">{t("khan.focus.withLessons", "{n} chapters have full lessons", { n: f.n(chapters.filter((c) => c.lessonIds.length).length) })}</span>
          </div>
          <MasteryBar levels={levelsOf(chapters)} height={12} className="mt-2" />
          <MasteryLegend className="mt-3" />
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto border-b border-line px-5 sm:px-6" role="tablist" aria-label={t("khan.focus.subjects", "Subjects")}>
        {grade.subjects.map((s) => {
          const sDone = s.chapters.filter((c) => progress.get(c.id)?.done).length;
          return (
            <button key={s.id} type="button" role="tab" aria-selected={s.id === subject.id} aria-controls="kh-chapters" onClick={() => setTab(s.id)} className="kh-tab">
              {tx(s.name)}
              <span className="text-xs font-normal text-muted tabular-nums">
                {f.n(sDone)}/{f.n(s.chapters.length)}
              </span>
            </button>
          );
        })}
      </div>

      <div id="kh-chapters" role="tabpanel" aria-label={tx(subject.name)}>
        <p className="sr-only">{t("khan.focus.subjectDone", "{done} of {total} chapters done", { done: subjectDone, total: subject.chapters.length })}</p>
        <ol className="divide-y divide-line">
          {subject.chapters.map((c, i) => (
            <ChapterRow key={c.id} n={i + 1} chapter={c} p={progress.get(c.id)!} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ChapterRow({ n, chapter: c, p }: { n: number; chapter: SyllabusChapter; p: ChapterProgress }) {
  const t = useT();
  const f = useFmt();
  const name = useMasteryName();
  const drill = drillHref(c);
  const tx = useSharedText();
  return (
    <li className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span className="w-6 shrink-0 pt-0.5 text-right text-sm font-semibold tabular-nums text-muted">{f.n(n)}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {p.nextLesson || c.lessonIds[0] ? (
              <Link href={lessonHref(p.nextLesson ?? c.lessonIds[0])} className="font-semibold leading-snug hover:text-accent hover:underline hover:underline-offset-2">
                {tx(c.title)}
              </Link>
            ) : (
              <span className="font-semibold leading-snug">{tx(c.title)}</span>
            )}
            {c.weightage ? (
              <span className="chip !py-0 text-[0.6875rem]" title={t("khan.focus.weightageHint", "Approximate share of marks")}>
                {t("khan.focus.weightage", "~{n}% marks", { n: f.n(c.weightage) })}
              </span>
            ) : null}
            {p.status === "practice" && <span className="chip !py-0 text-[0.6875rem]">{t("khan.focus.practiceOnly", "Practice only")}</span>}
            {p.status === "soon" && <span className="chip !py-0 text-[0.6875rem]">{t("khan.focus.soon", "Lessons coming soon")}</span>}
          </div>
          {p.status === "learn" ? (
            <div className="mt-1.5 flex items-center gap-2 text-xs text-muted">
              <MasterySquare level={p.level} size={12} />
              <span>{p.done ? t("khan.focus.done", "Done") : name(p.level)}</span>
              <span aria-hidden>·</span>
              <span>{t("khan.focus.lessonsPct", "{pct} of lessons", { pct: f.pct(p.completed) })}</span>
            </div>
          ) : (
            p.done && <p className="mt-1 text-xs font-semibold text-good-shade">{t("khan.focus.marked", "Marked done")}</p>
          )}
        </div>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2 pl-9 sm:pl-0">
        {c.lessonIds.length > 0 && (
          <Link href={lessonHref(p.nextLesson ?? c.lessonIds[0])} className={clsx(p.completed > 0 && !p.done ? "btn-primary" : "btn-ghost", "!min-h-[2.125rem] !px-3 !py-1 !text-sm")}>
            <BookOpen className="h-4 w-4" aria-hidden /> {p.completed > 0 && !p.done ? t("khan.continue", "Continue") : t("khan.focus.learn", "Learn")}
          </Link>
        )}
        {drill && (
          <Link href={drill} className="btn-ghost !min-h-[2.125rem] !px-3 !py-1 !text-sm">
            <Target className="h-4 w-4" aria-hidden /> {t("khan.focus.drillShort", "Drill")}
          </Link>
        )}
        {c.formulaChapter && (
          <Link href="/exam/formulas" className="btn-ghost !min-h-[2.125rem] !px-3 !py-1 !text-sm" title={c.formulaChapter}>
            <Sigma className="h-4 w-4" aria-hidden /> {t("khan.focus.formulasShort", "Formulas")}
          </Link>
        )}
      </div>
    </li>
  );
}

function WeakChapters({ grade, progress }: { grade: SyllabusGrade; progress: Map<string, ChapterProgress> }) {
  const t = useT();
  const f = useFmt();
  const name = useMasteryName();
  const tx = useSharedText();
  const weak = grade.subjects
    .flatMap((s) => s.chapters.map((c) => ({ c, s, p: progress.get(c.id)! })))
    .filter(({ p }) => p.status === "learn" && !p.done && (p.completed > 0 || p.level > 0) && p.mastery < 0.8)
    .sort((a, b) => (b.c.weightage ?? 1) * (1 - b.p.mastery) - (a.c.weightage ?? 1) * (1 - a.p.mastery))
    .slice(0, 4);
  return (
    <section aria-labelledby="kh-weak">
      <SectionHeader
        id="kh-weak"
        title={
          <span className="flex items-center gap-2">
            <TriangleAlert className="h-5 w-5 text-warn-shade" aria-hidden /> {t("khan.focus.weak", "Chapters to strengthen")}
          </span>
        }
        sub={t("khan.focus.weakSub", "Ranked by how many marks they carry and how far you are from mastering them.")}
      />
      {weak.length ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {weak.map(({ c, s, p }) => (
            <Link key={c.id} href={drillHref(c) ?? lessonHref(p.nextLesson ?? c.lessonIds[0])} className="tile flex items-center gap-3 p-4">
              <MasterySquare level={p.level} size={16} />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold">{tx(c.title)}</span>
                <span className="block text-xs text-muted">
                  {tx(s.name)} · {name(p.level)}
                </span>
              </span>
              <span className="shrink-0 text-sm font-bold tabular-nums text-warn-shade">{f.pct(p.mastery)}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="card p-5 text-sm text-muted">{t("khan.focus.weakEmpty", "Start a few chapters — the ones that need more work will show up here.")}</p>
      )}
    </section>
  );
}

function EntranceExams({ grade }: { grade: SyllabusGrade }) {
  const t = useT();
  const f = useFmt();
  if (!SENIOR.has(grade.id)) return null;
  return (
    <section className="card flex flex-wrap items-center gap-x-8 gap-y-3 p-5" aria-label={t("khan.focus.entrance", "Entrance exams")}>
      <div className="min-w-0 flex-1">
        <h2 className="font-bold">{t("khan.focus.entrance", "Entrance exams")}</h2>
        <p className="text-sm text-muted">{grade.id.startsWith("PUC") ? t("khan.focus.kcet", "Your PUC syllabus also covers KCET, NEET and JEE Main.") : t("khan.focus.entranceSub", "Your class syllabus feeds straight into NEET and JEE Main.")}</p>
      </div>
      <dl className="flex gap-8">
        <div>
          <dt className="text-xs text-muted">NEET</dt>
          <dd className="text-lg font-bold tabular-nums">{t("khan.daysShort", "{n} days", { n: f.n(daysUntil(nextExamDate("NEET"))) })}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">JEE Main</dt>
          <dd className="text-lg font-bold tabular-nums">{t("khan.daysShort", "{n} days", { n: f.n(daysUntil(nextExamDate("JEE"))) })}</dd>
        </div>
      </dl>
      <Link href="/exam" className="btn-ghost">
        {t("khan.focus.examPrep", "Exam prep")}
      </Link>
    </section>
  );
}

function TodayPlan() {
  const t = useT();
  const plan = useLearner((s) => s.plan);
  const { live } = usePlan();
  const today = live?.result.days.find((d) => d.date === dayKey());
  return (
    <section className="card p-5" aria-labelledby="kh-today">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="kh-today" className="flex items-center gap-2 font-bold">
          <CalendarDays className="h-4 w-4 text-accent" aria-hidden /> {t("khan.focus.today", "Today's revision plan")}
        </h2>
        {plan && (
          <Link href="/plan" className="kh-link text-sm">
            {t("khan.open", "Open")}
          </Link>
        )}
      </div>
      {!plan ? (
        <>
          <p className="mt-2 text-sm text-muted">{t("khan.focus.planPitch", "Set your exam date and weekly hours — we'll schedule chapters, revision days and mock tests, and re-plan when you fall behind.")}</p>
          <Link href="/plan" className="btn-primary mt-4 w-full">
            {t("khan.focus.makePlan", "Create a revision plan")}
          </Link>
        </>
      ) : !live ? (
        <div className="mt-3 h-12 animate-pulse rounded bg-surface-2" />
      ) : today ? (
        <ul className="mt-3 space-y-2">
          {today.tasks.slice(0, 5).map((task, i) => (
            <TaskRow key={`${task.id}-${i}`} task={task} manual={task.kind !== "learn"} />
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-muted">{live.result.onTrack ? t("khan.focus.restOk", "Rest day. You're on track.") : t("khan.focus.restBehind", "Rest day — catch up if you can, you're a little behind.")}</p>
      )}
    </section>
  );
}

function Simulations() {
  const t = useT();
  return (
    <section aria-labelledby="kh-sims">
      <SectionHeader
        id="kh-sims"
        title={
          <span className="flex items-center gap-2">
            <Atom className="h-5 w-5 text-accent" aria-hidden /> {t("khan.focus.sims", "Simulations")}
          </span>
        }
        sub={t("khan.focus.simsSub", "Interactive labs inside lessons — change a value and watch what happens.")}
      />
      <ul className="flex flex-wrap gap-2">
        {SIMULATIONS.map((s) => (
          <li key={s.lessonId}>
            <Link href={lessonHref(s.lessonId)} className="chip !px-3 !py-1.5 !text-[0.8125rem] hover:!border-accent hover:!text-accent">
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
