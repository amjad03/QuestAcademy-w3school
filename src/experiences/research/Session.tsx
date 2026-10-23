"use client";

import Link from "next/link";
import clsx from "clsx";
import { MASTERY } from "@/lib/mastery";
import type { SessionLayoutProps, SessionResultsProps } from "../types";

const KIND: Record<SessionLayoutProps["kind"], string> = { practice: "Self-check", quiz: "Unit quiz", test: "Unit test", challenge: "Course challenge" };

/** Research self-check: one quiet column, question count in small caps, text-weight controls. */
export function ResearchSessionLayout(p: SessionLayoutProps) {
  const fb = p.feedback;
  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex h-12 max-w-[68ch] items-center gap-4 px-4 sm:px-0">
          <p className="min-w-0 flex-1 truncate text-[0.82rem] text-muted">
            <span className="rs-sc">{KIND[p.kind]}</span>
            <span aria-hidden> · </span>
            <span>{p.title}</span>
          </p>
          <button type="button" onClick={p.onQuit} className="rs-textbtn rs-textbtn-muted shrink-0 text-[0.82rem]">
            Leave
          </button>
        </div>
        <div className="h-px bg-line" role="progressbar" aria-label="Session progress" aria-valuenow={Math.round(p.progress * 100)} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-px bg-ink/60 transition-[width] duration-300" style={{ width: `${p.progress * 100}%` }} />
        </div>
      </header>

      <main className="mx-auto max-w-[68ch] px-4 pb-24 pt-10 sm:px-0 sm:pt-14">
        <p className="rs-sc text-[0.9rem] text-muted" aria-live="polite">
          Question {Math.min(p.index + 1, p.total)} of {p.total}
          {p.retry && <span> · revisiting an earlier question</span>}
        </p>
        <div className="rs-session-q rs-serif mt-4 text-[1.08rem] leading-relaxed">{p.question}</div>

        {fb && (
          <div className={clsx("mt-8 rounded border border-l-[3px] px-4 py-3", fb.correct ? "border-line border-l-good" : "border-line border-l-bad")} role="status">
            <p className="font-medium">
              {fb.correct ? (
                "Correct."
              ) : (
                <>
                  Not quite. The expected answer is <span className="rs-serif">{fb.answer}</span>
                </>
              )}
            </p>
            {fb.explain && (
              <div className="mt-3 border-t border-line pt-3 text-[0.88rem] leading-relaxed text-ink/80">
                <p className="rs-sc mb-1 text-[0.8rem] text-muted">Note</p>
                <div className="max-h-64 overflow-y-auto">{fb.explain}</div>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex items-center gap-6 border-t border-line pt-4">
          {!fb ? (
            <>
              <button type="button" onClick={p.onCheck} disabled={!p.canCheck} className="rs-textbtn text-[0.95rem]">
                Check
              </button>
              <button type="button" onClick={p.onSkip} className="rs-textbtn rs-textbtn-muted text-[0.9rem]">
                Skip
              </button>
              <span className="ml-auto hidden text-[0.75rem] text-muted sm:inline">Enter to check</span>
            </>
          ) : (
            <>
              <button type="button" onClick={p.onContinue} autoFocus className="rs-textbtn text-[0.95rem]">
                Continue
              </button>
              <span className="ml-auto hidden text-[0.75rem] text-muted sm:inline">Enter to continue</span>
            </>
          )}
        </div>
      </main>
      {p.quitDialog}
    </div>
  );
}

function duration(seconds: number) {
  if (seconds < 60) return `${seconds} second${seconds === 1 ? "" : "s"}`;
  const m = Math.round(seconds / 60);
  return `${m} minute${m === 1 ? "" : "s"}`;
}

/** Research results: a short summary paragraph, a plain mastery table, items to revisit. */
export function ResearchSessionResults(r: SessionResultsProps) {
  const pct = Math.round(r.accuracy * 100);
  const raised = r.changes.filter((c) => c.to > c.from).length;
  const lowered = r.changes.filter((c) => c.to < c.from).length;
  return (
    <div className="min-h-screen bg-bg text-ink">
      <main className="mx-auto max-w-[68ch] px-4 pb-24 pt-12 sm:px-0 sm:pt-16">
        <p className="rs-sc text-[0.9rem] text-muted">
          {KIND[r.kind]} · {r.course.title}
        </p>
        <h1 className="mt-2 text-[2rem] leading-tight">{r.title}</h1>
        <p className="rs-serif mt-5 text-[1.1rem] leading-relaxed">
          You answered {r.correct} of {r.total} correctly in {duration(r.seconds)} ({pct}% on the first attempt).
          {r.changes.length > 0 && (
            <>
              {" "}
              {raised ? `${raised} skill${raised === 1 ? "" : "s"} moved up` : "No skill moved up"}
              {lowered ? `, ${lowered} moved down` : ""}.
            </>
          )}
          {r.missed.length > 0 ? ` ${r.missed.length} item${r.missed.length === 1 ? " is" : "s are"} listed below for review.` : ""}
        </p>

        {r.changes.length > 0 && (
          <section className="mt-10" aria-labelledby="rs-changes">
            <h2 id="rs-changes" className="text-[1.2rem]">
              Mastery
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="rs-table min-w-[420px]">
                <thead>
                  <tr>
                    <th scope="col">Skill</th>
                    <th scope="col">Before</th>
                    <th scope="col">After</th>
                  </tr>
                </thead>
                <tbody>
                  {r.changes.map((c) => (
                    <tr key={c.id}>
                      <td>{c.title}</td>
                      <td className="whitespace-nowrap text-muted">{MASTERY[c.from].name}</td>
                      <td className={clsx("whitespace-nowrap", c.to > c.from ? "text-ink" : c.to < c.from ? "text-bad" : "text-muted")}>{MASTERY[c.to].name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {r.missed.length > 0 && (
          <section className="mt-10" aria-labelledby="rs-missed">
            <h2 id="rs-missed" className="text-[1.2rem]">
              To revisit
            </h2>
            <ol className="mt-3 space-y-6">
              {r.missed.map((m, i) => (
                <li key={m.uid} className="grid grid-cols-[1.75rem_minmax(0,1fr)] border-t border-line pt-4">
                  <span className="rs-serif rs-num text-muted">{i + 1}.</span>
                  <div className="min-w-0">
                    <div className="rs-serif space-y-2 leading-relaxed">{m.question}</div>
                    <p className="mt-2 text-[0.9rem]">
                      <span className="rs-sc text-muted">Answer:</span> {m.answer}
                    </p>
                    {m.explain && <div className="mt-2 border-l border-line pl-3 text-[0.86rem] leading-relaxed text-ink/80">{m.explain}</div>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <nav aria-label="Next steps" className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 text-[0.95rem]">
          <button type="button" onClick={r.onRetry} className="rs-textbtn">
            Retake
          </button>
          <Link href={r.exitHref} className="rs-textbtn">
            Return to course
          </Link>
        </nav>
      </main>
    </div>
  );
}
