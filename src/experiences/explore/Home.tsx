"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { BookOpen, Check, ChevronDown, Coins, Dumbbell, Flame, Gamepad2, Layers, Lock, PlayCircle, Star, Target, Trophy, Zap, type LucideIcon } from "lucide-react";
import type { Assessment, CourseLesson, CourseOutline, CourseUnit, ItemKind } from "@/content/course";
import { useLearner } from "@/lib/store";
import { courseProgress, lessonProgress } from "@/lib/progress";
import { dayKey, questsForDay, type QuestDef } from "@/lib/gamification";
import { preloadLiveVoice, say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { useBcp47, useT } from "@/i18n";
import { useHydrated } from "@/components/providers";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { ITEM_ICON } from "@/components/learn/LearnPath";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { STICKERS, awardExploreSticker, checkStreakSticker, type Sticker } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import { Chest, EX, EX_ROTATION, FatBar, KidDialog, ReadAloud, chunky, useExploreStats, type Col } from "./ui";

const GREET_KEY = "qa-explore-greeted";

/** Winding path offsets (px), like Duolingo's snake. */
const OFFSETS = [0, 46, 72, 46, 0, -46, -72, -46];

const KIND_WORD: Record<ItemKind, [string, string]> = {
  video: ["explore.kind.video", "Watch"],
  article: ["explore.kind.article", "Story"],
  cards: ["explore.kind.cards", "Flip cards"],
  practice: ["explore.kind.practice", "Quiz time"],
  challenge: ["explore.kind.challenge", "Challenge"],
};

/* ------------------------------------------------------------------ */

/** Explore home: a Duolingo-style winding path with a right rail of streak, goal, quests and stickers. */
export function ExploreHomeV2() {
  const t = useT();
  const hydrated = useHydrated();
  const catalog = useCatalog();
  const profileCourse = useLearner((s) => s.profile.course);
  const setProfile = useLearner((s) => s.setProfile);
  const stats = useExploreStats();
  const [picker, setPicker] = useState(false);

  // Primary-school courses, plus whatever course the learner already picked.
  const courses = useMemo(() => catalog.filter((c) => c.world === "kids" || c.slug === profileCourse), [catalog, profileCourse]);
  const course = hydrated ? (courses.find((c) => c.slug === profileCourse)?.slug ?? null) : null;
  const outline = useOutline(course);

  const hello = course ? t("explore.voice.welcome", EXPLORE_LINES.welcome) : t("explore.voice.chooseCourse", EXPLORE_LINES.chooseCourse);

  useEffect(() => {
    if (!hydrated) return;
    preloadLiveVoice();
    try {
      if (localStorage.getItem(GREET_KEY) !== dayKey()) {
        localStorage.setItem(GREET_KEY, dayKey());
        const tm = setTimeout(() => say(hello), 700);
        return () => clearTimeout(tm);
      }
    } catch {
      /* storage blocked: stay quiet */
    }
  }, [hello, hydrated]);

  useEffect(() => {
    if (stats.ready) checkStreakSticker(stats.streak);
  }, [stats.ready, stats.streak]);

  const pick = (slug: string, title: string) => {
    setProfile({ course: slug });
    setPicker(false);
    say(title);
  };

  const statsRow = <StatsRow course={course} onPickCourse={() => setPicker(true)} />;

  return (
    <div className="mx-auto flex max-w-[1080px] justify-center gap-10 px-4 pb-12 sm:px-6">
      <div className="w-full min-w-0 max-w-[600px]">
        <div className="ex-statsbar sticky top-0 z-30 -mx-4 mb-2 px-4 py-2.5 sm:-mx-6 sm:px-6 lg:hidden">{statsRow}</div>
        <div className="pt-2 lg:pt-7">
          {!hydrated || (course && !outline) ? (
            <PathSkeleton />
          ) : !course || !outline ? (
            <CourseChooser courses={courses} onPick={pick} />
          ) : (
            <PathView outline={outline} />
          )}
        </div>
        <div className="mt-12 space-y-5 lg:hidden">
          <RailCards />
        </div>
      </div>

      <aside className="sticky top-0 hidden h-fit max-h-screen w-[340px] shrink-0 space-y-5 overflow-y-auto pb-6 pt-7 lg:block" aria-label={t("explore.rail.label", "My progress")}>
        {statsRow}
        <RailCards />
      </aside>

      <KidDialog open={picker} onClose={() => setPicker(false)} title={t("explore.pick.title", "Pick an adventure")} color={EX.blue} labelledBy="ex-pick-title">
        <CourseGrid courses={courses} current={course} onPick={pick} />
      </KidDialog>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Top stats: course, streak, stars, XP                                */

function StatsRow({ course, onPickCourse }: { course: string | null; onPickCourse: () => void }) {
  const t = useT();
  const bcp = useBcp47();
  const st = useExploreStats();
  const fmt = (n: number) => new Intl.NumberFormat(bcp).format(n);
  const streakLit = st.ready && st.lastDay === dayKey();
  return (
    <div className="flex items-center justify-between gap-1.5">
      <button type="button" onClick={onPickCourse} className="ex-press ex-chip flex items-center gap-1 rounded-2xl px-2 py-1.5" aria-label={t("explore.stats.course", "Change adventure")}>
        {course ? <CourseIcon slug={course} size={32} /> : <BookOpen className="h-7 w-7 text-[#2F80FF]" strokeWidth={2.6} aria-hidden />}
        <ChevronDown className="h-5 w-5 text-muted" strokeWidth={3} aria-hidden />
      </button>
      <StatChip icon={<Flame className={clsx("h-7 w-7", streakLit ? "fill-[#FF9600] text-[#FF7A00]" : "text-[rgb(var(--line))]")} strokeWidth={2.4} />} value={fmt(st.streak)} color={streakLit ? "#FF7A00" : "rgb(var(--muted))"} label={t("explore.stats.streak", "{n} day streak", { n: st.streak })} href="/profile" />
      <StatChip icon={<Star className="h-7 w-7 fill-[#FFC21A] text-[#D99A00]" strokeWidth={2.2} />} value={fmt(st.stars)} color="#C98A00" label={t("explore.stats.stars", "{n} stars: one for every lesson you finish", { n: st.stars })} href="/profile" />
      <StatChip icon={<Zap className="h-7 w-7 fill-[#8B5CF6] text-[#6A3FD6]" strokeWidth={2.2} />} value={fmt(st.xp)} color="#6A3FD6" label={t("explore.stats.xp", "{n} XP", { n: st.xp })} href="/profile" />
    </div>
  );
}

function StatChip({ icon, value, color, label, href }: { icon: React.ReactNode; value: string; color: string; label: string; href: string }) {
  return (
    <Link href={href} title={label} aria-label={label} className="ex-press flex items-center gap-1 rounded-2xl px-2 py-1.5 text-lg font-black tabular-nums hover:bg-surface-2" style={{ color }}>
      <span aria-hidden>{icon}</span>
      {value}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Course chooser                                                      */

type CourseLite = { slug: string; title: string };

function CourseChooser({ courses, onPick }: { courses: CourseLite[]; onPick: (slug: string, title: string) => void }) {
  const t = useT();
  const line = t("explore.voice.chooseCourse", EXPLORE_LINES.chooseCourse);
  return (
    <section aria-labelledby="ex-choose">
      <div className="flex items-end gap-3">
        <Mascot pose="wave" size={96} />
        <div className="ex-bubble relative mb-4 min-w-0 flex-1 px-4 py-3">
          <h1 id="ex-choose" className="text-2xl font-black leading-tight">
            {t("explore.pick.title", "Pick an adventure")}
          </h1>
          <p className="font-bold text-muted">{t("explore.pick.sub", "Tap a picture to start!")}</p>
          <ReadAloud text={line} size="sm" className="absolute -right-2 -top-3" />
        </div>
      </div>
      <div className="mt-4">
        <CourseGrid courses={courses} current={null} onPick={onPick} />
      </div>
    </section>
  );
}

function CourseGrid({ courses, current, onPick }: { courses: CourseLite[]; current: string | null; onPick: (slug: string, title: string) => void }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {courses.map((c, i) => {
        const col = EX_ROTATION[i % EX_ROTATION.length];
        const active = c.slug === current;
        return (
          <li key={c.slug}>
            <button
              type="button"
              onClick={() => onPick(c.slug, c.title)}
              aria-pressed={active}
              className="ex-press ex-tile flex h-full w-full flex-col items-center gap-2 rounded-[1.5rem] border-[3px] p-3"
              style={active ? { borderColor: col.c, boxShadow: `0 5px 0 ${col.s}` } : undefined}
            >
              <CourseIcon slug={c.slug} size={64} />
              <span className="text-center text-[15px] font-extrabold leading-tight">{c.title}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function PathSkeleton() {
  return (
    <div className="space-y-6" aria-hidden>
      <div className="h-[92px] animate-pulse rounded-[1.5rem] bg-white/70 dark:bg-white/5" />
      {OFFSETS.slice(0, 5).map((o, i) => (
        <div key={i} className="flex justify-center">
          <div className="h-[70px] w-[76px] animate-pulse rounded-full bg-white/70 dark:bg-white/5" style={{ transform: `translateX(${o}px)` }} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The path                                                            */

type NodeState = "done" | "current" | "open" | "locked";

type PathNode =
  | { key: string; kind: "lesson"; state: NodeState; lesson: CourseLesson; n: number; href: string; xp: number; ring: number }
  | { key: string; kind: "chest"; state: NodeState; contextKey: string }
  | { key: string; kind: "quiz" | "test"; state: NodeState; a: Assessment };

function chestContext(u: CourseUnit) {
  return `chest-${u.slug}`;
}

function PathView({ outline }: { outline: CourseOutline }) {
  const t = useT();
  const s = useLearner();
  const cp = courseProgress(s, outline);
  const [open, setOpen] = useState<string | null>(null);
  const [guide, setGuide] = useState<CourseUnit | null>(null);
  const [prize, setPrize] = useState<{ sticker: Sticker | null } | null>(null);
  const currentRef = useRef<HTMLLIElement>(null);
  const scrolled = useRef<string | null>(null);

  // Bring the current lesson into view once per course.
  useEffect(() => {
    if (scrolled.current === outline.slug) return;
    scrolled.current = outline.slug;
    const el = currentRef.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight * 0.75) el.scrollIntoView({ block: "center" });
  }, [outline.slug]);

  // Close the popover on outside tap / Escape.
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !(e.target as HTMLElement).closest("[data-ex-node]") && setOpen(null);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  const openChest = (contextKey: string) => {
    const sticker = awardExploreSticker("lesson-complete", contextKey, { silent: true });
    setOpen(null);
    setPrize({ sticker });
    say(sticker ? t("explore.voice.sticker", EXPLORE_LINES.sticker) : t("explore.chest.allVoice", "You have collected every sticker. Amazing!"));
  };

  const units = outline.units.map((u) => {
    const nodes: PathNode[] = [];
    const half = Math.ceil(u.lessons.length / 2);
    const lessonNode = (l: CourseLesson, i: number): PathNode => {
      const p = lessonProgress(s, l);
      return {
        key: l.id,
        kind: "lesson",
        state: p.complete ? "done" : l.id === cp.next?.id ? "current" : "locked",
        lesson: l,
        n: i + 1,
        href: p.nextItem.href,
        xp: l.items.reduce((sum, it) => sum + (it.xp || 0), 0),
        ring: p.itemsTotal ? p.itemsDone / p.itemsTotal : 0,
      };
    };
    const allDone = (ids: string[]) => ids.every((id) => {
      const l = u.lessons.find((x) => x.id === id);
      return l ? lessonProgress(s, l).complete : true;
    });
    const assess = (a: Assessment, kind: "quiz" | "test"): PathNode => ({
      key: a.key,
      kind,
      a,
      state: s.assessments[a.key] !== undefined ? "done" : allDone(kind === "quiz" ? a.covers : u.lessons.map((l) => l.id)) ? "open" : "locked",
    });

    u.lessons.slice(0, half).forEach((l, i) => nodes.push(lessonNode(l, i)));
    if (u.quiz) nodes.push(assess(u.quiz, "quiz"));
    if (u.lessons.length > 1) {
      const ctx = chestContext(u);
      const opened = Boolean(s.items[`sticker:lesson-complete:${ctx}`]);
      nodes.push({ key: `${u.slug}:chest`, kind: "chest", contextKey: ctx, state: opened ? "done" : allDone(u.lessons.slice(0, half).map((l) => l.id)) ? "open" : "locked" });
    }
    u.lessons.slice(half).forEach((l, i) => nodes.push(lessonNode(l, half + i)));
    nodes.push(assess(u.test, "test"));
    return { u, nodes };
  });

  return (
    <div className="space-y-10">
      {units.map(({ u, nodes }) => {
        const col = EX_ROTATION[u.index % EX_ROTATION.length];
        return (
          <section key={u.slug} aria-labelledby={`ex-unit-${u.slug}`}>
            <UnitBanner unit={u} col={col} onGuide={() => setGuide(u)} />
            <ol className="relative mt-8 flex flex-col items-center gap-[22px]">
              {nodes.map((node, i) => {
                const off = OFFSETS[i % OFFSETS.length];
                const isCurrent = node.state === "current";
                return (
                  <li key={node.key} ref={isCurrent ? currentRef : undefined} className="relative flex w-full justify-center" data-ex-node>
                    <PathNodeButton node={node} col={col} off={off} open={open === node.key} onToggle={() => setOpen((o) => (o === node.key ? null : node.key))} />
                    {isCurrent && (
                      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2" style={{ left: `calc(50% + ${off + (off > 0 ? -150 : 82)}px)` }} aria-hidden>
                        <Mascot pose="cheer" size={68} />
                      </div>
                    )}
                    {open === node.key && <NodePopover node={node} col={col} off={off} unit={u} onOpenChest={openChest} />}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}

      {!cp.next && (
        <button type="button" onClick={() => say(t("explore.voice.allDone", EXPLORE_LINES.allDone))} className="ex-press flex w-full items-center justify-center gap-4 rounded-[2rem] p-6 text-2xl font-black text-[#4a3500]" style={chunky(EX.yellow, 7)}>
          <Trophy className="h-9 w-9" strokeWidth={2.6} aria-hidden /> {t("explore.path.allDone", "You finished every lesson here!")}
        </button>
      )}

      <GuideDialog unit={guide} onClose={() => setGuide(null)} />
      <KidDialog
        open={Boolean(prize)}
        onClose={() => setPrize(null)}
        title={prize?.sticker ? t("explore.chest.found", "You found a sticker!") : t("explore.chest.full", "Treasure opened!")}
        color={EX.orange}
        labelledBy="ex-prize"
        footer={
          <button type="button" onClick={() => setPrize(null)} className="ex-press ex-bigbtn w-full rounded-[1.25rem] px-6 py-3.5 text-xl font-black text-white" style={chunky(EX.green, 6)}>
            {t("explore.continue", "Continue")}
          </button>
        }
      >
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          {prize?.sticker ? (
            <>
              <motion.div initial={{ scale: 0.2, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 240, damping: 11 }}>
                <StickerTile sticker={prize.sticker} owned size={128} />
              </motion.div>
              <p className="text-2xl font-black">{t(`explore.sticker.${prize.sticker.id}`, prize.sticker.name)}</p>
              <Link href="/stickers" className="font-black text-[#C02677] underline decoration-2 underline-offset-4 dark:text-[#FF8CC6]">
                {t("explore.stickers.open", "Open my sticker book")}
              </Link>
            </>
          ) : (
            <>
              <Chest size={120} open />
              <p className="text-xl font-black">{t("explore.chest.allStickers", "You already have every sticker. Wow!")}</p>
            </>
          )}
        </div>
      </KidDialog>
    </div>
  );
}

function UnitBanner({ unit: u, col, onGuide }: { unit: CourseUnit; col: Col; onGuide: () => void }) {
  const t = useT();
  return (
    <header className="ex-unit flex items-center gap-3 rounded-[1.5rem] px-5 py-4 text-white" style={{ background: col.c, boxShadow: `0 5px 0 ${col.s}` }}>
      <div className="min-w-0 flex-1">
        <p className="text-[0.95rem] font-black uppercase tracking-wide text-white/85">{t("explore.unit.n", "Unit {n}", { n: u.index + 1 })}</p>
        <h2 id={`ex-unit-${u.slug}`} className="text-[1.35rem] font-black leading-tight">
          {u.title}
        </h2>
      </div>
      <button
        type="button"
        onClick={onGuide}
        className="ex-press flex shrink-0 items-center gap-2 rounded-2xl border-2 border-white/45 px-3 py-2.5 text-base font-black uppercase tracking-wide"
        style={{ boxShadow: `inset 0 -4px 0 ${col.s}` }}
        aria-label={t("explore.unit.guideFor", "Guide for unit {n}: {title}", { n: u.index + 1, title: u.title })}
      >
        <BookOpen className="h-6 w-6" strokeWidth={2.6} aria-hidden />
        <span className="hidden min-[380px]:inline">{t("explore.unit.guide", "Guide")}</span>
      </button>
    </header>
  );
}

const NODE_GREY: Col = { c: "rgb(var(--line))", s: "rgb(var(--ex-node-shade))" };

function PathNodeButton({ node, col, off, open, onToggle }: { node: PathNode; col: Col; off: number; open: boolean; onToggle: () => void }) {
  const t = useT();
  const reduce = useReducedMotion();
  const locked = node.state === "locked";
  const look: Col = locked ? NODE_GREY : node.state === "done" && node.kind === "lesson" ? EX.yellow : col;
  const isCurrent = node.state === "current";

  let label = "";
  let inner: React.ReactNode = null;
  if (node.kind === "lesson") {
    label = node.lesson.title;
    inner = node.state === "done" ? <Check className="h-9 w-9 text-white" strokeWidth={4} /> : <Star className={clsx("h-9 w-9", locked ? "fill-[rgb(var(--ex-node-shade))] text-[rgb(var(--ex-node-shade))]" : "fill-white text-white")} strokeWidth={2} />;
  } else if (node.kind === "chest") {
    label = t("explore.path.chest", "Treasure chest");
  } else {
    label = node.kind === "quiz" ? t("explore.path.quiz", "Star quiz") : t("explore.path.test", "Unit trophy");
    const Icon = node.kind === "quiz" ? Dumbbell : Trophy;
    inner = <Icon className={clsx("h-9 w-9", locked ? "text-[rgb(var(--ex-node-shade))]" : "text-white")} strokeWidth={2.6} />;
  }
  const status = node.state === "done" ? t("explore.path.statusDone", "done") : isCurrent ? t("explore.path.statusNext", "play next") : locked ? t("explore.path.statusLocked", "locked") : t("explore.path.statusOpen", "ready");

  return (
    <div className="relative" style={{ transform: `translateX(${off}px)` }}>
      {isCurrent && (
        <motion.div
          className="ex-start pointer-events-none absolute -top-[58px] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-base font-black uppercase tracking-wide"
          style={{ color: col.c }}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          aria-hidden
        >
          {t("explore.path.start", "Start")}
        </motion.div>
      )}
      {isCurrent && node.kind === "lesson" && <Ring value={node.ring} color={col.c} />}
      {node.kind === "chest" ? (
        <button type="button" onClick={onToggle} aria-expanded={open} aria-label={`${label}, ${status}`} className={clsx("ex-chest relative grid h-[84px] w-[96px] place-items-center", node.state === "open" && !reduce && "ex-wiggle")}>
          <Chest size={92} open={node.state === "done"} grey={locked} />
        </button>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-current={isCurrent ? "step" : undefined}
          aria-label={`${label}, ${status}`}
          className={clsx("ex-node relative grid place-items-center", node.kind === "test" ? "ex-node-trophy" : "")}
          style={{ "--n": look.c, "--ns": look.s } as React.CSSProperties}
        >
          <span className="pointer-events-none absolute left-[18%] top-[14%] h-[18%] w-[30%] rounded-full bg-white/30" aria-hidden />
          <span className="-translate-y-[3px]" aria-hidden>
            {inner}
          </span>
        </button>
      )}
    </div>
  );
}

function Ring({ value, color }: { value: number; color: string }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <svg className="pointer-events-none absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-[54%]" viewBox="0 0 100 100" aria-hidden>
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgb(var(--line))" strokeWidth="8" />
      <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${c * Math.max(0.02, value)} ${c}`} transform="rotate(-90 50 50)" />
    </svg>
  );
}

function NodePopover({ node, col, off, unit, onOpenChest }: { node: PathNode; col: Col; off: number; unit: CourseUnit; onOpenChest: (ctx: string) => void }) {
  const t = useT();
  const locked = node.state === "locked";
  const bg: Col = locked ? { c: "rgb(var(--surface))", s: "rgb(var(--line))" } : col;
  const ink = locked ? "rgb(var(--ink))" : "#fff";

  let title = "";
  let sub = "";
  let action: React.ReactNode = null;
  const btn = "ex-press mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-lg font-black uppercase tracking-wide";
  const whiteBtn = { background: "#fff", color: col.c, boxShadow: "inset 0 -5px 0 rgb(0 0 0 / 0.14)" };

  if (node.kind === "lesson") {
    title = node.lesson.title;
    sub = t("explore.pop.lessonOf", "Lesson {n} of {total}", { n: node.n, total: unit.lessons.length });
    if (locked) {
      action = (
        <>
          <p className="mt-2 font-bold text-muted">{t("explore.pop.locked", "Finish the circles above to unlock this!")}</p>
          <Link href={node.href} className="mt-2 inline-block text-sm font-black text-[#2F80FF] underline decoration-2 underline-offset-4">
            {t("explore.pop.peek", "Peek inside")}
          </Link>
        </>
      );
    } else {
      action = (
        <Link href={node.href} onClick={() => say(t("explore.voice.letsGo", EXPLORE_LINES.letsGo))} className={btn} style={whiteBtn}>
          {node.state === "done" ? t("explore.pop.again", "Play again") : node.xp > 0 ? t("explore.pop.startXp", "Start +{xp} XP", { xp: node.xp }) : t("explore.pop.start", "Start")}
        </Link>
      );
    }
  } else if (node.kind === "chest") {
    title = t("explore.path.chest", "Treasure chest");
    if (node.state === "done") sub = t("explore.pop.chestDone", "You opened this chest!");
    else if (locked) sub = t("explore.pop.chestLocked", "Finish the lessons before it to open the treasure.");
    else {
      sub = t("explore.pop.chestReady", "A sticker is waiting inside!");
      action = (
        <button type="button" onClick={() => onOpenChest(node.contextKey)} className={btn} style={whiteBtn}>
          {t("explore.pop.openChest", "Open it!")}
        </button>
      );
    }
  } else {
    title = node.kind === "quiz" ? t("explore.path.quiz", "Star quiz") : t("explore.path.test", "Unit trophy");
    sub = node.kind === "quiz" ? t("explore.pop.quizSub", "Show what you learned in the first lessons.") : t("explore.pop.testSub", "Win the trophy for {unit}!", { unit: unit.title });
    action = locked ? (
      <>
        <p className="mt-2 font-bold text-muted">{t("explore.pop.testLocked", "Finish the lessons first for your best try.")}</p>
        <Link href={node.a.href} className="mt-2 inline-block text-sm font-black text-[#2F80FF] underline decoration-2 underline-offset-4">
          {t("explore.pop.tryAnyway", "Try it anyway")}
        </Link>
      </>
    ) : (
      <Link href={node.a.href} onClick={() => say(t("explore.voice.readyQuiz", EXPLORE_LINES.readyQuiz))} className={btn} style={whiteBtn}>
        {node.state === "done" ? t("explore.pop.again", "Play again") : t("explore.pop.start", "Start")}
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="ex-pop absolute left-1/2 top-[calc(100%+14px)] z-30 w-[min(310px,100%)] -translate-x-1/2 rounded-[1.25rem] p-4"
      style={{ background: bg.c, color: ink, boxShadow: locked ? `0 0 0 3px ${bg.s}, 0 5px 0 3px ${bg.s}` : `0 5px 0 ${bg.s}` }}
      role="dialog"
      aria-label={title}
    >
      <span className="absolute -top-2 h-4 w-4 rotate-45" style={{ left: `calc(50% + ${off}px - 8px)`, background: bg.c, boxShadow: locked ? `-3px -3px 0 0 ${bg.s}` : undefined }} aria-hidden />
      <div className="relative flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-xl font-black leading-tight">{title}</p>
          {sub && <p className={clsx("mt-0.5 font-bold", locked ? "text-muted" : "text-white/85")}>{sub}</p>}
        </div>
        <ReadAloud text={sub ? `${title}. ${sub}` : title} size="sm" className={locked ? "" : "!bg-white/25 !shadow-none"} />
      </div>
      {action}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Unit guide: a picture guide of the unit's lessons                   */

function GuideDialog({ unit, onClose }: { unit: CourseUnit | null; onClose: () => void }) {
  const t = useT();
  const s = useLearner();
  const col = unit ? EX_ROTATION[unit.index % EX_ROTATION.length] : EX.blue;
  const current = unit?.lessons.find((l) => !lessonProgress(s, l).complete);
  return (
    <KidDialog
      open={Boolean(unit)}
      onClose={onClose}
      color={col}
      labelledBy="ex-guide"
      eyebrow={unit ? t("explore.guide.eyebrow", "Unit {n} guide", { n: unit.index + 1 }) : undefined}
      title={unit?.title ?? ""}
      footer={
        current ? (
          <Link href={lessonProgress(s, current).nextItem.href} className="ex-press ex-bigbtn flex w-full items-center justify-center rounded-[1.25rem] px-6 py-3.5 text-xl font-black text-white" style={chunky(EX.green, 6)}>
            {t("explore.guide.play", "Play “{title}”", { title: current.title })}
          </Link>
        ) : (
          <button type="button" onClick={onClose} className="ex-press ex-bigbtn w-full rounded-[1.25rem] px-6 py-3.5 text-xl font-black text-white" style={chunky(EX.green, 6)}>
            {t("explore.guide.gotIt", "Got it!")}
          </button>
        )
      }
    >
      {unit && (
        <>
          <div className="flex items-start gap-3">
            <Mascot pose="read" size={72} animate={false} />
            <div className="min-w-0 flex-1">
              <p className="text-lg font-bold">{unit.description || t("explore.guide.intro", "Here is everything you will learn in this unit.")}</p>
              <ReadAloud text={`${unit.title}. ${unit.description}`} withWord size="sm" className="mt-2" />
            </div>
          </div>
          <ol className="mt-5 space-y-3">
            {unit.lessons.map((l, i) => {
              const p = lessonProgress(s, l);
              const c = EX_ROTATION[(unit.index + i) % EX_ROTATION.length];
              return (
                <li key={l.id}>
                  <Link href={p.nextItem.href} className="ex-press ex-tile flex items-start gap-3 rounded-[1.25rem] border-[3px] p-3">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl font-black text-white" style={chunky(p.complete ? EX.yellow : c, 5)}>
                      {p.complete ? <Star className="h-7 w-7 fill-white text-white" aria-hidden /> : i + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-black leading-tight">{l.title}</span>
                      {l.summary && <span className="mt-0.5 block font-semibold leading-snug text-muted">{l.summary}</span>}
                      <span className="mt-2 flex flex-wrap gap-1.5">
                        {l.items.map((it) => {
                          const Icon = ITEM_ICON[it.kind];
                          const [k, en] = KIND_WORD[it.kind];
                          return (
                            <span key={it.id} className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2.5 py-1 text-sm font-black">
                              <Icon className="h-4 w-4" style={{ color: c.c }} strokeWidth={2.6} aria-hidden />
                              {t(k, en)}
                            </span>
                          );
                        })}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </KidDialog>
  );
}

/* ------------------------------------------------------------------ */
/* Right rail                                                          */

function RailCards() {
  const hydrated = useHydrated();
  if (!hydrated) return null;
  return (
    <>
      <StreakCard />
      <GoalCard />
      <QuestCard />
      <StickerCard />
      <GamesCard />
    </>
  );
}

function RailCard({ title, children, action, read }: { title: string; children: React.ReactNode; action?: { href: string; label: string }; read?: string }) {
  return (
    <section className="ex-rail p-5">
      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-xl font-black">{title}</h2>
        {read && <ReadAloud text={read} size="sm" />}
        {action && (
          <Link href={action.href} className="ml-auto rounded-full px-2 py-1 text-sm font-black uppercase tracking-wide text-[#2F80FF] hover:bg-surface-2">
            {action.label}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

function StreakCard() {
  const t = useT();
  const bcp = useBcp47();
  const st = useExploreStats();
  const daily = useLearner((s) => s.daily);
  const lit = st.lastDay === dayKey();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() - (6 - i) * 86400000);
    return { key: dayKey(d), label: new Intl.DateTimeFormat(bcp, { weekday: "narrow" }).format(d), on: (daily[dayKey(d)]?.xp ?? 0) > 0 };
  });
  const msg = lit ? t("explore.streak.lit", "You learned today. Your flame is burning bright!") : st.streak > 0 ? t("explore.streak.keep", "Do one lesson today to keep your flame going!") : t("explore.streak.start", "Finish a lesson to light your flame!");
  return (
    <RailCard title={t("explore.streak.title", "My streak")} read={`${t("explore.stats.streak", "{n} day streak", { n: st.streak })}. ${msg}`}>
      <div className="flex items-center gap-3">
        <span className={clsx("grid h-16 w-16 shrink-0 place-items-center rounded-2xl", lit ? "bg-[#FFF0DB] dark:bg-[#3a2a14]" : "bg-surface-2")}>
          <Flame className={clsx("h-10 w-10", lit ? "fill-[#FF9600] text-[#FF7A00]" : "text-[rgb(var(--line))]")} strokeWidth={2.2} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-2xl font-black leading-none">{t("explore.stats.streak", "{n} day streak", { n: st.streak })}</p>
          <p className="mt-1 font-bold leading-snug text-muted">{msg}</p>
        </div>
      </div>
      <ol className="mt-4 grid grid-cols-7 gap-1" aria-label={t("explore.streak.week", "This week")}>
        {days.map((d) => (
          <li key={d.key} className="flex flex-col items-center gap-1">
            <span className={clsx("grid h-9 w-9 place-items-center rounded-full", d.on ? "bg-[#FF9600] text-white" : "bg-surface-2 text-[rgb(var(--line))]")} aria-label={d.on ? t("explore.streak.dayOn", "learned") : t("explore.streak.dayOff", "no lesson")}>
              <Flame className={clsx("h-5 w-5", d.on && "fill-white")} strokeWidth={2.4} aria-hidden />
            </span>
            <span className="text-xs font-black text-muted">{d.label}</span>
          </li>
        ))}
      </ol>
    </RailCard>
  );
}

function GoalCard() {
  const t = useT();
  const st = useExploreStats();
  const done = st.todayXp >= st.goal;
  const msg = done ? t("explore.goal.done", "Goal reached! You are a star today.") : t("explore.goal.left", "{n} more XP to reach today’s goal.", { n: Math.max(0, st.goal - st.todayXp) });
  return (
    <RailCard title={t("explore.goal.title", "Daily goal")} read={msg}>
      <div className="flex items-center gap-3">
        <Mascot pose={done ? "cheer" : "idle"} size={64} animate={false} />
        <div className="min-w-0 flex-1">
          <p className="font-bold leading-snug">{msg}</p>
          <div className="mt-2 flex items-center gap-2">
            <FatBar value={st.todayXp / st.goal} color={EX.yellow} height={20} label={t("explore.goal.title", "Daily goal")} />
            <span className="shrink-0 text-sm font-black tabular-nums text-muted">
              {Math.min(st.todayXp, st.goal)}/{st.goal}
            </span>
          </div>
        </div>
      </div>
    </RailCard>
  );
}

const QUEST_ICON: Record<string, LucideIcon> = { zap: Zap, "book-open": BookOpen, library: BookOpen, "circle-check": Check, target: Target, layers: Layers, play: PlayCircle, puzzle: Star, repeat: Layers, gamepad: Gamepad2 };

function QuestCard() {
  const t = useT();
  const s = useLearner();
  const today = dayKey();
  const data = s.daily[today];
  const quests = questsForDay(today, s.profile.worlds[0]);
  const claimed = s.questsClaimed[today] ?? [];
  const value = (q: QuestDef) => (q.metric === "xp" ? (data?.xp ?? 0) : (data?.counters[q.metric] ?? 0));
  return (
    <RailCard title={t("explore.quests.title", "Daily quests")}>
      <ul className="space-y-4">
        {quests.map((q) => {
          const v = value(q);
          const done = v >= q.target;
          const isClaimed = claimed.includes(q.id);
          const Icon = QUEST_ICON[q.icon] ?? Star;
          const title = t(`explore.quest.${q.id}`, q.title);
          return (
            <li key={q.id} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={chunky(done ? EX.yellow : EX.purple, 4)}>
                <Icon className="h-6 w-6 text-white" strokeWidth={2.6} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="min-w-0 flex-1 font-extrabold leading-tight">{title}</p>
                  <ReadAloud text={title} size="sm" className="!h-7 !min-w-7" />
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <FatBar value={v / q.target} color={EX.yellow} height={16} />
                  <span className="shrink-0 text-xs font-black tabular-nums text-muted">
                    {Math.min(v, q.target)}/{q.target}
                  </span>
                </div>
              </div>
              {done && !isClaimed ? (
                <button type="button" onClick={() => s.claimQuest(q.id)} className="ex-press flex shrink-0 items-center gap-1 rounded-xl px-2.5 py-2 text-sm font-black text-[#4a3500]" style={chunky(EX.yellow, 4)} aria-label={t("explore.quests.claim", "Collect {n} coins", { n: q.coins })}>
                  <Coins className="h-4 w-4" aria-hidden /> {q.coins}
                </button>
              ) : isClaimed ? (
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#DEF7E9] text-[#1F9B58] dark:bg-[#16342a]" aria-label={t("explore.quests.collected", "Collected")}>
                  <Check className="h-5 w-5" strokeWidth={3.5} />
                </span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </RailCard>
  );
}

function StickerCard() {
  const t = useT();
  const st = useExploreStats();
  const line = t("explore.voice.stickerBook", EXPLORE_LINES.stickerBook);
  return (
    <RailCard title={t("explore.stickers.title", "My stickers")} read={line} action={{ href: "/stickers", label: t("explore.seeAll", "See all") }}>
      <Link href="/stickers" className="ex-shelf-board ex-press flex items-center gap-4 p-4" aria-label={t("explore.stickers.open", "Open my sticker book")}>
        {st.newest ? <StickerTile sticker={st.newest} owned size={76} /> : <StickerTile sticker={STICKERS[0]} owned={false} size={76} />}
        <div className="min-w-0 text-[#6B4300] dark:text-[#FFD9A0]">
          <p className="text-lg font-black leading-tight">{st.newest ? t("explore.stickers.newest", "Newest: {name}", { name: t(`explore.sticker.${st.newest.id}`, st.newest.name) }) : t("explore.stickers.none", "Your first sticker is waiting!")}</p>
          <p className="mt-0.5 font-bold">{t("explore.stickers.count", "{n} of {total} stickers", { n: st.stickers, total: STICKERS.length })}</p>
        </div>
      </Link>
    </RailCard>
  );
}

function GamesCard() {
  const t = useT();
  return (
    <Link href="/kids/play" onClick={() => say(t("explore.voice.games", EXPLORE_LINES.games))} className="ex-press flex items-center gap-4 rounded-[1.75rem] p-5 text-white" style={chunky(EX.pink, 7)}>
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/25">
        <Gamepad2 className="h-8 w-8" strokeWidth={2.6} aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xl font-black leading-tight">{t("explore.games.title", "Play a game")}</span>
        <span className="block font-bold text-white/85">{t("explore.games.sub", "Learn while you play!")}</span>
      </span>
    </Link>
  );
}
