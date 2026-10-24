"use client";

import { motion } from "framer-motion";
import type { Explainer, Mission } from "../types";
import { Badge, Emo, Kid, Panel, Stage, T, TapStep, pop } from "./_kit";

const C = "#0D9488";
const SIDE_COLORS = ["#2563EB", "#E11D48", "#16A34A", "#F59E0B"];

type Pt = { x: number; y: number };

const mid = (a: Pt, b: Pt) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
/** Point pushed `d` units away from the centre c (to place labels outside). */
const out = (p: Pt, c: Pt, d: number) => {
  const dx = p.x - c.x;
  const dy = p.y - c.y;
  const l = Math.hypot(dx, dy) || 1;
  return { x: p.x + (dx / l) * d, y: p.y + (dy / l) * d };
};

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const TRI: Pt[] = [
  { x: 200, y: 40 },
  { x: 290, y: 205 },
  { x: 110, y: 205 },
];
const SQ: Pt[] = [
  { x: 125, y: 50 },
  { x: 285, y: 50 },
  { x: 285, y: 210 },
  { x: 125, y: 210 },
];
const RECT: Pt[] = [
  { x: 112, y: 84 },
  { x: 352, y: 84 },
  { x: 352, y: 204 },
  { x: 112, y: 204 },
];

function Tally({ sides, corners }: { sides: number; corners: number }) {
  return (
    <motion.g {...pop(0.2)}>
      <rect x={6} y={10} width={86} height={56} rx={14} fill="white" stroke="#CBD5E1" strokeWidth={2} />
      <line x1={18} y1={28} x2={44} y2={28} stroke="#2563EB" strokeWidth={5} strokeLinecap="round" />
      <T x={68} y={28} size={18}>
        {sides}
      </T>
      <path d="M20 54 L 32 40 L 44 54" stroke="#475569" strokeWidth={3} fill="none" strokeLinejoin="round" />
      <circle cx={32} cy={40} r={4} fill="#F59E0B" />
      <T x={68} y={50} size={18}>
        {corners}
      </T>
    </motion.g>
  );
}

/**
 * Draw a polygon side by side, then pop its corners. `mode` decides how
 * sides are coloured (each its own, equal ticks, or long/short pairs).
 */
function PolyScene({ pts, label, mode = "each", numbers = true, tally = true, intro }: { pts: Pt[]; label: string; mode?: "each" | "equal" | "pairs" | "plain"; numbers?: boolean; tally?: boolean; intro?: boolean }) {
  const n = pts.length;
  const c = { x: pts.reduce((a, p) => a + p.x, 0) / n, y: pts.reduce((a, p) => a + p.y, 0) / n };
  const SIDE_T = 0.55;
  const cornersAt = 0.3 + n * SIDE_T;
  return (
    <Stage label={label}>
      <motion.polygon points={pts.map((p) => `${p.x},${p.y}`).join(" ")} fill="#CCFBF1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: cornersAt }} />
      {pts.map((p, i) => {
        const q = pts[(i + 1) % n];
        const color = mode === "plain" ? "#334155" : mode === "equal" ? "#2563EB" : mode === "pairs" ? (i % 2 === 0 ? "#2563EB" : "#E11D48") : SIDE_COLORS[i % 4];
        const m = mid(p, q);
        const lbl = out(m, c, 24);
        // perpendicular tick for "equal" mode
        const dx = q.x - p.x;
        const dy = q.y - p.y;
        const l = Math.hypot(dx, dy);
        const nx = (-dy / l) * 9;
        const ny = (dx / l) * 9;
        return (
          <g key={i}>
            <motion.line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={color} strokeWidth={9} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: SIDE_T, delay: 0.3 + i * SIDE_T, ease: "easeInOut" }} />
            {mode === "equal" && <motion.line x1={m.x - nx} y1={m.y - ny} x2={m.x + nx} y2={m.y + ny} stroke="#1c2333" strokeWidth={3} strokeLinecap="round" {...pop(cornersAt + 0.4)} />}
            {numbers && <Badge x={lbl.x} y={lbl.y} n={i + 1} color={color} r={12} delay={0.3 + (i + 0.8) * SIDE_T} />}
          </g>
        );
      })}
      {pts.map((p, i) => (
        <motion.g key={i} {...pop(cornersAt + i * 0.35)}>
          <circle cx={p.x} cy={p.y} r={11} fill="#F59E0B" stroke="white" strokeWidth={3} />
          {intro && i === 0 && (
            <g>
              <rect x={p.x + 18} y={p.y - 14} width={74} height={28} rx={14} fill="#F59E0B" />
              <T x={p.x + 55} y={p.y + 1} size={14} color="white">
                corner
              </T>
            </g>
          )}
        </motion.g>
      ))}
      {intro && (
        <motion.g {...pop(1)}>
          <rect x={14} y={104} width={60} height={28} rx={14} fill="#2563EB" />
          <T x={44} y={119} size={14} color="white">
            side
          </T>
          <path d="M76 118 L 148 124" stroke="#2563EB" strokeWidth={2.5} strokeDasharray="4 3" />
        </motion.g>
      )}
      {tally && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: cornersAt + n * 0.35 }}>
          <Tally sides={n} corners={n} />
        </motion.g>
      )}
    </Stage>
  );
}

function CircleScene() {
  const cx = 200;
  const cy = 130;
  const r = 90;
  return (
    <Stage label="A circle: round, with no straight sides and no corners">
      <motion.circle cx={cx} cy={cy} r={r} fill="#CCFBF1" stroke="#7C3AED" strokeWidth={9} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }} />
      <motion.g initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: 360, opacity: 1 }} transition={{ rotate: { duration: 3, delay: 2, ease: "linear" }, opacity: { delay: 2 } }}>
        <circle cx={cx} cy={cy} r={r + 4} fill="none" />
        <circle cx={cx} cy={cy - r} r={10} fill="#F59E0B" stroke="white" strokeWidth={3} />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.1 }}>
        <Tally sides={0} corners={0} />
      </motion.g>
    </Stage>
  );
}

function HouseScene() {
  return (
    <Stage label="A house made of shapes: a triangle roof, a rectangle wall and door, square windows and a circle sun">
      <motion.g {...pop(0.2)}>
        <rect x={110} y={120} width={180} height={120} fill="#FDE68A" stroke="#B45309" strokeWidth={3} />
      </motion.g>
      <motion.g {...pop(0.7)}>
        <polygon points="95,122 200,40 305,122" fill="#F87171" stroke="#B91C1C" strokeWidth={3} />
      </motion.g>
      <motion.g {...pop(1.2)}>
        <rect x={180} y={170} width={42} height={70} fill="#7C3AED" stroke="#4C1D95" strokeWidth={3} />
        <circle cx={214} cy={207} r={3} fill="#FDE68A" />
      </motion.g>
      {[130, 238].map((x, i) => (
        <motion.g key={x} {...pop(1.6 + i * 0.3)}>
          <rect x={x} y={140} width={34} height={34} fill="#BAE6FD" stroke="#0369A1" strokeWidth={3} />
          <path d={`M${x + 17} 140 V 174 M${x} 157 H ${x + 34}`} stroke="#0369A1" strokeWidth={2} />
        </motion.g>
      ))}
      <motion.g {...pop(2.3)}>
        <circle cx={350} cy={50} r={28} fill="#FACC15" stroke="#CA8A04" strokeWidth={3} />
      </motion.g>
      <rect x={0} y={240} width={400} height={20} fill="#86EFAC" />
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

/** Faint dotted outline of a shape still to be drawn. */
function Ghost({ pts, label }: { pts: Pt[] | "circle"; label: string }) {
  const ghost = { fill: "none", stroke: "#94A3B8", strokeWidth: 4, strokeDasharray: "8 8" };
  return (
    <Stage label={label}>
      {pts === "circle" ? <circle cx={200} cy={130} r={90} {...ghost} /> : <polygon points={pts.map((p) => `${p.x},${p.y}`).join(" ")} strokeLinejoin="round" {...ghost} />}
    </Stage>
  );
}

/** A square with equal-side ticks and corners; `turned` spins it onto its point. */
function TurnScene({ turned }: { turned: boolean }) {
  const c = { x: 205, y: 130 };
  return (
    <Stage label={turned ? "The square is turned onto its point. It still has four equal sides and four corners." : "A square with four equal sides and four corners"}>
      <motion.g initial={{ rotate: 0 }} animate={{ rotate: turned ? 45 : 0 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
        <polygon points={SQ.map((p) => `${p.x},${p.y}`).join(" ")} fill="#CCFBF1" stroke="#2563EB" strokeWidth={9} strokeLinejoin="round" />
        {SQ.map((p, i) => {
          const q = SQ[(i + 1) % 4];
          const m = mid(p, q);
          const v = out(m, c, 9);
          return <line key={`t${i}`} x1={m.x - (v.x - m.x)} y1={m.y - (v.y - m.y)} x2={v.x} y2={v.y} stroke="#1c2333" strokeWidth={3} strokeLinecap="round" />;
        })}
        {SQ.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={11} fill="#F59E0B" stroke="white" strokeWidth={3} />
        ))}
      </motion.g>
      <Tally sides={4} corners={4} />
    </Stage>
  );
}

const mission: Mission = {
  goal: "Draw shapes and count their sides and corners.",
  steps: [
    {
      task: "Tap to draw a triangle.",
      predict: { question: "How many corners will the triangle have?", options: ["🔺 3", "🔺 4"], answer: 0 },
      scene: (api) => <TapStep api={api} color={C} button="✏️ Draw!" render={(on) => (on ? <PolyScene pts={TRI} label="A triangle with three sides and three corners" /> : <Ghost pts={TRI} label="A dotted triangle, not drawn yet" />)} />,
      hint: "Tap the big green button.",
      explain: "A triangle has **3 sides** and **3 corners**.",
    },
    {
      task: "Turn the square.",
      predict: { question: "We turn the square. Is it still a square?", options: ["⬜ Yes, a square", "🔷 No, not a square"], answer: 0, trap: 1 },
      scene: (api) => <TapStep api={api} color={C} button="🔄 Turn it" render={(on) => <TurnScene turned={on} />} />,
      explain: "It is still a **square**: 4 equal sides and 4 corners. Turning does not change a shape.",
    },
    {
      task: "Go round the circle.",
      predict: { question: "How many corners does a circle have?", options: ["⭕ 0", "⭕ 4"], answer: 0 },
      scene: (api) => <TapStep api={api} color={C} button="⭕ Go round" render={(on) => (on ? <CircleScene /> : <Ghost pts="circle" label="A dotted circle, not drawn yet" />)} />,
      explain: "The dot goes all the way round and finds **no corners**. A circle is round, with no straight sides.",
    },
  ],
  takeaway: "Count the sides and corners to name a shape. Turning it does not change it.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const story = [
  {
    art: (
      <Panel label="Lily with a magnifying glass in the park">
        <rect x={0} y={128} width={240} height={22} fill="#86EFAC" />
        <circle cx={190} cy={60} r={30} fill="#4ADE80" />
        <rect x={185} y={84} width={10} height={46} fill="#92400E" />
        <Kid x={80} y={146} s={0.9} shirt="#0D9488" bow arms="point" />
        <Emo x={124} y={100} size={26}>
          🔍
        </Emo>
      </Panel>
    ),
    speech: "Let's find shapes!",
    caption: "Lily goes on a shape hunt in the park.",
  },
  {
    art: (
      <Panel label="A triangle road sign with its three corners marked">
        <rect x={116} y={86} width={8} height={62} fill="#94A3B8" />
        <polygon points="120,14 170,96 70,96" fill="white" stroke="#DC2626" strokeWidth={9} strokeLinejoin="round" />
        {[
          [120, 14],
          [170, 96],
          [70, 96],
        ].map(([x, y], i) => (
          <Badge key={i} x={x} y={y} n={i + 1} r={9} color="#F59E0B" />
        ))}
      </Panel>
    ),
    speech: "3 sides, 3 corners!",
    caption: "The road sign is a triangle.",
  },
  {
    art: (
      <Panel label="A house with a rectangle door and a square window">
        <rect x={50} y={40} width={140} height={100} fill="#FDE68A" stroke="#B45309" strokeWidth={2} />
        <rect x={70} y={70} width={44} height={70} fill="#7C3AED" stroke="#4C1D95" strokeWidth={3} />
        <rect x={132} y={64} width={38} height={38} fill="#BAE6FD" stroke="#0369A1" strokeWidth={3} />
      </Panel>
    ),
    speech: "The door is a rectangle!",
    caption: "The door is a rectangle and the window is a square. Both have 4 sides and 4 corners.",
  },
  {
    art: (
      <Panel label="A bicycle with two round wheels">
        <circle cx={70} cy={100} r={32} fill="none" stroke="#1c2333" strokeWidth={6} />
        <circle cx={170} cy={100} r={32} fill="none" stroke="#1c2333" strokeWidth={6} />
        <path d="M70 100 L 110 60 L 170 100 M110 60 L 100 100 L 70 100 M110 60 h 30 M100 52 h 18" stroke={C} strokeWidth={5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M20 140 h 30 M60 140 h 20" stroke="#94A3B8" strokeWidth={3} strokeLinecap="round" />
      </Panel>
    ),
    speech: "No corners, so it rolls!",
    caption: "Wheels are circles. They have no corners, so they roll smoothly.",
  },
];

export const shapes: Explainer = {
  id: "shapes-sides-corners",
  title: "Shapes: sides and corners",
  tagline: "Count the straight sides and the pointy corners to name a shape.",
  area: "Maths",
  ages: "3–6",
  lessons: ["shapes-colors/flat-shapes/circles-and-squares", "shapes-colors/flat-shapes/triangles-and-rectangles", "shapes-colors/flat-shapes/shape-hunt"],
  color: C,
  icon: "🔺",
  watch: [
    { title: "Sides and corners", say: "A side is a straight line. A corner is where two sides meet.", scene: <PolyScene pts={TRI} label="A triangle being drawn, with a side and a corner pointed out" mode="plain" numbers={false} tally={false} intro /> },
    { title: "Triangle", say: "A triangle has three sides and three corners.", scene: <PolyScene pts={TRI} label="A triangle with three sides and three corners" /> },
    { title: "Square", say: "A square has four sides. They are all the same length. It has four corners.", scene: <PolyScene pts={SQ} label="A square with four equal sides and four corners" mode="equal" /> },
    { title: "Rectangle", say: "A rectangle has four sides and four corners too. Two sides are long. Two are short.", scene: <PolyScene pts={RECT} label="A rectangle with two long sides, two short sides and four corners" mode="pairs" /> },
    { title: "Circle", say: "A circle is round. It has no straight sides and no corners at all!", scene: <CircleScene /> },
    { title: "Shapes all around", say: "Look! A house made of shapes. Can you find a triangle, a rectangle, a square and a circle?", scene: <HouseScene /> },
  ],
  mission,
  misconception: {
    myth: "A square turned onto its point is not a square any more.",
    truth: "Turning a shape does not change it. It still has 4 equal sides and 4 corners, so it is still a square.",
  },
  story,
  like: {
    headline: "Counting sides and corners is like walking round a fence.",
    everyday: {
      label: "Walk along, turn at each corner",
      art: (
        <Panel label="A girl walks round a rectangular fence, turning at each of four corners">
          <rect x={40} y={30} width={160} height={90} fill="#BBF7D0" stroke="#92400E" strokeWidth={5} strokeDasharray="10 4" />
          {[
            [40, 30],
            [200, 30],
            [200, 120],
            [40, 120],
          ].map(([x, y], i) => (
            <Emo key={i} x={x} y={y} size={16}>
              ↪️
            </Emo>
          ))}
          <Kid x={120} y={140} s={0.45} shirt="#0D9488" bow />
        </Panel>
      ),
    },
    concept: {
      label: "Rectangle: 4 sides, 4 corners",
      art: (
        <Panel label="A rectangle with four numbered corners">
          <rect x={40} y={30} width={160} height={90} fill="#CCFBF1" stroke={C} strokeWidth={6} />
          {[
            [40, 30],
            [200, 30],
            [200, 120],
            [40, 120],
          ].map(([x, y], i) => (
            <Badge key={i} x={x} y={y} n={i + 1} r={11} color="#F59E0B" />
          ))}
        </Panel>
      ),
    },
    pairs: [
      ["Each straight part of the fence", "A side"],
      ["Each place you have to turn", "A corner"],
      ["Turns until you're back where you started", "How many corners the shape has"],
      ["A round fence with no sharp turns", "A circle: no corners"],
    ],
    limits: "Real fences are thick and wobbly, but maths shapes have perfectly thin, perfectly straight sides. And a real round path is lots of tiny turns, while a true circle bends smoothly the whole way.",
  },
};
