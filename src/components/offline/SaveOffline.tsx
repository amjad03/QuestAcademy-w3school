"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CloudDownload, CloudOff, Loader2 } from "lucide-react";
import { useT } from "@/i18n";
import { isSaved, offlineSupported, removePage, savePage } from "./offline";

/** "Save for offline" for the current page (lessons, notes). */
export function SaveOffline({ path: given, className }: { path?: string; className?: string }) {
  const t = useT();
  const pathname = usePathname();
  const path = given ?? pathname;
  const [state, setState] = useState<"unknown" | "saved" | "unsaved" | "busy" | "failed">("unknown");

  useEffect(() => {
    if (!offlineSupported() || !navigator.serviceWorker.controller) return;
    let live = true;
    isSaved(path).then((s) => live && setState(s ? "saved" : "unsaved"));
    return () => {
      live = false;
    };
  }, [path]);

  if (state === "unknown") return null;
  const toggle = async () => {
    const was = state;
    setState("busy");
    const r = was === "saved" ? await removePage(path) : await savePage(path);
    setState(r.ok ? (was === "saved" ? "unsaved" : "saved") : "failed");
  };
  const label =
    state === "saved" ? t("offline.saved", "Saved for offline") : state === "busy" ? t("offline.saving", "Saving…") : state === "failed" ? t("offline.failed", "Couldn't save. Try again") : t("offline.save", "Save for offline");
  return (
    <button type="button" onClick={toggle} disabled={state === "busy"} aria-pressed={state === "saved"} className={className ?? "btn-ghost !py-2 text-xs"} title={state === "saved" ? t("offline.removeHint", "Tap to remove the offline copy") : undefined}>
      {state === "busy" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : state === "saved" ? <CloudOff className="h-4 w-4" aria-hidden /> : <CloudDownload className="h-4 w-4" aria-hidden />}
      {label}
    </button>
  );
}
