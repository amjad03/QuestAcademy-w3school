"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Lightbulb, RotateCcw, Sparkles, Volume2 } from "lucide-react";
import clsx from "clsx";
import { Md } from "@/components/Md";
import { useMode } from "@/lib/useMode";
import { say, stopVoice } from "@/lib/voice";
import { useT } from "@/i18n";
import type { Mission } from "./types";

type Phase = "predict" | "do" | "explain";

/**
 * Guided "Try it": one instruction at a time. Each step can ask for a
 * prediction first (with the common wrong idea among the choices), then shows
 * only the controls for that task, then explains what happened.
 */
export function MissionPlayer({ mission, color }: { mission: Mission; color: string }) {
  const t = useT();
  const mode = useMode();
  const young = mode.young;
  const voice = young || mode.autoVoice;
  const [i, setI] = useState(-1); // -1 = intro, steps.length = finished
  const [phase, setPhase] = useState<Phase>("do");
  const [guess, setGuess] = useState<number | null>(null);
  const [complete, setComplete] = useState(false);
  const [hint, setHint] = useState(false);
  const [run, setRun] = useState(0); // remounts scenes on "Do it again"
  const explainRef = useRef<HTMLDivElement>(null);

  const step = i >= 0 && i < mission.steps.length ? mission.steps[i] : null;
  const finished = i >= mission.steps.length;

  const start = (n: number) => {
    stopVoice();
    const s = mission.steps[n];
    setI(n);
    setGuess(null);
    setComplete(false);
    setHint(false);
    setPhase(s?.predict ? "predict" : "do");
  };

  // Read the instruction aloud for young learners.
  useEffect(() => {
    if (!voice) return;
    if (i === -1) say(mission.goal);
    else if (step && phase === "predict") say(step.predict!.question);
    else if (step && phase === "do") say(step.task);
    else if (step && phase === "explain") say(step.explain);
    else if (finished) say(mission.takeaway);
  }, [voice, i, phase, step, finished, mission]);

  useEffect(() => () => stopVoice(), []);

  // On small screens keep the current step's instruction and controls in view.
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (i < 0 || phase === "explain") return;
    const el = rootRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.35) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [i, phase]);

  // On small screens the explanation lands below the fold: bring it into view.
  useEffect(() => {
    if (phase === "explain") explainRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [phase, i]);

  // Offer the hint automatically if the learner is stuck for a while.
  useEffect(() => {
    if (!step?.hint || phase !== "do" || complete) return;
    const id = setTimeout(() => setHint(true), young ? 12000 : 20000);
    return () => clearTimeout(id);
  }, [step, phase, complete, young, i]);

  const done = () => {
    if (complete) return;
    setComplete(true);
    // Leave a beat to see the result before the explanation appears.
    setTimeout(() => setPhase("explain"), 700);
  };

  const big = young ? "text-xl sm:text-2xl" : "text-lg sm:text-xl";

  return (
    <div ref={rootRef} className="mission scroll-mt-20" style={{ ["--ex" as string]: color }}>
      {/* progress */}
      <div className="mb-4 flex items-center gap-2" aria-hidden>
        {mission.steps.map((_, n) => (
          <span key={n} className="h-2 flex-1 rounded-full transition-colors" style={{ background: n < i || finished || (n === i && phase === "explain") ? color : n === i ? `color-mix(in srgb, ${color} 40%, transparent)` : "rgb(var(--line))" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {i === -1 && (
          <motion.div key="intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-6 text-center">
            <p className="eyebrow" style={{ color }}>
              {t("mission.yourMission", "Your mission")}
            </p>
            <p className={clsx("mx-auto mt-2 max-w-xl font-black leading-snug", big)}>{mission.goal}</p>
            <p className="mt-2 text-sm text-muted">{t("mission.steps", "{n} short steps", { n: mission.steps.length })}</p>
            <button type="button" onClick={() => start(0)} className="mt-6 inline-flex min-h-[52px] items-center gap-2 rounded-2xl px-7 text-lg font-black text-white shadow-sm" style={{ background: color }}>
              {t("mission.start", "Start")} <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {step && (
          <motion.div key={`${run}-${i}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <div className="mb-3 flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: color }}>
                {i + 1}
              </span>
              <p className={clsx("min-w-0 flex-1 font-black leading-snug", big)}>{phase === "predict" ? step.predict!.question : step.task}</p>
              {voice && (
                <button type="button" onClick={() => say(phase === "predict" ? step.predict!.question : phase === "explain" ? step.explain : step.task)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted hover:text-ink" aria-label={t("mission.readAloud", "Read aloud")}>
                  <Volume2 className="h-5 w-5" />
                </button>
              )}
            </div>

            {phase === "predict" && step.predict && (
              <div className="grid gap-2.5 sm:grid-cols-2">
                <p className="text-sm text-muted sm:col-span-2">{t("mission.predictFirst", "Guess first. There’s no penalty for being wrong.")}</p>
                {step.predict.options.map((o, n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setGuess(n);
                      setPhase("do");
                    }}
                    className={clsx("min-h-[56px] rounded-2xl border-2 border-line bg-surface px-4 py-3 text-left font-bold transition hover:border-[var(--ex)]", young ? "text-lg" : "text-base")}
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}

            {phase !== "predict" && (
              <>
                {guess !== null && step.predict && phase === "do" && (
                  <p className="mb-2 text-sm text-muted">
                    {t("mission.yourGuess", "Your guess:")} <span className="font-bold text-ink">{step.predict.options[guess]}</span> — {t("mission.nowTry", "now try it and see.")}
                  </p>
                )}
                <div className="rounded-2xl border-2 border-line bg-surface-2/40 p-2 sm:p-4">{step.scene({ done, complete, guess })}</div>

                {phase === "do" && step.hint && (
                  <div className="mt-3">
                    {hint ? (
                      <p className="flex items-start gap-2 rounded-xl bg-warn/10 px-3 py-2 text-sm font-semibold text-ink">
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-warn-shade" /> {step.hint}
                      </p>
                    ) : (
                      <button type="button" onClick={() => setHint(true)} className="inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-ink">
                        <Lightbulb className="h-4 w-4" /> {t("mission.needHint", "Need a hint?")}
                      </button>
                    )}
                  </div>
                )}

                {phase === "explain" && (
                  <motion.div ref={explainRef} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 scroll-mb-24 rounded-2xl border-2 p-4" style={{ borderColor: color, background: `color-mix(in srgb, ${color} 8%, transparent)` }} aria-live="polite">
                    {guess !== null && step.predict && (
                      <p className="mb-1.5 font-black">
                        {guess === step.predict.answer ? (
                          <span className="inline-flex items-center gap-1.5 text-good-shade">
                            <Check className="h-5 w-5" strokeWidth={3} /> {t("mission.guessRight", "You guessed right!")}
                          </span>
                        ) : (
                          <span>{guess === step.predict.trap ? t("mission.guessTrap", "Many people think that too! Here’s what really happens.") : t("mission.guessWrong", "Not quite — here’s what really happens.")}</span>
                        )}
                      </p>
                    )}
                    <Md text={step.explain} className={clsx("leading-relaxed", young ? "text-lg" : "text-[15px]")} />
                    <button type="button" onClick={() => (i + 1 < mission.steps.length ? start(i + 1) : (stopVoice(), setI(mission.steps.length)))} className="mt-4 inline-flex min-h-[48px] items-center gap-2 rounded-2xl px-6 font-black text-white" style={{ background: color }}>
                      {i + 1 < mission.steps.length ? t("mission.next", "Next step") : t("mission.finish", "Finish")} <ArrowRight className="h-5 w-5" />
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        )}

        {finished && (
          <motion.div key="end" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full text-white" style={{ background: color }}>
              <Sparkles className="h-7 w-7" />
            </span>
            <p className="eyebrow mt-3" style={{ color }}>
              {t("mission.remember", "Remember")}
            </p>
            <p className={clsx("mx-auto mt-1 max-w-xl font-black leading-snug", big)}>{mission.takeaway}</p>
            <button
              type="button"
              onClick={() => {
                setRun((r) => r + 1);
                start(0);
              }}
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-2xl border-2 border-line px-6 font-black text-ink hover:bg-surface-2"
            >
              <RotateCcw className="h-4 w-4" /> {t("mission.again", "Do it again")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
