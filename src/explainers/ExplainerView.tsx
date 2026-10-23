"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookImage, Hand, Lightbulb, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "./types";
import { say, stopVoice } from "@/lib/voice";
import { useMode } from "@/lib/useMode";
import { Mascot } from "@/components/brand/Mascot";

type Tab = "watch" | "try" | "story" | "like";

const TABS: { id: Tab; label: string; young: string; icon: typeof Play }[] = [
  { id: "watch", label: "Watch it", young: "Watch", icon: Play },
  { id: "try", label: "Try it", young: "Play", icon: Hand },
  { id: "story", label: "Story", young: "Story", icon: BookImage },
  { id: "like", label: "It’s like…", young: "It’s like", icon: Lightbulb },
];

/** One concept, four ways in. Used inside lessons and on /explain. */
export function ExplainerView({ explainer: e, compact }: { explainer: Explainer; compact?: boolean }) {
  const mode = useMode();
  const young = mode.young;
  const tabs = TABS.filter((t) => (t.id === "watch" ? e.watch?.length : t.id === "try" ? e.try : t.id === "story" ? e.story?.length : e.like));
  const [tab, setTab] = useState<Tab>(tabs[0]?.id ?? "watch");
  useEffect(() => () => stopVoice(), []);

  return (
    <section className="explainer overflow-hidden rounded-3xl border-2 border-line bg-surface" style={{ ["--ex" as string]: e.color }} aria-label={`Visual explainer: ${e.title}`}>
      <header className="flex flex-wrap items-center gap-3 border-b-2 border-line px-5 py-4" style={{ background: `color-mix(in srgb, ${e.color} 10%, transparent)` }}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-2xl" style={{ background: `color-mix(in srgb, ${e.color} 22%, white)` }} aria-hidden>
          {e.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="eyebrow" style={{ color: e.color }}>
            See it · {e.area}
          </p>
          <h3 className={clsx("font-black leading-tight", compact ? "text-lg" : "text-xl")}>{e.title}</h3>
          {!compact && <p className="text-sm font-semibold text-muted">{e.tagline}</p>}
        </div>
      </header>

      {tabs.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto border-b-2 border-line px-4 py-2.5" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => {
                stopVoice();
                setTab(t.id);
              }}
              className={clsx("flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-extrabold transition", tab === t.id ? "text-white" : "text-muted hover:bg-surface-2")}
              style={tab === t.id ? { background: e.color } : undefined}
            >
              <t.icon className="h-4 w-4" /> {young ? t.young : t.label}
            </button>
          ))}
        </div>
      )}

      <div className="p-4 sm:p-6">
        {tab === "watch" && e.watch && <StepPlayer steps={e.watch} color={e.color} autoVoice={young} />}
        {tab === "try" && e.try && <e.try />}
        {tab === "story" && e.story && <Comic panels={e.story} color={e.color} />}
        {tab === "like" && e.like && <AnalogyView a={e.like} color={e.color} young={young} />}
      </div>
    </section>
  );
}

function StepPlayer({ steps, color, autoVoice }: { steps: NonNullable<Explainer["watch"]>; color: string; autoVoice: boolean }) {
  const [i, setI] = useState(0);
  const [voice, setVoice] = useState(autoVoice);
  const step = steps[i];
  const last = i === steps.length - 1;

  useEffect(() => {
    if (voice) say(step.say, { rate: 0.95 });
    else stopVoice();
  }, [i, voice, step.say]);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border-2 border-line" style={{ background: `color-mix(in srgb, ${color} 6%, rgb(var(--surface)))` }}>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="grid min-h-[240px] place-items-center p-4 sm:min-h-[300px]">
            {step.scene}
          </motion.div>
        </AnimatePresence>
        <span className="absolute left-3 top-3 rounded-lg bg-surface/90 px-2 py-0.5 text-xs font-black text-muted">
          {i + 1} / {steps.length}
        </span>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <Mascot pose={last ? "cheer" : i % 2 ? "read" : "wave"} size={56} animate={false} />
        <div className="min-w-0 flex-1">
          <p className="text-lg font-black leading-snug">{step.title}</p>
          <p className="mt-1 font-semibold leading-relaxed text-ink/80">{step.say}</p>
        </div>
        <button onClick={() => setVoice((v) => !v)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-line text-muted hover:bg-surface-2" aria-label={voice ? "Turn narration off" : "Read this aloud"}>
          {voice ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0} className="btn-ghost h-12 w-12 !p-0 disabled:opacity-40" aria-label="Previous step">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-1 justify-center gap-1.5" aria-hidden>
          {steps.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className="h-2.5 rounded-full transition-all" style={{ width: k === i ? 28 : 10, background: k <= i ? color : "rgb(var(--line))" }} tabIndex={-1} />
          ))}
        </div>
        {last ? (
          <button onClick={() => setI(0)} className="btn-ghost h-12 !px-4" aria-label="Watch again">
            <RotateCcw className="h-5 w-5" />
          </button>
        ) : (
          <button onClick={() => setI((x) => x + 1)} className="btn h-12 !px-5 text-white" style={{ background: color, borderColor: `color-mix(in srgb, ${color} 75%, black)` }} aria-label="Next step">
            Next <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function Comic({ panels, color }: { panels: NonNullable<Explainer["story"]>; color: string }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {panels.map((p, k) => (
        <motion.li key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: k * 0.12 }} className="overflow-hidden rounded-2xl border-[3px] border-ink/80 bg-surface">
          <div className="relative grid min-h-[170px] place-items-center p-3" style={{ background: `color-mix(in srgb, ${color} 7%, white)` }}>
            {p.art}
            {p.speech && <span className="absolute right-2 top-2 max-w-[70%] rounded-2xl border-2 border-ink/80 bg-white px-3 py-1.5 text-sm font-extrabold text-[#1c2333] shadow-sm">{p.speech}</span>}
            <span className="absolute left-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-ink/80 text-xs font-black text-white">{k + 1}</span>
          </div>
          <p className="border-t-[3px] border-ink/80 px-3 py-2.5 text-[15px] font-bold leading-snug">{p.caption}</p>
        </motion.li>
      ))}
    </ol>
  );
}

function AnalogyView({ a, color, young }: { a: NonNullable<Explainer["like"]>; color: string; young: boolean }) {
  return (
    <div>
      <p className="text-xl font-black leading-snug">{a.headline}</p>
      <div className="mt-4 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <Figure label={a.everyday.label} art={a.everyday.art} tint="#FFB800" />
        <div className="grid place-items-center text-3xl font-black text-muted" aria-hidden>
          ≈
        </div>
        <Figure label={a.concept.label} art={a.concept.art} tint={color} />
      </div>
      <ul className="mt-4 divide-y-2 divide-line overflow-hidden rounded-2xl border-2 border-line">
        {a.pairs.map(([x, y]) => (
          <li key={x} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-2.5 font-bold">
            <span>{x}</span>
            <ArrowRight className="h-4 w-4 text-muted" />
            <span style={{ color }}>{y}</span>
          </li>
        ))}
      </ul>
      {a.limits && !young && <p className="mt-3 text-sm font-semibold text-muted">Where the comparison stops working: {a.limits}</p>}
    </div>
  );
}

function Figure({ label, art, tint }: { label: string; art: React.ReactNode; tint: string }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl border-2 border-line">
      <div className="grid min-h-[150px] flex-1 place-items-center p-3" style={{ background: `color-mix(in srgb, ${tint} 9%, white)` }}>
        {art}
      </div>
      <figcaption className="border-t-2 border-line px-3 py-2 text-center text-sm font-extrabold">{label}</figcaption>
    </figure>
  );
}
