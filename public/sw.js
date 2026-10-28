/* Quest Academy service worker: app shell + offline reading.
 *
 * - Static build assets (/_next/static, fonts, icons): cache-first (they are content-hashed).
 * - Pages: network-first; every page that loads is kept in "pages" (last 40), so recently
 *   opened lessons and notes open offline. Pages saved with "Save for offline" go to "saved"
 *   and are never evicted. With no network and no copy, /offline is shown.
 * - Next.js data requests (RSC) are not cached: if one fails, Next falls back to a full page
 *   load, which this worker answers from the cache.
 */
const VERSION = "v1";
const SHELL = `qa-shell-${VERSION}`;
const PAGES = `qa-pages-${VERSION}`;
const SAVED = "qa-saved"; // not versioned: survives updates
const ASSETS = `qa-assets-${VERSION}`;
const SHELL_URLS = ["/offline", "/learn", "/manifest.webmanifest", "/icon.svg"];
const MAX_PAGES = 40;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(SHELL)
      .then((c) => Promise.all(SHELL_URLS.map((u) => c.add(new Request(u, { cache: "reload" })).catch(() => {}))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  const keep = new Set([SHELL, PAGES, SAVED, ASSETS]);
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("qa-") && !keep.has(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isAsset = (url) => url.pathname.startsWith("/_next/static/") || /\.(?:woff2?|svg|png|jpg|jpeg|webp|ico|css)$/.test(url.pathname);

async function trim(cacheName, max) {
  const c = await caches.open(cacheName);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
}

async function pageKey(req) {
  // One copy per page, whatever the query (?item=… tabs share the lesson).
  const u = new URL(req.url);
  return u.origin + u.pathname;
}

async function fromCaches(key) {
  return (await caches.match(key, { cacheName: SAVED })) || (await caches.match(key, { cacheName: PAGES })) || (await caches.match(key, { cacheName: SHELL }));
}

async function handlePage(req) {
  const key = await pageKey(req);
  try {
    const res = await fetch(req);
    if (res.ok && res.type === "basic" && (res.headers.get("content-type") || "").includes("text/html")) {
      const copy = res.clone();
      const fresh = res.clone();
      caches.open(PAGES).then(async (c) => {
        await c.delete(key);
        await c.put(key, copy);
        await trim(PAGES, MAX_PAGES);
      });
      // Keep a saved page fresh too.
      caches.open(SAVED).then(async (c) => {
        if (await c.match(key)) await c.put(key, fresh);
      });
    }
    return res;
  } catch {
    return (await fromCaches(key)) || (await caches.match("/offline", { cacheName: SHELL })) || new Response("You are offline.", { status: 503, headers: { "content-type": "text/plain" } });
  }
}

async function handleAsset(req) {
  const hit = await caches.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && (res.type === "basic" || res.type === "cors")) {
    const copy = res.clone();
    caches.open(ASSETS).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/kokoro/") || url.pathname.startsWith("/auth")) return;
  if (req.mode === "navigate") return e.respondWith(handlePage(req));
  if (req.headers.get("RSC") || url.searchParams.has("_rsc")) return;
  if (isAsset(url)) return e.respondWith(handleAsset(req));
});

/* Messages from the page: save / remove a lesson, list what is saved. */
self.addEventListener("message", (e) => {
  const msg = e.data || {};
  const reply = (data) => e.ports[0] && e.ports[0].postMessage(data);
  if (msg.type === "save") {
    e.waitUntil(
      (async () => {
        const saved = await caches.open(SAVED);
        const assets = await caches.open(ASSETS);
        const key = new URL(msg.url, self.location.origin);
        const page = await fetch(key.pathname, { credentials: "same-origin" });
        if (!page.ok) return reply({ ok: false });
        await saved.put(key.origin + key.pathname, page);
        // The scripts and styles the page needs (sent by the page from its resource timings).
        await Promise.all((msg.assets || []).map((a) => assets.match(a).then((hit) => hit || assets.add(a)).catch(() => {})));
        reply({ ok: true });
      })().catch(() => reply({ ok: false })),
    );
  } else if (msg.type === "assets") {
    // Scripts and styles of the first page, fetched before this worker took control.
    e.waitUntil(caches.open(ASSETS).then((c) => Promise.all((msg.assets || []).map((a) => c.match(a).then((hit) => hit || c.add(a)).catch(() => {})))));
  } else if (msg.type === "remove") {
    const key = new URL(msg.url, self.location.origin);
    e.waitUntil(caches.open(SAVED).then((c) => c.delete(key.origin + key.pathname)).then(() => reply({ ok: true })));
  }
});
