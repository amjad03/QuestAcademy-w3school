"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Flag, Search } from "lucide-react";
import type { Explainer, Mission, MissionApi } from "../types";
import { Art, INK, Kid, MissionButton, Robot, Stage, STAGE_INK, STAGE_MUTED, useTicker } from "./_art";

const COLOR = "#DC2626";
const LINEAR = "#F97316";
const HALVE = "#2563EB";

/* ------------------------------------------------------------------ */
/* Drawing pieces                                                      */
/* ------------------------------------------------------------------ */

/** An open phone book centred on (0,0), about 220 × 130. */
function Book({ left = "A – L", right = "M – Z", dimLeft, dimRight, lines = 7 }: { left?: string; right?: string; dimLeft?: boolean; dimRight?: boolean; lines?: number }) {
  const page = (x: number, label: string, dim?: boolean) => (
    <g opacity={dim ? 0.3 : 1}>
      <rect x={x} y={-60} width={104} height={124} rx={4} fill="#FFFBEB" stroke={INK} strokeWidth={2.5} />
      <text x={x + 52} y={-40} textAnchor="middle" fontSize={14} fontWeight={900} fill={INK}>
        {label}
      </text>
      {Array.from({ length: lines }, (_, k) => (
        <g key={k}>
          <rect x={x + 12} y={-28 + k * 12} width={46} height={5} rx={2} fill="#94A3B8" />
          <rect x={x + 66} y={-28 + k * 12} width={26} height={5} rx={2} fill="#CBD5E1" />
        </g>
      ))}
      {dim && <path d={`M${x + 10} -50 L${x + 94} 54 M${x + 94} -50 L${x + 10} 54`} stroke={COLOR} strokeWidth={5} strokeLinecap="round" />}
    </g>
  );
  return (
    <g>
      <rect x={-112} y={-64} width={224} height={132} rx={8} fill="#B91C1C" stroke={INK} strokeWidth={2.5} />
      {page(-106, left, dimLeft)}
      {page(2, right, dimRight)}
    </g>
  );
}

const HALVES = [1000, 500, 250, 125, 63, 32, 16, 8, 4, 2, 1];

const watch: Explainer["watch"] = [
  {
    title: "Find Mia in the phone book",
    say: "This phone book has 1,000 names, in A to Z order. We want to find Mia. What is the fastest way?",
    scene: (
      <Stage label="A closed red phone book with 1,000 names in A to Z order, and Bolt next to it">
        <motion.g initial={{ rotate: -6, y: 10, opacity: 0 }} animate={{ rotate: 0, y: 0, opacity: 1 }} transition={{ type: "spring" }}>
          <rect x={140} y={40} width={130} height={170} rx={10} fill="#B91C1C" stroke={INK} strokeWidth={3} />
          <rect x={150} y={48} width={8} height={154} fill="#7F1D1D" />
          <text x={210} y={100} textAnchor="middle" fontSize={20} fontWeight={900} fill="#FEF3C7">
            PHONE
          </text>
          <text x={210} y={124} textAnchor="middle" fontSize={20} fontWeight={900} fill="#FEF3C7">
            BOOK
          </text>
          <text x={210} y={160} textAnchor="middle" fontSize={12} fontWeight={800} fill="#FECACA">
            1,000 names · A–Z
          </text>
        </motion.g>
        <g transform="translate(330 170)">
          <Robot mood="wow" />
        </g>
        <text x={330} y={100} textAnchor="middle" fontSize={16} fontWeight={900} fill={STAGE_INK}>
          Mia?
        </text>
      </Stage>
    ),
  },
  {
    title: "Way 1: page by page",
    say: "Bolt could check every name from the start: Aaron, Abby, Adam… If Mia is near the end, that could take 1,000 checks!",
    scene: (
      <Stage label="Pages flip one at a time while a counter climbs towards 1,000 checks">
        <g transform="translate(170 120)">
          <Book left="A" right="A" />
          {Array.from({ length: 6 }, (_, k) => (
            <motion.rect key={k} x={2} y={-60} width={104} height={124} rx={4} fill="#FEF3C7" stroke={INK} strokeWidth={2} initial={{ scaleX: 1, opacity: 0 }} animate={{ scaleX: [1, 0, -1], opacity: [1, 1, 0] }} transition={{ duration: 0.7, delay: k * 0.6, repeat: Infinity, repeatDelay: 3 }} style={{ originX: "0px" }} />
          ))}
        </g>
        <text x={340} y={90} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED}>
          checks
        </text>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <motion.text key={n} x={340} y={124} textAnchor="middle" fontSize={30} fontWeight={900} fill={LINEAR} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 0.6, delay: (n - 1) * 0.6, repeat: Infinity, repeatDelay: 3, times: [0, 0.1, 0.9, 1] }}>
            {n}
          </motion.text>
        ))}
        <text x={340} y={160} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_INK}>
          … up to 1,000
        </text>
      </Stage>
    ),
  },
  {
    title: "Way 2: open it in the middle",
    say: "Instead, open the book in the middle. It shows names starting with L. Mia starts with M, which comes after L, so the whole first half can be thrown away!",
    scene: (
      <Stage label="The book opens in the middle. The left half, A to L, is crossed out because Mia comes after L">
        <g transform="translate(200 116)">
          <Book />
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <path d="M-96 -50 L-12 54 M-12 -50 L-96 54" stroke={COLOR} strokeWidth={5} strokeLinecap="round" />
          </motion.g>
        </g>
        <motion.text x={200} y={226} textAnchor="middle" fontSize={14} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          1 check → only 500 names left
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Halve, again and again",
    say: "Open the middle of what is left, and throw half away again. 1,000, then 500, then 250… After only about 10 checks, one name is left: Mia!",
    scene: (
      <Stage label="A bar that halves in length each step: 1000, 500, 250, 125, 63, 32, 16, 8, 4, 2, 1 — about ten checks">
        {HALVES.map((v, k) => (
          <motion.g key={k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: k * 0.25 }}>
            <rect x={70} y={18 + k * 19} width={Math.max(3, (v / 1000) * 290)} height={14} rx={4} fill={k === HALVES.length - 1 ? "#16A34A" : HALVE} />
            <text x={62} y={30 + k * 19} textAnchor="end" fontSize={11} fontWeight={900} fill={STAGE_INK}>
              {v}
            </text>
          </motion.g>
        ))}
        <motion.text x={250} y={210} textAnchor="middle" fontSize={15} fontWeight={900} fill="#16A34A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}>
          Found Mia in 10 checks!
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Make the book twice as big",
    say: "With 2,000 names, page by page could take 2,000 checks. Halving takes just one more: 11. With a million names it is only about 20!",
    scene: (
      <Stage label="Table comparing checks: 1,000 names needs up to 1,000 page by page or 10 by halving; 2,000 needs 2,000 or 11; one million needs a million or 20">
        <g fontWeight={900} textAnchor="middle">
          <text x={90} y={40} fontSize={13} fill={STAGE_MUTED}>
            names
          </text>
          <text x={220} y={40} fontSize={13} fill={LINEAR}>
            page by page
          </text>
          <text x={340} y={40} fontSize={13} fill={HALVE}>
            halving
          </text>
          {[
            ["1,000", "1,000", "10"],
            ["2,000", "2,000", "11"],
            ["1,000,000", "1,000,000", "20"],
          ].map((row, k) => (
            <motion.g key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + k * 0.5 }}>
              <rect x={20} y={56 + k * 54} width={360} height={44} rx={10} fill="rgb(var(--surface))" stroke="rgb(var(--line))" strokeWidth={2} />
              <text x={90} y={84 + k * 54} fontSize={16} fill={STAGE_INK}>
                {row[0]}
              </text>
              <text x={220} y={84 + k * 54} fontSize={16} fill={LINEAR}>
                {row[1]}
              </text>
              <text x={340} y={84 + k * 54} fontSize={20} fill={HALVE}>
                {row[2]}
              </text>
            </motion.g>
          ))}
        </g>
      </Stage>
    ),
  },
  {
    title: "Big-O: how the work grows",
    say: "Computer scientists describe this with Big-O. Page by page is O(n): twice the names, twice the work. Halving is O(log n): twice the names, just one more step.",
    scene: (
      <Stage label="Graph of steps against number of names. O(n) is a straight rising line; O(log n) is a curve that stays nearly flat">
        <g stroke={STAGE_MUTED} strokeWidth={2}>
          <line x1={50} y1={210} x2={380} y2={210} />
          <line x1={50} y1={210} x2={50} y2={20} />
        </g>
        <text x={215} y={232} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          number of names (n) →
        </text>
        <text x={22} y={115} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED} transform="rotate(-90 22 115)">
          checks →
        </text>
        <motion.path d="M50 210 L370 30" stroke={LINEAR} strokeWidth={5} fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }} />
        <motion.path
          d={`M50 210 ${Array.from({ length: 32 }, (_, i) => {
            const t = (i + 1) / 32;
            return `L${50 + t * 320} ${210 - Math.min(t * 180, Math.log2(1 + t * 1023) * 4)}`;
          }).join(" ")}`}
          stroke={HALVE}
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        />
        <text x={190} y={80} fontSize={15} fontWeight={900} fill={LINEAR}>
          O(n)
        </text>
        <text x={300} y={158} fontSize={15} fontWeight={900} fill={HALVE}>
          O(log n)
        </text>
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

/** A 16-name phone book in A–Z order; Mia is on page 13. */
const BOOK = ["Aaron", "Ben", "Chloe", "Dan", "Eli", "Finn", "Grace", "Hana", "Iris", "Jack", "Kai", "Leo", "Mia", "Noah", "Omar", "Priya"];
const TARGET = BOOK.indexOf("Mia");

/** Pages opened by each method, in order, with the range still possible after each check. */
const LINEAR_RUN = Array.from({ length: TARGET + 1 }, (_, i) => ({ open: i, lo: i + 1, hi: BOOK.length - 1 }));
const HALVING_RUN = (() => {
  const out: { open: number; lo: number; hi: number }[] = [];
  let lo = 0;
  let hi = BOOK.length - 1;
  for (;;) {
    const mid = Math.floor((lo + hi) / 2);
    if (mid === TARGET) {
      out.push({ open: mid, lo, hi });
      return out;
    }
    if (mid < TARGET) lo = mid + 1;
    else hi = mid - 1;
    out.push({ open: mid, lo, hi });
  }
})();

/** The 16 pages as a 4 × 4 grid; Run opens pages one check at a time. */
function StepSearch({ done, complete, run, color, button }: MissionApi & { run: { open: number; lo: number; hi: number }[]; color: string; button: string }) {
  const [k, setK] = useState(-1); // checks done - 1
  const running = k >= 0 && k < run.length - 1;
  useTicker(running, run.length > 6 ? 260 : 800, () => setK((x) => x + 1));
  const opened = run.slice(0, k + 1).map((r) => r.open);
  const range = k >= 0 ? run[k] : { lo: 0, hi: BOOK.length - 1 };
  const found = k === run.length - 1;
  return (
    <div>
      <Stage label={found ? `Found Mia after ${k + 1} checks` : `A phone book of 16 names in A to Z order. Find Mia.`}>
        <text x={14} y={23} fontSize={16} fontWeight={900} fill={STAGE_INK}>
          Find Mia
        </text>
        <text x={386} y={23} textAnchor="end" fontSize={16} fontWeight={900} fill={color}>
          checks: {k + 1}
        </text>
        {BOOK.map((name, i) => {
          const x = 14 + (i % 4) * 94;
          const y = 34 + Math.floor(i / 4) * 51;
          const isOpen = opened.includes(i);
          const hit = isOpen && i === TARGET;
          const out = !isOpen && (i < range.lo || i > range.hi);
          return (
            <g key={name} opacity={out ? 0.3 : 1}>
              <rect x={x} y={y} width={86} height={44} rx={8} fill={hit ? "#16A34A" : isOpen ? "#FFFBEB" : "#B91C1C"} stroke={INK} strokeWidth={2} />
              <text x={x + 43} y={y + 28} textAnchor="middle" fontSize={15} fontWeight={900} fill={hit ? "#fff" : isOpen ? INK : "#FECACA"}>
                {isOpen ? name : out ? "✕" : i + 1}
              </text>
            </g>
          );
        })}
      </Stage>
      <MissionButton color={color} disabled={complete || k >= 0} onClick={() => {
          setK(0);
          done();
        }}>
        <Search className="h-5 w-5" /> {button}
      </MissionButton>
    </div>
  );
}

/** Double the book: bars show the checks for each method before and after. */
function StepDouble({ done, complete }: MissionApi) {
  const [big, setBig] = useState(false);
  const n = big ? 32 : 16;
  const rows = [
    { name: "page by page", v: n, was: 16, color: LINEAR },
    { name: "halving", v: Math.log2(n), was: 4, color: HALVE },
  ];
  return (
    <div>
      <Stage label={`With ${n} names: page by page up to ${n} checks, halving about ${Math.log2(n)} checks`}>
        <text x={200} y={40} textAnchor="middle" fontSize={20} fontWeight={900} fill={STAGE_INK}>
          {n} names
        </text>
        {rows.map((r, k) => (
          <g key={r.name}>
            <text x={20} y={86 + k * 80} fontSize={16} fontWeight={900} fill={r.color}>
              {r.name}
            </text>
            <motion.rect x={20} y={96 + k * 80} height={30} rx={8} fill={r.color} initial={false} animate={{ width: Math.max(10, (r.v / 32) * 300) }} transition={{ duration: 0.8 }} />
            <text x={Math.max(10, (r.v / 32) * 300) + 30} y={118 + k * 80} fontSize={18} fontWeight={900} fill={STAGE_INK}>
              {r.v}
              {big && (
                <tspan fontSize={13} fill={STAGE_MUTED}>
                  {" "}
                  (was {r.was})
                </tspan>
              )}
            </text>
          </g>
        ))}
      </Stage>
      <MissionButton
        color={COLOR}
        disabled={complete}
        onClick={() => {
          setBig(true);
          done();
        }}
      >
        <Copy className="h-5 w-5" /> Double the names
      </MissionButton>
    </div>
  );
}

/** A million names: the slow method on a 10× faster computer against halving on a normal one. */
function StepRace({ done, complete }: MissionApi) {
  const [go, setGo] = useState(false);
  return (
    <div>
      <Stage label={go ? "Halving finishes after 20 steps of time. Page by page on the fast computer still needs 100,000" : "A race to search one million names"}>
        <text x={200} y={34} textAnchor="middle" fontSize={16} fontWeight={900} fill={STAGE_INK}>
          1,000,000 names
        </text>
        <text x={20} y={78} fontSize={15} fontWeight={900} fill={LINEAR}>
          page by page · 10× faster computer
        </text>
        <rect x={20} y={88} width={360} height={30} rx={8} fill="rgb(var(--line))" />
        <motion.rect x={20} y={88} height={30} rx={8} fill={LINEAR} initial={{ width: 0 }} animate={{ width: go ? 30 : 0 }} transition={{ duration: 2.5, ease: "linear" }} />
        <text x={20} y={142} fontSize={14} fontWeight={800} fill={STAGE_MUTED}>
          {go ? "needs 100,000 steps… still going" : "time needed: ?"}
        </text>
        <text x={20} y={176} fontSize={15} fontWeight={900} fill={HALVE}>
          halving · normal computer
        </text>
        <rect x={20} y={186} width={360} height={30} rx={8} fill="rgb(var(--line))" />
        <motion.rect x={20} y={186} height={30} rx={8} fill={HALVE} initial={{ width: 0 }} animate={{ width: go ? 360 : 0 }} transition={{ duration: 0.4 }} />
        {go && (
          <motion.text x={200} y={207} textAnchor="middle" fontSize={15} fontWeight={900} fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            done in 20 steps ✓
          </motion.text>
        )}
      </Stage>
      <MissionButton
        color={COLOR}
        disabled={complete}
        onClick={() => {
          setGo(true);
          done();
        }}
      >
        <Flag className="h-5 w-5" /> Start the race
      </MissionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Find a name two ways, then see which way copes with a huge book.",
  steps: [
    {
      task: "Search for Mia page by page.",
      settle: 3000,
      scene: (api) => <StepSearch {...api} run={LINEAR_RUN} color={LINEAR} button="Search page by page" />,
      hint: "Tap the orange button and watch the counter.",
      explain: "Checking every item in turn is called **linear search**. Mia is on page 13, so it took **13 checks**. In the worst case it checks all 16.",
    },
    {
      task: "Now search by opening the middle.",
      settle: 3000,
      predict: { question: "Open the middle, throw away the half Mia can't be in, repeat. How many checks?", options: ["About 4", "About 8", "16, same as before"], answer: 0, trap: 2 },
      scene: (api) => <StepSearch {...api} run={HALVING_RUN} color={HALVE} button="Search by halving" />,
      hint: "Tap the blue button. Crossed-out pages are ruled out.",
      explain: "This is **binary search**. It only works because the names are **sorted** A–Z. Each check throws away half: 16 → 8 → 4 → 2 → 1, so it found Mia in **4 checks**.",
    },
    {
      task: "Double the book to 32 names.",
      settle: 3000,
      predict: { question: "Twice as many names. What happens to the halving checks?", options: ["They double, to about 8", "Just one more, about 5"], answer: 1, trap: 0 },
      scene: (api) => <StepDouble {...api} />,
      hint: "Tap Double the names and compare the two bars.",
      explain: "**Big-O** describes how the work grows as the input grows. Page by page is **O(n)**: twice the names, twice the checks. Halving is **O(log n)**: twice the names, just **one** more check.",
    },
    {
      task: "Race them on a million names.",
      settle: 3000,
      predict: { question: "Page by page gets a computer 10× faster. Halving stays on a normal one. Who wins?", options: ["Page by page — a faster computer fixes a slow method", "Halving, by a huge amount"], answer: 1, trap: 0 },
      scene: (api) => <StepRace {...api} />,
      hint: "Tap Start the race.",
      explain: "A 10× faster computer only divides the time by 10: 1,000,000 checks become 100,000. Halving needs about **20**. A better **algorithm** (step-by-step method) beats faster hardware as the input grows.",
    },
  ],
  takeaway: "Big-O says how an algorithm's work grows with the input: O(log n) halving barely grows, O(n) grows in step, and no faster computer makes up for the gap.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function MiniBook({ x, y, s = 1, open }: { x: number; y: number; s?: number; open?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {open ? (
        <>
          <rect x={-40} y={-26} width={80} height={52} rx={4} fill="#B91C1C" stroke={INK} strokeWidth={2} />
          <rect x={-37} y={-23} width={36} height={46} fill="#FFFBEB" stroke={INK} strokeWidth={1.5} />
          <rect x={1} y={-23} width={36} height={46} fill="#FFFBEB" stroke={INK} strokeWidth={1.5} />
          <text x={-19} y={4} textAnchor="middle" fontSize={12} fontWeight={900} fill={INK}>
            L
          </text>
          <text x={19} y={4} textAnchor="middle" fontSize={12} fontWeight={900} fill={INK}>
            M
          </text>
        </>
      ) : (
        <rect x={-22} y={-30} width={44} height={60} rx={4} fill="#B91C1C" stroke={INK} strokeWidth={2} />
      )}
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Mia and Bolt with a big phone book">
        <g transform="translate(50 132)">
          <Kid h={88} bow />
        </g>
        <MiniBook x={110} y={96} />
        <g transform="translate(165 108)">
          <Robot mood="happy" />
        </g>
      </Art>
    ),
    speech: "We need Zack's number!",
    caption: "Mia and Bolt have a phone book with 1,000 names in A–Z order.",
  },
  {
    art: (
      <Art label="Bolt checks page after page and looks tired">
        <g transform="translate(60 108)">
          <Robot mood="tired" />
        </g>
        <MiniBook x={140} y={80} s={1.1} open />
        <text x={140} y={128} textAnchor="middle" fontSize={11} fontWeight={900} fill={INK}>
          page 412…
        </text>
      </Art>
    ),
    speech: "Aaron… Abby… Adam… still going…",
    caption: "Bolt checks every name, one by one. It takes ages.",
  },
  {
    art: (
      <Art label="Mia opens the book in the middle and points right">
        <g transform="translate(40 132)">
          <Kid h={88} bow mood="wow" />
        </g>
        <MiniBook x={130} y={76} s={1.1} open />
        <path d="M110 112 h50 l-8 -6 m8 6 l-8 6" stroke={HALVE} strokeWidth={3} fill="none" strokeLinecap="round" />
      </Art>
    ),
    speech: "M! Zack comes after M!",
    caption: "Mia opens the middle. Z comes after M, so she throws away the whole first half.",
  },
  {
    art: (
      <Art label="Mia finds Zack quickly while Bolt is still searching">
        <g transform="translate(55 132)">
          <Kid h={88} bow />
        </g>
        <text x={58} y={30} textAnchor="middle" fontSize={20}>
          ⭐
        </text>
        <g transform="translate(150 108)">
          <Robot mood="sad" />
        </g>
        <text x={150} y={40} textAnchor="middle" fontSize={10} fontWeight={800} fill={INK}>
          page 413…
        </text>
      </Art>
    ),
    speech: "Found it in 10 tries!",
    caption: "Halving again and again, Mia finds Zack in about 10 checks.",
  },
];

const like: Explainer["like"] = {
  headline: "Halving is like the “higher or lower?” guessing game.",
  everyday: {
    label: "“I'm thinking of a number from 1 to 100”",
    art: (
      <Art label="Two friends playing higher or lower: guess 50, answer higher" vb="0 0 200 130">
        <g transform="translate(50 124)">
          <Kid h={84} bow />
        </g>
        <g transform="translate(150 124)">
          <Kid h={90} shirt="#22C55E" hair="#111827" />
        </g>
        <rect x={58} y={8} width={46} height={24} rx={10} fill="#fff" stroke={INK} strokeWidth={2} />
        <text x={81} y={25} textAnchor="middle" fontSize={13} fontWeight={900} fill={INK}>
          50?
        </text>
        <rect x={104} y={36} width={66} height={24} rx={10} fill="#fff" stroke={INK} strokeWidth={2} />
        <text x={137} y={53} textAnchor="middle" fontSize={12} fontWeight={900} fill={INK}>
          Higher!
        </text>
      </Art>
    ),
  },
  concept: {
    label: "Binary search on a sorted list",
    art: (
      <Art label="A sorted row of boxes where the left half is crossed out after checking the middle" vb="0 0 200 130">
        {Array.from({ length: 10 }, (_, i) => (
          <g key={i}>
            <rect x={12 + i * 18} y={50} width={16} height={26} rx={3} fill={i < 5 ? "#E5E7EB" : i === 5 ? "#FDE68A" : "#BFDBFE"} stroke={INK} strokeWidth={1.5} />
            {i < 5 && <path d={`M${14 + i * 18} 52 l12 22`} stroke={COLOR} strokeWidth={2} />}
          </g>
        ))}
        <text x={100} y={100} textAnchor="middle" fontSize={12} fontWeight={900} fill={INK}>
          check the middle, drop half
        </text>
      </Art>
    ),
  },
  pairs: [
    ["Guess 50 first", "Look at the middle item"],
    ["“Higher!”", "Throw away the lower half"],
    ["Each guess halves what's left", "About log₂(n) steps — O(log n)"],
    ["Guessing 1, 2, 3, 4…", "Linear search — O(n)"],
  ],
  limits:
    "Halving only works when the list is sorted — a jumbled list must be checked item by item (or sorted first). Big-O also ignores small details like how long each check takes: it only says how the work grows as the list grows.",
};

export const bigOExplainer: Explainer = {
  id: "coding-big-o-search",
  title: "Algorithms & Big-O: search smarter",
  tagline: "Find a name page by page, or by halving — and see why one is so much faster.",
  area: "Computer science",
  ages: "14–16",
  lessons: ["dsa/complexity/big-o-notation", "dsa/sorting-searching/binary-search", "dsa/complexity/analysing-code"],
  color: COLOR,
  icon: "🔎",
  watch,
  misconception: { myth: "A slow algorithm can always be fixed by buying a faster computer.", truth: "A faster computer only speeds things up by a fixed amount. A better algorithm changes how the work grows, which matters far more for big inputs." },
  mission,
  story,
  like,
};
