"use client";

/**
 * Explore-mode sticker collection. Stickers celebrate *trying* and improving,
 * not just getting things right. Each reason fills its own themed set; when a
 * set is complete the next uncollected sticker from any set is awarded.
 *
 *   awardExploreSticker(reason, context)
 *
 * `context` makes an award happen once per thing (e.g. a lesson id), so calling
 * it repeatedly is safe. Returns the sticker awarded, or null.
 */
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import { say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { dayKey } from "@/lib/gamification";

export type StickerReason =
  /** Opened a lesson for the very first time. context: lesson id */
  | "first-try"
  /** Finished a lesson (story or article). context: lesson id */
  | "lesson-complete"
  /** Practised again after making a mistake. context: lesson id or session key */
  | "brave-try"
  /** Reached a streak of 3+ days. context: streak start day or anything unique per streak */
  | "streak"
  /** Finished a learning game. context: game id (+ optional day) */
  | "game-finish"
  /** Beat a previous score. context: session key / game id + new score */
  | "improved";

export interface StickerSet {
  id: string;
  name: string;
  reason: StickerReason;
  /** How the set is earned, in kid-friendly words. */
  how: string;
  color: string;
  shade: string;
}

export interface Sticker {
  id: string;
  name: string;
  set: string;
  /** Big artwork (emoji rendered large on a coloured badge). */
  art: string;
}

export const STICKER_SETS: StickerSet[] = [
  { id: "garden", name: "Garden friends", reason: "first-try", how: "Start a new lesson", color: "#2EBE70", shade: "#1F9B58" },
  { id: "animals", name: "Wild animals", reason: "lesson-complete", how: "Finish a lesson", color: "#FF8A00", shade: "#D97000" },
  { id: "ocean", name: "Ocean pals", reason: "brave-try", how: "Try again after a mistake", color: "#1CB0F6", shade: "#1290CC" },
  { id: "space", name: "Space trip", reason: "streak", how: "Learn 3 days in a row", color: "#7C4DFF", shade: "#5E35D9" },
  { id: "treats", name: "Yummy treats", reason: "game-finish", how: "Finish a game", color: "#EC4899", shade: "#C02677" },
  { id: "rainbow", name: "Super powers", reason: "improved", how: "Beat your best score", color: "#FFB800", shade: "#D99A00" },
];

const ART: Record<string, [string, string][]> = {
  garden: [["🌻", "Sunflower"], ["🐞", "Ladybug"], ["🐝", "Busy bee"], ["🦋", "Butterfly"], ["🐌", "Snail"], ["🍄", "Mushroom"], ["🌷", "Tulip"]],
  animals: [["🦁", "Lion"], ["🐘", "Elephant"], ["🦒", "Giraffe"], ["🐼", "Panda"], ["🐯", "Tiger"], ["🦓", "Zebra"], ["🐨", "Koala"]],
  ocean: [["🐬", "Dolphin"], ["🐙", "Octopus"], ["🐢", "Turtle"], ["🦀", "Crab"], ["🐳", "Whale"], ["🐠", "Clownfish"], ["🦭", "Seal"]],
  space: [["🚀", "Rocket"], ["🪐", "Planet"], ["🌙", "Moon"], ["⭐", "Star"], ["☄️", "Comet"], ["👽", "Alien friend"], ["🛸", "Space ship"]],
  treats: [["🍦", "Ice cream"], ["🍩", "Doughnut"], ["🍓", "Strawberry"], ["🧁", "Cupcake"], ["🍉", "Watermelon"], ["🍪", "Cookie"], ["🍭", "Lollipop"]],
  rainbow: [["🌈", "Rainbow"], ["⚡", "Lightning"], ["🔥", "Fire"], ["💎", "Diamond"], ["👑", "Crown"], ["🏆", "Trophy"], ["🦄", "Unicorn"]],
};

export const STICKERS: Sticker[] = STICKER_SETS.flatMap((set) => ART[set.id].map(([art, name], i) => ({ id: `${set.id}-${i + 1}`, name, set: set.id, art })));

export const stickerById = Object.fromEntries(STICKERS.map((s) => [s.id, s])) as Record<string, Sticker>;
export const setById = Object.fromEntries(STICKER_SETS.map((s) => [s.id, s])) as Record<string, StickerSet>;

/**
 * Award a sticker for a reason. Safe to call repeatedly: each (reason, context)
 * pair awards at most once. Plays Questy's sticker line and shows a toast.
 */
export function awardExploreSticker(reason: StickerReason, context: string, opts: { silent?: boolean } = {}): Sticker | null {
  const st = useLearner.getState();
  const key = `sticker:${reason}:${context}`;
  if (st.items[key]) return null;
  st.markItem(key);
  const owned = st.stickers;
  const set = STICKER_SETS.find((s) => s.reason === reason)!;
  const pick = STICKERS.find((s) => s.set === set.id && !owned[s.id]) ?? STICKERS.find((s) => !owned[s.id]);
  if (!pick) return null;
  if (!useLearner.getState().awardSticker(pick.id)) return null;
  if (!opts.silent) {
    useUi.getState().toast({ text: `New sticker: ${pick.name}!` });
    say(EXPLORE_LINES.sticker);
  }
  return pick;
}

/** Convenience: award the streak sticker when the learner is on a 3+ day streak. */
export function checkStreakSticker(streak: number) {
  if (streak < 3) return null;
  return awardExploreSticker("streak", `${streak >= 7 ? "week" : "three"}:${dayKey()}`, { silent: true });
}
