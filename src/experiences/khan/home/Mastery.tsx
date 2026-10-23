"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarCheck, Code2, FileCheck2, Terminal } from "lucide-react";
import type { CourseOutline } from "@/content/course";
import { RESOURCES, allCaseStudies, readingsForUnit, type Competency } from "@/content/resources";
import { useT } from "@/i18n";
import { useLearner, type LearnerState } from "@/lib/store";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { weekKey } from "@/lib/gamification";
import { titleCase } from "@/lib/notebook-store";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { CaseStudyCard, READING_ICON } from "@/components/mastery/ResourcesPanel";
import { MasterySquare, SectionHeader, Stat, useCourseState, useFmt, useMasteryName, useMyCourses } from "../ui";
import { Greeting, HomeFrame, LanguageNudge, MyCourses, SeeItCard, UpNextHero, WeeklyActivity } from "./common";

type S = Pick<LearnerState, "items" | "mastery" | "lessons" | "assessments" | "challengesPassed">;
const PASS = 0.7;

const levelOf = (s: S, id: string) => (s.mastery[id] ?? (s.lessons[id] ? 1 : 0)) as MasteryLevel;

/** Score (0–1), evidence and an overall level for one competency. */
export function scoreCompetency(s: S, course: string, c: Competency) {
  const levels = c.lessons.map((id) => levelOf(s, id));
  const score = levels.length ? levels.reduce<number>((a, l) => a + MASTERY[l].points / 100, 0) / levels.length : 0;
  const units = new Set(c.lessons.map((id) => id.split("/")[1]));
  const assessments = [...units].filter((u) => ["quiz", "test"].some((k) => (s.assessments[`${course}/${u}:${k}`] ?? 0) >= PASS)).length;
  const challenges = c.lessons.filter((id) => s.challengesPassed.includes(id)).length;
  const started = levels.some((l) => l > 0);
  const level: MasteryLevel = score >= 1 ? 4 : score >= 0.8 ? 3 : score >= 0.5 ? 2 : started ? 1 : 0;
  return { score, evidence: assessments + challenges, level };
}

/** Mastery (undergraduate): courses, the code lab and competency tracking. */
export function MasteryHome() {
  const t = useT();
  const f = useFmt();
  const s = useLearner();
  const mine = useMyCourses(6);
  const withRes = mine.filter((c) => RESOURCES[c.slug]);
  const [pick, setPick] = useState<string | null>(null);
  const dash = withRes.find((c) => c.slug === pick)?.slug ?? withRes[0]?.slug ?? null;
  const outline = useOutline(mine[0]?.slug ?? null);
  const weekly = s.weekly.week === weekKey() ? s.weekly.xp : 0;
  const mastered = Object.values(s.mastery).filter((l) => l >= 4).length;
  const passed = Object.values(s.assessments).filter((v) => v >= PASS).length;

  return (
    <HomeFrame
      top={
        <Greeting
          sub={t("khan.mastery.sub", "Your courses, code and competencies — and what's worth doing next.")}
          aside={
            <dl className="flex gap-8">
              <Stat label={t("khan.mastery.weekPoints", "Points this week")} value={f.n(weekly)} />
              <Stat label={t("khan.mastery.skillsMastered", "Skills mastered")} value={f.n(mastered)} />
              <Stat label={t("khan.mastery.passed", "Assessments passed")} value={f.n(passed)} />
            </dl>
          }
        />
      }
      rail={
        <>
          <WeeklyActivity />
          <PlanCard hasPlan={Boolean(s.plan)} />
          <LanguageNudge />
          <ReadingQueue outline={outline} />
        </>
      }
    >
      <UpNextHero />
      <div className="grid gap-4 md:grid-cols-2">
        <CodeLab outline={outline} s={s} />
        <AssessmentsDue outline={outline} s={s} />
      </div>
      {dash && <Competencies s={s} course={dash} courses={withRes.map((c) => ({ slug: c.slug, title: c.title }))} onPick={setPick} />}
      <MyCourses />
      <CaseOfTheWeek courses={mine.map((c) => c.slug)} />
      <SeeItCard minAge={15} />
    </HomeFrame>
  );
}

function PlanCard({ hasPlan }: { hasPlan: boolean }) {
  const t = useT();
  return (
    <Link href="/plan" className="tile flex items-center gap-4 p-4">
      <CalendarCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block font-semibold">{hasPlan ? t("khan.mastery.plan", "Your study plan") : t("khan.mastery.makePlan", "Build a study plan")}</span>
        <span className="block text-[0.8125rem] text-muted">{hasPlan ? t("khan.mastery.planSub", "Today's sessions and deadlines.") : t("khan.mastery.makePlanSub", "Schedule lessons and revision around your exams.")}</span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
    </Link>
  );
}

function CodeLab({ outline, s }: { outline: CourseOutline | null; s: S }) {
  const t = useT();
  const nextChallenge = outline?.units
    .flatMap((u) => u.lessons)
    .flatMap((l) => l.items.filter((i) => i.kind === "challenge").map((i) => ({ lesson: l, item: i })))
    .find(({ lesson }) => !s.challengesPassed.includes(lesson.id));
  const recent = [...s.challengesPassed].reverse().slice(0, 3);
  return (
    <section className="card flex flex-col p-5" aria-labelledby="kh-codelab">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[rgb(var(--kh-navy))] text-white">
          <Terminal className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="kh-codelab" className="font-bold">
            {t("khan.mastery.codeLab", "Code lab")}
          </h2>
          <p className="text-[0.8125rem] text-muted">{t("khan.mastery.codeLabSub", "HTML, CSS, JavaScript, Python and SQL in the browser.")}</p>
        </div>
      </div>
      {nextChallenge && (
        <Link href={nextChallenge.item.href} className="mt-4 flex items-center gap-3 rounded-md border border-line px-3 py-2.5 hover:border-accent">
          <Code2 className="h-4 w-4 shrink-0 text-muted" aria-hidden />
          <span className="min-w-0 flex-1 truncate text-sm font-semibold">{t("khan.mastery.nextChallenge", "Next challenge: {title}", { title: nextChallenge.item.title })}</span>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
        </Link>
      )}
      <h3 className="mt-4 text-xs font-semibold text-muted">{t("khan.mastery.recent", "Recently solved")}</h3>
      {recent.length ? (
        <ul className="mt-1.5 space-y-1">
          {recent.map((id) => {
            const [course, unit, lesson] = id.split("/");
            return (
              <li key={id}>
                <Link href={`/course/${course}/${unit}/${lesson}?item=challenge`} className="flex items-center gap-2 text-sm hover:text-accent">
                  <CourseIcon slug={course} size={18} flat />
                  <span className="truncate">{titleCase(lesson)}</span>
                  <span className="ml-auto shrink-0 text-xs font-semibold text-good-shade">{t("khan.mastery.passedOne", "Passed")}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-1 text-sm text-muted">{t("khan.mastery.noChallenges", "Solve a coding challenge in any lesson and it'll appear here.")}</p>
      )}
      <div className="mt-auto pt-4">
        <Link href="/code/playground" className="btn-ghost">
          {t("khan.mastery.openLab", "Open the code lab")}
        </Link>
      </div>
    </section>
  );
}

function AssessmentsDue({ outline, s }: { outline: CourseOutline | null; s: S }) {
  const t = useT();
  const f = useFmt();
  if (!outline) return <section className="card h-48 animate-pulse" aria-busy />;
  const due = outline.units.filter((u) => u.lessons.some((l) => levelOf(s, l.id) > 0) && s.assessments[u.test.key] === undefined).slice(0, 3);
  const allTaken = outline.units.every((u) => s.assessments[u.test.key] !== undefined);
  return (
    <section className="card p-5" aria-labelledby="kh-due">
      <h2 id="kh-due" className="font-bold">
        {t("khan.mastery.due", "Assessments due")}
      </h2>
      <p className="text-[0.8125rem] text-muted">{outline.title}</p>
      {due.length ? (
        <ul className="mt-3 divide-y divide-line">
          {due.map((u) => (
            <li key={u.slug} className="flex items-center gap-3 py-2.5">
              <FileCheck2 className="h-4 w-4 shrink-0 text-muted" aria-hidden />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{t("khan.mastery.unitTest", "Unit test: {title}", { title: u.title })}</span>
                <span className="block text-xs text-muted">{t("khan.mastery.unitTestSub", "{n} questions · can level skills up to Mastered", { n: f.n(u.test.questions) })}</span>
              </span>
              <Link href={u.test.href} className="kh-link shrink-0 text-sm">
                {t("khan.mastery.take", "Take")}
              </Link>
            </li>
          ))}
        </ul>
      ) : allTaken ? (
        <div className="mt-3 flex items-center gap-3">
          <p className="min-w-0 flex-1 text-sm text-muted">{t("khan.mastery.allTaken", "Every unit test is done. The course challenge checks it all at once.")}</p>
          <Link href={outline.challenge.href} className="kh-link shrink-0 text-sm">
            {t("khan.start", "Start")}
          </Link>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted">{t("khan.mastery.dueEmpty", "Unit tests appear here once you've started a unit.")}</p>
      )}
    </section>
  );
}

function Competencies({ s, course, courses, onPick }: { s: S; course: string; courses: { slug: string; title: string }[]; onPick: (c: string) => void }) {
  const t = useT();
  const f = useFmt();
  const name = useMasteryName();
  const res = RESOURCES[course];
  const rows = useMemo(() => res.competencies.map((c) => ({ c, ...scoreCompetency(s, course, c) })), [res, s, course]);
  const avg = rows.length ? rows.reduce((a, r) => a + r.score, 0) / rows.length : 0;
  const evidence = rows.reduce((a, r) => a + r.evidence, 0);
  return (
    <section className="card p-5 sm:p-6" aria-labelledby="kh-comp">
      <SectionHeader id="kh-comp" title={t("khan.mastery.competencies", "Competencies")} sub={t("khan.mastery.compSub", "{pct} average mastery · {n} pieces of evidence from tests and challenges", { pct: f.pct(avg), n: f.n(evidence) })}>
        {courses.length > 1 && (
          <div className="kh-seg" role="tablist" aria-label={t("khan.mastery.course", "Course")}>
            {courses.map((c) => (
              <button key={c.slug} type="button" role="tab" aria-selected={c.slug === course} className={c.slug === course ? "is-on" : undefined} onClick={() => onPick(c.slug)}>
                {c.title}
              </button>
            ))}
          </div>
        )}
      </SectionHeader>
      <div className="grid items-center gap-6 md:grid-cols-[200px_minmax(0,1fr)]">
        {rows.length >= 3 ? <Radar values={rows.map((r) => r.score)} label={t("khan.mastery.radar", "Competency radar")} /> : <div />}
        <ol className="space-y-3">
          {rows.map((r, i) => {
            const first = r.c.lessons[0]?.split("/");
            return (
              <li key={r.c.id}>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 shrink-0 text-xs font-semibold tabular-nums text-muted">{f.n(i + 1)}</span>
                  <MasterySquare level={r.level} size={12} title={name(r.level)} />
                  <Link href={first ? `/course/${first[0]}/${first[1]}/${first[2]}` : "#"} className="min-w-0 flex-1 truncate font-semibold hover:text-accent" title={r.c.description}>
                    {r.c.name}
                  </Link>
                  <span className="hidden shrink-0 text-xs text-muted sm:inline">{r.evidence ? t("khan.mastery.evidence", "{n} evidence", { n: f.n(r.evidence) }) : t("khan.mastery.noEvidence", "no evidence yet")}</span>
                  <span className="w-10 shrink-0 text-right font-semibold tabular-nums">{f.pct(r.score)}</span>
                </div>
                <div className="ml-6 mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuenow={Math.round(r.score * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={r.c.name}>
                  <div className="h-full rounded-full" style={{ width: `${r.score * 100}%`, background: "rgb(var(--kh-m3))" }} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Radar({ values, label }: { values: number[]; label: string }) {
  const n = values.length;
  const R = 78;
  const C = 100;
  const pt = (i: number, r: number) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [C + Math.cos(a) * r, C + Math.sin(a) * r] as const;
  };
  const ring = (k: number) => values.map((_, i) => pt(i, R * k).join(",")).join(" ");
  const shape = values.map((v, i) => pt(i, R * Math.max(0.03, v)).join(",")).join(" ");
  return (
    <svg viewBox="0 0 200 200" className="mx-auto w-full max-w-[200px]" role="img" aria-label={`${label}: ${values.map((v, i) => `${i + 1}: ${Math.round(v * 100)}%`).join(", ")}`}>
      {[0.25, 0.5, 0.75, 1].map((k) => (
        <polygon key={k} points={ring(k)} fill="none" stroke="rgb(var(--line))" strokeWidth={1} />
      ))}
      {values.map((_, i) => {
        const [x, y] = pt(i, R);
        return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="rgb(var(--line))" strokeWidth={1} />;
      })}
      <polygon points={shape} fill="rgb(var(--kh-m3) / 0.18)" stroke="rgb(var(--kh-m3))" strokeWidth={2} strokeLinejoin="round" />
      {values.map((_, i) => {
        const [x, y] = pt(i, R + 12);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight={600} fill="rgb(var(--muted))">
            {i + 1}
          </text>
        );
      })}
    </svg>
  );
}

function ReadingQueue({ outline }: { outline: CourseOutline | null }) {
  const t = useT();
  const state = useCourseState(outline);
  if (!outline || !state) return null;
  const list = readingsForUnit(outline.slug, state.unit.slug).slice(0, 4);
  if (!list.length) return null;
  return (
    <section className="card p-5" aria-labelledby="kh-reading">
      <h2 id="kh-reading" className="font-bold">
        {t("khan.mastery.readingQueue", "Reading queue")}
      </h2>
      <p className="text-[0.8125rem] text-muted">{state.unit.title}</p>
      <ul className="mt-3 space-y-3">
        {list.map((r) => {
          const I = READING_ICON[r.type];
          return (
            <li key={r.url + r.title}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2.5">
                <I className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1 text-sm font-semibold group-hover:text-accent">
                    <span className="line-clamp-2">{r.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                    <span className="sr-only">{t("khan.external", "(opens an external site)")}</span>
                  </span>
                  <span className="block truncate text-xs text-muted">{r.source}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function CaseOfTheWeek({ courses }: { courses: string[] }) {
  const t = useT();
  const catalog = useCatalog();
  const all = allCaseStudies();
  const pool = all.filter((c) => courses.includes(c.course));
  const list = pool.length ? pool : all;
  if (!list.length) return null;
  const week = Math.floor(new Date(weekKey()).getTime() / (7 * 86_400_000));
  const pick = list[((week % list.length) + list.length) % list.length];
  const title = catalog.find((c) => c.slug === pick.course)?.title;
  return (
    <section aria-labelledby="kh-case">
      <SectionHeader id="kh-case" title={t("khan.mastery.caseWeek", "Case study of the week")} sub={title} />
      <CaseStudyCard course={pick.course} study={pick.study} />
    </section>
  );
}
