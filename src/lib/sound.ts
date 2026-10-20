"use client";

/**
 * Tiny synthesised sound effects (no audio files). Respects the learner's
 * "sound" setting, which is read lazily from localStorage to avoid a circular
 * import with the store.
 */

type Sfx = "correct" | "wrong" | "coin" | "levelup" | "fanfare" | "tap" | "flip" | "pop";

let ctx: AudioContext | null = null;

function enabled() {
  try {
    const raw = localStorage.getItem("quest-academy");
    if (!raw) return true;
    return JSON.parse(raw)?.state?.settings?.sound !== false;
  } catch {
    return true;
  }
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = "sine", gain = 0.12) {
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, ctx.currentTime + start);
  g.gain.setValueAtTime(0, ctx.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
  o.connect(g).connect(ctx.destination);
  o.start(ctx.currentTime + start);
  o.stop(ctx.currentTime + start + dur + 0.05);
}

export function sfx(kind: Sfx) {
  if (typeof window === "undefined" || !enabled()) return;
  try {
    ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === "suspended") void ctx.resume();
    switch (kind) {
      case "correct":
        tone(660, 0, 0.12, "triangle");
        tone(990, 0.08, 0.2, "triangle");
        break;
      case "wrong":
        tone(220, 0, 0.18, "sawtooth", 0.06);
        tone(180, 0.1, 0.22, "sawtooth", 0.06);
        break;
      case "coin":
        tone(1320, 0, 0.08, "square", 0.04);
        tone(1760, 0.06, 0.16, "square", 0.04);
        break;
      case "levelup":
        [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.25, "triangle"));
        break;
      case "fanfare":
        [392, 523, 659, 784, 659, 784].forEach((f, i) => tone(f, i * 0.08, 0.2, "triangle", 0.1));
        break;
      case "tap":
        tone(880, 0, 0.05, "sine", 0.05);
        break;
      case "flip":
        tone(500, 0, 0.06, "sine", 0.05);
        tone(700, 0.04, 0.06, "sine", 0.05);
        break;
      case "pop":
        tone(300, 0, 0.08, "sine", 0.1);
        tone(600, 0.03, 0.08, "sine", 0.08);
        break;
    }
  } catch {
    /* audio not available */
  }
}

/** Read text aloud with the Web Speech API. Returns false if unsupported. */
export function speak(text: string, opts: { rate?: number; pitch?: number; onEnd?: () => void } = {}) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = opts.rate ?? 1;
  u.pitch = opts.pitch ?? 1;
  if (opts.onEnd) u.onend = opts.onEnd;
  window.speechSynthesis.speak(u);
  return true;
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}
