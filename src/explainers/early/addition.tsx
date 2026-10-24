"use client";

import { motion } from "framer-motion";
import type { Explainer, Mission } from "../types";
import { Badge, Duck, Kid, Panel, Stage, T, TapStep, pop, rise, spring } from "./_kit";

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
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

const mission: Mission = {
  goal: "Put the ducks together. Find out how many!",
  steps: [
    {
      task: "Make the ducks swim together.",
      predict: { question: "3 ducks and 2 ducks swim together. How many?", options: ["🦆🦆🦆🦆 4", "🦆🦆🦆🦆🦆 5"], answer: 1 },
      scene: (api) => <TapStep api={api} color={C} button="🦆 Swim!" render={(on) => (on ? <DuckScene fromLayout="apart" layout="together" /> : <DuckScene labels />)} />,
      hint: "Tap the big green button.",
      explain: "**Adding** puts groups together. Now all the ducks are in one pond.",
    },
    {
      task: "Count all the ducks.",
      scene: (api) => <TapStep api={api} color={C} button="👆 Count!" render={(on) => <DuckScene layout="together" count={on} eq={on} />} />,
      explain: "1, 2, 3, 4, 5. Three and two make five: **3 + 2 = 5**.",
    },
    {
      task: "Swap the groups round.",
      predict: { question: "The 2 ducks go first. How many now?", options: ["🦆🦆🦆🦆🦆 Still 5", "🤔 A new number"], answer: 0, trap: 1 },
      scene: (api) => <TapStep api={api} color={C} button="🔄 Swap!" render={(on) => (on ? <DuckScene fromLayout="together" layout="swapped" swapEq /> : <DuckScene layout="together" eq />)} />,
      explain: "**2 + 3 = 5** too. You can add in any order. The answer is the same.",
    },
  ],
  takeaway: "Adding puts groups together. Count them all to find how many.",
};

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
    { title: "3 + 2 = 5", say: "Three and two make five. We write: three plus two equals five.", scene: <DuckScene layout="together" eq /> },
    { title: "Swap them round", say: "Put the two orange ducks first. Two plus three is still five!", scene: <DuckScene fromLayout="together" layout="swapped" swapEq /> },
  ],
  mission,
  misconception: {
    myth: "3 + 2 and 2 + 3 give different answers.",
    truth: "Swap the groups round and you still have the same number. Both make 5.",
  },
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
