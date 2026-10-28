"use client";

import { explainerById } from "@/explainers";
import { ExplainerView } from "@/explainers/ExplainerView";
import { useT } from "@/i18n";

/** An existing visual explainer embedded in a board panel (loaded on demand). */
export default function BoardExplainer({ id }: { id: string }) {
  const t = useT();
  const e = explainerById(id);
  if (!e) return <p className="p-3 text-sm text-muted">{t("board.noExplainer", "That explainer is not available.")}</p>;
  return <ExplainerView explainer={e} compact />;
}

