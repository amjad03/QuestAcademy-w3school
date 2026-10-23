"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, House, RotateCcw, SkipForward, Star } from "lucide-react";
import clsx from "clsx";
import { Mascot } from "@/components/brand/Mascot";
import { say } from "@/lib/voice";
import { PRAISE, EXPLORE_LINES } from "@/content/voice-lines";
import type { SessionLayoutProps, SessionResultsProps } from "../types";
import { BubbleButton, BubbleLink } from "./ui";

const MAX_STEPS = 10;

/** Star path that fills as the child goes (no numbers). */
function StarTrail({ progress, total }: { progress: number; total: number }) {
  const n = Math.max(1, Math.min(total, MAX_STEPS));
  const filled = Math.round(progress * n);
  return (
    <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2" role="progressbar" aria-label="How far you’ve come" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
      {Array.from({ length: n }, (_, i) => {
        const on = i < filled;
        return (
          <motion.span key={i} animate={on ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.4 }}>
            <Star className={clsx("h-7 w-7 sm:h-9 sm:w-9", on ? "fill-[#FFC93C] text-[#E3A51C]" : "fill-[rgb(var(--line))] text-[rgb(var(--line))]")} strokeWidth={1.6} />
          </motion.span>
        );
      })}
    </div>
  );
}

/** Sprout session: one big question, a star trail, Questy's face for feedback, round buttons. */
export function SproutSessionLayout(p: SessionLayoutProps) {
  const fb = p.feedback;
  return (
    <div className="sprout-session flex min-h-screen flex-col bg-bg">
      <div className="mx-auto flex w-full max-w-[920px] items-center gap-3 px-4 pt-5">
        <BubbleButton label="Home" speak="Do you want to stop?" icon={House} hue="sky" size={60} onTap={p.onQuit} />
        <StarTrail progress={p.progress} total={p.total} />
        <span className="w-[60px] shrink-0" aria-hidden />
      </div>

      <div className="mx-auto flex w-full max-w-[760px] flex-1 flex-col justify-center px-4 py-6">
        {p.retry && (
          <p className="mb-3 flex items-center justify-center gap-2 text-center">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFE7A8] text-[#B07A00]" aria-hidden>
              <RotateCcw className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="sprout-caption">Let’s try this one again</span>
          </p>
        )}
        <div className="sprout-question rounded-[2.5rem] p-5 sm:p-8">{p.question}</div>
      </div>

      <div className={clsx("sprout-footer transition-colors", fb && (fb.correct ? "sprout-footer-yay" : "sprout-footer-try"))}>
        <div className="mx-auto flex w-full max-w-[920px] items-center gap-4 px-4 pb-[max(18px,env(safe-area-inset-bottom))] pt-4">
          <AnimatePresence mode="wait">
            {!fb ? (
              <motion.div key="ask" className="flex w-full items-center justify-between" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <BubbleButton label="Skip" speak="Skip this one" icon={SkipForward} colors={["#C9CEDB", "#A9AFBF"]} size={60} onTap={p.onSkip} />
                <motion.div animate={p.canCheck ? { scale: [1, 1.06, 1] } : { scale: 1 }} transition={p.canCheck ? { repeat: Infinity, duration: 1.6 } : undefined}>
                  <BubbleButton label="Check" icon={Check} hue="mint" size={104} disabled={!p.canCheck} silent onTap={p.onCheck} />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div key="fb" className="flex w-full items-center gap-3 sm:gap-5" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <motion.span
                  className="shrink-0"
                  animate={fb.correct ? { y: [0, -14, 0], rotate: [0, -6, 6, 0] } : { rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 0.7 }}
                  role="img"
                  aria-label={fb.correct ? "Questy is cheering" : "Questy is thinking"}
                >
                  <Mascot pose={fb.correct ? "cheer" : "think"} size={88} animate={false} />
                </motion.span>
                <div className="min-w-0 flex-1" aria-live="polite">
                  <p className="text-[1.5rem] font-extrabold leading-tight">{fb.correct ? fb.praise : "Nice try!"}</p>
                  {!fb.correct && (
                    <div className="mt-2 inline-flex max-w-full items-center gap-2 rounded-[1.4rem] bg-[#FFF3C4] px-4 py-2 text-[1.1rem] font-extrabold text-[#6B4A00] dark:bg-[#4A3A10] dark:text-[#FFE7A8]">
                      <Star className="h-5 w-5 shrink-0 fill-[#FFC93C] text-[#E3A51C]" />
                      <span className="min-w-0 break-words">{fb.answer}</span>
                    </div>
                  )}
                </div>
                <BubbleButton label="Next" icon={ArrowRight} hue={fb.correct ? "mint" : "butter"} size={96} silent autoFocus onTap={p.onContinue} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {p.quitDialog}
    </div>
  );
}

const CONFETTI_COLORS = ["#FF9E7A", "#FFC93C", "#3CCB98", "#55B7F5", "#F27BB0", "#A98BF5"];

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        x: (i * 37) % 100,
        delay: (i % 9) * 0.18,
        dur: 3.2 + ((i * 13) % 10) / 5,
        size: 10 + ((i * 7) % 10),
        round: i % 3 !== 0,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        drift: ((i * 29) % 60) - 30,
      })),
    [],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {bits.map((b, i) => (
        <motion.span
          key={i}
          className="absolute top-0"
          style={{ left: `${b.x}%`, width: b.size, height: b.size, background: b.color, borderRadius: b.round ? "9999px" : "4px" }}
          initial={{ y: -40, x: 0, rotate: 0, opacity: 0 }}
          animate={{ y: "105vh", x: b.drift, rotate: 220, opacity: [0, 1, 1, 0.6] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: 1, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}

/** Sprout results: stars for trying, confetti, Questy cheering, picture buttons. No numbers. */
export function SproutSessionResults(r: SessionResultsProps) {
  const stars = r.accuracy >= 0.9 ? 3 : r.accuracy >= 0.5 ? 2 : 1;
  const line = stars === 3 ? PRAISE[3] : stars === 2 ? PRAISE[0] : "You tried so hard. Well done!";
  return (
    <div className="sprout-session relative flex min-h-screen flex-col items-center overflow-hidden bg-bg px-4">
      <Confetti />
      <div className="relative z-10 flex w-full max-w-[640px] flex-1 flex-col items-center justify-center py-10 text-center">
        <div className="flex items-end justify-center gap-2 sm:gap-4" role="img" aria-label={`${stars} star${stars > 1 ? "s" : ""}`}>
          {[0, 1, 2].map((i) => {
            const on = i < stars;
            return (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -40, y: 20 }}
                animate={{ scale: 1, rotate: 0, y: i === 1 ? -18 : 0 }}
                transition={{ delay: 0.3 + i * 0.35, type: "spring", stiffness: 260, damping: 14 }}
              >
                <Star className={clsx(i === 1 ? "h-28 w-28 sm:h-32 sm:w-32" : "h-20 w-20 sm:h-24 sm:w-24", on ? "fill-[#FFC93C] text-[#E3A51C]" : "fill-[rgb(var(--line))] text-[rgb(var(--line))]")} strokeWidth={1.4} />
              </motion.span>
            );
          })}
        </div>
        <motion.button
          type="button"
          onClick={() => say(line)}
          className="sprout-press mt-6 rounded-full"
          aria-label="Hear Questy"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ y: { repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 1.4 }, opacity: { delay: 1.2 } }}
        >
          <Mascot pose="cheer" size={150} />
        </motion.button>
        <motion.p className="mt-4 text-[2rem] font-extrabold leading-tight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          {line}
        </motion.p>
      </div>
      <div className="relative z-10 flex w-full max-w-[560px] items-end justify-around gap-3 pb-[max(24px,env(safe-area-inset-bottom))]">
        <BubbleButton label="Play again" speak={EXPLORE_LINES.tryAgain} icon={RotateCcw} hue="peach" size={84} caption onTap={r.onRetry} />
        <BubbleLink href={r.exitHref} label="Keep going" speak="Let’s keep going!" icon={ArrowRight} hue="mint" size={108} caption />
        <BubbleLink href="/learn" label="Home" icon={House} hue="sky" size={84} caption />
      </div>
    </div>
  );
}
