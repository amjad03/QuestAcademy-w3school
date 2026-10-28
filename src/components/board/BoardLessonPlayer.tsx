"use client";

/**
 * Plays a board script like a video: the smartboard draws each step's ops while the tutor voice
 * (Kokoro in the browser, else the device voice, see lib/tutor/speech) speaks the step's narration.
 * Controls: play/pause, previous/next step, seek on the step timeline, chapters, speed, captions,
 * mute (captions-only, timed by word count), replay, and "Ask the tutor about this step".
 *
 * Seeking redraws the board instantly up to the chosen step, then animates that step.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Captions, CaptionsOff, ListOrdered, MessageCircleQuestion, Pause, Play, RotateCcw, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useT } from "@/i18n";
import { sentences, speaker } from "@/lib/tutor/speech";
import { tutorHref } from "@/lib/tutor/live";
import { Smartboard, type SmartboardHandle } from "./Smartboard";
import { plainSay, scriptChapters, stepMs, type BoardScript } from "./script";

const SPEEDS = [0.75, 1, 1.25, 1.5];
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function clock(ms: number) {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function BoardLessonPlayer({
  script,
  speechLang = "en-IN",
  autoPlay,
  askTopic,
  showChapters = true,
  onFinish,
}: {
  script: BoardScript;
  /** BCP-47 language of the narration (en-IN, hi-IN, kn-IN). */
  speechLang?: string;
  autoPlay?: boolean;
  /** Prefix for "Ask the tutor" (defaults to the script title). Set to "" to hide the button. */
  askTopic?: string;
  showChapters?: boolean;
  onFinish?: () => void;
}) {
  const t = useT();
  const board = useRef<SmartboardHandle>(null);
  const token = useRef(0);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [captions, setCaptions] = useState(true);
  const [muted, setMuted] = useState(false);
  const [caption, setCaption] = useState(script.steps[0]?.cap ?? plainSay(script.steps[0]?.say ?? ""));
  const [showList, setShowList] = useState(false);
  const [stepStart, setStepStart] = useState(0);
  const [now, setNow] = useState(0);
  const speedRef = useRef(speed);
  speedRef.current = speed;
  const mutedRef = useRef(muted);
  mutedRef.current = muted;

  const durs = useMemo(() => script.steps.map(stepMs), [script]);
  const offsets = useMemo(() => durs.reduce<number[]>((a, d, i) => (a.push(i ? a[i - 1] + durs[i - 1] : 0), a), []), [durs]);
  const total = durs.reduce((a, b) => a + b, 0);
  const chapters = useMemo(() => scriptChapters(script), [script]);
  const chapterAt = (i: number) => [...chapters].reverse().find((c) => c.from <= i) ?? chapters[0];

  // Elapsed time inside the current step (estimated; voices do not report progress).
  useEffect(() => {
    if (!playing) return;
    const h = setInterval(() => setNow(performance.now()), 250);
    return () => clearInterval(h);
  }, [playing]);
  const within = playing ? Math.min(durs[idx] ?? 0, (now - stepStart) * speed) : 0;
  const elapsed = ended ? total : (offsets[idx] ?? 0) + within;

  const stop = useCallback(() => {
    token.current++;
    speaker().stop();
    board.current?.stop();
  }, []);
  useEffect(() => stop, [stop]);

  /** Draw steps [0, i) instantly (and step i too when `include`). */
  const drawUpTo = useCallback(
    (i: number, include = false) => {
      const b = board.current;
      if (!b) return;
      b.reset();
      for (let k = 0; k < i + (include ? 1 : 0); k++) for (const op of script.steps[k].ops) void b.apply(op, { animate: false });
    },
    [script],
  );

  /** Captions-only playback: show the step sentence by sentence, timed by length. */
  const captionsOnly = useCallback(async (text: string, ms: number, my: number) => {
    const parts = sentences(text);
    const chars = parts.reduce((n, p) => n + p.length, 0) || 1;
    for (const part of parts) {
      if (my !== token.current) return;
      setCaption(part);
      await sleep((ms * part.length) / chars);
    }
  }, []);

  const playFrom = useCallback(
    async (start: number) => {
      stop();
      const my = token.current;
      const sp = speaker();
      sp.unlock();
      // Start the in-browser voice; until it is ready the device voice speaks.
      if (!mutedRef.current && sp.capable()) sp.preload();
      setEnded(false);
      setPlaying(true);
      drawUpTo(start);
      for (let i = start; i < script.steps.length; i++) {
        if (my !== token.current) return;
        const step = script.steps[i];
        setIdx(i);
        setStepStart(performance.now());
        setNow(performance.now());
        const text = plainSay(step.say);
        setCaption(step.cap ?? text);
        const est = (durs[i] - 500) / speedRef.current;
        sp.rate = speedRef.current;
        const voice = mutedRef.current ? captionsOnly(text, est, my) : sp.speak(text, speechLang, (s) => !step.cap && my === token.current && setCaption(s));
        // Spread the drawing across the narration so the board keeps pace with the voice.
        const drawing = (async () => {
          const gap = step.ops.length > 1 ? (est * 0.75) / step.ops.length : 0;
          for (const op of step.ops) {
            if (my !== token.current) return;
            const t0 = performance.now();
            await board.current?.apply(op);
            const left = gap - (performance.now() - t0);
            if (left > 0) await sleep(left);
          }
        })();
        await Promise.all([voice, drawing]);
        if (my !== token.current) return;
        await sleep(450 / speedRef.current);
      }
      if (my !== token.current) return;
      setPlaying(false);
      setEnded(true);
      onFinish?.();
    },
    [captionsOnly, drawUpTo, durs, onFinish, script, speechLang, stop],
  );

  const pause = () => {
    stop();
    setPlaying(false);
    // Show the whole current step so nothing is half-drawn while paused.
    drawUpTo(idx, true);
  };
  const seek = (i: number) => {
    const to = Math.max(0, Math.min(script.steps.length - 1, i));
    setShowList(false);
    if (playing) return void playFrom(to);
    stop();
    setEnded(false);
    setIdx(to);
    setCaption(script.steps[to].cap ?? plainSay(script.steps[to].say));
    drawUpTo(to, true);
  };
  const toggle = () => (playing ? pause() : ended ? void playFrom(0) : void playFrom(idx));

  useEffect(() => {
    if (autoPlay) void playFrom(0);
    else drawUpTo(0, true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onKey = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement).closest("button,a,select")) return;
    if (e.key === " " || e.key === "k") (e.preventDefault(), toggle());
    else if (e.key === "ArrowRight") (e.preventDefault(), seek(idx + 1));
    else if (e.key === "ArrowLeft") (e.preventDefault(), seek(idx - 1));
  };

  const step = script.steps[idx];
  const ask = askTopic ?? script.title;
  const btn = "grid h-8 w-8 shrink-0 place-items-center rounded-xl text-ink hover:bg-surface-2 disabled:opacity-40 sm:h-9 sm:w-9";

  return (
    <div className="space-y-2" onKeyDown={onKey} data-testid="board-lesson-player" data-step={idx} data-playing={playing ? "1" : "0"}>
      <div className="relative">
        <Smartboard ref={board} readOnly />
        {captions && caption && (
          <p data-testid="board-caption" aria-live="polite" className="pointer-events-none mx-auto mt-2 w-fit rounded-lg bg-black/80 px-3 py-1.5 text-center text-[13px] font-semibold leading-snug text-white sm:absolute sm:inset-x-2 sm:bottom-4 sm:mt-0 sm:max-w-[92%] sm:text-[15px]">
            {caption}
          </p>
        )}
        {ended && (
          <div className="absolute inset-0 grid place-items-center rounded-2xl bg-black/40">
            <button className="btn-primary" onClick={() => void playFrom(0)}>
              <RotateCcw className="h-4 w-4" /> {t("board.lesson.replay", "Replay")}
            </button>
          </div>
        )}
        {!playing && !ended && idx === 0 && (
          <button onClick={() => void playFrom(0)} className="absolute inset-0 grid place-items-center rounded-2xl bg-black/10 hover:bg-black/20" aria-label={t("board.lesson.play", "Play")}>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-white shadow-lg">
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </span>
          </button>
        )}
      </div>

      {/* timeline: one segment per step, sized by its length */}
      <div className="flex h-3 w-full gap-[2px]" role="group" aria-label={t("board.lesson.timeline", "Steps")}>
        {script.steps.map((s, i) => (
          <button
            key={i}
            onClick={() => seek(i)}
            title={`${i + 1}. ${plainSay(s.say).slice(0, 80)}`}
            aria-label={t("board.lesson.goStep", "Go to step {n}", { n: i + 1 })}
            aria-current={i === idx ? "step" : undefined}
            className={clsx("relative h-full overflow-hidden rounded-sm", i < idx || ended ? "bg-accent" : "bg-line hover:bg-muted/40", s.mark && i > 0 && "ml-1")}
            style={{ flexGrow: durs[i] }}
          >
            {i === idx && !ended && <span className="absolute inset-y-0 left-0 bg-accent" style={{ width: `${(within / durs[i]) * 100}%` }} />}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-0.5 sm:gap-1">
        <button className={btn} onClick={() => seek(idx - 1)} disabled={idx === 0} aria-label={t("board.lesson.prev", "Previous step")}>
          <SkipBack className="h-4 w-4" />
        </button>
        <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-white sm:h-10 sm:w-10" onClick={toggle} aria-label={playing ? t("board.lesson.pause", "Pause") : t("board.lesson.play", "Play")} data-testid="board-play">
          {playing ? <Pause className="h-5 w-5" fill="currentColor" /> : ended ? <RotateCcw className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" fill="currentColor" />}
        </button>
        <button className={btn} onClick={() => seek(idx + 1)} disabled={idx >= script.steps.length - 1} aria-label={t("board.lesson.next", "Next step")}>
          <SkipForward className="h-4 w-4" />
        </button>
        <span className="ml-1 whitespace-nowrap font-mono text-[11px] font-bold text-muted sm:text-xs" data-testid="board-clock">
          {clock(elapsed / speed)} / {clock(total / speed)}
        </span>
        <span className="ml-2 hidden min-w-0 flex-1 truncate text-xs font-bold text-muted sm:block">
          {t("board.lesson.stepOf", "Step {n} of {total}", { n: idx + 1, total: script.steps.length })} · {chapterAt(idx).title}
        </span>
        <span className="flex-1 sm:hidden" />
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          aria-label={t("board.lesson.speed", "Speed")}
          className="h-8 rounded-xl border-2 border-line bg-surface px-1 text-xs font-extrabold sm:h-9 sm:px-1.5"
        >
          {SPEEDS.map((s) => (
            <option key={s} value={s}>
              {s}×
            </option>
          ))}
        </select>
        <button className={btn} onClick={() => setCaptions((c) => !c)} aria-pressed={captions} aria-label={t("board.lesson.captions", "Captions")}>
          {captions ? <Captions className="h-4 w-4" /> : <CaptionsOff className="h-4 w-4" />}
        </button>
        <button
          className={btn}
          onClick={() => {
            const m = !muted;
            setMuted(m);
            mutedRef.current = m;
            if (playing) void playFrom(idx);
          }}
          aria-pressed={muted}
          aria-label={muted ? t("board.lesson.unmute", "Turn the voice on") : t("board.lesson.mute", "Captions only (no voice)")}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        {showChapters && (
          <button className={clsx(btn, showList && "bg-surface-2")} onClick={() => setShowList((v) => !v)} aria-expanded={showList} aria-label={t("board.lesson.chapters", "Lesson chapters")}>
            <ListOrdered className="h-4 w-4" />
          </button>
        )}
      </div>

      {showList && (
        <ol className="card divide-y divide-line overflow-hidden text-sm" data-testid="board-chapters">
          {chapters.map((c, i) => {
            const active = chapterAt(idx).from === c.from;
            return (
              <li key={c.from}>
                <button onClick={() => seek(c.from)} className={clsx("flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-surface-2", active && "bg-accent-soft font-extrabold")}>
                  <span className="w-5 font-mono text-xs text-muted">{i + 1}</span>
                  <span className="flex-1">{c.title}</span>
                  <span className="font-mono text-xs text-muted">{clock(offsets[c.from] / speed)}</span>
                </button>
              </li>
            );
          })}
        </ol>
      )}

      {ask !== "" && step && (
        <Link href={tutorHref(`${ask}: ${plainSay(step.cap ?? step.say).split(/(?<=[.?!])\s/)[0].slice(0, 160)}`)} className="inline-flex items-center gap-1.5 rounded-xl border-2 border-line px-3 py-1.5 text-sm font-extrabold hover:border-accent" onClick={() => stop()}>
          <MessageCircleQuestion className="h-4 w-4 text-accent" /> {t("board.lesson.ask", "Ask the tutor about this step")}
        </Link>
      )}
    </div>
  );
}
