"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Explainer, Mission, MissionApi } from "../types";
import { Arrow, Kid, Label, Panel, Scene, StepButton, StepNote, Tag } from "./_art";

const C = "#DC2626";
const RED = "#ef4444";
const BLUE = "#3b82f6";

/** Bar magnet centred on (x, y). Unflipped: North (red) on the left. */
function BarMagnet({ x, y, w = 120, h = 36, flip }: { x: number; y: number; w?: number; h?: number; flip?: boolean }) {
  const left = flip ? "S" : "N";
  const right = flip ? "N" : "S";
  const col = (p: string) => (p === "N" ? RED : BLUE);
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w / 2} height={h} rx={6} fill={col(left)} />
      <rect x={x} y={y - h / 2} width={w / 2} height={h} rx={6} fill={col(right)} />
      <rect x={x - 6} y={y - h / 2} width={12} height={h} fill={col(right)} />
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={6} fill="none" stroke="#1e293b" strokeWidth={2.5} />
      <text x={x - w / 4} y={y + h * 0.2} textAnchor="middle" fontSize={h * 0.55} fontWeight={900} fill="#fff">
        {left}
      </text>
      <text x={x + w / 4} y={y + h * 0.2} textAnchor="middle" fontSize={h * 0.55} fontWeight={900} fill="#fff">
        {right}
      </text>
    </g>
  );
}

function Spark({ x, y }: { x: number; y: number }) {
  return (
    <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }} transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 1.3 }}>
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return <line key={i} x1={x + Math.cos(a) * 10} y1={y + Math.sin(a) * 10} x2={x + Math.cos(a) * 20} y2={y + Math.sin(a) * 20} stroke="#facc15" strokeWidth={4} strokeLinecap="round" />;
      })}
    </motion.g>
  );
}

/* Everyday objects (origin at their base centre) */
const Clip = ({ x, y }: { x: number; y: number }) => <path transform={`translate(${x} ${y})`} d="M -6 0 L -6 -26 Q -6 -32 0 -32 Q 6 -32 6 -26 L 6 -6 Q 6 -2 2 -2 Q -2 -2 -2 -6 L -2 -22" fill="none" stroke="#64748b" strokeWidth={3} strokeLinecap="round" />;
const Nail = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-10} y={-36} width={20} height={5} rx={2} fill="#475569" />
    <path d="M -3 -31 L 3 -31 L 3 -6 L 0 0 L -3 -6 Z" fill="#64748b" />
  </g>
);
const Tin = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-14} y={-34} width={28} height={34} rx={3} fill="#cbd5e1" stroke="#64748b" strokeWidth={2} />
    <rect x={-14} y={-26} width={28} height={16} fill="#f97316" />
    <text y={-14} textAnchor="middle" fontSize={8} fontWeight={900} fill="#fff">
      BEANS
    </text>
  </g>
);
const Can = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-11} y={-38} width={22} height={38} rx={5} fill="#22c55e" stroke="#15803d" strokeWidth={2} />
    <rect x={-8} y={-41} width={16} height={4} rx={2} fill="#cbd5e1" />
    <text y={-16} textAnchor="middle" fontSize={8} fontWeight={900} fill="#fff">
      FIZZ
    </text>
  </g>
);
const Block = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-15} y={-30} width={30} height={30} rx={3} fill="#d97706" stroke="#92400e" strokeWidth={2} />
    <path d="M -10 -22 q 10 4 20 0 M -10 -10 q 10 4 20 0" stroke="#92400e" strokeWidth={1.5} fill="none" />
  </g>
);
const Duck = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx={0} cy={-12} rx={16} ry={11} fill="#facc15" stroke="#ca8a04" strokeWidth={2} />
    <circle cx={-8} cy={-28} r={9} fill="#facc15" stroke="#ca8a04" strokeWidth={2} />
    <path d="M -17 -28 l -7 2 l 7 3 Z" fill="#f97316" />
    <circle cx={-10} cy={-30} r={1.8} fill="#1e293b" />
  </g>
);

function FieldLines({ x, y, w }: { x: number; y: number; w: number }) {
  const l = x - w / 2;
  const r = x + w / 2;
  return (
    <g>
      {[22, 40, 62, 90].map((hgt, i) => (
        <g key={hgt}>
          {[-1, 1].map((dir) => (
            <motion.path key={dir} d={`M ${l + 4} ${y + dir * 8} C ${l - hgt * 0.8} ${y + dir * hgt * 1.4}, ${r + hgt * 0.8} ${y + dir * hgt * 1.4}, ${r - 4} ${y + dir * 8}`} fill="none" stroke="#64748b" strokeWidth={2} strokeDasharray="3 6" opacity={0.85 - i * 0.12} animate={{ strokeDashoffset: [0, -18] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />
          ))}
        </g>
      ))}
    </g>
  );
}

function Room() {
  return (
    <>
      <rect width="400" height="260" fill="#fef2f2" />
      <rect y={214} width="400" height={46} fill="#e7e5e4" />
    </>
  );
}

function MagnetScene({ stage }: { stage: number }) {
  const labels = ["A magnet has a North pole and a South pole", "Opposite poles attract", "Same poles repel", "Magnets pull things made of iron or steel", "The invisible magnetic field", "The Earth is like a giant magnet; a compass points north"];
  return (
    <Scene label={`Magnets: ${labels[stage]}`}>
      <Room />
      {stage === 0 && (
        <>
          <FieldLines x={200} y={120} w={160} />
          <BarMagnet x={200} y={120} w={160} h={48} />
          <Tag x={110} y={210} text="NORTH POLE" color={RED} />
          <Tag x={290} y={210} text="SOUTH POLE" color={BLUE} delay={0.5} />
        </>
      )}
      {stage === 1 && (
        <>
          <motion.g animate={{ x: [-50, 0] }} transition={{ duration: 0.8, ease: "easeIn", repeat: Infinity, repeatDelay: 1.3 }}>
            <BarMagnet x={140} y={120} />
          </motion.g>
          <motion.g animate={{ x: [50, 0] }} transition={{ duration: 0.8, ease: "easeIn", repeat: Infinity, repeatDelay: 1.3 }}>
            <BarMagnet x={260} y={120} />
          </motion.g>
          <Spark x={200} y={120} />
          <Label x={200} y={70} size={22} color="#16a34a">
            CLICK!
          </Label>
          <Tag x={200} y={200} text="S + N: OPPOSITES ATTRACT" color="#16a34a" />
        </>
      )}
      {stage === 2 && (
        <>
          <motion.g animate={{ x: [0, -50] }} transition={{ duration: 0.6, ease: "easeOut", repeat: Infinity, repeatDelay: 1.2 }}>
            <BarMagnet x={140} y={120} />
            <Arrow x1={110} y1={86} x2={74} y2={86} color="#dc2626" w={4} draw={false} />
          </motion.g>
          <motion.g animate={{ x: [0, 50] }} transition={{ duration: 0.6, ease: "easeOut", repeat: Infinity, repeatDelay: 1.2 }}>
            <BarMagnet x={262} y={120} flip />
            <Arrow x1={292} y1={86} x2={328} y2={86} color="#dc2626" w={4} draw={false} />
          </motion.g>
          <Label x={200} y={70} size={22} color="#dc2626">
            PUSH!
          </Label>
          <Tag x={200} y={200} text="S + S OR N + N: SAME POLES REPEL" color="#dc2626" />
        </>
      )}
      {stage === 3 && (
        <>
          <motion.g animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <BarMagnet x={130} y={60} w={140} h={36} />
          </motion.g>
          <motion.g initial={{ y: 0 }} animate={{ y: -128 }} transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200, damping: 12 }}>
            <Clip x={90} y={214} />
          </motion.g>
          <motion.g initial={{ y: 0 }} animate={{ y: -132 }} transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200, damping: 12 }}>
            <Nail x={166} y={214} />
          </motion.g>
          <Block x={250} y={214} />
          <Duck x={300} y={214} />
          <Can x={350} y={214} />
          <Label x={130} y={244} size={13} color="#16a34a">
            ✓ iron &amp; steel: STICK
          </Label>
          <Label x={300} y={244} size={13} color="#dc2626">
            ✗ wood, plastic, aluminium
          </Label>
        </>
      )}
      {stage === 4 && (
        <>
          <FieldLines x={200} y={124} w={150} />
          <BarMagnet x={200} y={124} w={150} h={40} />
          <motion.rect x={60} y={70} width={280} height={110} rx={6} fill="#fff" opacity={0.35} stroke="#94a3b8" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.4] }} transition={{ delay: 1 }} />
          <motion.g initial={{ y: 0 }} animate={{ y: [0, -48, -48] }} transition={{ duration: 1.4, delay: 1.4, repeat: Infinity, repeatDelay: 1 }}>
            <Clip x={200} y={230} />
          </motion.g>
          <Tag x={200} y={40} text="MAGNETIC FIELD: AN INVISIBLE PULL" color="#7c3aed" />
        </>
      )}
      {stage === 5 && (
        <>
          <rect width="400" height="260" fill="#0b1026" />
          <g>
            <circle cx={130} cy={130} r={86} fill="#2563eb" />
            <path d="M 80 70 q 40 -20 70 10 q -10 30 -50 30 Z M 120 150 q 40 -10 60 30 q -30 30 -60 0 Z" fill="#22c55e" />
            {[60, 90, 120].map((r, i) => (
              <ellipse key={r} cx={130} cy={130} rx={r * 0.7} ry={r * 1.3} fill="none" stroke="#c4b5fd" strokeWidth={1.8} strokeDasharray="4 6" opacity={0.7 - i * 0.15} />
            ))}
            <Label x={130} y={30} color="#fecaca">
              North
            </Label>
          </g>
          {/* compass */}
          <g transform="translate(300 130)">
            <circle r={66} fill="#fef3c7" stroke="#92400e" strokeWidth={8} />
            {["N", "E", "S", "W"].map((d, i) => (
              <text key={d} x={Math.sin((i * Math.PI) / 2) * 48} y={-Math.cos((i * Math.PI) / 2) * 48 + 6} textAnchor="middle" fontSize={16} fontWeight={900} fill={d === "N" ? RED : "#1e293b"}>
                {d}
              </text>
            ))}
            <motion.g animate={{ rotate: [70, -20, 10, -4, 0] }} transition={{ duration: 2.4, ease: "easeOut" }}>
              <path d="M 0 -40 L 8 0 L -8 0 Z" fill={RED} />
              <path d="M 0 40 L 8 0 L -8 0 Z" fill="#94a3b8" />
              <circle r={5} fill="#1e293b" />
            </motion.g>
          </g>
          <Label x={300} y={238} color="#fde68a" size={13}>
            A compass needle is a magnet!
          </Label>
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Guided mission: push, pull and pick up                              */
/* ------------------------------------------------------------------ */

const FIXED_X = 290;
const MW = 120;
const TOUCH = FIXED_X - MW; // centre of the moving magnet when touching
const FLOOR = 228;

/** Two magnets on a table. `same` = the facing poles match (N faces N). */
function StepPush({ api, same }: { api: MissionApi; same?: boolean }) {
  const [pushed, setPushed] = useState(false);
  const start = 70;
  const push = () => {
    setPushed(true);
    setTimeout(api.done, 1300);
  };
  const facingL = same ? "N" : "S";
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg viewBox="0 0 400 200" role="img" aria-label={`Two magnets: ${facingL} faces N. ${pushed ? (same ? "They push apart." : "They snap together.") : ""}`} className="block h-auto w-full select-none" style={{ maxHeight: 260 }}>
          <rect width="400" height="200" fill="#fef2f2" />
          <rect y={150} width="400" height={50} fill="#e7e5e4" />
          <motion.g initial={false} animate={pushed && same ? { x: [0, 0, 0, 18] } : { x: 0 }} transition={{ duration: 1, times: [0, 0.4, 0.6, 1] }}>
            <BarMagnet x={FIXED_X} y={110} w={MW} h={40} />
          </motion.g>
          <motion.g initial={false} animate={pushed ? (same ? { x: [0, TOUCH - start - 40, TOUCH - start - 40, 0] } : { x: TOUCH - start }) : { x: 0 }} transition={pushed && same ? { duration: 1, times: [0, 0.4, 0.6, 1] } : { duration: 0.7, ease: "easeIn" }}>
            <BarMagnet x={start} y={110} w={MW} h={40} flip={same} />
          </motion.g>
          {pushed && !same && <Spark x={TOUCH + MW / 2} y={110} />}
          {pushed && same && (
            <>
              <Arrow x1={160} y1={168} x2={110} y2={168} color="#dc2626" w={5} delay={0.8} />
              <Arrow x1={260} y1={168} x2={310} y2={168} color="#dc2626" w={5} delay={0.8} />
            </>
          )}
        </svg>
      </div>
      <StepNote color={pushed ? (same ? "#dc2626" : "#16a34a") : undefined}>{pushed ? (same ? "PUSH! ↔" : "CLICK! 🧲") : `${facingL} → N`}</StepNote>
      <StepButton color={C} disabled={pushed || api.complete} onClick={push}>
        👉 Push them together
      </StepButton>
    </div>
  );
}

/** A magnet lowered over a paper clip, a drinks can and a food tin. */
function StepPickUp({ done, complete }: MissionApi) {
  const [down, setDown] = useState(false);
  const items = [
    { x: 130, Art: Clip, magnetic: true, h: 32 },
    { x: 200, Art: Can, magnetic: false, h: 41 },
    { x: 270, Art: Tin, magnetic: true, h: 34 },
  ];
  const my = down ? 150 : 56;
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg viewBox="70 28 260 232" role="img" aria-label={down ? "The paper clip and the steel tin jump up to the magnet. The aluminium can stays on the table." : "A magnet above a paper clip, an aluminium drinks can and a steel food tin"} className="block h-auto w-full select-none" style={{ maxHeight: 300 }}>
          <Room />
          {items.map(({ x, Art, magnetic, h }) => (
            <g key={x}>
              <motion.g initial={false} animate={{ y: down && magnetic ? 167 - (FLOOR - h) : 0 }} transition={{ delay: 0.75, type: "spring", stiffness: 260, damping: 14 }}>
                <Art x={x} y={FLOOR} />
              </motion.g>
              {down && (
                <motion.text x={x} y={252} textAnchor="middle" fontSize={20} fontWeight={900} fill={magnetic ? "#16a34a" : "#dc2626"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                  {magnetic ? "✓" : "✗"}
                </motion.text>
              )}
            </g>
          ))}
          <motion.g initial={false} animate={{ y: my - 56 }} transition={{ duration: 0.7, ease: "easeInOut" }}>
            <BarMagnet x={200} y={56} w={200} h={34} />
          </motion.g>
        </svg>
      </div>
      <StepButton
        color={C}
        disabled={down || complete}
        onClick={() => {
          setDown(true);
          setTimeout(done, 1500);
        }}
      >
        ⬇️ Lower the magnet
      </StepButton>
    </div>
  );
}


const mission: Mission = {
  goal: "Find out when magnets pull, when they push, and what they pick up.",
  steps: [
    {
      task: "Push the two magnets together.",
      settle: 2600,
      predict: { question: "The S end faces the N end. What will happen?", options: ["They pull together and stick", "They push apart"], answer: 0 },
      scene: (api) => <StepPush api={api} />,
      hint: "Look at the letters on the ends that face each other, then tap the button.",
      explain: "S and N are **opposite** poles, and opposites **attract**: they pull together. Click!",
    },
    {
      task: "Now N faces N. Push them together.",
      settle: 2600,
      predict: { question: "Two N ends face each other. What will happen?", options: ["They stick even harder", "They push apart"], answer: 1 },
      scene: (api) => <StepPush api={api} same />,
      hint: "Both ends that touch are red N poles. Tap the button.",
      explain: "Two N poles are the **same**, and same poles **repel**: they push each other away. You can feel the push with real magnets!",
    },
    {
      task: "Lower the magnet over the three things.",
      settle: 2600,
      predict: { question: "The drinks can is metal (aluminium). Will the magnet pick it up?", options: ["Yes: magnets pick up all metals", "No: it will stay on the table"], answer: 1, trap: 0 },
      scene: (api) => <StepPickUp {...api} />,
      hint: "Left to right: a paper clip, a drinks can and a tin of beans. Tap the button.",
      explain: "Magnets only pull things with **iron** in them, like steel paper clips and food tins. Aluminium cans, copper and gold are metals too, but magnets don't pull them.",
    },
  ],
  takeaway: "Opposite poles attract, same poles repel, and magnets only pull things made with iron, like steel.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const Fridge = ({ x }: { x: number }) => (
  <g>
    <rect x={x} y={14} width={80} height={132} rx={8} fill="#e2e8f0" stroke="#94a3b8" strokeWidth={3} />
    <line x1={x} y1={62} x2={x + 80} y2={62} stroke="#94a3b8" strokeWidth={3} />
    <rect x={x + 8} y={30} width={5} height={22} rx={2} fill="#64748b" />
    <rect x={x + 8} y={74} width={5} height={30} rx={2} fill="#64748b" />
  </g>
);

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Zara sticks a magnet on the metal fridge door">
        <rect width="240" height="160" fill="#fff7ed" />
        <Fridge x={130} />
        <g transform="translate(176 92) scale(0.4)">
          <BarMagnet x={0} y={0} />
        </g>
        <Kid x={80} y={150} skin="#c68642" hair="#111827" shirt="#a855f7" arm="out" mood="wow" />
      </Panel>
    ),
    speech: "It sticks to the fridge!",
    caption: "Zara finds a magnet. It sticks to the fridge door, because the door is made of steel.",
  },
  {
    art: (
      <Panel label="The magnet falls off a wooden door">
        <rect width="240" height="160" fill="#fff7ed" />
        <rect x={130} y={10} width={80} height={140} rx={4} fill="#b45309" stroke="#78350f" strokeWidth={3} />
        <circle cx={142} cy={84} r={4} fill="#fde68a" />
        <motion.g animate={{ y: [0, 50] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.8, ease: "easeIn" }}>
          <g transform="translate(176 80) scale(0.4)">
            <BarMagnet x={0} y={0} />
          </g>
        </motion.g>
        <Kid x={80} y={150} skin="#c68642" hair="#111827" shirt="#a855f7" mood="sad" />
      </Panel>
    ),
    speech: "Hmm, not on wood!",
    caption: "It won't stick to the wooden door. Wood isn't magnetic.",
  },
  {
    art: (
      <Panel label="Two magnets with the same poles facing push apart">
        <rect width="240" height="160" fill="#fef2f2" />
        <motion.g animate={{ x: [0, -16, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
          <g transform="translate(70 110) scale(0.6)">
            <BarMagnet x={0} y={0} flip />
          </g>
        </motion.g>
        <motion.g animate={{ x: [0, 16, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
          <g transform="translate(160 110) scale(0.6)">
            <BarMagnet x={0} y={0} />
          </g>
        </motion.g>
        <text x={115} y={80} textAnchor="middle" fontSize={16} fontWeight={900} fill="#dc2626">
          PUSH!
        </text>
      </Panel>
    ),
    speech: "They push each other away!",
    caption: "When she puts two North poles together, the magnets push apart.",
  },
  {
    art: (
      <Panel label="She flips one magnet and they snap together">
        <rect width="240" height="160" fill="#f0fdf4" />
        <g transform="translate(84 110) scale(0.6)">
          <BarMagnet x={0} y={0} />
        </g>
        <g transform="translate(156 110) scale(0.6)">
          <BarMagnet x={0} y={0} />
        </g>
        <Spark x={120} y={110} />
        <text x={120} y={74} textAnchor="middle" fontSize={16} fontWeight={900} fill="#16a34a">
          CLICK!
        </text>
      </Panel>
    ),
    speech: "Opposites attract!",
    caption: "She flips one round, and North and South snap together.",
  },
];

function Arrows({ x, y, angles, color }: { x: number; y: number; angles: number[]; color: string }) {
  return (
    <g>
      {angles.map((a, i) => {
        const cx = x + (i % 3) * 26;
        const cy = y + Math.floor(i / 3) * 26;
        return (
          <g key={i} transform={`rotate(${a} ${cx} ${cy})`}>
            <line x1={cx - 9} y1={cy} x2={cx + 7} y2={cy} stroke={color} strokeWidth={3} strokeLinecap="round" />
            <path d={`M ${cx + 10} ${cy} l -7 -5 l 0 10 Z`} fill={color} />
          </g>
        );
      })}
    </g>
  );
}

const like: Explainer["like"] = {
  headline: "A magnet is like a class where everyone points the same way.",
  everyday: {
    label: "Everyone pointing the same way vs every which way",
    art: (
      <Panel label="On the left, children all point the same way. On the right, they point in different directions.">
        <rect width="240" height="160" fill="#fff7ed" />
        {[0, 1, 2].map((i) => (
          <Kid key={i} x={24 + i * 34} y={130 - (i % 2) * 6} s={0.55} shirt="#ef4444" arm="out" />
        ))}
        <Kid x={150} y={130} s={0.55} shirt="#94a3b8" arm="up" />
        <Kid x={184} y={124} s={0.55} shirt="#94a3b8" arm="out" flip />
        <Kid x={218} y={130} s={0.55} shirt="#94a3b8" arm="down" />
        <text x={58} y={150} textAnchor="middle" fontSize={11} fontWeight={900} fill="#dc2626">
          all together
        </text>
        <text x={184} y={150} textAnchor="middle" fontSize={11} fontWeight={900} fill="#64748b">
          all muddled
        </text>
      </Panel>
    ),
  },
  concept: {
    label: "Inside a magnet vs an ordinary nail",
    art: (
      <Panel label="Inside a magnet the tiny magnetic bits are lined up; in ordinary iron they are muddled">
        <rect width="240" height="160" fill="#fef2f2" />
        <rect x={12} y={40} width={100} height={70} rx={6} fill="#fecaca" stroke="#dc2626" strokeWidth={2.5} />
        <Arrows x={28} y={58} angles={[0, 0, 0, 0, 0, 0]} color="#dc2626" />
        <rect x={128} y={40} width={100} height={70} rx={6} fill="#e2e8f0" stroke="#64748b" strokeWidth={2.5} />
        <Arrows x={144} y={58} angles={[40, 200, 110, 300, 170, 70]} color="#64748b" />
        <text x={62} y={130} textAnchor="middle" fontSize={11} fontWeight={900} fill="#dc2626">
          magnet
        </text>
        <text x={178} y={130} textAnchor="middle" fontSize={11} fontWeight={900} fill="#475569">
          plain iron nail
        </text>
      </Panel>
    ),
  },
  pairs: [
    ["Children all pointing the same way", "Tiny magnetic bits lined up inside a magnet"],
    ["Children pointing every which way", "An ordinary iron nail: the bits are muddled"],
    ["A teacher says 'Everyone point this way!'", "Stroking a nail with a magnet lines the bits up, making it a magnet"],
    ["Wooden puppets that can't point at all", "Wood and plastic have no magnetic bits"],
  ],
  limits:
    "The tiny 'pointers' are groups of atoms called domains, not people. Only a few metals have them, mainly iron (and steel, which is mostly iron), nickel and cobalt, so most metals, like aluminium, copper and gold, are not magnetic.",
};

export const magnets: Explainer = {
  id: "magnets",
  title: "Magnets",
  tagline: "North and south poles, push and pull, and what a magnet will pick up.",
  area: "Science",
  ages: "6–11",
  lessons: ["chemistry-school/matter-and-states/pure-substances-and-mixtures", "physics-school/force-laws/newtons-laws"],
  color: C,
  icon: "🧲",
  watch: [
    { title: "Meet a magnet", say: "A magnet has two ends called poles: a North pole and a South pole. The pull is strongest at the ends.", scene: <MagnetScene stage={0} /> },
    { title: "Opposites attract", say: "Put a North pole near a South pole and they pull together. Click! Opposites attract.", scene: <MagnetScene stage={1} /> },
    { title: "Same poles repel", say: "Put North next to North, or South next to South, and they push each other away. They repel!", scene: <MagnetScene stage={2} /> },
    { title: "What sticks?", say: "Magnets pull things made of iron or steel, like paper clips and nails. They don't pull wood, plastic, or most other metals, like aluminium.", scene: <MagnetScene stage={3} /> },
    { title: "An invisible pull", say: "A magnet's pull reaches out through the air around it, and even through paper. This invisible area is called a magnetic field.", scene: <MagnetScene stage={4} /> },
    { title: "Earth is a giant magnet", say: "The Earth acts like a giant magnet too. A compass needle is a tiny magnet, so it always swings round to point north.", scene: <MagnetScene stage={5} /> },
  ],
  mission,
  misconception: { myth: "Magnets attract all metals.", truth: "Magnets only pull a few metals, mainly iron and steel (which is mostly iron). Aluminium cans, copper and gold are not pulled." },
  story,
  like,
};
