# Quest Academy

**Learn anything, any age, your way.** Quest Academy is a gamified, interactive learning platform in the spirit of w3schools, for everyone from pre-primary kids to postgraduates. Each learner group gets its own *world* with a different look, pace, mascot and set of tools.

| World | For | What makes it different |
|---|---|---|
| 🌳 **Wonder Woods** (`/kids`) | Ages 3–10 | Story-card lessons read aloud by Questy the owl 🦉, big tap targets, stickers & stars, 6 learning games |
| 🧭 **Explorer's Atlas** (`/school`) | Grades 6–12 | Maths, physics, chemistry, biology, English, social studies with live simulations and a simulation lab |
| ⚔️ **The Arena** (`/exam`) | NEET / JEE | Dark focus mode, CBT mock-test simulator, adaptive chapter drills, formula vault, percentile/rank estimate, exam countdown |
| ⌨️ **Code Lab** (`/code`) | Coders | HTML, CSS, JS, Python, SQL with a *Try it yourself* editor in every lesson, auto-graded challenges and a full playground |
| 🏛️ **The Campus** (`/campus`) | UG / PG / professionals | CS (DSA), machine learning, electrical engineering, anatomy, finance, economics, psychology, UX design |

## Content

- **29 subjects, 321 lessons**, each with flashcards, an end-of-lesson quiz and inline checkpoints
- **~1,270 lesson quiz questions** in 6 types: MCQ, multi-select, true/false, numeric, fill-in, ordering
- **305 NEET/JEE exam questions** with step-by-step solutions, plus **283 formulas** across 37 formula sheets
- **50 auto-graded code challenges** and **20 interactive simulations**: projectile, pendulum, circuits, waves, periodic table, cell explorer, perceptron, sorting, Big-O, supply & demand, compound interest, fractions, clock, phonics and more

## Learn your way

Every lesson can be **read**, **played with** (simulations), **flipped** (flashcards), **quizzed**, **listened to** (text-to-speech narration that highlights each block as it reads) or **built** (live code). The learning style chosen during onboarding sets the default mode.

## Gamification

XP and levels, daily streaks with streak freezes, a daily XP goal, 3 daily quests, weekly leagues (Bronze → Diamond), 20 badges, coins and a shop (avatars, frames, freezes), spaced-repetition review (SM-2), an activity heatmap, and level-up/badge celebrations.

## Tech

- Next.js 15 (App Router, statically generated) · React 19 · TypeScript · Tailwind CSS · Framer Motion
- CodeMirror 6 editors. JavaScript/HTML/CSS run in a sandboxed iframe, Python runs in **Pyodide** in a Web Worker (loaded from the jsDelivr CDN on first run), and SQL runs in **SQLite (sql.js)**, served from `public/vendor`
- KaTeX for maths
- State: Zustand, persisted to `localStorage`, with optional **Supabase** auth and cloud sync

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Without any configuration the app runs in **guest mode**: all progress is saved in the browser and the leaderboard is a practice league with simulated rivals.

### Enable accounts, cloud sync and live leagues (Supabase)

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL editor**, paste in [`supabase/schema.sql`](supabase/schema.sql) and run it. It creates the `profiles` and `learner_state` tables with row-level security.
3. Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project Settings → API).
4. Optional: enable the Google provider under **Authentication → Providers**, and add your site URL to the redirect URLs.

Learners can then sign in with email/password, a magic link or Google. Guest progress is merged into the account on first sign-in.

## Project structure

```
src/
  app/                 routes (landing, onboarding, dashboard, worlds, learn, exam, code, review, leaderboard, profile, auth)
  components/
    learn/             lesson players (standard + kids story mode), blocks, quiz, flashcards, narration
    code/              editor, runners, Try-it, challenges, playground
    exam/              CBT simulator, scorecard, arena hub, chapter drill, formula vault
    widgets/           20 interactive simulations
    kids/              Wonder Woods games
    dashboard/ subject/ world/ review/ leaderboard/ profile/ shell/ landing/
  content/
    types.ts           content model (Subject → Topic → Lesson → Block)
    subjects/<world>/  lesson content
    exam/              question bank + formula sheets
  lib/                 store (progress & gamification), gamification rules, runners, exam logic, supabase, sounds
supabase/schema.sql
```

## Adding content

Lessons are plain TypeScript objects typed by `src/content/types.ts`. To add a subject, create a file under `src/content/subjects/<world>/` and register it in `src/content/index.ts`. It then gets static pages, a quest map, search, flashcards in the review deck, and progress tracking automatically.
