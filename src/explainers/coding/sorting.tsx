"use client";

import { useEffect, useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, Play, Shuffle, Square } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { Art, INK, Kid, Stage, STAGE_INK, STAGE_MUTED } from "./_art";

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
function Line({ order, from, cmp, sorted = [], swapPair }: { order: number[]; from?: number[]; cmp?: [number, number]; sorted?: number[]; swapPair?: number[] }) {
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
          <motion.g key={id} initial={{ x: SLOT(start), y: 0 }} animate={{ x: SLOT(slot), y: hop ? [0, -18, 0] : 0 }} transition={{ delay: 0.5, duration: 0.9, ease: "easeInOut" }}>
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
/* Try: sort the line yourself                                         */
/* ------------------------------------------------------------------ */

const PALETTE: [string, string, boolean][] = [
  ["#3B82F6", "#4B2E1E", false],
  ["#F59E0B", "#111827", true],
  ["#10B981", "#7C2D12", false],
  ["#EC4899", "#FACC15", true],
  ["#8B5CF6", "#1F2937", false],
  ["#EF4444", "#78350F", true],
];

interface Person {
  id: number;
  cm: number;
}

const inversions = (a: Person[]) => {
  let n = 0;
  for (let i = 0; i < a.length; i++) for (let j = i + 1; j < a.length; j++) if (a[i].cm > a[j].cm) n++;
  return n;
};

function shuffled(): Person[] {
  const heights = [112, 120, 128, 136, 144, 152].sort(() => Math.random() - 0.5);
  const out = heights.map((cm, id) => ({ id, cm }));
  return inversions(out) < 4 ? shuffled() : out;
}

type Frame = { order: Person[]; cmp: number; swapped: boolean };

function bubbleFrames(start: Person[]): Frame[] {
  const a = start.slice();
  const out: Frame[] = [];
  for (let end = a.length - 1; end > 0; end--) {
    let any = false;
    for (let i = 0; i < end; i++) {
      out.push({ order: a.slice(), cmp: i, swapped: false });
      if (a[i].cm > a[i + 1].cm) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        any = true;
        out.push({ order: a.slice(), cmp: i, swapped: true });
      }
    }
    if (!any) break;
  }
  out.push({ order: a.slice(), cmp: -1, swapped: false });
  return out;
}

function SortingTry() {
  const [line, setLine] = useState<Person[]>(() => [0, 1, 2, 3, 4, 5].map((id) => ({ id, cm: [136, 112, 152, 120, 144, 128][id] })));
  const [start, setStart] = useState(() => inversions(line));
  const [swaps, setSwaps] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);
  const [auto, setAuto] = useState<{ frames: Frame[]; k: number; comps: number } | null>(null);

  const left = inversions(line);
  const sorted = left === 0;
  const cmp = auto ? auto.frames[auto.k].cmp : -1;

  useEffect(() => {
    if (!auto) return;
    if (auto.k >= auto.frames.length - 1) {
      setMsg(`Bubble sort finished with ${auto.comps} comparisons.`);
      setAuto(null);
      return;
    }
    const id = setTimeout(() => {
      const k = auto.k + 1;
      const f = auto.frames[k];
      setLine(f.order);
      if (f.swapped) {
        setSwaps((s) => s + 1);
        sfx("pop");
      }
      setAuto({ ...auto, k, comps: auto.comps + (f.swapped || f.cmp < 0 ? 0 : 1) });
    }, 520);
    return () => clearTimeout(id);
  }, [auto]);

  useEffect(() => {
    if (sorted && swaps > 0) {
      sfx("fanfare");
      burst();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorted]);

  const swap = (i: number) => {
    if (auto || sorted) return;
    const before = line[i].cm > line[i + 1].cm;
    const next = line.slice();
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    setLine(next);
    setSwaps((s) => s + 1);
    if (before) {
      setMsg(`${line[i].cm} is taller than ${line[i + 1].cm} — good swap!`);
      sfx("pop");
    } else {
      setMsg(`Oops — ${line[i].cm} was already shorter than ${line[i + 1].cm}. That swap made the line less sorted.`);
      sfx("wrong");
    }
  };

  const reshuffle = () => {
    const s = shuffled();
    setLine(s);
    setStart(inversions(s));
    setSwaps(0);
    setMsg(null);
    setAuto(null);
  };

  const runBubble = () => {
    const frames = bubbleFrames(line);
    setMsg("Bubble sort: compare each pair of neighbours, swap if the left one is taller…");
    setAuto({ frames, k: 0, comps: frames[0].cmp >= 0 ? 1 : 0 });
  };

  const maxCm = 160;
  const n = line.length;

  return (
    <div className="select-none">
      <p className="mb-3 font-extrabold">Tap ⇄ between two neighbours to swap them. Get everyone from shortest to tallest!</p>

      <div className="relative rounded-2xl border-2 border-line bg-surface-2 px-1 pb-14 pt-2">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          {line.map((p, i) => {
            const [shirt, hair, bow] = PALETTE[p.id];
            const inPair = cmp >= 0 && (i === cmp || i === cmp + 1);
            const settled = sorted;
            return (
              <motion.div key={p.id} layout transition={{ type: "spring", stiffness: 380, damping: 30 }} className={clsx("flex flex-col items-center rounded-xl pt-1", inPair && "bg-amber-200/60")}>
                <svg viewBox={`-26 ${-maxCm * 0.8 - 6} 52 ${maxCm * 0.8 + 10}`} className="h-36 w-full sm:h-44" role="img" aria-label={`Child ${p.cm} centimetres tall`}>
                  <Kid h={p.cm * 0.8} shirt={shirt} hair={hair} bow={bow} mood={settled ? "happy" : "wow"} />
                </svg>
                <span className={clsx("font-mono text-sm font-black", settled ? "text-good" : "text-ink")}>{p.cm}</span>
              </motion.div>
            );
          })}
        </div>
        {/* swap buttons between neighbours */}
        {Array.from({ length: n - 1 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => swap(i)}
            disabled={!!auto || sorted}
            aria-label={`Swap ${line[i].cm} and ${line[i + 1].cm}`}
            className="absolute bottom-2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border-2 border-[#1c2333]/70 bg-white text-[#1c2333] shadow transition hover:scale-110 active:scale-90 disabled:opacity-30"
            style={{ left: `calc(4px + (100% - 8px) * ${(i + 1) / n})` }}
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-2xl bg-surface-2 p-2">
          <p className="text-[11px] font-bold uppercase text-muted">Swaps</p>
          <p className="font-mono text-xl font-black">{swaps}</p>
        </div>
        <div className="rounded-2xl bg-surface-2 p-2">
          <p className="text-[11px] font-bold uppercase text-muted">Pairs out of order</p>
          <p className={clsx("font-mono text-xl font-black", sorted ? "text-good" : "text-bad")}>{left}</p>
        </div>
        <div className="rounded-2xl bg-surface-2 p-2">
          <p className="text-[11px] font-bold uppercase text-muted">Fewest possible</p>
          <p className="font-mono text-xl font-black">{start}</p>
        </div>
      </div>

      <p className={clsx("mt-3 min-h-[3rem] rounded-2xl px-4 py-2 font-bold", sorted ? "bg-good/10 text-good" : "bg-surface-2 text-muted")} aria-live="polite">
        {sorted
          ? `Sorted! You used ${swaps} swap${swaps === 1 ? "" : "s"}; the fewest possible was ${start}. Each good neighbour swap fixes exactly one out-of-order pair — and bubble sort always uses exactly that many swaps too.`
          : msg ?? "Hint: find a taller person standing just left of a shorter one."}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {auto ? (
          <button type="button" className="btn-ghost min-h-[48px]" onClick={() => setAuto(null)}>
            <Square className="h-4 w-4" /> Stop
          </button>
        ) : (
          <button type="button" className="btn-primary min-h-[48px]" onClick={runBubble} disabled={sorted}>
            <Play className="h-4 w-4" /> Watch bubble sort
          </button>
        )}
        <button type="button" className="btn-ghost min-h-[48px]" onClick={reshuffle}>
          <Shuffle className="h-4 w-4" /> Shuffle
        </button>
      </div>
    </div>
  );
}

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
  ages: "8–18",
  lessons: ["dsa/sorting-searching/sorting-algorithms", "sql/querying-basics/order-by-limit"],
  color: COLOR,
  icon: "📊",
  watch,
  try: SortingTry,
  story,
  like,
};
