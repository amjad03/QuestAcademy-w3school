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
import type { LessonLayoutProps, LessonTab } from "../types";
import { EX, ReadAloud, chunky } from "./ui";

type Col = { c: string; s: string };

const TAB_LOOK: Record<ItemKind, { label: string; col: Col }> = {
  video: { label: "Watch", col: EX.red },
  article: { label: "Story", col: EX.blue },
  cards: { label: "Flip cards", col: EX.purple },
  practice: { label: "Quiz time", col: EX.green },
  challenge: { label: "Challenge", col: EX.orange },
};

const NEXT_LABEL: Record<string, string> = { Practice: "Quiz time", Lesson: "Story", Video: "Watch", Flashcards: "Flip cards", "Next lesson": "Next stop", "Unit test": "Treasure quiz" };

/** Explore lesson: a storybook page with big pill tabs, a lesson-trail drawer and big arrows. */
export function ExploreLessonLayout(p: LessonLayoutProps) {
  const [trail, setTrail] = useState(false);
  const read = `${p.lesson.title}. ${p.lesson.summary}`;

  return (
    <div className="mx-auto max-w-[1040px] px-3 pb-8 pt-4 sm:px-6">
      {/* Top row: where am I + lesson trail */}
      <div className="flex flex-wrap items-center gap-2">
        <Link href={p.course.href} className="ex-press flex min-w-0 items-center gap-2 rounded-full bg-surface py-1.5 pl-1.5 pr-4 text-[15px] font-black" style={{ boxShadow: "inset 0 -3px 0 rgb(var(--line))" }}>
          <CourseIcon slug={p.course.slug} size={30} />
          <span className="truncate">
            Island {p.unit.index + 1}: {p.unit.title}
          </span>
        </Link>
        <button type="button" onClick={() => setTrail(true)} aria-expanded={trail} aria-controls="ex-trail" className="ex-press ml-auto flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-black text-white" style={chunky(EX.teal, 4)}>
          <Footprints className="h-5 w-5" strokeWidth={2.6} aria-hidden /> Lesson trail
          <span className="rounded-full bg-white/25 px-2 text-sm tabular-nums">
            {p.unitProgress.done}/{p.unitProgress.total}
          </span>
        </button>
      </div>

      {/* Storybook title */}
      <header className="ex-pagehead relative mt-4 px-5 pb-5 pt-6 sm:px-8">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-[2rem] font-black leading-[1.1] sm:text-[2.6rem]">{p.lesson.title}</h1>
            {p.lesson.summary && <p className="mt-2 text-lg font-bold text-muted">{p.lesson.summary}</p>}
          </div>
          <BookmarkStar lessonId={p.lesson.id} title={p.lesson.title} href={`/course/${p.lesson.id}`} />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <ReadAloud text={read} label="Read to me" withWord size="lg" />
          <TrailStars done={p.unitProgress.done} total={p.unitProgress.total} />
        </div>
      </header>

      {/* Pill tabs */}
      <div className="-mx-3 mt-5 flex gap-2.5 overflow-x-auto px-3 pb-2 pt-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Lesson parts">
        {p.tabs.map((t) => (
          <PillTab key={t.kind} tab={t} />
        ))}
      </div>

      {/* The page */}
      <div className="ex-page mt-4 p-4 sm:p-8">{p.content}</div>

      {/* Big arrows */}
      <nav className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]" aria-label="Lesson steps">
        {p.prev ? (
          <Link href={p.prev.href} className="ex-press flex min-w-0 items-center gap-3 rounded-[1.5rem] bg-surface p-3 pr-5" style={{ boxShadow: "inset 0 -5px 0 rgb(var(--line))" }}>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-white" style={chunky(EX.purple, 5)}>
              <ArrowLeft className="h-8 w-8" strokeWidth={3} aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-black text-muted">Go back</span>
              <span className="block truncate text-lg font-black">{p.prev.title}</span>
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        <Link href={p.upNext.href} className="ex-press flex min-w-0 items-center justify-end gap-3 rounded-[1.5rem] p-3 pl-5 text-right text-white" style={chunky(EX.green, 7)}>
          <span className="min-w-0">
            <span className="block text-sm font-black text-white/85">{NEXT_LABEL[p.upNext.label] ?? p.upNext.label}</span>
            <span className="block truncate text-xl font-black">{p.upNext.title}</span>
          </span>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-[#1F9B58]" style={{ boxShadow: "inset 0 -5px 0 rgb(0 0 0 / 0.12)" }}>
            <ArrowRight className="h-9 w-9" strokeWidth={3} aria-hidden />
          </span>
        </Link>
      </nav>

      <TrailDrawer open={trail} onClose={() => setTrail(false)}>
        {p.unitNav}
      </TrailDrawer>
    </div>
  );
}

function PillTab({ tab: t }: { tab: LessonTab }) {
  const look = TAB_LOOK[t.kind];
  const cls = clsx("ex-press flex shrink-0 items-center gap-2 rounded-full border-[3px] px-4 py-2.5 text-[1.05rem] font-black", t.active ? "text-white" : "bg-surface");
  const style = t.active ? { background: look.col.c, borderColor: look.col.c, boxShadow: `inset 0 -5px 0 ${look.col.s}` } : { borderColor: `${look.col.c}55`, color: look.col.s, boxShadow: `0 4px 0 ${look.col.c}40` };
  const inner = (
    <>
      <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: t.active ? "rgb(255 255 255 / 0.25)" : `${look.col.c}1f` }}>
        <t.icon className="h-5 w-5" strokeWidth={2.6} aria-hidden />
      </span>
      {look.label}
      {t.done && (
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FFC21A]" aria-label="done">
          <Check className="h-4 w-4 text-white" strokeWidth={4} aria-hidden />
        </span>
      )}
    </>
  );
  return t.href ? (
    <Link href={t.href} className={cls} style={style}>
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={t.onSelect} className={cls} style={style} aria-pressed={t.active}>
      {inner}
    </button>
  );
}

function TrailStars({ done, total }: { done: number; total: number }) {
  const n = Math.min(total, 12);
  return (
    <div className="flex items-center gap-2 rounded-full bg-surface-2 px-3 py-2" aria-label={`${done} of ${total} lessons on this island done`}>
      <div className="flex gap-0.5" aria-hidden>
        {Array.from({ length: n }).map((_, i) => (
          <Star key={i} className={clsx("h-5 w-5", i < done ? "fill-[#FFC21A] text-[#D99A00]" : "text-line")} strokeWidth={2.4} />
        ))}
      </div>
      <span className="text-sm font-black text-muted">
        {done} of {total}
      </span>
    </div>
  );
}

function BookmarkStar({ lessonId, title, href }: { lessonId: string; title: string; href: string }) {
  const hydrated = useHydrated();
  const marked = useNotebook((s) => Boolean(s.bookmarks[lessonId]));
  const toggle = useNotebook((s) => s.toggleBookmark);
  const on = hydrated && marked;
  return (
    <button
      type="button"
      onClick={() => toggle(lessonId, { title, href })}
      aria-pressed={on}
      aria-label={on ? "Saved to my favourites. Tap to remove." : "Save to my favourites"}
      title={on ? "Saved!" : "Save for later"}
      className="ex-press ex-bookmark grid h-14 w-14 shrink-0 place-items-center rounded-full"
      style={on ? chunky(EX.yellow, 5) : { background: "rgb(var(--surface-2))", boxShadow: "inset 0 -5px 0 rgb(var(--line))" }}
    >
      <Star className={clsx("h-8 w-8", on ? "fill-white text-white" : "text-muted")} strokeWidth={2.4} aria-hidden />
    </button>
  );
}

function TrailDrawer({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
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
            aria-label="Lesson trail"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
            onClickCapture={(e) => {
              // Close after following a link in the trail.
              if ((e.target as HTMLElement).closest("a")) onClose();
            }}
            className="ex-drawer flex h-full w-[min(380px,92vw)] flex-col"
          >
            <div className="flex items-center gap-2 px-5 pb-3 pt-5 text-white">
              <Footprints className="h-7 w-7" strokeWidth={2.6} aria-hidden />
              <h2 className="text-2xl font-black">Lesson trail</h2>
              <button ref={closeRef} type="button" onClick={onClose} className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-white/25 hover:bg-white/35" aria-label="Close lesson trail">
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
