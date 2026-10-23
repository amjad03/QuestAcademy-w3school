"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Play, Star, Volume2 } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { courseProgress, lessonProgress } from "@/lib/progress";
import { dayKey } from "@/lib/gamification";
import { preloadLiveVoice, say, sayQueue } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { STICKERS } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";

const GREET_KEY = "qa-sprout-greeted";
/** Pre-primary courses first; other kids courses follow. */
const SPROUT_ORDER = ["abc-adventures", "number-land", "shapes-colors", "my-world"];
const DEFAULT_COURSE = "abc-adventures";

/** Sprout home: one giant "Let's play!" bubble, a picture carousel and a sticker shelf. */
export function SproutHome() {
  const catalog = useCatalog();
  const kids = useMemo(() => {
    const list = catalog.filter((c) => c.world === "kids");
    const rank = (slug: string) => (SPROUT_ORDER.indexOf(slug) + 1 || 99);
    return [...list].sort((a, b) => rank(a.slug) - rank(b.slug));
  }, [catalog]);
  const profileCourse = useLearner((s) => s.profile.course);
  const setProfile = useLearner((s) => s.setProfile);
  const name = useLearner((s) => s.profile.name)?.trim().split(" ")[0] ?? "";
  const course = kids.find((c) => c.slug === profileCourse)?.slug ?? kids.find((c) => c.slug === DEFAULT_COURSE)?.slug ?? kids[0]?.slug ?? null;
  const outline = useOutline(course);
  const s = useLearner();

  const next = outline ? courseProgress(s, outline).next : undefined;
  const nextHref = next ? lessonProgress(s, next).nextItem.href : null;
  const greeting = name ? `Hi ${name}! I’m Questy.` : "Hoot hoot! Hi, I’m Questy.";

  // First visit of the day: Questy says hello and points at the big button.
  useEffect(() => {
    preloadLiveVoice();
    try {
      if (localStorage.getItem(GREET_KEY) === dayKey()) return;
      localStorage.setItem(GREET_KEY, dayKey());
      const t = setTimeout(() => sayQueue([greeting, "Tap the big button to play!"]), 700);
      return () => clearTimeout(t);
    } catch {
      /* storage blocked: stay quiet */
    }
  }, [greeting]);

  const style = course ? courseStyle(course) : null;

  return (
    <div className="mx-auto max-w-[980px] px-4 pt-4 sm:px-6">
      {/* The one big thing */}
      <section aria-label="Next activity" className="relative flex flex-col items-center pt-4">
        {next && nextHref ? (
          <Link href={nextHref} onClick={() => say(`Let’s play! ${next.title}`)} className="sprout-hero group relative flex w-full max-w-[560px] flex-col items-center rounded-[3rem] px-6 pb-8 pt-7 text-center outline-none" aria-label={`Let’s play: ${next.title}`}>
            <motion.span
              className="relative grid h-[168px] w-[168px] place-items-center rounded-full text-white sm:h-[200px] sm:w-[200px]"
              style={{ background: style?.color ?? "#3CCB98", boxShadow: `inset 0 -12px 0 ${style?.shade ?? "#25A87B"}, 0 24px 40px -18px ${style?.shade ?? "#25A87B"}` }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            >
              <Play className="h-[44%] w-[44%] -translate-y-1 translate-x-[6%] fill-white" strokeWidth={2} />
            </motion.span>
            <span className="mt-5 flex items-center gap-3">
              {course && <CourseIcon slug={course} size={44} />}
              <span className="text-[1.9rem] font-extrabold leading-none text-ink">Let’s play!</span>
            </span>
            <span className="sprout-caption mt-2 max-w-[22ch]">{next.title}</span>
          </Link>
        ) : outline ? (
          <button onClick={() => say(EXPLORE_LINES.allDone)} className="sprout-hero flex w-full max-w-[560px] flex-col items-center rounded-[3rem] px-6 pb-8 pt-7" aria-label="You finished it all">
            <span className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.15, type: "spring" }}>
                  <Star className="h-20 w-20 fill-[#FFC93C] text-[#E3A51C]" strokeWidth={1.5} />
                </motion.span>
              ))}
            </span>
            <span className="mt-4 text-[1.8rem] font-extrabold">All done!</span>
            <span className="sprout-caption mt-1">Pick a new picture below</span>
          </button>
        ) : (
          <div className="h-[280px] w-full max-w-[560px] animate-pulse rounded-[3rem] bg-surface-2" aria-hidden />
        )}
        <div className="pointer-events-none absolute -bottom-2 right-0 hidden lg:block">
          <Mascot pose="cheer" size={110} />
        </div>
      </section>

      {/* Course pictures */}
      <section className="mt-10" aria-label="Choose what to play">
        <div className="flex items-center gap-3 px-1">
          <button onClick={() => say(EXPLORE_LINES.chooseCourse)} className="grid h-12 w-12 place-items-center rounded-full bg-surface text-accent shadow-soft" aria-label="What are these pictures?">
            <Volume2 className="h-6 w-6" strokeWidth={2.6} />
          </button>
          <span className="sprout-caption">Pick a picture</span>
        </div>
        <div className="sprout-carousel -mx-4 mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-2 sm:-mx-6 sm:px-6">
          {kids.map((c) => {
            const active = c.slug === course;
            const cs = courseStyle(c.slug);
            return (
              <button
                key={c.slug}
                onClick={() => {
                  setProfile({ course: c.slug });
                  say(c.title);
                }}
                aria-pressed={active}
                aria-label={c.title}
                className={clsx("sprout-press flex w-[164px] shrink-0 snap-start flex-col items-center gap-3 rounded-[2.2rem] p-4 transition", active ? "sprout-card-on" : "sprout-card")}
                style={active ? { background: `${cs.color}22`, boxShadow: `0 0 0 4px ${cs.color}, 0 16px 30px -16px ${cs.shade}` } : undefined}
              >
                <CourseIcon slug={c.slug} size={108} />
                <span className="sprout-caption text-center leading-tight">{c.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      <StickerShelf />
    </div>
  );
}

function StickerShelf() {
  const stickers = useLearner((s) => s.stickers);
  const owned = STICKERS.filter((s) => stickers[s.id]).sort((a, b) => (stickers[b.id] ?? "").localeCompare(stickers[a.id] ?? ""));
  const show = [...owned, ...STICKERS.filter((s) => !stickers[s.id])].slice(0, 5);
  return (
    <Link href="/stickers" onClick={() => say(EXPLORE_LINES.stickerBook)} className="sprout-shelf sprout-press mt-4 block rounded-[2.5rem] px-5 pb-5 pt-6" aria-label="My stickers">
      <div className="flex items-end justify-center gap-3 sm:gap-5">
        {show.map((st, i) => (
          <motion.span key={st.id} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.35, ease: "easeInOut" }} className={clsx(i > 2 && "hidden sm:block")}>
            <StickerTile sticker={st} owned={Boolean(stickers[st.id])} size={76} />
          </motion.span>
        ))}
      </div>
      <div className="sprout-shelf-board mt-2 h-4 rounded-full" aria-hidden />
      <p className="sprout-caption mt-3 text-center">My stickers</p>
    </Link>
  );
}
