"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { useContentDict } from "@/i18n/content";

/**
 * Button labels drawn inside mission scenes ("Close the switch", "🦆 Swim!") in the
 * learner's language. They come from the explainers dictionary; scripts/i18n-content.ts
 * collects them from the scene source.
 */
export function useLabel() {
  const dict = useContentDict("explainers");
  const tr = (n: ReactNode): ReactNode => {
    if (!dict) return n;
    if (typeof n === "string") {
      const key = n.trim();
      return key && dict[key] ? n.replace(key, dict[key]) : n;
    }
    if (Array.isArray(n)) return Children.map(n, (c) => (isValidElement(c) ? c : tr(c)));
    return n;
  };
  return tr;
}
