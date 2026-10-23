"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { useSvgDrag } from "@/components/widgets/_shared";
import { DARK, Feedback, Ground, INK, Kid, MUTED, Pad, Svg, TryShell } from "./_kit";

const COLD = "#3b82f6";
const WARM = "#ef4444";
const C = "#0EA5E9";

const minus = (n: number) => (n < 0 ? `−${Math.abs(n)}` : `${n}`);

function Frog({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <ellipse cx="-12" cy="-2" rx="7" ry="3" fill="#16a34a" />
      <ellipse cx="12" cy="-2" rx="7" ry="3" fill="#16a34a" />
      <ellipse cx="0" cy="-11" rx="14" ry="10" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
      <circle cx="-7" cy="-21" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
      <circle cx="7" cy="-21" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
      <circle cx="-7" cy="-21" r="2" fill={DARK} />
      <circle cx="7" cy="-21" r="2" fill={DARK} />
      <path d="M -6 -9 Q 0 -4 6 -9" stroke="#14532d" fill="none" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

/* ---------------- Watch: number line pieces ---------------- */

const NX = (n: number) => 200 + n * 34;
const NY = 180;

function Ticks({ from, to, delayNeg = 0 }: { from: number; to: number; delayNeg?: number }) {
  const out = [];
  for (let n = from; n <= to; n++) {
    const neg = n < 0;
    out.push(
      <motion.g key={n} initial={neg && delayNeg ? { opacity: 0, x: 30 } : false} animate={{ opacity: 1, x: 0 }} transition={{ delay: neg ? delayNeg + (-n) * 0.12 : 0 }}>
        <line x1={NX(n)} y1={NY - 8} x2={NX(n)} y2={NY + 8} stroke={n === 0 ? INK : neg ? COLD : MUTED} strokeWidth={n === 0 ? 3.5 : 2.5} />
        <text x={NX(n)} y={NY + 28} textAnchor="middle" fontSize="15" fontWeight="800" fill={n === 0 ? INK : neg ? COLD : WARM}>
          {minus(n)}
        </text>
      </motion.g>,
    );
  }
  return <>{out}</>;
}

function Line({ from = -5, to = 5 }: { from?: number; to?: number }) {
  return <line x1={NX(from) - 18} y1={NY} x2={NX(to) + 18} y2={NY} stroke={INK} strokeWidth="3" strokeLinecap="round" />;
}

function HopArcs({ start, count, dir, delay = 0.2 }: { start: number; count: number; dir: 1 | -1; delay?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, k) => {
        const a = NX(start + dir * k);
        const b = NX(start + dir * (k + 1));
        return <motion.path key={k} d={`M ${a} ${NY - 4} Q ${(a + b) / 2} ${NY - 44} ${b} ${NY - 4}`} fill="none" stroke={dir > 0 ? WARM : COLD} strokeWidth="2.5" strokeDasharray="5 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: delay + k * 0.45, duration: 0.4 }} />;
      })}
    </>
  );
}

function hopKeyframes(start: number, count: number, dir: 1 | -1) {
  const xs: number[] = [NX(start)];
  const ys: number[] = [NY - 4];
  for (let k = 0; k < count; k++) {
    const a = NX(start + dir * k);
    const b = NX(start + dir * (k + 1));
    xs.push((a + b) / 2, b);
    ys.push(NY - 40, NY - 4);
  }
  return { x: xs, y: ys };
}

function HoppingFrog({ start, count, dir, delay = 0.2 }: { start: number; count: number; dir: 1 | -1; delay?: number }) {
  const k = hopKeyframes(start, count, dir);
  return (
    <motion.g initial={{ x: k.x[0], y: k.y[0] }} animate={{ x: k.x, y: k.y }} transition={{ delay, duration: count * 0.45, ease: "easeInOut" }}>
      <Frog />
    </motion.g>
  );
}

function SceneCounting() {
  return (
    <Svg label="A number line from 0 to 5 with a frog hopping from 0 to 3">
      <line x1={NX(0) - 4} y1={NY} x2={NX(5) + 18} y2={NY} stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <line x1={NX(-5)} y1={NY} x2={NX(0)} y2={NY} stroke={MUTED} strokeWidth="2" strokeDasharray="4 6" />
      <text x={NX(-2.5)} y={NY - 30} textAnchor="middle" fontSize="40" fontWeight="900" fill={MUTED}>
        ?
      </text>
      <Ticks from={0} to={5} />
      <HopArcs start={0} count={3} dir={1} />
      <HoppingFrog start={0} count={3} dir={1} />
      <text x={NX(2.5)} y="50" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>
        0, 1, 2, 3 … counting to the right
      </text>
    </Svg>
  );
}

function SceneOtherSide() {
  return (
    <Svg label="The number line extends left of zero with negative numbers −1 to −5 in blue">
      <Line />
      <Ticks from={-5} to={5} delayNeg={0.3} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <rect x={NX(-5) - 14} y="56" width={NX(0) - NX(-5) + 10} height="40" rx="12" fill={COLD} opacity="0.14" />
        <text x={(NX(-5) + NX(0)) / 2 - 2} y="82" textAnchor="middle" fontSize="16" fontWeight="900" fill={COLD}>
          negative: less than zero
        </text>
        <rect x={NX(0) + 4} y="56" width={NX(5) - NX(0) + 10} height="40" rx="12" fill={WARM} opacity="0.12" />
        <text x={(NX(5) + NX(0)) / 2 + 6} y="82" textAnchor="middle" fontSize="16" fontWeight="900" fill={WARM}>
          positive: more than zero
        </text>
      </motion.g>
      <g transform={`translate(${NX(0)} ${NY - 4})`}>
        <Frog />
      </g>
    </Svg>
  );
}

const TY = (t: number) => 128 - t * 14;

function Thermo({ x, from, to, delay = 0.4, range = 6 }: { x: number; from: number; to: number; delay?: number; range?: number }) {
  const ticks = [];
  for (let t = -range; t <= range; t++) {
    ticks.push(
      <g key={t}>
        <line x1={x + 12} y1={TY(t)} x2={x + (t % 2 === 0 ? 24 : 18)} y2={TY(t)} stroke={t === 0 ? INK : MUTED} strokeWidth={t === 0 ? 2.5 : 1.5} />
        {t % 2 === 0 && (
          <text x={x + 30} y={TY(t) + 5} fontSize="13" fontWeight="800" fill={t < 0 ? COLD : t > 0 ? WARM : INK}>
            {minus(t)}
          </text>
        )}
      </g>,
    );
  }
  const bulbY = TY(-range) + 22;
  return (
    <g>
      <rect x={x - 11} y={TY(range) - 12} width="22" height={bulbY - TY(range) + 12} rx="11" fill="white" stroke={INK} strokeWidth="2.5" />
      <motion.rect x={x - 5} width="10" rx="5" fill={WARM} initial={{ y: TY(from), height: bulbY - TY(from) }} animate={{ y: TY(to), height: bulbY - TY(to) }} transition={{ delay, duration: 1.6, ease: "easeInOut" }} />
      <circle cx={x} cy={bulbY} r="15" fill={WARM} stroke={INK} strokeWidth="2.5" />
      {ticks}
    </g>
  );
}

function SceneThermometer() {
  return (
    <Svg label="A thermometer drops from 3 degrees to minus 4 degrees">
      <Thermo x={140} from={3} to={-4} />
      <line x1="100" y1={TY(0)} x2="128" y2={TY(0)} stroke={INK} strokeWidth="2" strokeDasharray="3 3" />
      <text x="96" y={TY(0) + 5} textAnchor="end" fontSize="13" fontWeight="800" fill={INK}>
        freezing
      </text>
      <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0.15 }} transition={{ delay: 0.4, duration: 1.6 }}>
        <circle cx="320" cy="60" r="22" fill="#facc15" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * Math.PI) / 4;
          return <line key={i} x1={320 + Math.cos(a) * 28} y1={60 + Math.sin(a) * 28} x2={320 + Math.cos(a) * 38} y2={60 + Math.sin(a) * 38} stroke="#facc15" strokeWidth="4" strokeLinecap="round" />;
        })}
      </motion.g>
      {[
        [300, 150],
        [350, 115],
        [355, 200],
        [305, 228],
      ].map(([sx, sy], i) => (
        <motion.text key={i} x={sx} y={sy} fontSize="26" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.25, duration: 0.8 }}>
          ❄️
        </motion.text>
      ))}
      <motion.text x="228" y={TY(3) + 5} fontSize="16" fontWeight="900" fill={WARM} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.2 }}>
        3 °C
      </motion.text>
      <motion.text x="228" y={TY(-4) + 5} fontSize="18" fontWeight="900" fill={COLD} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        −4 °C
      </motion.text>
      <motion.path d={`M 218 ${TY(3) + 6} C 204 ${TY(1)}, 204 ${TY(-2)}, 218 ${TY(-4) - 10}`} fill="none" stroke={COLD} strokeWidth="2.5" markerEnd="url(#nn-arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 1.6 }} />
      <defs>
        <marker id="nn-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={COLD} />
        </marker>
      </defs>
      <text x="228" y="245" fontSize="14" fontWeight="800" fill={MUTED}>
        7 degrees colder
      </text>
    </Svg>
  );
}

function SceneHop() {
  return (
    <Svg label="Frog starts at minus 2 and hops 5 to the right, landing on 3">
      <Line />
      <Ticks from={-5} to={5} />
      <circle cx={NX(-2)} cy={NY} r="6" fill={COLD} />
      <HopArcs start={-2} count={5} dir={1} />
      <HoppingFrog start={-2} count={5} dir={1} />
      <motion.text x="200" y="60" textAnchor="middle" fontSize="30" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
        −2 + 5 = 3
      </motion.text>
      <text x="200" y="250" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        + means hop right · − means hop left
      </text>
    </Svg>
  );
}

function SceneCompare() {
  return (
    <Svg label="Minus 4 is further left than minus 1, so minus 4 is smaller">
      <Line />
      <Ticks from={-5} to={5} />
      <motion.g initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x={NX(-4) - 22} y={NY - 70} width="44" height="44" rx="10" fill="#bfdbfe" stroke={COLD} strokeWidth="2.5" />
        <text x={NX(-4)} y={NY - 40} textAnchor="middle" fontSize="20">
          🥶
        </text>
        <line x1={NX(-4)} y1={NY - 26} x2={NX(-4)} y2={NY - 6} stroke={COLD} strokeWidth="3" />
      </motion.g>
      <motion.g initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
        <rect x={NX(-1) - 22} y={NY - 70} width="44" height="44" rx="10" fill="#e0f2fe" stroke={C} strokeWidth="2.5" />
        <text x={NX(-1)} y={NY - 40} textAnchor="middle" fontSize="20">
          😬
        </text>
        <line x1={NX(-1)} y1={NY - 26} x2={NX(-1)} y2={NY - 6} stroke={C} strokeWidth="3" />
      </motion.g>
      <motion.text x="200" y="60" textAnchor="middle" fontSize="30" fontWeight="900" fill={INK} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>
        −4 &lt; −1
      </motion.text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <path d={`M ${NX(-1)} 240 L ${NX(-5)} 240`} stroke={COLD} strokeWidth="3" markerEnd="url(#nn-l)" />
        <path d={`M ${NX(1)} 240 L ${NX(5)} 240`} stroke={WARM} strokeWidth="3" markerEnd="url(#nn-r)" />
        <text x="200" y="245" textAnchor="middle" fontSize="13" fontWeight="900" fill={INK}>
          smaller · bigger
        </text>
      </motion.g>
      <defs>
        <marker id="nn-l" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={COLD} />
        </marker>
        <marker id="nn-r" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={WARM} />
        </marker>
      </defs>
    </Svg>
  );
}

function Counter({ x, y, hot }: { x: number; y: number; hot: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-17" y="-17" width="34" height="34" rx={hot ? 17 : 6} fill={hot ? WARM : "#93c5fd"} stroke={hot ? "#b91c1c" : COLD} strokeWidth="2.5" />
      <text y="7" textAnchor="middle" fontSize="20" fontWeight="900" fill={hot ? "white" : "#1e3a8a"}>
        {hot ? "+" : "−"}
      </text>
    </g>
  );
}

function SceneTakeNegative() {
  return (
    <Svg label="A cup holds five warm plus counters and two ice cube minus counters; removing the ice cubes leaves plus 5">
      <path d="M 60 70 L 80 220 L 240 220 L 260 70" fill="#e0f2fe" stroke={INK} strokeWidth="3" strokeLinejoin="round" opacity="0.9" />
      {[0, 1, 2, 3, 4].map((i) => (
        <Counter key={i} x={100 + (i % 3) * 50} y={i < 3 ? 190 : 145} hot />
      ))}
      {[0, 1].map((i) => (
        <motion.g key={i} initial={{ x: 0, y: 0 }} animate={{ x: 140 - i * 10, y: -60 + i * 10 }} transition={{ delay: 1.2 + i * 0.4, duration: 0.9 }}>
          <Counter x={i ? 150 : 200} y={i ? 100 : 145} hot={false} />
        </motion.g>
      ))}
      <text x="160" y="50" textAnchor="middle" fontSize="15" fontWeight="800" fill={INK}>
        5 warm + 2 icy = 3
      </text>
      <motion.text x="335" y="210" textAnchor="middle" fontSize="22" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
        3 − (−2) = 5
      </motion.text>
      <motion.text x="335" y="236" textAnchor="middle" fontSize="13" fontWeight="800" fill={WARM} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
        take away cold → warmer!
      </motion.text>
    </Svg>
  );
}

/* ---------------- Try: temperature frog ---------------- */

const ROUNDS = [
  { start: 3, change: -5, text: "It's 3 °C. Then it gets 5 degrees colder." },
  { start: -4, change: 6, text: "It's −4 °C. The sun warms it up by 6 degrees." },
  { start: -2, change: -5, text: "It's −2 °C. Overnight it gets 5 degrees colder." },
  { start: 6, change: -9, text: "It's 6 °C at lunch. By midnight it is 9 degrees colder." },
  { start: -7, change: 4, text: "A freezer is at −7 °C. The door is left open and it warms up 4 degrees." },
];

const TX = (n: number) => 220 + n * 20;
const TLY = 100;

function NegativeTry() {
  const [round, setRound] = useState(0);
  const [pos, setPos] = useState(ROUNDS[0].start);
  const [hops, setHops] = useState(-1); // -1 = not checking
  const [score, setScore] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const r = ROUNDS[round];
  const target = r.start + r.change;
  const n = Math.abs(r.change);
  const dir: 1 | -1 = r.change > 0 ? 1 : -1;
  const done = hops >= n;
  const correct = done && pos === target;

  useEffect(() => {
    if (hops < 0 || hops >= n) return;
    const id = setTimeout(() => setHops((h) => h + 1), 330);
    return () => clearTimeout(id);
  }, [hops, n]);

  useEffect(() => {
    if (done && pos === target) setScore((s) => s + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const drag = useSvgDrag(svgRef, (p) => {
    if (hops >= 0) return;
    setPos(Math.max(-10, Math.min(10, Math.round((p.x - 220) / 20))));
  });

  const goTo = (k: number) => {
    setRound(k);
    setPos(ROUNDS[k].start);
    setHops(-1);
  };
  const reset = () => {
    setScore(0);
    goTo(0);
  };
  const ghost = r.start + dir * Math.max(0, Math.min(hops, n));

  return (
    <TryShell title="Where does the temperature land?" hint="Drag the frog (or tap the line) to your answer, then press Check to watch the hops." onReset={reset}>
      <div className="mb-3 rounded-2xl border-2 border-line bg-surface-2 px-4 py-3">
        <p className="text-xs font-black uppercase tracking-wide text-muted">
          Puzzle {round + 1} of {ROUNDS.length} · score {score}
        </p>
        <p className="mt-0.5 text-lg font-black">{r.text}</p>
      </div>
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_88px]">
        <div className="rounded-2xl border-2 border-line p-1">
          <Svg label={`Number line from −10 to 10. Start at ${minus(r.start)}. Frog is on ${minus(pos)}.`} vb="0 0 440 150" maxH={220} svgRef={svgRef}>
            <rect x="0" y="0" width="440" height="150" fill="transparent" {...drag} />
            <g pointerEvents="none">
              <rect x={TX(-10) - 8} y={TLY - 4} width={TX(0) - TX(-10) + 8} height="8" rx="4" fill={COLD} opacity="0.25" />
              <rect x={TX(0)} y={TLY - 4} width={TX(10) - TX(0) + 8} height="8" rx="4" fill={WARM} opacity="0.2" />
              <line x1={TX(-10) - 8} y1={TLY} x2={TX(10) + 8} y2={TLY} stroke={INK} strokeWidth="2.5" />
              {Array.from({ length: 21 }, (_, i) => {
                const v = i - 10;
                return (
                  <g key={v}>
                    <line x1={TX(v)} y1={TLY - 7} x2={TX(v)} y2={TLY + 7} stroke={v === 0 ? INK : MUTED} strokeWidth={v === 0 ? 3 : 1.8} />
                    {(v % 2 === 0 || Math.abs(v) < 2) && (
                      <text x={TX(v)} y={TLY + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill={v < 0 ? COLD : v > 0 ? WARM : INK}>
                        {minus(v)}
                      </text>
                    )}
                  </g>
                );
              })}
              {/* start flag */}
              <g transform={`translate(${TX(r.start)} ${TLY})`}>
                <line x1="0" y1="0" x2="0" y2="-62" stroke={INK} strokeWidth="2" />
                <path d="M 0 -62 L 18 -56 L 0 -50 Z" fill="#f59e0b" />
                <text x="0" y="-68" textAnchor="middle" fontSize="11" fontWeight="900" fill={INK}>
                  start
                </text>
              </g>
              {/* hop arcs */}
              {hops > 0 &&
                Array.from({ length: Math.min(hops, n) }, (_, k) => {
                  const a = TX(r.start + dir * k);
                  const b = TX(r.start + dir * (k + 1));
                  return <motion.path key={k} d={`M ${a} ${TLY - 2} Q ${(a + b) / 2} ${TLY - 30} ${b} ${TLY - 2}`} fill="none" stroke={dir > 0 ? WARM : COLD} strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.25 }} />;
                })}
              {hops >= 0 && <motion.circle r="6" cy={TLY} fill={dir > 0 ? WARM : COLD} animate={{ cx: TX(ghost) }} transition={{ duration: 0.25 }} />}
              <motion.g animate={{ x: TX(pos), y: TLY - 2 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
                <circle cx="0" cy="-12" r="24" fill="transparent" />
                <Frog s={1.1} />
              </motion.g>
            </g>
          </Svg>
        </div>
        <div className="mx-auto w-[88px]">
          <Svg label={`Thermometer showing ${minus(pos)} degrees`} vb="0 0 88 250" maxH={230}>
            <rect x="24" y="12" width="22" height="206" rx="11" fill="white" stroke={INK} strokeWidth="2.5" />
            <motion.rect x="30" width="10" rx="5" fill={pos < 0 ? COLD : WARM} animate={{ y: 120 - pos * 9.5, height: 230 - (120 - pos * 9.5) }} transition={{ type: "spring", stiffness: 200, damping: 25 }} />
            <circle cx="35" cy="228" r="15" fill={pos < 0 ? COLD : WARM} stroke={INK} strokeWidth="2.5" />
            {[-10, -5, 0, 5, 10].map((t) => (
              <g key={t}>
                <line x1="48" y1={120 - t * 9.5} x2="58" y2={120 - t * 9.5} stroke={INK} strokeWidth="1.8" />
                <text x="60" y={124 - t * 9.5} fontSize="11" fontWeight="800" fill={t < 0 ? COLD : t > 0 ? WARM : INK}>
                  {minus(t)}
                </text>
              </g>
            ))}
          </Svg>
          <p className="text-center font-mono text-lg font-black" style={{ color: pos < 0 ? COLD : WARM }}>
            {minus(pos)} °C
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Pad onClick={() => setPos((p) => Math.max(-10, p - 1))} color={COLD} disabled={hops >= 0} label="Move one colder">
          ❄️ −1 colder
        </Pad>
        <Pad onClick={() => setPos((p) => Math.min(10, p + 1))} color={WARM} disabled={hops >= 0} label="Move one warmer">
          ☀️ +1 warmer
        </Pad>
        <Pad onClick={() => setHops(0)} color={C} solid disabled={hops >= 0}>
          Check my answer
        </Pad>
        {done && !correct && (
          <Pad onClick={() => setHops(-1)} color={C}>
            Try again
          </Pad>
        )}
        {done && (
          <Pad onClick={() => goTo((round + 1) % ROUNDS.length)} color={C} solid>
            Next puzzle →
          </Pad>
        )}
      </div>
      <div className="mt-3">
        {!done && hops < 0 && (
          <Feedback tone="info" k={`i${round}`}>
            Colder means hop to the left; warmer means hop to the right. Remember: zero isn&apos;t the end of the line!
          </Feedback>
        )}
        {hops >= 0 && !done && (
          <Feedback tone="info" k="hopping">
            Hopping {n} {dir > 0 ? "to the right (warmer)" : "to the left (colder)"} from {minus(r.start)}…
          </Feedback>
        )}
        {done && correct && (
          <Feedback tone="good" k={`g${round}`}>
            Yes! {minus(r.start)} {r.change > 0 ? "+" : "−"} {n} = {minus(target)}. {r.start > 0 && target < 0 ? `You went ${r.start} down to zero, then ${-target} more below.` : "Nice hopping!"}
          </Feedback>
        )}
        {done && !correct && (
          <Feedback tone="bad" k={`b${round}`}>
            Not quite: the hops land on {minus(target)}, but your frog is on {minus(pos)}. {minus(r.start)} {r.change > 0 ? "+" : "−"} {n} = {minus(target)}.
          </Feedback>
        )}
      </div>
    </TryShell>
  );
}

/* ---------------- Story + analogy art ---------------- */

function Pond({ frozen }: { frozen?: boolean }) {
  return <ellipse cx="170" cy="146" rx="62" ry="10" fill={frozen ? "#bfdbfe" : "#60a5fa"} stroke={frozen ? "#93c5fd" : "#2563eb"} strokeWidth="2" />;
}

function MiniThermo({ x, y, t }: { x: number; y: number; t: number }) {
  const h = 50 + t * 4;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-6" y="-100" width="12" height="96" rx="6" fill="white" stroke={DARK} strokeWidth="2" />
      <rect x="-3" y={-4 - h} width="6" height={h} rx="3" fill={t < 0 ? COLD : WARM} />
      <circle cx="0" cy="0" r="9" fill={t < 0 ? COLD : WARM} stroke={DARK} strokeWidth="2" />
      <line x1="6" y1="-54" x2="14" y2="-54" stroke={DARK} strokeWidth="2" />
      <text x="16" y="-50" fontSize="10" fontWeight="900" fill={DARK}>
        0
      </text>
      <text x="0" y="20" textAnchor="middle" fontSize="13" fontWeight="900" fill={t < 0 ? COLD : WARM}>
        {minus(t)}°
      </text>
    </g>
  );
}

const story = [
  {
    art: (
      <Svg label="Maya by a pond on a sunny day, thermometer at 4 degrees" vb="0 0 240 160" maxH={170}>
        <Ground />
        <Pond />
        <Kid x={60} y={140} shirt="#f97316" longHair hair="#7c2d12" pose="wave" />
        <MiniThermo x={215} y={128} t={4} />
      </Svg>
    ),
    speech: "Only 4 degrees!",
    caption: "In the afternoon the thermometer by the pond reads 4 °C.",
  },
  {
    art: (
      <Svg label="Night time, snow falling, thermometer at 0" vb="0 0 240 160" maxH={170}>
        <rect width="240" height="160" fill="#1e293b" />
        <circle cx="40" cy="30" r="14" fill="#fef9c3" />
        <rect y="140" width="240" height="20" fill="#e2e8f0" />
        <Pond frozen />
        {[30, 90, 140, 200, 120].map((sx, i) => (
          <text key={i} x={sx} y={60 + (i % 3) * 25} fontSize="14">
            ❄️
          </text>
        ))}
        <MiniThermo x={215} y={128} t={0} />
      </Svg>
    ),
    caption: "As night falls it gets 4 degrees colder. Now it is 0 °C and the pond starts to freeze.",
  },
  {
    art: (
      <Svg label="Leo surprised, thermometer below zero at minus 3" vb="0 0 240 160" maxH={170}>
        <rect width="240" height="160" fill="#e0f2fe" />
        <rect y="140" width="240" height="20" fill="#f1f5f9" />
        <Pond frozen />
        <Kid x={70} y={140} shirt="#22c55e" mood="surprised" />
        <MiniThermo x={215} y={128} t={-3} />
      </Svg>
    ),
    speech: "Below zero?!",
    caption: "By morning it is 3 degrees colder still: −3 °C. Zero isn't the bottom — the numbers keep going.",
  },
  {
    art: (
      <Svg label="Maya and Leo skating on the frozen pond with a number line" vb="0 0 240 160" maxH={170}>
        <rect width="240" height="160" fill="#f0f9ff" />
        <line x1="20" y1="150" x2="220" y2="150" stroke={DARK} strokeWidth="2" />
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((v) => (
          <g key={v}>
            <line x1={120 + v * 22} y1="145" x2={120 + v * 22} y2="155" stroke={DARK} strokeWidth="1.5" />
            <text x={120 + v * 22} y="134" textAnchor="middle" fontSize="10" fontWeight="900" fill={v < 0 ? COLD : v > 0 ? WARM : DARK}>
              {minus(v)}
            </text>
          </g>
        ))}
        <path d={`M ${120 + 4 * 22} 120 Q ${120 + 0.5 * 22} 70 ${120 - 3 * 22} 120`} fill="none" stroke={COLD} strokeWidth="2.5" strokeDasharray="5 4" />
        <Kid x={45} y={118} s={0.8} shirt="#f97316" longHair hair="#7c2d12" pose="cheer" />
        <Kid x={200} y={118} s={0.8} shirt="#22c55e" pose="point" flip />
      </Svg>
    ),
    speech: "4 − 7 = −3!",
    caption: "Leo draws it as a line: from 4, go 7 steps colder and you pass zero to land on −3.",
  },
];

const like = {
  headline: "Negative numbers are like floors below ground in a lift.",
  everyday: {
    label: "A lift with basement floors",
    art: (
      <Svg label="A building with floors above ground and basement floors below, and a lift" vb="0 0 200 170" maxH={170}>
        <rect x="0" y="92" width="200" height="78" fill="#d6c3a5" />
        <line x1="0" y1="92" x2="200" y2="92" stroke="#15803d" strokeWidth="4" />
        <rect x="50" y="12" width="100" height="150" fill="white" stroke={DARK} strokeWidth="2" />
        {[3, 2, 1, 0, -1, -2].map((f, i) => (
          <g key={f}>
            <line x1="50" y1={12 + i * 25} x2="150" y2={12 + i * 25} stroke={DARK} strokeWidth="1" />
            <text x="62" y={30 + i * 25} fontSize="13" fontWeight="900" fill={f < 0 ? COLD : f > 0 ? WARM : DARK}>
              {f === 0 ? "G" : minus(f)}
            </text>
          </g>
        ))}
        <rect x="110" y={12 + 4 * 25 + 3} width="26" height="19" rx="3" fill="#facc15" stroke={DARK} strokeWidth="1.5" />
        <text x="170" y="86" fontSize="11" fontWeight="800" fill={DARK}>
          ground
        </text>
      </Svg>
    ),
  },
  concept: {
    label: "A number line standing up",
    art: (
      <Svg label="A vertical number line from 3 down to minus 2" vb="0 0 200 170" maxH={170}>
        <line x1="100" y1="10" x2="100" y2="160" stroke={DARK} strokeWidth="3" />
        {[3, 2, 1, 0, -1, -2].map((v, i) => (
          <g key={v}>
            <line x1="92" y1={20 + i * 26} x2="108" y2={20 + i * 26} stroke={DARK} strokeWidth="2" />
            <text x="116" y={25 + i * 26} fontSize="14" fontWeight="900" fill={v < 0 ? COLD : v > 0 ? WARM : DARK}>
              {minus(v)}
            </text>
          </g>
        ))}
        <path d="M 80 46 L 80 120" stroke={COLD} strokeWidth="2.5" markerEnd="url(#nn-down)" />
        <text x="74" y="88" textAnchor="end" fontSize="11" fontWeight="800" fill={COLD}>
          2 − 3
        </text>
        <defs>
          <marker id="nn-down" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={COLD} />
          </marker>
        </defs>
      </Svg>
    ),
  },
  pairs: [
    ["Ground floor (G)", "Zero"],
    ["Floors above ground", "Positive numbers"],
    ["Basement floors (−1, −2…)", "Negative numbers"],
    ["Going down 3 floors from floor 2", "2 − 3 = −1"],
  ] as [string, string][],
  limits:
    "A lift explains adding and subtracting well, and why −2 is lower than −1. It doesn't explain multiplying negatives (why −2 × −3 = +6) — for that, think of “the opposite of the opposite”. And unlike floors, numbers include all the fractions in between, like −1.5.",
};

export const negativeNumbers: Explainer = {
  id: "negative-numbers",
  title: "Going below zero: negative numbers",
  tagline: "See where numbers go when you count backwards past zero.",
  area: "Maths",
  ages: "9–14",
  lessons: ["math-middle/integers/meet-the-integers", "math-middle/integers/integer-operations"],
  color: C,
  icon: "🌡️",
  watch: [
    { title: "Counting starts at zero", say: "Counting numbers start at zero and go to the right: 1, 2, 3. But what is on the other side of zero?", scene: <SceneCounting /> },
    { title: "The other side of zero", say: "Numbers less than zero are called negative numbers. We write them with a minus sign: −1, −2, −3, and so on.", scene: <SceneOtherSide /> },
    { title: "A thermometer is a number line standing up", say: "When it's 3 degrees and it gets 7 degrees colder, the temperature drops past zero and lands on −4 degrees.", scene: <SceneThermometer /> },
    { title: "Plus hops right, minus hops left", say: "To work out −2 + 5, start at −2 and hop 5 steps to the right. You land on 3.", scene: <SceneHop /> },
    { title: "Further left means smaller", say: "−4 is further left than −1, so −4 is the smaller number. Just like −4 °C is colder than −1 °C.", scene: <SceneCompare /> },
    { title: "Taking away a negative", say: "Taking away a negative is like taking ice cubes out of a drink: it gets warmer! So 3 − (−2) = 5.", scene: <SceneTakeNegative /> },
  ],
  try: NegativeTry,
  story,
  like,
};
