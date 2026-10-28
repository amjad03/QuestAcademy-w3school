"use client";

import { useMemo } from "react";
import { useT } from "@/i18n";
import type { ModeConfig } from "@/lib/modes";
import type { NavItem } from "../types";
import { useLearner } from "@/lib/store";
import { hiddenDestinations } from "@/lib/classScope";

/**
 * Navigation with labels in the learner's language (every shell gets these),
 * narrowed to the learner's class: Class 8–12 students don't see games,
 * stickers, the shop, leagues or (without Computer Science) the code lab.
 */
export function useTranslatedNav(mode: ModeConfig, nav: NavItem[], more: NavItem[]) {
  const t = useT();
  const stage = useLearner((s) => s.profile.stage);
  const board = useLearner((s) => s.profile.board);
  const grade = useLearner((s) => s.profile.grade);
  const age = useLearner((s) => s.profile.age);
  const subjects = useLearner((s) => s.profile.subjects);
  const hiddenKey = useMemo(() => [...hiddenDestinations({ stage, board, grade, age, subjects })].join(","), [stage, board, grade, age, subjects]);
  const school = mode.id === "adventure" || mode.id === "focus";
  return useMemo(() => {
    const byHref: Record<string, string> = {
      "/courses": t("shell.nav.courses", "Courses"),
      "/pathways": t("shell.nav.pathways", "Pathways"),
      "/plan": t("shell.nav.plan", "Study plan"),
      "/practice": school ? t("shell.nav.practiceTests", "Practice & tests") : t("shell.nav.practice", "Practice"),
      "/exam": t("shell.nav.exam", "Exam prep"),
      "/exam/formulas": t("shell.nav.formulas", "Formulas"),
      "/code/playground": t("shell.nav.codeLab", "Code lab"),
      "/kids/play": t("shell.nav.games", "Games"),
      "/stickers": t("shell.nav.stickers", "Stickers"),
      "/leaderboard": t("shell.nav.leagues", "Leagues"),
      "/quests": t("shell.nav.quests", "Quests"),
      "/shop": t("shell.nav.shop", "Shop"),
      "/library": school ? t("shell.nav.libraryClass", "All classes & courses") : t("shell.nav.library", "Library"),
      "/explain": t("shell.nav.explainers", "Explainers"),
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
      adventure: t("shell.home.myClass", "My class"),
      focus: t("shell.home.myClass", "My class"),
      mastery: t("shell.home.mastery", "Dashboard"),
      research: t("shell.home.research", "Workspace"),
      professional: t("shell.home.professional", "My goals"),
    };
    const tr = (n: NavItem) => ({ ...n, label: n.href === "/learn" ? (home[mode.id] ?? t("shell.nav.learn", "Learn")) : (byHref[n.href] ?? n.label) });
    const hidden = new Set(hiddenKey ? hiddenKey.split(",") : []);
    const keep = (n: NavItem) => !hidden.has(n.href);
    return { nav: nav.filter(keep).map(tr), more: more.filter(keep).map(tr) };
  }, [t, mode.id, nav, more, hiddenKey]);
}
