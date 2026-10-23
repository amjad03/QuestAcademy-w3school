"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Hourglass, Target } from "lucide-react";
import { useLearner } from "@/lib/store";
import type { Board } from "@/lib/modes";
import { useHydrated } from "@/components/providers";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { ProgressBar } from "@/components/ui/Progress";
import { CLASS_GROUPS, classById, classForStage, type ClassGroupId } from "./classes";
import { CLASS_ICON } from "./LibraryHome";
import { LibrarySearch, type LibrarySearchItem } from "./LibrarySearch";
import { useLibrary } from "./libraryStore";
import { useT } from "@/i18n";
import { useSharedText } from "@/i18n/content";

export interface ClassSubject {
  slug: string;
  title: string;
  tagline: string;
  levels: string[];
  domain?: string;
  topics: number;
  lessons: number;
  minutes: number;
  challenges: number;
  /** Lesson ids in course order; `/course/<id>` is the lesson href. */
  lessonIds: string[];
}

export interface ClassBoard {
  id: Board;
  name: string;
  note: string;
  grades: { id: string; name: string; subjects: { name: string; chapters: number; withLessons: number }[] }[];
}

export interface ClassViewData {
  id: ClassGroupId;
  subjects: ClassSubject[];
  boards: ClassBoard[];
  search: LibrarySearchItem[];
}

const lessonHref = (id: string) => `/course/${id}`;

export function ClassView({ data }: { data: ClassViewData }) {
  const t = useT();
  const g = classById[data.id];
  const I = CLASS_ICON[g.icon];
  const hydrated = useHydrated();
  const stage = useLearner((s) => s.profile.stage);
  const lessons = useLearner((s) => s.lessons);
  const visit = useLibrary((s) => s.visit);
  const isMine = hydrated && classForStage(stage)?.id === g.id;

  useEffect(() => visit(g.id), [g.id, visit]);

  const progress = useMemo(() => {
    const m = new Map<string, { done: number; next: string | null }>();
    for (const s of data.subjects) {
      const done = s.lessonIds.filter((id) => lessons[id]).length;
      m.set(s.slug, { done, next: s.lessonIds.find((id) => !lessons[id]) ?? null });
    }
    return m;
  }, [data.subjects, lessons]);

  const totalLessons = data.subjects.reduce((a, s) => a + s.lessons, 0);
  const totalDone = hydrated ? [...progress.values()].reduce((a, p) => a + p.done, 0) : 0;
  const started = data.subjects.filter((s) => (progress.get(s.slug)?.done ?? 0) > 0);
  const ordered = hydrated ? [...data.subjects].sort((a, b) => (progress.get(b.slug)?.done ?? 0) - (progress.get(a.slug)?.done ?? 0)) : data.subjects;

  return (
    <PageColumns rail={<ClassRail id={g.id} totalDone={totalDone} totalLessons={totalLessons} started={started.length} subjects={data.subjects.length} />}>
      <Link href="/library" className="inline-flex items-center gap-1.5 text-sm font-extrabold text-muted hover:text-accent">
        <ArrowLeft className="h-4 w-4" aria-hidden /> {t("library.eyebrow", "Library")}
      </Link>

      <header className="mt-3 flex items-start gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white" style={{ background: g.color }} aria-hidden>
          <I className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-black">{g.label}</h1>
            {isMine && <span className="chip !border-accent !py-0.5 text-xs text-accent">{t("library.yourClass", "Your class")}</span>}
          </div>
          <p className="text-sm font-bold text-muted">{g.hint}</p>
          <p className="mt-2 max-w-2xl font-semibold text-muted">{g.description}</p>
        </div>
      </header>

      <div className="mt-5">
        <LibrarySearch items={data.search} placeholder={t("library.class.searchPlaceholder", "Search {label} lessons", { label: g.label })} />
      </div>

      {/* Subjects */}
      <section className="mt-8" aria-labelledby="subjects-h">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="subjects-h" className="text-lg font-black">
            {t("library.class.subjects", "Subjects")}
          </h2>
          <span className="text-sm font-bold text-muted">
            {t("library.class.available", "{n} available · {lessons} lessons", { n: data.subjects.length, lessons: totalLessons })}
          </span>
        </div>
        {data.subjects.length ? (
          <div className="grid gap-3 md:grid-cols-2">
            {ordered.map((s) => (
              <SubjectCard key={s.slug} s={s} done={hydrated ? (progress.get(s.slug)?.done ?? 0) : 0} next={hydrated ? (progress.get(s.slug)?.next ?? null) : s.lessonIds[0] ?? null} levels={s.levels} />
            ))}
          </div>
        ) : (
          <p className="card p-5 text-sm font-semibold text-muted">{t("library.class.noSubjects", "No subjects are published for this class yet. See what is coming below.")}</p>
        )}
      </section>

      {data.boards.length > 0 && <BoardSyllabi boards={data.boards} />}

      {/* Coming soon */}
      <section className="mt-8" aria-labelledby="soon-h">
        <div className="mb-3 flex items-center gap-2">
          <Hourglass className="h-4 w-4 text-muted" strokeWidth={2.5} aria-hidden />
          <h2 id="soon-h" className="text-lg font-black">
            {t("library.class.comingSoon", "Coming soon")}
          </h2>
        </div>
        <div className="card p-5">
          <div className="flex flex-wrap gap-2">
            {g.comingSoon.map((name) => (
              <span key={name} className="chip text-muted">
                {name}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-muted">
            {t("library.class.comingSoonBody", "These subjects are being written for {label}. Chapters without lessons in the syllabi above can still be practised and ticked off in your plan.", { label: g.label.toLowerCase() })}
          </p>
        </div>
      </section>
    </PageColumns>
  );
}

function SubjectCard({ s, done, next, levels }: { s: ClassSubject; done: number; next: string | null; levels: string[] }) {
  const t = useT();
  const tx = useSharedText();
  const pct = s.lessons ? done / s.lessons : 0;
  const complete = s.lessons > 0 && done === s.lessons;
  const cta = complete ? t("library.subject.review", "Review") : done > 0 ? t("library.subject.continue", "Continue") : t("library.subject.start", "Start");
  const href = next ? lessonHref(next) : s.lessonIds[0] ? lessonHref(s.lessonIds[0]) : `/course/${s.slug}`;
  const hours = Math.max(1, Math.round(s.minutes / 60));
  return (
    <article className="card flex flex-col p-5">
      <div className="flex items-start gap-3">
        <CourseIcon slug={s.slug} size={44} />
        <div className="min-w-0 flex-1">
          <Link href={`/course/${s.slug}`} className="block truncate font-black hover:text-accent">
            {tx(s.title)}
          </Link>
          <p className="text-sm font-semibold text-muted">{tx(s.tagline)}</p>
        </div>
        <span className={clsx("chip shrink-0 !py-0.5 text-xs", complete ? "!border-good bg-good-soft text-good" : done > 0 ? "!border-accent text-accent" : "text-muted")}>{complete ? t("library.subject.complete", "Complete") : done > 0 ? t("library.subject.doneOf", "{done} of {total}", { done, total: s.lessons }) : t("library.subject.notStarted", "Not started")}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {levels.slice(0, 4).map((l) => (
          <span key={l} className="chip !py-0.5 text-xs text-muted">
            {tx(l)}
          </span>
        ))}
        {s.domain && <span className="chip !py-0.5 text-xs text-muted">{tx(s.domain)}</span>}
      </div>
      <ProgressBar value={pct} height={8} className="mt-3" color={complete ? "rgb(var(--good))" : undefined} label={t("library.subject.progressLabel", "{title} progress", { title: tx(s.title) })} />
      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-muted">
        <span>{t("library.subject.units", "{n} units", { n: s.topics })}</span>
        <span>{t("library.lessonsCount", "{n} lessons", { n: s.lessons })}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden /> {t("library.subject.hours", "about {n} h", { n: hours })}
        </span>
        {s.challenges > 0 && <span>{t("library.subject.challenges", "{n} coding challenges", { n: s.challenges })}</span>}
      </p>
      <div className="mt-auto flex gap-2 pt-4">
        <Link href={href} className="btn-primary !px-3 !py-1.5 text-sm">
          <BookOpen className="h-4 w-4" aria-hidden /> {cta}
        </Link>
        <Link href={`/course/${s.slug}`} className="btn-ghost !px-3 !py-1.5 text-sm">
          {t("library.subject.outline", "Outline")} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function BoardSyllabi({ boards }: { boards: ClassBoard[] }) {
  const t = useT();
  const params = useSearchParams();
  const router = useRouter();
  const setProfile = useLearner((s) => s.setProfile);
  const tx = useSharedText();
  const wantBoard = params.get("board");
  const wantGrade = params.get("grade");
  const [tab, setTab] = useState<Board>(() => (boards.some((b) => b.id === wantBoard) ? (wantBoard as Board) : boards[0].id));
  const board = boards.find((b) => b.id === tab) ?? boards[0];

  const study = (grade: string) => {
    setProfile({ board: board.id, grade, mode: "focus" });
    router.push("/learn");
  };

  return (
    <section className="mt-8" aria-labelledby="boards-h">
      <div className="mb-3 flex items-center gap-2">
        <Target className="h-4 w-4 text-accent" strokeWidth={2.5} aria-hidden />
        <h2 id="boards-h" className="text-lg font-black">
          {t("library.boards.title", "Board and exam syllabi")}
        </h2>
      </div>
      <div className="card overflow-hidden">
        <div className="flex gap-1 overflow-x-auto border-b-2 border-line px-2" role="tablist" aria-label={t("library.boards.tablist", "Board")}>
          {boards.map((b) => (
            <button key={b.id} role="tab" aria-selected={b.id === board.id} onClick={() => setTab(b.id)} className={clsx("-mb-[2px] shrink-0 border-b-2 px-3 py-2.5 text-sm font-extrabold transition", b.id === board.id ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink")}>
              {tx(b.name)}
            </button>
          ))}
        </div>
        <div className="divide-y-2 divide-line">
          {board.grades.map((gr) => {
            const chapters = gr.subjects.reduce((a, s) => a + s.chapters, 0);
            const withLessons = gr.subjects.reduce((a, s) => a + s.withLessons, 0);
            const highlighted = board.id === wantBoard && gr.id === wantGrade;
            return (
              <div key={gr.id} className={clsx("flex flex-col gap-3 p-4 sm:flex-row sm:items-center", highlighted && "bg-accent-soft/40")}>
                <div className="min-w-0 flex-1">
                  <p className="font-extrabold">{tx(gr.name)}</p>
                  <p className="text-xs font-bold text-muted">
                    {t("library.gradeLine", "{chapters} chapters · {withLessons} with lessons", { chapters, withLessons })} · {gr.subjects.map((s) => tx(s.name)).join(", ")}
                  </p>
                </div>
                <button onClick={() => study(gr.id)} className="btn-ghost shrink-0 !px-3 !py-1.5 text-sm">
                  {t("library.boards.study", "Study this syllabus")} <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            );
          })}
        </div>
        <p className="px-4 py-3 text-xs font-semibold text-muted">{tx(board.note)} {t("library.boards.note", "Choosing a syllabus switches your home to the Focus view with chapter progress and a revision plan.")}</p>
      </div>
    </section>
  );
}

function ClassRail({ id, totalDone, totalLessons, started, subjects }: { id: ClassGroupId; totalDone: number; totalLessons: number; started: number; subjects: number }) {
  const t = useT();
  const others = CLASS_GROUPS.filter((g) => g.id !== id);
  return (
    <>
      <RailCard title={t("library.class.rail.progress", "Progress")}>
        <p className="text-sm font-bold">
          {t("library.rail.lessonsDone", "{done} of {total} lessons done", { done: totalDone, total: totalLessons })}
        </p>
        <ProgressBar value={totalLessons ? totalDone / totalLessons : 0} height={10} className="mt-2" color="rgb(var(--good))" label={t("library.rail.classProgress", "Class progress")} />
        <p className="mt-2 text-xs font-semibold text-muted">
          {t("library.class.rail.started", "{started} of {total} subjects started", { started, total: subjects })}
        </p>
      </RailCard>
      <RailCard title={t("library.class.rail.others", "Other classes")} action={{ href: "/library", label: t("library.eyebrow", "Library") }}>
        <ul className="space-y-1.5">
          {others.map((g) => (
            <li key={g.id}>
              <Link href={`/library/class/${g.id}`} className="flex items-center gap-2 text-sm font-bold hover:text-accent">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: g.color }} aria-hidden />
                <span className="truncate">{g.label}</span>
                <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </RailCard>
      <RailFooter />
    </>
  );
}
