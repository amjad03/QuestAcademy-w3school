"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, Plus, Target } from "lucide-react";
import { svgPoint, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type TFn = ReturnType<typeof useT>;

/** Time is stored as minutes since 12:00 (0..719). */
const DAY = 720;
const wrap = (m: number) => ((m % DAY) + DAY) % DAY;

function label(m: number) {
  const h = Math.floor(m / 60) || 12;
  const mm = m % 60;
  return `${h}:${String(mm).padStart(2, "0")}`;
}

function words(m: number, t: TFn) {
  const h = Math.floor(m / 60) || 12;
  const mm = m % 60;
  const next = (h % 12) + 1;
  if (mm === 0) return t("widget.clock.oclock", "{h} o'clock", { h });
  if (mm === 15) return t("widget.clock.quarterPast", "quarter past {h}", { h });
  if (mm === 30) return t("widget.clock.halfPast", "half past {h}", { h });
  if (mm === 45) return t("widget.clock.quarterTo", "quarter to {h}", { h: next });
  if (mm < 30) return mm === 1 ? t("widget.clock.minutePast.one", "{n} minute past {h}", { n: mm, h }) : t("widget.clock.minutePast.other", "{n} minutes past {h}", { n: mm, h });
  return 60 - mm === 1 ? t("widget.clock.minuteTo.one", "{n} minute to {h}", { n: 60 - mm, h: next }) : t("widget.clock.minuteTo.other", "{n} minutes to {h}", { n: 60 - mm, h: next });
}

const TARGETS = [210, 60, 270, 525, 15, 405, 345, 600, 495, 165, 690, 120];

export default function Clock() {
  const t = useT();
  const [time, setTime] = useState(180); // 3:00
  const [target, setTarget] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef<"hour" | "minute" | null>(null);
  const lastMin = useRef(0);

  const solved = target !== null && time === target;
  useEffect(() => {
    if (solved) setScore((s) => s + 1);
  }, [solved]);

  const startChallenge = () => {
    let next = TARGETS[Math.floor(Math.random() * TARGETS.length)];
    if (next === time) next = wrap(next + 75);
    setTarget(next);
  };

  const minuteAngle = (time % 60) * 6;
  const hourAngle = (time / 60) * 30;

  const angleFrom = (clientX: number, clientY: number) => {
    const { x, y } = svgPoint(svgRef.current, clientX, clientY);
    const a = (Math.atan2(x - 100, -(y - 100)) * 180) / Math.PI;
    return (a + 360) % 360;
  };

  const onDown = (hand: "hour" | "minute") => (e: React.PointerEvent<SVGElement>) => {
    e.preventDefault();
    dragging.current = hand;
    lastMin.current = time % 60;
    svgRef.current?.setPointerCapture(e.pointerId);
  };

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!dragging.current) return;
    const a = angleFrom(e.clientX, e.clientY);
    if (dragging.current === "minute") {
      const m = Math.round(a / 6) % 60;
      setTime((cur) => {
        const prev = cur % 60;
        let hourBase = cur - prev;
        // crossing 12 forwards / backwards moves the hour
        if (prev > 45 && m < 15) hourBase += 60;
        else if (prev < 15 && m > 45) hourBase -= 60;
        return wrap(hourBase + m);
      });
    } else {
      // hour hand: snap to 5-minute steps for kid-friendliness
      const total = Math.round((a / 30) * 12) * 5;
      setTime(wrap(total));
    }
  };

  const onUp = (e: React.PointerEvent<SVGSVGElement>) => {
    dragging.current = null;
    if (svgRef.current?.hasPointerCapture(e.pointerId)) svgRef.current.releasePointerCapture(e.pointerId);
  };

  const step = (d: number) => setTime((cur) => wrap(cur + d));

  return (
    <div>
      <WidgetTitle
        title={t("widget.clock.title", "Tell the time")}
        hint={t("widget.clock.hint", "Drag the hands or use the buttons.")}
        right={
          <button type="button" onClick={startChallenge} className="btn-pop !px-4 !py-2">
            <Target size={16} /> {t("widget.clock.challenge", "Challenge")}
          </button>
        }
      />

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
        <svg
          ref={svgRef}
          viewBox="0 0 200 200"
          className="w-full max-w-[280px] select-none"
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          style={{ touchAction: "none" }}
          role="img"
          aria-label={t("widget.clock.showing", "Clock showing {time}", { time: label(time) })}
        >
          <circle cx="100" cy="100" r="94" fill="rgb(var(--surface))" stroke="rgb(var(--accent))" strokeWidth="6" />
          <circle cx="100" cy="100" r="86" fill="rgb(var(--surface-2))" />
          {Array.from({ length: 60 }, (_, i) => {
            const a = (i * 6 * Math.PI) / 180;
            const big = i % 5 === 0;
            const r1 = big ? 74 : 79;
            return (
              <line
                key={i}
                x1={100 + Math.sin(a) * r1}
                y1={100 - Math.cos(a) * r1}
                x2={100 + Math.sin(a) * 84}
                y2={100 - Math.cos(a) * 84}
                stroke="rgb(var(--muted))"
                strokeWidth={big ? 2.5 : 1}
                strokeLinecap="round"
              />
            );
          })}
          {Array.from({ length: 12 }, (_, i) => {
            const n = i + 1;
            const a = (n * 30 * Math.PI) / 180;
            return (
              <text key={n} x={100 + Math.sin(a) * 62} y={100 - Math.cos(a) * 62} textAnchor="middle" dominantBaseline="central" fontSize="15" fontWeight="800" fill="rgb(var(--ink))">
                {n}
              </text>
            );
          })}
          {/* hour hand */}
          <g transform={`rotate(${hourAngle} 100 100)`} onPointerDown={onDown("hour")} style={{ cursor: "grab" }}>
            <line x1="100" y1="100" x2="100" y2="55" stroke="transparent" strokeWidth="22" />
            <line x1="100" y1="108" x2="100" y2="55" stroke="rgb(var(--ink))" strokeWidth="7" strokeLinecap="round" />
          </g>
          {/* minute hand */}
          <g transform={`rotate(${minuteAngle} 100 100)`} onPointerDown={onDown("minute")} style={{ cursor: "grab" }}>
            <line x1="100" y1="100" x2="100" y2="22" stroke="transparent" strokeWidth="22" />
            <line x1="100" y1="112" x2="100" y2="24" stroke="rgb(var(--accent))" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="100" cy="24" r="5" fill="rgb(var(--accent))" />
          </g>
          <circle cx="100" cy="100" r="6" fill="rgb(var(--accent-2))" />
        </svg>

        <div className="flex w-full max-w-xs flex-col items-center gap-4">
          <div className="w-full rounded-3xl bg-ink/90 px-6 py-4 text-center" aria-live="polite">
            <div className="font-mono text-5xl font-bold tracking-wider text-bg">{label(time)}</div>
            <div className="mt-1 text-sm font-medium text-bg/70">{words(time, t)}</div>
          </div>
          <div className="grid w-full grid-cols-2 gap-2">
            <div className="flex items-center justify-between rounded-2xl border border-line bg-surface-2 p-1">
              <button type="button" aria-label={t("widget.clock.hourBack", "Hour back")} onClick={() => step(-60)} className="grid h-10 w-10 place-items-center rounded-xl hover:bg-surface active:scale-90">
                <Minus size={16} />
              </button>
              <span className="text-sm font-semibold text-muted">{t("widget.clock.hour", "hour")}</span>
              <button type="button" aria-label={t("widget.clock.hourForward", "Hour forward")} onClick={() => step(60)} className="grid h-10 w-10 place-items-center rounded-xl hover:bg-surface active:scale-90">
                <Plus size={16} />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-line bg-surface-2 p-1">
              <button type="button" aria-label={t("widget.clock.fiveBack", "Five minutes back")} onClick={() => step(-5)} className="grid h-10 w-10 place-items-center rounded-xl hover:bg-surface active:scale-90">
                <Minus size={16} />
              </button>
              <span className="text-sm font-semibold text-muted">5 min</span>
              <button type="button" aria-label={t("widget.clock.fiveForward", "Five minutes forward")} onClick={() => step(5)} className="grid h-10 w-10 place-items-center rounded-xl hover:bg-surface active:scale-90">
                <Plus size={16} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {target !== null && (
              <motion.div
                key={`${target}-${solved}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`w-full rounded-2xl border p-3 text-center text-sm font-semibold ${
                  solved ? "border-good/40 bg-good/10 text-good" : "border-accent/30 bg-accent/10 text-ink"
                }`}
                aria-live="polite"
              >
                {solved ? (
                  <span className="flex flex-col items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Check size={16} /> {t("widget.clock.solved", "Brilliant! That's {time}. Score: {score}", { time: label(target), score })}
                    </span>
                    <button type="button" onClick={startChallenge} className="btn-primary !py-1.5">
                      {t("widget.clock.nextTime", "Next time")}
                    </button>
                  </span>
                ) : (
                  <>
                    {t("widget.clock.setTo", "Set the clock to")} <span className="font-mono text-lg text-accent">{label(target)}</span>
                    <div className="text-xs font-normal text-muted">({words(target, t)})</div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
