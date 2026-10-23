"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, Clock, PlayCircle, Trophy } from "lucide-react";
import type { CourseOutline } from "@/content/course";
import { useLearner } from "@/lib/store";
import { EMPTY_PROGRESS, courseProgress, lessonProgress, unitProgress } from "@/lib/progress";
import { useHydrated } from "@/components/providers";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { ProgressBar } from "@/components/ui/Progress";
import { MasteryGrid, MasteryLegend } from "./MasteryGrid";
import { ITEM_ICON } from "@/components/learn/LearnPath";
import { ResourcesPanel } from "@/components/mastery/ResourcesPanel";
import { useT } from "@/i18n";

export function CourseOverview({ outline }: { outline: CourseOutline }) {
  const t = useT();
  const hydrated = useHydrated();
  const s = useLearner();
  const setProfile = useLearner((st) => st.setProfile);
  const { color } = courseStyle(outline.slug);
  const empty = EMPTY_PROGRESS;
  const st = hydrated ? s : empty;
  const cp = courseProgress(st, outline);
  const counts: Record<number, number> = {};
  Object.values(cp.levels).forEach((l) => (counts[l] = (counts[l] ?? 0) + 1));
  const next = cp.next ?? outline.units[0].lessons[0];
  const nextItem = lessonProgress(st, next).nextItem;

  return (
    <div className="mx-auto max-w-[1060px] px-4 py-8 sm:px-6">
      {/* header */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <CourseIcon slug={outline.slug} size={88} />
        <div className="min-w-0 flex-1">
          <p className="eyebrow">{outline.domain ?? outline.levels.join(" · ")}</p>
          <h1 className="mt-1 text-3xl font-black sm:text-4xl">{outline.title}</h1>
          <p className="mt-2 max-w-2xl font-semibold leading-7 text-muted">{outline.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="chip">{t("course.stats.units", "{n} units", { n: outline.units.length })}</span>
            <span className="chip">{t("course.stats.lessons", "{n} lessons", { n: outline.stats.lessons })}</span>
            {outline.stats.videos > 0 && <span className="chip">{t("course.stats.videos", "{n} videos", { n: outline.stats.videos })}</span>}
            <span className="chip">{t("course.stats.questions", "{n} practice questions", { n: outline.stats.questions })}</span>
            <span className="chip">
              <Clock className="h-3 w-3" /> {Math.round(outline.stats.minutes / 6) / 10} h
            </span>
          </div>
        </div>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* mastery */}
        <section className="card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black">{t("course.overview.mastery", "Course mastery")}</h2>
            <span className="text-lg font-black" style={{ color }}>
              {Math.round(cp.pct * 100)}%
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-muted">
            {t("course.overview.points", "{earned} of {possible} mastery points", { earned: cp.earned, possible: cp.possible })}
          </p>
          <div className="mt-5 space-y-4">
            {outline.units.map((u, i) => (
              <div key={u.slug} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <Link href={u.href} className="w-40 shrink-0 truncate text-sm font-extrabold hover:text-accent">
                  {t("course.overview.unitTitle", "Unit {n}: {title}", { n: i + 1, title: u.title })}
                </Link>
                <MasteryGrid skills={u.lessons.map((l) => ({ id: l.id, title: l.title, href: l.href, level: cp.levels[l.id] ?? 0 }))} />
              </div>
            ))}
          </div>
          <div className="mt-6 border-t-2 border-line pt-4">
            <MasteryLegend counts={counts} />
          </div>
        </section>

        {/* up next */}
        <aside className="space-y-4">
          <div className="card p-5">
            <p className="eyebrow">{cp.complete ? t("course.overview.upNext", "Up next for you") : t("course.overview.startHere", "Start here")}</p>
            <h3 className="mt-2 text-lg font-black leading-snug">{next.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm font-semibold text-muted">{next.summary}</p>
            <Link href={nextItem.href} onClick={() => setProfile({ course: outline.slug })} className="btn-primary mt-4 w-full">
              {cp.complete ? t("course.continue", "Continue") : t("course.overview.startCourse", "Start course")}
            </Link>
            <Link href="/learn" onClick={() => setProfile({ course: outline.slug })} className="btn-ghost mt-2 w-full">
              {t("course.overview.openPath", "Open path")}
            </Link>
          </div>
          <div className="card flex items-center gap-4 p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-warn text-white">
              <Trophy className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-black">{t("course.overview.challenge", "Course challenge")}</h3>
              <p className="text-sm font-semibold text-muted">{t("course.overview.challengeDesc", "{n} questions · level up to Mastered", { n: outline.challenge.questions })}</p>
            </div>
            <Link href={outline.challenge.href} className="btn-gold !px-3 !py-2 text-xs">
              {t("course.start", "Start")}
            </Link>
          </div>
        </aside>
      </div>

      {/* units */}
      <div className="mt-10 space-y-5">
        {outline.units.map((u, i) => {
          const up = unitProgress(st, u);
          return (
            <section key={u.slug} id={u.slug} className="card scroll-mt-6 overflow-hidden">
              <div className="flex flex-wrap items-center gap-4 border-b-2 border-line p-5">
                <div className="min-w-0 flex-1">
                  <p className="eyebrow">{t("course.overview.unit", "Unit {n}", { n: i + 1 })}</p>
                  <Link href={u.href} className="mt-1 block text-xl font-black hover:text-accent">
                    {u.title}
                  </Link>
                  <p className="mt-1 text-sm font-semibold text-muted">{u.description}</p>
                </div>
                <div className="w-full sm:w-48">
                  <div className="mb-1 flex justify-between text-xs font-bold text-muted">
                    <span>{t("course.overview.unitMastery", "Unit mastery")}</span>
                    <span>{Math.round(up.pct * 100)}%</span>
                  </div>
                  <ProgressBar value={up.pct} height={10} color={color} />
                </div>
              </div>
              <ul className="divide-y-2 divide-line">
                {u.lessons.map((l) => {
                  const lp = lessonProgress(st, l);
                  return (
                    <li key={l.id} className="flex items-center gap-4 px-5 py-3.5">
                      <span className="h-4 w-4 shrink-0 rounded" style={{ background: lp.level ? ["", "#FFB800", "#FF8A00", "#2F6BFF", "#7C4DFF"][lp.level] : "transparent", border: lp.level ? undefined : "2px solid rgb(var(--line))" }} />
                      <Link href={l.href} className="min-w-0 flex-1 truncate font-bold hover:text-accent">
                        {l.title}
                      </Link>
                      <span className="hidden gap-1.5 sm:flex">
                        {l.items.map((it) => {
                          const I = ITEM_ICON[it.kind];
                          return (
                            <Link key={it.id} href={it.href} title={it.title} className="grid h-8 w-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-accent">
                              <I className="h-[18px] w-[18px]" strokeWidth={2.4} />
                            </Link>
                          );
                        })}
                      </span>
                    </li>
                  );
                })}
                {[u.quiz, u.test].filter(Boolean).map((a) => (
                  <li key={a!.key} className="flex items-center gap-4 bg-surface-2/60 px-5 py-3.5">
                    {a!.kind === "test" ? <Trophy className="h-5 w-5 shrink-0 text-warn" /> : <BookOpenCheck className="h-5 w-5 shrink-0 text-accent-2" />}
                    <span className="min-w-0 flex-1 font-bold">
                      {a!.kind === "test" ? t("course.overview.unitTest", "Unit test") : t("course.overview.unitQuiz", "Unit quiz")}
                      <span className="ml-2 text-sm font-semibold text-muted">
                        {t("course.overview.questions", "{n} questions", { n: a!.questions })}
                        {hydrated && s.assessments[a!.key] !== undefined ? " · " + t("course.overview.best", "best {pct}%", { pct: Math.round(s.assessments[a!.key] * 100) }) : ""}
                      </span>
                    </span>
                    <Link href={a!.href} className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-accent">
                      {t("course.start", "Start")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <ResourcesPanel course={outline.slug} unitTitles={Object.fromEntries(outline.units.map((u, i) => [u.slug, t("course.overview.unitTitle", "Unit {n}: {title}", { n: i + 1, title: u.title })]))} />

      {outline.stats.videos === 0 && (
        <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-muted">
          <PlayCircle className="h-4 w-4" /> {t("course.overview.videosSoon", "Videos from the Quest Academy channel appear here as they’re linked.")}
        </p>
      )}
    </div>
  );
}
