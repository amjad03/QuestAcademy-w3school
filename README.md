# Quest Academy

**The free, fun and effective way to learn anything.** Quest Academy combines Khan Academy-style course structure (videos, articles, practice, unit tests, mastery) with Duolingo-style motivation (a lesson path, XP, streaks, quests, leagues). It covers everything from first letters to NEET/JEE, coding and university courses.

## What's inside

**Learning**
- **Course → Unit → Lesson.** Each lesson has a **video** from the Quest Academy YouTube channel, an **article**, a **practice** set, **flashcards**, and a **coding challenge** where relevant.
- **Assessments:** a unit quiz (first half of the unit), a unit test (whole unit) and a course challenge.
- **Mastery levels:** each lesson is a skill (Attempted → Familiar → Proficient → Mastered), with mastery points per unit and per course, and Khan-style skill squares.
- **Learn path:** the course as a winding path of nodes, with unit banners, a guidebook link per unit, treasure chests and unit-test trophies.
- **Session player:** full-screen practice with a check/continue footer, explanations, missed questions repeated at the end, combo streaks and a results screen showing XP, accuracy, time and skill changes.
- **Practice hub:** spaced-repetition review of flashcards from completed lessons, plus your weakest skills.
- **Exam prep (NEET/JEE):** computer-based mock tests in the real exam format, adaptive chapter drills, a formula vault and score analytics.
- **Code lab:** live editors for HTML/CSS/JS, Python (Pyodide) and SQL (SQLite), with auto-graded challenges.
- **Early learning:** story-mode lessons read aloud, plus learning games.

**Motivation:** XP and levels, daily streaks with freezes, daily goal, daily quests, weekly leagues, achievements, coins and a shop.

**Content:** 29 courses, 321 lessons, ~1,500 practice questions, 305 NEET/JEE questions, 283 formulas, 50 coding challenges and 20 interactive simulations.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Without any configuration the app runs in guest mode, saving progress in the browser.

## Videos from the YouTube channel

Lesson videos come from the Quest Academy YouTube channel and are matched to lessons automatically.

1. Create a YouTube Data API key: Google Cloud Console → enable **YouTube Data API v3** → Credentials → API key.
2. Run:
   ```bash
   YOUTUBE_API_KEY=your-key YOUTUBE_CHANNEL=@YourChannelHandle npm run sync-videos
   ```
   The script:
   - downloads every upload, with titles, descriptions, durations and playlists, into `src/content/videos/channel.json`;
   - matches videos to lessons by title, using topic, subject and playlist as context;
   - writes the matches to `src/content/videos/matches.json`.
3. Open **/studio/videos** to review the matches. Each lesson shows its matched video, a confidence score and other candidates as copy-ready lines.
4. Pin, fix or hide any lesson's video in `src/content/videos/overrides.ts`:
   ```ts
   export const videoOverrides = {
     "physics-school/motion/projectile-motion": "dQw4w9WgXcQ", // use this video
     "english/grammar/parts-of-speech": null,                   // never show a video
   };
   ```
5. Commit the updated JSON and overrides files, then rebuild.

To re-match without calling the API again (for example after editing lessons), run `npm run sync-videos -- --offline`.

How videos behave in the app:
- They play in a privacy-enhanced embed (youtube-nocookie).
- A video ticks off automatically when it ends or the learner passes 90%.
- Lessons without a video show the article, practice and other items only.

## Accounts, sync and live leagues (Supabase)

1. Create a project at [supabase.com](https://supabase.com).
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Optional: enable the Google provider in Supabase Auth.

Guest progress is merged into the account on first sign-in.

## Design system

The design is flat, bold and friendly:
- **Typeface:** one rounded face (Nunito).
- **Colour:** solid colours from a single palette (`src/app/globals.css`).
- **Shape:** 2px borders and chunky buttons with a darker bottom edge (`.btn-primary`, `.btn-good`, `.btn-gold`, `.btn-ghost`).
- **Mascot:** Questy the owl (`src/components/brand/Mascot.tsx`) is a code-drawn SVG with poses: idle, wave, cheer, think, sad and read.
- **Course icons:** each course gets a solid icon tile from a curated palette (`src/components/brand/CourseIcon.tsx`).

## Project structure

```
src/app/
  (marketing)/        landing page
  (app)/              sidebar shell: learn, courses, course/[subject]/[unit]/[lesson], practice,
                      exam, code/playground, leaderboard, quests, shop, profile, settings, studio/videos
  (focus)/            full-screen: session/[...key], onboarding, auth, exam mock tests, kids games
src/content/          lessons (subjects/*), exam bank, course structure (course.ts), videos/
src/components/       brand, shell, learn (path, blocks, questions), lesson, session, course, exam, code, widgets…
src/lib/              store (progress), mastery, gamification, progress, video matcher, runners, supabase
scripts/sync-videos.ts
```

## Adding content

Lessons are TypeScript objects typed by `src/content/types.ts`. Add a file under `src/content/subjects/<category>/` and register it in `src/content/index.ts`. It automatically gets:
- a course page and unit pages
- path nodes
- practice sessions, unit quizzes and tests, and a course challenge
- search entries
- video matching
- mastery tracking
