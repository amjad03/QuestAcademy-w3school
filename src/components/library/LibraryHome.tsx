"use client";

import Link from "next/link";
import { useMemo } from "react";
import clsx from "clsx";
import { ArrowRight, Baby, Backpack, Briefcase, CodeXml, Compass, FlaskConical, GraduationCap, Route, Sparkles, Target, type LucideIcon } from "lucide-react";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useCatalog } from "@/components/shell/CatalogContext";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";
import { ProgressBar } from "@/components/ui/Progress";
import { CLASS_GROUPS, GOALS, classById, classForStage, type ClassGroupId, type ClassIcon, type Goal } from "./classes";
import { LibrarySearch, type LibrarySearchItem } from "./LibrarySearch";
import { useLibrary } from "./libraryStore";
import { useT } from "@/i18n";

export const CLASS_ICON: Record<ClassIcon, LucideIcon> = {
  baby: Baby,
  backpack: Backpack,
  compass: Compass,
  flask: FlaskConical,
  target: Target,
  graduation: GraduationCap,
  briefcase: Briefcase,
};

const GOAL_ICON: Record<Goal["icon"], LucideIcon> = { code: CodeXml, target: Target, route: Route, sparkles: Sparkles };

export interface ClassSummary {
  id: ClassGroupId;
  subjects: number;
  lessons: number;
  /** Course slugs in this class (progress is read from the catalog + store). */
  courses: string[];
}

export interface BoardSummary {
  id: "cbse" | "pue" | "icse" | "exam";
  name: string;
  full: string;
  note: string;
  grades: { id: string; name: string; chapters: number; withLessons: number; classId: ClassGroupId | null }[];
}

export interface GoalSummary {
  id: Goal["id"];
  meta: string;
}

export interface LibraryHomeData {
  classes: ClassSummary[];
  boards: BoardSummary[];
  goals: GoalSummary[];
  search: LibrarySearchItem[];
  stats: { subjects: number; lessons: number; questions: number };
}

/** Lessons completed per course slug, from the learner store. */
function useCourseProgress() {
  const catalog = useCatalog();
  const lessons = useLearner((s) => s.lessons);
  return useMemo(() => {
    const m = new Map<string, { done: number; total: number }>();
    for (const c of catalog) m.set(c.slug, { done: c.lessonIds.filter((id) => lessons[id]).length, total: c.lessonIds.length });
    return m;
  }, [catalog, lessons]);
}

export function LibraryHome({ data }: { data: LibraryHomeData }) {
  const t = useT();
  const hydrated = useHydrated();
  const stage = useLearner((s) => s.profile.stage);
  const mine = hydrated ? classForStage(stage) : null;
  const progress = useCourseProgress();

  const done = (c: ClassSummary) => c.courses.reduce((a, slug) => a + (progress.get(slug)?.done ?? 0), 0);

  return (
    <PageColumns rail={<LibraryRail data={data} mineId={mine?.id ?? null} />}>
      <header>
        <p className="eyebrow">{t("library.eyebrow", "Library")}</p>
        <h1 className="mt-1 text-2xl font-black sm:text-3xl">{t("library.title", "Browse everything")}</h1>
        <p className="mt-1 max-w-2xl font-semibold text-muted">{t("library.subtitle", "One place for every class, board and goal — from pre-primary to university and beyond. Pick the way in that suits you.")}</p>
      </header>

      <div className="mt-5">
        <LibrarySearch items={data.search} />
      </div>

      {/* By class */}
      <section className="mt-8" aria-labelledby="by-class">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="by-class" className="text-lg font-black">
            {t("library.byClass", "By class")}
          </h2>
          <span className="text-sm font-bold text-muted">{t("library.statsLine", "{subjects} subjects · {lessons} lessons", { subjects: data.stats.subjects, lessons: data.stats.lessons })}</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.classes.map((c) => {
            const g = classById[c.id];
            const I = CLASS_ICON[g.icon];
            const d = hydrated ? done(c) : 0;
            const isMine = mine?.id === c.id;
            return (
              <Link key={c.id} href={`/library/class/${c.id}`} className={clsx("tile flex items-center gap-4 p-4 transition hover:border-accent", isMine && "border-accent")}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white" style={{ background: g.color }} aria-hidden>
                  <I className="h-6 w-6" strokeWidth={2.4} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-black">{g.label}</span>
                    {isMine && <span className="chip !border-accent !py-0.5 text-xs text-accent">{t("library.yourClass", "Your class")}</span>}
                  </span>
                  <span className="block truncate text-xs font-bold text-muted">{g.hint}</span>
                  <span className="mt-1 block text-sm font-semibold text-muted">
                    {c.subjects === 1 ? t("library.subjects.one", "{n} subject", { n: c.subjects }) : t("library.subjects.other", "{n} subjects", { n: c.subjects })} · {t("library.lessonsCount", "{n} lessons", { n: c.lessons })}
                    {d > 0 && <span className="text-good"> · {t("library.doneCount", "{n} done", { n: d })}</span>}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
              </Link>
            );
          })}
        </div>
      </section>

      {/* By board / exam */}
      <section className="mt-8" aria-labelledby="by-board">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="by-board" className="text-lg font-black">
            {t("library.byBoard", "By board or exam")}
          </h2>
          <span className="text-sm font-bold text-muted">{t("library.byBoardHint", "Chapter-by-chapter syllabi")}</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {data.boards.map((b) => (
            <article key={b.id} className="card p-5">
              <h3 className="font-black">{b.name}</h3>
              <p className="text-xs font-bold text-muted">{b.full}</p>
              <ul className="mt-3 divide-y-2 divide-line">
                {b.grades.map((g) => {
                  const href = g.classId ? `/library/class/${g.classId}?board=${b.id}&grade=${encodeURIComponent(g.id)}` : "/learn";
                  return (
                    <li key={g.id}>
                      <Link href={href} className="group flex items-center gap-3 py-2 text-sm">
                        <span className="min-w-0 flex-1 truncate font-extrabold group-hover:text-accent">{g.name}</span>
                        <span className="shrink-0 text-xs font-semibold text-muted">
                          {t("library.gradeLine", "{chapters} chapters · {withLessons} with lessons", { chapters: g.chapters, withLessons: g.withLessons })}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-xs font-semibold text-muted">{b.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* By goal */}
      <section className="mt-8" aria-labelledby="by-goal">
        <h2 id="by-goal" className="mb-3 text-lg font-black">
          {t("library.byGoal", "By goal")}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {GOALS.map((goal) => {
            const I = GOAL_ICON[goal.icon];
            const meta = data.goals.find((g) => g.id === goal.id)?.meta;
            return (
              <Link key={goal.id} href={goal.href} className="tile flex items-start gap-4 p-4 transition hover:border-accent">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: goal.color }} aria-hidden>
                  <I className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-black">{goal.title}</span>
                  <span className="block text-sm font-semibold text-muted">{goal.description}</span>
                  {meta && <span className="mt-1 block text-xs font-bold text-muted">{meta}</span>}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </PageColumns>
  );
}

function LibraryRail({ data, mineId }: { data: LibraryHomeData; mineId: ClassGroupId | null }) {
  const t = useT();
  const hydrated = useHydrated();
  const recent = useLibrary((s) => s.recent);
  const progress = useCourseProgress();
  const mine = mineId ? data.classes.find((c) => c.id === mineId) : null;
  const mineDone = mine ? mine.courses.reduce((a, s) => a + (progress.get(s)?.done ?? 0), 0) : 0;
  const recentShown = hydrated ? recent.filter((id) => id !== mineId).slice(0, 3) : [];

  return (
    <>
      <RailCard title={t("library.yourClass", "Your class")} action={mine ? { href: `/library/class/${mine.id}`, label: t("library.rail.open", "Open") } : { href: "/profile", label: t("library.rail.setUp", "Set up") }}>
        {mine ? (
          <>
            <p className="font-extrabold">{classById[mine.id].label}</p>
            <p className="text-sm font-semibold text-muted">
              {t("library.rail.lessonsDone", "{done} of {total} lessons done", { done: mineDone, total: mine.lessons })}
            </p>
            <ProgressBar value={mine.lessons ? mineDone / mine.lessons : 0} height={10} className="mt-2" color="rgb(var(--good))" label={t("library.rail.classProgress", "Class progress")} />
          </>
        ) : (
          <p className="text-sm font-semibold text-muted">{t("library.rail.setUpHint", "Tell us your class or stage and the library will put the right subjects first.")}</p>
        )}
      </RailCard>
      {recentShown.length > 0 && (
        <RailCard title={t("library.rail.recent", "Recently viewed")}>
          <ul className="space-y-1.5">
            {recentShown.map((id) => (
              <li key={id}>
                <Link href={`/library/class/${id}`} className="flex items-center gap-2 text-sm font-bold hover:text-accent">
                  <span className="truncate">{classById[id].label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </RailCard>
      )}
      <RailCard title={t("library.rail.inLibrary", "In the library")}>
        <dl className="space-y-2 text-sm">
          {[
            [t("library.rail.subjects", "Subjects"), data.stats.subjects],
            [t("library.rail.lessons", "Lessons"), data.stats.lessons],
            [t("library.rail.questions", "Practice questions"), data.stats.questions],
            [t("library.rail.boards", "Boards and exams"), data.boards.length],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3">
              <dt className="font-semibold text-muted">{k}</dt>
              <dd className="font-bold tabular-nums">{v.toLocaleString()}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs font-semibold text-muted">{t("library.rail.classGroups", "{n} class groups from pre-primary to professional.", { n: CLASS_GROUPS.length })}</p>
      </RailCard>
      <RailFooter />
    </>
  );
}
