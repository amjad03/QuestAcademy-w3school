"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Flame, Target, X, Zap } from "lucide-react";
import clsx from "clsx";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { useMode } from "@/lib/useMode";
import type { SessionLayoutProps, SessionResultsProps } from "../types";

/** The original Duolingo-style session: progress bar, question, check/continue footer. */
export function ClassicSessionLayout(p: SessionLayoutProps) {
  const mode = useMode();
  const calm = mode.rewards === "subtle" || mode.rewards === "minimal";
  const fb = p.feedback;
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="mx-auto flex w-full max-w-[1000px] items-center gap-4 px-5 pt-6">
        <button onClick={p.onQuit} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label="Quit session">
          <X className="h-7 w-7" strokeWidth={2.6} />
        </button>
        <ProgressBar value={p.progress} height={16} color="rgb(var(--good))" label="Session progress" />
        <span className={clsx("flex shrink-0 items-center gap-1 text-lg font-black transition", p.combo >= 2 && !calm ? "text-streak" : "text-transparent")} aria-hidden={p.combo < 2 || calm}>
          <Flame className="h-6 w-6 fill-current" /> {p.combo}
        </span>
      </div>

      <div className="mx-auto w-full max-w-[640px] flex-1 px-5 pb-10 pt-8">
        <AnimatePresence>
          {p.combo >= 3 && fb?.correct && !calm && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-3 text-sm font-black uppercase tracking-wide text-streak">
              {p.combo} in a row!
            </motion.p>
          )}
        </AnimatePresence>
        {p.retry && <p className="mb-3 text-sm font-black uppercase tracking-wide text-bad">Previous mistake</p>}
        {p.question}
      </div>

      <div className={clsx("border-t-2 transition-colors", !fb ? "border-line bg-bg" : fb.correct ? "border-transparent bg-good-soft" : "border-transparent bg-bad-soft")}>
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          {!fb ? (
            <>
              <button onClick={p.onSkip} className="btn-ghost hidden sm:inline-flex">
                Skip
              </button>
              <button onClick={p.onCheck} disabled={!p.canCheck} className="btn-good w-full sm:w-auto sm:min-w-[160px]">
                Check
              </button>
            </>
          ) : (
            <>
              <div className="flex min-w-0 items-start gap-4">
                <span className={clsx("hidden h-16 w-16 shrink-0 place-items-center rounded-full bg-surface sm:grid", fb.correct ? "text-good" : "text-bad")}>
                  {fb.correct ? <Check className="h-9 w-9" strokeWidth={4} /> : <X className="h-9 w-9" strokeWidth={4} />}
                </span>
                <div className="min-w-0">
                  <p className={clsx("text-2xl font-black", fb.correct ? "text-good-shade" : "text-bad-shade")}>{fb.correct ? fb.praise : "Correct solution:"}</p>
                  {!fb.correct && <p className="mt-1 font-bold text-bad-shade">{fb.answer}</p>}
                  {fb.explain && (
                    <details className="mt-1">
                      <summary className={clsx("cursor-pointer text-sm font-extrabold uppercase tracking-wide", fb.correct ? "text-good-shade" : "text-bad-shade")}>Why?</summary>
                      <div className="mt-2 max-h-48 overflow-y-auto">{fb.explain}</div>
                    </details>
                  )}
                </div>
              </div>
              <button onClick={p.onContinue} autoFocus className={clsx("w-full shrink-0 sm:w-auto sm:min-w-[160px]", fb.correct ? "btn-good" : "btn-bad")}>
                Continue
              </button>
            </>
          )}
        </div>
      </div>
      {p.quitDialog}
    </div>
  );
}

export function ClassicSessionResults(r: SessionResultsProps) {
  const mode = useMode();
  const kindName = r.kind === "practice" ? "Practice" : r.kind === "test" ? "Unit test" : r.kind === "quiz" ? "Quiz" : "Challenge";
  const heading = mode.young
    ? r.accuracy === 1
      ? "Wow, all correct!"
      : r.accuracy >= 0.5
        ? "Great job! You’re learning!"
        : "You tried so hard — well done!"
    : r.accuracy === 1
      ? "Perfect!"
      : r.accuracy >= 0.7
        ? `${kindName} complete!`
        : "Good effort — keep going!";
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col items-center px-5 py-12 text-center">
        <Mascot pose={r.accuracy >= 0.7 ? "cheer" : "think"} size={150} />
        <h1 className="mt-6 text-3xl font-black text-warn-shade">{heading}</h1>
        <p className="mt-2 font-semibold text-muted">{r.title}</p>

        <div className="mt-8 grid w-full grid-cols-3 gap-3">
          <ResultStat label="Total XP" value={`${r.xp}`} color="#FFB800" icon={<Zap className="h-5 w-5 fill-current" />} />
          <ResultStat label={r.accuracy >= 0.9 ? "Amazing" : r.accuracy >= 0.7 ? "Good" : "Accuracy"} value={`${Math.round(r.accuracy * 100)}%`} color="#2EBE70" icon={<Target className="h-5 w-5" />} />
          <ResultStat label="Time" value={formatTime(r.seconds)} color="#2F6BFF" icon={<Clock className="h-5 w-5" />} />
        </div>

        {r.changes.length > 0 && (
          <div className="card mt-6 w-full p-5 text-left">
            <p className="eyebrow">Skills updated</p>
            <ul className="mt-3 space-y-2.5">
              {r.changes.map((c) => (
                <li key={c.id} className="flex items-center gap-3">
                  <span className="min-w-0 flex-1 truncate font-bold">{c.title}</span>
                  <LevelPill level={c.from} />
                  <span className="text-muted">→</span>
                  <LevelPill level={c.to} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {r.missed.length > 0 && (
          <details className="card mt-4 w-full p-5 text-left">
            <summary className="cursor-pointer font-extrabold text-accent">
              Review {r.missed.length} mistake{r.missed.length === 1 ? "" : "s"}
            </summary>
            <ul className="mt-4 space-y-4">
              {r.missed.map((m) => (
                <li key={m.uid} className="border-t-2 border-line pt-4">
                  <div className="space-y-2 font-bold">{m.question}</div>
                  <p className="mt-1 text-sm font-bold text-good-shade">Answer: {m.answer}</p>
                  {m.explain && <div className="mt-1 text-sm text-muted">{m.explain}</div>}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
      <div className="border-t-2 border-line">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col-reverse gap-3 px-5 py-5 sm:flex-row sm:justify-between">
          <button onClick={r.onRetry} className="btn-ghost">
            Try again
          </button>
          <Link href={r.exitHref} className="btn-primary sm:min-w-[160px]">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function ResultStat({ label, value, color, icon }: { label: string; value: string; color: string; icon: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2" style={{ borderColor: color, background: color }}>
      <div className="py-1.5 text-xs font-black uppercase tracking-wide text-white">{label}</div>
      <div className="flex items-center justify-center gap-1.5 rounded-xl bg-surface py-4 text-xl font-black" style={{ color }}>
        {icon} {value}
      </div>
    </div>
  );
}

export function LevelPill({ level }: { level: MasteryLevel }) {
  return (
    <span className="shrink-0 rounded-lg px-2 py-0.5 text-xs font-black" style={{ background: level ? MASTERY[level].color : "rgb(var(--surface-2))", color: level ? "white" : "rgb(var(--muted))" }}>
      {MASTERY[level].name}
    </span>
  );
}
