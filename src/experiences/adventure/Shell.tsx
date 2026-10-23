"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronDown, Coins, Flame, Moon, Plus, Search, Settings, SlidersHorizontal, Sun, Video, X } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useCatalog } from "@/components/shell/CatalogContext";
import { liveStreak, useLearner } from "@/lib/store";
import type { NavItem, ShellProps } from "../types";
import { NeonBar, rankInfo } from "./hud";

/**
 * Adventure frame — "mission control". A slim dark icon rail (expands on
 * hover/focus), a HUD strip with rank, XP to next rank, streak and coins, and
 * a bottom HUD bar on phones. Everything else lives in the control panel.
 */
export function AdventureShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  const [panel, setPanel] = useState(false);
  useEffect(() => setPanel(false), [pathname]);

  // Phones: home + 3 destinations in the bar, the rest in the control panel.
  const barNav = nav.slice(0, 4);
  const panelNavPhone = nav.slice(4);

  return (
    <div className="adv-app min-h-screen bg-bg">
      <a href="#adv-main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-surface focus:px-3 focus:py-2 focus:font-bold">
        Skip to content
      </a>
      <Rail nav={nav} isActive={isActive} openSearch={openSearch} panelOpen={panel} togglePanel={() => setPanel((o) => !o)} />

      <div className="md:pl-[72px]">
        <Hud openSearch={openSearch} />
        <main id="adv-main" className="adv-main pb-28 md:pb-12">
          {children}
        </main>
      </div>

      {/* Phone HUD bar */}
      <nav className="adv-frame adv-bottombar fixed inset-x-0 bottom-0 z-40 flex md:hidden" aria-label="Primary">
        {barNav.map((n) => {
          const active = isActive(n.href);
          return (
            <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={clsx("adv-barlink", active && "is-active")}>
              <n.icon className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
              <span>{n.label}</span>
            </Link>
          );
        })}
        <button type="button" data-adv-panel-trigger onClick={() => setPanel((o) => !o)} aria-expanded={panel} aria-controls="adv-control-panel" className={clsx("adv-barlink", panel && "is-active")}>
          <SlidersHorizontal className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
          <span>Panel</span>
        </button>
      </nav>

      {panel && <ControlPanel more={more} extraNav={panelNavPhone} isActive={isActive} openSearch={openSearch} onClose={() => setPanel(false)} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Rail                                                                 */
/* ------------------------------------------------------------------ */

function Rail({ nav, isActive, openSearch, panelOpen, togglePanel }: { nav: NavItem[]; isActive: (h: string) => boolean; openSearch: () => void; panelOpen: boolean; togglePanel: () => void }) {
  return (
    <aside className="adv-frame adv-rail group fixed inset-y-0 left-0 z-40 hidden w-[72px] flex-col py-3 transition-[width] duration-200 hover:w-[228px] focus-within:w-[228px] md:flex" aria-label="Mission control">
      <Link href="/learn" className="adv-raillink mb-3 !h-14" aria-label="Quest Academy — mission control">
        <span className="grid w-[40px] shrink-0 place-items-center">
          <LogoMark size={34} />
        </span>
        <span className="adv-raillabel text-[15px] font-bold tracking-wide text-white">Quest Academy</span>
      </Link>
      <nav className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overflow-x-hidden" aria-label="Primary">
        {nav.map((n) => {
          const active = isActive(n.href);
          return (
            <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={clsx("adv-raillink", active && "is-active")} title={n.label}>
              <span className="grid w-[40px] shrink-0 place-items-center">
                <n.icon className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="adv-raillabel">{n.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-2 flex flex-col gap-0.5 border-t border-white/10 pt-2">
        <button type="button" onClick={openSearch} className="adv-raillink" title="Search (Ctrl K)">
          <span className="grid w-[40px] shrink-0 place-items-center">
            <Search className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
          </span>
          <span className="adv-raillabel">Search</span>
        </button>
        <button type="button" data-adv-panel-trigger onClick={togglePanel} aria-expanded={panelOpen} aria-controls="adv-control-panel" className={clsx("adv-raillink", panelOpen && "is-active")} title="Control panel">
          <span className="grid w-[40px] shrink-0 place-items-center">
            <SlidersHorizontal className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
          </span>
          <span className="adv-raillabel">Control panel</span>
        </button>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Top HUD                                                              */
/* ------------------------------------------------------------------ */

function Hud({ openSearch }: { openSearch: () => void }) {
  const xp = useLearner((s) => s.xp);
  const coins = useLearner((s) => s.coins);
  const streak = useLearner((s) => liveStreak(s));
  const r = rankInfo(xp);

  return (
    <header className="adv-frame adv-hud sticky top-0 z-30">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center gap-2 px-3 sm:gap-4 sm:px-5">
        <Link href="/learn" className="shrink-0 md:hidden" aria-label="Mission control home">
          <LogoMark size={30} />
        </Link>
        <CourseSwitch />

        <Link href="/profile" className="adv-hudrank group flex min-w-0 flex-1 items-center gap-2.5" title={r.next ? `${r.toNext} XP to ${r.next.name}` : "Top rank"}>
          <span className="adv-rankbadge shrink-0" style={{ color: r.color }} aria-hidden>
            <RankChevrons index={r.index} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-baseline justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              <span className="truncate">
                <span className="font-bold" style={{ color: r.color }}>
                  {r.name}
                </span>
                <span className="hidden sm:inline"> · rank {r.index + 1}</span>
              </span>
              <span className="hidden shrink-0 font-mono normal-case tracking-normal sm:inline">{r.next ? `${r.toNext} XP to ${r.next.name}` : "Max rank"}</span>
            </span>
            <NeonBar value={r.pct} color={r.color} height={6} className="mt-1 max-w-[340px]" label={`XP to next rank: ${Math.round(r.pct * 100)}%`} />
          </span>
        </Link>

        <Link href="/quests" className="adv-hudstat" title="Day streak" aria-label={`${streak}-day streak`}>
          <Flame className={clsx("h-5 w-5", streak ? "fill-[#FB923C] text-[#FB923C]" : "text-white/35")} aria-hidden />
          <span className={streak ? "text-[#FDBA74]" : "text-white/50"}>{streak}</span>
        </Link>
        <Link href="/shop" className="adv-hudstat" title="Coins" aria-label={`${coins} coins`}>
          <Coins className="h-5 w-5 text-[#FBBF24]" aria-hidden />
          <span className="text-[#FDE68A]">{coins >= 10000 ? `${Math.floor(coins / 1000)}k` : coins}</span>
        </Link>
        <button type="button" onClick={openSearch} className="adv-hudstat hidden sm:flex" aria-label="Search">
          <Search className="h-5 w-5 text-white/70" aria-hidden />
          <span className="hidden font-mono text-[11px] text-white/45 lg:inline">Ctrl K</span>
        </button>
      </div>
    </header>
  );
}

function RankChevrons({ index }: { index: number }) {
  // A small insignia: one chevron per rank reached (max 3 drawn, then a star).
  const n = Math.min(3, index + 1);
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 1.5 25 7v14l-11 5.5L3 21V7z" fill="currentColor" fillOpacity="0.14" strokeWidth="1.6" />
      {index >= 5 ? (
        <path d="m14 8 1.9 3.9 4.3.6-3.1 3 .7 4.3L14 17.8l-3.8 2 .7-4.3-3.1-3 4.3-.6z" fill="currentColor" stroke="none" />
      ) : (
        Array.from({ length: n }).map((_, i) => <path key={i} d={`M8.5 ${10 + i * 4} 14 ${13.5 + i * 4} 19.5 ${10 + i * 4}`} />)
      )}
    </svg>
  );
}

function CourseSwitch() {
  const catalog = useCatalog();
  const course = useLearner((s) => s.profile.course);
  const started = useLearner((s) => s.subjectsStarted);
  const setProfile = useLearner((s) => s.setProfile);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  const current = catalog.find((c) => c.slug === course);
  const mine = catalog.filter((c) => c.slug === course || started.includes(c.slug));

  return (
    <div className="relative shrink-0" ref={ref}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="adv-hudstat !gap-1.5 !px-1.5" aria-label={current ? `Current course: ${current.title}. Switch course` : "Choose a course"} aria-expanded={open}>
        {current ? (
          <CourseIcon slug={current.slug} size={28} flat />
        ) : (
          <span className="grid h-7 w-7 place-items-center rounded-md border border-dashed border-white/40 text-white/70">
            <Plus className="h-4 w-4" />
          </span>
        )}
        <span className="hidden max-w-[150px] truncate text-[13px] font-semibold text-white/85 xl:inline">{current?.title ?? "Pick course"}</span>
        <ChevronDown className="h-3.5 w-3.5 text-white/50" aria-hidden />
      </button>
      {open && (
        <div className="adv-pop absolute left-0 top-12 z-50 w-72 p-2">
          <p className="adv-poplabel px-3 pb-1 pt-1.5">Active expeditions</p>
          {mine.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => {
                setProfile({ course: c.slug });
                setOpen(false);
              }}
              className={clsx("adv-popitem", c.slug === course && "is-active")}
            >
              <CourseIcon slug={c.slug} size={28} flat />
              <span className="truncate">{c.title}</span>
            </button>
          ))}
          <Link href="/courses" onClick={() => setOpen(false)} className="adv-popitem">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-dashed border-current opacity-70">
              <Plus className="h-4 w-4" />
            </span>
            Start a new course
          </Link>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Control panel                                                        */
/* ------------------------------------------------------------------ */

function ControlPanel({ more, extraNav, isActive, openSearch, onClose }: { more: NavItem[]; extraNav: NavItem[]; isActive: (h: string) => boolean; openSearch: () => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const systemDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const dark = theme === "dark" || (theme === "system" && systemDark);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (ref.current?.contains(t) || t.closest?.("[data-adv-panel-trigger]")) return;
      onClose();
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    ref.current?.querySelector<HTMLElement>("a,button")?.focus();
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      id="adv-control-panel"
      role="dialog"
      aria-label="Control panel"
      className="adv-pop adv-panel fixed inset-x-2 bottom-[70px] z-50 max-h-[72vh] overflow-y-auto p-2 md:inset-x-auto md:bottom-4 md:left-[84px] md:w-[300px]"
    >
      <div className="flex items-center justify-between px-3 pb-1 pt-1.5">
        <p className="adv-poplabel">Control panel</p>
        <button type="button" onClick={onClose} className="grid h-8 w-8 place-items-center rounded-md text-current opacity-70 hover:opacity-100" aria-label="Close control panel">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1.5 px-1 pb-2">
        <button
          type="button"
          onClick={() => {
            onClose();
            openSearch();
          }}
          className="adv-panelbtn"
        >
          <Search className="h-4 w-4" /> Search
        </button>
        <button type="button" onClick={() => setSettings({ theme: dark ? "light" : "dark" })} className="adv-panelbtn" aria-pressed={dark}>
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>

      {extraNav.length > 0 && (
        <div className="md:hidden">
          <p className="adv-poplabel px-3 pb-1 pt-2">Stations</p>
          {extraNav.map((n) => (
            <PanelLink key={n.href} item={n} active={isActive(n.href)} />
          ))}
        </div>
      )}

      <p className="adv-poplabel px-3 pb-1 pt-2">More stations</p>
      {more.map((n) => (
        <PanelLink key={n.href} item={n} active={isActive(n.href)} />
      ))}

      <div className="adv-popsep" />
      <Link href="/settings" className={clsx("adv-popitem", isActive("/settings") && "is-active")}>
        <Settings className="h-[18px] w-[18px]" aria-hidden /> Settings
      </Link>
      <Link href="/studio/videos" className="adv-popitem">
        <Video className="h-[18px] w-[18px]" aria-hidden /> Video mapping
      </Link>
    </div>
  );
}

function PanelLink({ item: n, active }: { item: NavItem; active: boolean }) {
  return (
    <Link href={n.href} aria-current={active ? "page" : undefined} className={clsx("adv-popitem", active && "is-active")}>
      <n.icon className="h-[18px] w-[18px]" aria-hidden />
      {n.label}
    </Link>
  );
}
