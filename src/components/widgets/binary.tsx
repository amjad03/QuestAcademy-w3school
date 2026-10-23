"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, RotateCcw, Trophy } from "lucide-react";
import { Readout, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const PLACES = [128, 64, 32, 16, 8, 4, 2, 1];

export default function Binary() {
  const t = useT();
  const [value, setValue] = useState(0);
  const [target, setTarget] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streakDone, setStreakDone] = useState(false);
  const inputId = useId();

  const toggle = (place: number) => setValue((v) => v ^ place);
  const solved = target !== null && value === target;

  useEffect(() => {
    if (solved && !streakDone) {
      setScore((s) => s + 1);
      setStreakDone(true);
    }
  }, [solved, streakDone]);

  const nextChallenge = () => {
    let next = 1 + Math.floor(Math.random() * 255);
    if (next === value) next = (next + 37) % 256 || 1;
    setTarget(next);
    setValue(0);
    setStreakDone(false);
  };

  const bits = value.toString(2).padStart(8, "0");
  const hex = value.toString(16).toUpperCase().padStart(2, "0");
  const sum = PLACES.filter((p) => value & p);

  return (
    <div>
      <WidgetTitle
        title={t("widget.binary.title", "Binary bits")}
        hint={t("widget.binary.hint", "Each switch is a bit. Turn bits on to add up their place values.")}
        right={
          <div className="flex items-center gap-2">
            {target !== null && (
              <span className="chip !text-warn">
                <Trophy size={12} /> {score}
              </span>
            )}
            <button type="button" onClick={target === null ? nextChallenge : () => setTarget(null)} className={target === null ? "btn-pop !px-4 !py-2" : "btn-ghost !px-4 !py-2"}>
              {target === null ? t("widget.binary.challengeMode", "Challenge mode") : t("widget.binary.freePlay", "Free play")}
            </button>
          </div>
        }
      />

      <AnimatePresence>
        {target !== null && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className={`mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3 ${solved ? "border-good/40 bg-good/10" : "border-accent/30 bg-accent/10"}`} aria-live="polite">
              <span className="font-semibold text-ink">
                {solved ? (
                  <span className="flex items-center gap-1 text-good">
                    <Check size={18} /> {t("widget.binary.correct", "Correct!")} {target} = {target.toString(2).padStart(8, "0")}
                  </span>
                ) : (
                  <>
                    {t("widget.binary.makeNumber", "Make the number")} <span className="font-mono text-2xl text-accent">{target}</span>
                  </>
                )}
              </span>
              {solved && (
                <button type="button" onClick={nextChallenge} className="btn-primary !py-1.5">
                  {t("widget.next", "Next")}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-8 gap-1.5 sm:gap-3">
        {PLACES.map((place, i) => {
          const on = (value & place) !== 0;
          return (
            <div key={place} className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] text-muted sm:text-xs">2^{7 - i}</span>
              <motion.button
                type="button"
                role="switch"
                aria-checked={on}
                aria-label={t("widget.binary.bitWorth", "Bit worth {n}", { n: place })}
                onClick={() => toggle(place)}
                whileTap={{ scale: 0.88 }}
                className={`relative flex h-16 w-full max-w-[56px] items-center justify-center rounded-2xl border-2 font-mono text-2xl font-black transition-colors sm:h-20 ${
                  on ? "border-accent bg-accent text-white" : "border-line bg-surface-2 text-muted"
                }`}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span key={on ? 1 : 0} initial={{ rotateX: 90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} exit={{ rotateX: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    {on ? 1 : 0}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
              <span className={`font-mono text-xs font-bold sm:text-sm ${on ? "text-accent" : "text-muted"}`}>{place}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl bg-surface-2 p-3 text-center font-mono text-sm text-muted" aria-live="polite">
        {sum.length ? (
          <>
            {sum.join(" + ")} = <span className="font-bold text-ink">{value}</span>
          </>
        ) : (
          t("widget.binary.allOff", "All bits off = 0")
        )}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label={t("widget.binary.binary", "Binary")} value={<span className="tracking-widest">{bits}</span>} />
        <Readout label={t("widget.binary.decimal", "Decimal")} value={value} />
        <Readout label={t("widget.binary.hex", "Hex")} value={`0x${hex}`} />
      </div>

      {target === null && (
        <div className="mt-3 flex items-center gap-2">
          <label htmlFor={inputId} className="shrink-0 text-sm font-medium text-muted">
            {t("widget.binary.typeNumber", "Type a number (0–255)")}
          </label>
          <input
            id={inputId}
            type="number"
            min={0}
            max={255}
            value={value}
            onChange={(e) => {
              const n = Math.round(Number(e.target.value));
              if (Number.isFinite(n)) setValue(Math.min(255, Math.max(0, n)));
            }}
            className="input !py-1.5 font-mono"
          />
          <button type="button" className="btn-ghost !px-3" aria-label={t("widget.binary.resetZero", "Reset to zero")} onClick={() => setValue(0)}>
            <RotateCcw size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
