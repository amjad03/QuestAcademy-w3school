"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Gamepad2, Play, Star, Volume2 } from "lucide-react";
import clsx from "clsx";
import type { CourseOutline, CourseUnit } from "@/content/course";
import { useLearner, liveStreak } from "@/lib/store";
import { lessonProgress, courseProgress } from "@/lib/progress";
import { dayKey } from "@/lib/gamification";
import { say, preloadLiveVoice } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { STICKERS, checkStreakSticker } from "./stickers";
import { StickerTile } from "./StickerTile";

const GREET_KEY = "qa-explore-greeted";

/** Explore mode (ages ~6–10): one big button, a picture map, stickers and games. */
export function ExploreHome() {
  const catalog = useCatalog();
  const kidsCourses = useMemo(() => catalog.filter((c) => c.world === "kids"), [catalog]);
  const profileCourse = useLearner((s) => s.profile.course);
  const setProfile = useLearner((s) => s.setProfile);
  const name = useLearner((s) => s.profile.name);
  const streak = useLearner((s) => liveStreak(s));
  const course = kidsCourses.find((c) => c.slug === profileCourse)?.slug ?? null;
  const outline = useOutline(course);

  // First visit of the day: Questy says hello (once).
  useEffect(() => {
    preloadLiveVoice();
    try {
      if (localStorage.getItem(GREET_KEY) !== dayKey()) {
        localStorage.setItem(GREET_KEY, dayKey());
        const t = setTimeout(() => say(course ? EXPLORE_LINES.welcome : EXPLORE_LINES.chooseCourse), 600);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked: stay quiet */
    }
  }, [course]);

  useEffect(() => {
    checkStreakSticker(streak);
  }, [streak]);

  return (
    <div className="mx-auto max-w-[860px] px-4 pb-16 pt-6 sm:px-6">
      {/* Questy greeting */}
      <div className="flex items-end gap-3 sm:gap-5">
        <Mascot pose="wave" size={110} />
        <div className="relative mb-8 flex-1 rounded-3xl border-2 border-b-4 border-line bg-surface px-5 py-4">
          <span className="absolute -left-[10px] bottom-5 h-4 w-4 rotate-45 border-b-2 border-l-2 border-line bg-surface" />
          <p className="text-2xl font-black leading-tight">Hi{name ? `, ${name.split(" ")[0]}` : ""}!</p>
          <p className="mt-1 text-lg font-bold text-muted">{course ? "Ready for an adventure?" : "Pick a picture to start!"}</p>
        </div>
        <button
          onClick={() => say(course ? EXPLORE_LINES.welcome : EXPLORE_LINES.chooseCourse)}
          className="btn-primary mb-8 h-16 w-16 shrink-0 !rounded-full !p-0"
          aria-label="Hear Questy"
        >
          <Volume2 className="h-8 w-8" />
        </button>
      </div>

      {/* Course pictures */}
      <section className="mt-2" aria-label="Choose an adventure">
        <div className="flex gap-4 overflow-x-auto pb-3 pt-1">
          {kidsCourses.map((c) => {
            const active = c.slug === course;
            return (
              <button
                key={c.slug}
                onClick={() => {
                  setProfile({ course: c.slug });
                  say(EXPLORE_LINES.mapIntro);
                }}
                className={clsx(
                  "flex w-[132px] shrink-0 flex-col items-center gap-2 rounded-3xl border-2 border-b-4 p-3 transition active:translate-y-[2px] active:border-b-2",
                  active ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2",
                )}
                aria-pressed={active}
              >
                <CourseIcon slug={c.slug} size={72} />
                <span className="text-center text-[15px] font-extrabold leading-tight">{c.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {course && outline ? (
        <ExploreMap outline={outline} />
      ) : course ? (
        <div className="mt-10 h-64 animate-pulse rounded-[2rem] bg-surface-2" />
      ) : (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-[2rem] border-2 border-dashed border-line p-10 text-center">
          <Mascot pose="think" size={100} animate={false} />
          <p className="text-2xl font-black">Tap a picture above to begin!</p>
        </div>
      )}

      {/* Stickers + games */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <StickerPreview />
        <Link href="/kids/play" onClick={() => say(EXPLORE_LINES.games)} className="tile flex flex-col items-center justify-center gap-3 !rounded-[2rem] p-6 text-center">
          <span className="grid h-24 w-24 place-items-center rounded-full bg-[#EC4899] text-white" style={{ boxShadow: "inset 0 -7px 0 #C02677" }}>
            <Gamepad2 className="h-12 w-12" strokeWidth={2.2} />
          </span>
          <span className="text-2xl font-black">Play games</span>
          <span className="text-base font-bold text-muted">Balloons, letters, shapes and more</span>
        </Link>
      </div>
    </div>
  );
}

function StickerPreview() {
  const stickers = useLearner((s) => s.stickers);
  const owned = STICKERS.filter((s) => stickers[s.id]).sort((a, b) => (stickers[b.id] ?? "").localeCompare(stickers[a.id] ?? ""));
  const show = owned.length ? owned.slice(0, 3) : STICKERS.filter((_, i) => i % 7 === 0).slice(0, 3);
  return (
    <Link href="/stickers" onClick={() => say(EXPLORE_LINES.stickerBook)} className="tile flex flex-col items-center gap-4 !rounded-[2rem] p-6 text-center">
      <div className="flex -space-x-3">
        {show.map((s) => (
          <StickerTile key={s.id} sticker={s} owned={Boolean(stickers[s.id])} size={78} />
        ))}
      </div>
      <span className="text-2xl font-black">My stickers</span>
      <span className="text-base font-bold text-muted">
        {owned.length} of {STICKERS.length} collected
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Picture map: units are islands, lessons are big round stops         */
/* ------------------------------------------------------------------ */

const ISLAND_TINTS = ["#E8F7EE", "#FFF1DE", "#E6F4FE", "#F1ECFF", "#FDE8F2", "#FFF6D6"];

function ExploreMap({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const { color, shade } = courseStyle(outline.slug);
  const cp = courseProgress(s, outline);
  const next = cp.next;
  const nextHref = next ? lessonProgress(s, next).nextItem.href : null;

  return (
    <section className="mt-8" aria-label={`${outline.title} map`}>
      {/* The one big button */}
      {next ? (
        <Link
          href={nextHref!}
          onClick={() => say(EXPLORE_LINES.letsGo)}
          className="btn-good flex w-full !rounded-[2rem] !py-6 text-2xl normal-case tracking-normal"
        >
          <Play className="h-9 w-9 fill-white" />
          <span className="flex flex-col items-start leading-tight">
            <span>Let’s go!</span>
            <span className="text-base font-bold opacity-90">{next.title}</span>
          </span>
        </Link>
      ) : (
        <button onClick={() => say(EXPLORE_LINES.allDone)} className="flex w-full items-center justify-center gap-4 rounded-[2rem] border-2 border-b-4 border-warn-shade bg-warn p-6 text-2xl font-black text-[#4a3500]">
          <Star className="h-9 w-9 fill-current" /> You finished it all!
        </button>
      )}

      <div className="mt-10 space-y-6">
        {outline.units.map((u, ui) => (
          <div key={u.slug}>
            {ui > 0 && <Trail flip={ui % 2 === 1} />}
            <Island unit={u} index={ui} tint={ISLAND_TINTS[ui % ISLAND_TINTS.length]} color={color} shade={shade} nextId={next?.id} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Trail({ flip }: { flip: boolean }) {
  return (
    <svg viewBox="0 0 200 60" className="mx-auto -my-2 h-14 w-48" aria-hidden style={{ transform: flip ? "scaleX(-1)" : undefined }}>
      <path d="M40 0 C40 30 160 30 160 60" fill="none" stroke="rgb(var(--line))" strokeWidth="6" strokeDasharray="2 14" strokeLinecap="round" />
    </svg>
  );
}

function Island({ unit, index, tint, color, shade, nextId }: { unit: CourseUnit; index: number; tint: string; color: string; shade: string; nextId?: string }) {
  const s = useLearner();
  const done = unit.lessons.filter((l) => lessonProgress(s, l).complete).length;
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] px-5 pb-8 pt-6 dark:!bg-surface-2" style={{ background: tint }}>
      <IslandDecor index={index} />
      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink/50">Island {index + 1}</p>
          <h3 className="text-2xl font-black">{unit.title}</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-lg font-black" aria-label={`${done} of ${unit.lessons.length} done`}>
          <Star className="h-5 w-5 fill-warn text-warn" /> {done}/{unit.lessons.length}
        </span>
      </div>
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-8">
        {unit.lessons.map((l, li) => {
          const p = lessonProgress(s, l);
          const isNext = l.id === nextId;
          return (
            <motion.div key={l.id} className="relative flex flex-col items-center" style={{ marginTop: li % 2 ? 36 : 0 }} animate={isNext ? { y: [0, -8, 0] } : undefined} transition={isNext ? { repeat: Infinity, duration: 1.6, ease: "easeInOut" } : undefined}>
              {isNext && (
                <div className="pointer-events-none absolute -left-16 -top-6 hidden sm:block">
                  <Mascot pose="cheer" size={64} animate={false} />
                </div>
              )}
              <Link
                href={p.nextItem.href}
                onClick={() => say(l.title)}
                aria-label={`${l.title}${p.complete ? " — done" : ""}`}
                className={clsx("grid h-[92px] w-[92px] place-items-center rounded-full transition active:translate-y-1", isNext && "ring-8 ring-white/70")}
                style={{
                  background: p.complete ? "rgb(var(--good))" : isNext ? color : "rgb(var(--surface))",
                  boxShadow: `inset 0 -8px 0 ${p.complete ? "rgb(var(--good-shade))" : isNext ? shade : "rgb(var(--line))"}`,
                }}
              >
                {p.complete ? (
                  <Check className="h-11 w-11 -translate-y-1 text-white" strokeWidth={4} />
                ) : (
                  <span className={clsx("-translate-y-1 text-4xl font-black", isNext ? "text-white" : "text-muted")}>{li + 1}</span>
                )}
              </Link>
              <span className="mt-2 max-w-[120px] text-center text-[15px] font-extrabold leading-tight">{l.title}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/** Simple flat scenery so each island feels like a place. */
function IslandDecor({ index }: { index: number }) {
  const kind = index % 3;
  return (
    <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-70" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden>
      {kind === 0 && (
        <>
          <path d="M0 80 Q100 55 200 80 T400 80 V100 H0 Z" fill="#2EBE70" opacity="0.25" />
          <circle cx="40" cy="62" r="14" fill="#2EBE70" opacity="0.35" />
          <rect x="37" y="70" width="6" height="14" fill="#1F9B58" opacity="0.35" />
          <circle cx="360" cy="58" r="18" fill="#2EBE70" opacity="0.3" />
        </>
      )}
      {kind === 1 && (
        <>
          <path d="M0 85 Q60 70 120 85 T240 85 T400 85 V100 H0 Z" fill="#FFB800" opacity="0.25" />
          <path d="M330 85 L350 50 L370 85 Z" fill="#FF8A00" opacity="0.3" />
          <circle cx="60" cy="40" r="12" fill="#FFB800" opacity="0.35" />
        </>
      )}
      {kind === 2 && (
        <>
          <path d="M0 78 Q50 68 100 78 T200 78 T300 78 T400 78 V100 H0 Z" fill="#1CB0F6" opacity="0.25" />
          <path d="M0 90 Q50 80 100 90 T200 90 T300 90 T400 90 V100 H0 Z" fill="#1CB0F6" opacity="0.25" />
        </>
      )}
    </svg>
  );
}
