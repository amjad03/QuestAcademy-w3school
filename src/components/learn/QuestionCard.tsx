"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp, Check, CheckCircle2, Volume2, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import clsx from "clsx";
import type { Question } from "@/content/types";
import { Md, MdInline, plain } from "@/components/Md";
import { sfx, speak } from "@/lib/sound";

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

/**
 * One interactive question with instant feedback.
 * `variant="kids"` makes it big, tappable and auto-checks on tap.
 */
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
  const kids = variant === "kids";
  const [picked, setPicked] = useState<number[]>([]);
  const [tf, setTf] = useState<boolean | null>(null);
  const [text, setText] = useState("");
  const orderSeed = useMemo(() => (q.kind === "order" ? shuffled(q.items.map((_, i) => i), q.q) : []), [q]);
  const [order, setOrder] = useState<number[]>(orderSeed);
  const [result, setResult] = useState<boolean | null>(null);

  const ready =
    q.kind === "mcq" ? picked.length === 1 : q.kind === "multi" ? picked.length > 0 : q.kind === "truefalse" ? tf !== null : q.kind === "order" ? true : text.trim().length > 0;

  const check = (override?: { pick?: number; tf?: boolean }) => {
    let ok = false;
    switch (q.kind) {
      case "mcq":
        ok = (override?.pick ?? picked[0]) === q.answer;
        break;
      case "multi": {
        const a = [...q.answers].sort().join(",");
        ok = [...picked].sort().join(",") === a;
        break;
      }
      case "truefalse":
        ok = (override?.tf ?? tf) === q.answer;
        break;
      case "numeric": {
        const v = Number(text.replace(/,/g, ""));
        ok = Number.isFinite(v) && checkNumeric(q, v);
        break;
      }
      case "fill":
        ok = q.answer.some((a) => norm(a) === norm(text));
        break;
      case "order":
        ok = order.every((v, i) => v === i);
        break;
    }
    setResult(ok);
    sfx(ok ? "correct" : "wrong");
  };

  const locked = result !== null;
  const optionCls = (i: number) =>
    clsx(
      "group flex w-full items-center gap-3 rounded-2xl border-2 text-left transition",
      kids ? "p-4 text-xl font-semibold font-kids shadow-pop active:translate-y-1 active:shadow-none" : "p-3.5",
      !locked && (picked.includes(i) ? "border-accent bg-accent/10" : "border-line bg-surface hover:border-accent/50 hover:bg-surface-2"),
      locked && q.kind === "mcq" && i === q.answer && "border-good bg-good/10",
      locked && q.kind === "multi" && q.answers.includes(i) && "border-good bg-good/10",
      locked && picked.includes(i) && !(q.kind === "mcq" ? i === q.answer : q.kind === "multi" && q.answers.includes(i)) && "border-bad bg-bad/10",
      locked && !picked.includes(i) && !(q.kind === "mcq" ? i === q.answer : q.kind === "multi" && q.answers.includes(i)) && "border-line opacity-60",
    );

  return (
    <div className={clsx(kids && "font-kids")}>
      {index !== undefined && total !== undefined && (
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
          Question {index + 1} of {total}
          {q.difficulty && <span className="chip normal-case">{["", "Easy", "Medium", "Hard"][q.difficulty]}</span>}
          {q.kind === "multi" && <span className="chip normal-case">Select all that apply</span>}
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className={clsx("flex-1", kids ? "text-2xl font-semibold leading-snug" : "text-lg font-semibold leading-relaxed")}>
          <Md text={q.q} className="space-y-3" />
        </div>
        {kids && (
          <button onClick={() => speak(plain(q.q), { rate: 0.9, pitch: 1.2 })} className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent" aria-label="Read question aloud">
            <Volume2 className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="mt-5">
        {(q.kind === "mcq" || q.kind === "multi") && (
          <div className={clsx("grid gap-2.5", kids ? "grid-cols-2" : q.options.every((o) => o.length < 28) && q.options.length === 4 ? "sm:grid-cols-2" : "")}>
            {q.options.map((o, i) => (
              <button
                key={i}
                disabled={locked}
                onClick={() => {
                  sfx("tap");
                  if (q.kind === "mcq") {
                    setPicked([i]);
                    if (kids) check({ pick: i });
                  } else setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
                }}
                className={optionCls(i)}
              >
                {!kids && (
                  <span className={clsx("grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs font-bold", picked.includes(i) ? "border-accent bg-accent text-white" : "border-line text-muted")}>
                    {q.kind === "multi" ? picked.includes(i) ? <Check className="h-4 w-4" /> : "" : String.fromCharCode(65 + i)}
                  </span>
                )}
                <span className={clsx("min-w-0 flex-1", kids && "text-center")}>
                  <MdInline text={o} />
                </span>
              </button>
            ))}
          </div>
        )}

        {q.kind === "truefalse" && (
          <div className="grid grid-cols-2 gap-3">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                disabled={locked}
                onClick={() => {
                  setTf(v);
                  sfx("tap");
                  if (kids) check({ tf: v });
                }}
                className={clsx(
                  "rounded-2xl border-2 font-bold transition",
                  kids ? "p-6 text-3xl shadow-pop" : "p-4 text-lg",
                  !locked && (tf === v ? "border-accent bg-accent/10" : "border-line bg-surface hover:border-accent/50"),
                  locked && v === (q as { answer: boolean }).answer && "border-good bg-good/10",
                  locked && tf === v && v !== (q as { answer: boolean }).answer && "border-bad bg-bad/10",
                  locked && tf !== v && v !== (q as { answer: boolean }).answer && "border-line opacity-60",
                )}
              >
                {kids ? (v ? "👍 Yes" : "👎 No") : v ? "True" : "False"}
              </button>
            ))}
          </div>
        )}

        {(q.kind === "numeric" || q.kind === "fill") && (
          <div className="flex items-center gap-3">
            <input
              value={text}
              disabled={locked}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ready && !locked && check()}
              inputMode={q.kind === "numeric" ? "decimal" : "text"}
              placeholder={q.kind === "numeric" ? "Type a number" : "Type your answer"}
              className={clsx("input font-mono", kids ? "h-16 text-center text-3xl" : "h-12 text-lg", locked && (result ? "!border-good" : "!border-bad"))}
              aria-label="Your answer"
            />
            {q.kind === "numeric" && q.unit && <span className="font-mono text-muted">{q.unit}</span>}
          </div>
        )}

        {q.kind === "order" && (
          <ol className="space-y-2">
            {order.map((itemIdx, pos) => (
              <motion.li
                layout
                key={itemIdx}
                className={clsx(
                  "flex items-center gap-3 rounded-2xl border-2 bg-surface p-3",
                  locked ? (itemIdx === pos ? "border-good bg-good/10" : "border-bad bg-bad/10") : "border-line",
                )}
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-2 text-xs font-bold">{pos + 1}</span>
                <span className="flex-1">
                  <MdInline text={q.items[itemIdx]} />
                </span>
                {!locked && (
                  <span className="flex gap-1">
                    <button
                      aria-label="Move up"
                      disabled={pos === 0}
                      onClick={() => setOrder((o) => { const n = [...o]; [n[pos - 1], n[pos]] = [n[pos], n[pos - 1]]; return n; })}
                      className="grid h-8 w-8 place-items-center rounded-lg border border-line hover:bg-surface-2 disabled:opacity-30"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Move down"
                      disabled={pos === order.length - 1}
                      onClick={() => setOrder((o) => { const n = [...o]; [n[pos + 1], n[pos]] = [n[pos], n[pos + 1]]; return n; })}
                      className="grid h-8 w-8 place-items-center rounded-lg border border-line hover:bg-surface-2 disabled:opacity-30"
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

      <AnimatePresence mode="wait">
        {result === null ? (
          !(kids && (q.kind === "mcq" || q.kind === "truefalse")) && (
            <motion.div key="check" className="mt-5 flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button className="btn-pop px-8" disabled={!ready} onClick={() => check()}>
                Check answer
              </button>
            </motion.div>
          )
        ) : (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx("mt-5 rounded-3xl border-2 p-5", result ? "border-good/40 bg-good/10" : "border-bad/30 bg-bad/5")}
            role="status"
          >
            <div className="flex items-start gap-3">
              {result ? <CheckCircle2 className="h-7 w-7 shrink-0 text-good" /> : <XCircle className="h-7 w-7 shrink-0 text-bad" />}
              <div className="min-w-0 flex-1">
                <div className={clsx("font-bold", kids ? "text-2xl" : "text-lg", result ? "text-good" : "text-bad")}>
                  {result ? (kids ? "Yay! You got it! 🎉" : ["Correct!", "Nailed it!", "Spot on!", "Excellent!"][q.q.length % 4]) : kids ? "Oops! Let’s learn it 💡" : "Not quite."}
                </div>
                {!result && (
                  <div className="mt-1 text-sm">
                    Correct answer: <b><MdInline text={correctAnswerText(q)} /></b>
                  </div>
                )}
                {q.explain && <Md text={q.explain} className="prose-quest mt-2 space-y-2 text-[0.95rem] leading-7 text-ink/80" />}
              </div>
            </div>
            {onDone && (
              <div className="mt-4 flex justify-end">
                <button className="btn-pop px-8" autoFocus onClick={() => onDone(result)}>
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
