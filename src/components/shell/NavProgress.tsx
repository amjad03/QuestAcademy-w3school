"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * Thin progress bar at the top of the window on every in-app navigation:
 * it starts the moment a link is clicked (or router.push/replace is called)
 * and completes when the new route has rendered.
 */
let bar: HTMLDivElement | null = null;
let timer: ReturnType<typeof setInterval> | undefined;
let safety: ReturnType<typeof setTimeout> | undefined;
let value = 0;
let active = false;

function el() {
  if (bar && document.body.contains(bar)) return bar;
  bar = document.createElement("div");
  bar.setAttribute("aria-hidden", "true");
  bar.className = "nav-progress";
  document.body.appendChild(bar);
  return bar;
}

function paint() {
  const b = el();
  b.style.transform = `scaleX(${value})`;
}

export function startProgress() {
  if (typeof document === "undefined") return;
  clearTimeout(safety);
  const b = el();
  if (!active) {
    active = true;
    value = 0.08;
    b.style.transition = "none";
    b.style.opacity = "1";
    paint();
    // Force a reflow so the next change animates.
    void b.offsetWidth;
    b.style.transition = "transform 200ms ease-out, opacity 300ms ease";
  }
  clearInterval(timer);
  // Creep towards 90% so long renders still show movement.
  timer = setInterval(() => {
    value += (0.9 - value) * 0.08;
    paint();
  }, 200);
  // Never leave a stuck bar (e.g. a navigation that was cancelled).
  safety = setTimeout(doneProgress, 15000);
}

export function doneProgress() {
  if (!active || typeof document === "undefined") return;
  active = false;
  clearInterval(timer);
  clearTimeout(safety);
  value = 1;
  paint();
  const b = el();
  setTimeout(() => {
    if (active) return;
    b.style.opacity = "0";
    setTimeout(() => {
      if (active) return;
      b.style.transition = "none";
      value = 0;
      paint();
    }, 300);
  }, 150);
}

function isInternalNav(e: MouseEvent): boolean {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
  const a = (e.target as Element | null)?.closest?.("a");
  if (!a || !a.href || a.hasAttribute("download")) return false;
  const target = a.getAttribute("target");
  if (target && target !== "_self") return false;
  let url: URL;
  try {
    url = new URL(a.href, location.href);
  } catch {
    return false;
  }
  if (url.origin !== location.origin) return false;
  // Same page (or only a #hash change): nothing to load.
  if (url.pathname === location.pathname && url.search === location.search) return false;
  // Static files open in place of the app.
  if (/\.(json|pdf|png|jpe?g|svg|webp|mp3|mp4|zip|txt|xml)$/i.test(url.pathname)) return false;
  return true;
}

function Watcher() {
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const first = useRef(true);

  // Route committed: finish the bar.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    doneProgress();
  }, [pathname, search]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (isInternalNav(e)) startProgress();
    };
    // Capture phase: next/link cancels the native click before it bubbles to the document.
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", startProgress);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", startProgress);
    };
  }, []);

  // Programmatic navigation (router.push / replace) starts the bar too.
  useEffect(() => {
    const r = router as unknown as Record<"push" | "replace", (href: string, ...rest: unknown[]) => void>;
    const orig = { push: r.push, replace: r.replace };
    const wrap = (fn: (href: string, ...rest: unknown[]) => void) =>
      function (this: unknown, href: string, ...rest: unknown[]) {
        try {
          const url = new URL(href, location.href);
          if (url.pathname !== location.pathname || url.search !== location.search) startProgress();
        } catch {
          /* ignore */
        }
        return fn.call(this ?? router, href, ...rest);
      };
    try {
      r.push = wrap(orig.push);
      r.replace = wrap(orig.replace);
    } catch {
      return;
    }
    return () => {
      try {
        r.push = orig.push;
        r.replace = orig.replace;
      } catch {
        /* ignore */
      }
    };
  }, [router]);

  return null;
}

export function NavProgress() {
  return (
    <Suspense fallback={null}>
      <Watcher />
    </Suspense>
  );
}
