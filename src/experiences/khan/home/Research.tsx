"use client";

import Link from "next/link";
import { ArrowUpRight, BookMarked, CalendarRange, CircleHelp, NotebookPen } from "lucide-react";
import type { CourseOutline } from "@/content/course";
import { RESOURCES, caseStudiesForUnit, caseStudyHref, readingsForUnit, type CaseStudy, type Reading } from "@/content/resources";
import { getPathway } from "@/content/pathways";
import { useT } from "@/i18n";
import { useContentDict, useSharedText } from "@/i18n/content";
import { useLearner } from "@/lib/store";
import { unitProgress } from "@/lib/progress";
import { useNotebook, titleCase } from "@/lib/notebook-store";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { READING_ICON } from "@/components/mastery/ResourcesPanel";
import { MasteryBar, MasterySquare, SectionHeader, useCourseState, useFmt, useMasteryName, useMyCourses } from "../ui";
import { Greeting, HomeFrame, LanguageNudge, MyCourses, SeeItCard, UpNextHero, WeeklyActivity } from "./common";
import { scoreCompetency } from "./Mastery";

const TYPE_LABEL: Record<Reading["type"], [string, string]> = {
  course: ["khan.res.course", "Course"],
  docs: ["khan.res.docs", "Documentation"],
  article: ["khan.res.article", "Article"],
  paper: ["khan.res.paper", "Paper"],
  book: ["khan.res.book", "Book"],
  video: ["khan.res.video", "Lecture"],
};

/** Research (postgraduate): a reading-first desk — readings, case studies, competencies and the notebook. */
export function ResearchHome() {
  const t = useT();
  const mine = useMyCourses(6);
  const current = mine[0]?.slug ?? null;
  const outline = useOutline(current);
  return (
    <HomeFrame
      top={<Greeting sub={t("khan.research.sub", "Your reading, case work, notes and progress in one quiet place.")} />}
      rail={
        <>
          <Notebook />
          <PlanSummary />
          <WeeklyActivity />
          <LanguageNudge />
        </>
      }
    >
      <UpNextHero eyebrow={t("khan.research.continue", "Continue reading")} />
      {current && <ReadingList outline={outline} />}
      {current && <CaseStudies outline={outline} />}
      {current && <CompetencyTable outline={outline} course={current} />}
      <MyCourses title={t("khan.research.courses", "Courses on your desk")} />
      <SeeItCard minAge={16} />
    </HomeFrame>
  );
}

function ReadingList({ outline }: { outline: CourseOutline | null }) {
  const t = useT();
  const state = useCourseState(outline);
  const dict = useContentDict(outline?.slug ?? "");
  if (!outline || !state) return <section className="card h-48 animate-pulse" aria-busy />;
  let list = readingsForUnit(outline.slug, state.unit.slug);
  let scope = t("khan.research.unitScope", "Unit {n}: {title}", { n: state.unit.index + 1, title: dict?.[state.unit.title] ?? state.unit.title });
  if (!list.length && RESOURCES[outline.slug]) {
    list = Object.values(RESOURCES[outline.slug].readings).flat();
    scope = t("khan.research.courseScope", "Whole course");
  }
  return (
    <section aria-labelledby="kh-readings">
      <SectionHeader id="kh-readings" title={t("khan.research.readings", "Reading list")} sub={list.length ? scope : undefined} action={{ href: "/library", label: t("khan.research.library", "Library") }} />
      {list.length ? (
        <ol className="card divide-y divide-line">
          {list.slice(0, 5).map((r) => {
            const I = READING_ICON[r.type];
            return (
              <li key={r.url + r.title} className="flex gap-3 p-4">
                <I className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                <div className="min-w-0 flex-1">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1 font-semibold hover:text-accent">
                    {r.title}
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                    <span className="sr-only">{t("khan.external", "(opens an external site)")}</span>
                  </a>
                  <p className="text-xs text-muted">
                    {r.source} · {t(TYPE_LABEL[r.type][0], TYPE_LABEL[r.type][1])} · {r.level}
                  </p>
                  {r.note && <p className="mt-1 text-sm text-ink/80">{r.note}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="card p-5 text-sm text-muted">{t("khan.research.noReadings", "There's no curated reading list for this course yet. The Library holds the full collection.")}</p>
      )}
    </section>
  );
}

function CaseStudies({ outline }: { outline: CourseOutline | null }) {
  const t = useT();
  const f = useFmt();
  const state = useCourseState(outline);
  if (!outline || !state) return null;
  const res = RESOURCES[outline.slug];
  if (!res?.caseStudies.length) return null;
  const forUnit = caseStudiesForUnit(outline.slug, state.unit.slug);
  const list: CaseStudy[] = [...forUnit, ...res.caseStudies.filter((c) => !forUnit.includes(c))].slice(0, 3);
  return (
    <section aria-labelledby="kh-cases">
      <SectionHeader id="kh-cases" title={t("khan.research.cases", "Case studies")} sub={t("khan.research.casesSub", "{n} in this course", { n: f.n(res.caseStudies.length) })} />
      <div className="grid gap-3 md:grid-cols-3">
        {list.map((c) => (
          <Link key={c.slug} href={caseStudyHref(outline.slug, c.slug)} className="tile flex flex-col p-4">
            <span className="font-semibold leading-snug">{c.title}</span>
            <span className="mt-1 line-clamp-3 text-sm text-muted">{c.summary}</span>
            <span className="mt-auto pt-3 text-xs text-muted">
              {t("khan.research.caseMeta", "{min} min · {q} questions", { min: f.n(c.minutes), q: f.n(c.questions.length) })}
              {forUnit.includes(c) ? ` · ${t("khan.research.currentUnit", "current unit")}` : ""}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CompetencyTable({ outline, course }: { outline: CourseOutline | null; course: string }) {
  const t = useT();
  const f = useFmt();
  const name = useMasteryName();
  const s = useLearner();
  const dict = useContentDict(outline?.slug ?? "");
  const res = RESOURCES[course];
  if (res?.competencies.length) {
    const rows = res.competencies.map((c) => ({ c, ...scoreCompetency(s, course, c) }));
    return (
      <section aria-labelledby="kh-rcomp">
        <SectionHeader id="kh-rcomp" title={t("khan.mastery.competencies", "Competencies")} sub={t("khan.research.compSub", "Derived from lesson mastery, unit tests and solved challenges.")} />
        <div className="card overflow-x-auto">
          <table className="w-full text-sm sm:min-w-[480px]">
            <caption className="sr-only">{t("khan.research.compCaption", "Competency overview for the current course")}</caption>
            <thead className="border-b border-line text-left text-xs text-muted">
              <tr>
                <th scope="col" className="px-4 py-2.5 font-semibold">{t("khan.research.competency", "Competency")}</th>
                <th scope="col" className="px-4 py-2.5 font-semibold">{t("khan.research.level", "Level")}</th>
                <th scope="col" className="hidden px-4 py-2.5 text-right font-semibold sm:table-cell">{t("khan.research.evidence", "Evidence")}</th>
                <th scope="col" className="px-4 py-2.5 text-right font-semibold">{t("khan.research.score", "Score")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((r) => (
                <tr key={r.c.id}>
                  <td className="px-4 py-3">
                    <span className="font-semibold">{r.c.name}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted">{r.c.description}</span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="inline-flex items-center gap-1.5">
                      <MasterySquare level={r.level} size={12} /> {name(r.level)}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-right tabular-nums sm:table-cell">{f.n(r.evidence)}</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums">{f.pct(r.score)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  if (!outline) return null;
  return (
    <section aria-labelledby="kh-runits">
      <SectionHeader id="kh-runits" title={t("khan.research.byUnit", "Progress by unit")} />
      <ul className="card divide-y divide-line">
        {outline.units.map((u) => {
          const up = unitProgress(s, u);
          return (
            <li key={u.slug} className="grid gap-2 p-4 sm:grid-cols-[minmax(0,1fr)_200px] sm:items-center">
              <Link href={u.href} className="min-w-0 truncate font-semibold hover:text-accent">
                {f.n(u.index + 1)}. {dict?.[u.title] ?? u.title}
              </Link>
              <div>
                <MasteryBar levels={u.lessons.map((l) => (s.mastery[l.id] ?? (s.lessons[l.id] ? 1 : 0)) as 0 | 1 | 2 | 3 | 4)} height={8} />
                <p className="mt-1 text-xs text-muted">{t("khan.research.unitMeta", "{done}/{total} lessons · {pct}", { done: f.n(up.complete), total: f.n(up.total), pct: f.pct(up.pct) })}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Notebook() {
  const t = useT();
  const f = useFmt();
  const notes = useNotebook((s) => s.notes);
  const bookmarks = useNotebook((s) => s.bookmarks);
  const doubts = useNotebook((s) => s.doubts);
  const recent = Object.entries(notes)
    .sort((a, b) => b[1].updatedAt.localeCompare(a[1].updatedAt))
    .slice(0, 3);
  const marks = Object.entries(bookmarks)
    .sort((a, b) => b[1].addedAt.localeCompare(a[1].addedAt))
    .slice(0, 3);
  const open = doubts.filter((d) => !d.resolved);
  const empty = !recent.length && !marks.length && !open.length;
  return (
    <section className="card p-5" aria-labelledby="kh-notebook">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="kh-notebook" className="flex items-center gap-2 font-bold">
          <NotebookPen className="h-4 w-4 text-accent" aria-hidden /> {t("khan.research.notebook", "Notebook")}
        </h2>
        <Link href="/notebook" className="kh-link text-sm">
          {t("khan.open", "Open")}
        </Link>
      </div>
      {empty ? (
        <p className="mt-2 text-sm text-muted">{t("khan.research.notebookEmpty", "Notes, bookmarks and open questions you record while reading appear here.")}</p>
      ) : (
        <div className="mt-3 space-y-4">
          {recent.map(([id, n]) => (
            <figure key={id}>
              <blockquote className="border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-ink/85">{n.text.length > 160 ? `${n.text.slice(0, 160).trimEnd()}…` : n.text}</blockquote>
              <figcaption className="mt-1 pl-3 text-xs text-muted">
                <Link href={`/course/${id}`} className="hover:text-accent">
                  {titleCase(id.split("/").pop() ?? id)}
                </Link>{" "}
                · {f.date(n.updatedAt, { day: "numeric", month: "short" })}
              </figcaption>
            </figure>
          ))}
          {marks.length > 0 && (
            <ul className="space-y-1.5 border-t border-line pt-3 text-sm">
              {marks.map(([id, b]) => (
                <li key={id} className="flex items-center gap-2">
                  <BookMarked className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                  <Link href={b.href} className="truncate hover:text-accent">
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {open.length > 0 && (
            <p className="flex items-center gap-2 border-t border-line pt-3 text-sm">
              <CircleHelp className="h-4 w-4 shrink-0 text-warn-shade" aria-hidden />
              <Link href="/notebook" className="hover:text-accent">
                {t("khan.research.openQs", "{n} open questions", { n: f.n(open.length) })}
              </Link>
            </p>
          )}
        </div>
      )}
    </section>
  );
}

function PlanSummary() {
  const t = useT();
  const f = useFmt();
  const plan = useLearner((s) => s.plan);
  const catalog = useCatalog();
  const tx = useSharedText();
  if (!plan)
    return (
      <Link href="/plan" className="tile flex items-center gap-4 p-4">
        <CalendarRange className="h-5 w-5 shrink-0 text-accent" aria-hidden />
        <span className="min-w-0">
          <span className="block font-semibold">{t("khan.research.draftPlan", "Draft a study plan")}</span>
          <span className="block text-[0.8125rem] text-muted">{t("khan.research.draftPlanSub", "Spread lessons and revision across the days you choose, up to a target date.")}</span>
        </span>
      </Link>
    );
  const scope =
    plan.scope.type === "course"
      ? (tx(catalog.find((c) => c.slug === plan.scope.id)?.title ?? "") || titleCase(plan.scope.id))
      : plan.scope.type === "pathway"
        ? (getPathway(plan.scope.id)?.title ?? titleCase(plan.scope.id))
        : plan.scope.id.replace(":", " · ");
  const days = Math.ceil((new Date(`${plan.targetDate}T00:00:00`).getTime() - Date.now()) / 86_400_000);
  return (
    <section className="card p-5" aria-labelledby="kh-plan">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="kh-plan" className="flex items-center gap-2 font-bold">
          <CalendarRange className="h-4 w-4 text-accent" aria-hidden /> {t("khan.research.plan", "Study plan")}
        </h2>
        <Link href="/plan" className="kh-link text-sm">
          {t("khan.open", "Open")}
        </Link>
      </div>
      <dl className="mt-3 space-y-1.5 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="text-muted">{t("khan.research.scope", "Scope")}</dt>
          <dd className="truncate text-right font-medium">{scope}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted">{t("khan.research.target", "Target")}</dt>
          <dd className="text-right font-medium">
            {f.date(plan.targetDate)}
            {days > 0 ? ` · ${t("khan.daysShort", "{n} days", { n: f.n(days) })}` : ""}
          </dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-muted">{t("khan.research.time", "Time")}</dt>
          <dd className="text-right font-medium">{t("khan.research.hoursWeek", "{n} h a week", { n: f.n(plan.hoursPerWeek) })}</dd>
        </div>
      </dl>
    </section>
  );
}
