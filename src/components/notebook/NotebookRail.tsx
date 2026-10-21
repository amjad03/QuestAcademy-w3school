"use client";

import { useNotebook } from "@/lib/notebook-store";
import { useHydrated } from "@/components/providers";
import { RailCard } from "@/components/shell/RailCards";

export function NotebookRail() {
  const hydrated = useHydrated();
  const notes = useNotebook((s) => Object.keys(s.notes).length);
  const bookmarks = useNotebook((s) => Object.keys(s.bookmarks).length);
  const open = useNotebook((s) => s.doubts.filter((d) => !d.resolved).length);
  const resolved = useNotebook((s) => s.doubts.filter((d) => d.resolved).length);
  const n = (v: number) => (hydrated ? String(v) : "–");
  return (
    <RailCard title="At a glance">
      <dl className="space-y-2.5 text-sm">
        {[
          ["Notes", n(notes)],
          ["Bookmarks", n(bookmarks)],
          ["Open doubts", n(open)],
          ["Resolved doubts", n(resolved)],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3">
            <dt className="font-semibold text-muted">{label}</dt>
            <dd className="font-bold tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs font-semibold text-muted">Everything here is stored on this device. Export to Markdown to keep a copy.</p>
    </RailCard>
  );
}
