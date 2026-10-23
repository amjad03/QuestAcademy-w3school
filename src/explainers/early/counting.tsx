"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { say } from "@/lib/voice";
import { Apple, Badge, Emo, Finger, Kid, NumberChoices, Panel, Stage, T, Table, TryFrame, choicesFor, pop, rand, shuffle, type Status } from "./_kit";

const C = "#F97316";

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const APPLES = [
  { x: 72, y: 168 },
  { x: 140, y: 120 },
  { x: 205, y: 178 },
  { x: 268, y: 124 },
  { x: 330, y: 172 },
];

function Ground() {
  return (
    <g>
      <rect x={0} y={200} width={400} height={60} rx={10} fill="#BBF7D0" />
      <path d="M0 205 q 50 -12 100 0 t 100 0 t 100 0 t 100 0 v 55 h -400 z" fill="#86EFAC" />
    </g>
  );
}

/**
 * `shown` tags are drawn; tags from `fresh` onward are new in this step and
 * appear one by one as the finger touches each apple.
 */
function CountScene({ shown = 0, fresh = 0, order = [0, 1, 2, 3, 4], total, popApples, question }: { shown?: number; fresh?: number; order?: number[]; total?: boolean; popApples?: boolean; question?: boolean }) {
  const STEP = 0.8;
  const path = order.slice(fresh, shown).map((i) => APPLES[i]);
  return (
    <Stage label={`Five apples on the grass${shown ? `, counted ${shown === 5 ? "one to five" : `up to ${shown}`}` : ""}${total ? ". The last number, five, tells how many." : ""}`}>
      <Ground />
      {APPLES.map((a, i) => (
        <motion.g key={i} {...(popApples ? pop(0.15 + i * 0.25) : {})}>
          <Apple x={a.x} y={a.y} r={22} />
        </motion.g>
      ))}
      {order.slice(0, shown).map((ai, k) => {
        const a = APPLES[ai];
        const isNew = k >= fresh;
        const last = total && k === shown - 1;
        return <Badge key={k} x={a.x} y={a.y - 42} n={k + 1} color={last ? "#16A34A" : C} r={last ? 17 : 14} ring={last} delay={isNew ? 0.35 + (k - fresh) * STEP : undefined} />;
      })}
      {path.length > 0 && <Finger path={path} delay={0.15} step={STEP} />}
      {question && (
        <motion.g {...pop(1.5)}>
          <circle cx={200} cy={46} r={28} fill="white" stroke={C} strokeWidth={4} />
          <T x={200} y={47} size={34} color={C}>
            ?
          </T>
        </motion.g>
      )}
      {total && (
        <motion.g {...pop(fresh < shown ? 0.6 + (shown - fresh) * STEP : 0.4)}>
          <rect x={150} y={8} width={100} height={52} rx={18} fill="#16A34A" />
          <T x={184} y={35} size={34} color="white">
            5
          </T>
          <Apple x={222} y={36} r={13} />
        </motion.g>
      )}
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Try: tap each thing to count it                                    */
/* ------------------------------------------------------------------ */

const THINGS = ["🐞", "🍎", "⭐", "🐟", "🦆", "🍓", "🚗", "🌼"];
const NUM_WORDS = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

function makeRound() {
  const n = rand(3, 10);
  const cells = shuffle(Array.from({ length: 18 }, (_, i) => i)).slice(0, n);
  return {
    n,
    thing: THINGS[rand(0, THINGS.length - 1)],
    items: cells.map((c) => ({ x: 34 + (c % 6) * 58 + rand(-6, 6), y: 82 + Math.floor(c / 6) * 62 + rand(-5, 5) })),
  };
}

function CountTry() {
  const [round, setRound] = useState(0);
  const r = useMemo(() => makeRound(), [round]);
  const [order, setOrder] = useState<number[]>([]);
  const [shake, setShake] = useState<{ i: number; k: number } | null>(null);
  const [status, setStatus] = useState<Status>("play");
  const done = order.length === r.n;
  const choices = useMemo(() => choicesFor(r.n, 1), [r]);

  const tap = (i: number) => {
    if (status === "good") return;
    if (order.includes(i)) {
      setShake({ i, k: Date.now() });
      return;
    }
    const next = [...order, i];
    setOrder(next);
    say(NUM_WORDS[next.length]);
  };

  const another = () => {
    setOrder([]);
    setStatus("play");
    setShake(null);
    setRound((x) => x + 1);
  };

  const lastIdx = order[order.length - 1];
  return (
    <TryFrame color={C} round={round} status={status} onAnother={another} picture={r.thing} prompt="Touch each one and count. How many are there?">
      <div className="overflow-hidden rounded-2xl border-2 border-line" style={{ background: "#F0FDF4" }}>
        <svg viewBox="0 0 360 250" className="block h-auto w-full" style={{ maxHeight: 300, touchAction: "manipulation" }} role="group" aria-label={`${r.n} things to count. ${order.length} counted so far.`}>
          {status === "good" && (
            <motion.g {...pop(0)}>
              <rect x={130} y={4} width={100} height={44} rx={16} fill="#16A34A" />
              <T x={160} y={27} size={30} color="white">
                {r.n}
              </T>
              <Emo x={200} y={27} size={24}>
                {r.thing}
              </Emo>
            </motion.g>
          )}
          {r.items.map((p, i) => {
            const k = order.indexOf(i);
            const counted = k >= 0;
            return (
              <g key={`${round}-${i}`} onClick={() => tap(i)} tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), tap(i))} style={{ cursor: "pointer", outline: "none" }} role="button" aria-label={counted ? `Counted ${k + 1}` : "Not counted yet"}>
                <motion.g {...pop(i * 0.06)}>
                  <motion.g key={shake?.i === i ? shake.k : 0} animate={shake?.i === i ? { x: [0, -6, 6, -4, 4, 0] } : { scale: counted ? 0.92 : 1 }} transition={{ duration: 0.4 }}>
                    <circle cx={p.x} cy={p.y} r={27} fill={counted ? "#FFEDD5" : "white"} stroke={counted ? C : "#CBD5E1"} strokeWidth={3} strokeDasharray={counted ? undefined : "5 4"} />
                    <Emo x={p.x} y={p.y + 1} size={32}>
                      {r.thing}
                    </Emo>
                  </motion.g>
                </motion.g>
                {counted && <Badge x={p.x + 20} y={p.y - 22} n={k + 1} delay={0} color={done && status === "good" && i === lastIdx ? "#16A34A" : C} r={12} />}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-3 min-h-[64px]">
        {done && (
          <motion.div {...pop(0.2)}>
            <NumberChoices key={round} options={choices} answer={r.n} color={C} onRight={() => setStatus("good")} onWrong={() => setStatus("oops")} />
          </motion.div>
        )}
      </div>
    </TryFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy art                                                 */
/* ------------------------------------------------------------------ */

const CUPS = [
  { x: 120, y: 104 },
  { x: 150, y: 96 },
  { x: 178, y: 106 },
  { x: 205, y: 95 },
  { x: 140, y: 112 },
];

function Cupcakes({ row }: { row?: boolean }) {
  return (
    <g>
      {CUPS.map((c, i) => (
        <Emo key={i} x={row ? 95 + i * 30 : c.x} y={row ? 104 : c.y} size={24}>
          🧁
        </Emo>
      ))}
    </g>
  );
}

const story = [
  {
    art: (
      <Panel label="Mia and Leo look at a table of cupcakes">
        <Table />
        <Cupcakes />
        <Kid x={40} y={145} s={0.85} shirt="#EC4899" bow mood="think" />
        <Kid x={84} y={145} s={0.8} shirt="#3B82F6" hair="#1F2937" mood="wow" />
      </Panel>
    ),
    speech: "How many cupcakes?",
    caption: "Mia and Leo have cupcakes for their party.",
  },
  {
    art: (
      <Panel label="Leo counts too fast and touches some cupcakes twice">
        <Table />
        <Cupcakes />
        {[
          [120, 80, 1],
          [150, 72, 2],
          [163, 78, 3],
          [178, 82, 4],
          [205, 71, 5],
          [218, 80, 6],
          [140, 90, 7],
        ].map(([x, y, n]) => (
          <Badge key={n} x={x} y={y - 8} n={n} r={8} color="#EF4444" />
        ))}
        <Kid x={50} y={145} s={0.85} shirt="#3B82F6" hair="#1F2937" mood="wow" arms="point" />
      </Panel>
    ),
    speech: "Seven?",
    caption: "Leo counts too fast. He touches some cupcakes twice!",
  },
  {
    art: (
      <Panel label="Mia touches each cupcake once and counts one to five">
        <Table />
        <Cupcakes row />
        {[0, 1, 2, 3, 4].map((i) => (
          <Badge key={i} x={95 + i * 30} y={80} n={i + 1} r={9} color={C} />
        ))}
        <Kid x={45} y={145} s={0.85} shirt="#EC4899" bow arms="point" />
      </Panel>
    ),
    speech: "One number for each!",
    caption: "Mia touches each cupcake once and says one number.",
  },
  {
    art: (
      <Panel label="Five friends each holding one cupcake">
        {["#EC4899", "#3B82F6", "#22C55E", "#F59E0B", "#8B5CF6"].map((s, i) => (
          <g key={i}>
            <Kid x={30 + i * 45} y={146} s={0.62} shirt={s} hair={i % 2 ? "#1F2937" : "#7C4A1E"} bow={i % 2 === 0} arms="up" />
            <Emo x={30 + i * 45 + 17} y={108} size={18}>
              🧁
            </Emo>
          </g>
        ))}
        <Badge x={120} y={24} n={5} r={14} color="#16A34A" ring />
      </Panel>
    ),
    speech: "Five!",
    caption: "The last number was five, so there are five cupcakes: one for each friend!",
  },
];

/* ------------------------------------------------------------------ */
/* Export                                                              */
/* ------------------------------------------------------------------ */

export const counting: Explainer = {
  id: "counting-one-each",
  title: "Counting: one number for each thing",
  tagline: "Touch each thing once, say one number — the last number tells how many.",
  area: "Maths",
  ages: "3–6",
  lessons: ["number-land/counting/count-to-10", "number-land/counting/count-to-20", "number-land/more-or-less/more-fewer-same"],
  color: C,
  icon: "🍎",
  watch: [
    { title: "How many apples?", say: "Here are some apples. How many are there? Let's count them!", scene: <CountScene popApples question /> },
    { title: "Touch one, say one", say: "Touch one apple and say one number. One!", scene: <CountScene shown={1} fresh={0} /> },
    { title: "Keep going", say: "Move to the next apple and say the next number. Two, three!", scene: <CountScene shown={3} fresh={1} /> },
    { title: "Every apple gets one number", say: "Don't skip any, and don't touch one twice. Four, five!", scene: <CountScene shown={5} fresh={3} /> },
    { title: "The last number tells how many", say: "The last number we said was five. So there are five apples!", scene: <CountScene shown={5} fresh={5} total /> },
    { title: "Any order works", say: "Count them in a different order. It is still five!", scene: <CountScene shown={5} fresh={0} order={[4, 2, 0, 3, 1]} total /> },
  ],
  try: CountTry,
  story,
  like: {
    headline: "Counting is like giving each person in a line one ticket.",
    everyday: {
      label: "One ticket for each person",
      art: (
        <Panel label="Four children in a line, each holding a numbered ticket">
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <Kid x={45 + i * 50} y={140} s={0.7} shirt={["#3B82F6", "#EC4899", "#22C55E", "#F59E0B"][i]} bow={i % 2 === 1} arms="point" />
              <rect x={45 + i * 50 + 16} y={88} width={20} height={14} rx={3} fill="#FDE68A" stroke="#D97706" strokeWidth={1.5} />
              <T x={45 + i * 50 + 26} y={95} size={10}>
                {i + 1}
              </T>
            </g>
          ))}
        </Panel>
      ),
    },
    concept: {
      label: "One number for each apple",
      art: (
        <Panel label="Four apples, each with a number from one to four">
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <Apple x={45 + i * 50} y={105} r={18} />
              <Badge x={45 + i * 50} y={70} n={i + 1} r={11} color={i === 3 ? "#16A34A" : C} ring={i === 3} />
            </g>
          ))}
          <T x={120} y={24} size={18} color="#16A34A">
            4 apples
          </T>
        </Panel>
      ),
    },
    pairs: [
      ["Each person in the line", "Each thing you count"],
      ["One ticket per person — nobody gets two", "One number per thing — never skip, never twice"],
      ["Tickets go 1, 2, 3 in order", "Say the numbers in order"],
      ["The last ticket number", "How many there are"],
    ],
    limits: "Tickets get used up, but numbers never do. And a line has a fixed order, while you can count things in any order and still get the same answer.",
  },
};
