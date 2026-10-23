"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, House, Lock, Moon, Search, Settings, Sticker, Sun, Users, X, type LucideIcon } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { GrownUpGate } from "@/components/modes/ModeSettings";
import { useLearner } from "@/lib/store";
import { say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import type { NavItem, ShellProps } from "../types";
import { BubbleLink, type SunHue } from "./ui";

/** Picture + voice for each child-facing destination. */
const KID_NAV: Record<string, { icon: LucideIcon; hue: SunHue; speak: string; label: string }> = {
  "/learn": { icon: House, hue: "butter", speak: "Home! Let’s play and learn.", label: "Home" },
  "/kids/play": { icon: Gamepad2, hue: "berry", speak: EXPLORE_LINES.games, label: "Games" },
  "/stickers": { icon: Sticker, hue: "mint", speak: EXPLORE_LINES.stickerBook, label: "Stickers" },
};

/** Sprout frame: sunny top band with Questy, giant picture buttons at the bottom, grown-up corner. */
export function SproutShell({ children, nav, more, isActive, openSearch }: ShellProps) {
  const name = useLearner((s) => s.profile.name);
  const first = name?.trim().split(" ")[0] ?? "";
  const kidNav = nav.filter((n) => KID_NAV[n.href]);
  const grownNav = [...nav.filter((n) => !KID_NAV[n.href]), ...more];
  const [gate, setGate] = useState(false);
  const [panel, setPanel] = useState(false);
  const [passed, setPassed] = useState(false);

  const openGrownUps = () => {
    if (passed) setPanel(true);
    else {
      setGate(true);
      say(EXPLORE_LINES.grownUp);
    }
  };

  return (
    <div className="sprout-frame min-h-screen bg-bg">
      <header className="sprout-band relative z-30">
        <div className="mx-auto flex max-w-[1100px] items-center gap-3 px-4 py-2.5 sm:px-6">
          <button
            type="button"
            onClick={() => say(first ? `Hi ${first}! I’m Questy. Let’s have fun!` : EXPLORE_LINES.welcome)}
            className="sprout-press flex min-w-0 items-center gap-3 rounded-[2rem] pr-3 text-left"
            aria-label="Say hello to Questy"
          >
            <span className="sprout-owl-ring grid shrink-0 place-items-center rounded-full">
              <Mascot pose="wave" size={64} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[1.6rem] font-extrabold leading-tight text-ink">{first ? `Hi, ${first}!` : "Hi, friend!"}</span>
            </span>
          </button>
          <button
            type="button"
            onClick={openGrownUps}
            className="ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface/80 text-muted shadow-soft transition hover:text-ink"
            aria-label="Grown-ups: settings, parents and search"
            title="Grown-ups"
          >
            <Lock className="h-5 w-5" strokeWidth={2.6} />
          </button>
        </div>
      </header>

      <main className="sprout-main pb-[176px]">{children}</main>

      <nav className="sprout-dock fixed inset-x-0 bottom-0 z-40" aria-label="Primary">
        <div className="mx-auto flex max-w-[560px] items-end justify-around gap-2 px-4 pb-[max(14px,env(safe-area-inset-bottom))] pt-3">
          {kidNav.map((n) => {
            const k = KID_NAV[n.href];
            return <BubbleLink key={n.href} href={n.href} label={k.label} speak={k.speak} icon={k.icon} hue={k.hue} size={92} caption current={isActive(n.href)} />;
          })}
        </div>
      </nav>

      <AnimatePresence>
        {gate && (
          <GrownUpGate
            onPass={() => {
              setGate(false);
              setPassed(true);
              setPanel(true);
            }}
            onCancel={() => setGate(false)}
            message="To open the grown-up corner, please answer:"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{panel && <GrownUpPanel items={grownNav} onClose={() => setPanel(false)} openSearch={openSearch} isActive={isActive} />}</AnimatePresence>
    </div>
  );
}

function GrownUpPanel({ items, onClose, openSearch, isActive }: { items: NavItem[]; onClose: () => void; openSearch: () => void; isActive: (href: string) => boolean }) {
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const dark = theme === "dark";
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onClose]);

  const parent = items.find((i) => i.href === "/parent");
  const rest = items.filter((i) => i.href !== "/parent");

  return (
    <motion.div className="fixed inset-0 z-[80] flex justify-end bg-ink/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Grown-ups"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="sprout-grownups m-2 flex w-full max-w-sm flex-col overflow-hidden rounded-[2rem] bg-surface shadow-lift"
      >
        <div className="flex items-center justify-between px-5 pb-2 pt-5">
          <div>
            <p className="eyebrow">Grown-ups</p>
            <p className="text-lg font-extrabold">Settings and more</p>
          </div>
          <button ref={closeRef} onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full bg-surface-2 text-muted hover:text-ink" aria-label="Close">
            <X className="h-5 w-5" strokeWidth={2.6} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-4">
          <div className="grid grid-cols-2 gap-2 px-2 py-2">
            {parent && (
              <PanelTile href={parent.href} onClose={onClose} icon={Users} label="For parents" color={parent.color} />
            )}
            <PanelTile href="/settings" onClose={onClose} icon={Settings} label="Settings" color="#6B7385" />
            <button
              onClick={() => {
                onClose();
                openSearch();
              }}
              className="flex flex-col items-start gap-2 rounded-[1.4rem] bg-surface-2 p-3.5 text-left text-sm font-bold hover:brightness-[0.98]"
            >
              <Search className="h-6 w-6 text-accent" /> Search
            </button>
            <button
              onClick={() => setSettings({ theme: dark ? "light" : "dark" })}
              className="flex flex-col items-start gap-2 rounded-[1.4rem] bg-surface-2 p-3.5 text-left text-sm font-bold hover:brightness-[0.98]"
              aria-pressed={dark}
            >
              {dark ? <Sun className="h-6 w-6 text-warn-shade" /> : <Moon className="h-6 w-6 text-accent-2" />} {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
          <p className="eyebrow mt-3 px-4">More places</p>
          <ul className="mt-1">
            {rest.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={onClose}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-[0.85rem] font-bold text-ink hover:bg-surface-2 aria-[current=page]:bg-accent-soft"
                >
                  <n.icon className="h-5 w-5" style={{ color: n.color }} /> {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PanelTile({ href, icon: Icon, label, color, onClose }: { href: string; icon: LucideIcon; label: string; color: string; onClose: () => void }) {
  return (
    <Link href={href} onClick={onClose} className="flex flex-col items-start gap-2 rounded-[1.4rem] bg-surface-2 p-3.5 text-sm font-bold hover:brightness-[0.98]">
      <Icon className="h-6 w-6" style={{ color }} /> {label}
    </Link>
  );
}
