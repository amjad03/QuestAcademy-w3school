"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer } from "../types";
import { useSvgDrag } from "@/components/widgets/_shared";
import { Arrow, Kid, Label, Panel, Scene, Sun, Tag, Tree, TryShell, rng } from "./_art";

const C = "#14B8A6";
const TILT = 23.5;

type Season = "summer" | "autumn" | "winter" | "spring";
const SEASON_EMOJI: Record<Season, string> = { summer: "☀️", autumn: "🍂", winter: "❄️", spring: "🌸" };
const OPP: Record<Season, Season> = { summer: "winter", winter: "summer", autumn: "spring", spring: "autumn" };

function Space({ w = 400, h = 260, seed = 11 }: { w?: number; h?: number; seed?: number }) {
  const r = rng(seed);
  return (
    <>
      <rect width={w} height={h} fill="#0b1026" />
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={i} cx={r() * w} cy={r() * h} r={0.6 + r() * 1.2} fill="#fff" opacity={0.3 + r() * 0.6} />
      ))}
    </>
  );
}

/** Earth with its axis leaning right by 23.5°. If `sun` is given, the far side is shaded. */
function TiltedEarth({ x, y, r, sun, pin = true, south }: { x: number; y: number; r: number; sun?: { x: number; y: number }; pin?: boolean; south?: boolean }) {
  const t = (TILT * Math.PI) / 180;
  const ax = Math.sin(t);
  const ay = -Math.cos(t);
  let shade: string | null = null;
  if (sun) {
    const a = Math.atan2(sun.y - y, sun.x - x);
    const p1 = [x + r * Math.cos(a + Math.PI / 2), y + r * Math.sin(a + Math.PI / 2)];
    const p2 = [x + r * Math.cos(a - Math.PI / 2), y + r * Math.sin(a - Math.PI / 2)];
    shade = `M ${p1[0]} ${p1[1]} A ${r} ${r} 0 0 1 ${p2[0]} ${p2[1]} Z`;
  }
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#2563eb" />
      <g transform={`rotate(${TILT} ${x} ${y})`}>
        <path d={`M ${x - r * 0.6} ${y - r * 0.55} q ${r * 0.5} ${-r * 0.35} ${r * 0.9} ${r * 0.1} q ${-r * 0.2} ${r * 0.3} ${-r * 0.7} ${r * 0.2} Z`} fill="#22c55e" />
        <path d={`M ${x - r * 0.1} ${y + r * 0.2} q ${r * 0.5} ${-r * 0.1} ${r * 0.55} ${r * 0.4} q ${-r * 0.3} ${r * 0.35} ${-r * 0.5} ${r * 0.1} Z`} fill="#16a34a" />
        <ellipse cx={x} cy={y - r * 0.9} rx={r * 0.38} ry={r * 0.14} fill="#f8fafc" />
        <ellipse cx={x} cy={y + r * 0.92} rx={r * 0.34} ry={r * 0.12} fill="#f8fafc" />
        <ellipse cx={x} cy={y} rx={r} ry={r * 0.22} fill="none" stroke="#fde68a" strokeWidth={1.6} strokeDasharray="3 3" />
      </g>
      {shade && <path d={shade} fill="#020617" opacity={0.6} />}
      <line x1={x - ax * (r + 14)} y1={y - ay * (r + 14)} x2={x + ax * (r + 14)} y2={y + ay * (r + 14)} stroke="#f8fafc" strokeWidth={2.5} strokeLinecap="round" />
      <text x={x + ax * (r + 22)} y={y + ay * (r + 22) + 4} textAnchor="middle" fontSize={Math.max(9, r * 0.35)} fontWeight={900} fill="#f8fafc">
        N
      </text>
      {pin && (
        <g transform={`rotate(${TILT} ${x} ${y})`}>
          <circle cx={x - r * 0.05} cy={y - r * 0.55} r={Math.max(3, r * 0.13)} fill="#ef4444" stroke="#fff" strokeWidth={1.5} />
          {south && <circle cx={x + r * 0.2} cy={y + r * 0.55} r={Math.max(3, r * 0.13)} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />}
        </g>
      )}
    </g>
  );
}

/** A little window onto one place: sun height, tree and ground follow the season. */
function SeasonView({ x, y, w, h, season, title, id }: { x: number; y: number; w: number; h: number; season: Season; title?: string; id: string }) {
  const sunH = { summer: 0.2, spring: 0.42, autumn: 0.42, winter: 0.62 }[season];
  const skyTop = { summer: "#38bdf8", spring: "#7dd3fc", autumn: "#93c5fd", winter: "#cbd5e1" }[season];
  const ground = { summer: "#65a30d", spring: "#84cc16", autumn: "#a16207", winter: "#f1f5f9" }[season];
  return (
    <g>
      <clipPath id={`${id}-clip`}>
        <rect x={x} y={y} width={w} height={h} rx={10} />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x={x} y={y} width={w} height={h} fill={skyTop} />
        <motion.g initial={false} animate={{ y: sunH * h }} transition={{ type: "spring", stiffness: 80, damping: 15 }}>
          <Sun x={x + w * 0.24} y={y + 4} r={Math.min(w, h) * 0.11} face={false} spin={false} />
        </motion.g>
        <rect x={x} y={y + h * 0.74} width={w} height={h * 0.26} fill={ground} />
        <Tree x={x + w * 0.68} y={y + h * 0.82} s={h / 140} bare={season === "winter"} snow={season === "winter"} blossom={season === "spring"} leaves={season === "autumn" ? "#f97316" : season === "spring" ? "#86efac" : "#16a34a"} />
        {season === "autumn" && [0, 1, 2].map((i) => <motion.circle key={i} r={3} fill="#ea580c" animate={{ cx: [x + w * 0.66, x + w * (0.5 + i * 0.12)], cy: [y + h * 0.4, y + h * 0.8] }} transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }} />)}
        {season === "winter" && [0, 1, 2, 3].map((i) => <motion.circle key={i} r={2.5} fill="#fff" animate={{ cy: [y, y + h * 0.75] }} transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: "linear" }} cx={x + w * (0.15 + i * 0.22)} />)}
      </g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill="none" stroke="#fff" strokeWidth={3} />
      {title && (
        <Label x={x + w / 2} y={y + h - 6} size={Math.max(10, h * 0.12)}>
          {title}
        </Label>
      )}
    </g>
  );
}

const SX = 200;
const SY = 112;
const RX = 150;
const RY = 52;
const orbitAt = (phiDeg: number) => {
  const p = (phiDeg * Math.PI) / 180;
  return { x: SX + RX * Math.cos(p), y: SY - RY * Math.sin(p) };
};

function Orbit({ faint }: { faint?: boolean }) {
  return <ellipse cx={SX} cy={SY} rx={RX} ry={RY} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 6" opacity={faint ? 0.5 : 0.9} />;
}

function SeasonsScene({ stage }: { stage: number }) {
  const labels = [
    "Earth travels around the Sun once a year",
    "Earth's axis is tilted and always leans the same way",
    "In June the northern half leans towards the Sun: summer in the north",
    "In December the northern half leans away: winter in the north",
    "Seasons are not caused by distance: Earth's orbit is almost a circle",
    "When it is summer in the north it is winter in the south",
  ];
  const sun = { x: SX, y: SY };
  const june = orbitAt(180);
  const dec = orbitAt(0);
  const pts = Array.from({ length: 13 }, (_, i) => orbitAt(180 + i * 30));
  return (
    <Scene label={`Seasons: ${labels[stage]}`}>
      <Space />
      {stage <= 3 && <Orbit />}
      {stage <= 3 && <Sun x={SX} y={SY} r={30} glow />}

      {stage === 0 && (
        <>
          <motion.g animate={{ x: pts.map((p) => p.x - SX), y: pts.map((p) => p.y - SY) }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            <TiltedEarth x={SX} y={SY} r={18} pin={false} />
          </motion.g>
          <Tag x={200} y={212} text="1 TRIP AROUND THE SUN = 1 YEAR" color="#0d9488" />
        </>
      )}

      {stage === 1 &&
        [180, 270, 0, 90].map((phi, i) => {
          const p = orbitAt(phi);
          return (
            <motion.g key={phi} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.35 }}>
              <TiltedEarth x={p.x} y={p.y} r={phi === 90 ? 13 : 18} sun={sun} pin={false} />
            </motion.g>
          );
        })}
      {stage === 1 && <Tag x={200} y={212} text="TILTED · ALWAYS LEANS THE SAME WAY" color="#0d9488" delay={1.4} />}

      {(stage === 2 || stage === 3) && (
        <>
          <g opacity={stage === 2 ? 1 : 0.35}>
            <TiltedEarth x={june.x} y={june.y} r={stage === 2 ? 28 : 18} sun={sun} />
          </g>
          <g opacity={stage === 3 ? 1 : 0.35}>
            <TiltedEarth x={dec.x} y={dec.y} r={stage === 3 ? 28 : 18} sun={sun} />
          </g>
          {stage === 2 && <Arrow x1={SX - 34} y1={SY - 6} x2={june.x + 26} y2={june.y - 16} color="#fde047" w={4} />}
          {stage === 3 && <Arrow x1={SX + 34} y1={SY - 6} x2={dec.x - 26} y2={dec.y - 2} color="#fde047" w={4} />}
          <Label x={june.x} y={june.y + 48} color="#fde68a" size={12}>
            June
          </Label>
          <Label x={dec.x} y={dec.y + 48} color="#bfdbfe" size={12}>
            December
          </Label>
          <SeasonView id={`ss${stage}`} x={stage === 2 ? 14 : 270} y={176} w={116} h={76} season={stage === 2 ? "summer" : "winter"} title={stage === 2 ? "Summer in the north" : "Winter in the north"} />
        </>
      )}

      {stage === 4 && (
        <>
          <g transform="translate(0 -34)">
            <ellipse cx={200} cy={92} rx={110} ry={34} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 6" />
            <Sun x={200} y={92} r={18} face={false} />
            <TiltedEarth x={90} y={92} r={11} pin={false} />
            <TiltedEarth x={310} y={92} r={11} pin={false} />
          </g>
          <Label x={200} y={114} color="#fde68a" size={13}>
            The distance hardly changes all year!
          </Label>
          <Tag x={200} y={18} text="CLOSER TO THE SUN? NO!" color="#dc2626" />
          {/* straight vs slanted light */}
          <g>
            <rect x={30} y={130} width={160} height={118} rx={12} fill="#1e293b" />
            <path d="M 98 140 L 122 140 L 128 206 L 92 206 Z" fill="#fde047" opacity={0.85} />
            <ellipse cx={110} cy={210} rx={20} ry={7} fill="#fef08a" />
            <rect x={44} y={214} width={132} height={6} fill="#64748b" />
            <Label x={110} y={240} size={11} color="#fde68a">
              Straight: strong = summer
            </Label>
          </g>
          <g>
            <rect x={210} y={130} width={160} height={118} rx={12} fill="#1e293b" />
            <path d="M 230 146 L 248 136 L 340 208 L 280 212 Z" fill="#fde047" opacity={0.4} />
            <ellipse cx={310} cy={210} rx={34} ry={7} fill="#fef08a" opacity={0.5} />
            <rect x={224} y={214} width={132} height={6} fill="#64748b" />
            <Label x={290} y={240} size={11} color="#bfdbfe">
              Slanted: spread out = winter
            </Label>
          </g>
        </>
      )}

      {stage === 5 && (
        <>
          <Sun x={30} y={112} r={60} face={false} glow />
          {[70, 100, 130, 160].map((yy) => (
            <line key={yy} x1={96} y1={yy} x2={196} y2={yy} stroke="#fde047" strokeWidth={2.5} strokeDasharray="8 8" />
          ))}
          <TiltedEarth x={250} y={115} r={70} sun={{ x: 30, y: 112 }} south />
          <SeasonView id="ss5n" x={330} y={14} w={66} h={60} season="summer" />
          <SeasonView id="ss5s" x={330} y={170} w={66} h={60} season="winter" />
          <Label x={363} y={88} size={11} color="#fecaca">
            North: summer
          </Label>
          <Label x={363} y={246} size={11} color="#fde68a">
            South: winter
          </Label>
        </>
      )}
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* Try it: move the Earth round the Sun                                */
/* ------------------------------------------------------------------ */

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function seasonFor(phi: number): Season {
  const p = ((phi % 360) + 360) % 360;
  if (p >= 135 && p < 225) return "summer";
  if (p >= 225 && p < 315) return "autumn";
  if (p >= 45 && p < 135) return "spring";
  return "winter";
}

const SEASON_MISSIONS: { text: string; want: Season }[] = [
  { text: "Drag the Earth round its path to make it summer in the North (red pin).", want: "summer" },
  { text: "Keep going round! Make it winter in the North.", want: "winter" },
  { text: "Now find spring in the North.", want: "spring" },
];

function MoveTheEarth() {
  const svg = useRef<SVGSVGElement>(null);
  const [phi, setPhi] = useState(90);
  const [mission, setMission] = useState(0);
  const drag = useSvgDrag(svg, (p) => {
    const a = Math.atan2(-(p.y - SY) / RY, (p.x - SX) / RX);
    setPhi(((a * 180) / Math.PI + 360) % 360);
  });

  const north = seasonFor(phi);
  const south = OPP[north];
  const month = MONTHS[Math.floor((((phi - 180) / 30 + 5.67) % 12 + 12) % 12)];
  const pos = orbitAt(phi);
  const strength = (1 - Math.cos((phi * Math.PI) / 180)) / 2; // northern sunlight strength

  useEffect(() => {
    if (mission < SEASON_MISSIONS.length && north === SEASON_MISSIONS[mission].want) setMission(mission + 1);
  }, [north, mission]);

  const done = mission >= SEASON_MISSIONS.length;
  const status = done
    ? `Great! You saw it: the North has summer when it leans towards the Sun and winter when it leans away. The distance to the Sun barely changes.`
    : `${SEASON_MISSIONS[mission].text}  It's ${month}: ${north} in the North, ${south} in the South.`;

  return (
    <TryShell title="Move the Earth round the Sun" hint="Drag the Earth along its path. See how the tilt changes the seasons. Look at the trees!" onReset={() => { setPhi(90); setMission(0); }} status={status} color={C} done={done}>
      <div className="overflow-hidden rounded-2xl border-2 border-line">
        <svg ref={svg} viewBox="0 0 400 260" role="img" aria-label={`Earth in ${month}. ${north} in the north, ${south} in the south.`} className="block h-auto w-full select-none" style={{ maxHeight: 320, touchAction: "none" }}>
          <Space />
          <Orbit />
          {[["Jun", 180], ["Sep", 270], ["Dec", 0], ["Mar", 90]].map(([m, a]) => {
            const p = orbitAt(a as number);
            const off = { x: (p.x - SX) * 0.18, y: (p.y - SY) * 0.5 };
            return (
              <text key={m} x={p.x + off.x} y={p.y + off.y + 4} textAnchor="middle" fontSize={11} fontWeight={900} fill="#94a3b8">
                {m}
              </text>
            );
          })}
          {/* draw the Earth behind the Sun when it is on the far side */}
          {Math.sin((phi * Math.PI) / 180) > 0 && (
            <g {...drag} role="button" aria-label="Drag the Earth">
              <circle cx={pos.x} cy={pos.y} r={34} fill="transparent" />
              <TiltedEarth x={pos.x} y={pos.y} r={20} sun={{ x: SX, y: SY }} south />
            </g>
          )}
          <Sun x={SX} y={SY} r={30} glow />
          {Math.sin((phi * Math.PI) / 180) <= 0 && (
            <g {...drag} role="button" aria-label="Drag the Earth">
              <circle cx={pos.x} cy={pos.y} r={34} fill="transparent" />
              <TiltedEarth x={pos.x} y={pos.y} r={24} sun={{ x: SX, y: SY }} south />
            </g>
          )}
          <Label x={pos.x} y={pos.y - 36} color="#fde68a" size={12}>
            {month}
          </Label>
          <SeasonView id="sv-n" x={10} y={186} w={120} h={68} season={north} title={`North: ${north} ${SEASON_EMOJI[north]}`} />
          <SeasonView id="sv-s" x={270} y={186} w={120} h={68} season={south} title={`South: ${south} ${SEASON_EMOJI[south]}`} />
          <g>
            <text x={200} y={214} textAnchor="middle" fontSize={10} fontWeight={800} fill="#cbd5e1">
              sunlight in the North
            </text>
            <rect x={146} y={222} width={108} height={12} rx={6} fill="#334155" />
            <rect x={146} y={222} width={108 * (0.15 + 0.85 * strength)} height={12} rx={6} fill="#facc15" />
          </g>
        </svg>
      </div>
      <p className="mt-2 text-sm font-semibold text-muted">🔴 Red pin: a place in the North (like the UK). 🟠 Orange pin: a place in the South (like Australia).</p>
    </TryShell>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Scarf() {
  return <path d="M -14 -58 h 28 v 6 h -28 Z M 6 -52 v 16 h 6 v -16 Z" fill="#dc2626" />;
}

const story: Explainer["story"] = [
  {
    art: (
      <Panel label="Sam in a red scarf builds a snowman in the snow">
        <rect width="240" height="160" fill="#cbd5e1" />
        <rect y={124} width="240" height={36} fill="#f8fafc" />
        <Kid x={60} y={140} shirt="#1d4ed8" mood="happy">
          <Scarf />
        </Kid>
        <g transform="translate(140 140)">
          <circle cy={-18} r={20} fill="#fff" stroke="#cbd5e1" strokeWidth={2} />
          <circle cy={-50} r={14} fill="#fff" stroke="#cbd5e1" strokeWidth={2} />
          <path d="M 0 -50 l 10 3 l -10 2 Z" fill="#f97316" />
          <circle cx={-4} cy={-54} r={1.8} fill="#1e293b" />
          <circle cx={4} cy={-54} r={1.8} fill="#1e293b" />
        </g>
        {[20, 70, 120, 170, 210].map((x, i) => (
          <motion.circle key={x} cx={x} r={2.5} fill="#fff" animate={{ cy: [0, 124] }} transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "linear" }} />
        ))}
      </Panel>
    ),
    speech: "Brrr! A snowy December!",
    caption: "In December, Sam builds a snowman in England.",
  },
  {
    art: (
      <Panel label="Ava in sunglasses on a sunny beach">
        <rect width="240" height="160" fill="#7dd3fc" />
        <Sun x={36} y={34} r={18} />
        <rect y={110} width="240" height={50} fill="#fde68a" />
        <path d="M 150 110 Q 190 100 240 108 L 240 122 L 150 122 Z" fill="#0ea5e9" />
        <Kid x={100} y={146} skin="#c68642" hair="#facc15" shirt="#f472b6" arm="up">
          <rect x={-12} y={-75} width={24} height={6} rx={3} fill="#111827" />
        </Kid>
      </Panel>
    ),
    speech: "It's summer here!",
    caption: "On the very same day, Sam's pen-pal Ava is at the beach in Australia.",
  },
  {
    art: (
      <Panel label="Sam wonders if Australia is closer to the Sun">
        <rect width="240" height="160" fill="#e0e7ff" />
        <Kid x={60} y={150} shirt="#1d4ed8" mood="wow">
          <Scarf />
        </Kid>
        <circle cx={96} cy={60} r={4} fill="#fff" stroke="#64748b" />
        <circle cx={104} cy={48} r={6} fill="#fff" stroke="#64748b" />
        <g>
          <ellipse cx={160} cy={58} rx={56} ry={34} fill="#fff" stroke="#64748b" strokeWidth={2} />
          <Sun x={136} y={58} r={11} face={false} spin={false} />
          <circle cx={180} cy={58} r={9} fill="#2563eb" />
          <text x={196} y={40} fontSize={18} fontWeight={900} fill="#475569">
            ?
          </text>
        </g>
      </Panel>
    ),
    speech: "Is Australia closer to the Sun?",
    caption: "Sam wonders if Australia is nearer to the Sun. Lots of people think that!",
  },
  {
    art: (
      <Panel label="A tilted Earth next to the Sun, with a friend explaining">
        <rect width="240" height="160" fill="#fef3c7" />
        <Sun x={20} y={70} r={28} face={false} />
        <TiltedEarth x={120} y={70} r={36} sun={{ x: 20, y: 70 }} pin={false} />
        <Kid x={196} y={156} skin="#8d5524" hair="#111827" shirt="#14b8a6" arm="up" />
      </Panel>
    ),
    speech: "No! It's the tilt!",
    caption: "In December the South leans towards the Sun and gets strong sunshine, while the North leans away.",
  },
];

const like: Explainer["like"] = {
  headline: "Seasons are like shining a torch straight down, or at a slant.",
  everyday: {
    label: "A torch: straight vs slanted",
    art: (
      <Panel label="A torch straight above makes a small bright spot; a slanted torch makes a big dim spot">
        <rect width="240" height="160" fill="#1e293b" />
        <rect x={50} y={20} width={20} height={34} rx={4} fill="#94a3b8" />
        <path d="M 52 54 L 68 54 L 78 128 L 42 128 Z" fill="#fde047" opacity={0.85} />
        <ellipse cx={60} cy={130} rx={20} ry={6} fill="#fef08a" />
        <g transform="rotate(-50 170 40)">
          <rect x={160} y={20} width={20} height={34} rx={4} fill="#94a3b8" />
        </g>
        <path d="M 186 50 L 196 62 L 220 128 L 140 128 Z" fill="#fde047" opacity={0.35} />
        <ellipse cx={182} cy={130} rx={40} ry={6} fill="#fef08a" opacity={0.5} />
        <rect x={10} y={134} width={220} height={6} fill="#64748b" />
      </Panel>
    ),
  },
  concept: {
    label: "Sunlight on a tilted Earth",
    art: (
      <Panel label="The Sun's rays hit the half of Earth leaning towards it more directly">
        <rect width="240" height="160" fill="#0b1026" />
        <Sun x={8} y={80} r={36} face={false} />
        {[50, 70, 90, 110].map((y) => (
          <line key={y} x1={50} y1={y} x2={130} y2={y} stroke="#fde047" strokeWidth={2.5} strokeDasharray="6 6" />
        ))}
        <TiltedEarth x={170} y={80} r={52} sun={{ x: 8, y: 80 }} />
      </Panel>
    ),
  },
  pairs: [
    ["The torch", "The Sun"],
    ["Shining straight down: a small, bright spot", "Summer: direct, strong sunlight"],
    ["Shining at a slant: a big, dim spot", "Winter: spread-out, weaker sunlight"],
    ["Tilting the paper", "The Earth's tilted axis"],
  ],
  limits:
    "Summer is also warmer because the days are longer, not just because the light is more direct. And seasons are NOT caused by the Earth getting closer to the Sun: Earth's path is almost a circle, and it's actually closest in January, during the northern winter.",
};

export const seasons: Explainer = {
  id: "why-we-have-seasons",
  title: "Why we have seasons",
  tagline: "It's the tilt, not the distance! See how Earth's lean makes summer and winter.",
  area: "Science",
  ages: "7–11",
  lessons: ["my-world/weather-and-seasons/four-seasons", "social-studies/world-geography/climate-zones"],
  color: C,
  icon: "🍂",
  watch: [
    { title: "A year-long trip", say: "The Earth travels all the way around the Sun. One whole trip takes a year: three hundred and sixty-five days.", scene: <SeasonsScene stage={0} /> },
    { title: "Earth is tilted", say: "The Earth leans to one side, like a tilted spinning top. And it always leans the same way, all year long.", scene: <SeasonsScene stage={1} /> },
    { title: "Leaning in: summer", say: "When our half of the Earth leans towards the Sun, sunlight hits us more directly and the days are long. It's summer!", scene: <SeasonsScene stage={2} /> },
    { title: "Leaning away: winter", say: "Half a year later, our half leans away from the Sun. The sunlight is spread out and weaker, and days are short. It's winter!", scene: <SeasonsScene stage={3} /> },
    { title: "Not because we're closer!", say: "Seasons are NOT because the Earth gets closer to the Sun. Our distance hardly changes. It's the tilt that matters!", scene: <SeasonsScene stage={4} /> },
    { title: "Opposite seasons", say: "So when the north has summer, the south has winter. That's why Christmas is in summer in Australia!", scene: <SeasonsScene stage={5} /> },
  ],
  try: MoveTheEarth,
  story,
  like,
};
