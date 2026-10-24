"use client";

import { motion } from "framer-motion";
import type { Explainer, Mission } from "../types";
import { Badge, Bird, Cookie, Emo, Panel, Plate, Stage, T, TapStep, pop, rise } from "./_kit";

const C = "#E11D48";
const BIRDS = [80, 140, 200, 260, 320];
const BIRD_COLORS = ["#38BDF8", "#A78BFA", "#34D399", "#FBBF24", "#F472B6"];
const WIRE_Y = (x: number) => 118 + Math.sin((x / 400) * Math.PI) * 14;

/* ------------------------------------------------------------------ */
/* Watch: birds fly away                                               */
/* ------------------------------------------------------------------ */

function Wire() {
  return (
    <g>
      <rect x={4} y={92} width={10} height={168} rx={3} fill="#A16207" />
      <rect x={386} y={92} width={10} height={168} rx={3} fill="#A16207" />
      <path d="M9 118 Q 200 146 391 118" stroke="#334155" strokeWidth={3} fill="none" />
      <circle cx={340} cy={40} r={20} fill="#FDE047" opacity={0.9} />
    </g>
  );
}

function BirdScene({ arrive, flyAway, gone, count, eq }: { arrive?: boolean; flyAway?: boolean; gone?: boolean; count?: boolean; eq?: boolean }) {
  return (
    <Stage label={`${gone || flyAway ? "Two birds fly away from the wire, three birds stay" : "Five birds sit on a wire"}${eq ? ". Five take away two equals three." : ""}`}>
      <Wire />
      {BIRDS.map((x, i) => {
        const y = WIRE_Y(x) - 16;
        const leaves = i >= 3;
        if (leaves && gone) {
          return (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <ellipse cx={x} cy={y} rx={16} ry={13} fill="none" stroke="#94A3B8" strokeWidth={2.5} strokeDasharray="5 4" />
            </motion.g>
          );
        }
        if (leaves && flyAway) {
          return (
            <motion.g key={i} initial={{ x, y }} animate={{ x: [x, x + 30, x + 120], y: [y, y - 60, y - 170], opacity: [1, 1, 0] }} transition={{ duration: 2.2, delay: 0.6 + (i - 3) * 0.5, ease: "easeIn" }}>
              <Bird x={0} y={0} color={BIRD_COLORS[i]} flap />
            </motion.g>
          );
        }
        return (
          <motion.g key={i} {...(arrive ? { initial: { x: x - 160, y: y - 120, opacity: 0 }, animate: { x, y, opacity: 1 }, transition: { duration: 1, delay: i * 0.35, ease: "easeOut" } } : { initial: { x, y }, animate: { x, y } })}>
            <Bird x={0} y={0} color={BIRD_COLORS[i]} />
          </motion.g>
        );
      })}
      {flyAway && (
        <motion.g {...pop(2.8)}>
          <T x={200} y={210} size={28} color={C}>
            Bye-bye!
          </T>
        </motion.g>
      )}
      {count && BIRDS.slice(0, 3).map((x, i) => <Badge key={i} x={x} y={WIRE_Y(x) - 52} n={i + 1} color={C} delay={0.4 + i * 0.7} />)}
      {eq && (
        <motion.g {...rise(0.3)}>
          <rect x={95} y={180} width={210} height={62} rx={20} fill="white" stroke={C} strokeWidth={3} />
          <T x={130} y={212} size={40}>
            5
          </T>
          <T x={165} y={210} size={38} color={C}>
            −
          </T>
          <T x={200} y={212} size={40} color="#94A3B8">
            2
          </T>
          <T x={235} y={210} size={36}>
            =
          </T>
          <T x={272} y={212} size={40} color={C}>
            3
          </T>
        </motion.g>
      )}
    </Stage>
  );
}

/** "Draw it": five circles, cross out two, count the rest. */
function DrawScene() {
  return (
    <Stage label="Five circles are drawn, two are crossed out, three are left">
      <rect x={30} y={40} width={340} height={180} rx={14} fill="#FFFDF5" stroke="#E2E8F0" strokeWidth={2} />
      {[60, 80, 100, 120, 140, 160, 180, 200].map((y) => (
        <line key={y} x1={40} x2={360} y1={y + 20} y2={y + 20} stroke="#DBEAFE" strokeWidth={1.5} />
      ))}
      {BIRDS.map((x, i) => (
        <motion.circle key={i} cx={x} cy={120} r={22} fill="none" stroke="#1E3A8A" strokeWidth={4} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: i * 0.35 }} />
      ))}
      {[3, 4].map((i, k) => (
        <motion.path key={i} d={`M${BIRDS[i] - 26} ${94} L ${BIRDS[i] + 26} ${146} M ${BIRDS[i] + 26} 94 L ${BIRDS[i] - 26} 146`} stroke={C} strokeWidth={6} strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 2.1 + k * 0.6 }} />
      ))}
      {[0, 1, 2].map((i) => (
        <Badge key={i} x={BIRDS[i]} y={174} n={i + 1} color="#16A34A" delay={3.6 + i * 0.5} />
      ))}
      <motion.g {...pop(5.2)}>
        <T x={200} y={22} size={26} color={C}>
          5 − 2 = 3
        </T>
      </motion.g>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Guided mission                                                      */
/* ------------------------------------------------------------------ */

const mission: Mission = {
  goal: "Some birds fly away. Find out how many are left!",
  steps: [
    {
      task: "Make 2 birds fly away.",
      predict: { question: "2 birds fly away. Will there be more birds, or fewer?", options: ["🐦🐦🐦🐦🐦🐦🐦 More", "🐦🐦🐦 Fewer"], answer: 1, trap: 0 },
      scene: (api) => <TapStep api={api} color={C} button="👋 Fly away!" render={(on) => <BirdScene flyAway={on} />} />,
      hint: "Tap the big red button.",
      explain: "Two birds flew away. **Taking away** makes the group smaller.",
    },
    {
      task: "Count the birds that are left.",
      predict: { question: "How many birds are left on the wire?", options: ["🐦🐦 2", "🐦🐦🐦 3"], answer: 1, trap: 0 },
      scene: (api) => <TapStep api={api} color={C} button="👆 Count!" render={(on) => <BirdScene gone count={on} eq={on} />} />,
      explain: "1, 2, 3. Three birds are left. Five take away two is three: **5 − 2 = 3**.",
    },
  ],
  takeaway: "Start with some, take some away, and count what is left.",
};

/* ------------------------------------------------------------------ */
/* Story + analogy art                                                 */
/* ------------------------------------------------------------------ */

function Pond({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <Panel label={label}>
      <rect x={0} y={108} width={240} height={42} fill="#7DD3FC" />
      <path d="M0 110 q 30 -6 60 0 t 60 0 t 60 0 t 60 0" stroke="white" strokeWidth={2} fill="none" opacity={0.6} />
      <rect x={30} y={92} width={180} height={22} rx={11} fill="#92400E" />
      <circle cx={42} cy={103} r={7} fill="#B45309" />
      {children}
    </Panel>
  );
}

const FROGS = [55, 88, 121, 154, 187];

const story = [
  {
    art: (
      <Pond label="Five frogs sit on a log">
        {FROGS.map((x) => (
          <Emo key={x} x={x} y={78} size={28}>
            🐸
          </Emo>
        ))}
      </Pond>
    ),
    speech: "We are 5 frogs!",
    caption: "Five frogs sit on a log.",
  },
  {
    art: (
      <Pond label="Two frogs jump off the log into the water with a splash">
        {FROGS.slice(0, 3).map((x) => (
          <Emo key={x} x={x} y={78} size={28}>
            🐸
          </Emo>
        ))}
        <path d="M154 70 q 20 -40 40 40 M187 70 q 14 -36 34 40" stroke="#94A3B8" strokeWidth={2} strokeDasharray="4 4" fill="none" />
        <Emo x={196} y={50} size={24}>
          🐸
        </Emo>
        <Emo x={222} y={122} size={22}>
          💦
        </Emo>
        <Emo x={196} y={126} size={22}>
          💦
        </Emo>
      </Pond>
    ),
    speech: "Splash!",
    caption: "Two frogs jump into the pond.",
  },
  {
    art: (
      <Pond label="Three frogs are left on the log, counted one, two, three">
        {FROGS.slice(0, 3).map((x, i) => (
          <g key={x}>
            <Emo x={x} y={78} size={28}>
              🐸
            </Emo>
            <Badge x={x} y={50} n={i + 1} r={10} color={C} />
          </g>
        ))}
        <Emo x={180} y={130} size={20}>
          🐸
        </Emo>
        <Emo x={214} y={132} size={20}>
          🐸
        </Emo>
      </Pond>
    ),
    speech: "3 are left!",
    caption: "Count the frogs still on the log: one, two, three.",
  },
  {
    art: (
      <Panel label="Five take away two equals three, shown with frogs">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} opacity={i >= 3 ? 0.35 : 1}>
            <Emo x={36 + i * 42} y={58} size={30}>
              🐸
            </Emo>
            {i >= 3 && <path d={`M${36 + i * 42 - 16} 42 l 32 32 M${36 + i * 42 + 16} 42 l -32 32`} stroke={C} strokeWidth={4} strokeLinecap="round" />}
          </g>
        ))}
        <T x={120} y={118} size={36} color={C}>
          5 − 2 = 3
        </T>
      </Panel>
    ),
    caption: "Five take away two leaves three: 5 − 2 = 3.",
  },
];

export const subtraction: Explainer = {
  id: "subtraction-take-away",
  title: "Subtracting is taking away",
  tagline: "Start with some, take some away, count what is left.",
  area: "Maths",
  ages: "4–7",
  lessons: ["number-land/add-and-subtract/taking-away", "number-land/more-or-less/one-more-one-less"],
  color: C,
  icon: "➖",
  watch: [
    { title: "Five birds", say: "Five little birds sit on a wire.", scene: <BirdScene arrive /> },
    { title: "Two fly away", say: "Two birds fly away. Bye-bye, birds!", scene: <BirdScene flyAway /> },
    { title: "How many are left?", say: "Count the birds still on the wire. One, two, three.", scene: <BirdScene gone count /> },
    { title: "5 − 2 = 3", say: "Five take away two leaves three. We write five minus two equals three.", scene: <BirdScene gone eq /> },
    { title: "Draw it yourself", say: "You can draw it too. Draw five. Cross out two. Count what is left.", scene: <DrawScene /> },
  ],
  mission,
  misconception: {
    myth: "The answer is how many went away.",
    truth: "The answer is how many are left. 5 birds, 2 fly away: 3 are left.",
  },
  story,
  like: {
    headline: "Taking away is like eating cookies from a plate.",
    everyday: {
      label: "Eat 2 of the 5 cookies",
      art: (
        <Panel label="A plate with three cookies left and crumbs where two were eaten">
          <Plate x={120} y={98} rx={100} ry={36} />
          {[60, 90, 120].map((x) => (
            <Cookie key={x} x={x} y={95} r={14} />
          ))}
          {[150, 180].map((x) => (
            <g key={x}>
              <circle cx={x} cy={95} r={14} fill="none" stroke="#D6A15E" strokeDasharray="3 3" strokeWidth={2} />
              <circle cx={x - 3} cy={97} r={1.6} fill="#B9772F" />
              <circle cx={x + 4} cy={92} r={1.4} fill="#B9772F" />
            </g>
          ))}
          <Emo x={208} y={36} size={34}>
            😋
          </Emo>
        </Panel>
      ),
    },
    concept: {
      label: "5 − 2 = 3",
      art: (
        <Panel label="Five dots with two crossed out, five minus two equals three">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <circle cx={40 + i * 40} cy={60} r={13} fill={i >= 3 ? "#FECDD3" : C} />
              {i >= 3 && <path d={`M${40 + i * 40 - 14} 46 l 28 28 M${40 + i * 40 + 14} 46 l -28 28`} stroke="#1c2333" strokeWidth={3} strokeLinecap="round" />}
            </g>
          ))}
          <T x={120} y={114} size={34} color={C}>
            5 − 2 = 3
          </T>
        </Panel>
      ),
    },
    pairs: [
      ["Cookies on the plate at the start", "The first number (5)"],
      ["Cookies you eat", "The number you take away (2)"],
      ["Eating them", "The − (minus) sign"],
      ["Cookies left on the plate", "The answer (3)"],
    ],
    limits: "Subtracting can also mean comparing (\"how many more does Sam have?\") where nothing gets eaten. And later you'll meet sums like 3 − 5 that go below zero, which no plate of cookies can show.",
  },
};
