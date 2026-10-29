"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Check, Loader2, Smartphone, X } from "lucide-react";
import { useT } from "@/i18n";
import { Mascot } from "@/components/brand/Mascot";
import { MODEL_MB } from "@/lib/tutor/speech";
import type { TutorSession } from "@/lib/tutor/useTutorSession";

const TIPS: [string, string][] = [
  ["tutor.loader.tip1", "Tip: tap the mic once and just talk. You can interrupt Questy any time."],
  ["tutor.loader.tip2", "Tip: circle anything on the board and ask “what is this?”."],
  ["tutor.loader.tip3", "Fun fact: Questy's voice is an 82-million-parameter AI model running right inside your browser."],
  ["tutor.loader.tip4", "Fun fact: an owl can turn its head about 270 degrees. Questy just turns pages."],
  ["tutor.loader.tip5", "Tip: say “I don't get it” and Questy explains it a simpler way."],
  ["tutor.loader.tip6", "Good news: the voice is saved on this device, so next time it starts in seconds."],
  ["tutor.loader.tip7", "Fun fact: your brain remembers more when you explain an idea out loud. Try “Explain it back” mode!"],
];

const mb = (b: number) => (b / 1048576).toFixed(b >= 10 * 1048576 ? 0 : 1);

/** Full-screen "getting ready" screen: voice model download → warm-up → first lesson step. */
export function TutorLoader({ s, onCancel }: { s: TutorSession; onCancel: () => void }) {
  const t = useT();
  const v = s.voice;
  const [tip, setTip] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTip((i) => (i + 1) % TIPS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const device = v.status === "unavailable" || v.status === "off";
  const downloaded = device || v.stage === "warmup" || v.stage === "ready";
  const warm = device || v.status === "ready";
  const lesson = s.lessonReady || Boolean(s.error);
  const pct = device ? 100 : v.stage === "download" ? v.progress : 100;
  const overall = Math.round((downloaded ? 60 : pct * 0.6) + (warm ? 25 : 0) + (lesson ? 15 : 0));

  // Server voice (Sarvam): nothing to download, just a short "connecting" step.
  const server = v.engine === "sarvam" || v.stage === "connect";
  const steps: { done: boolean; active: boolean; label: string; sub?: string }[] = [
    server ? {
      done: v.status === "ready" || device,
      active: v.status === "loading",
      label: t("tutor.loader.connect", "Connecting Questy's voice"),
      sub: t("tutor.loader.connectSub", "Natural Indian voice, no download needed"),
    } : {
      done: downloaded,
      active: !downloaded,
      label: t("tutor.loader.download", "Downloading Questy's voice"),
      sub: device
        ? t("tutor.loader.deviceSub", "Using device voice{why}", { why: v.reason ? ` (${v.reason})` : "" })
        : v.cached
          ? t("tutor.loader.cached", "Saved on this device — no download needed")
          : v.total
            ? t("tutor.loader.mb", "{p}% · {a} of {b} MB · saved for next time", { p: v.progress, a: mb(v.loaded), b: mb(v.total) })
            : t("tutor.loader.first", "First time only: about {n} MB, then it's saved on this device", { n: MODEL_MB }),
    },
    ...(server ? [] : [{ done: warm, active: downloaded && !warm, label: t("tutor.loader.warm", "Warming up the voice"), sub: !device && v.stage === "warmup" ? t("tutor.loader.warmSub", "Teaching the model to say hello…") : undefined }]),
    { done: lesson, active: warm && !lesson, label: t("tutor.loader.lesson", "Preparing your lesson"), sub: t("tutor.loader.lessonSub", "Questy is planning the board") },
  ];

  const R = 70;
  const C = 2 * Math.PI * R;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="tutor-loader-title" className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-bg/95 p-4 backdrop-blur-sm">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl motion-safe:animate-aurora" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-accent-2/15 blur-3xl motion-safe:animate-aurora" style={{ animationDelay: "-9s" }} aria-hidden />

      <div className="relative w-full max-w-md text-center">
        <div className="relative mx-auto h-[168px] w-[168px]">
          <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
            <circle cx="80" cy="80" r={R} fill="none" strokeWidth="8" className="stroke-line" />
            <circle cx="80" cy="80" r={R} fill="none" strokeWidth="8" strokeLinecap="round" className="stroke-accent transition-[stroke-dashoffset] duration-500" strokeDasharray={C} strokeDashoffset={C * (1 - overall / 100)} />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center motion-safe:animate-float">
            <Mascot pose={lesson ? "cheer" : warm ? "think" : "read"} size={112} />
          </div>
        </div>

        <h2 id="tutor-loader-title" className="mt-3 text-2xl font-black">
          {t("tutor.loader.title", "Getting your class ready")}
        </h2>
        <p className="mt-1 text-sm font-bold text-muted" aria-live="polite">
          {overall}%
        </p>

        <ol className="mx-auto mt-4 space-y-2 text-left">
          {steps.map((st, i) => (
            <li key={i} className={clsx("flex items-start gap-3 rounded-2xl border-2 px-3 py-2.5 transition", st.active ? "border-accent bg-accent-soft" : "border-line bg-surface")}>
              <span className={clsx("mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full", st.done ? "bg-good text-white" : st.active ? "bg-accent text-white" : "bg-surface-2 text-muted")}>
                {st.done ? <Check className="h-4 w-4" strokeWidth={3} /> : st.active ? <Loader2 className="h-4 w-4 animate-spin" /> : <span className="text-xs font-black">{i + 1}</span>}
              </span>
              <span className="min-w-0 flex-1">
                <span className={clsx("block font-extrabold", !st.done && !st.active && "text-muted")}>{st.label}</span>
                {st.sub && <span className="block break-words text-xs font-semibold text-muted">{st.sub}</span>}
                {i === 0 && st.active && (
                  <span className="mt-1.5 block h-2 overflow-hidden rounded-full bg-surface-2">
                    <span className="block h-full rounded-full bg-accent transition-[width] duration-300" style={{ width: `${Math.max(3, pct)}%` }} />
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>

        <p key={tip} className="mx-auto mt-4 min-h-[3rem] max-w-sm text-sm font-semibold text-muted motion-safe:animate-[float_0.6s_ease-out_1]">
          {t(TIPS[tip][0], TIPS[tip][1])}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {!warm && (
            <button type="button" onClick={s.useDeviceVoice} className="btn btn-primary inline-flex items-center gap-2 !py-2">
              <Smartphone className="h-4 w-4" /> {t("tutor.loader.device", "Continue with device voice")}
            </button>
          )}
          <button type="button" onClick={onCancel} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-3 py-2 font-bold">
            <X className="h-4 w-4" /> {t("tutor.loader.cancel", "Cancel")}
          </button>
        </div>
      </div>
    </div>
  );
}
