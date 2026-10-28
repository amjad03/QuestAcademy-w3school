"use client";

import { useMemo, useState } from "react";
import { FileUp, Printer } from "lucide-react";
import { useT } from "@/i18n";
import { authedPost, isDemo } from "@/lib/school/client";
import type { ClassRow } from "@/lib/school/types";
import type { SlipResult } from "@/app/api/school/import/route";

/** Parse CSV text (quotes, commas and newlines inside quotes). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') (cell += '"', i++);
      else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ",") (row.push(cell), (cell = ""));
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      if (row.some((c) => c.trim())) rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  row.push(cell);
  if (row.some((c) => c.trim())) rows.push(row);
  return rows.map((r) => r.map((c) => c.trim()));
}

const FIELDS: Record<string, string[]> = {
  name: ["name", "student", "student name", "full name"],
  class: ["class", "grade", "standard", "std"],
  section: ["section", "sec", "division", "div"],
  email: ["email", "e-mail", "student email"],
  roll: ["roll", "roll no", "roll number", "admission no"],
  parentName: ["parent", "parent name", "guardian", "guardian name"],
  parentPhone: ["parent phone", "phone", "mobile", "whatsapp", "parent mobile", "guardian phone"],
  parentEmail: ["parent email", "guardian email"],
};

export function rowsFromCsv(text: string) {
  const grid = parseCsv(text.replace(/^﻿/, ""));
  if (!grid.length) return [];
  const head = grid[0].map((h) => h.toLowerCase().replace(/[_.]/g, " ").trim());
  const idx = Object.fromEntries(Object.entries(FIELDS).map(([k, names]) => [k, head.findIndex((h) => names.includes(h))])) as Record<keyof typeof FIELDS, number>;
  const hasHeader = idx.name >= 0;
  const order = hasHeader ? idx : { name: 0, class: 1, section: 2, email: 3, roll: -1, parentName: -1, parentPhone: 4, parentEmail: -1 };
  return grid.slice(hasHeader ? 1 : 0).map((r) => {
    const get = (k: keyof typeof FIELDS) => (order[k] >= 0 ? r[order[k]] ?? "" : "");
    return { name: get("name"), class: get("class"), section: get("section") || "A", email: get("email"), roll: get("roll"), parentName: get("parentName"), parentPhone: get("parentPhone"), parentEmail: get("parentEmail") };
  });
}

export function ImportStudents({ schoolId, classes, onDone }: { schoolId: string; classes: ClassRow[]; onDone?: () => void }) {
  const t = useT();
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slips, setSlips] = useState<SlipResult[] | null>(null);
  const rows = useMemo(() => rowsFromCsv(text), [text]);
  const sample = classes[0] ? `${classes[0].name},${classes[0].section}` : "Class 10,A";

  const run = async () => {
    setBusy(true);
    setError(null);
    try {
      if (isDemo()) {
        setSlips(rows.map((r, i) => ({ name: r.name, className: r.class, section: r.section, email: r.email || `${r.name.toLowerCase().replace(/[^a-z]+/g, ".")}.${1000 + i}@sunrise.students.invalid`, password: `tiger-maple-${10 + i}`, status: "created" })));
      } else {
        const res = await authedPost<{ results: SlipResult[] }>("/api/school/import", { schoolId, rows });
        setSlips(res.results);
      }
      onDone?.();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (slips) return <LoginSlips slips={slips} onBack={() => (setSlips(null), setText(""))} />;

  return (
    <div className="rounded-2xl border-2 border-dashed border-line p-4">
      <p className="font-extrabold">{t("import.title", "Import students from a spreadsheet")}</p>
      <p className="mt-1 text-sm font-semibold text-muted">{t("import.help", "Columns: name, class, section, email (optional), parent phone (optional). Students without an email get a school login. Up to 600 at a time.")}</p>
      <label className="btn-ghost mt-3 cursor-pointer !py-2 text-sm">
        <FileUp className="h-4 w-4" /> {t("import.choose", "Choose CSV file")}
        <input type="file" accept=".csv,text/csv" className="sr-only" onChange={async (e) => setText((await e.target.files?.[0]?.text()) ?? "")} />
      </label>
      <textarea className="input mt-3 min-h-[110px] font-mono text-xs" placeholder={`name,class,section,email,parent phone\nAsha Rao,${sample},asha@example.com,9876543210`} value={text} onChange={(e) => setText(e.target.value)} aria-label={t("import.paste", "Or paste CSV here")} />
      {rows.length > 0 && (
        <p className="mt-2 text-sm font-bold text-muted">
          {t("import.ready", "{n} students ready to import", { n: rows.length })}
          {rows.some((r) => !r.name || !r.class) && <span className="text-bad"> · {t("import.missing", "some rows are missing a name or class")}</span>}
        </p>
      )}
      {error && <p className="mt-2 font-bold text-bad">{error}</p>}
      <button className="btn-primary mt-3" disabled={!rows.length || busy || rows.length > 600} onClick={run}>
        {busy ? t("import.working", "Creating accounts…") : t("import.cta", "Create accounts")}
      </button>
    </div>
  );
}

/** Printable login slips: cut along the lines and hand one to each student. */
export function LoginSlips({ slips, onBack }: { slips: SlipResult[]; onBack: () => void }) {
  const t = useT();
  const ok = slips.filter((s) => s.status !== "error");
  const bad = slips.filter((s) => s.status === "error");
  const site = typeof location === "undefined" ? "" : location.host;
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2 print:hidden">
        <p className="min-w-0 flex-1 font-extrabold">
          {t("slips.summary", "{ok} accounts ready, {bad} problems", { ok: ok.length, bad: bad.length })}
        </p>
        <button className="btn-primary !py-2 text-sm" onClick={() => window.print()}>
          <Printer className="h-4 w-4" /> {t("slips.print", "Print login slips")}
        </button>
        <button className="btn-ghost !py-2 text-sm" onClick={onBack}>
          {t("slips.done", "Done")}
        </button>
      </div>
      {bad.length > 0 && (
        <ul className="mb-4 space-y-1 rounded-2xl bg-bad-soft p-3 text-sm font-semibold text-bad print:hidden">
          {bad.map((s, i) => (
            <li key={i}>
              {s.name || t("slips.noName", "(no name)")}: {s.error}
            </li>
          ))}
        </ul>
      )}
      <p className="mb-3 text-sm font-semibold text-muted print:hidden">{t("slips.warn", "Passwords are shown only now. Print or save the slips before leaving this page.")}</p>
      <div className="slips grid gap-3 sm:grid-cols-2 print:grid-cols-2 print:gap-0">
        {ok.map((s, i) => (
          <div key={i} className="break-inside-avoid rounded-2xl border-2 border-dashed border-line p-4 print:rounded-none print:border-black">
            <p className="text-xs font-extrabold uppercase tracking-wide text-muted">Quest Academy · {t("slips.login", "Your login")}</p>
            <p className="mt-1 text-lg font-black">{s.name}</p>
            <p className="text-sm font-bold text-muted">
              {s.className} {s.section}
            </p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
              <dt className="font-bold text-muted">{t("slips.site", "Website")}</dt>
              <dd className="break-all font-mono font-bold">{site}/auth</dd>
              <dt className="font-bold text-muted">{t("slips.email", "Email")}</dt>
              <dd className="break-all font-mono font-bold">{s.email}</dd>
              <dt className="font-bold text-muted">{t("slips.password", "Password")}</dt>
              <dd className="font-mono font-bold">{s.password ?? t("slips.existing", "Use your existing password")}</dd>
            </dl>
            <p className="mt-3 text-xs font-semibold text-muted">{t("slips.change", "Change your password after your first sign-in (Profile → Settings).")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
