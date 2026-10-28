# Board lessons (AI-narrated chapter videos)

A **Board lesson** is a 4–7 minute visual lesson for one chapter. It plays like a video, but nothing is
recorded: the smartboard draws timed board ops (handwriting, formulas, diagrams, graphs, highlights) while
the tutor voice speaks the narration in the browser. That voice is Kokoro, with the device voice as a
fallback. The student gets play/pause, step-by-step seeking, speed, captions, a captions-only mode, a
chapter list, replay and "Ask the tutor about this step".

Board lessons show on the chapter page (`/class/<subject>/<chapter>`). They also show in every lesson of
that chapter: under the Drive/YouTube video when the lesson has one, otherwise at the top of the article.

## Files

| What | Where |
| --- | --- |
| Scripts, one per chapter (static, fetched only when the player opens) | `public/board-lessons/<id>.json` |
| Manifest (small, bundled): id, title, minutes, lesson ids | `src/content/board-lessons/manifest.json` (written by the generator) |
| Script format and validation | `src/components/board/script.ts` |
| Board op schema | `src/components/board/ops.ts` |
| Player and entry card | `src/components/board/BoardLessonPlayer.tsx`, `BoardLessonCard.tsx` |
| Generator | `scripts/gen-board-lessons.ts` |

The id is `<class>-<subject>-<chapter title slug>`, for example `11-physics-units-and-measurements`.

## Script format

```json
{
  "v": 1, "id": "11-maths-sets", "title": "Sets", "subject": "maths", "grade": "11", "chapter": "Sets", "lang": "en",
  "steps": [
    { "mark": "What is a set?", "say": "Spoken narration, 2–5 sentences.",
      "ops": [ { "op": "text", "id": "t1", "text": "Sets", "size": 44, "color": "blue" },
               { "op": "math", "id": "m1", "tex": "a \\in A" },
               { "op": "highlight", "target": "m1" } ] }
  ]
}
```

- `say` is spoken aloud and shown as captions. Write it as speech, with no LaTeX.
- `ops` are drawn in order and spread across the narration of that step. Use `{"op":"page"}` to start a new page.
- `mark` starts a new entry in the player's chapter list.
- `highlight`, `underline` and `laser` must target an id that was drawn earlier on the same page.

## Generating the rest

The launch set has 6 hand-written scripts:

- Class 11: Units and Measurements, Some Basic Concepts of Chemistry, Sets and The Living World.
- Class 12: Electric Charges and Fields, and Matrices.

To generate scripts for the other Class 11–12 Physics, Chemistry, Maths and Biology chapters:

```bash
export ANTHROPIC_API_KEY=sk-ant-...      # the same key the tutor uses
# try one chapter first and watch it in the app
npx tsx --tsconfig scripts/tsconfig.json scripts/gen-board-lessons.ts --only 11-physics-motion-in-a-straight-line
# then everything (resumable: existing files are skipped; Ctrl-C and re-run any time)
npx tsx --tsconfig scripts/tsconfig.json scripts/gen-board-lessons.ts
```

Options:

- `--grade 11|12` and `--subject physics|chemistry|maths|biology` limit which chapters are generated.
- `--limit 5` stops after 5 new scripts.
- `--force` regenerates scripts that already exist.
- `--model <id>` overrides the model. By default the generator uses the tutor route's model (`TUTOR_MODEL` in `src/lib/tutor/guard.ts`).
- `--check` validates every script and rebuilds the manifest without making any API call. Run it after you edit a JSON by hand.

The generator works through each chapter like this:

1. It sends the chapter's lesson content from the app to the model, together with the board op schema.
2. It validates every op against the board schema and checks that the narration is 600–1100 words.
3. If the output has problems, it sends them back to the model, up to 3 attempts.
4. It writes `public/board-lessons/<id>.json` and rebuilds the manifest after every new file.

Failed chapters are listed at the end. Re-run the generator to retry them.

**Review before you publish.** Watch a few generated lessons in the app at 1.5× to check the content.
Fix any mistakes in the JSON, then run `--check`. Commit `public/board-lessons/*.json` and the manifest.

## Voice notes

- The narration runs through `speaker()` in `src/lib/tutor/speech.ts`. The first time, Kokoro (~92 MB)
  downloads in the background, and the device voice speaks until it is ready. Data Saver, low-memory phones
  and browsers without WebAssembly always use the device voice.
- The speed control changes the drawing pace, the pauses and the device voice rate. Kokoro keeps its natural pace.
- Captions-only mode (the speaker button) needs no audio and times each step by word count.
