"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, House, RotateCcw, SkipForward, Sparkles, Star } from "lucide-react";
import clsx from "clsx";
import { Mascot } from "@/components/brand/Mascot";
import { say, sayQueue } from "@/lib/voice";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { PRAISE } from "@/content/voice-lines";
import { STICKERS, type Sticker } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import { useT } from "@/i18n";
import type { SessionLayoutProps, SessionResultsProps } from "../types";
import { BubbleButton, BubbleLink, ChunkyButton, ChunkyLink, CloseX, ProgressBar } from "./ui";

/**
 * Sprout session, Duolingo style: X + thick progress bar on top, one big
 * question, a big "Check" button, and a feedback sheet that slides up —
 * green "Great!" or a gentle orange "Let's try again!" with the right answer.
 * Never a red X. (Sounds and voice come from the shared session.)
 */
export function SproutSessionLayout(p: SessionLayoutProps) {
  const t = useT();
  const reduce = useReducedMotion();
  const fb = p.feedback;
  const praiseIdx = fb ? PRAISE.indexOf(fb.praise) : -1;
  // One entry per PRAISE line, same order.
  const praise = [
    t("sprout.praise.0", "Great job!"),
    t("sprout.praise.1", "You did it!"),
    t("sprout.praise.2", "Wow, well done!"),
    t("sprout.praise.3", "Super star!"),
    t("sprout.praise.4", "Amazing work!"),
    t("sprout.praise.5", "You’re so clever!"),
    t("sprout.praise.6", "Hooray! That’s right!"),
  ];
  const headline = fb?.correct ? (praiseIdx >= 0 ? (praise[praiseIdx] ?? fb.praise) : t("sprout.session.great", "Great!")) : t("sprout.session.tryAgain", "Let’s try again!");

  return (
    <div className="sprout-session flex min-h-[100dvh] flex-col bg-bg">
      {/* Top: X, progress, in-a-row sparkle */}
      <div className="mx-auto flex w-full max-w-[920px] items-center gap-2 px-3 pt-[max(12px,env(safe-area-inset-top))] sm:gap-4 sm:px-6">
        <CloseX onTap={p.onQuit} label={t("sprout.session.quit", "Stop playing")} speak={t("sprout.session.quitSay", "Do you want to stop?")} />
        <ProgressBar value={p.progress} label={t("sprout.session.progress", "How far you’ve come")} />
        <AnimatePresence>
          {p.combo >= 2 && (
            <motion.button
              type="button"
              key="combo"
              onClick={() => say(t("sprout.session.comboSay", "{n} in a row! Wow!", { n: p.combo }))}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex shrink-0 items-center gap-1 rounded-full bg-[#FFF3C4] px-3 py-2 text-lg font-extrabold text-[#9A6A00] dark:bg-[#4A3A10] dark:text-[#FFE7A8]"
              aria-label={t("sprout.session.comboAria", "{n} right in a row", { n: p.combo })}
            >
              <Sparkles className="h-5 w-5" strokeWidth={2.6} aria-hidden /> {p.combo}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* The question */}
      <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col justify-center px-4 py-5">
        {p.retry && (
          <p className="mb-3 flex items-center justify-center gap-2 text-center">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFE7A8] text-[#B07A00]" aria-hidden>
              <RotateCcw className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="sprout-caption">{t("sprout.session.again", "Let’s try this one again")}</span>
          </p>
        )}
        <div className="sprout-question rounded-[2.5rem] p-5 sm:p-8">{p.question}</div>
      </main>

      {/* Bottom: Check, or the feedback sheet */}
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          {!fb ? (
            <motion.div key="ask" className="sprout-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }}>
              <div className="mx-auto flex w-full max-w-[760px] items-center gap-3 px-4 pb-[max(18px,env(safe-area-inset-bottom))] pt-3">
                <BubbleButton label={t("sprout.session.skip", "Skip")} speak={t("sprout.session.skipSay", "Skip this one")} icon={SkipForward} colors={["#D6D2CC", "#B8B2AA"]} size={60} onTap={p.onSkip} />
                <motion.div className="flex-1" animate={p.canCheck && !reduce ? { scale: [1, 1.03, 1] } : { scale: 1 }} transition={p.canCheck ? { repeat: Infinity, duration: 1.6 } : undefined}>
                  <ChunkyButton tone="good" wide icon={Check} disabled={!p.canCheck} onTap={p.onCheck}>
                    {t("sprout.session.check", "Check")}
                  </ChunkyButton>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="fb"
              role="status"
              aria-live="polite"
              className={clsx("sprout-sheet", fb.correct ? "sprout-sheet-yay" : "sprout-sheet-try")}
              initial={reduce ? { opacity: 0 } : { y: "100%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              exit={reduce ? { opacity: 0 } : { y: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
            >
              <div className="mx-auto w-full max-w-[760px] px-4 pb-[max(18px,env(safe-area-inset-bottom))] pt-5">
                <div className="flex items-center gap-3 sm:gap-5">
                  <motion.span
                    className="shrink-0"
                    animate={reduce ? undefined : fb.correct ? { y: [0, -14, 0], rotate: [0, -6, 6, 0] } : { rotate: [0, -4, 4, 0] }}
                    transition={{ duration: 0.7 }}
                    role="img"
                    aria-label={fb.correct ? t("sprout.session.cheering", "Questy is cheering") : t("sprout.session.thinking", "Questy is thinking")}
                  >
                    <Mascot pose={fb.correct ? "cheer" : "think"} size={84} animate={false} />
                  </motion.span>
                  <div className="min-w-0 flex-1">
                    <p className="sprout-sheet-title text-[1.6rem] font-extrabold leading-tight">{headline}</p>
                    {!fb.correct && (
                      <div className="mt-2">
                        <p className="sprout-caption">{t("sprout.session.answerIs", "The answer is:")}</p>
                        <div className="sprout-answer mt-1 inline-flex max-w-full items-center gap-2 rounded-[1.4rem] px-4 py-2 text-[1.2rem] font-extrabold">
                          <Star className="h-5 w-5 shrink-0 fill-[#FFC93C] text-[#E3A51C]" aria-hidden />
                          <span className="min-w-0 break-words">{fb.answer}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <ChunkyButton tone={fb.correct ? "good" : "warn"} wide icon={ArrowRight} autoFocus onTap={p.onContinue} className="mt-4">
                  {t("sprout.session.continue", "Continue")}
                </ChunkyButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {p.quitDialog}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Lesson complete                                                      */
/* ------------------------------------------------------------------ */

/** The sticker earned in this session: the newest one stamped since it started. */
function useNewSticker(seconds: number): Sticker | null {
  const hydrated = useHydrated();
  const stickers = useLearner((s) => s.stickers);
  const [since] = useState(() => Date.now() - (seconds + 20) * 1000);
  return useMemo(() => {
    if (!hydrated) return null;
    let best: { id: string; at: number } | null = null;
    for (const [id, iso] of Object.entries(stickers)) {
      const at = Date.parse(iso);
      if (Number.isFinite(at) && at >= since && (!best || at > best.at)) best = { id, at };
    }
    return best ? (STICKERS.find((s) => s.id === best!.id) ?? null) : null;
  }, [hydrated, stickers, since]);
}

/** Sprout results: Duolingo "Lesson complete!" — Questy celebrating, stars, the sticker, one big Continue. */
export function SproutSessionResults(r: SessionResultsProps) {
  const t = useT();
  const reduce = useReducedMotion();
  const sticker = useNewSticker(r.seconds);
  const stars = r.accuracy >= 0.9 ? 3 : r.accuracy >= 0.5 ? 2 : 1;
  const title = r.kind === "practice" ? t("sprout.results.lesson", "Lesson complete!") : t("sprout.results.quiz", "Quiz complete!");
  const line = stars === 3 ? t("sprout.results.three", "Three stars! You’re a super star!") : stars === 2 ? t("sprout.results.two", "Two stars! Great job!") : t("sprout.results.one", "You tried so hard. Well done!");
  const stickerLine = t("sprout.results.stickerSay", "You got a new sticker!");

  // Questy says it out loud (this replaces the shared session's line, so they don't overlap).
  useEffect(() => {
    const tm = setTimeout(() => sayQueue(sticker ? [title, stickerLine] : [title, line]), 350);
    return () => clearTimeout(tm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(sticker)]);

  return (
    <div className="sprout-session sprout-results relative flex min-h-[100dvh] flex-col items-center overflow-hidden bg-bg px-4">
      <div className="relative z-10 flex w-full max-w-[640px] flex-1 flex-col items-center justify-center py-8 text-center">
        {/* Questy celebrating, with a sunburst */}
        <motion.button
          type="button"
          onClick={() => say(`${title} ${line}`)}
          className="sprout-press relative grid place-items-center rounded-full"
          aria-label={t("sprout.results.hear", "Hear Questy")}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
        >
          <span className="sprout-burst absolute h-[230px] w-[230px] rounded-full" aria-hidden />
          <motion.span className="relative" animate={reduce ? undefined : { y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut", delay: 0.8 }}>
            <Mascot pose="cheer" size={150} animate={false} />
          </motion.span>
        </motion.button>

        <motion.h1 className="mt-4 text-[2.1rem] font-extrabold leading-tight text-[#E3A51C] dark:text-[#FFD66B]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {title}
        </motion.h1>

        {/* Stars */}
        <div className="mt-3 flex items-end justify-center gap-2 sm:gap-4" role="img" aria-label={t("sprout.results.starsAria", "{n} of 3 stars", { n: stars })}>
          {[0, 1, 2].map((i) => {
            const on = i < stars;
            return (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -40, y: 20 }}
                animate={{ scale: 1, rotate: 0, y: i === 1 ? -14 : 0 }}
                transition={{ delay: 0.5 + i * 0.3, type: "spring", stiffness: 260, damping: 14 }}
              >
                <Star className={clsx(i === 1 ? "h-20 w-20 sm:h-24 sm:w-24" : "h-16 w-16 sm:h-20 sm:w-20", on ? "fill-[#FFC93C] text-[#E3A51C]" : "fill-[rgb(var(--line))] text-[rgb(var(--line))]")} strokeWidth={1.4} />
              </motion.span>
            );
          })}
        </div>
        <motion.p className="mt-3 text-[1.25rem] font-extrabold leading-snug" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
          {line}
        </motion.p>

        {/* The sticker earned */}
        {sticker && (
          <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6, type: "spring", stiffness: 240, damping: 14 }} className="mt-5">
            <BubbleLinkSticker sticker={sticker} label={t("sprout.results.newSticker", "New sticker!")} />
          </motion.div>
        )}

        {/* For grown-ups */}
        {r.total > 0 && <p className="sprout-caption mt-5">{t("sprout.results.grownUps", "{correct} of {total} right on the first try", { correct: r.correct, total: r.total })}</p>}
      </div>

      <div className="relative z-10 flex w-full max-w-[560px] items-center gap-3 pb-[max(24px,env(safe-area-inset-bottom))]">
        <BubbleButton label={t("sprout.results.again", "Play again")} speak={t("sprout.results.againSay", "Let’s try that again. You can do it!")} icon={RotateCcw} hue="peach" size={64} onTap={r.onRetry} />
        <ChunkyLink href={r.exitHref} tone="good" icon={ArrowRight} speak={t("sprout.results.goSay", "Let’s keep going!")} className="min-w-0 flex-1 !px-4" autoFocus>
          {t("sprout.results.continue", "Continue")}
        </ChunkyLink>
        <BubbleLink href="/learn" label={t("sprout.results.home", "Home")} icon={House} hue="sky" size={64} />
      </div>
    </div>
  );
}

function BubbleLinkSticker({ sticker, label }: { sticker: Sticker; label: string }) {
  return (
    <Link href="/stickers" onClick={() => say(label)} className="sprout-press sprout-sticker-won inline-flex items-center gap-3 rounded-[2rem] px-4 py-3" aria-label={`${label} ${sticker.name}`}>
      <StickerTile sticker={sticker} owned size={72} />
      <span className="text-left">
        <span className="block text-[1.15rem] font-extrabold leading-tight">{label}</span>
        <span className="sprout-caption">{sticker.name}</span>
      </span>
    </Link>
  );
}
