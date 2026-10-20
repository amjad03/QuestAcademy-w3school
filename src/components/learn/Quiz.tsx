"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Timer, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { Question } from "@/content/types";
import { useLearner } from "@/lib/store";
import { burst } from "@/lib/confetti";
import { QuestionCard } from "./QuestionCard";

export function Quiz({
  questions,
  variant = "default",
  onFinish,
  title = "Lesson quiz",
}: {
  questions: Question[];
  variant?: "default" | "kids" | "exam";
  onFinish?: (correct: number, total: number) => void;
  title?: string;
}) {
  const [i, setI] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);
  const [round, setRound] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const recordAnswer = useLearner((s) => s.recordAnswer);
  const recordQuiz = useLearner((s) => s.recordQuiz);
  const startedAt = useRef(Date.now());

  useEffect(() => {
    if (variant !== "exam" || done) return;
    const t = setInterval(() => setSeconds(Math.floor((Date.now() - startedAt.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, [variant, done, round]);

  const answer = (ok: boolean) => {
    recordAnswer(ok);
    const next = [...results, ok];
    setResults(next);
    if (i + 1 < questions.length) setI(i + 1);
    else {
      setDone(true);
      const correct = next.filter(Boolean).length;
      recordQuiz(correct, questions.length);
      onFinish?.(correct, questions.length);
      if (correct / questions.length >= 0.8) burst();
    }
  };

  const restart = () => {
    setI(0);
    setResults([]);
    setDone(false);
    setRound((r) => r + 1);
    startedAt.current = Date.now();
    setSeconds(0);
  };

  const correct = results.filter(Boolean).length;
  const pct = questions.length ? correct / questions.length : 0;
  const kids = variant === "kids";
  const exam = variant === "exam";

  if (!questions.length) return null;

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3 border-b border-line px-5 py-3">
        <span className={clsx("font-semibold", kids && "font-kids text-lg")}>{kids ? "⭐ Quiz time!" : title}</span>
        {exam && (
          <span className="chip font-mono">
            <Timer className="h-3 w-3" /> {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
          </span>
        )}
        {exam && !done && <span className="chip">Score {results.reduce((a, r) => a + (r ? 4 : -1), 0)}</span>}
        <div className="ml-auto flex gap-1">
          {questions.map((_, k) => (
            <span
              key={k}
              className={clsx(
                "h-2 rounded-full transition-all",
                k === i && !done ? "w-6 bg-accent" : "w-2",
                results[k] === true && "bg-good",
                results[k] === false && "bg-bad",
                results[k] === undefined && k !== i && "bg-surface-2",
              )}
            />
          ))}
        </div>
      </div>
      <div className="p-5 sm:p-7">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={`${round}-${i}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}>
              <QuestionCard
                question={questions[i]}
                onDone={answer}
                variant={variant}
                index={i}
                total={questions.length}
                continueLabel={i + 1 < questions.length ? "Next question" : "See results"}
              />
            </motion.div>
          ) : (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-4 text-center">
              {kids ? (
                <div className="text-6xl">{Array.from({ length: 3 }).map((_, s) => (s < Math.round(pct * 3) ? "⭐" : "☆")).join("")}</div>
              ) : (
                <ScoreRing pct={pct} />
              )}
              <h3 className={clsx("mt-4 text-2xl font-bold", kids ? "font-kids text-3xl" : "font-display")}>
                {pct === 1 ? (kids ? "WOW! All correct! 🎉" : "Flawless victory!") : pct >= 0.8 ? "Great job!" : pct >= 0.5 ? "Good effort!" : "Let’s try once more"}
              </h3>
              <p className="mt-1 text-muted">
                {exam
                  ? `Score ${results.reduce((a, r) => a + (r ? 4 : -1), 0)} / ${questions.length * 4} · ${correct} correct · ${Math.floor(seconds / 60)}m ${seconds % 60}s`
                  : `${correct} of ${questions.length} correct · +${correct * 5 + (pct === 1 ? 10 : 0)} XP`}
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button className="btn-ghost" onClick={restart}>
                  <RotateCcw className="h-4 w-4" /> Try again
                </button>
                {pct === 1 && (
                  <span className="btn bg-good/15 text-good">
                    <Trophy className="h-4 w-4" /> Perfect bonus +10
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ScoreRing({ pct, size = 120, label }: { pct: number; size?: number; label?: string }) {
  const r = size / 2 - 10;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgb(var(--surface-2))" strokeWidth="10" fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={pct >= 0.8 ? "rgb(var(--good))" : pct >= 0.5 ? "rgb(var(--accent))" : "rgb(var(--bad))"}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-2xl font-bold">{label ?? `${Math.round(pct * 100)}%`}</span>
      </div>
    </div>
  );
}
