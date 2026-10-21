"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarCheck, Code2, FileCheck2, Terminal } from "lucide-react";
import clsx from "clsx";
import type { CourseOutline } from "@/content/course";
import type { Competency } from "@/content/resources";
import { RESOURCES, allCaseStudies, readingsForUnit } from "@/content/resources";
import { useLearner, liveStreak, type LearnerState } from "@/lib/store";
import { courseProgress, lessonProgress } from "@/lib/progress";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { weekKey } from "@/lib/gamification";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { CaseStudyCard, READING_ICON } from "@/components/mastery/ResourcesPanel";

type S = Pick<LearnerState, "items" | "mastery" | "lessons" | "assessments" | "challengesPassed">;

const PASS = 0.7;

function levelOf(s: S, lessonId: string): MasteryLevel {
  return (s.mastery[lessonId] ?? (s.lessons[lessonId] ? 1 : 0)) as MasteryLevel;
}

/** Score (0–1) and evidence (assessments + challenges passed) for one competency. */
function scoreCompetency(s: S, course: string, c: Competency) {
  const pts = c.lessons.map((id) => MASTERY[levelOf(s, id)].points / 100);
  const score = pts.length ? pts.reduce((a, b) => a + b, 0) / pts.length : 0;
  const units = new Set(c.lessons.map((id) => id.split("/")[1]));
  const assessments = [...units].filter((u) => ["quiz", "test"].some((k) => (s.assessments[`${course}/${u}:${k}`] ?? 0) >= PASS)).length;
  const challenges = c.lessons.filter((id) => s.challengesPassed.includes(id)).length;
  return { score, evidence: assessments + challenges };
}

const titleCase = (slug: string) => slug.replace(/-/g, " ").replace(/^\w/, (m) => m.toUpperCase());

/** Mastery mode (college & university): competency tracking, case studies, research and coding workspaces. */
export function MasteryHome() {
  const catalog = useCatalog();
  const s = useLearner();
  const name = s.profile.name;
  const streak = liveStreak(s);
  const weeklyXp = s.weekly.week === weekKey() ? s.weekly.xp : 0;

  // Courses with Mastery resources the learner has started (current course first).
  const started = useMemo(() => {
    const list = [s.profile.course, ...s.subjectsStarted].filter((c): c is string => Boolean(c && RESOURCES[c]));
    return [...new Set(list)];
  }, [s.profile.course, s.subjectsStarted]);
  const current = started[0] ?? null;
  const outline = useOutline(current);
  const [focus, setFocus] = useState<string | null>(null);
  const dashCourse = focus && started.includes(focus) ? focus : current;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  if (!current) {
    const suggestions = catalog.filter((c) => RESOURCES[c.slug]).slice(0, 6);
    return (
      <PageColumns rail={<RailFooter />}>
        <h1 className="text-2xl font-black">{greeting}{name ? `, ${name.split(" ")[0]}` : ""}</h1>
        <p className="mt-1 font-semibold text-muted">Choose a course to start tracking your competencies.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {suggestions.map((c) => (
            <Link key={c.slug} href={c.href} className="tile flex items-center gap-4 p-4 transition hover:border-accent">
              <CourseIcon slug={c.slug} size={40} />
              <span className="min-w-0">
                <span className="block truncate font-black">{c.title}</span>
                <span className="block truncate text-sm font-semibold text-muted">{c.lessons} lessons · {RESOURCES[c.slug].caseStudies.length} case studies</span>
              </span>
            </Link>
          ))}
        </div>
        <Link href="/courses" className="btn-ghost mt-5">
          Browse all courses
        </Link>
      </PageColumns>
    );
  }

  const assessmentsPassed = Object.values(s.assessments).filter((v) => v >= PASS).length;
  const skillsMastered = Object.values(s.mastery).filter((l) => l >= 4).length;

  return (
    <PageColumns
      wide
      rail={
        <>
          <RailCard title="This week">
            <dl className="space-y-2.5 text-sm">
              <Stat label="XP earned" value={weeklyXp.toLocaleString()} />
              <Stat label="Study streak" value={`${streak} day${streak === 1 ? "" : "s"}`} />
              <Stat label="Skills mastered" value={String(skillsMastered)} />
              <Stat label="Assessments passed" value={String(assessmentsPassed)} />
              <Stat label="Challenges solved" value={String(s.challengesPassed.length)} />
            </dl>
          </RailCard>
          <StudyPlanCard hasPlan={Boolean(s.plan)} />
          <RailFooter />
        </>
      }
    >
      <header>
        <h1 className="text-2xl font-black">
          {greeting}
          {name ? `, ${name.split(" ")[0]}` : ""}
        </h1>
        <p className="mt-1 font-semibold text-muted">Here's where your competencies stand and what's worth doing next.</p>
      </header>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_1fr]">
        <ContinueCard outline={outline} s={s} />
        <WorkspaceCard s={s} outline={outline} />
      </div>

      <CompetencyDashboard s={s} courses={started} course={dashCourse ?? current} onPick={setFocus} titles={Object.fromEntries(catalog.map((c) => [c.slug, c.title]))} />

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <AssessmentsDue outline={outline} s={s} />
        <ReadingQueue outline={outline} s={s} />
      </div>

      <CaseOfTheWeek courses={started} />

      <div className="mt-6 lg:hidden">
        <StudyPlanCard hasPlan={Boolean(s.plan)} />
      </div>
    </PageColumns>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="font-semibold text-muted">{label}</dt>
      <dd className="font-bold tabular-nums">{value}</dd>
    </div>
  );
}

function StudyPlanCard({ hasPlan }: { hasPlan: boolean }) {
  return (
    <Link href="/plan" className="card flex items-center gap-4 p-5 transition hover:border-accent">
      <CalendarCheck className="h-6 w-6 shrink-0 text-accent" />
      <span className="min-w-0 flex-1">
        <span className="block font-black">{hasPlan ? "Your study plan" : "Build a study plan"}</span>
        <span className="block text-sm font-semibold text-muted">{hasPlan ? "See today's sessions and deadlines." : "Schedule lessons and revision around your exams."}</span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
    </Link>
  );
}

function ContinueCard({ outline, s }: { outline: CourseOutline | null; s: S }) {
  if (!outline) return <section className="card h-40 animate-pulse p-5" aria-busy />;
  const cp = courseProgress(s, outline);
  const next = cp.next ?? outline.units[0].lessons[0];
  const unit = outline.units.find((u) => u.slug === next.unitSlug);
  const item = lessonProgress(s, next).nextItem;
  return (
    <section className="card flex flex-col p-5">
      <div className="flex items-center gap-3">
        <CourseIcon slug={outline.slug} size={36} />
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Continue</p>
          <Link href={outline.href} className="block truncate font-black hover:text-accent">
            {outline.title}
          </Link>
        </div>
        <span className="text-sm font-bold tabular-nums text-muted">{Math.round(cp.pct * 100)}%</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-accent" style={{ width: `${Math.max(2, cp.pct * 100)}%` }} />
      </div>
      <h3 className="mt-4 font-black leading-snug">{next.title}</h3>
      <p className="mt-0.5 text-sm font-semibold text-muted">
        {unit ? `${unit.title} · ` : ""}
        {next.minutes} min
      </p>
      <div className="mt-auto pt-4">
        <Link href={item.href} className="btn-primary">
          {cp.complete ? "Continue" : "Start"} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function WorkspaceCard({ s, outline }: { s: S; outline: CourseOutline | null }) {
  const recent = [...s.challengesPassed].reverse().slice(0, 3);
  const nextChallenge = outline?.units
    .flatMap((u) => u.lessons)
    .flatMap((l) => l.items.filter((i) => i.kind === "challenge").map((i) => ({ lesson: l, item: i })))
    .find(({ lesson }) => !s.challengesPassed.includes(lesson.id));
  return (
    <section className="card flex flex-col p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2">
          <Terminal className="h-5 w-5 text-accent" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Coding workspace</p>
          <h2 className="font-black">Playground</h2>
        </div>
        <Link href="/code/playground" className="btn-ghost !px-3 !py-1.5 text-xs">
          Open <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      {nextChallenge && (
        <Link href={nextChallenge.item.href} className="mt-4 flex items-center gap-3 rounded-lg border-2 border-line px-3 py-2.5 transition hover:border-accent">
          <Code2 className="h-4 w-4 shrink-0 text-muted" />
          <span className="min-w-0 flex-1 truncate text-sm font-bold">Next: {nextChallenge.item.title}</span>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
        </Link>
      )}
      <h3 className="mt-4 text-sm font-bold text-muted">Recent challenges</h3>
      {recent.length ? (
        <ul className="mt-2 space-y-1.5">
          {recent.map((id) => {
            const [course, unit, lesson] = id.split("/");
            return (
              <li key={id}>
                <Link href={`/course/${course}/${unit}/${lesson}?item=challenge`} className="flex items-center gap-2 text-sm font-semibold hover:text-accent">
                  <CourseIcon slug={course} size={18} />
                  <span className="truncate">{titleCase(lesson)}</span>
                  <span className="ml-auto shrink-0 text-xs text-good">Passed</span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-1 text-sm font-semibold text-muted">Solve a coding challenge in any lesson and it'll appear here.</p>
      )}
    </section>
  );
}

function CompetencyDashboard({ s, courses, course, onPick, titles }: { s: S; courses: string[]; course: string; onPick: (c: string) => void; titles: Record<string, string> }) {
  const res = RESOURCES[course];
  const rows = res.competencies.map((c) => ({ c, ...scoreCompetency(s, course, c) }));
  const avg = rows.length ? rows.reduce((a, r) => a + r.score, 0) / rows.length : 0;
  const evidence = rows.reduce((a, r) => a + r.evidence, 0);

  return (
    <section className="card mt-6 p-5" aria-labelledby="competencies-h">
      <div className="flex flex-wrap items-center gap-3">
        <div className="min-w-0 flex-1">
          <h2 id="competencies-h" className="text-lg font-black">
            Competencies
          </h2>
          <p className="text-sm font-semibold text-muted">
            {Math.round(avg * 100)}% average mastery · {evidence} piece{evidence === 1 ? "" : "s"} of evidence
          </p>
        </div>
        {courses.length > 1 && (
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Course">
            {courses.map((c) => (
              <button key={c} role="tab" aria-selected={c === course} onClick={() => onPick(c)} className={clsx("chip transition", c === course ? "!border-accent !text-accent" : "hover:text-accent")}>
                {titles[c] ?? titleCase(c)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 grid items-center gap-6 md:grid-cols-[220px_1fr]">
        {rows.length >= 3 ? <Radar values={rows.map((r) => r.score)} /> : <div />}
        <ol className="space-y-3">
          {rows.map((r, i) => {
            const first = r.c.lessons[0]?.split("/");
            return (
              <li key={r.c.id}>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="w-4 shrink-0 text-xs font-bold tabular-nums text-muted">{i + 1}</span>
                  <Link href={first ? `/course/${first[0]}/${first[1]}/${first[2]}` : "#"} className="min-w-0 flex-1 truncate font-bold hover:text-accent" title={r.c.description}>
                    {r.c.name}
                  </Link>
                  <span className="shrink-0 text-xs font-semibold text-muted">{r.evidence ? `${r.evidence} evidence` : "no evidence yet"}</span>
                  <span className="w-10 shrink-0 text-right font-bold tabular-nums">{Math.round(r.score * 100)}%</span>
                </div>
                <div className="ml-6 mt-1 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={Math.round(r.score * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={r.c.name}>
                  <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${r.score * 100}%` }} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/** Compact radar chart; axes are numbered to match the list beside it. */
function Radar({ values }: { values: number[] }) {
  const n = values.length;
  const R = 80;
  const C = 105;
  const pt = (i: number, r: number) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [C + Math.cos(a) * r, C + Math.sin(a) * r] as const;
  };
  const ring = (f: number) => values.map((_, i) => pt(i, R * f).join(",")).join(" ");
  const shape = values.map((v, i) => pt(i, R * Math.max(0.03, v)).join(",")).join(" ");
  return (
    <svg viewBox="0 0 210 210" className="mx-auto w-full max-w-[220px]" role="img" aria-label={`Competency radar: ${values.map((v, i) => `${i + 1}: ${Math.round(v * 100)}%`).join(", ")}`}>
      {[0.25, 0.5, 0.75, 1].map((f) => (
        <polygon key={f} points={ring(f)} fill="none" stroke="rgb(var(--line))" strokeWidth={1} />
      ))}
      {values.map((_, i) => {
        const [x, y] = pt(i, R);
        return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="rgb(var(--line))" strokeWidth={1} />;
      })}
      <polygon points={shape} fill="rgb(var(--accent) / 0.18)" stroke="rgb(var(--accent))" strokeWidth={2} strokeLinejoin="round" />
      {values.map((v, i) => {
        const [x, y] = pt(i, R * Math.max(0.03, v));
        return <circle key={i} cx={x} cy={y} r={2.5} fill="rgb(var(--accent))" />;
      })}
      {values.map((_, i) => {
        const [x, y] = pt(i, R + 13);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight={600} fill="rgb(var(--muted))">
            {i + 1}
          </text>
        );
      })}
    </svg>
  );
}

function AssessmentsDue({ outline, s }: { outline: CourseOutline | null; s: S }) {
  if (!outline) return <section className="card h-40 animate-pulse p-5" aria-busy />;
  const due = outline.units
    .filter((u) => u.lessons.some((l) => levelOf(s, l.id) > 0) && s.assessments[u.test.key] === undefined)
    .slice(0, 3);
  const allTaken = outline.units.every((u) => s.assessments[u.test.key] !== undefined);
  return (
    <section className="card p-5">
      <h2 className="font-black">Assessments due</h2>
      {due.length ? (
        <ul className="mt-3 divide-y-2 divide-line">
          {due.map((u) => (
            <li key={u.slug} className="flex items-center gap-3 py-2.5">
              <FileCheck2 className="h-4 w-4 shrink-0 text-muted" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">Unit test · {u.title}</span>
                <span className="block text-xs font-semibold text-muted">{u.test.questions} questions · can raise skills to Mastered</span>
              </span>
              <Link href={u.test.href} className="text-sm font-bold text-accent hover:underline">
                Take
              </Link>
            </li>
          ))}
        </ul>
      ) : allTaken ? (
        <div className="mt-3 flex items-center gap-3">
          <p className="min-w-0 flex-1 text-sm font-semibold text-muted">Every unit test is done. The course challenge checks it all at once.</p>
          <Link href={outline.challenge.href} className="text-sm font-bold text-accent hover:underline">
            Start
          </Link>
        </div>
      ) : (
        <p className="mt-2 text-sm font-semibold text-muted">Unit tests show up here once you've started a unit.</p>
      )}
    </section>
  );
}

function ReadingQueue({ outline, s }: { outline: CourseOutline | null; s: S }) {
  if (!outline) return <section className="card h-40 animate-pulse p-5" aria-busy />;
  const next = courseProgress(s, outline).next ?? outline.units[0].lessons[0];
  const unit = outline.units.find((u) => u.slug === next.unitSlug) ?? outline.units[0];
  const list = readingsForUnit(outline.slug, unit.slug).slice(0, 3);
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-black">Reading queue</h2>
        <Link href={unit.href} className="text-xs font-semibold text-muted hover:text-accent">
          {unit.title}
        </Link>
      </div>
      {list.length ? (
        <ul className="mt-3 space-y-2.5">
          {list.map((r) => {
            const I = READING_ICON[r.type];
            return (
              <li key={r.url + r.title}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2.5">
                  <I className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1 text-sm font-bold group-hover:text-accent">
                      <span className="truncate">{r.title}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
                      <span className="sr-only">(opens an external site)</span>
                    </span>
                    <span className="block truncate text-xs font-semibold text-muted">{r.source}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-2 text-sm font-semibold text-muted">No readings for this unit yet.</p>
      )}
    </section>
  );
}

function CaseOfTheWeek({ courses }: { courses: string[] }) {
  const all = allCaseStudies();
  const pool = all.filter((c) => courses.includes(c.course));
  const list = pool.length ? pool : all;
  if (!list.length) return null;
  const week = Math.floor(new Date(weekKey()).getTime() / (7 * 24 * 3600 * 1000));
  const pick = list[((week % list.length) + list.length) % list.length];
  return (
    <section className="mt-6">
      <h2 className="mb-3 font-black">Case study of the week</h2>
      <CaseStudyCard course={pick.course} study={pick.study} />
    </section>
  );
}
