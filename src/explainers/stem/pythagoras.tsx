"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Explainer, Mission, MissionApi } from "../types";
import { fmt } from "@/components/widgets/_shared";
import { ActionButton, ActionRow, DARK, INK, Kid, MUTED, Svg } from "./_kit";

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

/* ---------------- guided mission ---------------- */

/** A square drawn outward on side p→q, with a tile grid when its side `len` (in units) is a whole number. */
function SquareOn({ p, q, away, len, color, label }: { p: P; q: P; away: P; len: number; color: string; label: string }) {
  const n = outward(p, q, away);
  const k = Math.round(len);
  const isInt = Math.abs(len - k) < 1e-6;
  const ctr = add(add(p, mul(sub(q, p), 0.5)), mul(n, 0.5));
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <polygon points={pts(p, q, add(q, n), add(p, n))} fill={color} fillOpacity="0.22" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      {isInt && k > 1 && <GridIn p={p} q={q} n={n} k={k} color={color} />}
      <text x={ctr[0]} y={ctr[1] + 8} textAnchor="middle" fontSize="20" fontWeight="900" fill={INK} stroke="rgb(var(--surface))" strokeWidth="5" paintOrder="stroke">
        {label}
      </text>
    </motion.g>
  );
}

/**
 * Triangle with a horizontal side of `a` units and its top corner at `top` (units, y up).
 * The drawing scale keeps the picture the same size whatever the side lengths.
 */
function PyFig({ a, top, squares, hideC }: { a: number; top: [number, number]; squares: boolean; hideC?: boolean }) {
  const U = 100 / a;
  const O: P = [0, 0];
  const A: P = [a * U, 0];
  const B: P = [top[0] * U, -top[1] * U];
  const a2 = a * a;
  const b2 = top[0] ** 2 + top[1] ** 2;
  const c2 = (top[0] - a) ** 2 + top[1] ** 2;
  const right = top[0] === 0;
  // frame includes the squares even before they appear, so the picture doesn't jump
  const corners: P[] = [O, A, B];
  for (const [p, q, w] of [
    [O, A, B],
    [O, B, A],
    [A, B, O],
  ] as [P, P, P][]) {
    const n = outward(p, q, w);
    corners.push(add(p, n), add(q, n));
  }
  const xs = corners.map((c) => c[0]);
  const ys = corners.map((c) => c[1]);
  const pad = 22;
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const w = Math.max(...xs) + pad - minX;
  const h = Math.max(...ys) + pad - minY;
  const angle = (Math.atan2(top[1], top[0]) * 180) / Math.PI;
  const lab = (p: P, q: P, away: P, t: string, color: string) => {
    const m = add(p, mul(sub(q, p), 0.5));
    const n = outward(p, q, away);
    const l = Math.hypot(n[0], n[1]);
    const at = add(m, mul(n, 18 / l));
    return (
      <text x={at[0]} y={at[1] + 7} textAnchor="middle" fontSize="20" fontWeight="900" fill={color}>
        {t}
      </text>
    );
  };
  const side = (v: number) => (Number.isInteger(Math.sqrt(v)) ? `${Math.sqrt(v)}` : "");
  return (
    <Svg label={`Triangle with sides squared ${a2}, ${b2} and ${c2}. Corner angle ${fmt(angle, 0)} degrees.${squares ? ` Squares drawn: ${a2} + ${b2} ${a2 + b2 === c2 ? "=" : "≠"} ${c2}.` : ""}`} vb={`${fmt(minX, 1)} ${fmt(minY, 1)} ${fmt(w, 1)} ${fmt(h, 1)}`} maxH={260}>
      {squares && (
        <>
          <SquareOn p={O} q={A} away={B} len={a} color={SA} label={`${a2}`} />
          <SquareOn p={O} q={B} away={A} len={Math.sqrt(b2)} color={SB} label={`${b2}`} />
          <SquareOn p={A} q={B} away={O} len={Math.sqrt(c2)} color={SC} label={hideC ? "?" : `${c2}`} />
        </>
      )}
      <polygon points={pts(O, A, B)} fill="#fde68a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {right ? <RightMark at={O} s={14} color="#16a34a" /> : <path d={`M 20 0 A 20 20 0 0 0 ${20 * Math.cos((angle * Math.PI) / 180)} ${-20 * Math.sin((angle * Math.PI) / 180)}`} fill="none" stroke="#ef4444" strokeWidth="3" />}
      {!squares && (
        <>
          {lab(O, A, B, side(a2), SA)}
          {lab(O, B, A, side(b2), SB)}
          {lab(A, B, O, hideC ? "?" : side(c2), SC)}
        </>
      )}
    </Svg>
  );
}

function SumLine({ a2, b2, c2 }: { a2: number; b2: number; c2: number }) {
  const ok = a2 + b2 === c2;
  return (
    <p className="text-center font-mono text-lg font-black" aria-live="polite">
      <span style={{ color: SA }}>{a2}</span> + <span style={{ color: SB }}>{b2}</span> = {a2 + b2} <span style={{ color: ok ? "#16a34a" : "#ef4444" }}>{ok ? "=" : "≠"}</span> <span style={{ color: SC }}>{c2}</span> {ok ? "✓" : "✗"}
    </p>
  );
}

function StepSquares({ a, b, cta, api }: { a: number; b: number; cta: string; api: MissionApi }) {
  const [on, setOn] = useState(false);
  return (
    <div>
      <PyFig a={a} top={[0, b]} squares={on} hideC={!on} />
      {on && <SumLine a2={a * a} b2={b * b} c2={a * a + b * b} />}
      <ActionRow>
        <ActionButton
          color={C}
          disabled={api.complete}
          onClick={() => {
            setOn(true);
            api.done();
          }}
        >
          {cta}
        </ActionButton>
      </ActionRow>
    </div>
  );
}

function StepTilt({ done, complete }: MissionApi) {
  const [tilted, setTilted] = useState(false);
  const top: [number, number] = tilted ? [-2, 3] : [0, 3];
  const b2 = top[0] ** 2 + top[1] ** 2;
  const c2 = (top[0] - 4) ** 2 + top[1] ** 2;
  return (
    <div>
      <PyFig a={4} top={top} squares />
      <p className="text-center text-sm font-black" style={{ color: tilted ? "#ef4444" : "#16a34a" }}>
        ∠ {tilted ? fmt((Math.atan2(3, -2) * 180) / Math.PI, 0) : 90}°
      </p>
      <SumLine a2={16} b2={b2} c2={c2} />
      <ActionRow>
        <ActionButton
          color={C}
          disabled={complete}
          onClick={() => {
            setTilted(true);
            done();
          }}
        >
          Open the corner wider
        </ActionButton>
      </ActionRow>
    </div>
  );
}

const mission: Mission = {
  goal: "Draw squares on the sides of a triangle and discover the rule that links them.",
  steps: [
    {
      task: "Draw a square on each side.",
      predict: { question: "Sides 4 and 3 meet at a right angle. How many tiles fit in the square on the longest side?", options: ["7 (4 + 3)", "25 (16 + 9)", "12 (4 × 3)"], answer: 1, trap: 0 },
      scene: (api) => <StepSquares a={4} b={3} cta="Draw the squares" api={api} />,
      hint: "Tap the green button under the triangle.",
      explain: "The two small squares hold 16 + 9 = 25 tiles, exactly as many as the big one. The longest side, opposite the **right angle** (a square corner, 90°), is called the **hypotenuse**.",
    },
    {
      task: "Try a bigger triangle: sides 8 and 6.",
      predict: { question: "Sides 8 and 6, with a right angle. How long is the longest side?", options: ["14", "10", "48"], answer: 1, trap: 0 },
      scene: (api) => <StepSquares a={8} b={6} cta="Draw the squares" api={api} />,
      explain: "64 + 36 = 100, and the square of side **10** holds 100 tiles. So the hypotenuse is √100 = 10. **a² + b² = c²**, where a² (“a squared”) means a × a.",
    },
    {
      task: "Make the corner wider than a right angle.",
      predict: { question: "If the corner is not a right angle, does a² + b² = c² still work?", options: ["Yes — it works for any triangle", "No — only with a right angle"], answer: 1, trap: 0 },
      scene: (api) => <StepTilt {...api} />,
      explain: "With a wider corner the big square grows: 16 + 13 is 29, but c² is 45. The rule **only works for right-angled triangles**.",
    },
  ],
  takeaway: "In a right-angled triangle, the squares on the two shorter sides add up to the square on the longest side: a² + b² = c².",
};

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
    "It only works when the triangle has a right angle — the last step of the Try it tab opens the corner to show it failing. And most right triangles don't give whole-number tiles: sides 1 and 1 give c = √2, which no number of whole tiles can match.",
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
    { title: "Build a square on each side", say: "Draw a square on each side and count the little tiles: 9 on side a, 16 on side b, and 25 on side c. We write 3 × 3 = 9 as 3², said “3 squared”.", scene: <SceneSquares /> },
    { title: "The small squares fill the big one", say: "Slide the 9 tiles and the 16 tiles together: they fill the 5 by 5 square exactly. The two small squares make the big one: a² + b² = c².", scene: <SceneTiles /> },
    { title: "Proof, part 1: four triangles", say: "Put four copies of the triangle inside a big square. The empty space left in the middle is the square on c.", scene: <SceneProofA /> },
    { title: "Proof, part 2: slide them around", say: "Slide the same four triangles into new places. Now the empty space is two squares, a² and b². The big square and the triangles haven't changed, so the empty space hasn't either: a² + b² = c².", scene: <SceneProofB /> },
    { title: "Use it: how long is the ladder?", say: "A ladder's foot is 3 m from a wall and it reaches 4 m up. 3² + 4² = 25, so the ladder is √25 = 5 m long.", scene: <SceneLadder /> },
  ],
  misconception: { myth: "a² + b² = c² works for any triangle.", truth: "It only works when the triangle has a right angle (90°). Open the corner wider and c² gets bigger than a² + b²." },
  mission,
  story,
  like,
};
