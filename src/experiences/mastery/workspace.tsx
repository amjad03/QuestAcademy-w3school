"use client";

import { createContext, useContext, useEffect, useState } from "react";

/**
 * Shared state between the Mastery shell and its lesson layout: the explorer
 * panel exposes a slot the lesson page can portal its unit outline into, so
 * the outline lives in the sidebar like an IDE file tree.
 */
export interface Workspace {
  /** DOM node inside the explorer for the lesson outline (null when the explorer is hidden). */
  outletEl: HTMLElement | null;
  /** True while the docked explorer is visible on a wide screen. */
  explorerDocked: boolean;
}

export const WorkspaceCtx = createContext<Workspace>({ outletEl: null, explorerDocked: false });

export function useWorkspace() {
  return useContext(WorkspaceCtx);
}

/** matchMedia as state; false on the server and on the first client render. */
export function useMedia(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return match;
}

/** Course slug from a /course/<slug>/… path. */
export function courseFromPath(pathname: string) {
  const m = pathname.match(/^\/course\/([^/?#]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export const titleCase = (slug: string) => slug.replace(/-/g, " ").replace(/^\w/, (m) => m.toUpperCase());

export const pad2 = (n: number) => String(n).padStart(2, "0");
