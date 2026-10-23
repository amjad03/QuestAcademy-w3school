"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { fmt, useFrame } from "@/components/widgets/_shared";
import { DARK, Feedback, Ground, INK, Kid, MUTED, Pad, Svg, TryShell } from "./_kit";

const C = "#EF4444";
const G = 9.8;
// ease that follows distance ∝ t² (constant acceleration from rest)
const FALL: [number, number, number, number] = [0.55, 0.085, 0.68, 0.53];
const fallT = (dur: number, delay = 0, repeatDelay = 1.2) => ({ duration: dur, ease: FALL, delay, repeat: Infinity, repeatDelay });

/* ---------------- object art (centred on 0,0) ---------------- */

type ObjId = "bowling" | "apple" | "hammer" | "crumpled" | "sheet" | "feather";

function ObjArt({ id, ink = INK }: { id: ObjId; ink?: string }) {
  switch (id) {
    case "bowling":
      return (
        <g>
          <circle r="16" fill="#1e293b" stroke={ink} strokeWidth="2" />
          <circle cx="-5" cy="-6" r="2.5" fill="#64748b" />
          <circle cx="3" cy="-8" r="2.5" fill="#64748b" />
          <circle cx="-1" cy="0" r="2.5" fill="#64748b" />
        </g>
      );
    case "apple":
      return (
        <g>
          <circle r="11" fill="#ef4444" stroke={ink} strokeWidth="1.8" />
          <path d="M 0 -11 L 1 -16" stroke="#78350f" strokeWidth="2" />
          <ellipse cx="5" cy="-15" rx="4" ry="2" fill="#22c55e" />
        </g>
      );
    case "hammer":
      return (
        <g>
          <rect x="-3" y="-4" width="6" height="26" rx="2" fill="#b45309" stroke={ink} strokeWidth="1.5" />
          <rect x="-14" y="-14" width="28" height="11" rx="2" fill="#64748b" stroke={ink} strokeWidth="1.8" />
        </g>
      );
    case "crumpled":
      return <path d="M -9 -7 L -2 -11 L 6 -8 L 10 -1 L 7 8 L -1 10 L -8 7 L -10 0 Z" fill="#f1f5f9" stroke={ink} strokeWidth="1.8" strokeLinejoin="round" />;
    case "sheet":
      return <rect x="-20" y="-2" width="40" height="4" rx="1" fill="#f8fafc" stroke={ink} strokeWidth="1.5" />;
    case "feather":
      return (
        <g transform="rotate(-25)">
          <path d="M 0 -20 C 10 -12, 10 8, 0 20 C -10 8, -10 -12, 0 -20 Z" fill="#e0e7ff" stroke={ink} strokeWidth="1.5" />
          <line x1="0" y1="-20" x2="0" y2="26" stroke={ink} strokeWidth="1.5" />
          {[-10, -3, 4, 11].map((y) => (
            <g key={y}>
              <line x1="0" y1={y} x2="6" y2={y - 5} stroke={ink} strokeWidth="0.8" />
              <line x1="0" y1={y} x2="-6" y2={y - 5} stroke={ink} strokeWidth="0.8" />
            </g>
          ))}
        </g>
      );
  }
}

/* ---------------- watch scenes ---------------- */

function Arrow({ x1, y1, x2, y2, color = C, w = 3, id }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number; id: string }) {
  return (
    <>
      <defs>
        <marker id={id} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={color} />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} markerEnd={`url(#${id})`} />
    </>
  );
}

function SceneEarth() {
  const cx = 200;
  const cy = 140;
  const top = cy - 72;
  return (
    <Svg label="Earth with arrows from all around pointing to its centre; an apple falls from a tree">
      <circle cx={cx} cy={cy} r="72" fill="#3b82f6" stroke={INK} strokeWidth="2.5" />
      <path d="M 155 105 Q 178 88 200 105 Q 214 120 196 134 Q 172 144 163 130 Z M 214 158 Q 236 150 246 172 Q 232 190 214 182 Z" fill="#22c55e" />
      {[0, 45, 135, 180, 225, 315, 90].map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        return (
          <motion.g key={deg} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.12 }}>
            <Arrow x1={cx + Math.cos(a) * 116} y1={cy + Math.sin(a) * 116} x2={cx + Math.cos(a) * 84} y2={cy + Math.sin(a) * 84} id={`gf-e${i}`} />
          </motion.g>
        );
      })}
      <circle cx={cx} cy={cy} r="4" fill={INK} />
      <text x={cx} y={cy + 22} textAnchor="middle" fontSize="12" fontWeight="900" fill="white">
        centre
      </text>
      {/* little tree on top with an apple falling */}
      <rect x={cx - 3} y={top - 20} width="6" height="21" fill="#92400e" />
      <circle cx={cx} cy={top - 28} r="15" fill="#16a34a" />
      <motion.g initial={{ y: 0 }} animate={{ y: [0, 18] }} transition={fallT(0.5, 1, 1.5)}>
        <g transform={`translate(${cx + 12} ${top - 22}) scale(0.5)`}>
          <ObjArt id="apple" />
        </g>
      </motion.g>
      <text x="20" y="34" fontSize="16" fontWeight="900" fill={C}>
        gravity
      </text>
      <text x="20" y="52" fontSize="12" fontWeight="800" fill={MUTED}>
        pulls everything
      </text>
      <text x="20" y="67" fontSize="12" fontWeight="800" fill={MUTED}>
        towards the centre
      </text>
    </Svg>
  );
}

function DropPair({ left, right, durL, durR, ground = 222, top = 52, swayR = false, air = false, rep = 1.4 }: { left: ObjId; right: ObjId; durL: number; durR: number; ground?: number; top?: number; swayR?: boolean; air?: boolean; rep?: number }) {
  const maxD = Math.max(durL, durR);
  return (
    <g>
      <line x1="40" y1={ground + 14} x2="360" y2={ground + 14} stroke={INK} strokeWidth="3" />
      <motion.g initial={{ y: top }} animate={{ y: [top, ground] }} transition={{ ...fallT(durL, 0.6, rep + maxD - durL) }}>
        <g transform="translate(130 0)">
          <ObjArt id={left} />
        </g>
      </motion.g>
      <motion.g
        initial={{ y: top, x: 0 }}
        animate={swayR ? { y: [top, ground], x: [0, 14, -12, 12, -8, 0] } : { y: [top, ground] }}
        transition={swayR ? { y: { duration: durR, ease: "linear", delay: 0.6, repeat: Infinity, repeatDelay: rep + maxD - durR }, x: { duration: durR, ease: "easeInOut", delay: 0.6, repeat: Infinity, repeatDelay: rep + maxD - durR } } : fallT(durR, 0.6, rep + maxD - durR)}
      >
        <g transform="translate(270 0)">
          <ObjArt id={right} />
          {air && (
            <g opacity="0.8">
              <Arrow x1={-10} y1={42} x2={-10} y2={22} color="#0ea5e9" w={2.5} id="gf-air1" />
              <Arrow x1={10} y1={42} x2={10} y2={22} color="#0ea5e9" w={2.5} id="gf-air2" />
            </g>
          )}
        </g>
      </motion.g>
    </g>
  );
}

function SceneSameTime() {
  return (
    <Svg label="A heavy bowling ball and a light tennis ball are dropped together and land at the same time">
      <DropPair left="bowling" right="apple" durL={1} durR={1} />
      <text x="130" y="24" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>
        heavy: 7 kg
      </text>
      <text x="270" y="24" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>
        light: 0.1 kg
      </text>
      <motion.text x="200" y="140" textAnchor="middle" fontSize="20" fontWeight="900" fill={C} animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 2.4, times: [0, 0.65, 0.7, 0.95, 1], repeat: Infinity, delay: 0 }}>
        tie!
      </motion.text>
    </Svg>
  );
}

function SceneStrobe() {
  const ys = [1, 2, 3, 4, 5, 6].map((t) => 24 + 6 * (t * t - 1) + 6);
  return (
    <Svg label="Snapshots of a falling ball taken at equal times: the gaps get bigger because it speeds up">
      {ys.map((y, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: i === 5 ? 1 : 0.55 }} transition={{ delay: 0.3 + i * 0.45 }}>
          <circle cx="160" cy={y} r="12" fill={C} stroke={INK} strokeWidth="2" />
          <text x="190" y={y + 5} fontSize="13" fontWeight="900" fill={INK}>
            {fmt((i + 1) * 0.1, 1)} s
          </text>
          <text x="248" y={y + 5} fontSize="13" fontWeight="800" fill={C}>
            ≈ {i + 1} m/s
          </text>
          {i > 0 && <line x1="120" y1={ys[i - 1]} x2="120" y2={y} stroke={MUTED} strokeWidth="2" />}
          {i > 0 && <line x1="114" y1={y} x2="126" y2={y} stroke={MUTED} strokeWidth="2" />}
        </motion.g>
      ))}
      <text x="60" y="170" textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
        gaps
      </text>
      <text x="60" y="186" textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
        grow
      </text>
      <text x="60" y="40" textAnchor="middle" fontSize="13" fontWeight="900" fill={INK}>
        speeds up
      </text>
      <text x="60" y="58" textAnchor="middle" fontSize="13" fontWeight="900" fill={C}>
        +1 m/s
      </text>
      <text x="60" y="76" textAnchor="middle" fontSize="13" fontWeight="900" fill={INK}>
        every 0.1 s
      </text>
    </Svg>
  );
}

function SceneAir() {
  return (
    <Svg label="In air, a hammer falls quickly while a feather drifts down slowly, held back by air resistance">
      {Array.from({ length: 30 }, (_, i) => (
        <circle key={i} cx={50 + ((i * 97) % 300)} cy={40 + ((i * 53) % 180)} r="2" fill="#7dd3fc" opacity="0.7" />
      ))}
      <DropPair left="hammer" right="feather" durL={0.9} durR={4} swayR air />
      <text x="130" y="24" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>
        hammer
      </text>
      <text x="270" y="24" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>
        feather
      </text>
      <text x="345" y="150" textAnchor="middle" fontSize="12" fontWeight="900" fill="#0ea5e9">
        air pushes
      </text>
      <text x="345" y="166" textAnchor="middle" fontSize="12" fontWeight="900" fill="#0ea5e9">
        up
      </text>
    </Svg>
  );
}

function Astronaut({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <Kid x={x} y={y} shirt="#f1f5f9" hair="#f1f5f9" skin="#fde68a" pose="hold" s={0.9} />
      <circle cx={x} cy={y - 65} r="19" fill="#93c5fd" opacity="0.35" stroke="#e2e8f0" strokeWidth="3" />
    </g>
  );
}

function SceneMoon() {
  return (
    <Svg label="On the Moon, with no air, an astronaut drops a hammer and a feather and they land together">
      <rect x="0" y="0" width="400" height="260" rx="12" fill="#0f172a" />
      {Array.from({ length: 24 }, (_, i) => (
        <circle key={i} cx={(i * 83) % 400} cy={(i * 41) % 120} r="1.3" fill="white" opacity="0.8" />
      ))}
      <circle cx="350" cy="40" r="18" fill="#3b82f6" />
      <path d="M 340 34 Q 350 28 356 38 Q 350 46 342 42 Z" fill="#22c55e" />
      <rect x="0" y="236" width="400" height="24" fill="#94a3b8" />
      <ellipse cx="80" cy="244" rx="20" ry="4" fill="#64748b" />
      <Astronaut x={200} y={236} />
      <motion.g initial={{ y: 120 }} animate={{ y: [120, 222] }} transition={fallT(1.6, 0.6, 1.2)}>
        <g transform="translate(150 0)">
          <ObjArt id="hammer" ink="#e2e8f0" />
        </g>
      </motion.g>
      <motion.g initial={{ y: 120 }} animate={{ y: [120, 222] }} transition={fallT(1.6, 0.6, 1.2)}>
        <g transform="translate(250 0)">
          <ObjArt id="feather" ink="#1e293b" />
        </g>
      </motion.g>
      <text x="20" y="30" fontSize="14" fontWeight="900" fill="white">
        On the Moon: no air
      </text>
      <text x="20" y="50" fontSize="12" fontWeight="800" fill="#cbd5e1">
        Apollo 15, 1971
      </text>
    </Svg>
  );
}

function Block({ x, m, n }: { x: number; m: number; n: number }) {
  const w = 40 + m * 14;
  return (
    <g>
      <rect x={x - w / 2} y={110 - w / 2} width={w} height={w} rx="6" fill="#cbd5e1" stroke={INK} strokeWidth="2.5" />
      <text x={x} y={116} textAnchor="middle" fontSize="16" fontWeight="900" fill="#1c2333">
        {m} kg
      </text>
      {Array.from({ length: n }, (_, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.3 }}>
          <Arrow x1={x - (n - 1) * 9 + i * 18} y1={110 + w / 2} x2={x - (n - 1) * 9 + i * 18} y2={110 + w / 2 + 44} id={`gf-b${m}${i}`} />
        </motion.g>
      ))}
      <text x={x} y={110 + w / 2 + 76} textAnchor="middle" fontSize="13" fontWeight="900" fill={C}>
        pull = {m * 10} N
      </text>
      <motion.text x={x} y={36} textAnchor="middle" fontSize="13" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        {m * 10} N ÷ {m} kg = 10 m/s²
      </motion.text>
    </g>
  );
}

function SceneWhy() {
  return (
    <Svg label="A 1 kilogram block feels a 10 newton pull and a 2 kilogram block feels 20 newtons; both accelerate at 10 metres per second squared">
      <Block x={110} m={1} n={1} />
      <Block x={290} m={2} n={2} />
      <motion.text x="200" y="252" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        double the pull, double the mass → same speeding-up
      </motion.text>
    </Svg>
  );
}

/* ---------------- Try: drop lab ---------------- */

const OBJS: { id: ObjId; name: string; mass: string; vt: number }[] = [
  { id: "bowling", name: "Bowling ball", mass: "7 kg", vt: 90 },
  { id: "hammer", name: "Hammer", mass: "1 kg", vt: 45 },
  { id: "apple", name: "Apple", mass: "100 g", vt: 25 },
  { id: "crumpled", name: "Paper ball", mass: "5 g", vt: 5 },
  { id: "sheet", name: "Flat paper", mass: "5 g", vt: 1.2 },
  { id: "feather", name: "Feather", mass: "0.5 g", vt: 0.8 },
];
const H = 2; // metres

/** Distance fallen after time t (metres), with quadratic air drag (terminal speed vt) or none. */
function fallen(t: number, vt: number, air: boolean) {
  if (!air) return 0.5 * G * t * t;
  return ((vt * vt) / G) * Math.log(Math.cosh((G * t) / vt));
}
function landTime(vt: number, air: boolean) {
  if (!air) return Math.sqrt((2 * H) / G);
  return (vt / G) * Math.acosh(Math.exp((H * G) / (vt * vt)));
}

function GravityTry() {
  const [l, setL] = useState<ObjId>("bowling");
  const [r, setR] = useState<ObjId>("feather");
  const [air, setAir] = useState(true);
  const [slow, setSlow] = useState(true);
  const [t, setT] = useState(0);
  const [running, setRunning] = useState(false);
  const oL = OBJS.find((o) => o.id === l)!;
  const oR = OBJS.find((o) => o.id === r)!;
  const tL = landTime(oL.vt, air);
  const tR = landTime(oR.vt, air);
  const tEnd = Math.max(tL, tR);
  const factor = slow ? 0.35 : 1;

  useFrame((dt) => {
    setT((x) => {
      const nx = x + dt * factor;
      if (nx >= tEnd) {
        setRunning(false);
        return tEnd;
      }
      return nx;
    });
  }, running);

  const dropped = t > 0;
  const finished = dropped && !running && t >= tEnd - 1e-9;
  const TOP = 40;
  const BOT = 250;
  const yOf = (o: (typeof OBJS)[number]) => TOP + (Math.min(H, fallen(t, o.vt, air)) / H) * (BOT - TOP);
  const sway = (o: (typeof OBJS)[number], tl: number) => (air && o.vt < 2 && t < tl ? Math.sin(t * 7) * 10 : 0);

  const stop = () => {
    setRunning(false);
    setT(0);
  };
  const drop = () => {
    setT(0);
    setRunning(true);
  };
  const pick = (side: "L" | "R", id: ObjId) => {
    stop();
    if (side === "L") setL(id);
    else setR(id);
  };

  let msg: { tone: "good" | "info" | "warn"; text: string } = { tone: "info", text: "Pick two things, choose air or no air, then press Drop!" };
  if (finished) {
    const diff = Math.abs(tL - tR);
    const paperPair = (l === "crumpled" && r === "sheet") || (l === "sheet" && r === "crumpled");
    if (!air) msg = { tone: "good", text: `No air: both took ${fmt(tL, 2)} s — exactly the same, even though one is ${oL.mass} and the other ${oR.mass}!` };
    else if (paperPair) msg = { tone: "good", text: `Same paper, same mass — only the shape changed. The flat sheet took ${fmt(Math.max(tL, tR) - Math.min(tL, tR), 2)} s longer. So it's the air, not the weight!` };
    else if (diff < 0.03) msg = { tone: "good", text: `Almost a tie (${fmt(tL, 2)} s vs ${fmt(tR, 2)} s). Air barely slows heavy, compact things over a short drop.` };
    else {
      const slower = tL > tR ? oL : oR;
      msg = { tone: "warn", text: `The ${slower.name.toLowerCase()} took longer because air pushes up on it a lot compared with its weight. Now try it with no air!` };
    }
  } else if (running) msg = { tone: "info", text: "Falling…" };

  const Chip = ({ side, o }: { side: "L" | "R"; o: (typeof OBJS)[number] }) => {
    const active = (side === "L" ? l : r) === o.id;
    return (
      <button type="button" onClick={() => pick(side, o.id)} aria-pressed={active} className="min-h-[44px] rounded-xl border-2 px-2.5 text-[13px] font-extrabold transition active:scale-95" style={active ? { background: C, borderColor: C, color: "white" } : { borderColor: "rgb(var(--line))" }}>
        {o.name}
      </button>
    );
  };

  return (
    <TryShell title="Drop lab" hint="Drop two things from 2 metres. Does the heavier one always win?" onReset={() => { stop(); setL("bowling"); setR("feather"); setAir(true); setSlow(true); }}>
      <div className="grid gap-3 md:grid-cols-[1fr_1.1fr]">
        <div className="rounded-2xl border-2 border-line p-1">
          <Svg label={`Drop tubes. Left: ${oL.name}. Right: ${oR.name}. ${air ? "With air." : "No air."}`} vb="0 0 300 290" maxH={340}>
            <rect x="0" y="0" width="300" height="290" rx="12" fill={air ? "rgba(125, 211, 252, 0.12)" : "rgba(15, 23, 42, 0.85)"} />
            {air && Array.from({ length: 26 }, (_, i) => <circle key={i} cx={20 + ((i * 89) % 260)} cy={30 + ((i * 47) % 230)} r="2" fill="#7dd3fc" opacity="0.6" />)}
            {[0, 0.5, 1, 1.5, 2].map((m) => (
              <g key={m}>
                <line x1="138" y1={TOP + (m / H) * (BOT - TOP)} x2="162" y2={TOP + (m / H) * (BOT - TOP)} stroke={air ? MUTED : "#94a3b8"} strokeWidth="1.5" />
                <text x="150" y={TOP + (m / H) * (BOT - TOP) - 4} textAnchor="middle" fontSize="10" fontWeight="800" fill={air ? MUTED : "#cbd5e1"}>
                  {m} m
                </text>
              </g>
            ))}
            <rect x="0" y={BOT + 14} width="300" height="26" fill={air ? "#86efac" : "#94a3b8"} />
            <g transform={`translate(${75 + sway(oL, tL)} ${yOf(oL)})`}>
              <ObjArt id={l} ink={air ? INK : "#e2e8f0"} />
            </g>
            <g transform={`translate(${225 + sway(oR, tR)} ${yOf(oR)})`}>
              <ObjArt id={r} ink={air ? INK : "#e2e8f0"} />
            </g>
            <text x="75" y="22" textAnchor="middle" fontSize="12" fontWeight="900" fill={air ? INK : "white"}>
              {oL.name} · {oL.mass}
            </text>
            <text x="225" y="22" textAnchor="middle" fontSize="12" fontWeight="900" fill={air ? INK : "white"}>
              {oR.name} · {oR.mass}
            </text>
            {dropped && t >= tL && (
              <text x="75" y={BOT + 32} textAnchor="middle" fontSize="13" fontWeight="900" fill="#1c2333">
                {fmt(tL, 2)} s
              </text>
            )}
            {dropped && t >= tR && (
              <text x="225" y={BOT + 32} textAnchor="middle" fontSize="13" fontWeight="900" fill="#1c2333">
                {fmt(tR, 2)} s
              </text>
            )}
          </Svg>
          <p className="px-2 pb-1 text-right font-mono text-sm font-bold text-muted">t = {fmt(t, 2)} s{slow ? " (slow motion)" : ""}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-wide text-muted">Left hand</p>
            <div className="flex flex-wrap gap-1.5">
              {OBJS.map((o) => (
                <Chip key={o.id} side="L" o={o} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-wide text-muted">Right hand</p>
            <div className="flex flex-wrap gap-1.5">
              {OBJS.map((o) => (
                <Chip key={o.id} side="R" o={o} />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Pad onClick={() => { stop(); setAir(true); }} color="#0ea5e9" solid={air}>
              🌍 Air (Earth)
            </Pad>
            <Pad onClick={() => { stop(); setAir(false); }} color="#475569" solid={!air}>
              🌑 No air (vacuum)
            </Pad>
            <Pad onClick={() => setSlow((s) => !s)} color="#64748b" solid={slow}>
              🐢 Slow-mo
            </Pad>
          </div>
          <Pad onClick={drop} color={C} solid disabled={running} className="text-base">
            {dropped ? "Drop again!" : "Drop!"}
          </Pad>
          <Feedback tone={msg.tone} k={msg.text}>
            {msg.text}
          </Feedback>
        </div>
      </div>
    </TryShell>
  );
}

/* ---------------- Story + analogy ---------------- */

function Treehouse() {
  return (
    <>
      <Ground />
      <rect x="150" y="40" width="12" height="100" fill="#92400e" />
      <rect x="120" y="40" width="90" height="10" fill="#b45309" stroke={DARK} strokeWidth="1.5" />
    </>
  );
}

const story = [
  {
    art: (
      <Svg label="Leo holds a big ball and a small ball" vb="0 0 240 160" maxH={170}>
        <Ground />
        <Kid x={80} y={140} shirt="#22c55e" pose="hold" />
        <g transform="translate(62 100) scale(0.8)">
          <ObjArt id="bowling" ink={DARK} />
        </g>
        <g transform="translate(100 102) scale(0.8)">
          <ObjArt id="apple" ink={DARK} />
        </g>
      </Svg>
    ),
    speech: "Heavy wins, obviously!",
    caption: "Leo is sure that heavy things fall faster than light things.",
  },
  {
    art: (
      <Svg label="Both balls hit the ground at the same moment below the treehouse" vb="0 0 240 160" maxH={170}>
        <Treehouse />
        <Kid x={175} y={40} s={0.5} shirt="#22c55e" mood="surprised" />
        <g transform="translate(140 132) scale(0.6)">
          <ObjArt id="bowling" ink={DARK} />
        </g>
        <g transform="translate(190 134) scale(0.6)">
          <ObjArt id="apple" ink={DARK} />
        </g>
        <path d="M 126 120 L 120 112 M 204 120 L 210 112" stroke={DARK} strokeWidth="2" />
      </Svg>
    ),
    speech: "A tie?!",
    caption: "He drops the bowling ball and an apple from the treehouse. Thud! They land at the same moment.",
  },
  {
    art: (
      <Svg label="Maya drops a feather which drifts down slowly" vb="0 0 240 160" maxH={170}>
        <Treehouse />
        <Kid x={175} y={40} s={0.5} shirt="#f97316" longHair hair="#7c2d12" pose="hold" />
        <path d="M 150 60 Q 120 75 150 90 Q 180 100 150 112" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
        <g transform="translate(150 112) scale(0.7)">
          <ObjArt id="feather" ink={DARK} />
        </g>
      </Svg>
    ),
    speech: "Then why is the feather slow?",
    caption: "Maya drops a feather. It drifts down slowly, because the air pushes up against it.",
  },
  {
    art: (
      <Svg label="A crumpled paper ball lands while a flat sheet of the same paper is still floating" vb="0 0 240 160" maxH={170}>
        <Ground />
        <Kid x={50} y={140} shirt="#f97316" longHair hair="#7c2d12" pose="cheer" />
        <g transform="translate(130 134) scale(0.8)">
          <ObjArt id="crumpled" ink={DARK} />
        </g>
        <g transform="translate(190 70) rotate(12) scale(0.9)">
          <ObjArt id="sheet" ink={DARK} />
        </g>
      </Svg>
    ),
    speech: "Same paper — it's the air!",
    caption: "She drops two identical sheets, one crumpled up. Same weight, but the crumpled one lands first: air makes the difference.",
  },
];

function Cart({ x, y, w, kids, label }: { x: number; y: number; w: number; kids: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y - 26} width={w} height="26" rx="4" fill="#fca5a5" stroke={DARK} strokeWidth="2" />
      <text x={x + w / 2} y={y - 9} textAnchor="middle" fontSize="11" fontWeight="900" fill={DARK}>
        {label}
      </text>
      <circle cx={x + 10} cy={y + 4} r="6" fill="#334155" />
      <circle cx={x + w - 10} cy={y + 4} r="6" fill="#334155" />
      {Array.from({ length: kids }, (_, i) => (
        <Kid key={i} x={x - 14 - i * 22} y={y + 10} s={0.42} shirt={i ? "#22c55e" : "#f97316"} pose="point" />
      ))}
    </g>
  );
}

const like = {
  headline: "Falling is like a race where the heavier cart gets a bigger push — but is also harder to get moving.",
  everyday: {
    label: "1 push for a light cart, 2 pushes for a heavy cart",
    art: (
      <Svg label="One child pushes a light cart; two children push a cart twice as heavy; both speed up the same" vb="0 0 200 150" maxH={160}>
        <Cart x={110} y={56} w={50} kids={1} label="1 box" />
        <Cart x={110} y={124} w={70} kids={2} label="2 boxes" />
      </Svg>
    ),
  },
  concept: {
    label: "Gravity on a light and a heavy object",
    art: (
      <Svg label="Gravity pull of 10 newtons on 1 kilogram and 20 newtons on 2 kilograms, both give 10 metres per second squared" vb="0 0 200 150" maxH={160}>
        <rect x="30" y="30" width="40" height="40" rx="5" fill="#cbd5e1" stroke={DARK} strokeWidth="2" />
        <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
          1 kg
        </text>
        <line x1="50" y1="70" x2="50" y2="104" stroke={C} strokeWidth="3" />
        <rect x="120" y="22" width="56" height="56" rx="5" fill="#cbd5e1" stroke={DARK} strokeWidth="2" />
        <text x="148" y="55" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
          2 kg
        </text>
        <line x1="140" y1="78" x2="140" y2="112" stroke={C} strokeWidth="3" />
        <line x1="156" y1="78" x2="156" y2="112" stroke={C} strokeWidth="3" />
        <text x="100" y="138" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
          a = F ÷ m = 10 m/s² for both
        </text>
      </Svg>
    ),
  },
  pairs: [
    ["Number of kids pushing", "Gravity's pull (weight = m × g)"],
    ["How heavy the cart is", "Mass: how hard it is to speed up"],
    ["Both carts speed up equally", "Everything falls with acceleration g ≈ 9.8 m/s²"],
    ["A wind blowing against a cart with a sail", "Air resistance on a feather or flat paper"],
  ] as [string, string][],
  limits:
    "“Everything falls at the same rate” is only true when air resistance is tiny. The value of g depends on where you are: it's about 1.6 m/s² on the Moon, and slightly less on a mountain top than at sea level. For very fast, very massive things, Einstein's relativity describes gravity better than pushes and pulls.",
};

export const gravityFalling: Explainer = {
  id: "gravity-falling",
  title: "Gravity and falling: feather vs hammer",
  tagline: "Why heavy and light things fall together — and what the air changes.",
  area: "Physics",
  ages: "9–16",
  lessons: ["physics-school/motion/acceleration-equations", "physics-school/gravitation-energy/gravitation", "physics-school/force-laws/newtons-laws", "exam-physics/kinematics/kinematics-concept-crash"],
  color: C,
  icon: "🪶",
  watch: [
    { title: "Gravity pulls everything down", say: "The Earth pulls every object towards its centre. That pull is called gravity, and it's why things fall when you let go.", scene: <SceneEarth /> },
    { title: "Heavy and light, dropped together", say: "Drop a heavy bowling ball and a light apple at the same moment. Surprise: they hit the ground together!", scene: <SceneSameTime /> },
    { title: "Falling gets faster and faster", say: "A falling object speeds up by about 10 metres per second every second. That's why the gaps between these snapshots keep growing.", scene: <SceneStrobe /> },
    { title: "Air gets in the way", say: "A feather falls slowly because the air pushes up on it. This push is called air resistance, and it matters most for light, spread-out things.", scene: <SceneAir /> },
    { title: "Take the air away", say: "On the Moon there is no air. An astronaut dropped a hammer and a feather, and they landed at the very same moment!", scene: <SceneMoon /> },
    { title: "Why they fall together", say: "A heavier object gets a bigger pull, but it's also harder to speed up. The two cancel out, so everything falls with the same acceleration, g.", scene: <SceneWhy /> },
  ],
  try: GravityTry,
  story,
  like,
};
