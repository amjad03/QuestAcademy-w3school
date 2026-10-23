"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { fmt, useSvgDrag } from "@/components/widgets/_shared";
import { DARK, Feedback, INK, Kid, MUTED, Pad, Svg, TryShell } from "./_kit";

const C = "#10B981";
const SA = "#f97316"; // square on a
const SB = "#3b82f6"; // square on b
const SC = "#10B981"; // square on c
const TRI = ["#fbbf24", "#f59e0b", "#fcd34d", "#eab308"];

type P = [number, number];
const add = (p: P, q: P): P => [p[0] + q[0], p[1] + q[1]];
const sub = (p: P, q: P): P => [p[0] - q[0], p[1] - q[1]];
const mul = (p: P, k: number): P => [p[0] * k, p[1] * k];
const pts = (...ps: P[]) => ps.map((p) => `${fmt(p[0], 2)},${fmt(p[1], 2)}`).join(" ");
const dPath = (...ps: P[]) => `M ${ps.map((p) => `${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(" L ")} Z`;

/** Outward normal (same length as the side) for side p→q, pointing away from `away`. */
function outward(p: P, q: P, away: P): P {
  const v = sub(q, p);
  let n: P = [v[1], -v[0]];
  const m = sub(away, p);
  if (n[0] * m[0] + n[1] * m[1] > 0) n = [-n[0], -n[1]];
  return n;
}

function GridIn({ p, q, n, k, color }: { p: P; q: P; n: P; k: number; color: string }) {
  const lines = [];
  for (let i = 1; i < k; i++) {
    const a = add(p, mul(sub(q, p), i / k));
    const b = add(p, mul(n, i / k));
    lines.push(<line key={`u${i}`} x1={a[0]} y1={a[1]} x2={a[0] + n[0]} y2={a[1] + n[1]} stroke={color} strokeWidth="1" opacity="0.7" />);
    lines.push(<line key={`v${i}`} x1={b[0]} y1={b[1]} x2={b[0] + q[0] - p[0]} y2={b[1] + q[1] - p[1]} stroke={color} strokeWidth="1" opacity="0.7" />);
  }
  return <>{lines}</>;
}

/* ---------- 3-4-5 triangle geometry for the scenes (unit 20) ---------- */

const R: P = [130, 150];
const TA: P = [130, 90]; // top (vertical leg a = 3)
const TB: P = [210, 150]; // right (horizontal leg b = 4)
const nA = outward(R, TA, TB);
const nB = outward(R, TB, TA);
const nC = outward(TA, TB, R);

function RightMark({ at, s = 12, color = INK }: { at: P; s?: number; color?: string }) {
  return <path d={`M ${at[0] + s} ${at[1]} L ${at[0] + s} ${at[1] - s} L ${at[0]} ${at[1] - s}`} fill="none" stroke={color} strokeWidth="2" />;
}

function Triangle({ labels = true }: { labels?: boolean }) {
  return (
    <g>
      <polygon points={pts(R, TA, TB)} fill="#fde68a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <RightMark at={R} />
      {labels && (
        <>
          <text x={R[0] - 10} y={(R[1] + TA[1]) / 2 + 5} textAnchor="end" fontSize="18" fontWeight="900" fill={SA} fontStyle="italic">
            a
          </text>
          <text x={(R[0] + TB[0]) / 2} y={R[1] + 22} textAnchor="middle" fontSize="18" fontWeight="900" fill={SB} fontStyle="italic">
            b
          </text>
          <text x={(TA[0] + TB[0]) / 2 + 8} y={(TA[1] + TB[1]) / 2 - 6} fontSize="18" fontWeight="900" fill={SC} fontStyle="italic">
            c
          </text>
        </>
      )}
    </g>
  );
}

function SceneTriangle() {
  return (
    <Svg label="A right-angled triangle with legs a equals 3 and b equals 4 and hypotenuse c equals 5">
      <g transform="translate(-100 -70) scale(1.5)">
        <Triangle />
        <text x={R[0] - 26} y={(R[1] + TA[1]) / 2 + 5} textAnchor="end" fontSize="14" fontWeight="800" fill={MUTED}>
          3
        </text>
        <text x={(R[0] + TB[0]) / 2} y={R[1] + 40} textAnchor="middle" fontSize="14" fontWeight="800" fill={MUTED}>
          4
        </text>
        <text x={(TA[0] + TB[0]) / 2 + 24} y={(TA[1] + TB[1]) / 2 - 6} fontSize="14" fontWeight="800" fill={MUTED}>
          5
        </text>
      </g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x="270" y="40" width="120" height="56" rx="12" fill={SC} opacity="0.15" />
        <text x="330" y="64" textAnchor="middle" fontSize="15" fontWeight="900" fill={SC}>
          c = hypotenuse
        </text>
        <text x="330" y="84" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>
          longest side
        </text>
        <rect x="270" y="150" width="120" height="56" rx="12" fill="#fbbf24" opacity="0.2" />
        <text x="330" y="174" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK}>
          ∟ right angle
        </text>
        <text x="330" y="194" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK}>
          a square corner (90°)
        </text>
      </motion.g>
    </Svg>
  );
}

function GrowSquare({ p, q, n, color, k, delay, label }: { p: P; q: P; n: P; color: string; k: number; delay: number; label: string }) {
  const c = add(add(p, mul(sub(q, p), 0.5)), mul(n, 0.5));
  return (
    <g>
      <motion.path initial={{ d: dPath(p, q, q, p) }} animate={{ d: dPath(p, q, add(q, n), add(p, n)) }} transition={{ delay, duration: 0.8, ease: "easeOut" }} fill={color} fillOpacity="0.28" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.8 }}>
        <GridIn p={p} q={q} n={n} k={k} color={color} />
        <text x={c[0]} y={c[1] + 7} textAnchor="middle" fontSize="20" fontWeight="900" fill={INK} stroke="rgb(var(--surface))" strokeWidth="4" paintOrder="stroke">
          {label}
        </text>
      </motion.g>
    </g>
  );
}

function SceneSquares() {
  return (
    <Svg label="Squares on each side of the triangle: 9 tiles on a, 16 tiles on b and 25 tiles on c">
      <g transform="translate(40 0)">
        <GrowSquare p={R} q={TA} n={nA} color={SA} k={3} delay={0.2} label="9" />
        <GrowSquare p={R} q={TB} n={nB} color={SB} k={4} delay={0.9} label="16" />
        <GrowSquare p={TA} q={TB} n={nC} color={SC} k={5} delay={1.6} label="25" />
        <Triangle labels={false} />
      </g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
        <text x="345" y="120" textAnchor="middle" fontSize="16" fontWeight="900" fill={SA}>
          a² = 9
        </text>
        <text x="345" y="145" textAnchor="middle" fontSize="16" fontWeight="900" fill={SB}>
          b² = 16
        </text>
        <text x="345" y="170" textAnchor="middle" fontSize="16" fontWeight="900" fill={SC}>
          c² = 25
        </text>
      </motion.g>
    </Svg>
  );
}

function SceneTiles() {
  // a² tiles (3×3) and b² tiles (4×4) fly into a 5×5 square: b² fills a 4×4 corner, a² fills the L around it.
  const U = 20;
  const gx = 290;
  const gy = 148;
  const tiles: { sx: number; sy: number; tx: number; ty: number; color: string; d: number }[] = [];
  const ox = 40; // scene offset
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) tiles.push({ sx: ox + 130 + c * U, sy: 150 + r * U, tx: gx + c * U, ty: gy + r * U, color: SB, d: 0.4 + (r * 4 + c) * 0.05 });
  const L: [number, number][] = [];
  for (let c = 0; c < 5; c++) L.push([4, c]);
  for (let r = 0; r < 4; r++) L.push([r, 4]);
  let i = 0;
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++) {
      const [tr, tc] = L[i];
      tiles.push({ sx: ox + 70 + c * U, sy: 90 + r * U, tx: gx + tc * U, ty: gy + tr * U, color: SA, d: 1.5 + i * 0.08 });
      i++;
    }
  return (
    <Svg label="The 16 blue tiles and 9 orange tiles slide over and fill a 5 by 5 square of 25 tiles exactly">
      <g transform="translate(40 0)" opacity="0.5">
        <path d={dPath(R, TA, add(TA, nA), add(R, nA))} fill="none" stroke={SA} strokeWidth="2" strokeDasharray="4 3" />
        <path d={dPath(R, TB, add(TB, nB), add(R, nB))} fill="none" stroke={SB} strokeWidth="2" strokeDasharray="4 3" />
        <path d={dPath(TA, TB, add(TB, nC), add(TA, nC))} fill={SC} fillOpacity="0.2" stroke={SC} strokeWidth="2.5" />
        <Triangle labels={false} />
      </g>
      <rect x={gx} y={gy} width={5 * U} height={5 * U} fill="none" stroke={SC} strokeWidth="3" />
      {tiles.map((t, k) => (
        <motion.rect key={k} width={U - 2} height={U - 2} rx="3" fill={t.color} stroke="white" strokeWidth="1" initial={{ x: t.sx + 1, y: t.sy + 1 }} animate={{ x: t.tx + 1, y: t.ty + 1 }} transition={{ delay: t.d, duration: 0.7, ease: "easeInOut" }} />
      ))}
      <motion.text x={328} y={34} textAnchor="middle" fontSize="20" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
        <tspan fill={SA}>9</tspan> + <tspan fill={SB}>16</tspan> = <tspan fill={SC}>25</tspan>
      </motion.text>
      <motion.text x={336} y={60} textAnchor="middle" fontSize="16" fontWeight="900" fill={INK} fontStyle="italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
        a² + b² = c²
      </motion.text>
    </Svg>
  );
}

/* ---------- rearrangement proof ---------- */

const PA = 66;
const PB = 88;
const PS = PA + PB;
const TRIS: P[][] = [
  [
    [0, 0],
    [PA, 0],
    [0, PB],
  ],
  [
    [PS, 0],
    [PS, PA],
    [PA, 0],
  ],
  [
    [PS, PS],
    [PB, PS],
    [PS, PA],
  ],
  [
    [0, PS],
    [0, PB],
    [PB, PS],
  ],
];
const SHIFT: P[] = [
  [0, PA],
  [0, 0],
  [-PB, 0],
  [PA, -PB],
];

function BigSquare({ ox, oy, phase, delay = 0 }: { ox: number; oy: number; phase: "A" | "B" | "slide"; delay?: number }) {
  const slideDelay = delay + 0.9;
  return (
    <g transform={`translate(${ox} ${oy})`}>
      <rect x="0" y="0" width={PS} height={PS} fill="rgb(var(--surface))" stroke={INK} strokeWidth="3" />
      {phase === "A" && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 1 }}>
          <polygon points={pts([PA, 0], [PS, PA], [PB, PS], [0, PB])} fill={SC} fillOpacity="0.3" stroke={SC} strokeWidth="2.5" />
          <text x={PS / 2} y={PS / 2 + 8} textAnchor="middle" fontSize="24" fontWeight="900" fill={SC} fontStyle="italic">
            c²
          </text>
        </motion.g>
      )}
      {phase !== "A" && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: phase === "slide" ? slideDelay + 1.6 : 0 }}>
          <rect x="0" y="0" width={PA} height={PA} fill={SA} fillOpacity="0.3" stroke={SA} strokeWidth="2.5" />
          <text x={PA / 2} y={PA / 2 + 8} textAnchor="middle" fontSize="22" fontWeight="900" fill={SA} fontStyle="italic">
            a²
          </text>
          <rect x={PA} y={PA} width={PB} height={PB} fill={SB} fillOpacity="0.3" stroke={SB} strokeWidth="2.5" />
          <text x={PA + PB / 2} y={PA + PB / 2 + 8} textAnchor="middle" fontSize="24" fontWeight="900" fill={SB} fontStyle="italic">
            b²
          </text>
        </motion.g>
      )}
      {TRIS.map((t, k) => {
        const to = phase === "A" ? [0, 0] : SHIFT[k];
        return (
          <motion.polygon
            key={k}
            points={pts(...t)}
            fill={TRI[k]}
            stroke={INK}
            strokeWidth="2"
            strokeLinejoin="round"
            initial={phase === "A" ? { opacity: 0, x: 0, y: 0 } : phase === "slide" ? { x: 0, y: 0 } : { x: to[0], y: to[1] }}
            animate={{ opacity: 1, x: to[0], y: to[1] }}
            transition={phase === "A" ? { delay: delay + k * 0.2 } : { delay: slideDelay + k * 0.35, duration: 0.8, ease: "easeInOut" }}
          />
        );
      })}
    </g>
  );
}

function SceneProofA() {
  return (
    <Svg label="Four copies of the triangle inside a big square leave a tilted square c squared in the middle">
      <BigSquare ox={123} oy={30} phase="A" />
      <text x="200" y="210" textAnchor="middle" fontSize="14" fontWeight="800" fill={MUTED}>
        big square side = a + b
      </text>
      <text x="200" y="240" textAnchor="middle" fontSize="16" fontWeight="900" fill={INK}>
        empty space = <tspan fill={SC} fontStyle="italic">c²</tspan>
      </text>
    </Svg>
  );
}

function SceneProofB() {
  return (
    <Svg label="The same four triangles slide to new places, leaving two squares a squared and b squared, so a squared plus b squared equals c squared">
      <BigSquare ox={20} oy={30} phase="A" delay={-1} />
      <BigSquare ox={226} oy={30} phase="slide" />
      <text x="200" y="115" textAnchor="middle" fontSize="26" fontWeight="900" fill={INK}>
        =
      </text>
      <text x={20 + PS / 2} y="210" textAnchor="middle" fontSize="15" fontWeight="900" fill={SC} fontStyle="italic">
        c²
      </text>
      <motion.text x={226 + PS / 2} y="210" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK} fontStyle="italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
        <tspan fill={SA}>a²</tspan> + <tspan fill={SB}>b²</tspan>
      </motion.text>
      <motion.text x="200" y="244" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }}>
        same square − same 4 triangles ⇒ a² + b² = c²
      </motion.text>
    </Svg>
  );
}

function Ladder({ foot, top, rungs = 8, color = "#b45309" }: { foot: P; top: P; rungs?: number; color?: string }) {
  const v = sub(top, foot);
  const len = Math.hypot(v[0], v[1]);
  const n: P = [(-v[1] / len) * 7, (v[0] / len) * 7];
  const r1a = add(foot, n);
  const r1b = add(top, n);
  const r2a = sub(foot, n);
  const r2b = sub(top, n);
  return (
    <g>
      <line x1={r1a[0]} y1={r1a[1]} x2={r1b[0]} y2={r1b[1]} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1={r2a[0]} y1={r2a[1]} x2={r2b[0]} y2={r2b[1]} stroke={color} strokeWidth="4" strokeLinecap="round" />
      {Array.from({ length: rungs }, (_, i) => {
        const t = (i + 1) / (rungs + 1);
        const p1 = add(r1a, mul(v, t));
        const p2 = add(r2a, mul(v, t));
        return <line key={i} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke={color} strokeWidth="3" />;
      })}
    </g>
  );
}

function SceneLadder() {
  const foot: P = [150, 220];
  const top: P = [270, 60];
  return (
    <Svg label="A ladder leans against a wall: its foot is 3 metres from the wall and it reaches 4 metres high, so it is 5 metres long">
      <line x1="20" y1="220" x2="380" y2="220" stroke={INK} strokeWidth="3" />
      <motion.g initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
        <Ladder foot={foot} top={top} />
      </motion.g>
      <rect x="270" y="20" width="40" height="200" fill="#fca5a5" stroke={INK} strokeWidth="2" />
      {[40, 80, 120, 160, 200].map((y) => (
        <line key={y} x1="270" y1={y} x2="310" y2={y} stroke="#b91c1c" strokeWidth="1" opacity="0.6" />
      ))}
      <RightMark at={[258, 220]} s={12} />
      <line x1="150" y1="236" x2="270" y2="236" stroke={SB} strokeWidth="2" />
      <text x="210" y="252" textAnchor="middle" fontSize="14" fontWeight="900" fill={SB}>
        3 m
      </text>
      <text x="320" y="145" fontSize="14" fontWeight="900" fill={SA}>
        4 m
      </text>
      <motion.text x="140" y="130" textAnchor="end" fontSize="16" fontWeight="900" fill={SC} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        ladder = ?
      </motion.text>
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>
        <rect x="16" y="20" width="200" height="66" rx="12" fill={SC} opacity="0.14" />
        <text x="116" y="46" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK}>
          3² + 4² = 9 + 16 = 25
        </text>
        <text x="116" y="72" textAnchor="middle" fontSize="15" fontWeight="900" fill={SC}>
          ladder = √25 = 5 m
        </text>
      </motion.g>
    </Svg>
  );
}

/* ---------------- Try: drag the triangle ---------------- */

const U = 18;
const OX = 216;
const OY = 288;
const gx = (v: number) => OX + v * U;
const gy = (v: number) => OY - v * U;

const DOTS = (
  <g aria-hidden>
    {Array.from({ length: 25 }, (_, i) => Array.from({ length: 25 }, (_, j) => <circle key={`${i}-${j}`} cx={i * U} cy={j * U} r="1.2" fill="rgb(var(--muted))" opacity="0.35" />))}
  </g>
);

function SquareOn({ p, q, away, color, label }: { p: P; q: P; away: P; color: string; label: string }) {
  const n = outward(p, q, away);
  const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
  const k = Math.round(len);
  const isInt = Math.abs(len - k) < 1e-6;
  const ctr = add(add(p, mul(sub(q, p), 0.5)), mul(n, 0.5));
  return (
    <g>
      <polygon points={pts(p, q, add(q, n), add(p, n))} fill={color} fillOpacity="0.22" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      {isInt && k > 1 && <GridIn p={p} q={q} n={n} k={k} color={color} />}
      <text x={ctr[0]} y={ctr[1] + 6} textAnchor="middle" fontSize="17" fontWeight="900" fill={INK} stroke="rgb(var(--surface))" strokeWidth="4" paintOrder="stroke">
        {label}
      </text>
    </g>
  );
}

function PythagorasTry() {
  const [a, setA] = useState(4);
  const [B, setB] = useState<[number, number]>([0, 3]);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragA = useSvgDrag(svgRef, (p) => setA(Math.max(1, Math.min(8, Math.round((p.x - OX) / U)))));
  const dragB = useSvgDrag(svgRef, (p) => setB([Math.max(-3, Math.min(3, Math.round((p.x - OX) / U))), Math.max(1, Math.min(8, Math.round((OY - p.y) / U)))]));

  const [bx, by] = B;
  const a2 = a * a;
  const b2 = bx * bx + by * by;
  const c2 = (bx - a) ** 2 + by * by;
  const angle = (Math.atan2(by, bx) * 180) / Math.PI;
  const right = bx === 0;
  const O: P = [gx(0), gy(0)];
  const A: P = [gx(a), gy(0)];
  const Bp: P = [gx(bx), gy(by)];
  const root = (v: number) => (Number.isInteger(Math.sqrt(v)) ? `${Math.sqrt(v)}` : `√${v} ≈ ${fmt(Math.sqrt(v), 2)}`);

  const reset = () => {
    setA(4);
    setB([0, 3]);
  };

  return (
    <TryShell title="Drag the triangle" hint="Drag the orange dot to change the bottom side and the blue dot to move the top corner. Watch the three squares." onReset={reset}>
      <div className="grid gap-3 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border-2 border-line p-1">
          <Svg label={`Triangle with a = ${a}, top corner at ${bx}, ${by}. Angle ${fmt(angle, 0)} degrees. a squared ${a2}, b squared ${b2}, c squared ${c2}.`} vb="0 0 440 440" maxH={420} svgRef={svgRef}>
            {DOTS}
            <SquareOn p={O} q={A} away={Bp} color={SA} label={`a² = ${a2}`} />
            <SquareOn p={O} q={Bp} away={A} color={SB} label={`b² = ${b2}`} />
            <SquareOn p={A} q={Bp} away={O} color={SC} label={`c² = ${c2}`} />
            <polygon points={pts(O, A, Bp)} fill="#fde68a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            {right ? <RightMark at={O} s={14} color="#16a34a" /> : <path d={`M ${O[0] + 18} ${O[1]} A 18 18 0 0 0 ${O[0] + 18 * Math.cos((angle * Math.PI) / 180)} ${O[1] - 18 * Math.sin((angle * Math.PI) / 180)}`} fill="none" stroke="#ef4444" strokeWidth="2.5" />}
            <text x={O[0] - 6} y={O[1] + 18} textAnchor="end" fontSize="13" fontWeight="900" fill={right ? "#16a34a" : "#ef4444"}>
              {fmt(angle, 0)}°
            </text>
            {/* handles */}
            <g {...dragA}>
              <circle cx={A[0]} cy={A[1]} r="22" fill="transparent" />
              <circle cx={A[0]} cy={A[1]} r="11" fill={SA} stroke="white" strokeWidth="3" />
            </g>
            <g {...dragB}>
              <circle cx={Bp[0]} cy={Bp[1]} r="22" fill="transparent" />
              <circle cx={Bp[0]} cy={Bp[1]} r="11" fill={SB} stroke="white" strokeWidth="3" />
            </g>
          </Svg>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border-2 border-line p-3 font-mono text-[15px] font-bold leading-relaxed" aria-live="polite">
            <p>
              <span style={{ color: SA }}>a² = {a2}</span> &nbsp;+&nbsp; <span style={{ color: SB }}>b² = {b2}</span>
            </p>
            <p className="text-2xl font-black">
              = {a2 + b2} <span className="text-muted">{a2 + b2 === c2 ? "=" : a2 + b2 > c2 ? ">" : "<"}</span> <span style={{ color: SC }}>{c2}</span>
            </p>
            <p className="text-sm text-muted">
              c = {root(c2)} · angle = {fmt(angle, 0)}°
            </p>
          </div>
          {right ? (
            <Feedback tone="good" k={`r${a}-${by}`}>
              Right angle ✓ The two small squares add up exactly to the big one: {a2} + {b2} = {c2}. {Number.isInteger(Math.sqrt(c2)) ? `So c = ${Math.sqrt(c2)}.` : `So c = √${c2}.`}
            </Feedback>
          ) : (
            <Feedback tone="bad" k={`n${bx}`}>
              The corner is {fmt(angle, 0)}° — {angle > 90 ? "wider" : "narrower"} than a right angle, so c² is {angle > 90 ? "BIGGER" : "SMALLER"} than a² + b². Pythagoras only works for right angles!
            </Feedback>
          )}
          <div className="flex flex-wrap gap-2">
            <Pad onClick={() => setB([0, by])} color={C} solid disabled={right}>
              Make it 90°
            </Pad>
            <Pad
              onClick={() => {
                setA(4);
                setB([0, 3]);
              }}
              color={C}
            >
              3-4-5
            </Pad>
            <Pad
              onClick={() => {
                setA(8);
                setB([0, 6]);
              }}
              color={C}
            >
              6-8-10
            </Pad>
            <Pad
              onClick={() => {
                setA(5);
                setB([0, 5]);
              }}
              color={C}
            >
              5-5-?
            </Pad>
          </div>
          <p className="text-sm font-semibold text-muted">Tip: find another right triangle where c comes out as a whole number. (Hint: try 8 and 6, or 3 and 4 swapped.)</p>
        </div>
      </div>
    </TryShell>
  );
}

/* ---------------- Story + analogy ---------------- */

const story = [
  {
    art: (
      <Svg label="Leo looks at a park with a path around the edge of a rectangular field" vb="0 0 240 160" maxH={170}>
        <rect x="70" y="40" width="150" height="100" fill="#bbf7d0" stroke={DARK} strokeWidth="2" />
        <path d="M 70 40 L 70 140 L 220 140" fill="none" stroke="#a16207" strokeWidth="6" strokeLinecap="round" />
        <text x="58" y="94" textAnchor="end" fontSize="12" fontWeight="900" fill={DARK}>
          30 m
        </text>
        <text x="145" y="156" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
          40 m
        </text>
        <Kid x={30} y={150} s={0.7} shirt="#22c55e" mood="thinking" />
      </Svg>
    ),
    speech: "That's 70 m of walking!",
    caption: "To cross the park, Leo walks 30 m down the path, then 40 m along the bottom.",
  },
  {
    art: (
      <Svg label="Maya points at the diagonal shortcut across the field" vb="0 0 240 160" maxH={170}>
        <rect x="70" y="40" width="150" height="100" fill="#bbf7d0" stroke={DARK} strokeWidth="2" />
        <line x1="70" y1="40" x2="220" y2="140" stroke={SC} strokeWidth="4" strokeDasharray="8 5" />
        <text x="150" y="80" fontSize="14" fontWeight="900" fill={SC}>
          ?
        </text>
        <Kid x={30} y={150} s={0.7} shirt="#f97316" longHair hair="#7c2d12" pose="point" />
      </Svg>
    ),
    speech: "Cut across!",
    caption: "Maya spots a shortcut: straight across the grass, along the hypotenuse.",
  },
  {
    art: (
      <Svg label="Maya works out 30 squared plus 40 squared equals 2500" vb="0 0 240 160" maxH={170}>
        <rect x="20" y="40" width="200" height="90" rx="8" fill="#1f2937" />
        <text x="120" y="74" textAnchor="middle" fontSize="15" fontWeight="900" fill="white">
          30² + 40² = c²
        </text>
        <text x="120" y="98" textAnchor="middle" fontSize="15" fontWeight="900" fill="white">
          900 + 1600 = 2500
        </text>
        <text x="120" y="120" textAnchor="middle" fontSize="15" fontWeight="900" fill="#6ee7b7">
          c = √2500 = 50
        </text>
      </Svg>
    ),
    caption: "The corner is a right angle, so Maya uses a² + b² = c²: the shortcut is √2500 = 50 m.",
  },
  {
    art: (
      <Svg label="Maya waits at the finish while Leo is still on the path" vb="0 0 240 160" maxH={170}>
        <rect x="70" y="40" width="150" height="100" fill="#bbf7d0" stroke={DARK} strokeWidth="2" />
        <line x1="70" y1="40" x2="220" y2="140" stroke={SC} strokeWidth="4" />
        <path d="M 70 40 L 70 140 L 220 140" fill="none" stroke="#a16207" strokeWidth="5" />
        <Kid x={214} y={140} s={0.55} shirt="#f97316" longHair hair="#7c2d12" pose="cheer" />
        <Kid x={110} y={140} s={0.55} shirt="#22c55e" mood="sad" />
      </Svg>
    ),
    speech: "50 m beats 70 m!",
    caption: "Maya arrives first: 50 m instead of 70 m. Pythagoras just saved her 20 metres.",
  },
];

const like = {
  headline: "Pythagoras is like sharing out floor tiles: the two small square floors use exactly as many tiles as the big one.",
  everyday: {
    label: "Tiling three square floors",
    art: (
      <Svg label="A 3 by 3 floor and a 4 by 4 floor use 25 tiles, the same as a 5 by 5 floor" vb="0 0 200 150" maxH={160}>
        {Array.from({ length: 9 }, (_, i) => (
          <rect key={`a${i}`} x={8 + (i % 3) * 14} y={20 + Math.floor(i / 3) * 14} width="13" height="13" fill={SA} />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <rect key={`b${i}`} x={8 + (i % 4) * 14} y={70 + Math.floor(i / 4) * 14} width="13" height="13" fill={SB} />
        ))}
        <text x="80" y="88" textAnchor="middle" fontSize="18" fontWeight="900" fill={DARK}>
          →
        </text>
        {Array.from({ length: 25 }, (_, i) => (
          <rect key={`c${i}`} x={110 + (i % 5) * 16} y={38 + Math.floor(i / 5) * 16} width="15" height="15" fill={i % 5 === 4 || i >= 20 ? SA : SB} />
        ))}
        <text x="150" y="140" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
          9 + 16 = 25 tiles
        </text>
      </Svg>
    ),
  },
  concept: {
    label: "Squares on a right triangle",
    art: (
      <Svg label="A right triangle with a squared, b squared and c squared drawn on its sides" vb="0 0 200 150" maxH={160}>
        <g transform="translate(-40 -2) scale(0.62)">
          <path d={dPath(R, TA, add(TA, nA), add(R, nA))} fill={SA} fillOpacity="0.4" stroke={SA} strokeWidth="2" />
          <path d={dPath(R, TB, add(TB, nB), add(R, nB))} fill={SB} fillOpacity="0.4" stroke={SB} strokeWidth="2" />
          <path d={dPath(TA, TB, add(TB, nC), add(TA, nC))} fill={SC} fillOpacity="0.4" stroke={SC} strokeWidth="2" />
          <polygon points={pts(R, TA, TB)} fill="#fde68a" stroke={DARK} strokeWidth="3" />
        </g>
        <text x="160" y="140" textAnchor="middle" fontSize="13" fontWeight="900" fill={DARK} fontStyle="italic">
          a² + b² = c²
        </text>
      </Svg>
    ),
  },
  pairs: [
    ["The small floor (3 × 3)", "a², the square on one short side"],
    ["The medium floor (4 × 4)", "b², the square on the other short side"],
    ["The big floor (5 × 5)", "c², the square on the hypotenuse"],
    ["Same number of tiles", "a² + b² = c²"],
  ] as [string, string][],
  limits:
    "It only works when the triangle has a right angle — try the Try It tab and tilt the corner to see it fail. And most right triangles don't give whole-number tiles: sides 1 and 1 give c = √2, which no number of whole tiles can match.",
};

export const pythagoras: Explainer = {
  id: "pythagoras",
  title: "Pythagoras' theorem: squares on a right triangle",
  tagline: "See why a² + b² = c² by sliding triangles around.",
  area: "Maths",
  ages: "11–16",
  lessons: ["math-middle/geometry-data/angles-and-triangles", "math-high/coordinate-geometry/distance-midpoint-section", "math-high/trigonometry/trig-ratios"],
  color: C,
  icon: "📐",
  watch: [
    { title: "Meet the right-angled triangle", say: "This triangle has a square corner, called a right angle. The longest side, opposite that corner, is called the hypotenuse, c.", scene: <SceneTriangle /> },
    { title: "Build a square on each side", say: "Draw a square on each side and count the little tiles: 9 on side a, 16 on side b, and 25 on side c.", scene: <SceneSquares /> },
    { title: "The small squares fill the big one", say: "Slide the 9 tiles and the 16 tiles together: they fill a 5 by 5 square exactly. So a² + b² = c².", scene: <SceneTiles /> },
    { title: "Proof, part 1: four triangles", say: "Put four copies of the triangle inside a big square. The empty space left in the middle is the square on c.", scene: <SceneProofA /> },
    { title: "Proof, part 2: slide them around", say: "Slide the same four triangles into new places. Now the empty space is two squares, a² and b². Same big square, same triangles, so the spaces must be equal!", scene: <SceneProofB /> },
    { title: "Use it: how long is the ladder?", say: "A ladder's foot is 3 m from a wall and it reaches 4 m up. 3² + 4² = 25, so the ladder is √25 = 5 m long.", scene: <SceneLadder /> },
  ],
  try: PythagorasTry,
  story,
  like,
};
