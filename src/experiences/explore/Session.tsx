"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, Check, ChevronDown, Flame, RotateCcw, Sparkles, Star, Target, Timer, TrendingUp, X, Zap } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { useLearner, liveStreak } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { say } from "@/lib/voice";
import { useBcp47, useT } from "@/i18n";
import { stickerById, type Sticker } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import { formatTime } from "../shared/ClassicSession";
import type { SessionLayoutProps, SessionResultsProps } from "../types";
import { Chest, EX, FatBar, ReadAloud, chunky, type Col } from "./ui";

function kindName(t: ReturnType<typeof useT>, kind: SessionLayoutProps["kind"]) {
  if (kind === "quiz") return t("explore.session.quiz", "Star quiz");
  if (kind === "test") return t("explore.session.test", "Unit trophy");
  if (kind === "challenge") return t("explore.session.challenge", "Big challenge");
  return t("explore.session.practice", "Quiz time");
}

/** Combo milestones that get a celebration. */
const isMilestone = (n: number) => n === 3 || n === 5 || (n >= 10 && n % 5 === 0);

/** Explore exercise screen: thick progress bar, answer flame, big tiles, Duolingo-style feedback banner. */
export function ExploreSessionLayout(p: SessionLayoutProps) {
  const t = useT();
  const reduce = useReducedMotion();
  const fb = p.feedback;
  const [why, setWhy] = useState(false);
  const [party, setParty] = useState<number | null>(null);

  useEffect(() => setWhy(false), [p.index, fb]);

  useEffect(() => {
    if (!fb?.correct || !isMilestone(p.combo)) return;
    setParty(p.combo);
    const tm = setTimeout(() => setParty(null), 1900);
    return () => clearTimeout(tm);
  }, [fb, p.combo]);

  const hot = p.combo >= 2;
  const good = fb?.correct;

  return (
    <div className="ex-sky flex min-h-screen flex-col">
      {/* Top: quit, thick progress, answer flame */}
      <div className="mx-auto flex w-full max-w-[1000px] items-center gap-3 px-4 pt-5 sm:gap-4 sm:px-6 sm:pt-8">
        <button type="button" onClick={p.onQuit} className="ex-press grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted hover:bg-surface-2" aria-label={t("explore.session.quit", "Stop playing")}>
          <X className="h-8 w-8" strokeWidth={3} />
        </button>
        <FatBar value={p.progress} height={20} label={t("explore.session.progress", "Questions done")} />
        <motion.span
          key={p.combo}
          initial={reduce || !hot ? false : { scale: 1.5 }}
          animate={{ scale: 1 }}
          className={clsx("flex shrink-0 items-center gap-1 text-xl font-black tabular-nums", hot ? "text-[#FF7A00]" : "text-[rgb(var(--line))]")}
          aria-label={t("explore.session.combo", "{n} right in a row", { n: p.combo })}
          role="status"
        >
          <Flame className={clsx("h-8 w-8", hot && "fill-[#FF9600]")} strokeWidth={2.4} aria-hidden />
          {p.combo}
        </motion.span>
      </div>

      {/* Question */}
      <div className="mx-auto w-full max-w-[680px] flex-1 px-4 pb-10 pt-6 sm:px-6 sm:pt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-sm font-black uppercase tracking-wide text-white" style={chunky(EX.purple, 3)}>
            {kindName(t, p.kind)}
          </span>
          {p.retry && (
            <span className="flex items-center gap-1 rounded-full bg-[#FFF1DE] px-3 py-1 text-sm font-black text-[#B35A00] dark:bg-[#3a2a14] dark:text-[#FFB866]">
              <RotateCcw className="h-4 w-4" strokeWidth={3} aria-hidden /> {t("explore.session.retry", "Let’s try this one again!")}
            </span>
          )}
        </div>
        <div className="ex-stage">{p.question}</div>
      </div>

      {/* Bottom: Check, then the feedback banner */}
      <div className={clsx("ex-answerbar sticky bottom-0 z-10 transition-colors duration-200", fb ? (good ? "ex-answerbar-good" : "ex-answerbar-bad") : "")}>
        <div className="mx-auto w-full max-w-[1000px] px-4 py-4 sm:px-6 sm:py-6">
          {!fb ? (
            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={p.onSkip} className="ex-press shrink-0 rounded-[1.25rem] bg-surface px-5 py-4 text-base font-black uppercase tracking-wide text-muted" style={{ boxShadow: "inset 0 0 0 3px rgb(var(--line)), inset 0 -6px 0 rgb(var(--line))" }}>
                {t("explore.session.skip", "Not sure")}
              </button>
              <button type="button" onClick={p.onCheck} disabled={!p.canCheck} className="ex-press ex-bigbtn min-w-0 flex-1 rounded-[1.25rem] px-6 py-4 text-xl font-black uppercase tracking-wide text-white disabled:cursor-not-allowed sm:max-w-[300px] sm:text-2xl" style={p.canCheck ? chunky(EX.green, 6) : { background: "rgb(var(--line))", color: "rgb(var(--muted))" }}>
                {t("explore.session.check", "Check")}
              </button>
            </div>
          ) : (
            <motion.div initial={reduce ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 420, damping: 30 }} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-start gap-3" role="status" aria-live="polite">
                <motion.span
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white dark:bg-white/10"
                  initial={reduce ? false : { scale: 0.4, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 12 }}
                  aria-hidden
                >
                  {good ? <Check className="h-10 w-10 text-[#1F9B58]" strokeWidth={4} /> : <Sparkles className="h-9 w-9 text-[#E07A00]" strokeWidth={2.8} />}
                </motion.span>
                <div className="min-w-0 flex-1">
                  <p className={clsx("text-2xl font-black leading-tight", good ? "text-[#167A45] dark:text-[#6BE3A2]" : "text-[#B35A00] dark:text-[#FFB866]")}>
                    {good ? t("explore.fb.good", "Nicely done!") : t("explore.fb.answer", "Correct answer:")}
                  </p>
                  {!good && <div className="mt-0.5 text-lg font-bold text-[#8A4500] dark:text-[#FFD9A8]">{fb.answer}</div>}
                  {good && <p className="mt-0.5 font-bold text-[#1F7A48] dark:text-[#9BEBC0]">{fb.praise}</p>}
                  {fb.explain && (
                    <>
                      <button
                        type="button"
                        onClick={() => setWhy((w) => !w)}
                        aria-expanded={why}
                        className={clsx("mt-1.5 inline-flex items-center gap-1 rounded-full text-base font-black uppercase tracking-wide", good ? "text-[#1F9B58] dark:text-[#6BE3A2]" : "text-[#D97000] dark:text-[#FFB866]")}
                      >
                        {t("explore.fb.why", "Why?")}
                        <ChevronDown className={clsx("h-5 w-5 transition-transform", why && "rotate-180")} strokeWidth={3} aria-hidden />
                      </button>
                      <AnimatePresence initial={false}>
                        {why && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="mt-2 max-h-[34vh] overflow-y-auto rounded-2xl bg-surface p-3">{fb.explain}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              </div>
              <button type="button" onClick={p.onContinue} autoFocus className="ex-press ex-bigbtn flex shrink-0 items-center justify-center gap-2 rounded-[1.25rem] px-8 py-4 text-xl font-black uppercase tracking-wide text-white sm:min-w-[260px] sm:text-2xl" style={chunky(good ? EX.green : EX.orange, 6)}>
                {t("explore.continue", "Continue")}
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Combo celebration */}
      <AnimatePresence>
        {party !== null && (
          <motion.div className="pointer-events-none fixed inset-x-0 top-[18%] z-40 flex justify-center px-4" initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: -20 }} transition={{ type: "spring", stiffness: 380, damping: 18 }} aria-live="polite">
            <div className="ex-combo flex items-center gap-3 rounded-[2rem] px-6 py-4 text-white">
              <Mascot pose="cheer" size={72} animate={false} />
              <div>
                <p className="flex items-center gap-1 text-3xl font-black">
                  <Flame className="h-9 w-9 fill-white" strokeWidth={2} aria-hidden /> {party}
                </p>
                <p className="text-xl font-black">{party >= 10 ? t("explore.combo.fire", "You’re on fire!") : t("explore.combo.row", "{n} in a row!", { n: party })}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {p.quitDialog}
    </div>
  );
}

/* ------------------------------------------------------------------ */

/** Explore results: XP, accuracy and time tiles, a streak flame update, a sticker reveal and Continue. */
export function ExploreSessionResults(r: SessionResultsProps) {
  const t = useT();
  const bcp = useBcp47();
  const reduce = useReducedMotion();
  const fmt = (n: number) => new Intl.NumberFormat(bcp).format(n);
  const pct = Math.round(r.accuracy * 100);
  const better = r.changes.filter((c) => c.to > c.from);

  const heading =
    r.kind === "test" ? t("explore.res.test", "Unit trophy done!") : r.kind === "quiz" ? t("explore.res.quiz", "Star quiz done!") : r.kind === "challenge" ? t("explore.res.challenge", "Challenge done!") : t("explore.res.practice", "Lesson complete!");
  const accWord = r.accuracy >= 0.9 ? t("explore.res.amazing", "Amazing") : r.accuracy >= 0.7 ? t("explore.res.goodAcc", "Good") : t("explore.res.niceTry", "Nice try");
  const speedy = r.total > 0 && r.seconds / r.total <= 12;

  // Snapshot store numbers once, when the results appear.
  const [snap] = useState(() => {
    const s = useLearner.getState();
    const today = dayKey();
    const count = liveStreak(s);
    const todayXp = s.daily[today]?.xp ?? 0;
    const grew = s.streak.lastDay === today && r.xp > 0 && todayXp - r.xp <= 0;
    const mountedAt = Date.now();
    const entries = Object.entries(s.stickers).sort((a, b) => b[1].localeCompare(a[1]));
    const newest = entries[0];
    const fresh = newest && mountedAt - new Date(newest[1]).getTime() < 20000;
    return { count, from: grew ? Math.max(0, count - 1) : count, grew, sticker: newest ? (stickerById[newest[0]] as Sticker | undefined) : undefined, fresh: Boolean(fresh) };
  });

  const [xpShown, setXpShown] = useState(reduce ? r.xp : 0);
  useEffect(() => {
    if (reduce) return;
    const c = animate(0, r.xp, { duration: 1.1, delay: 0.4, ease: "easeOut", onUpdate: (v) => setXpShown(Math.round(v)) });
    return () => c.stop();
  }, [r.xp, reduce]);

  const [streakShown, setStreakShown] = useState(reduce ? snap.count : snap.from);
  useEffect(() => {
    if (reduce || !snap.grew) return;
    const tm = setTimeout(() => setStreakShown(snap.count), 1500);
    return () => clearTimeout(tm);
  }, [reduce, snap]);

  const [opened, setOpened] = useState(Boolean(reduce));
  useEffect(() => {
    if (reduce) return;
    const tm = setTimeout(() => setOpened(true), 2200);
    return () => clearTimeout(tm);
  }, [reduce]);

  const spoken = t("explore.res.spoken", "{heading} You earned {xp} XP. You got {correct} of {total} right.", { heading, xp: r.xp, correct: r.correct, total: r.total });
  const streakMsg = snap.grew
    ? snap.count === 1
      ? t("explore.res.streakStart", "You lit your flame! Come back tomorrow to make it grow.")
      : t("explore.res.streakGrew", "Your streak grew! Come back tomorrow for {n}.", { n: snap.count + 1 })
    : snap.count > 0
      ? t("explore.res.streakKeep", "Your flame is safe for today.")
      : t("explore.res.streakNone", "Earn XP to light your flame!");

  return (
    <div className="ex-sky flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col items-center px-4 pb-10 pt-8 text-center sm:pt-12">
        <motion.div initial={reduce ? false : { scale: 0.4, y: 30 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 260, damping: 12 }}>
          <Mascot pose="cheer" size={150} />
        </motion.div>
        <div className="mt-2 flex items-center gap-2">
          <h1 className="text-[2.2rem] font-black leading-tight text-[#E08A00] dark:text-[#FFC21A]">{heading}</h1>
          <ReadAloud text={spoken} />
        </div>

        {/* XP · accuracy · time */}
        <div className="mt-6 grid w-full grid-cols-3 gap-2.5 sm:gap-4">
          <StatTile col={EX.yellow} label={t("explore.res.totalXp", "Total XP")} icon={<Zap className="h-6 w-6 fill-current" aria-hidden />} value={fmt(xpShown)} delay={0.15} />
          <StatTile col={EX.green} label={accWord} icon={<Target className="h-6 w-6" strokeWidth={2.8} aria-hidden />} value={`${fmt(pct)}%`} delay={0.3} />
          <StatTile col={EX.blue} label={speedy ? t("explore.res.speedy", "Speedy") : t("explore.res.time", "Time")} icon={<Timer className="h-6 w-6" strokeWidth={2.8} aria-hidden />} value={formatTime(r.seconds)} delay={0.45} />
        </div>
        <p className="mt-3 text-lg font-bold text-muted">{t("explore.res.right", "{correct} of {total} right", { correct: fmt(r.correct), total: fmt(r.total) })}</p>

        {/* Streak */}
        <motion.div className="ex-card mt-5 flex w-full items-center gap-4 p-4 text-left" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <motion.span
            key={streakShown}
            initial={reduce || streakShown === snap.from ? false : { scale: 1.6, rotate: -12 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className={clsx("relative grid h-20 w-20 shrink-0 place-items-center rounded-full", snap.count > 0 ? "bg-[#FFF0DB] dark:bg-[#3a2a14]" : "bg-surface-2")}
          >
            <Flame className={clsx("h-12 w-12", snap.count > 0 ? "fill-[#FF9600] text-[#FF7A00]" : "text-[rgb(var(--line))]")} strokeWidth={2} aria-hidden />
            <span className="absolute -bottom-1 -right-1 grid h-9 min-w-9 place-items-center rounded-full bg-[#FF7A00] px-1.5 text-lg font-black tabular-nums text-white ring-4 ring-[rgb(var(--surface))]">{fmt(streakShown)}</span>
          </motion.span>
          <div className="min-w-0">
            <p className="text-xl font-black leading-tight">{t("explore.stats.streak", "{n} day streak", { n: fmt(streakShown) })}</p>
            <p className="mt-0.5 font-bold text-muted">{streakMsg}</p>
          </div>
        </motion.div>

        {/* Sticker reveal */}
        <div className="ex-card mt-4 flex w-full flex-col items-center p-5">
          <div className="relative grid h-36 w-full place-items-center">
            <AnimatePresence mode="wait">
              {!opened ? (
                <motion.div key="chest" exit={{ scale: 1.3, opacity: 0 }} animate={reduce ? undefined : { rotate: [0, -6, 6, -6, 6, 0] }} transition={{ duration: 0.8, delay: 1.3 }}>
                  <Chest size={132} />
                </motion.div>
              ) : (
                <motion.div key="prize" initial={reduce ? false : { scale: 0.2, y: 30 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 240, damping: 12 }} className="flex flex-col items-center">
                  {snap.sticker ? <StickerTile sticker={snap.sticker} owned size={112} /> : <Star className="h-24 w-24 fill-[#FFC21A] text-[#D99A00]" strokeWidth={1.6} aria-hidden />}
                </motion.div>
              )}
            </AnimatePresence>
            {opened && !reduce && <Sparkle />}
          </div>
          <p className="mt-3 text-xl font-black" aria-live="polite">
            {!opened
              ? t("explore.res.opening", "Opening your treasure…")
              : snap.sticker
                ? snap.fresh
                  ? t("explore.res.newSticker", "New sticker: {name}!", { name: t(`explore.sticker.${snap.sticker.id}`, snap.sticker.name) })
                  : t("explore.res.latestSticker", "Your newest sticker: {name}", { name: t(`explore.sticker.${snap.sticker.id}`, snap.sticker.name) })
                : t("explore.res.noSticker", "Keep playing to win your first sticker!")}
          </p>
          {opened && snap.sticker && (
            <Link href="/stickers" className="mt-1 font-black text-[#C02677] underline decoration-2 underline-offset-4 dark:text-[#FF8CC6]">
              {t("explore.stickers.open", "Open my sticker book")}
            </Link>
          )}
        </div>

        {better.length > 0 && (
          <div className="ex-card mt-4 w-full p-5 text-left">
            <h2 className="flex items-center gap-2 text-xl font-black">
              <TrendingUp className="h-6 w-6 text-[#2EBE70]" strokeWidth={2.8} aria-hidden /> {t("explore.res.better", "You got better at…")}
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

        {r.missed.length > 0 && (
          <details className="ex-card mt-4 w-full p-5 text-left">
            <summary className="cursor-pointer text-lg font-black text-[#2F80FF]">
              {r.missed.length === 1 ? t("explore.res.trickyOne", "Let’s look at the tricky one") : t("explore.res.tricky", "Let’s look at the {n} tricky ones", { n: r.missed.length })}
            </summary>
            <ul className="mt-4 space-y-4">
              {r.missed.map((m) => (
                <li key={m.uid} className="rounded-2xl bg-surface-2 p-4">
                  <div className="space-y-2 font-bold">{m.question}</div>
                  <div className="mt-2 font-black text-[#167A45] dark:text-[#6BE3A2]">
                    {t("explore.fb.answer", "Correct answer:")} {m.answer}
                  </div>
                  {m.explain && <div className="mt-1 text-sm text-muted">{m.explain}</div>}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>

      <div className="ex-answerbar sticky bottom-0">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col-reverse gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 sm:py-6">
          <button type="button" onClick={r.onRetry} className="ex-press flex items-center justify-center gap-2 rounded-[1.25rem] bg-surface px-6 py-4 text-lg font-black uppercase tracking-wide text-[#2F80FF]" style={{ boxShadow: "inset 0 0 0 3px rgb(var(--line)), inset 0 -6px 0 rgb(var(--line))" }}>
            <RotateCcw className="h-6 w-6" strokeWidth={3} aria-hidden /> {t("explore.res.again", "Play again")}
          </button>
          <Link href={r.exitHref} onClick={() => say(t("explore.voice.letsGoShort", "Let’s go!"))} autoFocus className="ex-press ex-bigbtn flex items-center justify-center gap-2 rounded-[1.25rem] px-10 py-4 text-xl font-black uppercase tracking-wide text-white sm:min-w-[300px]" style={chunky(EX.green, 6)}>
            {t("explore.continue", "Continue")} <ArrowRight className="h-6 w-6" strokeWidth={3} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatTile({ col, label, icon, value, delay }: { col: Col; label: string; icon: React.ReactNode; value: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay, type: "spring", stiffness: 300, damping: 18 }} className="overflow-hidden rounded-[1.25rem] border-[3px]" style={{ borderColor: col.c, background: col.c }}>
      <div className="truncate px-1 py-1.5 text-xs font-black uppercase tracking-wide text-white sm:text-sm">{label}</div>
      <div className="flex items-center justify-center gap-1 rounded-[1rem] bg-surface px-1 py-4 text-xl font-black tabular-nums sm:text-2xl" style={{ color: col.s }}>
        {icon}
        {value}
      </div>
    </motion.div>
  );
}

function Sparkle() {
  const dots = [
    [-80, -30, "#FF5A5F"],
    [80, -40, "#2F80FF"],
    [-60, 40, "#2EBE70"],
    [66, 35, "#8B5CF6"],
    [0, -64, "#FFC21A"],
    [-30, -55, "#EC4899"],
    [34, -58, "#14B8A6"],
  ] as const;
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden>
      {dots.map(([x, y, c], i) => (
        <motion.span key={i} className="absolute h-3 w-3 rounded-full" style={{ background: c }} initial={{ x: 0, y: 0, opacity: 1, scale: 1 }} animate={{ x, y, opacity: 0, scale: 0.4 }} transition={{ duration: 0.9, delay: i * 0.04 }} />
      ))}
    </div>
  );
}
