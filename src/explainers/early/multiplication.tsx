"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { Explainer } from "../types";
import { say } from "@/lib/voice";
import { Cookie, Emo, Kid, Panel, Plate, Stage, T, TryFrame, pop, rand, rise, spring, type Status } from "./_kit";

const C = "#DB2777";
const PLATES = [75, 200, 325];

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const onPlate = (p: number, k: number) => ({ x: PLATES[p] + (k % 2 ? 17 : -17), y: 146 + (k < 2 ? -9 : 9) });
const inArray = (p: number, k: number) => ({ x: 140 + k * 40, y: 62 + p * 42 });
const turned = (p: number, k: number) => ({ x: 160 + p * 40, y: 44 + k * 40 });

function CookieScene({ stage }: { stage: number }) {
  const showPlates = stage <= 4;
  const where = (p: number, k: number, s: number) => (s >= 5 ? turned(p, k) : s >= 4 ? inArray(p, k) : onPlate(p, k));
  const labels = [
    "Three empty plates",
    "Three plates with four cookies on each",
    "Counting plate by plate: four, eight, twelve",
    "Three groups of four is twelve",
    "Twelve cookies lined up in three rows of four",
    "The array turned round: four rows of three, still twelve",
  ];
  return (
    <Stage label={labels[stage]}>
      {showPlates &&
        PLATES.map((x, p) => (
          <motion.g key={p} {...(stage === 0 ? pop(p * 0.3) : stage === 4 ? { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { duration: 0.6, delay: 0.3 } } : {})}>
            <Plate x={x} y={150} rx={56} ry={26} />
          </motion.g>
        ))}
      {stage >= 1 &&
        [0, 1, 2].map((p) =>
          [0, 1, 2, 3].map((k) => {
            const from = where(p, k, Math.max(1, stage - 1));
            const to = where(p, k, stage);
            const fresh = stage === 1;
            return (
              <motion.g key={`${p}-${k}`} initial={fresh ? { ...to, scale: 0 } : { ...from, scale: 1 }} animate={{ ...to, scale: 1 }} transition={fresh ? { ...spring, delay: 0.2 + p * 0.7 + k * 0.15 } : { duration: 0.9, ease: "easeInOut", delay: 0.2 + (p * 4 + k) * 0.05 }}>
                <Cookie x={0} y={0} r={stage >= 4 ? 15 : 13} />
              </motion.g>
            );
          }),
        )}
      {stage === 2 &&
        PLATES.map((x, p) => (
          <motion.g key={p} {...pop(0.4 + p * 0.9)}>
            <circle cx={x} cy={204} r={19} fill={C} />
            <T x={x} y={205} size={20} color="white">
              {(p + 1) * 4}
            </T>
          </motion.g>
        ))}
      {stage === 3 && (
        <>
          {PLATES.map((x, p) => (
            <motion.g key={p} {...pop(0.1 + p * 0.2)}>
              <ellipse cx={x} cy={150} rx={62} ry={32} fill="none" stroke={C} strokeWidth={3} strokeDasharray="6 5" />
            </motion.g>
          ))}
          <motion.g {...rise(0.8)}>
            <rect x={90} y={22} width={220} height={60} rx={20} fill="white" stroke={C} strokeWidth={3} />
            <T x={200} y={53} size={38} color={C}>
              3 × 4 = 12
            </T>
          </motion.g>
          <motion.g {...rise(1.3)}>
            <T x={200} y={222} size={17} color={C}>
              3 groups of 4
            </T>
          </motion.g>
        </>
      )}
      {stage >= 4 && (
        <motion.g {...rise(1.4)}>
          <T x={200} y={stage === 5 ? 232 : 214} size={30} color={C}>
            {stage === 5 ? "4 × 3 = 12" : "3 × 4 = 12"}
          </T>
          {stage === 4 &&
            [0, 1, 2].map((p) => (
              <T key={p} x={96} y={62 + p * 42} size={14} color="#94A3B8">
                row {p + 1}
              </T>
            ))}
        </motion.g>
      )}
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Try: make the target with equal plates                              */
/* ------------------------------------------------------------------ */

const TARGETS = [4, 6, 8, 9, 10, 12, 15, 16, 20];
/** Dice-like spots for 1–5 cookies on a plate (in a 80×50 box). */
const SPOTS: Record<number, [number, number][]> = {
  1: [[40, 25]],
  2: [
    [26, 25],
    [54, 25],
  ],
  3: [
    [22, 30],
    [40, 18],
    [58, 30],
  ],
  4: [
    [26, 17],
    [54, 17],
    [26, 33],
    [54, 33],
  ],
  5: [
    [22, 16],
    [58, 16],
    [40, 25],
    [22, 34],
    [58, 34],
  ],
};

function BigStep({ icon, value, onChange, label }: { icon: string; value: number; onChange: (v: number) => void; label: string }) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} disabled={value <= 1} className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-b-4 border-line bg-surface active:translate-y-[2px] disabled:opacity-40" aria-label={`Fewer ${label}`}>
        <Minus className="h-6 w-6" />
      </button>
      <motion.span key={value} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="flex min-w-[88px] items-center justify-center gap-1 text-3xl font-black">
        <span aria-hidden>{icon}</span>
        {value}
      </motion.span>
      <button type="button" onClick={() => onChange(Math.min(5, value + 1))} disabled={value >= 5} className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-b-4 border-line bg-surface active:translate-y-[2px] disabled:opacity-40" aria-label={`More ${label}`}>
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

function MulTry() {
  const [round, setRound] = useState(0);
  const target = useMemo(() => TARGETS[rand(0, TARGETS.length - 1)], [round]);
  const [plates, setPlates] = useState(1);
  const [each, setEach] = useState(1);
  const [found, setFound] = useState<string[]>([]);
  const total = plates * each;
  const status: Status = total === target ? "good" : "play";

  const change = (p: number, e: number) => {
    setPlates(p);
    setEach(e);
    if (p * e === target) {
      const k = `${p} × ${e}`;
      setFound((f) => (f.includes(k) ? f : [...f, k]));
      say(`${p} plates of ${e} make ${target}!`);
    }
  };
  const another = () => {
    setPlates(1);
    setEach(1);
    setFound([]);
    setRound((x) => x + 1);
  };

  return (
    <TryFrame color={C} round={round} status={status} onAnother={another} picture="🍪" prompt={`Make ${target} cookies. Every plate must have the same!`}>
      <div className="mb-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <BigStep icon="🍽️" label="plates" value={plates} onChange={(v) => change(v, each)} />
        <BigStep icon="🍪" label="cookies on each plate" value={each} onChange={(v) => change(plates, v)} />
      </div>
      <div className="flex min-h-[132px] flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-line bg-[#FDF2F8] p-3">
        {Array.from({ length: plates }, (_, p) => (
          <motion.div key={p} layout initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring} className="relative">
            <svg viewBox="0 0 80 50" className="h-[70px] w-[112px]" role="img" aria-label={`Plate with ${each} cookies`}>
              <ellipse cx={40} cy={27} rx={38} ry={22} fill="white" stroke="#CBD5E1" strokeWidth={2} />
              <ellipse cx={40} cy={27} rx={28} ry={15} fill="#F1F5F9" />
              {SPOTS[each].map(([x, y], k) => (
                <motion.g key={`${each}-${k}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...spring, delay: k * 0.04 }}>
                  <Cookie x={x} y={y} r={8.5} />
                </motion.g>
              ))}
            </svg>
            <span className="absolute -bottom-1 left-1/2 grid h-7 min-w-7 -translate-x-1/2 place-items-center rounded-full px-1.5 text-sm font-black text-white" style={{ background: C }}>
              {(p + 1) * each}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3" aria-live="polite">
        <p className="text-4xl font-black">
          {plates} × {each} = <span style={{ color: total === target ? "#16A34A" : total > target ? "#E11D48" : "#64748B" }}>{total}</span>
        </p>
        <span className="text-3xl" aria-label={total === target ? "Just right" : total > target ? "Too many" : "Too few"}>
          {total === target ? "✅" : total > target ? "⬇️" : "⬆️"}
        </span>
      </div>
      {found.length > 0 && (
        <div className="mt-2 flex flex-wrap justify-center gap-2" aria-label="Ways you found">
          {found.map((f) => (
            <motion.span key={f} {...pop(0)} className="rounded-xl px-3 py-1 text-lg font-black text-white" style={{ background: "#16A34A" }}>
              ⭐ {f}
            </motion.span>
          ))}
        </div>
      )}
    </TryFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const BERRY_SPOTS: [number, number][] = [
  [-12, -6],
  [12, -6],
  [-12, 8],
  [12, 8],
];

function BerryPlates({ counts }: { counts?: boolean }) {
  return (
    <g>
      {[45, 120, 195].map((x, p) => (
        <g key={x}>
          <Plate x={x} y={86} rx={34} ry={20} />
          {BERRY_SPOTS.map(([dx, dy], k) => (
            <Emo key={k} x={x + dx} y={84 + dy} size={15}>
              🍓
            </Emo>
          ))}
          {counts && (
            <g>
              <circle cx={x} cy={128} r={13} fill={C} />
              <T x={x} y={129} size={14} color="white">
                {(p + 1) * 4}
              </T>
            </g>
          )}
        </g>
      ))}
    </g>
  );
}

const story = [
  {
    art: (
      <Panel label="Three friends sit on a picnic blanket">
        <path d="M10 140 L 40 104 L 200 104 L 230 140 Z" fill="#FCA5A5" />
        <path d="M40 104 L 30 140 M80 104 L 75 140 M120 104 V 140 M160 104 L 165 140 M200 104 L 210 140" stroke="white" strokeWidth={3} opacity={0.6} />
        <Kid x={60} y={130} s={0.7} shirt="#3B82F6" />
        <Kid x={120} y={130} s={0.7} shirt="#22C55E" bow />
        <Kid x={180} y={130} s={0.7} shirt="#F59E0B" hair="#1F2937" />
      </Panel>
    ),
    speech: "4 strawberries each!",
    caption: "Three friends have a picnic. Each one gets four strawberries.",
  },
  {
    art: (
      <Panel label="Three plates, each with four strawberries">
        <BerryPlates />
      </Panel>
    ),
    caption: "Three plates, four on each. Every plate has the same.",
  },
  {
    art: (
      <Panel label="Counting plate by plate: four, eight, twelve">
        <BerryPlates counts />
      </Panel>
    ),
    speech: "4, 8, 12!",
    caption: "Count plate by plate: four, eight, twelve.",
  },
  {
    art: (
      <Panel label="Twelve strawberries in three rows of four, three times four equals twelve">
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <Emo key={`${r}${c}`} x={40 + c * 24} y={46 + r * 28} size={18}>
              🍓
            </Emo>
          )),
        )}
        <T x={178} y={74} size={26} color={C}>
          3 × 4
        </T>
        <T x={178} y={108} size={26} color={C}>
          = 12
        </T>
      </Panel>
    ),
    caption: "Three groups of four make twelve: 3 × 4 = 12.",
  },
];

function JuicePack({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 3} y={y - 3} width={70} height={46} rx={5} fill="none" stroke="#94A3B8" strokeWidth={2} strokeDasharray="4 3" />
      {[0, 1, 2, 3].map((k) => (
        <g key={k}>
          <rect x={x + k * 16} y={y + 6} width={14} height={34} rx={2} fill={["#F97316", "#FB923C", "#F97316", "#FB923C"][k]} />
          <rect x={x + k * 16 + 2} y={y + 16} width={10} height={10} rx={2} fill="white" opacity={0.8} />
          <path d={`M${x + k * 16 + 10} ${y + 6} v -8 l 4 -3`} stroke="#64748B" strokeWidth={1.6} fill="none" />
        </g>
      ))}
    </g>
  );
}

export const multiplication: Explainer = {
  id: "multiplication-equal-groups",
  title: "Times means equal groups",
  tagline: "3 × 4 is three plates with four cookies on each: equal groups, counted fast.",
  area: "Maths",
  ages: "6–8",
  lessons: ["math-magic/multiplication/equal-groups", "math-magic/multiplication/times-table-tricks", "number-land/hop-and-skip/skip-counting"],
  color: C,
  icon: "🍪",
  watch: [
    { title: "Three plates", say: "Here are three plates.", scene: <CookieScene stage={0} /> },
    { title: "Four on each plate", say: "Put four cookies on each plate. Every plate gets the same.", scene: <CookieScene stage={1} /> },
    { title: "Count by fours", say: "Count plate by plate. Four, eight, twelve!", scene: <CookieScene stage={2} /> },
    { title: "3 groups of 4", say: "Three groups of four is twelve. We write three times four equals twelve.", scene: <CookieScene stage={3} /> },
    { title: "Make an array", say: "Line the cookies up in rows. Three rows of four. That's called an array.", scene: <CookieScene stage={4} /> },
    { title: "Turn it round", say: "Turn the array. Now it's four rows of three. Still twelve!", scene: <CookieScene stage={5} /> },
  ],
  try: MulTry,
  story,
  like: {
    headline: "Multiplying is like buying juice in packs.",
    everyday: {
      label: "3 packs of 4 juice boxes",
      art: (
        <Panel label="Three packs of four juice boxes">
          <JuicePack x={14} y={52} />
          <JuicePack x={88} y={52} />
          <JuicePack x={162} y={52} />
        </Panel>
      ),
    },
    concept: {
      label: "3 × 4 = 12",
      art: (
        <Panel label="An array of three rows of four dots, three times four equals twelve">
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={60 + c * 26} cy={36 + r * 26} r={9} fill={C} />),
          )}
          <T x={120} y={124} size={28} color={C}>
            3 × 4 = 12
          </T>
        </Panel>
      ),
    },
    pairs: [
      ["How many packs", "The number of groups (3)"],
      ["Juice boxes in each pack", "How many in each group (4)"],
      ["Every pack holds the same", "The groups must be equal"],
      ["All the juice boxes", "The answer, called the product (12)"],
    ],
    limits: "Packs only come in whole numbers, but later you'll multiply things like 2½ × 3 or make a picture 2 times bigger, where there are no packs to count.",
  },
};
