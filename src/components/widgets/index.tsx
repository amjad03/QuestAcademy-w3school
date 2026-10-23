"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { WidgetId } from "@/content/types";
import { useT } from "@/i18n";

type WidgetComponent = ComponentType<Record<string, unknown>>;

function WidgetSkeleton() {
  const t = useT();
  return (
    <div className="animate-pulse space-y-3" aria-busy="true" aria-label={t("widget.loading", "Loading interactive widget")}>
      <div className="h-5 w-1/3 rounded-full bg-surface-2" />
      <div className="h-48 rounded-3xl bg-surface-2" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-10 rounded-2xl bg-surface-2" />
        <div className="h-10 rounded-2xl bg-surface-2" />
        <div className="h-10 rounded-2xl bg-surface-2" />
      </div>
    </div>
  );
}


const WIDGETS: Record<WidgetId, WidgetComponent> = {
  "count-objects": dynamic(() => import("./count-objects"), { ssr: false, loading: WidgetSkeleton }),
  phonics: dynamic(() => import("./phonics"), { ssr: false, loading: WidgetSkeleton }),
  clock: dynamic(() => import("./clock"), { ssr: false, loading: WidgetSkeleton }),
  "color-mix": dynamic(() => import("./color-mix"), { ssr: false, loading: WidgetSkeleton }),
  fraction: dynamic(() => import("./fraction"), { ssr: false, loading: WidgetSkeleton }),
  "number-line": dynamic(() => import("./number-line"), { ssr: false, loading: WidgetSkeleton }),
  "function-plot": dynamic(() => import("./function-plot"), { ssr: false, loading: WidgetSkeleton }),
  triangle: dynamic(() => import("./triangle"), { ssr: false, loading: WidgetSkeleton }),
  projectile: dynamic(() => import("./projectile"), { ssr: false, loading: WidgetSkeleton }),
  pendulum: dynamic(() => import("./pendulum"), { ssr: false, loading: WidgetSkeleton }),
  "ohms-law": dynamic(() => import("./ohms-law"), { ssr: false, loading: WidgetSkeleton }),
  wave: dynamic(() => import("./wave"), { ssr: false, loading: WidgetSkeleton }),
  "periodic-table": dynamic(() => import("./periodic-table"), { ssr: false, loading: WidgetSkeleton }),
  "cell-explorer": dynamic(() => import("./cell-explorer"), { ssr: false, loading: WidgetSkeleton }),
  binary: dynamic(() => import("./binary"), { ssr: false, loading: WidgetSkeleton }),
  sorting: dynamic(() => import("./sorting"), { ssr: false, loading: WidgetSkeleton }),
  "big-o": dynamic(() => import("./big-o"), { ssr: false, loading: WidgetSkeleton }),
  perceptron: dynamic(() => import("./perceptron"), { ssr: false, loading: WidgetSkeleton }),
  "supply-demand": dynamic(() => import("./supply-demand"), { ssr: false, loading: WidgetSkeleton }),
  "compound-interest": dynamic(() => import("./compound-interest"), { ssr: false, loading: WidgetSkeleton }),
};

export function WidgetRenderer({ widget, props }: { widget: WidgetId; props?: Record<string, unknown> }) {
  const t = useT();
  const Widget = WIDGETS[widget];
  if (!Widget) {
    return <div className="rounded-2xl border border-dashed border-line p-4 text-sm text-muted">{t("widget.unknown", "Unknown widget “{id}”.", { id: String(widget) })}</div>;
  }
  return <Widget {...(props ?? {})} />;
}

export default WidgetRenderer;
