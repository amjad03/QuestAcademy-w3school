"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import katex from "katex";
import { Camera, Lightbulb, Loader2, MessageSquareText, Play, RotateCcw, Square, Volume2, VolumeX } from "lucide-react";
import { useLocale, useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useNotebook } from "@/lib/notebook-store";
import { Smartboard, type SmartboardHandle, type TappedElement } from "@/components/board/Smartboard";
import { TUTOR_LANGUAGES, type LiveMode, type Recap, type SessionGoal, type TutorLanguage, type TutorLevel } from "@/lib/tutor/live";
import { fetchRecap, languageForLocale, photoToBase64, speechLang, studentInfo } from "@/lib/tutor/live-client";
import { useBoards } from "@/lib/tutor/board-store";
import { trimHistory, useTutorSession } from "@/lib/tutor/useTutorSession";
import { speaker } from "@/lib/tutor/speech";
import { VoiceChip, VoiceDock, liveErrorText } from "./VoiceDock";
import { TutorLoader } from "./TutorLoader";
import { LessonProgress } from "./LessonProgress";
import { IntentBar, VerdictBadge } from "./IntentBar";

const sameTopic = (a: string, b: string) => {
  const [x, y] = [a.toLowerCase().trim(), b.toLowerCase().trim()];
  return Boolean(x && y) && (x.includes(y) || y.includes(x));
};

type Phase = "setup" | "live" | "recap" | "replay";

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
  const [muted, setMuted] = useState(false);
  const [recap, setRecap] = useState<Recap | null>(null);
  const [savingRecap, setSavingRecap] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [goal, setGoal] = useState<SessionGoal>("understand");
  const [minutes, setMinutes] = useState(20);
  const [startLevel, setStartLevel] = useState<TutorLevel>("simple");
  const [savedNote, setSavedNote] = useState(false);
  const outline = params.get("outline") ?? undefined;

  const board = useRef<SmartboardHandle>(null);
  const explainers = useRef<{ id: string; title: string }[]>([]);
  const sessionId = useRef("");
  const topicName = () => topic.trim() || t("tutor.live.untitled", "My doubt");

  /** What was covered / found hard on this topic in earlier sessions (for "last time…"). */
  const previous = useCallback(() => {
    const past = (useLearner.getState().profile.tutor?.sessions ?? []).filter((x) => sameTopic(x.topic, topic)).slice(0, 3);
    return past.length ? past.map((x) => `${x.at.slice(0, 10)}: ${x.summary}${x.covered?.length ? ` Covered: ${x.covered.join(", ")}.` : ""}${x.struggled?.length ? ` Found hard: ${x.struggled.join("; ")}.` : ""}`).join(" | ").slice(0, 600) : undefined;
  }, [topic]);
  const base = useCallback(
    () => ({
      mode,
      language,
      topic: topic.trim() || "My doubt",
      student: studentInfo(useLearner.getState().profile),
      explainers: explainers.current,
      session: { goal: mode === "doubt" ? ("homework" as const) : goal, minutes, level: startLevel, outline, previous: previous() },
    }),
    [mode, language, topic, goal, minutes, startLevel, outline, previous],
  );
  const s = useTutorSession({ board, pass, base, speechLang: speechLang(language), muted, onLanguage: setLanguage });
  const { preloadVoice } = s;

  // Start fetching the voice model while the student picks a topic.
  useEffect(() => {
    const id = setTimeout(preloadVoice, 600);
    return () => clearTimeout(id);
  }, [preloadVoice]);

  // Hold the first lesson until Kokoro is ready (the full-screen loader shows progress).
  useEffect(() => {
    const sp = speaker();
    sp.hold = !muted;
    return () => void (sp.hold = false);
  }, [muted]);
  const voiceSettled = muted || (s.voice.status !== "loading" && s.voice.status !== "off") || !speaker().capable();
  const loading = phase === "live" && !(voiceSettled && (s.lessonReady || Boolean(s.error)));

  // A failed first turn: back to the setup card (with the error shown there).
  useEffect(() => {
    if (phase === "live" && s.error && !s.history.current.length) setPhase("setup");
  }, [phase, s.error, s.history]);

  const start = async () => {
    if (!topic.trim() && !(mode === "doubt" && photo)) return;
    s.unlock();
    s.preloadVoice();
    s.reset();
    s.setLevel(startLevel);
    board.current?.reset();
    setSavedNote(false);
    sessionId.current = `s${Date.now().toString(36)}`;
    setRecap(null);
    setPhase("live");
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
          : `[start] Teach me "${topic.trim()}".${goal === "exam" ? " I'm preparing for my exam." : goal === "revise" ? " I want a quick revision." : ""}`;
    void s.send(intro, photo ? { image: { mediaType: photo.mediaType, data: photo.data } } : {});
  };

  const onTap = (el: TappedElement) => {
    if (phase !== "live") return;
    s.unlock();
    s.ask(`What is this? (I tapped "${el.label}", id ${el.id})`, { tag: "[tap]" });
  };

  /** Save the board (its written content + a replay copy) to the notebook. */
  const saveToNotebook = () => {
    const tp = topicName();
    const record = board.current?.record();
    if (record) saveBoard({ id: sessionId.current || `s${Date.now().toString(36)}`, topic: tp, at: new Date().toISOString(), record, says: s.says.current.slice(0, 200) });
    const pages = board.current?.outline() ?? [];
    const md = pages
      .map((lines, i) => (lines.length ? `**${t("tutor.board.page", "Page {n}", { n: i + 1 })}**\n${lines.map((l) => (l.startsWith("|") ? l : `- ${l}`)).join("\n")}` : ""))
      .filter(Boolean)
      .join("\n\n");
    addDoubt({
      lessonId: `tutor/${tp.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40) || "session"}`,
      title: t("tutor.board.noteTitle", "Board: {topic}", { topic: tp }),
      text: `${md || t("tutor.board.empty", "(The board had drawings only.)")}\n\n${t("tutor.board.replayTip", "Replay the full board from the Live tutor page.")}`,
    });
    setSavedNote(true);
  };

  const finish = async () => {
    s.stopAll();
    setPhase("recap");
    setSavingRecap(true);
    const tp = topicName();
    const record = board.current?.record();
    if (record) saveBoard({ id: sessionId.current, topic: tp, at: new Date().toISOString(), record, says: s.says.current.slice(0, 200) });
    const h = s.history.current;
    const msgs = h.length ? trimHistory([...(h[h.length - 1]?.role === "user" ? h.slice(0, -1) : h), { role: "user", content: "[recap] Please write the recap." }]) : null;
    const r = msgs && msgs.length ? await fetchRecap({ ...base(), topic: tp, explainers: [], messages: msgs }, pass) : null;
    setRecap(r);
    setSavingRecap(false);
    const now = new Date().toISOString();
    const p = useLearner.getState().profile;
    const mem = p.tutor ?? { sessions: [], parentNotes: [] };
    setProfile({
      tutor: {
        sessions: [
          {
            at: now,
            topic: tp,
            summary: r?.memory ?? `Studied ${tp} (${mode}).`,
            struggled: r?.struggled?.length ? r.struggled : [...new Set(s.misconceptions.current)].slice(0, 4),
            covered: s.plan?.concepts.filter((c) => s.done.includes(c.id)).map((c) => c.title),
          },
          ...mem.sessions,
        ].slice(0, 10),
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
    s.stopAll();
    setTopic(b.topic);
    setPhase("replay");
    void board.current?.replay(b.record, 2);
  };

  const MODES: { id: LiveMode; label: string; hint: string }[] = [
    { id: "learn", label: t("tutor.live.mode.learn", "Learn a topic"), hint: t("tutor.live.mode.learnHint", "Step by step on the board, with quick checks") },
    { id: "doubt", label: t("tutor.live.mode.doubt", "Snap a doubt"), hint: t("tutor.live.mode.doubtHint", "Photo of a problem → hints first, then the full solution") },
    { id: "explainback", label: t("tutor.live.mode.explain", "Explain it back"), hint: t("tutor.live.mode.explainHint", "You teach, the tutor finds the gaps") },
  ];
  const LANG_LABEL: Record<TutorLanguage, string> = { English: "English", Hindi: "हिन्दी", Kannada: "ಕನ್ನಡ", Hinglish: "Hinglish" };
  const live = phase === "live";
  const chip = "btn-ghost inline-flex items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1";

  return (
    <div className="space-y-4">
      {loading && <TutorLoader s={s} onCancel={() => (s.stopAll(), setPhase("setup"))} />}
      <header className="flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-black">{t("tutor.live.title", "Live AI tutor")}</h1>
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-extrabold text-accent">{t("tutor.live.premium", "Premium")}</span>
        {live && topic.trim() && <span className="hidden max-w-[16rem] truncate text-sm font-bold text-muted sm:inline">· {topic}</span>}
        <span className="ml-auto flex items-center gap-1.5">
          <span className="hidden sm:inline">
            <VoiceChip s={s} />
          </span>
          <select value={language} onChange={(e) => setLanguage(e.target.value as TutorLanguage)} className="rounded-xl border-2 border-line bg-surface px-2 py-1 text-sm font-bold" aria-label={t("tutor.live.language", "Language")}>
            {TUTOR_LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {LANG_LABEL[l]}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => (setMuted(!muted), s.halt())} className="btn-ghost rounded-xl p-2" aria-label={muted ? t("tutor.live.unmute", "Turn voice on") : t("tutor.live.mute", "Turn voice off")} aria-pressed={muted}>
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </span>
      </header>

      {phase === "setup" && (
        <section className="card space-y-4 p-4">
          {s.available === false && <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-200">{liveErrorText(t, "tutor_unavailable")}</p>}
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
          {mode !== "doubt" && (
            <div className="grid gap-3 sm:grid-cols-3">
              <fieldset>
                <legend className="mb-1 text-sm font-extrabold">{t("tutor.setup.goal", "Goal")}</legend>
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      ["understand", t("tutor.goal.understand", "Understand it")],
                      ["exam", t("tutor.goal.exam", "Exam prep")],
                      ["revise", t("tutor.goal.revise", "Quick revision")],
                    ] as [SessionGoal, string][]
                  ).map(([id, l]) => (
                    <button key={id} type="button" onClick={() => setGoal(id)} aria-pressed={goal === id} className={clsx("rounded-xl border-2 px-2.5 py-1 text-sm font-bold", goal === id ? "border-accent bg-accent-soft text-accent" : "border-line")}>
                      {l}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-1 text-sm font-extrabold">{t("tutor.setup.duration", "Time")}</legend>
                <div className="flex flex-wrap gap-1.5">
                  {[10, 20, 30, 45].map((m) => (
                    <button key={m} type="button" onClick={() => setMinutes(m)} aria-pressed={minutes === m} className={clsx("rounded-xl border-2 px-2.5 py-1 text-sm font-bold tabular-nums", minutes === m ? "border-accent bg-accent-soft text-accent" : "border-line")}>
                      {t("tutor.setup.min", "{n} min", { n: m })}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-1 text-sm font-extrabold">{t("tutor.setup.level", "Start")}</legend>
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      ["simple", t("tutor.level.simple", "Super simple first")],
                      ["exam", t("tutor.level.exam", "Exam level")],
                    ] as [TutorLevel, string][]
                  ).map(([id, l]) => (
                    <button key={id} type="button" onClick={() => setStartLevel(id)} aria-pressed={startLevel === id} className={clsx("rounded-xl border-2 px-2.5 py-1 text-sm font-bold", startLevel === id ? "border-accent bg-accent-soft text-accent" : "border-line")}>
                      {l}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          )}
          {topic.trim() && previous() && <p className="rounded-xl bg-surface-2 px-3 py-2 text-sm font-semibold">{t("tutor.setup.previous", "Questy remembers your last session on this and will start from where you struggled.")}</p>}
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
          <ul className="grid gap-1.5 text-sm font-semibold text-muted sm:grid-cols-3">
            <li>🎙️ {t("tutor.live.how1", "Tap the mic once and just talk — interrupt Questy any time with a doubt.")}</li>
            <li>✍️ {t("tutor.live.how2", "Draw, circle or highlight on the board and ask “what is this?”")}</li>
            <li>🔊 {t("tutor.live.how3", "Natural Indian voice (open-source Kokoro) runs right on your device.")}</li>
          </ul>
          {s.error && <p className="text-sm font-bold text-red-600">{liveErrorText(t, s.error, s.retryAfter)}</p>}
          <button type="button" onClick={start} disabled={!topic.trim() && !(mode === "doubt" && photo)} className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-50">
            <Play className="h-4 w-4" /> {t("tutor.live.start", "Start the class")}
          </button>
          {boards.length > 0 && (
            <div>
              <h2 className="mb-1 text-sm font-extrabold text-muted">{t("tutor.live.past", "Replay a past board")}</h2>
              <div className="flex flex-wrap gap-2">
                {boards.map((b) => (
                  <button key={b.id} type="button" onClick={() => replay(b.id)} className="btn-ghost inline-flex max-w-full items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1 text-sm">
                    <RotateCcw className="h-3.5 w-3.5 shrink-0" /> <span className="truncate">{b.topic} · {b.at.slice(0, 10)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <div className={clsx("grid grid-cols-[minmax(0,1fr)] gap-4", live && "lg:grid-cols-[minmax(0,1fr)_360px]", phase === "setup" && "hidden")}>
        <div className="min-w-0 space-y-3">
          {live && <LessonProgress s={s} minutes={mode === "learn" ? minutes : undefined} />}
          <Smartboard
            ref={board}
            onTap={onTap}
            readOnly={phase === "replay" || phase === "recap"}
            name={topicName()}
            onSave={phase === "live" || phase === "recap" ? saveToNotebook : undefined}
            onTurnDone={() => (s.unlock(), s.ask("I've done it on the board. Please check my working.", { tag: "[board-work]", forceBoard: true }))}
          />
          {savedNote && <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{t("tutor.board.saved", "Board saved to your notebook.")}</p>}
        </div>
        {live && (
          <section className="card h-fit min-w-0 space-y-3 p-3 lg:sticky lg:top-4">
            <VerdictBadge s={s} />
            <VoiceDock
              s={s}
              placeholder={mode === "explainback" ? t("tutor.live.explainPh", "Explain it in your own words…") : undefined}
              actions={
                <>
                  {mode === "doubt" && (
                    <>
                      <button type="button" onClick={() => s.ask("Next hint please", { tag: "[intent:hint]" })} className={chip}>
                        <Lightbulb className="h-4 w-4" /> {t("tutor.live.nextHint", "Next hint")}
                      </button>
                      <button type="button" onClick={() => s.ask("", { tag: "[solution]" })} className={chip}>
                        {t("tutor.live.solution", "Show full solution")}
                      </button>
                    </>
                  )}
                  <button type="button" onClick={() => setShowLog(!showLog)} className={chip} aria-expanded={showLog}>
                    <MessageSquareText className="h-4 w-4" /> {t("tutor.live.log", "Transcript")}
                  </button>
                  <button type="button" onClick={finish} className={clsx("inline-flex items-center gap-1 rounded-xl px-2.5 py-1", s.ended ? "btn btn-primary" : chip)}>
                    <Square className="h-4 w-4" /> {t("tutor.live.finish", "End & get recap")}
                  </button>
                </>
              }
            />
            <IntentBar s={s} language={language} doubt={mode === "doubt"} />
            {showLog && (
              <ol className="max-h-64 space-y-1.5 overflow-y-auto rounded-xl border border-line p-2 text-sm">
                {s.log.length === 0 && <li className="text-muted">{t("tutor.live.logEmpty", "Nothing yet.")}</li>}
                {s.log.map((l, i) => (
                  <li key={i} className={clsx(l.who === "student" && "text-right font-bold text-accent")}>
                    {l.text}
                  </li>
                ))}
              </ol>
            )}
            <p className="text-xs text-muted">{t("tutor.live.tapTip", "Tip: tap anything on the board to ask “what is this?”, or mark it with the pen and ask.")}</p>
          </section>
        )}
      </div>

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
              {recap.struggled && recap.struggled.length > 0 && (
                <div className="rounded-xl bg-amber-50 px-3 py-2 text-sm dark:bg-amber-950">
                  <h3 className="font-extrabold">{t("tutor.recap.struggled", "Worth another look")}</h3>
                  <ul className="list-disc pl-5">
                    {recap.struggled.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
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
              {recap.nextStep && <p className="text-sm font-bold">{t("tutor.recap.next", "Next time")}: {recap.nextStep}</p>}
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
