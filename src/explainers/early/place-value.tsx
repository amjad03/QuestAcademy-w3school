"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { say } from "@/lib/voice";
import { Kid, NumberChoices, Panel, Stage, T, TryFrame, pop, rand, rise, shuffle, type Status } from "./_kit";

const C = "#7C3AED";
const TENS = "#2563EB";
const ONES = "#EA580C";

/* ------------------------------------------------------------------ */
/* Drawn sticks                                                        */
/* ------------------------------------------------------------------ */

function StickArt({ h = 50 }: { h?: number }) {
  return <rect x={-3.5} y={-h / 2} width={7} height={h} rx={3.5} fill="#F4C27A" stroke="#C98B3A" strokeWidth={1.2} />;
}

function Band({ x, y, delay }: { x: number; y: number; delay?: number }) {
  return (
    <motion.g {...(delay === undefined ? {} : pop(delay))}>
      <rect x={x - 23} y={y - 5} width={46} height={10} rx={4} fill="#EF4444" stroke="#B91C1C" strokeWidth={1.2} />
      <circle cx={x} cy={y - 18} r={10} fill={TENS} />
      <T x={x} y={y - 17} size={11} color="white">
        10
      </T>
    </motion.g>
  );
}

/** Deterministic scatter so each step starts where the last one ended. */
function scatter(i: number, x0 = 30, x1 = 370, y0 = 46, y1 = 100) {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12345.678;
  const fx = a - Math.floor(a);
  const fy = b - Math.floor(b);
  return { x: x0 + fx * (x1 - x0), y: y0 + fy * (y1 - y0), rotate: (fx - 0.5) * 70 };
}

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const BUNDLE_X = [80, 160];
const ROW_Y = 192;

function posAt(i: number, stage: number) {
  if (stage >= 1 && i < 10) return { x: BUNDLE_X[0] - 18 + i * 4, y: ROW_Y, rotate: 0 };
  if (stage >= 2 && i >= 10 && i < 20) return { x: BUNDLE_X[1] - 18 + (i - 10) * 4, y: ROW_Y, rotate: 0 };
  if (stage >= 3 && i >= 20) return { x: 272 + (i - 20) * 26, y: ROW_Y, rotate: 0 };
  return scatter(i);
}

function SticksScene({ stage }: { stage: number }) {
  const mat = stage >= 4;
  return (
    <Stage label={["Twenty-three loose sticks", "Ten sticks tied into one bundle", "Two bundles of ten", "Two bundles of ten and three loose sticks", "Two tens and three ones make twenty-three"][stage]}>
      {mat && (
        <motion.g {...rise(0)}>
          <rect x={14} y={128} width={226} height={128} rx={16} fill="#DBEAFE" />
          <rect x={248} y={128} width={140} height={128} rx={16} fill="#FFEDD5" />
          <T x={127} y={142} size={15} color={TENS}>
            TENS
          </T>
          <T x={318} y={142} size={15} color={ONES}>
            ONES
          </T>
        </motion.g>
      )}
      {Array.from({ length: 23 }, (_, i) => {
        const from = posAt(i, Math.max(0, stage - 1));
        const to = posAt(i, stage);
        const moves = from.x !== to.x || from.y !== to.y;
        const group = i < 10 ? i : i < 20 ? i - 10 : i - 20;
        return (
          <motion.g key={i} initial={stage === 0 ? { ...to, scale: 0 } : from} animate={{ ...to, scale: 1 }} transition={{ duration: 0.7, delay: stage === 0 ? i * 0.05 : moves ? 0.3 + group * 0.16 : 0, ease: "easeInOut" }}>
            <StickArt />
          </motion.g>
        );
      })}
      {stage >= 1 && <Band x={BUNDLE_X[0]} y={ROW_Y} delay={stage === 1 ? 2.3 : undefined} />}
      {stage >= 2 && <Band x={BUNDLE_X[1]} y={ROW_Y} delay={stage === 2 ? 2.3 : undefined} />}
      {stage === 3 && (
        <motion.g {...pop(1.4)}>
          {[0, 1, 2].map((j) => (
            <g key={j}>
              <circle cx={272 + j * 26} cy={ROW_Y - 40} r={10} fill={ONES} />
              <T x={272 + j * 26} y={ROW_Y - 39} size={12} color="white">
                1
              </T>
            </g>
          ))}
        </motion.g>
      )}
      {mat && (
        <>
          <motion.g {...pop(0.6)}>
            <T x={127} y={240} size={30} color={TENS}>
              2
            </T>
          </motion.g>
          <motion.g {...pop(1)}>
            <T x={318} y={240} size={30} color={ONES}>
              3
            </T>
          </motion.g>
          <motion.g {...pop(1.6)}>
            <rect x={150} y={20} width={100} height={60} rx={18} fill="white" stroke={C} strokeWidth={3} />
            <T x={185} y={51} size={42} color={TENS}>
              2
            </T>
            <T x={215} y={51} size={42} color={ONES}>
              3
            </T>
          </motion.g>
        </>
      )}
    </Stage>
  );
}

function SwapScene() {
  return (
    <Stage label="Three tens and two ones make thirty-two">
      <rect x={14} y={128} width={226} height={128} rx={16} fill="#DBEAFE" />
      <rect x={248} y={128} width={140} height={128} rx={16} fill="#FFEDD5" />
      <T x={127} y={142} size={15} color={TENS}>
        TENS
      </T>
      <T x={318} y={142} size={15} color={ONES}>
        ONES
      </T>
      {[60, 127, 194].map((bx, b) => (
        <motion.g key={b} {...pop(0.2 + b * 0.35)}>
          {Array.from({ length: 10 }, (_, j) => (
            <g key={j} transform={`translate(${bx - 18 + j * 4} ${ROW_Y})`}>
              <StickArt />
            </g>
          ))}
          <Band x={bx} y={ROW_Y} />
        </motion.g>
      ))}
      {[300, 330].map((x, j) => (
        <motion.g key={x} {...pop(1.4 + j * 0.3)}>
          <g transform={`translate(${x} ${ROW_Y})`}>
            <StickArt />
          </g>
        </motion.g>
      ))}
      <T x={127} y={240} size={30} color={TENS}>
        3
      </T>
      <T x={318} y={240} size={30} color={ONES}>
        2
      </T>
      <motion.g {...pop(2.1)}>
        <rect x={60} y={20} width={100} height={60} rx={18} fill="white" stroke="#CBD5E1" strokeWidth={3} />
        <T x={95} y={51} size={40} color={TENS}>
          2
        </T>
        <T x={125} y={51} size={40} color={ONES}>
          3
        </T>
        <T x={200} y={50} size={30} color="#94A3B8">
          ≠
        </T>
        <rect x={240} y={20} width={100} height={60} rx={18} fill="white" stroke={C} strokeWidth={3} />
        <T x={275} y={51} size={40} color={TENS}>
          3
        </T>
        <T x={305} y={51} size={40} color={ONES}>
          2
        </T>
      </motion.g>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Try: tap sticks into the band until you have ten                    */
/* ------------------------------------------------------------------ */

const RING = { x: 300, y: 64 };

function PlaceTry() {
  const [round, setRound] = useState(0);
  const n = useMemo(() => rand(11, 34), [round]);
  const [order, setOrder] = useState<number[]>([]);
  const [bundles, setBundles] = useState(0);
  const [status, setStatus] = useState<Status>("play");
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  const done = bundles === tens;
  const inRing = order.length - bundles * 10;

  useEffect(() => {
    if (inRing < 10) return;
    const t = setTimeout(() => {
      setBundles((b) => b + 1);
      say("Ten! That's one bundle.");
    }, 650);
    return () => clearTimeout(t);
  }, [inRing]);

  const choices = useMemo(() => {
    const set = new Set([n]);
    const swapped = ones * 10 + tens;
    if (ones > 0 && swapped !== n && swapped <= 99) set.add(swapped);
    for (const d of shuffle([10, -10, 1, -1])) {
      if (set.size >= 3) break;
      if (n + d > 0) set.add(n + d);
    }
    return shuffle([...set]);
  }, [n, ones, tens]);

  const tap = (i: number) => {
    if (done || inRing >= 10 || order.includes(i)) return;
    const next = [...order, i];
    setOrder(next);
    say(String(next.length - bundles * 10));
  };
  const another = () => {
    setOrder([]);
    setBundles(0);
    setStatus("play");
    setRound((x) => x + 1);
  };

  const loose = Array.from({ length: n }, (_, i) => i).filter((i) => !order.includes(i));
  const pos = (i: number) => {
    const q = order.indexOf(i);
    if (q >= 0) {
      const b = Math.floor(q / 10);
      const j = q % 10;
      if (b < bundles) return { x: 40 + b * 62 - 18 + j * 4, y: 196, rotate: 0 };
      return { x: RING.x - 18 + j * 4, y: RING.y, rotate: 0 };
    }
    if (done) return { x: 254 + loose.indexOf(i) * 11, y: 196, rotate: 0 };
    const s = scatter(i + round * 40, 18, 222, 36, 104);
    return s;
  };

  return (
    <TryFrame color={C} round={round} status={status} onAnother={another} picture="🪵" prompt="Tap the sticks to make bundles of ten. What number is it?">
      <div className="overflow-hidden rounded-2xl border-2 border-line bg-white">
        <svg viewBox="0 0 360 262" className="block h-auto w-full" style={{ maxHeight: 340, touchAction: "manipulation" }} role="img" aria-label={`${n} sticks. ${bundles} bundles of ten made.${done ? ` ${tens} tens and ${ones} ones.` : ""}`}>
          <rect x={6} y={8} width={226} height={118} rx={14} fill="#FEF9C3" />
          <circle cx={RING.x} cy={RING.y} r={52} fill={inRing >= 10 ? "#EDE9FE" : "#F8FAFC"} stroke={C} strokeWidth={3} strokeDasharray="7 6" />
          <T x={RING.x} y={RING.y + 64} size={13} color={C}>
            {Math.min(inRing, 10)} / 10
          </T>
          <rect x={6} y={136} width={232} height={120} rx={14} fill="#DBEAFE" />
          <rect x={244} y={136} width={110} height={120} rx={14} fill="#FFEDD5" />
          <T x={122} y={150} size={13} color={TENS}>
            TENS
          </T>
          <T x={299} y={150} size={13} color={ONES}>
            ONES
          </T>
          {Array.from({ length: n }, (_, i) => {
            const p = pos(i);
            return (
              <motion.g key={`${round}-${i}`} initial={{ ...p, scale: 0 }} animate={{ ...p, scale: 1 }} transition={{ duration: 0.45, ease: "easeOut", scale: { delay: order.length ? 0 : i * 0.02 } }} onClick={() => tap(i)} style={{ cursor: done ? "default" : "pointer" }}>
                <rect x={-12} y={-30} width={24} height={60} fill="transparent" />
                <StickArt h={46} />
              </motion.g>
            );
          })}
          {Array.from({ length: bundles }, (_, b) => (
            <Band key={`${round}-b${b}`} x={40 + b * 62} y={196} delay={0.3} />
          ))}
          {done && (
            <>
              <motion.g {...pop(0.4)}>
                <T x={122} y={242} size={28} color={TENS}>
                  {tens}
                </T>
              </motion.g>
              <motion.g {...pop(0.8)}>
                <T x={299} y={242} size={28} color={ONES}>
                  {ones}
                </T>
              </motion.g>
            </>
          )}
        </svg>
      </div>
      <div className="mt-3 min-h-[64px]">
        {done && status !== "good" && (
          <motion.div {...pop(1)}>
            <NumberChoices key={round} options={choices} answer={n} color={C} onRight={() => setStatus("good")} onWrong={() => setStatus("oops")} />
          </motion.div>
        )}
        {status === "good" && (
          <motion.p {...pop(0)} className="text-center text-2xl font-black sm:text-3xl" onAnimationComplete={() => say(`${tens} tens and ${ones} ones make ${n}`)}>
            <span style={{ color: TENS }}>{tens} tens</span> + <span style={{ color: ONES }}>{ones} ones</span> = <span className="text-5xl" style={{ color: C }}>
              <span style={{ color: TENS }}>{tens}</span>
              <span style={{ color: ONES }}>{ones}</span>
            </span>
          </motion.p>
        )}
      </div>
    </TryFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Story: eggs in boxes of ten                                         */
/* ------------------------------------------------------------------ */

function Egg({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return <ellipse cx={x} cy={y} rx={6 * s} ry={8 * s} fill="#FFF7ED" stroke="#D6A15E" strokeWidth={1.3} />;
}

function EggBox({ x, y, eggs = 10 }: { x: number; y: number; eggs?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={76} height={34} rx={6} fill="#A3B8C9" stroke="#64748B" strokeWidth={1.5} />
      {Array.from({ length: 10 }, (_, k) => {
        const cx = x + 9 + (k % 5) * 14.5;
        const cy = y + 9 + Math.floor(k / 5) * 16;
        return <g key={k}>{k < eggs ? <Egg x={cx} y={cy} s={0.85} /> : <circle cx={cx} cy={cy} r={5} fill="#7E94A6" />}</g>;
      })}
    </g>
  );
}

const EGGS = Array.from({ length: 23 }, (_, i) => scatter(i + 7, 100, 228, 70, 132));

const story = [
  {
    art: (
      <Panel label="A farmer girl with lots of eggs everywhere">
        <rect x={0} y={130} width={240} height={20} fill="#BBF7D0" />
        {EGGS.map((p, i) => (
          <Egg key={i} x={p.x} y={p.y} />
        ))}
        <Kid x={46} y={145} s={0.85} shirt="#F59E0B" bow mood="wow" />
      </Panel>
    ),
    speech: "So many eggs!",
    caption: "Rosa finds lots of eggs. Counting them one by one is hard!",
  },
  {
    art: (
      <Panel label="Rosa puts eggs into a box that holds ten">
        <rect x={0} y={130} width={240} height={20} fill="#BBF7D0" />
        <EggBox x={100} y={62} eggs={7} />
        <Egg x={150} y={50} />
        {EGGS.slice(0, 13).map((p, i) => (
          <Egg key={i} x={186 + (i % 4) * 12 + (Math.floor(i / 4) % 2) * 5} y={134 - Math.floor(i / 4) * 11} s={0.85} />
        ))}
        <Kid x={56} y={145} s={0.85} shirt="#F59E0B" bow arms="point" />
      </Panel>
    ),
    speech: "Ten in each box!",
    caption: "She puts the eggs into boxes that hold exactly ten.",
  },
  {
    art: (
      <Panel label="Two full boxes of ten and three loose eggs">
        <EggBox x={18} y={70} />
        <EggBox x={102} y={70} />
        {[194, 208, 222].map((x) => (
          <Egg key={x} x={x} y={87} />
        ))}
        <T x={94} y={124} size={16} color={TENS}>
          2 tens
        </T>
        <T x={208} y={124} size={16} color={ONES}>
          3 ones
        </T>
      </Panel>
    ),
    caption: "Two full boxes, and three eggs left over.",
  },
  {
    art: (
      <Panel label="Two tens and three ones make twenty-three">
        <T x={120} y={64} size={60}>
          <tspan fill={TENS}>2</tspan>
          <tspan fill={ONES}>3</tspan>
        </T>
        <T x={120} y={118} size={16} color="#475569">
          2 boxes of ten + 3 eggs
        </T>
      </Panel>
    ),
    speech: "Twenty-three!",
    caption: "2 tens and 3 ones make 23 eggs. No need to count one by one!",
  },
];

/* ------------------------------------------------------------------ */
/* Analogy: coins and notes                                            */
/* ------------------------------------------------------------------ */

function Note({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width={70} height={38} rx={5} fill="#BBF7D0" stroke="#16A34A" strokeWidth={2} />
      <circle cx={x + 35} cy={y + 19} r={11} fill="#86EFAC" />
      <T x={x + 35} y={y + 20} size={14} color="#166534">
        10
      </T>
    </g>
  );
}

function Coin({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={13} fill="#FCD34D" stroke="#B45309" strokeWidth={2} />
      <T x={x} y={y + 1} size={12} color="#92400E">
        1
      </T>
    </g>
  );
}

export const placeValue: Explainer = {
  id: "place-value-tens-ones",
  title: "Tens and ones",
  tagline: "Tie ten sticks into a bundle: the digits tell how many bundles and how many loose ones.",
  area: "Maths",
  ages: "5–8",
  lessons: ["number-land/counting/count-to-20", "number-land/add-and-subtract/adding-to-20", "math-magic/multiplication/bigger-multiplying"],
  color: C,
  icon: "🪵",
  watch: [
    { title: "Lots of sticks", say: "Here are lots of sticks. Counting them one by one takes a long time!", scene: <SticksScene stage={0} /> },
    { title: "Make a bundle of ten", say: "Let's count ten sticks and tie them together. That is one ten!", scene: <SticksScene stage={1} /> },
    { title: "Another ten", say: "Ten more sticks make another bundle. Now we have two tens.", scene: <SticksScene stage={2} /> },
    { title: "The leftover ones", say: "Three sticks are left over. Not enough for a bundle. They are the ones.", scene: <SticksScene stage={3} /> },
    { title: "Tens and ones make 23", say: "Two tens and three ones make twenty-three. The 2 tells the tens. The 3 tells the ones.", scene: <SticksScene stage={4} /> },
    { title: "Where a digit sits matters", say: "Swap them, and three tens and two ones make thirty-two. That's a different number!", scene: <SwapScene /> },
  ],
  try: PlaceTry,
  story,
  like: {
    headline: "Tens and ones are like ten-coin notes and single coins.",
    everyday: {
      label: "One 10 note + 3 coins",
      art: (
        <Panel label="Ten coins swap for one ten note, plus three coins">
          {Array.from({ length: 10 }, (_, k) => (
            <Coin key={k} x={22 + (k % 5) * 22} y={36 + Math.floor(k / 5) * 26} />
          ))}
          <T x={140} y={48} size={22} color="#64748B">
            →
          </T>
          <Note x={160} y={30} />
          <Note x={40} y={100} />
          {[140, 168, 196].map((x) => (
            <Coin key={x} x={x} y={119} />
          ))}
        </Panel>
      ),
    },
    concept: {
      label: "1 ten + 3 ones = 13",
      art: (
        <Panel label="One bundle of ten sticks and three loose sticks make thirteen">
          {Array.from({ length: 10 }, (_, j) => (
            <g key={j} transform={`translate(${42 + j * 4} 80)`}>
              <StickArt h={56} />
            </g>
          ))}
          <Band x={60} y={80} />
          {[130, 152, 174].map((x) => (
            <g key={x} transform={`translate(${x} 80)`}>
              <StickArt h={56} />
            </g>
          ))}
          <T x={120} y={134} size={28}>
            <tspan fill={TENS}>1</tspan>
            <tspan fill={ONES}>3</tspan>
          </T>
        </Panel>
      ),
    },
    pairs: [
      ["One coin", "One stick (a one)"],
      ["Swap ten coins for one note", "Tie ten sticks into a bundle (a ten)"],
      ["How many notes", "The tens digit"],
      ["How many coins are left", "The ones digit"],
    ],
    limits: "In your purse you can keep twelve loose coins, but in a written number each place only holds 0 to 9: at ten you must bundle. And money has other notes and coins, like 5s and 20s, that don't fit tens and ones.",
  },
};
