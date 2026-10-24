"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import type { Explainer, Mission, MissionApi } from "../types";
import { DARK, INK, Kid, MUTED, Svg } from "./_kit";

const C = "#F59E0B";
const PIPE = "#7dd3fc";
const PIPE_EDGE = "#0369a1";
const DROP = "#1d4ed8";
const SPARK = "#f59e0b";

/** Dots flowing along a path. `speed` is in SVG units per second; 0 stops it. */
function Flow({ d, speed, color, width = 6, gap = 18 }: { d: string; speed: number; color: string; width?: number; gap?: number }) {
  const moving = speed > 0.01;
  return (
    <motion.path
      key={moving ? `m${Math.round(speed)}` : "still"}
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={`0.1 ${gap}`}
      initial={{ strokeDashoffset: 0 }}
      animate={moving ? { strokeDashoffset: -(gap + 0.1) } : { strokeDashoffset: 0 }}
      transition={moving ? { repeat: Infinity, ease: "linear", duration: (gap + 0.1) / speed } : { duration: 0 }}
    />
  );
}

function Bulb({ x, y, glow, dark }: { x: number; y: number; glow: number; dark?: boolean }) {
  const ink = dark ? DARK : INK;
  return (
    <g>
      <motion.circle cx={x} cy={y - 22} r={18 + glow * 22} animate={{ r: 18 + glow * 22, opacity: glow * 0.45 }} fill="#fde047" />
      <path d={`M ${x - 9} ${y - 4} L ${x - 9} ${y + 6} L ${x + 9} ${y + 6} L ${x + 9} ${y - 4}`} fill="#94a3b8" stroke={ink} strokeWidth="2" />
      <motion.circle cx={x} cy={y - 22} r="17" stroke={ink} strokeWidth="2.5" animate={{ fill: glow > 0.02 ? `rgba(253, 224, 71, ${0.25 + glow * 0.75})` : "rgba(255, 255, 255, 0.85)" }} />
      <path d={`M ${x - 6} ${y - 4} L ${x - 4} ${y - 24} L ${x} ${y - 18} L ${x + 4} ${y - 24} L ${x + 6} ${y - 4}`} fill="none" stroke={glow > 0.02 ? "#b45309" : ink} strokeWidth="1.8" />
    </g>
  );
}

function Battery({ x, y, ink = INK }: { x: number; y: number; ink?: string }) {
  // vertical cell centred at (x, y); + at top
  return (
    <g>
      <rect x={x - 16} y={y - 26} width="32" height="52" rx="5" fill="#334155" stroke={ink} strokeWidth="2.5" />
      <rect x={x - 16} y={y - 26} width="32" height="18" rx="5" fill="#f59e0b" />
      <rect x={x - 6} y={y - 31} width="12" height="5" rx="1.5" fill="#94a3b8" stroke={ink} strokeWidth="1.5" />
      <text x={x} y={y - 12} textAnchor="middle" fontSize="13" fontWeight="900" fill="#1c2333">
        +
      </text>
      <text x={x} y={y + 18} textAnchor="middle" fontSize="15" fontWeight="900" fill="white">
        −
      </text>
    </g>
  );
}

/* Electric loop: left side x=60 holds battery (y 104–156), top wire y=50, right x=340, bottom y=210. */
const WIRE = "M 60 104 L 60 50 L 340 50 L 340 210 L 60 210 L 60 156";

function Circuit({ speed, glow, open = false, label, cells = 1 }: { speed: number; glow: number; open?: boolean; label: string; cells?: number }) {
  return (
    <Svg label={label}>
      <path d={WIRE} fill="none" stroke={MUTED} strokeWidth="5" strokeLinejoin="round" />
      {/* switch on the bottom wire */}
      <rect x="180" y="200" width="40" height="20" fill="rgb(var(--surface))" />
      <circle cx="182" cy="210" r="4" fill={INK} />
      <circle cx="218" cy="210" r="4" fill={INK} />
      <motion.line x1="182" y1="210" initial={false} animate={{ x2: open ? 210 : 218, y2: open ? 186 : 210 }} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <Flow d={WIRE} speed={open ? 0 : speed} color={SPARK} />
      <Battery x={60} y={130} />
      {cells > 1 && <Battery x={60} y={84} />}
      <rect x="176" y="40" width="48" height="20" fill="rgb(var(--surface))" />
      <Bulb x={200} y={60} glow={open ? 0 : glow} />
      <text x="96" y="134" fontSize="13" fontWeight="800" fill={INK}>
        battery
      </text>
      <text x="200" y="240" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>
        switch {open ? "open" : "closed"}
      </text>
    </Svg>
  );
}

/* Water loop with pump on the left, optional narrow section along the top. */
const PIPE_D = "M 60 130 L 60 50 L 340 50 L 340 210 L 60 210 Z";

function Pump({ x, y, spin, ink = INK }: { x: number; y: number; spin: number; ink?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="26" fill="#e2e8f0" stroke={ink} strokeWidth="3" />
      <g className={spin > 0 ? "animate-spin" : ""} style={{ transformBox: "fill-box", transformOrigin: "center", animationDuration: `${spin > 0 ? Math.max(0.25, 2 / spin) : 0}s` }}>
        {[0, 60, 120].map((a) => (
          <rect key={a} x={x - 3} y={y - 20} width="6" height="40" rx="3" fill="#475569" transform={`rotate(${a} ${x} ${y})`} />
        ))}
      </g>
      <circle cx={x} cy={y} r="5" fill="#f59e0b" />
    </g>
  );
}

function WaterLoop({ speed, narrow = 0, label, counter, children }: { speed: number; narrow?: number; label: string; counter?: number; children?: ReactNode }) {
  const w = 22 - narrow;
  return (
    <Svg label={label}>
      <path d={PIPE_D} fill="none" stroke={PIPE_EDGE} strokeWidth="28" strokeLinejoin="round" />
      <path d={PIPE_D} fill="none" stroke={PIPE} strokeWidth="22" strokeLinejoin="round" />
      {narrow > 0 && (
        <>
          <rect x="150" y="34" width="100" height="32" fill="rgb(var(--surface))" />
          <rect x="150" y={50 - w / 2 - 3} width="100" height={w + 6} fill={PIPE_EDGE} />
          <rect x="150" y={50 - w / 2} width="100" height={w} fill={PIPE} />
        </>
      )}
      <Flow d={PIPE_D} speed={speed} color={DROP} width={7} gap={20} />
      <Pump x={60} y={140} spin={speed / 40} />
      <path d="M 92 30 L 112 30" stroke={INK} strokeWidth="2.5" markerEnd="url(#ec-arr)" />
      <defs>
        <marker id="ec-arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      {counter !== undefined && (
        <g>
          <line x1="340" y1="120" x2="370" y2="120" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 3" />
          <rect x="300" y="226" width="90" height="28" rx="8" fill="#ef4444" />
          <text x="345" y="245" textAnchor="middle" fontSize="13" fontWeight="900" fill="white">
            {counter} drops
          </text>
        </g>
      )}
      {children}
    </Svg>
  );
}

function SceneCounter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setN((v) => v + 1), 300);
    return () => clearInterval(id);
  }, []);
  return (
    <WaterLoop speed={60} label="Water flows round the pipe loop; a counter counts how many drops pass a point" counter={n}>
      <text x="200" y="138" textAnchor="middle" fontSize="16" fontWeight="900" fill={INK}>
        current = how much flows
      </text>
      <text x="200" y="160" textAnchor="middle" fontSize="16" fontWeight="900" fill={INK}>
        past a point each second
      </text>
      <text x="200" y="186" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        (in wires: amps, A)
      </text>
    </WaterLoop>
  );
}

const OHM_STATES = [
  { V: 6, R: 3 },
  { V: 12, R: 3 },
  { V: 12, R: 6 },
];

function SceneOhm() {
  const STATES = OHM_STATES;
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => (v + 1) % STATES.length), 2600);
    return () => clearInterval(id);
  }, [STATES.length]);
  const { V, R } = STATES[k];
  const I = V / R;
  return (
    <WaterLoop speed={I * 22} narrow={R * 2.2} label={`Ohm's law: push ${V} volts through ${R} ohms gives ${I} amps`}>
      <text x="200" y="118" textAnchor="middle" fontSize="28" fontWeight="900" fill={INK}>
        V = I × R
      </text>
      <motion.text key={k} x="200" y="152" textAnchor="middle" fontSize="18" fontWeight="900" fill={C} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {V} V ÷ {R} Ω = {I} A
      </motion.text>
      <text x="200" y="184" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        {k === 0 ? "start" : k === 1 ? "double the push → double the flow" : "narrower pipe → less flow"}
      </text>
    </WaterLoop>
  );
}

function SceneSwitch() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(id);
  }, []);
  return <Circuit speed={60} glow={0.8} open={open} label="A switch opens, breaking the loop: the current stops and the bulb goes out" />;
}

/* ---------------- Try ---------------- */

/* ---------- guided mission ---------- */

/** One big action button for a mission step. */
function ActionButton({ onClick, disabled, children }: { onClick: () => void; disabled?: boolean; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className="mx-auto mt-2 flex min-h-[52px] items-center justify-center rounded-2xl px-6 text-lg font-black text-white disabled:opacity-50" style={{ background: C }}>
      {children}
    </button>
  );
}

function StepSwitch({ done, complete }: MissionApi) {
  const [closed, setClosed] = useState(false);
  return (
    <div>
      <Circuit speed={closed ? 70 : 0} glow={closed ? 0.6 : 0} open={!closed} label={closed ? "The switch is closed, current flows and the bulb glows" : "The switch is open, nothing flows and the bulb is dark"} />
      <ActionButton
        disabled={complete}
        onClick={() => {
          setClosed(true);
          done();
        }}
      >
        Close the switch
      </ActionButton>
    </div>
  );
}

function StepBatteries({ done, complete }: MissionApi) {
  const [two, setTwo] = useState(false);
  return (
    <div>
      <Circuit cells={two ? 2 : 1} speed={two ? 140 : 70} glow={two ? 1 : 0.45} label={two ? "Two batteries: faster flow and a brighter bulb" : "One battery: steady flow and a dim bulb"} />
      <p className="text-center text-sm font-bold text-muted">{two ? "2 batteries" : "1 battery"}</p>
      <ActionButton
        disabled={complete}
        onClick={() => {
          setTwo(true);
          done();
        }}
      >
        Add a second battery
      </ActionButton>
    </div>
  );
}

function StepThinWire({ done, complete }: MissionApi) {
  const [thin, setThin] = useState(false);
  return (
    <div>
      <Circuit speed={thin ? 30 : 70} glow={thin ? 0.2 : 0.6} label={thin ? "A thin, long wire: slower flow and a dimmer bulb" : "Normal wire: steady flow"} />
      <p className="text-center text-sm font-bold text-muted">{thin ? "thin, long wire (more resistance)" : "normal wire"}</p>
      <ActionButton
        disabled={complete}
        onClick={() => {
          setThin(true);
          done();
        }}
      >
        Use the thin wire
      </ActionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Light the bulb, then find out what makes it brighter or dimmer.",
  steps: [
    {
      task: "Close the switch.",
      predict: { question: "The battery is connected, but the switch is open. Will the bulb light?", options: ["Yes — the battery is connected", "No — the loop is broken"], answer: 1, trap: 0 },
      scene: (api) => <StepSwitch {...api} />,
      hint: "Tap the orange button under the circuit.",
      explain: "Current only flows round a **complete loop**. With the switch open there is a gap, so nothing flows anywhere — not even in the wire next to the battery.",
    },
    {
      task: "Add a second battery.",
      predict: { question: "What will the bulb do with two batteries?", options: ["Get brighter", "Stay the same", "Go out"], answer: 0 },
      scene: (api) => <StepBatteries {...api} />,
      explain: "Two batteries give a **bigger push** (more voltage), so more current flows and the bulb glows brighter.",
    },
    {
      task: "Swap in a thin, long wire.",
      predict: { question: "A thin, long wire is harder to flow through. What happens to the bulb?", options: ["Brighter", "Dimmer"], answer: 1 },
      scene: (api) => <StepThinWire {...api} />,
      explain: "A thin, long wire has **more resistance**, so less current flows and the bulb dims. Push and resistance together decide the current: **I = V ÷ R**.",
    },
  ],
  takeaway: "Current flows only round a complete loop: more push (voltage) means more current, more resistance means less.",
};

function Torch({ x, y, glow, broken }: { x: number; y: number; glow: number; broken?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {glow > 0 && <path d={`M 40 -10 L 120 -40 L 120 40 L 40 10 Z`} fill="#fde047" opacity={glow * 0.6} />}
      <rect x="-30" y="-10" width="60" height="20" rx="5" fill="#475569" stroke={DARK} strokeWidth="2" />
      <path d="M 30 -10 L 42 -16 L 42 16 L 30 10 Z" fill="#94a3b8" stroke={DARK} strokeWidth="2" />
      {broken && <path d="M -6 -16 L 0 -24 L 6 -16" fill="none" stroke="#ef4444" strokeWidth="2.5" />}
    </g>
  );
}

const story = [
  {
    art: (
      <Svg label="Leo in a dark tent with a dim torch" vb="0 0 240 160" maxH={170}>
        <rect width="240" height="160" fill="#1e293b" />
        <path d="M 0 150 L 120 20 L 240 150 Z" fill="#334155" />
        <Kid x={50} y={150} s={0.8} shirt="#22c55e" mood="sad" pose="hold" />
        <Torch x={90} y={110} glow={0.25} />
      </Svg>
    ),
    speech: "Why is it so dim?",
    caption: "Leo's torch is barely glowing. Its old battery has hardly any push (voltage) left.",
  },
  {
    art: (
      <Svg label="Maya sketches the torch circuit as a water pipe loop with a pump" vb="0 0 240 160" maxH={170}>
        <rect x="70" y="20" width="160" height="120" rx="6" fill="white" stroke={DARK} strokeWidth="2" />
        <rect x="95" y="45" width="110" height="70" fill="none" stroke={PIPE_EDGE} strokeWidth="9" />
        <rect x="95" y="45" width="110" height="70" fill="none" stroke={PIPE} strokeWidth="5" />
        <Pump x={95} y={80} spin={0} ink={DARK} />
        <rect x="135" y="38" width="30" height="14" fill="white" />
        <rect x="135" y="43" width="30" height="4" fill={PIPE_EDGE} />
        <Kid x={34} y={150} s={0.75} shirt="#f97316" longHair hair="#7c2d12" pose="point" />
      </Svg>
    ),
    speech: "Battery = pump!",
    caption: "Maya draws it as pipes: the battery is a pump, and the bulb is a narrow bit of pipe that resists the flow.",
  },
  {
    art: (
      <Svg label="With a new battery the torch shines brightly" vb="0 0 240 160" maxH={170}>
        <rect width="240" height="160" fill="#1e293b" />
        <Kid x={50} y={150} s={0.8} shirt="#22c55e" mood="happy" pose="hold" />
        <Torch x={90} y={110} glow={1} />
      </Svg>
    ),
    speech: "So bright!",
    caption: "A fresh battery pushes harder, so more current flows through the bulb and it shines brighter.",
  },
  {
    art: (
      <Svg label="A loose wire inside the torch stops it working" vb="0 0 240 160" maxH={170}>
        <rect width="240" height="160" fill="#1e293b" />
        <Kid x={50} y={150} s={0.8} shirt="#22c55e" mood="surprised" pose="hold" />
        <Torch x={90} y={110} glow={0} broken />
        <path d="M 150 70 L 175 70 M 185 64 L 205 74" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
      </Svg>
    ),
    speech: "A gap in the loop!",
    caption: "Then a wire comes loose. The loop is broken, so no current flows at all, however good the battery is.",
  },
];

const like = {
  headline: "Electric current is like water flowing round a loop of pipes.",
  everyday: {
    label: "A pump pushing water round pipes",
    art: (
      <Svg label="Water pipe loop with a pump and a narrow section" vb="0 0 200 150" maxH={160}>
        <rect x="30" y="25" width="140" height="100" fill="none" stroke={PIPE_EDGE} strokeWidth="16" strokeLinejoin="round" />
        <rect x="30" y="25" width="140" height="100" fill="none" stroke={PIPE} strokeWidth="11" strokeLinejoin="round" />
        <rect x="80" y="15" width="40" height="20" fill="white" />
        <rect x="80" y="21" width="40" height="8" fill={PIPE_EDGE} />
        <rect x="80" y="23" width="40" height="4" fill={PIPE} />
        <Pump x={30} y={75} spin={0} ink={DARK} />
      </Svg>
    ),
  },
  concept: {
    label: "A battery pushing current round a circuit",
    art: (
      <Svg label="Circuit with battery and bulb" vb="0 0 200 150" maxH={160}>
        <path d="M 30 55 L 30 25 L 170 25 L 170 125 L 30 125 L 30 95" fill="none" stroke="#475569" strokeWidth="4" strokeLinejoin="round" />
        <Battery x={30} y={75} ink={DARK} />
        <rect x="80" y="15" width="40" height="20" fill="white" />
        <Bulb x={100} y={35} glow={0.7} dark />
      </Svg>
    ),
  },
  pairs: [
    ["The pump's push", "Voltage V (volts)"],
    ["How much water flows each second", "Current I (amps)"],
    ["A narrow pipe", "Resistance R (ohms), e.g. a bulb filament"],
    ["A closed valve or a cut pipe", "An open switch — no current anywhere"],
  ] as [string, string][],
  limits:
    "In a real wire, charges (electrons) fill the whole wire already and only drift slowly — what travels fast is the push. Electrons actually move from − to +, the opposite way to the arrows we draw for “conventional current”. And the bulb doesn't use up current: the same current comes out as goes in; what it uses is energy. Ohm's law V = I × R only holds for things whose resistance stays the same, like a resistor at a steady temperature.",
};

export const electricCircuits: Explainer = {
  id: "electric-circuits",
  title: "Electric circuits: current is like water in pipes",
  tagline: "Battery = pump, current = flow, resistance = narrow pipe. Then V = I × R makes sense.",
  area: "Physics",
  ages: "10–16",
  lessons: ["physics-school/electricity/current-and-ohms-law", "physics-school/electricity/circuits-and-power", "exam-physics/current-electricity/current-electricity-concept-crash"],
  color: C,
  icon: "💡",
  watch: [
    { title: "A circuit is a loop", say: "Electricity needs a complete loop, called a circuit. It flows from the battery, through the bulb, and back to the battery.", scene: <Circuit speed={60} glow={0.8} label="A battery, wires and a glowing bulb in a closed loop, with current flowing round" /> },
    {
      title: "The battery is a pump",
      say: "Imagine the wires are pipes full of water. The battery is a pump that pushes the water round. That push is called voltage, V.",
      scene: (
        <WaterLoop speed={60} label="A pump pushes water round a loop of pipes">
          <text x="200" y="128" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>
            pump = battery
          </text>
          <text x="200" y="156" textAnchor="middle" fontSize="16" fontWeight="900" fill={C}>
            its push = voltage (V)
          </text>
        </WaterLoop>
      ),
    },
    { title: "Current is how much flows", say: "Current, I, is how much flows past a point every second. In wires it's electric charge, measured in amps.", scene: <SceneCounter /> },
    {
      title: "Resistance is a narrow pipe",
      say: "A narrow pipe makes it harder for water to get through, so less flows. That's resistance, R, measured in ohms. A bulb's thin wire works like this.",
      scene: (
        <WaterLoop speed={24} narrow={14} label="A narrow section of pipe at the top slows the flow all the way round">
          <text x="210" y="100" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK}>
            ↑ narrow pipe = resistance (R)
          </text>
          <text x="210" y="140" textAnchor="middle" fontSize="14" fontWeight="800" fill={MUTED}>
            less flows all the way round
          </text>
        </WaterLoop>
      ),
    },
    { title: "Ohm's law: V = I × R", say: "More push gives more flow. A narrower pipe gives less flow. Put together: V = I × R, so the current I = V ÷ R.", scene: <SceneOhm /> },
    { title: "Break the loop and it all stops", say: "Open a switch and the loop is broken. With no complete path, no current flows anywhere, and the bulb goes out.", scene: <SceneSwitch /> },
  ],
  misconception: { myth: "The bulb uses up the current, so less comes back to the battery.", truth: "The same current flows all the way round the loop. The bulb turns the battery's energy into light, not the current." },
  mission,
  story,
  like,
};
