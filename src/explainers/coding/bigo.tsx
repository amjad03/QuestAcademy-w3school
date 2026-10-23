"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Divide, RotateCcw, Shuffle } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { Art, INK, Kid, Robot, Stage, STAGE_INK, STAGE_MUTED } from "./_art";

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
/* Try: find the name by opening pages                                 */
/* ------------------------------------------------------------------ */

const NAMES = [
  "Aaron", "Abby", "Adam", "Aisha", "Alex", "Amara", "Amir", "Ana", "Ben", "Bella", "Caleb", "Chen", "Chloe", "Dan", "Dara", "Eli",
  "Ella", "Emil", "Eva", "Faisal", "Finn", "Gita", "Grace", "Hana", "Harry", "Ian", "Iris", "Jack", "Jade", "Jamal", "Kai", "Kira",
  "Leo", "Lila", "Lucas", "Maya", "Mia", "Milo", "Nadia", "Noah", "Nora", "Omar", "Olive", "Priya", "Quinn", "Rafael", "Rosa", "Ruby",
  "Sam", "Sara", "Theo", "Tia", "Uma", "Victor", "Vera", "Wes", "Willow", "Xander", "Yara", "Yusuf", "Zack", "Zara", "Zoe", "Zuri",
].sort((a, b) => a.localeCompare(b));

const SIZES = [16, 32, 64] as const;

function pickBook(n: number) {
  const idx = new Set<number>();
  while (idx.size < n) idx.add(Math.floor(Math.random() * NAMES.length));
  const names = [...idx].sort((a, b) => a - b).map((i) => NAMES[i]);
  return { names, target: names[Math.floor(Math.random() * n)] };
}

function PhoneBookTry() {
  const [size, setSize] = useState<number>(32);
  const [book, setBook] = useState(() => {
    const names = NAMES.filter((_, i) => i % 2 === 0);
    return { names, target: names[22] };
  });
  const [lo, setLo] = useState(0);
  const [hi, setHi] = useState(book.names.length - 1);
  const [opened, setOpened] = useState<number[]>([]);
  const [msg, setMsg] = useState<string | null>(null);

  const n = book.names.length;
  const found = opened.some((i) => book.names[i] === book.target);
  const maxHalving = Math.floor(Math.log2(n)) + 1;
  const cols = 8;

  const restart = (newSize = size) => {
    const b = pickBook(newSize);
    setBook(b);
    setLo(0);
    setHi(newSize - 1);
    setOpened([]);
    setMsg(null);
  };

  const open = (i: number) => {
    if (found || opened.includes(i)) return;
    if (i < lo || i > hi) {
      setMsg(`We already know ${book.target} can't be there — that part is crossed out.`);
      sfx("wrong");
      return;
    }
    const name = book.names[i];
    const next = [...opened, i];
    setOpened(next);
    const cmp = name.localeCompare(book.target);
    if (cmp === 0) {
      setMsg(null);
      sfx("fanfare");
      burst();
    } else if (cmp < 0) {
      setLo(i + 1);
      setMsg(`${name} comes before ${book.target} in A–Z order, so ${book.target} must be further on. Everything up to ${name} is crossed out.`);
      sfx("flip");
    } else {
      setHi(i - 1);
      setMsg(`${name} comes after ${book.target}, so ${book.target} must be earlier. Everything from ${name} on is crossed out.`);
      sfx("flip");
    }
  };

  const nextPage = () => {
    // linear search: the first page we haven't ruled out
    open(lo);
  };
  const middle = () => {
    open(Math.floor((lo + hi) / 2));
  };

  const verdict = useMemo(() => {
    if (!found) return null;
    const k = opened.length;
    return `Found ${book.target} in ${k} check${k === 1 ? "" : "s"}! Page by page could take up to ${n}. Always opening the middle never needs more than ${maxHalving}.`;
  }, [found, opened.length, book.target, n, maxHalving]);

  return (
    <div className="select-none">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 rounded-2xl border-2 border-line bg-surface-2 px-4 py-2">
          <span className="font-extrabold">Find</span>
          <span className="text-2xl font-black" style={{ color: COLOR }}>
            {book.target}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="chip !text-sm">checks: {opened.length}</span>
          <div className="flex rounded-xl border-2 border-line p-0.5" role="radiogroup" aria-label="Book size">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                role="radio"
                aria-checked={size === s && n === s}
                onClick={() => {
                  setSize(s);
                  restart(s);
                }}
                className={clsx("h-10 rounded-lg px-3 text-sm font-black", n === s ? "text-white" : "text-muted")}
                style={n === s ? { background: COLOR } : undefined}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mb-2 text-sm font-bold text-muted">The pages are in A–Z order. Tap any page to open it.</p>
      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {book.names.map((name, i) => {
          const isOpen = opened.includes(i);
          const out = !isOpen && (i < lo || i > hi) && !found;
          const hit = isOpen && name === book.target;
          return (
            <motion.button
              key={`${name}-${i}`}
              type="button"
              onClick={() => open(i)}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? `Page ${i + 1}: ${name}` : out ? `Page ${i + 1}, ruled out` : `Page ${i + 1}, closed`}
              className={clsx(
                "relative grid min-h-[44px] place-items-center rounded-lg border-2 px-0.5 text-[11px] font-black leading-tight transition sm:text-xs",
                hit ? "border-good bg-good text-white" : isOpen ? "border-[#1c2333]/60 bg-amber-50 text-[#1c2333]" : out ? "border-line bg-surface-2 text-muted opacity-35" : "border-red-800/60 bg-red-700 text-red-100 hover:brightness-110",
              )}
            >
              {isOpen ? name : out ? "✕" : i + 1}
            </motion.button>
          );
        })}
      </div>

      <p className={clsx("mt-3 min-h-[3rem] rounded-2xl px-4 py-2 font-bold", found ? "bg-good/10 text-good" : "bg-surface-2 text-muted")} aria-live="polite">
        {verdict ?? msg ?? `Still possible: pages ${lo + 1} to ${hi + 1} (${hi - lo + 1} pages). Try opening the middle one!`}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <button type="button" className="btn min-h-[48px] border-orange-700 bg-orange-500 text-white" onClick={nextPage} disabled={found}>
          <ArrowRight className="h-4 w-4" /> Next page
        </button>
        <button type="button" className="btn-primary min-h-[48px]" onClick={middle} disabled={found}>
          <Divide className="h-4 w-4" /> Open the middle
        </button>
        <button type="button" className="btn-ghost min-h-[48px]" onClick={() => restart()}>
          {found ? <Shuffle className="h-4 w-4" /> : <RotateCcw className="h-4 w-4" />} New name
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm font-bold">
        <div className="rounded-2xl border-2 p-2" style={{ borderColor: LINEAR }}>
          <p style={{ color: LINEAR }}>Page by page — O(n)</p>
          <p className="text-muted">worst case {n} checks</p>
        </div>
        <div className="rounded-2xl border-2 p-2" style={{ borderColor: HALVE }}>
          <p style={{ color: HALVE }}>Halving — O(log n)</p>
          <p className="text-muted">worst case {maxHalving} checks</p>
        </div>
      </div>
    </div>
  );
}

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
  ages: "9–18",
  lessons: ["dsa/complexity/big-o-notation", "dsa/sorting-searching/binary-search", "dsa/complexity/analysing-code"],
  color: COLOR,
  icon: "🔎",
  watch,
  try: PhoneBookTry,
  story,
  like,
};
