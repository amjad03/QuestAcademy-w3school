"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { CourseOutline } from "@/content/course";
import { RESOURCES, caseStudiesForUnit, caseStudyHref, readingsForUnit, type CaseStudy, type Competency, type Reading } from "@/content/resources";
import { getPathway } from "@/content/pathways";
import { useLearner, type LearnerState } from "@/lib/store";
import { courseProgress, lessonProgress, unitProgress } from "@/lib/progress";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { useNotebook, titleCase } from "@/lib/notebook-store";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";

type S = Pick<LearnerState, "items" | "mastery" | "lessons" | "assessments" | "challengesPassed">;

const TYPE_LABEL: Record<Reading["type"], string> = { course: "Course", docs: "Documentation", article: "Article", paper: "Paper", book: "Book", video: "Lecture" };
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const PASS = 0.7;

function levelOf(s: S, lessonId: string): MasteryLevel {
  return (s.mastery[lessonId] ?? (s.lessons[lessonId] ? 1 : 0)) as MasteryLevel;
}

/** A plain level name for an average score (0–1). */
function levelForScore(score: number, any: boolean): string {
  if (score >= 1) return MASTERY[4].name;
  if (score >= 0.8) return MASTERY[3].name;
  if (score >= 0.5) return MASTERY[2].name;
  return any ? MASTERY[1].name : MASTERY[0].name;
}

function scoreCompetency(s: S, course: string, c: Competency) {
  const levels = c.lessons.map((id) => levelOf(s, id));
  const score = levels.length ? levels.reduce<number>((a, l) => a + MASTERY[l].points / 100, 0) / levels.length : 0;
  const units = new Set(c.lessons.map((id) => id.split("/")[1]));
  const assessments = [...units].filter((u) => ["quiz", "test"].some((k) => (s.assessments[`${course}/${u}:${k}`] ?? 0) >= PASS)).length;
  const challenges = c.lessons.filter((id) => s.challengesPassed.includes(id)).length;
  return { score, evidence: assessments + challenges, started: levels.some((l) => l > 0) };
}

const fmtDate = (iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) => {
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00` : iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString(undefined, opts);
};

const lessonName = (id: string) => titleCase(id.split("/").pop() ?? id);

/** Research home: a calm desk — what you were reading, what to read next, your notes and where you stand. */
export function ResearchHome() {
  const catalog = useCatalog();
  const s = useLearner();
  const current = s.profile.course ?? s.subjectsStarted[0] ?? null;
  const outline = useOutline(current);
  const titles = useMemo(() => Object.fromEntries(catalog.map((c) => [c.slug, c.title])), [catalog]);

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const first = s.profile.name?.split(" ")[0];
  const today = now.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="mx-auto max-w-[1120px] px-4 pb-10 pt-10 sm:px-6 lg:pt-14">
      <header className="border-b border-line pb-6">
        <p className="rs-sc text-sm text-muted">{today}</p>
        <h1 className="mt-1 text-[2.1rem] leading-tight sm:text-[2.5rem]">Workspace</h1>
        <p className="rs-serif mt-2 text-[1.05rem] text-muted">
          {greeting}
          {first ? `, ${first}` : ""}. {current ? "Your reading, notes and progress, in one place." : "Choose a course to set up your desk."}
        </p>
      </header>

      {!current ? (
        <EmptyDesk />
      ) : (
        <div className="mt-10 grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-12">
            <ContinueReading outline={outline} s={s} title={titles[current] ?? titleCase(current)} />
            <ReadingList outline={outline} s={s} />
            <CaseStudies outline={outline} s={s} />
            <Competencies outline={outline} s={s} course={current} />
          </div>
          <aside className="min-w-0 space-y-12" aria-label="Notebook and plan">
            <PlanSummary titles={titles} />
            <NotebookExcerpts />
            <OtherCourses current={current} titles={titles} />
          </aside>
        </div>
      )}
    </div>
  );
}

function Section({ title, aside, children, id }: { title: string; aside?: React.ReactNode; children: React.ReactNode; id: string }) {
  return (
    <section aria-labelledby={id}>
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
        <h2 id={id} className="text-[1.25rem]">
          {title}
        </h2>
        {aside && <div className="shrink-0 text-[0.82rem] text-muted">{aside}</div>}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Pending() {
  return <p className="text-sm text-muted" aria-busy>Loading…</p>;
}

function nextLesson(s: S, outline: CourseOutline) {
  const cp = courseProgress(s, outline);
  const lesson = cp.next ?? outline.units[0].lessons[0];
  const unit = outline.units.find((u) => u.slug === lesson.unitSlug) ?? outline.units[0];
  return { cp, lesson, unit };
}

function ContinueReading({ outline, s, title }: { outline: CourseOutline | null; s: S; title: string }) {
  if (!outline)
    return (
      <Section id="rs-continue" title="Continue reading">
        <Pending />
      </Section>
    );
  const { cp, lesson, unit } = nextLesson(s, outline);
  const item = lessonProgress(s, lesson).nextItem;
  return (
    <Section id="rs-continue" title="Continue reading" aside={`${cp.complete} of ${cp.total} lessons read`}>
      <p className="rs-sc text-sm text-muted">
        <Link href={outline.href}>{title}</Link> · Unit {unit.index + 1}, {unit.title}
      </p>
      <h3 className="rs-serif mt-1 text-[1.6rem] font-semibold leading-snug">
        <Link href={item.href} className="hover:text-accent">
          {lesson.title}
        </Link>
      </h3>
      {lesson.summary && <p className="rs-serif mt-2 max-w-[62ch] text-[1.02rem] leading-relaxed text-ink/85">{lesson.summary}</p>}
      <p className="mt-2 text-[0.82rem] text-muted">About {lesson.minutes} minutes · {lesson.items.length} parts</p>
      <div className="mt-4 h-px w-full bg-line" aria-hidden>
        <div className="h-px bg-accent" style={{ width: `${Math.round((cp.complete / Math.max(1, cp.total)) * 100)}%` }} />
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem]">
        <Link href={item.href} className="rs-link font-medium">
          {cp.complete ? "Resume reading" : "Begin reading"}
        </Link>
        <Link href={outline.href} className="text-muted hover:text-ink">
          Course contents
        </Link>
      </div>
    </Section>
  );
}

function ReadingList({ outline, s }: { outline: CourseOutline | null; s: S }) {
  if (!outline)
    return (
      <Section id="rs-readings" title="Reading list">
        <Pending />
      </Section>
    );
  const { unit } = nextLesson(s, outline);
  let list = readingsForUnit(outline.slug, unit.slug);
  let scope = `Unit ${unit.index + 1}`;
  if (!list.length && RESOURCES[outline.slug]) {
    list = Object.values(RESOURCES[outline.slug].readings).flat();
    scope = "Whole course";
  }
  return (
    <Section id="rs-readings" title="Reading list" aside={list.length ? scope : undefined}>
      {list.length ? (
        <ol className="space-y-4">
          {list.slice(0, 5).map((r, i) => (
            <li key={r.url + r.title} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2">
              <span className="rs-serif rs-num pt-[1px] text-muted">{i + 1}.</span>
              <div className="min-w-0">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="rs-serif text-[1.02rem] font-semibold text-ink hover:text-accent">
                  {r.title}
                  <span className="sr-only"> (opens an external site)</span>
                </a>
                <p className="text-[0.8rem] text-muted">
                  {r.source} · {TYPE_LABEL[r.type]} · {r.level}
                </p>
                {r.note && <p className="rs-serif mt-1 text-[0.95rem] leading-relaxed text-ink/80">{r.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-[0.92rem] text-muted">
          There is no curated reading list for this course yet. The <Link href="/library" className="rs-link">Library</Link> holds the full collection.
        </p>
      )}
    </Section>
  );
}

function CaseStudies({ outline, s }: { outline: CourseOutline | null; s: S }) {
  if (!outline) return null;
  const res = RESOURCES[outline.slug];
  if (!res?.caseStudies.length) return null;
  const { unit } = nextLesson(s, outline);
  const forUnit = caseStudiesForUnit(outline.slug, unit.slug);
  const list: CaseStudy[] = [...forUnit, ...res.caseStudies.filter((c) => !forUnit.includes(c))].slice(0, 3);
  return (
    <Section id="rs-cases" title="Case studies" aside={`${res.caseStudies.length} in this course`}>
      <ul className="divide-y divide-line">
        {list.map((c) => (
          <li key={c.slug} className="py-3 first:pt-0">
            <Link href={caseStudyHref(outline.slug, c.slug)} className="rs-serif text-[1.05rem] font-semibold text-ink hover:text-accent">
              {c.title}
            </Link>
            <p className="rs-serif mt-0.5 text-[0.95rem] leading-relaxed text-ink/80">{c.summary}</p>
            <p className="mt-1 text-[0.8rem] text-muted">
              {c.minutes} min · {c.questions.length} question{c.questions.length === 1 ? "" : "s"} for analysis{forUnit.includes(c) ? " · relates to your current unit" : ""}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Competencies({ outline, s, course }: { outline: CourseOutline | null; s: S; course: string }) {
  const res = RESOURCES[course];
  if (res?.competencies.length) {
    const rows = res.competencies.map((c) => ({ c, ...scoreCompetency(s, course, c) }));
    return (
      <Section id="rs-comp" title="Competencies" aside="Derived from lesson mastery and assessments">
        <div className="overflow-x-auto">
          <table className="rs-table min-w-[480px]">
            <caption className="sr-only">Competency overview for the current course</caption>
            <thead>
              <tr>
                <th scope="col">Competency</th>
                <th scope="col">Level</th>
                <th scope="col" className="rs-r">Evidence</th>
                <th scope="col" className="rs-r">Score</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.c.id}>
                  <td>
                    <span className="font-medium">{r.c.name}</span>
                    <span className="mt-0.5 block text-[0.78rem] leading-snug text-muted">{r.c.description}</span>
                  </td>
                  <td className="whitespace-nowrap">{levelForScore(r.score, r.started)}</td>
                  <td className="rs-r">{r.evidence}</td>
                  <td className="rs-r">{Math.round(r.score * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    );
  }
  if (!outline) return null;
  return (
    <Section id="rs-comp" title="Progress by unit">
      <div className="overflow-x-auto">
        <table className="rs-table min-w-[420px]">
          <caption className="sr-only">Mastery by unit for the current course</caption>
          <thead>
            <tr>
              <th scope="col">Unit</th>
              <th scope="col" className="rs-r">Lessons read</th>
              <th scope="col" className="rs-r">Mastery</th>
            </tr>
          </thead>
          <tbody>
            {outline.units.map((u) => {
              const up = unitProgress(s, u);
              return (
                <tr key={u.slug}>
                  <td>
                    <Link href={u.href} className="hover:text-accent">
                      {u.index + 1}. {u.title}
                    </Link>
                  </td>
                  <td className="rs-r">
                    {up.complete}/{up.total}
                  </td>
                  <td className="rs-r">{Math.round(up.pct * 100)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function PlanSummary({ titles }: { titles: Record<string, string> }) {
  const plan = useLearner((s) => s.plan);
  if (!plan)
    return (
      <Section id="rs-plan" title="Study plan">
        <p className="text-[0.9rem] text-muted">No plan yet. A plan spreads lessons and revision across the days you choose, up to a target date.</p>
        <Link href="/plan" className="rs-link mt-3 inline-block text-[0.9rem] font-medium">
          Draft a study plan
        </Link>
      </Section>
    );
  const scopeTitle =
    plan.scope.type === "course" ? (titles[plan.scope.id] ?? titleCase(plan.scope.id)) : plan.scope.type === "pathway" ? (getPathway(plan.scope.id)?.title ?? titleCase(plan.scope.id)) : `Syllabus ${plan.scope.id.replace(":", ", ")}`;
  const target = new Date(`${plan.targetDate}T00:00:00`);
  const days = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
  return (
    <Section id="rs-plan" title="Study plan">
      <dl className="space-y-2 text-[0.9rem]">
        <Row label="Scope" value={scopeTitle} />
        <Row label="Target" value={`${fmtDate(plan.targetDate)}${days > 0 ? ` (${days} days)` : days === 0 ? " (today)" : " (passed)"}`} />
        <Row label="Time" value={`${plan.hoursPerWeek} h a week`} />
        <Row label="Days" value={plan.studyDays.map((d) => DAY[d]).join(", ")} />
      </dl>
      <Link href="/plan" className="rs-link mt-3 inline-block text-[0.9rem] font-medium">
        Open the plan
      </Link>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-2">
      <dt className="rs-sc text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function NotebookExcerpts() {
  const notes = useNotebook((s) => s.notes);
  const bookmarks = useNotebook((s) => s.bookmarks);
  const doubts = useNotebook((s) => s.doubts);
  const recent = Object.entries(notes)
    .sort((a, b) => b[1].updatedAt.localeCompare(a[1].updatedAt))
    .slice(0, 3);
  const marks = Object.entries(bookmarks)
    .sort((a, b) => b[1].addedAt.localeCompare(a[1].addedAt))
    .slice(0, 4);
  const open = doubts.filter((d) => !d.resolved);
  const empty = !recent.length && !marks.length && !open.length;
  return (
    <Section id="rs-notebook" title="Notebook" aside={<Link href="/notebook" className="hover:text-ink">Open</Link>}>
      {empty ? (
        <p className="text-[0.9rem] text-muted">Notes, bookmarks and open questions you record while reading appear here.</p>
      ) : (
        <div className="space-y-6">
          {recent.length > 0 && (
            <div>
              <p className="eyebrow">Recent notes</p>
              <ul className="mt-2 space-y-4">
                {recent.map(([id, n]) => (
                  <li key={id}>
                    <blockquote className="rs-serif border-l border-line pl-3 text-[0.95rem] italic leading-relaxed text-ink/85">
                      {n.text.length > 180 ? `${n.text.slice(0, 180).trimEnd()}…` : n.text}
                    </blockquote>
                    <p className="mt-1 pl-3 text-[0.78rem] text-muted">
                      <Link href={`/course/${id}`}>{lessonName(id)}</Link> · {fmtDate(n.updatedAt, { day: "numeric", month: "short" })}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {marks.length > 0 && (
            <div>
              <p className="eyebrow">Bookmarked</p>
              <ul className="mt-2 space-y-1.5 text-[0.9rem]">
                {marks.map(([id, b]) => (
                  <li key={id}>
                    <Link href={b.href} className="text-ink hover:text-accent">
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {open.length > 0 && (
            <div>
              <p className="eyebrow">Open questions ({open.length})</p>
              <ul className="mt-2 space-y-1.5 text-[0.9rem]">
                {open.slice(0, 3).map((d) => (
                  <li key={d.id}>
                    <Link href={`/course/${d.lessonId}`} className="text-ink hover:text-accent">
                      {d.title}
                    </Link>
                    <span className="block text-[0.78rem] text-muted">{lessonName(d.lessonId)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Section>
  );
}

function OtherCourses({ current, titles }: { current: string; titles: Record<string, string> }) {
  const catalog = useCatalog();
  const hrefOf = (slug: string) => catalog.find((c) => c.slug === slug)?.href ?? "/courses";
  const started = useLearner((s) => s.subjectsStarted);
  const setProfile = useLearner((s) => s.setProfile);
  const others = [...new Set(started)].filter((c) => c !== current && titles[c]);
  if (!others.length) return null;
  return (
    <Section id="rs-others" title="Other courses">
      <ul className="space-y-1.5 text-[0.9rem]">
        {others.slice(0, 6).map((c) => (
          <li key={c} className="flex items-baseline justify-between gap-3">
            <Link href={hrefOf(c)} className="min-w-0 truncate text-ink hover:text-accent">
              {titles[c]}
            </Link>
            <button type="button" onClick={() => setProfile({ course: c })} className="rs-textbtn rs-textbtn-muted shrink-0 !p-0 text-[0.78rem]">
              Set as current
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function EmptyDesk() {
  const catalog = useCatalog();
  const withResources = catalog.filter((c) => RESOURCES[c.slug]);
  const list = (withResources.length ? withResources : catalog).slice(0, 10);
  return (
    <section className="mt-10 max-w-[68ch]" aria-labelledby="rs-begin">
      <h2 id="rs-begin" className="text-[1.25rem]">
        Begin a course
      </h2>
      <p className="rs-serif mt-2 text-[1.02rem] leading-relaxed text-ink/85">
        Each course below comes with a reading list, case studies and a competency map. Open one and your desk will fill in as you read.
      </p>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {list.map((c) => (
          <li key={c.slug} className="flex items-baseline justify-between gap-4 py-3">
            <Link href={c.href} className="rs-serif min-w-0 text-[1.05rem] font-semibold text-ink hover:text-accent">
              {c.title}
            </Link>
            <span className="shrink-0 text-[0.8rem] text-muted">
              {c.units} units · {c.lessons} lessons
            </span>
          </li>
        ))}
      </ul>
      <Link href="/courses" className="rs-link mt-5 inline-block text-[0.9rem] font-medium">
        All courses
      </Link>
    </section>
  );
}
