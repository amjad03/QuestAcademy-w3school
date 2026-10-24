"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Explainer, Mission, MissionApi } from "../types";
import { useFrame } from "@/components/widgets/_shared";
import { Arrow, Kid, Label, Panel, Scene, StepButton, StepNote, Sun, Tag, rng } from "./_art";

const C = "#6366F1";

function Stars({ n = 30, seed = 5, w = 400, h = 260 }: { n?: number; seed?: number; w?: number; h?: number }) {
  const r = rng(seed);
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} cx={r() * w} cy={r() * h} r={0.6 + r() * 1.4} fill="#fff" opacity={0.4 + r() * 0.6} />
      ))}
    </>
  );
}

/** Earth seen from above the North Pole. Children rotate with the land. */
function EarthTop({ cx, cy, r, rotate, spinning, house = true }: { cx: number; cy: number; r: number; rotate?: number; spinning?: boolean; house?: boolean }) {
  const land = (
    <>
      <circle cx={cx} cy={cy} r={r + 40} fill="none" />
      <circle cx={cx} cy={cy} r={r} fill="#2563eb" />
      <path d={`M ${cx - r * 0.2} ${cy - r * 0.9} C ${cx + r * 0.3} ${cy - r * 0.95}, ${cx + r * 0.5} ${cy - r * 0.6}, ${cx + r * 0.25} ${cy - r * 0.35} C ${cx} ${cy - r * 0.3}, ${cx - r * 0.3} ${cy - r * 0.55}, ${cx - r * 0.2} ${cy - r * 0.9} Z`} fill="#22c55e" />
      <path d={`M ${cx + r * 0.55} ${cy - r * 0.1} C ${cx + r * 0.9} ${cy}, ${cx + r * 0.8} ${cy + r * 0.45}, ${cx + r * 0.5} ${cy + r * 0.5} C ${cx + r * 0.3} ${cy + r * 0.3}, ${cx + r * 0.35} ${cy}, ${cx + r * 0.55} ${cy - r * 0.1} Z`} fill="#16a34a" />
      <path d={`M ${cx - r * 0.85} ${cy + r * 0.1} C ${cx - r * 0.7} ${cy + r * 0.6}, ${cx - r * 0.3} ${cy + r * 0.8}, ${cx - r * 0.1} ${cy + r * 0.6} C ${cx - r * 0.25} ${cy + r * 0.3}, ${cx - r * 0.5} ${cy}, ${cx - r * 0.85} ${cy + r * 0.1} Z`} fill="#22c55e" />
      <circle cx={cx} cy={cy} r={r * 0.17} fill="#f8fafc" />
      {house && (
        <g transform={`translate(${cx} ${cy - r})`}>
          <rect x={-9} y={-12} width={18} height={14} fill="#fde68a" stroke="#92400e" strokeWidth={2} />
          <path d="M -12 -11 L 0 -22 L 12 -11 Z" fill="#ef4444" stroke="#7f1d1d" strokeWidth={2} />
          <circle cx={0} cy={-34} r={5} fill="#f97316" stroke="#fff" strokeWidth={1.5} />
        </g>
      )}
    </>
  );
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 6} fill="#93c5fd" opacity={0.25} />
      {spinning ? (
        <motion.g animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
          {land}
        </motion.g>
      ) : (
        <g transform={`rotate(${rotate ?? 0} ${cx} ${cy})`}>{land}</g>
      )}
      {/* night side (away from the Sun on the left) */}
      <path d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} Z`} fill="#020617" opacity={0.62} />
    </g>
  );
}

function DayNightScene({ stage }: { stage: number }) {
  const labels = ["The Sun on the left, the Earth on the right", "The Earth spins once every 24 hours", "The side facing the Sun has day", "The side facing away has night", "Your home spins into sunrise and out at sunset"];
  const cx = 262;
  const cy = 132;
  const r = 84;
  return (
    <Scene label={`Day and night: ${labels[stage]}`}>
      <rect width="400" height="260" fill="#0b1026" />
      <Stars />
      <Sun x={18} y={130} r={56} face={false} glow />
      {stage >= 2 &&
        [70, 110, 150, 190].map((y, i) => (
          <motion.line key={y} x1={86} y1={y} x2={cx - r + 6} y2={y} stroke="#fde047" strokeWidth={3} strokeDasharray="8 10" animate={{ strokeDashoffset: [0, -36] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: i * 0.1 }} />
        ))}
      <EarthTop cx={cx} cy={cy} r={r} spinning={stage >= 1} />
      {stage === 0 && (
        <>
          <Label x={30} y={226} anchor="start" color="#fde047">
            The Sun stays put
          </Label>
          <Label x={cx} y={246} color="#bfdbfe">
            Earth (seen from above)
          </Label>
        </>
      )}
      {stage >= 1 && <Arrow x1={cx + 70} y1={cy - r - 8} x2={cx - 40} y2={cy - r - 18} cx={cx + 20} cy={cy - r - 40} color="#f472b6" w={4} draw={stage === 1} />}
      {stage === 1 && <Tag x={cx} y={246} text="1 SPIN = 1 DAY (24 HOURS)" color="#db2777" />}
      {stage >= 2 && <Tag x={cx - 44} y={cy + 6} text="DAY" color="#f59e0b" size={15} delay={stage === 2 ? 0.3 : 0} />}
      {stage >= 3 && <Tag x={cx + 44} y={cy + 6} text="NIGHT" color="#312e81" size={15} delay={stage === 3 ? 0.3 : 0} />}
      {stage >= 4 && (
        <>
          <Label x={cx + 6} y={20} color="#fdba74" anchor="start">
            sunrise
          </Label>
          <Label x={cx + 6} y={252} color="#fda4af" anchor="start">
            sunset
          </Label>
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Guided mission: spin the Earth                                      */
/* ------------------------------------------------------------------ */

function sky(alt: number) {
  if (alt > 0.25) return ["#38bdf8", "#bae6fd"];
  if (alt > -0.18) return ["#7c3aed", "#fb923c"];
  return ["#020617", "#1e1b4b"];
}

/** Earth from above plus Mia's window. `rot` 90 = midnight, -90 = noon; it falls as the Earth spins. */
function SpinView({ rot }: { rot: number }) {
  const cx = 160;
  const cy = 130;
  const R = 92;
  const theta = (((90 - rot) % 360) + 360) % 360; // home's direction
  const rad = (theta * Math.PI) / 180;
  const alt = -Math.cos(rad); // how high the Sun is (1 = overhead)
  const top = Math.sin(rad) > 0;
  const hour = theta / 15;
  const phase = alt > 0.18 ? "day" : alt < -0.18 ? "night" : top ? "sunrise" : "sunset";
  const [s1, s2] = sky(alt);
  const sunX = 20 + ((hour - 6) / 12) * 120;
  const sunY = 120 - alt * 95;
  return (
    <div className="grid grid-cols-[1.45fr_1fr] gap-2 sm:gap-3">
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg viewBox="0 0 300 260" role="img" aria-label={`Earth seen from above. Mia's house has ${phase}.`} className="block h-auto w-full select-none" style={{ maxHeight: 300, overflow: "hidden" }}>
          <rect width="300" height="260" fill="#0b1026" />
          <Stars n={20} w={300} />
          <Sun x={-20} y={130} r={50} face={false} glow />
          <EarthTop cx={cx} cy={cy} r={R} rotate={rot} />
          <Arrow x1={cx + 70} y1={28} x2={cx - 50} y2={22} cx={cx + 10} cy={-2} color="#f472b6" w={3} draw={false} />
        </svg>
      </div>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg viewBox="0 0 160 200" role="img" aria-label={`Mia's window: ${phase}`} className="block h-auto w-full" style={{ maxHeight: 300 }}>
          <defs>
            <linearGradient id="dn-win" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={s1} />
              <stop offset="1" stopColor={s2} />
            </linearGradient>
          </defs>
          <rect width="160" height="200" fill="#fef3c7" />
          <rect x={14} y={14} width={132} height={112} rx={6} fill="url(#dn-win)" stroke="#92400e" strokeWidth={6} />
          <clipPath id="dn-clip">
            <rect x={17} y={17} width={126} height={106} />
          </clipPath>
          <g clipPath="url(#dn-clip)">
            {alt < -0.18 && <Stars n={14} seed={9} w={130} h={80} />}
            {alt > -0.2 && <Sun x={Math.max(26, Math.min(134, sunX))} y={Math.min(132, sunY)} r={13} face={false} spin={false} />}
            <path d="M 17 126 L 17 102 Q 50 90 80 104 T 143 100 L 143 126 Z" fill={alt > 0 ? "#65a30d" : "#14532d"} />
          </g>
          <line x1={80} y1={14} x2={80} y2={126} stroke="#92400e" strokeWidth={4} />
          <line x1={14} y1={70} x2={146} y2={70} stroke="#92400e" strokeWidth={4} />
          <rect x={0} y={150} width={160} height={50} fill="#d6a76c" />
          {phase === "night" ? (
            <g>
              <rect x={44} y={150} width={80} height={22} rx={6} fill="#a78bfa" />
              <circle cx={56} cy={146} r={12} fill="#F1C27D" />
              <path d="M 50 146 q 3 3 6 0 M 58 146 q 3 3 6 0" stroke="#1e293b" strokeWidth={1.5} fill="none" />
              <text x={78} y={140} fontSize={14} fontWeight={900} fill="#6d28d9">
                z z z
              </text>
            </g>
          ) : (
            <Kid x={80} y={196} s={0.6} shirt="#f97316" arm={phase === "day" ? "up" : "down"} mood={phase === "day" ? "happy" : "wow"} />
          )}
        </svg>
      </div>
    </div>
  );
}

const PHASE_WORD = { day: "Day ☀️", night: "Night 🌙", sunrise: "Sunrise 🌅", sunset: "Sunset 🌇" } as const;

function phaseOf(rot: number) {
  const theta = (((90 - rot) % 360) + 360) % 360;
  const rad = (theta * Math.PI) / 180;
  const alt = -Math.cos(rad);
  return alt > 0.18 ? "day" : alt < -0.18 ? "night" : Math.sin(rad) > 0 ? "sunrise" : "sunset";
}

/** One spin step: tap the button and the Earth turns by `turn` degrees (anticlockwise, as seen from above). */
function StepSpin({ api, from, turn, button, showHours }: { api: MissionApi; from: number; turn: number; button: string; showHours?: boolean }) {
  const [rot, setRot] = useState(from);
  const [spinning, setSpinning] = useState(false);
  const target = from - turn;
  useFrame((dt) => {
    const next = Math.max(target, rot - dt * (turn > 200 ? 150 : 110));
    setRot(next);
    if (next <= target) {
      setSpinning(false);
      api.done();
    }
  }, spinning);
  const hours = Math.round(((from - rot) / 360) * 24);
  return (
    <div>
      <SpinView rot={rot} />
      <StepNote color={C}>
        {PHASE_WORD[phaseOf(rot)]}
        {showHours && ` · ${hours} h`}
      </StepNote>
      <StepButton color={C} disabled={spinning || api.complete} onClick={() => setSpinning(true)}>
        ↺ {button}
      </StepButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Spin the Earth to give Mia day, then night, then a whole day.",
  steps: [
    {
      task: "It's night at Mia's house. Spin the Earth.",
      settle: 2600,
      predict: { question: "What must move to bring morning to Mia?", options: ["The Sun moves over to her side", "The Earth spins her house round"], answer: 1, trap: 0 },
      scene: (api) => <StepSpin api={api} from={90} turn={180} button="Spin the Earth" />,
      hint: "Mia's house is the little red roof on the Earth. Tap the button.",
      explain: "The Sun stayed still. The **Earth spun**, and Mia's house turned into the sunlight. First came sunrise, then day.",
    },
    {
      task: "Spin again to make night.",
      settle: 2600,
      predict: { question: "When it is night for Mia, what is the Sun doing?", options: ["It switches off", "It hides behind the hills", "It is still shining on the other side of Earth"], answer: 2, trap: 1 },
      scene: (api) => <StepSpin api={api} from={-90} turn={180} button="Spin the Earth" />,
      hint: "Tap the button and watch Mia's window.",
      explain: "The Sun never stops shining. Mia's house turned away into the Earth's own **shadow**, so it is night for her and day for children on the other side.",
    },
    {
      task: "Spin the Earth one whole turn.",
      settle: 2600,
      predict: { question: "How long does one whole spin take?", options: ["One hour", "One day (24 hours)", "One year"], answer: 1, trap: 2 },
      scene: (api) => <StepSpin api={api} from={90} turn={360} button="One whole turn" showHours />,
      hint: "Tap the button and watch the hours count up.",
      explain: "One whole spin takes **24 hours**: one day and one night. Going all the way round the Sun is much slower: that takes a year.",
    },
  ],
  takeaway: "The Sun stays still and the Earth spins: the side facing the Sun has day, the side facing away has night.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Room({ night, children }: { night?: boolean; children: React.ReactNode }) {
  return (
    <>
      <rect width="240" height="160" fill={night ? "#312e81" : "#fef9c3"} />
      <rect x={20} y={16} width={70} height={60} rx={4} fill={night ? "#0f172a" : "#7dd3fc"} stroke="#92400e" strokeWidth={4} />
      {night ? (
        <>
          <circle cx={66} cy={36} r={10} fill="#fef08a" />
          <circle cx={71} cy={33} r={9} fill="#0f172a" />
          <circle cx={36} cy={30} r={1.5} fill="#fff" />
          <circle cx={46} cy={56} r={1.5} fill="#fff" />
        </>
      ) : (
        <Sun x={55} y={44} r={12} face={false} spin={false} />
      )}
      <rect y={128} width="240" height={32} fill={night ? "#4338ca" : "#d6a76c"} />
      {children}
    </>
  );
}

const Tablet = ({ x, y, night }: { x: number; y: number; night?: boolean }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-22} y={-30} width={44} height={34} rx={4} fill="#1f2937" />
    <rect x={-19} y={-27} width={38} height={28} rx={2} fill={night ? "#1e1b4b" : "#bae6fd"} />
    {night ? <circle cx={8} cy={-20} r={4} fill="#fef08a" /> : <circle cx={8} cy={-20} r={4} fill="#facc15" />}
    <circle cx={-4} cy={-12} r={6} fill="#8d5524" />
  </g>
);

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Mia eats breakfast in a sunny room and calls her cousin on a tablet">
        <Room>
          <Kid x={70} y={150} s={0.95} shirt="#f97316" arm="out" />
          <Tablet x={150} y={120} night />
        </Room>
      </Panel>
    ),
    speech: "Good morning, Raj!",
    caption: "Mia wakes up to sunshine and video-calls her cousin Raj, far away.",
  },
  {
    art: (
      <Panel label="Raj in pyjamas at night with the moon in his window">
        <Room night>
          <Kid x={70} y={150} s={0.95} skin="#8d5524" hair="#111827" shirt="#a78bfa" pyjamas mood="sleep" />
          <Tablet x={150} y={120} />
        </Room>
      </Panel>
    ),
    speech: "Morning? It's bedtime here!",
    caption: "For Raj it's night, because his side of the Earth is facing away from the Sun.",
  },
  {
    art: (
      <Panel label="The Earth from above with Mia's home on the sunny side and Raj's home on the dark side">
        <rect width="240" height="160" fill="#0b1026" />
        <Stars n={14} w={240} h={160} />
        <Sun x={-10} y={80} r={36} face={false} />
        <EarthTop cx={140} cy={80} r={58} spinning house={false} />
        <circle cx={92} cy={80} r={6} fill="#f97316" stroke="#fff" strokeWidth={2} />
        <circle cx={188} cy={80} r={6} fill="#a78bfa" stroke="#fff" strokeWidth={2} />
        <text x={92} y={150} textAnchor="middle" fontSize={11} fontWeight={900} fill="#fdba74">
          Mia
        </text>
        <text x={188} y={150} textAnchor="middle" fontSize={11} fontWeight={900} fill="#c4b5fd">
          Raj
        </text>
      </Panel>
    ),
    speech: "We're on opposite sides!",
    caption: "Their homes are on opposite sides of the spinning Earth.",
  },
  {
    art: (
      <Panel label="Twelve hours later, Raj has sunshine and Mia is asleep">
        <Room>
          <Kid x={70} y={150} s={0.95} skin="#8d5524" hair="#111827" shirt="#22c55e" arm="up" />
          <Tablet x={150} y={120} night />
        </Room>
      </Panel>
    ),
    speech: "My turn for sunshine!",
    caption: "Twelve hours later the Earth has turned half way round, so now Raj has day and Mia has night.",
  },
];

const like: Explainer["like"] = {
  headline: "Day and night are like turning round on a spinning chair in front of a lamp.",
  everyday: {
    label: "Spinning on a chair by a lamp",
    art: (
      <Panel label="A child on a spinning chair: the face towards the lamp is lit, the back is in shadow">
        <rect width="240" height="160" fill="#1e1b4b" />
        <path d="M 30 40 L 54 40 L 64 70 L 20 70 Z" fill="#fde047" />
        <rect x={39} y={70} width={6} height={60} fill="#64748b" />
        <path d="M 64 56 L 170 30 L 170 130 L 64 74 Z" fill="#fde047" opacity={0.25} />
        <ellipse cx={150} cy={140} rx={30} ry={6} fill="#0f172a" />
        <motion.g animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <Kid x={150} y={132} s={0.95} shirt="#ec4899" mood="happy" flip />
        </motion.g>
        <path d="M 150 132 L 150 142" stroke="#94a3b8" strokeWidth={4} />
      </Panel>
    ),
  },
  concept: {
    label: "The spinning Earth and the Sun",
    art: (
      <Panel label="The Sun lights half the spinning Earth">
        <rect width="240" height="160" fill="#0b1026" />
        <Sun x={10} y={80} r={36} face={false} />
        <EarthTop cx={150} cy={80} r={55} spinning />
        <text x={118} y={84} textAnchor="middle" fontSize={11} fontWeight={900} fill="#fff">
          day
        </text>
        <text x={182} y={84} textAnchor="middle" fontSize={11} fontWeight={900} fill="#c7d2fe">
          night
        </text>
      </Panel>
    ),
  },
  pairs: [
    ["The lamp", "The Sun"],
    ["You turning on the chair", "The Earth spinning"],
    ["Your face towards the lamp", "Your home in daytime"],
    ["The back of your head, in shadow", "Your home at night-time"],
    ["One whole turn", "One day: 24 hours"],
  ],
  limits:
    "The Earth turns much more slowly than a chair (one turn takes a whole day), and it also travels around the Sun at the same time. Also, it's always day on one half of the Earth and night on the other half, right now.",
};

export const dayNight: Explainer = {
  id: "day-and-night",
  title: "Day and night",
  tagline: "The Sun stays put and the Earth spins: see how that makes day and night.",
  area: "Science",
  ages: "6–11",
  lessons: ["social-studies/world-geography/maps-and-coordinates", "my-world/weather-and-seasons/four-seasons"],
  color: C,
  icon: "🌍",
  watch: [
    { title: "The Sun stays still", say: "The Sun is a giant star that always shines. It only looks like it moves across the sky. Really, we are the ones moving!", scene: <DayNightScene stage={0} /> },
    { title: "The Earth spins", say: "Our Earth is always spinning, like a slow spinning top. One whole spin takes twenty-four hours: that's one day.", scene: <DayNightScene stage={1} /> },
    { title: "Facing the Sun: day", say: "The half of the Earth facing the Sun gets sunlight. Over there, it is daytime.", scene: <DayNightScene stage={2} /> },
    { title: "Facing away: night", say: "The half facing away from the Sun is in the Earth's own shadow. Over there, it is night-time.", scene: <DayNightScene stage={3} /> },
    { title: "Sunrise and sunset", say: "As the Earth turns, your home spins out of the dark into the light: sunrise! Later it spins back into the dark: sunset.", scene: <DayNightScene stage={4} /> },
  ],
  mission,
  misconception: { myth: "The Sun moves around the Earth, making day and night.", truth: "The Sun stays still. The Earth spins once a day, so your home turns into the sunlight (day) and out of it (night)." },
  story,
  like,
};
