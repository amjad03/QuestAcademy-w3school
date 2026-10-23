"use client";

import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, CheckCircle2, Clock, RotateCcw, Route, Target, X, XCircle } from "lucide-react";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { formatTime } from "../shared/ClassicSession";
import type { SessionLayoutProps, SessionResultsProps } from "../types";

const PASS = 0.7;

function kindName(kind: SessionLayoutProps["kind"]) {
  return kind === "practice" ? "Knowledge check" : kind === "quiz" ? "Module quiz" : kind === "test" ? "Module assessment" : "Course assessment";
}

/** Knowledge check: calm header with a thin progress bar, one question card, Check / Continue. */
export function ProfessionalSessionLayout(p: SessionLayoutProps) {
  const fb = p.feedback;
  const n = Math.min(p.index + 1, Math.max(p.total, 1));
  return (
    <div className="pro-session flex min-h-screen flex-col bg-bg">
      <header className="sticky top-0 z-20 border-b border-line bg-surface">
        <div className="mx-auto flex h-14 w-full max-w-[880px] items-center gap-3 px-4 sm:px-6">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">
              {kindName(p.kind)} <span className="font-normal text-muted">·</span>{" "}
              <span className="tabular-nums">
                Question {n} of {p.total}
              </span>
            </p>
            <p className="truncate text-xs text-muted">{p.title}</p>
          </div>
          <button onClick={p.onQuit} className="flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-ink" aria-label="Exit knowledge check">
            <X className="h-4 w-4" /> <span className="hidden sm:inline">Exit</span>
          </button>
        </div>
        <div className="h-[3px] w-full bg-line/70" role="progressbar" aria-label="Progress" aria-valuenow={Math.round(p.progress * 100)} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-accent transition-[width] duration-500 ease-out" style={{ width: `${Math.max(0, Math.min(1, p.progress)) * 100}%` }} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-10 pt-8 sm:px-6 sm:pt-10">
        {p.retry && (
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-warn/10 px-2.5 py-1 text-xs font-semibold text-warn-shade">
            <RotateCcw className="h-3.5 w-3.5" /> Review: you missed this one earlier
          </p>
        )}
        <section className="card p-5 sm:p-7" aria-label={`Question ${n}`}>
          {p.question}
        </section>

        {fb && (
          <div
            role="status"
            className={clsx("mt-5 rounded-xl border p-4 sm:p-5", fb.correct ? "border-good/30 bg-good-soft" : "border-bad/30 bg-bad-soft")}
          >
            <div className="flex items-start gap-3">
              {fb.correct ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-good-shade" /> : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-bad-shade" />}
              <div className="min-w-0 flex-1">
                <p className={clsx("font-semibold", fb.correct ? "text-good-shade" : "text-bad-shade")}>{fb.correct ? "Correct" : "Not quite"}</p>
                {!fb.correct && (
                  <div className="mt-1 text-sm text-ink">
                    <span className="text-muted">Correct answer: </span>
                    <span className="font-semibold">{fb.answer}</span>
                  </div>
                )}
                {fb.explain && (
                  <div className="mt-3 border-t border-ink/10 pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">Why</p>
                    <div className="mt-1 max-h-56 overflow-y-auto text-sm leading-relaxed text-ink/90">{fb.explain}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="sticky bottom-0 border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[760px] items-center justify-between gap-3 px-4 py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] sm:px-6">
          {!fb ? (
            <>
              <button onClick={p.onSkip} className="btn-ghost">
                Skip
              </button>
              <button onClick={p.onCheck} disabled={!p.canCheck} className="btn-primary min-w-[140px]">
                Check answer
              </button>
            </>
          ) : (
            <>
              <span className="hidden text-sm text-muted sm:inline">Press Enter to continue</span><span className="sm:hidden" />
              <button onClick={p.onContinue} autoFocus className="btn-primary min-w-[140px]">
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </footer>
      {p.quitDialog}
    </div>
  );
}

/** Results: pass/fail at 70%, score, time, skills table, pathway context. */
export function ProfessionalSessionResults(r: SessionResultsProps) {
  const passed = r.accuracy >= PASS;
  const score = Math.round(r.accuracy * 100);
  return (
    <div className="pro-session flex min-h-screen flex-col bg-bg">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex h-14 w-full max-w-[880px] items-center px-4 sm:px-6">
          <p className="min-w-0 truncate text-sm font-semibold text-ink">
            {kindName(r.kind)} <span className="font-normal text-muted">· Results</span>
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-10 pt-8 sm:px-6 sm:pt-10">
        <section className="card p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <span className={clsx("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold", passed ? "bg-good-soft text-good-shade" : "bg-warn/10 text-warn-shade")}>
                {passed ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Target className="h-3.5 w-3.5" />}
                {passed ? "Passed" : "Not yet — 70% needed"}
              </span>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink">{r.title}</h1>
              <p className="mt-1 text-sm text-muted">{r.course.title}</p>
            </div>
            <dl className="grid shrink-0 grid-cols-3 gap-6 sm:gap-8">
              <Metric label="Score" value={`${score}%`} />
              <Metric label="Correct" value={`${r.correct}/${r.total}`} />
              <Metric label="Time" value={formatTime(r.seconds)} icon={<Clock className="h-3.5 w-3.5" />} />
            </dl>
          </div>
          <div className="mt-6">
            <div className="relative h-2 overflow-hidden rounded-full bg-line" role="progressbar" aria-label="Score" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100}>
              <div className={clsx("h-full rounded-full", passed ? "bg-good" : "bg-warn")} style={{ width: `${score}%` }} />
            </div>
            <div className="relative mt-1.5 h-4 text-[11px] text-muted">
              <span className="absolute -translate-x-1/2 tabular-nums" style={{ left: `${PASS * 100}%` }}>
                Pass mark 70%
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted">
            {passed
              ? "You have shown a working grasp of this material. Carry on with the next lesson in your plan."
              : "Review the questions below, revisit the lesson, then retake the check when you are ready."}
          </p>
        </section>

        {r.changes.length > 0 && (
          <section className="card mt-5 overflow-hidden">
            <h2 className="border-b border-line px-5 py-3.5 text-sm font-semibold text-ink">Skills updated</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-muted">
                    <th scope="col" className="px-5 py-2.5 font-medium">Skill</th>
                    <th scope="col" className="px-3 py-2.5 font-medium">Before</th>
                    <th scope="col" className="px-5 py-2.5 font-medium">Now</th>
                  </tr>
                </thead>
                <tbody>
                  {r.changes.map((c) => (
                    <tr key={c.id} className="border-t border-line">
                      <td className="max-w-[260px] truncate px-5 py-3 font-medium text-ink">{c.title}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-muted">
                        <Level level={c.from} />
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-ink">
                        <Level level={c.to} up={c.to > c.from} down={c.to < c.from} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {r.missed.length > 0 && (
          <details className="card mt-5 overflow-hidden">
            <summary className="cursor-pointer px-5 py-3.5 text-sm font-semibold text-ink hover:bg-surface-2">
              Review {r.missed.length} incorrect answer{r.missed.length === 1 ? "" : "s"}
            </summary>
            <ol className="divide-y divide-line border-t border-line">
              {r.missed.map((m, i) => (
                <li key={m.uid} className="flex gap-4 px-5 py-4">
                  <span className="mt-0.5 text-xs font-semibold tabular-nums text-muted">{i + 1}</span>
                  <div className="min-w-0 flex-1 text-sm">
                    <div className="space-y-2 font-medium text-ink">{m.question}</div>
                    <p className="mt-2 text-good-shade">
                      <span className="text-muted">Correct answer: </span>
                      <span className="font-semibold">{m.answer}</span>
                    </p>
                    {m.explain && <div className="mt-1.5 text-muted">{m.explain}</div>}
                  </div>
                </li>
              ))}
            </ol>
          </details>
        )}

        <Link href="/pathways" className="card mt-5 flex items-center gap-4 p-4 transition hover:shadow-md sm:p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
            <Route className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-ink">Your pathways and certificates</span>
            <span className="block text-sm text-muted">See how this counts towards your goals and what is left for a certificate of completion.</span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
        </Link>
      </main>

      <footer className="sticky bottom-0 border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[760px] items-center justify-between gap-3 px-4 py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] sm:px-6">
          <button onClick={r.onRetry} className="btn-ghost">
            <RotateCcw className="h-4 w-4" /> Retake
          </button>
          <Link href={r.exitHref} className="btn-primary min-w-[140px]">
            Continue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div>
      <dt className="flex items-center gap-1 text-xs text-muted">
        {icon} {label}
      </dt>
      <dd className="mt-0.5 text-xl font-bold tabular-nums text-ink">{value}</dd>
    </div>
  );
}

function Level({ level, up, down }: { level: MasteryLevel; up?: boolean; down?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ background: level ? MASTERY[level].color : "rgb(var(--line))" }} aria-hidden />
      {MASTERY[level].name}
      {up && <span className="text-xs font-semibold text-good-shade">Improved</span>}
      {down && <span className="text-xs font-semibold text-bad-shade">Needs review</span>}
    </span>
  );
}
