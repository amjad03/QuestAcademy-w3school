"use client";

/** Page-side helpers for the service worker in /public/sw.js. */

export const SAVED_CACHE = "qa-saved";
export const PAGES_CACHE_PREFIX = "qa-pages-";

/** Same-origin build assets this page loaded (scripts, styles, fonts), for the worker to keep. */
export function loadedAssets(): string[] {
  if (typeof performance === "undefined") return [];
  const out = new Set<string>();
  for (const e of performance.getEntriesByType("resource")) {
    try {
      const u = new URL(e.name);
      if (u.origin === location.origin && u.pathname.startsWith("/_next/static/")) out.add(u.pathname);
    } catch {
      /* ignore */
    }
  }
  return [...out];
}

async function ask(msg: Record<string, unknown>): Promise<{ ok: boolean }> {
  const reg = await navigator.serviceWorker?.ready;
  const sw = reg?.active;
  if (!sw) return { ok: false };
  return new Promise((resolve) => {
    const ch = new MessageChannel();
    const timer = setTimeout(() => resolve({ ok: false }), 20000);
    ch.port1.onmessage = (e) => {
      clearTimeout(timer);
      resolve(e.data ?? { ok: false });
    };
    sw.postMessage(msg, [ch.port2]);
  });
}

export const offlineSupported = () => typeof window !== "undefined" && "serviceWorker" in navigator && "caches" in window;

export async function savePage(path: string) {
  return ask({ type: "save", url: path, assets: loadedAssets() });
}

export async function removePage(path: string) {
  return ask({ type: "remove", url: path });
}

export async function isSaved(path: string): Promise<boolean> {
  if (!offlineSupported()) return false;
  const c = await caches.open(SAVED_CACHE);
  return Boolean(await c.match(location.origin + path));
}

export interface OfflinePage {
  path: string;
  title: string;
  saved: boolean;
}

/** Saved pages first, then recently opened ones that are still cached. */
export async function listOfflinePages(): Promise<OfflinePage[]> {
  if (!offlineSupported()) return [];
  const names = await caches.keys();
  const out = new Map<string, OfflinePage>();
  const read = async (name: string, saved: boolean) => {
    const c = await caches.open(name);
    const reqs = await c.keys();
    for (const r of reqs.reverse()) {
      const path = new URL(r.url).pathname;
      if (out.has(path) || path === "/offline") continue;
      const res = await c.match(r);
      const html = res ? await res.text() : "";
      const title = /<title>([^<]*)<\/title>/.exec(html)?.[1]?.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"') || path;
      out.set(path, { path, title, saved });
    }
  };
  if (names.includes(SAVED_CACHE)) await read(SAVED_CACHE, true);
  for (const n of names.filter((n) => n.startsWith(PAGES_CACHE_PREFIX))) await read(n, false);
  return [...out.values()];
}
