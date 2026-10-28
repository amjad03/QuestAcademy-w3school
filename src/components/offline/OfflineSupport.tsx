"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WifiOff } from "lucide-react";
import { useT } from "@/i18n";
import { loadedAssets } from "./offline";

/** Registers the service worker (production only) and shows a banner while offline. */
export function OfflineSupport() {
  const t = useT();
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    const register = () =>
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => navigator.serviceWorker.ready)
        .then((reg) => reg.active?.postMessage({ type: "assets", assets: loadedAssets() }))
        .catch(() => {});
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  if (!offline) return null;
  return (
    <div role="status" className="fixed inset-x-0 top-0 z-[70] flex items-center justify-center gap-2 bg-ink px-4 py-2 text-center text-sm font-bold text-bg">
      <WifiOff className="h-4 w-4 shrink-0" aria-hidden />
      <span>{t("offline.banner", "You're offline. Saved and recently opened lessons still work.")}</span>
      <Link href="/offline" className="underline">
        {t("offline.bannerLink", "Saved lessons")}
      </Link>
    </div>
  );
}
