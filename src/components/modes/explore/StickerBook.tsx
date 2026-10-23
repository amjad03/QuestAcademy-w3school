"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Volume2, X } from "lucide-react";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { STICKERS, STICKER_SETS, type Sticker } from "./stickers";
import { StickerTile } from "./StickerTile";
import { useT } from "@/i18n";

/** Sticker book: every set, collected stickers in colour, the rest as silhouettes. */
export function StickerBook() {
  const t = useT();
  const hydrated = useHydrated();
  const stickers = useLearner((s) => s.stickers);
  const [open, setOpen] = useState<Sticker | null>(null);
  const owned = hydrated ? stickers : {};
  const total = STICKERS.filter((s) => owned[s.id]).length;

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <div className="mx-auto max-w-[900px] px-4 pb-16 pt-6 sm:px-6">
      <Link href="/learn" className="btn-ghost !px-4">
        <ArrowLeft className="h-5 w-5" /> {t("kids.stickers.home", "Home")}
      </Link>

      <header className="mt-6 flex items-center gap-4">
        <Mascot pose="cheer" size={110} />
        <div className="flex-1">
          <h1 className="text-3xl font-black">{t("kids.stickers.title", "My sticker book")}</h1>
          <p className="mt-1 text-lg font-bold text-muted">{t("kids.stickers.subtitle", "Try new things to fill every page!")}</p>
          <div className="mt-3 flex items-center gap-3">
            <ProgressBar value={total / STICKERS.length} height={18} color="rgb(var(--warn))" label={t("kids.stickers.collected", "Stickers collected")} />
            <span className="shrink-0 text-lg font-black text-warn-shade">
              {total}/{STICKERS.length}
            </span>
          </div>
        </div>
        <button onClick={() => say(EXPLORE_LINES.stickerBook)} className="btn-primary h-14 w-14 shrink-0 !rounded-full !p-0" aria-label={t("kids.stickers.hearQuesty", "Hear Questy")}>
          <Volume2 className="h-7 w-7" />
        </button>
      </header>

      <div className="mt-10 space-y-8">
        {STICKER_SETS.map((set) => {
          const list = STICKERS.filter((s) => s.set === set.id);
          const got = list.filter((s) => owned[s.id]).length;
          return (
            <section key={set.id} className="overflow-hidden rounded-[2rem] border-2 border-b-4 border-line bg-surface">
              <div className="flex items-center justify-between gap-3 px-6 py-4 text-white" style={{ background: set.color, boxShadow: `inset 0 -4px 0 ${set.shade}` }}>
                <div>
                  <h2 className="text-2xl font-black">{set.name}</h2>
                  <p className="text-base font-bold text-white/85">{set.how}</p>
                </div>
                <span className="rounded-full bg-white/25 px-3 py-1 text-lg font-black">
                  {got}/{list.length}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-x-3 gap-y-6 p-6 sm:grid-cols-4 md:grid-cols-7">
                {list.map((s) => (
                  <button key={s.id} onClick={() => owned[s.id] && setOpen(s)} className="rounded-2xl p-1 transition hover:scale-105 disabled:hover:scale-100" disabled={!owned[s.id]} aria-label={owned[s.id] ? s.name : t("kids.stickers.locked", "Locked sticker")}>
                    <StickerTile sticker={s} owned={Boolean(owned[s.id])} size={84} label />
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={open.name}>
            <motion.div initial={{ scale: 0.7, rotate: -8 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 260, damping: 16 }} className="relative w-full max-w-xs rounded-[2rem] bg-surface p-8 text-center" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setOpen(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-muted hover:bg-surface-2" aria-label={t("kids.stickers.close", "Close")}>
                <X className="h-6 w-6" />
              </button>
              <div className="flex justify-center">
                <StickerTile sticker={open} owned size={160} />
              </div>
              <p className="mt-6 text-3xl font-black">{open.name}</p>
              <p className="mt-1 text-base font-bold text-muted">{STICKER_SETS.find((s) => s.id === open.set)?.name}</p>
              <button className="btn-primary mt-6 w-full" onClick={() => setOpen(null)}>
                {t("kids.stickers.yay", "Yay!")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
