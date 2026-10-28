"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookmarkCheck, History, Trash2 } from "lucide-react";
import { useT } from "@/i18n";
import { listOfflinePages, offlineSupported, removePage, type OfflinePage } from "./offline";

/** Lessons and notes this device can open without internet. */
export function OfflineList() {
  const t = useT();
  const [pages, setPages] = useState<OfflinePage[] | null>(null);
  const refresh = () => void listOfflinePages().then(setPages).catch(() => setPages([]));
  useEffect(refresh, []);

  if (pages === null) return <p className="mt-6 text-muted">{t("offline.loading", "Looking for saved lessons…")}</p>;
  if (!offlineSupported()) return <p className="mt-6 text-muted">{t("offline.unsupported", "This browser can't keep lessons offline.")}</p>;
  if (!pages.length) return <p className="mt-6 font-semibold text-muted">{t("offline.empty", "Nothing saved yet. Open a lesson and tap “Save for offline”.")}</p>;
  return (
    <ul className="card mt-6 divide-y-2 divide-line">
      {pages.map((p) => (
        <li key={p.path} className="flex items-center gap-3 p-4">
          {p.saved ? <BookmarkCheck className="h-5 w-5 shrink-0 text-good" aria-label={t("offline.savedTag", "Saved")} /> : <History className="h-5 w-5 shrink-0 text-muted" aria-label={t("offline.recentTag", "Recently opened")} />}
          <a href={p.path} className="min-w-0 flex-1 truncate font-bold hover:text-accent">
            {p.title}
          </a>
          {p.saved && (
            <button type="button" className="btn-ghost !p-2" aria-label={t("offline.remove", "Remove offline copy of {title}", { title: p.title })} onClick={() => removePage(p.path).then(refresh)}>
              <Trash2 className="h-4 w-4" aria-hidden />
            </button>
          )}
        </li>
      ))}
      <li className="p-4 text-sm text-muted">
        <Link href="/learn" className="font-bold text-accent">
          {t("offline.home", "Back to my class")}
        </Link>
      </li>
    </ul>
  );
}
