import { flatLessons, subjectsInWorld } from "@/content";
import type { WidgetId, WorldId } from "@/content/types";

export const WIDGET_META: Record<WidgetId, { name: string; emoji: string }> = {
  "count-objects": { name: "Counting garden", emoji: "🍎" },
  phonics: { name: "Phonics board", emoji: "🔤" },
  clock: { name: "Tell the time", emoji: "🕒" },
  "color-mix": { name: "Colour mixer", emoji: "🎨" },
  fraction: { name: "Fraction pizza", emoji: "🍕" },
  "number-line": { name: "Number line hops", emoji: "🐸" },
  "function-plot": { name: "Graph plotter", emoji: "📈" },
  triangle: { name: "Triangle lab", emoji: "📐" },
  projectile: { name: "Projectile launcher", emoji: "🎯" },
  pendulum: { name: "Pendulum lab", emoji: "⏱️" },
  "ohms-law": { name: "Circuit builder", emoji: "🔌" },
  wave: { name: "Wave machine", emoji: "🌊" },
  "periodic-table": { name: "Periodic table", emoji: "⚗️" },
  "cell-explorer": { name: "Cell explorer", emoji: "🦠" },
  binary: { name: "Binary switches", emoji: "💡" },
  sorting: { name: "Sorting visualiser", emoji: "📊" },
  "big-o": { name: "Big-O race", emoji: "🏎️" },
  perceptron: { name: "Neuron playground", emoji: "🧠" },
  "supply-demand": { name: "Market simulator", emoji: "⚖️" },
  "compound-interest": { name: "Money growth", emoji: "💰" },
};

/** One entry per widget used in a world, linking to the first lesson that uses it. */
export function simulationsIn(world: WorldId) {
  const seen = new Map<WidgetId, { widget: WidgetId; name: string; emoji: string; href: string; lesson: string; subject: string }>();
  for (const s of subjectsInWorld(world)) {
    for (const l of flatLessons(s)) {
      for (const b of l.lesson.blocks) {
        if (b.type === "widget" && !seen.has(b.widget)) {
          seen.set(b.widget, { widget: b.widget, ...WIDGET_META[b.widget], href: l.href, lesson: l.lesson.title, subject: s.title });
        }
      }
    }
  }
  return [...seen.values()];
}
