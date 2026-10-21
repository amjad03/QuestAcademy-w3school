"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/** Daily time limit in minutes. 0 = off. Display-only for now; written so it can be enforced later. */
export type TimeLimit = 0 | 15 | 30 | 45 | 60;
export const TIME_LIMITS: TimeLimit[] = [0, 15, 30, 45, 60];

export interface QuietHours {
  enabled: boolean;
  /** "HH:MM" 24h local time. */
  start: string;
  end: string;
}

export interface ParentState {
  timeLimit: TimeLimit;
  quietHours: QuietHours;
  setTimeLimit: (m: TimeLimit) => void;
  setQuietHours: (q: Partial<QuietHours>) => void;
}

export const useParent = create<ParentState>()(
  persist(
    (set) => ({
      timeLimit: 0,
      quietHours: { enabled: false, start: "20:00", end: "07:00" },
      setTimeLimit: (timeLimit) => set({ timeLimit }),
      setQuietHours: (q) => set((s) => ({ quietHours: { ...s.quietHours, ...q } })),
    }),
    { name: "qa-parent", storage: createJSONStorage(() => localStorage), version: 1 },
  ),
);

/** True when `now` falls inside the quiet window (handles overnight windows). Not enforced yet. */
export function inQuietHours(q: QuietHours, now = new Date()) {
  if (!q.enabled) return false;
  const toMin = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return (h || 0) * 60 + (m || 0);
  };
  const cur = now.getHours() * 60 + now.getMinutes();
  const a = toMin(q.start);
  const b = toMin(q.end);
  return a <= b ? cur >= a && cur < b : cur >= a || cur < b;
}
