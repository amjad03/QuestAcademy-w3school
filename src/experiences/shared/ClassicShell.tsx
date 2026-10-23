"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Ellipsis, Moon, Search, Settings, Sun, Video } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { Wordmark } from "@/components/brand/Logo";
import { StatsBar } from "@/components/shell/StatsBar";
import { useLearner } from "@/lib/store";
import type { ShellProps } from "../types";

/** The original Quest Academy frame: left sidebar, mobile tab bar. */
export function ClassicShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar pathname={pathname} nav={nav} more={more} isActive={isActive} openSearch={openSearch} />
      <div className="md:pl-[88px] lg:pl-[256px]">
        <div className="sticky top-0 z-30 border-b-2 border-line bg-surface px-4 py-2 md:hidden">
          <StatsBar compact />
        </div>
        <main className="pb-24 md:pb-0">{children}</main>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-line bg-surface md:hidden" aria-label="Primary">
        {nav.slice(0, 5).map((n) => {
          const active = isActive(n.href);
          return (
            <Link key={n.href} href={n.href} className="flex flex-1 flex-col items-center gap-0.5 py-2" aria-current={active ? "page" : undefined} aria-label={n.label}>
              <span className={clsx("grid h-10 w-12 place-items-center rounded-xl border-2 transition", active ? "border-accent/40 bg-accent-soft" : "border-transparent")}>
                <n.icon className="h-6 w-6" style={{ color: active ? n.color : "rgb(var(--muted))" }} strokeWidth={2.4} />
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function Sidebar({ pathname, nav, more, isActive, openSearch }: Omit<ShellProps, "children">) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, []);

  const dark = theme === "dark";

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[88px] flex-col border-r-2 border-line bg-surface px-3 py-6 md:flex lg:w-[256px] lg:px-4">
      <Link href="/learn" className="mb-7 flex items-center gap-2.5 px-2.5" aria-label="Quest Academy">
        <LogoMark size={40} />
        <Wordmark className="hidden lg:block" />
      </Link>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Primary">
        {nav.map((n) => {
          const active = isActive(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "flex items-center gap-4 rounded-xl border-2 px-3 py-2.5 text-[15px] font-extrabold uppercase tracking-wide transition",
                active ? "border-accent/40 bg-accent-soft text-accent" : "border-transparent text-muted hover:bg-surface-2",
              )}
              title={n.label}
            >
              <n.icon className="h-7 w-7 shrink-0" style={{ color: n.color }} strokeWidth={2.4} />
              <span className="hidden lg:inline">{n.label}</span>
            </Link>
          );
        })}
        <button onClick={openSearch} className="flex items-center gap-4 rounded-xl border-2 border-transparent px-3 py-2.5 text-[15px] font-extrabold uppercase tracking-wide text-muted transition hover:bg-surface-2" title="Search (⌘K)">
          <Search className="h-7 w-7 shrink-0 text-muted" strokeWidth={2.4} />
          <span className="hidden lg:inline">Search</span>
        </button>
        <div className="relative mt-auto" ref={ref}>
          <button onClick={() => setOpen((m) => !m)} className="flex w-full items-center gap-4 rounded-xl border-2 border-transparent px-3 py-2.5 text-[15px] font-extrabold uppercase tracking-wide text-muted transition hover:bg-surface-2" aria-expanded={open}>
            <Ellipsis className="h-7 w-7 shrink-0" strokeWidth={2.4} />
            <span className="hidden lg:inline">More</span>
          </button>
          {open && (
            <div className="card absolute bottom-14 left-0 max-h-[70vh] w-60 overflow-y-auto p-1.5 shadow-lift">
              {more.map((n) => (
                <MenuLink key={n.href} href={n.href} icon={<n.icon className="h-5 w-5" style={{ color: n.color }} />} label={n.label} />
              ))}
              <div className="my-1 border-t-2 border-line" />
              <MenuLink href="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
              <MenuLink href="/studio/videos" icon={<Video className="h-5 w-5" />} label="Video mapping" />
              <button onClick={() => setSettings({ theme: dark ? "light" : "dark" })} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-surface-2">
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />} {dark ? "Light mode" : "Dark mode"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

function MenuLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-surface-2">
      {icon} {label}
    </Link>
  );
}
