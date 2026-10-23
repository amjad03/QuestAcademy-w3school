"use client";

import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, CircleCheck, CircleX, CornerDownLeft, RotateCcw, X } from "lucide-react";
import { LevelPill, formatTime } from "../shared/ClassicSession";
import type { SessionLayoutProps, SessionResultsProps } from "../types";
import { pad2 } from "./workspace";

const KIND_NAME: Record<SessionLayoutProps["kind"], string> = { practice: "Problem set", quiz: "Quiz", test: "Unit exam", challenge: "Course challenge" };

/**
 * Mastery session: a problem set, judged like an online judge. Numbered
 * problem header in mono, a hairline progress line, the question, compact
 * Check / Next buttons and an inline Accepted / Wrong answer verdict.
 */
export function MasterySessionLayout(p: SessionLayoutProps) {
  const fb = p.feedback;
  const last = p.index + 1 >= p.total;
  return (
    <div className="mx-session flex min-h-screen flex-col bg-bg">
      <header className="sticky top-0 z-20 border-b border-line bg-surface">
        <div className="mx-auto flex h-12 w-full max-w-[900px] items-center gap-3 px-4">
          <button onClick={p.onQuit} className="mx-icon-btn -ml-1.5" aria-label="Quit problem set">
            <X className="h-[18px] w-[18px]" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="mx-mono truncate text-[11px] uppercase tracking-[0.08em] text-muted">
              {KIND_NAME[p.kind]} · {p.course.slug}
            </p>
            <p className="truncate text-[13.5px] font-medium leading-tight">{p.title}</p>
          </div>
          {p.combo >= 3 && <span className="mx-mono hidden text-[11.5px] text-good sm:inline">{p.combo} accepted in a row</span>}
          <p className="mx-mono shrink-0 text-[13px]" aria-live="polite">
            <span className="text-muted">Problem </span>
            <span className="font-semibold text-ink">{pad2(p.index + 1)}</span>
            <span className="text-muted"> / {pad2(p.total)}</span>
          </p>
        </div>
        <div className="h-[2px] w-full bg-line/60" role="progressbar" aria-label="Problem set progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p.progress * 100)}>
          <div className="h-full bg-accent transition-[width] duration-300" style={{ width: `${p.progress * 100}%` }} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-10 pt-8 sm:pt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="mx-code">P{pad2(p.index + 1)}</span>
          {p.retry && <span className="mx-mono rounded border border-bad/40 px-1.5 py-0.5 text-[11px] text-bad">re-attempt · previously wrong</span>}
        </div>
        <div className="mx-question">{p.question}</div>

        {fb && (
          <section className={clsx("mx-verdict mt-8", fb.correct ? "is-ok" : "is-bad")} aria-live="assertive">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className={clsx("mx-mono flex items-center gap-1.5 text-[14px] font-semibold", fb.correct ? "text-good" : "text-bad")}>
                {fb.correct ? <CircleCheck className="h-4 w-4" /> : <CircleX className="h-4 w-4" />}
                {fb.correct ? "Accepted" : "Wrong answer"}
              </span>
              <span className="mx-mono text-[11.5px] text-muted">
                problem {pad2(p.index + 1)}
                {p.retry ? " · re-attempt" : ""}
              </span>
            </div>
            {!fb.correct && (
              <div className="mt-3 flex flex-wrap items-baseline gap-2 text-[14.5px]">
                <span className="mx-mono text-[11.5px] uppercase tracking-[0.08em] text-muted">Expected</span>
                <span className="font-medium">{fb.answer}</span>
              </div>
            )}
            {fb.explain && (
              <details className="mx-solution mt-3">
                <summary className="mx-mono cursor-pointer select-none text-[12px] text-accent">Show solution</summary>
                <div className="mt-2 max-h-72 overflow-y-auto border-t border-line pt-3">{fb.explain}</div>
              </details>
            )}
          </section>
        )}
      </main>

      <footer className="sticky bottom-0 z-20 border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[760px] items-center gap-3 px-4 py-3">
          <span className="mx-mono hidden items-center gap-1 text-[11.5px] text-muted sm:flex">
            <kbd className="mx-kbd">
              <CornerDownLeft className="h-2.5 w-2.5" aria-hidden /> Enter
            </kbd>
            {fb ? "next" : "check"}
          </span>
          <div className="ml-auto flex items-center gap-2">
            {!fb ? (
              <>
                <button onClick={p.onSkip} className="btn-ghost">
                  Skip
                </button>
                <button onClick={p.onCheck} disabled={!p.canCheck} className="btn-primary min-w-[96px]">
                  Check
                </button>
              </>
            ) : (
              <button onClick={p.onContinue} autoFocus className="btn-primary min-w-[96px]">
                {last ? "Finish" : "Next"} <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </footer>
      {p.quitDialog}
    </div>
  );
}

/** Letter-grade-like band for first-try accuracy. */
function band(acc: number) {
  if (acc >= 0.9) return { grade: "A", note: "Excellent", tone: "good" as const };
  if (acc >= 0.75) return { grade: "B", note: "Good", tone: "good" as const };
  if (acc >= 0.6) return { grade: "C", note: "Satisfactory", tone: "warn" as const };
  return { grade: "Needs review", note: "Below 60 %", tone: "bad" as const };
}

/** Mastery results: a grade report. */
export function MasterySessionResults(r: SessionResultsProps) {
  const b = band(r.accuracy);
  const pct = Math.round(r.accuracy * 100);
  const toneText = b.tone === "good" ? "text-good" : b.tone === "warn" ? "text-warn-shade" : "text-bad";
  const toneBorder = b.tone === "good" ? "border-good/50" : b.tone === "warn" ? "border-warn/60" : "border-bad/50";
  return (
    <div className="mx-session flex min-h-screen flex-col bg-bg">
      <main className="mx-auto w-full max-w-[860px] flex-1 px-4 py-10 sm:py-14">
        <p className="mx-mono text-[11.5px] uppercase tracking-[0.1em] text-muted">
          Grade report · {KIND_NAME[r.kind]} · {r.course.slug}
        </p>
        <h1 className="mt-2 text-[1.7rem] font-semibold leading-tight tracking-[-0.015em]">{r.title}</h1>
        <p className="mt-1 text-[14px] text-muted">{r.course.title}</p>

        <section className="card mt-8 grid overflow-hidden sm:grid-cols-[1.2fr_1fr_1fr_1fr]" aria-label="Summary">
          <div className="flex items-center gap-4 border-b border-line p-5 sm:border-b-0 sm:border-r">
            <div>
              <p className="mx-label">Score</p>
              <p className="mx-mono mt-1 text-[2rem] font-semibold leading-none tracking-tight">
                {r.correct}
                <span className="text-muted">/{r.total}</span>
              </p>
            </div>
            <span className={clsx("mx-mono ml-auto rounded-md border px-2.5 py-1.5 text-center leading-tight", toneBorder, toneText, b.grade.length > 1 ? "text-[13px] font-semibold" : "text-[1.6rem] font-semibold")} aria-label={`Grade ${b.grade}`}>
              {b.grade}
            </span>
          </div>
          <Cell label="First-try accuracy" value={`${pct}%`} sub={b.note} />
          <Cell label="Time" value={formatTime(r.seconds)} sub={r.total ? `${formatTime(Math.round(r.seconds / r.total))} per problem` : undefined} />
          <Cell label="Credits" value={`+${r.xp}`} sub="added to your record" />
        </section>

        <section className="mt-10" aria-labelledby="mx-deltas">
          <h2 id="mx-deltas" className="mx-label">
            Competency changes
          </h2>
          {r.changes.length ? (
            <div className="card mt-3 overflow-x-auto">
              <table className="w-full min-w-[460px] text-left text-[14px]">
                <thead>
                  <tr className="mx-mono border-b border-line text-[11px] uppercase tracking-[0.08em] text-muted">
                    <th scope="col" className="px-4 py-2.5 font-medium">Skill</th>
                    <th scope="col" className="px-3 py-2.5 font-medium">Before</th>
                    <th scope="col" className="px-3 py-2.5 font-medium">After</th>
                    <th scope="col" className="px-4 py-2.5 text-right font-medium">Δ</th>
                  </tr>
                </thead>
                <tbody>
                  {r.changes.map((c) => {
                    const d = c.to - c.from;
                    return (
                      <tr key={c.id} className="border-b border-line last:border-0">
                        <td className="max-w-0 truncate px-4 py-2.5 font-medium" title={c.title}>
                          {c.title}
                        </td>
                        <td className="px-3 py-2.5">
                          <LevelPill level={c.from} />
                        </td>
                        <td className="px-3 py-2.5">
                          <LevelPill level={c.to} />
                        </td>
                        <td className={clsx("mx-mono px-4 py-2.5 text-right", d > 0 ? "text-good" : "text-bad")}>
                          {d > 0 ? `+${d}` : d}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-2 text-[14px] text-muted">No skill levels changed in this run.</p>
          )}
        </section>

        <section className="mt-10" aria-labelledby="mx-revisit">
          <h2 id="mx-revisit" className="mx-label">
            Problems to revisit {r.missed.length > 0 && <span className="text-ink">· {r.missed.length}</span>}
          </h2>
          {r.missed.length ? (
            <ol className="card mt-3 divide-y divide-line">
              {r.missed.map((m, i) => (
                <li key={m.uid} className="flex gap-4 p-4">
                  <span className="mx-code h-fit shrink-0">#{pad2(i + 1)}</span>
                  <div className="min-w-0 flex-1">
                    <div className="space-y-2 text-[14.5px]">{m.question}</div>
                    <p className="mt-2 text-[13.5px]">
                      <span className="mx-mono mr-2 text-[11px] uppercase tracking-[0.08em] text-muted">Expected</span>
                      <span className="font-medium text-good">{m.answer}</span>
                    </p>
                    {m.explain && (
                      <details className="mt-2">
                        <summary className="mx-mono cursor-pointer select-none text-[12px] text-accent">Show solution</summary>
                        <div className="mt-2 text-[13.5px] text-muted">{m.explain}</div>
                      </details>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-2 text-[14px] text-muted">Every problem was accepted on the first attempt.</p>
          )}
        </section>
      </main>

      <footer className="sticky bottom-0 border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[860px] flex-col-reverse gap-2 px-4 py-3 sm:flex-row sm:justify-end">
          <button onClick={r.onRetry} className="btn-ghost">
            <RotateCcw className="h-3.5 w-3.5" /> Retry set
          </button>
          <Link href={r.exitHref} className="btn-primary">
            Back to course <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Cell({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border-b border-line p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="mx-label">{label}</p>
      <p className="mx-mono mt-1 text-[1.35rem] font-semibold leading-tight">{value}</p>
      {sub && <p className="mt-1 text-[12px] text-muted">{sub}</p>}
    </div>
  );
}
