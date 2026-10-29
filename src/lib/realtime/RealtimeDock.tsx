"use client";

import clsx from "clsx";
import { Mic, MicOff, Square } from "lucide-react";
import { useT } from "@/i18n";
import type { RealtimeLine, RealtimeTutor } from "./useRealtimeTutor";

/** The realtime (LiveKit) voice panel: agent state, live captions, mic toggle, end. */
export function RealtimeDock({ rt, onEnd }: { rt: RealtimeTutor; onEnd: () => void }) {
  const t = useT();
  const STATE: Record<RealtimeTutor["agentState"], string> = {
    initializing: t("tutor.rt.joining", "Questy is joining…"),
    idle: t("tutor.rt.idle", "Ready"),
    listening: t("tutor.rt.listening", "Listening — just talk"),
    thinking: t("tutor.rt.thinking", "Thinking…"),
    speaking: t("tutor.rt.speaking", "Speaking — talk any time to interrupt"),
  };
  const recent = rt.lines.slice(-6);
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-extrabold">
        <span
          className={clsx(
            "h-2.5 w-2.5 rounded-full",
            rt.agentState === "speaking" ? "animate-pulse bg-accent" : rt.agentState === "listening" ? "bg-emerald-500" : rt.agentState === "thinking" ? "animate-pulse bg-amber-500" : "bg-line",
          )}
          aria-hidden
        />
        <span aria-live="polite">{STATE[rt.agentState]}</span>
        <span className="ml-auto rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-black uppercase text-accent">{t("tutor.rt.badge", "Realtime")}</span>
      </div>
      <ol className="max-h-56 space-y-1.5 overflow-y-auto rounded-xl border border-line p-2 text-sm">
        {recent.length === 0 && <li className="text-muted">{t("tutor.rt.empty", "Say hello to start.")}</li>}
        {recent.map((l: RealtimeLine) => (
          <li key={l.id} className={clsx(l.who === "student" && "text-right font-bold text-accent", !l.final && "opacity-70")}>
            {l.text}
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => void rt.setMic(!rt.micOn)} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1" aria-pressed={!rt.micOn}>
          {rt.micOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />} {rt.micOn ? t("tutor.rt.mute", "Mute mic") : t("tutor.rt.unmute", "Unmute mic")}
        </button>
        <button type="button" onClick={onEnd} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1">
          <Square className="h-4 w-4" /> {t("tutor.live.finish", "End & get recap")}
        </button>
      </div>
    </div>
  );
}

/** Realtime captions -> the alternating user/assistant history the recap route expects. */
export function linesToHistory(lines: RealtimeLine[], intro: string): { role: "user" | "assistant"; content: string }[] {
  const out: { role: "user" | "assistant"; content: string }[] = [{ role: "user", content: intro }];
  for (const l of lines) {
    const text = l.text.trim();
    if (!text) continue;
    const role = l.who === "student" ? "user" : "assistant";
    const last = out[out.length - 1];
    if (last.role === role) last.content = `${last.content} ${text}`.slice(0, 11000);
    else out.push({ role, content: text.slice(0, 11000) });
  }
  return out.length > 1 ? out : [];
}
