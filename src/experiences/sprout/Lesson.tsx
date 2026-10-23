"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Check, Gamepad2, Layers, Map as MapIcon, Tv, Volume2, X, type LucideIcon } from "lucide-react";
import type { ItemKind } from "@/content/course";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { say } from "@/lib/voice";
import type { LessonLayoutProps, LessonTab } from "../types";
import { BubbleButton, BubbleLink, type SunHue } from "./ui";

const TAB_PICTURE: Record<ItemKind, { icon: LucideIcon; hue: SunHue; label: string; speak: string }> = {
  video: { icon: Tv, hue: "sky", label: "Watch", speak: "Let’s watch!" },
  article: { icon: BookOpen, hue: "peach", label: "Story", speak: "Story time!" },
  cards: { icon: Layers, hue: "lilac", label: "Cards", speak: "Let’s play flip cards!" },
  practice: { icon: Gamepad2, hue: "mint", label: "Play", speak: "Your turn! Let’s play." },
  challenge: { icon: Gamepad2, hue: "berry", label: "Play", speak: "Let’s play!" },
};

/** Sprout lesson: a storybook page. Big picture tabs, the content, and arrow bubbles. */
export function SproutLessonLayout(p: LessonLayoutProps) {
  const [map, setMap] = useState(false);
  return (
    <div className="mx-auto max-w-[920px] px-3 pt-3 sm:px-6">
      {/* Title strip: course picture, hear the lesson name, map */}
      <div className="flex items-center gap-3">
        <Link href={p.course.href} onClick={() => say(p.course.title)} className="sprout-press shrink-0 rounded-[28%]" aria-label={p.course.title}>
          <CourseIcon slug={p.course.slug} size={56} />
        </Link>
        <button onClick={() => say(p.lesson.summary ? `${p.lesson.title}. ${p.lesson.summary}` : p.lesson.title)} className="sprout-press flex min-w-0 flex-1 items-center gap-3 rounded-[2rem] bg-surface px-4 py-2.5 text-left shadow-soft" aria-label={`Hear: ${p.lesson.title}`}>
          <Volume2 className="h-6 w-6 shrink-0 text-accent" strokeWidth={2.6} />
          <span className="truncate text-[1.15rem] font-extrabold">{p.lesson.title}</span>
        </button>
        <BubbleButton label="Map" speak="Here is your map." icon={MapIcon} hue="butter" size={60} onTap={() => setMap(true)} />
      </div>

      {/* Picture tabs */}
      {p.tabs.length > 1 && (
        <div className="mt-5 flex flex-wrap items-start justify-center gap-4 sm:gap-6" role="group" aria-label="Choose an activity">
          {p.tabs.map((t) => (
            <PictureTab key={t.kind} tab={t} />
          ))}
        </div>
      )}

      {/* The page */}
      <div className="sprout-page mt-6 rounded-[2.5rem] p-4 sm:p-8">{p.content}</div>

      {/* Arrows */}
      <div className="mt-8 flex items-center justify-between gap-4 px-2">
        {p.prev ? <BubbleLink href={p.prev.href} label="Back" speak="Go back" icon={ArrowLeft} hue="sky" size={76} /> : <span />}
        <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <BubbleLink href={p.upNext.href} label={`Next: ${p.upNext.title}`} speak="Next!" icon={ArrowRight} hue="mint" size={100} />
        </motion.div>
      </div>

      <AnimatePresence>{map && <MapSheet onClose={() => setMap(false)} {...p} />}</AnimatePresence>
    </div>
  );
}

function PictureTab({ tab: t }: { tab: LessonTab }) {
  const pic = TAB_PICTURE[t.kind];
  const badge = t.done ? (
    <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-[#3CCB98] text-white shadow-soft ring-4 ring-[rgb(var(--bg))]">
      <Check className="h-5 w-5" strokeWidth={3.5} />
    </span>
  ) : null;
  const common = { label: pic.label, speak: pic.speak, icon: pic.icon, hue: pic.hue, size: 88, caption: true, badge };
  return t.href ? (
    <BubbleLink href={t.href} {...common} active={t.active} />
  ) : (
    <BubbleButton {...common} pressed={t.active} onTap={t.onSelect} />
  );
}

function MapSheet({ onClose, unitNav, unit, unitProgress }: LessonLayoutProps & { onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onClose]);
  return (
    <motion.div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/30 sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Map: ${unit.title}`}
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        exit={{ y: 60 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        onClickCapture={(e) => {
          if ((e.target as HTMLElement).closest("a")) onClose();
        }}
        className="sprout-map flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[2.5rem] bg-surface sm:rounded-[2.5rem]"
      >
        <div className="flex items-center gap-3 px-5 pb-2 pt-5">
          <MapIcon className="h-8 w-8 text-[#E3A51C]" strokeWidth={2.4} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-lg font-extrabold">{unit.title}</span>
            <span className="mt-1 flex gap-1" aria-label={`${unitProgress.done} of ${unitProgress.total} done`}>
              {Array.from({ length: Math.min(unitProgress.total, 12) }, (_, i) => (
                <span key={i} className="h-3 w-3 rounded-full" style={{ background: i < unitProgress.done ? "#FFC93C" : "rgb(var(--line))" }} />
              ))}
            </span>
          </span>
          <button ref={ref} onClick={onClose} className="grid h-12 w-12 place-items-center rounded-full bg-surface-2 text-muted" aria-label="Close map">
            <X className="h-6 w-6" strokeWidth={2.6} />
          </button>
        </div>
        <div className="overflow-y-auto px-4 pb-6">{unitNav}</div>
      </motion.div>
    </motion.div>
  );
}
