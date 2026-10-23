"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus, RotateCcw, Shuffle, Trophy } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { Art, INK, Kid, Robot, Stage, STAGE_INK, STAGE_MUTED } from "./_art";

const COLOR = "#0284C7";

/* ------------------------------------------------------------------ */
/* Drawing pieces                                                      */
/* ------------------------------------------------------------------ */

/** Light bulb centred on the glass (0,0). `glow` may be a framer-motion opacity value or keyframes. */
function Bulb({ on, glow }: { on?: boolean; glow?: number[] | number }) {
  return (
    <g>
      <circle r={17} fill="#E5E7EB" stroke={INK} strokeWidth={2.5} />
      <motion.g initial={false} animate={{ opacity: glow ?? (on ? 1 : 0) }} transition={glow && Array.isArray(glow) ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}>
        <circle r={27} fill="#FDE047" opacity={0.35} />
        <circle r={17} fill="#FACC15" stroke={INK} strokeWidth={2.5} />
      </motion.g>
      <path d="M-5 4 l5 -6 l5 6" fill="none" stroke={INK} strokeWidth={1.8} />
      <rect x={-8} y={16} width={16} height={10} rx={2} fill="#9CA3AF" stroke={INK} strokeWidth={2} />
      <path d="M-8 20 h16 M-8 23 h16" stroke={INK} strokeWidth={1} />
    </g>
  );
}

/** Rocker switch, centred on (0,0). */
function Switch({ on }: { on?: boolean }) {
  return (
    <g>
      <rect x={-13} y={-20} width={26} height={40} rx={7} fill="#F8FAFC" stroke={INK} strokeWidth={2.5} />
      <motion.rect x={-8} width={16} height={18} rx={4} stroke={INK} strokeWidth={2} initial={false} animate={{ y: on ? -16 : -2, fill: on ? "#22C55E" : "#94A3B8" }} transition={{ type: "spring", stiffness: 400, damping: 22 }} />
    </g>
  );
}

function Unit({ x, y, value, on, glow, digit = true }: { x: number; y: number; value: number; on?: boolean; glow?: number[]; digit?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <Bulb on={on} glow={glow} />
      <g transform="translate(0 56)">
        <Switch on={on} />
      </g>
      <text y={100} textAnchor="middle" fontSize={16} fontWeight={900} fill={STAGE_INK}>
        {value}
      </text>
      {digit && on !== undefined && (
        <text y={-30} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize={16} fontWeight={900} fill={on ? "#16A34A" : STAGE_MUTED}>
          {on ? 1 : 0}
        </text>
      )}
    </g>
  );
}

const PLACES4 = [8, 4, 2, 1];
const xs = (n: number, w = 400, gap = 80) => Array.from({ length: n }, (_, i) => w / 2 + (i - (n - 1) / 2) * gap);

/** Hold-style keyframes so a bulb is fully on/off during each of the 16 counting frames. */
function countGlow(place: number) {
  const vals: number[] = [];
  for (let k = 0; k < 16; k++) {
    const v = k & place ? 1 : 0;
    vals.push(v, v);
  }
  return vals;
}

const watch: Explainer["watch"] = [
  {
    title: "A switch is on or off",
    say: "A light switch has only two choices: off or on. Computers write off as 0 and on as 1.",
    scene: (
      <Stage label="One switch flips between off and on, and its bulb lights up. Off is 0, on is 1">
        <g transform="translate(130 70)">
          <Bulb />
          <g transform="translate(0 64)">
            <Switch />
          </g>
          <text y={-34} textAnchor="middle" fontSize={22} fontWeight={900} fontFamily="ui-monospace, Menlo, monospace" fill={STAGE_MUTED}>
            0
          </text>
          <text y={118} textAnchor="middle" fontSize={14} fontWeight={800} fill={STAGE_MUTED}>
            off
          </text>
        </g>
        <g transform="translate(270 70)">
          <Bulb on />
          <g transform="translate(0 64)">
            <Switch on />
          </g>
          <text y={-34} textAnchor="middle" fontSize={22} fontWeight={900} fontFamily="ui-monospace, Menlo, monospace" fill="#16A34A">
            1
          </text>
          <text y={118} textAnchor="middle" fontSize={14} fontWeight={800} fill={STAGE_INK}>
            on
          </text>
        </g>
      </Stage>
    ),
  },
  {
    title: "Each switch is worth a number",
    say: "Put switches in a row. The one on the right is worth 1. Each one to the left is worth double: 2, then 4, then 8.",
    scene: (
      <Stage label="Four switches in a row worth 8, 4, 2 and 1, each worth double the one to its right">
        {xs(4).map((x, i) => (
          <motion.g key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (3 - i) * 0.45 }}>
            <Unit x={x} y={60} value={PLACES4[i]} on={false} digit={false} />
          </motion.g>
        ))}
        {xs(3, 400).map((x, i) => (
          <motion.text key={i} x={x} y={186} textAnchor="middle" fontSize={12} fontWeight={900} fill={COLOR} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (3 - i) * 0.45 + 0.2 }}>
            ← ×2
          </motion.text>
        ))}
        <text x={200} y={226} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED}>
          1, 2, 4, 8 … always doubling
        </text>
      </Stage>
    ),
  },
  {
    title: "Add up the lights that are on",
    say: "To read the number, add the values of the lights that are on. Here 4 and 1 are on, and 4 plus 1 makes 5. So 0101 means 5.",
    scene: (
      <Stage label="Switches 0 1 0 1: the 4 and the 1 are on, which adds to 5">
        {xs(4).map((x, i) => (
          <Unit key={i} x={x} y={56} value={PLACES4[i]} on={[false, true, false, true][i]} />
        ))}
        <motion.text x={200} y={226} textAnchor="middle" fontSize={22} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          0101 = 4 + 1 = 5
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Counting in binary",
    say: "Watch the lights count from 0 to 15. The 1 light flickers every time, the 2 light every other time, and so on.",
    scene: (
      <Stage label="Four bulbs count in binary from 0 up to 15 and the number is shown below">
        {xs(4).map((x, i) => (
          <g key={i} transform={`translate(${x} 56)`}>
            <Bulb glow={countGlow(PLACES4[i])} />
            <text y={56} textAnchor="middle" fontSize={16} fontWeight={900} fill={STAGE_MUTED}>
              {PLACES4[i]}
            </text>
          </g>
        ))}
        {Array.from({ length: 16 }, (_, k) => {
          const vals = Array.from({ length: 16 }, (_, j) => (j === k ? [1, 1] : [0, 0])).flat();
          return (
            <motion.text key={k} x={200} y={190} textAnchor="middle" fontSize={34} fontWeight={900} fill={COLOR} initial={{ opacity: 0 }} animate={{ opacity: vals }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              {k.toString(2).padStart(4, "0")} = {k}
            </motion.text>
          );
        })}
      </Stage>
    ),
  },
  {
    title: "Need bigger numbers? Add a switch",
    say: "Four switches can make every number from 0 to 15. Add one more switch, worth 16, and you can count all the way to 31.",
    scene: (
      <Stage label="Four switches all on make 15. A fifth switch worth 16 slides in, allowing numbers up to 31">
        {xs(5, 400, 72).map((x, i) =>
          i === 0 ? (
            <motion.g key={i} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, type: "spring" }}>
              <Unit x={x} y={56} value={16} on={false} />
            </motion.g>
          ) : (
            <Unit key={i} x={x} y={56} value={PLACES4[i - 1]} on />
          ),
        )}
        <text x={200} y={214} textAnchor="middle" fontSize={16} fontWeight={900} fill={STAGE_INK}>
          8 + 4 + 2 + 1 = 15
        </text>
        <motion.text x={200} y={234} textAnchor="middle" fontSize={13} fontWeight={800} fill={COLOR} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          with the 16 switch: up to 31!
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Computers are full of tiny switches",
    say: "A computer chip has billions of tiny switches. Eight of them make a byte. The pattern 01000001 is 65, which computers use for the letter A.",
    scene: (
      <Stage label="A computer chip zooms into 8 switches showing 01000001, which is 65, the letter A">
        <g transform="translate(60 120)">
          <rect x={-40} y={-40} width={80} height={80} rx={8} fill="#1F2937" stroke={INK} strokeWidth={2.5} />
          {Array.from({ length: 6 }, (_, k) => (
            <g key={k} stroke="#9CA3AF" strokeWidth={3}>
              <line x1={-30 + k * 12} y1={-40} x2={-30 + k * 12} y2={-50} />
              <line x1={-30 + k * 12} y1={40} x2={-30 + k * 12} y2={50} />
              <line y1={-30 + k * 12} x1={-40} y2={-30 + k * 12} x2={-50} />
              <line y1={-30 + k * 12} x1={40} y2={-30 + k * 12} x2={50} />
            </g>
          ))}
          <rect x={-24} y={-24} width={48} height={48} rx={4} fill="#0EA5E9" opacity={0.35} />
          <text y={6} textAnchor="middle" fontSize={14} fontWeight={900} fill="#E0F2FE">
            CPU
          </text>
        </g>
        <path d="M112 90 L140 62 M112 150 L140 178" stroke={STAGE_MUTED} strokeWidth={2} strokeDasharray="4 4" />
        <rect x={140} y={56} width={252} height={128} rx={12} fill="rgb(var(--surface))" stroke={STAGE_MUTED} strokeWidth={2} />
        {[0, 1, 0, 0, 0, 0, 0, 1].map((b, i) => (
          <motion.g key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12 }}>
            <g transform={`translate(${160 + i * 30} 96)`}>
              <g transform="scale(0.62)">
                <Switch on={b === 1} />
              </g>
              <text y={34} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize={16} fontWeight={900} fill={b ? "#16A34A" : STAGE_MUTED}>
                {b}
              </text>
              <text y={-20} textAnchor="middle" fontSize={8} fontWeight={800} fill={STAGE_MUTED}>
                {128 >> i}
              </text>
            </g>
          </motion.g>
        ))}
        <motion.text x={266} y={168} textAnchor="middle" fontSize={16} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          64 + 1 = 65 = “A”
        </motion.text>
        <text x={266} y={214} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED}>
          8 bits = 1 byte
        </text>
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Try: flip switches to make the target                               */
/* ------------------------------------------------------------------ */

const SIZES = [4, 5, 8] as const;

function BinaryTry() {
  const [bits, setBits] = useState<number>(4);
  const [value, setValue] = useState(0);
  const [target, setTarget] = useState(6);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);

  const max = (1 << bits) - 1;
  const places = Array.from({ length: bits }, (_, i) => 1 << (bits - 1 - i));
  const onPlaces = places.filter((p) => value & p);
  const solved = value === target;

  useEffect(() => {
    if (solved && !won) {
      setWon(true);
      setScore((s) => s + 1);
      sfx("correct");
      burst();
    }
  }, [solved, won]);

  const newTarget = (n = bits) => {
    const m = (1 << n) - 1;
    let t = 1 + Math.floor(Math.random() * m);
    if (t === target) t = (t % m) + 1;
    setTarget(t);
    setValue(0);
    setWon(false);
  };

  const flip = (p: number) => {
    setValue((v) => v ^ p);
    sfx("flip");
  };

  const plusOne = () => {
    setValue((v) => (v + 1) & max);
    sfx("tap");
  };

  const letter = bits === 8 && ((value >= 65 && value <= 90) || (value >= 97 && value <= 122)) ? String.fromCharCode(value) : null;

  return (
    <div className="select-none">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className={clsx("flex items-center gap-3 rounded-2xl border-2 px-4 py-2", solved ? "border-good/50 bg-good/10" : "border-line bg-surface-2")} aria-live="polite">
          <span className="font-extrabold">Make</span>
          <span className="font-mono text-3xl font-black" style={{ color: COLOR }}>
            {target}
          </span>
          {solved && <span className="font-extrabold text-good">Got it! 🎉</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="chip !text-sm">
            <Trophy className="h-4 w-4 text-warn" /> {score}
          </span>
          <div className="flex rounded-xl border-2 border-line p-0.5" role="radiogroup" aria-label="Number of switches">
            {SIZES.map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={bits === n}
                onClick={() => {
                  setBits(n);
                  newTarget(n);
                }}
                className={clsx("h-10 rounded-lg px-3 text-sm font-black", bits === n ? "text-white" : "text-muted")}
                style={bits === n ? { background: COLOR } : undefined}
              >
                {n} bits
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-1.5 sm:gap-3" style={{ gridTemplateColumns: `repeat(${bits}, minmax(0, 1fr))` }}>
        {places.map((p) => {
          const on = (value & p) !== 0;
          return (
            <button key={p} type="button" role="switch" aria-checked={on} aria-label={`Switch worth ${p}`} onClick={() => flip(p)} className={clsx("flex flex-col items-center rounded-2xl border-2 pb-2 pt-1 transition active:scale-95", on ? "border-amber-400 bg-amber-100/60" : "border-line bg-surface-2")}>
              <svg viewBox="-30 -32 60 128" className="h-auto w-full max-w-[64px]" aria-hidden>
                <Bulb on={on} />
                <g transform="translate(0 62)">
                  <Switch on={on} />
                </g>
              </svg>
              <span className={clsx("font-mono text-xl font-black", on ? "text-good" : "text-muted")}>{on ? 1 : 0}</span>
              <span className="text-xs font-extrabold text-muted sm:text-sm">{p}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl bg-surface-2 p-3 text-center font-mono text-lg font-bold" aria-live="polite">
        {onPlaces.length ? onPlaces.join(" + ") : "0"} = <span className="text-2xl font-black text-ink">{value}</span>
        <span className="ml-3 text-sm text-muted">binary {value.toString(2).padStart(bits, "0")}</span>
        {letter && <span className="ml-3 text-sm text-muted">· as a letter: “{letter}”</span>}
      </div>

      <p className={clsx("mt-3 min-h-[2.5rem] rounded-2xl px-4 py-2 text-center font-bold", solved ? "text-good" : "text-muted")}>
        {solved
          ? `${target} in binary is ${target.toString(2).padStart(bits, "0")}. Every whole number has exactly one switch pattern!`
          : value < target
            ? `You have ${value}. You need ${target - value} more — which switch could add that?`
            : `Too big by ${value - target}! Switch something off.`}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <button type="button" className="btn-primary min-h-[48px]" onClick={() => newTarget()}>
          <Shuffle className="h-4 w-4" /> New number
        </button>
        <button type="button" className="btn-ghost min-h-[48px]" onClick={plusOne} title="Count up by one and watch the switches carry">
          <Plus className="h-4 w-4" /> Add 1
        </button>
        <button type="button" className="btn-ghost min-h-[48px]" onClick={() => setValue(0)} aria-label="All switches off">
          <RotateCcw className="h-4 w-4" /> All off
        </button>
      </div>
      <p className="mt-2 text-center text-xs font-semibold text-muted">
        {bits} switches can make every number from 0 to {max} — that&apos;s {max + 1} different patterns.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function House({ x, lamps, label }: { x: number; lamps: boolean[]; label?: boolean }) {
  const vals = [8, 4, 2, 1];
  return (
    <g transform={`translate(${x} 0)`}>
      <path d="M0 50 L40 20 L80 50 Z" fill="#B91C1C" stroke={INK} strokeWidth={2} />
      <rect x={4} y={50} width={72} height={78} fill="#FDE68A" stroke={INK} strokeWidth={2} />
      {lamps.map((on, i) => (
        <g key={i} transform={`translate(${14 + (i % 2) * 34} ${60 + Math.floor(i / 2) * 32})`}>
          <rect width={20} height={20} rx={2} fill={on ? "#FACC15" : "#1E293B"} stroke={INK} strokeWidth={2} />
          {on && <rect x={-4} y={-4} width={28} height={28} rx={4} fill="#FDE047" opacity={0.35} />}
          {label && (
            <text x={10} y={14} textAnchor="middle" fontSize={10} fontWeight={900} fill={on ? INK : "#94A3B8"}>
              {vals[i]}
            </text>
          )}
        </g>
      ))}
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Mia and Bolt in houses across the street at night">
        <rect width={200} height={140} fill="#1E1B4B" />
        <circle cx={100} cy={22} r={10} fill="#FEF9C3" />
        <House x={10} lamps={[false, false, false, false]} />
        <House x={110} lamps={[false, false, false, false]} />
      </Art>
    ),
    speech: "Let's send numbers with our lamps!",
    caption: "It's night. Mia and Bolt live across the street and want to send secret numbers.",
  },
  {
    art: (
      <Art label="Each window lamp gets a number: 8, 4, 2 and 1">
        <rect width={200} height={140} fill="#1E1B4B" />
        <House x={60} lamps={[true, true, true, true]} label />
      </Art>
    ),
    speech: "Each window has a value!",
    caption: "They agree: the four windows are worth 8, 4, 2 and 1.",
  },
  {
    art: (
      <Art label="Mia lights the 4 and 2 windows">
        <rect width={200} height={140} fill="#1E1B4B" />
        <House x={10} lamps={[false, true, true, false]} label />
        <text x={150} y={80} textAnchor="middle" fontSize={22} fontWeight={900} fill="#FDE68A">
          4 + 2
        </text>
      </Art>
    ),
    speech: "Can you read it?",
    caption: "Mia switches on the 4 and the 2 lamps: off, on, on, off — 0110.",
  },
  {
    art: (
      <Art label="Bolt cheers: the number is 6">
        <rect width={200} height={140} fill="#E0F2FE" />
        <g transform="translate(150 110)">
          <Robot mood="happy" wave />
        </g>
        <g transform="translate(50 132)">
          <Kid h={88} bow mood="wow" />
        </g>
        <text x={100} y={60} textAnchor="middle" fontSize={40} fontWeight={900} fill="#0284C7">
          6!
        </text>
      </Art>
    ),
    speech: "It's 6! That's how computers talk!",
    caption: "Bolt adds 4 + 2 = 6. Computers send everything — numbers, letters, pictures — as on/off patterns.",
  },
];

function Coin({ v, out }: { v: number; out?: boolean }) {
  return (
    <g opacity={out ? 0.35 : 1}>
      <circle r={17} fill="#FBBF24" stroke={INK} strokeWidth={2.5} strokeDasharray={out ? "4 3" : undefined} />
      <circle r={12} fill="none" stroke="#B45309" strokeWidth={1.5} />
      <text y={6} textAnchor="middle" fontSize={15} fontWeight={900} fill={INK}>
        {v}
      </text>
    </g>
  );
}

const like: Explainer["like"] = {
  headline: "Binary is like paying with one coin each of 8, 4, 2 and 1.",
  everyday: {
    label: "Paying 11p with special coins",
    art: (
      <Art label="Coins worth 8, 4, 2 and 1. The 8, 2 and 1 coins are used to make 11; the 4 is left out" vb="0 0 200 130">
        {[8, 4, 2, 1].map((v, i) => (
          <g key={v} transform={`translate(${40 + i * 40} ${i === 1 ? 92 : 56})`}>
            <Coin v={v} out={i === 1} />
          </g>
        ))}
        <text x={100} y={22} textAnchor="middle" fontSize={14} fontWeight={900} fill={INK}>
          8 + 2 + 1 = 11
        </text>
      </Art>
    ),
  },
  concept: {
    label: "11 in binary is 1011",
    art: (
      <Art label="Binary digits 1 0 1 1 under place values 8 4 2 1" vb="0 0 200 130">
        {[1, 0, 1, 1].map((b, i) => (
          <g key={i} transform={`translate(${40 + i * 40} 64)`}>
            <text y={-22} textAnchor="middle" fontSize={12} fontWeight={800} fill="#64748B">
              {[8, 4, 2, 1][i]}
            </text>
            <rect x={-15} y={-15} width={30} height={34} rx={6} fill={b ? "#BAE6FD" : "#F1F5F9"} stroke={INK} strokeWidth={2} />
            <text y={10} textAnchor="middle" fontSize={20} fontWeight={900} fontFamily="ui-monospace, Menlo, monospace" fill={INK}>
              {b}
            </text>
          </g>
        ))}
        <text x={100} y={112} textAnchor="middle" fontSize={14} fontWeight={900} fill={INK}>
          1011 = 11
        </text>
      </Art>
    ),
  },
  pairs: [
    ["A coin you hand over", "A bit that is 1"],
    ["A coin you keep", "A bit that is 0"],
    ["Coins worth 1, 2, 4, 8…", "Place values that double"],
    ["The total you paid", "The number the bits stand for"],
  ],
  limits:
    "With real money you could use two 4p coins — in binary each place is used at most once. And the same bits can mean a number, a letter or a colour: it depends on the code the computer agrees to use.",
};

export const binaryExplainer: Explainer = {
  id: "coding-binary",
  title: "Binary: counting with switches",
  tagline: "Flip light switches worth 1, 2, 4, 8 and see how computers store every number.",
  area: "Computer science",
  ages: "8–18",
  lessons: ["electrical-engineering/digital-logic/binary-number-systems", "electrical-engineering/digital-logic/logic-gates"],
  color: COLOR,
  icon: "💡",
  watch,
  try: BinaryTry,
  story,
  like,
};
