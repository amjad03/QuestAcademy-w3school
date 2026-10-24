"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Explainer, Mission, MissionApi } from "../types";
import { Arrow, Face, Kid, Label, Panel, Scene, StepButton, Tag } from "./_art";

const C = "#EC4899";

type Organ = "mouth" | "pipe" | "stomach" | "small" | "large";

const PATHS = {
  pipe: "M 200 60 L 200 92 Q 202 110 216 118",
  stomach: "M 212 116 C 222 100, 268 102, 266 128 C 264 152, 232 160, 216 152 C 204 146, 208 134, 220 132 C 228 131, 226 122, 212 116 Z",
  small: "M 216 152 C 200 160, 170 160, 172 172 S 228 176, 228 188 S 170 192, 172 204 S 228 208, 228 218 S 186 226, 178 224",
  large: "M 178 228 L 148 228 L 148 166 L 260 166 L 260 232 L 212 236 L 206 252",
};

/** Where the food sits at each organ. */
const SPOT: Record<Organ, { x: number; y: number }> = {
  mouth: { x: 200, y: 50 },
  pipe: { x: 200, y: 90 },
  stomach: { x: 238, y: 130 },
  small: { x: 200, y: 196 },
  large: { x: 148, y: 196 },
};

const JOURNEY = {
  cx: [200, 200, 214, 238, 216, 172, 226, 172, 226, 178, 148, 148, 260, 260, 208],
  cy: [50, 92, 118, 130, 152, 172, 188, 204, 218, 226, 228, 166, 166, 232, 246],
};

function Body({ active, seen }: { active?: Organ | null; seen: Organ[] }) {
  const lit = (o: Organ) => (active === o || seen.includes(o) ? 1 : 0.3);
  return (
    <g>
      {/* body outline */}
      <circle cx={200} cy={40} r={30} fill="#fde2c8" stroke="#e8b48a" strokeWidth={3} />
      <rect x={188} y={66} width={24} height={16} fill="#fde2c8" />
      <path d="M 124 96 Q 124 80 150 80 L 250 80 Q 276 80 276 96 L 282 256 L 118 256 Z" fill="#fde2c8" stroke="#e8b48a" strokeWidth={3} />
      <circle cx={190} cy={36} r={3} fill="#1e293b" />
      <circle cx={210} cy={36} r={3} fill="#1e293b" />
      <path d="M 180 18 Q 200 2 222 18" stroke="#4a2c17" strokeWidth={8} fill="none" strokeLinecap="round" />

      <motion.g opacity={lit("large")}>
        <path d={PATHS.large} stroke="#c2410c" strokeWidth={16} fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <path d={PATHS.large} stroke="#fb923c" strokeWidth={11} fill="none" strokeLinejoin="round" strokeLinecap="round" />
      </motion.g>
      <motion.g opacity={lit("small")}>
        <path d={PATHS.small} stroke="#be185d" strokeWidth={10} fill="none" strokeLinecap="round" />
        <path d={PATHS.small} stroke="#f9a8d4" strokeWidth={6} fill="none" strokeLinecap="round" />
      </motion.g>
      <motion.g opacity={lit("pipe")}>
        <path d={PATHS.pipe} stroke="#be123c" strokeWidth={12} fill="none" strokeLinecap="round" />
        <path d={PATHS.pipe} stroke="#fda4af" strokeWidth={7} fill="none" strokeLinecap="round" />
      </motion.g>
      <motion.g opacity={lit("stomach")} animate={active === "stomach" ? { scale: [1, 1.07, 0.96, 1] } : { scale: 1 }} transition={active === "stomach" ? { duration: 1.2, repeat: Infinity } : { duration: 0.4 }}>
        <path d={PATHS.stomach} fill="#f472b6" stroke="#be185d" strokeWidth={3} />
      </motion.g>
      <motion.g opacity={active === "mouth" || seen.includes("mouth") ? 1 : 0.6}>
        <path d="M 186 48 Q 200 62 214 48 Z" fill="#be123c" stroke="#7f1d1d" strokeWidth={2} />
        <rect x={192} y={48} width={6} height={4} fill="#fff" />
        <rect x={202} y={48} width={6} height={4} fill="#fff" />
      </motion.g>
    </g>
  );
}

const NAMES: Record<Organ, string> = { mouth: "Mouth", pipe: "Food pipe", stomach: "Stomach", small: "Small intestine", large: "Large intestine" };

function Chomp() {
  return (
    <g>
      <rect x={292} y={20} width={102} height={110} rx={14} fill="#fff" stroke="#f9a8d4" strokeWidth={3} />
      <motion.path d="M 306 50 Q 343 30 380 50 L 380 64 L 306 64 Z" fill="#be123c" animate={{ y: [0, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
      <motion.g animate={{ y: [0, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
        {[312, 326, 340, 354, 368].map((x) => (
          <rect key={x} x={x - 5} y={60} width={10} height={9} rx={2} fill="#fff" stroke="#e2e8f0" />
        ))}
      </motion.g>
      <path d="M 306 104 Q 343 124 380 104 L 380 90 L 306 90 Z" fill="#be123c" />
      {[312, 326, 340, 354, 368].map((x) => (
        <rect key={x} x={x - 5} y={84} width={10} height={9} rx={2} fill="#fff" stroke="#e2e8f0" />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} cx={330 + i * 12} cy={78} r={4} fill="#ef4444" animate={{ cx: [330 + i * 12, 320 + i * 20], cy: [78, 74 + i * 4] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} />
      ))}
      {[0, 1].map((i) => (
        <motion.circle key={`s${i}`} cx={310 + i * 60} cy={96} r={3} fill="#bae6fd" animate={{ cx: [310 + i * 60, 330 + i * 30], cy: [96, 80], opacity: [0, 1, 0] }} transition={{ duration: 1.2, delay: i * 0.5, repeat: Infinity }} />
      ))}
      <text x={343} y={124} textAnchor="middle" fontSize={10} fontWeight={900} fill="#9d174d">
        teeth + spit
      </text>
    </g>
  );
}

function DigestionScene({ stage }: { stage: number }) {
  const order: Organ[] = ["mouth", "pipe", "stomach", "small", "large"];
  const active = stage < 5 ? order[stage] : null;
  const seen = stage >= 5 ? order : order.slice(0, stage);
  const labels = ["Teeth and spit in the mouth", "Food slides down the food pipe", "The stomach churns food with juices", "The small intestine passes goodness into the blood", "The large intestine soaks up water", "The whole journey"];
  return (
    <Scene label={`Digestion: ${labels[stage]}`}>
      <rect width="400" height="260" fill="#fdf2f8" />
      <Body active={active} seen={seen} />
      {stage === 0 && (
        <>
          <Chomp />
          <Arrow x1={290} y1={74} x2={222} y2={52} color="#9d174d" w={2.5} />
          <Tag x={86} y={60} text="1. MOUTH" color="#be123c" />
        </>
      )}
      {stage === 1 && (
        <>
          <motion.circle cx={200} cy={56} r={7} fill="#ef4444" stroke="#7f1d1d" strokeWidth={2} animate={{ cx: [200, 200, 214], cy: [56, 92, 118] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
          <Tag x={86} y={100} text="2. FOOD PIPE" color="#be123c" />
          <Label x={330} y={100} size={12} color="#9d174d">
            muscles squeeze
          </Label>
          <Label x={330} y={116} size={12} color="#9d174d">
            food down ↓
          </Label>
        </>
      )}
      {stage === 2 && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <motion.circle key={i} cx={226 + i * 8} cy={146} r={3} fill="#fef08a" stroke="#ca8a04" animate={{ cx: [226 + i * 8, 230 + i * 7], cy: [146, 112], opacity: [0, 1, 0] }} transition={{ duration: 1.2, delay: i * 0.3, repeat: Infinity }} />
          ))}
          <Tag x={330} y={130} text="3. STOMACH" color="#db2777" />
          <Label x={330} y={156} size={12} color="#9d174d">
            churns food into soup
          </Label>
        </>
      )}
      {stage === 3 && (
        <>
          <path d="M 120 140 C 100 180, 100 220, 130 240" stroke="#dc2626" strokeWidth={7} fill="none" opacity={0.85} />
          {[0, 1, 2, 3].map((i) => (
            <motion.circle key={i} cx={180} cy={176 + i * 12} r={4} fill="#facc15" stroke="#a16207" animate={{ cx: [180, 128], cy: [176 + i * 12, 170 + i * 16], opacity: [0, 1, 0] }} transition={{ duration: 1.6, delay: i * 0.35, repeat: Infinity }} />
          ))}
          <Tag x={330} y={196} text="4. SMALL INTESTINE" color="#be185d" />
          <Label x={70} y={128} size={12} color="#dc2626">
            into the blood
          </Label>
        </>
      )}
      {stage === 4 && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.circle key={i} cx={262} cy={180 + i * 16} r={4} fill="#38bdf8" animate={{ cx: [262, 290], cy: [180 + i * 16, 176 + i * 16], opacity: [0, 1, 0] }} transition={{ duration: 1.4, delay: i * 0.4, repeat: Infinity }} />
          ))}
          <Tag x={86} y={196} text="5. LARGE INTESTINE" color="#c2410c" />
          <Label x={330} y={170} size={12} color="#0369a1">
            soaks up water
          </Label>
          <Label x={330} y={240} size={12} color="#9a3412">
            waste → toilet 🚽
          </Label>
        </>
      )}
      {stage === 5 && (
        <>
          <motion.circle cx={JOURNEY.cx[0]} cy={JOURNEY.cy[0]} r={7} fill="#ef4444" stroke="#7f1d1d" strokeWidth={2} animate={JOURNEY} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />
          <Tag x={330} y={60} text="THE WHOLE TRIP" color={C} />
          <Label x={330} y={92} size={12} color="#9d174d">
            takes about 1 to 3 days!
          </Label>
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Guided mission: guide the food                                      */
/* ------------------------------------------------------------------ */

/** Keyframes (from JOURNEY) for each move of the food. */
const TRIPS = {
  swallow: { cx: JOURNEY.cx.slice(0, 4), cy: JOURNEY.cy.slice(0, 4) },
  intestine: { cx: JOURNEY.cx.slice(3, 10), cy: JOURNEY.cy.slice(3, 10) },
};

/** Kai's body with the apple at one place on its trip, and an energy meter. */
function FoodTrip({ at, chewed, trip, energy, seen }: { at: Organ; chewed: boolean; trip?: keyof typeof TRIPS; energy: number; seen: Organ[] }) {
  const p = SPOT[at];
  const keys = trip ? TRIPS[trip] : null;
  return (
    <svg viewBox="80 0 240 260" role="img" aria-label={`Kai's digestive system. The apple is in the ${NAMES[at].toLowerCase()}.`} className="mx-auto block h-auto w-full select-none" style={{ maxHeight: 320 }}>
      <rect x={80} width="240" height="260" fill="#fdf2f8" />
      <Body active={at} seen={seen} />
      {keys ? (
        <motion.circle cx={keys.cx[0]} cy={keys.cy[0]} r={7} fill="#ef4444" stroke="#7f1d1d" strokeWidth={2} initial={{ cx: keys.cx[0], cy: keys.cy[0] }} animate={{ cx: keys.cx, cy: keys.cy }} transition={{ duration: 1.4, ease: "easeInOut" }} />
      ) : chewed ? (
        <g>
          <circle cx={p.x - 5} cy={p.y} r={4} fill="#ef4444" stroke="#7f1d1d" strokeWidth={1.5} />
          <circle cx={p.x + 5} cy={p.y - 3} r={3.5} fill="#ef4444" stroke="#7f1d1d" strokeWidth={1.5} />
          <circle cx={p.x + 3} cy={p.y + 4} r={3} fill="#ef4444" stroke="#7f1d1d" strokeWidth={1.5} />
        </g>
      ) : (
        <g>
          <circle cx={p.x} cy={p.y} r={11} fill="#ef4444" stroke="#7f1d1d" strokeWidth={2} />
          <path d={`M ${p.x} ${p.y - 11} q 2 -6 5 -8`} stroke="#78350f" strokeWidth={2.5} fill="none" />
        </g>
      )}
      <g>
        <rect x={290} y={60} width={16} height={120} rx={8} fill="#fff" stroke="#cbd5e1" strokeWidth={2} />
        <motion.rect x={292} width={12} rx={6} fill="#facc15" initial={false} animate={{ y: 178 - 116 * energy, height: 116 * energy }} transition={{ delay: energy > 0.5 ? 1.2 : 0, duration: 0.6 }} />
        <text x={298} y={196} textAnchor="middle" fontSize={14}>
          ⚡
        </text>
      </g>
    </svg>
  );
}

function StepChew({ done, complete }: MissionApi) {
  const [chewed, setChewed] = useState(false);
  return (
    <div>
      <FoodTrip at="mouth" chewed={chewed} energy={0.1} seen={[]} />
      <StepButton color={C} disabled={complete} onClick={() => (setChewed(true), done())}>
        🦷 Chew the apple
      </StepButton>
    </div>
  );
}

function StepSwallow({ done, complete }: MissionApi) {
  const [gone, setGone] = useState(false);
  return (
    <div>
      <FoodTrip at={gone ? "stomach" : "mouth"} chewed trip={gone ? "swallow" : undefined} energy={0.1} seen={gone ? ["mouth", "pipe"] : []} />
      <StepButton
        color={C}
        disabled={gone || complete}
        onClick={() => {
          setGone(true);
          setTimeout(done, 1500);
        }}
      >
        😋 Swallow
      </StepButton>
    </div>
  );
}

function StepIntestine({ done, complete }: MissionApi) {
  const [gone, setGone] = useState(false);
  return (
    <div>
      <FoodTrip at={gone ? "small" : "stomach"} chewed trip={gone ? "intestine" : undefined} energy={gone ? 1 : 0.1} seen={["mouth", "pipe", "stomach"]} />
      <StepButton
        color={C}
        disabled={gone || complete}
        onClick={() => {
          setGone(true);
          setTimeout(done, 1800);
        }}
      >
        ➡️ Send the food on
      </StepButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Kai bit an apple! Help the food on its trip through his body.",
  steps: [
    {
      task: "Chew the apple.",
      settle: 2600,
      predict: { question: "Where does digestion start?", options: ["In the stomach", "In the mouth"], answer: 1, trap: 0 },
      scene: (api) => <StepChew {...api} />,
      hint: "Tap the pink button under Kai.",
      explain: "Digestion starts in the **mouth**. Teeth chop the apple into little bits, and spit (saliva) makes them soft.",
    },
    {
      task: "Swallow the food.",
      settle: 2600,
      predict: { question: "How does food get down to your stomach?", options: ["It just falls down", "Muscles squeeze it down"], answer: 1, trap: 0 },
      scene: (api) => <StepSwallow {...api} />,
      hint: "Tap Swallow and watch the red dot.",
      explain: "The food pipe has **muscles** that squeeze food down, like toothpaste in a tube. That's why you can swallow even lying down! In the stomach, juices churn it into soup.",
    },
    {
      task: "Send the food out of the stomach.",
      settle: 2600,
      predict: { question: "Where does the goodness go into Kai's blood?", options: ["In the stomach", "In the small intestine", "In the large intestine"], answer: 1, trap: 0 },
      scene: (api) => <StepIntestine {...api} />,
      hint: "Tap the button and watch the yellow energy bar.",
      explain: "In the long, curly **small intestine**, the goodness passes into the blood and gives Kai energy. Later, the large intestine soaks up water and the rest leaves as waste.",
    },
  ],
  takeaway: "Food goes mouth → food pipe → stomach → small intestine → large intestine, and the goodness gets into your blood in the small intestine.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const Apple = ({ x, y, s = 1, bitten, face }: { x: number; y: number; s?: number; bitten?: boolean; face?: boolean }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle r={14} fill="#ef4444" stroke="#991b1b" strokeWidth={2} />
    {bitten && <circle cx={13} cy={-4} r={7} fill="#fdf2f8" />}
    <path d="M 0 -14 q 2 -8 6 -10" stroke="#78350f" strokeWidth={2.5} fill="none" />
    <ellipse cx={8} cy={-20} rx={5} ry={2.5} fill="#22c55e" transform="rotate(-20 8 -20)" />
    {face && <Face s={0.5} y={2} />}
  </g>
);

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Kai takes a big bite of a red apple">
        <rect width="240" height="160" fill="#fdf2f8" />
        <rect y={140} width="240" height={20} fill="#fbcfe8" />
        <Kid x={90} y={150} s={1.1} skin="#8d5524" hair="#111827" shirt="#22c55e" arm="up" mood="wow">
          <Apple x={28} y={-76} bitten />
        </Kid>
      </Panel>
    ),
    speech: "Chomp!",
    caption: "Kai takes a big, crunchy bite of an apple, and chews it up.",
  },
  {
    art: (
      <Panel label="A piece of apple splashes in the bubbly juices of the stomach">
        <rect width="240" height="160" fill="#fce7f3" />
        <path d="M 30 40 C 60 10, 210 10, 214 80 C 218 140, 120 156, 60 134 C 20 120, 10 70, 30 40 Z" fill="#f9a8d4" stroke="#be185d" strokeWidth={4} />
        <path d="M 40 100 Q 120 80 200 100 L 200 130 Q 120 150 40 120 Z" fill="#fde68a" opacity={0.7} />
        {[70, 100, 150, 180].map((x, i) => (
          <motion.circle key={x} cx={x} cy={120} r={4} fill="#fff" opacity={0.8} animate={{ cy: [120, 80], opacity: [0.9, 0] }} transition={{ duration: 1.4, delay: i * 0.3, repeat: Infinity }} />
        ))}
        <motion.g animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <Apple x={120} y={96} s={1.2} face />
        </motion.g>
      </Panel>
    ),
    speech: "Splish! It's a bubbly bath!",
    caption: "The chewed apple slides down the food pipe into the churning stomach.",
  },
  {
    art: (
      <Panel label="Tiny bits of goodness wave goodbye as they pass from the intestine into the blood">
        <rect width="240" height="160" fill="#fdf2f8" />
        <rect x={0} y={34} width={240} height={50} fill="#f9a8d4" stroke="#be185d" strokeWidth={3} />
        <rect x={0} y={112} width={240} height={26} fill="#ef4444" stroke="#991b1b" strokeWidth={3} />
        {[40, 100, 160, 210].map((x, i) => (
          <motion.g key={x} animate={{ y: [0, 66] }} transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }}>
            <circle cx={x} cy={58} r={9} fill="#facc15" stroke="#a16207" strokeWidth={2} />
            <Face x={x} y={58} s={0.35} />
          </motion.g>
        ))}
        <text x={120} y={28} textAnchor="middle" fontSize={11} fontWeight={900} fill="#9d174d">
          small intestine
        </text>
        <text x={120} y={154} textAnchor="middle" fontSize={11} fontWeight={900} fill="#991b1b">
          blood
        </text>
      </Panel>
    ),
    speech: "Bye! Let's give Kai energy!",
    caption: "In the small intestine, the tiny bits of goodness pass into Kai's blood.",
  },
  {
    art: (
      <Panel label="Kai runs and kicks a football, full of energy">
        <rect width="240" height="160" fill="#dcfce7" />
        <rect y={130} width="240" height={30} fill="#86efac" />
        <motion.g animate={{ x: [0, 20, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <Kid x={80} y={146} s={1.05} skin="#8d5524" hair="#111827" shirt="#22c55e" arm="up" />
        </motion.g>
        <motion.g animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <circle cx={130} cy={136} r={10} fill="#fff" stroke="#1e293b" strokeWidth={2} />
          <path d="M 126 132 l 4 -3 l 4 3 l -1 5 h -6 Z" fill="#1e293b" />
        </motion.g>
      </Panel>
    ),
    speech: "I'm full of energy!",
    caption: "Now Kai has energy to run and play. The leftovers leave his body later, as waste.",
  },
];

function Bricks({ x, y, cols, rows, gap = 0, colors }: { x: number; y: number; cols: number; rows: number; gap?: number; colors: string[] }) {
  return (
    <g>
      {Array.from({ length: cols * rows }, (_, i) => (
        <rect key={i} x={x + (i % cols) * (14 + gap)} y={y + Math.floor(i / cols) * (9 + gap)} width={14} height={9} rx={2} fill={colors[i % colors.length]} stroke="#1e293b" strokeWidth={1} />
      ))}
    </g>
  );
}

const like: Explainer["like"] = {
  headline: "Digestion is like taking apart a big toy-brick model so the bricks can be used to build something new.",
  everyday: {
    label: "Taking a brick model apart",
    art: (
      <Panel label="A brick house is broken into chunks, then single bricks fall through a sieve">
        <rect width="240" height="160" fill="#fefce8" />
        <Bricks x={12} y={60} cols={4} rows={5} colors={["#ef4444", "#3b82f6", "#facc15"]} />
        <path d="M 10 60 L 40 36 L 70 60 Z" fill="#ef4444" stroke="#1e293b" strokeWidth={1} />
        <Arrow x1={78} y1={86} x2={98} y2={86} w={3} draw={false} />
        <Bricks x={104} y={66} cols={2} rows={2} gap={6} colors={["#3b82f6", "#facc15", "#ef4444"]} />
        <Bricks x={110} y={102} cols={2} rows={1} gap={6} colors={["#22c55e", "#ef4444"]} />
        <Arrow x1={150} y1={86} x2={168} y2={86} w={3} draw={false} />
        <rect x={172} y={92} width={60} height={8} fill="#94a3b8" />
        {[0, 1, 2].map((i) => (
          <motion.rect key={i} x={180 + i * 16} width={10} height={7} rx={1.5} fill={["#ef4444", "#3b82f6", "#facc15"][i]} stroke="#1e293b" strokeWidth={1} animate={{ y: [70, 130], opacity: [1, 1, 0] }} transition={{ duration: 1.6, delay: i * 0.4, repeat: Infinity }} />
        ))}
      </Panel>
    ),
  },
  concept: {
    label: "Food broken into tiny nutrients",
    art: (
      <Panel label="An apple is chewed into pieces, then tiny nutrients pass through the intestine wall into the blood">
        <rect width="240" height="160" fill="#fdf2f8" />
        <Apple x={36} y={80} s={1.4} />
        <Arrow x1={64} y1={80} x2={84} y2={80} w={3} draw={false} />
        {[[100, 70], [114, 84], [100, 94], [118, 66]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={6} fill="#ef4444" stroke="#991b1b" />
        ))}
        <Arrow x1={134} y1={80} x2={154} y2={80} w={3} draw={false} />
        <rect x={160} y={40} width={70} height={36} fill="#f9a8d4" stroke="#be185d" strokeWidth={2} />
        <rect x={160} y={100} width={70} height={20} fill="#ef4444" stroke="#991b1b" strokeWidth={2} />
        {[0, 1, 2].map((i) => (
          <motion.circle key={i} cx={176 + i * 18} cy={58} r={4} fill="#facc15" stroke="#a16207" animate={{ cy: [58, 110] }} transition={{ duration: 1.4, delay: i * 0.4, repeat: Infinity }} />
        ))}
      </Panel>
    ),
  },
  pairs: [
    ["Pulling the model into chunks", "Teeth chewing food into pieces"],
    ["Soaking the chunks so they come apart", "Stomach juices churning food into soup"],
    ["Single bricks small enough to fit through the sieve", "Tiny nutrients passing into the blood in the small intestine"],
    ["Bits that don't fit go in the bin", "Waste leaving the large intestine"],
    ["Building something new with the bricks", "Your body using nutrients to grow and get energy"],
  ],
  limits:
    "Food isn't clicked together like bricks: special chemicals called enzymes cut big food molecules into much smaller ones, and your body can rebuild them into completely different things.",
};

export const digestion: Explainer = {
  id: "digestion-journey",
  title: "Digestion: the journey of food",
  tagline: "Follow an apple from your mouth, through your stomach and intestines.",
  area: "Science",
  ages: "6–11",
  lessons: ["biology-school/human-body-systems/tissues-and-digestion", "my-world/my-body/healthy-and-safe", "exam-biology/human-physiology/human-physiology-concept-crash"],
  color: C,
  icon: "🍎",
  watch: [
    { title: "1. The mouth", say: "Digestion starts in your mouth. Your teeth chop the food into little bits, and spit, called saliva, makes it soft and starts breaking it down.", scene: <DigestionScene stage={0} /> },
    { title: "2. The food pipe", say: "When you swallow, the food goes down a tube called the food pipe. Its muscles squeeze the food along, like toothpaste in a tube.", scene: <DigestionScene stage={1} /> },
    { title: "3. The stomach", say: "Your stomach is a stretchy, muscly bag. It squishes and mixes the food with strong juices until it becomes a thick soup.", scene: <DigestionScene stage={2} /> },
    { title: "4. The small intestine", say: "Next comes the small intestine, a very long, curly tube. Here the goodness from food passes into your blood, to feed your whole body.", scene: <DigestionScene stage={3} /> },
    { title: "5. The large intestine", say: "Leftovers move into the large intestine, which soaks up water. What's left is waste, and it leaves your body when you go to the toilet.", scene: <DigestionScene stage={4} /> },
    { title: "The whole journey", say: "Mouth, food pipe, stomach, small intestine, large intestine. The whole trip can take one to three days!", scene: <DigestionScene stage={5} /> },
  ],
  mission,
  misconception: { myth: "The stomach does all the work of digestion.", truth: "The stomach churns food into soup, but most of the goodness gets into your blood in the small intestine, a curly tube longer than a car." },
  story,
  like,
};
