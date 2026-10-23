"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Check, Gamepad2, Layers, Tv, Volume2, type LucideIcon } from "lucide-react";
import type { ItemKind } from "@/content/course";
import { say } from "@/lib/voice";
import { useT } from "@/i18n";
import type { LessonLayoutProps, LessonTab } from "../types";
import { BubbleButton, BubbleLink, ChunkyLink, CloseX, ProgressBar, type SunHue } from "./ui";

const TAB_PICTURE: Record<ItemKind, { icon: LucideIcon; hue: SunHue; key: string; label: string; speak: string }> = {
  video: { icon: Tv, hue: "sky", key: "watch", label: "Watch", speak: "Let’s watch!" },
  article: { icon: BookOpen, hue: "peach", key: "story", label: "Story", speak: "Story time!" },
  cards: { icon: Layers, hue: "lilac", key: "cards", label: "Cards", speak: "Let’s play flip cards!" },
  practice: { icon: Gamepad2, hue: "mint", key: "play", label: "Play", speak: "Your turn! Let’s play." },
  challenge: { icon: Gamepad2, hue: "berry", key: "game", label: "Play", speak: "Let’s play!" },
};

/**
 * Sprout lesson: a full-screen story player, Duolingo style.
 * X to leave, a thick progress bar, picture steps, the content, and one big
 * "Continue" once this step is done. Nothing else on screen.
 */
export function SproutLessonLayout(p: LessonLayoutProps) {
  const t = useT();
  const reduce = useReducedMotion();
  const router = useRouter();
  const active = p.tabs.find((x) => x.active);
  const doneCount = p.tabs.filter((x) => x.done).length;
  const progress = p.tabs.length ? doneCount / p.tabs.length : 0;
  const ready = Boolean(active?.done);

  // Leaving with Escape, like the X.
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || document.querySelector("[aria-modal='true']")) return;
      router.push("/learn");
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [router]);

  const hear = () => say(p.lesson.summary ? `${p.lesson.title}. ${p.lesson.summary}` : p.lesson.title);

  return (
    <div className="sprout-player flex min-h-[100dvh] flex-col bg-bg">
      {/* Top bar: X, progress, hear the lesson name */}
      <header className="sprout-player-top sticky top-0 z-30">
        <div className="mx-auto flex w-full max-w-[920px] items-center gap-2 px-3 pb-2 pt-[max(10px,env(safe-area-inset-top))] sm:gap-4 sm:px-6">
          <CloseX href="/learn" label={t("sprout.lesson.exit", "Leave the lesson")} speak={t("sprout.lesson.byeSay", "Bye bye! See you on the path.")} />
          <ProgressBar value={progress} label={t("sprout.lesson.progress", "How much of this lesson is done")} />
          <button
            type="button"
            onClick={hear}
            className="sprout-press grid h-14 w-14 shrink-0 place-items-center rounded-full bg-surface text-accent shadow-soft"
            aria-label={t("sprout.lesson.hear", "Hear: {title}", { title: p.lesson.title })}
          >
            <Volume2 className="h-7 w-7" strokeWidth={2.6} />
          </button>
        </div>
        <h1 className="sr-only">{p.lesson.title}</h1>
      </header>

      {/* Picture steps */}
      {p.tabs.length > 1 && (
        <nav className="mx-auto mt-1 flex w-full max-w-[920px] flex-wrap items-start justify-center gap-3 px-3 sm:gap-6" aria-label={t("sprout.lesson.steps", "Choose an activity")}>
          {p.tabs.map((tab) => (
            <PictureTab key={tab.kind} tab={tab} />
          ))}
        </nav>
      )}

      {/* The story */}
      <main className="mx-auto w-full max-w-[860px] flex-1 px-3 pb-6 pt-4 sm:px-6">
        <div className="sprout-page rounded-[2.5rem] p-4 sm:p-8">{p.content}</div>
      </main>

      {/* Continue sheet once this step is done */}
      <AnimatePresence>
        {ready && (
          <motion.div
            className="sprout-continue sticky bottom-0 z-30"
            initial={reduce ? { opacity: 0 } : { y: 120 }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: 120 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <div className="mx-auto flex w-full max-w-[860px] items-center gap-3 px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#3CCB98] text-white shadow-[inset_0_-5px_0_#25A87B]" aria-hidden>
                <Check className="h-8 w-8" strokeWidth={3.5} />
              </span>
              <p className="hidden min-w-0 flex-1 text-[1.3rem] font-extrabold text-[#1F8A64] dark:text-[#8FE8C4] sm:block">{t("sprout.lesson.great", "Great!")}</p>
              <ChunkyLink href={p.upNext.href} icon={ArrowRight} tone="good" speak={t("sprout.lesson.nextSay", "Next!")} className="flex-1 sm:flex-none sm:min-w-[260px]" label={t("sprout.lesson.continueTo", "Continue: {title}", { title: p.upNext.title })}>
                {t("sprout.lesson.continue", "Continue")}
              </ChunkyLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PictureTab({ tab }: { tab: LessonTab }) {
  const t = useT();
  const pic = TAB_PICTURE[tab.kind];
  const badge = tab.done ? (
    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-[#3CCB98] text-white shadow-soft ring-4 ring-[rgb(var(--bg))]">
      <Check className="h-4 w-4" strokeWidth={3.5} />
    </span>
  ) : null;
  const common = {
    label: t(`sprout.lesson.tab.${pic.key}`, pic.label),
    speak: t(`sprout.lesson.tab.${pic.key}Say`, pic.speak),
    icon: pic.icon,
    hue: pic.hue,
    size: 68,
    caption: true,
    badge,
  };
  return tab.href ? <BubbleLink href={tab.href} {...common} active={tab.active} /> : <BubbleButton {...common} pressed={tab.active} onTap={tab.onSelect} />;
}
