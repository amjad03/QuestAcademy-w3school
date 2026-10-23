"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, Check, RotateCcw, Sparkles, X } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { burst } from "@/lib/confetti";

type Level = {
  id: string;
  label: string;
  tag: string;
  color: string;
  q: React.ReactNode;
  options: string[];
  answer: number;
  hint: string;
  why: string;
};

const LEVELS: Level[] = [
  {
    id: "kids",
    label: "Age 6",
    tag: "Number Land",
    color: "#2EBE70",
    q: (
      <>
        How many apples are there?
        <span className="mt-3 block text-4xl tracking-[0.2em]" aria-label="five apples">
          🍎🍎🍎🍎🍎
        </span>
      </>
    ),
    options: ["4", "5", "6"],
    answer: 1,
    hint: "Touch each apple once and say one number. What number do you stop on?",
    why: "One number for each apple: 1, 2, 3, 4, 5. The last number tells how many!",
  },
  {
    id: "school",
    label: "Class 10",
    tag: "Physics · Motion",
    color: "#2F6BFF",
    q: "A car drives 30 km at 60 km/h, then 30 km at 30 km/h. What is its average speed?",
    options: ["45 km/h", "40 km/h", "50 km/h"],
    answer: 1,
    hint: "Average speed is total distance ÷ total time. How long did each 30 km take?",
    why: "0.5 h + 1 h = 1.5 h for 60 km, so 60 ÷ 1.5 = 40 km/h. It isn’t the average of the two speeds.",
  },
  {
    id: "college",
    label: "College",
    tag: "Algorithms",
    color: "#7C4DFF",
    q: "As n gets very large, which of these grows fastest?",
    options: ["n²", "n log n", "2ⁿ"],
    answer: 2,
    hint: "Try n = 30. Compare 30², 30 × log₂ 30 and 2³⁰.",
    why: "Exponential beats any polynomial: 2³⁰ is over a billion, while 30² is just 900.",
  },
];

/** Learn by doing, right in the hero: one real question per age, with Questy's hints. */
export function HeroPlayground() {
  const [li, setLi] = useState(1);
  const [pick, setPick] = useState<number | null>(null);
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const L = LEVELS[li];
  const correct = pick === L.answer;

  const choose = (i: number) => {
    if (correct) return;
    setPick(i);
    if (i === L.answer) {
      setSolved((s) => ({ ...s, [L.id]: true }));
      burst();
    }
  };
  const go = (i: number) => {
    setLi(i);
    setPick(null);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[28px] border-2 border-line bg-surface shadow-[0_40px_100px_-40px_rgba(20,33,74,0.5)]">
        <div className="flex items-center justify-between gap-3 border-b-2 border-line px-5 py-3">
          <div className="flex gap-1.5 rounded-2xl bg-surface-2 p-1" role="tablist" aria-label="Pick a level">
            {LEVELS.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={i === li}
                onClick={() => go(i)}
                className={clsx("flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-black transition", i === li ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink")}
              >
                {solved[x.id] && <Check className="h-3.5 w-3.5 text-good" strokeWidth={4} />}
                {x.label}
              </button>
            ))}
          </div>
          <span className="hidden text-xs font-black uppercase tracking-wider sm:block" style={{ color: L.color }}>
            {L.tag}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={L.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }} className="p-5 sm:p-6">
            <p className="text-xl font-black leading-snug text-ink sm:text-[1.4rem]">{L.q}</p>
            <div className="mt-5 grid gap-2.5">
              {L.options.map((o, i) => {
                const picked = pick === i;
                const state = picked ? (i === L.answer ? "right" : "wrong") : correct && i === L.answer ? "right" : null;
                return (
                  <motion.button
                    key={o}
                    onClick={() => choose(i)}
                    whileTap={{ scale: 0.98 }}
                    animate={state === "wrong" ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                    transition={{ duration: 0.35 }}
                    className={clsx(
                      "flex items-center gap-3 rounded-2xl border-2 border-b-4 px-4 py-3 text-left text-lg font-extrabold transition",
                      state === "right" ? "border-good bg-good-soft text-good-shade" : state === "wrong" ? "border-bad/60 bg-bad-soft text-bad-shade" : "border-line bg-surface text-ink hover:border-ink/25 hover:bg-surface-2",
                    )}
                  >
                    <span className={clsx("grid h-8 w-8 shrink-0 place-items-center rounded-xl border-2 text-sm", state ? "border-transparent bg-white/70" : "border-line")}>
                      {state === "right" ? <Check className="h-4 w-4" strokeWidth={4} /> : state === "wrong" ? <X className="h-4 w-4" strokeWidth={4} /> : String.fromCharCode(65 + i)}
                    </span>
                    {o}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-5 flex min-h-[92px] items-start gap-3">
              <Mascot pose={correct ? "cheer" : pick !== null ? "think" : "wave"} size={64} animate={false} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${L.id}-${pick}`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={clsx("relative flex-1 rounded-2xl rounded-tl-md px-4 py-3 text-[15px] font-semibold leading-6", correct ? "bg-good-soft text-ink" : pick !== null ? "bg-[#FFF4E0] text-ink" : "bg-surface-2 text-ink")}
                >
                  {correct ? (
                    <>
                      <span className="font-black text-good-shade">That’s it! +10 XP</span> {L.why}
                    </>
                  ) : pick !== null ? (
                    <>
                      <span className="font-black text-[#C2410C]">Not quite — here’s a hint.</span> {L.hint}
                    </>
                  ) : (
                    <>Have a go! I won’t give you the answer, but I’ll help you get there.</>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-between">
              {correct && li < LEVELS.length - 1 ? (
                <button onClick={() => go(li + 1)} className="inline-flex items-center gap-1.5 text-sm font-black text-accent">
                  Try {LEVELS[li + 1].label} <ArrowRight className="h-4 w-4" />
                </button>
              ) : pick !== null && !correct ? (
                <button onClick={() => setPick(null)} className="inline-flex items-center gap-1.5 text-sm font-black text-muted hover:text-ink">
                  <RotateCcw className="h-4 w-4" /> Try again
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-muted">
                  <Sparkles className="h-4 w-4 text-[#7C4DFF]" /> A real question from the course
                </span>
              )}
              <Link href="/onboarding" className="text-sm font-black text-ink underline decoration-accent/40 decoration-2 underline-offset-4 hover:decoration-accent">
                Keep going →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
