"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Send, Repeat } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { Art, INK, Kid, Laptop, PacketIcon, Photo, RouterIcon, Stage, STAGE_INK, STAGE_MUTED, Tablet } from "./_art";

const COLOR = "#0D9488";

/* ------------------------------------------------------------------ */
/* Watch: one fixed little network                                     */
/* ------------------------------------------------------------------ */

type P = { x: number; y: number };
const W: Record<string, P> = {
  L: { x: 42, y: 130 },
  R1: { x: 135, y: 62 },
  R2: { x: 135, y: 198 },
  R3: { x: 262, y: 62 },
  R4: { x: 262, y: 198 },
  T: { x: 358, y: 130 },
};
const W_EDGES = [
  ["L", "R1"],
  ["L", "R2"],
  ["R1", "R3"],
  ["R2", "R4"],
  ["R1", "R4"],
  ["R1", "R2"],
  ["R3", "R4"],
  ["R3", "T"],
  ["R4", "T"],
];

function route(names: string[]) {
  return { x: names.map((n) => W[n].x), y: names.map((n) => W[n].y) };
}

function Net({ busy, children }: { busy?: string; children?: React.ReactNode }) {
  return (
    <>
      {W_EDGES.map(([a, b]) => (
        <line key={a + b} x1={W[a].x} y1={W[a].y} x2={W[b].x} y2={W[b].y} stroke={busy && (a === busy || b === busy) ? "#F87171" : "rgb(var(--line))"} strokeWidth={6} strokeLinecap="round" />
      ))}
      {["R1", "R2", "R3", "R4"].map((r) => (
        <g key={r} transform={`translate(${W[r].x} ${W[r].y})`}>
          <RouterIcon label={busy === r ? "traffic jam!" : "router"} off={false} active={busy === r} />
        </g>
      ))}
      <g transform={`translate(${W.L.x} ${W.L.y})`}>
        <Laptop>
          <g transform="translate(0 -15)">
            <Photo w={36} h={24} clipId="net-photo-l" />
          </g>
        </Laptop>
        <text y={34} textAnchor="middle" fontSize={11} fontWeight={800} fill={STAGE_INK}>
          Mia
        </text>
      </g>
      <g transform={`translate(${W.T.x} ${W.T.y})`}>
        <Tablet />
        <text y={46} textAnchor="middle" fontSize={11} fontWeight={800} fill={STAGE_INK}>
          Grandma
        </text>
      </g>
      {children}
    </>
  );
}

const PIECE_COLORS = ["#F97316", "#8B5CF6", "#0EA5E9", "#DB2777"];

function Hop({ path, delay, n, dur = 2.4, loop = true }: { path: string[]; delay: number; n: number; dur?: number; loop?: boolean }) {
  return (
    <motion.g initial={{ x: W.L.x, y: W.L.y, opacity: 0 }} animate={{ ...route(path), opacity: 1 }} transition={{ duration: dur, delay, ease: "easeInOut", repeat: loop ? Infinity : 0, repeatDelay: 1.2 }}>
      <PacketIcon n={n} color={PIECE_COLORS[n - 1]} />
    </motion.g>
  );
}

/** The photo cut into 4 quarter pieces. `spread` pushes them apart. */
function PhotoPieces({ cx, cy, w, h, spread, id }: { cx: number; cy: number; w: number; h: number; spread: number; id: string }) {
  const quads = [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ];
  return (
    <g>
      {quads.map(([sx, sy], k) => (
        <motion.g key={k} initial={{ x: cx, y: cy }} animate={{ x: cx + sx * spread, y: cy + sy * spread }} transition={{ delay: 0.5, duration: 0.8 }}>
          <defs>
            <clipPath id={`${id}-${k}`}>
              <rect x={sx < 0 ? -w / 2 : 0} y={sy < 0 ? -h / 2 : 0} width={w / 2} height={h / 2} />
            </clipPath>
          </defs>
          <g clipPath={`url(#${id}-${k})`}>
            <Photo w={w} h={h} clipId={`${id}-ph-${k}`} />
          </g>
          <rect x={sx < 0 ? -w / 2 : 0} y={sy < 0 ? -h / 2 : 0} width={w / 2} height={h / 2} fill="none" stroke={INK} strokeWidth={2} />
          {spread > 0 && (
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 + k * 0.15 }}>
              <circle cx={sx * (w / 4)} cy={sy * (h / 4)} r={13} fill={PIECE_COLORS[k]} stroke={INK} strokeWidth={2} />
              <text x={sx * (w / 4)} y={sy * (h / 4) + 5} textAnchor="middle" fontSize={14} fontWeight={900} fill="#fff">
                {k + 1}
              </text>
            </motion.g>
          )}
        </motion.g>
      ))}
    </g>
  );
}

const watch: Explainer["watch"] = [
  {
    title: "Mia sends Grandma a photo",
    say: "Mia wants to send a photo to Grandma, far away. In between are lots of computers called routers, all joined up. That is the internet.",
    scene: (
      <Stage label="Mia's laptop on the left, Grandma's tablet on the right, and four routers joined by lines in between">
        <Net />
      </Stage>
    ),
  },
  {
    title: "Chop it into packets",
    say: "A big photo is cut into small pieces called packets. Each packet gets a label: who it is for, and its number, like 2 of 4.",
    scene: (
      <Stage label="The photo splits into four numbered pieces, each with a label saying To Grandma and its number out of 4">
        <PhotoPieces cx={200} cy={110} w={180} h={130} spread={22} id="split" />
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <rect x={110} y={204} width={180} height={28} rx={8} fill="#FFFBEB" stroke={INK} strokeWidth={2} />
          <text x={200} y={223} textAnchor="middle" fontSize={13} fontWeight={800} fill={INK}>
            To: Grandma · piece 2 of 4
          </text>
        </motion.g>
      </Stage>
    ),
  },
  {
    title: "Routers pass packets along",
    say: "Each router reads the label and passes the packet to a neighbour that is closer to Grandma. Hop, hop, hop!",
    scene: (
      <Stage label="Four numbered packets hop from router to router towards Grandma's tablet">
        <Net>
          <Hop path={["L", "R1", "R3", "T"]} delay={0} n={1} />
          <Hop path={["L", "R2", "R4", "T"]} delay={0.4} n={2} />
          <Hop path={["L", "R1", "R4", "T"]} delay={0.8} n={3} />
          <Hop path={["L", "R2", "R4", "T"]} delay={1.2} n={4} />
        </Net>
      </Stage>
    ),
  },
  {
    title: "Different roads, different order",
    say: "If one router has a traffic jam, packets go around it. Some roads are longer, so the packets can arrive in a jumbled order.",
    scene: (
      <Stage label="Router R1 has a traffic jam. Packets take different routes and arrive at Grandma in the order 2, 4, 1, 3">
        <Net busy="R1">
          <Hop path={["L", "R2", "R4", "T"]} delay={0} n={2} dur={1.8} loop={false} />
          <Hop path={["L", "R2", "R4", "T"]} delay={0.5} n={4} dur={1.8} loop={false} />
          <Hop path={["L", "R1", "R1", "R3", "T"]} delay={0.2} n={1} dur={3.2} loop={false} />
          <Hop path={["L", "R2", "R1", "R1", "R3", "T"]} delay={0.4} n={3} dur={4} loop={false} />
        </Net>
        <text x={200} y={234} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          arrived: 2, 4, 1, 3
        </text>
      </Stage>
    ),
  },
  {
    title: "Put the pieces back together",
    say: "Grandma's tablet reads the numbers and puts the pieces in order: 1, 2, 3, 4. The whole photo appears!",
    scene: (
      <Stage label="Four jumbled pieces slide together in number order and make the whole photo again on Grandma's tablet">
        <g transform="translate(200 116)">
          <rect x={-104} y={-82} width={208} height={168} rx={16} fill="#111827" stroke={INK} strokeWidth={2.5} />
        </g>
        <ReassembleScene />
        <motion.text x={200} y={226} textAnchor="middle" fontSize={14} fontWeight={900} fill={COLOR} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
          “What a lovely photo!” 💛
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "A packet got lost? Ask again!",
    say: "Sometimes a packet gets lost. Grandma's tablet notices number 3 is missing and asks for it again. Mia's laptop sends a new copy.",
    scene: (
      <Stage label="Packet 3 disappears at a router. The tablet sends back a message saying please resend 3, and a new packet 3 arrives">
        <Net>
          <motion.g initial={{ x: W.L.x, y: W.L.y }} animate={{ x: [W.L.x, W.R2.x], y: [W.L.y, W.R2.y], opacity: [1, 1, 0], scale: [1, 1, 1.8] }} transition={{ duration: 1.2, times: [0, 0.75, 1] }}>
            <PacketIcon n={3} color={PIECE_COLORS[2]} />
          </motion.g>
          <motion.text x={W.R2.x + 20} y={W.R2.y - 22} fontSize={18} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1, duration: 1 }}>
            💨
          </motion.text>
          <motion.g initial={{ x: W.T.x, y: W.T.y, opacity: 0 }} animate={{ x: [W.T.x, W.R3.x, W.R1.x, W.L.x], y: [W.T.y, W.R3.y, W.R1.y, W.L.y], opacity: [1, 1, 1, 0] }} transition={{ delay: 1.8, duration: 1.6 }}>
            <rect x={-38} y={-11} width={76} height={22} rx={11} fill="#FEF3C7" stroke={INK} strokeWidth={2} />
            <text y={4} textAnchor="middle" fontSize={10} fontWeight={900} fill={INK}>
              resend 3?
            </text>
          </motion.g>
          <motion.g initial={{ x: W.L.x, y: W.L.y, opacity: 0 }} animate={{ ...route(["L", "R1", "R3", "T"]), opacity: 1 }} transition={{ delay: 3.6, duration: 1.8 }}>
            <PacketIcon n={3} color={PIECE_COLORS[2]} />
          </motion.g>
        </Net>
      </Stage>
    ),
  },
];

function ReassembleScene() {
  // pieces start jumbled (positions of the arrival order) and slide into their quadrant
  const w = 180;
  const h = 130;
  const quads = [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ];
  const jumble = [
    { x: 300, y: 40 },
    { x: 90, y: 60 },
    { x: 320, y: 190 },
    { x: 80, y: 180 },
  ];
  return (
    <g>
      {quads.map(([sx, sy], k) => (
        <motion.g key={k} initial={{ x: jumble[k].x, y: jumble[k].y, rotate: (k - 1.5) * 14 }} animate={{ x: 200, y: 116, rotate: 0 }} transition={{ delay: 0.3 + k * 0.3, duration: 0.7, type: "spring", stiffness: 120, damping: 15 }}>
          <defs>
            <clipPath id={`re-${k}`}>
              <rect x={sx < 0 ? -w / 2 : 0} y={sy < 0 ? -h / 2 : 0} width={w / 2} height={h / 2} />
            </clipPath>
          </defs>
          <g clipPath={`url(#re-${k})`}>
            <Photo w={w} h={h} clipId={`re-ph-${k}`} />
          </g>
          <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.8 }}>
            <circle cx={sx * (w / 4)} cy={sy * (h / 4)} r={13} fill={PIECE_COLORS[k]} stroke={INK} strokeWidth={2} />
            <text x={sx * (w / 4)} y={sy * (h / 4) + 5} textAnchor="middle" fontSize={14} fontWeight={900} fill="#fff">
              {k + 1}
            </text>
          </motion.g>
        </motion.g>
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Try: send a message across a network you can break                 */
/* ------------------------------------------------------------------ */

const N: Record<string, P> = {
  L: { x: 34, y: 120 },
  A: { x: 124, y: 48 },
  B: { x: 124, y: 192 },
  C: { x: 215, y: 120 },
  D: { x: 306, y: 48 },
  E: { x: 306, y: 192 },
  T: { x: 398, y: 120 },
};
const EDGES: [string, string][] = [
  ["L", "A"],
  ["L", "B"],
  ["A", "C"],
  ["B", "C"],
  ["A", "D"],
  ["B", "E"],
  ["C", "D"],
  ["C", "E"],
  ["D", "T"],
  ["E", "T"],
  ["A", "B"],
  ["D", "E"],
];
const ROUTERS = ["A", "B", "C", "D", "E"];
const WORDS = ["SEE", "YOU", "AT", "TEA!"];

const nbrs = (n: string) => EDGES.flatMap(([a, b]) => (a === n ? [b] : b === n ? [a] : []));

/** A random simple path L → T that avoids switched-off routers. */
function randomPath(off: Set<string>): string[] | null {
  const seen = new Set<string>(["L"]);
  const dfs = (node: string, path: string[]): string[] | null => {
    if (node === "T") return path;
    const next = nbrs(node)
      .filter((m) => !seen.has(m) && !off.has(m))
      .sort(() => Math.random() - 0.5)
      // prefer moving right a little, so routes look sensible
      .sort((a, b) => N[b].x - N[a].x + (Math.random() - 0.5) * 160);
    for (const m of next) {
      seen.add(m);
      const r = dfs(m, [...path, m]);
      if (r) return r;
    }
    return null;
  };
  return dfs("L", ["L"]);
}

interface Flight {
  key: string;
  n: number;
  path: string[];
  lose: boolean;
  dur: number;
  delay: number;
}

function InternetTry() {
  const [off, setOff] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [arrived, setArrived] = useState<number[]>([]);
  const [lost, setLost] = useState<{ n: number; at: string }[]>([]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [shake, setShake] = useState<number | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const inFlight = flights.length > 0;
  const started = attempt > 0;
  const complete = placed.length === 4;

  const launch = (nums: number[]) => {
    const a = attempt + 1;
    setAttempt(a);
    const fl: Flight[] = [];
    const nowLost: { n: number; at: string }[] = [];
    nums.forEach((n, i) => {
      const path = randomPath(off);
      if (!path) {
        nowLost.push({ n, at: "L" });
        return;
      }
      const lose = busy && Math.random() < 0.35;
      const cut = lose ? path.slice(0, 2 + Math.floor(Math.random() * (path.length - 2))) : path;
      fl.push({ key: `${a}-${n}`, n, path: cut, lose, dur: 0.5 * (cut.length - 1) + Math.random() * 0.9, delay: i * 0.3 });
    });
    if (nowLost.length) {
      setNote("No road is open from Mia to Grandma! Switch a router back on.");
      sfx("wrong");
    } else setNote(null);
    setLost((l) => [...l.filter((x) => !nums.includes(x.n)), ...nowLost]);
    setFlights(fl);
    sfx("pop");
  };

  const land = (f: Flight) => {
    setFlights((all) => all.filter((x) => x.key !== f.key));
    if (f.lose) {
      setLost((l) => [...l, { n: f.n, at: f.path[f.path.length - 1] }]);
      sfx("wrong");
    } else {
      setArrived((a) => (a.includes(f.n) || placed.includes(f.n) ? a : [...a, f.n]));
      sfx("coin");
    }
  };

  const send = () => {
    setArrived([]);
    setLost([]);
    setPlaced([]);
    launch([1, 2, 3, 4]);
  };

  const resend = () => launch(lost.map((l) => l.n));

  const toggleRouter = (r: string) => {
    if (inFlight) return;
    setOff((o) => {
      const n = new Set(o);
      if (n.has(r)) n.delete(r);
      else n.add(r);
      return n;
    });
    sfx("tap");
  };

  const pick = (n: number) => {
    const want = placed.length + 1;
    if (n !== want) {
      setShake(n);
      setNote(`That's packet ${n}. The label says it goes in place ${n} — which one comes next?`);
      sfx("wrong");
      setTimeout(() => setShake(null), 400);
      return;
    }
    const p = [...placed, n];
    setPlaced(p);
    setArrived((a) => a.filter((x) => x !== n));
    setNote(null);
    sfx("correct");
    if (p.length === 4) {
      sfx("fanfare");
      burst();
    }
  };

  const reset = () => {
    setOff(new Set());
    setBusy(false);
    setFlights([]);
    setArrived([]);
    setLost([]);
    setPlaced([]);
    setNote(null);
    setAttempt(0);
  };

  const missing = !inFlight && lost.length > 0;
  const waitingFor = [1, 2, 3, 4].filter((n) => !placed.includes(n) && !arrived.includes(n));

  return (
    <div className="select-none">
      <p className="mb-3 font-extrabold">Send “SEE YOU AT TEA!” to Grandma in 4 packets. Tap a router to break it — the packets will find another way.</p>

      <div className="overflow-hidden rounded-2xl border-2 border-line bg-surface-2">
        <svg viewBox="0 0 432 240" role="img" aria-label={`Network with routers ${ROUTERS.join(", ")}. ${off.size ? `Switched off: ${[...off].join(", ")}.` : "All routers working."}`} className="h-auto w-full" style={{ maxHeight: 300 }}>
          {EDGES.map(([a, b]) => {
            const dead = off.has(a) || off.has(b);
            return <line key={a + b} x1={N[a].x} y1={N[a].y} x2={N[b].x} y2={N[b].y} stroke={dead ? "#9CA3AF" : "rgb(var(--line))"} strokeDasharray={dead ? "5 6" : undefined} strokeWidth={6} strokeLinecap="round" />;
          })}
          {ROUTERS.map((r) => (
            <g key={r} transform={`translate(${N[r].x} ${N[r].y})`} onClick={() => toggleRouter(r)} style={{ cursor: inFlight ? "default" : "pointer" }} role="button" tabIndex={0} aria-label={`Router ${r}, ${off.has(r) ? "off" : "on"}. Tap to switch`} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleRouter(r)}>
              <circle r={30} fill="transparent" />
              <RouterIcon off={off.has(r)} />
              <text y={28} textAnchor="middle" fontSize={11} fontWeight={900} fill={STAGE_MUTED}>
                {r}
              </text>
            </g>
          ))}
          <g transform={`translate(${N.L.x + 4} ${N.L.y})`}>
            <g transform="scale(0.8)">
              <Laptop />
            </g>
            <text y={30} textAnchor="middle" fontSize={11} fontWeight={800} fill={STAGE_INK}>
              Mia
            </text>
          </g>
          <g transform={`translate(${N.T.x} ${N.T.y})`}>
            <g transform="scale(0.8)">
              <Tablet />
            </g>
            <text y={40} textAnchor="middle" fontSize={11} fontWeight={800} fill={STAGE_INK}>
              Grandma
            </text>
          </g>
          {lost.map((l) => (
            <motion.text key={`lost-${l.n}-${l.at}`} x={N[l.at].x + 16} y={N[l.at].y - 20} fontSize={16} initial={{ opacity: 1, y: 0 }} animate={{ opacity: 0, y: -16 }} transition={{ duration: 1.4 }}>
              💨
            </motion.text>
          ))}
          {flights.map((f) => (
            <motion.g
              key={f.key}
              initial={{ x: N.L.x, y: N.L.y, opacity: 0, scale: 1 }}
              animate={{ x: f.path.map((n) => N[n].x), y: f.path.map((n) => N[n].y), opacity: 1, scale: f.lose ? [1, ...f.path.slice(2).map(() => 1), 0.2] : 1 }}
              transition={{ duration: f.dur, delay: f.delay, ease: "easeInOut" }}
              onAnimationComplete={() => land(f)}
            >
              <PacketIcon n={f.n} color={PIECE_COLORS[f.n - 1]} />
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" className="btn-primary min-h-[48px]" onClick={send} disabled={inFlight}>
          <Send className="h-4 w-4" /> {started ? "Send again" : "Send message"}
        </button>
        {missing && (
          <button type="button" className="btn-gold min-h-[48px]" onClick={resend}>
            <Repeat className="h-4 w-4" /> Ask for packet{lost.length > 1 ? "s" : ""} {lost.map((l) => l.n).join(", ")} again
          </button>
        )}
        <label className="flex min-h-[48px] cursor-pointer items-center gap-2 rounded-2xl border-2 border-line px-3 text-sm font-extrabold">
          <input type="checkbox" className="h-5 w-5 accent-teal-600" checked={busy} onChange={(e) => setBusy(e.target.checked)} />
          Busy network (packets can get lost)
        </label>
        <button type="button" className="btn-ghost min-h-[48px]" onClick={reset} aria-label="Reset network">
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Grandma's inbox */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-line p-3">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-muted">Arrived (in the order they came)</p>
          <div className="flex min-h-[56px] flex-wrap gap-2">
            {arrived.length === 0 && <span className="text-sm font-semibold text-muted">{inFlight ? "Packets on the way…" : started ? "—" : "Nothing yet. Press Send!"}</span>}
            {arrived.map((n) => (
              <motion.button
                key={n}
                type="button"
                layout
                initial={{ scale: 0 }}
                animate={{ scale: 1, x: shake === n ? [0, -8, 8, -6, 0] : 0 }}
                onClick={() => pick(n)}
                className="flex min-h-[52px] items-center gap-2 rounded-xl border-2 border-[#1c2333]/70 bg-amber-50 px-3 font-mono font-black text-[#1c2333]"
                aria-label={`Packet ${n}: ${WORDS[n - 1]}. Tap to put it in the message`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full text-sm text-white" style={{ background: PIECE_COLORS[n - 1] }}>
                  {n}
                </span>
                {WORDS[n - 1]}
              </motion.button>
            ))}
          </div>
        </div>
        <div className={clsx("rounded-2xl border-2 p-3", complete ? "border-good/50 bg-good/10" : "border-line")}>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-muted">Grandma&apos;s screen — tap packets in number order</p>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={clsx("grid min-h-[52px] place-items-center rounded-xl border-2 border-dashed font-mono text-lg font-black", placed.includes(n) ? "border-transparent text-white" : "border-line text-muted")} style={placed.includes(n) ? { background: PIECE_COLORS[n - 1] } : undefined}>
                {placed.includes(n) ? WORDS[n - 1] : n}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className={clsx("mt-3 min-h-[3rem] rounded-2xl px-4 py-2 font-bold", complete ? "bg-good/10 text-good" : missing ? "bg-warn/15 text-ink" : "bg-surface-2 text-muted")} aria-live="polite">
        {complete
          ? "Grandma reads: SEE YOU AT TEA! The packets took different roads and came in a jumble, but the numbers put them back in order."
          : note ??
            (missing
              ? `Packet${lost.length > 1 ? "s" : ""} ${lost.map((l) => l.n).join(", ")} never arrived. Grandma's tablet can spot the gap from the numbers — ask for ${lost.length > 1 ? "them" : "it"} again!`
              : inFlight
                ? "Each router passes packets to a neighbour. Watch them take different roads."
                : started && waitingFor.length === 0 && arrived.length
                  ? "All here! Now put them in order: 1, 2, 3, 4."
                  : "Tip: switch off routers A and B and see what happens.")}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Envelope({ x, y, n, c }: { x: number; y: number; n: number; c: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <PacketIcon n={n} color={c} />
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Mia holds up a drawing of a sunny hill">
        <g transform="translate(55 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(140 66)">
          <Photo w={80} h={60} clipId="story-photo-1" />
        </g>
      </Art>
    ),
    speech: "I'll send Grandma my drawing!",
    caption: "Mia wants her drawing to reach Grandma, who lives far away.",
  },
  {
    art: (
      <Art label="The drawing is cut into four numbered envelopes">
        <PhotoPieces cx={70} cy={70} w={80} h={60} spread={8} id="story-cut" />
        <Envelope x={150} y={30} n={1} c={PIECE_COLORS[0]} />
        <Envelope x={150} y={60} n={2} c={PIECE_COLORS[1]} />
        <Envelope x={150} y={90} n={3} c={PIECE_COLORS[2]} />
        <Envelope x={150} y={120} n={4} c={PIECE_COLORS[3]} />
      </Art>
    ),
    speech: "Number every piece!",
    caption: "The computer cuts it into packets, each labelled “To: Grandma” with its number.",
  },
  {
    art: (
      <Art label="Envelopes travel between post towers on different roads">
        <line x1={20} y1={70} x2={100} y2={30} stroke="#94A3B8" strokeWidth={5} />
        <line x1={20} y1={70} x2={100} y2={110} stroke="#94A3B8" strokeWidth={5} />
        <line x1={100} y1={30} x2={180} y2={70} stroke="#94A3B8" strokeWidth={5} />
        <line x1={100} y1={110} x2={180} y2={70} stroke="#94A3B8" strokeWidth={5} />
        <g transform="translate(100 30)">
          <RouterIcon />
        </g>
        <g transform="translate(100 110)">
          <RouterIcon />
        </g>
        <Envelope x={60} y={50} n={1} c={PIECE_COLORS[0]} />
        <Envelope x={140} y={90} n={2} c={PIECE_COLORS[1]} />
      </Art>
    ),
    speech: "This road's busy — go that way!",
    caption: "Routers pass the packets along. They might take different roads.",
  },
  {
    art: (
      <Art label="Grandma smiles at the whole drawing on her tablet">
        <g transform="translate(55 132)">
          <Kid h={90} shirt="#A855F7" hair="#E5E7EB" />
        </g>
        <g transform="translate(140 72)">
          <Tablet>
            <g transform="translate(0 -3)">
              <Photo w={36} h={44} clipId="story-photo-4" />
            </g>
          </Tablet>
        </g>
      </Art>
    ),
    speech: "What a lovely picture!",
    caption: "Grandma's tablet puts the packets in number order, and the drawing appears.",
  },
];

const like: Explainer["like"] = {
  headline: "Sending a message online is like posting a jigsaw in numbered envelopes.",
  everyday: {
    label: "Jigsaw pieces in numbered envelopes",
    art: (
      <Art label="Four envelopes numbered 1 to 4 heading to a postbox" vb="0 0 200 130">
        {[1, 2, 3, 4].map((n, i) => (
          <Envelope key={n} x={36 + i * 32} y={50 + (i % 2) * 26} n={n} c={PIECE_COLORS[i]} />
        ))}
        <rect x={160} y={44} width={30} height={60} rx={12} fill="#DC2626" stroke={INK} strokeWidth={2.5} />
        <rect x={166} y={58} width={18} height={4} rx={2} fill={INK} />
      </Art>
    ),
  },
  concept: {
    label: "Data packets through routers",
    art: (
      <Art label="Packets hopping between routers" vb="0 0 200 130">
        <line x1={40} y1={70} x2={100} y2={40} stroke="#94A3B8" strokeWidth={5} />
        <line x1={100} y1={40} x2={160} y2={80} stroke="#94A3B8" strokeWidth={5} />
        <line x1={40} y1={70} x2={110} y2={105} stroke="#94A3B8" strokeWidth={5} />
        <line x1={110} y1={105} x2={160} y2={80} stroke="#94A3B8" strokeWidth={5} />
        {[
          [40, 70],
          [100, 40],
          [110, 105],
          [160, 80],
        ].map(([x, y], k) => (
          <g key={k} transform={`translate(${x} ${y}) scale(0.8)`}>
            <RouterIcon />
          </g>
        ))}
        <motion.g animate={{ x: [40, 100, 160], y: [70, 40, 80] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <PacketIcon n={1} color={PIECE_COLORS[0]} />
        </motion.g>
      </Art>
    ),
  },
  pairs: [
    ["Cutting the picture into pieces", "Splitting data into packets"],
    ["Address + “piece 2 of 4” on the envelope", "The packet header: IP address and sequence number"],
    ["Sorting offices passing mail along", "Routers forwarding packets"],
    ["Grandma rebuilding the jigsaw", "Your computer reassembling the data (TCP)"],
  ],
  limits:
    "Real packets travel in thousandths of a second, and there can be thousands of them for one photo. Lost packets are spotted automatically using acknowledgements and timers — no one has to notice a missing piece by eye.",
};

export const internetExplainer: Explainer = {
  id: "coding-internet-packets",
  title: "How a message travels the internet",
  tagline: "Chop it into packets, hop through routers, rebuild it at the other end.",
  area: "Computer science",
  ages: "8–18",
  lessons: ["javascript/async/async-await-fetch", "html/getting-started/what-is-html"],
  color: COLOR,
  icon: "🌐",
  watch,
  try: InternetTry,
  story,
  like,
};
