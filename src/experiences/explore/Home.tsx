"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Check, Gift, Lock, Map as MapIcon, Play, Sparkles, Star } from "lucide-react";
import type { CourseOutline, CourseUnit } from "@/content/course";
import { useLearner, liveStreak } from "@/lib/store";
import { courseProgress, lessonProgress } from "@/lib/progress";
import { dayKey } from "@/lib/gamification";
import { preloadLiveVoice, say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { STICKERS, checkStreakSticker } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import { GAMES as KID_GAMES } from "@/components/kids/games";
import { EX, EX_ROTATION, ReadAloud, chunky } from "./ui";

const GREET_KEY = "qa-explore-greeted";

/** Explore home: Questy's hello, today's adventure, the island map, sticker and game shelves. */
export function ExploreHomeV2() {
  const catalog = useCatalog();
  const profileCourse = useLearner((s) => s.profile.course);
  const setProfile = useLearner((s) => s.setProfile);
  const name = useLearner((s) => s.profile.name);
  const streak = useLearner((s) => liveStreak(s));

  // Primary-school courses, plus whatever course the learner already picked.
  const courses = useMemo(() => catalog.filter((c) => c.world === "kids" || c.slug === profileCourse), [catalog, profileCourse]);
  const course = courses.find((c) => c.slug === profileCourse)?.slug ?? null;
  const outline = useOutline(course);
  const first = name.trim().split(" ")[0];

  const hello = course ? EXPLORE_LINES.welcome : EXPLORE_LINES.chooseCourse;

  useEffect(() => {
    preloadLiveVoice();
    try {
      if (localStorage.getItem(GREET_KEY) !== dayKey()) {
        localStorage.setItem(GREET_KEY, dayKey());
        const t = setTimeout(() => say(hello), 700);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked: stay quiet */
    }
  }, [hello]);

  useEffect(() => {
    checkStreakSticker(streak);
  }, [streak]);

  return (
    <div className="mx-auto max-w-[1080px] px-4 pb-10 pt-5 sm:px-6">
      {/* Questy says hello */}
      <section className="flex items-end gap-2 sm:gap-4" aria-label="Hello from Questy">
        <button type="button" onClick={() => say(hello)} className="ex-bounce shrink-0 rounded-full" aria-label="Tap Questy to hear him">
          <Mascot pose="wave" size={112} />
        </button>
        <div className="ex-bubble relative mb-6 min-w-0 flex-1 px-5 py-4">
          <p className="text-[1.6rem] font-black leading-tight sm:text-3xl">{first ? `Hi, ${first}!` : "Hi, explorer!"}</p>
          <p className="mt-1 text-lg font-bold text-muted">{course ? "Ready for today’s adventure?" : "Pick an adventure to start!"}</p>
          <ReadAloud text={hello} label="Hear Questy" className="absolute -right-2 -top-3" />
        </div>
      </section>

      {/* Adventure picker */}
      <section className="mt-2" aria-labelledby="ex-pick">
        <div className="flex items-center gap-2">
          <h2 id="ex-pick" className="text-xl font-black">
            My adventures
          </h2>
          <ReadAloud text={EXPLORE_LINES.pickAdventure} size="sm" />
        </div>
        <div className="-mx-4 mt-2 flex gap-3 overflow-x-auto px-4 pb-3 pt-1 sm:mx-0 sm:px-0">
          {courses.map((c, i) => {
            const active = c.slug === course;
            const col = EX_ROTATION[i % EX_ROTATION.length];
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => {
                  setProfile({ course: c.slug });
                  say(c.title);
                }}
                aria-pressed={active}
                className={clsx("ex-press flex w-[124px] shrink-0 flex-col items-center gap-2 rounded-[1.5rem] border-[3px] p-3", active ? "bg-surface" : "border-transparent bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10")}
                style={active ? { borderColor: col.c, boxShadow: `0 5px 0 ${col.s}` } : undefined}
              >
                <CourseIcon slug={c.slug} size={64} />
                <span className="line-clamp-2 text-center text-[15px] font-extrabold leading-tight">{c.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {course && outline ? (
        <Adventure outline={outline} />
      ) : course ? (
        <div className="mt-6 h-72 animate-pulse rounded-[2rem] bg-white/60 dark:bg-white/5" />
      ) : (
        <div className="ex-card mt-6 flex flex-col items-center gap-3 p-10 text-center">
          <Mascot pose="think" size={100} animate={false} />
          <p className="text-2xl font-black">Tap a picture above to begin!</p>
        </div>
      )}

      {/* Shelves */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <StickerShelf />
        <GamesShelf />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Adventure({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const cp = courseProgress(s, outline);
  const next = cp.next;
  const nextUnit = next ? outline.units.find((u) => u.lessons.some((l) => l.id === next.id)) : undefined;
  const nextHref = next ? lessonProgress(s, next).nextItem.href : null;

  return (
    <>
      {/* Today's adventure */}
      <section className="mt-6" aria-labelledby="ex-today">
        {next && nextHref ? (
          <div className="ex-today relative overflow-hidden p-5 sm:p-7">
            <Sparkles className="pointer-events-none absolute right-6 top-5 h-10 w-10 text-white/40" aria-hidden />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="min-w-0 flex-1 text-white">
                <div className="flex items-center gap-2">
                  <p id="ex-today" className="rounded-full bg-white/25 px-3 py-1 text-sm font-black">
                    Today’s adventure
                  </p>
                  <ReadAloud text={`Today’s adventure: ${next.title}`} size="sm" className="!bg-white/25 !text-white !shadow-none" />
                </div>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-[2.2rem]">{next.title}</h2>
                {nextUnit && <p className="mt-1 text-lg font-bold text-white/85">Island {nextUnit.index + 1}: {nextUnit.title}</p>}
              </div>
              <Link href={nextHref} onClick={() => say(EXPLORE_LINES.letsGo)} className="ex-press flex shrink-0 items-center justify-center gap-3 rounded-[1.5rem] bg-white px-7 py-4 text-2xl font-black text-[#1F9B58]" style={{ boxShadow: "inset 0 -6px 0 rgb(0 0 0 / 0.12)" }}>
                <Play className="h-8 w-8 fill-current" aria-hidden /> Let’s go!
              </Link>
            </div>
          </div>
        ) : (
          <button type="button" onClick={() => say(EXPLORE_LINES.allDone)} className="ex-press flex w-full items-center justify-center gap-4 rounded-[2rem] p-6 text-2xl font-black text-[#4a3500]" style={chunky(EX.yellow, 7)}>
            <Star className="h-9 w-9 fill-current" aria-hidden /> You finished every island!
          </button>
        )}
      </section>

      {/* Island map */}
      <section className="mt-10" aria-labelledby="ex-map">
        <div className="flex flex-wrap items-center gap-2">
          <MapIcon className="h-7 w-7 text-[#2F80FF]" strokeWidth={2.6} aria-hidden />
          <h2 id="ex-map" className="text-2xl font-black">
            {outline.title} island map
          </h2>
          <ReadAloud text={EXPLORE_LINES.mapIntro} size="sm" />
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-base font-black" aria-label={`${cp.complete} of ${cp.total} stars`}>
            <Star className="h-5 w-5 fill-[#FFC21A] text-[#D99A00]" aria-hidden /> {cp.complete}/{cp.total}
          </span>
        </div>
        <div className="ex-sea mt-4 space-y-2 p-3 sm:p-6">
          {outline.units.map((u, ui) => (
            <div key={u.slug}>
              {ui > 0 && <Bridge flip={ui % 2 === 0} />}
              <Island unit={u} index={ui} nextId={next?.id} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Bridge({ flip }: { flip: boolean }) {
  return (
    <svg viewBox="0 0 300 60" className="mx-auto h-12 w-64" aria-hidden style={{ transform: flip ? "scaleX(-1)" : undefined }}>
      <path d="M60 0 C60 34 240 26 240 60" fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="7" strokeDasharray="1 15" strokeLinecap="round" />
    </svg>
  );
}

const ISLANDS = [
  { land: "#C9F2D9", edge: "#8FDCAE", ink: "#145C36" },
  { land: "#FFE8B8", edge: "#FFCB66", ink: "#6B4300" },
  { land: "#E3D9FF", edge: "#BBA6FF", ink: "#3B2484" },
  { land: "#FFD9E8", edge: "#FFA8CB", ink: "#7A1748" },
  { land: "#D3F3EF", edge: "#86DDD2", ink: "#0B5A51" },
];

function Island({ unit, index, nextId }: { unit: CourseUnit; index: number; nextId?: string }) {
  const s = useLearner();
  const look = ISLANDS[index % ISLANDS.length];
  const done = unit.lessons.filter((l) => lessonProgress(s, l).complete).length;
  const allDone = done === unit.lessons.length;
  const hasNext = unit.lessons.some((l) => l.id === nextId);
  const col = EX_ROTATION[index % EX_ROTATION.length];

  return (
    <div className={clsx("ex-island relative mx-auto w-full max-w-[760px] px-4 pb-6 pt-5 sm:px-7", index % 2 ? "md:translate-x-10" : "md:-translate-x-10")} style={{ background: look.land, boxShadow: `inset 0 -10px 0 ${look.edge}` }}>
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-black" style={{ color: look.ink, opacity: 0.75 }}>
            Island {index + 1}
          </p>
          <h3 className="text-[1.45rem] font-black leading-tight" style={{ color: look.ink }}>
            {unit.title}
          </h3>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-base font-black text-[#6B4300]" aria-label={`${done} of ${unit.lessons.length} stars on this island`}>
          <Star className="h-5 w-5 fill-[#FFC21A] text-[#D99A00]" aria-hidden /> {done}/{unit.lessons.length}
        </span>
      </div>

      <ol className={clsx("relative flex flex-wrap items-start justify-center gap-x-5 gap-y-6", hasNext ? "mt-14" : "mt-5")}>
        {unit.lessons.map((l, li) => {
          const p = lessonProgress(s, l);
          const isNext = l.id === nextId;
          return (
            <li key={l.id} className="relative flex w-[104px] flex-col items-center" style={{ marginTop: li % 2 ? 28 : 0 }}>
              {isNext && (
                <div className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2">
                  <Mascot pose="cheer" size={56} animate={false} />
                </div>
              )}
              <motion.div animate={isNext ? { y: [0, -7, 0] } : undefined} transition={isNext ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" } : undefined}>
                <Link
                  href={p.nextItem.href}
                  onClick={() => say(l.title)}
                  aria-label={`${l.title}${p.complete ? ", done" : isNext ? ", play next" : ""}`}
                  aria-current={isNext ? "step" : undefined}
                  className={clsx("ex-press grid h-[84px] w-[84px] place-items-center rounded-full", isNext && "ring-[6px] ring-white")}
                  style={
                    p.complete
                      ? chunky(EX.yellow, 7)
                      : isNext
                        ? chunky(col, 7)
                        : { background: "#ffffff", boxShadow: `inset 0 -7px 0 ${look.edge}` }
                  }
                >
                  {p.complete ? (
                    <Star className="h-10 w-10 -translate-y-0.5 fill-white text-white" strokeWidth={2} aria-hidden />
                  ) : (
                    <span className={clsx("-translate-y-0.5 text-[2rem] font-black", isNext ? "text-white" : "")} style={isNext ? undefined : { color: look.ink }}>
                      {li + 1}
                    </span>
                  )}
                </Link>
              </motion.div>
              <span className="mt-2 line-clamp-2 text-center text-[15px] font-extrabold leading-tight" style={{ color: look.ink }}>
                {l.title}
              </span>
            </li>
          );
        })}
        {/* Treasure: the island's big quiz */}
        <li className="flex w-[104px] flex-col items-center" style={{ marginTop: unit.lessons.length % 2 ? 28 : 0 }}>
          <Link
            href={unit.test.href}
            onClick={() => say(`Treasure quiz for ${unit.title}`)}
            aria-label={`Treasure quiz: ${unit.title}${allDone ? "" : " (finish the island first for the best try)"}`}
            className={clsx("ex-press grid h-[84px] w-[84px] place-items-center rounded-[1.6rem]", !allDone && !hasNext && "opacity-80")}
            style={allDone ? chunky(EX.orange, 7) : { background: "rgb(255 255 255 / 0.65)", boxShadow: `inset 0 -7px 0 ${look.edge}` }}
          >
            {allDone ? <Gift className="h-10 w-10 -translate-y-0.5 text-white" strokeWidth={2.4} aria-hidden /> : <Lock className="h-8 w-8 -translate-y-0.5" style={{ color: look.ink }} strokeWidth={2.6} aria-hidden />}
          </Link>
          <span className="mt-2 text-center text-[15px] font-extrabold leading-tight" style={{ color: look.ink }}>
            Treasure quiz
          </span>
        </li>
      </ol>
      {allDone && (
        <p className="relative mt-4 flex items-center justify-center gap-1.5 text-base font-black" style={{ color: look.ink }}>
          <Check className="h-5 w-5" strokeWidth={3.5} aria-hidden /> Island explored!
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function StickerShelf() {
  const stickers = useLearner((s) => s.stickers);
  const owned = STICKERS.filter((s) => stickers[s.id]).sort((a, b) => (stickers[b.id] ?? "").localeCompare(stickers[a.id] ?? ""));
  const show = owned.length ? owned.slice(0, 4) : STICKERS.filter((_, i) => i % 7 === 0).slice(0, 4);
  return (
    <section className="ex-shelf p-5" aria-labelledby="ex-stickers">
      <div className="flex items-center gap-2">
        <h2 id="ex-stickers" className="text-2xl font-black">
          My sticker book
        </h2>
        <ReadAloud text={EXPLORE_LINES.stickerBook} size="sm" />
      </div>
      <p className="mt-1 font-bold text-muted">
        {owned.length} of {STICKERS.length} stickers
      </p>
      <Link href="/stickers" onClick={() => say(EXPLORE_LINES.stickerBook)} className="ex-shelf-board ex-press mt-4 flex items-end justify-center gap-2 px-3 pb-4 pt-5 sm:gap-3" aria-label="Open my sticker book">
        {show.map((s) => (
          <StickerTile key={s.id} sticker={s} owned={Boolean(stickers[s.id])} size={70} />
        ))}
      </Link>
    </section>
  );
}

function GamesShelf() {
  // Games made for older children first, then the rest.
  const games = [...KID_GAMES].sort((a, b) => Number(a.age === "Ages 3–6") - Number(b.age === "Ages 3–6")).slice(0, 4);
  return (
    <section className="ex-shelf p-5" aria-labelledby="ex-games">
      <div className="flex items-center gap-2">
        <h2 id="ex-games" className="text-2xl font-black">
          Games
        </h2>
        <ReadAloud text={EXPLORE_LINES.games} size="sm" />
        <Link href="/kids/play" className="ml-auto rounded-full px-3 py-1 text-sm font-black text-[#C02677] hover:bg-white/60 dark:text-[#FF8CC6] dark:hover:bg-white/10">
          See all
        </Link>
      </div>
      <p className="mt-1 font-bold text-muted">Play and learn at the same time.</p>
      <ul className="ex-shelf-board mt-4 grid grid-cols-2 gap-2.5 p-3">
        {games.map((g) => (
          <li key={g.id}>
            <Link href={`/kids/play/${g.id}`} onClick={() => say(g.title)} className="ex-press flex items-center gap-2.5 rounded-[1.25rem] bg-surface p-2.5" style={{ boxShadow: `inset 0 -5px 0 ${g.shade}33` }}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-white" style={{ background: g.color, boxShadow: `inset 0 -4px 0 ${g.shade}` }}>
                <g.icon className="h-6 w-6" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="min-w-0 text-[15px] font-black leading-tight">{g.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
