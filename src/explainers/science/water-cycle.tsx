"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { useFrame } from "@/components/widgets/_shared";
import { Arrow, BigSlider, Cloud, Drop, DropBuddy, Panel, Scene, Sun, Tag, TryShell, rng } from "./_art";

const C = "#0EA5E9";
const SEA = "#2563eb";

/* ------------------------------------------------------------------ */
/* Landscape                                                           */
/* ------------------------------------------------------------------ */

function Landscape({ id, river = 0 }: { id: string; river?: number }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${id}-sky)`} />
      {/* mountain + hills */}
      <path d="M 170 230 L 270 120 L 315 75 L 360 120 L 400 150 L 400 260 L 170 260 Z" fill="#65a30d" />
      <path d="M 290 100 L 315 75 L 340 100 L 328 96 L 316 104 L 302 96 Z" fill="#fff" />
      <path d="M 200 240 C 240 190, 290 200, 400 205 L 400 260 L 190 260 Z" fill="#84cc16" />
      {/* river */}
      <path d="M 318 112 C 300 150, 330 175, 290 200 S 220 222, 180 232" fill="none" stroke="#38bdf8" strokeWidth={7} strokeLinecap="round" />
      {river > 0 && (
        <motion.path d="M 318 112 C 300 150, 330 175, 290 200 S 220 222, 180 232" fill="none" stroke="#e0f2fe" strokeWidth={3} strokeLinecap="round" strokeDasharray="6 14" animate={{ strokeDashoffset: [0, -40] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} opacity={river} />
      )}
      {/* sea */}
      <path d="M 0 206 Q 25 198 50 206 T 100 206 T 150 206 T 200 206 L 214 260 L 0 260 Z" fill={`url(#${id}-sea)`} />
      <motion.path d="M 10 222 q 10 -6 20 0 M 70 236 q 10 -6 20 0 M 130 224 q 10 -6 20 0" stroke="#93c5fd" strokeWidth={3} fill="none" strokeLinecap="round" animate={{ x: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
    </>
  );
}

function Vapour({ x, delay, rise = 110 }: { x: number; delay: number; rise?: number }) {
  return (
    <motion.path
      d={`M ${x} 205 q 5 -7 0 -14 t 0 -14`}
      stroke="#f0f9ff"
      strokeWidth={4}
      fill="none"
      strokeLinecap="round"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -rise, opacity: [0, 0.95, 0] }}
      transition={{ duration: 3.2, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function Rain({ x0, x1, top, bottom, n = 9, seed = 3 }: { x0: number; x1: number; top: number; bottom: number; n?: number; seed?: number }) {
  const r = rng(seed);
  return (
    <>
      {Array.from({ length: n }, (_, i) => {
        const x = x0 + ((x1 - x0) * (i + 0.5)) / n;
        return (
          <motion.line key={i} x1={x} x2={x - 3} y1={top} y2={top + 12} stroke="#1d4ed8" strokeWidth={3} strokeLinecap="round" initial={{ y: 0, opacity: 0 }} animate={{ y: bottom - top, opacity: [0, 1, 1, 0] }} transition={{ duration: 0.9, delay: r() * 0.9, repeat: Infinity, ease: "easeIn" }} />
        );
      })}
    </>
  );
}

function WaterCycleScene({ stage }: { stage: number }) {
  const labels = ["Sea, sun and land", "The Sun heats the sea and water vapour rises", "Vapour cools into a cloud", "The heavy cloud rains on the hills", "Rain flows back to the sea; the cycle repeats"];
  const cloudAway = stage >= 3;
  return (
    <Scene label={`Water cycle: ${labels[stage]}`}>
      <Landscape id={`wc${stage}`} river={stage >= 4 ? 1 : 0} />
      <Sun x={52} y={48} r={24} glow={stage >= 1} />

      {stage >= 1 && (
        <>
          <Arrow x1={72} y1={78} x2={95} y2={190} color="#f59e0b" w={3} dash />
          <Arrow x1={60} y1={82} x2={45} y2={190} color="#f59e0b" w={3} dash delay={0.2} />
          {[30, 70, 110, 150].map((x, i) => (
            <Vapour key={x} x={x} delay={i * 0.6} rise={stage >= 2 ? 100 : 120} />
          ))}
          <Tag x={110} y={168} text="EVAPORATION" color="#f59e0b" />
        </>
      )}

      {stage >= 2 && (
        <motion.g initial={false} animate={{ x: cloudAway ? 170 : 0 }} transition={{ duration: 1.6, ease: "easeInOut" }}>
          <motion.g initial={stage === 2 ? { scale: 0.2, opacity: 0 } : false} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
            <Cloud x={130} y={92} s={1.05} face fill={cloudAway ? "#cbd5e1" : "#ffffff"} edge={cloudAway ? "#64748b" : "#c7d2e0"} mood={cloudAway ? "wow" : "happy"} />
          </motion.g>
        </motion.g>
      )}
      {stage === 2 && (
        <>
          {[100, 125, 150, 165].map((x, i) => (
            <motion.circle key={x} cx={x} cy={120} r={3} fill="#bae6fd" stroke="#0284c7" initial={{ y: 30, opacity: 0 }} animate={{ y: -18, opacity: [0, 1, 0] }} transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }} />
          ))}
          <Tag x={135} y={26} text="CONDENSATION" color="#6366f1" delay={0.8} />
        </>
      )}
      {stage >= 3 && (
        <>
          <Rain x0={268} x1={332} top={96} bottom={stage >= 4 ? 140 : 150} n={stage >= 4 ? 6 : 9} />
          <Tag x={300} y={26} text="PRECIPITATION" color="#1d4ed8" delay={1.4} />
          {stage === 3 && <Tag x={135} y={26} text="CONDENSATION" color="#6366f1" delay={0} />}
        </>
      )}
      {stage >= 4 && (
        <>
          <Tag x={135} y={26} text="CONDENSATION" color="#6366f1" delay={0} />
          <Tag x={262} y={246} text="COLLECTION" color="#0891b2" delay={0.6} />
          {/* the loop */}
          <Arrow x1={175} y1={70} x2={238} y2={70} cx={206} cy={56} color="#334155" w={3} delay={0.8} />
          <Arrow x1={240} y1={226} x2={190} y2={232} color="#334155" w={3} delay={1.1} />
          <motion.circle r={6} fill="#38bdf8" stroke="#0369a1" strokeWidth={2} animate={{ cx: [318, 305, 312, 290, 230, 182], cy: [112, 150, 175, 200, 220, 232] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Try it: make it rain                                                */
/* ------------------------------------------------------------------ */

type P = { x: number; y: number; id: number };
const HOME = 110;
const AWAY = 300;
const FULL = 22;

function MakeItRain() {
  const [heat, setHeat] = useState(0);
  const [, setTick] = useState(0);
  const sim = useRef({ vapour: [] as P[], rain: [] as P[], water: 0, cloudX: HOME, phase: "gather" as "gather" | "moving" | "raining" | "back", spawn: 0, rainSpawn: 0, landed: 0, showers: 0, river: 0, nextId: 1 });
  const rand = useRef(rng(7));

  useFrame((dt) => {
    const s = sim.current;
    const r = rand.current;
    s.spawn += (heat / 100) * 7 * dt;
    while (s.spawn >= 1) {
      s.spawn -= 1;
      s.vapour.push({ x: 20 + r() * 160, y: 212, id: s.nextId++ });
    }
    s.vapour = s.vapour.filter((p) => {
      p.y -= 48 * dt;
      p.x += (HOME - p.x) * 0.4 * dt;
      if (p.y <= 92) {
        s.water = Math.min(FULL + 4, s.water + 1);
        return false;
      }
      return true;
    });
    if (s.phase === "gather" && s.water >= FULL) s.phase = "moving";
    if (s.phase === "moving") {
      s.cloudX = Math.min(AWAY, s.cloudX + 70 * dt);
      if (s.cloudX >= AWAY) s.phase = "raining";
    }
    if (s.phase === "raining") {
      s.rainSpawn += 16 * dt;
      while (s.rainSpawn >= 1) {
        s.rainSpawn -= 1;
        s.rain.push({ x: s.cloudX - 30 + r() * 60, y: 100, id: s.nextId++ });
      }
      s.water -= 5 * dt;
      if (s.water <= 0) {
        s.water = 0;
        s.phase = "back";
        s.showers += 1;
      }
    }
    if (s.phase === "back") {
      s.cloudX = Math.max(HOME, s.cloudX - 70 * dt);
      if (s.cloudX <= HOME) s.phase = "gather";
    }
    s.rain = s.rain.filter((p) => {
      p.y += 170 * dt;
      if (p.y >= 160) {
        s.landed += 1;
        s.river = 1;
        return false;
      }
      return true;
    });
    s.river = Math.max(0, s.river - 0.25 * dt);
    setTick((t) => (t + 1) % 1000000);
  });

  const s = sim.current;
  const reset = () => {
    sim.current = { vapour: [], rain: [], water: 0, cloudX: HOME, phase: "gather", spawn: 0, rainSpawn: 0, landed: 0, showers: 0, river: 0, nextId: 1 };
    rand.current = rng(7);
    setHeat(0);
  };

  const fullness = Math.min(1, s.water / FULL);
  const grey = Math.round(255 - fullness * 95);
  const cloudFill = `rgb(${grey},${grey + 4 > 255 ? 255 : grey + 4},${Math.min(255, grey + 14)})`;
  const bloom = Math.min(1, s.landed / 70);
  const sunY = 100 - heat * 0.6;

  let status: string;
  let done = false;
  if (s.phase === "moving") status = "The cloud is full and heavy! The wind blows it over the hills…";
  else if (s.phase === "raining") status = "Precipitation! Rain falls on the hill and runs down the river to the sea.";
  else if (s.phase === "back") status = "The cloud is empty, so it drifts back over the sea.";
  else if (heat === 0) status = s.showers ? `You made it rain ${s.showers} time${s.showers > 1 ? "s" : ""}! Turn the Sun up again to make another cloud.` : "The sea is cool. Slide the Sun up to warm it!";
  else {
    status = `Evaporation! Warm water rises as vapour and makes a cloud. The cloud is ${Math.round(fullness * 100)}% full.`;
    if (s.showers >= 2) {
      status = `Brilliant: ${s.showers} rain showers! The flowers on the hill are blooming. The same water goes round and round.`;
      done = true;
    }
  }

  return (
    <TryShell title="Make it rain!" hint="Slide the Sun to heat the sea. Watch the vapour rise, the cloud grow, and the rain fall." onReset={reset} status={status} color={C} done={done}>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <Scene label={`Water cycle game. Cloud ${Math.round(fullness * 100)} percent full. ${status}`}>
          <Landscape id="wctry" river={s.river} />
          <rect x={0} y={200} width={214} height={60} fill="#f97316" opacity={heat / 400} />
          <g>
            <Sun x={50} y={sunY} r={18 + heat * 0.08} glow={heat > 40} />
          </g>
          {/* flowers on the hill */}
          {[240, 262, 350, 372].map((x, i) => (
            <g key={x} transform={`translate(${x} ${222 - (i % 2) * 6})`}>
              <line x1={0} y1={0} x2={0} y2={-8 - bloom * 14} stroke="#15803d" strokeWidth={3} />
              {bloom > 0.15 && <circle cx={0} cy={-8 - bloom * 14} r={2 + bloom * 5} fill={["#f43f5e", "#facc15", "#a855f7", "#fb923c"][i]} stroke="#fff" strokeWidth={1.5} />}
            </g>
          ))}
          {s.vapour.map((p) => (
            <circle key={p.id} cx={p.x} cy={p.y} r={4} fill="#f0f9ff" opacity={0.25 + ((212 - p.y) / 120) * 0.6} />
          ))}
          {(s.water > 0.5 || s.phase !== "gather") && (
            <g>
              <g transform={`translate(${s.cloudX} 92) scale(${0.45 + fullness * 0.75}) translate(${-s.cloudX} -92)`}>
                <Cloud x={s.cloudX} y={92} fill={cloudFill} edge={fullness > 0.7 ? "#64748b" : "#c7d2e0"} face mood={s.phase === "raining" ? "wow" : "happy"} />
              </g>
            </g>
          )}
          {s.rain.map((p) => (
            <Drop key={p.id} x={p.x} y={p.y} s={0.28} fill="#3b82f6" />
          ))}
          <g>
            <rect x={300} y={12} width={88} height={16} rx={8} fill="#fff" stroke="#94a3b8" strokeWidth={2} />
            <rect x={302} y={14} width={84 * fullness} height={12} rx={6} fill={SEA} />
            <text x={344} y={44} textAnchor="middle" fontSize={11} fontWeight={800} fill="#1e3a8a">
              cloud water
            </text>
          </g>
        </Scene>
      </div>
      <div className="mt-3">
        <BigSlider label="How hot is the Sun" value={heat} min={0} max={100} onChange={setHeat} left="🌥️" right="☀️" color="#f59e0b" />
      </div>
    </TryShell>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy art                                                 */
/* ------------------------------------------------------------------ */

const PanelSea = () => (
  <>
    <rect width="240" height="160" fill="#bae6fd" />
    <path d="M 0 112 Q 20 104 40 112 T 80 112 T 120 112 T 160 112 T 200 112 T 240 112 L 240 160 L 0 160 Z" fill={SEA} />
  </>
);

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Drip the water drop smiling in the blue sea under a smiling sun">
        <PanelSea />
        <Sun x={36} y={34} r={20} />
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <DropBuddy x={110} y={110} s={1.3} />
        </motion.g>
      </Panel>
    ),
    speech: "Ooh, it's getting warm!",
    caption: "Drip the water drop is swimming in the sea on a sunny day.",
  },
  {
    art: (
      <Panel label="Drip turns into see-through vapour and floats up out of the sea">
        <PanelSea />
        <Sun x={36} y={34} r={20} glow />
        <motion.g animate={{ y: [10, -6] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
          <DropBuddy x={110} y={74} s={1.15} ghost mood="wow" />
        </motion.g>
        <path d="M 96 108 q 5 -6 0 -12 M 124 108 q 5 -6 0 -12" stroke="#f0f9ff" strokeWidth={3} fill="none" strokeLinecap="round" />
      </Panel>
    ),
    speech: "I'm floating!",
    caption: "The Sun's heat turns Drip into invisible water vapour, and up she goes.",
  },
  {
    art: (
      <Panel label="Drip squashed inside a cloud with lots of other drops, high in the cold sky">
        <rect width="240" height="160" fill="#93c5fd" />
        {[30, 200, 70, 160].map((x, i) => (
          <text key={x} x={x} y={30 + i * 30} fontSize={14} fill="#fff">
            ❄
          </text>
        ))}
        <Cloud x={110} y={130} s={2.1} />
        <DropBuddy x={78} y={92} s={0.75} />
        <DropBuddy x={110} y={84} s={0.85} mood="wow" fill="#0ea5e9" />
        <DropBuddy x={142} y={94} s={0.75} />
        <DropBuddy x={96} y={110} s={0.65} />
        <DropBuddy x={128} y={112} s={0.65} />
      </Panel>
    ),
    speech: "Squeeze up, it's cold!",
    caption: "High up it's chilly, so Drip turns back into a tiny drop and huddles with friends to make a cloud.",
  },
  {
    art: (
      <Panel label="Drip falls as rain onto a hill and slides down a river back to the sea">
        <rect width="240" height="160" fill="#bfdbfe" />
        <path d="M 0 160 L 0 90 C 40 70, 80 80, 130 120 L 180 160 Z" fill="#65a30d" />
        <path d="M 30 82 C 60 100, 90 110, 120 130 S 170 150, 200 150" stroke="#38bdf8" strokeWidth={6} fill="none" strokeLinecap="round" />
        <path d="M 170 150 Q 200 142 240 148 L 240 160 L 160 160 Z" fill={SEA} />
        <Cloud x={60} y={44} s={0.9} fill="#cbd5e1" edge="#64748b" />
        <Rain x0={35} x1={85} top={46} bottom={80} n={5} />
        <motion.g animate={{ x: [0, 60], y: [0, 26] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeIn" }}>
          <DropBuddy x={110} y={112} s={0.8} mood="happy" />
        </motion.g>
      </Panel>
    ),
    speech: "Wheee! Home again!",
    caption: "The heavy cloud rains, and Drip rolls down a river back to the sea, ready to go round again.",
  },
];

const like: Explainer["like"] = {
  headline: "The water cycle is like a kettle steaming up a cold kitchen window.",
  everyday: {
    label: "A kettle steaming onto a cold window",
    art: (
      <Panel label="A hot kettle puffs steam onto a cold window where water drops form and run down">
        <rect width="240" height="160" fill="#fef3c7" />
        <rect x={140} y={14} width={86} height={108} rx={6} fill="#dbeafe" stroke="#64748b" strokeWidth={5} />
        <line x1={183} y1={14} x2={183} y2={122} stroke="#64748b" strokeWidth={4} />
        {[[156, 40], [170, 70], [196, 52], [210, 88], [160, 98], [200, 104]].map(([x, y], i) => (
          <motion.g key={i} animate={{ y: [0, 10] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: "reverse" }}>
            <Drop x={x} y={y} s={0.22} />
          </motion.g>
        ))}
        <rect x={0} y={132} width={240} height={28} fill="#d6a76c" />
        <path d="M 30 132 L 38 92 Q 60 80 82 92 L 90 132 Z" fill="#ef4444" stroke="#991b1b" strokeWidth={2.5} />
        <path d="M 86 104 L 108 92" stroke="#991b1b" strokeWidth={6} strokeLinecap="round" />
        <rect x={50} y={80} width={20} height={6} rx={3} fill="#991b1b" />
        {[0, 1, 2].map((i) => (
          <motion.path key={i} d="M 108 88 q 8 -8 16 -4 t 16 -6" stroke="#fff" strokeWidth={5} fill="none" strokeLinecap="round" animate={{ x: [0, 18], opacity: [0.9, 0] }} transition={{ duration: 1.6, delay: i * 0.5, repeat: Infinity }} />
        ))}
      </Panel>
    ),
  },
  concept: {
    label: "The water cycle",
    art: (
      <Panel label="Sun heats the sea, vapour rises to a cloud, rain falls on the hills">
        <rect width="240" height="160" fill="#e0f2fe" />
        <path d="M 120 160 L 190 70 L 240 110 L 240 160 Z" fill="#65a30d" />
        <path d="M 0 124 Q 20 118 40 124 T 80 124 T 130 124 L 140 160 L 0 160 Z" fill={SEA} />
        <Sun x={30} y={30} r={16} />
        {[30, 60, 90].map((x, i) => (
          <motion.path key={x} d={`M ${x} 118 q 4 -6 0 -12 t 0 -12`} stroke="#fff" strokeWidth={3} fill="none" strokeLinecap="round" animate={{ y: [0, -50], opacity: [0, 1, 0] }} transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity }} />
        ))}
        <Cloud x={160} y={50} s={0.9} fill="#e2e8f0" edge="#64748b" />
        <Rain x0={140} x1={180} top={52} bottom={88} n={4} />
      </Panel>
    ),
  },
  pairs: [
    ["The hot kettle", "The Sun warming the sea"],
    ["Steam puffing out", "Water vapour rising (evaporation)"],
    ["Drops forming on the cold window", "Clouds forming in cold air (condensation)"],
    ["Drops running down the glass", "Rain falling (precipitation)"],
  ],
  limits:
    "The Sun doesn't boil the sea: water evaporates slowly even when it's only warm. Real water vapour is invisible; the white 'steam' you see from a kettle is already tiny drops, a lot like a cloud.",
};

export const waterCycle: Explainer = {
  id: "water-cycle",
  title: "The water cycle",
  tagline: "Follow one drop of water from the sea, up to a cloud, and back down as rain.",
  area: "Science",
  ages: "6–11",
  lessons: ["my-world/weather-and-seasons/whats-the-weather", "biology-school/ecosystems-and-environment/cycles-and-human-impact", "social-studies/world-geography/climate-zones"],
  color: C,
  icon: "💧",
  watch: [
    { title: "Water goes round and round", say: "Water is in seas, lakes and rivers. The same water travels round and round in a loop called the water cycle.", scene: <WaterCycleScene stage={0} /> },
    { title: "1. Evaporation", say: "The Sun warms the sea. Some water turns into an invisible gas called water vapour, and floats up into the sky.", scene: <WaterCycleScene stage={1} /> },
    { title: "2. Condensation", say: "High up, the air is cold. The vapour cools and turns back into tiny drops of water. Lots of tiny drops make a cloud!", scene: <WaterCycleScene stage={2} /> },
    { title: "3. Precipitation", say: "The tiny drops bump together and grow. When they get too heavy, they fall as rain, snow or hail.", scene: <WaterCycleScene stage={3} /> },
    { title: "4. Collection", say: "The rain runs into rivers, lakes and the ground, and flows back to the sea. Then the whole trip starts again!", scene: <WaterCycleScene stage={4} /> },
  ],
  try: MakeItRain,
  story,
  like,
};
