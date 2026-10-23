"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check, X } from "lucide-react";

type Level = {
  id: string;
  label: string;
  course: { title: string; href: string };
  q: React.ReactNode;
  options: string[];
  answer: number;
  hint: string;
  why: string;
};

const LEVELS: Level[] = [
  {
    id: "kids",
    label: "Age 6",
    course: { title: "Number Land", href: "/course/number-land" },
    q: (
      <>
        How many apples are there?
        <span className="mt-4 flex gap-2" role="img" aria-label="five apples">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-8 w-8">
              <path d="M12 7c-1-2-3-3-5-2C4 6 3 10 5 15c1 3 3 5 5 4 1 0 1-.5 2-.5s1 .5 2 .5c2 1 4-1 5-4 2-5 1-9-2-10-2-1-4 0-5 2Z" fill="#E5484D" />
              <path d="M12 7c0-2 1-4 3-5" stroke="#2F6B3B" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          ))}
        </span>
      </>
    ),
    options: ["4", "5", "6"],
    answer: 1,
    hint: "Count each apple once. The last number you say is the total.",
    why: "There are five apples: 1, 2, 3, 4, 5.",
  },
  {
    id: "school",
    label: "Class 10",
    course: { title: "School Physics", href: "/course/physics-school" },
    q: "A car drives 30 km at 60 km/h, then 30 km at 30 km/h. What is its average speed?",
    options: ["45 km/h", "40 km/h", "50 km/h"],
    answer: 1,
    hint: "Average speed is total distance divided by total time. Work out how long each 30 km took.",
    why: "The trip takes 0.5 h + 1 h = 1.5 h for 60 km, so the average speed is 60 ÷ 1.5 = 40 km/h.",
  },
  {
    id: "college",
    label: "College",
    course: { title: "Data Structures & Algorithms", href: "/course/dsa" },
    q: "As n becomes very large, which of these grows fastest?",
    options: ["n²", "n log n", "2ⁿ"],
    answer: 2,
    hint: "Try n = 30 and compare 30², 30 × log₂ 30 and 2³⁰.",
    why: "Exponential growth overtakes any polynomial: 2³⁰ is over one billion, while 30² is 900.",
  },
];

/** A real question from three of the courses, with the hint-first feedback used in practice. */
export function HeroPlayground() {
  const [li, setLi] = useState(1);
  const [pick, setPick] = useState<number | null>(null);
  const L = LEVELS[li];
  const correct = pick === L.answer;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(16,24,40,0.05),0_12px_32px_-12px_rgba(16,24,40,0.12)]">
      <div className="flex border-b border-line" role="tablist" aria-label="Level">
        {LEVELS.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={i === li}
            onClick={() => {
              setLi(i);
              setPick(null);
            }}
            className={clsx("-mb-px flex-1 border-b-2 px-4 py-3 text-sm font-semibold transition", i === li ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink")}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        <p className="text-sm text-muted">{L.course.title}</p>
        <div className="mt-2 text-xl font-bold leading-snug text-ink">{L.q}</div>

        <div className="mt-5 grid gap-2" role="radiogroup" aria-label="Answers">
          {L.options.map((o, i) => {
            const state = pick === i ? (i === L.answer ? "right" : "wrong") : correct && i === L.answer ? "right" : null;
            return (
              <button
                key={o}
                role="radio"
                aria-checked={pick === i}
                onClick={() => !correct && setPick(i)}
                className={clsx(
                  "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-[17px] font-semibold transition",
                  state === "right" ? "border-good bg-good-soft text-good-shade" : state === "wrong" ? "border-bad/50 bg-bad-soft text-bad-shade" : "border-line text-ink hover:border-ink/30",
                )}
              >
                <span className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs", state ? "border-transparent" : "border-line text-muted")}>
                  {state === "right" ? <Check className="h-4 w-4" strokeWidth={3} /> : state === "wrong" ? <X className="h-4 w-4" strokeWidth={3} /> : String.fromCharCode(65 + i)}
                </span>
                {o}
              </button>
            );
          })}
        </div>

        <div className="mt-5 min-h-[76px] rounded-xl bg-surface-2/70 px-4 py-3 text-[15px] leading-6 text-ink" aria-live="polite">
          {correct ? (
            <>
              <span className="font-bold text-good-shade">Correct.</span> {L.why}
            </>
          ) : pick !== null ? (
            <>
              <span className="font-bold">Hint:</span> {L.hint}{" "}
              <button onClick={() => setPick(null)} className="font-semibold text-accent hover:underline">
                Try again
              </button>
            </>
          ) : (
            <span className="text-muted">Choose an answer. If it is wrong, you get a hint rather than the solution, as in the course.</span>
          )}
        </div>

        <Link href={L.course.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          Open {L.course.title} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
