"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check, Clock, LogOut, RotateCcw, X } from "lucide-react";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import type { SessionLayoutProps, SessionResultsProps } from "../types";

const KIND: Record<SessionLayoutProps["kind"], string> = { practice: "Practice", quiz: "Quiz", test: "Unit test", challenge: "Challenge" };

function hms(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

type Status = "correct" | "wrong" | "skipped";

/* ------------------------------------------------------------------ */
/* CBT session                                                         */
/* ------------------------------------------------------------------ */

/** Focus session: a computer-based-test screen (header, palette, question, solution box). */
export function FocusSessionLayout(p: SessionLayoutProps) {
  const [startedAt] = useState(() => Date.now());
  const [now, setNow] = useState(startedAt);
  const [status, setStatus] = useState<Record<number, Status>>({});
  const [skipped, setSkipped] = useState<number[]>([]);
  const fb = p.feedback;

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!fb) return;
    const s: Status = fb.correct ? "correct" : skipped.includes(p.index) ? "skipped" : "wrong";
    setStatus((m) => (m[p.index] === s ? m : { ...m, [p.index]: s }));
  }, [fb, p.index, skipped]);

  const skip = () => {
    setSkipped((s) => (s.includes(p.index) ? s : [...s, p.index]));
    p.onSkip();
  };

  const elapsed = Math.floor((now - startedAt) / 1000);
  const attempted = Object.keys(status).length;
  const last = p.index + 1 >= p.total;

  return (
    <div className="fx-cbt flex min-h-screen flex-col bg-bg">
      {/* header */}
      <header className="sticky top-0 z-20 border-b border-line bg-surface">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-3 px-4 sm:px-6">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] text-muted">
              {KIND[p.kind]} · {p.course.title}
            </p>
            <p className="truncate text-sm font-semibold">{p.title}</p>
          </div>
          <p className="hidden shrink-0 text-sm sm:block" aria-live="polite">
            Question <span className="font-semibold tabular-nums">{p.index + 1}</span> of <span className="tabular-nums">{p.total}</span>
          </p>
          <span className="fx-pill shrink-0" role="timer" aria-label={`Time elapsed ${hms(elapsed)}`}>
            <Clock className="h-3.5 w-3.5" aria-hidden />
            <span className="tabular-nums font-semibold" aria-hidden>
              {hms(elapsed)}
            </span>
          </span>
          <button type="button" onClick={p.onQuit} className="btn-ghost shrink-0 !px-3 !py-1.5 text-[13px]" aria-label="End session">
            <LogOut className="h-4 w-4" aria-hidden /> <span className="hidden sm:inline">End</span>
          </button>
        </div>
        <div className="h-[3px] bg-surface-2" aria-hidden>
          <div className="h-full bg-accent transition-[width] duration-300" style={{ width: `${p.progress * 100}%` }} />
        </div>
      </header>

      {/* palette strip on phones */}
      <div className="border-b border-line bg-surface px-4 py-2.5 lg:hidden">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3">
          <p className="shrink-0 text-[13px] sm:hidden">
            Q <span className="font-semibold tabular-nums">{p.index + 1}</span>/<span className="tabular-nums">{p.total}</span>
          </p>
          <ol className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-0.5" aria-label="Question palette">
            {Array.from({ length: p.total }, (_, i) => (
              <PaletteCell key={i} n={i} current={i === p.index} status={status[i]} small />
            ))}
          </ol>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-1 gap-6 px-4 py-6 sm:px-6 lg:py-8">
        {/* question */}
        <main className="min-w-0 flex-1">
          <section className="card overflow-hidden" aria-labelledby="fx-qhead">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-2 px-5 py-2.5">
              <h1 id="fx-qhead" className="text-sm font-semibold">
                Question {p.index + 1}
              </h1>
              {p.retry && <span className="fx-tag-warn">Re-attempt of an earlier mistake</span>}
            </div>
            <div className="fx-question px-5 py-6 sm:px-7">{p.question}</div>
          </section>

          {fb && (
            <section className={clsx("mt-4 rounded-[10px] border p-5", fb.correct ? "border-good/40 bg-good-soft/50" : "border-bad/40 bg-bad-soft/50")} aria-live="assertive">
              <p className={clsx("flex items-center gap-2 font-semibold", fb.correct ? "text-good-shade" : "text-bad-shade")}>
                {fb.correct ? <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden /> : <X className="h-5 w-5" strokeWidth={2.5} aria-hidden />}
                {fb.correct ? "Correct" : skipped.includes(p.index) ? "Skipped" : "Incorrect"}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-muted">Correct answer: </span>
                <span className="font-semibold">{fb.answer}</span>
              </p>
              {fb.explain && (
                <div className="fx-solution mt-4">
                  <p className="fx-group mb-2">Solution</p>
                  <div className="max-h-[40vh] overflow-y-auto">{fb.explain}</div>
                </div>
              )}
            </section>
          )}
        </main>

        {/* palette panel */}
        <aside className="hidden w-[264px] shrink-0 lg:block" aria-label="Question palette">
          <div className="card sticky top-[76px] p-4">
            <div className="flex items-baseline justify-between">
              <p className="fx-group">Question palette</p>
              <p className="text-xs text-muted">
                <span className="font-semibold tabular-nums text-ink">{attempted}</span>/<span className="tabular-nums">{p.total}</span> attempted
              </p>
            </div>
            <ol className="mt-3 grid grid-cols-5 gap-2">
              {Array.from({ length: p.total }, (_, i) => (
                <PaletteCell key={i} n={i} current={i === p.index} status={status[i]} />
              ))}
            </ol>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-line pt-3 text-xs text-muted">
              <Legend cls="fx-cell is-correct" label="Correct" />
              <Legend cls="fx-cell is-wrong" label="Incorrect" />
              <Legend cls="fx-cell is-skipped" label="Skipped" />
              <Legend cls="fx-cell is-current" label="Current" />
              <Legend cls="fx-cell" label="Not visited" />
            </ul>
          </div>
        </aside>
      </div>

      {/* action bar */}
      <footer className="sticky bottom-0 z-20 border-t border-line bg-surface">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3 sm:px-6">
          {!fb ? (
            <>
              <button type="button" onClick={skip} className="btn-ghost">
                Skip for now
              </button>
              <span className="ml-auto hidden text-xs text-muted md:inline">Press Enter to check</span>
              <button type="button" onClick={p.onCheck} disabled={!p.canCheck} className="btn-primary ml-auto min-w-[132px] md:ml-0">
                Check
              </button>
            </>
          ) : (
            <>
              <span className="hidden text-xs text-muted md:inline">Press Enter to continue</span>
              <button type="button" onClick={p.onContinue} autoFocus className="btn-primary ml-auto min-w-[132px]">
                {last ? "Finish" : "Next"} <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </>
          )}
        </div>
      </footer>
      {p.quitDialog}
    </div>
  );
}

function PaletteCell({ n, current, status, small }: { n: number; current: boolean; status?: Status; small?: boolean }) {
  const state = status === "correct" ? "correct" : status === "wrong" ? "incorrect" : status === "skipped" ? "skipped" : current ? "current" : "not visited";
  return (
    <li
      className={clsx("fx-cell", small ? "h-7 min-w-[28px] text-xs" : "h-9 text-[13px]", status && `is-${status}`, current && "is-current")}
      aria-current={current ? "step" : undefined}
      aria-label={`Question ${n + 1}: ${state}${current && status ? ", current" : ""}`}
    >
      {n + 1}
    </li>
  );
}

function Legend({ cls, label }: { cls: string; label: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className={clsx(cls, "h-3.5 w-3.5 !rounded-[4px]")} aria-hidden />
      {label}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Scorecard                                                           */
/* ------------------------------------------------------------------ */

export function FocusSessionResults(r: SessionResultsProps) {
  const pct = Math.round(r.accuracy * 100);
  const avg = r.total ? Math.round(r.seconds / r.total) : 0;
  const weak = r.accuracy < 0.6;
  const verdict = r.accuracy === 1 ? "Full marks." : r.accuracy >= 0.8 ? "Strong attempt." : r.accuracy >= 0.6 ? "Good base. Revise the mistakes below." : "Needs revision. Go through each solution, then reattempt.";

  return (
    <div className="fx-cbt min-h-screen bg-bg">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex h-14 max-w-[960px] items-center gap-3 px-4 sm:px-6">
          <p className="min-w-0 flex-1 truncate text-[13px] text-muted">
            {KIND[r.kind]} · {r.course.title}
          </p>
          <Link href="/learn" className="text-[13px] font-medium text-accent hover:underline">
            Syllabus
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <p className="fx-group">Scorecard</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{r.title}</h1>
        <p className="mt-1 text-sm text-muted">{verdict}</p>

        <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-[10px] border border-line bg-surface sm:grid-cols-4">
          <Stat label="Score" value={`${r.correct}/${r.total}`} sub="correct first time" />
          <Stat label="Accuracy" value={`${pct}%`} sub={weak ? "below 60%" : "first-try"} warn={weak} />
          <Stat label="Time taken" value={hms(r.seconds)} sub="mm:ss" />
          <Stat label="Avg per question" value={`${avg}s`} sub={`${r.xp} XP earned`} />
        </dl>

        <section className="card mt-4 p-5" aria-label="Accuracy">
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-medium">Accuracy</span>
            <span className="tabular-nums font-semibold">{pct}%</span>
          </div>
          <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Accuracy">
            <div className={clsx("h-full rounded-full", weak ? "bg-warn" : "bg-accent")} style={{ width: `${pct}%` }} />
            <span className="absolute inset-y-0 left-[60%] w-px bg-ink/30" aria-hidden />
          </div>
          <div className="mt-1.5 flex justify-between text-[11px] text-muted tabular-nums" aria-hidden>
            <span>0</span>
            <span className="-ml-6">60% target</span>
            <span>100</span>
          </div>
        </section>

        {r.changes.length > 0 && (
          <section className="card mt-4 overflow-hidden" aria-labelledby="fx-mastery">
            <h2 id="fx-mastery" className="border-b border-line px-5 py-3 text-sm font-semibold">
              Mastery changes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-2 text-xs text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-2 font-medium">
                      Lesson
                    </th>
                    <th scope="col" className="px-3 py-2 font-medium">
                      Before
                    </th>
                    <th scope="col" className="px-3 py-2 font-medium">
                      After
                    </th>
                    <th scope="col" className="px-5 py-2 text-right font-medium">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {r.changes.map((c) => (
                    <tr key={c.id}>
                      <td className="max-w-[280px] truncate px-5 py-2.5 font-medium">{c.title}</td>
                      <td className="whitespace-nowrap px-3 py-2.5">
                        <Level level={c.from} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-2.5">
                        <Level level={c.to} />
                      </td>
                      <td className={clsx("whitespace-nowrap px-5 py-2.5 text-right text-xs font-semibold", c.to > c.from ? "text-good-shade" : "text-warn-shade")}>
                        {c.to > c.from ? `Up ${c.to - c.from}` : `Down ${c.from - c.to}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className="mt-6" aria-labelledby="fx-mistakes">
          <h2 id="fx-mistakes" className="text-base font-semibold">
            Mistakes to revise <span className="font-normal text-muted tabular-nums">({r.missed.length})</span>
          </h2>
          {r.missed.length === 0 ? (
            <p className="mt-2 text-sm text-muted">No mistakes in this attempt.</p>
          ) : (
            <ol className="mt-3 space-y-3">
              {r.missed.map((m, i) => (
                <li key={m.uid} className="card p-5">
                  <p className="fx-group">Mistake {i + 1}</p>
                  <div className="mt-2 space-y-2 text-[15px]">{m.question}</div>
                  <p className="mt-3 text-sm">
                    <span className="text-muted">Correct answer: </span>
                    <span className="font-semibold text-good-shade">{m.answer}</span>
                  </p>
                  {m.explain && (
                    <div className="fx-solution mt-3">
                      <p className="fx-group mb-1.5">Solution</p>
                      {m.explain}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          )}
        </section>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          {r.exitHref !== "/learn" && (
            <Link href={r.exitHref} className="text-sm font-medium text-muted hover:text-accent sm:mr-auto">
              Return to where you left off
            </Link>
          )}
          <button type="button" onClick={r.onRetry} className="btn-ghost sm:ml-auto">
            <RotateCcw className="h-4 w-4" aria-hidden /> Reattempt
          </button>
          <Link href="/learn" className="btn-primary">
            Back to syllabus
          </Link>
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value, sub, warn }: { label: string; value: string; sub: string; warn?: boolean }) {
  return (
    <div className="border-b border-r border-line p-4 [&:nth-child(2n)]:border-r-0 sm:border-b-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className={clsx("mt-1 text-2xl font-semibold tracking-tight tabular-nums", warn && "text-warn-shade")}>{value}</dd>
      <dd className="mt-0.5 text-[11px] text-muted">{sub}</dd>
    </div>
  );
}

function Level({ level }: { level: MasteryLevel }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px]">
      <span className="h-2 w-2 rounded-full" style={{ background: level ? MASTERY[level].color : "rgb(var(--line))" }} aria-hidden />
      {MASTERY[level].name}
    </span>
  );
}
