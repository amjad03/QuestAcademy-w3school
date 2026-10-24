"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Explainer, Mission, MissionApi } from "../types";
import { Art, CodeChip, INK, Kid, LabelBox, MissionButton, Robot, Stage, STAGE_INK, STAGE_MUTED, Token } from "./_art";

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
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

/**
 * The score box for one mission step. Before `run` it shows `from` (if any);
 * after `run` the old value leaves (thrown out, or through the +1 machine) and `to` drops in.
 */
function ScoreBox({ code, from, to, run, machine }: { code: string; from?: string; to: string; run: boolean; machine?: boolean }) {
  const bx = machine ? 150 : 200;
  return (
    <Stage label={run ? `After ${code}, the box called score holds ${to}` : `The box called score holds ${from ?? "nothing yet"}`}>
      <CodeChip x={200} y={30} text={code} glow={run ? COLOR : undefined} />
      {machine && (
        <g transform="translate(330 120)">
          <rect x={-40} y={-30} width={80} height={60} rx={10} fill="#A78BFA" stroke={INK} strokeWidth={2.5} />
          <text x={0} y={8} textAnchor="middle" fontSize={24} fontWeight={900} fill="#fff">
            + 1
          </text>
        </g>
      )}
      <LabelBox x={bx} y={BOX_Y} w={130} h={84} name="score" color={COLOR}>
        {from && !run && (
          <g transform={`translate(${bx} ${IN_Y})`}>
            <Token text={from} />
          </g>
        )}
        {from && run && (
          <motion.g
            initial={{ x: bx, y: IN_Y, opacity: 1, rotate: 0 }}
            animate={machine ? { x: [bx, 240, 300], y: [IN_Y, 70, 120], opacity: [1, 1, 0] } : { x: 330, y: 70, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.8 }}
          >
            <Token text={from} color={machine ? undefined : "#E5E7EB"} />
          </motion.g>
        )}
        {run && (
          <motion.g
            initial={machine ? { x: 330, y: 120, opacity: 0 } : { x: bx, y: 40, opacity: 0 }}
            animate={machine ? { x: [330, 240, bx], y: [120, 60, IN_Y], opacity: [0, 1, 1] } : { x: bx, y: IN_Y, opacity: 1 }}
            transition={machine ? { delay: 0.9, duration: 1 } : { delay: from ? 0.7 : 0.1, type: "spring", stiffness: 120, damping: 12 }}
          >
            <Token text={to} color={machine ? "#BBF7D0" : undefined} />
          </motion.g>
        )}
      </LabelBox>
      {from && run && !machine && (
        <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} x={334} y={104} textAnchor="middle" fontSize={12} fontWeight={800} fill={STAGE_MUTED}>
          bye, {from}!
        </motion.text>
      )}
    </Stage>
  );
}

/** One step: a single Run button that carries out one line of code on the score box. */
function StepRun({ done, complete, code, from, to, machine }: MissionApi & { code: string; from?: string; to: string; machine?: boolean }) {
  const [run, setRun] = useState(false);
  return (
    <div>
      <ScoreBox code={code} from={from} to={to} run={run} machine={machine} />
      <MissionButton
        color={COLOR}
        disabled={complete}
        onClick={() => {
          setRun(true);
          done();
        }}
      >
        <Play className="h-5 w-5" /> Run {code}
      </MissionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Store a number in a variable, change it, then add 1 to it.",
  steps: [
    {
      task: "Run the line score = 5.",
      predict: { question: "What does score = 5 tell the computer?", options: ["Put 5 in the box called score", "Check whether score is equal to 5"], answer: 0 },
      scene: (api) => <StepRun {...api} code="score = 5" to="5" />,
      hint: "Tap the orange Run button under the box.",
      explain: "A **variable** is a box in the computer's memory with a name on it. The **=** sign means *store*: put the value on the right into the box on the left. Now `score` holds 5.",
    },
    {
      task: "Run the line score = 8.",
      predict: { question: "score holds 5. After score = 8, what is in the box?", options: ["8 — the 5 is thrown away", "Both 5 and 8", "13"], answer: 0 },
      scene: (api) => <StepRun {...api} code="score = 8" from="5" to="8" />,
      hint: "Tap the orange Run button.",
      explain: "A variable holds **one value at a time**. Storing 8 throws the old 5 away. That is why it is called a *variable*: its value can vary.",
    },
    {
      task: "Run the line score = score + 1.",
      predict: { question: "score holds 8. What does score = score + 1 do?", options: ["Nothing — it is impossible maths", "Makes score 9", "Gives an error"], answer: 1 },
      scene: (api) => <StepRun {...api} code="score = score + 1" from="8" to="9" machine />,
      hint: "Tap Run and watch the 8 go through the +1 machine.",
      explain: "In code, = does not mean *is equal to*. The computer works out the **right side first** (8 + 1 = 9), then stores the answer back in `score`. This is how games add points.",
    },
  ],
  takeaway: "A variable is a named box: = stores a new value in it (the old one is thrown away), and the right side is worked out first.",
};

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
        <text x={140} y={139} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontWeight={800} fontSize={11} fill={INK}>
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
        <text x={132} y={139} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontWeight={800} fontSize={10} fill={INK}>
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
        {/* a sandwich peeking out of the lid */}
        <path d="M118 44 L146 22 L150 46 Z" fill="#FDE68A" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d="M122 42 L146 24" stroke="#22C55E" strokeWidth={3} />
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
  ages: "10–14",
  lessons: ["python/python-basics/variables-and-types", "javascript/basics/variables-types"],
  color: COLOR,
  icon: "📦",
  watch,
  misconception: { myth: "x = x + 1 is impossible, because nothing can equal itself plus 1.", truth: "In code, = means store, not equals: the computer works out x + 1, then puts the answer back in x." },
  mission,
  story,
  like,
};
