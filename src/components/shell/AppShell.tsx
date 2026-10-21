"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { CalendarDays, Dumbbell, Ellipsis, Gamepad2, House, LayoutGrid, Library, Moon, NotebookPen, Printer, Route, ScrollText, Search, Settings, ShieldHalf, Sigma, SquareTerminal, Sticker, Store, Sun, Target, TrendingUp, Trophy, UserRound, Users, Video } from "lucide-react";
import { useMode } from "@/lib/useMode";
import { LogoMark } from "@/components/brand/Mascot";
import { Wordmark } from "@/components/brand/Logo";
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import { StatsBar } from "./StatsBar";

const NAV_ITEMS = [
  { href: "/learn", label: "Learn", icon: House, color: "#2F6BFF" },
  { href: "/courses", label: "Courses", icon: Library, color: "#7C4DFF" },
  { href: "/pathways", label: "Pathways", icon: Route, color: "#7C4DFF" },
  { href: "/plan", label: "Study plan", icon: CalendarDays, color: "#2EBE70" },
  { href: "/practice", label: "Practice", icon: Dumbbell, color: "#2EBE70" },
  { href: "/exam", label: "Exam prep", icon: Target, color: "#FF4B4B" },
  { href: "/exam/formulas", label: "Formulas", icon: Sigma, color: "#FF8A00" },
  { href: "/code/playground", label: "Code lab", icon: SquareTerminal, color: "#334155" },
  { href: "/kids/play", label: "Games", icon: Gamepad2, color: "#EC4899" },
  { href: "/stickers", label: "Stickers", icon: Sticker, color: "#FF8A00" },
  { href: "/leaderboard", label: "Leagues", icon: ShieldHalf, color: "#FFB800" },
  { href: "/quests", label: "Quests", icon: ScrollText, color: "#FF8A00" },
  { href: "/shop", label: "Shop", icon: Store, color: "#14B8A6" },
  { href: "/library", label: "Library", icon: LayoutGrid, color: "#2F6BFF" },
  { href: "/notebook", label: "Notebook", icon: NotebookPen, color: "#7C4DFF" },
  { href: "/insights", label: "Insights", icon: TrendingUp, color: "#14B8A6" },
  { href: "/worksheets", label: "Worksheets", icon: Printer, color: "#334155" },
  { href: "/competitions", label: "Competitions", icon: Trophy, color: "#FFB800" },
  { href: "/parent", label: "For parents", icon: Users, color: "#EC4899" },
  { href: "/profile", label: "Profile", icon: UserRound, color: "#1CB0F6" },
];

/** Nav items for the current experience profile, in the mode's order. */
function useNav() {
  const mode = useMode();
  return mode.nav
    .map((href) => NAV_ITEMS.find((n) => n.href === href))
    .filter(Boolean)
    .map((n) => (n!.href === "/learn" ? { ...n!, label: mode.homeLabel } : n!));
}

function isActive(pathname: string, href: string) {
  if (href === "/learn") return pathname === "/learn";
  if (href === "/courses") return pathname.startsWith("/courses") || pathname.startsWith("/course/");
  if (href === "/exam") return pathname.startsWith("/exam") && !pathname.startsWith("/exam/formulas");
  return pathname.startsWith(href);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const nav = useNav();
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar pathname={pathname} />
      <div className="md:pl-[88px] lg:pl-[256px]">
        <MobileTopBar />
        <main className="pb-24 md:pb-0">{children}</main>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-line bg-surface md:hidden" aria-label="Primary">
        {nav.slice(0, 5).map((n) => {
          const active = isActive(pathname, n.href);
          return (
            <Link key={n.href} href={n.href} className="flex flex-1 flex-col items-center gap-0.5 py-2" aria-current={active ? "page" : undefined}>
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

function Sidebar({ pathname }: { pathname: string }) {
  const [more, setMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const setPalette = useUi((s) => s.setPalette);
  const nav = useNav();

  useEffect(() => setMore(false), [pathname]);
  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setMore(false);
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", key);
    };
  }, [setPalette]);

  const dark = theme === "dark";

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[88px] flex-col border-r-2 border-line bg-surface px-3 py-6 md:flex lg:w-[256px] lg:px-4">
      <Link href="/learn" className="mb-7 flex items-center gap-2.5 px-2.5" aria-label="Quest Academy">
        <LogoMark size={40} />
        <Wordmark className="hidden lg:block" />
      </Link>
      <nav className="flex flex-1 flex-col gap-1" aria-label="Primary">
        {nav.map((n) => {
          const active = isActive(pathname, n.href);
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
        <button onClick={() => setPalette(true)} className="flex items-center gap-4 rounded-xl border-2 border-transparent px-3 py-2.5 text-[15px] font-extrabold uppercase tracking-wide text-muted transition hover:bg-surface-2" title="Search (⌘K)">
          <Search className="h-7 w-7 shrink-0 text-muted" strokeWidth={2.4} />
          <span className="hidden lg:inline">Search</span>
        </button>
        <div className="relative mt-auto" ref={ref}>
          <button onClick={() => setMore((m) => !m)} className="flex w-full items-center gap-4 rounded-xl border-2 border-transparent px-3 py-2.5 text-[15px] font-extrabold uppercase tracking-wide text-muted transition hover:bg-surface-2" aria-expanded={more}>
            <Ellipsis className="h-7 w-7 shrink-0" strokeWidth={2.4} />
            <span className="hidden lg:inline">More</span>
          </button>
          {more && (
            <div className="card absolute bottom-14 left-0 max-h-[70vh] w-60 overflow-y-auto p-1.5 shadow-lift">
              {NAV_ITEMS.filter((n) => !nav.some((x) => x.href === n.href) && n.href !== "/stickers" && n.href !== "/kids/play").map((n) => (
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

function MobileTopBar() {
  return (
    <div className="sticky top-0 z-30 border-b-2 border-line bg-surface px-4 py-2 md:hidden">
      <StatsBar compact />
    </div>
  );
}

/** Two-column page body: main content + sticky right rail (≥1024px). */
export function PageColumns({ children, rail, wide }: { children: React.ReactNode; rail?: React.ReactNode; wide?: boolean }) {
  return (
    <div className={clsx("mx-auto flex gap-12 px-4 py-6 sm:px-6 lg:py-8", wide ? "max-w-[1180px]" : "max-w-[1060px]")}>
      <div className="min-w-0 flex-1">{children}</div>
      {rail && (
        <aside className="sticky top-6 hidden h-fit w-[340px] shrink-0 space-y-5 lg:block">
          <div className="hidden md:block">
            <StatsBar />
          </div>
          {rail}
        </aside>
      )}
    </div>
  );
}
