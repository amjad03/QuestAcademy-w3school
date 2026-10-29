"use client";

/**
 * One live tutoring conversation: streams tutor turns, plays each step (voice +
 * board ops together), and runs the two-way voice loop — hands-free listening,
 * interim captions, barge-in (the student talks over the tutor → it stops and
 * answers the doubt, then resumes), push-to-talk and typed messages. Shared by
 * the full /tutor room and the quick "Ask Questy" panel.
 */

import { track } from "@/lib/analytics";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { SmartboardHandle } from "@/components/board/Smartboard";
import type { BoardOp } from "@/components/board/ops";
import type { CheckPoint, LiveRequest, TutorLanguage, TutorLevel, TutorPace } from "./live";
import { streamTurn, type LiveError } from "./live-client";
import { isPause, type Branch, type LiveEvent, type PlanConcept, type Stage, type Verdict } from "./protocol";
import { detectIntent, type Intent } from "./intents";
import { speaker, type VoiceSnapshot } from "./speech";
import { VoiceListener, recognitionSupported, type MicError } from "./listen";

export type Msg = { role: "user" | "assistant"; content: string };
export type VoiceState = "idle" | "listening" | "thinking" | "speaking";
export type LogLine = { who: "student" | "tutor"; text: string };
type Base = Omit<LiveRequest, "kind" | "messages" | "image" | "boardImage">;
export type Plan = { title: string; concepts: PlanConcept[] };
export type Progress = { concept: string; stage: Stage };
export type Evaluation = { verdict: Verdict; note: string; misconception?: string };

const words = (s: string) => s.trim().split(/\s+/).length;
const norm = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
/** Deictic doubts about the board ("what is this?", "yeh kya hai", "ಇದು ಏನು"). */
const POINTING = /\b(this|that|these|those|here|there|marked|circled|highlighted|drew|drawn|my working|check my)\b|yeh|ye kya|isko|iska|idhar|yahan|ಇದು|ಇಲ್ಲಿ|यह|इसे|यहाँ/i;
const STOP_WORDS = /\b(wait|stop|sorry|excuse me|one minute|question|doubt|ruko|ek minute|sir|ma'?am|miss)\b/i;

/** Keep the first exchange (it carries the context/photo transcription) and the most recent turns. */
export function trimHistory(m: Msg[]): Msg[] {
  return m.length <= 31 ? m : [...m.slice(0, 2), ...m.slice(m.length - 29)];
}

export function useTutorSession(o: { board: RefObject<SmartboardHandle | null>; pass: string | null; base: () => Base; speechLang: string; muted: boolean; onLanguage?: (l: TutorLanguage) => void }) {
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
  const [voice, setVoice] = useState<VoiceSnapshot>(() => speaker().snapshot());
  const [lessonReady, setLessonReady] = useState(false);
  const [log, setLog] = useState<LogLine[]>([]);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [branch, setBranch] = useState<Branch | null>(null);
  const [pace, setPace] = useState<TutorPace>("normal");
  const [level, setLevel] = useState<TutorLevel>("simple");
  const [lastIntent, setLastIntent] = useState<Intent | null>(null);
  const [waitingSince, setWaitingSince] = useState<number | null>(null);
  const misconceptions = useRef<string[]>([]);
  /** The question the current turn ends with, known as soon as it streams in (before it is read out). */
  const pendingAsk = useRef<CheckPoint | null>(null);
  const streamingRef = useRef(false);
  const tuning = useRef({ pace, level, plan, progress, done });
  tuning.current = { pace, level, plan, progress, done };
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
  useEffect(() => sp.subscribe(setVoice), [sp]);

  // Analytics: one session per mounted tutor room, and which voice engine it settled on.
  useEffect(() => {
    track("tutor_session_start", { mode: opts.current.base().mode });
    const t0 = Date.now();
    return () => track("tutor_session_end", { seconds: Math.round((Date.now() - t0) / 1000), turns: Math.floor(history.current.length / 2) });
  }, []);
  const reportedEngine = useRef(false);
  useEffect(() => {
    if (reportedEngine.current || (voice.status !== "ready" && voice.status !== "unavailable")) return;
    reportedEngine.current = true;
    track("voice_engine", { engine: voice.status === "ready" ? (voice.engine ?? "kokoro") : "device", cached: voice.cached ?? null });
  }, [voice.status, voice.cached]);

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

  /** Spoken text + its board ops, drawn across the narration like a teacher writing while talking. */
  const sayAndDraw = useCallback(
    async (text: string, ops: BoardOp[], my: number, caption = true) => {
      // A question is shown in the question card, so it isn't repeated in the caption.
      if (caption) setCaption(text);
      if (text) {
        recent.current = [...recent.current.slice(-2), text];
        setLog((l) => [...l.slice(-80), { who: "tutor", text }]);
        says.current.push({ at: Math.round(performance.now() - started.current), text });
      }
      const talk = speak(text, my);
      const k = tuning.current.pace === "slower" ? 1.5 : tuning.current.pace === "faster" ? 0.6 : 1;
      const gap = (Math.min(900, (Math.max(1200, words(text) * 430) * 0.7) / Math.max(1, ops.length))) * k;
      for (const op of ops) {
        if (my !== token.current) return;
        await o.board.current?.apply(op);
        await new Promise((r) => setTimeout(r, gap * 0.4));
      }
      await talk;
    },
    [speak, o.board],
  );

  const playEvent = useCallback(
    async (e: LiveEvent, my: number) => {
      if (my !== token.current) return;
      played.current.push(JSON.stringify(e));
      switch (e.t) {
        case "plan":
          setPlan({ title: e.title, concepts: e.concepts });
          return;
        case "progress":
          setProgress((prev) => {
            if (prev && prev.concept !== e.concept) setDone((d) => (d.includes(prev.concept) ? d : [...d, prev.concept]));
            return { concept: e.concept, stage: e.stage };
          });
          if (e.stage === "recap") setDone((d) => (d.includes(e.concept) ? d : [...d, e.concept]));
          return;
        case "evaluate":
          setEvaluation({ verdict: e.verdict, note: e.note, misconception: e.misconception });
          if (e.misconception) {
            setMisconception(e.misconception);
            misconceptions.current.push(e.misconception);
          }
          if (e.note) setLog((l) => [...l.slice(-80), { who: "tutor", text: `${e.verdict === "correct" ? "✓" : e.verdict === "partial" ? "½" : e.verdict === "misconception" ? "✗" : "?"} ${e.note}` }]);
          return;
        case "branch":
          setBranch(e.to);
          return;
        case "board":
          for (const op of e.ops) {
            if (my !== token.current) return;
            await o.board.current?.apply(op);
          }
          return;
        case "say":
          return sayAndDraw(e.text, e.ops, my);
        case "hint":
          await sayAndDraw(e.text, e.ops, my);
          if (my !== token.current) return;
          setHintWait(true);
          setCheck({ q: "", kind: "short" });
          setWaitingSince(Date.now());
          return;
        case "ask": {
          await sayAndDraw(e.q, [], my, false);
          if (my !== token.current) return;
          const c: CheckPoint = { q: e.q, options: e.options, kind: e.kind, board: e.kind === "board" || undefined };
          setCheck(c);
          setWaitingSince(Date.now());
          if (e.kind === "board") o.board.current?.setTurn(e.q);
          return;
        }
        case "end":
          setEnded(true);
          setCheck({ q: "" });
          if (tuning.current.progress) setDone((d) => (d.includes(tuning.current.progress!.concept) ? d : [...d, tuning.current.progress!.concept]));
          return;
      }
    },
    [sayAndDraw, o.board],
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
    streamingRef.current = false;
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
      setEvaluation(null);
      setBranch(null);
      setWaitingSince(null);
      opts.current.board.current?.setTurn(null);
      setStreaming(true);
      setPlaying(true);
      played.current = [];
      // The full-screen loader holds playback (board + voice) until Kokoro is ready, so the
      // first lesson isn't narrated by the device voice; the lesson streams in meanwhile.
      if (sp.hold && sp.status === "loading") play.current = play.current.then(() => sp.settled());
      inFlight.current = true;
      history.current = trimHistory([...history.current, { role: "user", content }]);
      const ctrl = new AbortController();
      abort.current = ctrl;
      let gotPause = false;
      const lang = opts.current.speechLang;
      const b = opts.current.base();
      const tu = tuning.current;
      const planLine = tu.plan
        ? tu.plan.concepts.map((c) => `${c.id} ${c.title}${tu.done.includes(c.id) ? " ✓" : tu.progress?.concept === c.id ? ` ← ${tu.progress.stage}` : ""}`).join(", ")
        : undefined;
      const req = {
        ...b,
        session: { ...b.session, pace: tu.pace, level: tu.level, elapsed: Math.round((performance.now() - started.current) / 60000), plan: planLine },
        messages: history.current,
        image: extra.image,
        boardImage: extra.boardImage,
      };
      pendingAsk.current = null;
      streamingRef.current = true;
      const onEvent = (e: LiveEvent) => {
        if (e.t === "ask" && !gotPause) pendingAsk.current = { q: e.q, options: e.options, kind: e.kind, board: e.kind === "board" || undefined };
        if (isPause(e)) gotPause = true;
        if (gotPause && !isPause(e) && e.t !== "evaluate") return; // nothing may follow a pause
        setLessonReady(true);
        const spoken = e.t === "say" || e.t === "hint" ? e.text : e.t === "ask" ? e.q : "";
        if (spoken && !opts.current.muted) sp.prefetch(spoken, lang);
        play.current = play.current.then(() => playEvent(e, my));
      };
      let res = await streamTurn(req, opts.current.pass, onEvent, ctrl.signal);
      // Recovery: a reply with nothing usable in it is retried once, silently.
      if (res.ok && res.events === 0 && my === token.current) res = await streamTurn(req, opts.current.pass, onEvent, ctrl.signal);
      if (my === token.current) streamingRef.current = false;
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
      if ((res.broken || res.events === 0) && !played.current.length) setError("upstream_error");
      else if (!gotPause) {
        setCheck({ q: "" });
        setWaitingSince(Date.now());
      }
    },
    [halt, playEvent, sp],
  );

  /** Route something the student said or typed, with the right tag (and a board snapshot when it's about the board). */
  const ask = useCallback(
    (raw: string, how: { forceBoard?: boolean; tag?: string } = {}): void => {
      const text = raw.trim();
      if (!text && !how.tag) return;
      const L = live.current;
      // Explicit intents ("wait", "explain again", "slower", "in Hindi"…) get handled as such.
      const it = how.tag ? null : detectIntent(text);
      if (it) {
        setLastIntent(it.intent);
        if (it.intent === "wait") {
          // Pause right here, no round trip: the tutor waits for the student's question.
          interrupted.current = false;
          if (L.busy) halt();
          setCaption("");
          setCheck({ q: "" });
          setWaitingSince(Date.now());
          setLog((l) => [...l.slice(-80), { who: "student", text }]);
          return;
        }
        if (it.intent === "slower" || it.intent === "faster") setPace((p) => (it.intent === "slower" ? (p === "faster" ? "normal" : "slower") : p === "slower" ? "normal" : "faster"));
        if (it.intent === "simpler") setLevel("simple");
        if (it.intent === "exam") setLevel("exam");
        if (it.intent === "language" && it.language) opts.current.onLanguage?.(it.language);
        const answering = Boolean(L.check?.q) && !L.busy;
        if (!(it.intent === "continue" && answering)) {
          const tag = it.intent === "continue" ? "[continue]" : it.intent === "solution" ? "[solution]" : `[intent:${it.intent}]`;
          const extra = it.intent === "language" ? ` (switch to ${it.language})` : "";
          return askRef.current(`${text}${extra}`, { tag });
        }
      }
      // Answering the question while it is still being read out is an answer, not an interruption.
      const early = L.busy && !streamingRef.current && pendingAsk.current ? pendingAsk.current : null;
      const interrupting = !early && (L.busy || interrupted.current);
      interrupted.current = false;
      const wasSaying = recent.current[recent.current.length - 1] ?? "";
      const board = opts.current.board.current;
      const wantsBoard = how.forceBoard || (board?.newMarks() ?? 0) > 0 || POINTING.test(text) || Boolean(L.check?.board) || Boolean(pendingAsk.current?.board && L.busy);
      const snap = wantsBoard ? board?.snapshot() : null;
      const chk = early ?? L.check;
      let tag = how.tag ?? (interrupting ? "[interrupt]" : chk?.board && snap ? "[board-work]" : snap?.marks ? "[board]" : chk?.q ? (L.mode === "explainback" ? "[explanation]" : "[answer]") : "[say]");
      if (how.tag === "[board-work]" && !snap) tag = "[say]";
      let content = `${tag} ${text}`.trim();
      if (interrupting && wasSaying) content += `\n(I interrupted you while you were saying: "${wasSaying.slice(0, 240)}")`;
      if (snap) content += `\n\n[board snapshot attached]\nOn the board:\n${snap.desc || "(empty)"}${snap.marks ? `\nThe student's marks:\n${snap.marks}` : ""}`;
      if (text) setLog((l) => [...l.slice(-60), { who: "student", text }]);
      void send(content.slice(0, 11000), snap?.data ? { boardImage: { mediaType: snap.mediaType, data: snap.data } } : {});
    },
    [send],
  );

  const askRef = useRef(ask);
  askRef.current = ask;

  /** A one-tap intent from the chips row. */
  const intent = useCallback(
    (i: Intent, language?: TutorLanguage) => {
      const say: Record<Intent, string> = {
        wait: "Wait",
        continue: "Continue",
        confused: "I didn't get this",
        repeat: "Explain that again",
        example: "Give me an example",
        slower: "Go slower",
        faster: "Go faster",
        simpler: "Explain it more simply",
        exam: "Take it to exam level",
        hint: "Give me a hint",
        solution: "Show the full solution",
        language: `Explain in ${language ?? "English"}`,
      };
      askRef.current(say[i]);
    },
    [],
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
    setLessonReady(false);
    started.current = performance.now();
    play.current = Promise.resolve();
    setCaption("");
    setCheck(null);
    setEnded(false);
    setHintWait(false);
    setMisconception(null);
    setError(null);
    setLog([]);
    setPlan(null);
    setProgress(null);
    setDone([]);
    setEvaluation(null);
    setBranch(null);
    setWaitingSince(null);
    setLastIntent(null);
    misconceptions.current = [];
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
    lessonReady,
    log,
    plan,
    progress,
    done,
    evaluation,
    branch,
    pace,
    tutorLevel: level,
    setPace,
    setLevel,
    lastIntent,
    waitingSince,
    intent,
    started,
    misconceptions,
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
    useDeviceVoice: () => sp.useDevice(),
    setVoiceGender: (g: "female" | "male") => sp.setGender(g),
    level: () => sp.level(),
  };
}

export type TutorSession = ReturnType<typeof useTutorSession>;
