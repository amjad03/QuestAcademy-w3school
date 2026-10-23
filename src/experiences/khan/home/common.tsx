"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import clsx from "clsx";
import { ArrowRight, BookOpen, Code2, Eye, FileText, Languages, Layers, Map as MapIcon, Plus, SquarePen, Video, X } from "lucide-react";
import type { ItemKind } from "@/content/course";
import { LOCALES, translate, useT, type Locale } from "@/i18n";
import { useContentDict, useSharedText } from "@/i18n/content";
import { useLearner, liveStreak } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { itemDone, lessonProgress } from "@/lib/progress";
import { useMode } from "@/lib/useMode";
import type { ModeId } from "@/lib/modes";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { CourseCard, MasteryLegend, SectionHeader, SkillSquares, explainerMaxAge, useCourseState, useExplainerIndex, useFmt, useGreeting, useMyCourses, type Skill } from "../ui";

/** Lesson item kind in the learner's language. */
function itemLabel(t: ReturnType<typeof useT>, kind: ItemKind) {
  const labels: Record<ItemKind, string> = {
    video: t("lesson.item.video", "Video"),
    article: t("lesson.item.article", "Article"),
    practice: t("lesson.item.practice", "Practice"),
    cards: t("lesson.item.cards", "Flashcards"),
    challenge: t("lesson.item.challenge", "Coding challenge"),
  };
  return labels[kind];
}

/* ------------------------------------------------------------------ */
/* Page frame                                                          */
/* ------------------------------------------------------------------ */

/** Home page body: main column + right rail (rail drops below on small screens). */
export function HomeFrame({ children, rail, top }: { children: ReactNode; rail?: ReactNode; top?: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-12 pt-6 sm:px-5 lg:px-8 lg:pt-8">
      {top}
      <div className={clsx("grid gap-8", rail && "lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-10")}>
        <div className="min-w-0 space-y-10">{children}</div>
        {rail && <aside className="min-w-0 space-y-6">{rail}</aside>}
      </div>
    </div>
  );
}

/** Greeting header: date, "Good evening, Asha", a stage-specific line and optional stats. */
export function Greeting({ title, sub, aside }: { title?: ReactNode; sub?: ReactNode; aside?: ReactNode }) {
  const greeting = useGreeting();
  const f = useFmt();
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(f.date(new Date(), { weekday: "long", day: "numeric", month: "long" }));
  }, [f]);
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-5 border-b border-line pb-6">
      <div className="min-w-0">
        <p className="text-sm text-muted" suppressHydrationWarning>
          {today || " "}
        </p>
        <h1 className="mt-1 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]">{title ?? greeting}</h1>
        {sub && <p className="mt-1.5 max-w-[60ch] text-[0.9375rem] text-muted">{sub}</p>}
      </div>
      {aside && <div className="min-w-0">{aside}</div>}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Up next                                                             */
/* ------------------------------------------------------------------ */

const ITEM_ICON: Record<ItemKind, typeof Video> = { video: Video, article: FileText, practice: SquarePen, cards: Layers, challenge: Code2 };

/**
 * Navy "Up next for you" panel. By default it follows the learner's current
 * course; Focus passes the next lesson from their board syllabus instead.
 */
export function UpNextHero({ lessonId, context, eyebrow, secondary }: { lessonId?: string | null; context?: string; eyebrow?: string; secondary?: { href: string; label: string } }) {
  const t = useT();
  const f = useFmt();
  const mine = useMyCourses(1);
  const slug = lessonId ? lessonId.split("/")[0] : (mine[0]?.slug ?? null);
  const outline = useOutline(slug);
  const state = useCourseState(outline);
  const explainers = useExplainerIndex();
  const explainerDict = useContentDict("explainers");
  const tx = useSharedText();
  const dict = useContentDict(slug ?? "");
  const tc = (s: string) => dict?.[s] ?? s;

  if (!slug) return <StartCourse />;
  if (!outline || !state) return <div className="kh-hero h-[236px] animate-pulse" aria-busy aria-label={t("khan.loading", "Loading")} />;

  const all = outline.units.flatMap((u) => u.lessons);
  const lesson = (lessonId && all.find((l) => l.id === lessonId)) || state.next;
  if (!lesson) return null;
  const unit = outline.units.find((u) => u.slug === lesson.unitSlug) ?? state.unit;
  const lp = lessonProgress(state.st, lesson);
  const started = lp.itemsDone > 0 || lp.level > 0;
  const unitSkills: Skill[] = unit.lessons.map((l) => ({ id: l.id, title: tc(l.title), level: state.cp.levels[l.id] ?? 0, href: l.href }));
  const unitDone = unit.lessons.filter((l) => lessonProgress(state.st, l).complete).length;
  const seeIt = explainers?.byLesson[lesson.id]?.[0];
  const seeItMeta = seeIt ? explainers?.all.find((e) => e.id === seeIt) : null;

  return (
    <section className="kh-hero" aria-labelledby="kh-upnext">
      <HeroArt />
      <div className="relative grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] md:gap-10">
        <div className="min-w-0">
          <p className="kh-keep-case text-xs font-bold uppercase tracking-[0.08em] text-white/70">{eyebrow ?? t("khan.upNextForYou", "Up next for you")}</p>
          <p className="kh-hero-muted mt-3 text-sm">
            {context ?? (
              <>
                <Link href={outline.href} className="font-semibold text-white hover:underline">
                  {dict?.[outline.title] ?? tx(outline.title)}
                </Link>{" "}
                · {t("khan.unitN", "Unit {n}", { n: f.n(unit.index + 1) })}: {tc(unit.title)}
              </>
            )}
          </p>
          <h2 id="kh-upnext" className="mt-1.5 text-[1.5rem] font-bold leading-snug sm:text-[1.75rem]">
            {tc(lesson.title)}
          </h2>
          {lesson.summary && <p className="kh-hero-muted mt-2 line-clamp-2 max-w-[62ch] text-[0.9375rem]">{tc(lesson.summary)}</p>}
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={t("khan.inThisLesson", "In this lesson")}>
            {lesson.items.map((it) => {
              const I = ITEM_ICON[it.kind];
              const done = itemDone(state.st, lesson.id, it);
              return (
                <li key={it.id} className={clsx("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", done ? "border-white/20 text-white/60 line-through" : "border-white/30 text-white")}>
                  <I className="h-3.5 w-3.5" aria-hidden />
                  {itemLabel(t, it.kind)}
                  <span className="text-white/60">· {t("khan.minShort", "{n} min", { n: f.n(it.minutes) })}</span>
                </li>
              );
            })}
            {seeItMeta && (
              <li>
                <Link href={`/explain/${seeItMeta.id}`} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white hover:bg-white/25">
                  <Eye className="h-3.5 w-3.5" aria-hidden />
                  {t("khan.seeItChip", "See it: {title}", { title: explainerDict?.[seeItMeta.title] ?? seeItMeta.title })}
                </Link>
              </li>
            )}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={lp.nextItem.href} className="btn-primary">
              {started ? t("khan.continueLesson", "Continue lesson") : t("khan.startLesson", "Start lesson")} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href={secondary?.href ?? outline.href} className="kh-hero-ghost">
              {secondary?.label ?? t("khan.viewCourse", "View course")}
            </Link>
          </div>
        </div>
        <div className="min-w-0 self-end rounded-lg border border-white/15 bg-white/[0.06] p-4">
          <p className="text-sm font-semibold">{t("khan.unitProgress", "Unit {n} progress", { n: f.n(unit.index + 1) })}</p>
          <p className="kh-hero-muted mt-0.5 text-xs">{t("khan.lessonsDone", "{done} of {total} lessons complete", { done: f.n(unitDone), total: f.n(unit.lessons.length) })}</p>
          <SkillSquares skills={unitSkills} size={16} className="mt-3" label={t("khan.unitSkills", "Skills in this unit")} />
        </div>
      </div>
    </section>
  );
}

/** Quiet geometric artwork behind the hero (decorative). */
function HeroArt() {
  return (
    <svg className="pointer-events-none absolute -right-16 -top-20 h-[320px] w-[320px] text-white opacity-[0.07]" viewBox="0 0 200 200" aria-hidden>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 100h192M100 4v192" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const STARTERS: Record<ModeId, string[]> = {
  sprout: [],
  explore: [],
  adventure: ["math-middle", "physics-school", "biology-school", "english", "python", "social-studies"],
  focus: ["math-high", "physics-school", "chemistry-school", "biology-school", "exam-physics", "maths-senior"],
  mastery: ["dsa", "machine-learning", "electrical-engineering", "python", "economics", "sql"],
  research: ["machine-learning", "psychology", "economics", "finance", "human-anatomy", "dsa"],
  professional: ["python", "sql", "javascript", "finance", "ux-design", "html"],
};

/** First-run panel: pick a course suited to this stage. */
export function StartCourse() {
  const t = useT();
  const f = useFmt();
  const mode = useMode();
  const catalog = useCatalog();
  const setProfile = useLearner((s) => s.setProfile);
  const tx = useSharedText();
  const list = STARTERS[mode.id].map((s) => catalog.find((c) => c.slug === s)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  return (
    <section className="card p-5 sm:p-7" aria-labelledby="kh-start">
      <p className="eyebrow">{t("khan.getStarted", "Get started")}</p>
      <h2 id="kh-start" className="kh-h2 mt-1.5 !text-[1.5rem]">
        {t("khan.pickFirst", "What would you like to learn first?")}
      </h2>
      <p className="mt-1.5 max-w-[60ch] text-[0.9375rem] text-muted">{t("khan.pickFirstSub", "Pick a course to build your learning plan. Every lesson has a visual explainer, practice that adapts to you, and Questy to help when you're stuck.")}</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <li key={c.slug}>
            <button type="button" onClick={() => setProfile({ course: c.slug })} className="tile flex w-full items-center gap-3 p-3.5 text-left">
              <CourseIcon slug={c.slug} size={40} flat />
              <span className="min-w-0">
                <span className="block font-semibold leading-snug">{tx(c.title)}</span>
                <span className="block text-[0.8125rem] text-muted">{t("khan.course.meta", "{units} units · {lessons} lessons", { units: f.n(c.units), lessons: f.n(c.lessons) })}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Link href="/courses" className="btn-ghost mt-5">
        {t("khan.browseAll", "Browse all courses")}
      </Link>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* My courses                                                          */
/* ------------------------------------------------------------------ */

export function MyCourses({ title, limit = 4 }: { title?: string; limit?: number }) {
  const t = useT();
  const courses = useMyCourses(limit);
  const current = useLearner((s) => s.profile.course);
  if (!courses.length) return null;
  return (
    <section aria-labelledby="kh-courses">
      <SectionHeader id="kh-courses" title={title ?? t("khan.myCourses", "My courses")} action={{ href: "/courses", label: t("khan.browseAll", "Browse all courses") }} />
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} current={c.slug === current} />
        ))}
        {courses.length < limit && (
          <Link href="/courses" className="tile flex min-h-[140px] flex-col items-center justify-center gap-2 border-dashed p-5 text-center text-muted hover:text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line">
              <Plus className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-semibold">{t("khan.addCourse", "Add a course")}</span>
          </Link>
        )}
      </div>
      <MasteryLegend className="mt-4" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Weekly activity                                                     */
/* ------------------------------------------------------------------ */

/** Last seven days of points, with today's goal. `energy` uses Khan's "energy points" wording. */
export function WeeklyActivity({ energy }: { energy?: boolean }) {
  const t = useT();
  const f = useFmt();
  const daily = useLearner((s) => s.daily);
  const goal = useLearner((s) => s.profile.dailyGoal || 50);
  const streak = useLearner((s) => liveStreak(s));
  const [days, setDays] = useState<{ key: string; label: string; xp: number; today: boolean }[] | null>(null);
  useEffect(() => {
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = dayKey(d);
      out.push({ key, label: d.toLocaleDateString(f.bcp, { weekday: "short" }), xp: daily[key]?.xp ?? 0, today: i === 0 });
    }
    setDays(out);
  }, [daily, f.bcp]);

  const unit = energy ? t("khan.energyPoints", "Energy points") : t("khan.points", "Points");
  const total = days?.reduce((a, d) => a + d.xp, 0) ?? 0;
  const active = days?.filter((d) => d.xp > 0).length ?? 0;
  const max = Math.max(goal, ...(days?.map((d) => d.xp) ?? [0]));
  const todayXp = days?.[6]?.xp ?? 0;

  return (
    <section className="card p-5" aria-labelledby="kh-week">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="kh-week" className="font-bold">
          {t("khan.thisWeek", "This week")}
        </h2>
        <Link href="/insights" className="kh-link text-sm">
          {t("khan.insights", "Insights")}
        </Link>
      </div>
      <dl className="mt-3 grid grid-cols-3 gap-3">
        <div>
          <dt className="text-xs text-muted">{unit}</dt>
          <dd className="text-lg font-bold tabular-nums">{f.n(total)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">{t("khan.activeDays", "Active days")}</dt>
          <dd className="text-lg font-bold tabular-nums">{f.n(active)}/7</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">{t("khan.streak", "Day streak")}</dt>
          <dd className="text-lg font-bold tabular-nums">{f.n(streak)}</dd>
        </div>
      </dl>
      <div className="relative mt-4 h-24" role="img" aria-label={t("khan.weekChart", "{unit} per day for the last 7 days: {list}", { unit, list: days?.map((d) => `${d.label} ${d.xp}`).join(", ") ?? "" })}>
        <div className="absolute inset-x-0 border-t border-dashed border-accent/50" style={{ bottom: `${(goal / max) * 80 + 16}px` }} aria-hidden>
          <span className="absolute -top-4 right-0 text-[10px] font-semibold text-accent">{t("khan.goal", "Goal")}</span>
        </div>
        <div className="flex h-full items-end gap-1.5">
          {(days ?? Array.from({ length: 7 }, (_, i) => ({ key: String(i), label: "", xp: 0, today: false }))).map((d) => (
            <div key={d.key} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1">
              <div
                className={clsx("w-full max-w-[28px] rounded-t-[3px]", d.xp ? (d.xp >= goal ? "bg-accent" : "bg-accent/45") : "bg-surface-2")}
                style={{ height: `${Math.max(3, (d.xp / max) * 80)}px` }}
                aria-hidden
              />
              <span className={clsx("h-3 text-[10px] leading-3", d.today ? "font-bold text-ink" : "text-muted")} aria-hidden>
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[0.8125rem] text-muted">
        {todayXp >= goal ? t("khan.goalMet", "Daily goal met — nice work.") : t("khan.goalLeft", "{n} more today to reach your daily goal of {goal}.", { n: f.n(goal - todayXp), goal: f.n(goal) })}
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* See it                                                              */
/* ------------------------------------------------------------------ */

/** The visual-explainer showcase — our differentiator, given real estate. */
export function SeeItCard({ minAge = 12, compact }: { minAge?: number; compact?: boolean }) {
  const t = useT();
  const f = useFmt();
  const index = useExplainerIndex();
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed(Math.floor(Date.now() / 86_400_000));
  }, []);
  const picks = useMemo(() => {
    if (!index) return [];
    const pool = index.all.filter((e) => explainerMaxAge(e.ages) >= minAge);
    const list = pool.length >= 3 ? pool : index.all;
    const start = list.length ? seed % list.length : 0;
    return [0, 1, 2].map((i) => list[(start + i * 3) % list.length]).filter((e, i, a) => e && a.indexOf(e) === i);
  }, [index, minAge, seed]);

  return (
    <section className={clsx("card overflow-hidden", !compact && "md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]")} aria-labelledby="kh-seeit">
      <div className={clsx("relative flex items-center justify-center bg-accent-soft", compact ? "h-28" : "h-40 md:h-auto md:min-h-[220px]")}>
        <SeeItArt />
      </div>
      <div className="p-5 sm:p-6">
        <p className="eyebrow !text-accent-shade dark:!text-accent">{t("khan.seeIt", "See it")}</p>
        <h2 id="kh-seeit" className="kh-h2 mt-1">
          {t("khan.seeItTitle", "Big ideas, made visible")}
        </h2>
        <p className="mt-1.5 text-[0.9375rem] text-muted">{t("khan.seeItSub", "Every idea explained four ways: an animation to watch, something to try with your hands, a short comic and an everyday comparison.")}</p>
        {!compact && (
          <ul className="mt-4 space-y-1">
            {index
              ? picks.map((e) => (
                  <li key={e.id}>
                    <Link href={`/explain/${e.id}`} className="group flex items-center gap-3 rounded-md px-2 py-1.5 -mx-2 hover:bg-surface-2">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: e.color }} aria-hidden />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold group-hover:text-accent">{e.title}</span>
                        <span className="block truncate text-xs text-muted">{e.tagline}</span>
                      </span>
                      <span className="shrink-0 text-xs text-muted">{e.area}</span>
                    </Link>
                  </li>
                ))
              : [0, 1, 2].map((i) => <li key={i} className="h-9 animate-pulse rounded bg-surface-2" />)}
          </ul>
        )}
        <Link href="/explain" className="btn-primary mt-5">
          {index ? t("khan.seeItAll", "Explore all {n} explainers", { n: f.n(index.all.length) }) : t("khan.seeItOpen", "Open visual explainers")} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function SeeItArt() {
  return (
    <svg viewBox="0 0 240 160" className="h-full max-h-[200px] w-full max-w-[300px]" aria-hidden>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="30" y="28" width="180" height="104" rx="8" fill="rgb(var(--surface))" stroke="rgb(var(--line))" />
        <path d="M46 112 C 76 112, 84 50, 120 50 S 164 112, 194 112" stroke="rgb(var(--accent))" strokeWidth="3" />
        <path d="M46 112 H194" stroke="rgb(var(--line))" strokeWidth="2" />
        <circle cx="120" cy="50" r="6" fill="rgb(var(--kh-m3))" />
        <path d="M120 56 V112" stroke="rgb(var(--kh-m3))" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="150" y="40" width="44" height="22" rx="4" fill="rgb(var(--accent-soft))" stroke="rgb(var(--accent) / 0.4)" />
        <path d="M158 51 h28" stroke="rgb(var(--accent))" strokeWidth="2" />
        <circle cx="64" cy="58" r="14" fill="rgb(var(--warn) / 0.25)" stroke="rgb(var(--warn))" strokeWidth="2" />
        <path d="M58 58 l4 4 l8 -8" stroke="rgb(var(--warn-shade))" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Language nudge                                                      */
/* ------------------------------------------------------------------ */

const NUDGE_KEY = "kh-lang-nudge";

/** If the browser prefers an Indian language we speak but the app is in English, offer to switch. */
export function LanguageNudge() {
  const t = useT();
  const locale = useLearner((s) => s.settings.locale ?? "en");
  const setSettings = useLearner((s) => s.setSettings);
  const [offer, setOffer] = useState<Locale | null>(null);
  useEffect(() => {
    if (locale !== "en") {
      setOffer(null);
      return;
    }
    try {
      if (localStorage.getItem(NUDGE_KEY)) return;
    } catch {
      /* storage blocked: still offer */
    }
    const prefs = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const p of prefs) {
      const base = p.toLowerCase().split("-")[0];
      if (base === "en") return;
      const hit = LOCALES.find((l) => l.id === base);
      if (hit) {
        setOffer(hit.id);
        return;
      }
    }
  }, [locale]);
  if (!offer) return null;
  const info = LOCALES.find((l) => l.id === offer)!;
  const dismiss = () => {
    try {
      localStorage.setItem(NUDGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOffer(null);
  };
  return (
    <section className="card relative p-5" aria-labelledby="kh-lang">
      <button type="button" onClick={dismiss} className="kh-iconbtn absolute right-2 top-2" aria-label={t("khan.dismiss", "Dismiss")}>
        <X className="h-4 w-4" aria-hidden />
      </button>
      <Languages className="h-5 w-5 text-accent" aria-hidden />
      <h2 id="kh-lang" className="mt-2 pr-6 font-bold" lang={info.bcp47}>
        {translate(offer, "khan.langNudge.title", "Learn in {lang}?", { lang: info.native })}
      </h2>
      <p className="mt-1 text-sm text-muted">{t("khan.langNudge.sub", "Lessons, practice and Questy can speak {lang}. You can switch back to English any time.", { lang: info.english })}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="btn-primary" onClick={() => setSettings({ locale: offer })} lang={info.bcp47}>
          {info.native}
        </button>
        <button type="button" className="btn-ghost" onClick={dismiss}>
          {t("khan.notNow", "Not now")}
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */

/** A row of quick links (icon + label) styled as Khan list rows. */
export function QuickLinks({ title, links }: { title: string; links: { href: string; label: string; icon: typeof BookOpen; hint?: string }[] }) {
  return (
    <section className="card p-2" aria-label={title}>
      <h2 className="px-3 pb-1 pt-2.5 text-sm font-bold">{title}</h2>
      <ul>
        {links.map(({ href, label, icon: I, hint }) => (
          <li key={href}>
            <Link href={href} className="kh-menuitem">
              <I className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden />
              <span className="min-w-0 flex-1">
                <span className="block">{label}</span>
                {hint && <span className="block text-xs text-muted">{hint}</span>}
              </span>
              <ArrowRight className="h-4 w-4 text-muted" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Course path link (Duolingo-style map of the same course) for younger learners. */
export function CoursePathLink() {
  const t = useT();
  return (
    <Link href="/learn?view=path" className="tile flex items-center gap-4 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
        <MapIcon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold">{t("khan.coursePath", "Course path")}</span>
        <span className="block text-[0.8125rem] text-muted">{t("khan.coursePathSub", "See your course as a map of levels and unlock the next one.")}</span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
    </Link>
  );
}

