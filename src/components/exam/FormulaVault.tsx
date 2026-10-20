"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Eye, EyeOff, Search } from "lucide-react";
import clsx from "clsx";
import type { ExamSubject, FormulaSheet } from "@/content/types";
import { SUBJECT_META } from "@/lib/exam";
import { MdInline } from "@/components/Md";

type Sheet = Omit<FormulaSheet, "items"> & { items: (FormulaSheet["items"][number] & { html: string })[] };

export function FormulaVault({ sheets }: { sheets: Sheet[] }) {
  const [subject, setSubject] = useState<ExamSubject | "all">("all");
  const [q, setQ] = useState("");
  const [quiz, setQuiz] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const subjects = Array.from(new Set(sheets.map((s) => s.subject)));
  const shown = useMemo(() => {
    const t = q.toLowerCase();
    return sheets
      .filter((s) => subject === "all" || s.subject === subject)
      .map((s) => ({ ...s, items: s.items.filter((i) => !t || [i.name, i.note ?? "", s.chapter].join(" ").toLowerCase().includes(t)) }))
      .filter((s) => s.items.length);
  }, [sheets, subject, q]);

  return (
    <div data-world="exam" className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Link href="/exam" className="text-sm text-muted hover:text-ink">
          ← The Arena
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold">📜 Formula vault</h1>
        <p className="mt-2 text-muted">Every must-know formula, chapter by chapter. Turn on self-test mode to hide them and recall from memory.</p>

        <div className="sticky top-16 z-10 -mx-4 mt-6 flex flex-col gap-3 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {(["all", ...subjects] as const).map((s) => (
              <button key={s} onClick={() => setSubject(s)} className={clsx("rounded-full border px-4 py-1.5 text-sm font-medium", subject === s ? "border-accent bg-accent text-black" : "border-line text-muted hover:text-ink")}>
                {s === "all" ? "All" : `${SUBJECT_META[s].emoji} ${SUBJECT_META[s].name}`}
              </button>
            ))}
          </div>
          <label className="relative sm:ml-auto sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search formulas…" className="input !py-2 pl-9" />
          </label>
          <button onClick={() => { setQuiz((x) => !x); setRevealed(new Set()); }} className={clsx("btn", quiz ? "bg-accent text-black" : "btn-ghost")}>
            {quiz ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />} Self-test {quiz ? "on" : "off"}
          </button>
        </div>

        <div className="mt-8 space-y-10">
          {shown.map((s) => (
            <section key={s.subject + s.chapter}>
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
                <span>{SUBJECT_META[s.subject].emoji}</span> {s.chapter}
                <span className="chip ml-2">{s.items.length}</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {s.items.map((i) => {
                  const key = s.chapter + i.name;
                  const hidden = quiz && !revealed.has(key);
                  return (
                    <button
                      key={key}
                      onClick={() => quiz && setRevealed((r) => new Set(r).add(key))}
                      className={clsx("card flex flex-col p-4 text-left transition", quiz && "cursor-pointer hover:border-accent/50")}
                    >
                      <span className="text-sm font-semibold">{i.name}</span>
                      <span className={clsx("relative my-3 overflow-x-auto rounded-2xl bg-surface-2 px-3 py-4 text-center transition", hidden && "select-none blur-md")} dangerouslySetInnerHTML={{ __html: i.html }} />
                      {hidden && <span className="-mt-14 mb-6 text-center text-xs font-bold text-accent">Tap to reveal</span>}
                      {i.note && (
                        <span className="text-xs leading-5 text-muted">
                          <MdInline text={i.note} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
