"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { AudioLines, Hand, Loader2, Mic, MicOff, PenLine, Send } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { useT } from "@/i18n";
import type { LiveError } from "@/lib/tutor/live-client";
import type { TutorSession, VoiceState } from "@/lib/tutor/useTutorSession";

type T = ReturnType<typeof useT>;

export function liveErrorText(t: T, code: LiveError, retryAfter?: number | null) {
  const wait = retryAfter ? ` ${t("tutor.live.err.retryIn", "Try again in {n} s.", { n: retryAfter })}` : "";
  const map: Record<LiveError, string> = {
    tutor_unavailable: t("tutor.live.err.unavailable", "The AI tutor isn't switched on for this server yet (no model key). The board still works — ask your teacher to turn the tutor on."),
    premium_required: t("tutor.live.err.premium", "The live tutor needs a Premium plan."),
    rate_limited: t("tutor.live.err.rate", "That was a lot of questions in a short time. Take a short break.") + wait,
    daily_limit: t("tutor.live.err.daily", "You have used today's tutor time. Come back tomorrow!"),
    bad_request: t("tutor.live.err.bad", "Something went wrong with that message. Try again."),
    upstream_busy: t("tutor.live.err.busy", "The tutor is very busy right now. Try again in a minute.") + wait,
    upstream_error: t("tutor.live.err.upstream", "The tutor hit a problem. Try again."),
    auth_failed: t("tutor.live.err.unavailable", "The AI tutor isn't switched on for this server yet (no model key). The board still works — ask your teacher to turn the tutor on."),
    network: t("tutor.live.err.network", "You seem to be offline. Check your connection and try again."),
  };
  return map[code];
}

const RING: Record<VoiceState, string> = {
  idle: "ring-line",
  listening: "ring-emerald-400",
  thinking: "ring-amber-400",
  speaking: "ring-accent",
};

/** Avatar + live waveform that follows the tutor's voice (or the student's, while listening). */
export function VoiceOrb({ s, size = 64 }: { s: TutorSession; size?: number }) {
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const state = s.state;
  const level = s.level;
  const heardAt = useRef(0);
  useEffect(() => {
    heardAt.current = performance.now();
  }, [s.interim]);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      const base = state === "speaking" ? level() : state === "listening" ? (now - heardAt.current < 350 ? 0.55 : 0.12) : state === "thinking" ? 0.2 : 0.06;
      bars.current.forEach((b, i) => {
        if (!b) return;
        const wob = state === "thinking" ? 0.5 + 0.5 * Math.sin(now / 160 - i * 0.9) : 0.55 + 0.45 * Math.sin(now / (90 + i * 23) + i * 1.7);
        b.style.transform = `scaleY(${Math.max(0.12, Math.min(1, base * (0.6 + wob * 0.9)))})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [state, level]);
  return (
    <div className="flex items-center gap-3">
      <span className={clsx("relative grid shrink-0 place-items-center rounded-full bg-surface-2 ring-4 transition-colors", RING[state])} style={{ width: size, height: size }}>
        {state === "speaking" && <span className="absolute inset-0 animate-ping rounded-full bg-accent/15" aria-hidden />}
        <Mascot pose={state === "thinking" ? "think" : "wave"} size={Math.round(size * 0.78)} animate={false} />
      </span>
      <span className="flex h-8 items-center gap-[3px]" aria-hidden>
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} ref={(n) => void (bars.current[i] = n)} className={clsx("h-8 w-[4px] origin-center rounded-full transition-colors", state === "listening" ? "bg-emerald-500" : state === "thinking" ? "bg-amber-400" : "bg-accent")} style={{ transform: "scaleY(0.12)" }} />
        ))}
      </span>
    </div>
  );
}

export function VoiceChip({ s }: { s: TutorSession }) {
  const t = useT();
  const v = s.voice;
  const text =
    v.status === "ready"
      ? t("tutor.voice.ready", "Natural Indian voice")
      : v.status === "loading"
        ? t("tutor.voice.loading", "Loading natural voice… {p}%", { p: v.progress })
        : t("tutor.voice.device", "Using device voice");
  const tip = v.status === "unavailable" && v.reason ? t("tutor.voice.why", "Natural voice unavailable: {r}", { r: v.reason }) : t("tutor.voice.tip", "Kokoro open-source voice, running on this device");
  return (
    <span className={clsx("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-extrabold", v.status === "ready" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : "bg-surface-2 text-muted")} title={tip}>
      {v.status === "loading" ? <Loader2 className="h-3 w-3 animate-spin" /> : <AudioLines className="h-3 w-3" />} {text}
    </span>
  );
}

/** Captions, check-point, mic (hands-free / push-to-talk), text box and actions. */
export function VoiceDock({ s, placeholder, actions, compact, disabled }: { s: TutorSession; placeholder?: string; actions?: ReactNode; compact?: boolean; disabled?: boolean }) {
  const t = useT();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const label: Record<VoiceState, string> = {
    idle: s.handsFree ? t("tutor.state.ready", "Mic on — just talk") : t("tutor.state.idle", "Tap the mic to talk, or type"),
    listening: t("tutor.state.listening", "Listening…"),
    thinking: t("tutor.state.thinking", "Thinking…"),
    speaking: s.handsFree ? t("tutor.state.speakingHf", "Speaking — talk any time to interrupt") : t("tutor.state.speaking", "Speaking…"),
  };
  const submit = () => {
    const v = input.trim();
    if (!v || disabled) return;
    setInput("");
    s.unlock();
    s.ask(v);
  };
  const micErr =
    s.micError === "denied"
      ? t("tutor.mic.denied", "Microphone is blocked. Allow it in the browser's site settings, or type instead.")
      : s.micError === "unsupported"
        ? t("tutor.mic.unsupported", "Voice input isn't supported in this browser — type instead (Chrome works best).")
        : s.micError === "network"
          ? t("tutor.mic.network", "Voice recognition needs internet. Type instead for now.")
          : null;

  return (
    <div className={clsx("space-y-3", compact && "space-y-2")} aria-live="polite">
      <div className="flex items-center justify-between gap-2">
        <VoiceOrb s={s} size={compact ? 48 : 64} />
        <div className="min-w-0 text-right">
          <p className={clsx("text-xs font-extrabold uppercase tracking-wide", s.state === "listening" ? "text-emerald-600" : s.state === "thinking" ? "text-amber-600" : s.state === "speaking" ? "text-accent" : "text-muted")}>{label[s.state]}</p>
          {!compact && <VoiceChip s={s} />}
        </div>
      </div>

      {s.voice.lost && (
        <p role="status" className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-200">
          {t("tutor.voice.lost", "The natural voice stopped working, so Questy is using this device's voice for the rest of this session.")}
        </p>
      )}

      {s.misconception && <p className="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-700 dark:bg-red-950 dark:text-red-200">{t("tutor.live.misconception", "Common mix-up: {m}", { m: s.misconception })}</p>}

      <div className={clsx("rounded-2xl bg-surface-2 px-3 py-2.5", compact ? "min-h-[3rem]" : "min-h-[4.5rem]")}>
        <p className={clsx("font-semibold leading-snug", compact ? "text-[0.95rem]" : "text-[1.05rem]")}>
          {s.caption || (s.busy ? <Loader2 className="inline h-4 w-4 animate-spin text-muted" /> : <span className="text-muted">{t("tutor.caption.empty", "Questy's words appear here.")}</span>)}
        </p>
        {s.interim && <p className="mt-1.5 border-t border-line pt-1.5 text-sm font-semibold italic text-emerald-700 dark:text-emerald-300">“{s.interim}”</p>}
      </div>

      {!s.busy && s.check && (
        <div className="space-y-2">
          <p className={clsx("rounded-xl bg-accent-soft px-3 font-extrabold text-accent", compact ? "py-1.5 text-sm" : "py-2")}>{s.check.q || (s.ended ? t("tutor.live.done", "Lesson complete! Ask anything else, or end for your recap.") : t("tutor.live.anyQuestions", "Any questions? Ask me, or say “continue”."))}</p>
          {s.check.options && s.check.options.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {s.check.options.map((o) => (
                <button key={o} type="button" disabled={disabled} onClick={() => (s.unlock(), s.ask(o, { tag: "[answer]" }))} className={clsx("btn-ghost rounded-xl border-2 border-line px-3 text-left font-bold", compact ? "py-1 text-sm" : "py-1.5")}>
                  {o}
                </button>
              ))}
            </div>
          )}
          {s.check.board && (
            <button type="button" disabled={disabled} onClick={() => (s.unlock(), s.ask("Please check my working on the board.", { tag: "[board-work]", forceBoard: true }))} className="btn btn-primary inline-flex items-center gap-2 !py-2">
              <PenLine className="h-4 w-4" /> {t("tutor.live.checkBoard", "I've written it — check my board")}
            </button>
          )}
        </div>
      )}

      <div className="flex items-center gap-2">
        {s.micSupported && (
          <button
            type="button"
            onClick={s.toggleHandsFree}
            disabled={disabled}
            className={clsx("relative grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 text-white shadow-md transition disabled:opacity-50", s.handsFree ? "border-emerald-600 bg-emerald-500" : "border-accent-shade bg-accent")}
            aria-pressed={s.handsFree}
            aria-label={s.handsFree ? t("tutor.mic.off", "Turn off hands-free mic") : t("tutor.mic.on", "Talk hands-free")}
            title={s.handsFree ? t("tutor.mic.off", "Turn off hands-free mic") : t("tutor.mic.on", "Talk hands-free")}
          >
            {s.handsFree && s.state === "listening" && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" aria-hidden />}
            {s.handsFree ? <Mic className="relative h-5 w-5" /> : <MicOff className="h-5 w-5 opacity-90" />}
          </button>
        )}
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === "Enter" && !e.nativeEvent.isComposing) submit();
          }}
          disabled={disabled}
          placeholder={placeholder ?? t("tutor.live.answerPh", "Type your answer or question…")}
          className="min-w-0 flex-1 rounded-xl border-2 border-line bg-surface px-3 py-2.5 disabled:opacity-60"
          maxLength={2000}
          aria-label={t("tutor.live.inputLabel", "Message to the tutor")}
        />
        <button type="button" onClick={submit} disabled={!input.trim() || disabled} className="btn btn-primary grid h-11 w-11 shrink-0 place-items-center !p-0 disabled:opacity-50" aria-label={t("tutor.live.send", "Send")}>
          <Send className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-sm">
        {s.micSupported && !s.handsFree && (
          <button type="button" onClick={s.pushToTalk} disabled={disabled} className={clsx("btn-ghost inline-flex items-center gap-1 rounded-xl border-2 px-2.5 py-1", s.ptt ? "border-emerald-500 text-emerald-700" : "border-line")} aria-pressed={s.ptt}>
            <Mic className="h-4 w-4" /> {s.ptt ? t("tutor.mic.listening", "Listening… tap to send") : t("tutor.mic.once", "Talk once")}
          </button>
        )}
        {s.busy && (
          <button type="button" onClick={s.raiseHand} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1">
            <Hand className="h-4 w-4" /> {t("tutor.live.raise", "Wait, I have a doubt")}
          </button>
        )}
        {actions}
      </div>
      {micErr && <p className="text-sm font-bold text-amber-700 dark:text-amber-300">{micErr}</p>}
      {s.error && (
        <p role="alert" className="rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad-shade">
          {liveErrorText(t, s.error, s.retryAfter)}
        </p>
      )}
    </div>
  );
}
