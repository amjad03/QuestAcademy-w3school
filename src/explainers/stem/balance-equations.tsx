"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Explainer } from "../types";
import { DARK, Feedback, INK, Kid, MUTED, Pad, Svg, TryShell } from "./_kit";

const C = "#8B5CF6";
const BOX = "#8B5CF6";
const UNIT = "#f59e0b";

type Side = { x: number; n: number };

function sideText(s: Side) {
  const parts: string[] = [];
  if (s.x) parts.push(s.x === 1 ? "x" : `${s.x}x`);
  if (s.n) parts.push(`${s.n}`);
  return parts.length ? parts.join(" + ") : "0";
}
const eq = (l: Side, r: Side) => `${sideText(l)} = ${sideText(r)}`;

/* ---------------- Balance scale drawing ---------------- */

function Items({ side, reveal, xv, dark }: { side: Side; reveal?: boolean; xv: number; dark?: boolean }) {
  const boxRows = Math.ceil(side.x / 4);
  const els = [];
  for (let i = 0; i < side.x; i++) {
    const row = Math.floor(i / 4);
    const inRow = Math.min(4, side.x - row * 4);
    const col = i % 4;
    const bx = (col - (inRow - 1) / 2) * 30 - 13;
    const by = -28 - row * 28;
    els.push(
      <motion.g key={`x${i}`} initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40, transition: { duration: 0.5 } }}>
        <rect x={bx} y={by} width="26" height="26" rx="5" fill={BOX} stroke={dark ? DARK : "#5b21b6"} strokeWidth="2" />
        <text x={bx + 13} y={by + 18} textAnchor="middle" fontSize="15" fontWeight="900" fill="white" fontStyle={reveal ? "normal" : "italic"}>
          {reveal ? xv : "x"}
        </text>
      </motion.g>,
    );
  }
  const base = -boxRows * 28;
  for (let i = 0; i < side.n; i++) {
    const row = Math.floor(i / 7);
    const inRow = Math.min(7, side.n - row * 7);
    const col = i % 7;
    const ux = (col - (inRow - 1) / 2) * 18 - 8;
    const uy = base - 18 - row * 18;
    els.push(
      <motion.g key={`u${i}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40, transition: { duration: 0.5 } }}>
        <rect x={ux} y={uy} width="16" height="16" rx="3" fill={UNIT} stroke={dark ? DARK : "#b45309"} strokeWidth="1.5" />
        <text x={ux + 8} y={uy + 12} textAnchor="middle" fontSize="10" fontWeight="900" fill="#451a03">
          1
        </text>
      </motion.g>,
    );
  }
  return <AnimatePresence>{els}</AnimatePresence>;
}

export function Scale({ left, right, xv, reveal, tilt: forced, dark }: { left: Side; right: Side; xv: number; reveal?: boolean; tilt?: number; dark?: boolean }) {
  const diff = left.x * xv + left.n - (right.x * xv + right.n);
  const tilt = forced ?? Math.max(-12, Math.min(12, diff * 2.5));
  const th = (tilt * Math.PI) / 180;
  const cx = 200;
  const cy = 64;
  const L = 130;
  const lx = cx - L * Math.cos(th);
  const ly = cy + L * Math.sin(th);
  const rx = cx + L * Math.cos(th);
  const ry = cy - L * Math.sin(th);
  const ink = dark ? DARK : INK;
  const spring = { type: "spring" as const, stiffness: 90, damping: 14 };
  const pan = (x: number, y: number, side: Side, key: string) => (
    <motion.g key={key} initial={false} animate={{ x, y: y + 64 }} transition={spring}>
      <line x1="0" y1="-64" x2="-58" y2="0" stroke={ink} strokeWidth="1.8" />
      <line x1="0" y1="-64" x2="58" y2="0" stroke={ink} strokeWidth="1.8" />
      <Items side={side} reveal={reveal} xv={xv} dark={dark} />
      <path d="M -66 0 L 66 0 L 52 10 L -52 10 Z" fill="#cbd5e1" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
    </motion.g>
  );
  return (
    <g>
      <path d={`M ${cx} ${cy} L ${cx - 16} 238 L ${cx + 16} 238 Z`} fill="#94a3b8" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x={cx - 60} y="236" width="120" height="12" rx="6" fill="#64748b" stroke={ink} strokeWidth="2.5" />
      <motion.line initial={false} animate={{ x1: lx, y1: ly, x2: rx, y2: ry }} transition={spring} stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="7" fill="#fbbf24" stroke={ink} strokeWidth="2.5" />
      {pan(lx, ly, left, "L")}
      {pan(rx, ry, right, "R")}
      {/* pointer showing level */}
      <motion.line initial={false} x1={cx} y1={cy} animate={{ x2: cx + 34 * Math.sin(th), y2: cy - 34 * Math.cos(th) }} transition={spring} stroke={Math.abs(tilt) < 0.5 ? "#22c55e" : "#ef4444"} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function EqLabel({ text, color = INK }: { text: string; color?: string }) {
  return (
    <motion.text key={text} x="200" y="24" textAnchor="middle" fontSize="22" fontWeight="900" fill={color} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {text}
    </motion.text>
  );
}

/** A scene that changes from one state to another after a short pause. */
function AutoScale({ from, to, xv = 4, label, text0, text1, after }: { from: [Side, Side]; to: [Side, Side]; xv?: number; label: string; text0: string; text1: string; after?: { text: string; color: string } }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setOn(true), 1300);
    return () => clearTimeout(id);
  }, []);
  const [l, r] = on ? to : from;
  return (
    <Svg label={label} vb="0 0 400 260">
      <Scale left={l} right={r} xv={xv} />
      <EqLabel text={on ? text1 : text0} />
      {on && after && (
        <motion.text x="200" y="200" textAnchor="middle" fontSize="18" fontWeight="900" fill={after.color} stroke="rgb(var(--surface))" strokeWidth="5" paintOrder="stroke" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          {after.text}
        </motion.text>
      )}
    </Svg>
  );
}

const S0: [Side, Side] = [
  { x: 2, n: 3 },
  { x: 0, n: 11 },
];

/* ---------------- Try: solve on the scale ---------------- */

const PUZZLES: { l: Side; r: Side; xv: number }[] = [
  { l: { x: 1, n: 6 }, r: { x: 0, n: 9 }, xv: 3 },
  { l: { x: 3, n: 0 }, r: { x: 0, n: 12 }, xv: 4 },
  { l: { x: 2, n: 3 }, r: { x: 0, n: 13 }, xv: 5 },
  { l: { x: 3, n: 2 }, r: { x: 1, n: 8 }, xv: 3 },
];

function BalanceTry() {
  const [p, setP] = useState(0);
  const [l, setL] = useState<Side>(PUZZLES[0].l);
  const [r, setR] = useState<Side>(PUZZLES[0].r);
  const [moves, setMoves] = useState(0);
  const [last, setLast] = useState<"one" | "both" | null>(null);
  const xv = PUZZLES[p].xv;
  const wl = l.x * xv + l.n;
  const wr = r.x * xv + r.n;
  const level = wl === wr;
  const solved = level && ((l.x === 1 && l.n === 0 && r.x === 0) || (r.x === 1 && r.n === 0 && l.x === 0));
  const answer = l.x === 1 ? r.n : l.n;

  const load = (k: number) => {
    setP(k);
    setL(PUZZLES[k].l);
    setR(PUZZLES[k].r);
    setMoves(0);
    setLast(null);
  };
  const act = (nl: Side, nr: Side, kind: "one" | "both") => {
    setL(nl);
    setR(nr);
    setMoves((m) => m + 1);
    setLast(kind);
  };
  const lim = (s: Side): Side => ({ x: Math.max(0, Math.min(4, s.x)), n: Math.max(0, Math.min(14, s.n)) });
  const canDiv = (k: number) => l.x % k === 0 && l.n % k === 0 && r.x % k === 0 && r.n % k === 0 && (l.x + l.n + r.x + r.n) > 0 && !(l.x === 0 && l.n === 0) && !(r.x === 0 && r.n === 0);
  const div = (k: number) => act({ x: l.x / k, n: l.n / k }, { x: r.x / k, n: r.n / k }, "both");

  const sideButtons = (which: "L" | "R") => {
    const s = which === "L" ? l : r;
    const set = (ns: Side) => (which === "L" ? act(lim(ns), r, "one") : act(l, lim(ns), "one"));
    return (
      <div className="flex flex-wrap justify-center gap-1.5">
        <Pad onClick={() => set({ ...s, n: s.n + 1 })} disabled={s.n >= 14 || solved} color={UNIT} label={`Add 1 to the ${which === "L" ? "left" : "right"} only`}>
          +1
        </Pad>
        <Pad onClick={() => set({ ...s, n: s.n - 1 })} disabled={s.n <= 0 || solved} color={UNIT} label={`Take 1 from the ${which === "L" ? "left" : "right"} only`}>
          −1
        </Pad>
        <Pad onClick={() => set({ ...s, x: s.x - 1 })} disabled={s.x <= 0 || solved} color={BOX} label={`Take one x from the ${which === "L" ? "left" : "right"} only`}>
          −<i>x</i>
        </Pad>
      </div>
    );
  };

  return (
    <TryShell title="Keep the scale level" hint="Each purple box x hides the same secret weight. Get one box alone on a pan, with the scale still level." onReset={() => load(p)}>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {PUZZLES.map((q, k) => (
          <button key={k} type="button" onClick={() => load(k)} className="min-h-[40px] rounded-xl border-2 px-3 text-sm font-extrabold" style={k === p ? { background: C, color: "white", borderColor: C } : { borderColor: "rgb(var(--line))" }}>
            {eq(q.l, q.r)}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border-2 border-line p-1">
        <Svg label={`Balance scale. Left pan: ${sideText(l)}. Right pan: ${sideText(r)}. ${level ? "Level." : wl > wr ? "Left side is lower." : "Right side is lower."}`} vb="0 0 400 260" maxH={300}>
          <Scale left={l} right={r} xv={xv} reveal={solved} />
          <EqLabel text={eq(l, r)} color={level ? INK : "#ef4444"} />
        </Svg>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border-2 border-line p-2">
          <p className="mb-1.5 text-center text-xs font-black uppercase tracking-wide text-muted">Left pan only</p>
          {sideButtons("L")}
        </div>
        <div className="rounded-2xl border-2 p-2" style={{ borderColor: C }}>
          <p className="mb-1.5 text-center text-xs font-black uppercase tracking-wide" style={{ color: C }}>
            Both pans
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            <Pad onClick={() => act({ ...l, n: l.n - 1 }, { ...r, n: r.n - 1 }, "both")} disabled={l.n < 1 || r.n < 1 || solved} color={C} solid>
              −1 both
            </Pad>
            <Pad onClick={() => act({ ...l, x: l.x - 1 }, { ...r, x: r.x - 1 }, "both")} disabled={l.x < 1 || r.x < 1 || solved} color={C} solid>
              −<i>x</i> both
            </Pad>
            <Pad onClick={() => div(2)} disabled={!canDiv(2) || solved} color={C} solid>
              ÷2 both
            </Pad>
            <Pad onClick={() => div(3)} disabled={!canDiv(3) || solved} color={C} solid>
              ÷3 both
            </Pad>
          </div>
        </div>
        <div className="rounded-2xl border-2 border-line p-2">
          <p className="mb-1.5 text-center text-xs font-black uppercase tracking-wide text-muted">Right pan only</p>
          {sideButtons("R")}
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {solved ? (
          <Feedback tone="good" k={`s${p}`}>
            You found it: <b>x = {answer}</b> in {moves} moves! Check: put {answer} back into {eq(PUZZLES[p].l, PUZZLES[p].r)} and both sides weigh the same.
          </Feedback>
        ) : !level ? (
          <Feedback tone="bad" k={`t${wl > wr}`}>
            Tipped! The {wl > wr ? "left" : "right"} pan is heavier now. {last === "one" ? "You changed only one side — do the same to the other side to level it again." : "Fix it by changing one side."}
          </Feedback>
        ) : (
          <Feedback tone="info" k={`b${moves}`}>
            {moves === 0 ? "Level. Try a “one pan only” button first and watch what happens… then use “both pans” to keep it fair." : "Level ✓ Same change on both sides keeps it balanced. Keep going until one x is alone."}
          </Feedback>
        )}
        {solved && (
          <Pad onClick={() => load((p + 1) % PUZZLES.length)} color={C} solid>
            Next puzzle →
          </Pad>
        )}
      </div>
    </TryShell>
  );
}

/* ---------------- Story + analogy ---------------- */

function ComicScale({ l, r, xv, reveal }: { l: Side; r: Side; xv: number; reveal?: boolean }) {
  return (
    <g transform="translate(62 42) scale(0.44)">
      <Scale left={l} right={r} xv={xv} reveal={reveal} dark />
    </g>
  );
}

const story = [
  {
    art: (
      <Svg label="Leo holds a mystery bag of marbles next to a scale" vb="0 0 240 160" maxH={170}>
        <ComicScale l={{ x: 1, n: 2 }} r={{ x: 0, n: 7 }} xv={5} />
        <Kid x={30} y={152} s={0.75} shirt="#22c55e" mood="thinking" />
      </Svg>
    ),
    speech: "How many in the bag?",
    caption: "Leo's sealed bag of marbles plus 2 loose marbles balances 7 marbles: x + 2 = 7.",
  },
  {
    art: (
      <Svg label="Maya takes marbles off only one side and the scale tips" vb="0 0 240 160" maxH={170}>
        <ComicScale l={{ x: 1, n: 0 }} r={{ x: 0, n: 7 }} xv={5} />
        <Kid x={30} y={152} s={0.75} shirt="#f97316" longHair hair="#7c2d12" mood="surprised" />
      </Svg>
    ),
    speech: "Oops, it tipped!",
    caption: "Maya grabs the 2 loose marbles from the left only. The right side drops: it's not equal any more.",
  },
  {
    art: (
      <Svg label="Both sides have 2 marbles removed and the scale is level again" vb="0 0 240 160" maxH={170}>
        <ComicScale l={{ x: 1, n: 0 }} r={{ x: 0, n: 5 }} xv={5} />
        <Kid x={30} y={152} s={0.75} shirt="#22c55e" pose="point" />
      </Svg>
    ),
    speech: "Take 2 from BOTH!",
    caption: "So they take 2 marbles off the right as well. Level again: x = 5.",
  },
  {
    art: (
      <Svg label="The bag is opened and it contains 5 marbles; both kids cheer" vb="0 0 240 160" maxH={170}>
        <ComicScale l={{ x: 1, n: 2 }} r={{ x: 0, n: 7 }} xv={5} reveal />
        <Kid x={18} y={152} s={0.6} shirt="#22c55e" pose="cheer" />
        <Kid x={46} y={152} s={0.6} shirt="#f97316" longHair hair="#7c2d12" pose="cheer" />
      </Svg>
    ),
    speech: "5 + 2 = 7 ✓",
    caption: "They open the bag: 5 marbles! Putting it back, 5 + 2 = 7, so the answer checks out.",
  },
];

const like = {
  headline: "An equation is like a see-saw that must stay perfectly level.",
  everyday: {
    label: "A level see-saw",
    art: (
      <Svg label="Two children of equal weight on a level see-saw" vb="0 0 200 150" maxH={160}>
        <rect y="130" width="200" height="20" fill="#bbf7d0" />
        <path d="M 100 100 L 86 130 L 114 130 Z" fill="#94a3b8" stroke={DARK} strokeWidth="2" />
        <rect x="12" y="95" width="176" height="8" rx="4" fill="#b45309" stroke={DARK} strokeWidth="2" />
        <Kid x={32} y={95} s={0.55} shirt="#22c55e" pose="cheer" />
        <Kid x={168} y={95} s={0.55} shirt="#f97316" longHair hair="#7c2d12" pose="cheer" flip />
      </Svg>
    ),
  },
  concept: {
    label: "A balanced equation",
    art: (
      <Svg label="Equation 2x plus 3 equals 11 and the same steps applied to both sides" vb="0 0 200 150" maxH={160}>
        <text x="100" y="40" textAnchor="middle" fontSize="22" fontWeight="900" fill={DARK}>
          2x + 3 = 11
        </text>
        <text x="100" y="70" textAnchor="middle" fontSize="14" fontWeight="800" fill={C}>
          −3 both sides
        </text>
        <text x="100" y="98" textAnchor="middle" fontSize="22" fontWeight="900" fill={DARK}>
          2x = 8
        </text>
        <text x="100" y="122" textAnchor="middle" fontSize="14" fontWeight="800" fill={C}>
          ÷2 both sides
        </text>
        <text x="100" y="146" textAnchor="middle" fontSize="22" fontWeight="900" fill={DARK}>
          x = 4
        </text>
      </Svg>
    ),
  },
  pairs: [
    ["The see-saw is level", "The two sides are equal (=)"],
    ["A child getting off one end", "Changing only one side — it tips"],
    ["Two equal children getting off, one each end", "Doing the same to both sides"],
    ["Finding one child's weight", "Getting x on its own"],
  ] as [string, string][],
  limits:
    "Real scales only work with positive weights, so they can't easily show negative numbers or subtracting more than is there. Algebra lets you do any operation to both sides (except divide by zero) — even ones you can't do with real blocks.",
};

export const balanceEquations: Explainer = {
  id: "balance-equations",
  title: "Solving equations is keeping a balance",
  tagline: "Whatever you do to one side, do to the other — and watch x appear.",
  area: "Maths",
  ages: "10–15",
  lessons: ["math-middle/algebra-basics/linear-equations", "math-middle/algebra-basics/algebraic-expressions"],
  color: C,
  icon: "⚖️",
  watch: [
    {
      title: "An equation is a level scale",
      say: "2x + 3 = 11 means the left pan weighs exactly the same as the right pan. Each purple box x is a mystery weight.",
      scene: (
        <Svg label="Balance scale level with two x boxes and 3 blocks on the left and 11 blocks on the right">
          <Scale left={S0[0]} right={S0[1]} xv={4} />
          <EqLabel text="2x + 3 = 11" />
        </Svg>
      ),
    },
    {
      title: "Change one side and it tips",
      say: "If we take 3 blocks off only the left pan, the scale tips. The two sides aren't equal any more.",
      scene: <AutoScale from={S0} to={[{ x: 2, n: 0 }, { x: 0, n: 11 }]} label="Three blocks are removed from the left pan only and the scale tips to the right" text0="2x + 3 = 11" text1="2x ≠ 11" after={{ text: "✗ Not fair — it tipped!", color: "#ef4444" }} />,
    },
    {
      title: "Do the same to both sides",
      say: "Take 3 blocks off BOTH pans and the scale stays level. Now 2x = 8.",
      scene: <AutoScale from={S0} to={[{ x: 2, n: 0 }, { x: 0, n: 8 }]} label="Three blocks are removed from both pans and the scale stays level, showing 2x equals 8" text0="2x + 3 = 11" text1="2x = 8" after={{ text: "−3 from both sides ✓", color: "#22c55e" }} />,
    },
    {
      title: "Share both sides fairly",
      say: "Two boxes weigh the same as 8 blocks, so one box weighs half of that. Halve both sides: x = 4.",
      scene: <AutoScale from={[{ x: 2, n: 0 }, { x: 0, n: 8 }]} to={[{ x: 1, n: 0 }, { x: 0, n: 4 }]} label="Both sides are halved leaving one box balancing four blocks" text0="2x = 8" text1="x = 4" after={{ text: "÷2 both sides ✓", color: "#22c55e" }} />,
    },
    {
      title: "Check by putting it back",
      say: "Put 4 back in for each x: 4 + 4 + 3 = 11. The scale is level, so x = 4 is right!",
      scene: (
        <Svg label="Boxes now show 4 each and the scale is level: 4 plus 4 plus 3 equals 11">
          <Scale left={S0[0]} right={S0[1]} xv={4} reveal />
          <EqLabel text="4 + 4 + 3 = 11 ✓" color="#22c55e" />
          <text x="200" y="200" textAnchor="middle" fontSize="14" fontWeight="800" fill={MUTED} stroke="rgb(var(--surface))" strokeWidth="5" paintOrder="stroke">
            every equation step = a fair move on the scale
          </text>
        </Svg>
      ),
    },
  ],
  try: BalanceTry,
  story,
  like,
};
