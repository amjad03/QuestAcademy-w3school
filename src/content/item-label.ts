import type { ItemKind } from "./course";

/** Kept apart from course.ts so client components can use it without bundling every lesson. */
export const ITEM_LABEL: Record<ItemKind, string> = {
  video: "Video",
  article: "Article",
  practice: "Practice",
  cards: "Flashcards",
  challenge: "Coding challenge",
};
