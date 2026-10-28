"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useHydrated } from "@/components/providers";
import { useLearner } from "@/lib/store";
import { localeInfo, type Locale } from "./locales";

export { LOCALES, localeInfo, type Locale } from "./locales";

type Dict = Record<string, string>;

/** Each language's interface strings load on demand (about 250 KB each), so English pages don't download all six. */
const LOADERS: Partial<Record<Locale, () => Promise<{ default: Dict }>>> = {
  hi: () => import("./messages/hi"),
  kn: () => import("./messages/kn"),
  ta: () => import("./messages/ta"),
  te: () => import("./messages/te"),
  mr: () => import("./messages/mr"),
  bn: () => import("./messages/bn"),
};

const DICTS: Partial<Record<Locale, Dict>> = {};
const pending = new Set<Locale>();
const listeners = new Set<() => void>();
let version = 0;

/** Starts loading a language's strings (no-op for English or once loaded). */
export function loadLocale(locale: Locale): void {
  const loader = LOADERS[locale];
  if (!loader || DICTS[locale] || pending.has(locale)) return;
  pending.add(locale);
  loader()
    .then((m) => {
      DICTS[locale] = m.default;
      version++;
      listeners.forEach((f) => f());
    })
    .catch(() => {})
    .finally(() => pending.delete(locale));
}

// Begin fetching the saved language straight away, in parallel with hydration.
if (typeof window !== "undefined") {
  try {
    const saved = JSON.parse(localStorage.getItem("quest-academy") || "{}")?.state?.settings?.locale as Locale | undefined;
    if (saved) loadLocale(saved);
  } catch {
    /* ignore */
  }
}

const subscribe = (f: () => void) => {
  listeners.add(f);
  return () => {
    listeners.delete(f);
  };
};
const getVersion = () => version;
const getServerVersion = () => 0;

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
  // Re-render once the language's strings arrive.
  useSyncExternalStore(subscribe, getVersion, getServerVersion);
  const active = hydrated ? locale : "en";
  useEffect(() => loadLocale(active), [active]);
  return active;
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
  const v = useSyncExternalStore(subscribe, getVersion, getServerVersion);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback((key: string, english: string, vars?: Vars) => translate(locale, key, english, vars), [locale, v]);
}

/** BCP-47 tag of the current language, for speech and Intl formatting. */
export function useBcp47() {
  return localeInfo(useLocale()).bcp47;
}
