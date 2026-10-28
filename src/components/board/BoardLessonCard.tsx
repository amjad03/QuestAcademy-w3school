"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Clapperboard, Loader2, Play } from "lucide-react";
import { useT } from "@/i18n";
import { boardLessonUrl, type BoardLessonMeta } from "@/content/board-lessons";
import { checkScript, type BoardScript } from "./script";

const BoardLessonPlayer = dynamic(() => import("./BoardLessonPlayer").then((m) => m.BoardLessonPlayer), {
  ssr: false,
  loading: () => <div className="aspect-[5/3] w-full animate-pulse rounded-2xl bg-surface-2" />,
});

/**
 * "Board lesson" entry for a chapter or lesson page. The script JSON is fetched only when the
 * student presses Watch (it is not in any page bundle).
 */
export function BoardLessonCard({ meta, className }: { meta: BoardLessonMeta; className?: string }) {
  const t = useT();
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [script, setScript] = useState<BoardScript | null>(null);

  const open = async () => {
    setState("loading");
    try {
      const res = await fetch(boardLessonUrl(meta.id));
      if (!res.ok) throw new Error(String(res.status));
      const s = checkScript(await res.json()).script;
      if (!s) throw new Error("invalid");
      setScript(s);
      setState("idle");
    } catch {
      setState("error");
    }
  };

  if (script)
    return (
      <section className={className} aria-label={t("board.lesson.title", "Board lesson")} data-testid="board-lesson">
        <h2 className="mb-2 flex items-center gap-2 text-lg font-bold">
          <Clapperboard className="h-5 w-5 text-accent" aria-hidden /> {t("board.lesson.title", "Board lesson")}: {meta.title}
        </h2>
        <BoardLessonPlayer script={script} autoPlay />
      </section>
    );

  return (
    <section className={className} data-testid="board-lesson">
      <button onClick={open} disabled={state === "loading"} className="card flex w-full items-center gap-4 p-4 text-left transition hover:border-accent">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-white">{state === "loading" ? <Loader2 className="h-6 w-6 animate-spin" /> : <Play className="ml-0.5 h-6 w-6" fill="currentColor" />}</span>
        <span className="min-w-0 flex-1">
          <span className="eyebrow flex items-center gap-1.5">
            <Clapperboard className="h-3.5 w-3.5" aria-hidden /> {t("board.lesson.title", "Board lesson")} · {t("board.lesson.minutes", "{n} min", { n: meta.minutes })}
          </span>
          <span className="mt-0.5 block font-extrabold leading-snug">{meta.title}</span>
          <span className="mt-0.5 block text-sm text-muted">
            {state === "error" ? t("board.lesson.error", "Could not load the board lesson. Check your connection and tap to try again.") : t("board.lesson.hint", "Watch the tutor teach the whole chapter on the board, step by step, with voice and captions.")}
          </span>
        </span>
      </button>
    </section>
  );
}
