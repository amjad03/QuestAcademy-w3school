"use client";

import { motion } from "framer-motion";
import type { Explainer, Mission } from "../types";
import { Kid, Panel, Stage, T, TapStep, pop, rise } from "./_kit";

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

/** `still`: start already at `stage` (no entry animation), for a mission step that then moves on. */
function SticksScene({ stage, still }: { stage: number; still?: boolean }) {
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
        const from = still ? posAt(i, stage) : posAt(i, Math.max(0, stage - 1));
        const to = posAt(i, stage);
        const moves = from.x !== to.x || from.y !== to.y;
        const group = i < 10 ? i : i < 20 ? i - 10 : i - 20;
        return (
          <motion.g key={i} initial={stage === 0 && !still ? { ...to, scale: 0 } : from} animate={{ ...to, scale: 1 }} transition={{ duration: 0.7, delay: stage === 0 ? i * 0.05 : moves ? 0.3 + group * 0.16 : 0, ease: "easeInOut" }}>
            <StickArt />
          </motion.g>
        );
      })}
      {stage >= 1 && <Band x={BUNDLE_X[0]} y={ROW_Y} delay={stage === 1 && !still ? 2.3 : undefined} />}
      {stage >= 2 && <Band x={BUNDLE_X[1]} y={ROW_Y} delay={stage === 2 && !still ? 2.3 : undefined} />}
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
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

const mission: Mission = {
  goal: "Tie the sticks in tens. Find the number without counting one by one.",
  steps: [
    {
      task: "Tie 10 sticks into a bundle.",
      scene: (api) => <TapStep api={api} color={C} button="🎀 Tie 10" render={(on) => <SticksScene stage={on ? 1 : 0} />} />,
      hint: "Tap the big purple button.",
      explain: "10 sticks tied together make **one ten**.",
    },
    {
      task: "Tie the next 10 sticks.",
      predict: { question: "After 2 bundles, how many sticks are left over?", options: ["🪵🪵🪵 3", "🪵 None"], answer: 0 },
      scene: (api) => <TapStep api={api} color={C} button="🎀 Tie 10 more" render={(on) => <SticksScene stage={on ? 2 : 1} still={!on} />} />,
      explain: "Now there are **2 tens**. 3 sticks are left. They are the **ones**.",
    },
    {
      task: "Put the sticks on the mat.",
      predict: { question: "2 tens and 3 ones. What number is it?", options: ["5", "23"], answer: 1, trap: 0 },
      scene: (api) => <TapStep api={api} color={C} button="🧺 Sort them" render={(on) => <SticksScene stage={on ? 4 : 2} still={!on} />} />,
      explain: "**2 tens** and **3 ones** make **23**. The 2 means two tens: 20.",
    },
  ],
  takeaway: "Ten ones make a ten. In 23, the 2 tells the tens and the 3 tells the ones.",
};

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
    { title: "Swap the digits", say: "Swap the digits. Three tens and two ones make thirty-two. That's a different number!", scene: <SwapScene /> },
  ],
  mission,
  misconception: {
    myth: "In 23, the 2 just means 2.",
    truth: "The 2 sits in the tens place, so it means 2 tens: 20. 23 is 20 and 3.",
  },
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
