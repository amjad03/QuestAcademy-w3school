"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import { ChevronDown, Ellipsis, LogIn, Monitor, Moon, Search, Settings, Sun, Target, UserRound, X } from "lucide-react";
import { getPathway, type Pathway } from "@/content/pathways";
import { pathwayProgress } from "@/lib/plan-sources/pathway";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { usePathwayState } from "@/components/pathways/hooks";
import type { NavItem, ShellProps } from "../types";

/**
 * Professional frame: a SaaS-style top bar (text tabs with an active underline,
 * search, goal chip, account menu) and a bottom tab bar on phones.
 */
export function ProfessionalShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  // Profile lives in the account menu, so it is not a tab.
  const tabs = nav.filter((n) => n.href !== "/profile");
  return (
    <div className="pro-shell min-h-screen bg-bg">
      <a href="#pro-main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg">
        Skip to content
      </a>
      <TopBar pathname={pathname} tabs={tabs} more={more} isActive={isActive} openSearch={openSearch} />
      <main id="pro-main" className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>
      <BottomBar pathname={pathname} tabs={tabs} more={more} isActive={isActive} />
    </div>
  );
}

/* ------------------------------------------------------------------ */

/** Tabs shown in the bar at each width; the rest move into "More". */
function barVisibility(i: number) {
  if (i < 4) return "flex";
  if (i === 4) return "hidden lg:flex";
  if (i === 5) return "hidden xl:flex";
  return "hidden";
}
function menuVisibility(i: number) {
  if (i < 4) return "hidden";
  if (i === 4) return "lg:hidden";
  if (i === 5) return "xl:hidden";
  return "";
}

function TopBar({ pathname, tabs, more, isActive, openSearch }: { pathname: string; tabs: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean; openSearch: () => void }) {
  const overflowActive = tabs.some((t, i) => i >= 4 && isActive(t.href));
  return (
    <header className="pro-topbar sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center gap-3 px-4 md:h-16 md:gap-6 md:px-6">
        <Link href="/learn" className="flex shrink-0 items-center gap-2.5 rounded-lg" aria-label="Quest Academy — My goals">
          <BrandMark />
          <span className="hidden text-[15px] font-bold tracking-tight text-ink min-[380px]:inline md:hidden lg:inline">Quest Academy</span>
        </Link>

        <nav className="hidden h-full min-w-0 items-stretch gap-1 md:flex" aria-label="Primary">
          {tabs.map((n, i) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "pro-tab relative items-center whitespace-nowrap px-2.5 text-sm font-semibold transition-colors",
                  barVisibility(i),
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {n.label}
                <span className={clsx("absolute inset-x-2.5 bottom-0 h-[2px] rounded-full transition-colors", active ? "bg-accent" : "bg-transparent")} aria-hidden />
              </Link>
            );
          })}
          {tabs.length > 4 && (
            <Dropdown
              pathname={pathname}
              align="left"
              className={clsx(tabs.length <= 5 && "lg:hidden", tabs.length === 6 && "xl:hidden")}
              label={(open) => (
                <span className={clsx("pro-tab relative flex h-full items-center gap-1 whitespace-nowrap px-2.5 text-sm font-semibold transition-colors", overflowActive || open ? "text-ink" : "text-muted hover:text-ink")}>
                  More <ChevronDown className={clsx("h-4 w-4 transition-transform", open && "rotate-180")} />
                  <span className={clsx("absolute inset-x-2.5 bottom-0 h-[2px] rounded-full", overflowActive ? "bg-accent" : "bg-transparent")} aria-hidden />
                </span>
              )}
              buttonClass="h-full"
              ariaLabel="More sections"
            >
              {tabs.map((n, i) =>
                i < 4 ? null : <MenuLink key={n.href} item={n} active={isActive(n.href)} className={menuVisibility(i)} />,
              )}
            </Dropdown>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={openSearch}
            className="hidden h-9 items-center gap-2 rounded-lg border border-line bg-surface-2/70 pl-3 pr-1.5 text-sm text-muted transition hover:border-ink/20 hover:text-ink lg:flex lg:w-56"
            aria-label="Search (Command K)"
          >
            <Search className="h-4 w-4" />
            <span className="flex-1 text-left">Search</span>
            <kbd className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-sans text-[11px] font-semibold text-muted">⌘K</kbd>
          </button>
          <button onClick={openSearch} className="grid h-9 w-9 place-items-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-ink lg:hidden" aria-label="Search">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <GoalChip />
          <AccountMenu pathname={pathname} more={more} isActive={isActive} />
        </div>
      </div>
    </header>
  );
}

function BrandMark() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-accent text-[15px] font-extrabold text-[rgb(var(--on-accent))] shadow-sm" aria-hidden>
      Q
    </span>
  );
}

/* ------------------------------------------------------------------ */

/** "My goals" chip: progress on the learner's lead pathway. */
function GoalChip() {
  const hydrated = useHydrated();
  const plan = useLearner((s) => s.plan);
  const s = usePathwayState();
  const goal = useMemo(() => {
    const enrolled = s.pathways.enrolled.map(getPathway).filter((p): p is Pathway => Boolean(p));
    const primary =
      enrolled.find((p) => plan?.scope.type === "pathway" && plan.scope.id === p.slug) ??
      enrolled.find((p) => !s.pathways.certificates[p.slug]) ??
      enrolled[0];
    return primary ? { title: primary.title, fraction: pathwayProgress(primary, s).fraction } : null;
  }, [s, plan]);

  if (!hydrated) return <span className="hidden h-9 w-28 sm:block" />;

  if (!goal) {
    return (
      <Link href="/pathways" className="hidden h-9 items-center gap-2 rounded-full border border-dashed border-line px-3 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent sm:flex">
        <Target className="h-4 w-4" /> Set a goal
      </Link>
    );
  }
  const pct = Math.round(goal.fraction * 100);
  return (
    <Link
      href="/learn"
      className="flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-1.5 pr-3 text-sm font-semibold text-ink shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition hover:border-accent/50"
      aria-label={`My goals: ${goal.title}, ${pct}% complete`}
      title={goal.title}
    >
      <Ring value={goal.fraction} />
      <span className="hidden xl:inline">My goals</span>
      <span className="tabular-nums text-muted">{pct}%</span>
    </Link>
  );
}

function Ring({ value }: { value: number }) {
  const r = 9;
  const c = 2 * Math.PI * r;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="-rotate-90" aria-hidden>
      <circle cx="12" cy="12" r={r} fill="none" stroke="rgb(var(--line))" strokeWidth="3" />
      <circle cx="12" cy="12" r={r} fill="none" stroke="rgb(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - Math.max(0, Math.min(1, value)))} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length || name === "Learner") return "";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

function AccountMenu({ pathname, more, isActive }: { pathname: string; more: NavItem[]; isActive: (h: string) => boolean }) {
  const name = useLearner((s) => s.profile.name);
  const ini = initials(name ?? "");
  return (
    <Dropdown
      pathname={pathname}
      align="right"
      ariaLabel="Account and settings"
      buttonClass="rounded-full"
      label={(open) => (
        <span className={clsx("grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-[13px] font-bold text-accent ring-offset-2 ring-offset-surface transition", open ? "ring-2 ring-accent" : "hover:ring-2 hover:ring-line")}>
          {ini || <UserRound className="h-[18px] w-[18px]" />}
        </span>
      )}
      wide
    >
      <div className="px-3 pb-2 pt-1.5">
        <p className="truncate text-sm font-semibold text-ink">{name && name !== "Learner" ? name : "Guest learner"}</p>
        <p className="text-xs text-muted">Progress is saved on this device</p>
      </div>
      <Divider />
      <MenuLink item={{ href: "/profile", label: "Profile", icon: UserRound, color: "" }} active={isActive("/profile")} />
      <MenuLink item={{ href: "/settings", label: "Settings", icon: Settings, color: "" }} active={isActive("/settings")} />
      <MenuLink item={{ href: "/auth", label: "Sign in or sync", icon: LogIn, color: "" }} active={false} />
      <Divider />
      <div className="px-3 py-1.5">
        <p className="mb-1.5 text-xs font-semibold text-muted">Theme</p>
        <ThemeSwitch />
      </div>
      {more.length > 0 && (
        <>
          <Divider />
          <p className="px-3 pb-1 pt-1.5 text-xs font-semibold text-muted">More destinations</p>
          {more.map((n) => (
            <MenuLink key={n.href} item={n} active={isActive(n.href)} />
          ))}
        </>
      )}
    </Dropdown>
  );
}

function ThemeSwitch() {
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const opts = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Monitor },
  ] as const;
  return (
    <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-2 p-1" role="radiogroup" aria-label="Theme">
      {opts.map((o) => (
        <button
          key={o.id}
          role="radio"
          aria-checked={theme === o.id}
          onClick={() => setSettings({ theme: o.id })}
          className={clsx("flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-semibold transition", theme === o.id ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink")}
        >
          <o.icon className="h-3.5 w-3.5" /> {o.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Dropdown({
  pathname,
  label,
  children,
  align,
  ariaLabel,
  buttonClass,
  className,
  wide,
}: {
  pathname: string;
  label: (open: boolean) => ReactNode;
  children: ReactNode;
  align: "left" | "right";
  ariaLabel: string;
  buttonClass?: string;
  className?: string;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", key);
    };
  }, [open]);

  return (
    <div className={clsx("relative flex h-full items-center", className)} ref={ref}>
      <button ref={btn} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="true" aria-label={ariaLabel} className={clsx("flex items-center", buttonClass)}>
        {label(open)}
      </button>
      {open && (
        <div
          className={clsx(
            "pro-menu absolute top-[calc(100%+6px)] z-50 max-h-[75vh] overflow-y-auto rounded-xl border border-line bg-surface p-1.5",
            align === "right" ? "right-0" : "left-0",
            wide ? "w-72" : "w-56",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MenuLink({ item, active, className }: { item: NavItem; active: boolean; className?: string }) {
  const I = item.icon;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={clsx("flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition", active ? "bg-accent-soft text-accent" : "text-ink hover:bg-surface-2", className)}
    >
      <I className={clsx("h-4 w-4 shrink-0", active ? "text-accent" : "text-muted")} strokeWidth={2} /> {item.label}
    </Link>
  );
}

function Divider() {
  return <div className="my-1.5 h-px bg-line" />;
}

/* ------------------------------------------------------------------ */

/** Phones: four tabs plus a "More" sheet with everything else. */
function BottomBar({ pathname, tabs, more, isActive }: { pathname: string; tabs: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const primary = tabs.slice(0, 4);
  const rest = [...tabs.slice(4), ...more];
  const restActive = rest.some((n) => isActive(n.href)) || isActive("/settings") || isActive("/profile");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);

  return (
    <>
      <nav className="pro-bottombar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden" aria-label="Primary">
        <div className="mx-auto flex max-w-[560px]">
          {primary.map((n) => {
            const active = isActive(n.href);
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={clsx("flex min-w-0 flex-1 flex-col items-center gap-1 pb-2 pt-2.5 text-[11px] font-semibold", active ? "text-accent" : "text-muted")}>
                <n.icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
                <span className="max-w-full truncate px-1">{n.label}</span>
              </Link>
            );
          })}
          <button onClick={() => setOpen(true)} aria-expanded={open} aria-haspopup="dialog" className={clsx("flex min-w-0 flex-1 flex-col items-center gap-1 pb-2 pt-2.5 text-[11px] font-semibold", restActive ? "text-accent" : "text-muted")}>
            <Ellipsis className="h-5 w-5" />
            <span>More</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="More">
          <button className="absolute inset-0 bg-black/40" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="pro-menu absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-surface px-3 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3">
            <div className="flex items-center justify-between px-2 pb-2">
              <p className="text-sm font-bold text-ink">More</p>
              <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-surface-2" aria-label="Close" autoFocus>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {rest.map((n) => (
                <MenuLink key={n.href} item={n} active={isActive(n.href)} />
              ))}
              <MenuLink item={{ href: "/profile", label: "Profile", icon: UserRound, color: "" }} active={isActive("/profile")} />
              <MenuLink item={{ href: "/settings", label: "Settings", icon: Settings, color: "" }} active={isActive("/settings")} />
            </div>
            <div className="mt-3 border-t border-line px-2 pt-3">
              <p className="mb-1.5 text-xs font-semibold text-muted">Theme</p>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
