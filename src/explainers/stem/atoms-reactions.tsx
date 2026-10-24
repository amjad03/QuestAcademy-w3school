"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Explainer, Mission, MissionApi } from "../types";
import { ActionButton, ActionRow, DARK, INK, Kid, MUTED, Pad, Svg } from "./_kit";

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
          [235, 95, -20],
          [300, 92, 15],
          [250, 148, 30],
          [315, 145, -10],
          [278, 200, 0],
          [222, 190, 60],
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
      <text x="200" y="22" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK}>
        count the atoms on each side
      </text>
      <Molecule m={MOLS.H2} x={60} y={70} s={1.5} />
      <Molecule m={MOLS.H2} x={60} y={140} s={1.5} />
      <Molecule m={MOLS.O2} x={140} y={105} s={1.4} />
      <path d="M 186 105 L 222 105" stroke={INK} strokeWidth="3" markerEnd="url(#ar-c)" />
      <defs>
        <marker id="ar-c" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      <Molecule m={MOLS.H2O} x={300} y={72} s={1.5} />
      <Molecule m={MOLS.H2O} x={300} y={142} s={1.5} />
      <line x1="20" y1="180" x2="380" y2="180" stroke="rgb(var(--line))" strokeWidth="2" />
      <g transform="translate(66 200)">
        <Tally x={0} n={4} el="H" delay={0.3} />
        <Tally x={0} n={2} el="O" delay={0.6} />
      </g>
      <g transform="translate(270 200)">
        <Tally x={0} n={4} el="H" delay={0.9} />
        <Tally x={0} n={2} el="O" delay={1.2} />
      </g>
      <text x="40" y="205" textAnchor="end" fontSize="12" fontWeight="900" fill={INK}>
        4 H
      </text>
      <text x="40" y="235" textAnchor="end" fontSize="12" fontWeight="900" fill={INK}>
        2 O
      </text>
      <motion.text x="200" y="224" textAnchor="middle" fontSize="22" fontWeight="900" fill="#16a34a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
        = ✓
      </motion.text>
    </Svg>
  );
}

function Flask({ x, y, after, ink = INK }: { x: number; y: number; after: boolean; ink?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M -14 -96 L -14 -60 L -44 -6 Q -48 0 -40 0 L 40 0 Q 48 0 44 -6 L 14 -60 L 14 -96 Z" fill="rgba(255, 255, 255, 0.55)" stroke={ink} strokeWidth="2.5" />
      <rect x="-17" y="-104" width="34" height="10" rx="3" fill="#94a3b8" stroke={ink} strokeWidth="2" />
      {!after ? (
        <g>
          <Molecule m={MOLS.H2} x={-18} y={-14} />
          <Molecule m={MOLS.H2} x={6} y={-40} />
          <Molecule m={MOLS.O2} x={16} y={-14} s={0.85} />
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

/* ---------------- guided mission: balance the equation ---------------- */

const H2O2: Mol = { name: "hydrogen peroxide", formula: "H₂O₂", atoms: [{ el: "O", x: -10, y: 0 }, { el: "O", x: 10, y: 0 }, { el: "H", x: -20, y: 12 }, { el: "H", x: 20, y: -12 }], bonds: [[0, 1], [0, 2], [1, 3]] };

type Eqn = { h2: number; o2: number; water: number; peroxide?: boolean };

const fmtN = (n: number, f: string) => `${n > 1 ? n : ""}${f}`;

/** H₂ + O₂ → water, drawn as molecules, with an atom count underneath when `count` is on. */
function Equation({ e, count }: { e: Eqn; count: boolean }) {
  const right = e.peroxide ? H2O2 : MOLS.H2O;
  const lH = 2 * e.h2;
  const lO = 2 * e.o2;
  const rH = 2 * e.water;
  const rO = (e.peroxide ? 2 : 1) * e.water;
  const col = (n: number, i: number, x: number) => ({ x, y: n === 1 ? 86 : 60 + i * 54 });
  const rows: [El, number, number][] = [
    ["H", lH, rH],
    ["O", lO, rO],
  ];
  return (
    <Svg label={`${fmtN(e.h2, "H₂")} + ${fmtN(e.o2, "O₂")} → ${fmtN(e.water, right.formula)}. Hydrogen atoms: ${lH} before, ${rH} after. Oxygen atoms: ${lO} before, ${rO} after.`} vb="0 0 400 250" maxH={250}>
      <text x="200" y="26" textAnchor="middle" fontSize="22" fontWeight="900" fill={INK}>
        {fmtN(e.h2, "H₂")} + {fmtN(e.o2, "O₂")} → {fmtN(e.water, right.formula)}
      </text>
      {Array.from({ length: e.h2 }, (_, i) => {
        const p = col(e.h2, i, 56);
        return (
          <motion.g key={`h${i}`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
            <Molecule m={MOLS.H2} x={p.x} y={p.y} s={1.8} />
          </motion.g>
        );
      })}
      {Array.from({ length: e.o2 }, (_, i) => {
        const p = col(e.o2, i, 140);
        return <Molecule key={`o${i}`} m={MOLS.O2} x={p.x} y={p.y} s={1.6} />;
      })}
      <path d="M 192 86 L 226 86" stroke={INK} strokeWidth="3" markerEnd="url(#ar-m)" />
      <defs>
        <marker id="ar-m" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
        </marker>
      </defs>
      {Array.from({ length: e.water }, (_, i) => {
        const p = col(e.water, i, 305);
        return (
          <motion.g key={`w${i}${e.peroxide ? "p" : ""}`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
            <Molecule m={right} x={p.x} y={p.y} s={1.7} />
          </motion.g>
        );
      })}
      {count && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <line x1="20" y1="150" x2="380" y2="150" stroke="rgb(var(--line))" strokeWidth="2" />
          <text x="110" y="174" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
            before
          </text>
          <text x="290" y="174" textAnchor="middle" fontSize="13" fontWeight="800" fill={MUTED}>
            after
          </text>
          {rows.map(([el, a, b], k) => (
            <g key={el} transform={`translate(0 ${200 + k * 36})`}>
              <Atom el={el} x={40} y={-6} s={1.2} />
              <text x="110" y="2" textAnchor="middle" fontSize="22" fontWeight="900" fill={INK}>
                {a}
              </text>
              <text x="200" y="2" textAnchor="middle" fontSize="22" fontWeight="900" fill={a === b ? "#16a34a" : "#ef4444"}>
                {a === b ? "=" : "≠"}
              </text>
              <text x="290" y="2" textAnchor="middle" fontSize="22" fontWeight="900" fill={INK}>
                {b}
              </text>
              <text x="360" y="2" textAnchor="middle" fontSize="20">
                {a === b ? "✅" : "❌"}
              </text>
            </g>
          ))}
        </motion.g>
      )}
    </Svg>
  );
}

function StepCount({ done, complete }: MissionApi) {
  const [counted, setCounted] = useState(false);
  return (
    <div>
      <Equation e={{ h2: 1, o2: 1, water: 1 }} count={counted} />
      <ActionRow>
        <ActionButton
          color={C}
          ink={DARK}
          disabled={complete}
          onClick={() => {
            setCounted(true);
            done();
          }}
        >
          Count the atoms
        </ActionButton>
      </ActionRow>
    </div>
  );
}

function StepFixOxygen({ done, complete }: MissionApi) {
  const [e, setE] = useState<Eqn>({ h2: 1, o2: 1, water: 1 });
  return (
    <div>
      <Equation e={e} count />
      {e.peroxide && <p className="mt-1 text-center text-sm font-bold text-bad-shade">H₂O₂ is hydrogen peroxide (a bleach), not water! Try the other way.</p>}
      <ActionRow>
        <ActionButton
          color={C}
          ink={DARK}
          disabled={complete}
          onClick={() => {
            setE({ h2: 1, o2: 1, water: 2 });
            done();
          }}
        >
          + 1 water molecule
        </ActionButton>
        <Pad onClick={() => setE({ h2: 1, o2: 1, water: 1, peroxide: true })} disabled={complete || e.peroxide} color="#64748b">
          Change H₂O to H₂O₂
        </Pad>
      </ActionRow>
    </div>
  );
}

function StepFixHydrogen({ done, complete }: MissionApi) {
  const [h2, setH2] = useState(1);
  return (
    <div>
      <Equation e={{ h2, o2: 1, water: 2 }} count />
      <ActionRow>
        <ActionButton
          color={C}
          ink={DARK}
          disabled={complete}
          onClick={() => {
            setH2(2);
            done();
          }}
        >
          + 1 hydrogen molecule
        </ActionButton>
      </ActionRow>
    </div>
  );
}

function StepWeigh({ done, complete }: MissionApi) {
  const [after, setAfter] = useState(false);
  return (
    <div>
      <Svg label={after ? "After the reaction the sealed flask holds water and the scale still reads 100.0 grams" : "A sealed flask of hydrogen and oxygen on a scale reading 100.0 grams"} vb="0 0 400 240" maxH={240}>
        <Flask x={200} y={180} after={after} />
        {after && (
          <motion.text x="250" y="110" fontSize="26" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}>
            💥
          </motion.text>
        )}
        <ScaleBase x={200} y={180} reading="100.0 g" />
        <text x="70" y="100" textAnchor="middle" fontSize="16" fontWeight="900" fill={INK}>
          {after ? "after" : "before"}
        </text>
        <text x="70" y="122" textAnchor="middle" fontSize="15" fontWeight="800" fill={MUTED}>
          {after ? "2H₂O" : "2H₂ + O₂"}
        </text>
        <text x="330" y="100" textAnchor="middle" fontSize="15" fontWeight="900" fill={INK}>
          sealed
        </text>
      </Svg>
      <ActionRow>
        <ActionButton
          color={C}
          ink={DARK}
          disabled={complete}
          onClick={() => {
            setAfter(true);
            done();
          }}
        >
          💥 Make them react
        </ActionButton>
      </ActionRow>
    </div>
  );
}

const mission: Mission = {
  goal: "Balance the equation for making water: every atom before the arrow must turn up after it.",
  steps: [
    {
      task: "Count the atoms on each side.",
      predict: { question: "H₂ + O₂ → H₂O. Is this balanced (the same atoms on both sides)?", options: ["Yes — hydrogen and oxygen are on both sides", "No — an atom is missing"], answer: 1, trap: 0 },
      scene: (api) => <StepCount {...api} />,
      hint: "Tap the green button to count.",
      explain: "There are 2 oxygen atoms before but only 1 after. Atoms can't vanish, so the equation is **not balanced** yet. **Balanced** means every kind of atom has the same count on both sides.",
    },
    {
      task: "Fix the oxygen count.",
      predict: { question: "How should we fix the missing oxygen?", options: ["Change H₂O to H₂O₂ (change the little number)", "Add another water molecule (2H₂O)"], answer: 1, trap: 0 },
      scene: (api) => <StepFixOxygen {...api} />,
      hint: "Changing the little number makes a different chemical. Add a whole molecule instead.",
      explain: "Now oxygen matches: 2 and 2. The big number in front (**2**H₂O) means two molecules. The little numbers inside a formula say what the molecule *is*, so we never change them.",
    },
    {
      task: "Now fix the hydrogen count.",
      predict: { question: "Now there are 4 H atoms after but only 2 before. What should we do?", options: ["Change H₂ to H₄", "Add another H₂ molecule", "Take a water away"], answer: 1, trap: 0 },
      scene: (api) => <StepFixHydrogen {...api} />,
      explain: "4 hydrogen and 2 oxygen on each side: **2H₂ + O₂ → 2H₂O** is balanced. We only changed how many molecules there are, never what they are.",
    },
    {
      task: "Seal the gases in a flask and make them react.",
      predict: { question: "The sealed flask weighs 100.0 g. After the reaction, it weighs…", options: ["Less — the gases get used up", "The same", "More — water is heavier"], answer: 1, trap: 0 },
      scene: (api) => <StepWeigh {...api} />,
      explain: "Still 100.0 g. The very same atoms are there, just joined in new ways, so the **mass stays the same**. This is called conservation of mass.",
    },
  ],
  takeaway: "In a reaction atoms only swap partners: balance an equation by changing the big numbers in front, never the little ones inside.",
};

/* ---------------- Story + analogy ---------------- */

function Bag({ x, y, puffed, open }: { x: number; y: number; puffed: boolean; open?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={puffed ? "M -40 0 Q -52 -40 -34 -66 L 34 -66 Q 52 -40 40 0 Z" : "M -34 0 L -30 -60 L 30 -60 L 34 0 Z"} fill="rgba(224, 242, 254, 0.8)" stroke={DARK} strokeWidth="2" />
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
        <Bag x={150} y={124} puffed={false} />
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
        <Bag x={150} y={124} puffed />
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
        <Bag x={150} y={124} puffed />
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
        <Bag x={150} y={124} puffed={false} open />
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
    { title: "Everything is made of atoms", say: "Everything around you is built from tiny pieces called atoms, far too small to see. There are about 118 kinds of atom. Each kind is called an element.", scene: <SceneZoom /> },
    { title: "Atoms join to make molecules", say: "Atoms can link up like building blocks. Two hydrogen atoms and one oxygen atom join to make one molecule of water, H₂O.", scene: <SceneJoin /> },
    { title: "A reaction swaps the partners", say: "In a chemical reaction, molecules break apart. Their atoms join up with new partners. Here, hydrogen gas and oxygen gas become water.", scene: <SceneReaction /> },
    { title: "Count the atoms", say: "Count the atoms before and after: 4 hydrogen and 2 oxygen on each side. No atom is made, and no atom is destroyed.", scene: <SceneCount /> },
    { title: "So the mass stays the same", say: "Because the very same atoms are still there, the total mass doesn't change. A sealed flask weighs the same before and after the reaction.", scene: <SceneMass /> },
  ],
  misconception: { myth: "To balance an equation, change the little numbers inside a formula, like H₂O to H₂O₂.", truth: "The little numbers say what the substance is. Balance by changing the big numbers in front (how many molecules), like 2H₂O." },
  mission,
  story,
  like,
};
