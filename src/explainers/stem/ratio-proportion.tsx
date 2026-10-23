"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { Explainer } from "../types";
import { gcd } from "@/components/widgets/_shared";
import { DARK, Feedback, Ground, INK, Kid, MUTED, Pad, Svg, TryShell } from "./_kit";

const C = "#EC4899";
const LEMON = "#facc15";
const WATER = "#38bdf8";
const BLUE = "#2563eb";
const YELLOW = "#facc15";

type RGB = [number, number, number];
const lerp = (a: RGB, b: RGB, t: number): RGB => [0, 1, 2].map((i) => Math.round(a[i] + (b[i] - a[i]) * t)) as RGB;
const css = (c: RGB) => `rgb(${c[0]} ${c[1]} ${c[2]})`;

/** Blue + yellow paint → a green whose shade depends only on the ratio. */
export function paintMix(b: number, y: number): string {
  if (b + y === 0) return "#e5e7eb";
  const f = y / (b + y);
  const B: RGB = [37, 99, 235];
  const G: RGB = [22, 163, 74];
  const Y: RGB = [250, 204, 21];
  return css(f < 0.5 ? lerp(B, G, f / 0.5) : lerp(G, Y, (f - 0.5) / 0.5));
}

/** Lemonade gets more yellow (and sourer) as the lemon share grows. */
function lemonade(l: number, w: number): string {
  const f = l / (l + w);
  return css(lerp([224, 242, 254], [234, 179, 8], Math.min(1, f / 0.45)));
}

function Glass({ x, y, fill, delay = 0, s = 1 }: { x: number; y: number; fill: string; delay?: number; s?: number }) {
  return (
    <motion.g initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}>
      <g transform={`translate(${x} ${y}) scale(${s})`}>
        <path d="M -13 -36 L -10 0 L 10 0 L 13 -36" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M -11.5 -26 L -9.5 -2 L 9.5 -2 L 11.5 -26 Z" fill={fill} />
      </g>
    </motion.g>
  );
}

function Jug({ x, y, fill, w = 70, h = 90, delay = 0.6 }: { x: number; y: number; fill: string; w?: number; h?: number; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.rect x={-w / 2 + 4} width={w - 8} rx="6" fill={fill} initial={{ y: -4, height: 0 }} animate={{ y: -h * 0.8, height: h * 0.8 - 4 }} transition={{ delay, duration: 1.2 }} />
      <path d={`M ${-w / 2} ${-h} L ${-w / 2} -6 Q ${-w / 2} 0 ${-w / 2 + 6} 0 L ${w / 2 - 6} 0 Q ${w / 2} 0 ${w / 2} -6 L ${w / 2} ${-h}`} fill="none" stroke={INK} strokeWidth="3" />
      <path d={`M ${w / 2} ${-h * 0.8} C ${w / 2 + 22} ${-h * 0.8}, ${w / 2 + 22} ${-h * 0.3}, ${w / 2} ${-h * 0.3}`} fill="none" stroke={INK} strokeWidth="3" />
    </g>
  );
}

function Legend() {
  return (
    <g>
      <rect x="20" y="236" width="14" height="14" rx="3" fill={LEMON} />
      <text x="40" y="248" fontSize="13" fontWeight="800" fill={INK}>
        lemon juice
      </text>
      <rect x="130" y="236" width="14" height="14" rx="3" fill={WATER} />
      <text x="150" y="248" fontSize="13" fontWeight="800" fill={INK}>
        water
      </text>
    </g>
  );
}

function GlassRow({ lemon, water, y, x0 = 40, delay = 0 }: { lemon: number; water: number; y: number; x0?: number; delay?: number }) {
  const items = [...Array(lemon).fill(LEMON), ...Array(water).fill(WATER)] as string[];
  return (
    <>
      {items.map((f, i) => (
        <Glass key={i} x={x0 + i * 34} y={y} fill={f} delay={delay + i * 0.1} s={0.9} />
      ))}
    </>
  );
}

function SceneRecipe() {
  return (
    <Svg label="One glass of lemon juice and three glasses of water make one jug of lemonade, ratio 1 to 3">
      <GlassRow lemon={1} water={3} y={150} x0={50} />
      <text x="100" y="60" textAnchor="middle" fontSize="40" fontWeight="900" fill={INK}>
        1 : 3
      </text>
      <text x="100" y="86" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        lemon : water
      </text>
      <motion.path d="M 190 130 L 240 130" stroke={INK} strokeWidth="3" markerEnd="url(#rp-a)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      <Jug x={310} y={200} fill={lemonade(1, 3)} />
      <text x="310" y="226" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK}>
        😋 just right
      </text>
      <Legend />
      <defs>
        <marker id="rp-a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
    </Svg>
  );
}

function SceneDouble() {
  return (
    <Svg label="Doubling the recipe: two lemon and six water glasses make a bigger jug with the same taste">
      <text x="24" y="98" fontSize="14" fontWeight="900" fill={MUTED}>
        ×1
      </text>
      <GlassRow lemon={1} water={3} y={110} x0={70} />
      <text x="24" y="188" fontSize="14" fontWeight="900" fill={C}>
        ×2
      </text>
      <GlassRow lemon={2} water={6} y={200} x0={70} delay={0.4} />
      <text x="120" y="40" textAnchor="middle" fontSize="26" fontWeight="900" fill={INK}>
        1 : 3 → 2 : 6
      </text>
      <Jug x={352} y={208} w={60} h={130} fill={lemonade(2, 6)} delay={1.3} />
      <text x="352" y="230" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>
        same taste 😋
      </text>
      <Legend />
    </Svg>
  );
}

function SceneWrong() {
  return (
    <Svg label="Adding one glass of each gives 2 to 4, which is a more lemony colour and tastes too sour">
      <g>
        <Jug x={90} y={190} w={70} h={100} fill={lemonade(1, 3)} delay={0.1} />
        <text x="90" y="64" textAnchor="middle" fontSize="22" fontWeight="900" fill={INK}>
          1 : 3
        </text>
        <text x="90" y="214" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>
          😋
        </text>
      </g>
      <motion.text x="200" y="130" textAnchor="middle" fontSize="16" fontWeight="900" fill="#ef4444" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        +1 each
      </motion.text>
      <motion.path d="M 160 142 L 236 142" stroke="#ef4444" strokeWidth="3" markerEnd="url(#rp-r)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      <Jug x={310} y={190} w={80} h={110} fill={lemonade(2, 4)} delay={0.9} />
      <text x="310" y="64" textAnchor="middle" fontSize="22" fontWeight="900" fill="#ef4444">
        2 : 4 ✗
      </text>
      <motion.text x="310" y="218" textAnchor="middle" fontSize="15" fontWeight="800" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        😖 too sour!
      </motion.text>
      <text x="200" y="250" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        lemon was 1 in 4 parts — now it's 2 in 6 (1 in 3)
      </text>
      <defs>
        <marker id="rp-r" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#ef4444" />
        </marker>
      </defs>
    </Svg>
  );
}

function Tin({ x, y, color, s = 1 }: { x: number; y: number; color: string; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-11" y="-26" width="22" height="26" rx="3" fill={color} stroke={DARK} strokeWidth="1.8" />
      <ellipse cx="0" cy="-26" rx="11" ry="3" fill={color} stroke={DARK} strokeWidth="1.8" />
      <rect x="-7" y="-18" width="14" height="8" rx="1" fill="white" opacity="0.8" />
    </g>
  );
}

function PaintGroup({ x, b, y, delay, ok }: { x: number; b: number; y: number; delay: number; ok: boolean }) {
  const tins = [...Array(b).fill(BLUE), ...Array(y).fill(YELLOW)] as string[];
  return (
    <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      {tins.map((t, i) => (
        <Tin key={i} x={x - ((tins.length - 1) * 13) / 2 + i * 13} y={118 - (i % 2) * 6} color={t} s={0.55} />
      ))}
      <text x={x} y="62" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>
        {b} : {y}
      </text>
      <motion.path
        d={`M ${x - 38} 170 C ${x - 44} 140, ${x - 10} 128, ${x + 8} 138 C ${x + 34} 128, ${x + 48} 160, ${x + 34} 188 C ${x + 24} 214, ${x - 30} 214, ${x - 38} 170 Z`}
        fill={paintMix(b, y)}
        stroke={DARK}
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4, duration: 0.6 }}
      />
      <motion.text x={x} y="236" textAnchor="middle" fontSize="15" fontWeight="900" fill={ok ? "#16a34a" : "#ef4444"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.9 }}>
        {ok ? "same green ✓" : "different ✗"}
      </motion.text>
    </motion.g>
  );
}

function ScenePaint() {
  return (
    <Svg label="Two blue to one yellow and four blue to two yellow make the same green, but two to two makes a lighter green">
      <text x="200" y="26" textAnchor="middle" fontSize="14" fontWeight="800" fill={MUTED}>
        blue : yellow
      </text>
      <PaintGroup x={70} b={2} y={1} delay={0.1} ok />
      <PaintGroup x={200} b={4} y={2} delay={0.7} ok />
      <PaintGroup x={330} b={2} y={2} delay={1.3} ok={false} />
    </Svg>
  );
}

function SceneGraph() {
  const X = (v: number) => 60 + v * 70;
  const Y = (v: number) => 220 - v * 15;
  const pts = [1, 2, 3, 4];
  return (
    <Svg label="Graph of water against lemon: points 1,3 then 2,6 then 3,9 then 4,12 lie on a straight line through zero">
      <line x1={X(0)} y1={Y(0)} x2={X(4.6)} y2={Y(0)} stroke={INK} strokeWidth="2.5" />
      <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(13.4)} stroke={INK} strokeWidth="2.5" />
      <text x={X(2.3)} y="252" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>
        cups of lemon
      </text>
      <text x="22" y={Y(6.5)} textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} transform={`rotate(-90 22 ${Y(6.5)})`}>
        cups of water
      </text>
      {pts.map((p) => (
        <g key={p}>
          <text x={X(p)} y={Y(0) + 18} textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
            {p}
          </text>
          <text x={X(0) - 8} y={Y(p * 3) + 4} textAnchor="end" fontSize="12" fontWeight="800" fill={MUTED}>
            {p * 3}
          </text>
        </g>
      ))}
      <motion.line x1={X(0)} y1={Y(0)} x2={X(4.4)} y2={Y(13.2)} stroke={C} strokeWidth="3" strokeDasharray="6 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1 }} />
      {pts.map((p, i) => (
        <motion.g key={p} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.35, type: "spring" }}>
          <circle cx={X(p)} cy={Y(p * 3)} r="8" fill={C} stroke="white" strokeWidth="2" />
          <text x={X(p) + 12} y={Y(p * 3) - 8} fontSize="13" fontWeight="900" fill={INK}>
            {p} : {p * 3}
          </text>
        </motion.g>
      ))}
      <motion.text x={X(1.1)} y={Y(12)} fontSize="15" fontWeight="900" fill={C} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
        water = 3 × lemon
      </motion.text>
    </Svg>
  );
}

/* ---------------- Try: paint mixer ---------------- */

const ORDERS = [
  { tb: 1, ty: 2, ask: "Make a bigger batch using exactly 3 blue tins.", ok: (b: number, _y: number) => b === 3 },
  { tb: 2, ty: 3, ask: "Make a batch using 10 tins altogether.", ok: (b: number, y: number) => b + y === 10 },
  { tb: 3, ty: 1, ask: "You only have 2 yellow tins. Use both of them.", ok: (_b: number, y: number) => y === 2 },
  { tb: 3, ty: 2, ask: "A big wall! Use 9 blue tins.", ok: (b: number, _y: number) => b === 9 },
];

function Counter({ label, value, color, onChange }: { label: string; value: number; color: string; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border-2 p-2" style={{ borderColor: color }}>
      <span className="min-w-[64px] text-sm font-black" style={{ color: color === YELLOW ? "#a16207" : color }}>
        {label}
      </span>
      <Pad onClick={() => onChange(Math.max(0, value - 1))} disabled={value <= 0} color={color === YELLOW ? "#ca8a04" : color} label={`One less ${label} tin`}>
        <Minus className="h-5 w-5" />
      </Pad>
      <motion.span key={value} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="w-8 text-center font-mono text-2xl font-black" aria-live="polite">
        {value}
      </motion.span>
      <Pad onClick={() => onChange(Math.min(15, value + 1))} disabled={value >= 15} color={color === YELLOW ? "#ca8a04" : color} label={`One more ${label} tin`}>
        <Plus className="h-5 w-5" />
      </Pad>
    </div>
  );
}

function RatioTry() {
  const [o, setO] = useState(0);
  const [b, setB] = useState(0);
  const [y, setY] = useState(0);
  const ord = ORDERS[o];
  const same = b + y > 0 && b * ord.ty === y * ord.tb;
  const met = ord.ok(b, y);
  const win = same && met;
  const g = gcd(b, y);
  const tins = [...Array(b).fill(BLUE), ...Array(y).fill(YELLOW)] as string[];
  const reset = () => {
    setB(0);
    setY(0);
  };
  const next = () => {
    setO((k) => (k + 1) % ORDERS.length);
    reset();
  };

  let fb: { tone: "good" | "bad" | "info" | "warn"; text: string };
  if (b + y === 0) fb = { tone: "info", text: "Add tins of blue and yellow. The colour depends on how the amounts compare, not on how much paint there is." };
  else if (win) fb = { tone: "good", text: `Perfect match! ${b} : ${y} is the target ${ord.tb} : ${ord.ty} with every part multiplied by ${b / ord.tb}.` };
  else if (same) fb = { tone: "warn", text: `Same colour ✓ — ${b} : ${y} simplifies to ${ord.tb} : ${ord.ty}. But check the order: ${ord.ask}` };
  else if (b * ord.ty > y * ord.tb) fb = { tone: "bad", text: `Too blue. For every ${ord.tb} blue you need ${ord.ty} yellow.` };
  else fb = { tone: "bad", text: `Too yellow. For every ${ord.ty} yellow you need ${ord.tb} blue.` };

  return (
    <TryShell title="Paint shop: match the colour" hint="Mix blue and yellow tins until your green matches the sample exactly." onReset={reset}>
      <div className="mb-3 rounded-2xl border-2 border-line bg-surface-2 px-4 py-3">
        <p className="text-xs font-black uppercase tracking-wide text-muted">
          Order {o + 1} of {ORDERS.length}
        </p>
        <p className="mt-0.5 text-lg font-black">
          Sample: {ord.tb} blue : {ord.ty} yellow. {ord.ask}
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-line p-2">
          <Svg label={`Sample colour beside your mix. Your mix is ${b} blue to ${y} yellow and ${same ? "matches" : "does not match"}.`} vb="0 0 300 180" maxH={240}>
            <circle cx="70" cy="70" r="46" fill={paintMix(ord.tb, ord.ty)} stroke={INK} strokeWidth="2.5" />
            <text x="70" y="140" textAnchor="middle" fontSize="13" fontWeight="900" fill={INK}>
              sample
            </text>
            <text x="70" y="158" textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
              {ord.tb} : {ord.ty}
            </text>
            <motion.circle cx="210" cy="70" r="46" animate={{ fill: paintMix(b, y) }} stroke={INK} strokeWidth="2.5" />
            {same && (
              <motion.text x="140" y="78" textAnchor="middle" fontSize="26" fontWeight="900" fill="#16a34a" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                =
              </motion.text>
            )}
            <text x="210" y="140" textAnchor="middle" fontSize="13" fontWeight="900" fill={INK}>
              your bucket
            </text>
            <text x="210" y="158" textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
              {b} : {y}
              {b + y > 0 && g > 1 ? ` = ${b / g} : ${y / g}` : ""}
            </text>
          </Svg>
        </div>
        <div className="flex flex-col gap-2">
          <Counter label="Blue" value={b} color={BLUE} onChange={setB} />
          <Counter label="Yellow" value={y} color={YELLOW} onChange={setY} />
          <div className="min-h-[56px] rounded-2xl border-2 border-dashed border-line p-1">
            <Svg label={`${b} blue tins and ${y} yellow tins`} vb="0 0 300 56" maxH={64}>
              {tins.map((t, i) => (
                <motion.g key={`${t}${i}`} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                  <Tin x={14 + (i % 15) * 19.5} y={i < 15 ? 30 : 54} color={t} s={0.7} />
                </motion.g>
              ))}
            </Svg>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <Feedback tone={fb.tone} k={fb.text}>
          {fb.text}
        </Feedback>
        {win && (
          <Pad onClick={next} color={C} solid>
            Next order →
          </Pad>
        )}
      </div>
    </TryShell>
  );
}

/* ---------------- Story + analogy ---------------- */

function Stand({ children }: { children?: ReactNode }) {
  return (
    <>
      <Ground />
      <rect x="120" y="100" width="110" height="40" fill="#fde68a" stroke={DARK} strokeWidth="2" />
      <text x="175" y="126" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
        LEMONADE
      </text>
      {children}
    </>
  );
}

function MiniJug({ x, fill }: { x: number; fill: string }) {
  return (
    <g transform={`translate(${x} 100)`}>
      <rect x="-12" y="-28" width="24" height="26" rx="3" fill={fill} />
      <path d="M -14 -36 L -14 -2 Q -14 0 -12 0 L 12 0 Q 14 0 14 -2 L 14 -36" fill="none" stroke={DARK} strokeWidth="2" />
    </g>
  );
}

const story = [
  {
    art: (
      <Svg label="Maya at her lemonade stand with one jug" vb="0 0 240 160" maxH={170}>
        <Stand>
          <MiniJug x={175} fill={lemonade(1, 3)} />
        </Stand>
        <Kid x={60} y={140} shirt="#f97316" longHair hair="#7c2d12" pose="wave" />
      </Svg>
    ),
    speech: "1 lemon : 3 water!",
    caption: "Maya's secret recipe: 1 cup of lemon juice for every 3 cups of water.",
  },
  {
    art: (
      <Svg label="A crowd of thirsty friends arrives" vb="0 0 240 160" maxH={170}>
        <Ground />
        <Kid x={40} y={140} s={0.8} shirt="#a855f7" mood="happy" pose="wave" />
        <Kid x={80} y={140} s={0.8} shirt="#ef4444" mood="happy" longHair hair="#111827" />
        <Kid x={120} y={140} s={0.8} shirt="#0ea5e9" mood="surprised" />
        <Kid x={160} y={140} s={0.8} shirt="#84cc16" pose="cheer" />
        <Kid x={200} y={140} s={0.8} shirt="#f59e0b" longHair hair="#92400e" />
      </Svg>
    ),
    speech: "We're SO thirsty!",
    caption: "Lots of friends arrive. Now they need three jugs' worth of lemonade.",
  },
  {
    art: (
      <Svg label="Leo makes a big jug that is too sour" vb="0 0 240 160" maxH={170}>
        <Stand>
          <MiniJug x={175} fill={lemonade(3, 5)} />
        </Stand>
        <Kid x={60} y={140} shirt="#22c55e" mood="sad" />
        <text x="175" y="60" textAnchor="middle" fontSize="12" fontWeight="900" fill="#dc2626">
          3 : 5
        </text>
      </Svg>
    ),
    speech: "Yuck, sour!",
    caption: "Leo tips in 3 cups of lemon but only adds 2 more cups of water (5 in all). The taste is all wrong.",
  },
  {
    art: (
      <Svg label="Maya multiplies both parts by 3 and everyone enjoys lemonade" vb="0 0 240 160" maxH={170}>
        <Stand>
          <MiniJug x={150} fill={lemonade(1, 3)} />
          <MiniJug x={178} fill={lemonade(1, 3)} />
          <MiniJug x={206} fill={lemonade(1, 3)} />
        </Stand>
        <Kid x={40} y={140} s={0.85} shirt="#f97316" longHair hair="#7c2d12" pose="point" />
        <Kid x={84} y={140} s={0.85} shirt="#22c55e" pose="cheer" />
        <text x="178" y="60" textAnchor="middle" fontSize="12" fontWeight="900" fill="#16a34a">
          3 : 9
        </text>
      </Svg>
    ),
    speech: "Times 3 for BOTH!",
    caption: "Maya multiplies both parts by 3: 3 cups of lemon to 9 cups of water. Same taste, three times as much.",
  },
];

const like = {
  headline: "A ratio is a recipe: the number of batches can change, but the recipe stays the same.",
  everyday: {
    label: "Pancake recipe, 1 batch vs 3 batches",
    art: (
      <Svg label="One batch uses 1 egg and 2 cups of milk; three batches use 3 eggs and 6 cups of milk" vb="0 0 200 150" maxH={160}>
        <text x="50" y="22" textAnchor="middle" fontSize="13" fontWeight="900" fill={DARK}>
          ×1
        </text>
        <text x="150" y="22" textAnchor="middle" fontSize="13" fontWeight="900" fill={C}>
          ×3
        </text>
        <ellipse cx="50" cy="50" rx="10" ry="13" fill="#fff7ed" stroke={DARK} strokeWidth="1.8" />
        {[0, 1].map((i) => (
          <rect key={i} x={36 + i * 18} y="80" width="14" height="22" rx="2" fill="white" stroke={DARK} strokeWidth="1.8" />
        ))}
        {[0, 1, 2].map((i) => (
          <ellipse key={i} cx={128 + i * 22} cy="50" rx="9" ry="12" fill="#fff7ed" stroke={DARK} strokeWidth="1.8" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={112 + (i % 3) * 22} y={i < 3 ? 76 : 102} width="14" height="20" rx="2" fill="white" stroke={DARK} strokeWidth="1.8" />
        ))}
        <line x1="100" y1="30" x2="100" y2="140" stroke={DARK} strokeDasharray="3 4" />
        <text x="50" y="135" textAnchor="middle" fontSize="12" fontWeight="800" fill={DARK}>
          1 egg : 2 milk
        </text>
        <text x="150" y="140" textAnchor="middle" fontSize="12" fontWeight="800" fill={DARK}>
          3 eggs : 6 milk
        </text>
      </Svg>
    ),
  },
  concept: {
    label: "Equivalent ratios",
    art: (
      <Svg label="The ratio 1 to 2 multiplied by 3 gives 3 to 6" vb="0 0 200 150" maxH={160}>
        <text x="100" y="56" textAnchor="middle" fontSize="30" fontWeight="900" fill={DARK}>
          1 : 2
        </text>
        <path d="M 60 66 Q 40 88 60 108" fill="none" stroke={C} strokeWidth="2.5" />
        <path d="M 140 66 Q 160 88 140 108" fill="none" stroke={C} strokeWidth="2.5" />
        <text x="28" y="92" textAnchor="middle" fontSize="14" fontWeight="900" fill={C}>
          ×3
        </text>
        <text x="172" y="92" textAnchor="middle" fontSize="14" fontWeight="900" fill={C}>
          ×3
        </text>
        <text x="100" y="132" textAnchor="middle" fontSize="30" fontWeight="900" fill={DARK}>
          3 : 6
        </text>
      </Svg>
    ),
  },
  pairs: [
    ["The recipe for one batch", "The ratio in its simplest form (1 : 2)"],
    ["Making 3 batches", "Multiplying every part by the same number"],
    ["Pancakes taste the same", "Equivalent ratios: 3 : 6 = 1 : 2"],
    ["One extra egg, nothing else", "Not in proportion — the result changes"],
  ] as [string, string][],
  limits:
    "Real recipes don't always scale perfectly (cooking times and pinches of salt don't just multiply). Also, a ratio compares part to part: 1 egg : 2 milk means the egg is 1 out of 3 parts, so as a fraction it is 1/3, not 1/2.",
};

export const ratioProportion: Explainer = {
  id: "ratio-proportion",
  title: "Ratio and proportion: scaling recipes",
  tagline: "Why doubling a recipe means doubling everything — and adding the same amount ruins it.",
  area: "Maths",
  ages: "10–15",
  lessons: ["math-middle/ratio-percent/ratio-and-proportion"],
  color: C,
  icon: "🍋",
  watch: [
    { title: "A ratio compares amounts", say: "Our lemonade uses 1 cup of lemon juice for every 3 cups of water. We write that as the ratio 1 : 3.", scene: <SceneRecipe /> },
    { title: "Making more: multiply both parts", say: "For twice as much, double both parts: 2 cups of lemon and 6 cups of water. It tastes exactly the same.", scene: <SceneDouble /> },
    { title: "Adding the same amount doesn't work", say: "If we just add 1 cup to each, we get 2 : 4. Now lemon is a bigger share of the drink, so it tastes too sour.", scene: <SceneWrong /> },
    { title: "Paint mixes the same way", say: "2 blue to 1 yellow makes this green, and 4 to 2 gives the exact same green. But 2 to 2 is a different colour.", scene: <ScenePaint /> },
    { title: "Proportion makes a straight line", say: "When both amounts grow by the same multiplier they are in proportion. Plotted on a graph they make a straight line through zero.", scene: <SceneGraph /> },
  ],
  try: RatioTry,
  story,
  like,
};
