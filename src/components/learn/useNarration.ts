"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Block } from "@/content/types";
import { plain } from "@/components/Md";

/** Spoken text for a block, or null if it shouldn't be narrated. */
export function blockSpeech(b: Block): string | null {
  switch (b.type) {
    case "heading":
      return b.text;
    case "text":
      return plain(b.md);
    case "callout":
      return `${b.title ?? ""}. ${plain(b.md)}`;
    case "illustration":
      return plain(b.caption);
    case "list":
    case "keypoints":
      return b.items.map(plain).join(". ");
    case "formula":
      return b.caption ? plain(b.caption) : null;
    default:
      return null;
  }
}

/**
 * Reads blocks aloud one after another, exposing which block is being read so the
 * UI can highlight and scroll to it.
 */
export function useNarration(blocks: Block[], opts: { rate?: number; pitch?: number } = {}) {
  const [current, setCurrent] = useState<number | null>(null);
  const [supported, setSupported] = useState(false);
  const stopped = useRef(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      stopped.current = true;
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const speakFrom = useCallback(
    (i: number) => {
      if (stopped.current) return;
      let k = i;
      while (k < blocks.length && !blockSpeech(blocks[k])) k++;
      if (k >= blocks.length) {
        stopped.current = true;
        setCurrent(null);
        return;
      }
      setCurrent(k);
      const u = new SpeechSynthesisUtterance(blockSpeech(blocks[k])!);
      u.rate = opts.rate ?? 1;
      u.pitch = opts.pitch ?? 1;
      u.onend = () => speakFrom(k + 1);
      window.speechSynthesis.speak(u);
    },
    [blocks, opts.rate, opts.pitch],
  );

  const play = useCallback(
    (from = 0) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      stopped.current = false;
      speakFrom(from);
    },
    [supported, speakFrom],
  );

  const stop = useCallback(() => {
    stopped.current = true;
    window.speechSynthesis?.cancel();
    setCurrent(null);
  }, []);

  return { current, playing: current !== null, supported, play, stop };
}
