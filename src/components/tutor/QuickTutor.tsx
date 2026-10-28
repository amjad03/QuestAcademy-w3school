"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { MonitorPlay, RotateCcw, Volume2, VolumeX, X } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { useHydrated } from "@/components/providers";
import { useParent } from "@/components/parent/store";
import { useLocale, useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useMode } from "@/lib/useMode";
import { useTutorPrefs } from "@/lib/tutor/store";
import { useAsk, type AskContext } from "@/lib/tutor/ask-store";
import { tutorHref, type PageContext } from "@/lib/tutor/live";
import { languageForLocale, speechLang, studentInfo } from "@/lib/tutor/live-client";
import { useTutorSession } from "@/lib/tutor/useTutorSession";
import { Smartboard, type SmartboardHandle } from "@/components/board/Smartboard";
import { VoiceDock } from "./live/VoiceDock";

/** Parent store may later add `tutorAllowed`; read it if present (read-only). */
function useParentAllows() {
  return useParent((s) => (s as unknown as { tutorAllowed?: boolean }).tutorAllowed !== false);
}

function useIsDesktop() {
  const [desk, setDesk] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setDesk(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return desk;
}

/** Page heading as a fallback context on pages that don't register one. */
function pageTitle() {
  const h = document.querySelector("main h1")?.textContent?.trim();
  return (h || document.title.split("|")[0] || "").trim().slice(0, 120);
}

/** The floating "Ask Questy" button on every app page, and its quick voice + text + mini-board doubt chat. */
export function TutorFab() {
  const hydrated = useHydrated();
  const pathname = usePathname();
  const mode = useMode();
  const t = useT();
  const allowed = useTutorPrefs((s) => s.tutorAllowed);
  const parentAllows = useParentAllows();
  const { ctx, slotted, open, setOpen } = useAsk();

  if (!hydrated || mode.id === "sprout" || !allowed || !parentAllows || pathname?.startsWith("/tutor")) return null;

  const young = mode.id === "explore";
  const placement = ctx?.placement;
  const label = t("tutor.ask", "Ask Questy");
  return (
    <>
      {!slotted && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={label}
          className={clsx(
            "group fixed right-4 z-40 flex items-center gap-2 rounded-full border-2 border-accent-shade bg-accent py-1.5 pl-1.5 pr-4 font-black text-white shadow-lg shadow-accent/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 md:right-6",
            placement === "session" && ctx?.answered ? "bottom-[calc(12.5rem+env(safe-area-inset-bottom))] sm:bottom-32" : placement === "session" || (young && placement) ? "bottom-[calc(8.5rem+env(safe-area-inset-bottom))] sm:bottom-32" : "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-6",
            open && "pointer-events-none opacity-0",
            young ? "text-base" : "text-sm",
          )}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/95">
            <Mascot pose="wave" size={28} animate={false} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" aria-hidden />
          </span>
          <span className={clsx(placement === "session" && "hidden sm:inline")}>{label}</span>
        </button>
      )}
      {createPortal(<AnimatePresence>{open && <QuickTutor key="quick-tutor" ctx={ctx} stage={mode.id} onClose={() => setOpen(false)} />}</AnimatePresence>, document.body)}
    </>
  );
}

function QuickTutor({ ctx, stage, onClose }: { ctx: AskContext | null; stage: string; onClose: () => void }) {
  const t = useT();
  const locale = useLocale();
  const desktop = useIsDesktop();
  const pathname = usePathname();
  const profile = useLearner((s) => s.profile);
  const board = useRef<SmartboardHandle>(null);
  const [muted, setMuted] = useState(false);
  const [fallbackTitle] = useState(() => (typeof document !== "undefined" ? pageTitle() : ""));
  const language = languageForLocale(locale);
  const pass = profile.tutorPass && profile.tutorPass.until > new Date().toISOString() ? profile.tutorPass.pass : null;
  const topic = ctx?.lessonTitle || fallbackTitle || "General doubt";

  const base = useCallback(() => {
    const page: PageContext = {
      path: pathname ?? undefined,
      course: ctx?.courseTitle,
      lesson: ctx?.lessonTitle || fallbackTitle || undefined,
      summary: ctx?.lessonSummary,
      question: ctx?.questionText,
      answered: ctx?.answered,
      correct: ctx?.answered ? ctx.correct : undefined,
      answer: ctx?.answered ? ctx.answerText : undefined,
      stage,
    };
    return { mode: "ask" as const, language, topic, student: studentInfo(useLearner.getState().profile), explainers: [], page };
  }, [ctx, fallbackTitle, pathname, stage, language, topic]);
  const s = useTutorSession({ board, pass, base, speechLang: speechLang(language), muted });
  const { preloadVoice, reset } = s;

  useEffect(() => {
    preloadVoice();
  }, [preloadVoice]);

  // A new question (or lesson) on the page starts a fresh conversation.
  const ctxKey = `${ctx?.lessonTitle ?? ""}\u0001${ctx?.questionText ?? ""}`;
  const lastKey = useRef(ctxKey);
  useEffect(() => {
    if (lastKey.current === ctxKey) return;
    lastKey.current = ctxKey;
    reset();
    board.current?.reset();
  }, [ctxKey, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || document.fullscreenElement) return;
      e.stopPropagation();
      onClose();
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  const chips = ctx?.questionText
    ? [
        t("tutor.chip.hint", "Give me a hint"),
        t("tutor.chip.step", "Explain this step"),
        ...(ctx.answered && ctx.correct === false ? [t("tutor.chip.wrong", "Why is my answer wrong?")] : []),
        ...(ctx.answered && ctx.correct === true ? [t("tutor.chip.why", "Why is this right?")] : []),
      ]
    : [t("tutor.chip.simple", "Explain this simply"), t("tutor.chip.example", "Give me an example"), t("tutor.chip.quiz", "Quiz me on this")];

  const greeting = ctx?.questionText
    ? ctx.answered
      ? t("tutor.hello.answered", "Want to go through this question together? Ask me anything about it.")
      : t("tutor.hello.question", "Stuck? I won’t just tell you the answer — but I’ll help you get there, one step at a time.")
    : t("tutor.hello.page", "Hi! Ask me anything about “{lesson}” — talk, type, or draw on the board.", { lesson: topic });

  const motionProps = desktop
    ? { initial: { x: 40, y: 0, opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 }, exit: { x: 40, y: 0, opacity: 0 } }
    : { initial: { x: 0, y: "100%", opacity: 1 }, animate: { x: 0, y: 0, opacity: 1 }, exit: { x: 0, y: "100%", opacity: 1 } };

  return (
    <motion.div
      className="fixed inset-0 z-[60] md:pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onKeyDown={(e) => {
        if (e.key !== "Escape") e.stopPropagation();
      }}
    >
      <div className="absolute inset-0 bg-[rgb(11_17_33/0.5)] md:hidden" onClick={onClose} aria-hidden />
      <motion.section
        role="dialog"
        aria-modal={!desktop}
        aria-labelledby="quick-tutor-title"
        {...motionProps}
        transition={{ type: "spring", damping: 30, stiffness: 320 }}
        className="pointer-events-auto absolute inset-x-0 bottom-0 flex max-h-[92dvh] flex-col rounded-t-3xl border-t border-line bg-surface shadow-2xl md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[460px] md:rounded-none md:border-l md:border-t-0"
      >
        <header className="flex items-center gap-2 border-b border-line px-3 py-2.5">
          <Mascot pose={s.state === "thinking" ? "think" : "wave"} size={36} animate={false} />
          <div className="min-w-0 flex-1">
            <h2 id="quick-tutor-title" className="font-black leading-tight">
              {t("tutor.title", "Ask Questy")}
            </h2>
            <p className="truncate text-xs font-semibold text-muted">{topic}</p>
          </div>
          <button type="button" onClick={() => (setMuted(!muted), s.halt())} className="btn-flat !p-2" aria-pressed={muted} aria-label={muted ? t("tutor.live.unmute", "Turn voice on") : t("tutor.live.mute", "Turn voice off")}>
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          {s.log.length > 0 && (
            <button type="button" onClick={() => (s.reset(), board.current?.reset())} className="btn-flat !p-2" aria-label={t("tutor.restart", "Start over")} title={t("tutor.restart", "Start over")}>
              <RotateCcw className="h-4 w-4" />
            </button>
          )}
          <button type="button" onClick={onClose} className="btn-flat !p-2" aria-label={t("tutor.close", "Close")}>
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-3">
          {s.available === false ? (
            <div className="rounded-2xl bg-surface-2 p-4 text-center">
              <div className="flex justify-center">
                <Mascot pose="sad" size={72} animate={false} />
              </div>
              <p className="mt-2 font-black">{t("tutor.off.title", "Ask Questy isn’t switched on yet")}</p>
              <p className="mt-1 text-sm font-semibold text-muted">{t("tutor.off.body", "The AI tutor needs to be set up on this site first. Your lessons, hints and explanations still work as usual.")}</p>
            </div>
          ) : (
            s.log.length === 0 && !s.busy && <p className="rounded-2xl rounded-bl-md bg-surface-2 px-3 py-2 text-[0.95rem] font-semibold">{greeting}</p>
          )}
          <Smartboard ref={board} compact onTap={(el) => (s.unlock(), s.ask(`What is this? (I tapped "${el.label}", id ${el.id})`, { tag: "[tap]" }))} />
          {s.log.length > 0 && (
            <ol className="max-h-40 space-y-1 overflow-y-auto text-sm" aria-label={t("tutor.live.log", "Transcript")}>
              {s.log.slice(-12).map((l, i) => (
                <li key={i} className={clsx("rounded-xl px-2.5 py-1.5", l.who === "student" ? "ml-8 bg-accent text-right text-white" : "mr-8 bg-surface-2")}>
                  {l.text}
                </li>
              ))}
            </ol>
          )}
          {s.log.length === 0 && !s.busy && s.available !== false && (
            <div className="flex flex-wrap gap-1.5">
              {chips.map((c) => (
                <button key={c} type="button" onClick={() => (s.unlock(), s.ask(c))} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-bold transition hover:border-accent hover:text-accent">
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="max-h-[52dvh] overflow-y-auto border-t border-line px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:max-h-none">
          <VoiceDock
            s={s}
            compact
            disabled={s.available === false}
            placeholder={t("tutor.placeholder", "Ask about this page…")}
            actions={
              <Link href={tutorHref(topic)} onClick={() => (s.stopAll(), onClose())} className="btn btn-primary ml-auto inline-flex items-center gap-1.5 whitespace-nowrap !px-3 !py-1.5 text-sm">
                <MonitorPlay className="h-4 w-4" /> {t("tutor.openLive", "Full live lesson")}
              </Link>
            }
          />
          <p className="mt-1.5 text-[10px] font-semibold leading-tight text-muted">{t("tutor.disclaimer.short", "AI tutor — can make mistakes. Don’t share personal details.")}</p>
        </div>
      </motion.section>
    </motion.div>
  );
}
