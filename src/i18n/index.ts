"use client";

import { useCallback } from "react";
import { useHydrated } from "@/components/providers";
import { useLearner } from "@/lib/store";
import { localeInfo, type Locale } from "./locales";
import hi from "./messages/hi";
import kn from "./messages/kn";
import ta from "./messages/ta";
import te from "./messages/te";
import mr from "./messages/mr";
import bn from "./messages/bn";

export { LOCALES, localeInfo, type Locale } from "./locales";

const DICTS: Partial<Record<Locale, Record<string, string>>> = { hi, kn, ta, te, mr, bn };

type Vars = Record<string, string | number>;

function fill(text: string, vars?: Vars) {
  return vars ? text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m)) : text;
}

/** Translate outside React (e.g. in callbacks). English text is the fallback. */
export function translate(locale: Locale, key: string, english: string, vars?: Vars) {
  return fill((locale !== "en" && DICTS[locale]?.[key]) || english, vars);
}

/** Current interface language (English until the learner's settings load). */
export function useLocale(): Locale {
  const hydrated = useHydrated();
  const locale = useLearner((s) => s.settings.locale ?? "en");
  return hydrated ? locale : "en";
}

/**
 * Translation hook. Every call carries its English text, so code stays readable
 * and nothing breaks before a translation exists:
 *
 *   const t = useT();
 *   t("nav.home", "Home");
 *   t("lesson.minutes", "{n} min", { n: 5 });
 *
 * Keys are dotted, namespaced by area (nav., lesson., session., kids., khan., tutor.…).
 * `npm run i18n:extract` collects every key + English text for translation.
 */
export function useT() {
  const locale = useLocale();
  return useCallback((key: string, english: string, vars?: Vars) => translate(locale, key, english, vars), [locale]);
}

/** BCP-47 tag of the current language, for speech and Intl formatting. */
export function useBcp47() {
  return localeInfo(useLocale()).bcp47;
}
