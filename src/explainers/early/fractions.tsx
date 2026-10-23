"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, Undo2 } from "lucide-react";
import type { Explainer } from "../types";
import { say } from "@/lib/voice";
import { Kid, Panel, Stage, T, TryFrame, pop, rand, rise, type Mood, type Status } from "./_kit";

const C = "#D97706";
const SHIRTS = ["#3B82F6", "#EC4899", "#22C55E", "#8B5CF6", "#F97316", "#06B6D4"];

/* ------------------------------------------------------------------ */
/* Drawing helpers                                                     */
/* ------------------------------------------------------------------ */

/** Wedge from angle a0 to a1 (fractions of a turn, 0 = 12 o'clock). */
function wedge(cx: number, cy: number, r: number, a0: number, a1: number) {
  if (a1 - a0 >= 0.9999) return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
  const p = (a: number) => [cx + r * Math.sin(a * Math.PI * 2), cy - r * Math.cos(a * Math.PI * 2)];
  const [x0, y0] = p(a0);
  const [x1, y1] = p(a1);
  return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${a1 - a0 > 0.5 ? 1 : 0} 1 ${x1} ${y1} Z`;
}

const dir = (a: number) => ({ x: Math.sin(a * Math.PI * 2), y: -Math.cos(a * Math.PI * 2) });

type Food = "pizza" | "cake";

/** One slice of pizza (or cake) between a0..a1, pushed out by `gap`. */
function Slice({ cx, cy, r, a0, a1, gap = 0, food = "pizza", dim }: { cx: number; cy: number; r: number; a0: number; a1: number; gap?: number; food?: Food; dim?: boolean }) {
  const m = dir((a0 + a1) / 2);
  const ox = m.x * gap;
  const oy = m.y * gap;
  const crust = food === "pizza" ? "#E59E3B" : "#F9A8D4";
  const inner = food === "pizza" ? "#FDE047" : "#FDF2F8";
  const span = a1 - a0;
  const peps = food === "pizza" ? Math.max(1, Math.round(span * 8)) : 0;
  return (
    <g transform={`translate(${ox} ${oy})`} opacity={dim ? 0.35 : 1}>
      <path d={wedge(cx, cy, r, a0, a1)} fill={crust} stroke="#fff" strokeWidth={2} />
      <path d={wedge(cx, cy, r * 0.84, a0, a1)} fill={inner} />
      {Array.from({ length: peps }, (_, k) => {
        const a = a0 + ((k + 0.5) / peps) * span;
        const d = dir(a);
        const rr = r * (k % 2 ? 0.45 : 0.62);
        return <circle key={k} cx={cx + d.x * rr} cy={cy + d.y * rr} r={r * 0.09} fill="#DC2626" />;
      })}
      {food === "cake" && Array.from({ length: Math.max(1, Math.round(span * 6)) }, (_, k) => {
        const a = a0 + ((k + 0.5) / Math.max(1, Math.round(span * 6))) * span;
        const d = dir(a);
        return <circle key={k} cx={cx + d.x * r * 0.6} cy={cy + d.y * r * 0.6} r={r * 0.1} fill="#E11D48" />;
      })}
    </g>
  );
}

/** Equal slices of a round food. */
function Round({ cx, cy, r, n, gap = 0, food = "pizza", highlight }: { cx: number; cy: number; r: number; n: number; gap?: number; food?: Food; highlight?: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <Slice key={i} cx={cx} cy={cy} r={r} a0={i / n} a1={(i + 1) / n} gap={gap} food={food} dim={highlight !== undefined && i !== highlight} />
      ))}
    </g>
  );
}

/** A stacked fraction like ½ drawn in SVG. */
function Frac({ x, y, n = 1, d, size = 22, color = "#1c2333" }: { x: number; y: number; n?: number; d: number; size?: number; color?: string }) {
  return (
    <g>
      <rect x={x - size * 0.75} y={y - size * 1.15} width={size * 1.5} height={size * 2.3} rx={size * 0.4} fill="white" opacity={0.92} />
      <T x={x} y={y - size * 0.55} size={size} color={color}>
        {n}
      </T>
      <line x1={x - size * 0.45} x2={x + size * 0.45} y1={y} y2={y} stroke={color} strokeWidth={size * 0.12} strokeLinecap="round" />
      <T x={x} y={y + size * 0.6} size={size} color={color}>
        {d}
      </T>
    </g>
  );
}

const kidXs = (k: number) => (k === 2 ? [110, 290] : k === 3 ? [80, 200, 320] : k === 4 ? [60, 153, 247, 340] : [40, 104, 168, 232, 296, 360]);

function Kids({ k, moods, y = 258, s = 0.82 }: { k: number; moods?: Mood[]; y?: number; s?: number }) {
  return (
    <g>
      {kidXs(k).map((x, i) => (
        <Kid key={i} x={x} y={y} s={s} shirt={SHIRTS[i]} bow={i % 2 === 1} hair={i % 3 === 2 ? "#1F2937" : "#5B3416"} mood={moods?.[i] ?? "happy"} />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const P = { cx: 200, cy: 92, r: 72 };

function HalvesScene({ cut }: { cut?: boolean }) {
  return (
    <Stage label={cut ? "The pizza is cut into two equal halves" : "One whole pizza and two hungry friends"}>
      {!cut ? (
        <motion.g {...pop(0.2)}>
          <Round {...P} n={1} />
        </motion.g>
      ) : (
        <>
          {[0, 1].map((i) => (
            <motion.g key={i} initial={{ x: 0 }} animate={{ x: i ? 10 : -10 }} transition={{ delay: 1.3, duration: 0.6 }}>
              <Slice {...P} a0={i / 2} a1={(i + 1) / 2} />
            </motion.g>
          ))}
          <motion.path d={`M ${P.cx} ${P.cy - P.r - 10} V ${P.cy + P.r + 10}`} stroke="#475569" strokeWidth={4} strokeDasharray="8 6" initial={{ pathLength: 0, opacity: 1 }} animate={{ pathLength: 1, opacity: [1, 1, 0] }} transition={{ duration: 1.4 }} />
          <motion.g {...pop(2)}>
            <Frac x={P.cx + 50} y={P.cy} d={2} />
            <Frac x={P.cx - 50} y={P.cy} d={2} />
          </motion.g>
        </>
      )}
      <Kids k={2} moods={cut ? ["happy", "happy"] : ["wow", "wow"]} />
    </Stage>
  );
}

function UnfairScene() {
  return (
    <Stage label="The pizza is cut into one big piece and one small piece. One friend is sad. Not fair!">
      <motion.g initial={{ x: 0 }} animate={{ x: -12 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <Slice {...P} a0={0.18} a1={1} />
      </motion.g>
      <motion.g initial={{ x: 0 }} animate={{ x: 14, y: -6 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <Slice {...P} a0={0} a1={0.18} />
      </motion.g>
      <Kids k={2} moods={["happy", "sad"]} />
      <motion.g {...pop(1.3)}>
        <circle cx={330} cy={52} r={30} fill="#FEE2E2" stroke="#DC2626" strokeWidth={4} />
        <path d="M316 38 l 28 28 M344 38 l -28 28" stroke="#DC2626" strokeWidth={6} strokeLinecap="round" />
      </motion.g>
    </Stage>
  );
}

function ThirdsScene() {
  return (
    <Stage label="Three friends share a pizza cut into three equal parts, each part is one third">
      {[0, 1, 2].map((i) => (
        <motion.g key={i} {...pop(0.2 + i * 0.35)}>
          <Slice {...P} a0={i / 3} a1={(i + 1) / 3} gap={7} />
        </motion.g>
      ))}
      <motion.g {...pop(1.5)}>
        {[0, 1, 2].map((i) => {
          const d = dir((i + 0.5) / 3);
          return <Frac key={i} x={P.cx + d.x * 44} y={P.cy + d.y * 40} d={3} size={17} />;
        })}
      </motion.g>
      <Kids k={3} />
    </Stage>
  );
}

function ChocBar({ x, y, w, h, n, gap = 0, moveTo }: { x: number; y: number; w: number; h: number; n: number; gap?: number; moveTo?: { x: number; y: number }[] }) {
  const pw = w / n;
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const px = x + i * pw + (i - (n - 1) / 2) * gap;
        const target = moveTo?.[i];
        return (
          <motion.g key={i} initial={{ x: 0, y: 0 }} animate={target ? { x: target.x - (px + pw / 2), y: target.y - (y + h / 2), scale: 0.7 } : { x: 0, y: 0 }} transition={{ delay: 1 + i * 0.25, duration: 0.8 }}>
            <rect x={px} y={y} width={pw} height={h} rx={4} fill="#7C3F1D" stroke="#4A2410" strokeWidth={2} />
            <rect x={px + 5} y={y + 5} width={pw - 10} height={h - 10} rx={3} fill="#93502A" />
          </motion.g>
        );
      })}
    </g>
  );
}

function QuartersScene() {
  const xs = kidXs(4);
  return (
    <Stage label="Four friends share a chocolate bar in four equal pieces, each piece is one quarter">
      <ChocBar x={80} y={40} w={240} h={70} n={4} gap={6} moveTo={xs.map((x) => ({ x: x + 18, y: 172 }))} />
      <Kids k={4} />
      <motion.g {...pop(2.4)}>
        {xs.map((x) => (
          <Frac key={x} x={x - 26} y={150} d={4} size={14} />
        ))}
      </motion.g>
    </Stage>
  );
}

function CompareScene() {
  return (
    <Stage label="One half is bigger than one third, which is bigger than one quarter">
      {[2, 3, 4].map((n, i) => (
        <motion.g key={n} {...rise(0.2 + i * 0.4)}>
          <Round cx={75 + i * 125} cy={100} r={52} n={n} gap={3} highlight={0} />
          <Frac x={75 + i * 125} y={196} d={n} size={22} color={C} />
        </motion.g>
      ))}
      <motion.g {...pop(1.6)}>
        <T x={137} y={196} size={26} color="#94A3B8">
          {">"}
        </T>
        <T x={262} y={196} size={26} color="#94A3B8">
          {">"}
        </T>
      </motion.g>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Try: cut so everyone gets a fair share                              */
/* ------------------------------------------------------------------ */

function FairTry() {
  const [round, setRound] = useState(0);
  const r = useMemo(() => ({ kids: rand(2, 4), food: (Math.random() < 0.5 ? "pizza" : "bar") as "pizza" | "bar" }), [round]);
  const [n, setN] = useState(1);
  const [shared, setShared] = useState(false);
  const fair = n % r.kids === 0;
  const status: Status = !shared ? "play" : fair ? "good" : "oops";
  const xs = kidXs(r.kids);
  const got = xs.map((_, i) => Array.from({ length: n }, (_, p) => p).filter((p) => p % r.kids === i).length);
  const max = Math.max(...got);
  const moods: Mood[] = got.map((g) => (!shared ? "think" : fair ? "happy" : g < max ? "sad" : "think"));

  const FC = { cx: 200, cy: 92, r: 74 };
  const BAR = { x: 70, y: 52, w: 260, h: 80 };

  /** Centre of piece p, and where it lands in its kid's hands. */
  const piece = (p: number) => {
    const kid = p % r.kids;
    const stack = Math.floor(p / r.kids);
    const land = { x: xs[kid] + 22 + stack * 7, y: 214 - stack * 9 };
    if (r.food === "pizza") {
      const d = dir((p + 0.5) / n);
      const c = n === 1 ? { x: FC.cx, y: FC.cy } : { x: FC.cx + d.x * FC.r * 0.55, y: FC.cy + d.y * FC.r * 0.55 };
      return { c, land };
    }
    return { c: { x: BAR.x + (p + 0.5) * (BAR.w / n), y: BAR.y + BAR.h / 2 }, land };
  };

  const share = () => {
    setShared(true);
    if (n % r.kids === 0) say(n === r.kids ? `Fair! Everyone gets one ${["", "", "half", "third", "quarter"][r.kids]}.` : "Fair! Everyone gets the same.");
    else say(n < r.kids ? "Oh no, someone has no piece!" : "Oh no, that's not fair!");
  };
  const another = () => {
    setN(1);
    setShared(false);
    setRound((x) => x + 1);
  };

  return (
    <TryFrame color={C} round={round} status={status} onAnother={another} picture={r.food === "pizza" ? "🍕" : "🍫"} prompt={`Cut the ${r.food === "pizza" ? "pizza" : "chocolate"} so all ${r.kids} friends get a fair share.`}>
      <div className="overflow-hidden rounded-2xl border-2 border-line" style={{ background: "#FFFBEB" }}>
        <svg viewBox="0 0 400 270" className="block h-auto w-full" style={{ maxHeight: 320 }} role="img" aria-label={`${r.food === "pizza" ? "Pizza" : "Chocolate bar"} cut into ${n} equal ${n === 1 ? "piece" : "pieces"} for ${r.kids} friends${shared ? (fair ? ". Everyone gets the same." : ". Not fair.") : ""}`}>
          {Array.from({ length: n }, (_, p) => {
            const { c, land } = piece(p);
            return (
              <motion.g key={`${round}-${n}-${p}`} initial={{ x: 0, y: 0, scale: 1 }} animate={shared ? { x: land.x - c.x, y: land.y - c.y, scale: r.food === "pizza" ? 0.5 : 0.45 } : { x: 0, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: shared ? p * 0.12 : 0, ease: "easeInOut" }}>
                {r.food === "pizza" ? (
                  <Slice {...FC} a0={p / n} a1={(p + 1) / n} gap={n > 1 ? 4 : 0} />
                ) : (
                  <g>
                    <rect x={BAR.x + p * (BAR.w / n) + 2} y={BAR.y} width={BAR.w / n - 4} height={BAR.h} rx={4} fill="#7C3F1D" stroke="#4A2410" strokeWidth={2} />
                    <rect x={BAR.x + p * (BAR.w / n) + 7} y={BAR.y + 6} width={Math.max(2, BAR.w / n - 14)} height={BAR.h - 12} rx={3} fill="#93502A" />
                  </g>
                )}
              </motion.g>
            );
          })}
          <Kids k={r.kids} moods={moods} y={262} s={0.78} />
          {shared && fair && (
            <motion.g {...pop(0.9)}>
              <Frac x={200} y={150} n={n / r.kids} d={n} size={22} color={C} />
            </motion.g>
          )}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-2" role="group" aria-label="Number of pieces">
          <button type="button" disabled={shared || n <= 1} onClick={() => setN((v) => Math.max(1, v - 1))} className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-b-4 border-line bg-surface active:translate-y-[2px] disabled:opacity-40" aria-label="Fewer pieces">
            <Minus className="h-6 w-6" />
          </button>
          <motion.span key={n} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="flex min-w-[84px] items-center justify-center gap-1 text-3xl font-black">
            <span aria-hidden>🔪</span>
            {n}
          </motion.span>
          <button type="button" disabled={shared || n >= 8} onClick={() => setN((v) => Math.min(8, v + 1))} className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-b-4 border-line bg-surface active:translate-y-[2px] disabled:opacity-40" aria-label="More pieces">
            <Plus className="h-6 w-6" />
          </button>
        </div>
        {!shared ? (
          <button type="button" onClick={share} className="btn h-14 !px-6 text-white" style={{ background: C, borderColor: "#92400E" }}>
            🤲 Share!
          </button>
        ) : (
          <button type="button" onClick={() => setShared(false)} className="btn-ghost h-14 !px-5" aria-label="Take the pieces back and cut again">
            <Undo2 className="h-5 w-5" /> 🔪
          </button>
        )}
      </div>
    </TryFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const CK = { cx: 120, cy: 60, r: 40, food: "cake" as Food };

function TwoSisters({ moods }: { moods: [Mood, Mood] }) {
  return (
    <g>
      <Kid x={30} y={148} s={0.72} shirt="#EC4899" bow mood={moods[0]} />
      <Kid x={210} y={148} s={0.72} shirt="#8B5CF6" bow hair="#1F2937" mood={moods[1]} />
    </g>
  );
}

const story = [
  {
    art: (
      <Panel label="Two sisters look at one whole cake">
        <Round {...CK} n={1} />
        <TwoSisters moods={["wow", "wow"]} />
      </Panel>
    ),
    speech: "Can we share?",
    caption: "Ava and Zoe have one cake to share.",
  },
  {
    art: (
      <Panel label="The cake is cut into a big piece and a small piece, Zoe is upset">
        <g transform="translate(-6 0)">
          <Slice {...CK} a0={0.2} a1={1} />
        </g>
        <g transform="translate(8 -4)">
          <Slice {...CK} a0={0} a1={0.2} />
        </g>
        <TwoSisters moods={["happy", "sad"]} />
      </Panel>
    ),
    speech: "That's not fair!",
    caption: "One piece is big and one is small. Zoe is upset.",
  },
  {
    art: (
      <Panel label="The cake is cut exactly down the middle into two equal halves">
        <Slice {...CK} a0={0} a1={0.5} gap={5} />
        <Slice {...CK} a0={0.5} a1={1} gap={5} />
        <path d="M120 14 V 106" stroke="#475569" strokeWidth={2.5} strokeDasharray="5 4" />
        <TwoSisters moods={["think", "think"]} />
      </Panel>
    ),
    speech: "Two equal halves!",
    caption: "Mum cuts it right down the middle. Both parts are the same size.",
  },
  {
    art: (
      <Panel label="Both sisters are happy, each with one half of the cake">
        <g transform="translate(-28 8)">
          <Slice cx={120} cy={60} r={40} a0={0.5} a1={1} food="cake" />
        </g>
        <g transform="translate(28 8)">
          <Slice cx={120} cy={60} r={40} a0={0} a1={0.5} food="cake" />
        </g>
        <Frac x={120} y={68} d={2} size={18} color={C} />
        <TwoSisters moods={["happy", "happy"]} />
      </Panel>
    ),
    caption: "Each sister gets one half: ½. Fair shares!",
  },
];

export const fractions: Explainer = {
  id: "fractions-fair-shares",
  title: "Fractions are fair shares",
  tagline: "Cut into equal parts so everyone gets the same: halves, thirds and quarters.",
  area: "Maths",
  ages: "5–8",
  lessons: ["math-magic/fractions/what-is-a-fraction", "math-magic/fractions/comparing-fractions", "math-magic/division/sharing-equally", "math-middle/fractions-decimals/understanding-fractions"],
  color: C,
  icon: "🍕",
  watch: [
    { title: "One pizza, two friends", say: "Here is one whole pizza, and two hungry friends.", scene: <HalvesScene /> },
    { title: "Two equal halves", say: "Cut it into two equal parts. Each part is one half.", scene: <HalvesScene cut /> },
    { title: "Not fair!", say: "If one piece is bigger, that's not fair. Fraction parts must be the same size.", scene: <UnfairScene /> },
    { title: "Thirds", say: "Three friends? Cut three equal parts. Each part is one third.", scene: <ThirdsScene /> },
    { title: "Quarters", say: "Four friends share a chocolate bar. Four equal parts are called quarters.", scene: <QuartersScene /> },
    { title: "More friends, smaller pieces", say: "The more friends share, the smaller each piece gets. A half is bigger than a quarter!", scene: <CompareScene /> },
  ],
  try: FairTry,
  story,
  like: {
    headline: "A fraction is like sharing a pizza fairly with friends.",
    everyday: {
      label: "4 friends, 1 slice each",
      art: (
        <Panel label="A pizza in four slices with one slice pulled out">
          <Round cx={120} cy={75} r={58} n={4} gap={3} highlight={undefined} />
          <g transform="translate(14 -14)">
            <Slice cx={120} cy={75} r={58} a0={0} a1={0.25} />
          </g>
        </Panel>
      ),
    },
    concept: {
      label: "¼ — one of four equal parts",
      art: (
        <Panel label="A circle in four equal parts with one part shaded: one quarter">
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={wedge(85, 75, 56, i / 4, (i + 1) / 4)} fill={i === 0 ? C : "#FEF3C7"} stroke="#92400E" strokeWidth={2} />
          ))}
          <Frac x={190} y={75} d={4} size={26} color={C} />
        </Panel>
      ),
    },
    pairs: [
      ["The whole pizza", "One whole (1)"],
      ["How many equal slices you cut", "The bottom number"],
      ["Slices you take", "The top number"],
      ["Every slice the same size", "The parts must be equal"],
    ],
    limits: "Real slices are never perfectly equal, but fraction parts are exactly equal. Fractions also work for things you can't slice, like half an hour or a quarter of a class.",
  },
};
