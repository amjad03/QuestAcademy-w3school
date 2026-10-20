"use client";

import { create } from "zustand";
import { sfx } from "./sound";

export interface Toast {
  id: number;
  xp?: number;
  coins?: number;
  text?: string;
}

export interface Celebration {
  id: number;
  kind: "level" | "badge" | "goal" | "lesson";
  title: string;
  subtitle?: string;
  /** Badge medallion to show (badges only). */
  badge?: { icon: string; color: string };
}

interface UiState {
  toasts: Toast[];
  celebrations: Celebration[];
  paletteOpen: boolean;
  /** While true (e.g. during a lesson session) celebrations queue up silently. */
  focusMode: boolean;
  setFocusMode: (v: boolean) => void;
  toast: (t: Omit<Toast, "id">) => void;
  dismissToast: (id: number) => void;
  celebrate: (c: Omit<Celebration, "id">) => void;
  dismissCelebration: () => void;
  setPalette: (open: boolean) => void;
}

let seq = 1;

export const useUi = create<UiState>((set, get) => ({
  toasts: [],
  celebrations: [],
  paletteOpen: false,
  focusMode: false,
  setFocusMode: (v) => set({ focusMode: v }),
  toast: (t) => {
    const id = seq++;
    set((s) => ({ toasts: [...s.toasts.slice(-3), { ...t, id }] }));
    if ((t.xp || t.coins) && !get().focusMode) sfx("coin");
    setTimeout(() => get().dismissToast(id), 2600);
  },
  dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  celebrate: (c) => {
    set((s) => ({ celebrations: [...s.celebrations, { ...c, id: seq++ }] }));
    if (!get().focusMode) sfx(c.kind === "level" ? "levelup" : "fanfare");
  },
  dismissCelebration: () => set((s) => ({ celebrations: s.celebrations.slice(1) })),
  setPalette: (open) => set({ paletteOpen: open }),
}));
