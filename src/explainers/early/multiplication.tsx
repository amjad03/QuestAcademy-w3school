"use client";

import { motion } from "framer-motion";
import type { Explainer, Mission } from "../types";
import { Cookie, Emo, Kid, Panel, Plate, Stage, T, TapStep, pop, rise, spring } from "./_kit";

const C = "#DB2777";
const PLATES = [75, 200, 325];

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const onPlate = (p: number, k: number) => ({ x: PLATES[p] + (k % 2 ? 17 : -17), y: 146 + (k < 2 ? -9 : 9) });
const inArray = (p: number, k: number) => ({ x: 140 + k * 40, y: 62 + p * 42 });
const turned = (p: number, k: number) => ({ x: 160 + p * 40, y: 44 + k * 40 });

function CookieScene({ stage }: { stage: number }) {
  const showPlates = stage <= 4;
  const where = (p: number, k: number, s: number) => (s >= 5 ? turned(p, k) : s >= 4 ? inArray(p, k) : onPlate(p, k));
  const labels = [
    "Three empty plates",
    "Three plates with four cookies on each",
    "Counting plate by plate: four, eight, twelve",
    "Three groups of four is twelve",
    "Twelve cookies lined up in three rows of four",
    "The array turned round: four rows of three, still twelve",
  ];
  return (
    <Stage label={labels[stage]}>
      {showPlates &&
        PLATES.map((x, p) => (
          <motion.g key={p} {...(stage === 0 ? pop(p * 0.3) : stage === 4 ? { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { duration: 0.6, delay: 0.3 } } : {})}>
            <Plate x={x} y={150} rx={56} ry={26} />
          </motion.g>
        ))}
      {stage >= 1 &&
        [0, 1, 2].map((p) =>
          [0, 1, 2, 3].map((k) => {
            const from = where(p, k, Math.max(1, stage - 1));
            const to = where(p, k, stage);
            const fresh = stage === 1;
            return (
              <motion.g key={`${p}-${k}`} initial={fresh ? { ...to, scale: 0 } : { ...from, scale: 1 }} animate={{ ...to, scale: 1 }} transition={fresh ? { ...spring, delay: 0.2 + p * 0.7 + k * 0.15 } : { duration: 0.9, ease: "easeInOut", delay: 0.2 + (p * 4 + k) * 0.05 }}>
                <Cookie x={0} y={0} r={stage >= 4 ? 15 : 13} />
              </motion.g>
            );
          }),
        )}
      {stage === 2 &&
        PLATES.map((x, p) => (
          <motion.g key={p} {...pop(0.4 + p * 0.9)}>
            <circle cx={x} cy={204} r={19} fill={C} />
            <T x={x} y={205} size={20} color="white">
              {(p + 1) * 4}
            </T>
          </motion.g>
        ))}
      {stage === 3 && (
        <>
          {PLATES.map((x, p) => (
            <motion.g key={p} {...pop(0.1 + p * 0.2)}>
              <ellipse cx={x} cy={150} rx={62} ry={32} fill="none" stroke={C} strokeWidth={3} strokeDasharray="6 5" />
            </motion.g>
          ))}
          <motion.g {...rise(0.8)}>
            <rect x={90} y={22} width={220} height={60} rx={20} fill="white" stroke={C} strokeWidth={3} />
            <T x={200} y={53} size={38} color={C}>
              3 × 4 = 12
            </T>
          </motion.g>
          <motion.g {...rise(1.3)}>
            <T x={200} y={222} size={17} color={C}>
              3 groups of 4
            </T>
          </motion.g>
        </>
      )}
      {stage >= 4 && (
        <motion.g {...rise(1.4)}>
          <T x={200} y={stage === 5 ? 232 : 214} size={30} color={C}>
            {stage === 5 ? "4 × 3 = 12" : "3 × 4 = 12"}
          </T>
          {stage === 4 &&
            [0, 1, 2].map((p) => (
              <T key={p} x={96} y={62 + p * 42} size={14} color="#94A3B8">
                row {p + 1}
              </T>
            ))}
        </motion.g>
      )}
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

const mission: Mission = {
  goal: "Fill the plates with cookies. Find a fast way to count them.",
  steps: [
    {
      task: "Put 4 cookies on each plate.",
      predict: { question: "3 plates, 4 cookies on each. How many cookies?", options: ["🍪 7", "🍪 12"], answer: 1, trap: 0 },
      scene: (api) => <TapStep api={api} color={C} button="🍪 Fill the plates" render={(on) => <CookieScene stage={on ? 1 : 0} />} />,
      hint: "Tap the big pink button.",
      explain: "Every plate has **the same**: 4 cookies. These are **equal groups**.",
    },
    {
      task: "Count plate by plate.",
      scene: (api) => <TapStep api={api} color={C} button="👆 Count by 4s" render={(on) => <CookieScene stage={on ? 2 : 1} />} />,
      explain: "4, 8, 12. Three groups of four make twelve. We write **3 × 4 = 12**.",
    },
    {
      task: "Turn the rows round.",
      predict: { question: "Now it is 4 rows of 3. How many cookies?", options: ["🍪 Still 12", "🤔 A new number"], answer: 0, trap: 1 },
      scene: (api) => <TapStep api={api} color={C} button="🔄 Turn it" render={(on) => <CookieScene stage={on ? 5 : 4} />} />,
      explain: "**4 × 3 = 12** too. Turning the rows round does not change how many.",
    },
  ],
  takeaway: "Times means equal groups: 3 × 4 is 3 groups of 4.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const BERRY_SPOTS: [number, number][] = [
  [-12, -6],
  [12, -6],
  [-12, 8],
  [12, 8],
];

function BerryPlates({ counts }: { counts?: boolean }) {
  return (
    <g>
      {[45, 120, 195].map((x, p) => (
        <g key={x}>
          <Plate x={x} y={86} rx={34} ry={20} />
          {BERRY_SPOTS.map(([dx, dy], k) => (
            <Emo key={k} x={x + dx} y={84 + dy} size={15}>
              🍓
            </Emo>
          ))}
          {counts && (
            <g>
              <circle cx={x} cy={128} r={13} fill={C} />
              <T x={x} y={129} size={14} color="white">
                {(p + 1) * 4}
              </T>
            </g>
          )}
        </g>
      ))}
    </g>
  );
}

const story = [
  {
    art: (
      <Panel label="Three friends sit on a picnic blanket">
        <path d="M10 140 L 40 104 L 200 104 L 230 140 Z" fill="#FCA5A5" />
        <path d="M40 104 L 30 140 M80 104 L 75 140 M120 104 V 140 M160 104 L 165 140 M200 104 L 210 140" stroke="white" strokeWidth={3} opacity={0.6} />
        <Kid x={60} y={130} s={0.7} shirt="#3B82F6" />
        <Kid x={120} y={130} s={0.7} shirt="#22C55E" bow />
        <Kid x={180} y={130} s={0.7} shirt="#F59E0B" hair="#1F2937" />
      </Panel>
    ),
    speech: "4 strawberries each!",
    caption: "Three friends have a picnic. Each one gets four strawberries.",
  },
  {
    art: (
      <Panel label="Three plates, each with four strawberries">
        <BerryPlates />
      </Panel>
    ),
    caption: "Three plates, four on each. Every plate has the same.",
  },
  {
    art: (
      <Panel label="Counting plate by plate: four, eight, twelve">
        <BerryPlates counts />
      </Panel>
    ),
    speech: "4, 8, 12!",
    caption: "Count plate by plate: four, eight, twelve.",
  },
  {
    art: (
      <Panel label="Twelve strawberries in three rows of four, three times four equals twelve">
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <Emo key={`${r}${c}`} x={40 + c * 24} y={46 + r * 28} size={18}>
              🍓
            </Emo>
          )),
        )}
        <T x={178} y={74} size={26} color={C}>
          3 × 4
        </T>
        <T x={178} y={108} size={26} color={C}>
          = 12
        </T>
      </Panel>
    ),
    caption: "Three groups of four make twelve: 3 × 4 = 12.",
  },
];

function JuicePack({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 3} y={y - 3} width={70} height={46} rx={5} fill="none" stroke="#94A3B8" strokeWidth={2} strokeDasharray="4 3" />
      {[0, 1, 2, 3].map((k) => (
        <g key={k}>
          <rect x={x + k * 16} y={y + 6} width={14} height={34} rx={2} fill={["#F97316", "#FB923C", "#F97316", "#FB923C"][k]} />
          <rect x={x + k * 16 + 2} y={y + 16} width={10} height={10} rx={2} fill="white" opacity={0.8} />
          <path d={`M${x + k * 16 + 10} ${y + 6} v -8 l 4 -3`} stroke="#64748B" strokeWidth={1.6} fill="none" />
        </g>
      ))}
    </g>
  );
}

export const multiplication: Explainer = {
  id: "multiplication-equal-groups",
  title: "Times means equal groups",
  tagline: "3 × 4 is three plates with four cookies on each: equal groups, counted fast.",
  area: "Maths",
  ages: "6–8",
  lessons: ["math-magic/multiplication/equal-groups", "math-magic/multiplication/times-table-tricks", "number-land/hop-and-skip/skip-counting"],
  color: C,
  icon: "🍪",
  watch: [
    { title: "Three plates", say: "Here are three plates.", scene: <CookieScene stage={0} /> },
    { title: "Four on each plate", say: "Put four cookies on each plate. Every plate gets the same.", scene: <CookieScene stage={1} /> },
    { title: "Count by fours", say: "Count plate by plate. Four, eight, twelve!", scene: <CookieScene stage={2} /> },
    { title: "3 groups of 4", say: "Three groups of four is twelve. We write three times four equals twelve.", scene: <CookieScene stage={3} /> },
    { title: "Make an array", say: "Line the cookies up in rows. Three rows of four. That's called an array.", scene: <CookieScene stage={4} /> },
    { title: "Turn it round", say: "Turn the array. Now it's four rows of three. Still twelve!", scene: <CookieScene stage={5} /> },
  ],
  mission,
  misconception: {
    myth: "3 × 4 means 3 + 4, so it is 7.",
    truth: "3 × 4 means 3 groups of 4. That makes 12.",
  },
  story,
  like: {
    headline: "Multiplying is like buying juice in packs.",
    everyday: {
      label: "3 packs of 4 juice boxes",
      art: (
        <Panel label="Three packs of four juice boxes">
          <JuicePack x={14} y={52} />
          <JuicePack x={88} y={52} />
          <JuicePack x={162} y={52} />
        </Panel>
      ),
    },
    concept: {
      label: "3 × 4 = 12",
      art: (
        <Panel label="An array of three rows of four dots, three times four equals twelve">
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={60 + c * 26} cy={36 + r * 26} r={9} fill={C} />),
          )}
          <T x={120} y={124} size={28} color={C}>
            3 × 4 = 12
          </T>
        </Panel>
      ),
    },
    pairs: [
      ["How many packs", "The number of groups (3)"],
      ["Juice boxes in each pack", "How many in each group (4)"],
      ["Every pack holds the same", "The groups must be equal"],
      ["All the juice boxes", "The answer, called the product (12)"],
    ],
    limits: "Packs only come in whole numbers, but later you'll multiply things like 2½ × 3 or make a picture 2 times bigger, where there are no packs to count.",
  },
};
