# Previous-year questions: "PYQ pattern" practice and importing real papers

## What students see

The chapter drill (`/exam/practice`) has two modes:

- **Adaptive drill.** This is the existing mode: questions get harder as the student answers correctly.
- **Previous-year pattern** (`?mode=pyq&exam=JEE|JEE_ADV|NEET|KCET|COMEDK`). Questions are tagged for that
  exam and served at the exam's paper level. The exam's own marking is shown in the result. Genuine
  imported past-paper questions come first, newest year first. When the chapter has any, year chips appear.

Every question in the bank today is an **original** question written in the style of past papers. These
are labelled **"PYQ pattern"**, and their tooltip says they are not from a specific year's paper. Only
questions imported with the script below carry a year label such as "NEET 2024" or "JEE Main 2024 · Shift 1".
Never add a year to the hand-written banks.

After answering, any question can be **explained by voice**. The tutor writes a step-by-step spoken
explanation from the question's stored solution. Students can choose English, Hindi, Kannada or Hinglish.
While the voice speaks, the board shows the working. The explanation is cached in the browser's
localStorage (`qa-voice-explain:v1:<question id>:<lang>`). Offline, or when the tutor is unavailable,
the stored solution is read aloud instead.

## Importing genuine past papers

Only import papers you have the right to use, such as official papers published by NTA, KEA or COMEDK, or
licensed material. Every row needs a `source`.

```bash
npx tsx --tsconfig scripts/tsconfig.json scripts/import-pyq.ts papers/neet-2024.csv --dry   # check first
npx tsx --tsconfig scripts/tsconfig.json scripts/import-pyq.ts papers/neet-2024.csv --source "NTA official paper, NEET (UG) 2024"
```

The script merges the rows into `src/content/exam/pyq/imported.json`. Commit that file.

Re-importing the same question (same exam, year, shift and text) updates the existing row instead of
adding a duplicate. A row that fails validation is skipped and reported, and the command exits with code 1.

### Columns (CSV header or JSON keys)

| Column | Required | Notes |
| --- | --- | --- |
| `exam` | yes | `JEE Main`, `JEE Advanced`, `NEET`, `KCET` or `COMEDK` (also accepts `JEE`, `JEE_ADV`, `NEET UG`) |
| `year` | yes | e.g. `2024` |
| `shift` | no | e.g. `Shift 1`, `27 Jan Shift 2`, `Paper 2` |
| `subject` | yes | `physics`, `chemistry`, `maths` (or `mathematics`) or `biology` (also `botany` / `zoology`) |
| `chapter` | yes | Use the NCERT chapter title the bank uses, e.g. `Units and Measurements` or `The Living World`. An unknown title gets a warning and its own chapter chip. |
| `question` | yes | Markdown with `$…$` LaTeX, like the rest of the bank |
| `options` | for MCQs | Separate options with `\|` in CSV, or use a JSON array. Leave it empty for numeric-answer questions. |
| `answer` | yes | An option letter (`A`–`D`) or number (`1`–`4`). Use several letters (`A,C`) for multi-correct questions. Give a number for numeric questions. |
| `solution` | recommended | Shown after answering, and used for "Explain by voice" |
| `source` | yes* | Where the paper came from. *You can give it once with `--source` instead. |
| `grade` | no | `11` or `12`. If left out, it is inferred from the chapter. |
| `difficulty` | no | `1`, `2` or `3`. Defaults to `3` for JEE Advanced and `2` otherwise. |
| `kind` | no | `mcq`, `multi` or `numeric`. Usually inferred. |

CSV example:

```csv
exam,year,shift,subject,chapter,question,options,answer,solution,source
NEET,2024,,biology,The Living World,"Which is written correctly?","Mangifera Indica | mangifera indica | *Mangifera indica* | Mangifera indica linn",C,"Genus capital, species small, italics.","NTA official paper"
```

JSON example: an array of objects with the same keys. `options` can be an array.

Imported questions take part in the chapter drill, the mock tests and the Previous-year pattern mode, and
they show their exam and year everywhere they appear in that mode. The source is shown as a tooltip.
