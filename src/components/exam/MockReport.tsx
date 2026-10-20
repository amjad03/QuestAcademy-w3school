"use client";

import Link from "next/link";
import { useState } from "react";
import { Atom, CheckCircle2, Clock, Dna, FlaskConical, MinusCircle, Pi, RotateCcw, Target, TrendingUp, XCircle, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import type { MockResult } from "@/lib/store";
import { CANDIDATES, SUBJECT_META, predictedPercentile, scoreQuestion, type MockTest } from "@/lib/exam";
import { Md, MdInline } from "@/components/Md";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar, ProgressRing } from "@/components/ui/Progress";

const SUBJECT_ICON: Record<ExamSubject, LucideIcon> = { physics: Atom, chemistry: FlaskConical, biology: Dna, maths: Pi };

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
  const ringColor = frac >= 0.7 ? "rgb(var(--good))" : frac >= 0.4 ? "rgb(var(--accent))" : "rgb(var(--bad))";

  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* header */}
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <Mascot pose={frac >= 0.5 ? "cheer" : "think"} size={110} />
          <div className="min-w-0 flex-1">
            <p className="eyebrow">Scorecard</p>
            <h1 className="mt-1 text-3xl font-black">{test.title}</h1>
            <p className="mt-1 font-semibold text-muted">{frac >= 0.7 ? "Outstanding attempt — keep this momentum." : frac >= 0.4 ? "Solid base. Fix the red chapters below to jump ahead." : "Every topper started here. Start with the weakest chapters below."}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button className="btn-ghost" onClick={onRetry}>
              <RotateCcw className="h-4 w-4" /> Retake
            </button>
            <Link href="/exam" className="btn-primary">
              Done
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <section className="card flex flex-col items-center gap-6 p-6 sm:flex-row">
            <ProgressRing value={Math.max(0, frac)} size={150} stroke={12} color={ringColor}>
              <span className="block text-center">
                <span className="block text-4xl font-black">{result.score}</span>
                <span className="block text-xs font-bold text-muted">of {result.max}</span>
              </span>
            </ProgressRing>
            <div className="w-full flex-1">
              <div className="grid grid-cols-2 gap-2.5">
                <Kpi icon={<TrendingUp className="h-4 w-4 text-accent" />} label="Percentile*" value={pct.toFixed(2)} />
                <Kpi icon={<Target className="h-4 w-4 text-accent-2" />} label="Projected rank*" value={`~${rank.toLocaleString()}`} />
                <Kpi icon={<CheckCircle2 className="h-4 w-4 text-good" />} label="Accuracy" value={`${Math.round(accuracy * 100)}%`} />
                <Kpi icon={<Clock className="h-4 w-4 text-muted" />} label="Time used" value={`${Math.floor(result.seconds / 60)}m ${result.seconds % 60}s`} />
              </div>
              <p className="mt-3 text-[11px] font-semibold text-muted">*Indicative estimate from a model of typical score distributions — not an official prediction.</p>
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-black">Section analysis</h2>
            <div className="mt-4 space-y-5">
              {Object.entries(result.bySubject).map(([sub, b]) => {
                const m = SUBJECT_META[sub as ExamSubject];
                const I = SUBJECT_ICON[sub as ExamSubject];
                const total = b.correct + b.wrong + b.skipped;
                return (
                  <div key={sub}>
                    <div className="flex items-center justify-between text-sm font-extrabold">
                      <span className="flex items-center gap-2">
                        <I className="h-4 w-4" style={{ color: m.color }} /> {m.name}
                      </span>
                      <span className="font-mono">
                        {b.score}/{b.max}
                      </span>
                    </div>
                    <div className="mt-2 flex h-3.5 overflow-hidden rounded-full bg-line">
                      <span className="bg-good" style={{ width: `${(b.correct / total) * 100}%` }} />
                      <span className="bg-bad" style={{ width: `${(b.wrong / total) * 100}%` }} />
                    </div>
                    <div className="mt-1.5 flex gap-4 text-xs font-bold text-muted">
                      <span className="text-good">{b.correct} correct</span>
                      <span className="text-bad">{b.wrong} wrong</span>
                      <span>{b.skipped} skipped</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Tile icon={<CheckCircle2 className="h-7 w-7 text-good" />} n={result.correct} label="Correct" sub={`+${result.correct * test.marking.correct} marks`} />
          <Tile icon={<XCircle className="h-7 w-7 text-bad" />} n={result.wrong} label="Incorrect" sub={`${result.score - result.correct * test.marking.correct} marks lost`} />
          <Tile icon={<MinusCircle className="h-7 w-7 text-muted" />} n={result.skipped} label="Unattempted" sub={`${result.skipped * test.marking.correct} marks left on the table`} />
        </div>

        <section className="card mt-4 p-6">
          <h2 className="text-lg font-black">Chapter breakdown</h2>
          <p className="mt-1 text-sm font-semibold text-muted">Weakest first — tap a chapter to drill it.</p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {chapterList.map((c) => {
              const I = SUBJECT_ICON[c.subject];
              const color = c.ratio >= 0.75 ? "rgb(var(--good))" : c.ratio >= 0.4 ? "rgb(var(--warn))" : "rgb(var(--bad))";
              return (
                <Link key={c.name} href={`/exam/practice?subject=${c.subject}&chapter=${encodeURIComponent(c.name)}`} className="tile flex flex-col gap-2 p-3.5">
                  <span className="flex items-center gap-2">
                    <I className="h-4 w-4 shrink-0 text-muted" />
                    <span className="min-w-0 flex-1 truncate text-sm font-extrabold">{c.name}</span>
                    <span className="font-mono text-sm font-black" style={{ color }}>
                      {c.correct}/{c.total}
                    </span>
                  </span>
                  <ProgressBar value={c.ratio} height={8} color={color} />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="mr-auto text-2xl font-black">Solutions</h2>
            {(["wrong", "skipped", "correct", "all"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={clsx("rounded-xl border-2 border-b-4 px-3.5 py-1.5 text-sm font-extrabold capitalize transition", filter === f ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2")}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-5 space-y-4">
            {shown.map((q) => {
              const i = questions.indexOf(q);
              const a = result.answers[q.id];
              const st = scoreQuestion(q, a, test.marking).status;
              return (
                <article key={q.id} className="card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-ink px-2 py-0.5 text-sm font-black text-bg">Q{i + 1}</span>
                    <span className="chip">{q.chapter}</span>
                    <span className={clsx("chip capitalize", st === "correct" ? "!bg-good-soft !text-good-shade" : st === "wrong" ? "!bg-bad-soft !text-bad-shade" : "")}>{st}</span>
                  </div>
                  <div className="mt-3 font-bold">
                    <Md text={q.q} className="space-y-2 leading-7" />
                  </div>
                  {q.kind === "mcq" ? (
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {q.options.map((o, k) => (
                        <div key={k} className={clsx("rounded-xl border-2 px-3 py-2 text-sm font-semibold", k === q.answer ? "border-good bg-good-soft" : k === a ? "border-bad bg-bad-soft" : "border-line")}>
                          <b>({String.fromCharCode(65 + k)})</b> <MdInline text={o} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-3 text-sm font-semibold">
                      Your answer: <b className="font-mono">{a ?? "—"}</b> · Correct: <b className="font-mono text-good-shade">{q.answer}</b>
                    </div>
                  )}
                  {q.explain && (
                    <div className="mt-4 rounded-2xl bg-surface-2 p-4">
                      <div className="eyebrow mb-1 !text-accent">Solution</div>
                      <Md text={q.explain} className="prose-quest space-y-2 !text-[0.95rem]" />
                    </div>
                  )}
                </article>
              );
            })}
            {shown.length === 0 && <p className="py-10 text-center font-bold text-muted">{filter === "wrong" ? "No mistakes — brilliant!" : "Nothing here — try another filter."}</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

function Kpi({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface-2 p-3">
      <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wide text-muted">
        {icon} {label}
      </div>
      <div className="mt-1 text-xl font-black">{value}</div>
    </div>
  );
}

function Tile({ icon, n, label, sub }: { icon: React.ReactNode; n: number; label: string; sub: string }) {
  return (
    <div className="card flex items-center gap-4 p-5">
      {icon}
      <div>
        <div className="text-2xl font-black">
          {n} <span className="text-base font-bold text-muted">{label}</span>
        </div>
        <div className="text-xs font-semibold text-muted">{sub}</div>
      </div>
    </div>
  );
}
