"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Clock, MinusCircle, RotateCcw, Target, TrendingUp, XCircle } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import type { MockResult } from "@/lib/store";
import { CANDIDATES, SUBJECT_META, predictedPercentile, scoreQuestion, type MockTest } from "@/lib/exam";
import { Md, MdInline } from "@/components/Md";
import { ScoreRing } from "@/components/learn/Quiz";

export function MockReport({ test, result, questions, onRetry }: { test: MockTest; result: MockResult; questions: ExamQuestion[]; onRetry: () => void }) {
  const [filter, setFilter] = useState<"all" | "wrong" | "skipped" | "correct">("wrong");
  const frac = result.score / result.max;
  const pct = predictedPercentile(frac);
  const rank = Math.max(1, Math.round(((100 - pct) / 100) * CANDIDATES[test.exam]));
  const attempted = result.correct + result.wrong;
  const accuracy = attempted ? result.correct / attempted : 0;

  // Chapter analysis
  const chapters = new Map<string, { subject: ExamSubject; correct: number; total: number }>();
  for (const q of questions) {
    const c = chapters.get(q.chapter) ?? { subject: q.subject, correct: 0, total: 0 };
    c.total++;
    if (scoreQuestion(q, result.answers[q.id], test.marking).status === "correct") c.correct++;
    chapters.set(q.chapter, c);
  }
  const chapterList = [...chapters.entries()].map(([name, c]) => ({ name, ...c, ratio: c.correct / c.total })).sort((a, b) => a.ratio - b.ratio);

  const shown = questions.filter((q) => filter === "all" || scoreQuestion(q, result.answers[q.id], test.marking).status === filter);

  return (
    <div data-world="exam" className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm text-muted">Scorecard</div>
            <h1 className="font-display text-3xl font-bold">{test.title}</h1>
          </div>
          <div className="flex gap-2">
            <button className="btn-ghost" onClick={onRetry}>
              <RotateCcw className="h-4 w-4" /> New attempt
            </button>
            <Link href="/exam" className="btn-primary text-black">
              Back to Arena
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="card flex flex-col items-center gap-6 p-6 sm:flex-row">
            <ScoreRing pct={Math.max(0, frac)} size={160} label={`${result.score}`} />
            <div className="flex-1">
              <div className="text-sm text-muted">out of {result.max} marks</div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Kpi icon={<TrendingUp className="h-4 w-4 text-accent" />} label="Predicted percentile*" value={pct.toFixed(2)} />
                <Kpi icon={<Target className="h-4 w-4 text-accent" />} label="Projected rank*" value={`~${rank.toLocaleString()}`} />
                <Kpi icon={<CheckCircle2 className="h-4 w-4 text-good" />} label="Accuracy" value={`${Math.round(accuracy * 100)}%`} />
                <Kpi icon={<Clock className="h-4 w-4 text-muted" />} label="Time used" value={`${Math.floor(result.seconds / 60)}m ${result.seconds % 60}s`} />
              </div>
              <p className="mt-3 text-[11px] text-muted">*Indicative only, based on a model of typical score distributions — not an official prediction.</p>
            </div>
          </div>
          <div className="card p-6">
            <h2 className="font-semibold">Section analysis</h2>
            <div className="mt-4 space-y-4">
              {Object.entries(result.bySubject).map(([sub, b]) => {
                const m = SUBJECT_META[sub as ExamSubject];
                const total = b.correct + b.wrong + b.skipped;
                return (
                  <div key={sub}>
                    <div className="flex justify-between text-sm">
                      <span>
                        {m.emoji} {m.name}
                      </span>
                      <span className="font-mono font-bold">
                        {b.score}/{b.max}
                      </span>
                    </div>
                    <div className="mt-1.5 flex h-3 overflow-hidden rounded-full bg-surface-2">
                      <span className="bg-good" style={{ width: `${(b.correct / total) * 100}%` }} />
                      <span className="bg-bad" style={{ width: `${(b.wrong / total) * 100}%` }} />
                    </div>
                    <div className="mt-1 flex gap-3 text-[11px] text-muted">
                      <span>✓ {b.correct}</span>
                      <span>✗ {b.wrong}</span>
                      <span>— {b.skipped}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Tile icon={<CheckCircle2 className="h-6 w-6 text-good" />} n={result.correct} label="Correct" sub={`+${result.correct * test.marking.correct} marks`} />
          <Tile icon={<XCircle className="h-6 w-6 text-bad" />} n={result.wrong} label="Incorrect" sub={`${result.score - result.correct * test.marking.correct} marks lost`} />
          <Tile icon={<MinusCircle className="h-6 w-6 text-muted" />} n={result.skipped} label="Unattempted" sub={`${result.skipped * test.marking.correct} marks left on the table`} />
        </div>

        <div className="card mt-4 p-6">
          <h2 className="font-semibold">Chapter heat-map — fix the red ones first</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {chapterList.map((c) => (
              <Link
                key={c.name}
                href={`/exam/practice?subject=${c.subject}&chapter=${encodeURIComponent(c.name)}`}
                className="flex items-center gap-3 rounded-2xl border border-line p-3 transition hover:border-accent/50"
                style={{ background: `rgb(${c.ratio >= 0.75 ? "var(--good)" : c.ratio >= 0.4 ? "var(--accent)" : "var(--bad)"} / 0.1)` }}
              >
                <span className="text-lg">{SUBJECT_META[c.subject].emoji}</span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium">{c.name}</span>
                <span className="font-mono text-sm font-bold">
                  {c.correct}/{c.total}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="mr-auto font-display text-2xl font-bold">Solutions</h2>
            {(["wrong", "skipped", "correct", "all"] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={clsx("rounded-full border px-3 py-1 text-sm capitalize", filter === f ? "border-accent bg-accent text-black" : "border-line text-muted")}>
                {f}
              </button>
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {shown.map((q) => {
              const i = questions.indexOf(q);
              const a = result.answers[q.id];
              const st = scoreQuestion(q, a, test.marking).status;
              return (
                <div key={q.id} className="card p-5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-lg bg-surface-2 px-2 py-0.5 font-bold">Q{i + 1}</span>
                    <span className="chip">{q.chapter}</span>
                    <span className={clsx("chip", st === "correct" ? "!text-good" : st === "wrong" ? "!text-bad" : "")}>{st}</span>
                  </div>
                  <div className="mt-3">
                    <Md text={q.q} className="space-y-2 leading-7" />
                  </div>
                  {q.kind === "mcq" ? (
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {q.options.map((o, k) => (
                        <div key={k} className={clsx("rounded-xl border px-3 py-2 text-sm", k === q.answer ? "border-good bg-good/10" : k === a ? "border-bad bg-bad/10" : "border-line")}>
                          ({String.fromCharCode(65 + k)}) <MdInline text={o} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-3 text-sm">
                      Your answer: <b className="font-mono">{a ?? "—"}</b> · Correct: <b className="font-mono text-good">{q.answer}</b>
                    </div>
                  )}
                  {q.explain && (
                    <div className="mt-4 rounded-2xl bg-surface-2 p-4">
                      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">Solution</div>
                      <Md text={q.explain} className="prose-quest space-y-2 !text-[0.95rem]" />
                    </div>
                  )}
                </div>
              );
            })}
            {shown.length === 0 && <p className="py-10 text-center text-muted">Nothing here — {filter === "wrong" ? "zero mistakes! 🔥" : "try another filter."}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface-2 p-3">
      <div className="flex items-center gap-1.5 text-[11px] text-muted">
        {icon} {label}
      </div>
      <div className="mt-1 font-display text-xl font-bold">{value}</div>
    </div>
  );
}

function Tile({ icon, n, label, sub }: { icon: React.ReactNode; n: number; label: string; sub: string }) {
  return (
    <div className="card flex items-center gap-4 p-5">
      {icon}
      <div>
        <div className="font-display text-2xl font-bold">
          {n} <span className="text-base font-medium text-muted">{label}</span>
        </div>
        <div className="text-xs text-muted">{sub}</div>
      </div>
    </div>
  );
}
