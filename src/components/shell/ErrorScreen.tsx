"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { useT } from "@/i18n";

/** A chunk from an older build can't be found (the app was updated while this tab was open). */
function isStaleBuild(error: Error) {
  return /ChunkLoadError|Loading chunk|Loading CSS chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(`${error.name} ${error.message}`);
}

/**
 * Shown instead of the bare "Application error" screen. Stale-build errors
 * reload once automatically; anything else offers retry, home, and — as a last
 * resort — clearing broken saved data.
 */
export function ErrorScreen({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const [details, setDetails] = useState(false);
  const t = useT();

  useEffect(() => {
    console.error(error);
    if (isStaleBuild(error)) {
      const key = "qa-reloaded-after-update";
      try {
        if (!sessionStorage.getItem(key)) {
          sessionStorage.setItem(key, "1");
          window.location.reload();
        }
      } catch {
        window.location.reload();
      }
    }
  }, [error]);

  const resetData = () => {
    if (!window.confirm(t("error.resetConfirm", "This clears progress saved on this device (signed-in progress stays in your account). Continue?"))) return;
    try {
      Object.keys(localStorage)
        .filter((k) => k === "quest-academy" || k.startsWith("qa-"))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      /* storage blocked */
    }
    window.location.href = "/";
  };

  return (
    <div className="grid min-h-[70vh] place-items-center px-5 py-16">
      <div className="w-full max-w-md text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-surface-2 text-muted">
          <RefreshCw className="h-8 w-8" />
        </span>
        <h1 className="mt-5 text-2xl font-black">{isStaleBuild(error) ? t("error.updated.title", "Quest Academy was updated") : t("error.title", "This page hit a problem")}</h1>
        <p className="mt-2 font-semibold text-muted">{isStaleBuild(error) ? t("error.updated.body", "Reload to get the latest version.") : t("error.body", "Your progress is safe. Try again, or head back home.")}</p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <button onClick={() => (isStaleBuild(error) ? window.location.reload() : reset())} className="btn-primary">
            {t("error.tryAgain", "Try again")}
          </button>
          <Link href="/learn" className="btn-ghost">
            {t("error.goHome", "Go home")}
          </Link>
        </div>
        <button onClick={() => setDetails((d) => !d)} className="mt-6 text-sm font-bold text-muted underline-offset-2 hover:underline">
          {details ? t("error.hideDetails", "Hide details") : t("error.showDetails", "Show details")}
        </button>
        {details && (
          <div className="mt-3 text-left">
            <pre className="max-h-40 overflow-auto rounded-xl bg-surface-2 p-3 text-xs text-muted">{`${error.name}: ${error.message}${error.digest ? `\n${error.digest}` : ""}`}</pre>
            <button onClick={resetData} className="mt-3 text-sm font-bold text-bad hover:underline">
              {t("error.resetData", "Still broken? Reset data saved on this device")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
