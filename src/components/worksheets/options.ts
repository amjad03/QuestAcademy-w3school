/** Worksheet options shared by the server page and the client toolbar (no content imports). */

export const COUNTS = [10, 15, 20] as const;
export const DEFAULT_COUNT = 15;
/** A unit needs at least this many questions to get a worksheet. */
export const MIN_QUESTIONS = 4;
export const LETTERS = "abcdefghijklmnop";

export function parseCount(v: string | string[] | undefined) {
  const n = Number(Array.isArray(v) ? v[0] : v);
  return (COUNTS as readonly number[]).includes(n) ? n : DEFAULT_COUNT;
}

/** 0 = lesson order; 1..9999 = a deterministic shuffle. */
export function parseSeed(v: string | string[] | undefined) {
  const n = Math.floor(Number(Array.isArray(v) ? v[0] : v));
  return Number.isFinite(n) && n > 0 ? Math.min(n, 9999) : 0;
}

export function worksheetHref(subject: string, topic: string) {
  return `/worksheets/${subject}/${topic}`;
}
