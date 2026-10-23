"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { CalendarClock, ChevronDown, Menu, Moon, Pause, Play, RotateCcw, Search, Settings, Sun, Timer, UserRound, X } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { useHydrated } from "@/components/providers";
import { useLearner } from "@/lib/store";
import { examDateFor, getGrade, resolveBoardGrade } from "@/content/syllabus";
import type { NavItem, ShellProps } from "../types";
import { PHASE_MS, clock, useTimerView, type Phase } from "./timer";

/* ------------------------------------------------------------------ */
/* Navigation grouped by purpose                                       */
/* ------------------------------------------------------------------ */

const GROUPS: { label: string; hrefs: string[] }[] = [
  { label: "Study", hrefs: ["/learn", "/plan", "/library", "/courses"] },
  { label: "Practise", hrefs: ["/practice", "/exam", "/exam/formulas", "/worksheets"] },
  { label: "Track", hrefs: ["/insights", "/notebook", "/competitions"] },
];

function groupNav(nav: NavItem[]) {
  const used = new Set<string>(["/profile"]);
  const groups = GROUPS.map((g) => {
    const items = g.hrefs.map((h) => nav.find((n) => n.href === h)).filter((n): n is NavItem => Boolean(n));
    items.forEach((i) => used.add(i.href));
    return { label: g.label, items };
  });
  const rest = nav.filter((n) => !used.has(n.href));
  if (rest.length) groups.push({ label: "Other", items: rest });
  return groups.filter((g) => g.items.length);
}

/* ------------------------------------------------------------------ */
/* Shell                                                               */
/* ------------------------------------------------------------------ */

/** Focus (15–18): an exam command centre — purpose-grouped sidebar, countdown, search and a focus timer. */
export function FocusShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  const [drawer, setDrawer] = useState(false);
  useEffect(() => setDrawer(false), [pathname]);
  const closeDrawer = useCallback(() => setDrawer(false), []);

  return (
    <div className="fx-shell min-h-screen bg-bg">
      <a href="#fx-main" className="fx-skip">
        Skip to content
      </a>

      {/* desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] flex-col border-r border-line bg-surface lg:flex">
        <Brand />
        <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
          <NavGroups nav={nav} more={more} isActive={isActive} />
        </div>
        <SidebarFooter isActive={isActive} />
      </aside>

      <div className="lg:pl-[240px]">
        <TopBar openSearch={openSearch} onMenu={() => setDrawer(true)} />
        <main id="fx-main" className="pb-[84px] lg:pb-0">
          {children}
        </main>
      </div>

      {/* phone & tablet: bottom tab bar of the first five destinations */}
      <nav className="fx-tabbar fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-surface/95 backdrop-blur lg:hidden" aria-label="Primary">
        {nav.slice(0, 5).map((n) => {
          const active = isActive(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={clsx("relative flex min-w-0 flex-1 flex-col items-center gap-1 pb-2 pt-2.5 text-[11px] font-medium", active ? "text-accent" : "text-muted hover:text-ink")}
            >
              {active && <span className="absolute inset-x-4 top-0 h-[2px] rounded-full bg-accent" aria-hidden />}
              <n.icon className="h-5 w-5" strokeWidth={active ? 2.2 : 1.8} aria-hidden />
              <span className="max-w-full truncate px-1">{n.label}</span>
            </Link>
          );
        })}
      </nav>

      {drawer && <Drawer nav={nav} more={more} isActive={isActive} onClose={closeDrawer} />}
    </div>
  );
}

function Brand() {
  return (
    <Link href="/learn" className="flex h-14 shrink-0 items-center gap-2.5 border-b border-line px-5" aria-label="Quest Academy — syllabus home">
      <LogoMark size={26} />
      <span className="text-[15px] font-semibold tracking-tight text-ink">Quest Academy</span>
    </Link>
  );
}

function NavGroups({ nav, more, isActive, onNavigate }: { nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean; onNavigate?: () => void }) {
  const groups = groupNav(nav);
  const moreActive = more.some((m) => isActive(m.href));
  const [open, setOpen] = useState(moreActive);
  return (
    <nav aria-label="Primary" className="pt-3">
      {groups.map((g) => (
        <div key={g.label} className="mb-4">
          <p className="fx-group px-3 pb-1.5" id={`fx-g-${g.label}`}>
            {g.label}
          </p>
          <ul className="space-y-0.5" aria-labelledby={`fx-g-${g.label}`}>
            {g.items.map((n) => (
              <li key={n.href}>
                <NavLink item={n} active={isActive(n.href)} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {more.length > 0 && (
        <div className="mb-2 border-t border-line pt-3">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="fx-more"
            className="flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left fx-group hover:text-ink"
          >
            More <ChevronDown className={clsx("h-3.5 w-3.5 transition", open && "rotate-180")} aria-hidden />
          </button>
          {open && (
            <ul id="fx-more" className="mt-1 space-y-0.5">
              {more.map((n) => (
                <li key={n.href}>
                  <NavLink item={n} active={isActive(n.href)} onNavigate={onNavigate} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

function NavLink({ item: n, active, onNavigate }: { item: NavItem; active: boolean; onNavigate?: () => void }) {
  return (
    <Link
      href={n.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={clsx("fx-navlink flex h-9 items-center gap-3 rounded-lg px-3 text-sm", active ? "bg-accent-soft font-semibold text-accent" : "font-medium text-ink/80 hover:bg-surface-2 hover:text-ink")}
    >
      <n.icon className={clsx("h-[18px] w-[18px] shrink-0", active ? "text-accent" : "text-muted")} strokeWidth={active ? 2.2 : 1.8} aria-hidden />
      <span className="truncate">{n.label}</span>
    </Link>
  );
}

function ThemeToggle({ className, withLabel }: { className?: string; withLabel?: boolean }) {
  const hydrated = useHydrated();
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const [sysDark, setSysDark] = useState(false);
  useEffect(() => setSysDark(document.documentElement.classList.contains("dark")), [theme]);
  const dark = hydrated && (theme === "dark" || (theme === "system" && sysDark));
  const label = dark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button type="button" onClick={() => setSettings({ theme: dark ? "light" : "dark" })} className={className} aria-label={label} title={label}>
      {dark ? <Sun className="h-[18px] w-[18px]" aria-hidden /> : <Moon className="h-[18px] w-[18px]" aria-hidden />}
      {withLabel && <span>{dark ? "Light mode" : "Dark mode"}</span>}
    </button>
  );
}

function SidebarFooter({ isActive }: { isActive: (h: string) => boolean }) {
  const name = useLearner((s) => s.profile.name);
  const hydrated = useHydrated();
  return (
    <div className="flex shrink-0 items-center gap-1 border-t border-line p-3">
      <Link
        href="/profile"
        aria-current={isActive("/profile") ? "page" : undefined}
        className={clsx("flex min-w-0 flex-1 items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-surface-2", isActive("/profile") && "bg-accent-soft text-accent")}
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-surface-2 text-muted">
          <UserRound className="h-4 w-4" aria-hidden />
        </span>
        <span className="truncate">{hydrated && name ? name : "Profile"}</span>
      </Link>
      <Link href="/settings" className="fx-iconbtn" aria-label="Settings" title="Settings" aria-current={isActive("/settings") ? "page" : undefined}>
        <Settings className="h-[18px] w-[18px]" aria-hidden />
      </Link>
      <ThemeToggle className="fx-iconbtn" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Top bar                                                             */
/* ------------------------------------------------------------------ */

function TopBar({ openSearch, onMenu }: { openSearch: () => void; onMenu: () => void }) {
  const [mod, setMod] = useState("⌘K");
  useEffect(() => {
    if (!/Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent)) setMod("Ctrl K");
  }, []);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="flex h-14 items-center gap-2 px-3 sm:px-4 lg:px-6">
        <Link href="/learn" className="mr-1 shrink-0 lg:hidden" aria-label="Quest Academy — syllabus home">
          <LogoMark size={26} />
        </Link>

        <button type="button" onClick={openSearch} className="fx-search hidden min-w-0 flex-1 items-center gap-2.5 sm:flex lg:max-w-[440px]" aria-label="Search lessons, formulas and pages">
          <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden />
          <span className="truncate text-sm text-muted">Search chapters, formulas, pages…</span>
          <kbd className="fx-kbd ml-auto hidden md:inline-block">{mod}</kbd>
        </button>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <CountdownPill />
          <FocusTimer />
          <button type="button" onClick={openSearch} className="fx-iconbtn sm:hidden" aria-label="Search">
            <Search className="h-[18px] w-[18px]" aria-hidden />
          </button>
          <button type="button" onClick={onMenu} className="fx-iconbtn lg:hidden" aria-label="Open menu" aria-haspopup="dialog">
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}

/** Days until the learner's board / entrance exam (from their syllabus profile). */
export function useExamCountdown() {
  const hydrated = useHydrated();
  const profile = useLearner((s) => s.profile);
  if (!hydrated) return null;
  const { board, grade } = resolveBoardGrade(profile.board, profile.grade, profile.stage);
  const g = getGrade(board, grade);
  const date = g ? examDateFor(g) : null;
  if (!g?.exam || !date) return null;
  const days = Math.max(0, Math.ceil((date.getTime() - Date.now()) / 86_400_000));
  return { days, name: g.exam.name, date, approx: !("examId" in g.exam) };
}

function CountdownPill() {
  const c = useExamCountdown();
  if (!c) return null;
  const soon = c.days <= 30;
  const when = c.date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  return (
    <Link
      href="/plan"
      className={clsx("fx-pill", soon && "fx-pill-warn")}
      aria-label={`${c.days} days until ${c.name}, ${c.approx ? "around " : ""}${when}. Open study plan.`}
      title={`${c.name} · ${c.approx ? "approx. " : ""}${when}`}
    >
      <CalendarClock className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span className="tabular-nums font-semibold">{c.days}</span>
      <span className="hidden sm:inline">days</span>
      <span className="sm:hidden">d</span>
      <span className="hidden max-w-[180px] truncate text-muted xl:inline">· {c.name}</span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Focus timer (Pomodoro 25 / 5)                                       */
/* ------------------------------------------------------------------ */

function FocusTimer() {
  const hydrated = useHydrated();
  const t = useTimerView();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  const time = hydrated ? clock(t.remaining) : "25:00";
  const active = hydrated && (t.running || t.remaining < PHASE_MS[t.phase]);
  const phaseName = t.phase === "focus" ? "Focus" : "Break";
  const progress = hydrated ? 1 - t.remaining / PHASE_MS[t.phase] : 0;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`Focus timer: ${phaseName} ${time}${hydrated && t.running ? ", running" : ""}`}
        className={clsx("fx-pill", hydrated && t.running && "fx-pill-live", hydrated && t.phase === "break" && "fx-pill-break")}
      >
        <Timer className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {active ? <span className="tabular-nums font-semibold">{time}</span> : <span className="hidden font-medium sm:inline">Focus timer</span>}
      </button>
      <p className="sr-only" aria-live="polite">
        {hydrated && t.lastDone === "focus" ? "Focus block complete. Take a five minute break." : hydrated && t.lastDone === "break" ? "Break over. Ready for the next focus block." : ""}
      </p>
      {open && (
        <div role="dialog" aria-label="Focus timer" className="fx-pop absolute right-0 top-[calc(100%+8px)] z-50 w-[272px] p-4">
          <div className="fx-seg" role="group" aria-label="Timer mode">
            {(["focus", "break"] as Phase[]).map((p) => (
              <button key={p} type="button" aria-pressed={t.phase === p} onClick={() => t.switchTo(p)} className={clsx(t.phase === p && "is-on")}>
                {p === "focus" ? "Focus · 25" : "Break · 5"}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-[2.5rem] font-semibold leading-none tracking-tight tabular-nums">{time}</p>
          <div className="mx-auto mt-3 h-1 w-full overflow-hidden rounded-full bg-surface-2" aria-hidden>
            <div className={clsx("h-full rounded-full", t.phase === "break" ? "bg-good" : "bg-accent")} style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }} />
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            {t.lastDone === "focus"
              ? "Block done. Stand up, drink water, look away from the screen."
              : t.lastDone === "break"
                ? "Break over. Pick one chapter and go."
                : t.phase === "focus"
                  ? "One chapter, no phone, 25 minutes."
                  : "Short break. Back in 5."}
          </p>
          <div className="mt-4 flex gap-2">
            {t.running ? (
              <button type="button" className="btn-primary flex-1" onClick={t.pause}>
                <Pause className="h-4 w-4" aria-hidden /> Pause
              </button>
            ) : (
              <button type="button" className="btn-primary flex-1" onClick={t.start} autoFocus>
                <Play className="h-4 w-4" aria-hidden /> {t.remaining < PHASE_MS[t.phase] ? "Resume" : "Start"}
              </button>
            )}
            <button type="button" className="btn-ghost" onClick={t.reset} aria-label="Reset timer">
              <RotateCcw className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <p className="mt-3 border-t border-line pt-3 text-xs text-muted">
            Focus blocks this session: <span className="font-semibold tabular-nums text-ink">{t.completed}</span>
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Phone drawer                                                        */
/* ------------------------------------------------------------------ */

function Drawer({ nav, more, isActive, onClose }: { nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    panel.current?.querySelector<HTMLElement>("button, a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const els = Array.from(panel.current.querySelectorAll<HTMLElement>("a, button"));
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) (e.preventDefault(), last.focus());
        else if (!e.shiftKey && document.activeElement === last) (e.preventDefault(), first.focus());
      }
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-ink/30" onClick={onClose} aria-hidden />
      <div ref={panel} role="dialog" aria-modal="true" aria-label="Menu" className="absolute inset-y-0 right-0 flex w-[min(300px,86vw)] flex-col border-l border-line bg-surface">
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-4">
          <span className="text-[15px] font-semibold">Menu</span>
          <button type="button" onClick={onClose} className="fx-iconbtn" aria-label="Close menu">
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-3">
          <NavGroups nav={nav} more={more} isActive={isActive} onNavigate={onClose} />
        </div>
        <div className="shrink-0 space-y-0.5 border-t border-line p-3">
          <Link href="/profile" onClick={onClose} className="fx-navlink flex h-9 items-center gap-3 rounded-lg px-3 text-sm font-medium hover:bg-surface-2" aria-current={isActive("/profile") ? "page" : undefined}>
            <UserRound className="h-[18px] w-[18px] text-muted" aria-hidden /> Profile
          </Link>
          <Link href="/settings" onClick={onClose} className="fx-navlink flex h-9 items-center gap-3 rounded-lg px-3 text-sm font-medium hover:bg-surface-2" aria-current={isActive("/settings") ? "page" : undefined}>
            <Settings className="h-[18px] w-[18px] text-muted" aria-hidden /> Settings
          </Link>
          <ThemeToggle withLabel className="fx-navlink flex h-9 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-ink hover:bg-surface-2 [&>svg]:text-muted" />
        </div>
      </div>
    </div>
  );
}
