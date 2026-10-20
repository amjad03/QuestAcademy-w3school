"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Coins, Flame, Moon, Search, Sun, Monitor, Zap } from "lucide-react";
import clsx from "clsx";
import { Logo } from "./Logo";
import { Avatar } from "./Avatar";
import { worlds } from "@/content/worlds";
import { liveStreak, useLearner } from "@/lib/store";
import { levelInfo } from "@/lib/gamification";
import { useUi } from "@/lib/ui";
import { useHydrated } from "@/components/providers";

export function Navbar() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const xp = useLearner((s) => s.xp);
  const coins = useLearner((s) => s.coins);
  const streak = useLearner((s) => liveStreak(s));
  const profile = useLearner((s) => s.profile);
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const setPalette = useUi((s) => s.setPalette);
  const [menu, setMenu] = useState(false);
  const [world, setWorld] = useState<string | undefined>();
  const menuRef = useRef<HTMLDivElement>(null);
  const lvl = levelInfo(xp);

  useEffect(() => setMenu(false), [pathname]);
  // Adopt the theme of the world the current page belongs to.
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const read = () => setWorld(main.querySelector("[data-world]")?.getAttribute("data-world") ?? undefined);
    read();
    const obs = new MutationObserver(read);
    obs.observe(main, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette(true);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [setPalette]);

  // The CBT exam screen and onboarding are distraction-free.
  if (pathname.startsWith("/exam/mock/") || pathname.startsWith("/onboarding")) return null;

  const nextTheme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const ThemeIcon = theme === "system" ? Monitor : theme === "light" ? Sun : Moon;

  const links = [
    { href: "/dashboard", label: "My Quest" },
    { href: "/code/playground", label: "Playground" },
    { href: "/review", label: "Review" },
    { href: "/leaderboard", label: "Leagues" },
  ];

  return (
    <header data-world={world === "exam" || world === "code" ? world : undefined} className="sticky top-0 z-40 border-b border-line/70 bg-bg/90 text-ink backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Logo />

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenu((m) => !m)}
              className={clsx("flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-ink", menu && "bg-surface-2 text-ink")}
              aria-expanded={menu}
            >
              Worlds <ChevronDown className={clsx("h-4 w-4 transition", menu && "rotate-180")} />
            </button>
            <AnimatePresence>
              {menu && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="card absolute left-0 top-12 grid w-[640px] grid-cols-2 gap-2 p-3"
                >
                  {worlds.map((w) => (
                    <Link key={w.id} href={w.href} className="group flex gap-3 rounded-2xl p-3 transition hover:bg-surface-2">
                      <span
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl shadow-soft transition group-hover:scale-110"
                        style={{ background: `linear-gradient(135deg, ${w.colors[0]}, ${w.colors[1]})` }}
                      >
                        {w.emoji}
                      </span>
                      <span>
                        <span className="flex items-center gap-2 font-semibold">
                          {w.name} <span className="chip !py-0 text-[10px]">{w.short}</span>
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-muted">{w.tagline}</span>
                      </span>
                    </Link>
                  ))}
                  <Link href="/explore" className="flex items-center justify-center rounded-2xl border border-dashed border-line p-3 text-sm font-medium text-muted hover:text-ink">
                    Browse every subject →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-surface-2 hover:text-ink",
                pathname.startsWith(l.href) ? "text-ink" : "text-muted",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setPalette(true)}
            className="flex h-10 items-center gap-2 rounded-2xl border border-line bg-surface px-3 text-sm text-muted transition hover:text-ink"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search anything</span>
            <kbd className="hidden rounded-md border border-line px-1.5 font-mono text-[10px] md:inline">⌘K</kbd>
          </button>

          {hydrated && (
            <>
              <Link href="/dashboard" className="hidden h-10 items-center gap-1.5 rounded-2xl px-2.5 text-sm font-bold sm:flex" title="Day streak">
                <Flame className={clsx("h-5 w-5", streak > 0 ? "fill-orange-400 text-orange-500" : "text-muted")} />
                <span className={streak > 0 ? "text-orange-500" : "text-muted"}>{streak}</span>
              </Link>
              <Link href="/profile#shop" className="hidden h-10 items-center gap-1.5 rounded-2xl px-2.5 text-sm font-bold text-amber-500 sm:flex" title="Coins">
                <Coins className="h-5 w-5" /> {coins}
              </Link>
              <Link href="/profile" className="hidden h-10 items-center gap-2 rounded-2xl border border-line bg-surface pl-2 pr-3 text-sm sm:flex" title={`${lvl.into}/${lvl.needed} XP to next level`}>
                <Zap className="h-4 w-4 fill-accent text-accent" />
                <span className="font-bold">Lv {lvl.level}</span>
                <span className="relative h-1.5 w-14 overflow-hidden rounded-full bg-surface-2">
                  <span className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-accent-2" style={{ width: `${lvl.progress * 100}%` }} />
                </span>
              </Link>
            </>
          )}

          <button
            onClick={() => setSettings({ theme: nextTheme })}
            className="grid h-10 w-10 place-items-center rounded-2xl text-muted transition hover:bg-surface-2 hover:text-ink"
            aria-label={`Theme: ${theme}. Switch to ${nextTheme}`}
            title={`Theme: ${theme}`}
          >
            <ThemeIcon className="h-5 w-5" />
          </button>

          {hydrated && (
            <Link href={profile.onboarded ? "/profile" : "/onboarding"} aria-label="Profile">
              <Avatar emoji={profile.avatar} frame={profile.frame} size={40} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
