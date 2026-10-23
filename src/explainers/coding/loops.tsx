"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Play, RotateCcw } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { Stepper } from "@/components/widgets/_shared";
import { Art, INK, Kid, LabelBox, Robot, Stage, STAGE_INK, STAGE_MUTED, Token } from "./_art";

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
/* Try: program Bolt with a loop                                       */
/* ------------------------------------------------------------------ */

const TURNS = [45, 60, 72, 90, 120, 144] as const;
const SHAPES: { name: string; n: number; turn: number; emoji: string }[] = [
  { name: "Square", n: 4, turn: 90, emoji: "🟩" },
  { name: "Triangle", n: 3, turn: 120, emoji: "🔺" },
  { name: "Pentagon", n: 5, turn: 72, emoji: "⬟" },
  { name: "Hexagon", n: 6, turn: 60, emoji: "⬢" },
  { name: "Octagon", n: 8, turn: 45, emoji: "🛑" },
  { name: "Star", n: 5, turn: 144, emoji: "⭐" },
];

function LoopTry() {
  const [reps, setReps] = useState(2);
  const [steps, setSteps] = useState(2);
  const [turn, setTurn] = useState<number>(90);
  /** Number of actions done (each lap = forward + turn). -1 = idle. */
  const [t, setT] = useState(-1);
  const [made, setMade] = useState<string[]>([]);

  const side = steps * 40;
  const pts = useMemo(() => walk(reps, side, turn), [reps, side, turn]);
  const total = reps * 2;
  const running = t >= 0 && t < total;
  const finished = t >= total;

  // viewBox that fits the whole planned path
  const vb = useMemo(() => {
    const xs = pts.map((p) => p.x);
    const ys = pts.map((p) => p.y);
    const pad = 34;
    let minX = Math.min(...xs) - pad;
    let minY = Math.min(...ys) - pad;
    let w = Math.max(...xs) - Math.min(...xs) + pad * 2;
    let h = Math.max(...ys) - Math.min(...ys) + pad * 2;
    const size = Math.max(w, h, 200);
    minX -= (size - w) / 2;
    minY -= (size - h) / 2;
    w = h = size;
    return { minX, minY, size };
  }, [pts]);

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setT((x) => x + 1), 420);
    return () => clearTimeout(id);
  }, [running, t]);

  const home = Math.hypot(pts[pts.length - 1].x, pts[pts.length - 1].y) < 0.5;
  const shape = SHAPES.find((s) => s.n === reps && s.turn === turn);

  useEffect(() => {
    if (t !== total) return;
    if (home) {
      sfx("correct");
      if (shape && !made.includes(shape.name)) {
        setMade((m) => [...m, shape.name]);
        burst();
      }
    } else sfx("wrong");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  // where Bolt is right now
  const lap = Math.max(0, Math.min(reps - 1, Math.floor(Math.max(t, 0) / 2)));
  const corners = t < 0 ? 0 : Math.ceil(t / 2);
  const pos = pts[Math.min(corners, pts.length - 1)];
  const heading = t < 0 ? 0 : Math.floor(t / 2) * turn;
  const trail = pts.slice(0, corners + 1);
  const line = !running ? -1 : t % 2 === 0 ? 1 : 2;

  const change = (fn: () => void) => {
    fn();
    setT(-1);
  };

  return (
    <div className="select-none">
      <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        <div className="overflow-hidden rounded-2xl border-2 border-line bg-surface-2">
          <svg viewBox={`${vb.minX} ${vb.minY} ${vb.size} ${vb.size}`} role="img" aria-label={`Bolt's drawing area. Bolt has drawn ${Math.max(0, trail.length - 1)} sides.`} className="mx-auto h-auto w-full" style={{ maxHeight: 320 }}>
            {/* home pad */}
            <circle cx={0} cy={0} r={18} fill="rgb(var(--warn) / 0.25)" stroke="rgb(var(--warn))" strokeWidth={2} strokeDasharray="4 3" />
            <text x={0} y={34} textAnchor="middle" fontSize={11} fontWeight={800} fill={STAGE_MUTED}>
              home
            </text>
            {/* ghost of the plan */}
            <path d={toPath(pts)} stroke="rgb(var(--line))" strokeWidth={4} strokeDasharray="6 6" fill="none" strokeLinejoin="round" />
            {trail.length > 1 && <path d={toPath(trail)} stroke={TRAIL} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" fill="none" />}
            <motion.g initial={false} animate={{ x: pos.x, y: pos.y, rotate: heading }} transition={{ duration: 0.38, ease: "easeInOut" }}>
              <TopBot s={1.1} />
            </motion.g>
          </svg>
        </div>

        <div className="flex flex-col gap-3">
          {/* the program */}
          <div className="rounded-2xl bg-[#111827] p-3 font-mono text-[15px] font-bold text-gray-100" aria-live="polite">
            <p className={clsx("rounded px-1", running && "bg-green-800")}>
              repeat <span className="text-green-300">{reps}</span>:
            </p>
            <p className={clsx("rounded px-1 pl-6 transition-colors", line === 1 && "bg-amber-600")}>
              forward(<span className="text-sky-300">{steps}</span>)
            </p>
            <p className={clsx("rounded px-1 pl-6 transition-colors", line === 2 && "bg-amber-600")}>
              turn_right(<span className="text-pink-300">{turn}</span>)
            </p>
            <p className="mt-2 text-xs text-gray-400">{t >= 0 ? `lap ${lap + 1} of ${reps}` : "press Run"}</p>
          </div>

          <Stepper label="Repeat" value={reps} min={1} max={8} onChange={(v) => change(() => setReps(v))} />
          <Stepper label="Steps" value={steps} min={1} max={3} onChange={(v) => change(() => setSteps(v))} />
          <div>
            <p className="mb-1 text-sm font-medium text-muted">Turn right by</p>
            <div className="grid grid-cols-6 gap-1">
              {TURNS.map((d) => (
                <button key={d} type="button" aria-pressed={turn === d} onClick={() => change(() => setTurn(d))} className={clsx("h-11 rounded-xl border-2 font-mono text-sm font-black", turn === d ? "border-transparent text-white" : "border-line bg-surface text-ink")} style={turn === d ? { background: COLOR } : undefined}>
                  {d}°
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button type="button" className="btn-good min-h-[48px] flex-1" onClick={() => setT(0)} disabled={running}>
              <Play className="h-4 w-4" /> Run
            </button>
            <button type="button" className="btn-ghost min-h-[48px]" onClick={() => setT(-1)} aria-label="Reset Bolt">
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className={clsx("mt-4 min-h-[3rem] rounded-2xl px-4 py-3 font-bold", finished ? (home ? "bg-good/10 text-good" : "bg-warn/15 text-ink") : "bg-surface-2 text-muted")} aria-live="polite">
        {!finished && !running && "Set the numbers, then press Run. Can Bolt get back home?"}
        {running && `Bolt is running lap ${lap + 1}… the same two lines, again and again.`}
        {finished && home && `Back home! ${reps} laps × ${turn}° = ${reps * turn}° of turning${reps * turn > 360 ? ` — that's ${reps * turn / 360} full spins` : " — one full spin"}.${shape ? ` You drew a ${shape.name.toLowerCase()}!` : ""}`}
        {finished && !home && `Not home yet. Bolt turned ${reps} × ${turn}° = ${reps * turn}° in total. To come home, the turns must add up to 360° (or 720°…). Try more laps!`}
      </div>

      <div className="mt-3 flex flex-wrap gap-2" aria-label="Shapes to discover">
        {SHAPES.map((s) => {
          const got = made.includes(s.name);
          return (
            <span key={s.name} className={clsx("flex items-center gap-1 rounded-xl border-2 px-2.5 py-1 text-sm font-extrabold", got ? "border-good/50 bg-good/10 text-good" : "border-line text-muted")}>
              {got ? <Check className="h-4 w-4" /> : <span aria-hidden>{s.emoji}</span>} {s.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

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
  ages: "7–16",
  lessons: ["python/control-flow/loops", "javascript/loops-functions/loops"],
  color: COLOR,
  icon: "🔁",
  watch,
  try: LoopTry,
  story,
  like,
};
