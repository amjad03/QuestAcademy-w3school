"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { HeartHandshake, Moon, Search, Settings, Star, Sticker, Sun, UserRound, X } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { Avatar } from "@/components/shell/Avatar";
import { useLearner } from "@/lib/store";
import type { NavItem, ShellProps } from "../types";
import { EX_ROTATION } from "./ui";

const KID_LABEL: Record<string, string> = {
  "/learn": "Home",
  "/kids/play": "Games",
  "/stickers": "Stickers",
  "/profile": "Me",
  "/courses": "Adventures",
};

const GROWN_UPS = "/parent";

/** Explore frame: a chunky colourful top bar (desktop) and a labelled bottom tab bar (phones). */
export function ExploreShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  // "For grown-ups" lives in the avatar menu, not in the kids' tabs.
  const tabs = nav.filter((n) => n.href !== GROWN_UPS).slice(0, 5);
  const grownUps = nav.find((n) => n.href === GROWN_UPS) ?? more.find((n) => n.href === GROWN_UPS);
  const extra = more.filter((n) => n.href !== GROWN_UPS);

  return (
    <div className="ex-sky min-h-screen">
      <a href="#ex-main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:font-black">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
        <div className="ex-topbar mx-auto flex max-w-[1180px] items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4">
          <Link href="/learn" className="flex shrink-0 items-center gap-2 rounded-full pr-2" aria-label="Quest Academy home">
            <span className="ex-bounce grid h-12 w-12 place-items-center rounded-full bg-white shadow-[inset_0_-4px_0_rgb(0_0_0/0.08)]">
              <LogoMark size={38} />
            </span>
            <span className="hidden text-xl font-black leading-none tracking-tight text-ink xl:block">
              Quest<span className="text-[#FF8A00]">Academy</span>
            </span>
          </Link>

          <nav className="mx-auto hidden items-center gap-2 md:flex" aria-label="Primary">
            {tabs.map((n, i) => (
              <TopTab key={n.href} item={n} active={isActive(n.href)} color={EX_ROTATION[i % EX_ROTATION.length]} />
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2 md:ml-0">
            <Counters />
            <AvatarMenu pathname={pathname} extra={extra} grownUps={grownUps} openSearch={openSearch} />
          </div>
        </div>
      </header>

      <main id="ex-main" className="pb-32 md:pb-10">
        {children}
      </main>

      <nav className="ex-bottombar fixed inset-x-2 bottom-2 z-40 flex gap-1 p-1.5 md:hidden" aria-label="Primary">
        {tabs.map((n, i) => {
          const active = isActive(n.href);
          const col = EX_ROTATION[i % EX_ROTATION.length];
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={clsx("ex-press flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5", active ? "text-white" : "text-ink")}
              style={active ? { background: col.c, boxShadow: `inset 0 -4px 0 ${col.s}` } : undefined}
            >
              <n.icon className="h-7 w-7" strokeWidth={2.5} style={{ color: active ? "#fff" : col.c }} aria-hidden />
              <span className="max-w-full truncate text-[13px] font-black leading-tight">{KID_LABEL[n.href] ?? n.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function TopTab({ item: n, active, color }: { item: NavItem; active: boolean; color: { c: string; s: string } }) {
  return (
    <Link
      href={n.href}
      aria-current={active ? "page" : undefined}
      className={clsx("ex-press ex-tab flex items-center gap-2 rounded-[1.25rem] px-4 py-2 text-[1.05rem] font-black", active ? "text-white" : "text-ink hover:bg-white/70 dark:hover:bg-white/10")}
      style={active ? { background: color.c, boxShadow: `inset 0 -5px 0 ${color.s}` } : undefined}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: active ? "rgb(255 255 255 / 0.22)" : `${color.c}22` }}>
        <n.icon className="h-6 w-6" strokeWidth={2.5} style={{ color: active ? "#fff" : color.c }} aria-hidden />
      </span>
      {KID_LABEL[n.href] ?? n.label}
    </Link>
  );
}

/** Stars (lessons finished) and stickers collected. */
function Counters() {
  const stars = useLearner((s) => Object.keys(s.lessons).length);
  const stickers = useLearner((s) => Object.keys(s.stickers).length);
  return (
    <>
      <Link href="/profile" className="ex-press ex-counter flex items-center gap-1.5 rounded-full px-3 py-1.5 text-lg font-black text-[#8a5a00] dark:text-[#FFD45C]" aria-label={`${stars} stars collected`} title="Stars: one for every lesson you finish">
        <Star className="h-6 w-6 fill-[#FFC21A] text-[#D99A00]" strokeWidth={2.4} aria-hidden />
        <span className="tabular-nums">{stars}</span>
      </Link>
      <Link href="/stickers" className="ex-press ex-counter hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-lg font-black text-[#B0206A] min-[380px]:flex dark:text-[#FF8CC6]" aria-label={`${stickers} stickers collected`} title="My sticker book">
        <Sticker className="h-6 w-6 text-[#EC4899]" strokeWidth={2.4} aria-hidden />
        <span className="tabular-nums">{stickers}</span>
      </Link>
    </>
  );
}

function AvatarMenu({ pathname, extra, grownUps, openSearch }: { pathname: string; extra: NavItem[]; grownUps?: NavItem; openSearch: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const name = useLearner((s) => s.profile.name);
  const avatar = useLearner((s) => s.profile.avatar);
  const frame = useLearner((s) => s.profile.frame);
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const dark = theme === "dark";

  useEffect(() => setOpen(false), [pathname]);
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

  const first = name.trim().split(" ")[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="My menu"
        className="ex-press grid place-items-center rounded-full p-0.5 ring-4 ring-white/80 dark:ring-white/15"
      >
        <Avatar name={name} color={avatar} frame={frame} size={46} />
      </button>
      {open && (
        <div id={menuId} className="ex-menu absolute right-0 top-[3.6rem] z-50 max-h-[75vh] w-[min(20rem,calc(100vw-1.5rem))] overflow-y-auto p-3">
          <div className="flex items-center justify-between gap-2 px-1 pb-2">
            <p className="text-lg font-black">{first ? `Hi, ${first}!` : "Hi, explorer!"}</p>
            <button type="button" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface-2" aria-label="Close menu">
              <X className="h-5 w-5" strokeWidth={2.8} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <BigMenuButton onClick={() => { setOpen(false); openSearch(); }} icon={<Search className="h-6 w-6" strokeWidth={2.6} />} label="Search" color="#2F80FF" />
            <BigMenuButton onClick={() => setSettings({ theme: dark ? "light" : "dark" })} icon={dark ? <Sun className="h-6 w-6" strokeWidth={2.6} /> : <Moon className="h-6 w-6" strokeWidth={2.6} />} label={dark ? "Day" : "Night"} color="#8B5CF6" pressed={dark} />
            <BigMenuButton href="/profile" icon={<UserRound className="h-6 w-6" strokeWidth={2.6} />} label="My page" color="#14B8A6" />
            <BigMenuButton href="/settings" icon={<Settings className="h-6 w-6" strokeWidth={2.6} />} label="Settings" color="#FF8A00" />
          </div>
          {extra.length > 0 && (
            <>
              <p className="mt-4 px-1 text-sm font-black text-muted">More places</p>
              <ul className="mt-1.5 space-y-0.5">
                {extra.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="flex items-center gap-3 rounded-2xl px-2.5 py-2 font-extrabold hover:bg-surface-2">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ background: `${n.color}22` }}>
                        <n.icon className="h-5 w-5" style={{ color: n.color }} strokeWidth={2.5} aria-hidden />
                      </span>
                      {KID_LABEL[n.href] ?? n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {grownUps && (
            <Link href={grownUps.href} className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-dashed border-line px-3 py-2.5 font-extrabold text-muted hover:bg-surface-2">
              <HeartHandshake className="h-6 w-6 text-[#EC4899]" strokeWidth={2.5} aria-hidden /> For grown-ups
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function BigMenuButton({ href, onClick, icon, label, color, pressed }: { href?: string; onClick?: () => void; icon: React.ReactNode; label: string; color: string; pressed?: boolean }) {
  const cls = "ex-press flex flex-col items-center gap-1 rounded-[1.25rem] px-2 py-3 text-[15px] font-black text-white";
  const style = { background: color, boxShadow: "inset 0 -5px 0 rgb(0 0 0 / 0.18)" };
  return href ? (
    <Link href={href} className={cls} style={style}>
      {icon}
      {label}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={cls} style={style} aria-pressed={pressed}>
      {icon}
      {label}
    </button>
  );
}
