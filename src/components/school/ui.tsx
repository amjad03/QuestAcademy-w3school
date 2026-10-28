"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import clsx from "clsx";
import { Info, X } from "lucide-react";
import { useT } from "@/i18n";
import { useAuth, useHydrated } from "@/components/providers";
import { Mascot } from "@/components/brand/Mascot";
import { demoAvailable, useRoles, useSchool } from "@/lib/school/client";
import type { SchoolRole } from "@/lib/school/types";

export const pct = (x: number | null | undefined, digits = 0) => (x === null || x === undefined || Number.isNaN(x) ? "–" : `${(x * 100).toFixed(digits)}%`);

export function daysSince(iso: string | null | undefined) {
  if (!iso) return Infinity;
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
}

export function useAgo() {
  const t = useT();
  return (iso: string | null | undefined) => {
    const d = daysSince(iso);
    if (d === Infinity) return t("school.ago.never", "Never");
    if (d <= 0) return t("school.ago.today", "Today");
    if (d === 1) return t("school.ago.yesterday", "Yesterday");
    return t("school.ago.days", "{n} days ago", { n: d });
  };
}

/** Mastery 0–1 → heat colour (red → amber → green), with an empty state. */
export function heat(level: number | null) {
  if (level === null) return "rgb(var(--surface-2))";
  const stops = [
    [0, [239, 68, 68]],
    [0.45, [245, 158, 11]],
    [0.75, [132, 204, 22]],
    [1, [34, 160, 90]],
  ] as const;
  let i = 0;
  while (i < stops.length - 2 && level > stops[i + 1][0]) i++;
  const [a, ca] = stops[i];
  const [b, cb] = stops[i + 1];
  const f = Math.min(1, Math.max(0, (level - a) / (b - a)));
  const c = ca.map((v, k) => Math.round(v + (cb[k] - v) * f));
  return `rgb(${c[0]} ${c[1]} ${c[2]})`;
}

export function PageWrap({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-full max-w-[1240px] px-4 pb-16 pt-6 sm:px-6 lg:pt-8", className)}>{children}</div>;
}

export function PageTitle({ eyebrow, title, sub, actions }: { eyebrow?: string; title: string; sub?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-1 text-2xl font-black sm:text-3xl">{title}</h1>
        {sub && <div className="mt-1 font-semibold text-muted">{sub}</div>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Stat({ label, value, hint, tone }: { label: string; value: ReactNode; hint?: ReactNode; tone?: "good" | "bad" | "warn" }) {
  return (
    <div className="card min-w-0 p-4">
      <p className="truncate text-xs font-extrabold uppercase tracking-wide text-muted">{label}</p>
      <p className={clsx("mt-1 text-2xl font-black tabular-nums", tone === "good" && "text-good", tone === "bad" && "text-bad", tone === "warn" && "text-warn-shade")}>{value}</p>
      {hint && <p className="mt-0.5 truncate text-xs font-semibold text-muted">{hint}</p>}
    </div>
  );
}

export function Section({ title, action, children, className, id }: { title: string; action?: ReactNode; children: ReactNode; className?: string; id?: string }) {
  return (
    <section className={clsx("card p-4 sm:p-5", className)} aria-labelledby={id}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 id={id} className="text-lg font-black">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Bar({ value, color = "rgb(var(--accent))" }: { value: number | null; color?: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2" role="presentation">
      <div className="h-full rounded-full" style={{ width: `${Math.round(Math.min(1, Math.max(0, value ?? 0)) * 100)}%`, background: color }} />
    </div>
  );
}

export function Tabs<T extends string>({ value, onChange, items }: { value: T; onChange: (v: T) => void; items: { id: T; label: string; count?: number }[] }) {
  return (
    <div role="tablist" className="[scrollbar-width:none] -mx-4 mb-5 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      {items.map((it) => (
        <button key={it.id} role="tab" aria-selected={value === it.id} onClick={() => onChange(it.id)} className={clsx("shrink-0 rounded-xl px-4 py-2 text-sm font-extrabold transition", value === it.id ? "bg-accent text-white" : "text-muted hover:bg-surface-2")}>
          {it.label}
          {it.count !== undefined && <span className={clsx("ml-1.5 rounded-md px-1.5 text-xs", value === it.id ? "bg-white/25" : "bg-surface-2")}>{it.count}</span>}
        </button>
      ))}
    </div>
  );
}

export function Drawer({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const t = useT();
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex justify-end" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 bg-black/40" aria-label={t("school.close", "Close")} onClick={onClose} />
      <div className="relative flex h-full w-full max-w-[560px] flex-col overflow-hidden bg-bg shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b-2 border-line px-5 py-4">
          <h2 className="min-w-0 truncate text-lg font-black">{title}</h2>
          <button onClick={onClose} className="btn-flat !px-2" aria-label={t("school.close", "Close")}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

export function Empty({ title, body, action }: { title: string; body?: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center">
      <Mascot pose="wave" size={96} />
      <p className="mt-4 text-lg font-black">{title}</p>
      {body && <p className="mt-1 max-w-md font-semibold text-muted">{body}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function DemoBanner() {
  const t = useT();
  const demo = useSchool((s) => s.demo);
  const setDemo = useSchool((s) => s.setDemo);
  if (!demo) return null;
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl bg-accent-soft px-4 py-3 text-sm font-bold text-accent">
      <Info className="h-4 w-4 shrink-0" />
      <span className="min-w-0 flex-1">{t("school.demo.banner", "Preview with sample data. Nothing you do here is saved.")}</span>
      <button className="btn-flat" onClick={() => setDemo(false)}>
        {t("school.demo.exit", "Exit preview")}
      </button>
    </div>
  );
}

/**
 * Page guard for school pages: signed in, with one of the roles. Offers sign-in,
 * joining, or (without Supabase) a preview with sample data.
 */
export function SchoolGate({ roles, children, title }: { roles: SchoolRole[]; children: ReactNode; title: string }) {
  const t = useT();
  const hydrated = useHydrated();
  const { user, enabled, loading } = useAuth();
  const demo = useSchool((s) => s.demo);
  const setDemo = useSchool((s) => s.setDemo);
  const r = useRoles();
  const [asked, setAsked] = useState(false);

  // "?demo=1" opens the preview directly (only when accounts aren't configured).
  useEffect(() => {
    if (demoAvailable && !demo && new URLSearchParams(location.search).get("demo") === "1") setDemo(true);
    setAsked(true);
  }, [demo, setDemo]);

  if (!hydrated || !asked || (enabled && loading)) return <PageWrap><div className="h-72 animate-pulse rounded-2xl bg-surface-2" /></PageWrap>;

  const has = roles.some((role) => (role === "student" ? r.student : role === "teacher" ? r.teacherOf.length : role === "principal" ? r.principalOf.length : r.parentOf.length));
  if (demo || (user && has)) return <>{children}</>;

  return (
    <PageWrap>
      <div className="mx-auto max-w-lg">
        <Empty
          title={title}
          body={
            !enabled
              ? t("school.gate.noAccounts", "School features need accounts, which aren't switched on for this site yet. You can look around with a sample school.")
              : !user
                ? t("school.gate.signIn", "Sign in with your school account to continue.")
                : t("school.gate.join", "Your account isn't part of a school here yet. Join with the code from your teacher or principal.")
          }
          action={
            <div className="flex flex-wrap justify-center gap-2">
              {!enabled && (
                <button className="btn-primary" onClick={() => setDemo(true)}>
                  {t("school.gate.preview", "Preview with sample data")}
                </button>
              )}
              {enabled && !user && (
                <Link href="/auth" className="btn-primary">
                  {t("school.gate.signInCta", "Sign in")}
                </Link>
              )}
              {enabled && user && (
                <Link href="/join" className="btn-primary">
                  {t("school.gate.joinCta", "Join a school")}
                </Link>
              )}
              {enabled && user && roles.includes("principal") && (
                <Link href="/join?new=school" className="btn-ghost">
                  {t("school.gate.create", "Set up a new school")}
                </Link>
              )}
            </div>
          }
        />
      </div>
    </PageWrap>
  );
}

/** Download rows as a CSV file. */
export function downloadCsv(name: string, rows: (string | number | null | undefined)[][]) {
  const esc = (v: string | number | null | undefined) => {
    const s = v === null || v === undefined ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const blob = new Blob(["﻿" + rows.map((r) => r.map(esc).join(",")).join("\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
