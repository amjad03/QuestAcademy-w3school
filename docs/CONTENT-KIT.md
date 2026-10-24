# Chapter kit (lesson writing standard)

Every school chapter (LKG to Class 10) ships as a **full kit**: a simple lesson, the
common mistake, worked examples, one guided activity, practice with hints, and flashcards.
The data shape is in `src/content/types.ts` (`Topic`, `Lesson`, `Block`, `Activity`,
`Question`). `src/content/subjects/extra/phy-icse10.ts` ("Machines") is the reference.

## One lesson

Order the blocks roughly like this:

1. **Hook** (`illustration` or a short `text`): a real situation the learner knows.
2. **The idea in plain words** (`text`, 2–4 short paragraphs). One new term at a time,
   said in everyday words first, then the exact term in **bold**.
3. **Worked example** (`example`): `problem`, 2–5 `steps`, `answer`. Every chapter has at
   least one. In maths and science the steps show the working; in social science and
   languages they show the reasoning (how to read a source, how to change the voice of a
   sentence, how to plan a letter).
4. **Common mistake** (`mistake`): `wrong` is the idea or step learners really get wrong
   (stated plainly, as they would say it), `right` is the correct version, `why` explains
   in 1–3 sentences why the wrong idea feels right and why it fails.
5. **Guided activity** (`activity`), one per lesson. Pick the kind that fits:
   - `sort`: 2–3 groups, 4–8 items, each with a `hint` shown after a wrong tap.
   - `order`: 3–6 items, written in the **correct** order (the UI shuffles them).
   - `match`: 3–6 pairs `[left, right]`; right-hand sides must all be different.
   - `reveal`: a question with 2–4 `options`, `answer` (0-based), `trap` = the index of the
     common wrong idea, and `explain` that breaks it. Optional `emoji`.
   `prompt` is one short instruction (under ~12 words). `explain` is 1–3 sentences.
6. **Checkpoint** (`checkpoint`, 1–2 questions) in the middle of the reading.
7. `table`, `list`, `formula`, `callout` where they help (callout `exam` for board tips).
8. **Key points** (`keypoints`, 3–5 items) to close.

Then `flashcards` (5–8) and `quiz` (6–8 questions mixing `mcq`, `truefalse`, `fill`,
`numeric`, `order`, `multi`). Every question has `explain`; harder ones set `difficulty`
and `hint`. Wrong `mcq` options should be the mistakes learners really make.

## By age

| Classes | Lesson length | Words | Activity |
|---|---|---|---|
| LKG–UKG | 4–6 blocks, 3–5 min | 3–8 word sentences, read aloud | `reveal` with 2 picture-like options, or `sort` into 2 groups |
| 1–2 | 6–8 blocks | Short sentences, everyday objects | `sort` (2 groups) or `match` (3 pairs) |
| 3–5 | 8–10 blocks | Short, friendly | any, 2–3 options / groups |
| 6–8 | 10–12 blocks | Plain, one new term at a time | any |
| 9–10 | 10–14 blocks, 12–18 min | Exact board terms, each defined | any; `reveal` for a misconception |

## Rules

- **Correct first.** Check every fact, date, number, formula, answer index and spelling.
  Social science dates and names must match the NCERT / board textbooks. When boards
  disagree, follow the textbook and say so.
- **Simple first.** Short sentences. No word a learner of that age would not know
  without explaining it. One idea per paragraph.
- **Break misconceptions.** Each lesson names one real wrong idea (`mistake`) and the
  activity or quiz tests it again.
- **Indian context** where natural (₹, Indian places, names, festivals, ISRO, monsoon),
  balanced across regions.
- **No copyrighted text.** Do not quote textbook passages, poems or stories. Write your own
  examples and sentences. Literature chapters are out of scope for now.
- **Translation-ready.** Keep words in data fields (they are translated into Hindi and
  Kannada). Do not put reader-facing text in ids, slugs or emoji fields.
- **TeX** in TS strings needs escaped backslashes (`"$\\frac{a}{b}$"`).
- **Languages (Hindi, Kannada):** explanations in simple English; examples in the script
  (Devanagari / Kannada) with meaning in brackets. Second/third-language level.

## Files and links

Chapters are written as batch files in `src/content/subjects/extra/` exporting
`course` (course slug), `family` (syllabus family: `mat`, `phy`, `che`, `bio`, `soc`,
`eng`, `hin`, `kan`, `cmp`, `gk`), `topics` and `links` (`{ "Exact syllabus chapter
title": "topic-slug" }`). One lesson set is shared by every board; each board's chapter
list (in `src/content/syllabus/`) links to it by title.

Syntax-check a file with
`npx esbuild src/content/subjects/extra/<file>.ts --log-level=error > /dev/null && echo OK`.
