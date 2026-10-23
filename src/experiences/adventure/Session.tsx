"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUp, ArrowDown, Check, ChevronsRight, Clock, Crosshair, Flame, Home, RotateCcw, Target, X, Zap } from "lucide-react";
import { useLearner } from "@/lib/store";
import { MASTERY } from "@/lib/mastery";
import { formatTime } from "../shared/ClassicSession";
import type { SessionLayoutProps, SessionResultsProps } from "../types";
import { Kbd, pad2, rankInfo } from "./hud";

const KIND: Record<SessionLayoutProps["kind"], string> = { practice: "Drill run", quiz: "Quiz run", test: "Sector test", challenge: "Boss challenge" };

/**
 * Best combo of the run in progress. The layout and the results screen are
 * separate components, so the layout records it here for the debrief.
 */
const run = { best: 0, live: false };

const COMBO_PIPS = 5;

/* ------------------------------------------------------------------ */
/* Challenge run                                                        */
/* ------------------------------------------------------------------ */

export function AdventureSessionLayout(p: SessionLayoutProps) {
  const fb = p.feedback;
  const [marks, setMarks] = useState<Record<number, boolean>>({});

  useEffect(() => {
    run.best = 0;
    run.live = true;
  }, []);
  useEffect(() => {
    run.best = Math.max(run.best, p.combo);
  }, [p.combo]);
  useEffect(() => {
    if (fb) setMarks((m) => (p.index in m ? m : { ...m, [p.index]: fb.correct }));
  }, [fb, p.index]);

  const charge = Math.min(COMBO_PIPS, p.combo);
  const hot = p.combo >= 3;
  const segmented = p.total <= 30;

  return (
    <div className="adv-run flex min-h-screen flex-col bg-bg">
      {/* HUD */}
      <header className="adv-frame sticky top-0 z-20">
        <div className="mx-auto flex w-full max-w-[1000px] items-center gap-3 px-3 py-2.5 sm:gap-5 sm:px-5">
          <button type="button" onClick={p.onQuit} className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-white/70 hover:bg-white/10 hover:text-white" aria-label="Abort run">
            <X className="h-6 w-6" strokeWidth={2.4} />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <p className="truncate text-xs text-white/60">
                <span className="font-semibold uppercase tracking-[0.14em] text-[#2DE2E6]">{KIND[p.kind]}</span>
                <span className="hidden sm:inline"> · {p.title}</span>
              </p>
              <p className="shrink-0 font-mono text-sm font-bold text-white" aria-live="polite">
                Q{pad2(Math.min(p.index + 1, p.total))}
                <span className="text-white/45">/{pad2(p.total)}</span>
              </p>
            </div>
            {segmented ? (
              <ol className="mt-1.5 flex gap-[3px]" aria-label={`Question ${p.index + 1} of ${p.total}`}>
                {Array.from({ length: p.total }).map((_, i) => {
                  const m = marks[i];
                  const state = m === true ? "hit" : m === false ? "miss" : i === p.index ? "now" : i < p.index ? "past" : "todo";
                  return <li key={i} className={clsx("adv-seg h-2 flex-1", `is-${state}`)} />;
                })}
              </ol>
            ) : (
              <div className="adv-bar mt-1.5 h-2" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p.progress * 100)} aria-label="Run progress">
                <div className="adv-bar-fill h-full bg-[#2DE2E6] text-[#2DE2E6] transition-[width] duration-300" style={{ width: `${p.progress * 100}%` }} />
              </div>
            )}
          </div>
          <div className={clsx("adv-combo shrink-0", hot && "is-hot", p.combo >= COMBO_PIPS && "is-max")} aria-label={`Combo ${p.combo}`}>
            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <Flame className="h-3.5 w-3.5" aria-hidden /> {p.combo >= COMBO_PIPS ? "Overdrive" : `Combo x${p.combo}`}
            </span>
            <span className="mt-1 flex gap-[3px]" aria-hidden>
              {Array.from({ length: COMBO_PIPS }).map((_, i) => (
                <span key={i} className={clsx("adv-pip", i < charge && "is-on")} />
              ))}
            </span>
          </div>
        </div>
      </header>

      {/* Question */}
      <div className="mx-auto w-full max-w-[680px] flex-1 px-4 pb-10 pt-7 sm:px-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="adv-missioncode !border-line !bg-surface-2 !text-muted">TARGET {pad2(Math.min(p.index + 1, p.total))}</span>
          {p.retry && <span className="adv-tag is-locked !text-bad">Second attempt · earlier miss</span>}
          <AnimatePresence>
            {hot && fb?.correct && (
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="adv-tag is-current">
                <Flame className="h-3 w-3" /> {p.combo} in a row
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="adv-qpanel">{p.question}</div>
      </div>

      {/* Footer / feedback */}
      <div className={clsx("adv-runfoot", fb && (fb.correct ? "is-hit" : "is-miss"))}>
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          {!fb ? (
            <>
              <button type="button" onClick={p.onSkip} className="btn-ghost order-2 sm:order-1">
                <ChevronsRight className="h-4 w-4" aria-hidden /> Skip
              </button>
              <div className="order-1 flex items-center gap-3 sm:order-2">
                <span className="hidden items-center gap-1.5 text-xs text-muted sm:flex">
                  <Kbd>Enter</Kbd> to fire
                </span>
                <button type="button" onClick={p.onCheck} disabled={!p.canCheck} className="btn-primary w-full sm:w-auto sm:min-w-[170px]">
                  <Crosshair className="h-4 w-4" aria-hidden /> Check
                </button>
              </div>
            </>
          ) : (
            <>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex min-w-0 flex-1 items-start gap-3" role="status">
                <span className={clsx("adv-verdict", fb.correct ? "is-hit" : "is-miss")} aria-hidden>
                  {fb.correct ? <Check className="h-6 w-6" strokeWidth={3.5} /> : <X className="h-6 w-6" strokeWidth={3.5} />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className={clsx("text-xl font-bold", fb.correct ? "text-good-shade" : "text-bad-shade")}>
                    {fb.correct ? (
                      <>
                        Hit! <span className="text-base font-semibold opacity-80">{fb.praise}</span>
                      </>
                    ) : (
                      "Miss — correct answer:"
                    )}
                  </p>
                  {!fb.correct && <div className="mt-0.5 font-semibold text-ink">{fb.answer}</div>}
                  {fb.explain && (
                    <div className="adv-explain mt-2 max-h-48 overflow-y-auto">
                      <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Intel</p>
                      {fb.explain}
                    </div>
                  )}
                </div>
              </motion.div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden items-center gap-1.5 text-xs text-muted sm:flex">
                  <Kbd>Enter</Kbd>
                </span>
                <button type="button" onClick={p.onContinue} autoFocus className={clsx("w-full sm:w-auto sm:min-w-[170px]", fb.correct ? "btn-good" : "btn-bad")}>
                  Continue <ChevronsRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {p.quitDialog}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mission debrief                                                      */
/* ------------------------------------------------------------------ */

export function AdventureSessionResults(r: SessionResultsProps) {
  const xpNow = useLearner((s) => s.xp);
  const [best] = useState(() => (run.live ? run.best : null));
  const after = rankInfo(xpNow);
  const before = rankInfo(Math.max(0, xpNow - r.xp));
  const rankUp = after.index > before.index;
  const fromPct = rankUp ? 0 : before.pct;
  const acc = Math.round(r.accuracy * 100);

  useEffect(() => {
    run.live = false;
  }, []);

  const heading = r.accuracy === 1 ? "Flawless run" : r.accuracy >= 0.7 ? "Mission accomplished" : r.accuracy >= 0.4 ? "Mission complete" : "Run complete — intel gathered";
  const sub = r.accuracy === 1 ? "Every target hit on the first try." : r.accuracy >= 0.7 ? "Strong run. Review the intel below and push for flawless." : "Each miss is intel. Review it and run it again.";

  return (
    <div className="adv-run flex min-h-screen flex-col bg-bg">
      <header className="adv-frame">
        <div className="mx-auto flex max-w-[860px] items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#2DE2E6]">Mission debrief</p>
          <p className="truncate text-xs text-white/55">{r.course.title}</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[860px] flex-1 px-4 py-8 sm:px-5">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">
            {KIND[r.kind]} · {r.title}
          </p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{heading}</h1>
          <p className="mt-2 text-muted">{sub}</p>
        </motion.div>

        {/* Rank XP */}
        <section className="adv-console mt-6 p-5" aria-label="Rank progress">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="flex items-baseline gap-2">
              <span className="text-xl font-bold" style={{ color: after.color }}>
                {after.name}
              </span>
              {rankUp && (
                <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} className="adv-missioncode !border-[#FBBF24]/60 !text-[#FBBF24]">
                  RANK UP
                </motion.span>
              )}
            </p>
            <p className="font-mono text-2xl font-bold text-[#FDE68A]">
              +<CountUp to={r.xp} /> XP
            </p>
          </div>
          <div className="adv-bar mt-3 h-3" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(after.pct * 100)} aria-label="Progress to next rank">
            <motion.div className="adv-bar-fill h-full" style={{ background: after.color, color: after.color }} initial={{ width: `${fromPct * 100}%` }} animate={{ width: `${after.pct * 100}%` }} transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }} />
          </div>
          <p className="mt-2 text-sm text-white/60">{after.next ? `${after.toNext} XP to ${after.next.name}` : "Top rank reached"}</p>
        </section>

        {/* Stats */}
        <div className={clsx("mt-4 grid gap-3", best !== null ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3")}>
          <Stat icon={<Target className="h-4 w-4" />} label="Accuracy" value={`${acc}%`} note={`${r.correct}/${r.total} first try`} tone="teal" />
          <Stat icon={<Zap className="h-4 w-4" />} label="XP gained" value={`+${r.xp}`} tone="amber" />
          <Stat icon={<Clock className="h-4 w-4" />} label="Time" value={formatTime(r.seconds)} tone="violet" />
          {best !== null && <Stat icon={<Flame className="h-4 w-4" />} label="Best combo" value={`x${best}`} tone="lime" />}
        </div>

        {/* Upgrades */}
        {r.changes.length > 0 && (
          <section className="card mt-6 p-5">
            <h2 className="adv-sectionhead !text-base">
              <ArrowUp className="h-4 w-4 text-good" aria-hidden /> Upgrades
            </h2>
            <ul className="mt-3 space-y-2.5">
              {r.changes.map((c) => {
                const up = c.to > c.from;
                return (
                  <li key={c.id} className="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-3">
                    <span className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded", up ? "bg-good-soft text-good-shade" : "bg-bad-soft text-bad-shade")} aria-hidden>
                      {up ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-semibold">{c.title}</span>
                    <Level level={c.from} />
                    <span className="text-muted" aria-label="to">
                      →
                    </span>
                    <Level level={c.to} />
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Intel to review */}
        {r.missed.length > 0 && (
          <section className="card mt-4 p-5">
            <h2 className="adv-sectionhead !text-base">
              <Crosshair className="h-4 w-4 text-bad" aria-hidden /> Intel to review · {r.missed.length}
            </h2>
            <ol className="mt-3 space-y-4">
              {r.missed.map((m, i) => (
                <li key={m.uid} className="border-t border-line pt-4 first:border-t-0 first:pt-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Miss {pad2(i + 1)}</p>
                  <div className="mt-1 space-y-2 font-semibold">{m.question}</div>
                  <p className="mt-2 text-sm font-semibold text-good-shade">Answer: {m.answer}</p>
                  {m.explain && <div className="mt-1 text-sm text-muted">{m.explain}</div>}
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      <div className="adv-runfoot">
        <div className="mx-auto flex w-full max-w-[860px] flex-col-reverse gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-5">
          <button type="button" onClick={r.onRetry} className="btn-ghost">
            <RotateCcw className="h-4 w-4" aria-hidden /> Run again
          </button>
          <Link href={r.exitHref} className="btn-primary sm:min-w-[190px]" autoFocus>
            <Home className="h-4 w-4" aria-hidden /> Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value, note, tone }: { icon: React.ReactNode; label: string; value: string; note?: string; tone: "teal" | "amber" | "violet" | "lime" }) {
  return (
    <div className={clsx("adv-stat", `is-${tone}`)}>
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]">
        {icon}
        {label}
      </p>
      <p className="mt-1 font-mono text-2xl font-bold text-ink">{value}</p>
      {note && <p className="text-xs text-muted">{note}</p>}
    </div>
  );
}

function Level({ level }: { level: 0 | 1 | 2 | 3 | 4 }) {
  return (
    <span className="adv-level shrink-0" style={{ color: level ? MASTERY[level].color : "rgb(var(--muted))" }}>
      {MASTERY[level].name}
    </span>
  );
}

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (to <= 0) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 900);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n}</>;
}
