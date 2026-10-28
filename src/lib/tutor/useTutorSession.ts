"use client";

/**
 * One live tutoring conversation: streams tutor turns, plays each step (voice +
 * board ops together), and runs the two-way voice loop — hands-free listening,
 * interim captions, barge-in (the student talks over the tutor → it stops and
 * answers the doubt, then resumes), push-to-talk and typed messages. Shared by
 * the full /tutor room and the quick "Ask Questy" panel.
 */

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { SmartboardHandle } from "@/components/board/Smartboard";
import type { CheckPoint, LiveRequest, LiveStep } from "./live";
import { streamTurn, type LiveError } from "./live-client";
import { speaker, type VoiceEngineStatus } from "./speech";
import { VoiceListener, recognitionSupported, type MicError } from "./listen";

export type Msg = { role: "user" | "assistant"; content: string };
export type VoiceState = "idle" | "listening" | "thinking" | "speaking";
export type LogLine = { who: "student" | "tutor"; text: string };
type Base = Omit<LiveRequest, "kind" | "messages" | "image" | "boardImage">;

const words = (s: string) => s.trim().split(/\s+/).length;
const norm = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
/** Deictic doubts about the board ("what is this?", "yeh kya hai", "ಇದು ಏನು"). */
const POINTING = /\b(this|that|these|those|here|there|marked|circled|highlighted|drew|drawn|my working|check my)\b|yeh|ye kya|isko|iska|idhar|yahan|ಇದು|ಇಲ್ಲಿ|यह|इसे|यहाँ/i;
const STOP_WORDS = /\b(wait|stop|sorry|excuse me|one minute|question|doubt|ruko|ek minute|sir|ma'?am|miss)\b/i;

/** Keep the first exchange (it carries the context/photo transcription) and the most recent turns. */
export function trimHistory(m: Msg[]): Msg[] {
  return m.length <= 31 ? m : [...m.slice(0, 2), ...m.slice(m.length - 29)];
}

export function useTutorSession(o: { board: RefObject<SmartboardHandle | null>; pass: string | null; base: () => Base; speechLang: string; muted: boolean }) {
  const [caption, setCaption] = useState("");
  const [check, setCheck] = useState<CheckPoint | null>(null);
  const [hintWait, setHintWait] = useState(false);
  const [ended, setEnded] = useState(false);
  const [misconception, setMisconception] = useState<string | null>(null);
  const [error, setError] = useState<LiveError | null>(null);
  const [retryAfter, setRetryAfter] = useState<number | null>(null);
  const [streaming, setStreaming] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [talking, setTalking] = useState(false);
  const [handsFree, setHandsFree] = useState(false);
  const [hearing, setHearing] = useState(false);
  const [ptt, setPtt] = useState(false);
  const [interim, setInterim] = useState("");
  const [micError, setMicError] = useState<MicError | null>(null);
  const [voice, setVoice] = useState<{ status: VoiceEngineStatus; progress: number }>({ status: "off", progress: 0 });
  const [log, setLog] = useState<LogLine[]>([]);
  const [available, setAvailable] = useState<boolean | null>(null);
  const availableRef = useRef(available);
  availableRef.current = available;

  const history = useRef<Msg[]>([]);
  const says = useRef<{ at: number; text: string }[]>([]);
  const started = useRef(performance.now());
  const play = useRef<Promise<void>>(Promise.resolve());
  const token = useRef(0);
  const abort = useRef<AbortController | null>(null);
  const played = useRef<string[]>([]);
  const inFlight = useRef(false);
  const recent = useRef<string[]>([]);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const interrupted = useRef(false);
  /** Until when mic input may be the tutor's own voice (speaking now, or just finished). */
  const echoUntil = useRef(0);
  const live = useRef({ check, busy: false, mode: "learn" as Base["mode"] });
  const opts = useRef(o);
  opts.current = o;
  live.current = { check, busy: streaming || playing, mode: o.base().mode };

  const sp = speaker();
  useEffect(() => sp.subscribe((status, progress) => setVoice({ status, progress })), [sp]);

  // Is the tutor configured on this server? (No key → explain instead of failing on the first question.)
  useEffect(() => {
    let off = false;
    fetch("/api/tutor/live", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { available: false }))
      .then((j: { available?: boolean }) => !off && setAvailable(j.available !== false))
      .catch(() => !off && setAvailable(null));
    return () => {
      off = true;
    };
  }, []);

  /* ---------------- playing steps ---------------- */

  const speak = useCallback(
    async (text: string, my: number) => {
      if (!text.trim()) return;
      if (opts.current.muted) return new Promise<void>((r) => setTimeout(r, Math.max(900, words(text) * 260)));
      setTalking(true);
      echoUntil.current = Infinity;
      try {
        await sp.speak(text, opts.current.speechLang);
      } finally {
        echoUntil.current = performance.now() + 1500;
        if (my === token.current) setTalking(false);
      }
    },
    [sp],
  );

  const playStep = useCallback(
    async (step: LiveStep, my: number) => {
      if (my !== token.current) return;
      played.current.push(JSON.stringify({ say: step.say, ops: step.ops, ...(step.check ? { check: step.check } : {}) }));
      setCaption(step.say);
      if (step.say) {
        recent.current = [...recent.current.slice(-2), step.say];
        setLog((l) => [...l.slice(-60), { who: "tutor", text: step.say }]);
      }
      if (step.misconception) setMisconception(step.misconception);
      says.current.push({ at: Math.round(performance.now() - started.current), text: step.say });
      const talk = speak(step.say, my);
      // Spread the drawing across the narration, like a teacher writing while talking.
      const gap = Math.min(900, (Math.max(1200, words(step.say) * 430) * 0.7) / Math.max(1, step.ops.length));
      for (const op of step.ops) {
        if (my !== token.current) return;
        await o.board.current?.apply(op);
        await new Promise((r) => setTimeout(r, gap * 0.4));
      }
      await talk;
      if (my !== token.current) return;
      if (step.check) setCheck(step.check);
      if (step.hint) setHintWait(true);
      if (step.end) setEnded(true);
    },
    [speak, o.board],
  );

  /** Stop everything the tutor is doing right now; keeps what was already said in the history. */
  const halt = useCallback(() => {
    token.current++;
    abort.current?.abort();
    sp.stop();
    echoUntil.current = performance.now() + 800;
    setTalking(false);
    setPlaying(false);
    setStreaming(false);
    play.current = Promise.resolve();
    if (inFlight.current) {
      inFlight.current = false;
      history.current.push({ role: "assistant", content: played.current.join("\n") || '{"say":"(interrupted)","ops":[]}' });
    }
  }, [sp]);

  /* ---------------- sending ---------------- */

  const send = useCallback(
    async (content: string, extra: { image?: LiveRequest["image"]; boardImage?: LiveRequest["boardImage"] } = {}) => {
      if (inFlight.current) halt();
      clearTimeout(resumeTimer.current);
      // Known to be switched off on this server: say so without a failing request.
      if (availableRef.current === false) {
        setError("tutor_unavailable");
        return;
      }
      const my = ++token.current;
      setError(null);
      setRetryAfter(null);
      setCheck(null);
      setHintWait(false);
      setMisconception(null);
      setStreaming(true);
      setPlaying(true);
      played.current = [];
      inFlight.current = true;
      history.current = trimHistory([...history.current, { role: "user", content }]);
      const ctrl = new AbortController();
      abort.current = ctrl;
      let gotPause = false;
      const lang = opts.current.speechLang;
      const res = await streamTurn(
        { ...opts.current.base(), messages: history.current, image: extra.image, boardImage: extra.boardImage },
        opts.current.pass,
        (step) => {
          if (step.check || step.hint || step.end) gotPause = true;
          if (!opts.current.muted) sp.prefetch(step.say, lang);
          play.current = play.current.then(() => playStep(step, my));
        },
        ctrl.signal,
      );
      if (my !== token.current) return;
      setStreaming(false);
      if (!res.ok) {
        inFlight.current = false;
        history.current = history.current.slice(0, -1);
        setPlaying(false);
        setError(res.code);
        setRetryAfter(res.retryAfter ?? null);
        return;
      }
      await play.current;
      if (my !== token.current) return;
      inFlight.current = false;
      history.current.push({ role: "assistant", content: res.raw || '{"say":"","ops":[]}' });
      setPlaying(false);
      if (res.broken && !played.current.length) setError("upstream_error");
      else if (!gotPause) setCheck({ q: "" });
    },
    [halt, playStep, sp],
  );

  /** Route something the student said or typed, with the right tag (and a board snapshot when it's about the board). */
  const ask = useCallback(
    (raw: string, how: { forceBoard?: boolean; tag?: string } = {}) => {
      const text = raw.trim();
      if (!text && !how.tag) return;
      const L = live.current;
      const interrupting = L.busy || interrupted.current;
      interrupted.current = false;
      const wasSaying = recent.current[recent.current.length - 1] ?? "";
      const board = opts.current.board.current;
      const wantsBoard = how.forceBoard || (board?.newMarks() ?? 0) > 0 || POINTING.test(text) || Boolean(L.check?.board);
      const snap = wantsBoard ? board?.snapshot() : null;
      let tag = how.tag ?? (interrupting ? "[interrupt]" : L.check?.board && snap ? "[board-work]" : snap?.marks ? "[board]" : L.check?.q ? (L.mode === "explainback" ? "[explanation]" : "[answer]") : "[say]");
      if (how.tag === "[board-work]" && !snap) tag = "[say]";
      let content = `${tag} ${text}`.trim();
      if (interrupting && wasSaying) content += `\n(I interrupted you while you were saying: "${wasSaying.slice(0, 240)}")`;
      if (snap) content += `\n\n[board snapshot attached]\nOn the board:\n${snap.desc || "(empty)"}${snap.marks ? `\nThe student's marks:\n${snap.marks}` : ""}`;
      if (text) setLog((l) => [...l.slice(-60), { who: "student", text }]);
      void send(content.slice(0, 11000), snap?.data ? { boardImage: { mediaType: snap.mediaType, data: snap.data } } : {});
    },
    [send],
  );

  /* ---------------- voice loop ---------------- */

  const isEcho = (heard: string) => {
    if (performance.now() > echoUntil.current) return false;
    const h = norm(heard);
    if (!h.length) return true;
    const said = new Set(norm(recent.current.join(" ")));
    const hits = h.filter((w) => said.has(w)).length;
    return hits / h.length >= 0.6;
  };

  const onInterim = useCallback(
    (text: string) => {
      setInterim(text);
      // Barge-in: real student speech (not the tutor's own voice coming back through the mic) stops the tutor at once.
      if (!live.current.busy || interrupted.current) return;
      const n = norm(text).length;
      if ((n >= 2 || STOP_WORDS.test(text)) && !isEcho(text)) {
        interrupted.current = true;
        halt();
        setCaption("");
        // If they stop without finishing a sentence, pick the lesson back up.
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => {
          if (interrupted.current) ask("Sorry, go on — please continue.", { tag: "[say]" });
        }, 6000);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [halt],
  );
  const onFinal = useCallback(
    (text: string) => {
      setInterim("");
      // The tutor's own voice picked up by the mic is not a question.
      if (!interrupted.current && isEcho(text)) return;
      clearTimeout(resumeTimer.current);
      ask(text);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ask],
  );

  const handsListener = useRef<VoiceListener | null>(null);
  const pttListener = useRef<VoiceListener | null>(null);
  const handlers = useRef({ onInterim, onFinal });
  handlers.current = { onInterim, onFinal };

  const toggleHandsFree = useCallback(() => {
    sp.unlock();
    if (handsListener.current?.active) {
      handsListener.current.stop();
      setHandsFree(false);
      setInterim("");
      return;
    }
    pttListener.current?.stop();
    setMicError(null);
    const l = new VoiceListener({
      lang: opts.current.speechLang,
      onInterim: (t) => handlers.current.onInterim(t),
      onFinal: (t) => handlers.current.onFinal(t),
      onActive: setHearing,
      onError: (e) => {
        setMicError(e);
        if (e !== "network") setHandsFree(false);
      },
    });
    handsListener.current = l;
    setHandsFree(true);
    l.start();
  }, [sp]);

  /** Tap to talk once (also interrupts the tutor straight away). */
  const pushToTalk = useCallback(() => {
    sp.unlock();
    if (pttListener.current?.active) return pttListener.current.stop();
    if (handsListener.current?.active) {
      handsListener.current.stop();
      setHandsFree(false);
    }
    if (live.current.busy) {
      interrupted.current = true;
      halt();
    }
    setMicError(null);
    const l = new VoiceListener({
      lang: opts.current.speechLang,
      once: true,
      onInterim: (t) => setInterim(t),
      onFinal: (t) => {
        setInterim("");
        ask(t);
      },
      onActive: setPtt,
      onError: setMicError,
    });
    pttListener.current = l;
    l.start();
  }, [sp, halt, ask]);

  useEffect(() => {
    handsListener.current?.setLang(o.speechLang);
  }, [o.speechLang]);

  /** "Wait, I have a doubt": stop the tutor and wait for the student's question. */
  const raiseHand = useCallback(() => {
    if (!live.current.busy) return;
    interrupted.current = true;
    halt();
    setCheck({ q: "" });
  }, [halt]);

  /** Begin a fresh session (board + history). */
  const reset = useCallback(() => {
    halt();
    inFlight.current = false;
    history.current = [];
    says.current = [];
    recent.current = [];
    played.current = [];
    started.current = performance.now();
    play.current = Promise.resolve();
    setCaption("");
    setCheck(null);
    setEnded(false);
    setHintWait(false);
    setMisconception(null);
    setError(null);
    setLog([]);
  }, [halt]);

  const stopAll = useCallback(() => {
    halt();
    clearTimeout(resumeTimer.current);
    handsListener.current?.stop();
    pttListener.current?.stop();
    setHandsFree(false);
    setInterim("");
  }, [halt]);

  useEffect(
    () => () => {
      token.current++;
      abort.current?.abort();
      clearTimeout(resumeTimer.current);
      handsListener.current?.stop();
      pttListener.current?.stop();
      speaker().stop();
    },
    [],
  );

  const busy = streaming || playing;
  const state: VoiceState = talking ? "speaking" : busy ? "thinking" : (handsFree && hearing) || ptt ? "listening" : "idle";

  return {
    caption,
    check,
    hintWait,
    ended,
    misconception,
    error,
    retryAfter,
    streaming,
    busy,
    state,
    interim,
    handsFree,
    ptt,
    micError,
    micSupported: recognitionSupported(),
    voice,
    log,
    available,
    history,
    says,
    send,
    ask,
    halt,
    raiseHand,
    reset,
    stopAll,
    toggleHandsFree,
    pushToTalk,
    unlock: () => sp.unlock(),
    preloadVoice: () => sp.preload(),
    level: () => sp.level(),
  };
}

export type TutorSession = ReturnType<typeof useTutorSession>;
