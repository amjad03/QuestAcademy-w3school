"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Check, Footprints, Star, X } from "lucide-react";
import type { ItemKind } from "@/content/course";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useHydrated } from "@/components/providers";
import { useNotebook } from "@/lib/notebook-store";
import { say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { useT } from "@/i18n";
import type { LessonLayoutProps, LessonTab } from "../types";
import { EX, FatBar, ReadAloud, chunky, kindWord, type Col } from "./ui";

const TAB_COL: Record<ItemKind, Col> = {
  video: EX.red,
  article: EX.blue,
  cards: EX.purple,
  practice: EX.green,
  challenge: EX.orange,
};

/** What comes next, in kid words (literal t() calls for the extractor). */
function nextWord(t: ReturnType<typeof useT>, label: string) {
  switch (label) {
    case "Practice":
      return t("explore.next.practice", "Quiz time");
    case "Lesson":
      return t("explore.next.story", "Story");
    case "Video":
      return t("explore.next.video", "Watch");
    case "Flashcards":
      return t("explore.next.cards", "Flip cards");
    case "Challenge":
      return t("explore.next.challenge", "Challenge");
    case "Next lesson":
      return t("explore.next.lesson", "Next lesson");
    case "Unit test":
      return t("explore.next.test", "Unit trophy");
    default:
      return label;
  }
}

/** Explore lesson: full-focus, bite-size — X + progress on top, one big card, a big Continue at the bottom. */
export function ExploreLessonLayout(p: LessonLayoutProps) {
  const t = useT();
  const [trail, setTrail] = useState(false);
  const active = p.tabs.find((x) => x.active);
  const doneTabs = p.tabs.filter((x) => x.done).length;
  const story = p.world === "kids" && active?.kind === "article";
  const waitingOnStory = story && !p.completed;
  const read = `${p.lesson.title}. ${p.lesson.summary}`;

  const onContinue = () => {
    // A plain article counts as read when the child moves on (same as "Mark complete").
    if (active?.kind === "article" && !p.completed && !story) p.onComplete();
    say(t("explore.voice.continue", EXPLORE_LINES.continue));
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar: close + lesson progress */}
      <header className="ex-lessonbar sticky top-0 z-30">
        <div className="mx-auto flex w-full max-w-[1000px] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
          <Link href="/learn" className="ex-press grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted hover:bg-surface-2" aria-label={t("explore.lesson.close", "Close lesson and go home")}>
            <X className="h-8 w-8" strokeWidth={3} />
          </Link>
          <FatBar value={p.tabs.length ? doneTabs / p.tabs.length : 0} height={18} label={t("explore.lesson.progress", "Lesson progress")} />
          <button type="button" onClick={() => setTrail(true)} aria-expanded={trail} aria-controls="ex-trail" className="ex-press flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[15px] font-black text-white" style={chunky(EX.teal, 4)} aria-label={t("explore.lesson.trail", "Lesson trail")}>
            <Footprints className="h-5 w-5" strokeWidth={2.6} aria-hidden />
            <span className="tabular-nums">
              {p.unitProgress.done}/{p.unitProgress.total}
            </span>
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[860px] flex-1 px-4 pb-40 pt-3 sm:px-6">
        {/* Where am I */}
        <Link href={p.course.href} className="inline-flex max-w-full items-center gap-2 rounded-full py-1 pr-3 text-[15px] font-black text-muted hover:text-ink">
          <CourseIcon slug={p.course.slug} size={28} />
          <span className="truncate">{t("explore.lesson.where", "Unit {n} · {title}", { n: p.unit.index + 1, title: p.unit.title })}</span>
        </Link>

        {/* Title */}
        <div className="mt-2 flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-[1.9rem] font-black leading-[1.12] sm:text-[2.4rem]">{p.lesson.title}</h1>
            {p.lesson.summary && <p className="mt-1.5 text-lg font-bold text-muted">{p.lesson.summary}</p>}
          </div>
          <ReadAloud text={read} size="lg" />
          <BookmarkStar lessonId={p.lesson.id} title={p.lesson.title} href={`/course/${p.lesson.id}`} />
        </div>

        {/* Big pill tabs */}
        {p.tabs.length > 1 && (
          <div className="-mx-4 mt-5 flex gap-2.5 overflow-x-auto px-4 pb-2 pt-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label={t("explore.lesson.parts", "Lesson parts")}>
            {p.tabs.map((x) => (
              <PillTab key={x.kind} tab={x} />
            ))}
          </div>
        )}

        {/* The page */}
        <AnimatePresence mode="wait">
          <motion.div key={active?.kind ?? "page"} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className={clsx("mt-4", story ? "ex-story" : "ex-page p-4 sm:p-8")}>
            {p.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Continue */}
      <footer className="ex-answerbar fixed inset-x-0 bottom-0 z-30">
        <div className="mx-auto flex w-full max-w-[1000px] items-center gap-3 px-4 py-4 sm:px-6">
          {p.prev ? (
            <Link href={p.prev.href} className="ex-press grid h-14 w-14 shrink-0 place-items-center rounded-[1.25rem] bg-surface text-muted" style={{ boxShadow: "inset 0 0 0 3px rgb(var(--line)), inset 0 -6px 0 rgb(var(--line))" }} aria-label={t("explore.lesson.back", "Go back: {title}", { title: p.prev.title })}>
              <ArrowLeft className="h-7 w-7" strokeWidth={3} aria-hidden />
            </Link>
          ) : null}
          <p className="hidden min-w-0 flex-1 truncate text-lg font-black text-muted sm:block">
            {waitingOnStory ? t("explore.lesson.finishStory", "Finish the story to win your star!") : t("explore.lesson.upNext", "Next: {what} · {title}", { what: nextWord(t, p.upNext.label), title: p.upNext.title })}
          </p>
          <Link
            href={p.upNext.href}
            onClick={onContinue}
            className={clsx("ex-press ex-bigbtn ml-auto flex min-w-0 flex-1 items-center justify-center gap-2 rounded-[1.25rem] px-6 py-4 text-xl font-black uppercase tracking-wide sm:max-w-[300px]", waitingOnStory ? "bg-surface text-[#2EBE70]" : "text-white")}
            style={waitingOnStory ? { boxShadow: "inset 0 0 0 3px rgb(var(--line)), inset 0 -6px 0 rgb(var(--line))" } : chunky(EX.green, 6)}
          >
            {waitingOnStory ? t("explore.lesson.skip", "Skip") : t("explore.continue", "Continue")}
            <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={3} aria-hidden />
          </Link>
        </div>
      </footer>

      <TrailDrawer open={trail} onClose={() => setTrail(false)}>
        {p.unitNav}
        <div className="mt-5 border-t-2 border-line pt-3">{p.notebook}</div>
      </TrailDrawer>
    </div>
  );
}

function PillTab({ tab: x }: { tab: LessonTab }) {
  const t = useT();
  const look = { col: TAB_COL[x.kind] };
  const cls = clsx("ex-press flex shrink-0 items-center gap-2 rounded-full border-[3px] px-4 py-2.5 text-[1.05rem] font-black", x.active ? "text-white" : "bg-surface");
  const style = x.active ? { background: look.col.c, borderColor: look.col.c, boxShadow: `inset 0 -5px 0 ${look.col.s}` } : { borderColor: `${look.col.c}55`, color: look.col.s, boxShadow: `0 4px 0 ${look.col.c}40` };
  const inner = (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: x.active ? "rgb(255 255 255 / 0.25)" : `${look.col.c}1f` }}>
        <x.icon className="h-5 w-5" strokeWidth={2.6} aria-hidden />
      </span>
      {kindWord(t, x.kind)}
      {x.done && (
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FFC21A]" aria-label={t("explore.done", "done")}>
          <Check className="h-4 w-4 text-white" strokeWidth={4} aria-hidden />
        </span>
      )}
    </>
  );
  return x.href ? (
    <Link href={x.href} className={cls} style={style}>
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={x.onSelect} className={cls} style={style} aria-pressed={x.active}>
      {inner}
    </button>
  );
}

function BookmarkStar({ lessonId, title, href }: { lessonId: string; title: string; href: string }) {
  const t = useT();
  const hydrated = useHydrated();
  const marked = useNotebook((s) => Boolean(s.bookmarks[lessonId]));
  const toggle = useNotebook((s) => s.toggleBookmark);
  const on = hydrated && marked;
  return (
    <button
      type="button"
      onClick={() => toggle(lessonId, { title, href })}
      aria-pressed={on}
      aria-label={on ? t("explore.fav.on", "Saved to my favourites. Tap to remove.") : t("explore.fav.off", "Save to my favourites")}
      title={on ? t("explore.fav.saved", "Saved!") : t("explore.fav.save", "Save for later")}
      className="ex-press grid h-14 w-14 shrink-0 place-items-center rounded-full"
      style={on ? chunky(EX.yellow, 5) : { background: "rgb(var(--surface-2))", boxShadow: "inset 0 -5px 0 rgb(var(--line))" }}
    >
      <Star className={clsx("h-8 w-8", on ? "fill-white text-white" : "text-muted")} strokeWidth={2.4} aria-hidden />
    </button>
  );
}

function TrailDrawer({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const t = useT();
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex justify-end bg-[#0b2a55]/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.aside
            id="ex-trail"
            role="dialog"
            aria-modal="true"
            aria-label={t("explore.lesson.trail", "Lesson trail")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
            onClickCapture={(e) => {
              if ((e.target as HTMLElement).closest("a")) onClose();
            }}
            className="ex-drawer flex h-full w-[min(380px,92vw)] flex-col"
          >
            <div className="flex items-center gap-2 px-5 pb-3 pt-5 text-white">
              <Footprints className="h-7 w-7" strokeWidth={2.6} aria-hidden />
              <h2 className="text-2xl font-black">{t("explore.lesson.trail", "Lesson trail")}</h2>
              <button ref={closeRef} type="button" onClick={onClose} className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-white/25 hover:bg-white/35" aria-label={t("explore.close", "Close")}>
                <X className="h-6 w-6" strokeWidth={3} />
              </button>
            </div>
            <div className="ex-drawer-body mx-3 mb-3 flex-1 overflow-y-auto p-4">{children}</div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
