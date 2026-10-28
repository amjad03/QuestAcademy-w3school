"use client";

import { useEffect, useState } from "react";
import { Loader2, Lock, Sparkles } from "lucide-react";
import { useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { TutorRoom } from "./TutorRoom";

interface PayConfig {
  payments: boolean;
  open: boolean;
  keyId: string | null;
  priceInr: number;
  days: number;
}

type RazorpayCtor = new (o: Record<string, unknown>) => { open: () => void };

function loadCheckout(): Promise<RazorpayCtor | null> {
  const w = window as unknown as { Razorpay?: RazorpayCtor };
  if (w.Razorpay) return Promise.resolve(w.Razorpay);
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(w.Razorpay ?? null);
    s.onerror = () => resolve(null);
    document.body.appendChild(s);
  });
}

/** Premium gate for the live tutor: open to everyone until NEXT_PUBLIC_TUTOR_PREMIUM=1, then a valid pass. */
export function PlanGate() {
  const t = useT();
  const hydrated = useHydrated();
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);
  const [cfg, setCfg] = useState<PayConfig | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/pay")
      .then((r) => r.json())
      .then(setCfg)
      .catch(() => setCfg({ payments: false, open: process.env.NEXT_PUBLIC_TUTOR_PREMIUM !== "1", keyId: null, priceInr: 299, days: 30 }));
  }, []);

  const pass = profile.tutorPass && profile.tutorPass.until > new Date().toISOString() ? profile.tutorPass.pass : null;
  const open = process.env.NEXT_PUBLIC_TUTOR_PREMIUM !== "1" || cfg?.open;
  if (!hydrated || (!cfg && !open && !pass)) return <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted" />;
  if (open || pass) return <TutorRoom pass={pass} />;

  const buy = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const order = (await fetch("/api/pay/order", { method: "POST" }).then((r) => r.json())) as { orderId?: string; amount?: number; currency?: string; keyId?: string };
      const Rzp = order.orderId ? await loadCheckout() : null;
      if (!Rzp || !order.orderId) throw new Error("order");
      new Rzp({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "Quest Academy",
        description: t("tutor.pay.desc", "Live AI tutor · {days} days", { days: cfg?.days ?? 30 }),
        prefill: { name: profile.name },
        theme: { color: "#6366f1" },
        handler: async (resp: Record<string, string>) => {
          const v = (await fetch("/api/pay/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(resp) }).then((r) => r.json())) as { pass?: string; until?: string };
          if (v.pass && v.until) setProfile({ tier: "premium", tutorPass: { pass: v.pass, until: v.until } });
          else setMsg(t("tutor.pay.verifyFailed", "We couldn't confirm the payment. If money was taken, contact us with your payment id."));
        },
      }).open();
    } catch {
      setMsg(t("tutor.pay.failed", "Couldn't start the payment. Please try again."));
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="card mx-auto max-w-xl space-y-4 p-6 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent">
        <Lock className="h-7 w-7" />
      </span>
      <h1 className="text-2xl font-black">{t("tutor.pay.title", "Live AI tutor is a Premium feature")}</h1>
      <ul className="space-y-1 text-left text-sm font-semibold">
        <li>✓ {t("tutor.pay.f1", "Teaches on a smartboard while talking, step by step")}</li>
        <li>✓ {t("tutor.pay.f2", "Snap a doubt: hints first, full solution when you want it")}</li>
        <li>✓ {t("tutor.pay.f3", "Finds your mistakes and fixes the idea behind them")}</li>
        <li>✓ {t("tutor.pay.f4", "English, हिन्दी, ಕನ್ನಡ and Hinglish")}</li>
      </ul>
      {cfg?.payments ? (
        <button type="button" onClick={buy} disabled={busy} className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-60">
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          {t("tutor.pay.cta", "Unlock for ₹{price} / {days} days", { price: cfg.priceInr, days: cfg.days })}
        </button>
      ) : (
        <p className="rounded-xl bg-surface-2 px-3 py-2 font-extrabold">{t("tutor.pay.soon", "Payments coming soon")}</p>
      )}
      {msg && <p className="text-sm font-bold text-red-600">{msg}</p>}
    </section>
  );
}
