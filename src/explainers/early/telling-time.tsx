"use client";

import { useMemo, useRef, useState } from "react";
import { motion, type Transition } from "framer-motion";
import type { Explainer } from "../types";
import { say } from "@/lib/voice";
import { svgPoint } from "@/components/widgets/_shared";
import { Emo, Kid, Panel, Stage, T, TryFrame, pop, rand, rise, type Status } from "./_kit";

const C = "#0284C7";
const HOUR = "#E11D48";
const MIN = "#2563EB";

/* ------------------------------------------------------------------ */
/* Clock parts                                                         */
/* ------------------------------------------------------------------ */

/**
 * A hand that rotates about the clock centre. An invisible circle the size
 * of the hand keeps the group's box centred on (cx, cy), so framer's rotate
 * spins around the middle of the clock.
 */
function Hand({ cx, cy, len, w, color, angle, from, transition, grow }: { cx: number; cy: number; len: number; w: number; color: string; angle: number; from?: number; transition?: Transition; grow?: number }) {
  return (
    <motion.g initial={{ rotate: from ?? angle, opacity: grow === undefined ? 1 : 0 }} animate={{ rotate: angle, opacity: 1 }} transition={{ ...(transition ?? { duration: 0 }), opacity: { delay: grow ?? 0, duration: 0.3 } }}>
      <circle cx={cx} cy={cy} r={len + w + 3} fill="none" />
      <line x1={cx} y1={cy + len * 0.15} x2={cx} y2={cy - len} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <path d={`M${cx - w * 0.9} ${cy - len + w * 1.4} L ${cx} ${cy - len - w * 0.8} L ${cx + w * 0.9} ${cy - len + w * 1.4} Z`} fill={color} />
    </motion.g>
  );
}

function Face({ cx, cy, r, numbersDelay, mark, shadeHalf }: { cx: number; cy: number; r: number; numbersDelay?: number; mark?: number; shadeHalf?: boolean }) {
  return (
    <g>
      <circle cx={cx} cy={cy + 4} r={r + 6} fill="rgba(0,0,0,.08)" />
      <circle cx={cx} cy={cy} r={r + 6} fill="#38BDF8" />
      <circle cx={cx} cy={cy} r={r} fill="white" />
      {shadeHalf && <motion.path d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} Z`} fill="#DBEAFE" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />}
      {Array.from({ length: 60 }, (_, k) => {
        const a = (k / 60) * Math.PI * 2;
        const big = k % 5 === 0;
        return <line key={k} x1={cx + Math.sin(a) * r * (big ? 0.9 : 0.94)} y1={cy - Math.cos(a) * r * (big ? 0.9 : 0.94)} x2={cx + Math.sin(a) * r * 0.98} y2={cy - Math.cos(a) * r * 0.98} stroke="#94A3B8" strokeWidth={big ? 2.5 : 1} />;
      })}
      {Array.from({ length: 12 }, (_, k) => {
        const n = k + 1;
        const a = (n / 12) * Math.PI * 2;
        const x = cx + Math.sin(a) * r * 0.79;
        const y = cy - Math.cos(a) * r * 0.79;
        return (
          <motion.g key={n} {...(numbersDelay !== undefined ? pop(numbersDelay + k * 0.18) : {})}>
            {mark === n && <motion.circle cx={x} cy={y} r={r * 0.15} fill="#FECDD3" {...pop(0.9)} />}
            <T x={x} y={y + 1} size={r * 0.19}>
              {n}
            </T>
          </motion.g>
        );
      })}
    </g>
  );
}

function Pin({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r={6} fill="#1c2333" />;
}

/** Small static clock for comics and the "your day" scene. */
function MiniClock({ cx, cy, r, h, m = 0 }: { cx: number; cy: number; r: number; h: number; m?: number }) {
  return (
    <g>
      <Face cx={cx} cy={cy} r={r} />
      <g transform={`rotate(${(h % 12) * 30 + m * 0.5} ${cx} ${cy})`}>
        <line x1={cx} y1={cy} x2={cx} y2={cy - r * 0.42} stroke={HOUR} strokeWidth={r * 0.1} strokeLinecap="round" />
      </g>
      <g transform={`rotate(${m * 6} ${cx} ${cy})`}>
        <line x1={cx} y1={cy} x2={cx} y2={cy - r * 0.64} stroke={MIN} strokeWidth={r * 0.06} strokeLinecap="round" />
      </g>
      <circle cx={cx} cy={cy} r={r * 0.07} fill="#1c2333" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Watch                                                               */
/* ------------------------------------------------------------------ */

const K = { cx: 200, cy: 130, r: 96 };

function TimeTag({ text, sub, delay = 0 }: { text: string; sub: string; delay?: number }) {
  return (
    <motion.g {...pop(delay)}>
      <rect x={312} y={18} width={82} height={58} rx={14} fill="#1c2333" />
      <T x={353} y={42} size={24} color="#A7F3D0" style={{ fontFamily: "ui-monospace, monospace" }}>
        {text}
      </T>
      <T x={353} y={64} size={11} color="#E2E8F0" weight={800}>
        {sub}
      </T>
    </motion.g>
  );
}

function Label({ x, y, text, color, delay }: { x: number; y: number; text: string; color: string; delay: number }) {
  return (
    <motion.g {...pop(delay)}>
      <rect x={x - 46} y={y - 15} width={92} height={30} rx={15} fill={color} />
      <T x={x} y={y + 1} size={13} color="white">
        {text}
      </T>
    </motion.g>
  );
}

type ClockStage = "face" | "hour" | "three" | "sweep" | "half";

function ClockScene({ stage }: { stage: ClockStage }) {
  const hourAngle = stage === "sweep" ? 120 : stage === "half" ? 135 : 90;
  const label = {
    face: "A clock face with the numbers 1 to 12",
    hour: "The short hand points to 3",
    three: "Short hand on 3, long hand on 12: three o'clock",
    sweep: "The long hand goes all the way round while the short hand moves from 3 to 4: four o'clock",
    half: "The long hand points to 6, half way round: half past four",
  }[stage];
  return (
    <Stage label={label}>
      <Face {...K} numbersDelay={stage === "face" ? 0.2 : undefined} mark={stage === "hour" ? 3 : undefined} shadeHalf={stage === "half"} />
      {stage !== "face" && <Hand {...K} len={K.r * 0.4} w={11} color={HOUR} angle={hourAngle} from={stage === "sweep" ? 90 : stage === "half" ? 120 : undefined} grow={stage === "hour" ? 0.3 : undefined} transition={stage === "sweep" ? { duration: 4, ease: "linear", delay: 0.6 } : stage === "half" ? { duration: 2, ease: "linear", delay: 0.6 } : undefined} />}
      {(stage === "three" || stage === "sweep" || stage === "half") && <Hand {...K} len={K.r * 0.6} w={7} color={MIN} angle={stage === "sweep" ? 360 : stage === "half" ? 180 : 0} from={stage === "three" ? undefined : 0} grow={stage === "three" ? 0.3 : undefined} transition={stage === "sweep" ? { duration: 4, ease: "linear", delay: 0.6 } : stage === "half" ? { duration: 2, ease: "linear", delay: 0.6 } : undefined} />}
      {stage !== "face" && <Pin cx={K.cx} cy={K.cy} />}
      {stage === "hour" && <Label x={56} y={130} text="short hand" color={HOUR} delay={0.8} />}
      {stage === "hour" && <Label x={56} y={170} text="= hour" color={HOUR} delay={1.2} />}
      {stage === "three" && (
        <>
          <Label x={56} y={110} text="long hand" color={MIN} delay={0.8} />
          <Label x={56} y={150} text="= minutes" color={MIN} delay={1.1} />
          <TimeTag text="3:00" sub="3 o'clock" delay={1.6} />
        </>
      )}
      {stage === "sweep" && <TimeTag text="4:00" sub="4 o'clock" delay={4.8} />}
      {stage === "half" && <TimeTag text="4:30" sub="half past 4" delay={2.8} />}
    </Stage>
  );
}

function DayScene() {
  const items: { h: number; e: string; x: number }[] = [
    { h: 7, e: "🥣", x: 70 },
    { h: 12, e: "🥪", x: 200 },
    { h: 8, e: "🛏️", x: 330 },
  ];
  return (
    <Stage label="Three clocks: 7 o'clock breakfast, 12 o'clock lunch, 8 o'clock bedtime">
      {items.map((it, i) => (
        <motion.g key={it.h} {...rise(0.2 + i * 0.5)}>
          <MiniClock cx={it.x} cy={100} r={52} h={it.h} />
          <Emo x={it.x} y={190} size={40}>
            {it.e}
          </Emo>
          <T x={it.x} y={236} size={18}>
            {`${it.h} o'clock`}
          </T>
        </motion.g>
      ))}
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/* Try: drag the hands                                                 */
/* ------------------------------------------------------------------ */

const TK = { cx: 150, cy: 150, r: 124 };

function words(total: number) {
  const h = Math.floor(total / 60) % 12 || 12;
  const m = total % 60;
  return m === 0 ? `${h} o'clock` : m === 30 ? `half past ${h}` : `${h}:${String(m).padStart(2, "0")}`;
}

function TimeTry() {
  const [round, setRound] = useState(0);
  const target = useMemo(() => {
    let t = 0;
    while (t === 0) t = (rand(1, 12) % 12) * 60 + (Math.random() < 0.5 ? 0 : 30);
    return t;
  }, [round]);
  const [total, setTotal] = useState(0); // minutes after 12:00, 0..719
  const svg = useRef<SVGSVGElement>(null);
  const status: Status = total === target ? "good" : "play";
  const done = useRef(false);

  const angleAt = (clientX: number, clientY: number) => {
    const p = svgPoint(svg.current, clientX, clientY);
    const a = (Math.atan2(p.x - TK.cx, -(p.y - TK.cy)) * 180) / Math.PI;
    return (a + 360) % 360;
  };
  const set = (t: number) => {
    const v = ((t % 720) + 720) % 720;
    setTotal(v);
    if (v === target && !done.current) {
      done.current = true;
      say(`Yes! It's ${words(v)}!`);
    }
  };
  const dragMinute = (cx: number, cy: number) => {
    const m = (Math.round(angleAt(cx, cy) / 30) * 5) % 60;
    setTotal((t) => {
      let d = m - (t % 60);
      if (d > 30) d -= 60;
      if (d < -30) d += 60;
      const v = (((t + d) % 720) + 720) % 720;
      if (v === target && !done.current) {
        done.current = true;
        say(`Yes! It's ${words(v)}!`);
      }
      return v;
    });
  };
  const dragHour = (cx: number, cy: number) => set(Math.round((angleAt(cx, cy) * 2) / 5) * 5);

  const handlers = (fn: (x: number, y: number) => void) => ({
    onPointerDown: (e: React.PointerEvent<SVGGElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    onPointerMove: (e: React.PointerEvent<SVGGElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) fn(e.clientX, e.clientY);
    },
    onPointerUp: (e: React.PointerEvent<SVGGElement>) => e.currentTarget.releasePointerCapture(e.pointerId),
    style: { cursor: "grab", touchAction: "none" as const },
  });

  const another = () => {
    done.current = false;
    setRound((x) => x + 1);
  };

  const ha = total * 0.5;
  const ma = (total % 60) * 6;
  const hand = (angle: number, len: number, w: number, color: string, knob: number) => (
    <g transform={`rotate(${angle} ${TK.cx} ${TK.cy})`}>
      <line x1={TK.cx} y1={TK.cy} x2={TK.cx} y2={TK.cy - len} stroke="transparent" strokeWidth={36} strokeLinecap="round" />
      <line x1={TK.cx} y1={TK.cy + 12} x2={TK.cx} y2={TK.cy - len} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <circle cx={TK.cx} cy={TK.cy - len} r={knob} fill={color} stroke="white" strokeWidth={3} />
    </g>
  );

  return (
    <TryFrame color={C} round={round} status={status} onAnother={another} picture="⏰" prompt={`Drag the hands to make ${words(target)}.`}>
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
        <svg ref={svg} viewBox="0 0 300 300" className="mx-auto block h-auto w-full max-w-[320px]" role="img" aria-label={`Clock showing ${words(total)}. Drag the long blue hand or the short red hand.`}>
          <Face {...TK} />
          <g {...handlers(dragHour)} role="slider" aria-label="Short hour hand" aria-valuetext={words(total)}>
            {hand(ha, TK.r * 0.38, 12, HOUR, 13)}
          </g>
          <g {...handlers(dragMinute)} role="slider" aria-label="Long minute hand" aria-valuetext={words(total)}>
            {hand(ma, TK.r * 0.6, 8, MIN, 15)}
          </g>
          <circle cx={TK.cx} cy={TK.cy} r={8} fill="#1c2333" pointerEvents="none" />
        </svg>
        <div className="flex flex-row items-center justify-center gap-3 sm:flex-col" aria-live="polite">
          <motion.div key={total} initial={{ scale: 1.08 }} animate={{ scale: 1 }} className="rounded-2xl bg-[#1c2333] px-4 py-2 font-mono text-4xl font-black text-[#A7F3D0]">
            {Math.floor(total / 60) % 12 || 12}:{String(total % 60).padStart(2, "0")}
          </motion.div>
          <div className="text-center text-sm font-extrabold">
            <p style={{ color: HOUR }}>● short = hour</p>
            <p style={{ color: MIN }}>● long = minutes</p>
          </div>
        </div>
      </div>
    </TryFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

const story = [
  {
    art: (
      <Panel label="Tom wakes up in bed, the clock shows 7 o'clock">
        <rect x={20} y={104} width={130} height={30} rx={8} fill="#93C5FD" />
        <rect x={20} y={92} width={36} height={20} rx={8} fill="white" />
        <circle cx={44} cy={92} r={14} fill="#F2C29B" />
        <path d="M30 90 q 2 -14 14 -14 q 12 0 14 14 q -6 -6 -14 -6 q -8 0 -14 6z" fill="#4B2E16" />
        <MiniClock cx={190} cy={86} r={36} h={7} />
        <Emo x={190} y={36} size={20}>
          ⏰
        </Emo>
      </Panel>
    ),
    speech: "7 o'clock! Wake up!",
    caption: "The short hand points to 7 and the long hand points to 12. Time to wake up!",
  },
  {
    art: (
      <Panel label="Tom arrives at school, the clock shows 9 o'clock">
        <path d="M110 40 L 170 20 L 230 40 V 140 H 110 Z" fill="#FDE68A" stroke="#B45309" strokeWidth={2} />
        <rect x={155} y={98} width={30} height={42} fill="#B45309" />
        <MiniClock cx={170} cy={60} r={20} h={9} />
        <Kid x={60} y={146} s={0.85} shirt="#2563EB" arms="up" />
      </Panel>
    ),
    speech: "School at 9!",
    caption: "Short hand on 9, long hand on 12: nine o'clock. School starts!",
  },
  {
    art: (
      <Panel label="Lunch time, the clock shows half past twelve">
        <MiniClock cx={64} cy={78} r={44} h={12} m={30} />
        <Emo x={170} y={90} size={44}>
          🥪
        </Emo>
        <Emo x={212} y={110} size={26}>
          🍎
        </Emo>
      </Panel>
    ),
    speech: "Half past 12!",
    caption: "The long hand points down to 6. Half past twelve means lunch!",
  },
  {
    art: (
      <Panel label="Night time, the clock shows 8 o'clock and Tom goes to bed">
        <rect x={0} y={0} width={240} height={150} fill="#1E3A8A" />
        <Emo x={40} y={36} size={26}>
          🌙
        </Emo>
        <Emo x={90} y={24} size={12}>
          ⭐
        </Emo>
        <Emo x={130} y={44} size={10}>
          ⭐
        </Emo>
        <MiniClock cx={180} cy={92} r={40} h={8} />
        <Emo x={70} y={110} size={40}>
          🛏️
        </Emo>
      </Panel>
    ),
    speech: "Goodnight!",
    caption: "Short hand on 8, long hand on 12: eight o'clock. Bedtime!",
  },
];

export const tellingTime: Explainer = {
  id: "telling-time-hands",
  title: "Telling the time: short hand, long hand",
  tagline: "The short hand tells the hour; the long hand goes round once every hour.",
  area: "Maths",
  ages: "5–8",
  lessons: ["math-magic/time-money-measure/telling-time"],
  color: C,
  icon: "🕒",
  watch: [
    { title: "Meet the clock", say: "A clock has the numbers one to twelve, all the way round in a circle.", scene: <ClockScene stage="face" /> },
    { title: "The short hand", say: "The short red hand is the hour hand. It points to the hour. Here it points to three.", scene: <ClockScene stage="hour" /> },
    { title: "The long hand", say: "The long blue hand is the minute hand. When it points straight up to twelve, we say o'clock. Three o'clock!", scene: <ClockScene stage="three" /> },
    { title: "One hour goes by", say: "The long hand goes all the way round, and the short hand moves on to four. Now it's four o'clock!", scene: <ClockScene stage="sweep" /> },
    { title: "Half past", say: "When the long hand points down to six, it has gone half way round. That's half past four.", scene: <ClockScene stage="half" /> },
    { title: "Clocks tell our day", say: "Clocks tell us when it's time for breakfast, lunch and bed!", scene: <DayScene /> },
  ],
  try: TimeTry,
  story,
  like: {
    headline: "The clock hands are like a fast rabbit and a slow turtle running round a track.",
    everyday: {
      label: "Rabbit runs fast, turtle walks slowly",
      art: (
        <Panel label="A round running track with a rabbit near the top and a turtle further along">
          <circle cx={120} cy={75} r={58} fill="none" stroke="#FDBA74" strokeWidth={18} />
          <circle cx={120} cy={75} r={58} fill="none" stroke="white" strokeWidth={1.5} strokeDasharray="6 6" />
          <Emo x={120} y={17} size={24}>
            🐇
          </Emo>
          <Emo x={170} y={46} size={22}>
            🐢
          </Emo>
          <Emo x={120} y={78} size={22}>
            🏁
          </Emo>
        </Panel>
      ),
    },
    concept: {
      label: "Long hand fast, short hand slow",
      art: (
        <Panel label="A clock showing one o'clock">
          <MiniClock cx={120} cy={75} r={60} h={1} />
        </Panel>
      ),
    },
    pairs: [
      ["The rabbit runs all the way round", "The long hand goes round once every hour"],
      ["The turtle only gets to the next number", "The short hand moves one number each hour"],
      ["Where the turtle is", "Which hour it is"],
      ["Where the rabbit is", "How many minutes past the hour"],
    ],
    limits: "On a real clock the hands are joined by gears, so they always move together and the turtle can never run ahead. Also, the numbers mean different things for each hand: for the long hand, 1 means 5 minutes, 2 means 10 minutes, and so on.",
  },
};
