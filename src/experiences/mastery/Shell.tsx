"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronRight, Command, Ellipsis, Files, Menu, Moon, Search, Settings, Sun, X } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useOutline } from "@/components/learn/LearnHome";
import { liveStreak, useLearner } from "@/lib/store";
import type { NavItem, ShellProps } from "../types";
import { WorkspaceCtx, courseFromPath, pad2, titleCase, useMedia } from "./workspace";

const EXPLORER_KEY = "qa-mastery-explorer";

/**
 * Mastery frame: an IDE-style workspace. Dark activity bar (icons only),
 * an explorer panel with navigation and the open course's units, a top bar
 * with breadcrumb and command palette, and a slim status bar. Phones get a
 * top bar, a bottom tab bar and the explorer as a drawer.
 */
export function MasteryShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  const wide = useMedia("(min-width: 1024px)");
  const [open, setOpen] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const [outletEl, setOutletEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(EXPLORER_KEY) === "closed") setOpen(false);
    } catch {}
  }, []);
  useEffect(() => {
    setDrawer(false);
  }, [pathname]);
  useEffect(() => {
    if (!drawer) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [drawer]);

  const toggleExplorer = useCallback(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setOpen((o) => {
        try {
          localStorage.setItem(EXPLORER_KEY, o ? "closed" : "open");
        } catch {}
        return !o;
      });
    } else setDrawer((d) => !d);
  }, []);

  const ctx = useMemo(() => ({ outletEl, explorerDocked: wide && open }), [outletEl, wide, open]);
  const course = useCourseInContext(pathname);

  return (
    <WorkspaceCtx.Provider value={ctx}>
      <div className="mx-shell min-h-screen bg-bg">
        <a href="#mx-main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm">
          Skip to content
        </a>
        <ActivityBar nav={nav} more={more} isActive={isActive} pathname={pathname} explorerOpen={wide ? open : drawer} onToggleExplorer={toggleExplorer} />

        {drawer && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setDrawer(false)} aria-hidden />}
        <aside
          id="mx-explorer"
          aria-label="Explorer"
          className={clsx(
            "mx-explorer fixed bottom-0 top-0 z-50 flex w-[272px] max-w-[85vw] flex-col border-r border-line bg-surface-2 md:left-12 lg:z-30 lg:w-[248px] md:bottom-6",
            "left-0",
            !drawer && "max-lg:hidden",
            !open && "lg:hidden",
          )}
        >
          <Explorer nav={nav} more={more} isActive={isActive} pathname={pathname} course={course} setOutlet={setOutletEl} onClose={() => (wide ? toggleExplorer() : setDrawer(false))} />
        </aside>

        <div className={clsx("min-w-0 md:pl-12", open && "lg:pl-[296px]")}>
          <TopBar pathname={pathname} nav={nav} more={more} openSearch={openSearch} onMenu={() => setDrawer(true)} />
          <main id="mx-main" className="pb-24 md:pb-10">
            {children}
          </main>
        </div>

        <StatusBar course={course} />
        <BottomBar nav={nav} isActive={isActive} onMore={() => setDrawer(true)} moreOpen={drawer} />
      </div>
    </WorkspaceCtx.Provider>
  );
}

/** The course the learner is looking at (URL first, then their current course). */
function useCourseInContext(pathname: string) {
  const current = useLearner((s) => s.profile.course);
  return courseFromPath(pathname) ?? current ?? null;
}

/* ------------------------------------------------------------------ */
/* Activity bar                                                         */
/* ------------------------------------------------------------------ */

function ActivityBar({
  nav,
  more,
  isActive,
  pathname,
  explorerOpen,
  onToggleExplorer,
}: Pick<ShellProps, "nav" | "more" | "isActive" | "pathname"> & { explorerOpen: boolean; onToggleExplorer: () => void }) {
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setMenu(false);
  }, [pathname]);
  useEffect(() => {
    if (!menu) return;
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setMenu(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("mousedown", close);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("mousedown", close);
      window.removeEventListener("keydown", esc);
    };
  }, [menu]);

  return (
    <nav aria-label="Primary" className="mx-activity fixed bottom-0 left-0 top-0 z-40 hidden w-12 flex-col items-center md:bottom-6 md:flex">
      <Link href="/learn" className="mx-act-btn mt-1.5" aria-label="Quest Academy dashboard" title="Quest Academy">
        <LogoMark size={26} />
      </Link>
      <button onClick={onToggleExplorer} className={clsx("mx-act-btn", explorerOpen && "is-on")} aria-label="Toggle explorer" aria-controls="mx-explorer" aria-expanded={explorerOpen} title="Explorer">
        <Files className="h-[22px] w-[22px]" strokeWidth={1.6} />
      </button>
      <div className="mx-0 my-1 h-px w-6 bg-white/10" aria-hidden />
      <ul className="flex w-full flex-1 flex-col items-center overflow-y-auto overflow-x-hidden">
        {nav.map((n) => {
          const active = isActive(n.href);
          return (
            <li key={n.href} className="w-full">
              <Link href={n.href} className={clsx("mx-act-btn", active && "is-active")} aria-current={active ? "page" : undefined} aria-label={n.label} title={n.label}>
                <n.icon className="h-[22px] w-[22px]" strokeWidth={1.6} />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="relative w-full pb-1" ref={ref}>
        <button onClick={() => setMenu((m) => !m)} className={clsx("mx-act-btn", menu && "is-on")} aria-label="More destinations" aria-expanded={menu} aria-haspopup="menu" title="More">
          <Ellipsis className="h-[22px] w-[22px]" strokeWidth={1.6} />
        </button>
        <Link href="/settings" className={clsx("mx-act-btn", pathname.startsWith("/settings") && "is-active")} aria-label="Settings" title="Settings" aria-current={pathname.startsWith("/settings") ? "page" : undefined}>
          <Settings className="h-[22px] w-[22px]" strokeWidth={1.6} />
        </Link>
        {menu && (
          <div role="menu" className="mx-pop absolute bottom-2 left-full z-50 ml-2 max-h-[70vh] w-60 overflow-y-auto p-1">
            <p className="mx-label px-2.5 pb-1 pt-2">More</p>
            {more.map((n) => (
              <Link key={n.href} role="menuitem" href={n.href} className="mx-row" aria-current={isActive(n.href) ? "page" : undefined}>
                <n.icon className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.8} />
                <span className="truncate">{n.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Explorer                                                             */
/* ------------------------------------------------------------------ */

function Explorer({
  nav,
  more,
  isActive,
  pathname,
  course,
  setOutlet,
  onClose,
}: Pick<ShellProps, "nav" | "more" | "isActive" | "pathname"> & { course: string | null; setOutlet: (el: HTMLElement | null) => void; onClose: () => void }) {
  return (
    <>
      <div className="flex h-11 shrink-0 items-center gap-2 border-b border-line px-3">
        <span className="mx-label flex-1">Explorer</span>
        <button onClick={onClose} className="grid h-7 w-7 place-items-center rounded-md text-muted hover:bg-surface hover:text-ink" aria-label="Close explorer">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pb-6">
        <Section title="Workspace" defaultOpen>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <ExplorerLink item={n} active={isActive(n.href)} />
              </li>
            ))}
          </ul>
        </Section>

        {/* The lesson page portals its unit outline here. */}
        <div ref={setOutlet} />

        <CourseSection slug={course} pathname={pathname} />

        <Section title="More">
          <ul>
            {more.map((n) => (
              <li key={n.href}>
                <ExplorerLink item={n} active={isActive(n.href)} />
              </li>
            ))}
            <li>
              <Link href="/settings" className={clsx("mx-tree", pathname.startsWith("/settings") && "is-active")} aria-current={pathname.startsWith("/settings") ? "page" : undefined}>
                <Settings className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                <span className="truncate">Settings</span>
              </Link>
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}

export function Section({ title, aside, defaultOpen = false, children }: { title: string; aside?: React.ReactNode; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border-b border-line/70">
      <div className="flex items-center pr-2">
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="mx-label flex min-w-0 flex-1 items-center gap-1 px-2 py-2 text-left hover:text-ink">
          <ChevronRight className={clsx("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-90")} />
          <span className="truncate">{title}</span>
        </button>
        {aside}
      </div>
      {open && <div className="pb-2">{children}</div>}
    </section>
  );
}

function ExplorerLink({ item: n, active }: { item: NavItem; active: boolean }) {
  return (
    <Link href={n.href} className={clsx("mx-tree", active && "is-active")} aria-current={active ? "page" : undefined}>
      <n.icon className="h-4 w-4 shrink-0" strokeWidth={1.8} />
      <span className="truncate">{n.label}</span>
    </Link>
  );
}

function CourseSection({ slug, pathname }: { slug: string | null; pathname: string }) {
  const outline = useOutline(slug);
  const lessons = useLearner((s) => s.lessons);
  const catalog = useCatalog();
  const card = catalog.find((c) => c.slug === slug);
  const unitInPath = pathname.split("/")[3];

  if (!slug) {
    return (
      <Section title="Course" defaultOpen>
        <p className="px-4 text-[13px] text-muted">No course open.</p>
        <Link href="/courses" className="mx-tree mt-1 text-accent">
          Browse courses
        </Link>
      </Section>
    );
  }

  return (
    <Section
      title={(card?.title ?? titleCase(slug)).toUpperCase()}
      defaultOpen
      aside={
        <Link href="/courses" className="mx-mono shrink-0 rounded px-1.5 py-0.5 text-[10.5px] text-muted hover:bg-surface hover:text-ink" title="Switch course">
          switch
        </Link>
      }
    >
      {!outline ? (
        <div className="space-y-1.5 px-4 py-1" aria-busy>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-4 animate-pulse rounded bg-line/60" />
          ))}
        </div>
      ) : (
        <ul>
          <li>
            <Link href={outline.href} className={clsx("mx-tree", pathname === outline.href && "is-active")} aria-current={pathname === outline.href ? "page" : undefined}>
              <span className="mx-mono w-7 shrink-0 text-[11px] text-muted">idx</span>
              <span className="truncate">Course overview</span>
            </Link>
          </li>
          {outline.units.map((u) => {
            const done = u.lessons.filter((l) => lessons[l.id]).length;
            const here = unitInPath === u.slug && courseFromPath(pathname) === slug;
            const complete = done === u.lessons.length && done > 0;
            return (
              <li key={u.slug}>
                <Link href={u.href} className={clsx("mx-tree", here && "is-active")} aria-current={here && pathname === u.href ? "page" : undefined} title={u.title}>
                  <span className="mx-mono w-7 shrink-0 text-[11px] text-muted">U{pad2(u.index + 1)}</span>
                  <span className="min-w-0 flex-1 truncate">{u.title}</span>
                  <span className={clsx("mx-mono shrink-0 text-[10.5px]", complete ? "text-good" : "text-muted")}>
                    {done}/{u.lessons.length}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Top bar                                                              */
/* ------------------------------------------------------------------ */

function TopBar({ pathname, nav, more, openSearch, onMenu }: Pick<ShellProps, "pathname" | "nav" | "more" | "openSearch"> & { onMenu: () => void }) {
  const catalog = useCatalog();
  const crumbs = useMemo(() => breadcrumb(pathname, [...nav, ...more], (slug) => catalog.find((c) => c.slug === slug)?.title), [pathname, nav, more, catalog]);
  return (
    <header className="mx-topbar sticky top-0 z-20 flex h-11 items-center gap-2 border-b border-line px-2 sm:px-3">
      <button onClick={onMenu} className="mx-icon-btn md:hidden" aria-label="Open explorer" aria-controls="mx-explorer">
        <Menu className="h-[18px] w-[18px]" />
      </button>
      <Link href="/learn" className="shrink-0 md:hidden" aria-label="Dashboard">
        <LogoMark size={24} />
      </Link>

      <nav aria-label="Breadcrumb" className="min-w-0 flex-1">
        <ol className="mx-mono flex min-w-0 items-center gap-1 text-[12.5px] text-muted">
          <li className="hidden shrink-0 sm:block">
            <Link href="/learn" className="rounded px-1 hover:text-ink">
              quest
            </Link>
          </li>
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={c.href} className={clsx("flex min-w-0 items-center gap-1", !last && "hidden sm:flex")}>
                <ChevronRight className={clsx("h-3 w-3 shrink-0 opacity-60", i === 0 && "hidden sm:block")} aria-hidden />
                {last ? (
                  <span aria-current="page" className="truncate font-sans text-[13px] font-medium text-ink">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="truncate rounded px-1 hover:text-ink">
                    {c.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <button onClick={openSearch} className="mx-cmd hidden sm:flex" aria-label="Open command palette" aria-keyshortcuts="Meta+K Control+K">
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span className="flex-1 truncate text-left">Search or jump to…</span>
        <kbd className="mx-kbd">
          <Command className="h-2.5 w-2.5" aria-hidden />K
        </kbd>
      </button>
      <button onClick={openSearch} className="mx-icon-btn sm:hidden" aria-label="Search">
        <Search className="h-[18px] w-[18px]" />
      </button>
      <ThemeToggle />
      <Link href="/settings" className="mx-icon-btn" aria-label="Settings" title="Settings">
        <Settings className="h-[18px] w-[18px]" />
      </Link>
    </header>
  );
}

function breadcrumb(pathname: string, items: NavItem[], courseTitle: (slug: string) => string | undefined) {
  const seg = pathname.split("/").filter(Boolean).map(decodeURIComponent);
  if (!seg.length || (seg[0] === "learn" && seg.length === 1)) return [{ href: "/learn", label: items.find((n) => n.href === "/learn")?.label ?? "Dashboard" }];
  if (seg[0] === "course") {
    const out = [{ href: "/courses", label: "Courses" }];
    if (seg[1]) out.push({ href: `/course/${seg[1]}`, label: courseTitle(seg[1]) ?? titleCase(seg[1]) });
    if (seg[2]) out.push({ href: `/course/${seg[1]}/${seg[2]}`, label: titleCase(seg[2]) });
    if (seg[3]) out.push({ href: `/course/${seg[1]}/${seg[2]}/${seg[3]}`, label: titleCase(seg[3]) });
    return out;
  }
  return seg.map((s, i) => {
    const href = "/" + seg.slice(0, i + 1).join("/");
    const known = items.find((n) => n.href === href);
    return { href, label: known?.label ?? titleCase(s) };
  });
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const sysDark = useMedia("(prefers-color-scheme: dark)");
  const dark = theme === "dark" || (theme === "system" && sysDark);
  return (
    <button onClick={() => setSettings({ theme: dark ? "light" : "dark" })} className={clsx("mx-icon-btn", className)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light theme" : "Dark theme"}>
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Status bar (desktop) and bottom bar (phones)                         */
/* ------------------------------------------------------------------ */

function StatusBar({ course }: { course: string | null }) {
  const xp = useLearner((s) => s.xp);
  const streak = useLearner((s) => liveStreak(s));
  const mastered = useLearner((s) => Object.values(s.mastery).filter((l) => l >= 4).length);
  return (
    <footer className="mx-status mx-mono fixed inset-x-0 bottom-0 z-40 hidden h-6 items-center gap-4 px-3 text-[11px] md:flex" aria-label="Status">
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden /> mastery
      </span>
      {course && (
        <Link href={`/course/${course}`} className="truncate hover:underline">
          {course}
        </Link>
      )}
      <span className="ml-auto hidden lg:inline">{mastered} skills mastered</span>
      <span>streak {streak}d</span>
      <Link href="/profile" className="hover:underline">
        {xp.toLocaleString()} xp
      </Link>
    </footer>
  );
}

function BottomBar({ nav, isActive, onMore, moreOpen }: { nav: NavItem[]; isActive: ShellProps["isActive"]; onMore: () => void; moreOpen: boolean }) {
  return (
    <nav aria-label="Primary" className="mx-bottombar fixed inset-x-0 bottom-0 z-30 flex border-t border-line pb-[env(safe-area-inset-bottom)] md:hidden">
      {nav.slice(0, 4).map((n) => {
        const active = isActive(n.href);
        return (
          <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={clsx("mx-tab", active && "is-active")}>
            <n.icon className="h-5 w-5" strokeWidth={1.8} />
            <span className="max-w-full truncate">{n.label}</span>
          </Link>
        );
      })}
      <button onClick={onMore} className={clsx("mx-tab", moreOpen && "is-active")} aria-label="All destinations" aria-controls="mx-explorer" aria-expanded={moreOpen}>
        <Ellipsis className="h-5 w-5" strokeWidth={1.8} />
        <span>More</span>
      </button>
    </nav>
  );
}
