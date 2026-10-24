"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Explainer, Mission, MissionApi } from "../types";
import { Art, Cloud, INK, Kid, MissionButton, Rain, Robot, Stage, STAGE_INK, STAGE_MUTED, Sun, useTicker } from "./_art";

const COLOR = "#7C3AED";

/* ------------------------------------------------------------------ */
/* Little props                                                        */
/* ------------------------------------------------------------------ */

function Umbrella({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M-22 0 a22 18 0 0 1 44 0 q-5.5 -5 -11 0 q-5.5 -5 -11 0 q-5.5 -5 -11 0 q-5.5 -5 -11 0 z" fill="#EF4444" stroke={INK} strokeWidth={2} />
      <path d="M0 -18 v-4 M0 0 v20 q0 5 -5 5 q-4 0 -4 -4" fill="none" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

function Shades({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M-20 -3 h40" stroke={INK} strokeWidth={2.5} />
      <rect x={-20} y={-5} width={16} height={12} rx={5} fill="#111827" stroke={INK} strokeWidth={2} />
      <rect x={4} y={-5} width={16} height={12} rx={5} fill="#111827" stroke={INK} strokeWidth={2} />
      <path d="M-16 -2 l5 0" stroke="#9CA3AF" strokeWidth={1.5} />
      <path d="M8 -2 l5 0" stroke="#9CA3AF" strokeWidth={1.5} />
    </g>
  );
}

function Scarf({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M-18 -6 q18 10 36 0 v8 q-18 10 -36 0 z" fill="#2563EB" stroke={INK} strokeWidth={2} />
      <path d="M6 2 v20 h9 v-21" fill="#2563EB" stroke={INK} strokeWidth={2} />
      <path d="M6 10 h9 M6 16 h9" stroke="#FDE68A" strokeWidth={2} />
      <path d="M-10 -2 v8 M0 0 v8" stroke="#FDE68A" strokeWidth={2} />
    </g>
  );
}

function Snow({ x, y, w, h, n = 10 }: { x: number; y: number; w: number; h: number; n?: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, k) => (
        <motion.circle key={k} cx={x + ((k * 41) % w)} cy={y} r={3} fill="#fff" stroke="#93C5FD" strokeWidth={1} animate={{ y: [0, h], x: [0, 6, -4, 0], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: (k * 0.23) % 2.4, ease: "linear" }} />
      ))}
    </g>
  );
}

/** The decision diamond, centred on (x, y). */
function Diamond({ x, y, text, w = 128, h = 52 }: { x: number; y: number; text: string; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M0 ${-h / 2} L${w / 2} 0 L0 ${h / 2} L${-w / 2} 0 Z`} fill="#FDE68A" stroke={INK} strokeWidth={2.5} />
      <text y={5} textAnchor="middle" fontSize={13} fontWeight={900} fill={INK}>
        {text}
      </text>
    </g>
  );
}

function Road() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M200 236 V150 L80 70 M200 150 L320 70" stroke="#A8A29E" strokeWidth={30} />
      <path d="M200 236 V150 L80 70 M200 150 L320 70" stroke="#FEF3C7" strokeWidth={2.5} strokeDasharray="8 8" />
    </g>
  );
}

function Signs() {
  return (
    <>
      <g transform="translate(62 46)">
        <Umbrella s={0.9} />
      </g>
      <g transform="translate(338 48)">
        <Shades s={1.1} />
      </g>
    </>
  );
}

const LEFT_KF = { x: [200, 200, 105], y: [215, 160, 98] };
const RIGHT_KF = { x: [200, 200, 295], y: [215, 160, 98] };

const watch: Explainer["watch"] = [
  {
    title: "Bolt reaches a fork in the road",
    say: "Bolt is going out. One road leads to an umbrella, the other to sunglasses. Which way should he go?",
    scene: (
      <Stage label="Bolt at the bottom of a forked road, umbrella at the end of the left road, sunglasses at the right">
        <Road />
        <Signs />
        <motion.g initial={{ x: 200, y: 250 }} animate={{ x: 200, y: 215 }} transition={{ duration: 0.8 }}>
          <Robot s={0.8} />
        </motion.g>
        <motion.text x={250} y={196} fontSize={26} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
          ?
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Ask a yes-or-no question",
    say: "At the fork, Bolt asks one question: is it raining? The answer can only be yes or no.",
    scene: (
      <Stage label="A yellow decision diamond at the fork asks: raining? Yes goes left, no goes right">
        <Road />
        <Signs />
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }}>
          <Diamond x={200} y={140} text="raining?" />
        </motion.g>
        <text x={118} y={130} textAnchor="middle" fontSize={15} fontWeight={900} fill="#16A34A">
          yes
        </text>
        <text x={284} y={130} textAnchor="middle" fontSize={15} fontWeight={900} fill="#DC2626">
          no
        </text>
        <g transform="translate(200 215)">
          <Robot s={0.7} />
        </g>
      </Stage>
    ),
  },
  {
    title: "If yes, take the umbrella",
    say: "It is raining, so the answer is yes. Bolt takes the left road and grabs the umbrella.",
    scene: (
      <Stage label="Rain falls. Bolt drives up the left road and holds the umbrella">
        <Road />
        <Cloud x={130} y={30} s={1.1} grey />
        <Cloud x={280} y={24} s={0.9} grey />
        <Rain x={80} y={40} w={260} h={190} n={16} />
        <g transform="translate(338 48)">
          <Shades s={1.1} />
        </g>
        <motion.g initial={{ x: 200, y: 215 }} animate={LEFT_KF} transition={{ duration: 1.6, times: [0, 0.4, 1] }}>
          <Robot s={0.7} />
          <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: -46 }} transition={{ delay: 1.7 }}>
            <Umbrella s={1.3} />
          </motion.g>
        </motion.g>
        <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.6 }}>
          <g transform="translate(62 46)">
            <Umbrella s={0.9} />
          </g>
        </motion.g>
      </Stage>
    ),
  },
  {
    title: "Else, wear sunglasses",
    say: "On a sunny day the answer is no. Else means: if the answer was no, do this instead. Bolt takes the right road.",
    scene: (
      <Stage label="The sun shines. Bolt drives up the right road and puts on sunglasses">
        <Road />
        <Sun x={70} y={40} r={18} />
        <g transform="translate(62 46)">
          <Umbrella s={0.9} />
        </g>
        <motion.g initial={{ x: 200, y: 215 }} animate={RIGHT_KF} transition={{ duration: 1.6, times: [0, 0.4, 1] }}>
          <Robot s={0.7} />
          <motion.g initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: -19 }} transition={{ delay: 1.7 }}>
            <Shades s={0.62} />
          </motion.g>
        </motion.g>
        <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.6 }}>
          <g transform="translate(338 48)">
            <Shades s={1.1} />
          </g>
        </motion.g>
      </Stage>
    ),
  },
  {
    title: "Write it as code",
    say: "In code we write if, the question, then what to do. Only one of the two paths ever runs. The other is skipped.",
    scene: (
      <Stage label="Code: if raining, take umbrella, else wear sunglasses. With rain, the first branch is lit and the else branch is skipped">
        <Cloud x={340} y={44} s={0.8} grey />
        <Rain x={312} y={58} w={60} h={50} n={6} />
        <g transform="translate(30 40)">
          <rect width={270} height={150} rx={12} fill="#111827" stroke={INK} strokeWidth={2} />
          {[
            ["if raining:", "#F472B6", true],
            ["    take(umbrella)", "#F9FAFB", true],
            ["else:", "#F472B6", false],
            ["    wear(sunglasses)", "#F9FAFB", false],
          ].map(([t, c, on], i) => (
            <motion.g key={i} initial={{ opacity: 0.3 }} animate={{ opacity: on ? 1 : 0.35 }} transition={{ delay: 0.4 + i * 0.4 }}>
              {on && <motion.rect x={8} y={14 + i * 32} height={26} rx={6} fill="#166534" initial={{ width: 0 }} animate={{ width: 254 }} transition={{ delay: 0.4 + i * 0.4, duration: 0.3 }} />}
              <text x={18} y={33 + i * 32} fontFamily="ui-monospace, Menlo, monospace" fontSize={16} fontWeight={700} fill={c as string} xmlSpace="preserve">
                {t as string}
              </text>
            </motion.g>
          ))}
        </g>
        <motion.text x={350} y={150} textAnchor="middle" fontSize={13} fontWeight={800} fill="#16A34A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          ✓ runs
        </motion.text>
        <motion.text x={350} y={190} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
          skipped
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "More choices with elif",
    say: "Need more than two choices? Elif means else if: ask another question. Bolt checks each question in order and stops at the first yes.",
    scene: (
      <Stage label="Flowchart: raining? yes gives umbrella. No leads to snowing? yes gives scarf, no gives sunglasses">
        <Diamond x={90} y={60} text="raining?" w={120} h={48} />
        <Diamond x={210} y={140} text="snowing?" w={124} h={48} />
        <g stroke={STAGE_INK} strokeWidth={2.5} fill="none">
          <path d="M150 60 H300" />
          <path d="M90 84 V140 H148" />
          <path d="M272 140 H300" />
          <path d="M210 164 V205 H300" />
        </g>
        <text x={225} y={52} fontSize={12} fontWeight={900} fill="#16A34A">
          yes
        </text>
        <text x={98} y={118} fontSize={12} fontWeight={900} fill="#DC2626">
          no
        </text>
        <text x={278} y={132} fontSize={12} fontWeight={900} fill="#16A34A">
          yes
        </text>
        <text x={218} y={190} fontSize={12} fontWeight={900} fill="#DC2626">
          no (else)
        </text>
        {[
          { y: 60, el: <Umbrella s={0.8} />, t: "if" },
          { y: 140, el: <Scarf s={0.8} />, t: "elif" },
          { y: 205, el: <Shades s={0.9} />, t: "else" },
        ].map((r, k) => (
          <motion.g key={k} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + k * 0.4 }}>
            <rect x={302} y={r.y - 22} width={84} height={44} rx={10} fill="#EDE9FE" stroke={INK} strokeWidth={2} />
            <g transform={`translate(330 ${r.y})`}>{r.el}</g>
            <text x={372} y={r.y + 5} textAnchor="middle" fontSize={11} fontWeight={900} fill={INK} fontFamily="ui-monospace, Menlo, monospace">
              {r.t}
            </text>
          </motion.g>
        ))}
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

type Weather = "rainy" | "sunny" | "snowy";

const IF_ELSE = ["if raining:", "    take(umbrella)", "else:", "    wear(sunglasses)"];
const IF_ELIF = ["if raining:", "    take(umbrella)", "elif snowing:", "    wear(scarf)", "else:", "    wear(sunglasses)"];

/** Lines that run, in order, and the line that gives Bolt his item. */
const RUNS: Record<string, { trace: number[]; item: "umbrella" | "scarf" | "sunglasses" }> = {
  "2-rainy": { trace: [0, 1], item: "umbrella" },
  "2-sunny": { trace: [0, 2, 3], item: "sunglasses" },
  "3-snowy": { trace: [0, 2, 3], item: "scarf" },
};

/** One weather, one Run button: the lines light up one by one, skipped lines fade. */
function StepWeather({ done, complete, weather, lines }: MissionApi & { weather: Weather; lines: string[] }) {
  const run = RUNS[`${lines.length === 4 ? 2 : 3}-${weather}`];
  const [tick, setTick] = useState(-1);
  const running = tick >= 0 && tick < run.trace.length;
  const finished = tick >= run.trace.length;
  useTicker(running, 550, () => setTick((t) => t + 1));
  const ran = run.trace.slice(0, Math.max(0, tick));
  /** A question's answer was yes if the line just inside it ran next. */
  const yes = (i: number) => run.trace[run.trace.indexOf(i) + 1] === i + 1;
  const lh = lines.length === 4 ? 36 : 30;
  const top = 120 - (lines.length * lh) / 2;
  return (
    <div>
      <Stage label={finished ? `It is ${weather}. Only the lit lines ran, so Bolt has his ${run.item}. The other lines were skipped.` : `It is ${weather}. Bolt's code is ready to run.`}>
        <rect x={6} y={top - 12} width={244} height={lines.length * lh + 24} rx={12} fill="#111827" stroke={INK} strokeWidth={2} />
        {lines.map((l, i) => {
          const on = ran.includes(i);
          const keyword = i % 2 === 0;
          return (
            <g key={i} opacity={finished && !on ? 0.35 : 1}>
              {on && <rect x={14} y={top + i * lh} width={228} height={lh - 6} rx={6} fill={keyword ? "#6D28D9" : "#166534"} />}
              <text x={22} y={top + i * lh + lh / 2 + 2} fontFamily="ui-monospace, Menlo, monospace" fontSize={15} fontWeight={700} fill={keyword ? "#F9A8D4" : "#F9FAFB"} xmlSpace="preserve">
                {l}
              </text>
              {on && keyword && l !== "else:" && (
                <text x={236} y={top + i * lh + lh / 2 + 2} textAnchor="end" fontSize={13} fontWeight={900} fill={yes(i) ? "#86EFAC" : "#FCA5A5"}>
                  {yes(i) ? "yes" : "no"}
                </text>
              )}
            </g>
          );
        })}
        {/* the weather and Bolt */}
        <rect x={262} y={20} width={132} height={200} rx={14} fill={weather === "sunny" ? "#E0F2FE" : weather === "snowy" ? "#EFF6FF" : "#CBD5E1"} stroke={INK} strokeWidth={2} />
        {weather === "sunny" && <Sun x={360} y={52} r={14} />}
        {weather === "rainy" && (
          <>
            <Cloud x={316} y={50} s={0.8} grey />
            <Rain x={276} y={62} w={108} h={140} n={9} />
          </>
        )}
        {weather === "snowy" && (
          <>
            <Cloud x={316} y={50} s={0.8} />
            <Snow x={276} y={62} w={108} h={140} n={9} />
          </>
        )}
        <g transform="translate(328 188)">
          <Robot s={1} mood={finished ? "happy" : "wow"} />
          {finished && (
            <g transform={run.item === "umbrella" ? "translate(22 -60)" : run.item === "scarf" ? "translate(0 -12)" : "translate(0 -27)"}>
              <motion.g initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }}>
                {run.item === "umbrella" ? <Umbrella s={1.2} /> : run.item === "scarf" ? <Scarf s={0.75} /> : <Shades s={0.65} />}
              </motion.g>
            </g>
          )}
        </g>
      </Stage>
      <MissionButton color={COLOR} disabled={complete || tick >= 0} onClick={() => {
          setTick(1);
          done();
        }}>
        <Play className="h-5 w-5" /> Run the code
      </MissionButton>
    </div>
  );
}

const mission: Mission = {
  goal: "Run Bolt's weather code and see which lines run.",
  steps: [
    {
      task: "It is raining. Run the code.",
      settle: 3000,
      predict: { question: "It is raining. What will Bolt do?", options: ["Take the umbrella only", "Take the umbrella AND wear sunglasses — both parts run"], answer: 0, trap: 1 },
      scene: (api) => <StepWeather {...api} weather="rainy" lines={IF_ELSE} />,
      hint: "Tap the purple Run button and watch the lines light up.",
      explain: "**if** asks a yes-or-no question, called a **condition**. It was raining, so the answer was yes: the umbrella line ran and the whole **else** part was skipped. Only one branch ever runs.",
    },
    {
      task: "Now it is sunny. Run the code again.",
      settle: 3000,
      predict: { question: "It is not raining. Which line gives Bolt his item?", options: ["take(umbrella)", "wear(sunglasses)", "Neither — nothing runs"], answer: 1 },
      scene: (api) => <StepWeather {...api} weather="sunny" lines={IF_ELSE} />,
      hint: "Tap Run and look for the line that lights up green.",
      explain: "The answer to *raining?* was no, so the computer jumped to **else**, which means *otherwise*. The umbrella line was skipped this time.",
    },
    {
      task: "It is snowing. Run the longer code.",
      settle: 3000,
      predict: { question: "It is snowing. Which questions does Bolt ask?", options: ["Only raining?", "raining? (no), then snowing? (yes)", "Every question, and all the yes parts run"], answer: 1, trap: 2 },
      scene: (api) => <StepWeather {...api} weather="snowy" lines={IF_ELIF} />,
      hint: "Tap Run and watch which questions light up.",
      explain: "**elif** means *else if*: ask another question. Bolt asks from the top and **stops at the first yes**, so he wears the scarf and skips the rest.",
    },
  ],
  takeaway: "if / elif / else asks questions from the top, runs the first branch whose answer is yes, and skips all the others.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Window({ x, y, rain }: { x: number; y: number; rain?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={70} height={60} rx={4} fill={rain ? "#94A3B8" : "#BAE6FD"} stroke={INK} strokeWidth={3} />
      <path d="M35 0 V60 M0 30 H70" stroke={INK} strokeWidth={2} />
      {rain ? (
        <g stroke="#E0F2FE" strokeWidth={2} strokeLinecap="round">
          {[8, 22, 44, 58, 15, 50].map((dx, k) => (
            <line key={k} x1={dx} y1={6 + (k % 3) * 16} x2={dx - 3} y2={14 + (k % 3) * 16} />
          ))}
        </g>
      ) : (
        <circle cx={52} cy={16} r={9} fill="#FACC15" stroke={INK} strokeWidth={1.5} />
      )}
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Mia by the door with her school bag, Bolt beside her">
        <g transform="translate(60 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(140 108)">
          <Robot mood="wow" />
        </g>
      </Art>
    ),
    speech: "Should I take my umbrella?",
    caption: "Mia is off to school but can't decide what to take.",
  },
  {
    art: (
      <Art label="Bolt looks out of the window to check the weather">
        <Window x={110} y={30} rain />
        <g transform="translate(60 108)">
          <Robot />
        </g>
      </Art>
    ),
    speech: "IF it's raining…",
    caption: "Bolt asks one yes-or-no question by looking outside.",
  },
  {
    art: (
      <Art label="It is raining and Mia holds a red umbrella">
        <Cloud x={130} y={26} grey />
        <Rain x={90} y={40} w={100} h={90} n={9} />
        <g transform="translate(70 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(88 50)">
          <Umbrella s={1.6} />
        </g>
      </Art>
    ),
    speech: "…THEN take the umbrella!",
    caption: "The answer is yes, so Mia takes the umbrella.",
  },
  {
    art: (
      <Art label="The next day is sunny and Mia wears sunglasses">
        <Sun x={160} y={36} r={18} />
        <g transform="translate(70 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(70 61)">
          <Shades s={0.55} />
        </g>
      </Art>
    ),
    speech: "ELSE — sunglasses!",
    caption: "Next day the answer is no, so the else plan happens instead.",
  },
];

function TrafficLight({ green }: { green?: boolean }) {
  return (
    <g>
      <rect x={-18} y={-50} width={36} height={92} rx={9} fill="#1F2937" stroke={INK} strokeWidth={2} />
      <circle cy={-32} r={10} fill={green ? "#7F1D1D" : "#EF4444"} />
      <circle cy={-4} r={10} fill="#78350F" />
      <circle cy={24} r={10} fill={green ? "#22C55E" : "#14532D"} />
      <rect x={-4} y={42} width={8} height={30} fill="#374151" />
    </g>
  );
}

const like: Explainer["like"] = {
  headline: "If/else is like a driver at a traffic light.",
  everyday: {
    label: "If the light is green, go — else, stop",
    art: (
      <Art label="A traffic light showing green with a car ready to go" vb="0 0 200 130">
        <g transform="translate(60 56)">
          <TrafficLight green />
        </g>
        <g transform="translate(130 100)">
          <rect x={-28} y={-18} width={56} height={18} rx={6} fill="#3B82F6" stroke={INK} strokeWidth={2} />
          <path d="M-18 -18 l6 -12 h24 l6 12" fill="#BFDBFE" stroke={INK} strokeWidth={2} />
          <circle cx={-15} cy={2} r={6} fill="#111827" />
          <circle cx={15} cy={2} r={6} fill="#111827" />
        </g>
      </Art>
    ),
  },
  concept: {
    label: "An if/else in code",
    art: (
      <Art label="Code: if light is green, go, else stop" vb="0 0 200 130">
        <rect x={15} y={20} width={170} height={90} rx={10} fill="#111827" />
        {['if light == "green":', "    go()", "else:", "    stop()"].map((t, i) => (
          <text key={i} x={26} y={44 + i * 19} fontFamily="ui-monospace, Menlo, monospace" fontSize={12} fontWeight={700} fill={i % 2 ? "#86EFAC" : "#F472B6"} xmlSpace="preserve">
            {t}
          </text>
        ))}
      </Art>
    ),
  },
  pairs: [
    ["The driver looks at the light", "The condition is checked"],
    ["Green: drive on", "The if branch runs"],
    ["Any other colour: wait", "The else branch runs"],
    ["You never go AND stop", "Exactly one branch runs"],
  ],
  limits:
    "A real driver also watches for people, other cars and sirens. A program only checks the exact condition you wrote, at the moment that line runs — if you forget a case, the computer won't think of it for you.",
};

export const ifElseExplainer: Explainer = {
  id: "coding-if-else",
  title: "If / else: making decisions",
  tagline: "Ask a yes-or-no question, then pick a path — just like Bolt at the fork.",
  area: "Coding",
  ages: "10–14",
  lessons: ["python/control-flow/conditionals", "javascript/basics/operators-conditionals"],
  color: COLOR,
  icon: "🔀",
  watch,
  misconception: { myth: "The computer runs both the if part and the else part.", truth: "Exactly one branch runs: the first one whose question is answered yes (or else, if none are). The rest are skipped." },
  mission,
  story,
  like,
};
