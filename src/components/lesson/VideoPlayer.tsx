"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

interface YTPlayer {
  destroy: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
}
interface YTNamespace {
  Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
  PlayerState: { ENDED: number; PLAYING: number };
}
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YTNamespace> | null = null;
function loadApi(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  apiPromise ??= new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT!);
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  });
  return apiPromise;
}

/**
 * Privacy-enhanced YouTube embed. Reports "watched" when the video ends or the
 * learner passes 90% — so the lesson item ticks off automatically.
 */
export function VideoPlayer({ id, title, onWatched, watched }: { id: string; title: string; onWatched: () => void; watched: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const watchedRef = useRef(watched);
  watchedRef.current = watched;

  useEffect(() => {
    let player: YTPlayer | null = null;
    let timer: ReturnType<typeof setInterval> | undefined;
    let cancelled = false;
    const fallback = setTimeout(() => !player && setFailed(true), 8000);
    loadApi()
      .then((YT) => {
        if (cancelled || !host.current) return;
        const el = document.createElement("div");
        host.current.innerHTML = "";
        host.current.appendChild(el);
        player = new YT.Player(el, {
          videoId: id,
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
          events: {
            onStateChange: (e: { data: number }) => {
              if (e.data === YT.PlayerState.ENDED && !watchedRef.current) onWatched();
              if (e.data === YT.PlayerState.PLAYING && !timer)
                timer = setInterval(() => {
                  const d = player?.getDuration() ?? 0;
                  if (d && (player?.getCurrentTime() ?? 0) / d > 0.9 && !watchedRef.current) onWatched();
                }, 4000);
            },
          },
        });
      })
      .catch(() => setFailed(true));
    return () => {
      cancelled = true;
      clearTimeout(fallback);
      clearInterval(timer);
      player?.destroy();
    };
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0F1420]">
        {failed ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div ref={host} className="absolute inset-0 [&>iframe]:h-full [&>iframe]:w-full" />
        )}
      </div>
      <div className="mt-3 flex items-center justify-end">
        {watched ? (
          <span className="flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wide text-good">
            <Check className="h-4 w-4" strokeWidth={3.5} /> Watched
          </span>
        ) : (
          <button onClick={onWatched} className="btn-flat">
            Mark as watched
          </button>
        )}
      </div>
    </div>
  );
}
