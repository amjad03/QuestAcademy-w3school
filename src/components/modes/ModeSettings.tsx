"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useLearner } from "@/lib/store";
import { MODES, resolveMode, type ModeId } from "@/lib/modes";
import { modeForStage } from "@/lib/modes";
import { say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { ModePicker } from "./ModePicker";

/** Experience-profile switcher. Leaving Explore needs a grown-up check. */
export function ModeSettings() {
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);
  const setSettings = useLearner((s) => s.setSettings);
  const current = resolveMode(profile);
  const [pending, setPending] = useState<ModeId | null>(null);

  const apply = (m: ModeId) => {
    setProfile({ mode: m });
    setSettings({ sound: MODES[m].sound });
    setPending(null);
  };

  const choose = (m: ModeId) => {
    if (m === current) return;
    if (current === "explore") {
      setPending(m);
      say(EXPLORE_LINES.grownUp);
    } else apply(m);
  };

  return (
    <div>
      <ModePicker value={current} recommended={modeForStage(profile.stage)} onChange={choose} />
      <AnimatePresence>{pending && <GrownUpGate onPass={() => apply(pending)} onCancel={() => setPending(null)} />}</AnimatePresence>
    </div>
  );
}

/** Simple parental gate: a multiplication young children can't easily solve. */
export function GrownUpGate({ onPass, onCancel }: { onPass: () => void; onCancel: () => void }) {
  const [a, b] = useMemo(() => [12 + Math.floor(Math.random() * 8), 6 + Math.floor(Math.random() * 7)], []);
  const [v, setV] = useState("");
  const [wrong, setWrong] = useState(false);
  return (
    <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-ink/40 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onCancel}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="card w-full max-w-sm p-6 text-center" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Grown-up check">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-muted">
          <Lock className="h-7 w-7" />
        </span>
        <h2 className="mt-4 text-xl font-black">Grown-ups only</h2>
        <p className="mt-1 text-sm font-semibold text-muted">To change the experience, please answer:</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (Number(v) === a * b) onPass();
            else {
              setWrong(true);
              setV("");
            }
          }}
        >
          <label className="mt-4 block text-2xl font-black" htmlFor="gate">
            {a} × {b} = ?
          </label>
          <input id="gate" autoFocus inputMode="numeric" value={v} onChange={(e) => setV(e.target.value.replace(/\D/g, ""))} className="input mt-3 text-center text-xl" />
          {wrong && <p className="mt-2 text-sm font-bold text-bad">That’s not right — try again.</p>}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <button type="button" className="btn-ghost" onClick={onCancel}>
              Cancel
            </button>
            <button className="btn-primary" disabled={!v}>
              Confirm
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
