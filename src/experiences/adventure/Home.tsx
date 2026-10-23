"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Check, ChevronRight, Copy, Crosshair, FlaskConical, Lock, Map as MapIcon, Radar, Rocket, ScrollText, Swords, Target, Trophy, Zap } from "lucide-react";
import type { CourseOutline, CourseUnit } from "@/content/course";
import { useLearner, type LearnerState } from "@/lib/store";
import { courseProgress, itemDone, lessonProgress } from "@/lib/progress";
import { dayKey } from "@/lib/gamification";
import { copyText } from "@/lib/clipboard";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { MdInline } from "@/components/Md";
import { LeagueCard, QuestsCard } from "@/components/shell/RailCards";
import { SocialOptInCard } from "@/components/modes/adventure/SocialOptIn";
import { NeonBar, OBJECTIVE, RANKS, RANK_NEON, pad2, rankInfo } from "./hud";

type Experiments = Record<string, { title: string; href: string; course: string; widgets: { id: string; name: string }[] }>;
type LessonIndex = Record<string, { title: string; href: string; course: string }>;
type UnitState = "complete" | "current" | "open" | "locked";

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

/** A sector opens once the previous one is at least half cleared. */
function unitStates(o: CourseOutline, s: LearnerState): UnitState[] {
  const out: UnitState[] = [];
  let current = false;
  o.units.forEach((u, i) => {
    const done = u.lessons.filter((l) => lessonProgress(s, l).complete).length;
    const prev = o.units[i - 1];
    const prevPct = prev ? prev.lessons.filter((l) => lessonProgress(s, l).complete).length / Math.max(1, prev.lessons.length) : 1;
    if (done === u.lessons.length) out.push("complete");
    else if (prevPct < 0.5) out.push("locked");
    else if (!current) {
      out.push("current");
      current = true;
    } else out.push("open");
  });
  return out;
}

/* ------------------------------------------------------------------ */

export function AdventureHome() {
  const s = useLearner();
  const course = s.profile.course;
  const outline = useOutline(course);
  const [missing, setMissing] = useState(false);

  // useOutline returns null both while loading and on failure: give it a moment.
  useEffect(() => {
    setMissing(false);
    if (!course || outline) return;
    const t = setTimeout(() => setMissing(true), 6000);
    return () => clearTimeout(t);
  }, [course, outline]);

  const side = (
    <>
      <PilotCard />
      {s.profile.socialOptIn ? <LeagueCard /> : <SocialOptInCard />}
      <QuestsCard />
    </>
  );

  if (!course || (missing && !outline)) {
    return (
      <Frame side={side}>
        <section className="adv-console relative overflow-hidden p-8 text-center sm:p-12">
          <div className="flex justify-center">
            <Mascot pose="wave" size={120} />
          </div>
          <p className="adv-code mt-6">Status · awaiting orders</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Choose your first expedition</h1>
          <p className="mx-auto mt-2 max-w-md text-white/70">Pick a course and mission control turns it into sectors, missions and challenges you can unlock.</p>
          <Link href="/courses" className="btn-primary mt-8">
            <Rocket className="h-4 w-4" /> Choose a course
          </Link>
        </section>
      </Frame>
    );
  }

  if (!outline) {
    return (
      <Frame side={side}>
        <div className="space-y-6" aria-busy="true" aria-label="Loading mission control">
          <div className="h-12 w-2/3 animate-pulse rounded-md bg-surface-2" />
          <div className="h-64 animate-pulse rounded-md bg-surface-2" />
          <div className="h-72 animate-pulse rounded-md bg-surface-2" />
        </div>
      </Frame>
    );
  }

  return (
    <Frame side={side}>
      <header className="flex flex-wrap items-center gap-4">
        <CourseIcon slug={outline.slug} size={52} />
        <div className="min-w-[12rem] flex-1">
          <p className="eyebrow">Mission control{s.profile.nickname ? ` · Pilot ${s.profile.nickname}` : ""}</p>
          <h1 className="text-2xl font-bold leading-tight sm:text-[1.9rem]">{outline.title}</h1>
        </div>
        <div className="flex gap-2">
          <Link href="/learn?view=path" className="btn-ghost !px-3 !py-2 text-xs">
            <MapIcon className="h-4 w-4" /> Path view
          </Link>
          <Link href="/courses" className="btn-ghost !px-3 !py-2 text-xs">
            Switch
          </Link>
        </div>
      </header>

      <CurrentMission outline={outline} />
      <SectorMap outline={outline} />
      <ExperimentsShelf outline={outline} />
      <Challenges outline={outline} />
      <MissionLog />
    </Frame>
  );
}

function Frame({ children, side }: { children: React.ReactNode; side: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-[1240px] gap-8 px-4 py-6 sm:px-6 lg:py-8">
      <div className="min-w-0 flex-1">
        {children}
        <div className="mt-10 space-y-5 lg:hidden">{side}</div>
      </div>
      <aside className="sticky top-20 hidden h-fit w-[320px] shrink-0 space-y-5 lg:block" aria-label="Pilot status">
        {side}
      </aside>
    </div>
  );
}

function SectionHead({ icon, title, note }: { icon: React.ReactNode; title: string; note?: string }) {
  return (
    <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
      <h2 className="adv-sectionhead">
        {icon}
        {title}
      </h2>
      {note && <span className="text-sm text-muted">{note}</span>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Current mission                                                     */
/* ------------------------------------------------------------------ */

function CurrentMission({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const cp = courseProgress(s, outline);
  const lesson = cp.next;

  if (!lesson) {
    return (
      <section className="adv-console mt-6 flex flex-col items-center gap-5 p-6 sm:flex-row">
        <Mascot pose="cheer" size={90} animate={false} />
        <div>
          <p className="adv-code">Expedition complete</p>
          <h2 className="mt-1 text-2xl font-bold text-white">Every mission cleared</h2>
          <p className="mt-1 text-white/70">The boss challenge is waiting below — or start a new expedition.</p>
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
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="adv-console mt-6 overflow-hidden" aria-labelledby="adv-current">
      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[1fr_250px]">
        <div className="min-w-0">
          <p className="adv-code">
            <span className="adv-live" aria-hidden /> Current mission · U{pad2(unitIdx + 1)}-M{pad2(num)}
          </p>
          <h2 id="adv-current" className="mt-2 text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">
            {lesson.title}
          </h2>
          <p className="mt-2 text-white/75">
            <MdInline text={lesson.summary} />
          </p>
          <p className="mt-1 text-sm text-white/50">
            Sector {unitIdx + 1}: {unit.title}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="adv-code !text-white/50">Objectives · {p.itemsDone}/{p.itemsTotal}</p>
          <ul className="space-y-1.5">
            {lesson.items.map((it) => {
              const done = itemDone(s, lesson.id, it);
              return (
                <li key={it.id}>
                  <Link href={it.href} className={clsx("adv-objective", done && "is-done")}>
                    <span className="adv-check" aria-hidden>
                      {done && <Check className="h-3.5 w-3.5" strokeWidth={3.5} />}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{OBJECTIVE[it.kind]}</span>
                    <span className="font-mono text-[11px] text-white/45">+{it.xp}</span>
                    <span className="sr-only">{done ? "(done)" : "(to do)"}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-white/10 bg-black/20 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
        <div className="min-w-0 flex-1">
          <div className="flex justify-between text-xs text-white/55">
            <span>Expedition progress</span>
            <span className="font-mono">
              {cp.complete}/{cp.total} missions
            </span>
          </div>
          <NeonBar value={cp.complete / Math.max(1, cp.total)} className="mt-1.5" color="#A3E635" label="Course progress" />
        </div>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-sm font-bold text-[#FDE68A]">
          <Zap className="h-4 w-4 fill-current" aria-hidden /> +{xp} XP
        </span>
        <Link href={p.nextItem.href} className="btn-primary shrink-0">
          <Rocket className="h-4 w-4" aria-hidden /> {p.itemsDone ? "Resume mission" : "Launch mission"}
        </Link>
      </div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/* Sector map                                                          */
/* ------------------------------------------------------------------ */

function SectorMap({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const states = unitStates(outline, s);
  return (
    <section className="mt-10" aria-labelledby="adv-map">
      <SectionHead icon={<Radar className="h-5 w-5 text-accent" aria-hidden />} title="Sector map" note="Clear half a sector to unlock the next" />
      <span id="adv-map" className="sr-only">
        Sector map
      </span>
      {/* Route strip: one segment per sector */}
      <div className="mb-3 flex gap-1" aria-hidden>
        {states.map((st, i) => (
          <span key={i} className={clsx("adv-route h-1.5 flex-1", `is-${st}`)} />
        ))}
      </div>
      <ol className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 xl:grid-cols-3">
        {outline.units.map((u, i) => (
          <Sector key={u.slug} unit={u} index={i} state={states[i]} />
        ))}
      </ol>
    </section>
  );
}

function Sector({ unit, index, state }: { unit: CourseUnit; index: number; state: UnitState }) {
  const s = useLearner();
  const done = unit.lessons.filter((l) => lessonProgress(s, l).complete).length;
  const locked = state === "locked";
  const label = state === "complete" ? "Cleared" : state === "current" ? "You are here" : locked ? "Locked" : "Open";
  const body = (
    <>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-xs font-bold tracking-wider text-muted">SECTOR {pad2(index + 1)}</span>
        <span className={clsx("adv-tag", `is-${state}`)}>
          {state === "complete" ? <Check className="h-3 w-3" strokeWidth={3.5} /> : locked ? <Lock className="h-3 w-3" /> : state === "current" ? <Crosshair className="h-3 w-3" /> : null}
          {label}
        </span>
      </div>
      <p className={clsx("mt-2 line-clamp-2 font-semibold leading-snug", locked && "text-muted")}>{unit.title}</p>
      <div className="mt-3">
        <NeonBar value={done / Math.max(1, unit.lessons.length)} color={state === "complete" ? "rgb(var(--good))" : locked ? "rgb(var(--muted) / 0.4)" : "rgb(var(--accent))"} height={5} label={`${done} of ${unit.lessons.length} missions`} />
        <p className="mt-1.5 text-xs text-muted">{locked ? "Clear half of the previous sector" : `${done}/${unit.lessons.length} missions`}</p>
      </div>
    </>
  );
  return (
    <li>
      {locked ? (
        <div className={clsx("adv-sector is-locked")} aria-label={`Sector ${index + 1}: ${unit.title} — locked`}>
          {body}
        </div>
      ) : (
        <Link href={unit.href} className={clsx("adv-sector tile block", `is-${state}`)} aria-label={`Sector ${index + 1}: ${unit.title} — ${label}, ${done} of ${unit.lessons.length} missions`}>
          {body}
        </Link>
      )}
    </li>
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
    const unique = (l: [string, Experiments[string]][]) => {
      const seen = new Set<string>();
      return l.filter(([, v]) => {
        const k = v.widgets[0]?.id;
        if (!k || seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    };
    const own = unique(Object.entries(ex).filter(([, v]) => v.course === outline.slug));
    if (own.length) return { own: true, items: own.slice(0, 8) };
    return { own: false, items: unique(Object.entries(ex).filter(([id]) => id.includes("-school/") || id.startsWith("math-"))).slice(0, 6) };
  }, [ex, outline.slug]);

  return (
    <section className="mt-10">
      <SectionHead icon={<FlaskConical className="h-5 w-5 text-accent-2" aria-hidden />} title="Experiments" note={list?.own === false ? "Labs from other courses" : "Hands-on labs in this course"} />
      {!list ? (
        <div className="h-28 animate-pulse rounded-md bg-surface-2" />
      ) : list.items.length === 0 ? (
        <div className="card p-6 text-center text-muted">No labs in this course yet.</div>
      ) : (
        <ul className="adv-shelf -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {list.items.map(([id, e]) => (
            <li key={id} className="w-[230px] shrink-0 snap-start">
              <Link href={`${e.href}?item=article`} className="tile adv-lab flex h-full flex-col p-4">
                <span className="flex items-center justify-between">
                  <span className="adv-labicon" aria-hidden>
                    <FlaskConical className="h-5 w-5" />
                  </span>
                  {done[id] && (
                    <span className="adv-tag is-complete">
                      <Check className="h-3 w-3" strokeWidth={3.5} /> Run
                    </span>
                  )}
                </span>
                <span className="mt-3 line-clamp-2 font-semibold leading-snug">{e.widgets.map((w) => w.name).join(" · ")}</span>
                <span className="mt-1 line-clamp-2 text-sm text-muted">
                  <MdInline text={e.title} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Challenges                                                          */
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
    <section className="mt-10">
      <SectionHead icon={<Trophy className="h-5 w-5 text-warn" aria-hidden />} title="Unlockable challenges" note="Clear a sector to unlock its test" />
      <ul className="card divide-y divide-line overflow-hidden">
        {outline.units.map((u, i) => {
          const left = u.lessons.filter((l) => !lessonProgress(s, l).complete).length;
          const open = left === 0;
          const best = s.assessments[u.test.key];
          return (
            <li key={u.slug} className="flex items-center gap-3 px-4 py-3 sm:px-5">
              <span className={clsx("adv-badge", open ? "is-gold" : "is-locked")} aria-hidden>
                {open ? <Trophy className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">
                  <span className="font-mono text-xs text-muted">S{pad2(i + 1)}</span> Sector test · {u.title}
                </p>
                <p className="text-sm text-muted">{open ? (best !== undefined ? `Best score ${Math.round(best * 100)}%` : `${u.test.questions} questions · ready`) : `Clear ${left} more mission${left === 1 ? "" : "s"} to unlock`}</p>
              </div>
              {open && (
                <Link href={u.test.href} className="btn-gold !px-3.5 !py-2 text-xs">
                  {best !== undefined ? "Retry" : "Start"}
                </Link>
              )}
            </li>
          );
        })}
        <li className="adv-boss flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:px-5">
          <span className={clsx("adv-badge !h-11 !w-11", bossOpen ? "is-boss" : "is-locked")} aria-hidden>
            {bossOpen ? <Swords className="h-5 w-5" /> : <Lock className="h-4 w-4" />}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-bold">Boss challenge · {outline.title}</p>
            <p className="text-sm text-muted">
              {bossOpen
                ? bossBest !== undefined
                  ? `Best score ${Math.round(bossBest * 100)}% · ${outline.challenge.questions} questions`
                  : `${outline.challenge.questions} questions across the whole course`
                : `Unlocks at 75% of missions (${cp.complete}/${bossNeeded})`}
            </p>
            {!bossOpen && <NeonBar value={cp.complete / Math.max(1, bossNeeded)} height={6} className="mt-2 max-w-xs" color="rgb(var(--bad))" label="Progress to boss challenge" />}
          </div>
          {bossOpen && (
            <div className="flex gap-2">
              {s.profile.socialOptIn && bossBest !== undefined && (
                <button type="button" onClick={share} className="btn-ghost !px-3 !py-2 text-xs">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Link copied" : "Challenge a friend"}
                </button>
              )}
              <Link href={outline.challenge.href} className="btn-bad !px-4 !py-2 text-xs">
                {bossBest !== undefined ? "Retry" : "Engage"}
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
    const out: { at: string; tag: string; text: string; href?: string; course?: string }[] = [];
    for (const [id, p] of Object.entries(lessons)) {
      const l = idx?.[id];
      out.push({ at: p.completedAt, tag: "CLEAR", text: l?.title ?? id.split("/").pop() ?? id, href: l?.href, course: l?.course });
    }
    for (const [id, at] of Object.entries(items)) {
      const [lessonId, kind] = id.split(":");
      if (!kind || kind === "article") continue;
      const l = idx?.[lessonId];
      if (lessonId.startsWith("chest")) {
        out.push({ at, tag: "LOOT", text: "Opened a treasure chest" });
        continue;
      }
      const tag = kind === "video" ? "BRIEF" : kind === "practice" ? "DRILL" : kind === "cards" ? "CARDS" : kind === "challenge" ? "CODE" : kind.toUpperCase();
      out.push({ at, tag, text: l?.title ?? lessonId.split("/").pop() ?? lessonId, href: l?.href, course: l?.course });
    }
    return out.sort((a, b) => b.at.localeCompare(a.at)).slice(0, 7);
  }, [idx, lessons, items]);

  return (
    <section className="mb-4 mt-10">
      <SectionHead icon={<ScrollText className="h-5 w-5 text-muted" aria-hidden />} title="Mission log" />
      {log.length === 0 ? (
        <div className="card p-6 text-center text-muted">Nothing logged yet. Launch your first mission and it will show up here.</div>
      ) : (
        <ol className="adv-log card divide-y divide-line overflow-hidden">
          {log.map((e, i) => (
            <li key={i} className="flex items-center gap-3 px-4 py-2.5 sm:px-5">
              <time className="w-14 shrink-0 font-mono text-xs text-muted">{new Date(e.at).toLocaleDateString(undefined, { day: "2-digit", month: "short" })}</time>
              <span className="adv-logtag shrink-0">{e.tag}</span>
              {e.course && <CourseIcon slug={e.course} size={22} flat />}
              {e.href ? (
                <Link href={e.href} className="min-w-0 flex-1 truncate text-[15px] hover:text-accent">
                  <MdInline text={e.text} />
                </Link>
              ) : (
                <span className="min-w-0 flex-1 truncate text-[15px]">{e.text}</span>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pilot card (side column)                                            */
/* ------------------------------------------------------------------ */

function PilotCard() {
  const xp = useLearner((s) => s.xp);
  const goal = useLearner((s) => s.profile.dailyGoal);
  const today = useLearner((s) => s.daily[dayKey()]?.xp ?? 0);
  const r = rankInfo(xp);
  return (
    <section className="adv-console p-5" aria-label="Pilot rank">
      <p className="adv-code">Pilot rank</p>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <p className="text-2xl font-bold" style={{ color: r.color }}>
          {r.name}
        </p>
        <p className="font-mono text-sm text-white/60">{xp} XP</p>
      </div>
      <NeonBar value={r.pct} color={r.color} className="mt-2" label="Progress to next rank" />
      <p className="mt-1.5 text-sm text-white/60">{r.next ? `${r.toNext} XP to ${r.next.name}` : "Top rank reached"}</p>

      <ol className="mt-4 grid grid-cols-6 gap-1" aria-label="Rank ladder">
        {RANKS.map((k, i) => (
          <li key={k.name} className="flex flex-col items-center gap-1" title={`${k.name} · ${k.min} XP`}>
            <span className={clsx("adv-rung", i <= r.index && "is-on", i === r.index && "is-now")} style={{ color: RANK_NEON[i] }} />
            <span className={clsx("text-[9px] font-semibold uppercase tracking-wide", i === r.index ? "text-white" : "text-white/40")}>{k.name.slice(0, 5)}</span>
            <span className="sr-only">
              {k.name}, {k.min} XP{i === r.index ? " (current)" : ""}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-white/75">
            <Target className="h-4 w-4 text-[#2DE2E6]" aria-hidden /> Today&rsquo;s fuel
          </span>
          <span className="font-mono text-white/70">
            {today}/{goal} XP
          </span>
        </div>
        <NeonBar value={today / Math.max(1, goal)} color={today >= goal ? "#A3E635" : "#2DE2E6"} className="mt-2" label="Daily XP goal" />
        <Link href="/quests" className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#2DE2E6] hover:underline">
          Daily ops <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
