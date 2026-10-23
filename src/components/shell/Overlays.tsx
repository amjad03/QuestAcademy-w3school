"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Coins, Zap } from "lucide-react";
import { useEffect } from "react";
import { useUi } from "@/lib/ui";
import { burst } from "@/lib/confetti";
import { sfx } from "@/lib/sound";
import { Mascot } from "@/components/brand/Mascot";
import { BadgeMedal } from "@/components/ui/GameIcon";
import { useMode } from "@/lib/useMode";
import { say } from "@/lib/voice";
import { PRAISE } from "@/content/voice-lines";

/** XP toasts + celebration dialogs (level up, badge, daily goal). Held back during focused sessions. */
export function Overlays() {
  const toasts = useUi((s) => s.toasts);
  const focus = useUi((s) => s.focusMode);
  const queued = useUi((s) => (s.focusMode ? undefined : s.celebrations[0]));
  const dismiss = useUi((s) => s.dismissCelebration);
  const toast = useUi((s) => s.toast);
  const mode = useMode();
  // Calmer modes turn celebrations into a quiet toast instead of a dialog.
  const celebration = mode.dialogs ? queued : undefined;
  // Points are a game layer for 11–22-year-olds; young children see stars, and
  // postgraduate / professional profiles have no game layer at all.
  const showXp = mode.id === "adventure" || mode.id === "focus" || mode.id === "mastery";

  useEffect(() => {
    if (!queued || mode.dialogs) return;
    toast({ text: queued.kind === "badge" ? `Achievement: ${queued.title}` : queued.title });
    dismiss();
  }, [queued, mode.dialogs, toast, dismiss]);

  useEffect(() => {
    if (!celebration) return;
    if (mode.confetti) burst({ big: celebration.kind === "level" });
    sfx(celebration.kind === "level" ? "levelup" : "fanfare");
    if (mode.autoVoice) say(celebration.kind === "badge" ? PRAISE[3] : PRAISE[0]);
    const onKey = (e: KeyboardEvent) => (e.key === "Escape" || e.key === "Enter") && dismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [celebration, dismiss, mode.confetti, mode.autoVoice]);

  return (
    <>
      {!focus && (
        <div className="pointer-events-none fixed right-4 top-4 z-[60] flex flex-col items-end gap-2" aria-live="polite">
          <AnimatePresence>
            {toasts.filter((t) => t.text || (showXp && (t.xp || t.coins))).map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: -12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-3 rounded-2xl border-2 border-b-4 border-line bg-surface px-4 py-2.5"
              >
                {showXp && t.xp ? (
                  <span className="flex items-center gap-1 text-lg font-black text-warn">
                    <Zap className="h-5 w-5 fill-warn" />+{t.xp} XP
                  </span>
                ) : null}
                {showXp && t.coins ? (
                  <span className="flex items-center gap-1 text-lg font-black text-warn-shade">
                    <Coins className="h-5 w-5" />+{t.coins}
                  </span>
                ) : null}
                {t.text && <span className="text-sm font-bold text-muted">{t.text}</span>}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {celebration && (
          <motion.div
            key={celebration.id}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            role="dialog"
            aria-modal="true"
            aria-label={celebration.title}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="w-full max-w-sm rounded-3xl bg-surface p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center">
                {celebration.badge ? <BadgeMedal icon={celebration.badge.icon} color={celebration.badge.color} size={112} /> : <Mascot pose="cheer" size={120} />}
              </div>
              <p className="eyebrow mt-5 !text-accent">
                {celebration.kind === "badge" ? "Achievement unlocked" : celebration.kind === "level" ? "Level up" : celebration.kind === "goal" ? "Daily goal complete" : "Lesson complete"}
              </p>
              <h2 className="mt-2 text-2xl font-black">{celebration.title}</h2>
              {celebration.subtitle && <p className="mt-2 font-semibold text-muted">{celebration.subtitle}</p>}
              <button className="btn-primary mt-7 w-full" onClick={dismiss} autoFocus>
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
