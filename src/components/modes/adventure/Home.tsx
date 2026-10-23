"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, FlaskConical, Lock, Map as MapIcon, Rocket, ScrollText, Swords, Trophy, Zap } from "lucide-react";
import clsx from "clsx";
import type { CourseOutline, CourseUnit } from "@/content/course";
import { useLearner } from "@/lib/store";
import { lessonProgress, courseProgress } from "@/lib/progress";
import { PageColumns } from "@/components/shell/AppShell";
import { LeagueCard, QuestsCard, RailCard, RailFooter } from "@/components/shell/RailCards";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { BadgeMedal } from "@/components/ui/GameIcon";
import { MdInline } from "@/components/Md";
import { SocialOptInCard } from "./SocialOptIn";
import { copyText } from "@/lib/clipboard";

/* ------------------------------------------------------------------ */
/* Data helpers                                                        */
/* ------------------------------------------------------------------ */

const outlineCache = new Map<string, CourseOutline>();

/** null while loading, undefined when the course doesn't exist. */
function useCourseOutline(slug: string | null) {
  const [o, setO] = useState<CourseOutline | null | undefined>(slug ? (outlineCache.get(slug) ?? null) : null);
  useEffect(() => {
    if (!slug) {
      setO(null);
      return;
    }
    if (outlineCache.has(slug)) {
      setO(outlineCache.get(slug)!);
      return;
    }
    let live = true;
    fetch(`/course-data/${slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: CourseOutline) => {
        outlineCache.set(slug, d);
        if (live) setO(d);
      })
      .catch(() => live && setO(undefined));
    return () => {
      live = false;
    };
  }, [slug]);
  return o;
}

type Experiments = Record<string, { title: string; href: string; course: string; widgets: { id: string; name: string }[] }>;
type LessonIndex = Record<string, { title: string; href: string; course: string }>;

function useJson<T>(url: string) {
  const [d, setD] = useState<T | null>(null);
  useEffect(() => {
    let live = true;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((x: T) => live && setD(x))
      .catch(() => live && setD(null));
    return () => {
      live = false;
    };
  }, [url]);
  return d;
}

/** Explorer ranks (Adventure mode's playful XP ladder). */
export const RANKS = [
  { name: "Cadet", min: 0, color: "#94A3B8" },
  { name: "Scout", min: 150, color: "#2EBE70" },
  { name: "Pathfinder", min: 500, color: "#1CB0F6" },
  { name: "Ranger", min: 1200, color: "#2F6BFF" },
  { name: "Trailblazer", min: 2500, color: "#7C4DFF" },
  { name: "Legend", min: 5000, color: "#FFB800" },
];

export function rankFor(xp: number) {
  let i = 0;
  RANKS.forEach((r, k) => xp >= r.min && (i = k));
  return { ...RANKS[i], index: i, next: RANKS[i + 1] };
}

type UnitState = "complete" | "current" | "open" | "locked";

/** A unit opens once the previous unit is at least half complete. */
function unitStates(o: CourseOutline, s: Parameters<typeof lessonProgress>[0]) {
  const states: UnitState[] = [];
  let currentAssigned = false;
  o.units.forEach((u, i) => {
    const done = u.lessons.filter((l) => lessonProgress(s, l).complete).length;
    const prev = o.units[i - 1];
    const prevDone = prev ? prev.lessons.filter((l) => lessonProgress(s, l).complete).length / Math.max(1, prev.lessons.length) : 1;
    if (done === u.lessons.length) states.push("complete");
    else if (prevDone < 0.5) states.push("locked");
    else if (!currentAssigned) {
      states.push("current");
      currentAssigned = true;
    } else states.push("open");
  });
  return states;
}

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export function AdventureHome() {
  const s = useLearner();
  const course = s.profile.course;
  const outline = useCourseOutline(course);
  const rank = rankFor(s.xp);

  const rail = (
    <>
      <RankCard />
      {s.profile.socialOptIn ? <LeagueCard /> : <SocialOptInCard />}
      <QuestsCard />
      <RailFooter />
    </>
  );

  if (!course || outline === undefined) {
    return (
      <PageColumns rail={rail}>
        <div className="mx-auto max-w-md py-10 text-center">
          <div className="flex justify-center">
            <Mascot pose="wave" size={130} />
          </div>
          <h1 className="mt-6 text-3xl font-black">Pick your first expedition</h1>
          <p className="mt-2 font-semibold text-muted">Choose a course and we’ll turn it into a map full of missions.</p>
          <Link href="/courses" className="btn-primary mt-8">
            Choose a course
          </Link>
        </div>
      </PageColumns>
    );
  }

  if (!outline) {
    return (
      <PageColumns rail={rail}>
        <div className="animate-pulse space-y-6">
          <div className="h-16 rounded-2xl bg-surface-2" />
          <div className="h-44 rounded-2xl bg-surface-2" />
          <div className="h-80 rounded-2xl bg-surface-2" />
        </div>
      </PageColumns>
    );
  }

  return (
    <PageColumns rail={rail}>
      <header className="flex flex-wrap items-center gap-4">
        <CourseIcon slug={outline.slug} size={56} />
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Mission control · {rank.name}</p>
          <h1 className="truncate text-2xl font-black">{outline.title}</h1>
        </div>
        <div className="flex gap-2">
          <Link href="/learn?view=path" className="btn-ghost !px-3 !py-2 text-xs">
            <MapIcon className="h-4 w-4" /> Classic path
          </Link>
          <Link href="/courses" className="btn-ghost !px-3 !py-2 text-xs">
            Change
          </Link>
        </div>
      </header>

      <CurrentMission outline={outline} />
      <TopicMap outline={outline} />
      <ExperimentsShelf outline={outline} />
      <Challenges outline={outline} />
      <MissionLog />
    </PageColumns>
  );
}

/* ------------------------------------------------------------------ */
/* Current mission                                                     */
/* ------------------------------------------------------------------ */

function CurrentMission({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const cp = courseProgress(s, outline);
  const { color, shade } = courseStyle(outline.slug);
  const lesson = cp.next;
  if (!lesson) {
    return (
      <section className="mt-6 flex items-center gap-5 rounded-2xl p-6 text-white" style={{ background: color, boxShadow: `inset 0 -6px 0 ${shade}` }}>
        <Mascot pose="cheer" size={90} animate={false} />
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-white/75">Expedition complete</p>
          <h2 className="text-2xl font-black">Every mission done!</h2>
          <p className="mt-1 font-semibold text-white/85">Take the boss challenge below, or start a new expedition.</p>
        </div>
      </section>
    );
  }
  const unitIdx = outline.units.findIndex((u) => u.slug === lesson.unitSlug);
  const unit = outline.units[unitIdx];
  const num = unit.lessons.findIndex((l) => l.id === lesson.id) + 1;
  const p = lessonProgress(s, lesson);
  const xp = lesson.items.reduce((a, i) => a + i.xp, 0);
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 overflow-hidden rounded-2xl text-white" style={{ background: color, boxShadow: `inset 0 -6px 0 ${shade}` }}>
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-white/75">
            Current mission · Unit {unitIdx + 1}, mission {num}
          </p>
          <h2 className="mt-1 text-2xl font-black leading-tight">{lesson.title}</h2>
          <p className="mt-2 font-semibold text-white/85">
            <span className="font-extrabold">Objective:</span> <MdInline text={lesson.summary} />
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {lesson.items.map((it) => (
              <span key={it.id} className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide">
                {it.kind === "practice" ? "Practice" : it.kind === "article" ? "Briefing" : it.kind === "video" ? "Video" : it.kind === "cards" ? "Flashcards" : "Coding"}
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:w-48">
          <span className="flex items-center justify-center gap-1.5 rounded-xl bg-white/15 py-2 text-lg font-black">
            <Zap className="h-5 w-5 fill-white" /> +{xp} XP
          </span>
          <Link href={p.nextItem.href} className="btn border-black/15 bg-white" style={{ color }}>
            <Rocket className="h-4 w-4" /> {p.itemsDone ? "Resume mission" : "Launch mission"}
          </Link>
        </div>
      </div>
      <div className="bg-black/10 px-6 py-2.5 text-sm font-bold text-white/85">
        Course progress {cp.complete}/{cp.total} missions
      </div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/* Topic map                                                           */
/* ------------------------------------------------------------------ */

function TopicMap({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const states = unitStates(outline, s);
  const { color, shade } = courseStyle(outline.slug);
  const n = outline.units.length;
  // Zig-zag layout: two columns, each row 150px tall.
  const W = 600;
  const rowH = 150;
  const H = Math.max(1, Math.ceil(n / 1)) * rowH * 0.85 + 60;
  const pos = outline.units.map((_, i) => ({ x: i % 2 === 0 ? 150 + (i % 4 === 0 ? 0 : 40) : 450 - (i % 4 === 1 ? 0 : 40), y: 70 + i * rowH * 0.85 }));

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-xl font-black">Topic map</h2>
        <span className="text-sm font-bold text-muted">Regions open as you explore</span>
      </div>
      <div className="card relative overflow-hidden" style={{ background: "rgb(var(--surface-2))" }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label="Map of units">
          {/* terrain dots */}
          <defs>
            <pattern id="adv-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.6" fill="rgb(var(--line))" />
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#adv-dots)" />
          {/* routes */}
          {pos.slice(1).map((p, i) => {
            const a = pos[i];
            const open = states[i + 1] !== "locked";
            return (
              <path
                key={i}
                d={`M${a.x} ${a.y} C ${a.x} ${(a.y + p.y) / 2}, ${p.x} ${(a.y + p.y) / 2}, ${p.x} ${p.y}`}
                fill="none"
                stroke={open ? color : "rgb(var(--line))"}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={open ? "0" : "4 14"}
                opacity={open ? 0.55 : 1}
              />
            );
          })}
        </svg>
        {/* regions as HTML on top for crisp text + links */}
        <div className="absolute inset-0">
          {outline.units.map((u, i) => (
            <Region key={u.slug} unit={u} index={i} state={states[i]} left={(pos[i].x / W) * 100} top={(pos[i].y / H) * 100} color={color} shade={shade} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Region({ unit, index, state, left, top, color, shade }: { unit: CourseUnit; index: number; state: UnitState; left: number; top: number; color: string; shade: string }) {
  const s = useLearner();
  const done = unit.lessons.filter((l) => lessonProgress(s, l).complete).length;
  const locked = state === "locked";
  const bg = state === "complete" ? "rgb(var(--good))" : locked ? "rgb(var(--line))" : color;
  const edge = state === "complete" ? "rgb(var(--good-shade))" : locked ? "rgb(var(--muted) / 0.35)" : shade;
  const inner = (
    <div className="flex flex-col items-center gap-2">
      <span
        className={clsx("relative grid h-16 w-16 place-items-center rounded-[22px] text-xl font-black text-white sm:h-20 sm:w-20 sm:text-2xl", state === "current" && "ring-8 ring-accent/20")}
        style={{ background: bg, boxShadow: `inset 0 -6px 0 ${edge}` }}
      >
        {state === "complete" ? <Check className="h-8 w-8" strokeWidth={3.5} /> : locked ? <Lock className="h-7 w-7 text-muted/70" /> : index + 1}
        {state === "current" && (
          <motion.span className="absolute -top-9 whitespace-nowrap rounded-lg border-2 border-line bg-surface px-2 py-1 text-[11px] font-extrabold uppercase tracking-wide" style={{ color }} animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            You are here
          </motion.span>
        )}
      </span>
      <span className="max-w-[160px] rounded-xl border-2 border-line bg-surface px-2.5 py-1 text-center text-[13px] font-extrabold leading-tight">
        {unit.title}
        <span className="block text-[11px] font-bold text-muted">{locked ? "Explore the previous region first" : `${done}/${unit.lessons.length} missions`}</span>
      </span>
    </div>
  );
  return (
    <div className="absolute -translate-x-1/2 -translate-y-[38%]" style={{ left: `${left}%`, top: `${top}%` }}>
      {locked ? (
        <div aria-disabled title="Complete half of the previous region to unlock">
          {inner}
        </div>
      ) : (
        <Link href={unit.href} className="block transition hover:-translate-y-0.5" aria-label={`Unit ${index + 1}: ${unit.title}`}>
          {inner}
        </Link>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Experiments                                                         */
/* ------------------------------------------------------------------ */

function ExperimentsShelf({ outline }: { outline: CourseOutline }) {
  const ex = useJson<Experiments>("/experiments.json");
  const done = useLearner((s) => s.lessons);
  const list = useMemo(() => {
    if (!ex) return null;
    // One card per experiment: the same widget often appears in several lessons.
    const unique = (list: [string, Experiments[string]][]) => {
      const seen = new Set<string>();
      return list.filter(([, v]) => {
        const key = v.widgets[0]?.id;
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    };
    const own = unique(Object.entries(ex).filter(([, v]) => v.course === outline.slug));
    if (own.length) return { own: true, items: own.slice(0, 6) };
    return { own: false, items: unique(Object.entries(ex).filter(([id]) => id.includes("-school/") || id.startsWith("math-"))).slice(0, 4) };
  }, [ex, outline.slug]);

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-xl font-black">Experiments</h2>
        <span className="text-sm font-bold text-muted">{list?.own === false ? "Try these from other courses" : "Hands-on labs in this course"}</span>
      </div>
      {!list ? (
        <div className="h-28 animate-pulse rounded-2xl bg-surface-2" />
      ) : list.items.length === 0 ? (
        <div className="card p-6 text-center font-semibold text-muted">No experiments here yet.</div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {list.items.map(([id, e]) => (
            <Link key={id} href={`${e.href}?item=article`} className="tile flex items-center gap-4 p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-2 text-white" style={{ boxShadow: "inset 0 -4px 0 rgb(var(--accent-2-shade))" }}>
                <FlaskConical className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-extrabold">{e.widgets.map((w) => w.name).join(" · ")}</span>
                <span className="block truncate text-sm font-semibold text-muted">
                  <MdInline text={e.title} />
                </span>
              </span>
              {done[id] && <Check className="h-5 w-5 shrink-0 text-good" strokeWidth={3} />}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Unlockable challenges                                               */
/* ------------------------------------------------------------------ */

function Challenges({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const cp = courseProgress(s, outline);
  const bossNeeded = Math.ceil(cp.total * 0.75);
  const bossOpen = cp.complete >= bossNeeded;
  const bossBest = s.assessments[outline.challenge.key];
  const [copied, setCopied] = useState(false);

  const share = () => {
    const pct = Math.round((bossBest ?? 0) * 100);
    const url = `${window.location.origin}/challenge?course=${encodeURIComponent(outline.slug)}&score=${pct}&by=${encodeURIComponent(s.profile.nickname || "Explorer")}`;
    void copyText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-xl font-black">Unlockable challenges</h2>
        <span className="text-sm font-bold text-muted">Finish a region to unlock its test</span>
      </div>
      <ul className="card divide-y-2 divide-line overflow-hidden">
        {outline.units.map((u, i) => {
          const left = u.lessons.filter((l) => !lessonProgress(s, l).complete).length;
          const open = left === 0;
          const best = s.assessments[u.test.key];
          return (
            <li key={u.slug} className="flex items-center gap-4 px-5 py-3.5">
              <span className={clsx("grid h-10 w-10 shrink-0 place-items-center rounded-xl", open ? "bg-warn text-white" : "bg-surface-2 text-muted")}>{open ? <Trophy className="h-5 w-5" /> : <Lock className="h-5 w-5" />}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-extrabold">
                  Unit {i + 1} test · {u.title}
                </p>
                <p className="text-sm font-semibold text-muted">
                  {open ? (best !== undefined ? `Best score ${Math.round(best * 100)}%` : `${u.test.questions} questions · ready!`) : `Complete ${left} more mission${left === 1 ? "" : "s"} to unlock`}
                </p>
              </div>
              {open && (
                <Link href={u.test.href} className="btn-gold !px-4 !py-2 text-xs">
                  {best !== undefined ? "Retry" : "Start"}
                </Link>
              )}
            </li>
          );
        })}
        <li className="flex flex-col gap-3 bg-surface-2/60 px-5 py-4 sm:flex-row sm:items-center">
          <span className={clsx("grid h-12 w-12 shrink-0 place-items-center rounded-xl", bossOpen ? "bg-bad text-white" : "bg-surface text-muted")}>{bossOpen ? <Swords className="h-6 w-6" /> : <Lock className="h-5 w-5" />}</span>
          <div className="min-w-0 flex-1">
            <p className="font-black">Boss challenge · {outline.title}</p>
            <p className="text-sm font-semibold text-muted">
              {bossOpen
                ? bossBest !== undefined
                  ? `Best score ${Math.round(bossBest * 100)}% · ${outline.challenge.questions} questions`
                  : `${outline.challenge.questions} questions across the whole course`
                : `Unlocks at 75% of missions (${cp.complete}/${bossNeeded})`}
            </p>
            {!bossOpen && <ProgressBar value={cp.complete / Math.max(1, bossNeeded)} height={10} className="mt-2 max-w-xs" color="rgb(var(--bad))" />}
          </div>
          {bossOpen && (
            <div className="flex gap-2">
              {s.profile.socialOptIn && bossBest !== undefined && (
                <button onClick={share} className="btn-ghost !px-3 !py-2 text-xs">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Link copied" : "Challenge a friend"}
                </button>
              )}
              <Link href={outline.challenge.href} className="btn-bad !px-4 !py-2 text-xs">
                {bossBest !== undefined ? "Retry" : "Fight"}
              </Link>
            </div>
          )}
        </li>
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mission log                                                         */
/* ------------------------------------------------------------------ */

function MissionLog() {
  const idx = useJson<LessonIndex>("/lessons.json");
  const lessons = useLearner((s) => s.lessons);
  const items = useLearner((s) => s.items);

  const log = useMemo(() => {
    const out: { at: string; text: string; href?: string; course?: string }[] = [];
    for (const [id, p] of Object.entries(lessons)) {
      const l = idx?.[id];
      out.push({ at: p.completedAt, text: `Mission complete: ${l?.title ?? id.split("/").pop()}`, href: l?.href, course: l?.course });
    }
    for (const [id, at] of Object.entries(items)) {
      const [lessonId, kind] = id.split(":");
      if (!kind || kind === "article") continue;
      const l = idx?.[lessonId];
      const label = kind === "video" ? "Watched" : kind === "practice" ? "Practice cleared" : kind === "cards" ? "Flashcards reviewed" : kind === "challenge" ? "Coding challenge" : kind;
      if (lessonId.startsWith("chest")) out.push({ at, text: "Opened a treasure chest" });
      else out.push({ at, text: `${label}: ${l?.title ?? lessonId.split("/").pop()}`, href: l?.href, course: l?.course });
    }
    return out.sort((a, b) => b.at.localeCompare(a.at)).slice(0, 6);
  }, [idx, lessons, items]);

  return (
    <section className="mb-4 mt-8">
      <h2 className="mb-3 flex items-center gap-2 text-xl font-black">
        <ScrollText className="h-5 w-5 text-muted" /> Mission log
      </h2>
      {log.length === 0 ? (
        <div className="card p-6 text-center font-semibold text-muted">Your adventures will be logged here. Launch your first mission!</div>
      ) : (
        <ol className="card divide-y-2 divide-line overflow-hidden">
          {log.map((e, i) => (
            <li key={i} className="flex items-center gap-3 px-5 py-3">
              {e.course ? <CourseIcon slug={e.course} size={28} /> : <span className="grid h-7 w-7 place-items-center rounded-lg bg-warn/20 text-warn-shade">★</span>}
              {e.href ? (
                <Link href={e.href} className="min-w-0 flex-1 truncate text-[15px] font-bold hover:text-accent">
                  <MdInline text={e.text} />
                </Link>
              ) : (
                <span className="min-w-0 flex-1 truncate text-[15px] font-bold">{e.text}</span>
              )}
              <time className="shrink-0 text-xs font-bold text-muted">{new Date(e.at).toLocaleDateString(undefined, { day: "numeric", month: "short" })}</time>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Rank ladder (rail)                                                  */
/* ------------------------------------------------------------------ */

function RankCard() {
  const xp = useLearner((s) => s.xp);
  const course = useLearner((s) => s.profile.course);
  const outline = useCourseOutline(course);
  const s = useLearner();
  const r = rankFor(xp);
  const units = outline ? outline.units.filter((u) => u.lessons.every((l) => lessonProgress(s, l).complete)) : [];
  return (
    <RailCard title="Explorer rank">
      <div className="flex items-center gap-4">
        <BadgeMedal icon="shield" color={r.color} size={56} />
        <div className="min-w-0 flex-1">
          <p className="text-xl font-black" style={{ color: r.color }}>
            {r.name}
          </p>
          <p className="text-sm font-bold text-muted">{r.next ? `${r.next.min - xp} XP to ${r.next.name}` : "Top rank reached!"}</p>
          {r.next && <ProgressBar value={(xp - r.min) / (r.next.min - r.min)} height={10} className="mt-2" color={r.color} />}
        </div>
      </div>
      <ol className="mt-4 flex justify-between">
        {RANKS.map((k, i) => (
          <li key={k.name} className="flex flex-col items-center gap-1" title={`${k.name} · ${k.min} XP`}>
            <span className="h-3 w-3 rounded-full" style={{ background: i <= r.index ? k.color : "rgb(var(--line))" }} />
            <span className={clsx("text-[10px] font-extrabold", i === r.index ? "text-ink" : "text-muted")}>{k.name}</span>
          </li>
        ))}
      </ol>
      {outline && (
        <div className="mt-4 border-t-2 border-line pt-4">
          <p className="eyebrow">Mission badges · {units.length}/{outline.units.length}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {outline.units.map((u) => (
              <span key={u.slug} title={u.title}>
                <BadgeMedal icon="target" color="#FF8A00" size={32} locked={!units.includes(u)} />
              </span>
            ))}
          </div>
        </div>
      )}
    </RailCard>
  );
}
