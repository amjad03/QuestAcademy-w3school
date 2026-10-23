"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { useFrame, useSvgDrag } from "@/components/widgets/_shared";
import { Arrow, Face, Kid, Label, Panel, Scene, Sun, Tag, TryShell } from "./_art";

const C = "#22C55E";
const LEAF = "#16a34a";

/* ------------------------------------------------------------------ */
/* The plant                                                           */
/* ------------------------------------------------------------------ */

function Leaf({ x, y, r, s = 1 }: { x: number; y: number; r: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M 0 0 C 14 -22, 50 -22, 64 0 C 50 22, 14 22, 0 0 Z" fill="#22c55e" stroke={LEAF} strokeWidth={3} />
      <path d="M 4 0 L 58 0 M 22 0 l 10 -8 M 36 0 l 10 -8 M 22 0 l 10 8 M 36 0 l 10 8" stroke="#bbf7d0" strokeWidth={2} strokeLinecap="round" fill="none" />
    </g>
  );
}

/** Plant growing out of soil at (x, ground). `h` is stem height. */
function Plant({ x, ground, h = 110, flower, face = true }: { x: number; ground: number; h?: number; flower?: boolean; face?: boolean }) {
  const top = ground - h;
  return (
    <g>
      {/* roots */}
      <path d={`M ${x} ${ground} q -6 18 -26 30 M ${x} ${ground} q 4 22 -2 40 M ${x} ${ground} q 8 16 28 26 M ${x - 12} ${ground + 18} q -10 4 -16 14 M ${x + 14} ${ground + 16} q 10 6 12 16`} stroke="#a16207" strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d={`M ${x} ${ground} C ${x - 6} ${ground - h * 0.4}, ${x + 6} ${ground - h * 0.7}, ${x} ${top}`} stroke={LEAF} strokeWidth={7} fill="none" strokeLinecap="round" />
      <Leaf x={x} y={ground - h * 0.35} r={-150} s={0.85} />
      <Leaf x={x} y={ground - h * 0.55} r={-25} s={0.95} />
      <Leaf x={x} y={ground - h * 0.8} r={-160} s={0.75} />
      {flower ? (
        <g transform={`translate(${x} ${top})`}>
          {Array.from({ length: 10 }, (_, i) => (
            <ellipse key={i} cx={0} cy={-17} rx={7} ry={13} fill="#facc15" stroke="#ca8a04" strokeWidth={1.5} transform={`rotate(${i * 36})`} />
          ))}
          <circle r={13} fill="#92400e" />
          {face && <Face s={0.6} eye="#fde68a" />}
        </g>
      ) : (
        <g transform={`translate(${x} ${top})`}>
          <circle r={10} fill="#4ade80" stroke={LEAF} strokeWidth={3} />
          {face && <Face s={0.45} />}
        </g>
      )}
    </g>
  );
}

function Ground({ y = 200, id }: { y?: number; id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bae6fd" />
          <stop offset="1" stopColor="#f0f9ff" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${id}-sky)`} />
      <rect y={y} width="400" height={260 - y} fill="#92400e" />
      <rect y={y} width="400" height={8} fill="#65a30d" />
      {[30, 90, 310, 370].map((x) => (
        <path key={x} d={`M ${x} ${y} l -4 -10 M ${x} ${y} l 0 -12 M ${x} ${y} l 4 -10`} stroke="#65a30d" strokeWidth={3} strokeLinecap="round" />
      ))}
    </>
  );
}

function Bubble2({ cx, cy, text, color, delay, dx = 0, dy = -60, inward }: { cx: number; cy: number; text: string; color: string; delay: number; dx?: number; dy?: number; inward?: boolean }) {
  return (
    <motion.g initial={{ x: inward ? -dx : 0, y: inward ? -dy : 0, opacity: 0 }} animate={{ x: inward ? 0 : dx, y: inward ? 0 : dy, opacity: [0, 1, 1, 0] }} transition={{ duration: 2.6, delay, repeat: Infinity, ease: "easeInOut" }}>
      <circle cx={cx} cy={cy} r={14} fill="#fff" stroke={color} strokeWidth={2.5} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize={10} fontWeight={900} fill={color}>
        {text}
      </text>
    </motion.g>
  );
}

function PlantScene({ stage }: { stage: number }) {
  const labels = ["A plant in the soil", "Leaves catch sunlight", "Roots drink water", "Leaves take in carbon dioxide from the air", "The leaf makes sugar food", "The leaf gives out oxygen we breathe"];
  const x = 200;
  const ground = 200;
  return (
    <Scene label={`How plants make food: ${labels[stage]}`}>
      <Ground id={`ps${stage}`} />
      <Sun x={56} y={48} r={24} glow={stage >= 1} />
      <motion.g initial={false} animate={{ scale: stage >= 4 ? 1.06 : 1 }} transition={{ duration: 1 }}>
        <Plant x={x} ground={ground} h={stage >= 4 ? 125 : 110} flower={stage >= 4} />
      </motion.g>

      {stage >= 1 && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.line key={i} x1={78 + i * 6} y1={64 + i * 10} x2={168 + i * 10} y2={110 + i * 22} stroke="#facc15" strokeWidth={5} strokeLinecap="round" strokeDasharray="10 12" animate={{ strokeDashoffset: [0, -44] }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} />
          ))}
          {stage === 1 && <Tag x={110} y={130} text="SUNLIGHT" color="#ca8a04" />}
        </>
      )}

      {stage >= 2 && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <motion.circle key={i} r={4.5} fill="#38bdf8" stroke="#0369a1" strokeWidth={1.5} initial={{ cx: 186, cy: 232 }} animate={{ cx: [186, 196, 200, 200], cy: [236, 214, 170, 112] }} transition={{ duration: 2.4, delay: i * 0.6, repeat: Infinity, ease: "linear" }} />
          ))}
          {[[150, 228], [250, 236], [120, 246]].map(([dx, dy], i) => (
            <circle key={i} cx={dx} cy={dy} r={5} fill="#38bdf8" opacity={0.8} />
          ))}
          {stage === 2 && <Tag x={300} y={232} text="WATER" color="#0284c7" />}
        </>
      )}

      {stage >= 3 && (
        <>
          {[0, 1, 2].map((i) => (
            <Bubble2 key={i} cx={262} cy={112} text="CO₂" color="#64748b" delay={i * 0.9} dx={70} dy={-30} inward />
          ))}
          {stage === 3 && <Tag x={320} y={52} text="CARBON DIOXIDE" color="#475569" />}
        </>
      )}

      {stage >= 4 && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 30, 70] }} transition={{ duration: 2.2, delay: i * 0.7, repeat: Infinity }}>
              <rect x={194} y={118} width={12} height={12} rx={2} fill="#fef3c7" stroke="#d97706" strokeWidth={2} />
            </motion.g>
          ))}
          <Tag x={300} y={232} text="SUGAR = FOOD" color="#d97706" delay={0.4} />
        </>
      )}

      {stage >= 5 && (
        <>
          {[0, 1, 2].map((i) => (
            <Bubble2 key={i} cx={150} cy={118} text="O₂" color="#0ea5e9" delay={i * 0.9} dx={-60} dy={-50} />
          ))}
          <Kid x={70} y={200} s={0.95} shirt="#ef4444" mood="happy" />
          <Tag x={92} y={232} text="OXYGEN" color="#0ea5e9" />
        </>
      )}
      {stage >= 4 && <Label x={200} y={20} size={13}>sunlight + water + carbon dioxide → sugar{stage >= 5 ? " + oxygen" : ""}</Label>}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Try it: give the plant what it needs                                */
/* ------------------------------------------------------------------ */

type Need = "sun" | "water" | "air";
const HOMES: Record<Need, { x: number; y: number }> = { sun: { x: 50, y: 50 }, water: { x: 50, y: 135 }, air: { x: 350, y: 60 } };
const SLOTS: Record<Need, { x: number; y: number }> = { sun: { x: 140, y: 42 }, water: { x: 255, y: 170 }, air: { x: 285, y: 85 } };
const NEED_NAME: Record<Need, string> = { sun: "sunlight", water: "water", air: "air (carbon dioxide)" };

function Token({ kind, pos, svg, onMove, onDrop, placed }: { kind: Need; pos: { x: number; y: number }; svg: React.RefObject<SVGSVGElement | null>; onMove: (p: { x: number; y: number }) => void; onDrop: () => void; placed: boolean }) {
  const drag = useSvgDrag(svg, onMove, onDrop);
  return (
    <g transform={`translate(${pos.x} ${pos.y})`} {...drag} role="button" aria-label={`Drag the ${NEED_NAME[kind]} to the plant`} style={{ ...drag.style, cursor: placed ? "default" : "grab" }}>
      <circle r={30} fill="#fff" opacity={placed ? 0 : 0.9} stroke={placed ? "none" : "#94a3b8"} strokeWidth={2.5} strokeDasharray="5 4" />
      {kind === "sun" && <Sun x={0} y={0} r={16} />}
      {kind === "water" && (
        <g transform="rotate(-20)">
          <rect x={-16} y={-12} width={26} height={22} rx={5} fill="#0ea5e9" stroke="#0369a1" strokeWidth={2} />
          <path d="M 10 -6 L 24 -16 L 26 -12 L 12 2 Z" fill="#0ea5e9" stroke="#0369a1" strokeWidth={2} />
          <path d="M -12 -12 Q -2 -26 8 -12" fill="none" stroke="#0369a1" strokeWidth={3} />
        </g>
      )}
      {kind === "air" && (
        <g>
          <path d="M -22 -6 q 10 -8 20 0 t 20 0 M -22 6 q 10 -8 20 0 t 20 0" stroke="#64748b" strokeWidth={3.5} fill="none" strokeLinecap="round" />
          <text y={22} textAnchor="middle" fontSize={11} fontWeight={900} fill="#475569">
            CO₂
          </text>
        </g>
      )}
    </g>
  );
}

function FeedThePlant() {
  const svg = useRef<SVGSVGElement>(null);
  const [pos, setPos] = useState<Record<Need, { x: number; y: number }>>({ ...HOMES });
  const [on, setOn] = useState<Record<Need, boolean>>({ sun: false, water: false, air: false });
  const [growth, setGrowth] = useState(0);
  const [oxy, setOxy] = useState(0);
  const all = on.sun && on.water && on.air;

  useFrame(
    (dt) => {
      setGrowth((g) => Math.min(1, g + dt * 0.12));
      setOxy((o) => (o + dt) % 3);
    },
    all,
  );

  const reset = () => {
    setPos({ ...HOMES });
    setOn({ sun: false, water: false, air: false });
    setGrowth(0);
  };

  const move = (k: Need) => (p: { x: number; y: number }) => {
    if (on[k]) return;
    setPos((s) => ({ ...s, [k]: { x: Math.max(20, Math.min(380, p.x)), y: Math.max(20, Math.min(240, p.y)) } }));
  };
  const drop = (k: Need) => () => {
    if (on[k]) return;
    const p = pos[k];
    if (Math.hypot(p.x - 200, p.y - 120) < 110) {
      setOn((s) => ({ ...s, [k]: true }));
      setPos((s) => ({ ...s, [k]: SLOTS[k] }));
    } else setPos((s) => ({ ...s, [k]: HOMES[k] }));
  };

  const missing = (Object.keys(on) as Need[]).filter((k) => !on[k]);
  const h = 70 + growth * 60;
  const done = growth >= 1;
  const status = done
    ? "Wow! With sunlight, water and air, the plant made lots of sugar food. It grew tall, flowered, and gave out oxygen!"
    : all
      ? `Photosynthesis is happening! The leaves are making sugar… growing ${Math.round(growth * 100)}%`
      : missing.length === 3
        ? "This plant is hungry. Drag the Sun, the watering can and the air onto the plant."
        : `Good! Now the plant still needs ${missing.map((k) => NEED_NAME[k]).join(" and ")}.`;

  return (
    <TryShell title="Feed the plant" hint="A plant makes its own food. Drag the three things it needs onto it." onReset={reset} status={status} color={C} done={done}>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg ref={svg} viewBox="0 0 400 260" role="img" aria-label={`Plant game. ${status}`} className="block h-auto w-full select-none" style={{ maxHeight: 300, touchAction: "none" }}>
          <Ground id="pstry" />
          <rect x={95} y={20} width={210} height={180} rx={24} fill={all ? "#dcfce7" : "#fff"} opacity={0.5} stroke="#86efac" strokeWidth={2} strokeDasharray="8 6" />
          {on.sun && [0, 1].map((i) => <motion.line key={i} x1={152} y1={56 + i * 8} x2={190 + i * 14} y2={110 + i * 20} stroke="#facc15" strokeWidth={5} strokeLinecap="round" strokeDasharray="10 12" animate={{ strokeDashoffset: [0, -44] }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} />)}
          {on.water && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.circle key={i} r={4} fill="#38bdf8" animate={{ cx: [246, 230, 210, 200], cy: [180, 196, 204, 206] }} transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }} />
              ))}
              <ellipse cx={200} cy={222} rx={60} ry={14} fill="#1e3a8a" opacity={0.35} />
            </>
          )}
          <motion.g key={growth >= 1 ? "big" : "small"} animate={{ rotate: all ? [-1.5, 1.5, -1.5] : 0 }} transition={{ duration: 2.5, repeat: Infinity }}>
            <Plant x={200} ground={200} h={h} flower={done} />
          </motion.g>
          {!all && <Label x={200} y={192 - h - 22} size={12} color="#b45309">{missing.length === 3 ? "I'm hungry!" : `I need ${NEED_NAME[missing[0]].split(" ")[0]}!`}</Label>}
          {all && (
            <>
              <motion.rect x={194} y={200 - h * 0.55} width={12} height={12} rx={2} fill="#fef3c7" stroke="#d97706" strokeWidth={2} animate={{ y: [0, 40], opacity: [1, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
              <g opacity={oxy < 2.4 ? 1 : 0}>
                <circle cx={140 - oxy * 20} cy={140 - oxy * 25} r={13} fill="#fff" stroke="#0ea5e9" strokeWidth={2.5} />
                <text x={140 - oxy * 20} y={144 - oxy * 25} textAnchor="middle" fontSize={10} fontWeight={900} fill="#0ea5e9">
                  O₂
                </text>
              </g>
            </>
          )}
          {(Object.keys(HOMES) as Need[]).map((k) => (
            <Token key={k} kind={k} pos={pos[k]} svg={svg} onMove={move(k)} onDrop={drop(k)} placed={on[k]} />
          ))}
        </svg>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm font-extrabold">
        {(["sun", "water", "air"] as Need[]).map((k) => (
          <span key={k} className="rounded-xl border-2 border-line px-2 py-2" style={on[k] ? { background: "color-mix(in srgb, #22C55E 20%, transparent)" } : undefined}>
            {on[k] ? "✅" : "⬜"} {k === "sun" ? "Sunlight" : k === "water" ? "Water" : "Air (CO₂)"}
          </span>
        ))}
      </div>
    </TryShell>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const Garden = () => (
  <>
    <rect width="240" height="160" fill="#e0f2fe" />
    <rect y={128} width="240" height={32} fill="#92400e" />
    <rect y={128} width="240" height={6} fill="#65a30d" />
  </>
);

const Sandwich = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <path d="M -14 4 L 0 -12 L 14 4 Z" fill="#fde68a" stroke="#b45309" strokeWidth={2} />
    <path d="M -14 4 L 14 4" stroke="#22c55e" strokeWidth={3} />
  </g>
);

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Leo holds out his sandwich to his sunflower">
        <Garden />
        <Kid x={60} y={134} s={1} arm="out" shirt="#f97316">
          <Sandwich x={38} y={-52} />
        </Kid>
        <Plant x={160} ground={128} h={78} flower />
      </Panel>
    ),
    speech: "Are you hungry, Sunny?",
    caption: "Leo wants to share his lunch with his sunflower, Sunny.",
  },
  {
    art: (
      <Panel label="Sunny the sunflower smiles and says no thanks">
        <Garden />
        <Kid x={50} y={134} s={1} mood="wow" shirt="#f97316" />
        <Plant x={150} ground={128} h={78} flower />
      </Panel>
    ),
    speech: "No thanks! I make my own food.",
    caption: "Plants don't eat sandwiches. They make their own food!",
  },
  {
    art: (
      <Panel label="Sunlight shines on Sunny's leaves while her roots drink water and leaves take in air">
        <Garden />
        <Sun x={30} y={30} r={16} />
        <Arrow x1={48} y1={42} x2={100} y2={76} color="#eab308" w={3} />
        <Plant x={120} ground={128} h={78} flower />
        {[0, 1].map((i) => <motion.circle key={i} r={4} fill="#38bdf8" animate={{ cx: [110, 120], cy: [150, 100] }} transition={{ duration: 1.6, delay: i * 0.8, repeat: Infinity }} />)}
        <Arrow x1={200} y1={92} x2={150} y2={92} color="#64748b" w={3} />
        <text x={200} y={110} fontSize={11} fontWeight={900} fill="#475569" textAnchor="middle">
          CO₂
        </text>
      </Panel>
    ),
    speech: "Sun + water + air = yum!",
    caption: "Her leaves use sunlight to turn water and carbon dioxide into sugar.",
  },
  {
    art: (
      <Panel label="Leo takes a deep breath of the oxygen Sunny gives out">
        <Garden />
        <Plant x={80} ground={128} h={78} flower />
        {[0, 1, 2].map((i) => (
          <motion.g key={i} animate={{ x: [0, 50], y: [0, -10], opacity: [0, 1, 0] }} transition={{ duration: 2.2, delay: i * 0.7, repeat: Infinity }}>
            <circle cx={110} cy={70} r={10} fill="#fff" stroke="#0ea5e9" strokeWidth={2} />
            <text x={110} y={74} textAnchor="middle" fontSize={8} fontWeight={900} fill="#0ea5e9">
              O₂
            </text>
          </motion.g>
        ))}
        <Kid x={180} y={134} s={1} arm="up" shirt="#f97316" />
      </Panel>
    ),
    speech: "Thanks for the fresh air!",
    caption: "While she makes food, Sunny gives out oxygen, the gas Leo breathes.",
  },
];

const like: Explainer["like"] = {
  headline: "A leaf is like a tiny kitchen that bakes its own food.",
  everyday: {
    label: "A chef baking in a kitchen",
    art: (
      <Panel label="A chef puts ingredients into an oven and a cake comes out">
        <rect width="240" height="160" fill="#fff7ed" />
        <rect x={110} y={56} width={100} height={86} rx={8} fill="#94a3b8" stroke="#475569" strokeWidth={3} />
        <rect x={122} y={76} width={76} height={50} rx={5} fill="#fb923c" stroke="#475569" strokeWidth={3} />
        <motion.rect x={122} y={76} width={76} height={50} rx={5} fill="#fde047" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <path d="M 140 112 h 40 v -14 q -20 -14 -40 0 Z" fill="#fef3c7" stroke="#b45309" strokeWidth={2} />
        <Kid x={56} y={150} s={1.05} shirt="#fff" hair="#1f2937" arm="out" mood="happy">
          <rect x={-14} y={-104} width={28} height={14} rx={6} fill="#fff" stroke="#cbd5e1" />
        </Kid>
      </Panel>
    ),
  },
  concept: {
    label: "A leaf making sugar",
    art: (
      <Panel label="Sunlight, water and carbon dioxide go into a leaf; sugar and oxygen come out">
        <rect width="240" height="160" fill="#f0fdf4" />
        <Sun x={30} y={30} r={15} />
        <g transform="translate(70 92)">
          <path d="M 0 0 C 20 -40, 90 -40, 110 0 C 90 40, 20 40, 0 0 Z" fill="#22c55e" stroke={LEAF} strokeWidth={3} />
          <path d="M 6 0 L 104 0" stroke="#bbf7d0" strokeWidth={2.5} />
        </g>
        <Arrow x1={44} y1={44} x2={86} y2={74} color="#eab308" w={3} />
        <Arrow x1={60} y1={140} x2={90} y2={108} color="#0284c7" w={3} />
        <text x={46} y={152} fontSize={10} fontWeight={900} fill="#0284c7">
          water
        </text>
        <Arrow x1={216} y1={30} x2={170} y2={70} color="#64748b" w={3} />
        <text x={212} y={22} fontSize={10} fontWeight={900} fill="#475569">
          CO₂
        </text>
        <Arrow x1={160} y1={116} x2={196} y2={140} color="#d97706" w={3} />
        <text x={198} y={154} fontSize={10} fontWeight={900} fill="#b45309">
          sugar
        </text>
        <Arrow x1={120} y1={60} x2={130} y2={18} color="#0ea5e9" w={3} />
        <text x={138} y={18} fontSize={10} fontWeight={900} fill="#0284c7">
          O₂
        </text>
      </Panel>
    ),
  },
  pairs: [
    ["The oven's power", "Sunlight"],
    ["Ingredients (flour, eggs, milk)", "Water and carbon dioxide"],
    ["The chef", "Green chlorophyll inside the leaf"],
    ["The cake", "Sugar, the plant's food"],
    ["Yummy smells drifting out", "Oxygen given out into the air"],
  ],
  limits:
    "A kitchen bakes with heat, but a leaf uses light energy and stays cool. And unlike a chef, the plant also uses up some of its own sugar all day and night to stay alive (respiration).",
};

export const plants: Explainer = {
  id: "how-plants-make-food",
  title: "How plants make food",
  tagline: "Sunlight + water + air: see how a leaf makes food and gives us oxygen.",
  area: "Science",
  ages: "6–11",
  lessons: ["my-world/plants/how-plants-grow", "my-world/plants/parts-of-a-plant", "biology-school/plants-and-photosynthesis/photosynthesis"],
  color: C,
  icon: "🌱",
  watch: [
    { title: "A plant is a food factory", say: "Plants can't eat like we do. Instead, they make their own food, right inside their green leaves!", scene: <PlantScene stage={0} /> },
    { title: "1. Catch the sunlight", say: "First, the leaves catch sunlight. A green stuff in leaves, called chlorophyll, soaks up the light's energy.", scene: <PlantScene stage={1} /> },
    { title: "2. Drink up water", say: "The roots suck water up from the soil. It travels up the stem, all the way to the leaves.", scene: <PlantScene stage={2} /> },
    { title: "3. Breathe in air", say: "The leaves take in a gas from the air called carbon dioxide, through tiny holes underneath.", scene: <PlantScene stage={3} /> },
    { title: "4. Make sugar", say: "Using the Sun's energy, the leaf turns water and carbon dioxide into sugar. Sugar is the plant's food, and it helps the plant grow.", scene: <PlantScene stage={4} /> },
    { title: "5. A gift of oxygen", say: "As it makes food, the leaf gives out oxygen, the gas that we breathe. This is called photosynthesis. Thank you, plants!", scene: <PlantScene stage={5} /> },
  ],
  try: FeedThePlant,
  story,
  like,
};
