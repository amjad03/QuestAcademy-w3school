"use client";

import { Check, Circle, Printer } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CERTIFICATE_RUBRIC_THRESHOLD, type Pathway } from "@/content/pathways";
import { assignmentHref } from "@/lib/plan-sources/pathway";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { LogoMark } from "@/components/brand/Mascot";
import { Wordmark } from "@/components/brand/Logo";
import { useT } from "@/i18n";
import { formatDate, usePathwayProgress } from "./hooks";

export const CERTIFICATE_DISCLAIMER = "Certificate of completion from Quest Academy — not an accredited qualification";

const PRINT_CSS = `
@page { size: A4 landscape; margin: 0; }
@media print {
  html, body { background: #fff !important; }
  body * { visibility: hidden !important; }
  .qa-cert, .qa-cert * { visibility: visible !important; }
  .qa-cert { position: fixed !important; inset: 0 !important; margin: 0 !important; width: 100% !important; height: 100% !important; border-radius: 0 !important; box-shadow: none !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}`;

export function CertificateView({ pathway: p }: { pathway: Pathway }) {
  const t = useT();
  const disclaimer = t("cert.disclaimer", "Certificate of completion from Quest Academy — not an accredited qualification");
  const hydrated = useHydrated();
  const progress = usePathwayProgress(p);
  const profileName = useLearner((s) => s.profile.name);
  const issue = useLearner((s) => s.issueCertificate);
  const [name, setName] = useState<string | null>(null);

  if (!hydrated || !progress) return <div className="mx-auto max-w-[1060px] px-4 py-8" />;
  const cert = progress.certificate;
  const displayName = (name ?? profileName ?? "").trim() || t("cert.defaultName", "Learner");

  if (!cert) {
    return (
      <div className="mx-auto max-w-[760px] px-4 py-6 sm:px-6 lg:py-8">
        <Link href={`/pathways/${p.slug}`} className="text-sm font-semibold text-muted hover:text-ink">← {p.title}</Link>
        <span className="eyebrow mt-6 block">{t("cert.title", "Certificate of completion")}</span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{progress.eligible ? t("cert.completedTitle", "You’ve completed the pathway") : t("cert.requirementsTitle", "Certificate requirements")}</h1>
        <p className="mt-2 text-muted">
          {progress.eligible
            ? t("cert.eligibleBody", "Every lesson is complete and every assignment meets the rubric bar. Check how your name should appear, then issue your certificate.")
            : t("cert.requirementsBody", "Complete every lesson and submit each assignment with a self-assessed score of at least {pct}%.", { pct: Math.round(CERTIFICATE_RUBRIC_THRESHOLD * 100) })}
        </p>

        <div className="card mt-6 divide-y-2 divide-line overflow-hidden">
          <Req done={progress.lessonsDone === progress.lessonsTotal} label={t("cert.req.lessons", "Lessons")} detail={t("cert.req.lessonsDetail", "{done} of {total} complete", { done: progress.lessonsDone, total: progress.lessonsTotal })} href={`/pathways/${p.slug}`} />
          {progress.assignments.map((a) => (
            <Req
              key={a.assignment.id}
              done={a.passed}
              label={a.assignment.title}
              detail={
                a.submitted
                  ? a.passed
                    ? t("cert.req.submitted", "Submitted · {pct}%", { pct: Math.round(a.score * 100) })
                    : t("cert.req.submittedBelow", "Submitted · {pct}% — below 70%, revise and resubmit", { pct: Math.round(a.score * 100) })
                  : t("cert.req.notSubmitted", "Not submitted yet")
              }
              href={assignmentHref(p.slug, a.assignment.id)}
            />
          ))}
        </div>

        {progress.eligible && (
          <div className="mt-6 space-y-4">
            <label className="block max-w-sm">
              <span className="text-sm font-semibold text-muted">{t("cert.nameOnCert", "Name on certificate")}</span>
              <input className="input mt-1" value={name ?? profileName} onChange={(e) => setName(e.target.value)} maxLength={60} />
            </label>
            <button onClick={() => issue(p.slug)} className="btn-primary">{t("cert.issue", "Issue certificate")}</button>
          </div>
        )}
        <p className="mt-8 text-xs text-muted">{disclaimer}.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1060px] px-4 py-6 sm:px-6 lg:py-8">
      <style>{PRINT_CSS}</style>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href={`/pathways/${p.slug}`} className="text-sm font-semibold text-muted hover:text-ink">← {p.title}</Link>
          <h1 className="mt-3 text-2xl font-bold tracking-tight">{t("cert.yours", "Your certificate")}</h1>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <label className="block">
            <span className="text-xs font-semibold text-muted">{t("cert.nameShown", "Name shown")}</span>
            <input className="input mt-1 py-2" value={name ?? profileName} onChange={(e) => setName(e.target.value)} maxLength={60} />
          </label>
          <button onClick={() => window.print()} className="btn-primary">
            <Printer className="h-4 w-4" /> {t("cert.print", "Print or save as PDF")}
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <article className="qa-cert relative mx-auto flex aspect-[1.414/1] min-w-[720px] flex-col overflow-hidden rounded-xl bg-white p-[5%] text-[#14161d] shadow-lift" style={{ fontFamily: "Inter, var(--font-sans), system-ui, sans-serif" }}>
          <div className="pointer-events-none absolute inset-[2.2%] rounded-lg border border-[#d6d9e0]" />
          <div className="absolute left-0 top-0 h-full w-[1.2%]" style={{ background: p.color }} />

          <header className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark size={40} />
              <Wordmark className="text-[24px]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7180]">{t("cert.title", "Certificate of completion")}</span>
          </header>

          <div className="relative mt-[6%] flex-1">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6b7180]">{t("cert.certifies", "This certifies that")}</p>
            <p className="mt-3 text-[44px] font-semibold leading-tight tracking-tight">{displayName}</p>
            <p className="mt-4 max-w-[78%] text-[17px] leading-relaxed text-[#3b4150]">
              {t("cert.body.before", "has completed the")} <strong className="font-semibold text-[#14161d]">{p.title}</strong>{" "}
              {t("cert.body.after", "pathway on Quest Academy, including {n} practical assignments self-assessed against published rubrics.", { n: p.modules.length })}
            </p>
            <div className="mt-6 flex max-w-[86%] flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-[#3b4150]">
              {p.skills.map((k) => (
                <span key={k} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                  {k}
                </span>
              ))}
            </div>
          </div>

          <footer className="relative mt-6 grid grid-cols-3 items-end gap-6 border-t border-[#e3e5ea] pt-5 text-[13px]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b7180]">{t("cert.issued", "Issued")}</div>
              <div className="mt-1 font-semibold">{formatDate(cert.issuedAt, { day: "numeric", month: "long", year: "numeric" })}</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b7180]">{t("cert.credentialId", "Credential ID")}</div>
              <div className="mt-1 font-mono font-semibold">{cert.code}</div>
            </div>
            <div className="text-right text-[11px] leading-snug text-[#6b7180]">{disclaimer}.</div>
          </footer>
        </article>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        {t("cert.printTip", "Tip: in the print dialog choose “Save as PDF” and landscape.")} {disclaimer}.
      </p>
    </div>
  );
}

function Req({ done, label, detail, href }: { done: boolean; label: string; detail: string; href: string }) {
  return (
    <Link href={href} className="flex items-center gap-4 p-4 hover:bg-surface-2">
      {done ? <Check className="h-5 w-5 shrink-0 text-good" strokeWidth={3} /> : <Circle className="h-5 w-5 shrink-0 text-line" strokeWidth={2.5} />}
      <span className="min-w-0 flex-1">
        <span className="block font-semibold">{label}</span>
        <span className="block text-sm text-muted">{detail}</span>
      </span>
    </Link>
  );
}
