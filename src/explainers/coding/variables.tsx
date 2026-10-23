"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Printer, RotateCcw, Sparkles } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { Art, CodeChip, INK, Kid, LabelBox, Robot, Stage, STAGE_INK, STAGE_MUTED, Token } from "./_art";

const COLOR = "#F97316";

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

function Screen({ x, y, value }: { x: number; y: number; value?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-46} y={-34} width={92} height={60} rx={8} fill="#111827" stroke={INK} strokeWidth={2.5} />
      <rect x={-40} y={-28} width={80} height={48} rx={4} fill="#052e16" />
      <text x={-34} y={-12} fontFamily="ui-monospace, Menlo, monospace" fontSize={10} fill="#4ADE80">
        output
      </text>
      {value && (
        <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} x={0} y={12} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize={22} fontWeight={800} fill="#4ADE80">
          {value}
        </motion.text>
      )}
      <rect x={-10} y={26} width={20} height={8} fill="#374151" />
      <rect x={-22} y={34} width={44} height={5} rx={2} fill="#4B5563" />
    </g>
  );
}

const BOX_Y = 120;
const IN_Y = 112;

const watch: Explainer["watch"] = [
  {
    title: "A variable is a box with a name",
    say: "A computer remembers things in boxes. Each box has a name written on it, like score.",
    scene: (
      <Stage label="An empty orange box with the name tag score">
        <CodeChip x={200} y={36} text="a box called score" />
        <motion.g initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 160, damping: 14 }}>
          <LabelBox x={200} y={BOX_Y} w={130} h={84} name="score" color={COLOR} />
        </motion.g>
        <text x={200} y={226} textAnchor="middle" fontSize={13} fontWeight={700} fill={STAGE_MUTED}>
          empty for now
        </text>
      </Stage>
    ),
  },
  {
    title: "Put a value in",
    say: "The equals sign means: put this in the box. Now the box called score holds 0.",
    scene: (
      <Stage label="The number 0 drops into the score box">
        <CodeChip x={200} y={36} text="score = 0" glow={COLOR} />
        <LabelBox x={200} y={BOX_Y} w={130} h={84} name="score" color={COLOR}>
          <motion.g initial={{ x: 200, y: 40, opacity: 0 }} animate={{ x: 200, y: IN_Y, opacity: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 12 }}>
            <Token text="0" />
          </motion.g>
        </LabelBox>
      </Stage>
    ),
  },
  {
    title: "Put a new value in",
    say: "A box holds one thing at a time. When we put 5 in, the old 0 is thrown out.",
    scene: (
      <Stage label="The 0 flies out of the box and 5 drops in">
        <CodeChip x={200} y={36} text="score = 5" glow={COLOR} />
        <LabelBox x={200} y={BOX_Y} w={130} h={84} name="score" color={COLOR}>
          <motion.g initial={{ x: 200, y: IN_Y, opacity: 1, rotate: 0 }} animate={{ x: 330, y: 70, opacity: 0, rotate: 90 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <Token text="0" color="#E5E7EB" />
          </motion.g>
          <motion.g initial={{ x: 200, y: 40, opacity: 0 }} animate={{ x: 200, y: IN_Y, opacity: 1 }} transition={{ delay: 1, type: "spring", stiffness: 120, damping: 12 }}>
            <Token text="5" />
          </motion.g>
        </LabelBox>
        <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} x={334} y={104} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          bye, 0!
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Read what is inside",
    say: "print(score) peeks in the box and shows what is there. The 5 stays in the box.",
    scene: (
      <Stage label="A copy of 5 floats from the box to a screen, the box still holds 5">
        <CodeChip x={200} y={30} text="print(score)" glow={COLOR} />
        <LabelBox x={140} y={BOX_Y} w={130} h={84} name="score" color={COLOR}>
          <g transform={`translate(140 ${IN_Y})`}>
            <Token text="5" />
          </g>
        </LabelBox>
        <motion.g initial={{ x: 140, y: IN_Y, opacity: 0.9 }} animate={{ x: [140, 220, 300], y: [IN_Y, 70, 140], opacity: [0.9, 0.9, 0] }} transition={{ delay: 0.3, duration: 0.9 }}>
          <Token text="5" color="#FEF3C7" />
        </motion.g>
        <Screen x={310} y={140} value="5" />
      </Stage>
    ),
  },
  {
    title: "Use a box to make a new value",
    say: "score = score + 1 means: take what is in score, add 1, and put the answer back. Now it holds 6.",
    scene: (
      <Stage label="5 leaves the box, goes through a plus one machine and comes back as 6">
        <CodeChip x={200} y={30} text="score = score + 1" glow={COLOR} />
        {/* the +1 machine */}
        <g transform="translate(330 120)">
          <rect x={-40} y={-30} width={80} height={60} rx={10} fill="#A78BFA" stroke={INK} strokeWidth={2.5} />
          <text x={0} y={8} textAnchor="middle" fontSize={24} fontWeight={900} fill="#fff">
            + 1
          </text>
          <motion.circle cx={28} cy={-20} r={4} fill="#FDE68A" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />
        </g>
        <LabelBox x={150} y={BOX_Y} w={130} h={84} name="score" color={COLOR}>
          <motion.g initial={{ x: 150, y: IN_Y, opacity: 1 }} animate={{ x: [150, 240, 300], y: [IN_Y, 70, 120], opacity: [1, 1, 0] }} transition={{ delay: 0.3, duration: 1 }}>
            <Token text="5" />
          </motion.g>
          <motion.g initial={{ x: 330, y: 120, opacity: 0 }} animate={{ x: [330, 240, 150], y: [120, 60, IN_Y], opacity: [0, 1, 1] }} transition={{ delay: 1.5, duration: 1 }}>
            <Token text="6" color="#BBF7D0" />
          </motion.g>
        </LabelBox>
      </Stage>
    ),
  },
  {
    title: "Lots of boxes, lots of names",
    say: "Programs use many boxes. They can hold words, numbers, or True and False. The name tells you which box is which.",
    scene: (
      <Stage label="Three boxes: name holds Mia, age holds 9, raining holds False">
        {[
          { x: 75, name: "name", v: '"Mia"', kind: "text", c: "#FDE68A" },
          { x: 200, name: "age", v: "9", kind: "number", c: "#BFDBFE" },
          { x: 325, name: "raining", v: "False", kind: "True / False", c: "#FBCFE8" },
        ].map((b, k) => (
          <motion.g key={b.name} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: k * 0.25 }}>
            <LabelBox x={b.x} y={110} w={108} h={74} name={b.name} color={COLOR}>
              <g transform={`translate(${b.x} 102)`}>
                <Token text={b.v} color={b.c} />
              </g>
            </LabelBox>
            <text x={b.x} y={208} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_INK}>
              {b.kind}
            </text>
          </motion.g>
        ))}
        <text x={200} y={36} textAnchor="middle" fontSize={14} fontWeight={800} fill={STAGE_MUTED}>
          name = &quot;Mia&quot; · age = 9 · raining = False
        </text>
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Try: drag values into named boxes                                   */
/* ------------------------------------------------------------------ */

interface Val {
  id: string;
  text: string;
  kind: "text" | "number";
}

const SHELF: Val[] = [
  { id: "mia", text: "Mia", kind: "text" },
  { id: "leo", text: "Leo", kind: "text" },
  { id: "n9", text: "9", kind: "number" },
  { id: "n10", text: "10", kind: "number" },
  { id: "cat", text: "cat", kind: "text" },
  { id: "dog", text: "dog", kind: "text" },
];

type BoxName = "name" | "age" | "pet";
const BOXES: BoxName[] = ["name", "age", "pet"];
type Boxes = Record<BoxName, Val | null>;
const EMPTY: Boxes = { name: null, age: null, pet: null };

const lit = (v: Val) => (v.kind === "text" ? `"${v.text}"` : v.text);

interface Line {
  code: string;
  out?: string;
}

interface Mission {
  ask: string;
  done: (b: Boxes, log: Line[]) => boolean;
}

const MISSIONS: Mission[] = [
  { ask: "Drag 9 into the box called age.", done: (b) => b.age?.text === "9" },
  { ask: "Put the word Mia in the box called name.", done: (b) => b.name?.text === "Mia" },
  { ask: "Mia has a pet cat. Put cat in the pet box.", done: (b) => b.pet?.text === "cat" },
  { ask: "Happy birthday Mia! Make age 10 (drag 10 in, or press +1).", done: (b) => b.age?.text === "10" },
  { ask: "Read the boxes: press the print button.", done: (_b, log) => log.some((l) => l.out?.includes("Mia is 10")) },
];

function VariablesTry() {
  const [boxes, setBoxes] = useState<Boxes>(EMPTY);
  const [log, setLog] = useState<Line[]>([]);
  const [picked, setPicked] = useState<Val | null>(null);
  const [drag, setDrag] = useState<{ v: Val; x: number; y: number } | null>(null);
  const [hover, setHover] = useState<BoxName | null>(null);
  const [warn, setWarn] = useState<string | null>(null);
  const start = useRef<{ x: number; y: number; moved: boolean } | null>(null);

  const [missionIdx, setMissionIdx] = useState(0);
  const allDone = missionIdx >= MISSIONS.length;
  useEffect(() => {
    if (missionIdx < MISSIONS.length && MISSIONS[missionIdx].done(boxes, log)) {
      setMissionIdx((i) => i + 1);
      sfx(missionIdx === MISSIONS.length - 1 ? "fanfare" : "correct");
    }
  }, [boxes, log, missionIdx]);

  const run = (line: Line) => setLog((l) => [...l.slice(-5), line]);

  const assign = (box: BoxName, v: Val) => {
    setBoxes((b) => ({ ...b, [box]: v }));
    run({ code: `${box} = ${lit(v)}` });
    setPicked(null);
    setWarn(null);
    sfx("pop");
  };

  const plusOne = () => {
    const a = boxes.age;
    if (!a) {
      setWarn("The age box is empty, so there is nothing to add 1 to. Put a number in first!");
      sfx("wrong");
      return;
    }
    if (a.kind !== "number") {
      setWarn(`age holds the word "${a.text}". You can't add 1 to a word! (Python says: TypeError)`);
      sfx("wrong");
      return;
    }
    const next: Val = { id: `n${Number(a.text) + 1}-${Date.now()}`, text: String(Number(a.text) + 1), kind: "number" };
    setBoxes((b) => ({ ...b, age: next }));
    run({ code: "age = age + 1" });
    setWarn(null);
    sfx("coin");
  };

  const print = () => {
    const show = (k: BoxName) => boxes[k]?.text ?? "None";
    run({ code: 'print(name, "is", age)', out: `${show("name")} is ${show("age")}` });
    sfx("tap");
  };

  const reset = () => {
    setBoxes(EMPTY);
    setLog([]);
    setPicked(null);
    setWarn(null);
    setMissionIdx(0);
  };

  const boxAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y)?.closest<HTMLElement>("[data-box]");
    return (el?.dataset.box as BoxName | undefined) ?? null;
  };

  const down = (v: Val) => (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, moved: false };
    setDrag({ v, x: e.clientX, y: e.clientY });
  };
  const move = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!drag || !start.current) return;
    if (Math.hypot(e.clientX - start.current.x, e.clientY - start.current.y) > 6) start.current.moved = true;
    setDrag({ ...drag, x: e.clientX, y: e.clientY });
    setHover(boxAt(e.clientX, e.clientY));
  };
  const up = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!drag) return;
    const target = boxAt(e.clientX, e.clientY);
    if (start.current?.moved && target) assign(target, drag.v);
    else if (!start.current?.moved) setPicked((p) => (p?.id === drag.v.id ? null : drag.v));
    setDrag(null);
    setHover(null);
    start.current = null;
  };

  return (
    <div className="select-none">
      <div className={clsx("mb-4 flex items-center gap-3 rounded-2xl border-2 p-3", allDone ? "border-good/50 bg-good/10" : "border-line bg-surface-2")} aria-live="polite">
        {allDone ? <Sparkles className="h-6 w-6 shrink-0 text-good" /> : <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: COLOR }}>{missionIdx + 1}</span>}
        <p className="font-extrabold">{allDone ? "All missions done! You stored, replaced and read variables like a real coder." : MISSIONS[missionIdx].ask}</p>
      </div>

      {/* shelf of values */}
      <p className="mb-2 text-sm font-bold text-muted">Values — drag one onto a box (or tap a value, then tap a box)</p>
      <div className="flex flex-wrap gap-2">
        {SHELF.map((v) => (
          <button
            key={v.id}
            type="button"
            onPointerDown={down(v)}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={() => setDrag(null)}
            style={{ touchAction: "none" }}
            aria-pressed={picked?.id === v.id}
            aria-label={`Value ${lit(v)}`}
            className={clsx(
              "min-h-[48px] min-w-[64px] cursor-grab rounded-full border-[3px] px-4 font-mono text-lg font-black text-[#1c2333] transition active:cursor-grabbing",
              v.kind === "number" ? "bg-sky-200" : "bg-amber-200",
              picked?.id === v.id ? "border-[#1c2333] ring-4 ring-orange-400/60" : "border-[#1c2333]/70",
              drag?.v.id === v.id && "opacity-40",
            )}
          >
            {lit(v)}
          </button>
        ))}
      </div>

      {/* boxes */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {BOXES.map((name) => {
          const v = boxes[name];
          return (
            <button
              key={name}
              type="button"
              data-box={name}
              onClick={() => picked && assign(name, picked)}
              aria-label={`Box ${name}, holds ${v ? lit(v) : "nothing"}`}
              className={clsx("relative flex flex-col items-center rounded-2xl pt-12 transition", (hover === name || (picked && !drag)) && "scale-[1.03]")}
            >
              <div className="pointer-events-none absolute inset-x-2 top-6 h-14 overflow-visible">
                <AnimatePresence initial={false}>
                  {v && (
                    <motion.span
                      key={v.id}
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, x: 40, rotate: 40, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className={clsx("absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-full border-[3px] border-[#1c2333] px-3 py-1 font-mono text-lg font-black text-[#1c2333]", v.kind === "number" ? "bg-sky-200" : "bg-amber-200")}
                    >
                      {lit(v)}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div
                className={clsx("relative z-10 grid h-24 w-full place-items-center rounded-b-2xl rounded-t-md border-[3px] border-[#1c2333]", hover === name && "ring-4 ring-orange-300")}
                style={{ background: `linear-gradient(180deg, ${COLOR}, #EA580C)` }}
              >
                <span className="rounded-lg border-2 border-[#1c2333] bg-amber-50 px-3 py-1 font-mono text-base font-black text-[#1c2333]">{name}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="btn-ghost min-h-[48px]" onClick={plusOne}>
          age = age + 1
        </button>
        <button type="button" className="btn-primary min-h-[48px]" onClick={print}>
          <Printer className="h-4 w-4" /> print(name, &quot;is&quot;, age)
        </button>
        <button type="button" className="btn-ghost min-h-[48px]" onClick={reset} aria-label="Reset">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      {warn && (
        <p className="mt-3 rounded-xl bg-bad/10 px-3 py-2 text-sm font-bold text-bad" role="alert">
          {warn}
        </p>
      )}

      {/* program so far */}
      <div className="mt-4 rounded-2xl bg-[#111827] p-3 font-mono text-sm" aria-live="polite">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">Your program</p>
        {log.length === 0 && <p className="text-gray-500"># nothing yet — put a value in a box</p>}
        {log.map((l, k) => (
          <div key={k}>
            <p className="text-amber-200">{l.code}</p>
            {l.out !== undefined && <p className="text-green-400">→ {l.out}</p>}
          </div>
        ))}
      </div>

      {drag && start.current?.moved && (
        <div className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#1c2333] bg-amber-200 px-4 py-2 font-mono text-lg font-black text-[#1c2333] shadow-lg" style={{ left: drag.x, top: drag.y }}>
          {lit(drag.v)}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-muted">
        {MISSIONS.map((m, k) => (
          <span key={k} className={clsx("flex items-center gap-1 rounded-lg px-2 py-1", k < missionIdx ? "bg-good/15 text-good" : "bg-surface-2")}>
            {k < missionIdx && <Check className="h-3 w-3" />} Mission {k + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Cookie({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={9} fill="#D97706" stroke={INK} strokeWidth={1.5} />
      <circle cx={-3} cy={-2} r={1.6} fill="#451A03" />
      <circle cx={3} cy={2} r={1.6} fill="#451A03" />
      <circle cx={2} cy={-4} r={1.3} fill="#451A03" />
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Bolt the robot holds an empty box labelled snacks">
        <g transform="translate(60 104)">
          <Robot color="#3B82F6" wave />
        </g>
        <LabelBox x={140} y={78} w={80} h={50} name="snacks" color={COLOR} />
      </Art>
    ),
    speech: "I need a box to remember things!",
    caption: "Bolt the robot makes a box and writes a name on it: snacks.",
  },
  {
    art: (
      <Art label="Mia drops 3 cookies in the snacks box">
        <g transform="translate(50 132)">
          <Kid h={84} bow />
        </g>
        <LabelBox x={140} y={78} w={80} h={50} name="snacks" color={COLOR}>
          <Cookie x={125} y={72} />
          <Cookie x={140} y={70} />
          <Cookie x={155} y={72} />
        </LabelBox>
        <text x={140} y={40} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontWeight={800} fontSize={13} fill={INK}>
          snacks = 3
        </text>
      </Art>
    ),
    speech: "Here are 3 cookies!",
    caption: "Mia puts 3 in the box. Now snacks holds 3.",
  },
  {
    art: (
      <Art label="Mia eats a cookie and Bolt updates the box to 2">
        <g transform="translate(45 132)">
          <Kid h={84} bow mood="wow" />
        </g>
        <Cookie x={64} y={70} />
        <LabelBox x={140} y={78} w={80} h={50} name="snacks" color={COLOR}>
          <Cookie x={132} y={72} />
          <Cookie x={148} y={72} />
        </LabelBox>
        <text x={140} y={40} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontWeight={800} fontSize={12} fill={INK}>
          snacks = snacks - 1
        </text>
      </Art>
    ),
    speech: "Yum! Just one…",
    caption: "Mia eats one. Bolt takes the old number, subtracts 1 and puts 2 back.",
  },
  {
    art: (
      <Art label="Bolt reads the box and says 2">
        <g transform="translate(60 104)">
          <Robot color="#3B82F6" mood="wow" />
        </g>
        <LabelBox x={140} y={78} w={80} h={50} name="snacks" color={COLOR}>
          <g transform="translate(140 70)">
            <Token text="2" />
          </g>
        </LabelBox>
      </Art>
    ),
    speech: "How many left? I'll look… 2!",
    caption: "When Dad asks, Bolt just reads the box. That's using a variable.",
  },
];

const like: Explainer["like"] = {
  headline: "A variable is like a labelled lunchbox.",
  everyday: {
    label: "A lunchbox with a name sticker",
    art: (
      <Art label="A lunchbox with a sticker that says Mia and a sandwich inside" vb="0 0 200 130">
        <rect x={50} y={40} width={100} height={70} rx={12} fill="#60A5FA" stroke={INK} strokeWidth={3} />
        <path d="M80 40 v-12 h40 v12" fill="none" stroke={INK} strokeWidth={4} />
        <rect x={70} y={60} width={60} height={24} rx={6} fill="#FFFBEB" stroke={INK} strokeWidth={2} />
        <text x={100} y={77} textAnchor="middle" fontWeight={900} fontSize={15} fill={INK}>
          Mia
        </text>
        <text x={170} y={60} fontSize={26}>
          🥪
        </text>
      </Art>
    ),
  },
  concept: {
    label: "A variable called lunch",
    art: (
      <Art label="A box named lunch holding the text sandwich" vb="0 0 200 130">
        <LabelBox x={100} y={56} w={120} h={60} name="lunch" color={COLOR}>
          <g transform="translate(100 48)">
            <Token text='"sandwich"' />
          </g>
        </LabelBox>
      </Art>
    ),
  },
  pairs: [
    ["The name sticker", "The variable's name"],
    ["What's packed inside", "The value it holds"],
    ["Swapping the sandwich for pasta", "Assigning a new value (the old one is gone)"],
    ["Opening the lid to look", "Reading the variable"],
  ],
  limits:
    "Reading a variable doesn't take the value out — it's more like taking a photo of what's inside. In Python a variable is really a name tag pointing at a value, so two names can point at the very same list.",
};

export const variablesExplainer: Explainer = {
  id: "coding-variables",
  title: "Variables are labelled boxes",
  tagline: "Put a value in, swap it for a new one, and read it back.",
  area: "Coding",
  ages: "8–16",
  lessons: ["python/python-basics/variables-and-types", "javascript/basics/variables-types"],
  color: COLOR,
  icon: "📦",
  watch,
  try: VariablesTry,
  story,
  like,
};
