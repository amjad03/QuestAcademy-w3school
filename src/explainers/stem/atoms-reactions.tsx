"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { Explainer } from "../types";
import { DARK, Feedback, INK, Kid, MUTED, Pad, Svg, TryShell } from "./_kit";

const C = "#84CC16";

type El = "H" | "O" | "C" | "N";
const EL: Record<El, { fill: string; text: string; r: number; name: string; mass: number }> = {
  H: { fill: "#f8fafc", text: "#1c2333", r: 8, name: "Hydrogen", mass: 1 },
  O: { fill: "#ef4444", text: "white", r: 12, name: "Oxygen", mass: 16 },
  C: { fill: "#374151", text: "white", r: 12, name: "Carbon", mass: 12 },
  N: { fill: "#3b82f6", text: "white", r: 12, name: "Nitrogen", mass: 14 },
};

function Atom({ el, x = 0, y = 0, s = 1 }: { el: El; x?: number; y?: number; s?: number }) {
  const e = EL[el];
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={e.r * s} fill={e.fill} stroke={DARK} strokeWidth={1.8} />
      <circle cx={-e.r * s * 0.35} cy={-e.r * s * 0.35} r={e.r * s * 0.3} fill="white" opacity="0.35" />
      <text y={4.5 * s} textAnchor="middle" fontSize={11 * s} fontWeight="900" fill={e.text}>
        {el}
      </text>
    </g>
  );
}

type Mol = { name: string; formula: string; atoms: { el: El; x: number; y: number }[]; bonds: [number, number][] };

const MOLS: Record<string, Mol> = {
  H2: { name: "hydrogen", formula: "H₂", atoms: [{ el: "H", x: -8, y: 0 }, { el: "H", x: 8, y: 0 }], bonds: [[0, 1]] },
  O2: { name: "oxygen", formula: "O₂", atoms: [{ el: "O", x: -10, y: 0 }, { el: "O", x: 10, y: 0 }], bonds: [[0, 1]] },
  N2: { name: "nitrogen", formula: "N₂", atoms: [{ el: "N", x: -10, y: 0 }, { el: "N", x: 10, y: 0 }], bonds: [[0, 1]] },
  H2O: { name: "water", formula: "H₂O", atoms: [{ el: "O", x: 0, y: -3 }, { el: "H", x: -13, y: 9 }, { el: "H", x: 13, y: 9 }], bonds: [[0, 1], [0, 2]] },
  CO2: { name: "carbon dioxide", formula: "CO₂", atoms: [{ el: "O", x: -20, y: 0 }, { el: "C", x: 0, y: 0 }, { el: "O", x: 20, y: 0 }], bonds: [[0, 1], [1, 2]] },
  CH4: { name: "methane", formula: "CH₄", atoms: [{ el: "C", x: 0, y: 0 }, { el: "H", x: 0, y: -16 }, { el: "H", x: 16, y: 0 }, { el: "H", x: 0, y: 16 }, { el: "H", x: -16, y: 0 }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] },
  NH3: { name: "ammonia", formula: "NH₃", atoms: [{ el: "N", x: 0, y: -3 }, { el: "H", x: -15, y: 7 }, { el: "H", x: 15, y: 7 }, { el: "H", x: 0, y: 15 }], bonds: [[0, 1], [0, 2], [0, 3]] },
};

function Molecule({ m, x, y, s = 1 }: { m: Mol; x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {m.bonds.map(([a, b], i) => (
        <line key={i} x1={m.atoms[a].x * s} y1={m.atoms[a].y * s} x2={m.atoms[b].x * s} y2={m.atoms[b].y * s} stroke={DARK} strokeWidth={4 * s} />
      ))}
      {m.atoms.map((a, i) => (
        <Atom key={i} el={a.el} x={a.x * s} y={a.y * s} s={s} />
      ))}
    </g>
  );
}

/* ---------------- watch scenes ---------------- */

function SceneZoom() {
  return (
    <Svg label="A drop of water is magnified to show it is made of tiny water molecules built from atoms">
      <path d="M 70 70 C 70 70, 30 130, 30 155 C 30 180, 50 196, 70 196 C 90 196, 110 180, 110 155 C 110 130, 70 70, 70 70 Z" fill="#7dd3fc" stroke={INK} strokeWidth="2.5" />
      <circle cx="82" cy="160" r="10" fill="none" stroke={INK} strokeWidth="2" />
      <motion.line x1="90" y1="153" x2="200" y2="70" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />
      <motion.line x1="90" y1="168" x2="200" y2="210" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <circle cx="270" cy="140" r="90" fill="#e0f2fe" stroke={INK} strokeWidth="3" />
        {[
          [235, 100, -20],
          [295, 92, 15],
          [250, 150, 30],
          [312, 150, -10],
          [270, 198, 0],
          [215, 165, 60],
          [325, 200, 40],
        ].map(([x, y, rot], i) => (
          <motion.g key={i} animate={{ x: [0, 3, -2, 0], y: [0, -2, 3, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity }}>
            <g transform={`rotate(${rot} ${x} ${y})`}>
              <Molecule m={MOLS.H2O} x={x} y={y} s={1.1} />
            </g>
          </motion.g>
        ))}
      </motion.g>
      <text x="70" y="222" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>
        a drop of water
      </text>
      <text x="270" y="252" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>
        zoomed in a billion times
      </text>
      <g transform="translate(20 20)">
        {(["H", "O", "C", "N"] as El[]).map((e, i) => (
          <g key={e} transform={`translate(${i * 40} 0)`}>
            <Atom el={e} x={10} y={10} />
          </g>
        ))}
      </g>
    </Svg>
  );
}

function SceneJoin() {
  const t = { delay: 0.8, type: "spring" as const, stiffness: 120, damping: 12 };
  return (
    <Svg label="Two hydrogen atoms and one oxygen atom move together and join to make a water molecule">
      <motion.line x1="200" y1="120" x2="174" y2="144" stroke={INK} strokeWidth="7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
      <motion.line x1="200" y1="120" x2="226" y2="144" stroke={INK} strokeWidth="7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
      <motion.g initial={{ x: 60, y: 180 }} animate={{ x: 174, y: 144 }} transition={t}>
        <Atom el="H" s={2} />
      </motion.g>
      <motion.g initial={{ x: 340, y: 180 }} animate={{ x: 226, y: 144 }} transition={t}>
        <Atom el="H" s={2} />
      </motion.g>
      <motion.g initial={{ x: 200, y: 50 }} animate={{ x: 200, y: 120 }} transition={t}>
        <Atom el="O" s={2} />
      </motion.g>
      <motion.text x="200" y="210" textAnchor="middle" fontSize="26" fontWeight="900" fill={INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
        H₂O = water
      </motion.text>
      <motion.text x="200" y="236" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
        the little 2 means “two hydrogen atoms”
      </motion.text>
    </Svg>
  );
}

type A = { el: El; from: [number, number]; to: [number, number] };
// 2 H₂ + O₂ → 2 H₂O, atoms scaled ×1.5
const S = 1.5;
const RX: A[] = [
  { el: "O", from: [118, 130], to: [300, 88] },
  { el: "O", from: [148, 130], to: [300, 178] },
  { el: "H", from: [48, 82], to: [280, 106] },
  { el: "H", from: [72, 82], to: [320, 106] },
  { el: "H", from: [48, 178], to: [280, 196] },
  { el: "H", from: [72, 178], to: [320, 196] },
];
const OLD: [number, number][] = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const NEW: [number, number][] = [
  [0, 2],
  [0, 3],
  [1, 4],
  [1, 5],
];

function Rearrange({ counts }: { counts?: boolean }) {
  const [phase, setPhase] = useState(counts ? 2 : 0);
  useEffect(() => {
    if (counts) return;
    const a = setTimeout(() => setPhase(1), 1000);
    const b = setTimeout(() => setPhase(2), 2400);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [counts]);
  const pos = (a: A) => (phase === 2 ? a.to : phase === 1 ? [(a.from[0] + a.to[0]) / 2, a.from[1] + (a.to[1] - a.from[1]) * 0.5 - 20] : a.from);
  return (
    <g>
      {phase === 0 &&
        OLD.map(([i, j], k) => <line key={k} x1={RX[i].from[0]} y1={RX[i].from[1]} x2={RX[j].from[0]} y2={RX[j].from[1]} stroke={INK} strokeWidth="6" />)}
      {phase === 2 &&
        NEW.map(([i, j], k) => <motion.line key={k} x1={RX[i].to[0]} y1={RX[i].to[1]} x2={RX[j].to[0]} y2={RX[j].to[1]} stroke={INK} strokeWidth="6" initial={{ opacity: counts ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />)}
      {RX.map((a, i) => {
        const p = pos(a);
        return (
          <motion.g key={i} initial={{ x: (counts ? a.to : a.from)[0], y: (counts ? a.to : a.from)[1] }} animate={{ x: p[0], y: p[1] }} transition={{ type: "spring", stiffness: 70, damping: 13 }}>
            <Atom el={a.el} s={S} />
          </motion.g>
        );
      })}
    </g>
  );
}

function SceneReaction() {
  return (
    <Svg label="Two hydrogen molecules and one oxygen molecule break apart and their atoms rearrange into two water molecules">
      <Rearrange />
      <path d="M 186 230 L 222 230" stroke={INK} strokeWidth="3" markerEnd="url(#ar-a)" />
      <defs>
        <marker id="ar-a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      <text x="96" y="236" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>
        2H₂ + O₂
      </text>
      <text x="300" y="236" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>
        2H₂O
      </text>
      <text x="96" y="30" textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
        before: hydrogen + oxygen gas
      </text>
      <text x="300" y="30" textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>
        after: water
      </text>
    </Svg>
  );
}

function Tally({ x, n, el, delay }: { x: number; n: number; el: El; delay: number }) {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
      {Array.from({ length: n }, (_, i) => (
        <Atom key={i} el={el} x={x + i * 22} y={el === "H" ? 0 : 30} />
      ))}
    </motion.g>
  );
}

function SceneCount() {
  return (
    <Svg label="Counting atoms: 4 hydrogen and 2 oxygen before, and 4 hydrogen and 2 oxygen after">
      <g transform="translate(-30 -20) scale(0.8)">
        <g transform="translate(0 0)">
          {OLD.map(([i, j], k) => (
            <line key={k} x1={RX[i].from[0]} y1={RX[i].from[1]} x2={RX[j].from[0]} y2={RX[j].from[1]} stroke={INK} strokeWidth="6" />
          ))}
          {RX.map((a, i) => (
            <Atom key={i} el={a.el} x={a.from[0] + 40} y={a.from[1]} s={S} />
          ))}
        </g>
      </g>
      <g transform="translate(60 -20) scale(0.8)">
        <Rearrange counts />
      </g>
      <g transform="translate(36 200)">
        <Tally x={0} n={4} el="H" delay={0.3} />
        <Tally x={0} n={2} el="O" delay={0.6} />
      </g>
      <g transform="translate(250 200)">
        <Tally x={0} n={4} el="H" delay={0.9} />
        <Tally x={0} n={2} el="O" delay={1.2} />
      </g>
      <motion.text x="200" y="214" textAnchor="middle" fontSize="20" fontWeight="900" fill="#16a34a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
        = ✓
      </motion.text>
      <text x="200" y="20" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK}>
        count the atoms on each side
      </text>
    </Svg>
  );
}

function Flask({ x, y, after, ink = INK }: { x: number; y: number; after: boolean; ink?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M -14 -96 L -14 -60 L -44 -6 Q -48 0 -40 0 L 40 0 Q 48 0 44 -6 L 14 -60 L 14 -96 Z" fill="rgb(255 255 255 / 0.55)" stroke={ink} strokeWidth="2.5" />
      <rect x="-17" y="-104" width="34" height="10" rx="3" fill="#94a3b8" stroke={ink} strokeWidth="2" />
      {!after ? (
        <g>
          <Molecule m={MOLS.H2} x={-16} y={-22} />
          <Molecule m={MOLS.H2} x={14} y={-36} />
          <Molecule m={MOLS.O2} x={6} y={-14} s={0.9} />
        </g>
      ) : (
        <g>
          <Molecule m={MOLS.H2O} x={-14} y={-20} s={0.9} />
          <Molecule m={MOLS.H2O} x={16} y={-26} s={0.9} />
          <path d="M -30 -4 Q 0 -10 30 -4" fill="none" stroke="#38bdf8" strokeWidth="3" />
        </g>
      )}
    </g>
  );
}

function ScaleBase({ x, y, reading, ink = INK }: { x: number; y: number; reading: string; ink?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-70" y="0" width="140" height="14" rx="4" fill="#cbd5e1" stroke={ink} strokeWidth="2" />
      <rect x="-80" y="14" width="160" height="34" rx="8" fill="#475569" stroke={ink} strokeWidth="2" />
      <rect x="-40" y="20" width="80" height="22" rx="4" fill="#0f172a" />
      <text x="0" y="37" textAnchor="middle" fontSize="15" fontWeight="900" fill="#4ade80" fontFamily="monospace">
        {reading}
      </text>
    </g>
  );
}

function SceneMass() {
  const [after, setAfter] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setAfter(true), 1600);
    return () => clearTimeout(id);
  }, []);
  return (
    <Svg label="A sealed flask on a scale reads 100.0 grams before and after the reaction">
      <Flask x={200} y={180} after={after} />
      {after && (
        <motion.text x="250" y="110" fontSize="26" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}>
          💥
        </motion.text>
      )}
      <ScaleBase x={200} y={180} reading="100.0 g" />
      <text x="70" y="90" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>
        {after ? "after" : "before"}
      </text>
      <text x="70" y="110" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        {after ? "water" : "H₂ + O₂"}
      </text>
      <text x="330" y="90" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>
        sealed lid
      </text>
      <text x="330" y="110" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
        nothing gets in or out
      </text>
      {after && (
        <motion.text x="200" y="252" textAnchor="middle" fontSize="16" fontWeight="900" fill="#16a34a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          same atoms → same mass
        </motion.text>
      )}
    </Svg>
  );
}

/* ---------------- Try: balance the equation ---------------- */

type Reaction = { name: string; left: string[]; right: string[] };
const REACTIONS: Reaction[] = [
  { name: "Making water", left: ["H2", "O2"], right: ["H2O"] },
  { name: "Burning methane gas", left: ["CH4", "O2"], right: ["CO2", "H2O"] },
  { name: "Making ammonia", left: ["N2", "H2"], right: ["NH3"] },
];

function countAtoms(keys: string[], n: number[]) {
  const out: Partial<Record<El, number>> = {};
  keys.forEach((k, i) => MOLS[k].atoms.forEach((a) => (out[a.el] = (out[a.el] ?? 0) + n[i])));
  return out;
}
const massOf = (c: Partial<Record<El, number>>) => (Object.keys(c) as El[]).reduce((s, e) => s + (c[e] ?? 0) * EL[e].mass, 0);

function MolBox({ k, n, onChange }: { k: string; n: number; onChange: (v: number) => void }) {
  const m = MOLS[k];
  return (
    <div className="flex min-w-[118px] flex-1 flex-col items-center rounded-2xl border-2 border-line p-2">
      <p className="text-sm font-black">
        <span className="text-lg" style={{ color: C }}>
          {n}
        </span>{" "}
        {m.formula} <span className="font-semibold text-muted">{m.name}</span>
      </p>
      <Svg label={`${n} ${m.name} molecules`} vb="0 0 120 92" maxH={100}>
        {Array.from({ length: n }, (_, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}>
            <Molecule m={m} x={22 + (i % 3) * 38} y={22 + Math.floor(i / 3) * 46} s={0.75} />
          </motion.g>
        ))}
      </Svg>
      <div className="flex gap-1.5">
        <Pad onClick={() => onChange(Math.max(1, n - 1))} disabled={n <= 1} color={C} label={`One fewer ${m.name} molecule`}>
          <Minus className="h-5 w-5" />
        </Pad>
        <Pad onClick={() => onChange(Math.min(6, n + 1))} disabled={n >= 6} color={C} label={`One more ${m.name} molecule`}>
          <Plus className="h-5 w-5" />
        </Pad>
      </div>
    </div>
  );
}

function AtomsTry() {
  const [ri, setRi] = useState(0);
  const rx = REACTIONS[ri];
  const [nl, setNl] = useState<number[]>(rx.left.map(() => 1));
  const [nr, setNr] = useState<number[]>(rx.right.map(() => 1));
  const load = (k: number) => {
    setRi(k);
    setNl(REACTIONS[k].left.map(() => 1));
    setNr(REACTIONS[k].right.map(() => 1));
  };
  const cl = countAtoms(rx.left, nl);
  const cr = countAtoms(rx.right, nr);
  const els = (["C", "H", "N", "O"] as El[]).filter((e) => cl[e] || cr[e]);
  const balanced = els.every((e) => cl[e] === cr[e]);
  const ml = massOf(cl);
  const mr = massOf(cr);
  const tilt = Math.max(-10, Math.min(10, (ml - mr) / 3));
  const eqStr = (keys: string[], n: number[]) => keys.map((k, i) => `${n[i] > 1 ? n[i] : ""}${MOLS[k].formula}`).join(" + ");
  const th = (tilt * Math.PI) / 180;

  return (
    <TryShell title="Balance the reaction" hint="Atoms can't appear or vanish. Change how many molecules there are until every atom on the left shows up on the right." onReset={() => load(ri)}>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {REACTIONS.map((r, k) => (
          <button key={r.name} type="button" onClick={() => load(k)} className="min-h-[40px] rounded-xl border-2 px-3 text-sm font-extrabold" style={k === ri ? { background: C, borderColor: C, color: "#1c2333" } : { borderColor: "rgb(var(--line))" }}>
            {r.name}
          </button>
        ))}
      </div>
      <p className="mb-2 text-center font-mono text-xl font-black" aria-live="polite">
        {eqStr(rx.left, nl)} → {eqStr(rx.right, nr)}
      </p>
      <div className="grid items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-wrap gap-2">
          {rx.left.map((k, i) => (
            <MolBox key={k} k={k} n={nl[i]} onChange={(v) => setNl((a) => a.map((x, j) => (j === i ? v : x)))} />
          ))}
        </div>
        <div className="grid place-items-center text-3xl font-black text-muted">→</div>
        <div className="flex flex-wrap gap-2">
          {rx.right.map((k, i) => (
            <MolBox key={k} k={k} n={nr[i]} onChange={(v) => setNr((a) => a.map((x, j) => (j === i ? v : x)))} />
          ))}
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_1fr]">
        <div className="space-y-1.5 rounded-2xl border-2 border-line p-3">
          <p className="text-xs font-black uppercase tracking-wide text-muted">Atom count</p>
          {els.map((e) => {
            const a = cl[e] ?? 0;
            const b = cr[e] ?? 0;
            return (
              <div key={e} className="grid grid-cols-[86px_1fr_28px_1fr] items-center gap-2 text-sm font-bold">
                <span className="flex items-center gap-1.5">
                  <svg width="20" height="20" viewBox="-11 -11 22 22" aria-hidden>
                    <circle r="9" fill={EL[e].fill} stroke={DARK} strokeWidth="1.5" />
                  </svg>
                  {EL[e].name}
                </span>
                <span className="text-right font-mono text-lg">{a}</span>
                <span className="text-center text-lg">{a === b ? "✅" : "❌"}</span>
                <span className="font-mono text-lg">{b}</span>
              </div>
            );
          })}
        </div>
        <div className="rounded-2xl border-2 border-line p-1">
          <Svg label={`Mass before ${ml} units, mass after ${mr} units`} vb="0 0 220 120" maxH={140}>
            <path d="M 110 40 L 100 108 L 120 108 Z" fill="#94a3b8" stroke={INK} strokeWidth="2" />
            <motion.g animate={{ rotate: -tilt }} style={{ originX: 0.5, originY: 0.5 }}>
              <line x1="30" y1="40" x2="190" y2="40" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            </motion.g>
            {[
              { x: 110 - 80 * Math.cos(th), y: 40 + 80 * Math.sin(th), m: ml, l: "before" },
              { x: 110 + 80 * Math.cos(th), y: 40 - 80 * Math.sin(th), m: mr, l: "after" },
            ].map((p) => (
              <motion.g key={p.l} animate={{ x: p.x, y: p.y }} initial={false}>
                <line x1="0" y1="0" x2="0" y2="20" stroke={INK} strokeWidth="1.5" />
                <rect x="-30" y="20" width="60" height="26" rx="6" fill="rgb(var(--surface-2))" stroke={INK} strokeWidth="2" />
                <text x="0" y="38" textAnchor="middle" fontSize="13" fontWeight="900" fill={INK}>
                  {p.m} u
                </text>
                <text x="0" y="62" textAnchor="middle" fontSize="10" fontWeight="800" fill={MUTED}>
                  {p.l}
                </text>
              </motion.g>
            ))}
            <circle cx="110" cy="40" r="5" fill="#fbbf24" stroke={INK} strokeWidth="2" />
          </Svg>
        </div>
      </div>
      <div className="mt-3">
        {balanced ? (
          <Feedback tone="good" k={`ok${ri}`}>
            Balanced! Every atom on the left turns up on the right — none made, none destroyed. That's why the mass stays the same: {ml} u before, {mr} u after.
          </Feedback>
        ) : (
          <Feedback tone="bad" k={`no${els.map((e) => `${cl[e]}-${cr[e]}`).join()}`}>
            Not balanced: {els.filter((e) => cl[e] !== cr[e]).map((e) => `${EL[e].name.toLowerCase()} ${cl[e] ?? 0} → ${cr[e] ?? 0}`).join(", ")}. Atoms can&apos;t vanish or appear! Add molecules — but never change the little numbers inside a formula.
          </Feedback>
        )}
      </div>
    </TryShell>
  );
}

/* ---------------- Story + analogy ---------------- */

function Bag({ x, y, puffed, open }: { x: number; y: number; puffed: boolean; open?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={puffed ? "M -40 0 Q -52 -40 -34 -66 L 34 -66 Q 52 -40 40 0 Z" : "M -34 0 L -30 -60 L 30 -60 L 34 0 Z"} fill="rgb(224 242 254 / 0.8)" stroke={DARK} strokeWidth="2" />
      {!open && <rect x="-36" y="-70" width="72" height="6" rx="2" fill="#2563eb" />}
      {open && <path d="M -20 -78 Q -10 -90 0 -78 Q 10 -90 20 -78" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />}
      <rect x="-22" y="-16" width="44" height="14" rx="3" fill={puffed ? "#fef3c7" : "#fef9c3"} />
      {puffed && [-16, -4, 8, 18].map((bx, i) => <circle key={i} cx={bx} cy={-26 - (i % 2) * 12} r="3" fill="none" stroke="#64748b" strokeWidth="1.2" />)}
    </g>
  );
}

function KitchenScale({ x, y, reading }: { x: number; y: number; reading: string }) {
  return <ScaleBase x={x} y={y} reading={reading} ink={DARK} />;
}

const story = [
  {
    art: (
      <Svg label="Maya puts vinegar and baking soda in a sealed bag on a kitchen scale reading 250 grams" vb="0 0 240 160" maxH={170}>
        <Bag x={150} y={100} puffed={false} />
        <g transform="scale(0.8) translate(38 30)">
          <KitchenScale x={150} y={125} reading="250 g" />
        </g>
        <Kid x={40} y={150} s={0.8} shirt="#f97316" longHair hair="#7c2d12" pose="point" />
      </Svg>
    ),
    speech: "Sealed tight!",
    caption: "Maya seals vinegar and baking soda in a bag (kept apart for now) and weighs it: 250 g.",
  },
  {
    art: (
      <Svg label="The bag fizzes and puffs up with gas" vb="0 0 240 160" maxH={170}>
        <Bag x={150} y={100} puffed />
        <g transform="scale(0.8) translate(38 30)">
          <KitchenScale x={150} y={125} reading="250 g" />
        </g>
        <Kid x={40} y={150} s={0.8} shirt="#22c55e" mood="surprised" />
        <text x="200" y="30" fontSize="12" fontWeight="900" fill={DARK}>
          fizz!
        </text>
      </Svg>
    ),
    speech: "It's growing!",
    caption: "She mixes them. Fizz! A new substance forms — carbon dioxide gas — and the bag puffs up.",
  },
  {
    art: (
      <Svg label="Leo looks closely at the scale which still reads 250 grams" vb="0 0 240 160" maxH={170}>
        <Bag x={150} y={100} puffed />
        <g transform="scale(0.8) translate(38 30)">
          <KitchenScale x={150} y={125} reading="250 g" />
        </g>
        <Kid x={40} y={150} s={0.8} shirt="#22c55e" mood="thinking" />
      </Svg>
    ),
    speech: "Still 250 g?",
    caption: "The scale hasn't changed. The atoms just rearranged into new molecules — the same atoms, so the same mass.",
  },
  {
    art: (
      <Svg label="The bag is opened, gas escapes and the scale now reads 248 grams" vb="0 0 240 160" maxH={170}>
        <Bag x={150} y={100} puffed={false} open />
        <g transform="scale(0.8) translate(38 30)">
          <KitchenScale x={150} y={125} reading="248 g" />
        </g>
        <Kid x={40} y={150} s={0.8} shirt="#f97316" longHair hair="#7c2d12" pose="cheer" />
        <Molecule m={MOLS.CO2} x={190} y={22} s={0.6} />
        <Molecule m={MOLS.CO2} x={130} y={14} s={0.6} />
      </Svg>
    ),
    speech: "The gas escaped!",
    caption: "When they open the bag, the CO₂ gas floats away and the reading drops. Those atoms didn't vanish — they left the bag.",
  },
];

function Bricks() {
  const cols = ["#ef4444", "#f8fafc", "#f8fafc", "#ef4444", "#f8fafc", "#f8fafc"];
  return (
    <Svg label="Toy bricks built into two small models, then rebuilt into a different shape with the same bricks" vb="0 0 200 150" maxH={160}>
      {cols.slice(0, 3).map((c, i) => (
        <rect key={`a${i}`} x={20 + i * 18} y={40 - (i === 0 ? 14 : 0)} width="18" height="14" rx="2" fill={c} stroke={DARK} strokeWidth="1.5" />
      ))}
      {cols.slice(3).map((c, i) => (
        <rect key={`b${i}`} x={20 + i * 18} y={90 - (i === 0 ? 14 : 0)} width="18" height="14" rx="2" fill={c} stroke={DARK} strokeWidth="1.5" />
      ))}
      <text x="100" y="78" textAnchor="middle" fontSize="20" fontWeight="900" fill={DARK}>
        →
      </text>
      {[
        [130, 76, "#ef4444"],
        [148, 76, "#f8fafc"],
        [166, 76, "#f8fafc"],
        [130, 62, "#f8fafc"],
        [148, 62, "#ef4444"],
        [166, 62, "#f8fafc"],
      ].map(([x, y, c], i) => (
        <rect key={i} x={x as number} y={y as number} width="18" height="14" rx="2" fill={c as string} stroke={DARK} strokeWidth="1.5" />
      ))}
      <text x="100" y="135" textAnchor="middle" fontSize="12" fontWeight="900" fill={DARK}>
        6 bricks before · 6 bricks after
      </text>
    </Svg>
  );
}

const like = {
  headline: "Atoms are like toy building bricks: a reaction takes the models apart and builds new ones from the same bricks.",
  everyday: { label: "Rebuilding with the same bricks", art: <Bricks /> },
  concept: {
    label: "2H₂ + O₂ → 2H₂O",
    art: (
      <Svg label="Two hydrogen molecules and an oxygen molecule become two water molecules" vb="0 0 200 150" maxH={160}>
        <Molecule m={MOLS.H2} x={30} y={50} s={1.2} />
        <Molecule m={MOLS.H2} x={30} y={100} s={1.2} />
        <Molecule m={MOLS.O2} x={72} y={75} s={1.1} />
        <text x="110" y="82" textAnchor="middle" fontSize="20" fontWeight="900" fill={DARK}>
          →
        </text>
        <Molecule m={MOLS.H2O} x={160} y={52} s={1.3} />
        <Molecule m={MOLS.H2O} x={160} y={108} s={1.3} />
      </Svg>
    ),
  },
  pairs: [
    ["One brick", "One atom"],
    ["Different kinds of brick", "Different elements (H, O, C, N…)"],
    ["A little model", "A molecule"],
    ["Taking models apart and rebuilding", "A chemical reaction"],
  ] as [string, string][],
  limits:
    "Atoms aren't solid little balls: they're mostly empty space, with a tiny nucleus and electrons around it. Unlike bricks, atoms can only join in certain ways (oxygen usually makes 2 bonds, carbon 4), and new substances can look nothing like the old ones — two gases make liquid water. In ordinary chemistry atoms never change type; only nuclear reactions do that.",
};

export const atomsReactions: Explainer = {
  id: "atoms-reactions",
  title: "Atoms, molecules and chemical reactions",
  tagline: "Everything is built from atoms. Reactions just swap the partners — and nothing is lost.",
  area: "Chemistry",
  ages: "10–16",
  lessons: [
    "chemistry-school/atoms-molecules-periodic-table/molecules-and-formulae",
    "chemistry-school/atoms-molecules-periodic-table/inside-the-atom",
    "chemistry-school/chemical-reactions/signs-and-types-of-reactions",
    "chemistry-school/chemical-reactions/balancing-equations",
    "exam-chemistry/mole-concept/mole-concept-concept-crash",
  ],
  color: C,
  icon: "⚛️",
  watch: [
    { title: "Everything is made of atoms", say: "Everything around you is built from tiny pieces called atoms, far too small to see. There are about 118 different kinds, called elements.", scene: <SceneZoom /> },
    { title: "Atoms join to make molecules", say: "Atoms can link up like building blocks. Two hydrogen atoms and one oxygen atom join to make one molecule of water, H₂O.", scene: <SceneJoin /> },
    { title: "A reaction swaps the partners", say: "In a chemical reaction, molecules break apart and their atoms join up with new partners. Hydrogen and oxygen gases become water.", scene: <SceneReaction /> },
    { title: "Count the atoms", say: "Count the atoms before and after: 4 hydrogen and 2 oxygen on each side. No atom is made, and no atom is destroyed.", scene: <SceneCount /> },
    { title: "So the mass stays the same", say: "Because the very same atoms are still there, the total mass doesn't change. A sealed flask weighs the same before and after the reaction.", scene: <SceneMass /> },
  ],
  try: AtomsTry,
  story,
  like,
};
