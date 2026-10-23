"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Gamepad2, HeartHandshake, House, Lock, Moon, MoreHorizontal, Search, Settings, Sticker, Sun, UserRound, X, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { GrownUpGate } from "@/components/modes/ModeSettings";
import { useLearner } from "@/lib/store";
import { say } from "@/lib/voice";
import { EXPLORE_LINES } from "@/content/voice-lines";
import { useT } from "@/i18n";
import type { NavItem, ShellProps } from "../types";
import { EX, type Col } from "./ui";

const GROWN_UPS = "/parent";

/** The four places a child goes, each with its own colour and word. */
const KID_TABS: { href: string; word: (t: ReturnType<typeof useT>) => string; icon: LucideIcon; col: Col }[] = [
  { href: "/learn", word: (t) => t("explore.nav.learn", "Learn"), icon: House, col: EX.green },
  { href: "/kids/play", word: (t) => t("explore.nav.games", "Games"), icon: Gamepad2, col: EX.pink },
  { href: "/stickers", word: (t) => t("explore.nav.stickers", "Stickers"), icon: Sticker, col: EX.orange },
  { href: "/profile", word: (t) => t("explore.nav.me", "Me"), icon: UserRound, col: EX.blue },
];

/** A lesson page (/course/subject/unit/lesson) is full-focus: no sidebar, no tab bar. */
function isLessonPath(pathname: string) {
  const m = pathname.match(/^\/course\/([^/]+)\/([^/]+)\/([^/]+)/);
  return Boolean(m && m[2] !== "case-studies");
}

/** Explore frame: Duolingo-style sidebar on desktop, a labelled tab bar on phones. */
export function ExploreShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  const t = useT();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [gate, setGate] = useState(false);

  useEffect(() => setMenu(false), [pathname]);

  const tabHrefs = new Set(KID_TABS.map((k) => k.href));
  const extra = [...nav, ...more].filter((n, i, all) => !tabHrefs.has(n.href) && n.href !== GROWN_UPS && all.findIndex((x) => x.href === n.href) === i);
  const grownUpsHref = [...nav, ...more].find((n) => n.href === GROWN_UPS)?.href ?? GROWN_UPS;

  const openGrownUps = () => {
    setMenu(false);
    setGate(true);
    say(t("explore.voice.grownUp", EXPLORE_LINES.grownUp));
  };

  const gateEl = (
    <AnimatePresence>
      {gate && (
        <GrownUpGate
          onPass={() => {
            setGate(false);
            router.push(grownUpsHref);
          }}
          onCancel={() => setGate(false)}
          message={t("explore.gate.message", "To open the grown-up corner, please answer:")}
        />
      )}
    </AnimatePresence>
  );

  if (isLessonPath(pathname)) {
    return (
      <div className="ex-sky min-h-screen">
        <main id="ex-main">{children}</main>
        {gateEl}
      </div>
    );
  }

  return (
    <div className="ex-sky min-h-screen">
      <a href="#ex-main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:font-black">
        {t("explore.skip", "Skip to content")}
      </a>

      {/* Desktop / tablet sidebar */}
      <aside className="ex-sidebar fixed inset-y-0 left-0 z-40 hidden w-[92px] flex-col px-3 py-5 md:flex lg:w-[252px] lg:px-4">
        <Link href="/learn" className="mb-6 flex items-center gap-2.5 rounded-2xl px-2 py-1" aria-label={t("explore.home", "Quest Academy home")}>
          <span className="ex-bounce grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white shadow-[inset_0_-4px_0_rgb(0_0_0/0.08)]">
            <LogoMark size={38} />
          </span>
          <span className="hidden text-[1.45rem] font-black leading-none tracking-tight text-[#2EBE70] lg:block">
            quest<span className="text-[#FF8A00]">academy</span>
          </span>
        </Link>
        <nav className="flex flex-1 flex-col gap-2" aria-label={t("explore.nav.label", "Main")}>
          {KID_TABS.map((k) => (
            <SideItem key={k.href} href={k.href} label={k.word(t)} icon={k.icon} col={k.col} active={isActive(k.href)} />
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-expanded={menu}
              className={clsx("ex-side-item flex w-full items-center gap-4 rounded-2xl px-2 py-2 text-left lg:px-3", menu && "ex-side-active")}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl" style={{ background: `${EX.purple.c}22` }}>
                <MoreHorizontal className="h-8 w-8" strokeWidth={2.8} style={{ color: EX.purple.c }} aria-hidden />
              </span>
              <span className="hidden text-[1.05rem] font-black uppercase tracking-wide lg:block">{t("explore.nav.more", "More")}</span>
              <span className="sr-only lg:hidden">{t("explore.nav.more", "More")}</span>
            </button>
            {menu && <MoreMenu onClose={() => setMenu(false)} extra={extra} openSearch={openSearch} openGrownUps={openGrownUps} placement="side" />}
          </div>
        </nav>
        <button type="button" onClick={openGrownUps} className="ex-side-item mt-3 flex items-center gap-3 rounded-2xl border-2 border-dashed border-line px-2 py-2 text-left text-muted lg:px-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-2">
            <Lock className="h-5 w-5" strokeWidth={2.6} aria-hidden />
          </span>
          <span className="hidden text-sm font-black lg:block">{t("explore.nav.grownUps", "For grown-ups")}</span>
          <span className="sr-only lg:hidden">{t("explore.nav.grownUps", "For grown-ups")}</span>
        </button>
      </aside>

      <main id="ex-main" className="pb-28 md:pb-10 md:pl-[92px] lg:pl-[252px]">
        {children}
      </main>

      {/* Phone tab bar */}
      <nav className="ex-bottombar fixed inset-x-0 bottom-0 z-40 flex gap-0.5 px-1.5 pt-1.5 md:hidden" aria-label={t("explore.nav.label", "Main")}>
        {KID_TABS.map((k) => {
          const active = isActive(k.href);
          return (
            <Link
              key={k.href}
              href={k.href}
              aria-current={active ? "page" : undefined}
              className={clsx("ex-press flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl border-2 px-0.5 py-1", active ? "ex-tab-active" : "border-transparent")}
            >
              <k.icon className="h-7 w-7" strokeWidth={2.6} style={{ color: k.col.c }} aria-hidden />
              <span className="max-w-full truncate text-[12px] font-black leading-tight">{k.word(t)}</span>
            </Link>
          );
        })}
        <button type="button" onClick={() => setMenu(true)} aria-expanded={menu} className={clsx("ex-press flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl border-2 px-0.5 py-1", menu ? "ex-tab-active" : "border-transparent")}>
          <MoreHorizontal className="h-7 w-7" strokeWidth={2.8} style={{ color: EX.purple.c }} aria-hidden />
          <span className="max-w-full truncate text-[12px] font-black leading-tight">{t("explore.nav.more", "More")}</span>
        </button>
      </nav>
      {menu && (
        <div className="md:hidden">
          <MoreMenu onClose={() => setMenu(false)} extra={extra} openSearch={openSearch} openGrownUps={openGrownUps} placement="sheet" />
        </div>
      )}
      {gateEl}
    </div>
  );
}

function SideItem({ href, label, icon: Icon, col, active }: { href: string; label: string; icon: LucideIcon; col: Col; active: boolean }) {
  return (
    <Link href={href} aria-current={active ? "page" : undefined} title={label} className={clsx("ex-side-item flex items-center gap-4 rounded-2xl px-2 py-2 lg:px-3", active && "ex-side-active")}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl" style={{ background: active ? col.c : `${col.c}22`, boxShadow: active ? `inset 0 -4px 0 ${col.s}` : undefined }}>
        <Icon className="h-7 w-7" strokeWidth={2.6} style={{ color: active ? "#fff" : col.c }} aria-hidden />
      </span>
      <span className="hidden text-[1.05rem] font-black uppercase tracking-wide lg:block" style={active ? { color: col.s } : undefined}>
        {label}
      </span>
      <span className="sr-only lg:hidden">{label}</span>
    </Link>
  );
}

function MoreMenu({ onClose, extra, openSearch, openGrownUps, placement }: { onClose: () => void; extra: NavItem[]; openSearch: () => void; openGrownUps: () => void; placement: "side" | "sheet" }) {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const dark = theme === "dark";

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(el) && !el.closest("[aria-expanded]")) onClose();
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    ref.current?.querySelector<HTMLElement>("button, a")?.focus();
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  const body = (
    <>
      <div className="grid grid-cols-2 gap-2">
        <BigMenuButton onClick={() => { onClose(); openSearch(); }} icon={<Search className="h-6 w-6" strokeWidth={2.6} />} label={t("explore.menu.search", "Search")} color={EX.blue} />
        <BigMenuButton onClick={() => setSettings({ theme: dark ? "light" : "dark" })} icon={dark ? <Sun className="h-6 w-6" strokeWidth={2.6} /> : <Moon className="h-6 w-6" strokeWidth={2.6} />} label={dark ? t("explore.menu.day", "Day") : t("explore.menu.night", "Night")} color={EX.purple} pressed={dark} />
        <BigMenuButton href="/settings" icon={<Settings className="h-6 w-6" strokeWidth={2.6} />} label={t("explore.menu.settings", "Settings")} color={EX.orange} />
        <BigMenuButton onClick={openGrownUps} icon={<HeartHandshake className="h-6 w-6" strokeWidth={2.6} />} label={t("explore.nav.grownUps", "For grown-ups")} color={EX.pink} />
      </div>
      {extra.length > 0 && (
        <>
          <p className="mt-4 px-1 text-sm font-black text-muted">{t("explore.menu.morePlaces", "More places")}</p>
          <ul className="mt-1.5 space-y-0.5">
            {extra.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={onClose} className="flex items-center gap-3 rounded-2xl px-2.5 py-2 font-extrabold hover:bg-surface-2">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full" style={{ background: `${n.color}22` }}>
                    <n.icon className="h-5 w-5" style={{ color: n.color }} strokeWidth={2.5} aria-hidden />
                  </span>
                  {t(`explore.place.${n.href.replace(/\W+/g, "")}`, n.label)}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );

  if (placement === "side") {
    return (
      <div ref={ref} id={id} className="ex-menu absolute bottom-0 left-[calc(100%+12px)] z-50 max-h-[80vh] w-[300px] overflow-y-auto p-3">
        {body}
      </div>
    );
  }
  return (
    <div className="fixed inset-0 z-50 flex items-end bg-[#0b2a55]/40" onClick={onClose}>
      <div ref={ref} id={id} role="dialog" aria-modal="true" aria-label={t("explore.nav.more", "More")} onClick={(e) => e.stopPropagation()} className="ex-menu mx-2 mb-[84px] max-h-[75vh] w-full overflow-y-auto p-3">
        <div className="flex items-center justify-between px-1 pb-2">
          <p className="text-lg font-black">{t("explore.nav.more", "More")}</p>
          <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full hover:bg-surface-2" aria-label={t("explore.close", "Close")}>
            <X className="h-5 w-5" strokeWidth={2.8} />
          </button>
        </div>
        {body}
      </div>
    </div>
  );
}

function BigMenuButton({ href, onClick, icon, label, color, pressed }: { href?: string; onClick?: () => void; icon: React.ReactNode; label: string; color: Col; pressed?: boolean }) {
  const cls = "ex-press flex flex-col items-center justify-center gap-1 rounded-[1.25rem] px-2 py-3 text-center text-[15px] font-black leading-tight text-white";
  const style = { background: color.c, boxShadow: `inset 0 -5px 0 ${color.s}` };
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
