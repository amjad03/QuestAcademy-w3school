"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";
import { PageColumns } from "@/components/shell/AppShell";
import { EXPLAINERS, explainerById } from "./index";
import { ExplainerView } from "./ExplainerView";
import { useT } from "@/i18n";
import { isRelevant, useExplainerContext } from "./relevance";
import { localize, useContentDict } from "@/i18n/content";

/** /explain — every visual explainer, filterable by area. */
export function ExplainGallery() {
  const t = useT();
  const dict = useContentDict("explainers");
  const ctx = useExplainerContext();
  // Learners with a class see the explainers pitched at their age and subjects first; "All" shows everything.
  const [scope, setScope] = useState<"mine" | "all">("mine");
  const mine = useMemo(() => (ctx ? EXPLAINERS.filter((e) => isRelevant(e, ctx)) : null), [ctx]);
  const forMe = Boolean(mine && mine.length && scope === "mine");
  const base = forMe ? mine! : EXPLAINERS;
  const areas = useMemo(() => ["All", ...Array.from(new Set(base.map((e) => e.area)))], [base]);
  const [area, setArea] = useState("All");
  // Filter on the English area; show titles, taglines and areas in the learner's language.
  const list = base.filter((e) => area === "All" || e.area === area).map((e) => localize(e, dict));
  return (
    <PageColumns>
      <p className="eyebrow">{t("explain.seeIt", "See it")}</p>
      <h1 className="mt-1 text-3xl font-black">{t("explain.gallery.title", "Big ideas, made visible")}</h1>
      <p className="mt-2 max-w-2xl font-semibold text-muted">{t("explain.gallery.intro", "Each idea is explained four ways: an animation to watch, something to try with your hands, a short comic, and an everyday comparison.")}</p>
      {mine && mine.length > 0 && (
        <div role="tablist" aria-label={t("explain.gallery.scope", "Which explainers")} className="mt-6 inline-flex rounded-xl border-2 border-line bg-surface p-1">
          {(["mine", "all"] as const).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={scope === k}
              onClick={() => {
                setScope(k);
                setArea("All");
              }}
              className={clsx("rounded-lg px-3.5 py-1.5 text-sm font-extrabold transition", scope === k ? "bg-accent text-white" : "text-muted hover:text-ink")}
            >
              {k === "mine" ? t("explain.gallery.mine", "For your class · {n}", { n: mine.length }) : t("explain.gallery.everything", "All · {n}", { n: EXPLAINERS.length })}
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {areas.length > 2 && areas.map((a) => (
          <button key={a} onClick={() => setArea(a)} className={clsx("rounded-xl border-2 px-3 py-1.5 text-sm font-extrabold", area === a ? "border-accent bg-accent-soft text-accent" : "border-line text-muted hover:bg-surface-2")}>
            {a === "All" ? t("explain.gallery.all", "All") : (dict?.[a] ?? a)}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {list.map((e) => (
          <li key={e.id}>
            <Link href={`/explain/${e.id}`} className="tile flex h-full items-start gap-4 p-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl" style={{ background: `color-mix(in srgb, ${e.color} 18%, rgb(var(--surface)))` }} aria-hidden>
                {e.icon}
              </span>
              <span className="min-w-0">
                <span className="eyebrow flex items-center gap-1.5 !text-muted">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: e.color }} aria-hidden />
                  {t("explain.gallery.ages", "{area} · ages {ages}", { area: e.area, ages: e.ages })}
                </span>
                <span className="mt-0.5 block text-lg font-black leading-snug">{e.title}</span>
                <span className="mt-1 block text-sm font-semibold text-muted">{e.tagline}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {!list.length && <p className="mt-8 font-semibold text-muted">{t("explain.gallery.empty", "Explainers are on their way.")}</p>}
    </PageColumns>
  );
}

export function ExplainOne({ id }: { id: string }) {
  const t = useT();
  const e = explainerById(id);
  return (
    <PageColumns>
      <Link href="/explain" className="mb-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-muted hover:text-accent">
        <ArrowLeft className="h-4 w-4" /> {t("explain.gallery.back", "All explainers")}
      </Link>
      {e ? <ExplainerView explainer={e} /> : <p className="font-semibold text-muted">{t("explain.gallery.missing", "That explainer does not exist.")}</p>}
    </PageColumns>
  );
}
