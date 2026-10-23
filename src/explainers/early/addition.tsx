"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { say } from "@/lib/voice";
import { Badge, Duck, Kid, NumberChoices, Panel, Stage, T, TryFrame, choicesFor, pointInside, pop, rand, rise, spring, type Status } from "./_kit";

const C = "#16A34A";
const YEL = "#FACC15";
const ORA = "#FB923C";

/* ------------------------------------------------------------------ */
/* Watch: ducks swim together                                          */
/* ------------------------------------------------------------------ */

type Layout = "apart" | "together" | "swapped";
const POS: Record<Layout, { x: number; y: number }[]> = {
  // 3 yellow ducks, then 2 orange ducks
  apart: [
    { x: 55, y: 168 },
    { x: 105, y: 182 },
    { x: 150, y: 165 },
    { x: 280, y: 172 },
    { x: 330, y: 180 },
  ],
  together: [
    { x: 80, y: 172 },
    { x: 140, y: 172 },
    { x: 200, y: 172 },
    { x: 260, y: 172 },
    { x: 320, y: 172 },
  ],
  swapped: [
    { x: 200, y: 172 },
    { x: 260, y: 172 },
    { x: 320, y: 172 },
    { x: 80, y: 172 },
    { x: 140, y: 172 },
  ],
};

function Ponds({ joined, animate }: { joined: boolean; animate?: boolean }) {
  const left = joined ? { cx: 200, rx: 185 } : { cx: 102, rx: 92 };
  const right = joined ? { cx: 200, rx: 185 } : { cx: 305, rx: 68 };
  const t = { duration: 1.2, ease: "easeInOut" as const };
  return (
    <g>
      <motion.ellipse cy={180} ry={44} fill="#7DD3FC" initial={animate ? { cx: 102, rx: 92 } : left} animate={left} transition={t} />
      <motion.ellipse cy={180} ry={44} fill="#7DD3FC" initial={animate ? { cx: 305, rx: 68 } : right} animate={right} transition={t} />
      <ellipse cx={200} cy={186} rx={120} ry={6} fill="white" opacity={0.25} />
    </g>
  );
}

function DuckScene({ show = 5, fromLayout, layout = "apart", freshFrom = 0, labels, count, eq, swapEq }: { show?: number; fromLayout?: Layout; layout?: Layout; freshFrom?: number; labels?: boolean; count?: boolean; eq?: boolean; swapEq?: boolean }) {
  const moving = !!fromLayout && fromLayout !== layout;
  const joined = layout !== "apart";
  return (
    <Stage label={`${show === 3 ? "Three yellow ducks" : "Three yellow ducks and two orange ducks"}${joined ? " swimming together in one pond" : " in two ponds"}${eq ? ". Three plus two equals five." : ""}${swapEq ? ". Two plus three equals five." : ""}`}>
      <Ponds joined={joined} animate={moving && fromLayout === "apart"} />
      {POS[layout].slice(0, show).map((p, i) => {
        const from = (fromLayout ? POS[fromLayout] : POS[layout])[i];
        const isNew = i >= freshFrom;
        return (
          <motion.g key={i} initial={{ x: from.x, y: from.y, scale: isNew ? 0 : 1 }} animate={{ x: p.x, y: p.y, scale: 1 }} transition={{ x: { duration: 1.3, ease: "easeInOut" }, y: { duration: 1.3 }, scale: { ...spring, delay: isNew ? 0.2 + (i - freshFrom) * 0.35 : 0 } }}>
            <motion.g animate={{ y: [0, -2.5, 0] }} transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.2 }}>
              <Duck x={0} y={-6} color={i < 3 ? YEL : ORA} s={1.05} />
            </motion.g>
          </motion.g>
        );
      })}
      {labels && !joined && (
        <g>
          <motion.g {...pop(0.3)}>
            <T x={102} y={98} size={46} color="#CA8A04">
              3
            </T>
          </motion.g>
          {show > 3 && (
            <>
              <motion.g {...pop(1.3)}>
                <T x={212} y={98} size={40} color={C}>
                  +
                </T>
              </motion.g>
              <motion.g {...pop(1.1)}>
                <T x={305} y={98} size={46} color="#EA580C">
                  2
                </T>
              </motion.g>
            </>
          )}
        </g>
      )}
      {count && POS[layout].map((p, i) => <Badge key={i} x={p.x} y={p.y - 52} n={i + 1} color={C} delay={0.3 + i * 0.6} />)}
      {(eq || swapEq) && (
        <motion.g {...rise(0.2)}>
          <rect x={95} y={20} width={210} height={62} rx={20} fill="white" stroke={C} strokeWidth={3} />
          <T x={130} y={52} size={40} color={swapEq ? "#EA580C" : "#CA8A04"}>
            {swapEq ? 2 : 3}
          </T>
          <T x={165} y={50} size={36}>
            +
          </T>
          <T x={200} y={52} size={40} color={swapEq ? "#CA8A04" : "#EA580C"}>
            {swapEq ? 3 : 2}
          </T>
          <T x={235} y={50} size={36}>
            =
          </T>
          <T x={272} y={52} size={40} color={C}>
            5
          </T>
        </motion.g>
      )}
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Try: drag both groups into the big bowl                             */
/* ------------------------------------------------------------------ */

const PAIRS: [string, string][] = [
  ["🍎", "🍊"],
  ["🍓", "🫐"],
  ["🐥", "🐸"],
  ["⚽", "🏀"],
  ["🌸", "🌻"],
];

function AddTry() {
  const [round, setRound] = useState(0);
  const r = useMemo(() => {
    const a = rand(1, 5);
    const b = rand(1, Math.min(5, 10 - a));
    return { a, b, things: PAIRS[rand(0, PAIRS.length - 1)] };
  }, [round]);
  const [poured, setPoured] = useState<[boolean, boolean]>([false, false]);
  const [status, setStatus] = useState<Status>("play");
  const bowl = useRef<HTMLDivElement>(null);
  const choices = useMemo(() => choicesFor(r.a + r.b, 1), [r]);
  const both = poured[0] && poured[1];

  const pour = (g: 0 | 1) => {
    setPoured((p) => {
      if (p[g]) return p;
      const n: [boolean, boolean] = [...p] as [boolean, boolean];
      n[g] = true;
      return n;
    });
  };
  const another = () => {
    setPoured([false, false]);
    setStatus("play");
    setRound((x) => x + 1);
  };
  const counts = [r.a, r.b];
  const tints = ["#FEF3C7", "#FFEDD5"];

  return (
    <TryFrame color={C} round={round} status={status} onAnother={another} picture="🥣" prompt="Drag both groups into the big bowl. How many altogether?">
      <div className="grid grid-cols-2 gap-3">
        {([0, 1] as const).map((g) => (
          <div key={`${round}-${g}`} className="relative grid min-h-[112px] place-items-center rounded-2xl border-2 border-dashed border-line">
            {!poured[g] ? (
              <motion.button
                type="button"
                drag
                dragSnapToOrigin
                dragElastic={0.8}
                whileDrag={{ scale: 1.08, zIndex: 30, rotate: -3 }}
                whileHover={{ scale: 1.03 }}
                onDragEnd={(_, info) => pointInside(bowl.current, info.point) && pour(g)}
                onClick={() => pour(g)}
                className="relative z-10 flex min-h-[96px] w-[92%] cursor-grab flex-wrap content-center items-center justify-center gap-1 rounded-2xl border-2 border-b-4 p-2 shadow-sm active:cursor-grabbing"
                style={{ background: tints[g], borderColor: g ? ORA : YEL, touchAction: "none" }}
                aria-label={`Group of ${counts[g]}. Drag into the bowl.`}
              >
                {Array.from({ length: counts[g] }, (_, i) => (
                  <motion.span key={i} {...pop(i * 0.08)} className="text-3xl leading-none">
                    {r.things[g]}
                  </motion.span>
                ))}
                <span className="absolute -right-2 -top-3 grid h-8 w-8 place-items-center rounded-full text-lg font-black text-white" style={{ background: g ? "#EA580C" : "#CA8A04" }}>
                  {counts[g]}
                </span>
              </motion.button>
            ) : (
              <span className="text-3xl opacity-30" aria-hidden>
                ⬇️
              </span>
            )}
          </div>
        ))}
      </div>

      <div ref={bowl} className="relative mx-auto mt-3 flex min-h-[130px] w-full max-w-md flex-wrap content-center items-center justify-center gap-1.5 rounded-b-[999px] rounded-t-2xl border-4 px-8 pb-6 pt-3" style={{ borderColor: "#A16207", background: "linear-gradient(#FEF9C3, #FDE68A)" }} aria-label="Big bowl">
        {!poured[0] && !poured[1] && <span className="text-sm font-black uppercase tracking-wide text-[#A16207]/60">bowl</span>}
        {([0, 1] as const).map((g) =>
          poured[g]
            ? Array.from({ length: counts[g] }, (_, i) => (
                <motion.span key={`${g}-${i}`} initial={{ y: -60, scale: 0.4, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} transition={{ ...spring, delay: i * 0.09 }} className="relative text-3xl leading-none">
                  {r.things[g]}
                  {both && status !== "play" && (
                    <span className="absolute -right-1 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#16A34A] text-[11px] font-black text-white">{g === 0 ? i + 1 : r.a + i + 1}</span>
                  )}
                </motion.span>
              ))
            : null,
        )}
      </div>

      <div className="mt-3 min-h-[64px]">
        {both && status !== "good" && (
          <motion.div {...pop(0.5)}>
            <NumberChoices key={round} options={choices} answer={r.a + r.b} color={C} onRight={() => setStatus("good")} onWrong={() => setStatus("oops")} />
          </motion.div>
        )}
        {status === "good" && (
          <motion.p {...pop(0)} className="text-center text-5xl font-black" aria-live="polite" onAnimationComplete={() => say(`${r.a} plus ${r.b} equals ${r.a + r.b}`)}>
            <span className="text-[#CA8A04]">{r.a}</span> + <span className="text-[#EA580C]">{r.b}</span> = <span style={{ color: C }}>{r.a + r.b}</span>
          </motion.p>
        )}
      </div>
    </TryFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy art                                                 */
/* ------------------------------------------------------------------ */

/** Balloons whose strings meet at the hand (hx, hy). */
function Balloons({ hx, hy, colors, badges }: { hx: number; hy: number; colors: string[]; badges?: boolean }) {
  const n = colors.length;
  return (
    <g>
      {colors.map((c, i) => {
        const bx = hx + (i - (n - 1) / 2) * 22;
        const by = hy - 62 - (i % 2) * 12;
        return (
          <g key={i}>
            <path d={`M${hx} ${hy} Q ${(hx + bx) / 2 + 4} ${(hy + by) / 2} ${bx} ${by + 15}`} stroke="#64748B" strokeWidth={1.2} fill="none" />
            <ellipse cx={bx} cy={by} rx={11} ry={14} fill={c} />
            <ellipse cx={bx - 4} cy={by - 5} rx={2.5} ry={4} fill="white" opacity={0.5} />
            {badges && (
              <T x={bx} y={by + 1} size={12} color="white">
                {i + 1}
              </T>
            )}
          </g>
        );
      })}
    </g>
  );
}

const RED = "#EF4444";
const BLUE = "#3B82F6";

const story = [
  {
    art: (
      <Panel label="Sam holds three red balloons">
        <Balloons hx={110} hy={114} colors={[RED, RED, RED]} />
        <Kid x={80} y={146} s={0.85} shirt="#22C55E" arms="point" />
      </Panel>
    ),
    speech: "I have 3 balloons!",
    caption: "Sam has three red balloons.",
  },
  {
    art: (
      <Panel label="Grandma brings two blue balloons to Sam">
        <Balloons hx={80} hy={114} colors={[RED, RED, RED]} />
        <Kid x={50} y={146} s={0.85} shirt="#22C55E" arms="point" mood="wow" />
        <Balloons hx={162} hy={138} colors={[BLUE, BLUE]} />
        <Kid x={186} y={146} s={1} shirt="#A855F7" hair="#CBD5E1" />
      </Panel>
    ),
    speech: "Here are 2 more!",
    caption: "Grandma brings two blue balloons.",
  },
  {
    art: (
      <Panel label="Sam holds all five balloons together and counts them">
        <Balloons hx={134} hy={114} colors={[RED, RED, RED, BLUE, BLUE]} badges />
        <Kid x={104} y={146} s={0.85} shirt="#22C55E" arms="point" />
      </Panel>
    ),
    speech: "1, 2, 3, 4, 5!",
    caption: "Sam puts them all together and counts them.",
  },
  {
    art: (
      <Panel label="Three plus two equals five balloons">
        <Balloons hx={50} hy={108} colors={[RED, RED, RED]} />
        <T x={92} y={52} size={26}>
          +
        </T>
        <Balloons hx={128} hy={108} colors={[BLUE, BLUE]} />
        <T x={160} y={52} size={26}>
          =
        </T>
        <T x={204} y={52} size={44} color={C}>
          5
        </T>
        <T x={120} y={128} size={24} color={C}>
          3 + 2 = 5
        </T>
      </Panel>
    ),
    caption: "3 and 2 more make 5 altogether: 3 + 2 = 5.",
  },
];

function Jar({ x, y, w, h, marbles }: { x: number; y: number; w: number; h: number; marbles: string[] }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill="#E0F2FE" stroke="#7DD3FC" strokeWidth={3} />
      <rect x={x + 4} y={y - 8} width={w - 8} height={10} rx={3} fill="#94A3B8" />
      {marbles.map((c, i) => {
        const per = Math.max(1, Math.floor((w - 8) / 18));
        return <circle key={i} cx={x + 13 + (i % per) * 18} cy={y + h - 12 - Math.floor(i / per) * 17} r={8} fill={c} stroke="rgba(0,0,0,.15)" />;
      })}
    </g>
  );
}

export const addition: Explainer = {
  id: "addition-put-together",
  title: "Adding is putting groups together",
  tagline: "Push two groups into one and count them all: that's adding.",
  area: "Maths",
  ages: "4–7",
  lessons: ["number-land/add-and-subtract/adding-up-to-10", "number-land/add-and-subtract/adding-to-20", "number-land/hop-and-skip/number-line-hops"],
  color: C,
  icon: "➕",
  watch: [
    { title: "Three ducks", say: "Here are three yellow ducks in a pond.", scene: <DuckScene show={3} labels /> },
    { title: "Two more ducks", say: "And here are two orange ducks in another pond.", scene: <DuckScene show={5} freshFrom={3} labels /> },
    { title: "Put them together", say: "The ducks swim together into one big pond. Adding means putting groups together.", scene: <DuckScene fromLayout="apart" layout="together" /> },
    { title: "Count them all", say: "Now count all the ducks: one, two, three, four, five.", scene: <DuckScene layout="together" count /> },
    { title: "3 + 2 = 5", say: "Three and two make five. We write it: three plus two equals five.", scene: <DuckScene layout="together" eq /> },
    { title: "Swap them round", say: "Put the two orange ducks first. Two plus three is still five!", scene: <DuckScene fromLayout="together" layout="swapped" swapEq /> },
  ],
  try: AddTry,
  story,
  like: {
    headline: "Adding is like pouring two jars of marbles into one big jar.",
    everyday: {
      label: "Pour both jars into one",
      art: (
        <Panel label="A jar with three marbles and a jar with two marbles pour into one big jar of five">
          <Jar x={20} y={30} w={56} h={44} marbles={[RED, RED, RED]} />
          <Jar x={164} y={30} w={56} h={44} marbles={[BLUE, BLUE]} />
          <path d="M70 80 Q 95 100 100 110 M170 80 Q 145 100 140 110" stroke="#94A3B8" strokeWidth={3} fill="none" strokeDasharray="5 4" markerEnd="" />
          <Jar x={75} y={104} w={90} h={40} marbles={[RED, RED, RED, BLUE, BLUE]} />
        </Panel>
      ),
    },
    concept: {
      label: "3 + 2 = 5",
      art: (
        <Panel label="Three dots plus two dots equals five dots">
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={30 + i * 22} cy={60} r={9} fill={RED} />
          ))}
          <T x={110} y={60} size={24}>
            +
          </T>
          {[0, 1].map((i) => (
            <circle key={i} cx={140 + i * 22} cy={60} r={9} fill={BLUE} />
          ))}
          <T x={120} y={112} size={34} color={C}>
            3 + 2 = 5
          </T>
        </Panel>
      ),
    },
    pairs: [
      ["The first jar of marbles", "The first number (3)"],
      ["The second jar", "The second number (2)"],
      ["Pouring them together", "The + sign"],
      ["Marbles in the big jar", "The answer, called the sum (5)"],
    ],
    limits: "Real marbles can roll away, but numbers never get lost. And adding isn't always pouring things together. You can also add lengths, money or minutes, or count on along a number line.",
  },
};
