"use client";

import { useMemo } from "react";
import { useT } from "@/i18n";
import type { ModeConfig } from "@/lib/modes";
import type { NavItem } from "../types";

/** Navigation with labels in the learner's language (every shell gets these). */
export function useTranslatedNav(mode: ModeConfig, nav: NavItem[], more: NavItem[]) {
  const t = useT();
  return useMemo(() => {
    const byHref: Record<string, string> = {
      "/courses": t("shell.nav.courses", "Courses"),
      "/pathways": t("shell.nav.pathways", "Pathways"),
      "/plan": t("shell.nav.plan", "Study plan"),
      "/practice": t("shell.nav.practice", "Practice"),
      "/exam": t("shell.nav.exam", "Exam prep"),
      "/exam/formulas": t("shell.nav.formulas", "Formulas"),
      "/code/playground": t("shell.nav.codeLab", "Code lab"),
      "/kids/play": t("shell.nav.games", "Games"),
      "/stickers": t("shell.nav.stickers", "Stickers"),
      "/leaderboard": t("shell.nav.leagues", "Leagues"),
      "/quests": t("shell.nav.quests", "Quests"),
      "/shop": t("shell.nav.shop", "Shop"),
      "/library": t("shell.nav.library", "Library"),
      "/notebook": t("shell.nav.notebook", "Notebook"),
      "/insights": t("shell.nav.insights", "Insights"),
      "/worksheets": t("shell.nav.worksheets", "Worksheets"),
      "/competitions": t("shell.nav.competitions", "Competitions"),
      "/parent": t("shell.nav.parents", "For parents"),
      "/profile": t("shell.nav.profile", "Profile"),
    };
    const home: Record<string, string> = {
      sprout: t("shell.home.sprout", "Play"),
      explore: t("shell.home.explore", "Home"),
      adventure: t("shell.home.adventure", "Missions"),
      focus: t("shell.home.focus", "Syllabus"),
      mastery: t("shell.home.mastery", "Dashboard"),
      research: t("shell.home.research", "Workspace"),
      professional: t("shell.home.professional", "My goals"),
    };
    const tr = (n: NavItem) => ({ ...n, label: n.href === "/learn" ? (home[mode.id] ?? t("shell.nav.learn", "Learn")) : (byHref[n.href] ?? n.label) });
    return { nav: nav.map(tr), more: more.map(tr) };
  }, [t, mode.id, nav, more]);
}
