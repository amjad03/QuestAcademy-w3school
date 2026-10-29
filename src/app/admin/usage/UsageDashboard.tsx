"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/providers";

interface Agg {
  key: string;
  requests: number;
  inputTokens: number;
  outputTokens: number;
  costInr: number;
}
interface Data {
  days: number;
  usdToInr: number;
  totals: Omit<Agg, "key">;
  voice?: { ttsChars: number; sttSeconds: number; costInr: number };
  byDay: Agg[];
  topUsers: (Agg & { guest: boolean; email: string | null })[];
  bySchool: (Agg & { name: string; users: number })[];
}

const n = (v: number) => v.toLocaleString("en-IN");
const inr = (v: number) => `₹${v.toLocaleString("en-IN", { minimumFractionDigits: v < 100 ? 2 : 0, maximumFractionDigits: v < 100 ? 2 : 0 })}`;

function Table({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full text-sm">
        <thead className="bg-surface-2 text-left">
          <tr>{head.map((h, i) => <th key={h} className={`px-3 py-2 font-extrabold ${i ? "text-right" : ""}`}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={head.length} className="px-3 py-4 text-center text-muted">No requests in this period.</td>
            </tr>
          )}
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-line">
              {r.map((c, j) => <td key={j} className={`px-3 py-2 ${j ? "text-right tabular-nums" : "font-semibold"}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Operator view of AI requests and their estimated cost. The API checks ADMIN_EMAILS. */
export function UsageDashboard() {
  const { user, loading } = useAuth();
  const [days, setDays] = useState(30);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loading || !user) return;
    let off = false;
    setError(null);
    (async () => {
      const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
      const res = await fetch(`/api/admin/usage?days=${days}`, { headers: token ? { Authorization: `Bearer ${token}` } : {}, cache: "no-store" }).catch(() => null);
      if (off) return;
      if (!res) return setError("Could not reach the server.");
      if (res.status === 403) return setError("This page is only for Quest Academy operators.");
      if (res.status === 503) return setError("Supabase isn't configured on this deployment.");
      if (!res.ok) return setError("The usage query failed. Has the ops migration been run?");
      setData((await res.json()) as Data);
    })();
    return () => {
      off = true;
    };
  }, [user, loading, days]);

  if (loading) return <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted" />;
  if (!user)
    return (
      <p className="font-semibold">
        <Link href="/auth" className="font-bold text-accent">Sign in</Link> with an operator account to see AI usage.
      </p>
    );

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">AI usage and cost</h1>
          <p className="text-sm font-semibold text-muted">Estimated from token counts at list prices{data ? `, at ₹${data.usdToInr} per US$` : ""}. Days are in India time.</p>
        </div>
        <label className="text-sm font-bold">
          Period{" "}
          <select value={days} onChange={(e) => setDays(Number(e.target.value))} className="input ml-1 inline-block w-auto py-1">
            {[1, 7, 30, 90].map((d) => <option key={d} value={d}>{d === 1 ? "Last 24 hours" : `Last ${d} days`}</option>)}
          </select>
        </label>
      </header>

      {error && <p className="rounded-xl bg-surface-2 px-3 py-2 font-bold text-bad-shade">{error}</p>}
      {!data && !error && <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted" />}

      {data && (
        <>
          <section className="grid gap-3 sm:grid-cols-4">
            {[
              ["Requests", n(data.totals.requests)],
              ["Input tokens", n(data.totals.inputTokens)],
              ["Output tokens", n(data.totals.outputTokens)],
              ["Estimated cost", inr(data.totals.costInr)],
            ].map(([label, value]) => (
              <div key={label} className="card p-4">
                <div className="text-xs font-extrabold uppercase text-muted">{label}</div>
                <div className="mt-1 text-2xl font-black tabular-nums">{value}</div>
              </div>
            ))}
          </section>
          {data.voice && (data.voice.ttsChars > 0 || data.voice.sttSeconds > 0) && (
            <p className="card p-4 text-sm font-bold">
              Voice (Sarvam): {n(data.voice.ttsChars)} TTS characters · {n(Math.round(data.voice.sttSeconds / 60))} STT minutes · {inr(data.voice.costInr)} (included in the cost above)
            </p>
          )}

          <section className="space-y-2">
            <h2 className="text-xl font-black">Daily totals</h2>
            <Table head={["Day", "Requests", "Input tokens", "Output tokens", "Cost"]} rows={data.byDay.map((d) => [d.key, n(d.requests), n(d.inputTokens), n(d.outputTokens), inr(d.costInr)])} />
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black">Top users</h2>
            <Table head={["User", "Requests", "Input tokens", "Output tokens", "Cost"]} rows={data.topUsers.map((u) => [u.guest ? "Guest (hashed IP)" : (u.email ?? u.key), n(u.requests), n(u.inputTokens), n(u.outputTokens), inr(u.costInr)])} />
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-black">By school</h2>
            <Table head={["School", "Learners", "Requests", "Tokens", "Cost"]} rows={data.bySchool.map((s) => [s.name, n(s.users), n(s.requests), n(s.inputTokens + s.outputTokens), inr(s.costInr)])} />
          </section>
        </>
      )}
    </div>
  );
}
