"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, Check, ChevronDown, CornerDownLeft, Flame, RotateCcw, X } from "lucide-react";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useT, useBcp47 } from "@/i18n";
import { useMode } from "@/lib/useMode";
import type { SessionLayoutProps } from "../../types";

export const FONT = "[font-family:var(--font-pro),var(--font-indic),system-ui,sans-serif]";

export function useKindName() {
  const t = useT();
  return (kind: SessionLayoutProps["kind"]) =>
    ({
      practice: t("khan.session.kind.practice", "Practice"),
      quiz: t("khan.session.kind.quiz", "Quiz"),
      test: t("khan.session.kind.test", "Unit test"),
      challenge: t("khan.session.kind.challenge", "Course challenge"),
    })[kind];
}

type Mark = "right" | "wrong";

/**
 * Khan Academy-style exercise screen: a calm top bar with the exercise name and
 * a row of answer squares, one centred question card, inline feedback and a
 * sticky Check / Next bar (Enter is handled by the session itself).
 */
export function KhanSessionLayout(p: SessionLayoutProps) {
  const t = useT();
  const nf = new Intl.NumberFormat(useBcp47());
  const mode = useMode();
  const kindName = useKindName();
  const fb = p.feedback;
  const last = p.index + 1 >= p.total;

  // Remember how each question went, for the progress squares.
  const [marks, setMarks] = useState<Record<number, Mark>>({});
  const [retries, setRetries] = useState<Record<number, true>>({});
  useEffect(() => {
    if (p.index === 0 && !fb) setMarks({});
  }, [p.index, fb]);
  useEffect(() => {
    if (fb) setMarks((m) => (m[p.index] ? m : { ...m, [p.index]: fb.correct ? "right" : "wrong" }));
  }, [fb, p.index]);
  useEffect(() => {
    if (p.retry) setRetries((r) => ({ ...r, [p.index]: true }));
  }, [p.retry, p.index]);

  // Bring the feedback into view on small screens.
  const fbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (fb) fbRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [fb]);

  const showCombo = mode.id === "adventure" && p.combo >= 2;
  const showPass = mode.id === "professional" && p.kind !== "practice";
  const manyQuestions = p.total > 24;

  return (
    <div className={clsx("flex min-h-screen flex-col bg-bg text-ink", FONT)}>
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[1040px] items-center gap-3 px-3 py-2.5 sm:px-5">
          <button onClick={p.onQuit} className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-muted transition hover:bg-surface-2 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label={t("khan.session.quit", "Leave this exercise")}>
            <X className="h-5 w-5" />
          </button>
          <CourseIcon slug={p.course.slug} size={28} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-medium text-muted">
              {kindName(p.kind)} · {p.course.title}
            </p>
            <h1 className="truncate text-[15px] font-semibold leading-tight">{p.title}</h1>
          </div>
          {showPass && (
            <span className="hidden shrink-0 rounded-md border border-line px-2 py-1 text-[12px] font-medium text-muted sm:inline">{t("khan.session.passMark", "70% to pass")}</span>
          )}
          <AnimatePresence>
            {showCombo && (
              <motion.span
                key="combo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex shrink-0 items-center gap-1 rounded-md bg-streak/10 px-2 py-1 text-[13px] font-semibold text-streak"
                aria-label={t("khan.session.combo", "{n} correct in a row", { n: p.combo })}
              >
                <Flame className="h-4 w-4 fill-current" /> {nf.format(p.combo)}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Progress squares */}
        <div className="mx-auto flex w-full max-w-[1040px] items-center gap-3 px-3 pb-2.5 sm:px-5">
          <p className="shrink-0 text-[13px] font-medium text-muted" aria-live="polite">
            {t("khan.session.questionOf", "Question {n} of {total}", { n: nf.format(p.index + 1), total: nf.format(p.total) })}
          </p>
          {manyQuestions ? (
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-label={t("khan.session.progress", "Exercise progress")} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p.progress * 100)}>
              <div className="h-full rounded-full bg-accent transition-[width] duration-300" style={{ width: `${p.progress * 100}%` }} />
            </div>
          ) : (
            <ol className="flex flex-1 flex-wrap items-center gap-1.5" aria-label={t("khan.session.progress", "Exercise progress")}>
              {Array.from({ length: p.total }, (_, i) => {
                const mark = marks[i];
                const current = i === p.index;
                const label = mark === "right" ? t("khan.session.dot.right", "Correct") : mark === "wrong" ? t("khan.session.dot.wrong", "Incorrect") : current ? t("khan.session.dot.current", "Current") : t("khan.session.dot.todo", "Not answered");
                return (
                  <li
                    key={i}
                    aria-current={current ? "step" : undefined}
                    aria-label={t("khan.session.dot", "Question {n}: {state}", { n: i + 1, state: label })}
                    className={clsx(
                      "grid h-[18px] w-[18px] place-items-center rounded-[4px] border-2 transition-colors",
                      mark === "right" && "border-good bg-good text-white",
                      mark === "wrong" && "border-bad bg-bad text-white",
                      !mark && current && "border-accent bg-accent-soft",
                      !mark && !current && "border-line bg-surface",
                      current && mark && "ring-2 ring-accent/40 ring-offset-1 ring-offset-surface",
                      retries[i] && !mark && "border-dashed",
                    )}
                  >
                    {mark === "right" && <Check className="h-2.5 w-2.5" strokeWidth={4} aria-hidden />}
                    {mark === "wrong" && <X className="h-2.5 w-2.5" strokeWidth={4} aria-hidden />}
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </header>

      {/* Question */}
      <main className="mx-auto w-full max-w-[760px] flex-1 px-3 pb-10 pt-6 sm:px-5 sm:pt-10">
        {p.retry && (
          <p className="mb-3 flex items-center gap-1.5 text-[13px] font-medium text-muted">
            <RotateCcw className="h-3.5 w-3.5" /> {t("khan.session.retry", "Let’s try this one again")}
          </p>
        )}
        <div className="rounded-lg border border-line bg-surface p-5 text-[1.075rem] leading-relaxed shadow-soft sm:p-8 sm:text-[1.15rem] [&_.katex]:text-[1.12em]">{p.question}</div>

        <div ref={fbRef} className="scroll-mb-28">
          <AnimatePresence mode="wait">{fb && <Feedback key={p.index} fb={fb} index={p.index} />}</AnimatePresence>
        </div>
      </main>

      {/* Bottom bar */}
      <footer className="sticky bottom-0 z-30 border-t border-line bg-surface">
        <div className="mx-auto flex w-full max-w-[1040px] flex-wrap items-center gap-3 px-3 py-3 sm:px-5">
          {/* Get help: the AI tutor ("Ask Questy") mounts itself here. */}
          <div id="tutor-slot" className="flex min-w-0 items-center gap-2" aria-label={t("khan.session.getHelp", "Get help")} />
          <span className="hidden items-center gap-1.5 text-[12px] text-muted md:flex">
            <kbd className="inline-flex items-center gap-1 rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px]">
              <CornerDownLeft className="h-3 w-3" aria-hidden /> Enter
            </kbd>
            {fb ? t("khan.session.enterNext", "to continue") : t("khan.session.enterCheck", "to check")}
          </span>
          <div className="ml-auto flex items-center gap-2">
            {!fb ? (
              <>
                <button onClick={p.onSkip} className="rounded-md px-4 py-2.5 text-[15px] font-semibold text-muted transition hover:bg-surface-2 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  {t("khan.session.skip", "Skip")}
                </button>
                <button
                  onClick={p.onCheck}
                  disabled={!p.canCheck}
                  className="min-w-[120px] rounded-md bg-accent px-6 py-2.5 text-[15px] font-semibold text-white transition hover:bg-accent-shade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:bg-surface-2 disabled:text-muted"
                >
                  {t("khan.session.check", "Check")}
                </button>
              </>
            ) : (
              <button
                onClick={p.onContinue}
                autoFocus
                className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-md bg-accent px-6 py-2.5 text-[15px] font-semibold text-white transition hover:bg-accent-shade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {last ? t("khan.session.finish", "Finish") : t("khan.session.next", "Next question")} <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </footer>
      {p.quitDialog}
    </div>
  );
}

function Feedback({ fb, index }: { fb: NonNullable<SessionLayoutProps["feedback"]>; index: number }) {
  const t = useT();
  const [open, setOpen] = useState(!fb.correct);
  const good = [t("khan.fb.good1", "Correct!"), t("khan.fb.good2", "Nice work!"), t("khan.fb.good3", "Great thinking!"), t("khan.fb.good4", "That’s right!")];
  const id = `khan-explain-${index}`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.16 }}
      aria-live="assertive"
      className={clsx("mt-4 rounded-lg border p-4 sm:p-5", fb.correct ? "border-good/40 bg-good-soft" : "border-bad/40 bg-bad-soft")}
    >
      <div className="flex items-start gap-3">
        <span className={clsx("grid h-8 w-8 shrink-0 place-items-center rounded-full text-white", fb.correct ? "bg-good" : "bg-bad")}>
          {fb.correct ? <Check className="h-[18px] w-[18px]" strokeWidth={3.2} /> : <X className="h-[18px] w-[18px]" strokeWidth={3.2} />}
        </span>
        <div className="min-w-0 flex-1">
          <p className={clsx("text-[1.05rem] font-semibold", fb.correct ? "text-good-shade" : "text-bad-shade")}>
            {fb.correct ? good[index % good.length] : t("khan.fb.notQuite", "Not quite — that’s how we learn.")}
          </p>
          {!fb.correct && (
            <p className="mt-1 text-[15px] text-ink">
              <span className="text-muted">{t("khan.fb.correctAnswer", "Correct answer:")}</span> <span className="font-semibold">{fb.answer}</span>
            </p>
          )}
          {fb.explain && (
            <>
              <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={id} className="mt-2 inline-flex items-center gap-1 rounded text-[14px] font-semibold text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                {open ? t("khan.fb.hide", "Hide explanation") : t("khan.fb.show", "Show explanation")}
                <ChevronDown className={clsx("h-4 w-4 transition", open && "rotate-180")} />
              </button>
              {open && (
                <div id={id} className="mt-3 max-h-[45vh] overflow-y-auto rounded-md border border-line bg-surface p-4 text-ink [&_.katex]:text-[1.06em]">
                  {fb.explain}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}
