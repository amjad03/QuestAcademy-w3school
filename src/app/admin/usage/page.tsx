import type { Metadata } from "next";
import { UsageDashboard } from "./UsageDashboard";

export const metadata: Metadata = { title: "AI usage", robots: { index: false, follow: false } };

export default function AdminUsagePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <UsageDashboard />
    </main>
  );
}
