"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, Check, Flame, RotateCcw, Sparkles, Star, TrendingUp, X } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { useLearner } from "@/lib/store";
import { say } from "@/lib/voice";
import { stickerById } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import type { SessionLayoutProps, SessionResultsProps } from "../types";
import { EX, ReadAloud, StarRow, chunky } from "./ui";

const KIND_NAME: Record<SessionLayoutProps["kind"], string> = { practice: "Quiz time", quiz: "Quiz", test: "Treasure quiz", challenge: "Big challenge" };

/** Explore session: a playful quiz show with lights, Questy reactions and big buttons. */
export function ExploreSessionLayout(p: SessionLayoutProps) {
  const fb = p.feedback;
  const answered = p.index + (fb ? 1 : 0);
  const showLights = p.total <= 16;

  return (
    <div className="ex-sky flex min-h-screen flex-col">
      {/* Show header */}
      <div className="mx-auto flex w-full max-w-[920px] items-center gap-3 px-4 pt-4 sm:px-6 sm:pt-6">
        <button type="button" onClick={p.onQuit} className="ex-press grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface text-muted" style={{ boxShadow: "inset 0 -4px 0 rgb(var(--line))" }} aria-label="Stop playing">
          <X className="h-7 w-7" strokeWidth={3} />
        </button>
        <div className="ex-lights flex min-w-0 flex-1 items-center gap-2 px-3 py-2" role="progressbar" aria-label="Questions done" aria-valuemin={0} aria-valuemax={p.total} aria-valuenow={answered}>
          {showLights ? (
            <StarRow filled={answered} total={p.total} size={p.total > 10 ? 20 : 26} className="flex-1 justify-center" />
          ) : (
            <div className="h-5 flex-1 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-[#FFC21A] transition-all duration-500" style={{ width: `${Math.round(p.progress * 100)}%`, boxShadow: "inset 0 -4px 0 #D99A00" }} />
            </div>
          )}
          <span className="shrink-0 text-base font-black tabular-nums text-muted">
            {Math.min(answered, p.total)}/{p.total}
          </span>
        </div>
        <AnimatePresence>
          {p.combo >= 2 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="hidden shrink-0 items-center gap-1 rounded-full px-3 py-2 text-base font-black text-white sm:flex" style={chunky(EX.orange, 4)} aria-label={`${p.combo} right in a row`}>
              <Flame className="h-5 w-5 fill-current" aria-hidden /> {p.combo}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Stage */}
      <div className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-8 pt-5 sm:px-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-sm font-black text-white" style={chunky(EX.purple, 3)}>
            {KIND_NAME[p.kind]}
          </span>
          <span className="min-w-0 truncate text-base font-extrabold text-muted">{p.title}</span>
          {p.retry && <span className="rounded-full bg-[#FFF1DE] px-3 py-1 text-sm font-black text-[#B35A00]">Let’s try this one again!</span>}
          {p.combo >= 3 && !fb && <span className="rounded-full bg-[#FFF6D6] px-3 py-1 text-sm font-black text-[#8a5a00]">{p.combo} in a row!</span>}
        </div>
        <div className="ex-stage p-5 sm:p-8">{p.question}</div>
      </div>

      {/* Answer bar */}
      <div className={clsx("ex-answerbar sticky bottom-0 z-10 transition-colors", fb ? (fb.correct ? "ex-answerbar-good" : "ex-answerbar-bad") : "")}>
        <div className="mx-auto w-full max-w-[920px] px-4 py-4 sm:px-6 sm:py-5">
          {!fb ? (
            <div className="flex items-center gap-3">
              <button type="button" onClick={p.onSkip} className="ex-press shrink-0 rounded-[1.25rem] bg-surface px-4 py-4 text-base font-black text-muted" style={{ boxShadow: "inset 0 -5px 0 rgb(var(--line))" }}>
                Not sure
              </button>
              <button type="button" onClick={p.onCheck} disabled={!p.canCheck} className="ex-press ex-bigbtn flex-1 rounded-[1.5rem] px-6 py-4 text-2xl font-black text-white disabled:cursor-not-allowed" style={p.canCheck ? chunky(EX.green, 7) : { background: "rgb(var(--line))", color: "rgb(var(--muted))" }}>
                Check
              </button>
            </div>
          ) : (
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 420, damping: 28 }} className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex min-w-0 flex-1 items-end gap-3" role="status" aria-live="polite">
                <motion.div className="shrink-0" initial={{ rotate: -10, scale: 0.7 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 12 }}>
                  <Mascot pose={fb.correct ? "cheer" : "think"} size={84} animate={false} />
                </motion.div>
                <div className="ex-feedback min-w-0 flex-1 px-4 py-3">
                  <p className={clsx("flex items-center gap-2 text-2xl font-black", fb.correct ? "text-[#167A45] dark:text-[#6BE3A2]" : "text-[#B35A00] dark:text-[#FFB866]")}>
                    {fb.correct ? <Check className="h-7 w-7" strokeWidth={4} aria-hidden /> : <Sparkles className="h-7 w-7" strokeWidth={2.8} aria-hidden />}
                    {fb.correct ? fb.praise : "Nearly!"}
                  </p>
                  {!fb.correct && (
                    <div className="mt-1 text-lg font-bold">
                      The answer is <span className="font-black">{fb.answer}</span>
                    </div>
                  )}
                  {fb.explain && (
                    <details className="mt-1.5">
                      <summary className="cursor-pointer text-base font-black text-[#2F80FF]">Tell me why</summary>
                      <div className="mt-2 max-h-48 overflow-y-auto">{fb.explain}</div>
                    </details>
                  )}
                </div>
              </div>
              <button type="button" onClick={p.onContinue} autoFocus className="ex-press ex-bigbtn flex shrink-0 items-center justify-center gap-2 rounded-[1.5rem] px-8 py-4 text-2xl font-black text-white sm:min-w-[220px]" style={chunky(fb.correct ? EX.green : EX.blue, 7)}>
                Continue <ArrowRight className="h-7 w-7" strokeWidth={3} aria-hidden />
              </button>
            </motion.div>
          )}
        </div>
      </div>
      {p.quitDialog}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function starsFor(accuracy: number) {
  if (accuracy >= 0.9) return 3;
  if (accuracy >= 0.6) return 2;
  return 1; // finishing always earns a star
}

/** Explore results: 1–3 stars, a treasure reveal, simple numbers and friendly skill lines. */
export function ExploreSessionResults(r: SessionResultsProps) {
  const reduce = useReducedMotion();
  const stars = starsFor(r.accuracy);
  const heading = stars === 3 ? (r.correct === r.total ? "Wow! All right!" : "Super star!") : stars === 2 ? "Great job!" : "You did it!";
  const sub = stars === 3 ? "You are a quiz champion." : stars === 2 ? "You are getting so good at this." : "Every try makes your brain stronger.";
  const better = r.changes.filter((c) => c.to > c.from);

  // A sticker the session just awarded (the store records when each was won).
  const stickers = useLearner((s) => s.stickers);
  const [mountedAt] = useState(() => Date.now());
  const fresh = useMemo(() => {
    const recent = Object.entries(stickers)
      .filter(([, at]) => mountedAt - new Date(at).getTime() < 15000)
      .sort((a, b) => b[1].localeCompare(a[1]))[0];
    return recent ? stickerById[recent[0]] : undefined;
  }, [stickers, mountedAt]);

  const [opened, setOpened] = useState(Boolean(reduce));
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setOpened(true), 900);
    return () => clearTimeout(t);
  }, [reduce]);

  const spoken = `${heading} You got ${r.correct} of ${r.total} right. You earned ${stars} ${stars === 1 ? "star" : "stars"}.`;

  return (
    <div className="ex-sky flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col items-center px-4 pb-8 pt-8 text-center sm:pt-12">
        {/* Stars */}
        <div className="flex items-end justify-center gap-2" aria-label={`${stars} of 3 stars`} role="img">
          {[0, 1, 2].map((i) => {
            const won = i < stars;
            return (
              <motion.span
                key={i}
                initial={reduce ? false : { scale: 0, rotate: -40 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: reduce ? 0 : 0.25 + i * 0.25, type: "spring", stiffness: 260, damping: 12 }}
                className={clsx(i === 1 && "-translate-y-4")}
              >
                <Star className={clsx(i === 1 ? "h-24 w-24" : "h-[4.5rem] w-[4.5rem]", won ? "fill-[#FFC21A] text-[#D99A00] drop-shadow-[0_4px_0_#D99A00]" : "fill-surface-2 text-line")} strokeWidth={1.8} aria-hidden />
              </motion.span>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <h1 className="text-[2.2rem] font-black leading-tight">{heading}</h1>
          <ReadAloud text={spoken} label="Read to me" />
        </div>
        <p className="mt-1 text-lg font-bold text-muted">{sub}</p>

        {/* Simple numbers */}
        <div className="ex-card mt-6 flex w-full items-center justify-center gap-4 px-5 py-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-white" style={chunky(EX.green, 5)}>
            <Check className="h-8 w-8" strokeWidth={4} aria-hidden />
          </span>
          <p className="text-left text-2xl font-black">
            {r.correct} of {r.total} right
          </p>
        </div>

        {/* Treasure reveal */}
        <div className="ex-card mt-4 flex w-full flex-col items-center p-6">
          <div className="relative grid h-36 w-full place-items-center">
            <AnimatePresence mode="wait">
              {!opened ? (
                <motion.div key="chest" exit={{ scale: 1.3, opacity: 0 }} animate={reduce ? undefined : { rotate: [0, -6, 6, -6, 6, 0] }} transition={{ duration: 0.8 }}>
                  <TreasureChest />
                </motion.div>
              ) : (
                <motion.div key="prize" initial={reduce ? false : { scale: 0.2, y: 30 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 240, damping: 12 }} className="flex flex-col items-center">
                  {fresh ? (
                    <StickerTile sticker={fresh} owned size={110} />
                  ) : (
                    <span className="flex items-center gap-1" aria-hidden>
                      {Array.from({ length: stars }).map((_, i) => (
                        <Star key={i} className="h-16 w-16 fill-[#FFC21A] text-[#D99A00]" strokeWidth={1.8} />
                      ))}
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {opened && !reduce && <Sparkle />}
          </div>
          <p className="mt-3 text-xl font-black" aria-live="polite">
            {opened ? (fresh ? `New sticker: ${fresh.name}!` : `You won ${stars} ${stars === 1 ? "star" : "stars"}!`) : "Opening your treasure…"}
          </p>
          {opened && fresh && (
            <Link href="/stickers" className="mt-1 font-black text-[#C02677] underline decoration-2 underline-offset-4 dark:text-[#FF8CC6]">
              Look in my sticker book
            </Link>
          )}
        </div>

        {/* You got better at */}
        {better.length > 0 && (
          <div className="ex-card mt-4 w-full p-5 text-left">
            <h2 className="flex items-center gap-2 text-xl font-black">
              <TrendingUp className="h-6 w-6 text-[#2EBE70]" strokeWidth={2.8} aria-hidden /> You got better at…
            </h2>
            <ul className="mt-3 space-y-2">
              {better.map((c) => (
                <li key={c.id} className="flex items-center gap-3 rounded-2xl bg-[#E8F7EE] px-4 py-3 text-lg font-extrabold text-[#145C36] dark:bg-[#16342a] dark:text-[#9BEBC0]">
                  <Star className="h-5 w-5 shrink-0 fill-[#FFC21A] text-[#D99A00]" aria-hidden />
                  <span className="min-w-0">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gentle review */}
        {r.missed.length > 0 && (
          <details className="ex-card mt-4 w-full p-5 text-left">
            <summary className="cursor-pointer text-lg font-black text-[#2F80FF]">
              Let’s look at {r.missed.length === 1 ? "the tricky one" : `the ${r.missed.length} tricky ones`}
            </summary>
            <ul className="mt-4 space-y-4">
              {r.missed.map((m) => (
                <li key={m.uid} className="rounded-2xl bg-surface-2 p-4">
                  <div className="space-y-2 font-bold">{m.question}</div>
                  <p className="mt-2 font-black text-[#167A45] dark:text-[#6BE3A2]">The answer is {m.answer}</p>
                  {m.explain && <div className="mt-1 text-sm text-muted">{m.explain}</div>}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>

      <div className="ex-answerbar sticky bottom-0">
        <div className="mx-auto flex w-full max-w-[760px] flex-col-reverse gap-3 px-4 py-4 sm:flex-row sm:px-6">
          <button type="button" onClick={r.onRetry} className="ex-press flex items-center justify-center gap-2 rounded-[1.5rem] bg-surface px-6 py-4 text-xl font-black text-[#2F80FF]" style={{ boxShadow: "inset 0 -6px 0 rgb(var(--line))" }}>
            <RotateCcw className="h-6 w-6" strokeWidth={3} aria-hidden /> Play again
          </button>
          <Link href={r.exitHref} onClick={() => say("Let’s go!")} className="ex-press flex flex-1 items-center justify-center gap-2 rounded-[1.5rem] px-6 py-4 text-xl font-black text-white" style={chunky(EX.green, 7)}>
            Next adventure <ArrowRight className="h-6 w-6" strokeWidth={3} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TreasureChest() {
  return (
    <svg width="132" height="112" viewBox="0 0 132 112" aria-hidden>
      <ellipse cx="66" cy="104" rx="52" ry="7" fill="rgb(0 0 0 / 0.1)" />
      <rect x="12" y="46" width="108" height="56" rx="10" fill="#C7772A" />
      <rect x="12" y="88" width="108" height="14" rx="7" fill="#9E5A1C" />
      <path d="M12 50 C12 18 120 18 120 50 Z" fill="#E08E3C" />
      <rect x="12" y="44" width="108" height="10" fill="#FFC21A" />
      <rect x="56" y="40" width="20" height="28" rx="5" fill="#FFC21A" />
      <circle cx="66" cy="54" r="4" fill="#9E5A1C" />
      <rect x="26" y="54" width="8" height="48" fill="#FFC21A" opacity="0.85" />
      <rect x="98" y="54" width="8" height="48" fill="#FFC21A" opacity="0.85" />
    </svg>
  );
}

function Sparkle() {
  const dots = [
    [-70, -30, "#FF5A5F"],
    [70, -40, "#2F80FF"],
    [-55, 40, "#2EBE70"],
    [60, 35, "#8B5CF6"],
    [0, -60, "#FFC21A"],
  ] as const;
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden>
      {dots.map(([x, y, c], i) => (
        <motion.span key={i} className="absolute h-3 w-3 rounded-full" style={{ background: c }} initial={{ x: 0, y: 0, opacity: 1, scale: 1 }} animate={{ x, y, opacity: 0, scale: 0.4 }} transition={{ duration: 0.9, delay: i * 0.04 }} />
      ))}
    </div>
  );
}
