"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp, CheckCircle2, Volume2, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import type { Question } from "@/content/types";
import { Md, MdInline, plain } from "@/components/Md";
import { sfx, speak } from "@/lib/sound";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function seeded(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export function shuffled<T>(arr: T[], seed: string): T[] {
  const rnd = seeded(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function checkNumeric(q: Extract<Question, { kind: "numeric" }>, value: number) {
  const tol = q.tolerance ?? Math.max(Math.abs(q.answer) * 0.01, 0.01);
  return Math.abs(value - q.answer) <= tol + 1e-9;
}

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,!]$/, "");

export function correctAnswerText(q: Question): string {
  switch (q.kind) {
    case "mcq":
      return q.options[q.answer];
    case "multi":
      return q.answers.map((i) => q.options[i]).join(", ");
    case "truefalse":
      return q.answer ? "True" : "False";
    case "numeric":
      return `${q.answer}${q.unit ? " " + q.unit : ""}`;
    case "fill":
      return q.answer[0];
    case "order":
      return q.items.join(" → ");
  }
}

/** Learner's in-progress answer for any question kind. */
export type Answer = { pick: number[]; tf: boolean | null; text: string; order: number[] };

export const emptyAnswer = (q: Question): Answer => ({
  pick: [],
  tf: null,
  text: "",
  order: q.kind === "order" ? shuffled(q.items.map((_, i) => i), q.q) : [],
});

export function isAnswered(q: Question, a: Answer) {
  if (q.kind === "mcq") return a.pick.length === 1;
  if (q.kind === "multi") return a.pick.length > 0;
  if (q.kind === "truefalse") return a.tf !== null;
  if (q.kind === "order") return true;
  return a.text.trim().length > 0;
}

export function gradeAnswer(q: Question, a: Answer): boolean {
  switch (q.kind) {
    case "mcq":
      return a.pick[0] === q.answer;
    case "multi":
      return [...a.pick].sort().join(",") === [...q.answers].sort().join(",");
    case "truefalse":
      return a.tf === q.answer;
    case "numeric": {
      const v = Number(a.text.replace(/,/g, ""));
      return Number.isFinite(v) && checkNumeric(q, v);
    }
    case "fill":
      return q.answer.some((x) => norm(x) === norm(a.text));
    case "order":
      return a.order.every((v, i) => v === i);
  }
}

export function promptLabel(q: Question) {
  switch (q.kind) {
    case "mcq":
      return "Select the correct answer";
    case "multi":
      return "Select all that apply";
    case "truefalse":
      return "True or false?";
    case "numeric":
      return "Type the answer";
    case "fill":
      return "Fill in the blank";
    case "order":
      return "Put these in the right order";
  }
}

/* ------------------------------------------------------------------ */
/* Controlled input                                                    */
/* ------------------------------------------------------------------ */

/**
 * Renders a question and its answer controls. The parent owns checking: pass
 * `result` (true/false) once graded to lock it and show correct/incorrect states.
 */
export function QuestionInput({
  question: q,
  answer,
  onChange,
  result,
  big,
  onSubmit,
  hideLabel,
}: {
  question: Question;
  answer: Answer;
  onChange: (a: Answer) => void;
  result: boolean | null;
  big?: boolean;
  onSubmit?: () => void;
  hideLabel?: boolean;
}) {
  const locked = result !== null;

  // Number keys pick options, like Duolingo.
  useEffect(() => {
    if (locked || (q.kind !== "mcq" && q.kind !== "multi" && q.kind !== "truefalse")) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === "INPUT") return;
      const n = Number(e.key);
      if (!n) return;
      if (q.kind === "truefalse" && n <= 2) onChange({ ...answer, tf: n === 1 });
      else if (q.kind === "mcq" && n <= q.options.length) onChange({ ...answer, pick: [n - 1] });
      else if (q.kind === "multi" && n <= q.options.length) onChange({ ...answer, pick: answer.pick.includes(n - 1) ? answer.pick.filter((x) => x !== n - 1) : [...answer.pick, n - 1] });
      sfx("tap");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q, answer, onChange, locked]);

  const isCorrectOption = (i: number) => (q.kind === "mcq" ? i === q.answer : q.kind === "multi" ? q.answers.includes(i) : false);

  const optionCls = (i: number, selected: boolean) =>
    clsx(
      "group flex w-full items-center gap-3 rounded-2xl border-2 border-b-4 text-left font-bold transition",
      big ? "p-5 text-xl" : "p-4 text-[17px]",
      !locked && (selected ? "border-accent bg-accent-soft text-accent-shade dark:text-accent" : "border-line bg-surface hover:bg-surface-2 active:translate-y-[2px] active:border-b-2"),
      locked && isCorrectOption(i) && "border-good bg-good-soft text-good-shade",
      locked && selected && !isCorrectOption(i) && "border-bad bg-bad-soft text-bad-shade",
      locked && !selected && !isCorrectOption(i) && "border-line opacity-50",
    );

  return (
    <div>
      {!hideLabel && <p className="eyebrow mb-3">{promptLabel(q)}</p>}
      <div className="flex items-start gap-3">
        <div className={clsx("min-w-0 flex-1 font-extrabold leading-snug", big ? "text-[1.7rem]" : "text-[1.45rem]")}>
          <Md text={q.q} className="space-y-3" />
        </div>
        <button onClick={() => speak(plain(q.q), { rate: 0.95 })} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-b-4 border-line text-accent hover:bg-surface-2" aria-label="Read question aloud">
          <Volume2 className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>

      <div className="mt-7">
        {(q.kind === "mcq" || q.kind === "multi") && (
          <div className={clsx("grid gap-3", q.options.every((o) => o.length < 26) && q.options.length === 4 && "sm:grid-cols-2")}>
            {q.options.map((o, i) => {
              const selected = answer.pick.includes(i);
              return (
                <button
                  key={i}
                  disabled={locked}
                  onClick={() => {
                    sfx("tap");
                    onChange({ ...answer, pick: q.kind === "mcq" ? [i] : selected ? answer.pick.filter((x) => x !== i) : [...answer.pick, i] });
                  }}
                  className={optionCls(i, selected)}
                  aria-pressed={selected}
                >
                  <span className={clsx("grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 text-sm font-black", selected && !locked ? "border-accent text-accent" : "border-line text-muted")}>{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <MdInline text={o} />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {q.kind === "truefalse" && (
          <div className="grid grid-cols-2 gap-3">
            {[true, false].map((v, i) => {
              const selected = answer.tf === v;
              const correct = v === q.answer;
              return (
                <button
                  key={String(v)}
                  disabled={locked}
                  onClick={() => {
                    sfx("tap");
                    onChange({ ...answer, tf: v });
                  }}
                  className={clsx(
                    "flex items-center justify-center gap-3 rounded-2xl border-2 border-b-4 p-5 text-xl font-extrabold transition",
                    !locked && (selected ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface hover:bg-surface-2"),
                    locked && correct && "border-good bg-good-soft text-good-shade",
                    locked && selected && !correct && "border-bad bg-bad-soft text-bad-shade",
                    locked && !selected && !correct && "border-line opacity-50",
                  )}
                  aria-pressed={selected}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg border-2 border-line text-xs font-black text-muted">{i + 1}</span>
                  {v ? "True" : "False"}
                </button>
              );
            })}
          </div>
        )}

        {(q.kind === "numeric" || q.kind === "fill") && (
          <div className="flex items-center gap-3">
            <input
              autoFocus
              value={answer.text}
              disabled={locked}
              onChange={(e) => onChange({ ...answer, text: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && onSubmit?.()}
              inputMode={q.kind === "numeric" ? "decimal" : "text"}
              placeholder={q.kind === "numeric" ? "Type a number" : "Type your answer"}
              className={clsx("input py-4 text-xl", locked && (result ? "!border-good !bg-good-soft" : "!border-bad !bg-bad-soft"))}
              aria-label="Your answer"
            />
            {q.kind === "numeric" && q.unit && <span className="shrink-0 text-lg font-bold text-muted">{q.unit}</span>}
          </div>
        )}

        {q.kind === "order" && (
          <ol className="space-y-2.5">
            {answer.order.map((itemIdx, pos) => (
              <motion.li
                layout
                key={itemIdx}
                className={clsx(
                  "flex items-center gap-3 rounded-2xl border-2 border-b-4 bg-surface p-3.5 font-bold",
                  locked ? (itemIdx === pos ? "border-good bg-good-soft" : "border-bad bg-bad-soft") : "border-line",
                )}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-2 text-sm font-black text-muted">{pos + 1}</span>
                <span className="min-w-0 flex-1">
                  <MdInline text={q.items[itemIdx]} />
                </span>
                {!locked && (
                  <span className="flex gap-1">
                    <button
                      aria-label="Move up"
                      disabled={pos === 0}
                      onClick={() => {
                        const n = [...answer.order];
                        [n[pos - 1], n[pos]] = [n[pos], n[pos - 1]];
                        onChange({ ...answer, order: n });
                      }}
                      className="grid h-9 w-9 place-items-center rounded-xl border-2 border-line hover:bg-surface-2 disabled:opacity-30"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Move down"
                      disabled={pos === answer.order.length - 1}
                      onClick={() => {
                        const n = [...answer.order];
                        [n[pos + 1], n[pos]] = [n[pos], n[pos + 1]];
                        onChange({ ...answer, order: n });
                      }}
                      className="grid h-9 w-9 place-items-center rounded-xl border-2 border-line hover:bg-surface-2 disabled:opacity-30"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </button>
                  </span>
                )}
              </motion.li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Self-contained card (inline checkpoints, chapter drills)            */
/* ------------------------------------------------------------------ */

export function QuestionCard({
  question: q,
  onDone,
  variant = "default",
  index,
  total,
  continueLabel = "Continue",
}: {
  question: Question;
  onDone?: (correct: boolean) => void;
  variant?: "default" | "kids" | "exam";
  index?: number;
  total?: number;
  continueLabel?: string;
}) {
  const initial = useMemo(() => emptyAnswer(q), [q]);
  const [answer, setAnswer] = useState<Answer>(initial);
  const [result, setResult] = useState<boolean | null>(null);

  const check = () => {
    if (!isAnswered(q, answer) || result !== null) return;
    const ok = gradeAnswer(q, answer);
    setResult(ok);
    sfx(ok ? "correct" : "wrong");
  };

  return (
    <div>
      {index !== undefined && total !== undefined && (
        <p className="eyebrow mb-2">
          Question {index + 1} of {total}
        </p>
      )}
      <QuestionInput question={q} answer={answer} onChange={setAnswer} result={result} big={variant === "kids"} onSubmit={check} />
      <AnimatePresence mode="wait">
        {result === null ? (
          <motion.div key="check" className="mt-6 flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button className="btn-good px-8" disabled={!isAnswered(q, answer)} onClick={check}>
              Check
            </button>
          </motion.div>
        ) : (
          <motion.div key="fb" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={clsx("mt-6 rounded-2xl p-5", result ? "bg-good-soft" : "bg-bad-soft")} role="status">
            <div className="flex items-start gap-3">
              {result ? <CheckCircle2 className="h-7 w-7 shrink-0 text-good" /> : <XCircle className="h-7 w-7 shrink-0 text-bad" />}
              <div className="min-w-0 flex-1">
                <div className={clsx("text-xl font-black", result ? "text-good-shade" : "text-bad-shade")}>{result ? "Nice!" : "Correct solution:"}</div>
                {!result && (
                  <div className="mt-1 font-bold text-bad-shade">
                    <MdInline text={correctAnswerText(q)} />
                  </div>
                )}
                {q.explain && <Md text={q.explain} className="prose-quest mt-2 space-y-2 !text-[0.98rem] !leading-7" />}
              </div>
            </div>
            {onDone && (
              <div className="mt-4 flex justify-end">
                <button className={result ? "btn-good" : "btn-bad"} autoFocus onClick={() => onDone(result)}>
                  {continueLabel}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
