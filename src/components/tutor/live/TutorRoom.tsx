"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import katex from "katex";
import { Camera, CircleHelp, Lightbulb, Loader2, Mic, MicOff, Play, RotateCcw, Send, Square, Volume2, VolumeX } from "lucide-react";
import { useLocale, useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useNotebook } from "@/lib/notebook-store";
import { say, stopVoice } from "@/lib/voice";
import { Smartboard, type SmartboardHandle, type TappedElement } from "@/components/board/Smartboard";
import { TUTOR_LANGUAGES, type CheckPoint, type LiveMode, type LiveStep, type Recap, type TutorLanguage } from "@/lib/tutor/live";
import { fetchRecap, languageForLocale, listen, photoToBase64, recognitionSupported, speechLang, streamTurn, studentInfo, type LiveError } from "@/lib/tutor/live-client";
import { useBoards } from "@/lib/tutor/board-store";

type Msg = { role: "user" | "assistant"; content: string };
type Phase = "setup" | "teaching" | "waiting" | "recap" | "replay";

const words = (s: string) => s.trim().split(/\s+/).length;

/** Keep the first exchange (it carries the context/photo transcription) and the most recent turns. */
function trimHistory(m: Msg[]): Msg[] {
  return m.length <= 31 ? m : [...m.slice(0, 2), ...m.slice(m.length - 29)];
}

export function TutorRoom({ pass }: { pass: string | null }) {
  const t = useT();
  const locale = useLocale();
  const params = useSearchParams();
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);
  const addDoubt = useNotebook((s) => s.addDoubt);
  const { boards, save: saveBoard } = useBoards();

  const [phase, setPhase] = useState<Phase>("setup");
  const [topic, setTopic] = useState(params.get("topic") ?? "");
  const [mode, setMode] = useState<LiveMode>(params.get("mode") === "doubt" ? "doubt" : params.get("mode") === "explainback" ? "explainback" : "learn");
  const [language, setLanguage] = useState<TutorLanguage>(languageForLocale(locale));
  const [photo, setPhoto] = useState<{ mediaType: "image/jpeg"; data: string; preview: string } | null>(null);
  const [caption, setCaption] = useState("");
  const [check, setCheck] = useState<CheckPoint | null>(null);
  const [hintWait, setHintWait] = useState(false);
  const [ended, setEnded] = useState(false);
  const [misconception, setMisconception] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<LiveError | null>(null);
  const [muted, setMuted] = useState(false);
  const [listening, setListening] = useState<null | (() => void)>(null);
  const [recap, setRecap] = useState<Recap | null>(null);
  const [savingRecap, setSavingRecap] = useState(false);

  const board = useRef<SmartboardHandle>(null);
  const history = useRef<Msg[]>([]);
  const says = useRef<{ at: number; text: string }[]>([]);
  const started = useRef(0);
  const play = useRef<Promise<void>>(Promise.resolve());
  const token = useRef(0);
  const mutedRef = useRef(muted);
  mutedRef.current = muted;
  const explainers = useRef<{ id: string; title: string }[]>([]);
  const sessionId = useRef("");

  useEffect(() => () => {
    token.current++;
    stopVoice();
  }, []);

  /** Speak a step and resolve when done (with a time-out in case the voice never reports back). */
  const speak = useCallback(
    (text: string) =>
      new Promise<void>((resolve) => {
        if (!text.trim()) return resolve();
        const est = Math.max(1200, words(text) * 430);
        if (mutedRef.current) return void setTimeout(resolve, est * 0.6);
        const timer = setTimeout(resolve, est + 3500);
        const lang = language === "Hindi" || language === "Kannada" ? speechLang(language) : undefined;
        say(text, { lang, onEnd: () => (clearTimeout(timer), resolve()) });
      }),
    [language],
  );

  /** Render one step: narration and board ops together, ops spread across the narration. */
  const playStep = useCallback(
    async (step: LiveStep, my: number) => {
      if (my !== token.current) return;
      setCaption(step.say);
      if (step.misconception) setMisconception(step.misconception);
      says.current.push({ at: Math.round(performance.now() - started.current), text: step.say });
      const talk = speak(step.say);
      const gap = Math.min(900, (Math.max(1200, words(step.say) * 430) * 0.7) / Math.max(1, step.ops.length));
      for (const op of step.ops) {
        if (my !== token.current) return;
        await board.current?.apply(op);
        await new Promise((r) => setTimeout(r, gap * 0.4));
      }
      await talk;
      if (my !== token.current) return;
      if (step.check) setCheck(step.check);
      if (step.hint) setHintWait(true);
      if (step.end) setEnded(true);
    },
    [speak],
  );

  /** Send a tagged student message and play the tutor's reply as it streams. */
  const send = useCallback(
    async (content: string, image?: { mediaType: "image/jpeg"; data: string }) => {
      const my = token.current;
      setError(null);
      setCheck(null);
      setHintWait(false);
      setMisconception(null);
      setPhase("teaching");
      setStreaming(true);
      history.current = trimHistory([...history.current, { role: "user", content }]);
      let gotPause = false;
      const res = await streamTurn(
        { mode, language, topic: topic.trim() || t("tutor.live.untitled", "My doubt"), student: studentInfo(useLearner.getState().profile), explainers: explainers.current, messages: history.current, image },
        pass,
        (step) => {
          if (step.check || step.hint || step.end) gotPause = true;
          play.current = play.current.then(() => playStep(step, my));
        },
      );
      setStreaming(false);
      if (my !== token.current) return;
      if (!res.ok) {
        history.current = history.current.slice(0, -1);
        setError(res.code);
        setPhase(history.current.length ? "waiting" : "setup");
        return;
      }
      history.current.push({ role: "assistant", content: res.raw || '{"say":"","ops":[]}' });
      await play.current;
      if (my !== token.current) return;
      if (!gotPause) setCheck({ q: t("tutor.live.anyQuestions", "Any questions? Ask me, or say “continue”.") });
      setPhase("waiting");
    },
    [mode, language, topic, pass, playStep, t],
  );

  const start = async () => {
    if (!topic.trim() && !(mode === "doubt" && photo)) return;
    token.current++;
    stopVoice();
    board.current?.reset();
    history.current = [];
    says.current = [];
    started.current = performance.now();
    play.current = Promise.resolve();
    sessionId.current = `s${Date.now().toString(36)}`;
    setEnded(false);
    setRecap(null);
    try {
      const { explainersFor } = await import("@/components/board/explainer-catalog");
      explainers.current = explainersFor(topic);
    } catch {
      explainers.current = [];
    }
    const intro =
      mode === "doubt"
        ? `[start] ${photo ? "Here is a photo of the problem I'm stuck on." : ""} ${topic.trim()}`.trim()
        : mode === "explainback"
          ? `[start] I want to explain "${topic.trim()}" back to you so you can find my gaps.`
          : `[start] Teach me "${topic.trim()}".`;
    void send(intro, photo ?? undefined);
  };

  const reply = (tag: string, text: string) => {
    const v = text.trim();
    if (!v && tag !== "[next-hint]" && tag !== "[solution]" && tag !== "[clarify]") return;
    setInput("");
    void send(`${tag} ${v}`.trim());
  };
  const answerTag = mode === "explainback" && check ? "[explanation]" : check ? "[answer]" : "[say]";

  const onTap = (el: TappedElement) => {
    if (phase !== "waiting") return;
    void send(`[tap] The student tapped "${el.label}" (id ${el.id}). What is this?`);
  };

  const mic = () => {
    if (listening) return listening();
    const stop = listen(
      speechLang(language),
      (txt) => setInput(txt),
      (txt) => {
        setListening(null);
        if (txt) setInput(txt);
      },
    );
    setListening(() => stop);
  };

  const finish = async () => {
    token.current++;
    stopVoice();
    setPhase("recap");
    setSavingRecap(true);
    const tp = topic.trim() || t("tutor.live.untitled", "My doubt");
    const record = board.current?.record();
    if (record) saveBoard({ id: sessionId.current, topic: tp, at: new Date().toISOString(), record, says: says.current.slice(0, 200) });
    const msgs = history.current.length ? trimHistory([...history.current, { role: "user", content: "[recap] Please write the recap." }]) : null;
    const r = msgs ? await fetchRecap({ mode, language, topic: tp, student: studentInfo(useLearner.getState().profile), explainers: [], messages: msgs }, pass) : null;
    setRecap(r);
    setSavingRecap(false);
    const now = new Date().toISOString();
    const p = useLearner.getState().profile;
    const mem = p.tutor ?? { sessions: [], parentNotes: [] };
    setProfile({
      tutor: {
        sessions: [{ at: now, topic: tp, summary: r?.memory ?? `Studied ${tp} (${mode}).` }, ...mem.sessions].slice(0, 10),
        parentNotes: r ? [{ at: now, topic: tp, text: r.parentSummary }, ...mem.parentNotes].slice(0, 30) : mem.parentNotes,
      },
    });
    if (r) {
      const md = [
        `**${r.title}**`,
        "",
        ...r.keyPoints.map((k, i) => `${i + 1}. ${k}`),
        r.formulas.length ? `\n**${t("tutor.recap.formulas", "Formulas")}**\n${r.formulas.map((f) => `$${f}$`).join("\n")}` : "",
        `\n**${t("tutor.recap.practice", "Practice")}**`,
        ...r.practice.map((q, i) => `${i + 1}. ${q.q}\n   ${t("tutor.recap.answer", "Answer")}: ${q.answer}`),
      ].join("\n");
      addDoubt({ lessonId: `tutor/${tp.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40) || "session"}`, title: t("tutor.recap.noteTitle", "Tutor recap: {topic}", { topic: tp }), text: md });
    }
  };

  const replay = (id: string) => {
    const b = boards.find((x) => x.id === id);
    if (!b) return;
    token.current++;
    stopVoice();
    setTopic(b.topic);
    setPhase("replay");
    void board.current?.replay(b.record, 2);
  };

  const errText: Record<LiveError, string> = {
    tutor_unavailable: t("tutor.live.err.unavailable", "The tutor is not set up on this server yet."),
    premium_required: t("tutor.live.err.premium", "The live tutor needs a Premium plan."),
    rate_limited: t("tutor.live.err.rate", "That was a lot of questions. Take a short break and try again."),
    daily_limit: t("tutor.live.err.daily", "You have used today's tutor time. Come back tomorrow!"),
    bad_request: t("tutor.live.err.bad", "Something went wrong with that message. Try again."),
    upstream_busy: t("tutor.live.err.busy", "The tutor is very busy right now. Try again in a minute."),
    upstream_error: t("tutor.live.err.upstream", "The tutor hit a problem. Try again."),
    auth_failed: t("tutor.live.err.unavailable", "The tutor is not set up on this server yet."),
    network: t("tutor.live.err.network", "You seem to be offline. Check your connection."),
  };

  const MODES: { id: LiveMode; label: string; hint: string }[] = [
    { id: "learn", label: t("tutor.live.mode.learn", "Learn a topic"), hint: t("tutor.live.mode.learnHint", "Step by step on the board, with quick checks") },
    { id: "doubt", label: t("tutor.live.mode.doubt", "Snap a doubt"), hint: t("tutor.live.mode.doubtHint", "Photo of a problem → hints first, then the full solution") },
    { id: "explainback", label: t("tutor.live.mode.explain", "Explain it back"), hint: t("tutor.live.mode.explainHint", "You teach, the tutor finds the gaps") },
  ];
  const LANG_LABEL: Record<TutorLanguage, string> = { English: "English", Hindi: "हिन्दी", Kannada: "ಕನ್ನಡ", Hinglish: "Hinglish" };
  const live = phase === "teaching" || phase === "waiting";

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-black">{t("tutor.live.title", "Live AI tutor")}</h1>
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-extrabold text-accent">{t("tutor.live.premium", "Premium")}</span>
        <span className="ml-auto flex items-center gap-1.5">
          <select value={language} onChange={(e) => setLanguage(e.target.value as TutorLanguage)} className="rounded-xl border-2 border-line bg-surface px-2 py-1 text-sm font-bold" aria-label={t("tutor.live.language", "Language")}>
            {TUTOR_LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {LANG_LABEL[l]}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => (setMuted(!muted), stopVoice())} className="btn-ghost rounded-xl p-2" aria-label={muted ? t("tutor.live.unmute", "Turn voice on") : t("tutor.live.mute", "Turn voice off")}>
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </span>
      </header>

      {phase === "setup" && (
        <section className="card space-y-4 p-4">
          <div className="grid gap-2 sm:grid-cols-3">
            {MODES.map((m) => (
              <button key={m.id} type="button" onClick={() => setMode(m.id)} className={clsx("rounded-2xl border-2 p-3 text-left transition", mode === m.id ? "border-accent bg-accent-soft" : "border-line hover:border-accent")} aria-pressed={mode === m.id}>
                <span className="block font-extrabold">{m.label}</span>
                <span className="block text-sm text-muted">{m.hint}</span>
              </button>
            ))}
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-extrabold">{mode === "doubt" ? t("tutor.live.problem", "Type the problem (or add a photo)") : t("tutor.live.topic", "What do you want to learn?")}</span>
            <input value={topic} onChange={(e) => setTopic(e.target.value)} onKeyDown={(e) => e.key === "Enter" && start()} placeholder={t("tutor.live.topicPh", "e.g. Newton's second law, quadratic equations, photosynthesis")} className="w-full rounded-xl border-2 border-line bg-surface px-3 py-2" maxLength={280} />
          </label>
          {mode === "doubt" && (
            <div className="flex flex-wrap items-center gap-3">
              <label className="btn-ghost inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-line px-3 py-2 font-bold">
                <Camera className="h-5 w-5" /> {photo ? t("tutor.live.retake", "Change photo") : t("tutor.live.snap", "Take or upload a photo")}
                <input type="file" accept="image/*" capture="environment" className="sr-only" onChange={async (e) => { const f = e.target.files?.[0]; if (f) setPhoto(await photoToBase64(f).catch(() => null)); }} />
              </label>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {photo && <img src={photo.preview} alt={t("tutor.live.photoAlt", "Your problem")} className="h-20 rounded-xl border-2 border-line object-cover" />}
            </div>
          )}
          {error && <p className="text-sm font-bold text-red-600">{errText[error]}</p>}
          <button type="button" onClick={start} disabled={!topic.trim() && !(mode === "doubt" && photo)} className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-50">
            <Play className="h-4 w-4" /> {t("tutor.live.start", "Start the class")}
          </button>
          {boards.length > 0 && (
            <div>
              <h2 className="mb-1 text-sm font-extrabold text-muted">{t("tutor.live.past", "Replay a past board")}</h2>
              <div className="flex flex-wrap gap-2">
                {boards.map((b) => (
                  <button key={b.id} type="button" onClick={() => replay(b.id)} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1 text-sm">
                    <RotateCcw className="h-3.5 w-3.5" /> {b.topic} · {b.at.slice(0, 10)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <div className={clsx(phase === "setup" && "hidden")}>
        <Smartboard ref={board} onTap={onTap} readOnly={phase === "replay" || phase === "recap"} />
      </div>

      {live && (
        <section className="card space-y-3 p-3" aria-live="polite">
          {misconception && (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-700 dark:bg-red-950 dark:text-red-200">
              {t("tutor.live.misconception", "Common mix-up: {m}", { m: misconception })}
            </p>
          )}
          <p className="min-h-[1.5rem] font-semibold">
            {streaming && !caption ? <Loader2 className="inline h-4 w-4 animate-spin" /> : caption}
          </p>
          {phase === "waiting" && (
            <>
              {check && <p className="rounded-xl bg-accent-soft px-3 py-2 font-extrabold text-accent">{check.q}</p>}
              {check?.options && check.options.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {check.options.map((o) => (
                    <button key={o} type="button" onClick={() => reply("[answer]", o)} className="btn-ghost rounded-xl border-2 border-line px-3 py-1.5 font-bold">
                      {o}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-2">
                {recognitionSupported() && (
                  <button type="button" onClick={mic} className={clsx("btn-ghost rounded-xl border-2 p-2", listening ? "border-red-500 text-red-600" : "border-line")} aria-label={listening ? t("tutor.live.stopMic", "Stop listening") : t("tutor.live.mic", "Answer by voice")}>
                    {listening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  </button>
                )}
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && reply(answerTag, input)} placeholder={mode === "explainback" ? t("tutor.live.explainPh", "Explain it in your own words…") : t("tutor.live.answerPh", "Type your answer or question…")} className="min-w-0 flex-1 rounded-xl border-2 border-line bg-surface px-3 py-2" maxLength={2000} />
                <button type="button" onClick={() => reply(answerTag, input)} disabled={!input.trim()} className="btn btn-primary rounded-xl p-2 disabled:opacity-50" aria-label={t("tutor.live.send", "Send")}>
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <button type="button" onClick={() => reply("[clarify]", input || "I don't understand the last part. Please explain it more simply.")} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1">
                  <CircleHelp className="h-4 w-4" /> {t("tutor.live.clarify", "I don't get it")}
                </button>
                {mode === "doubt" && (
                  <>
                    <button type="button" onClick={() => reply("[next-hint]", "")} className="btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1">
                      <Lightbulb className="h-4 w-4" /> {t("tutor.live.nextHint", "Next hint")}
                    </button>
                    <button type="button" onClick={() => reply("[solution]", "")} className="btn-ghost rounded-xl border-2 border-line px-2.5 py-1">
                      {t("tutor.live.solution", "Show full solution")}
                    </button>
                  </>
                )}
                <button type="button" onClick={finish} className={clsx("ml-auto inline-flex items-center gap-1 rounded-xl px-2.5 py-1", ended ? "btn btn-primary" : "btn-ghost border-2 border-line")}>
                  <Square className="h-4 w-4" /> {t("tutor.live.finish", "End & get recap")}
                </button>
              </div>
              <p className="text-xs text-muted">{t("tutor.live.tapTip", "Tip: tap anything on the board to ask “what is this?”")}</p>
            </>
          )}
          {error && <p className="text-sm font-bold text-red-600">{errText[error]}</p>}
        </section>
      )}

      {phase === "replay" && (
        <button type="button" onClick={() => (board.current?.stop(), setPhase("setup"))} className="btn btn-primary">
          {t("tutor.live.back", "Back")}
        </button>
      )}

      {phase === "recap" && (
        <section className="card space-y-3 p-4">
          {savingRecap ? (
            <p className="inline-flex items-center gap-2 font-bold">
              <Loader2 className="h-4 w-4 animate-spin" /> {t("tutor.recap.making", "Making your recap card…")}
            </p>
          ) : recap ? (
            <>
              <h2 className="text-xl font-black">{recap.title}</h2>
              <ol className="list-decimal space-y-1 pl-5">
                {recap.keyPoints.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ol>
              {recap.formulas.length > 0 && (
                <div className="space-y-1">
                  <h3 className="font-extrabold">{t("tutor.recap.formulas", "Formulas")}</h3>
                  {recap.formulas.map((f) => (
                    <div key={f} className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: katex.renderToString(f, { throwOnError: false, strict: "ignore", displayMode: true }) }} />
                  ))}
                </div>
              )}
              <div className="space-y-2">
                <h3 className="font-extrabold">{t("tutor.recap.practice", "Practice")}</h3>
                {recap.practice.map((q, i) => (
                  <details key={i} className="rounded-xl border-2 border-line p-2">
                    <summary className="cursor-pointer font-semibold">
                      {i + 1}. {q.q}
                    </summary>
                    <p className="mt-1 text-sm">
                      {t("tutor.recap.answer", "Answer")}: {q.answer}
                    </p>
                  </details>
                ))}
              </div>
              <p className="text-sm text-muted">
                {t("tutor.recap.saved", "Saved to your notebook under Doubts.")}{" "}
                <Link href="/notebook" className="font-bold text-accent underline">
                  {t("tutor.recap.open", "Open notebook")}
                </Link>
              </p>
            </>
          ) : (
            <p className="font-semibold">{t("tutor.recap.failed", "Couldn't make a recap this time, but your board is saved for replay.")}</p>
          )}
          <button type="button" onClick={() => setPhase("setup")} className="btn btn-primary">
            {t("tutor.live.newSession", "New session")}
          </button>
        </section>
      )}
      {!profile.grade && phase === "setup" && <p className="text-xs text-muted">{t("tutor.live.noClass", "Tip: set your class in your profile so the tutor can match your syllabus.")}</p>}
    </div>
  );
}
