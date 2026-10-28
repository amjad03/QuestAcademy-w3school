"use client";

/**
 * Hands-free listening with the Web Speech API: keeps the recogniser running
 * (restarting it after silences and Chrome's ~60 s cut-off), reports interim
 * captions as they come, and hands over a finished utterance after a short
 * pause. Android Chrome's continuous mode repeats results, so there it listens
 * one utterance at a time and restarts.
 */

export type MicError = "denied" | "unsupported" | "network";

interface Alt {
  transcript: string;
}
interface Result extends ArrayLike<Alt> {
  isFinal: boolean;
}
interface Recognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<Result> }) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onspeechstart: (() => void) | null;
}

export function recognitionSupported() {
  if (typeof window === "undefined") return false;
  const w = window as unknown as Record<string, unknown>;
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}

export interface ListenerOpts {
  lang: string;
  /** Stop after one utterance (push-to-talk). */
  once?: boolean;
  onInterim: (text: string) => void;
  onFinal: (text: string) => void;
  onActive: (on: boolean) => void;
  onError: (e: MicError) => void;
}

export class VoiceListener {
  private rec: Recognition | null = null;
  private want = false;
  private finals = "";
  private flushTimer: ReturnType<typeof setTimeout> | undefined;
  private restarts: number[] = [];
  private netErrors = 0;
  lastHeard = 0;

  constructor(private o: ListenerOpts) {}

  get active() {
    return this.want;
  }

  setLang(lang: string) {
    if (lang === this.o.lang) return;
    this.o.lang = lang;
    if (this.rec) this.rec.abort(); // restarts with the new language
  }

  start() {
    if (!recognitionSupported()) return this.o.onError("unsupported");
    this.want = true;
    this.netErrors = 0;
    this.boot();
  }

  stop() {
    this.want = false;
    clearTimeout(this.flushTimer);
    const r = this.rec;
    this.rec = null;
    try {
      r?.stop();
    } catch {
      /* not running */
    }
    this.flush();
    this.o.onActive(false);
  }

  private boot() {
    if (!this.want || this.rec) return;
    const w = window as unknown as Record<string, new () => Recognition>;
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    const rec = new Ctor();
    const android = /Android/i.test(navigator.userAgent);
    rec.lang = this.o.lang;
    rec.interimResults = true;
    rec.continuous = !android && !this.o.once;
    rec.maxAlternatives = 1;
    let interim = "";
    rec.onresult = (e) => {
      interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        const txt = r[0]?.transcript ?? "";
        if (r.isFinal) this.finals = `${this.finals} ${txt}`.trim();
        else interim += txt;
      }
      this.lastHeard = performance.now();
      this.o.onInterim(`${this.finals} ${interim}`.trim());
      clearTimeout(this.flushTimer);
      // A short pause after a final result ends the utterance.
      if (this.finals && !interim) this.flushTimer = setTimeout(() => this.flush(), 750);
    };
    rec.onspeechstart = () => (this.lastHeard = performance.now());
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") {
        this.want = false;
        this.o.onError("denied");
      } else if (e.error === "network") {
        if (++this.netErrors >= 3) {
          this.want = false;
          this.o.onError("network");
        }
      }
      // "no-speech" / "aborted": just restart.
    };
    rec.onend = () => {
      if (this.rec === rec) this.rec = null;
      if (interim && !this.finals) this.finals = interim; // some browsers end without a final
      this.flush();
      if (this.want && !this.o.once) {
        const now = Date.now();
        this.restarts = this.restarts.filter((t) => now - t < 10000);
        this.restarts.push(now);
        setTimeout(() => this.boot(), this.restarts.length > 8 ? 2000 : 150);
      } else {
        this.want = false;
        this.o.onActive(false);
      }
    };
    this.rec = rec;
    try {
      rec.start();
      this.o.onActive(true);
    } catch {
      this.rec = null;
      setTimeout(() => this.boot(), 400);
    }
  }

  private flush() {
    clearTimeout(this.flushTimer);
    const text = this.finals.trim();
    this.finals = "";
    if (text) this.o.onFinal(text);
    if (this.o.once && text) this.stop();
  }
}
