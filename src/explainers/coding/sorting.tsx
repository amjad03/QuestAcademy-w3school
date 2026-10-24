"use client";

import { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Explainer, Mission, MissionApi } from "../types";
import { Art, INK, Kid, MissionButton, Stage, STAGE_INK, STAGE_MUTED, useTicker } from "./_art";

const COLOR = "#DB2777";

/* ------------------------------------------------------------------ */
/* Cast                                                                */
/* ------------------------------------------------------------------ */

interface Child {
  id: number;
  h: number; // drawing height
  cm: number;
  shirt: string;
  hair: string;
  bow?: boolean;
}

const CAST: Child[] = [
  { id: 0, h: 80, cm: 140, shirt: "#3B82F6", hair: "#4B2E1E" },
  { id: 1, h: 55, cm: 115, shirt: "#F59E0B", hair: "#111827", bow: true },
  { id: 2, h: 100, cm: 160, shirt: "#10B981", hair: "#7C2D12" },
  { id: 3, h: 65, cm: 125, shirt: "#EC4899", hair: "#FACC15", bow: true },
  { id: 4, h: 90, cm: 150, shirt: "#8B5CF6", hair: "#1F2937" },
];

const SLOT = (i: number) => 60 + i * 70;
const GROUND = 205;

/** A row of kids. `order` lists cast ids by position; `from` is the order they animate from. */
function Line({ order, from, cmp, sorted = [], swapPair, delay = 0.5, dur = 0.9 }: { order: number[]; from?: number[]; cmp?: [number, number]; sorted?: number[]; swapPair?: number[]; delay?: number; dur?: number }) {
  return (
    <>
      <rect x={10} y={GROUND} width={380} height={8} rx={4} fill="rgb(var(--line))" />
      {cmp && (
        <motion.rect x={SLOT(cmp[0]) - 30} y={60} width={130} height={GROUND - 52} rx={14} fill="#FDE68A" opacity={0.45} stroke="#F59E0B" strokeWidth={2.5} strokeDasharray="6 4" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} />
      )}
      {order.map((id, slot) => {
        const kid = CAST[id];
        const start = from ? from.indexOf(id) : slot;
        const hop = swapPair?.includes(id);
        return (
          <motion.g key={id} initial={{ x: SLOT(start), y: 0 }} animate={{ x: SLOT(slot), y: hop ? [0, -18, 0] : 0 }} transition={{ delay, duration: dur, ease: "easeInOut" }}>
            <g transform={`translate(0 ${GROUND})`}>
              <Kid h={kid.h} shirt={kid.shirt} hair={kid.hair} bow={kid.bow} mood={sorted.includes(slot) ? "happy" : "wow"} />
            </g>
            <text y={GROUND + 26} textAnchor="middle" fontSize={13} fontWeight={900} fill={sorted.includes(slot) ? "#16A34A" : STAGE_INK}>
              {kid.cm}
            </text>
          </motion.g>
        );
      })}
    </>
  );
}

const O0 = [0, 1, 2, 3, 4]; // 140 115 160 125 150
const O1 = [1, 0, 2, 3, 4]; // after first swap
const O2 = [1, 0, 3, 4, 2]; // end of pass 1 (160 at the end)
const O3 = [1, 3, 0, 4, 2]; // pass 2: sorted

function Dots({ n, x, y, color }: { n: number; x: number; y: number; color: string }) {
  const d: ReactElement[] = [];
  let k = 0;
  for (let r = 0; r < n - 1; r++)
    for (let c = 0; c <= r; c++) {
      d.push(<motion.circle key={`${r}-${c}`} cx={x + c * 9} cy={y + r * 9} r={3.4} fill={color} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + k * 0.02 }} />);
      k++;
    }
  return <g>{d}</g>;
}

const watch: Explainer["watch"] = [
  {
    title: "Line up by height",
    say: "These five friends need to stand from shortest to tallest. Right now they are all mixed up.",
    scene: (
      <Stage label="Five children of mixed heights stand in a line: 140, 115, 160, 125 and 150 centimetres">
        <Line order={O0} />
      </Stage>
    ),
  },
  {
    title: "Compare two neighbours",
    say: "Bubble sort only ever looks at two neighbours at a time. Is the one on the left taller than the one on the right?",
    scene: (
      <Stage label="The first two children, 140 and 115, are highlighted for comparison">
        <Line order={O0} cmp={[0, 1]} />
        <text x={SLOT(0) + 35} y={52} textAnchor="middle" fontSize={14} fontWeight={900} fill={STAGE_INK}>
          140 &gt; 115 ?
        </text>
      </Stage>
    ),
  },
  {
    title: "Swap if the left one is taller",
    say: "Yes, 140 is taller than 115, so they swap places. If the left one were shorter, they would stay put.",
    scene: (
      <Stage label="The two children swap places so 115 is now first">
        <Line order={O1} from={O0} swapPair={[0, 1]} cmp={[0, 1]} />
        <text x={SLOT(0) + 35} y={52} textAnchor="middle" fontSize={14} fontWeight={900} fill="#16A34A">
          swap!
        </text>
      </Stage>
    ),
  },
  {
    title: "Walk down the whole line",
    say: "Keep going: compare the next pair, swap if needed, move along. By the end, the tallest has bubbled all the way to the end.",
    scene: (
      <Stage label="Comparing pair by pair, 160 moves step by step to the last place">
        <Line order={O2} from={O1} swapPair={[2]} sorted={[4]} />
        <motion.text x={SLOT(4)} y={60} textAnchor="middle" fontSize={22} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}>
          ⭐
        </motion.text>
        <text x={200} y={36} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED}>
          pass 1 done: the tallest is in place
        </text>
      </Stage>
    ),
  },
  {
    title: "Repeat until nothing swaps",
    say: "Walk the line again and again. When a whole walk has no swaps at all, everyone is in order. Sorted!",
    scene: (
      <Stage label="After another pass, the line is sorted from 115 to 160 and everyone is smiling">
        <Line order={O3} from={O2} swapPair={[0, 3]} sorted={[0, 1, 2, 3, 4]} />
        <motion.text x={200} y={36} textAnchor="middle" fontSize={16} fontWeight={900} fill="#16A34A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          115 · 125 · 140 · 150 · 160 ✓
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "How much work is it?",
    say: "With 5 people, bubble sort makes at most 10 comparisons. With 10 people it is 45. Double the people means about four times the work!",
    scene: (
      <Stage label="Triangles of dots: 5 people need up to 10 comparisons, 10 people up to 45, 100 people up to 4950">
        <Dots n={5} x={40} y={80} color={COLOR} />
        <text x={58} y={60} textAnchor="middle" fontSize={13} fontWeight={900} fill={STAGE_INK}>
          5 people
        </text>
        <text x={58} y={140} textAnchor="middle" fontSize={16} fontWeight={900} fill={COLOR}>
          10
        </text>
        <Dots n={10} x={150} y={70} color="#7C3AED" />
        <text x={190} y={56} textAnchor="middle" fontSize={13} fontWeight={900} fill={STAGE_INK}>
          10 people
        </text>
        <text x={190} y={168} textAnchor="middle" fontSize={16} fontWeight={900} fill="#7C3AED">
          45
        </text>
        <text x={330} y={110} textAnchor="middle" fontSize={13} fontWeight={900} fill={STAGE_INK}>
          100 people
        </text>
        <text x={330} y={140} textAnchor="middle" fontSize={26} fontWeight={900} fill="#EA580C">
          4,950
        </text>
        <text x={200} y={214} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED}>
          about n × n ÷ 2 comparisons — computer scientists call it O(n²)
        </text>
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

type Frame = { order: number[]; cmp: number; swapped: boolean };

/** Bubble-sort frames: compare positions from..to-1 with their right neighbour, swapping when the left is taller. */
function pass(start: number[], from: number, to: number): Frame[] {
  const a = start.slice();
  const out: Frame[] = [];
  for (let i = from; i < to; i++) {
    const swapped = CAST[a[i]].cm > CAST[a[i + 1]].cm;
    if (swapped) [a[i], a[i + 1]] = [a[i + 1], a[i]];
    out.push({ order: a.slice(), cmp: i, swapped });
  }
  return out;
}

/** One Run button: Bolt's bubble sort walks the line comparing one pair of neighbours at a time. */
function StepPass({ done, complete, start, from, to, sorted, button }: MissionApi & { start: number[]; from: number; to: number; sorted: number[]; button: string }) {
  const frames = pass(start, from, to);
  const [k, setK] = useState(-1); // frames shown - 1
  const running = k >= 0 && k < frames.length;
  useTicker(running, 1100, () => setK((x) => x + 1));
  const f = k >= 0 ? frames[Math.min(k, frames.length - 1)] : null;
  const order = f ? f.order : start;
  const shown = k >= 0 ? frames.slice(0, k + 1) : [];
  const swaps = shown.filter((x) => x.swapped).length;
  const finished = k >= frames.length;
  const left = f && !finished ? CAST[order[f.cmp]] : null;
  const right = f && !finished ? CAST[order[f.cmp + 1]] : null;
  return (
    <div>
      <Stage label={finished ? `Done: ${shown.length} comparisons and ${swaps} swaps` : "Five friends in a line, waiting to be sorted"}>
        <Line order={order} cmp={f && !finished ? [f.cmp, f.cmp + 1] : undefined} sorted={finished ? sorted : []} delay={0.1} dur={0.6} />
        <text x={200} y={40} textAnchor="middle" fontSize={18} fontWeight={900} fill={finished ? "#16A34A" : STAGE_INK}>
          {left && right && f
            ? f.swapped
              ? `${right.cm} > ${left.cm}? yes: swap`
              : `${left.cm} > ${right.cm}? no: stay`
            : k >= 0
              ? `${shown.length} compared · ${swaps} swapped`
              : ""}
        </text>
      </Stage>
      <MissionButton color={COLOR} disabled={complete || k >= 0} onClick={() => {
          setK(0);
          done();
        }}>
        <Play className="h-5 w-5" /> {button}
      </MissionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Sort five friends from shortest to tallest, the way a computer does.",
  steps: [
    {
      task: "Compare the first two friends.",
      predict: { question: "How does the computer find out who is in the wrong place?", options: ["It looks at the whole line at once and just knows", "It compares two neighbours at a time"], answer: 1, trap: 0 },
      scene: (api) => <StepPass {...api} start={O0} from={0} to={1} sorted={[]} button="Compare" />,
      hint: "Tap the pink Compare button.",
      explain: "A computer cannot *see* the whole line. It can only **compare** two numbers at a time. 140 > 115, so the left friend is taller and they **swap**. That one rule is **bubble sort**.",
    },
    {
      task: "Finish walking down the line.",
      predict: { question: "After one walk down the line, who will be at the end?", options: ["The tallest friend (160)", "Everyone will be sorted", "The shortest friend (115)"], answer: 0, trap: 1 },
      scene: (api) => <StepPass {...api} start={O1} from={1} to={4} sorted={[4]} button="Keep comparing" />,
      hint: "Tap the button and watch each pair get checked.",
      explain: "One walk down the line is called a **pass**. Each time the tallest so far meets a shorter friend they swap, so the tallest **bubbles** to the end. The others are still not in order.",
    },
    {
      task: "Do a second pass.",
      predict: { question: "On the second pass, how many swaps will there be?", options: ["0", "1", "4"], answer: 1 },
      scene: (api) => <StepPass {...api} start={O2} from={0} to={3} sorted={[0, 1, 2, 3, 4]} button="Second pass" />,
      hint: "Tap the button and count the swaps.",
      explain: "Only **1 swap** (140 and 125) was needed, and now the line is sorted. A computer knows it is finished when a whole pass makes **no swaps**.",
    },
  ],
  takeaway: "Bubble sort compares two neighbours at a time and swaps them if they are the wrong way round, walking the line again and again until nothing swaps.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const mini = (order: number[], gap = 34, x0 = 32) =>
  order.map((id, i) => (
    <g key={id} transform={`translate(${x0 + i * gap} 132)`}>
      <Kid h={CAST[id].h * 0.85} shirt={CAST[id].shirt} hair={CAST[id].hair} bow={CAST[id].bow} />
    </g>
  ));

const story: Explainer["story"] = [
  {
    art: <Art label="Five children stand in a muddled line">{mini(O0)}</Art>,
    speech: "Shortest to tallest, please!",
    caption: "The gym teacher wants a tidy line, but everyone is jumbled.",
  },
  {
    art: (
      <Art label="Mia points at the two children at the front">
        {mini(O0)}
        <rect x={14} y={30} width={70} height={106} rx={10} fill="none" stroke="#F59E0B" strokeWidth={3} strokeDasharray="5 4" />
      </Art>
    ),
    speech: "Just check the person next to you!",
    caption: "Mia has an idea: only compare two neighbours at a time.",
  },
  {
    art: (
      <Art label="Two neighbours swap places">
        {mini(O1)}
        <path d="M30 22 q18 -14 36 0" fill="none" stroke={COLOR} strokeWidth={3} markerEnd="url(#sort-arrow)" />
        <defs>
          <marker id="sort-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill={COLOR} />
          </marker>
        </defs>
      </Art>
    ),
    speech: "You're taller — swap!",
    caption: "If the left one is taller, they swap. Then the next pair checks, and the next…",
  },
  {
    art: (
      <Art label="The children stand neatly from shortest to tallest">
        {mini(O3)}
        <text x={180} y={30} textAnchor="middle" fontSize={22}>
          ✅
        </text>
      </Art>
    ),
    speech: "We sorted ourselves!",
    caption: "After a few walks down the line with no swaps left, everyone is in order.",
  },
];

const like: Explainer["like"] = {
  headline: "Bubble sort is like bubbles rising in a fizzy drink.",
  everyday: {
    label: "Big bubbles float to the top",
    art: (
      <Art label="A glass of fizzy drink with bubbles rising, the biggest at the top" vb="0 0 200 130">
        <path d="M65 10 L75 122 H125 L135 10 Z" fill="#FEF3C7" stroke={INK} strokeWidth={3} />
        {[
          [100, 6, 0],
          [88, 4, 0.6],
          [112, 3, 1.1],
          [95, 2.5, 1.6],
        ].map(([x, r, d], k) => (
          <motion.circle key={k} cx={x} r={r} fill="#fff" stroke="#F59E0B" strokeWidth={1.5} initial={{ cy: 118 }} animate={{ cy: [118, 20] }} transition={{ duration: 2.4, delay: d, repeat: Infinity, ease: "easeIn" }} />
        ))}
      </Art>
    ),
  },
  concept: {
    label: "The biggest number moves to the end each pass",
    art: (
      <Art label="Bars where the tallest bar moves to the right end" vb="0 0 200 130">
        {[40, 70, 55, 100, 85].map((h, i) => (
          <rect key={i} x={30 + i * 30} y={115 - h} width={22} height={h} rx={4} fill={i === 3 ? COLOR : "#94A3B8"} stroke={INK} strokeWidth={1.5} />
        ))}
        <path d="M131 20 q20 -14 36 0" fill="none" stroke={COLOR} strokeWidth={3} />
        <path d="M167 20 l-8 -2 l4 -6 z" fill={COLOR} />
      </Art>
    ),
  },
  pairs: [
    ["The biggest bubble rises first", "The biggest value reaches the end on pass 1"],
    ["Bubbles only nudge their neighbours", "Only neighbouring items are compared"],
    ["The fizz keeps going", "Repeat passes over the list"],
    ["The drink settles", "A pass with no swaps: the list is sorted"],
  ],
  limits:
    "Real bubbles all move at once; bubble sort does one comparison at a time. It is also slow for big lists (about n² steps), so real software uses faster sorts like merge sort or quicksort, which take about n log n steps.",
};

export const sortingExplainer: Explainer = {
  id: "coding-bubble-sort",
  title: "Sorting: swap the neighbours",
  tagline: "Line friends up by height with bubble sort — one neighbour swap at a time.",
  area: "Computer science",
  ages: "11–15",
  lessons: ["dsa/sorting-searching/sorting-algorithms", "sql/querying-basics/order-by-limit"],
  color: COLOR,
  icon: "📊",
  watch,
  misconception: { myth: "A computer looks at the whole list at once and sees what order it should be in.", truth: "A computer can only compare two items at a time. A sorting algorithm is a plan for which pairs to compare and when to swap." },
  mission,
  story,
  like,
};
