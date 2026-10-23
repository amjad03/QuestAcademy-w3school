"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import clsx from "clsx";
import { ArrowRight, BookOpen, CalendarClock, ChevronDown, Ellipsis, Eye, Flame, LibraryBig, Moon, NotebookPen, Search, Settings, Sun, TrendingUp, UserRound, X, Zap } from "lucide-react";
import { LogoMark } from "@/components/brand/Mascot";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Avatar } from "@/components/shell/Avatar";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";
import { useCatalog } from "@/components/shell/CatalogContext";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";
import { useLearner, liveStreak } from "@/lib/store";
import { useMode } from "@/lib/useMode";
import type { ModeId } from "@/lib/modes";
import { worldById } from "@/content/worlds";
import type { WorldId } from "@/content/types";
import type { NavItem, ShellProps } from "../types";
import { useExamCountdown, useFmt, worldOrder } from "./ui/hooks";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

// i18n: every key the nav label lookup below can build, so the extractor sees them.
const NAV_KEYS = [
  ["nav.home.sprout", "Play"],
  ["nav.home.explore", "Home"],
  ["nav.home.adventure", "Missions"],
  ["nav.home.focus", "Syllabus"],
  ["nav.home.mastery", "Dashboard"],
  ["nav.home.research", "Workspace"],
  ["nav.home.professional", "My goals"],
  ["nav.courses", "Courses"],
  ["nav.pathways", "Pathways"],
  ["nav.plan", "Study plan"],
  ["nav.practice", "Practice"],
  ["nav.exam", "Exam prep"],
  ["nav.exam.formulas", "Formulas"],
  ["nav.code.playground", "Code lab"],
  ["nav.kids.play", "Games"],
  ["nav.stickers", "Stickers"],
  ["nav.leaderboard", "Leagues"],
  ["nav.quests", "Quests"],
  ["nav.shop", "Shop"],
  ["nav.library", "Library"],
  ["nav.notebook", "Notebook"],
  ["nav.insights", "Insights"],
  ["nav.worksheets", "Worksheets"],
  ["nav.competitions", "Competitions"],
  ["nav.parent", "For parents"],
  ["nav.profile", "Profile"],
] as const;
const NAV_EN: Record<string, string> = Object.fromEntries(NAV_KEYS);

/** Translated label for a nav destination (the home label differs per profile). */
function useNavLabel() {
  const t = useT();
  const mode = useMode();
  return useCallback(
    (n: NavItem) => {
      const key = n.href === "/learn" ? `nav.home.${mode.id}` : `nav.${n.href.replace(/^\//, "").replace(/\//g, ".")}`;
      return NAV_EN[key] !== undefined ? t(key, n.label) : n.label;
    },
    [t, mode.id],
  );
}

/** Close a popover on outside click, Escape (focus returns to the trigger) and navigation. */
function useDismiss(open: boolean, close: () => void, box: RefObject<HTMLElement | null>, trigger: RefObject<HTMLElement | null>, pathname: string) {
  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => box.current && !box.current.contains(e.target as Node) && !trigger.current?.contains(e.target as Node) && close();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        trigger.current?.focus();
      }
    };
    window.addEventListener("mousedown", down);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("keydown", key);
    };
  }, [open, close, box, trigger]);
  useEffect(() => close(), [pathname, close]);
}

const isLessonPath = (p: string) => /^\/course\/[^/]+\/[^/]+\/[^/]+/.test(p);

/* ------------------------------------------------------------------ */
/* Shell                                                               */
/* ------------------------------------------------------------------ */

/**
 * The Khan-style frame: a white header (wordmark, Courses mega-menu, search,
 * language, profile menu), a quiet tab row of the profile's destinations on
 * desktop, and a bottom tab bar on phones. No left sidebar; course and lesson
 * pages bring their own navigation.
 */
export function KhanShell({ children, pathname, nav, more, isActive, openSearch }: ShellProps) {
  const t = useT();
  const lesson = isLessonPath(pathname);
  const [sheet, setSheet] = useState(false);
  const closeSheet = useCallback(() => setSheet(false), []);
  useEffect(() => setSheet(false), [pathname]);

  return (
    <div className="kh-shell min-h-screen bg-bg" data-subnav={lesson ? undefined : "true"}>
      <a href="#kh-main" className="kh-skip">
        {t("khan.skip", "Skip to content")}
      </a>
      <Header pathname={pathname} nav={nav} more={more} isActive={isActive} openSearch={openSearch} lesson={lesson} />
      <main id="kh-main" style={{ paddingBottom: lesson ? undefined : "var(--kh-tabbar-h)" }}>
        {children}
      </main>
      {!lesson && <TabBar nav={nav} more={more} isActive={isActive} onMore={() => setSheet(true)} sheetOpen={sheet} />}
      {sheet && <MoreSheet nav={nav} more={more} isActive={isActive} onClose={closeSheet} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Header({ pathname, nav, more, isActive, openSearch, lesson }: Omit<ShellProps, "children"> & { lesson: boolean }) {
  const t = useT();
  const [mod, setMod] = useState("Ctrl K");
  useEffect(() => {
    if (/Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent)) setMod("⌘K");
  }, []);

  return (
    <header className="kh-header sticky top-0 z-40">
      <div className="mx-auto flex h-[var(--kh-header-h)] max-w-[1280px] items-center gap-2 px-3 sm:gap-3 sm:px-5 lg:px-8">
        <Link href="/learn" className="flex shrink-0 items-center gap-2 rounded-md pr-1" aria-label={t("khan.homeAria", "Quest Academy — my learning")}>
          <LogoMark size={28} />
          <span className="kh-wordmark hidden min-[380px]:inline">Quest Academy</span>
        </Link>

        <CoursesMenu pathname={pathname} />

        <div className="flex min-w-0 flex-1 justify-center px-1">
          <button type="button" onClick={openSearch} className="kh-search hidden w-full max-w-[460px] items-center gap-2.5 md:flex" aria-label={t("khan.searchAria", "Search courses, lessons and pages")}>
            <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden />
            <span className="min-w-0 flex-1 truncate text-sm text-muted">{t("khan.searchPlaceholder", "Search for courses, skills and videos")}</span>
            <kbd className="kh-kbd hidden lg:inline-block">{mod}</kbd>
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <StagePill />
          <button type="button" onClick={openSearch} className="kh-iconbtn md:hidden" aria-label={t("khan.search", "Search")}>
            <Search className="h-5 w-5" aria-hidden />
          </button>
          <div className="hidden xl:block">
            <LanguagePicker compact />
          </div>
          <ProfileMenu pathname={pathname} nav={nav} more={more} isActive={isActive} />
        </div>
      </div>
      {!lesson && <SubNav pathname={pathname} nav={nav} more={more} isActive={isActive} />}
    </header>
  );
}

/** Points / streak for Adventure, exam countdown for Focus; quiet for older profiles. */
function StagePill() {
  const t = useT();
  const f = useFmt();
  const mode = useMode();
  const hydrated = useHydrated();
  const xp = useLearner((s) => s.xp);
  const streak = useLearner((s) => liveStreak(s));
  const exam = useExamCountdown();
  if (!hydrated) return null;
  if (mode.id === "adventure")
    return (
      <div className="hidden items-center gap-1.5 sm:flex">
        <Link href="/profile" className="kh-pill" title={t("khan.energyPoints", "Energy points")} aria-label={t("khan.energyAria", "{n} energy points", { n: f.n(xp) })}>
          <Zap className="h-3.5 w-3.5 text-accent-2" aria-hidden />
          {f.n(xp)}
        </Link>
        <span className="kh-pill" title={t("khan.streak", "Day streak")} aria-label={t("khan.streakAria", "{n}-day streak", { n: f.n(streak) })}>
          <Flame className={clsx("h-3.5 w-3.5", streak ? "text-streak" : "text-muted")} aria-hidden />
          {f.n(streak)}
        </span>
      </div>
    );
  if (mode.id === "focus" && exam)
    return (
      <Link
        href="/plan"
        className="kh-pill hidden sm:inline-flex"
        title={`${exam.name} · ${f.date(exam.date)}`}
        aria-label={t("khan.countdownAria", "{n} days until {exam}. Open study plan.", { n: f.n(exam.days), exam: exam.name })}
      >
        <CalendarClock className="h-3.5 w-3.5 text-accent" aria-hidden />
        {t("khan.daysShort", "{n} days", { n: f.n(exam.days) })}
        <span className="hidden max-w-[150px] truncate font-normal text-muted 2xl:inline">· {exam.name}</span>
      </Link>
    );
  return null;
}

/* ------------------------------------------------------------------ */
/* Courses mega-menu                                                   */
/* ------------------------------------------------------------------ */

function CoursesMenu({ pathname }: { pathname: string }) {
  const t = useT();
  const mode = useMode();
  const catalog = useCatalog();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useDismiss(open, close, box, trigger, pathname);
  useEffect(() => {
    if (open) box.current?.querySelector<HTMLElement>("a")?.focus();
  }, [open]);
  const worldName: Record<WorldId, string> = {
    kids: t("khan.world.kids", "Early learning"),
    school: t("khan.world.school", "School"),
    exam: t("khan.world.exam", "Exam prep"),
    code: t("khan.world.code", "Coding"),
    campus: t("khan.world.campus", "College"),
  };
  const worldShort: Record<WorldId, string> = {
    kids: t("khan.world.kids.short", "Ages 3–10"),
    school: t("khan.world.school.short", "Grades 6–12"),
    exam: t("khan.world.exam.short", "NEET · JEE"),
    code: t("khan.world.code.short", "Beginner → Pro"),
    campus: t("khan.world.campus.short", "UG · PG"),
  };

  const groups = useMemo(
    () =>
      worldOrder(mode.id)
        .map((w) => ({ world: worldById[w], courses: catalog.filter((c) => c.world === w) }))
        .filter((g) => g.courses.length),
    [catalog, mode.id],
  );

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="kh-menubtn hidden md:inline-flex"
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        {t("khan.courses", "Courses")}
        <ChevronDown className={clsx("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      {open && (
        <div ref={box} id={id} className="kh-pop absolute inset-x-0 top-full z-50 mx-auto mt-1 max-h-[calc(100vh-var(--kh-header-h)-24px)] w-[min(1180px,calc(100vw-24px))] overflow-y-auto p-5 sm:p-6" role="region" aria-label={t("khan.courses", "Courses")}>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map(({ world, courses }) => (
              <section key={world.id} aria-labelledby={`${id}-${world.id}`} className="min-w-0">
                <h3 id={`${id}-${world.id}`} className="flex items-baseline justify-between gap-2 border-b border-line pb-2">
                  <span className="text-sm font-bold">{worldName[world.id] ?? world.name}</span>
                  <span className="text-xs text-muted">{worldShort[world.id] ?? world.short}</span>
                </h3>
                <ul className="mt-2 space-y-0.5">
                  {courses.slice(0, 9).map((c) => (
                    <li key={c.slug}>
                      <Link href={c.href} className="kh-courselink">
                        <CourseIcon slug={c.slug} size={20} flat />
                        <span className="min-w-0 truncate">{c.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {courses.length > 9 && (
                  <Link href={world.href} className="kh-link mt-2 inline-block pl-2 text-sm">
                    {t("khan.allInWorld", "All {n} courses", { n: courses.length })}
                  </Link>
                )}
              </section>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-4 text-sm">
            <Link href="/courses" className="kh-link inline-flex items-center gap-1.5">
              <LibraryBig className="h-4 w-4" aria-hidden /> {t("khan.browseAll", "Browse all courses")}
            </Link>
            <Link href="/explain" className="kh-link inline-flex items-center gap-1.5">
              <Eye className="h-4 w-4" aria-hidden /> {t("khan.seeItMenu", "See it: visual explainers")}
            </Link>
            {mode.id === "focus" && (
              <Link href="/learn" className="kh-link inline-flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" aria-hidden /> {t("khan.mySyllabus", "My board syllabus")}
              </Link>
            )}
            {mode.id === "professional" && (
              <Link href="/pathways" className="kh-link inline-flex items-center gap-1.5">
                <ArrowRight className="h-4 w-4" aria-hidden /> {t("khan.careerPathways", "Career pathways")}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop tab row                                                     */
/* ------------------------------------------------------------------ */

const SUBNAV_MAX = 6;

function SubNav({ pathname, nav, more, isActive }: { pathname: string; nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean }) {
  const t = useT();
  const label = useNavLabel();
  const items = nav.filter((n) => n.href !== "/profile");
  const shown = items.slice(0, SUBNAV_MAX);
  const overflow = [...items.slice(SUBNAV_MAX), ...more.filter((m) => m.href !== "/profile")];
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useDismiss(open, close, box, trigger, pathname);
  const overflowActive = overflow.some((n) => isActive(n.href));

  return (
    <nav className="kh-subnav hidden border-t border-line lg:block" aria-label={t("khan.primaryNav", "Primary")}>
      <div className="mx-auto flex h-11 max-w-[1280px] items-stretch gap-5 px-8">
        {shown.map((n) => {
          const active = isActive(n.href);
          return (
            <Link key={n.href} href={n.href} className="kh-tab" aria-current={active ? "page" : undefined}>
              <n.icon className={clsx("h-4 w-4", active ? "text-accent" : "text-muted")} strokeWidth={2} aria-hidden />
              {label(n)}
            </Link>
          );
        })}
        {overflow.length > 0 && (
          <div className="relative flex">
            <button ref={trigger} type="button" className="kh-tab" aria-expanded={open} aria-haspopup="true" aria-current={overflowActive ? "page" : undefined} onClick={() => setOpen((o) => !o)}>
              {t("khan.more", "More")}
              <ChevronDown className={clsx("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden />
            </button>
            {open && (
              <div ref={box} className="kh-pop absolute left-0 top-full z-50 mt-1 max-h-[70vh] w-64 overflow-y-auto p-1.5">
                {overflow.map((n) => (
                  <Link key={n.href} href={n.href} className="kh-menuitem" aria-current={isActive(n.href) ? "page" : undefined}>
                    <n.icon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> {label(n)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Profile menu                                                        */
/* ------------------------------------------------------------------ */

const PROFILE_LINKS = ["/insights", "/notebook"];

function ProfileMenu({ pathname, nav, more, isActive }: { pathname: string; nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean }) {
  const t = useT();
  const hydrated = useHydrated();
  const profile = useLearner((s) => s.profile);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useDismiss(open, close, box, trigger, pathname);
  useEffect(() => {
    if (open) box.current?.querySelector<HTMLElement>("a, button")?.focus();
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t("khan.profileMenu", "Profile menu")}
        className="flex items-center gap-1 rounded-full p-0.5 pr-1 hover:bg-surface-2"
      >
        <Avatar name={hydrated ? profile.name : ""} color={hydrated ? profile.avatar : "blue"} size={32} />
        <ChevronDown className="hidden h-4 w-4 text-muted sm:block" aria-hidden />
      </button>
      {open && (
        <div ref={box} className="kh-pop absolute right-0 top-[calc(100%+8px)] z-50 max-h-[calc(100vh-88px)] w-[min(300px,calc(100vw-24px))] overflow-y-auto p-1.5">
          <MenuContent nav={nav} more={more} isActive={isActive} />
        </div>
      )}
    </div>
  );
}

/** Shared body of the desktop profile menu and the phone "More" sheet. */
function MenuContent({ nav, more, isActive, full }: { nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean; full?: boolean }) {
  const t = useT();
  const label = useNavLabel();
  const mode = useMode();
  const hydrated = useHydrated();
  const profile = useLearner((s) => s.profile);
  const all = [...nav, ...more];
  const pinned = PROFILE_LINKS.map((h) => all.find((n) => n.href === h)).filter((n): n is NavItem => Boolean(n));
  // On phones the sheet also lists every destination not in the tab bar.
  const rest = full ? [...nav.slice(TABBAR_ITEMS), ...more].filter((n) => n.href !== "/profile" && n.href !== "/courses" && !PROFILE_LINKS.includes(n.href)) : [];
  const name = hydrated && profile.name ? profile.name : t("khan.guest", "Guest learner");

  return (
    <>
      <Link href="/profile" className="flex items-center gap-3 rounded-md px-3 py-2.5 hover:bg-surface-2" aria-current={isActive("/profile") ? "page" : undefined}>
        <Avatar name={hydrated ? profile.name : ""} color={hydrated ? profile.avatar : "blue"} size={40} />
        <span className="min-w-0">
          <span className="block truncate font-semibold">{name}</span>
          <span className="block truncate text-xs text-muted">{stageLabel(t, mode.id)}</span>
        </span>
      </Link>
      <div className="my-1.5 border-t border-line" />
      <Link href="/profile" className="kh-menuitem" aria-current={isActive("/profile") ? "page" : undefined}>
        <UserRound className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> {t("nav.profile", "Profile")}
      </Link>
      <Link href="/settings" className="kh-menuitem" aria-current={isActive("/settings") ? "page" : undefined}>
        <Settings className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> {t("nav.settings", "Settings")}
      </Link>
      {pinned.map((n) => (
        <Link key={n.href} href={n.href} className="kh-menuitem" aria-current={isActive(n.href) ? "page" : undefined}>
          {n.href === "/insights" ? <TrendingUp className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> : <NotebookPen className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden />}
          {label(n)}
        </Link>
      ))}
      <ThemeToggle />
      {rest.length > 0 && (
        <>
          <div className="my-1.5 border-t border-line" />
          <p className="eyebrow px-3 pb-1 pt-1.5">{t("khan.more", "More")}</p>
          {rest.map((n) => (
            <Link key={n.href} href={n.href} className="kh-menuitem" aria-current={isActive(n.href) ? "page" : undefined}>
              <n.icon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> {label(n)}
            </Link>
          ))}
          <Link href="/explain" className="kh-menuitem" aria-current={isActive("/explain") ? "page" : undefined}>
            <Eye className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> {t("khan.seeItMenu", "See it: visual explainers")}
          </Link>
        </>
      )}
      <div className="my-1.5 border-t border-line" />
      <div className="px-3 py-2">
        <LanguagePicker compact />
      </div>
    </>
  );
}

/** The learner's stage, shown under their name in the profile menu. */
function stageLabel(t: ReturnType<typeof useT>, id: ModeId) {
  const labels: Record<ModeId, string> = {
    sprout: t("khan.stage.sprout", "Pre-primary"),
    explore: t("khan.stage.explore", "Primary school"),
    adventure: t("khan.stage.adventure", "Middle school · Class 6–8"),
    focus: t("khan.stage.focus", "High school & PUC"),
    mastery: t("khan.stage.mastery", "Undergraduate"),
    research: t("khan.stage.research", "Postgraduate & research"),
    professional: t("khan.stage.professional", "Professional learning"),
  };
  return labels[id];
}

function ThemeToggle() {
  const t = useT();
  const hydrated = useHydrated();
  const theme = useLearner((s) => s.settings.theme);
  const setSettings = useLearner((s) => s.setSettings);
  const [sysDark, setSysDark] = useState(false);
  useEffect(() => setSysDark(document.documentElement.classList.contains("dark")), [theme]);
  const dark = hydrated && (theme === "dark" || (theme === "system" && sysDark));
  return (
    <button type="button" className="kh-menuitem" onClick={() => setSettings({ theme: dark ? "light" : "dark" })} aria-pressed={dark}>
      {dark ? <Sun className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> : <Moon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden />}
      {dark ? t("khan.lightMode", "Light mode") : t("khan.darkMode", "Dark mode")}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Phones: bottom tab bar + More sheet                                 */
/* ------------------------------------------------------------------ */

const TABBAR_ITEMS = 4;

function TabBar({ nav, more, isActive, onMore, sheetOpen }: { nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean; onMore: () => void; sheetOpen: boolean }) {
  const t = useT();
  const label = useNavLabel();
  const items = nav.slice(0, TABBAR_ITEMS);
  const restActive = [...nav.slice(TABBAR_ITEMS), ...more].some((n) => isActive(n.href));
  return (
    <nav className="kh-tabbar fixed inset-x-0 bottom-0 z-40 flex lg:hidden" aria-label={t("khan.primaryNav", "Primary")}>
      {items.map((n) => {
        const active = isActive(n.href);
        return <TabItem key={n.href} href={n.href} active={active} icon={<n.icon className="h-[22px] w-[22px]" strokeWidth={active ? 2.2 : 1.8} aria-hidden />} label={label(n)} />;
      })}
      <button
        type="button"
        onClick={onMore}
        aria-expanded={sheetOpen}
        aria-haspopup="dialog"
        className={clsx("relative flex min-w-0 flex-1 flex-col items-center gap-1 pb-2 pt-2.5 text-[11px] font-semibold", restActive ? "text-accent" : "text-muted")}
      >
        {restActive && <span className="absolute inset-x-5 top-0 h-[3px] rounded-b bg-accent" aria-hidden />}
        <Ellipsis className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden />
        <span className="max-w-full truncate px-1">{t("khan.more", "More")}</span>
      </button>
    </nav>
  );
}

function TabItem({ href, active, icon, label }: { href: string; active: boolean; icon: ReactNode; label: string }) {
  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={clsx("relative flex min-w-0 flex-1 flex-col items-center gap-1 pb-2 pt-2.5 text-[11px] font-semibold", active ? "text-accent" : "text-muted hover:text-ink")}>
      {active && <span className="absolute inset-x-5 top-0 h-[3px] rounded-b bg-accent" aria-hidden />}
      {icon}
      <span className="max-w-full truncate px-1">{label}</span>
    </Link>
  );
}

function MoreSheet({ nav, more, isActive, onClose }: { nav: NavItem[]; more: NavItem[]; isActive: (h: string) => boolean; onClose: () => void }) {
  const t = useT();
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    panel.current?.querySelector<HTMLElement>("button, a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const els = Array.from(panel.current.querySelectorAll<HTMLElement>("a, button, select"));
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
      <div className="absolute inset-0 bg-[rgb(11_33_73/0.45)]" onClick={onClose} aria-hidden />
      <div ref={panel} role="dialog" aria-modal="true" aria-label={t("khan.menu", "Menu")} className="kh-pop absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-b-none p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between px-3 py-1.5">
          <span className="text-[15px] font-semibold">{t("khan.menu", "Menu")}</span>
          <button type="button" onClick={onClose} className="kh-iconbtn" aria-label={t("khan.closeMenu", "Close menu")}>
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <Link href="/courses" className="kh-menuitem" aria-current={isActive("/courses") ? "page" : undefined}>
          <LibraryBig className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden /> {t("khan.courses", "Courses")}
        </Link>
        <MenuContent nav={nav} more={more} isActive={isActive} full />
      </div>
    </div>
  );
}
