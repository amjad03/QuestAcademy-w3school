"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { Atom, BookOpen, CalendarClock, CalendarDays, ClipboardList, FlaskConical, Sigma, Target, TriangleAlert } from "lucide-react";
import { useLearner } from "@/lib/store";
import { BOARDS, type Board } from "@/lib/modes";
import { MASTERY } from "@/lib/mastery";
import { dayKey } from "@/lib/gamification";
import { nextExamDate } from "@/lib/exam";
import { PageColumns } from "@/components/shell/AppShell";
import { QuestsCard, RailCard, RailFooter } from "@/components/shell/RailCards";
import { ProgressBar } from "@/components/ui/Progress";
import { usePlan } from "@/components/plan/usePlan";
import { TaskRow } from "@/components/plan/PlanView";
import { SYLLABI, chapterProgress, drillHref, examDateFor, getGrade, lessonHref, resolveBoardGrade, type SyllabusChapter, type SyllabusGrade } from "@/content/syllabus";
import { SIMULATIONS } from "./sims";
import { useSharedText } from "@/i18n/content";

const daysUntil = (d: Date) => Math.max(0, Math.ceil((d.getTime() - Date.now()) / 86_400_000));
const SENIOR = new Set(["11", "12", "PUC-1", "PUC-2"]);

/** Focus mode home: board syllabus dashboard for high school & PUC. */
export function FocusHome() {
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);
  const lessons = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const planDone = useLearner((s) => s.planDone);
  const { board, grade: gradeId } = resolveBoardGrade(profile.board, profile.grade, profile.stage);
  const grade = getGrade(board, gradeId)!;
  const [tab, setTab] = useState<string | null>(null);
  const tx = useSharedText();
  const subject = grade.subjects.find((s) => s.id === tab) ?? grade.subjects[0];

  const progress = useMemo(() => {
    const state = { lessons, mastery, planDone };
    return new Map(grade.subjects.flatMap((s) => s.chapters.map((c) => [c.id, chapterProgress(c, state)] as const)));
  }, [grade, lessons, mastery, planDone]);

  const pickBoard = (b: Board) => {
    const g = SYLLABI[b].grades.find((x) => x.id === gradeId) ?? SYLLABI[b].grades[b === "cbse" || b === "icse" ? 1 : 0];
    setProfile({ board: b, grade: g.id });
    setTab(null);
  };

  const subjectDone = subject.chapters.filter((c) => progress.get(c.id)?.done).length;

  return (
    <PageColumns rail={<FocusRail grade={grade} board={board} />}>
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{tx(SYLLABI[board].name)}</p>
          <h1 className="mt-1 text-2xl font-black">{tx(grade.name)} syllabus</h1>
          <p className="mt-1 text-sm font-semibold text-muted">{tx(SYLLABI[board].note)}</p>
        </div>
        <div className="flex gap-2">
          <select className="input !w-auto !py-2 text-sm" value={board} onChange={(e) => pickBoard(e.target.value as Board)} aria-label="Board">
            {BOARDS.map((b) => (
              <option key={b.id} value={b.id}>
                {tx(b.name)}
              </option>
            ))}
          </select>
          <select className="input !w-auto !py-2 text-sm" value={grade.id} onChange={(e) => (setProfile({ board, grade: e.target.value }), setTab(null))} aria-label="Class">
            {SYLLABI[board].grades.map((g) => (
              <option key={g.id} value={g.id}>
                {tx(g.name)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <ExamCountdown grade={grade} />
        <TodayCard />
      </div>

      {/* subject tabs */}
      <div className="mt-6 flex gap-1 overflow-x-auto border-b-2 border-line" role="tablist">
        {grade.subjects.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === subject.id}
            onClick={() => setTab(s.id)}
            className={clsx("-mb-[2px] shrink-0 border-b-2 px-4 py-2.5 text-sm font-extrabold transition", s.id === subject.id ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink")}
          >
            {tx(s.name)}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm font-bold text-muted">
        <span>{subject.chapters.length} chapters</span>
        <span>
          {subjectDone} done · {subject.chapters.filter((c) => c.lessonIds.length).length} with lessons
        </span>
      </div>

      <ol className="card mt-3 divide-y-2 divide-line overflow-hidden">
        {subject.chapters.map((c, i) => (
          <ChapterRow key={c.id} n={i + 1} chapter={c} p={progress.get(c.id)!} />
        ))}
      </ol>

      <WeakChapters grade={grade} progress={progress} />
      <Simulations subjectId={subject.id} />
    </PageColumns>
  );
}

function ChapterRow({ n, chapter: c, p }: { n: number; chapter: SyllabusChapter; p: ReturnType<typeof chapterProgress> }) {
  const drill = drillHref(c);
  const m = MASTERY[p.level];
  const tx = useSharedText();
  return (
    <li className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span className="mt-0.5 w-6 shrink-0 text-right text-sm font-black text-muted">{n}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-extrabold">{tx(c.title)}</span>
            {c.weightage ? <span className="chip !py-0.5 text-xs">~{c.weightage}%</span> : null}
            {p.status === "practice" && <span className="chip !py-0.5 text-xs">Practice only</span>}
            {p.status === "soon" && <span className="chip !py-0.5 text-xs text-muted">Coming soon</span>}
          </div>
          {p.status === "learn" ? (
            <div className="mt-2 flex items-center gap-3">
              <ProgressBar value={p.completed} height={8} className="max-w-[220px]" color={m.color} label={`${tx(c.title)} progress`} />
              <span className="flex shrink-0 items-center gap-1.5 text-xs font-bold text-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: m.color }} />
                {p.done ? "Done" : m.name}
              </span>
            </div>
          ) : (
            p.done && <p className="mt-1 text-xs font-bold text-good">Marked done</p>
          )}
        </div>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2 pl-9 sm:pl-0">
        {c.lessonIds.length > 0 && (
          <Link href={lessonHref(p.nextLesson ?? c.lessonIds[0])} className="btn-primary !px-3 !py-1.5 text-sm">
            <BookOpen className="h-4 w-4" /> {p.completed > 0 && !p.done ? "Continue" : "Learn"}
          </Link>
        )}
        {drill && (
          <Link href={drill} className="btn-ghost !px-3 !py-1.5 text-sm">
            <Target className="h-4 w-4" /> Drill
          </Link>
        )}
        {c.formulaChapter && (
          <Link href="/exam/formulas" className="btn-ghost !px-3 !py-1.5 text-sm" title={`Formula sheet: ${c.formulaChapter}`}>
            <Sigma className="h-4 w-4" /> Formulas
          </Link>
        )}
      </div>
    </li>
  );
}

function ExamCountdown({ grade }: { grade: SyllabusGrade }) {
  const date = examDateFor(grade);
  const entrance = SENIOR.has(grade.id);
  return (
    <section className="card p-5">
      <div className="flex items-center gap-2 text-muted">
        <CalendarClock className="h-4 w-4" strokeWidth={2.5} />
        <span className="eyebrow">Exam countdown</span>
      </div>
      {date && grade.exam ? (
        <>
          <p className="mt-2 text-3xl font-black">
            {daysUntil(date)} <span className="text-base font-extrabold text-muted">days</span>
          </p>
          <p className="text-sm font-bold">
            {grade.exam.name} · {date.toLocaleDateString(undefined, { month: "short", year: "numeric" })}
            {"examId" in grade.exam ? "" : " (approx.)"}
          </p>
        </>
      ) : (
        <p className="mt-2 text-sm font-semibold text-muted">No exam date for this class.</p>
      )}
      {entrance && (
        <p className="mt-3 border-t-2 border-line pt-3 text-xs font-bold text-muted">
          NEET in {daysUntil(nextExamDate("NEET"))} days · JEE Main in {daysUntil(nextExamDate("JEE"))} days
          {grade.id.startsWith("PUC") ? " · KCET uses this syllabus" : ""}
        </p>
      )}
    </section>
  );
}

function TodayCard() {
  const plan = useLearner((s) => s.plan);
  const { live } = usePlan();
  const today = live?.result.days.find((d) => d.date === dayKey());
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted">
          <CalendarDays className="h-4 w-4" strokeWidth={2.5} />
          <span className="eyebrow">Today’s plan</span>
        </div>
        {plan && (
          <Link href="/plan" className="text-xs font-extrabold uppercase tracking-wide text-accent">
            Open plan
          </Link>
        )}
      </div>
      {!plan ? (
        <>
          <p className="mt-2 text-sm font-semibold text-muted">Set your exam date and weekly hours — we’ll schedule chapters, revision days and mock tests.</p>
          <Link href="/plan" className="btn-primary mt-3 !py-2 text-sm">
            Create a revision plan
          </Link>
        </>
      ) : !live ? (
        <div className="mt-3 h-12 animate-pulse rounded-xl bg-surface-2" />
      ) : today ? (
        <ul className="mt-3 space-y-1.5">
          {today.tasks.slice(0, 4).map((t, i) => (
            <TaskRow key={`${t.id}-${i}`} task={t} manual={t.kind !== "learn"} />
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm font-semibold text-muted">Rest day. {live.result.onTrack ? "You’re on track." : "Catch up if you can — you’re a little behind."}</p>
      )}
    </section>
  );
}

function WeakChapters({ grade, progress }: { grade: SyllabusGrade; progress: Map<string, ReturnType<typeof chapterProgress>> }) {
  const tx = useSharedText();
  const weak = grade.subjects
    .flatMap((s) => s.chapters.map((c) => ({ c, s, p: progress.get(c.id)! })))
    .filter(({ p }) => p.status === "learn" && !p.done && (p.completed > 0 || p.level > 0) && p.mastery < 0.8)
    .sort((a, b) => (b.c.weightage ?? 1) * (1 - b.p.mastery) - (a.c.weightage ?? 1) * (1 - a.p.mastery))
    .slice(0, 4);
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center gap-2">
        <TriangleAlert className="h-4 w-4 text-warn-shade" strokeWidth={2.5} />
        <h2 className="text-lg font-black">Weak chapters</h2>
      </div>
      {weak.length ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {weak.map(({ c, s, p }) => (
            <Link key={c.id} href={drillHref(c) ?? lessonHref(p.nextLesson ?? c.lessonIds[0])} className="tile flex items-center gap-3 p-4">
              <div className="min-w-0 flex-1">
                <p className="truncate font-extrabold">{tx(c.title)}</p>
                <p className="text-xs font-bold text-muted">
                  {tx(s.name)} · {MASTERY[p.level].name}
                </p>
              </div>
              <span className="text-sm font-black text-warn-shade">{Math.round(p.mastery * 100)}%</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm font-semibold text-muted">Start a few chapters — the ones you find hardest will show up here.</p>
      )}
    </section>
  );
}

function Simulations({ subjectId }: { subjectId: string }) {
  const list = SIMULATIONS.filter((s) => (subjectId === "science" ? s.subject !== "maths" : s.subject === subjectId));
  const links = [
    { href: "/exam/formulas", label: "Formula vault", icon: Sigma },
    { href: "/exam/mock", label: "Mock tests", icon: ClipboardList },
    { href: "/practice", label: "Practice & review", icon: FlaskConical },
  ];
  return (
    <section className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]">
      <div className="card p-5">
        <div className="mb-3 flex items-center gap-2">
          <Atom className="h-4 w-4 text-accent" strokeWidth={2.5} />
          <h2 className="text-lg font-black">Simulations</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {list.map((s) => (
            <Link key={s.lessonId} href={lessonHref(s.lessonId)} className="chip hover:bg-surface-2">
              {s.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid gap-2 sm:w-[200px]">
        {links.map(({ href, label, icon: I }) => (
          <Link key={href} href={href} className="tile flex items-center gap-3 px-4 py-3 text-sm font-extrabold">
            <I className="h-4 w-4 text-accent" strokeWidth={2.5} /> {label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function FocusRail({ grade, board }: { grade: SyllabusGrade; board: Board }) {
  const lessons = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const planDone = useLearner((s) => s.planDone);
  const { live } = usePlan();
  const tx = useSharedText();
  const chapters = grade.subjects.flatMap((s) => s.chapters);
  const done = chapters.filter((c) => chapterProgress(c, { lessons, mastery, planDone }).done).length;
  return (
    <>
      <RailCard title="Syllabus" action={{ href: "/plan", label: live ? "Plan" : "Make plan" }}>
        <p className="text-sm font-bold">
          {done} of {chapters.length} chapters done
        </p>
        <ProgressBar value={chapters.length ? done / chapters.length : 0} height={10} className="mt-2" color="rgb(var(--good))" label="Syllabus progress" />
        {live && (
          <p className={clsx("mt-3 text-sm font-semibold", live.result.onTrack ? "text-good" : "text-bad")}>
            {live.result.onTrack ? "Plan on track" : `Behind · +${live.result.extraHoursNeeded} h/week needed`}
          </p>
        )}
        <p className="mt-2 text-xs font-semibold text-muted">{tx(SYLLABI[board].name)} · {tx(grade.name)}</p>
      </RailCard>
      <QuestsCard limit={2} />
      <RailFooter />
    </>
  );
}
