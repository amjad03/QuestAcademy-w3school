"use client";

import { useCallback, useEffect, useState } from "react";
import { useLearner } from "@/lib/store";
import { useLocale, type Locale } from "./index";
import { SKIP_FIELDS } from "./content-fields";

/**
 * Lesson content in Indian languages.
 *
 * Each course has one dictionary per language at /i18n/<locale>/<course>.json,
 * mapping an English string from the course (a lesson title, a paragraph, a
 * question, an option…) to its translation. Lessons, practice and unit menus
 * swap strings through it at render time, so the English source stays the one
 * place content is edited, and anything not yet translated simply stays English.
 *
 * `npm run i18n:content` lists the strings each course still needs.
 */
export type ContentDict = Record<string, string>;

const cache = new Map<string, Promise<ContentDict | null>>();

export function loadContentDict(locale: Locale, course: string): Promise<ContentDict | null> {
  const k = `${locale}/${course}`;
  let p = cache.get(k);
  if (!p) {
    p = fetch(`/i18n/${k}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<ContentDict>) : null))
      .catch(() => null);
    cache.set(k, p);
  }
  return p;
}

/** The course's dictionary for the current language, or null (English, original view, or not translated). */
export function useContentDict(course: string): ContentDict | null {
  const locale = useLocale();
  const original = useLearner((s) => s.settings.contentOriginal ?? false);
  const [dict, setDict] = useState<{ k: string; d: ContentDict | null } | null>(null);
  const k = `${locale}/${course}`;
  useEffect(() => {
    if (locale === "en" || !course) return;
    let live = true;
    loadContentDict(locale, course).then((d) => live && setDict({ k, d }));
    return () => {
      live = false;
    };
  }, [locale, course, k]);
  if (locale === "en" || !course || original || dict?.k !== k) return null;
  return dict.d && Object.keys(dict.d).length ? dict.d : null;
}

/** Whether a translation exists for this course in the current language (even while showing the original). */
export function useHasContentTranslation(course: string) {
  const locale = useLocale();
  const [has, setHas] = useState(false);
  useEffect(() => {
    if (locale === "en" || !course) return setHas(false);
    let live = true;
    loadContentDict(locale, course).then((d) => live && setHas(Boolean(d && Object.keys(d).length)));
    return () => {
      live = false;
    };
  }, [locale, course]);
  return has;
}

/** Deep-copy `value`, replacing every translatable string found in `dict`. */
export function localize<T>(value: T, dict: ContentDict | null): T {
  if (!dict) return value;
  const walk = (v: unknown): unknown => {
    if (typeof v === "string") return dict[v] ?? v;
    if (Array.isArray(v)) return v.map(walk);
    // Leave non-plain objects and React elements (explainer artwork) untouched.
    if (!v || typeof v !== "object" || Object.getPrototypeOf(v) !== Object.prototype || "$$typeof" in v) return v;
    const o = v as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [k, x] of Object.entries(o)) {
      if (SKIP_FIELDS.has(k)) out[k] = x;
      // Fill-in answers: accept the translated answer as well as the English one.
      else if (k === "answer" && o.kind === "fill" && Array.isArray(x)) out[k] = [...new Set([...x, ...x.map((a) => dict[a as string] ?? a)])];
      else out[k] = walk(x);
    }
    return out;
  };
  return walk(value) as T;
}

/**
 * Shared text in the learner's language: course names, taglines and
 * descriptions ("catalog") and board syllabus chapters ("syllabus").
 *
 *   const tx = useSharedText();
 *   tx(course.title) // "School Physics" → "स्कूल भौतिकी"
 */
export function useSharedText() {
  const catalog = useContentDict("catalog");
  const syllabus = useContentDict("syllabus");
  return useCallback((s: string) => (s && (catalog?.[s] ?? syllabus?.[s])) || s, [catalog, syllabus]);
}
