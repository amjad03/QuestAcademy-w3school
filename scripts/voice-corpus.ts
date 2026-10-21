/**
 * Every sentence Questy says in Explore mode, so each can ship as a
 * pre-rendered clip. Used by scripts/generate-voice.ts.
 */
import { subjectsInWorld } from "../src/content";
import type { Block, Question } from "../src/content/types";
import { plain } from "../src/components/Md";
import { blockSpeech } from "../src/components/learn/useNarration";
import { ALL_FIXED_LINES, GAME_LINES, LETTER_WORDS, SHAPE_NAMES } from "../src/content/voice-lines";
import { WORDS, phonicsLine } from "../src/components/widgets/phonics";
import { NUMBER_WORDS } from "../src/components/widgets/count-objects";

function questions(blocks: Block[], quiz: Question[] = []) {
  const qs = [...quiz];
  for (const b of blocks) if (b.type === "checkpoint") qs.push(...b.questions);
  return qs.map((q) => plain(q.q));
}

export function voiceCorpus(): string[] {
  const out = new Set<string>(ALL_FIXED_LINES);
  const add = (t: string | null | undefined) => {
    const s = t?.replace(/\s+/g, " ").trim();
    // Emoji-only lines (picture answers) aren't spoken.
    if (s && /[A-Za-z0-9]/.test(s)) out.add(s);
  };

  for (const subject of subjectsInWorld("kids")) {
    for (const topic of subject.topics) {
      for (const lesson of topic.lessons) {
        add(lesson.title);
        lesson.blocks.forEach((b) => add(blockSpeech(b)));
        questions(lesson.blocks, lesson.quiz).forEach(add);
        lesson.flashcards?.forEach((c) => {
          add(plain(c.front));
          add(plain(c.back));
        });
      }
    }
  }

  for (let n = 1; n <= 6; n++) add(GAME_LINES.balloons(n));
  for (const [l, w] of Object.entries(LETTER_WORDS)) add(GAME_LINES.letter(l, w));
  for (const s of SHAPE_NAMES) add(GAME_LINES.shape(s));
  for (let a = 1; a <= 9; a++)
    for (let b = 1; b <= 9; b++) {
      add(GAME_LINES.sum(a, "+", b));
      if (a >= b) add(GAME_LINES.sum(a, "−", b));
    }
  for (const [l, [w]] of Object.entries(WORDS)) add(phonicsLine(l, w));
  for (let n = 1; n <= 20; n++) {
    add(NUMBER_WORDS[n]);
    add(`${NUMBER_WORDS[n]}! There are ${n}!`);
  }
  return [...out];
}
