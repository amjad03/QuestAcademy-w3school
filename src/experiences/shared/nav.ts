import type { ModeConfig } from "@/lib/modes";
import type { NavItem } from "../types";
import { CalendarDays, Dumbbell, Gamepad2, House, LayoutGrid, Library, NotebookPen, Printer, Route, ScrollText, ShieldHalf, Sigma, SquareTerminal, Sticker, Store, Target, TrendingUp, Trophy, UserRound, Users } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
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

/** Primary nav for a mode, in the mode's order; home is relabelled per mode. */
export function navFor(mode: ModeConfig): NavItem[] {
  return mode.nav
    .map((href) => NAV_ITEMS.find((n) => n.href === href))
    .filter((n): n is NavItem => Boolean(n))
    .map((n) => (n.href === "/learn" ? { ...n, label: mode.homeLabel } : n));
}

/** Secondary destinations for a "More" menu (kids-only pages hidden for older modes). */
export function moreFor(mode: ModeConfig): NavItem[] {
  const primary = new Set(mode.nav);
  return NAV_ITEMS.filter((n) => !primary.has(n.href) && (mode.young || (n.href !== "/stickers" && n.href !== "/kids/play")));
}

export function isActivePath(pathname: string, href: string) {
  if (href === "/learn") return pathname === "/learn";
  if (href === "/courses") return pathname.startsWith("/courses") || pathname.startsWith("/course/");
  if (href === "/exam") return pathname.startsWith("/exam") && !pathname.startsWith("/exam/formulas");
  return pathname.startsWith(href);
}
