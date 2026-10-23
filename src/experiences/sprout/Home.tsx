"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Check, Crown, Gamepad2, Layers, Lock, Play, RotateCcw, Star, Sun, Trophy, Tv, Volume2, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import { useLearner, liveStreak } from "@/lib/store";
import { courseProgress, lessonProgress, EMPTY_PROGRESS } from "@/lib/progress";
import { dayKey } from "@/lib/gamification";
import { preloadLiveVoice, say, sayQueue } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import type { CourseOutline, CourseUnit, ItemKind } from "@/content/course";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { useHydrated } from "@/components/providers";
import { STICKERS } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import { useT } from "@/i18n";
import { localize, useContentDict, useSharedText } from "@/i18n/content";
import { ChunkyLink, SUN, type SunHue } from "./ui";

const GREET_KEY = "qa-sprout-greeted";
/** Pre-primary courses first; other kids courses follow. */
const SPROUT_ORDER = ["abc-adventures", "number-land", "shapes-colors", "my-world"];
const DEFAULT_COURSE = "abc-adventures";

/** A picture for every unit banner (falls back by position). */
const UNIT_ART: Record<string, string> = {
  "letters-a-to-z": "🔤",
  "letter-sounds": "👂",
  "first-words": "📖",
  "rhyme-time": "🎵",
  multiplication: "✖️",
  division: "🍰",
  fractions: "🍕",
  "time-money-measure": "⏰",
  animals: "🐘",
  "my-body": "🧒",
  plants: "🌱",
  "weather-and-seasons": "🌦️",
  counting: "🔢",
  "more-or-less": "⚖️",
  "add-and-subtract": "➕",
  "hop-and-skip": "🐸",
  "flat-shapes": "🔺",
  "solid-shapes": "🧊",
  colours: "🎨",
  "patterns-and-positions": "🧩",
};
const FALLBACK_ART = ["🌈", "🚀", "🌻", "🐳", "🎈", "🦋"];
const UNIT_HUES: SunHue[] = ["mint", "sky", "berry", "butter", "lilac", "peach"];

/** Horizontal swing of the winding path, as a fraction of the amplitude. */
const SWING = [0, 0.6, 0.95, 0.6, 0, -0.6, -0.95, -0.6];
const AMP = 70;
const NODE = 84;

const KIND_PICTURE: Record<ItemKind, LucideIcon> = { video: Tv, article: BookOpen, cards: Layers, practice: Gamepad2, challenge: Gamepad2 };

type NodeState = "done" | "current" | "open" | "locked";

/** Sprout home: course pictures, then one winding path of big round lessons. */
export function SproutHome() {
  const t = useT();
  const hydrated = useHydrated();
  const catalog = useCatalog();
  const kids = useMemo(() => {
    const list = catalog.filter((c) => c.world === "kids");
    const rank = (slug: string) => SPROUT_ORDER.indexOf(slug) + 1 || 99;
    return [...list].sort((a, b) => rank(a.slug) - rank(b.slug));
  }, [catalog]);
  const profileCourse = useLearner((s) => s.profile.course);
  const setProfile = useLearner((s) => s.setProfile);
  const rawName = useLearner((s) => s.profile.name);
  const name = hydrated ? (rawName?.trim().split(" ")[0] ?? "") : "";
  const wanted = hydrated ? profileCourse : null;
  const course = kids.find((c) => c.slug === wanted)?.slug ?? kids.find((c) => c.slug === DEFAULT_COURSE)?.slug ?? kids[0]?.slug ?? null;
  const outline = useOutline(course);
  const tx = useSharedText();
  const dict = useContentDict(course ?? "");
  const shown = useMemo(() => localize(outline, dict), [outline, dict]);
  const s = useLearner();
  const st = hydrated ? s : EMPTY_PROGRESS;
  const assessments = hydrated ? s.assessments : {};
  const streak = hydrated ? liveStreak(s) : 0;

  const cp = outline ? courseProgress(st, outline) : null;
  const greeting = name ? t("sprout.home.hiName", "Hi {name}! I’m Questy.", { name }) : t("sprout.home.hi", "Hoot hoot! Hi, I’m Questy.");
  const pointLine = t("sprout.home.point", "Tap the bouncing circle to play!");

  // First visit of the day: Questy says hello and points at the path.
  useEffect(() => {
    preloadLiveVoice();
    if (!hydrated) return;
    try {
      if (localStorage.getItem(GREET_KEY) === dayKey()) return;
      localStorage.setItem(GREET_KEY, dayKey());
      const tm = setTimeout(() => sayQueue([greeting, pointLine]), 700);
      return () => clearTimeout(tm);
    } catch {
      /* storage blocked: stay quiet */
    }
  }, [hydrated, greeting, pointLine]);

  return (
    <div className="sprout-home mx-auto max-w-[760px] px-4 pt-2 sm:px-6">
      {/* Course pictures */}
      <section aria-label={t("sprout.home.chooseAria", "Choose what to play")}>
        <div className="flex items-center gap-2 px-1">
          <button
            onClick={() => say(t("sprout.home.chooseSay", EXPLORE_LINES.chooseCourse))}
            className="sprout-press grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface text-accent shadow-soft"
            aria-label={t("sprout.home.whatPictures", "What are these pictures?")}
          >
            <Volume2 className="h-6 w-6" strokeWidth={2.6} />
          </button>
          <span className="sprout-caption min-w-0 flex-1">{t("sprout.home.pick", "Pick a picture")}</span>
          {streak > 0 && (
            <button
              onClick={() => say(t("sprout.home.streakSay", "You played {n} days in a row. Hooray!", { n: streak }))}
              className="sprout-press flex shrink-0 items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 shadow-soft"
              aria-label={t("sprout.home.streakAria", "{n} days in a row", { n: streak })}
            >
              <Sun className="h-6 w-6 fill-[#FFC93C] text-[#E3A51C]" strokeWidth={2.4} />
              <span className="text-lg font-extrabold text-ink">{streak}</span>
            </button>
          )}
          {cp && cp.complete > 0 && (
            <button
              onClick={() => say(t("sprout.home.starsSay", "You have {n} stars here. Super!", { n: cp.complete }))}
              className="sprout-press flex shrink-0 items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 shadow-soft"
              aria-label={t("sprout.home.starsAria", "{n} stars", { n: cp.complete })}
            >
              <Star className="h-6 w-6 fill-[#FFC93C] text-[#E3A51C]" strokeWidth={2} />
              <span className="text-lg font-extrabold text-ink">{cp.complete}</span>
            </button>
          )}
        </div>
        <div className="sprout-carousel -mx-4 mt-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-2 sm:-mx-6 sm:px-6">
          {kids.map((c) => {
            const active = c.slug === course;
            const cs = courseStyle(c.slug);
            return (
              <button
                key={c.slug}
                onClick={() => {
                  setProfile({ course: c.slug });
                  say(tx(c.title));
                }}
                aria-pressed={active}
                aria-label={tx(c.title)}
                className={clsx("sprout-press flex w-[118px] shrink-0 snap-start flex-col items-center gap-2 rounded-[1.8rem] p-3 transition", active ? "sprout-card-on" : "sprout-card")}
                style={active ? { background: `${cs.color}22`, boxShadow: `0 0 0 4px ${cs.color}, 0 16px 30px -16px ${cs.shade}` } : undefined}
              >
                <CourseIcon slug={c.slug} size={76} />
                <span className="sprout-caption line-clamp-2 text-center leading-tight">{tx(c.title)}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* The path */}
      {shown && cp ? (
        <CoursePath outline={shown} nextId={cp.next?.id ?? null} st={st} assessments={assessments} />
      ) : (
        <div className="mt-6 flex flex-col items-center gap-8" aria-hidden>
          <div className="h-24 w-full animate-pulse rounded-[2rem] bg-surface-2" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-[84px] w-[84px] animate-pulse rounded-full bg-surface-2" style={{ transform: `translateX(${SWING[i] * AMP}px)` }} />
          ))}
        </div>
      )}

      {outline && cp && !cp.next && (
        <button onClick={() => say(t("sprout.home.allDoneSay", EXPLORE_LINES.allDone))} className="sprout-hero mt-10 flex w-full flex-col items-center rounded-[3rem] px-6 pb-8 pt-7" aria-label={t("sprout.home.allDoneAria", "You finished it all")}>
          <span className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.15, type: "spring" }}>
                <Star className="h-16 w-16 fill-[#FFC93C] text-[#E3A51C]" strokeWidth={1.5} />
              </motion.span>
            ))}
          </span>
          <span className="mt-4 text-[1.7rem] font-extrabold">{t("sprout.home.allDone", "All done!")}</span>
          <span className="sprout-caption mt-1">{t("sprout.home.pickNew", "Pick a new picture at the top")}</span>
        </button>
      )}

      <StickerShelf />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The winding path                                                     */
/* ------------------------------------------------------------------ */

type St = typeof EMPTY_PROGRESS;

function CoursePath({ outline, nextId, st, assessments }: { outline: CourseOutline; nextId: string | null; st: St; assessments: Record<string, number> }) {
  const t = useT();
  const [open, setOpen] = useState<string | null>(null);
  const currentRef = useRef<HTMLLIElement>(null);
  const scrolled = useRef<string | null>(null);

  // Bring the current lesson into view once per course (only if it is below the fold).
  useEffect(() => {
    if (scrolled.current === outline.slug) return;
    scrolled.current = outline.slug;
    const el = currentRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top > window.innerHeight * 0.75) el.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [outline.slug, nextId]);

  // Close the bubble on Escape.
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const away = (e: PointerEvent) => !(e.target as HTMLElement | null)?.closest?.("[data-sprout-pop]") && setOpen(null);
    window.addEventListener("keydown", key);
    window.addEventListener("pointerdown", away);
    return () => {
      window.removeEventListener("keydown", key);
      window.removeEventListener("pointerdown", away);
    };
  }, [open]);

  const order = outline.units.flatMap((u) => u.lessons.map((l) => l.id));
  const nextIdx = nextId ? order.indexOf(nextId) : order.length;
  let step = 0;

  return (
    <div className="sprout-path relative mt-4 pb-6">
      {outline.units.map((u, ui) => {
        const complete = u.lessons.every((l) => lessonProgress(st, l).complete);
        const testDone = assessments[u.test.key] !== undefined;
        return (
          <section key={u.slug} aria-label={t("sprout.path.unitAria", "Unit {n}: {title}", { n: ui + 1, title: u.title })} className="mb-6">
            <UnitBanner unit={u} />
            <ol className="mt-8 flex flex-col items-center gap-7">
              {u.lessons.map((l) => {
                const idx = order.indexOf(l.id);
                const lp = lessonProgress(st, l);
                const state: NodeState = l.id === nextId ? "current" : lp.complete || idx < nextIdx ? "done" : "locked";
                const swing = SWING[step++ % SWING.length];
                return (
                  <li key={l.id} className="w-full" ref={state === "current" ? currentRef : undefined}>
                    <PathNode
                      id={l.id}
                      state={state}
                      swing={swing}
                      title={l.title}
                      ring={state === "current" ? lp.itemsDone / Math.max(1, lp.itemsTotal) : 0}
                      level={lp.level}
                      href={state === "current" ? lp.nextItem.href : l.href}
                      kinds={l.items.map((i) => i.kind)}
                      open={open === l.id}
                      onToggle={(v) => setOpen(v ? l.id : null)}
                    />
                  </li>
                );
              })}
              <li className="w-full">
                <PathNode
                  id={u.test.key}
                  trophy
                  state={testDone ? "done" : complete ? "open" : "locked"}
                  swing={SWING[step++ % SWING.length]}
                  title={t("sprout.path.treasure", "Treasure quiz")}
                  ring={0}
                  level={0}
                  href={u.test.href}
                  kinds={[]}
                  open={open === u.test.key}
                  onToggle={(v) => setOpen(v ? u.test.key : null)}
                />
              </li>
            </ol>
          </section>
        );
      })}
    </div>
  );
}

function UnitBanner({ unit }: { unit: CourseUnit }) {
  const t = useT();
  const hue = UNIT_HUES[unit.index % UNIT_HUES.length];
  const [fill, shade] = SUN[hue];
  const art = UNIT_ART[unit.slug] ?? FALLBACK_ART[unit.index % FALLBACK_ART.length];
  return (
    <button
      type="button"
      onClick={() => say(unit.title)}
      className="sprout-press sprout-banner relative flex w-full items-center gap-4 overflow-hidden rounded-[2rem] px-5 py-4 text-left text-white"
      style={{ background: fill, boxShadow: `inset 0 -7px 0 ${shade}, 0 16px 30px -18px ${shade}` }}
      aria-label={t("sprout.path.hearUnit", "Hear the name: {title}", { title: unit.title })}
    >
      {/* soft bubbles for decoration */}
      <span className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/15" aria-hidden />
      <span className="pointer-events-none absolute bottom-[-30px] right-24 h-16 w-16 rounded-full bg-white/10" aria-hidden />
      <span className="relative min-w-0 flex-1">
        <span className="block text-[0.8rem] font-bold opacity-90">{t("sprout.path.unit", "Unit {n}", { n: unit.index + 1 })}</span>
        <span className="mt-0.5 block text-[1.3rem] font-extrabold leading-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.12)]">{unit.title}</span>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1 text-[0.8rem] font-bold">
          <Volume2 className="h-4 w-4" strokeWidth={2.8} aria-hidden /> {t("sprout.path.listen", "Listen")}
        </span>
      </span>
      <span className="relative grid h-[78px] w-[78px] shrink-0 place-items-center rounded-full bg-white/90 text-[2.6rem] leading-none shadow-[inset_0_-5px_0_rgba(0,0,0,0.08)]" aria-hidden>
        {art}
      </span>
    </button>
  );
}

interface NodeProps {
  id: string;
  state: NodeState;
  swing: number;
  title: string;
  /** 0–1 progress ring for the current lesson. */
  ring: number;
  level: number;
  href: string;
  kinds: ItemKind[];
  open: boolean;
  trophy?: boolean;
  onToggle: (open: boolean) => void;
}

const NODE_COLORS: Record<NodeState, [string, string]> = {
  done: ["#FFC93C", "#E3A51C"],
  current: ["#3CCB98", "#25A87B"],
  open: ["#A98BF5", "#8467D9"],
  locked: ["#E2DAD0", "#C8BDB0"],
};

function PathNode(p: NodeProps) {
  const t = useT();
  const reduce = useReducedMotion();
  const [nudge, setNudge] = useState(0);
  const x = p.swing * AMP;
  const [fill, shade] = NODE_COLORS[p.state];
  const Icon: LucideIcon = p.state === "locked" ? Lock : p.trophy ? Trophy : p.state === "done" ? Check : Star;
  const live = p.state === "current" || p.state === "open";
  const questyLeft = p.swing > 0;

  const tap = () => {
    if (p.state === "locked") {
      setNudge((n) => n + 1);
      say(p.trophy ? t("sprout.path.treasureLocked", "Finish all the lessons to open the treasure!") : t("sprout.path.locked", "This one is still sleeping. Let’s play the bouncing one first!"));
      return;
    }
    if (!p.open) say(p.title);
    p.onToggle(!p.open);
  };

  const stateLabel =
    p.state === "done" ? t("sprout.path.stateDone", "done") : p.state === "locked" ? t("sprout.path.stateLocked", "locked") : t("sprout.path.stateNow", "play now");

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative" style={{ transform: `translateX(${x}px)` }} data-sprout-pop>
        {/* Bouncing "Start" tag above the current lesson */}
        {p.state === "current" && !p.open && (
          <motion.span
            className="sprout-start-tag pointer-events-none absolute -top-11 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-[1rem] px-3 py-1 text-[0.95rem] font-extrabold uppercase tracking-wide"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            aria-hidden
          >
            {t("sprout.path.startTag", "Start")}
          </motion.span>
        )}

        {/* Questy stands beside the current lesson */}
        {p.state === "current" && (
          <span className={clsx("pointer-events-none absolute inset-y-0 hidden items-center min-[360px]:flex", questyLeft ? "right-[calc(100%+8px)]" : "left-[calc(100%+8px)]")} aria-hidden>
            <motion.span className="block" animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}>
              <Mascot pose="wave" size={74} animate={false} />
            </motion.span>
          </span>
        )}

        <motion.button
          key={nudge}
          type="button"
          onClick={tap}
          aria-expanded={p.state === "locked" ? undefined : p.open}
          aria-current={p.state === "current" ? "step" : undefined}
          aria-label={`${p.title}, ${stateLabel}`}
          className="sprout-node relative grid place-items-center rounded-full"
          style={{ width: NODE + 20, height: NODE + 20 }}
          animate={nudge && !reduce ? { x: [0, -8, 8, -5, 5, 0] } : p.state === "current" && !reduce && !p.open ? { y: [0, -5, 0] } : undefined}
          transition={nudge ? { duration: 0.45 } : { repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          {/* progress ring */}
          {p.state === "current" && (
            <svg className="absolute inset-0" viewBox="0 0 104 104" aria-hidden>
              <circle cx="52" cy="52" r="48" fill="none" stroke="rgb(var(--line))" strokeWidth="7" />
              <circle cx="52" cy="52" r="48" fill="none" stroke="#3CCB98" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${Math.max(0.02, p.ring) * 301.6} 301.6`} transform="rotate(-90 52 52)" />
            </svg>
          )}
          {live && <span className="sprout-node-glow absolute inset-[10px] rounded-full" aria-hidden />}
          <span
            className="sprout-node-face relative grid place-items-center rounded-full text-white transition-transform"
            style={{ width: NODE, height: NODE, background: fill, boxShadow: `inset 0 -8px 0 ${shade}, 0 12px 20px -12px ${shade}` }}
          >
            <Icon
              className={clsx("-translate-y-[3px]", p.state === "locked" ? "h-8 w-8 text-[#A89A8B]" : "h-10 w-10", p.state === "current" && "fill-white")}
              strokeWidth={p.state === "current" ? 2 : 3}
              aria-hidden
            />
          </span>
          {/* crown on finished lessons */}
          {p.state === "done" && !p.trophy && (
            <span className="absolute -right-0.5 top-0 grid h-9 w-9 place-items-center rounded-full bg-surface shadow-soft" aria-hidden>
              <Crown className={clsx("h-5 w-5", p.level >= 3 ? "fill-[#FFC93C] text-[#E3A51C]" : "fill-[#FFE7A8] text-[#E3A51C]")} strokeWidth={2.4} />
            </span>
          )}
        </motion.button>
      </div>

      <AnimatePresence>{p.open && <StartBubble {...p} x={x} />}</AnimatePresence>
    </div>
  );
}

function StartBubble(p: NodeProps & { x: number }) {
  const t = useT();
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);
  const again = p.state === "done";
  const [fill, shade] = again ? NODE_COLORS.done : p.trophy ? NODE_COLORS.open : NODE_COLORS.current;
  const label = p.trophy ? (again ? t("sprout.path.playAgain", "Play again") : t("sprout.path.open", "Open!")) : again ? t("sprout.path.playAgain", "Play again") : t("sprout.path.start", "Start");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -6 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className="relative z-20 mt-3 w-[min(320px,calc(100vw-32px))]"
      data-sprout-pop
      style={{ transformOrigin: `calc(50% + ${p.x}px) 0` }}
    >
      <span className="absolute -top-2 h-5 w-5 -translate-x-1/2 rotate-45 rounded-[4px]" style={{ left: `calc(50% + ${p.x}px)`, background: fill }} aria-hidden />
      <div className="relative rounded-[1.8rem] p-4 text-white" style={{ background: fill, boxShadow: `inset 0 -6px 0 ${shade}, 0 20px 36px -18px ${shade}` }}>
        <button type="button" onClick={() => say(p.title)} className="flex w-full items-start gap-2 text-left" aria-label={t("sprout.path.hearTitle", "Hear: {title}", { title: p.title })}>
          <Volume2 className="mt-1 h-6 w-6 shrink-0" strokeWidth={2.8} aria-hidden />
          <span className="min-w-0 flex-1 text-[1.25rem] font-extrabold leading-tight">{p.title}</span>
        </button>
        {p.kinds.length > 0 && (
          <span className="mt-2 flex gap-2" aria-hidden>
            {p.kinds.map((k, i) => {
              const I = KIND_PICTURE[k];
              return (
                <span key={i} className="grid h-9 w-9 place-items-center rounded-full bg-white/25">
                  <I className="h-5 w-5" strokeWidth={2.6} />
                </span>
              );
            })}
          </span>
        )}
        <Link
          ref={ref}
          href={p.href}
          onClick={() => say(again ? t("sprout.path.againSay", "Let’s play it again!") : t("sprout.path.goSay", "Let’s go!"))}
          className="sprout-chunky mt-4 flex min-h-[60px] w-full items-center justify-center gap-2 rounded-[1.4rem] bg-white px-5 py-3 text-[1.3rem] font-extrabold"
          style={{ color: shade, ["--chunky-base" as string]: "rgba(0,0,0,0.14)" }}
        >
          {again ? <RotateCcw className="h-6 w-6" strokeWidth={3} aria-hidden /> : <Play className="h-6 w-6 fill-current" strokeWidth={2.4} aria-hidden />}
          {label}
        </Link>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

function StickerShelf() {
  const t = useT();
  const hydrated = useHydrated();
  const raw = useLearner((s) => s.stickers);
  const stickers = hydrated ? raw : {};
  const owned = STICKERS.filter((s) => stickers[s.id]).sort((a, b) => (stickers[b.id] ?? "").localeCompare(stickers[a.id] ?? ""));
  const show = [...owned, ...STICKERS.filter((s) => !stickers[s.id])].slice(0, 5);
  return (
    <Link href="/stickers" onClick={() => say(t("sprout.home.stickerSay", EXPLORE_LINES.stickerBook))} className="sprout-shelf sprout-press mt-6 block rounded-[2.5rem] px-5 pb-5 pt-6" aria-label={t("sprout.home.myStickers", "My stickers")}>
      <div className="flex items-end justify-center gap-3 sm:gap-5">
        {show.map((st, i) => (
          <span key={st.id} className={clsx(i > 2 && "hidden sm:block")}>
            <StickerTile sticker={st} owned={Boolean(stickers[st.id])} size={68} />
          </span>
        ))}
      </div>
      <div className="sprout-shelf-board mt-2 h-4 rounded-full" aria-hidden />
      <p className="sprout-caption mt-3 text-center">{t("sprout.home.myStickers", "My stickers")}</p>
    </Link>
  );
}

