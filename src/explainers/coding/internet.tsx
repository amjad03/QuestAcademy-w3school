"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ListOrdered, Scissors, Send } from "lucide-react";
import type { Explainer, Mission, MissionApi } from "../types";
import { Art, INK, Kid, Laptop, MissionButton, PacketIcon, Photo, RouterIcon, Stage, STAGE_INK, STAGE_MUTED, Tablet } from "./_art";

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

function ReassembleScene({ still }: { still?: boolean } = {}) {
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
        <motion.g key={k} initial={{ x: jumble[k].x, y: jumble[k].y, rotate: (k - 1.5) * 14 }} animate={still ? { x: jumble[k].x, y: jumble[k].y, rotate: (k - 1.5) * 14 } : { x: 200, y: 116, rotate: 0 }} transition={{ delay: 0.3 + k * 0.3, duration: 0.7, type: "spring", stiffness: 120, damping: 15 }}>
          <defs>
            <clipPath id={`re-${k}`}>
              <rect x={sx < 0 ? -w / 2 : 0} y={sy < 0 ? -h / 2 : 0} width={w / 2} height={h / 2} />
            </clipPath>
          </defs>
          <g clipPath={`url(#re-${k})`}>
            <Photo w={w} h={h} clipId={`re-ph-${k}`} />
          </g>
          <motion.g initial={{ opacity: 1 }} animate={{ opacity: still ? 1 : 0 }} transition={{ delay: 1.8 }}>
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
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

/** Cut Mia's photo into 4 numbered packets. */
function StepCut({ done, complete }: MissionApi) {
  const [cut, setCut] = useState(false);
  return (
    <div>
      <Stage label={cut ? "The photo is cut into four numbered packets" : "Mia's whole photo, ready to send"}>
        <PhotoPieces cx={200} cy={110} w={180} h={130} spread={cut ? 22 : 0} id="m-cut" />
        {cut && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            <rect x={110} y={204} width={180} height={28} rx={8} fill="#FFFBEB" stroke={INK} strokeWidth={2} />
            <text x={200} y={223} textAnchor="middle" fontSize={13} fontWeight={800} fill={INK}>
              To: Grandma · 2 of 4
            </text>
          </motion.g>
        )}
      </Stage>
      <MissionButton
        color={COLOR}
        disabled={complete}
        onClick={() => {
          setCut(true);
          done();
        }}
      >
        <Scissors className="h-5 w-5" /> Cut into packets
      </MissionButton>
    </div>
  );
}

/** Send the packets while router R1 has a traffic jam. */
function StepSend({ done, complete }: MissionApi) {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <Stage label={sent ? "Packets go round the jammed router and arrive in the order 2, 4, 1, 3" : "Mia's laptop, four routers and Grandma's tablet. Router R1 has a traffic jam"}>
        <Net busy="R1">
          {sent && (
            <>
              <Hop path={["L", "R2", "R4", "T"]} delay={0} n={2} dur={1.8} loop={false} />
              <Hop path={["L", "R2", "R4", "T"]} delay={0.5} n={4} dur={1.8} loop={false} />
              <Hop path={["L", "R1", "R1", "R3", "T"]} delay={0.2} n={1} dur={3.2} loop={false} />
              <Hop path={["L", "R2", "R1", "R1", "R3", "T"]} delay={0.4} n={3} dur={4} loop={false} />
            </>
          )}
        </Net>
        {sent && (
          <motion.text x={200} y={234} textAnchor="middle" fontSize={13} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.2 }}>
            arrived: 2, 4, 1, 3
          </motion.text>
        )}
      </Stage>
      <MissionButton
        color={COLOR}
        disabled={complete}
        onClick={() => {
          setSent(true);
          done();
        }}
      >
        <Send className="h-5 w-5" /> Send
      </MissionButton>
    </div>
  );
}

/** Grandma's tablet puts the jumbled packets back in number order. */
function StepRebuild({ done, complete }: MissionApi) {
  const [go, setGo] = useState(false);
  return (
    <div>
      <Stage label={go ? "The pieces slide together in number order and make the whole photo" : "Four jumbled pieces of the photo, numbered 1 to 4"}>
        <g transform="translate(200 116)">
          <rect x={-104} y={-82} width={208} height={168} rx={16} fill="#111827" stroke={INK} strokeWidth={2.5} />
        </g>
        <ReassembleScene key={go ? "go" : "still"} still={!go} />
      </Stage>
      <MissionButton
        color={COLOR}
        disabled={complete}
        onClick={() => {
          setGo(true);
          done();
        }}
      >
        <ListOrdered className="h-5 w-5" /> Put them in order
      </MissionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Send a photo from Mia to Grandma the way the internet really does it.",
  steps: [
    {
      task: "Cut the photo into packets.",
      settle: 3000,
      predict: { question: "How does a photo travel across the internet?", options: ["In one big piece, all at once", "Cut into small numbered pieces"], answer: 1, trap: 0 },
      scene: (api) => <StepCut {...api} />,
      hint: "Tap the green button under the photo.",
      explain: "Data is cut into small pieces called **packets**. Each packet has a label saying who it is for and its number, like *2 of 4*.",
    },
    {
      task: "Send the packets to Grandma.",
      settle: 3000,
      predict: { question: "Router R1 has a traffic jam. What will the packets do?", options: ["Wait up in the cloud until it clears", "Take another road around it"], answer: 1, trap: 0 },
      scene: (api) => <StepSend {...api} />,
      hint: "Tap Send and watch the packets hop.",
      explain: "**Routers** are computers that pass each packet to a neighbour closer to Grandma. They are joined by real cables, not a cloud in the sky, and there are many roads, so packets go round a jam. Some roads are longer, so they arrive **jumbled**.",
    },
    {
      task: "Rebuild the photo on Grandma's tablet.",
      settle: 3000,
      predict: { question: "The packets came as 2, 4, 1, 3. Can the tablet fix the order?", options: ["No — the photo stays scrambled", "Yes — it sorts them by their numbers"], answer: 1, trap: 0 },
      scene: (api) => <StepRebuild {...api} />,
      hint: "Tap the button under the pieces.",
      explain: "The number on each packet tells the tablet where it goes, so it puts them back as 1, 2, 3, 4 and the **whole photo** appears. If one is missing, the tablet asks for it again.",
    },
  ],
  takeaway: "The internet sends data as small numbered packets that hop through routers by different roads and are put back in order at the end.",
};

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
  ages: "11–15",
  lessons: ["javascript/async/async-await-fetch", "html/getting-started/what-is-html"],
  color: COLOR,
  icon: "🌐",
  watch,
  misconception: { myth: "The internet is a cloud in the sky, and a message travels through it in one piece.", truth: "The internet is millions of computers and routers joined by real cables (even under the sea). Messages are cut into small packets that can take different roads." },
  mission,
  story,
  like,
};
