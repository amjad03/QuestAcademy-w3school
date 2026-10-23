"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/** A simple Pomodoro timer (25 min focus / 5 min break), kept for this browser tab in sessionStorage. */
export type Phase = "focus" | "break";

export const PHASE_MS: Record<Phase, number> = { focus: 25 * 60_000, break: 5 * 60_000 };

interface TimerState {
  phase: Phase;
  running: boolean;
  /** Epoch ms when the running phase ends. */
  endsAt: number | null;
  /** Remaining ms while paused. */
  remaining: number;
  /** Focus blocks finished in this tab. */
  completed: number;
  /** Last completed phase, for a polite announcement. */
  lastDone: Phase | null;
  start: () => void;
  pause: () => void;
  reset: () => void;
  switchTo: (p: Phase) => void;
  /** Ends the phase if its time is up (safe to call repeatedly). */
  settle: () => void;
}

export const useFocusTimer = create<TimerState>()(
  persist(
    (set, get) => ({
      phase: "focus",
      running: false,
      endsAt: null,
      remaining: PHASE_MS.focus,
      completed: 0,
      lastDone: null,
      start: () => {
        const s = get();
        if (s.running) return;
        set({ running: true, endsAt: Date.now() + (s.remaining > 0 ? s.remaining : PHASE_MS[s.phase]), lastDone: null });
      },
      pause: () => {
        const s = get();
        if (!s.running || !s.endsAt) return;
        set({ running: false, remaining: Math.max(0, s.endsAt - Date.now()), endsAt: null });
      },
      reset: () => set((s) => ({ running: false, endsAt: null, remaining: PHASE_MS[s.phase], lastDone: null })),
      switchTo: (phase) => set({ phase, running: false, endsAt: null, remaining: PHASE_MS[phase], lastDone: null }),
      settle: () => {
        const s = get();
        if (!s.running || !s.endsAt || s.endsAt > Date.now()) return;
        const next: Phase = s.phase === "focus" ? "break" : "focus";
        set({ phase: next, running: false, endsAt: null, remaining: PHASE_MS[next], completed: s.completed + (s.phase === "focus" ? 1 : 0), lastDone: s.phase });
      },
    }),
    {
      name: "qa-focus-timer",
      storage: createJSONStorage(() => sessionStorage),
      partialize: ({ phase, running, endsAt, remaining, completed }) => ({ phase, running, endsAt, remaining, completed }),
      skipHydration: true,
    },
  ),
);

let rehydrated = false;

/** Live view of the timer: remaining ms, ticking once a second while it runs. */
export function useTimerView() {
  const s = useFocusTimer();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!rehydrated) {
      rehydrated = true;
      void useFocusTimer.persist.rehydrate();
    }
  }, []);

  useEffect(() => {
    if (!s.running) return;
    setNow(Date.now());
    const t = setInterval(() => {
      setNow(Date.now());
      useFocusTimer.getState().settle();
    }, 1000);
    useFocusTimer.getState().settle();
    return () => clearInterval(t);
  }, [s.running]);

  const remaining = s.running && s.endsAt ? Math.max(0, s.endsAt - now) : s.remaining;
  return { ...s, remaining };
}

export function clock(ms: number) {
  const total = Math.ceil(ms / 1000);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}
