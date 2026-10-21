"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCw, Sparkles } from "lucide-react";
import { say as voiceSay } from "@/lib/voice";
import { bag, readNum, readStr, WidgetTitle } from "./_shared";

export const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

function say(text: string) {
  voiceSay(text, { rate: 0.9, pitch: 1.2 });
}

export default function CountObjects(input: Record<string, unknown>) {
  const p = bag(input);
  const emoji = readStr(p, "emoji", "🍎");
  const max = Math.round(readNum(p, "max", 10, 1, 20));

  const [total, setTotal] = useState(() => Math.min(max, 5));
  const [tapped, setTapped] = useState<number[]>([]);

  const newRound = useCallback(() => {
    setTotal((prev) => {
      if (max <= 1) return 1;
      let n = prev;
      while (n === prev) n = 1 + Math.floor(Math.random() * max);
      return n;
    });
    setTapped([]);
  }, [max]);

  // Randomise once on mount (client only) so SSR markup is stable.
  useEffect(() => {
    newRound();
  }, [newRound]);

  const count = tapped.length;
  const done = count === total;

  const tap = (i: number) => {
    if (tapped.includes(i)) return;
    const next = [...tapped, i];
    setTapped(next);
    const n = next.length;
    say(n === total ? `${NUMBER_WORDS[n] ?? n}! There are ${n}!` : NUMBER_WORDS[n] ?? String(n));
  };

  return (
    <div className="font-bold">
      <WidgetTitle title="Let's count!" hint={`Tap each ${emoji} once to count it.`} />

      <div className="flex min-h-[180px] flex-wrap content-center items-center justify-center gap-3 rounded-3xl bg-surface-2 p-4 sm:gap-4">
        {Array.from({ length: total }, (_, i) => {
          const order = tapped.indexOf(i);
          const isTapped = order >= 0;
          return (
            <motion.button
              key={`${total}-${i}`}
              type="button"
              aria-label={isTapped ? `Counted as ${order + 1}` : `Count ${emoji}`}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 18, delay: i * 0.04 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => tap(i)}
              className={`relative grid h-16 w-16 place-items-center rounded-2xl text-4xl transition sm:h-20 sm:w-20 sm:text-5xl ${
                isTapped ? "bg-accent/15 ring-2 ring-accent" : "border-2 border-line bg-surface hover:-translate-y-0.5"
              }`}
            >
              <motion.span animate={isTapped ? { y: [0, -10, 0] } : {}} transition={{ duration: 0.35 }}>
                {emoji}
              </motion.span>
              <AnimatePresence>
                {isTapped && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent font-sans text-sm font-bold text-white"
                  >
                    {order + 1}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div aria-live="polite" className="text-lg font-bold text-ink">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.span key="done" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2 text-good">
                <Sparkles size={20} /> Yay! There are {total} {emoji}
              </motion.span>
            ) : (
              <motion.span key={count} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                Counted: <span className="font-mono text-2xl text-accent">{count}</span>
                {count > 0 && <span className="ml-2 text-muted">({NUMBER_WORDS[count] ?? count})</span>}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <button type="button" onClick={newRound} className="btn-pop">
          <RefreshCw size={16} /> New round
        </button>
      </div>
    </div>
  );
}
