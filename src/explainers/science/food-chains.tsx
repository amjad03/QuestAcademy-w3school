"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Explainer } from "../types";
import { Arrow, BigButton, Face, Kid, Label, Panel, Scene, Sun, Tag, TryShell } from "./_art";

const C = "#F97316";

/* ------------------------------------------------------------------ */
/* Characters                                                          */
/* ------------------------------------------------------------------ */

/** Rabbit facing left. Origin at its feet. */
export function Rabbit({ x, y, s = 1, mood = "happy" as "happy" | "wow" | "sad" | "sleep", flip }: { x: number; y: number; s?: number; mood?: "happy" | "wow" | "sad" | "sleep"; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <circle cx={26} cy={-20} r={7} fill="#fff" />
      <ellipse cx={8} cy={-18} rx={22} ry={17} fill="#c4a484" stroke="#7c5a3a" strokeWidth={2} />
      <ellipse cx={-6} cy={-46} rx={5} ry={18} fill="#c4a484" stroke="#7c5a3a" strokeWidth={2} transform="rotate(-12 -6 -46)" />
      <ellipse cx={6} cy={-46} rx={5} ry={18} fill="#c4a484" stroke="#7c5a3a" strokeWidth={2} transform="rotate(10 6 -46)" />
      <ellipse cx={-6} cy={-46} rx={2} ry={12} fill="#fbcfe8" transform="rotate(-12 -6 -46)" />
      <circle cx={-8} cy={-26} r={14} fill="#c4a484" stroke="#7c5a3a" strokeWidth={2} />
      <g transform="translate(-10 -26) scale(-1 1)">
        <Face s={0.55} mood={mood} />
      </g>
      <circle cx={-21} cy={-24} r={2.5} fill="#f472b6" />
      <ellipse cx={-2} cy={-1} rx={9} ry={4} fill="#a8896b" />
    </g>
  );
}

/** Fox facing left. Origin at its feet. */
export function Fox({ x, y, s = 1, mood = "happy" as "happy" | "wow" | "sad" | "sleep", flip }: { x: number; y: number; s?: number; mood?: "happy" | "wow" | "sad" | "sleep"; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M 30 -22 C 58 -30, 66 -6, 50 -4 C 44 -14, 38 -16, 30 -14 Z" fill="#ea580c" stroke="#9a3412" strokeWidth={2} />
      <path d="M 50 -4 C 56 -8, 60 -14, 58 -20 C 54 -12, 50 -10, 46 -8 Z" fill="#fff" />
      <ellipse cx={14} cy={-22} rx={24} ry={14} fill="#f97316" stroke="#9a3412" strokeWidth={2} />
      <path d="M -2 -10 L -4 0 M 6 -10 L 6 0 M 24 -10 L 24 0 M 32 -12 L 34 0" stroke="#7c2d12" strokeWidth={5} strokeLinecap="round" />
      <path d="M -22 -36 L -14 -60 L -4 -40 Z M -2 -40 L 4 -62 L 10 -38 Z" fill="#f97316" stroke="#9a3412" strokeWidth={2} strokeLinejoin="round" />
      <path d="M -18 -40 C -24 -30, -36 -28, -40 -26 C -30 -18, -12 -16, 0 -20 C 10 -24, 10 -36, 0 -42 C -8 -46, -16 -44, -18 -40 Z" fill="#f97316" stroke="#9a3412" strokeWidth={2} />
      <path d="M -40 -26 C -30 -18, -12 -16, -4 -22 C -12 -24, -24 -24, -40 -26 Z" fill="#fff" />
      <circle cx={-40} cy={-26} r={3} fill="#1e293b" />
      <g transform="translate(-12 -32) scale(-1 1)">
        <Face s={0.5} mood={mood} />
      </g>
    </g>
  );
}

function Grass({ x, y, s = 1, n = 5 }: { x: number; y: number; s?: number; n?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {Array.from({ length: n }, (_, i) => {
        const bx = (i - (n - 1) / 2) * 9;
        return <path key={i} d={`M ${bx - 4} 0 Q ${bx - 2} -20 ${bx + (i % 2 ? 6 : -6)} -34 Q ${bx + 2} -18 ${bx + 4} 0 Z`} fill={i % 2 ? "#22c55e" : "#16a34a"} />;
      })}
    </g>
  );
}

function Meadow() {
  return (
    <>
      <rect width="400" height="260" fill="#e0f2fe" />
      <path d="M 0 170 C 100 150, 300 160, 400 150 L 400 260 L 0 260 Z" fill="#bbf7d0" />
      <path d="M 0 210 C 120 196, 280 206, 400 196 L 400 260 L 0 260 Z" fill="#86efac" />
    </>
  );
}

function FoodChainScene({ stage }: { stage: number }) {
  const labels = ["The Sun gives out energy", "Grass uses sunlight to make food", "A rabbit eats the grass", "A fox eats the rabbit", "The arrows show where the energy goes", "Lots of grass, fewer rabbits, very few foxes"];
  if (stage >= 4) {
    const items = [
      { name: "Sun", el: <Sun x={0} y={0} r={20} /> },
      { name: "Grass", el: <Grass x={0} y={18} s={1.1} /> },
      { name: "Rabbit", el: <Rabbit x={6} y={22} s={0.8} /> },
      { name: "Fox", el: <Fox x={6} y={22} s={0.8} /> },
    ];
    if (stage === 4)
      return (
        <Scene label={`Food chain: ${labels[4]}`}>
          <rect width="400" height="260" fill="#fff7ed" />
          {items.map((it, i) => (
            <motion.g key={it.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.35 }}>
              <g transform={`translate(${50 + i * 100} 120)`}>
                <circle r={38} fill="#fff" stroke="#fdba74" strokeWidth={4} />
                {it.el}
              </g>
              <Label x={50 + i * 100} y={182}>
                {it.name}
              </Label>
            </motion.g>
          ))}
          {[0, 1, 2].map((i) => (
            <Arrow key={i} x1={92 + i * 100} y1={120} x2={110 + i * 100} y2={120} color="#ea580c" w={5} delay={0.4 + i * 0.35} />
          ))}
          <Tag x={200} y={46} text="ARROW = 'GIVES ENERGY TO'" color="#ea580c" delay={1.4} />
          <motion.circle r={7} fill="#facc15" stroke="#ca8a04" strokeWidth={2} animate={{ cx: [50, 150, 250, 350], cy: [120, 120, 120, 120], opacity: [1, 1, 1, 0] }} transition={{ duration: 3, delay: 1.6, repeat: Infinity }} />
          <Label x={200} y={226} size={12} color="#9a3412">
            producer → consumer → consumer
          </Label>
        </Scene>
      );
    return (
      <Scene label={`Food chain: ${labels[5]}`}>
        <rect width="400" height="260" fill="#fff7ed" />
        <motion.g initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6 }}>
          <rect x={60} y={184} width={280} height={50} rx={8} fill="#86efac" stroke="#16a34a" strokeWidth={3} />
          {Array.from({ length: 12 }, (_, i) => (
            <Grass key={i} x={80 + i * 22} y={226} s={0.6} n={3} />
          ))}
        </motion.g>
        <motion.g initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <rect x={120} y={124} width={160} height={54} rx={8} fill="#e7d3c0" stroke="#a8896b" strokeWidth={3} />
          {[0, 1, 2].map((i) => (
            <Rabbit key={i} x={160 + i * 40} y={172} s={0.55} />
          ))}
        </motion.g>
        <motion.g initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 1 }}>
          <rect x={165} y={64} width={70} height={54} rx={8} fill="#fed7aa" stroke="#ea580c" strokeWidth={3} />
          <Fox x={206} y={112} s={0.55} />
        </motion.g>
        <Arrow x1={350} y1={210} x2={350} y2={150} color="#ca8a04" w={8} delay={1.4} />
        <Arrow x1={350} y1={140} x2={350} y2={96} color="#ca8a04" w={3} delay={1.7} />
        <Label x={350} y={60} size={11} color="#a16207">
          less energy
        </Label>
        <Label x={350} y={74} size={11} color="#a16207">
          passed up
        </Label>
        <Tag x={200} y={30} text="ENERGY GETS USED UP AT EACH STEP" color="#ca8a04" delay={1.8} />
      </Scene>
    );
  }
  return (
    <Scene label={`Food chain: ${labels[stage]}`}>
      <Meadow />
      <Sun x={56} y={50} r={26} glow />
      {stage === 0 && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.circle key={i} r={6} fill="#facc15" initial={{ cx: 80, cy: 70 }} animate={{ cx: [80, 140 + i * 30], cy: [70, 170], opacity: [1, 0] }} transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }} />
          ))}
          <Tag x={200} y={110} text="ENERGY FROM THE SUN" color="#ca8a04" />
        </>
      )}
      {stage >= 1 && (
        <motion.g initial={stage === 1 ? { scaleY: 0 } : false} animate={{ scaleY: 1 }} transition={{ duration: 1 }}>
          {[80, 112, 144, 176].map((x) => (
            <Grass key={x} x={x} y={222} />
          ))}
        </motion.g>
      )}
      {stage >= 1 && <Arrow x1={78} y1={78} x2={120} y2={180} color="#ca8a04" w={4} draw={stage === 1} />}
      {stage === 1 && <Tag x={128} y={248} text="PRODUCER: MAKES ITS OWN FOOD" color="#16a34a" delay={0.8} />}
      {stage >= 2 && (
        <motion.g initial={stage === 2 ? { x: 160 } : false} animate={{ x: 0, y: stage === 2 ? [0, -14, 0, -14, 0, 0] : 0 }} transition={{ duration: 1.6 }}>
          <motion.g animate={{ rotate: stage === 2 ? [0, 0, 6, 0, 6, 0] : 0 }} transition={{ duration: 1.2, delay: 1.6, repeat: Infinity, repeatDelay: 0.4 }}>
            <Rabbit x={232} y={224} s={1} mood={stage >= 3 ? "wow" : "happy"} />
          </motion.g>
        </motion.g>
      )}
      {stage >= 2 && <Arrow x1={190} y1={196} x2={208} y2={196} color="#ea580c" w={5} draw={stage === 2} delay={1.4} />}
      {stage === 2 && <Tag x={250} y={140} text="CONSUMER: EATS FOOD" color="#a16207" delay={1.6} />}
      {stage >= 3 && (
        <>
          <motion.g initial={{ x: 120 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
            <Fox x={344} y={222} s={1} />
          </motion.g>
          <Arrow x1={268} y1={190} x2={292} y2={190} color="#ea580c" w={5} delay={1.2} />
          <Tag x={232} y={130} text="PREY" color="#a16207" delay={1.4} />
          <Tag x={344} y={130} text="PREDATOR" color="#c2410c" delay={1.6} />
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Try it: build the chain                                             */
/* ------------------------------------------------------------------ */

type Card = { id: string; emoji: string; name: string };
const LEVELS: { place: string; chain: Card[]; order: number[] }[] = [
  {
    place: "Meadow",
    chain: [
      { id: "sun", emoji: "☀️", name: "Sun" },
      { id: "grass", emoji: "🌿", name: "Grass" },
      { id: "rabbit", emoji: "🐇", name: "Rabbit" },
      { id: "fox", emoji: "🦊", name: "Fox" },
    ],
    order: [2, 0, 3, 1],
  },
  {
    place: "Garden",
    chain: [
      { id: "sun2", emoji: "☀️", name: "Sun" },
      { id: "leaf", emoji: "🥬", name: "Cabbage leaf" },
      { id: "caterpillar", emoji: "🐛", name: "Caterpillar" },
      { id: "bird", emoji: "🐦", name: "Bird" },
    ],
    order: [3, 1, 0, 2],
  },
  {
    place: "Ocean",
    chain: [
      { id: "sun3", emoji: "☀️", name: "Sun" },
      { id: "plankton", emoji: "🌱", name: "Tiny sea plants" },
      { id: "krill", emoji: "🦐", name: "Krill" },
      { id: "whale", emoji: "🐋", name: "Whale" },
    ],
    order: [1, 3, 2, 0],
  },
];

function hintFor(slot: number, chain: Card[]) {
  if (slot === 0) return "Every food chain starts with energy from the Sun!";
  if (slot === 1) return "Next comes a plant: it uses sunlight to make its own food.";
  return `Who eats the ${chain[slot - 1].name.toLowerCase()}? That's who gets its energy next.`;
}

function BuildTheChain() {
  const [level, setLevel] = useState(0);
  const [placed, setPlaced] = useState(0);
  const [wrong, setWrong] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const L = LEVELS[level % LEVELS.length];
  const pool = L.order.map((i) => L.chain[i]).filter((c) => L.chain.indexOf(c) >= placed);
  const complete = placed === L.chain.length;
  const allDone = complete && level === LEVELS.length - 1;

  const tap = (c: Card) => {
    if (L.chain.indexOf(c) === placed) {
      setPlaced((p) => p + 1);
      setHint(null);
      setWrong(null);
    } else {
      setWrong(c.id);
      setHint(hintFor(placed, L.chain));
      setTimeout(() => setWrong((w) => (w === c.id ? null : w)), 500);
    }
  };
  const reset = () => {
    setLevel(0);
    setPlaced(0);
    setHint(null);
  };

  const status = allDone
    ? "Food-chain expert! In every chain the energy starts at the Sun and passes from plant to animal to animal."
    : complete
      ? `Yes! ${L.chain.map((c) => c.name).join(" → ")}. The energy passed all the way along!`
      : hint ?? (placed === 0 ? "Tap the card that comes FIRST in the food chain." : `Great! Now: who gets energy from the ${L.chain[placed - 1].name.toLowerCase()}?`);

  return (
    <TryShell title={`Build the food chain: ${L.place}`} hint="Tap the cards in order, from where the energy starts to the last eater." onReset={reset} status={status} color={C} done={complete}>
      <LayoutGroup id="food-chain">
        <div className="rounded-2xl border-2 border-line p-3" style={{ background: "color-mix(in srgb, #F97316 7%, rgb(var(--surface)))" }}>
          <ol className="flex items-center justify-between gap-1 sm:gap-2" aria-label="Your food chain">
            {L.chain.map((c, i) => (
              <li key={c.id} className="flex flex-1 items-center gap-1 sm:gap-2">
                <div className="grid aspect-square w-full max-w-[110px] place-items-center rounded-2xl border-2 border-dashed" style={{ borderColor: i < placed ? "transparent" : "rgb(var(--line))" }}>
                  {i < placed ? (
                    <motion.div layoutId={c.id} className="grid h-full w-full place-items-center rounded-2xl border-2 bg-surface text-center" style={{ borderColor: C }}>
                      <span className="text-4xl sm:text-5xl" aria-hidden>
                        {c.emoji}
                      </span>
                      <span className="px-1 text-xs font-extrabold leading-tight sm:text-sm">{c.name}</span>
                    </motion.div>
                  ) : (
                    <span className="text-2xl font-black text-muted">{i + 1}</span>
                  )}
                </div>
                {i < L.chain.length - 1 && <ArrowRight className="h-6 w-6 shrink-0" style={{ color: i < placed - 1 ? C : "rgb(var(--line))" }} aria-hidden />}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-3 grid min-h-[120px] grid-cols-2 gap-2 sm:grid-cols-4">
          <AnimatePresence>
            {pool.map((c) => (
              <motion.button
                key={c.id}
                layoutId={c.id}
                type="button"
                onClick={() => tap(c)}
                animate={wrong === c.id ? { x: [0, -10, 10, -6, 6, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border-2 border-b-4 border-line bg-surface p-2 active:translate-y-[2px]"
                aria-label={c.name}
              >
                <span className="text-5xl" aria-hidden>
                  {c.emoji}
                </span>
                <span className="mt-1 text-sm font-extrabold">{c.name}</span>
              </motion.button>
            ))}
          </AnimatePresence>
          {complete && !allDone && (
            <div className="col-span-2 flex items-center justify-center sm:col-span-4">
              <BigButton onClick={() => { setLevel((l) => l + 1); setPlaced(0); setHint(null); }} color={C} active>
                Next chain: {LEVELS[level + 1].place} <ArrowRight className="h-5 w-5" />
              </BigButton>
            </div>
          )}
        </div>
      </LayoutGroup>
    </TryShell>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const PanelMeadow = () => (
  <>
    <rect width="240" height="160" fill="#e0f2fe" />
    <path d="M 0 120 C 80 110, 160 116, 240 108 L 240 160 L 0 160 Z" fill="#86efac" />
  </>
);

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="The Sun shines on happy, growing grass">
        <PanelMeadow />
        <Sun x={36} y={36} r={20} glow />
        {[90, 120, 150, 180].map((x) => (
          <Grass key={x} x={x} y={138} s={1.2} />
        ))}
        <g transform="translate(150 96)">
          <Face s={0.7} />
        </g>
      </Panel>
    ),
    speech: "Thanks for the energy, Sun!",
    caption: "The Sun shines on the meadow, and the grass uses its light to grow.",
  },
  {
    art: (
      <Panel label="Rosie the rabbit munches the grass">
        <PanelMeadow />
        {[50, 80].map((x) => (
          <Grass key={x} x={x} y={138} s={1.1} />
        ))}
        <motion.g animate={{ rotate: [0, 5, 0] }} transition={{ duration: 0.6, repeat: Infinity }}>
          <Rabbit x={120} y={138} s={1.1} />
        </motion.g>
      </Panel>
    ),
    speech: "Munch, munch!",
    caption: "Rosie the rabbit eats the grass and gets energy to hop about.",
  },
  {
    art: (
      <Panel label="Fern the fox sniffs around, looking hungry">
        <PanelMeadow />
        <Fox x={110} y={136} s={1.15} mood="wow" />
        <path d="M 40 60 q 8 -6 16 0 M 50 74 q 8 -6 16 0" stroke="#64748b" strokeWidth={2.5} fill="none" strokeLinecap="round" />
      </Panel>
    ),
    speech: "I'm hungry!",
    caption: "Fern the fox is hungry. Foxes hunt rabbits to get their energy.",
  },
  {
    art: (
      <Panel label="A chain of pictures: Sun, grass, rabbit, fox, joined by arrows">
        <rect width="240" height="160" fill="#fff7ed" />
        <Sun x={28} y={96} r={14} face={false} />
        <Grass x={84} y={112} s={0.9} />
        <Rabbit x={140} y={116} s={0.6} />
        <Fox x={208} y={116} s={0.6} />
        {[0, 1, 2].map((i) => (
          <Arrow key={i} x1={46 + i * 60} y1={100} x2={62 + i * 60} y2={100} color="#ea580c" w={4} delay={i * 0.3} />
        ))}
      </Panel>
    ),
    speech: "Energy goes along the chain!",
    caption: "The energy that started in the Sun passed from the grass to the rabbit to the fox.",
  },
];

const like: Explainer["like"] = {
  headline: "A food chain is like passing a bucket of water along a line of friends, and a bit spills every time.",
  everyday: {
    label: "Passing a leaky bucket",
    art: (
      <Panel label="Three children pass a bucket of water along a line and some spills each time">
        <rect width="240" height="160" fill="#fef9c3" />
        <rect y={136} width="240" height={24} fill="#86efac" />
        <rect x={6} y={40} width={10} height={60} fill="#64748b" />
        <path d="M 16 46 h 18 v 8" stroke="#64748b" strokeWidth={6} fill="none" />
        <Kid x={56} y={142} s={0.85} shirt="#3b82f6" arm="out" />
        <Kid x={124} y={142} s={0.85} shirt="#22c55e" arm="out" />
        <Kid x={192} y={142} s={0.85} shirt="#f97316" arm="out" />
        {[86, 154].map((x, i) => (
          <g key={x}>
            <path d={`M ${x - 9} ${92} L ${x + 9} ${92} L ${x + 6} ${110} L ${x - 6} ${110} Z`} fill="#94a3b8" stroke="#475569" strokeWidth={2} />
            <rect x={x - 8} y={94} width={16} height={i ? 5 : 9} fill="#38bdf8" />
            <motion.circle cx={x + 4} r={2.5} fill="#38bdf8" animate={{ cy: [112, 136], opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.3 }} />
          </g>
        ))}
      </Panel>
    ),
  },
  concept: {
    label: "Energy passed along a food chain",
    art: (
      <Panel label="Sun to grass to rabbit to fox, with the energy arrows getting thinner">
        <rect width="240" height="160" fill="#fff7ed" />
        <Sun x={26} y={80} r={15} face={false} />
        <Grass x={82} y={98} s={0.9} />
        <Rabbit x={140} y={102} s={0.6} />
        <Fox x={208} y={102} s={0.6} />
        <Arrow x1={44} y1={84} x2={66} y2={84} color="#ca8a04" w={8} draw={false} />
        <Arrow x1={100} y1={84} x2={118} y2={84} color="#ca8a04" w={5} draw={false} />
        <Arrow x1={162} y1={84} x2={180} y2={84} color="#ca8a04" w={2.5} draw={false} />
        <text x={120} y={140} textAnchor="middle" fontSize={11} fontWeight={900} fill="#a16207">
          less energy at each step
        </text>
      </Panel>
    ),
  },
  pairs: [
    ["The tap filling the bucket", "The Sun"],
    ["The first friend", "Grass, a producer"],
    ["The next friends in the line", "The rabbit, then the fox (consumers)"],
    ["Water spilling at each pass", "Energy used up for moving, growing and keeping warm"],
  ],
  limits:
    "In nature, much more than a splash is lost: only about a tenth of the energy passes on at each step. And most animals eat lots of different things, so real nature is a tangled food web, not a single line.",
};

export const foodChains: Explainer = {
  id: "food-chains",
  title: "Food chains",
  tagline: "Sun → grass → rabbit → fox: follow the energy as it passes along.",
  area: "Science",
  ages: "6–11",
  lessons: ["biology-school/ecosystems-and-environment/food-chains-and-energy", "exam-biology/ecology/ecology-concept-crash"],
  color: C,
  icon: "🦊",
  watch: [
    { title: "It starts with the Sun", say: "Every food chain starts with the Sun. It gives out light, and light is a kind of energy.", scene: <FoodChainScene stage={0} /> },
    { title: "Plants make food", say: "Grass uses sunlight to make its own food. Because it makes food, we call it a producer.", scene: <FoodChainScene stage={1} /> },
    { title: "The rabbit eats the grass", say: "A rabbit eats the grass. The energy stored in the grass passes into the rabbit. The rabbit is a consumer.", scene: <FoodChainScene stage={2} /> },
    { title: "The fox eats the rabbit", say: "A fox hunts and eats the rabbit, so the energy moves on again. The fox is the predator and the rabbit is its prey.", scene: <FoodChainScene stage={3} /> },
    { title: "Follow the arrows", say: "In a food chain, the arrows point to the eater. They show which way the energy goes: Sun, grass, rabbit, fox.", scene: <FoodChainScene stage={4} /> },
    { title: "Less energy each step", say: "Animals use up most of their energy just living, so only a little passes on. That's why there's lots of grass, fewer rabbits and only a few foxes.", scene: <FoodChainScene stage={5} /> },
  ],
  try: BuildTheChain,
  story,
  like,
};
