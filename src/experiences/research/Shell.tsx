"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import clsx from "clsx";
import { Menu, Moon, Search, Settings, Sun, X } from "lucide-react";
import { useLearner } from "@/lib/store";
import type { NavItem, ShellProps } from "../types";

/** Shorter, plainer labels for the reading-room top bar. */
const LABELS: Record<string, string> = {
  "/code/playground": "Code",
  "/plan": "Plan",
  "/exam/formulas": "Formulas",
};
const label = (n: NavItem) => LABELS[n.href] ?? n.label;

/** How many primary links fit inline at lg; the rest join "More" until xl. */
const LG_COUNT = 5;

function subscribeDark(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}

/** Whether the page is currently drawn dark (respects the "system" setting). */
function useIsDark() {
  return useSyncExternalStore(
    subscribeDark,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );
}

/** Research frame: a thin top bar with a serif wordmark and text links. No sidebar, no game layer. */
export function ResearchShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  const [sheet, setSheet] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const setSettings = useLearner((s) => s.setSettings);
  const dark = useIsDark();

  useEffect(() => {
    setSheet(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = (e: MouseEvent) => moreRef.current && !moreRef.current.contains(e.target as Node) && setMoreOpen(false);
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setSheet(false);
      }
    };
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  useEffect(() => {
    if (!sheet) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sheet]);

  const toggleTheme = () => setSettings({ theme: dark ? "light" : "dark" });
  const overflow = nav.slice(LG_COUNT);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <a href="#rs-main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-bg">
        <div className="mx-auto flex h-14 max-w-[1240px] items-center gap-4 px-4 sm:px-6">
          <Link href="/learn" className="rs-serif shrink-0 text-[1.15rem] font-semibold tracking-[0.02em] text-ink hover:no-underline" style={{ fontVariantCaps: "small-caps" }} aria-label="Quest Academy, workspace">
            Quest Academy
          </Link>

          <nav aria-label="Primary" className="ml-4 hidden min-w-0 items-center gap-5 lg:flex">
            {nav.map((n, i) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "whitespace-nowrap border-b py-1 text-[0.86rem] transition-colors",
                    i >= LG_COUNT && "hidden xl:inline",
                    active ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink",
                  )}
                >
                  {label(n)}
                </Link>
              );
            })}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                
                className="whitespace-nowrap border-b border-transparent py-1 text-[0.86rem] text-muted transition-colors hover:text-ink"
              >
                More
              </button>
              {moreOpen && (
                <div className="absolute left-0 top-9 z-50 max-h-[70vh] w-60 overflow-y-auto rounded-md border border-line bg-surface py-2">
                  {overflow.map((n) => (
                    <MenuItem key={n.href} item={n} active={isActive(n.href)} className="xl:hidden" />
                  ))}
                  {overflow.length > 0 && <div className="my-2 border-t border-line xl:hidden" />}
                  {more.map((n) => (
                    <MenuItem key={n.href} item={n} active={isActive(n.href)} />
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={openSearch}
              className="hidden h-8 items-center gap-2 rounded border border-line bg-surface px-2.5 text-[0.82rem] text-muted transition-colors hover:border-ink/40 hover:text-ink sm:flex sm:w-44 xl:w-52"
              aria-label="Search (Command K)"
            >
              <Search className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
              <span className="flex-1 text-left">Search</span>
              <kbd className="rounded border border-line px-1 font-sans text-[0.7rem]">⌘K</kbd>
            </button>
            <IconButton label="Search" onClick={openSearch} className="sm:hidden">
              <Search className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </IconButton>
            <IconButton label={dark ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleTheme}>
              {dark ? <Sun className="h-[18px] w-[18px]" strokeWidth={1.8} /> : <Moon className="h-[18px] w-[18px]" strokeWidth={1.8} />}
            </IconButton>
            <Link
              href="/settings"
              aria-label="Settings"
              aria-current={pathname.startsWith("/settings") ? "page" : undefined}
              className="hidden h-8 w-8 place-items-center rounded text-muted transition-colors hover:text-ink lg:grid"
              title="Settings"
            >
              <Settings className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </Link>
            <IconButton label={sheet ? "Close menu" : "Open menu"} onClick={() => setSheet((o) => !o)} className="lg:hidden" expanded={sheet}>
              {sheet ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
            </IconButton>
          </div>
        </div>

        {sheet && (
          <div className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden" id="rs-menu">
            <nav aria-label="Menu" className="mx-auto max-w-[640px] px-4 pb-12 pt-4 sm:px-6">
              <p className="eyebrow">Sections</p>
              <ul className="mt-1">
                {nav.map((n) => (
                  <SheetLink key={n.href} item={n} active={isActive(n.href)} />
                ))}
              </ul>
              <p className="eyebrow mt-6">Elsewhere</p>
              <ul className="mt-1">
                {more.map((n) => (
                  <SheetLink key={n.href} item={n} active={isActive(n.href)} />
                ))}
                <li>
                  <Link href="/settings" className="flex items-center justify-between border-b border-line py-3 text-[0.95rem] text-ink">
                    Settings
                  </Link>
                </li>
              </ul>
              <button type="button" onClick={toggleTheme} className="mt-6 flex items-center gap-2 text-[0.9rem] text-muted hover:text-ink">
                {dark ? <Sun className="h-4 w-4" strokeWidth={1.8} /> : <Moon className="h-4 w-4" strokeWidth={1.8} />}
                {dark ? "Use light theme" : "Use dark theme"}
              </button>
            </nav>
          </div>
        )}
      </header>

      <main id="rs-main" className="pb-16">
        {children}
      </main>
    </div>
  );
}

function IconButton({ label: l, onClick, children, className, expanded }: { label: string; onClick: () => void; children: React.ReactNode; className?: string; expanded?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={l}
      title={l}
      aria-expanded={expanded}
      className={clsx("grid h-8 w-8 place-items-center rounded text-muted transition-colors hover:text-ink", className)}
    >
      {children}
    </button>
  );
}

function MenuItem({ item, active, className }: { item: NavItem; active: boolean; className?: string }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={clsx("block px-4 py-1.5 text-[0.86rem] transition-colors hover:bg-surface-2", active ? "text-accent" : "text-ink", className)}
    >
      {label(item)}
    </Link>
  );
}

function SheetLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <li>
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={clsx("flex items-center justify-between border-b border-line py-3 text-[0.95rem]", active ? "text-accent" : "text-ink")}
      >
        <span className={clsx(active && "rs-serif text-[1.02rem]")}>{label(item)}</span>
        {active && <span className="rs-sc text-xs text-muted">current</span>}
      </Link>
    </li>
  );
}
