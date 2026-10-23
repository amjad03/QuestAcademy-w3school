"use client";

import { ArrowRight, Award, Clock, FileText } from "lucide-react";
import Link from "next/link";
import type { Pathway } from "@/content/pathways";
import { pathwayProgress } from "@/lib/plan-sources/pathway";
import { useHydrated } from "@/components/providers";
import { ProgressBar } from "@/components/ui/Progress";
import { useT } from "@/i18n";
import { usePathwayState } from "./hooks";

export function PathwayCatalog({ pathways, hours }: { pathways: Pathway[]; hours: Record<string, number> }) {
  const t = useT();
  const hydrated = useHydrated();
  const s = usePathwayState();
  const enrolled = hydrated ? pathways.filter((p) => s.pathways.enrolled.includes(p.slug)) : [];
  const rest = pathways.filter((p) => !enrolled.includes(p));

  return (
    <div className="mx-auto max-w-[1060px] px-4 py-6 sm:px-6 lg:py-8">
      <span className="eyebrow">{t("path.catalog.eyebrow", "Pathways")}</span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{t("path.catalog.title", "Learn for a goal")}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {t("path.catalog.subtitle", "Structured routes to a career skill: focused lessons, practical assignments built on real work scenarios, a schedule that fits around your week, and a certificate of completion when you finish.")}
      </p>

      {enrolled.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{t("path.catalog.inProgress", "In progress")}</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {enrolled.map((p) => {
              const pr = pathwayProgress(p, s);
              return (
                <Link key={p.slug} href={`/pathways/${p.slug}`} className="card group block p-5 transition hover:border-ink/20">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold">{p.title}</h3>
                    {pr.certificate && <Award className="h-5 w-5 shrink-0 text-good" />}
                  </div>
                  <ProgressBar value={pr.fraction} height={6} color={p.color} className="mt-4" />
                  <p className="mt-2 text-sm text-muted">
                    {t("path.catalog.progress", "{pct}% · {done}/{total} assignments", { pct: Math.round(pr.fraction * 100), done: pr.assignmentsDone, total: pr.assignmentsTotal })}
                    {pr.certificate ? t("path.catalog.certEarned", " · certificate earned") : ""}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="mt-8">
        {enrolled.length > 0 && <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{t("path.catalog.exploreMore", "Explore more")}</h2>}
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {rest.map((p) => (
            <Link key={p.slug} href={`/pathways/${p.slug}`} className="card group flex flex-col p-6 transition hover:border-ink/20">
              <span className="h-1 w-10 rounded-full" style={{ background: p.color }} />
              <h2 className="mt-4 text-lg font-bold">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{p.goal}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.skills.slice(0, 4).map((k) => (
                  <span key={k} className="chip text-xs">{k}</span>
                ))}
                {p.skills.length > 4 && <span className="chip text-xs">+{p.skills.length - 4}</span>}
              </div>
              <div className="mt-auto flex items-center gap-4 pt-5 text-sm text-muted">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {t("path.catalog.duration", "~{hours} h · {weeks} wks", { hours: hours[p.slug], weeks: p.weeks })}</span>
                <span className="flex items-center gap-1.5"><FileText className="h-4 w-4" /> {t("path.catalog.assignments", "{n} assignments", { n: p.modules.length })}</span>
                <ArrowRight className="ml-auto h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-muted">{t("path.catalog.disclaimer", "Certificates of completion from Quest Academy recognise the work you have done here. They are not accredited qualifications.")}</p>
    </div>
  );
}
