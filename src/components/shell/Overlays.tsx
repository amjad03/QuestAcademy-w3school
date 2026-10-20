"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Coins, Zap } from "lucide-react";
import { useEffect } from "react";
import { useUi } from "@/lib/ui";
import { burst } from "@/lib/confetti";

/** XP toasts + full-screen celebrations (level up, badge, daily goal). */
export function Overlays() {
  const toasts = useUi((s) => s.toasts);
  const celebration = useUi((s) => s.celebrations[0]);
  const dismiss = useUi((s) => s.dismissCelebration);

  useEffect(() => {
    if (!celebration) return;
    burst({ big: celebration.kind === "level" });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [celebration, dismiss]);

  return (
    <>
      <div className="pointer-events-none fixed right-4 top-20 z-[60] flex flex-col items-end gap-2" aria-live="polite">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-2.5 shadow-soft"
            >
              {t.xp ? (
                <span className="flex items-center gap-1 font-display text-lg font-bold text-accent">
                  <Zap className="h-5 w-5 fill-accent" />+{t.xp}
                </span>
              ) : null}
              {t.coins ? (
                <span className="flex items-center gap-1 font-display text-lg font-bold text-amber-500">
                  <Coins className="h-5 w-5" />+{t.coins}
                </span>
              ) : null}
              {t.text && <span className="text-sm text-muted">{t.text}</span>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {celebration && (
          <motion.div
            key={celebration.id}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/50 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            role="dialog"
            aria-modal="true"
            aria-label={celebration.title}
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -6, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="card relative w-full max-w-sm overflow-hidden p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/25 to-transparent" />
              <motion.div
                className="relative mx-auto mb-4 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-6xl shadow-glow"
                animate={{ rotate: [0, -8, 8, -4, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
              >
                {celebration.emoji}
              </motion.div>
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {celebration.kind === "badge" ? "Badge unlocked" : celebration.kind === "level" ? "Level up" : celebration.kind === "goal" ? "Daily goal" : "Complete"}
              </p>
              <h2 className="relative mt-2 font-display text-3xl font-bold">{celebration.title}</h2>
              {celebration.subtitle && <p className="relative mt-2 text-muted">{celebration.subtitle}</p>}
              <button className="btn-pop relative mt-6 w-full" onClick={dismiss} autoFocus>
                Awesome!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
