"use client";

/**
 * Per-turn voice latency marks for the `?debug=1` overlay: when the student stopped speaking
 * (speechEnd), when the transcript was handed over (final), the first streamed token, and the
 * first tutor audio. Each mark is set once per turn; `latBegin` starts a new turn.
 */

export type LatKey = "speechEnd" | "final" | "token" | "audio";
export type Lat = Partial<Record<LatKey, number>>;

let cur: Lat = {};
let armed = false;
const subs = new Set<(l: Lat) => void>();
const emit = () => subs.forEach((f) => f({ ...cur }));

let speechEnd = 0;

export function latMark(k: LatKey, at = performance.now()) {
  if (k === "speechEnd") {
    speechEnd = at; // remembered until the turn begins
    return;
  }
  if (!armed || cur[k] !== undefined) return;
  cur[k] = Math.round(at);
  if (k === "audio") armed = false;
  emit();
}

/** A student turn was sent: start timing it. */
export function latBegin() {
  const now = performance.now();
  cur = { speechEnd: speechEnd && now - speechEnd < 10000 ? Math.round(speechEnd) : undefined, final: Math.round(now) };
  speechEnd = 0;
  armed = true;
  emit();
}

export function latSubscribe(f: (l: Lat) => void) {
  subs.add(f);
  return () => void subs.delete(f);
}

export const debugOn = () => typeof window !== "undefined" && /[?&]debug=1\b/.test(window.location.search);
