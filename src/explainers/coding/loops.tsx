"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Explainer, Mission, MissionApi } from "../types";
import { Art, INK, Kid, LabelBox, MissionButton, Robot, Stage, STAGE_INK, STAGE_MUTED, Token, useTicker } from "./_art";

const COLOR = "#16A34A";
const TRAIL = "#22C55E";

/* ------------------------------------------------------------------ */
/* Geometry                                                            */
/* ------------------------------------------------------------------ */

type Pt = { x: number; y: number };

/** Corners visited when you repeat (forward `side`, turn right `turn`) n times from `o`, heading up. */
function walk(n: number, side: number, turn: number, o: Pt = { x: 0, y: 0 }): Pt[] {
  const pts: Pt[] = [o];
  let h = 0;
  let p = o;
  for (let i = 0; i < n; i++) {
    const r = (h * Math.PI) / 180;
    p = { x: p.x + side * Math.sin(r), y: p.y - side * Math.cos(r) };
    pts.push(p);
    h += turn;
  }
  return pts;
}

/** framer-motion keyframes: move to each corner, then turn on the spot. */
function keyframes(pts: Pt[], turn: number) {
  const x: number[] = [];
  const y: number[] = [];
  const rotate: number[] = [];
  pts.forEach((p, i) => {
    if (i === 0) {
      x.push(p.x);
      y.push(p.y);
      rotate.push(0);
      return;
    }
    x.push(p.x, p.x);
    y.push(p.y, p.y);
    rotate.push(turn * (i - 1), turn * i);
  });
  return { x, y, rotate };
}

const toPath = (pts: Pt[]) => pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

/** Bolt seen from above, nose pointing up at rotate 0. Centred on (0,0). */
function TopBot({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <rect x={-17} y={-10} width={6} height={20} rx={2} fill="#374151" stroke={INK} strokeWidth={1.5} />
      <rect x={11} y={-10} width={6} height={20} rx={2} fill="#374151" stroke={INK} strokeWidth={1.5} />
      <circle r={13} fill="#3B82F6" stroke={INK} strokeWidth={2.5} />
      <path d="M0 -21 L7 -11 H-7 Z" fill="#F59E0B" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <circle cx={-5} cy={-3} r={2.6} fill="#67E8F9" stroke={INK} strokeWidth={1} />
      <circle cx={5} cy={-3} r={2.6} fill="#67E8F9" stroke={INK} strokeWidth={1} />
      <path d="M-4 5 q4 3 8 0" fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
}

function Grid({ w = 240, h = 240 }: { w?: number; h?: number }) {
  const lines = [];
  for (let x = 0; x <= w; x += 30) lines.push(<line key={`x${x}`} x1={x} y1={0} x2={x} y2={h} />);
  for (let y = 0; y <= h; y += 30) lines.push(<line key={`y${y}`} x1={0} y1={y} x2={w} y2={y} />);
  return (
    <g stroke="rgb(var(--line))" strokeWidth={1}>
      {lines}
    </g>
  );
}

/** A code card drawn inside the stage. `hl` = highlighted line indexes. */
function CodeCard({ x, y, w = 140, lines, hl = [], tint }: { x: number; y: number; w?: number; lines: string[]; hl?: number[]; tint?: (i: number) => string | undefined }) {
  const lh = 17;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={lines.length * lh + 14} rx={10} fill="#111827" stroke={INK} strokeWidth={2} />
      {lines.map((l, i) => (
        <g key={i}>
          {(hl.includes(i) || tint?.(i)) && <rect x={4} y={6 + i * lh} width={w - 8} height={lh - 1} rx={4} fill={tint?.(i) ?? "#166534"} opacity={tint?.(i) ? 0.55 : 1} />}
          <text x={10} y={19 + i * lh} fontFamily="ui-monospace, Menlo, monospace" fontSize={12} fontWeight={700} fill="#F9FAFB" xmlSpace="preserve">
            {l}
          </text>
        </g>
      ))}
    </g>
  );
}

const SQ = walk(4, 120, 90, { x: 60, y: 200 });
const SQ_KF = keyframes(SQ, 90);
const HEX = walk(6, 70, 60, { x: 60, y: 165 });
const HEX_KF = keyframes(HEX, 60);
const LONG = ["forward", "turn right", "forward", "turn right", "forward", "turn right", "forward", "turn right"];

const watch: Explainer["watch"] = [
  {
    title: "Bolt follows instructions",
    say: "Bolt the robot does exactly what we tell him. Forward means walk one side. Turn right means spin a quarter turn.",
    scene: (
      <Stage label="Bolt the robot on a grid walks forward and turns right">
        <Grid />
        <motion.path d={toPath(SQ.slice(0, 2))} stroke={TRAIL} strokeWidth={6} strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 1 }} />
        <motion.g initial={{ x: 60, y: 200, rotate: 0 }} animate={{ x: [60, 60, 60], y: [200, 80, 80], rotate: [0, 0, 90] }} transition={{ delay: 0.4, duration: 1.6, times: [0, 0.65, 1] }}>
          <TopBot />
        </motion.g>
        <CodeCard x={254} y={80} lines={["forward", "turn right"]} />
      </Stage>
    ),
  },
  {
    title: "A square, the long way",
    say: "To walk a square, Bolt needs forward and turn right four times. That is eight lines to write!",
    scene: (
      <Stage label="Bolt walks all four sides of a square while eight instructions are listed">
        <Grid />
        <motion.path d={toPath(SQ)} stroke={TRAIL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "linear" }} />
        <motion.g initial={{ x: 60, y: 200 }} animate={SQ_KF} transition={{ duration: 4, ease: "linear" }}>
          <TopBot />
        </motion.g>
        <CodeCard x={254} y={42} lines={LONG} />
      </Stage>
    ),
  },
  {
    title: "Spot the pattern",
    say: "Look! The same two lines happen again and again. When something repeats, a loop can do it for us.",
    scene: (
      <Stage label="The eight lines are grouped into four identical coloured pairs">
        <Grid />
        <path d={toPath(SQ)} stroke={TRAIL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <g transform="translate(60 200)">
          <TopBot />
        </g>
        <CodeCard x={254} y={42} lines={LONG} tint={(i) => ["#2563EB", "#DB2777", "#D97706", "#7C3AED"][Math.floor(i / 2)]} />
        {[0, 1, 2, 3].map((k) => (
          <motion.text key={k} x={392} y={66 + k * 34} textAnchor="end" fontSize={11} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + k * 0.3 }}>
            {k + 1}
          </motion.text>
        ))}
      </Stage>
    ),
  },
  {
    title: "Use a loop",
    say: "Now we write the two lines once and say: repeat 4 times. Bolt walks the same square with a much shorter program.",
    scene: (
      <Stage label="Code says repeat 4: forward, turn right. Bolt walks the square and a lap counter counts to 4">
        <Grid />
        <motion.path d={toPath(SQ)} stroke={TRAIL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 1 }} />
        <motion.g initial={{ x: 60, y: 200 }} animate={SQ_KF} transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 1 }}>
          <TopBot />
        </motion.g>
        <CodeCard x={254} y={60} lines={["repeat 4:", "    forward", "    turn right"]} hl={[0]} />
        <text x={324} y={150} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          lap
        </text>
        {[1, 2, 3, 4].map((n) => (
          <motion.text
            key={n}
            x={324}
            y={186}
            textAnchor="middle"
            fontSize={34}
            fontWeight={900}
            fill={COLOR}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1, delay: (n - 1) * 1, repeat: Infinity, repeatDelay: 4, times: [0, 0.05, 0.95, 1] }}
          >
            {n}
          </motion.text>
        ))}
      </Stage>
    ),
  },
  {
    title: "Change one number",
    say: "Change it to repeat 6 and turn a smaller amount, and Bolt draws a hexagon. One small change, a whole new shape!",
    scene: (
      <Stage label="Code says repeat 6: forward, turn right 60. Bolt draws a hexagon">
        <Grid />
        <motion.path d={toPath(HEX)} stroke="#0EA5E9" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4.5, ease: "linear" }} />
        <motion.g initial={{ x: 60, y: 165 }} animate={HEX_KF} transition={{ duration: 4.5, ease: "linear" }}>
          <TopBot />
        </motion.g>
        <CodeCard x={248} y={70} w={150} lines={["repeat 6:", "    forward", "    turn right 60"]} hl={[0]} />
        <text x={323} y={160} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          6 × 60° = 360°
        </text>
        <text x={323} y={176} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          one full spin = home!
        </text>
      </Stage>
    ),
  },
  {
    title: "Loops in real code",
    say: "In Python we write for i in range 4. The box called i counts the laps for us: 0, 1, 2, 3.",
    scene: (
      <Stage label="Python for loop with a variable i that holds 0, 1, 2, then 3, and output lines appearing">
        <CodeCard x={14} y={40} w={180} lines={["for i in range(4):", "    print(i)"]} />
        <LabelBox x={104} y={140} w={100} h={64} name="i" color="#F97316">
          {[0, 1, 2, 3].map((n) => (
            <motion.g
              key={n}
              initial={{ x: 104, y: 132, opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", times: [0, n / 5, n / 5 + 0.02, (n + 1) / 5 - 0.02, (n + 1) / 5, 1] }}
            >
              <Token text={String(n)} />
            </motion.g>
          ))}
        </LabelBox>
        <g transform="translate(240 40)">
          <rect width={140} height={160} rx={10} fill="#111827" stroke={INK} strokeWidth={2} />
          <text x={12} y={20} fontFamily="ui-monospace, Menlo, monospace" fontSize={11} fill="#9CA3AF">
            output
          </text>
          {[0, 1, 2, 3].map((n) => (
            <motion.text
              key={n}
              x={16}
              y={50 + n * 28}
              fontFamily="ui-monospace, Menlo, monospace"
              fontSize={20}
              fontWeight={800}
              fill="#4ADE80"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", times: [0, n / 5 + 0.1, n / 5 + 0.12, 0.94, 1] }}
            >
              {n}
            </motion.text>
          ))}
        </g>
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

/** Bolt runs `repeat n: forward, turn right` one action at a time after Run is pressed. */
function StepShape({ done, complete, pts, turn, code, color }: MissionApi & { pts: Pt[]; turn: number; code: string[]; color: string }) {
  const n = pts.length - 1;
  const total = n * 2;
  const [t, setT] = useState(-1); // actions done; -1 = not started
  const running = t >= 0 && t < total;
  useTicker(running, 300, () => setT((x) => x + 1));
  const corners = t < 0 ? 0 : Math.ceil(t / 2);
  const pos = pts[Math.min(corners, n)];
  const heading = t < 0 ? 0 : Math.floor(t / 2) * turn;
  const lap = t < 0 ? 0 : Math.min(n, Math.floor(t / 2) + 1);
  return (
    <div>
      <Stage label={t < 0 ? "Bolt waits at the start of the grid" : `Bolt has drawn ${Math.max(0, corners)} sides`}>
        <Grid />
        {corners > 0 && <path d={toPath(pts.slice(0, corners + 1))} stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" />}
        <motion.g initial={false} animate={{ x: pos.x, y: pos.y, rotate: heading }} transition={{ duration: 0.34, ease: "easeInOut" }}>
          <TopBot />
        </motion.g>
        <CodeCard x={252} y={52} w={146} lines={code} hl={running ? [t % 2 === 0 ? 1 : 2] : []} />
        <text x={325} y={150} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          lap
        </text>
        <text x={325} y={188} textAnchor="middle" fontSize={34} fontWeight={900} fill={COLOR}>
          {lap}
        </text>
      </Stage>
      <MissionButton color={COLOR} disabled={complete || t >= 0} onClick={() => {
          setT(0);
          done();
        }}>
        <Play className="h-5 w-5" /> Run
      </MissionButton>
    </div>
  );
}

/** Runs `for i in range(4): print(i)`: the box i shows each value and the output fills up. */
function StepRange({ done, complete }: MissionApi) {
  const [k, setK] = useState(-1); // values printed so far - 1
  const running = k >= 0 && k < 3;
  useTicker(running, 600, () => setK((x) => x + 1));
  return (
    <div>
      <Stage label={k < 0 ? "A for loop that has not run yet" : `The loop has printed ${Array.from({ length: k + 1 }, (_, n) => n).join(", ")}`}>
        <CodeCard x={14} y={40} w={180} lines={["for i in range(4):", "    print(i)"]} hl={k >= 0 ? [1] : []} />
        <LabelBox x={104} y={140} w={100} h={64} name="i" color="#F97316">
          {k >= 0 && (
            <motion.g key={k} initial={{ x: 104, y: 100, opacity: 0 }} animate={{ x: 104, y: 132, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 16 }}>
              <Token text={String(k)} />
            </motion.g>
          )}
        </LabelBox>
        <g transform="translate(240 40)">
          <rect width={140} height={160} rx={10} fill="#111827" stroke={INK} strokeWidth={2} />
          <text x={12} y={20} fontFamily="ui-monospace, Menlo, monospace" fontSize={11} fill="#9CA3AF">
            output
          </text>
          {Array.from({ length: k + 1 }, (_, n) => (
            <motion.text key={n} x={16} y={50 + n * 28} fontFamily="ui-monospace, Menlo, monospace" fontSize={20} fontWeight={800} fill="#4ADE80" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {n}
            </motion.text>
          ))}
        </g>
      </Stage>
      <MissionButton color={COLOR} disabled={complete || k >= 0} onClick={() => {
          setK(0);
          done();
        }}>
        <Play className="h-5 w-5" /> Run
      </MissionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Make Bolt draw shapes with a loop, then run a real Python loop.",
  steps: [
    {
      task: "Press Run and count Bolt's sides.",
      settle: 3000,
      predict: { question: "The loop says repeat 4. How many sides will Bolt draw?", options: ["3", "4", "5"], answer: 1, trap: 2 },
      scene: (api) => <StepShape {...api} pts={SQ} turn={90} code={["repeat 4:", "    forward", "    turn right"]} color={TRAIL} />,
      hint: "Tap the green Run button and watch the lap number.",
      explain: "A **loop** repeats the lines inside it. Each time round is called a **lap** (or *iteration*). repeat 4 means exactly 4 laps, so Bolt draws exactly 4 sides — not one more, not one less.",
    },
    {
      task: "Run the loop with repeat 6.",
      settle: 3000,
      predict: { question: "Now it says repeat 6 and turn 60°. What will Bolt draw?", options: ["A square again", "A shape with 6 sides", "Just one long line"], answer: 1 },
      scene: (api) => <StepShape {...api} pts={HEX} turn={60} code={["repeat 6:", "    forward", "    turn right 60"]} color="#0EA5E9" />,
      hint: "The 4 is already changed to 6 for you. Just tap Run.",
      explain: "Changing **one number** gives a whole new shape: 6 laps make a **hexagon**. Without a loop you would have to write 12 lines; with it, just 3.",
    },
    {
      task: "Run this Python loop.",
      settle: 3000,
      predict: { question: "What will for i in range(4) print?", options: ["1 2 3 4", "0 1 2 3", "0 1 2 3 4"], answer: 1, trap: 0 },
      scene: (api) => <StepRange {...api} />,
      hint: "Tap Run and watch the box called i.",
      explain: "range(4) gives 4 numbers, but Python **starts counting at 0**: 0, 1, 2, 3. The **loop variable** i holds the lap number, so the loop still runs exactly 4 times.",
    },
  ],
  takeaway: "A loop repeats the same lines a set number of times — range(4) runs 4 laps, counting 0, 1, 2, 3.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function ScrollNote({ x, y, lines, w = 70 }: { x: number; y: number; lines: string[]; w?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={lines.length * 9 + 8} rx={4} fill="#FFFBEB" stroke={INK} strokeWidth={1.5} />
      {lines.map((l, i) => (
        <text key={i} x={5} y={12 + i * 9} fontSize={7.5} fontWeight={700} fontFamily="ui-monospace, Menlo, monospace" fill={INK} xmlSpace="preserve">
          {l}
        </text>
      ))}
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Coach Zara points at a square garden path">
        <rect x={100} y={40} width={80} height={80} fill="#BBF7D0" stroke="#16A34A" strokeWidth={6} />
        <text x={140} y={86} textAnchor="middle" fontSize={22}>
          🌷
        </text>
        <g transform="translate(50 132)">
          <Kid h={90} shirt="#8B5CF6" hair="#111827" />
        </g>
      </Art>
    ),
    speech: "Bolt, walk round the garden!",
    caption: "Coach Zara wants Bolt to walk all the way round the square garden.",
  },
  {
    art: (
      <Art label="Bolt holds a very long list of instructions and looks tired">
        <g transform="translate(55 106)">
          <Robot mood="tired" />
        </g>
        <ScrollNote x={100} y={18} lines={["forward", "turn right", "forward", "turn right", "forward", "turn right", "forward", "turn right", "forward…?"]} />
      </Art>
    ),
    speech: "So… many… lines…",
    caption: "Writing every step makes a long, boring list — and it's easy to make a mistake.",
  },
  {
    art: (
      <Art label="Mia writes a short card that says repeat 4">
        <g transform="translate(45 132)">
          <Kid h={86} bow />
        </g>
        <ScrollNote x={90} y={44} w={92} lines={["repeat 4:", "  forward", "  turn right"]} />
      </Art>
    ),
    speech: "Just repeat it 4 times!",
    caption: "Mia spots the pattern and writes it once, inside a loop.",
  },
  {
    art: (
      <Art label="Bolt zooms happily round the garden">
        <rect x={60} y={30} width={90} height={90} fill="#BBF7D0" stroke="#16A34A" strokeWidth={6} />
        <motion.g animate={{ x: [60, 150, 150, 60, 60], y: [120, 120, 30, 30, 120] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
          <g transform="scale(0.55) translate(0 -20)">
            <Robot mood="happy" />
          </g>
        </motion.g>
      </Art>
    ),
    speech: "Done in one card!",
    caption: "Bolt repeats the same two steps four times and gets all the way round.",
  },
];

const like: Explainer["like"] = {
  headline: "A loop is like the coach saying “run 4 laps”.",
  everyday: {
    label: "Running laps of a track",
    art: (
      <Art label="A running track with a lap board showing lap 2 of 4" vb="0 0 200 130">
        <rect x={30} y={25} width={140} height={80} rx={40} fill="none" stroke="#EF4444" strokeWidth={14} />
        <rect x={30} y={25} width={140} height={80} rx={40} fill="none" stroke="#fff" strokeWidth={1.5} strokeDasharray="6 6" />
        <rect x={74} y={50} width={52} height={30} rx={5} fill="#1F2937" />
        <text x={100} y={70} textAnchor="middle" fontSize={13} fontWeight={900} fill="#FDE68A">
          2 / 4
        </text>
        <motion.circle r={7} fill="#3B82F6" stroke={INK} strokeWidth={2} animate={{ cx: [70, 130, 165, 130, 70, 35, 70], cy: [25, 25, 65, 105, 105, 65, 25] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
      </Art>
    ),
  },
  concept: {
    label: "A loop in code",
    art: (
      <Art label="Code: for lap in range 4, run one lap" vb="0 0 200 130">
        <rect x={15} y={30} width={170} height={70} rx={10} fill="#111827" />
        <text x={28} y={58} fontFamily="ui-monospace, Menlo, monospace" fontSize={13} fontWeight={700} fill="#F9FAFB">
          for lap in range(4):
        </text>
        <text x={48} y={82} fontFamily="ui-monospace, Menlo, monospace" fontSize={13} fontWeight={700} fill="#86EFAC">
          run_one_lap()
        </text>
      </Art>
    ),
  },
  pairs: [
    ["“Run 4 laps”", "repeat 4 / range(4)"],
    ["One lap of the track", "The loop body (the indented lines)"],
    ["The lap counter board", "The loop variable, like lap or i"],
    ["Stop after lap 4", "The loop ends and the next line runs"],
  ],
  limits:
    "A runner gets tired and might lose count; a computer never does. Some loops (while loops) don't know the number of laps in advance — they keep going until something changes, and if it never does, the loop runs forever.",
};

export const loopsExplainer: Explainer = {
  id: "coding-loops",
  title: "Loops repeat steps",
  tagline: "Write it once, repeat it many times — watch Bolt draw shapes.",
  area: "Coding",
  ages: "10–14",
  lessons: ["python/control-flow/loops", "javascript/loops-functions/loops"],
  color: COLOR,
  icon: "🔁",
  watch,
  misconception: { myth: "A loop runs one time more (or one time less) than the number you give it.", truth: "repeat 4 or range(4) runs exactly 4 times. Python just counts those laps from 0: 0, 1, 2, 3." },
  mission,
  story,
  like,
};
