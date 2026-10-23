"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, ArrowUp, ArrowDown, ChevronDown, CircleCheck, CircleX, Clock, RotateCcw, Target, Zap, type LucideIcon } from "lucide-react";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useT, useBcp47 } from "@/i18n";
import { useMode } from "@/lib/useMode";
import { formatTime } from "../../shared/ClassicSession";
import type { SessionResultsProps } from "../../types";
import { FONT, useKindName } from "./KhanSessionLayout";
import { MasteryTag } from "./MasterySquare";

const PASS = 0.7;

/** Khan-style summary: score, accuracy, time, skill level-ups and a mistake review. */
export function KhanSessionResults(r: SessionResultsProps) {
  const t = useT();
  const bcp47 = useBcp47();
  const nf = new Intl.NumberFormat(bcp47);
  const pctFmt = new Intl.NumberFormat(bcp47, { style: "percent", maximumFractionDigits: 0 });
  const mode = useMode();
  const kindName = useKindName();

  const showXp = mode.id === "adventure" || mode.id === "focus";
  const exam = mode.id === "professional" && r.kind !== "practice";
  const passed = r.accuracy >= PASS;

  const heading =
    r.total > 0 && r.accuracy === 1
      ? t("khan.results.perfect", "Perfect score!")
      : passed
        ? t("khan.results.nice", "Nice work!")
        : t("khan.results.keep", "Keep practising");
  const sub = passed
    ? t("khan.results.subGood", "You’re building real understanding. Keep the momentum going.")
    : t("khan.results.subKeep", "Every mistake shows you what to look at next. Review them below and try again.");

  return (
    <div className={clsx("flex min-h-screen flex-col bg-bg text-ink", FONT)}>
      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-10 pt-8 sm:px-5 sm:pt-12">
        <div className="flex items-center gap-2 text-[13px] font-medium text-muted">
          <CourseIcon slug={r.course.slug} size={22} />
          <span className="truncate">
            {kindName(r.kind)} · {r.title}
          </span>
        </div>

        {/* Score */}
        <section className="mt-4 flex flex-col items-start gap-6 rounded-lg border border-line bg-surface p-5 shadow-soft sm:flex-row sm:items-center sm:p-7">
          <ScoreRing value={r.accuracy} label={`${nf.format(r.correct)}/${nf.format(r.total)}`} />
          <div className="min-w-0 flex-1">
            <h1 className="text-[1.75rem] font-bold leading-tight tracking-[-0.01em] sm:text-[2rem]">{heading}</h1>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
              {t("khan.results.gotN", "You got {correct} of {total} right on the first try.", { correct: nf.format(r.correct), total: nf.format(r.total) })} {sub}
            </p>
            {exam && (
              <p className={clsx("mt-3 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[13.5px] font-semibold", passed ? "border-good/40 bg-good-soft text-good-shade" : "border-bad/40 bg-bad-soft text-bad-shade")}>
                {passed ? <CircleCheck className="h-4 w-4" /> : <CircleX className="h-4 w-4" />}
                {passed ? t("khan.results.passed", "Passed") : t("khan.results.notPassed", "Not passed yet")}
                <span className="font-medium opacity-80">· {t("khan.session.passMark", "70% to pass")}</span>
              </p>
            )}
          </div>
        </section>

        {/* Stats */}
        <div className={clsx("mt-4 grid gap-3", showXp ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3")}>
          <Stat icon={CircleCheck} label={t("khan.results.correct", "Correct")} value={`${nf.format(r.correct)}/${nf.format(r.total)}`} />
          <Stat icon={Target} label={t("khan.results.accuracy", "Accuracy")} value={pctFmt.format(r.accuracy)} />
          <Stat icon={Clock} label={t("khan.results.time", "Time")} value={formatTime(r.seconds)} />
          {showXp && <Stat icon={Zap} label={t("khan.results.points", "Energy points")} value={`+${nf.format(r.xp)}`} tone="accent" />}
        </div>

        {/* Skills */}
        {r.changes.length > 0 && (
          <section className="mt-6 rounded-lg border border-line bg-surface">
            <h2 className="border-b border-line px-5 py-3 text-[15px] font-semibold">{t("khan.results.skills", "Skills updated")}</h2>
            <ul className="divide-y divide-line">
              {r.changes.map((c) => {
                const up = c.to > c.from;
                return (
                  <li key={c.id} className="flex flex-wrap items-center gap-x-3 gap-y-2 px-5 py-3">
                    <span className="min-w-0 flex-1 basis-48 font-medium">{c.title}</span>
                    <span className="flex flex-wrap items-center gap-2">
                      <MasteryTag level={c.from} />
                      <ArrowRight className="h-4 w-4 text-muted" aria-hidden />
                      <MasteryTag level={c.to} />
                      <span className={clsx("inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[11.5px] font-semibold uppercase tracking-[0.04em]", up ? "bg-[#7854F7]/10 text-[#6440E0] dark:text-[#B8A5FF]" : "bg-surface-2 text-muted")}>
                        {up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {up ? t("khan.results.levelUp", "Level up") : t("khan.results.levelDown", "Level down")}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Mistakes */}
        {r.missed.length > 0 ? (
          <section className="mt-6 rounded-lg border border-line bg-surface">
            <h2 className="border-b border-line px-5 py-3 text-[15px] font-semibold">
              {t("khan.results.review", "Review mistakes")} <span className="font-normal text-muted">({nf.format(r.missed.length)})</span>
            </h2>
            <ol className="divide-y divide-line">
              {r.missed.map((m, i) => (
                <Missed key={m.uid} n={i + 1} m={m} />
              ))}
            </ol>
          </section>
        ) : (
          r.total > 0 && (
            <p className="mt-6 flex items-center gap-2 rounded-lg border border-good/40 bg-good-soft px-5 py-3 text-[14.5px] font-medium text-good-shade">
              <CircleCheck className="h-4 w-4" /> {t("khan.results.noMistakes", "No mistakes to review — every answer was right first time.")}
            </p>
          )
        )}
      </main>

      <footer className="sticky bottom-0 z-20 border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[760px] flex-col-reverse gap-2 px-4 py-3 sm:flex-row sm:justify-end sm:px-5">
          <button onClick={r.onRetry} className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-2.5 text-[15px] font-semibold text-ink transition hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
            <RotateCcw className="h-4 w-4" /> {t("khan.results.retry", "Try again")}
          </button>
          <Link href={r.exitHref} className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-md bg-accent px-6 py-2.5 text-[15px] font-semibold text-white transition hover:bg-accent-shade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            {t("khan.results.continue", "Continue")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function ScoreRing({ value, label }: { value: number; label: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const color = value >= PASS ? "rgb(var(--good))" : value >= 0.4 ? "rgb(var(--accent))" : "rgb(var(--bad))";
  return (
    <div className="relative grid h-[108px] w-[108px] shrink-0 place-items-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgb(var(--surface-2))" strokeWidth="9" />
        <motion.circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c * (1 - value) }} transition={{ duration: 0.8, ease: "easeOut" }} />
      </svg>
      <span className="text-[1.45rem] font-bold tabular-nums">{label}</span>
    </div>
  );
}

function Stat({ icon: Icon, label, value, tone }: { icon: LucideIcon; label: string; value: string; tone?: "accent" }) {
  return (
    <div className="rounded-lg border border-line bg-surface px-4 py-3">
      <p className="flex items-center gap-1.5 text-[12.5px] font-medium text-muted">
        <Icon className={clsx("h-4 w-4", tone === "accent" && "text-accent")} aria-hidden /> {label}
      </p>
      <p className="mt-1 text-[1.3rem] font-bold tabular-nums">{value}</p>
    </div>
  );
}

function Missed({ n, m }: { n: number; m: SessionResultsProps["missed"][number] }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const id = `khan-missed-${m.uid}`;
  return (
    <li className="px-5 py-4">
      <div className="flex gap-3">
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[4px] bg-bad text-[12px] font-bold text-white">{n}</span>
        <div className="min-w-0 flex-1 [&_.katex]:text-[1.06em]">
          <div className="space-y-2 text-[15px] leading-relaxed">{m.question}</div>
          <p className="mt-2 text-[14.5px]">
            <span className="text-muted">{t("khan.fb.correctAnswer", "Correct answer:")}</span> <span className="font-semibold text-good-shade">{m.answer}</span>
          </p>
          {m.explain && (
            <>
              <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={id} className="mt-1.5 inline-flex items-center gap-1 rounded text-[13.5px] font-semibold text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                {open ? t("khan.fb.hide", "Hide explanation") : t("khan.fb.show", "Show explanation")}
                <ChevronDown className={clsx("h-4 w-4 transition", open && "rotate-180")} />
              </button>
              {open && (
                <div id={id} className="mt-2 rounded-md border border-line bg-surface-2/60 p-3 text-[14px]">
                  {m.explain}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}
