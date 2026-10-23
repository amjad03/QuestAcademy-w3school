"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Square, Volume2, X, RotateCcw } from "lucide-react";
import clsx from "clsx";
import { Mascot } from "@/components/brand/Mascot";
import { Md, plain } from "@/components/Md";
import { useLocale, localeInfo, useT } from "@/i18n";
import { say, stopVoice } from "@/lib/voice";
import type { ModeId } from "@/lib/modes";
import { askTutor } from "@/lib/tutor/client";
import { TUTOR_LIMITS, type TutorContext, type TutorMessage, type TutorStage } from "@/lib/tutor/types";

interface Props {
  courseTitle: string;
  lessonTitle: string;
  lessonSummary?: string;
  questionText?: string;
  answered?: boolean;
  correct?: boolean;
  answerText?: string;
  stage: ModeId;
  onClose: () => void;
}

type Status = "idle" | "streaming" | "unavailable" | "error" | "busy" | "network";

/** Keep at most `maxMessages`, always starting with a learner turn. */
function trimHistory(list: TutorMessage[]) {
  let out = list;
  while (out.length > TUTOR_LIMITS.maxMessages) out = out.slice(2);
  return out;
}

function useIsDesktop() {
  const [desk, setDesk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setDesk(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return desk;
}

export function TutorPanel(p: Props) {
  const t = useT();
  const locale = useLocale();
  const desktop = useIsDesktop();
  const stage = p.stage as TutorStage;
  const young = stage === "explore" || stage === "adventure";
  const kid = stage === "explore";

  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [speaking, setSpeaking] = useState<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // A new question (or lesson) starts a fresh conversation.
  const contextKey = `${p.lessonTitle}\u0001${p.questionText ?? ""}`;
  const lastKey = useRef(contextKey);
  useEffect(() => {
    if (lastKey.current === contextKey) return;
    lastKey.current = contextKey;
    abortRef.current?.abort();
    setMessages([]);
    setStatus((s) => (s === "unavailable" ? s : "idle"));
  }, [contextKey]);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
    return () => {
      abortRef.current?.abort();
      stopVoice();
    };
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  const context: TutorContext = useMemo(
    () => ({
      stage,
      language: localeInfo(locale).english,
      courseTitle: p.courseTitle,
      lessonTitle: p.lessonTitle,
      lessonSummary: p.lessonSummary,
      questionText: p.questionText,
      answered: p.answered,
      correct: p.answered ? p.correct : undefined,
      answerText: p.answered ? p.answerText : undefined,
    }),
    [stage, locale, p.courseTitle, p.lessonTitle, p.lessonSummary, p.questionText, p.answered, p.correct, p.answerText],
  );

  const streaming = status === "streaming";

  const send = async (text: string) => {
    const content = text.trim().slice(0, TUTOR_LIMITS.maxChars);
    if (!content || streaming || status === "unavailable") return;
    stopVoice();
    setSpeaking(null);
    const history = trimHistory([...messages, { role: "user", content }]);
    setMessages([...history, { role: "assistant", content: "" }]);
    setDraft("");
    setStatus("streaming");
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    const setReply = (reply: string) =>
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: reply };
        return copy;
      });

    const res = await askTutor({ context, messages: history }, setReply, ctrl.signal);
    if (ctrl.signal.aborted) return; // stop() or a new question already tidied up

    if (!res.ok) {
      // Drop the empty reply and give the learner their text back.
      setMessages(history.slice(0, -1));
      setDraft(content);
      setStatus(res.code === "tutor_unavailable" || res.code === "auth_failed" ? "unavailable" : res.code === "rate_limited" || res.code === "upstream_busy" ? "busy" : res.code === "network" ? "network" : "error");
      return;
    }
    if (res.refused) {
      setReply(t("tutor.refusal", "I can’t help with that one. Let’s get back to your lesson — what would you like to understand better?"));
    }
    setMessages((m) => {
      const last = m[m.length - 1];
      if (last?.role === "assistant" && !last.content.trim()) return m.slice(0, -2);
      return m;
    });
    setStatus(res.broken ? "error" : "idle");
  };

  const stop = () => {
    abortRef.current?.abort();
    setMessages((m) => {
      const last = m[m.length - 1];
      return last?.role === "assistant" && !last.content.trim() ? m.slice(0, -2) : m;
    });
    setStatus("idle");
  };

  const speak = (i: number, text: string) => {
    if (speaking === i) {
      stopVoice();
      return setSpeaking(null);
    }
    setSpeaking(i);
    say(plain(text), { onEnd: () => setSpeaking((s) => (s === i ? null : s)) });
  };

  const chips = p.questionText
    ? [
        t("tutor.chip.hint", "Give me a hint"),
        t("tutor.chip.step", "Explain this step"),
        ...(p.answered && p.correct === false ? [t("tutor.chip.wrong", "Why is my answer wrong?")] : []),
        ...(p.answered && p.correct === true ? [t("tutor.chip.why", "Why is this right?")] : []),
        t("tutor.chip.similar", "Give me a similar example"),
      ]
    : [t("tutor.chip.simple", "Explain this simply"), t("tutor.chip.example", "Give me an example"), t("tutor.chip.quiz", "Quiz me on this lesson")];

  const greeting = p.questionText
    ? p.answered
      ? t("tutor.hello.answered", "Want to go through this question together? Ask me anything about it.")
      : t("tutor.hello.question", "Stuck? I won’t just tell you the answer — but I’ll help you get there, one step at a time.")
    : t("tutor.hello.lesson", "Hi! I’m Questy. Ask me anything about “{lesson}”.", { lesson: p.lessonTitle });

  const panelMotion = desktop ? { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 40, opacity: 0 } } : { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" } };

  return (
    <motion.div
      className="fixed inset-0 z-[60] md:pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Keep keys (Enter, digits…) away from the practice session's shortcuts.
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.key === "Escape") p.onClose();
      }}
    >
      <div className="absolute inset-0 bg-ink/40 md:hidden" onClick={p.onClose} aria-hidden />
      <motion.section
        role="dialog"
        aria-modal={!desktop}
        aria-labelledby="tutor-title"
        {...panelMotion}
        transition={{ type: "spring", damping: 30, stiffness: 320 }}
        className="pointer-events-auto absolute inset-x-0 bottom-0 flex max-h-[88dvh] min-h-[60dvh] flex-col rounded-t-3xl border-t border-line bg-surface shadow-2xl md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:min-h-0 md:w-[420px] md:rounded-none md:border-l md:border-t-0"
      >
        {/* header */}
        <header className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Mascot pose={streaming ? "think" : "wave"} size={40} animate={false} />
          <div className="min-w-0 flex-1">
            <h2 id="tutor-title" className="font-black leading-tight">
              {t("tutor.title", "Ask Questy")}
            </h2>
            <p className="truncate text-xs font-semibold text-muted">{p.lessonTitle}</p>
          </div>
          {messages.length > 0 && (
            <button type="button" onClick={() => (stop(), setMessages([]), setStatus("idle"))} className="btn-flat !p-2" aria-label={t("tutor.restart", "Start over")} title={t("tutor.restart", "Start over")}>
              <RotateCcw className="h-4 w-4" />
            </button>
          )}
          <button type="button" onClick={p.onClose} className="btn-flat !p-2" aria-label={t("tutor.close", "Close")}>
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* conversation */}
        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4" aria-live="polite" aria-busy={streaming}>
          {status === "unavailable" ? (
            <div className="mx-auto mt-6 max-w-xs text-center">
              <div className="flex justify-center">
                <Mascot pose="sad" size={90} animate={false} />
              </div>
              <p className="mt-3 text-lg font-black">{t("tutor.off.title", "Ask Questy isn’t switched on yet")}</p>
              <p className="mt-1 text-sm font-semibold text-muted">{t("tutor.off.body", "The AI tutor needs to be set up on this site first. Your lessons, hints and explanations still work as usual.")}</p>
            </div>
          ) : (
            <>
              <Bubble role="assistant" kid={kid}>
                <Md text={greeting} className="space-y-2" />
              </Bubble>
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} kid={kid}>
                  {m.role === "assistant" && !m.content ? (
                    <span className="inline-flex gap-1 py-1" aria-label={t("tutor.thinking", "Questy is thinking…")}>
                      {[0, 1, 2].map((d) => (
                        <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${d * 120}ms` }} />
                      ))}
                    </span>
                  ) : m.role === "assistant" ? (
                    <>
                      <Md text={m.content} className="space-y-2 [&_.katex]:text-[1.05em]" />
                      {young && !(streaming && i === messages.length - 1) && (
                        <button type="button" onClick={() => speak(i, m.content)} className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline" aria-pressed={speaking === i}>
                          <Volume2 className="h-3.5 w-3.5" /> {speaking === i ? t("tutor.stopReading", "Stop") : t("tutor.read", "Read aloud")}
                        </button>
                      )}
                    </>
                  ) : (
                    <p className="whitespace-pre-wrap break-words">{m.content}</p>
                  )}
                </Bubble>
              ))}
              {status !== "idle" && status !== "streaming" && (
                <p role="alert" className="rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad-shade">
                  {status === "busy"
                    ? t("tutor.err.busy", "Questy needs a short break — lots of questions right now. Try again in a few minutes.")
                    : status === "network"
                      ? t("tutor.err.network", "You seem to be offline. Check your connection and try again.")
                      : t("tutor.err.generic", "Something went wrong. Please try again.")}
                </p>
              )}
            </>
          )}
        </div>

        {/* composer */}
        {status !== "unavailable" && (
          <div className="border-t border-line px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
            {!streaming && (
              <div className="mb-2 flex flex-wrap gap-1.5">
                {chips.map((c) => (
                  <button key={c} type="button" onClick={() => send(c)} className={clsx("rounded-full border border-line bg-surface-2 px-3 py-1 font-bold text-ink transition hover:border-accent hover:text-accent", kid ? "text-sm" : "text-xs")}>
                    {c}
                  </button>
                ))}
              </div>
            )}
            <form
              className="flex items-end gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                void send(draft);
              }}
            >
              <label htmlFor="tutor-input" className="sr-only">
                {t("tutor.inputLabel", "Your question for Questy")}
              </label>
              <textarea
                id="tutor-input"
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    void send(draft);
                  }
                }}
                rows={1}
                maxLength={TUTOR_LIMITS.maxChars}
                placeholder={t("tutor.placeholder", "Ask about this lesson…")}
                className="input max-h-32 min-h-[44px] flex-1 resize-none !py-2.5"
              />
              {streaming ? (
                <button type="button" onClick={stop} className="btn-ghost !h-11 !w-11 !p-0" aria-label={t("tutor.stop", "Stop")}>
                  <Square className="h-4 w-4" />
                </button>
              ) : (
                <button type="submit" disabled={!draft.trim()} className="btn-primary !h-11 !w-11 !p-0 disabled:opacity-50" aria-label={t("tutor.send", "Send")}>
                  <ArrowUp className="h-5 w-5" />
                </button>
              )}
            </form>
            <p className="mt-2 text-[11px] font-semibold leading-snug text-muted">
              {kid
                ? t("tutor.disclaimer.kid", "Questy is a computer helper and can make mistakes. Ask a grown-up if you’re not sure. Never share your name or address.")
                : t("tutor.disclaimer", "Questy is an AI tutor and can make mistakes — check important answers with your teacher or textbook. Don’t share personal details.")}
            </p>
          </div>
        )}
      </motion.section>
    </motion.div>
  );
}

function Bubble({ role, kid, children }: { role: TutorMessage["role"]; kid: boolean; children: React.ReactNode }) {
  return (
    <div className={clsx("flex", role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={clsx(
          "max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed",
          kid ? "text-[1.02rem]" : "text-[0.95rem]",
          role === "user" ? "rounded-br-md bg-accent text-white" : "rounded-bl-md bg-surface-2 text-ink",
        )}
      >
        {children}
      </div>
    </div>
  );
}
