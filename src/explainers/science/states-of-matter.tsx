"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Snowflake } from "lucide-react";
import type { Explainer } from "../types";
import { useFrame } from "@/components/widgets/_shared";
import { Arrow, BigButton, BigSlider, Face, Label, Panel, Scene, Tag, TryShell, rng } from "./_art";

const C = "#A855F7";
const SOLID = "#60a5fa";
const LIQUID = "#2563eb";
const GAS = "#f472b6";

/* ------------------------------------------------------------------ */
/* Animated particle boxes                                             */
/* ------------------------------------------------------------------ */

function SolidParticles({ x, y, cols = 4, rows = 4, r = 8, color = SOLID, seed = 1 }: { x: number; y: number; cols?: number; rows?: number; r?: number; color?: string; seed?: number }) {
  const rand = rng(seed);
  return (
    <g>
      {Array.from({ length: cols * rows }, (_, i) => {
        const cx = x + (i % cols) * (r * 2 + 1);
        const cy = y + Math.floor(i / cols) * (r * 2 + 1);
        return <motion.circle key={i} cx={cx} cy={cy} r={r} fill={color} stroke="#1e3a8a" strokeWidth={1.5} animate={{ x: [0, 1.6, -1.6, 0], y: [0, -1.4, 1.4, 0] }} transition={{ duration: 0.35, delay: rand() * 0.3, repeat: Infinity }} />;
      })}
    </g>
  );
}

function LiquidParticles({ x, y, w, h, n = 14, r = 8, seed = 2 }: { x: number; y: number; w: number; h: number; n?: number; r?: number; seed?: number }) {
  const rand = rng(seed);
  const cols = Math.floor(w / (r * 2.1));
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const bx = x + r + (i % cols) * r * 2.1;
        const by = y + h - r - Math.floor(i / cols) * r * 2;
        const xs = [0, (rand() - 0.5) * 22, (rand() - 0.5) * 22, 0];
        const ys = [0, -rand() * 8, -rand() * 6, 0];
        return <motion.circle key={i} cx={bx} cy={by} r={r} fill={LIQUID} stroke="#1e3a8a" strokeWidth={1.5} animate={{ x: xs, y: ys }} transition={{ duration: 2 + rand() * 1.5, repeat: Infinity, ease: "easeInOut" }} />;
      })}
    </g>
  );
}

function GasParticles({ x, y, w, h, n = 7, r = 7, seed = 3, fast = 1 }: { x: number; y: number; w: number; h: number; n?: number; r?: number; seed?: number; fast?: number }) {
  const rand = rng(seed);
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const xs = Array.from({ length: 5 }, () => x + r + rand() * (w - 2 * r));
        const ys = Array.from({ length: 5 }, () => y + r + rand() * (h - 2 * r));
        xs.push(xs[0]);
        ys.push(ys[0]);
        return <motion.circle key={i} r={r} fill={GAS} stroke="#9d174d" strokeWidth={1.5} initial={{ cx: xs[0], cy: ys[0] }} animate={{ cx: xs, cy: ys }} transition={{ duration: (3 + rand() * 2) / fast, repeat: Infinity, ease: "linear" }} />;
      })}
    </g>
  );
}

function Lab() {
  return (
    <>
      <rect width="400" height="260" fill="#faf5ff" />
      <rect y={218} width="400" height={42} fill="#e9d5ff" />
    </>
  );
}

function StatesScene({ stage }: { stage: number }) {
  const labels = ["Everything is made of tiny particles", "Solid: packed in rows, wiggling on the spot", "Liquid: close together, sliding past each other", "Gas: far apart, zooming everywhere", "Heating melts and boils; cooling condenses and freezes"];
  if (stage === 0) {
    return (
      <Scene label={`States of matter: ${labels[0]}`}>
        <Lab />
        {/* ice cube */}
        <g transform="translate(110 150)">
          <path d="M -40 -30 L 0 -50 L 44 -30 L 4 -10 Z" fill="#e0f2fe" stroke="#60a5fa" strokeWidth={3} />
          <path d="M -40 -30 L 4 -10 L 4 40 L -40 20 Z" fill="#bae6fd" stroke="#60a5fa" strokeWidth={3} />
          <path d="M 4 -10 L 44 -30 L 44 20 L 4 40 Z" fill="#7dd3fc" stroke="#60a5fa" strokeWidth={3} />
          <Face x={-18} y={8} s={0.8} />
        </g>
        {/* magnifier */}
        <motion.g initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
          <circle cx={270} cy={110} r={74} fill="#fff" stroke="#7c3aed" strokeWidth={10} />
          <SolidParticles x={232} y={72} cols={5} rows={5} r={8} />
          <path d="M 222 166 L 178 214" stroke="#7c3aed" strokeWidth={16} strokeLinecap="round" />
          <path d="M 156 128 L 196 110" stroke="#7c3aed" strokeWidth={2} strokeDasharray="4 5" />
        </motion.g>
        <Tag x={270} y={244} text="TINY PARTICLES!" color={C} delay={0.9} />
      </Scene>
    );
  }
  return (
    <Scene label={`States of matter: ${labels[stage]}`}>
      <Lab />
      {/* solid */}
      <g opacity={stage === 1 || stage === 4 ? 1 : 0.55}>
        <rect x={30} y={88} width={92} height={92} rx={10} fill="#e0f2fe" stroke="#60a5fa" strokeWidth={4} />
        <SolidParticles x={46} y={104} />
        <Label x={76} y={206} color="#1d4ed8">
          SOLID 🧊
        </Label>
      </g>
      {/* liquid */}
      {stage >= 2 && (
        <motion.g initial={stage === 2 ? { opacity: 0, y: 10 } : false} animate={{ opacity: stage === 2 || stage === 4 ? 1 : 0.55, y: 0 }}>
          <path d="M 152 70 L 152 182 Q 152 190 160 190 L 240 190 Q 248 190 248 182 L 248 70" fill="#fff" stroke="#64748b" strokeWidth={4} />
          <rect x={155} y={136} width={90} height={52} fill="#bfdbfe" />
          <LiquidParticles x={155} y={120} w={90} h={68} n={14} r={8} />
          <Label x={200} y={212} color={LIQUID}>
            LIQUID 💧
          </Label>
        </motion.g>
      )}
      {/* gas */}
      {stage >= 3 && (
        <motion.g initial={stage === 3 ? { opacity: 0, y: 10 } : false} animate={{ opacity: 1, y: 0 }}>
          <rect x={276} y={40} width={100} height={150} rx={10} fill="#fdf2f8" stroke="#f472b6" strokeWidth={4} />
          <GasParticles x={278} y={42} w={96} h={146} n={7} fast={stage === 3 ? 1.4 : 1} />
          <Label x={326} y={212} color="#be185d">
            GAS 💨
          </Label>
        </motion.g>
      )}
      {stage === 1 && <Tag x={200} y={40} text="KEEPS ITS SHAPE" color="#1d4ed8" />}
      {stage === 2 && <Tag x={200} y={40} text="FLOWS · TAKES THE SHAPE OF ITS CUP" color={LIQUID} />}
      {stage === 3 && <Tag x={180} y={28} text="SPREADS OUT TO FILL ANY SPACE" color="#be185d" />}
      {stage === 4 && (
        <>
          <Arrow x1={110} y1={66} x2={168} y2={58} cx={138} cy={36} color="#ea580c" w={4} />
          <Label x={136} y={24} color="#ea580c" size={12}>
            melt 🔥
          </Label>
          <Arrow x1={232} y1={58} x2={286} y2={30} cx={262} cy={22} color="#ea580c" w={4} delay={0.4} />
          <Label x={252} y={14} color="#ea580c" size={12}>
            boil 🔥
          </Label>
          <Arrow x1={290} y1={232} x2={232} y2={240} cx={262} cy={252} color="#0284c7" w={4} delay={0.8} />
          <Label x={262} y={256} color="#0284c7" size={11}>
            condense ❄️
          </Label>
          <Arrow x1={164} y1={240} x2={104} y2={232} cx={134} cy={252} color="#0284c7" w={4} delay={1.1} />
          <Label x={134} y={256} color="#0284c7" size={11}>
            freeze ❄️
          </Label>
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Try it: heat and cool the particles                                 */
/* ------------------------------------------------------------------ */

const N = 24;
const PR = 9;
const BX0 = 40;
const BX1 = 300;
const BY0 = 20;
const BY1 = 196;
const COLS = 6;

type Pt = { x: number; y: number; vx: number; vy: number; hx: number; hy: number; ph: number };

function makeParticles(): Pt[] {
  const r = rng(42);
  const cx = (BX0 + BX1) / 2;
  return Array.from({ length: N }, (_, i) => {
    const hx = cx + ((i % COLS) - (COLS - 1) / 2) * (PR * 2 + 1);
    const hy = BY1 - PR - 1 - Math.floor(i / COLS) * (PR * 2 + 1);
    return { x: hx, y: hy, vx: 0, vy: 0, hx, hy, ph: r() * Math.PI * 2 };
  });
}

function stateOf(t: number) {
  return t < 0 ? "solid" : t < 100 ? "liquid" : "gas";
}

function HeatAndCool() {
  const [temp, setTemp] = useState(-15);
  const [, setTick] = useState(0);
  const ps = useRef<Pt[]>(makeParticles());
  const time = useRef(0);
  const rand = useRef(rng(9));
  const seen = useRef(new Set<string>(["solid"]));
  const st = stateOf(temp);
  seen.current.add(st);

  useFrame((dt) => {
    time.current += dt;
    const r = rand.current;
    const P = ps.current;
    const s = stateOf(temp);
    if (s === "solid") {
      const amp = 1 + Math.max(0, (temp + 30) / 30) * 2.5;
      for (const p of P) {
        const tx = p.hx + Math.sin(time.current * 22 + p.ph) * amp;
        const ty = p.hy + Math.cos(time.current * 19 + p.ph) * amp;
        p.x += (tx - p.x) * Math.min(1, dt * 4);
        p.y += (ty - p.y) * Math.min(1, dt * 4);
        p.vx = 0;
        p.vy = 0;
      }
    } else {
      const gas = s === "gas";
      const target = gas ? 150 + (temp - 100) * 4 : 30 + temp * 0.8;
      for (const p of P) {
        if (!gas) p.vy += 420 * dt;
        p.vx += (r() - 0.5) * target * 6 * dt;
        p.vy += (r() - 0.5) * target * 6 * dt;
        const sp = Math.hypot(p.vx, p.vy) || 1;
        if (gas) {
          const k = target / sp;
          p.vx *= 1 + (k - 1) * Math.min(1, dt * 3);
          p.vy *= 1 + (k - 1) * Math.min(1, dt * 3);
        } else {
          p.vx *= Math.pow(0.2, dt);
          p.vy *= Math.pow(0.6, dt);
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < BX0 + PR) { p.x = BX0 + PR; p.vx = Math.abs(p.vx); }
        if (p.x > BX1 - PR) { p.x = BX1 - PR; p.vx = -Math.abs(p.vx); }
        if (p.y < BY0 + PR) { p.y = BY0 + PR; p.vy = Math.abs(p.vy); }
        if (p.y > BY1 - PR) { p.y = BY1 - PR; p.vy = -Math.abs(p.vy) * (gas ? 1 : 0.3); }
      }
      // keep particles from overlapping
      for (let i = 0; i < P.length; i++)
        for (let j = i + 1; j < P.length; j++) {
          const a = P[i];
          const b = P[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy) || 0.01;
          if (d < PR * 2) {
            const push = (PR * 2 - d) / 2;
            const nx = dx / d;
            const ny = dy / d;
            a.x -= nx * push;
            a.y -= ny * push;
            b.x += nx * push;
            b.y += ny * push;
            if (gas) {
              const rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
              if (rel < 0) {
                a.vx += rel * nx; a.vy += rel * ny;
                b.vx -= rel * nx; b.vy -= rel * ny;
              }
            }
          }
        }
    }
    setTick((t) => (t + 1) % 1000000);
  });

  const reset = () => {
    ps.current = makeParticles();
    seen.current = new Set(["solid"]);
    setTemp(-15);
  };

  const P = ps.current;
  const top = st === "liquid" ? Math.min(...P.map((p) => p.y)) - PR : BY1;
  const color = st === "solid" ? SOLID : st === "liquid" ? LIQUID : GAS;
  const name = st === "solid" ? "SOLID: ice 🧊" : st === "liquid" ? "LIQUID: water 💧" : "GAS: steam 💨";
  const done = seen.current.size === 3;
  const msg =
    st === "solid"
      ? "Solid ice: the particles are locked in rows and can only wiggle."
      : st === "liquid"
        ? "Liquid water: the particles slide around but stay close together."
        : "Gas (steam): the particles fly apart and zoom all over the box!";
  const status = done ? `${msg} You've made all three states! Now try cooling it back down.` : `${msg} ${st === "solid" ? "Heat it up to melt it!" : st === "liquid" ? "Heat it more to boil it, or cool it to freeze it." : "Cool it to turn it back into water."}`;
  const flame = Math.max(0, temp) / 130;

  return (
    <TryShell title="Heat and cool the particles" hint="Slide or tap to change the temperature. Watch what the tiny particles do!" onReset={reset} status={status} color={C} done={done}>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg viewBox="0 0 400 260" role="img" aria-label={`Particles in a box at ${temp} degrees: ${st}`} className="block h-auto w-full select-none" style={{ maxHeight: 320 }}>
          <rect width="400" height="260" fill={temp < 0 ? "#eff6ff" : temp < 100 ? "#f5f3ff" : "#fff1f2"} />
          <rect x={BX0 - 4} y={BY0 - 4} width={BX1 - BX0 + 8} height={BY1 - BY0 + 8} rx={10} fill="#fff" stroke="#94a3b8" strokeWidth={4} />
          {st === "liquid" && <rect x={BX0} y={top} width={BX1 - BX0} height={BY1 - top} fill="#bfdbfe" opacity={0.7} />}
          {P.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={PR} fill={color} stroke={st === "gas" ? "#9d174d" : "#1e3a8a"} strokeWidth={1.5} />
          ))}
          {/* burner */}
          <rect x={110} y={206} width={120} height={12} rx={4} fill="#475569" />
          {flame > 0 &&
            [130, 150, 170, 190, 210].map((x, i) => (
              <motion.path key={x} d={`M ${x - 7} 206 Q ${x} ${206 - 30 * flame - 6} ${x + 7} 206 Z`} fill={i % 2 ? "#f97316" : "#facc15"} animate={{ scaleY: [1, 1.25, 1] }} transition={{ duration: 0.4, delay: i * 0.07, repeat: Infinity }} />
            ))}
          {temp < 0 && <text x={170} y={244} textAnchor="middle" fontSize={20}>❄️</text>}
          {/* thermometer */}
          <g>
            <rect x={338} y={24} width={20} height={176} rx={10} fill="#fff" stroke="#64748b" strokeWidth={3} />
            <circle cx={348} cy={212} r={16} fill="#ef4444" stroke="#64748b" strokeWidth={3} />
            <rect x={343} y={200 - ((temp + 30) / 160) * 170} width={10} height={((temp + 30) / 160) * 170 + 4} fill="#ef4444" />
            <line x1={334} y1={200 - (30 / 160) * 170} x2={362} y2={200 - (30 / 160) * 170} stroke="#2563eb" strokeWidth={2} />
            <line x1={334} y1={200 - (130 / 160) * 170} x2={362} y2={200 - (130 / 160) * 170} stroke="#db2777" strokeWidth={2} />
            <text x={366} y={204 - (30 / 160) * 170} fontSize={9} fontWeight={800} fill="#2563eb">0°</text>
            <text x={366} y={204 - (130 / 160) * 170} fontSize={9} fontWeight={800} fill="#db2777">100°</text>
          </g>
          <Label x={170} y={256} color={st === "gas" ? "#be185d" : st === "liquid" ? LIQUID : "#1d4ed8"} size={15}>
            {`${name} · ${temp}°C`}
          </Label>
        </svg>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-[auto_1fr_auto] sm:items-center">
        <BigButton onClick={() => setTemp((t) => Math.max(-30, t - 20))} color="#0284c7" label="Cool down">
          <Snowflake className="h-5 w-5" /> Cool
        </BigButton>
        <BigSlider label="Temperature" value={temp} min={-30} max={130} onChange={setTemp} left="🧊" right="🔥" color={C} />
        <BigButton onClick={() => setTemp((t) => Math.min(130, t + 20))} color="#ea580c" label="Heat up">
          <Flame className="h-5 w-5" /> Heat
        </BigButton>
      </div>
    </TryShell>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Cubey({ x, y, s = 1, mood = "happy" as const }: { x: number; y: number; s?: number; mood?: "happy" | "wow" | "sad" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-26} y={-26} width={52} height={52} rx={10} fill="#bae6fd" stroke="#38bdf8" strokeWidth={3} />
      <path d="M -18 -18 L -6 -18" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
      <Face y={2} s={0.9} mood={mood} />
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Cubey the ice cube smiling in a frosty freezer">
        <rect width="240" height="160" fill="#e0f2fe" />
        <rect x={40} y={20} width={160} height={124} rx={10} fill="#f8fafc" stroke="#94a3b8" strokeWidth={4} />
        <line x1={44} y1={110} x2={196} y2={110} stroke="#cbd5e1" strokeWidth={4} />
        <Cubey x={90} y={82} />
        <text x={150} y={70} fontSize={18}>❄️</text>
      </Panel>
    ),
    speech: "I'm solid and strong!",
    caption: "Cubey the ice cube keeps his shape in the cold freezer.",
  },
  {
    art: (
      <Panel label="Cubey melting into a puddle on a warm kitchen table">
        <rect width="240" height="160" fill="#fef3c7" />
        <rect y={120} width="240" height={40} fill="#d6a76c" />
        <motion.g animate={{ scaleY: [1, 0.55], y: [0, 20] }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse" }}>
          <Cubey x={90} y={96} mood="wow" />
        </motion.g>
        <ellipse cx={90} cy={122} rx={46} ry={7} fill="#7dd3fc" />
      </Panel>
    ),
    speech: "Help, I'm melting!",
    caption: "In the warm kitchen, Cubey melts into a puddle of liquid water.",
  },
  {
    art: (
      <Panel label="Water boiling in a pan and rising as steam">
        <rect width="240" height="160" fill="#fff7ed" />
        <rect x={50} y={92} width={110} height={36} rx={6} fill="#64748b" />
        <rect x={56} y={88} width={98} height={10} fill="#60a5fa" />
        <path d="M 160 100 h 40" stroke="#334155" strokeWidth={6} strokeLinecap="round" />
        {[70, 100, 130].map((x, i) => (
          <motion.path key={x} d={`M ${x} 84 q 6 -8 0 -16 t 0 -16`} stroke="#94a3b8" strokeWidth={4} fill="none" strokeLinecap="round" animate={{ y: [0, -30], opacity: [1, 0] }} transition={{ duration: 1.6, delay: i * 0.4, repeat: Infinity }} />
        ))}
        <g transform="translate(140 40)">
          <circle r={14} fill="#fbcfe8" opacity={0.85} />
          <Face s={0.6} mood="wow" />
        </g>
        {[70, 90, 110, 130].map((x) => (
          <path key={x} d={`M ${x - 6} 128 Q ${x} 140 ${x + 6} 128`} fill="#f97316" />
        ))}
      </Panel>
    ),
    speech: "Now I'm flying!",
    caption: "Heated in a pan, the water boils and floats away as a gas: steam.",
  },
  {
    art: (
      <Panel label="Steam turns to drops on a cold window and is frozen back into an ice cube">
        <rect width="240" height="160" fill="#e0f2fe" />
        <rect x={14} y={14} width={100} height={110} rx={6} fill="#dbeafe" stroke="#64748b" strokeWidth={4} />
        {[[34, 40], [60, 70], [88, 50], [44, 96]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5} fill="#60a5fa" />
        ))}
        <Arrow x1={120} y1={70} x2={150} y2={70} color="#0284c7" w={4} draw={false} />
        <Cubey x={190} y={80} />
      </Panel>
    ),
    speech: "Ta-da! I'm back!",
    caption: "The steam cools on a cold window into water drops, and in the freezer they turn back into ice.",
  },
];

function Heads({ pts, color }: { pts: [number, number][]; color: string }) {
  return (
    <>
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={7} fill="#F1C27D" stroke={color} strokeWidth={3} />
          <circle cx={x - 2} cy={y - 1} r={1} fill="#1e293b" />
          <circle cx={x + 2} cy={y - 1} r={1} fill="#1e293b" />
        </g>
      ))}
    </>
  );
}

const like: Explainer["like"] = {
  headline: "Particles behave like children at school: sitting at desks, walking in a busy corridor, or running at playtime.",
  everyday: {
    label: "Desks · corridor · playground",
    art: (
      <Panel label="Children sitting in rows, squeezing along a corridor, and running in a playground">
        <rect width="240" height="160" fill="#fff7ed" />
        <rect x={6} y={30} width={70} height={100} rx={6} fill="#e0f2fe" />
        <rect x={84} y={30} width={70} height={100} rx={6} fill="#ede9fe" />
        <rect x={162} y={30} width={72} height={100} rx={6} fill="#dcfce7" />
        <motion.g animate={{ x: [0, 1, -1, 0] }} transition={{ duration: 0.3, repeat: Infinity }}>
          <Heads color="#2563eb" pts={[[22, 50], [41, 50], [60, 50], [22, 74], [41, 74], [60, 74], [22, 98], [41, 98], [60, 98]]} />
        </motion.g>
        <motion.g animate={{ y: [0, 6, 0], x: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Heads color="#7c3aed" pts={[[100, 100], [116, 112], [134, 100], [108, 84], [126, 86], [140, 116], [96, 118]]} />
        </motion.g>
        <motion.g animate={{ x: [0, 14, -10, 0], y: [0, -14, 10, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <Heads color="#16a34a" pts={[[176, 46], [214, 64], [184, 108], [222, 116]]} />
        </motion.g>
        <text x={41} y={148} textAnchor="middle" fontSize={10} fontWeight={900} fill="#1d4ed8">desks</text>
        <text x={119} y={148} textAnchor="middle" fontSize={10} fontWeight={900} fill="#6d28d9">corridor</text>
        <text x={198} y={148} textAnchor="middle" fontSize={10} fontWeight={900} fill="#15803d">playtime</text>
      </Panel>
    ),
  },
  concept: {
    label: "Solid · liquid · gas",
    art: (
      <Panel label="Particles in a solid, a liquid and a gas">
        <rect width="240" height="160" fill="#faf5ff" />
        <rect x={6} y={30} width={70} height={100} rx={6} fill="#e0f2fe" />
        <rect x={84} y={30} width={70} height={100} rx={6} fill="#dbeafe" />
        <rect x={162} y={30} width={72} height={100} rx={6} fill="#fdf2f8" />
        <SolidParticles x={20} y={74} cols={4} rows={3} r={7} />
        <LiquidParticles x={86} y={80} w={66} h={48} n={9} r={7} />
        <GasParticles x={164} y={32} w={68} h={96} n={5} r={6} />
        <text x={41} y={148} textAnchor="middle" fontSize={10} fontWeight={900} fill="#1d4ed8">solid</text>
        <text x={119} y={148} textAnchor="middle" fontSize={10} fontWeight={900} fill={LIQUID}>liquid</text>
        <text x={198} y={148} textAnchor="middle" fontSize={10} fontWeight={900} fill="#be185d">gas</text>
      </Panel>
    ),
  },
  pairs: [
    ["Sitting in rows at desks, just fidgeting", "Solid: packed in rows, wiggling on the spot"],
    ["Squeezing past each other in a busy corridor", "Liquid: close together, sliding past each other"],
    ["Running all over the playground", "Gas: far apart, zooming everywhere"],
    ["The bell rings: everyone gets more energy!", "Heating gives particles more energy"],
  ],
  limits:
    "Children decide where to go, but particles just move faster or slower as they get hotter or colder. Real particles (atoms and molecules) are billions of times smaller, and gas particles are much further apart than children in a playground.",
};

export const statesOfMatter: Explainer = {
  id: "solids-liquids-gases",
  title: "Solids, liquids and gases",
  tagline: "Zoom in on tiny particles: packed, sliding or flying. Then melt and boil them!",
  area: "Science",
  ages: "7–11",
  lessons: ["chemistry-school/matter-and-states/states-of-matter"],
  color: C,
  icon: "🧊",
  watch: [
    { title: "Tiny particles", say: "Everything is made of tiny bits called particles. They are far too small to see, so let's pretend we have a super-magnifying glass!", scene: <StatesScene stage={0} /> },
    { title: "Solids", say: "In a solid, like ice, the particles are packed tightly in rows. They can only wiggle on the spot, so a solid keeps its shape.", scene: <StatesScene stage={1} /> },
    { title: "Liquids", say: "In a liquid, like water, the particles are still close, but they slide past each other. So liquids flow and take the shape of their cup.", scene: <StatesScene stage={2} /> },
    { title: "Gases", say: "In a gas, like steam, the particles are far apart and zoom about everywhere. A gas spreads out to fill any space.", scene: <StatesScene stage={3} /> },
    { title: "Melting and boiling", say: "Heating gives particles more energy: ice melts into water, and water boils into steam. Cooling does the opposite: steam condenses and water freezes.", scene: <StatesScene stage={4} /> },
  ],
  try: HeatAndCool,
  story,
  like,
};
