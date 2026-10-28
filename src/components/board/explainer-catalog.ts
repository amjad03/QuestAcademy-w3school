import { EXPLAINERS } from "@/explainers";

/** Explainers that share words with a topic (best first): the tutor may embed these on the board. */
export function explainersFor(topic: string, max = 10): { id: string; title: string }[] {
  const words = new Set(topic.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2));
  return EXPLAINERS.map((e) => {
    const hay = `${e.id} ${e.title} ${e.tagline} ${e.area}`.toLowerCase();
    let score = 0;
    for (const w of words) if (hay.includes(w)) score++;
    return { id: e.id, title: e.title, score };
  })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map(({ id, title }) => ({ id, title }));
}
