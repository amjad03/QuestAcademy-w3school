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

## Seven experience profiles

Each stage of learning gets its own app. With **Settings → Design → Age designs** (the default), every profile has its own app frame and navigation, home screen, lesson page, practice screen, results screen, typeface, colours and rewards. The profile is picked at onboarding (age for children; college / postgraduate / working for adults) and can be changed any time in **Settings → Experience** (leaving the young-learner profiles needs a grown-up check).

| Profile | Who | Feel |
|---|---|---|
| **01 Sprout** | Pre-primary, ~3–5 | No reading needed: giant picture buttons, everything spoken by Questy, one thing at a time, stars and stickers, grown-up corner behind a check. |
| **02 Explore** | Primary, ~6–10 | Bright storybook world: island map, read-to-me buttons, stickers for trying and improving, star results. No leagues. |
| **03 Adventure** | Middle school, ~11–14 | Mission control: game HUD with ranks, missions, topic maps, experiments, unlockable challenges, opt-in leagues. |
| **04 Focus** | High school, PUC, NEET/JEE, ~15–18 | Exam command centre: syllabus dashboard, exam countdown, focus timer, study-notes lessons, CBT-style practice and scorecards. |
| **05 Mastery** | Undergraduate | Academic workspace: IDE-like frame, lecture-notes lessons, problem sets with judge-style verdicts, grade reports and competencies. |
| **06 Research** | Postgraduate and research | Reading room: serif long-form lessons, margin contents and notes, reading lists, citations, quiet self-checks. No game elements. |
| **07 Professional** | Working adults | Career-learning product: goal dashboard, course-player lessons, knowledge checks with a pass mark, pathways and certificates. No game elements. |

Each profile lives in `src/experiences/<profile>/` (an `Experience` with `Shell`, `Home`, `LessonLayout`, `SessionLayout`, `SessionResults`, plus a `theme.css` scoped to `html[data-skin="modes"][data-mode="<profile>"]`). Shared logic (progress, grading, mastery) stays in shared components; profiles only decide presentation.

**Study planner** (`/plan`): pick a syllabus, pathway or course, a finish date, hours per week and study days. The plan schedules lessons, revision days and mock tests, re-plans automatically as you progress, tells you how many extra hours you need when you fall behind, and exports to your calendar (.ics).

Syllabus chapter lists live in `src/content/syllabus/` and map chapters to existing lessons; chapters without lessons yet are marked “practice only” or “coming soon”. Check them against the current official editions before relying on them for exams.

## Questy's voice (Kokoro)

Explore mode speaks with the Kokoro-82M **af_heart** voice:

1. **Pre-rendered clips** in `public/voice/<key>.mp3`, listed in `public/voice/manifest.json`. Every sentence a young learner hears (story pages, questions, flashcards, game prompts, phonics, counting, Questy's lines) is collected by `scripts/voice-corpus.ts`.
2. **Live fallback:** text without a clip is synthesised in the browser with kokoro-js in a worker (model downloaded once and cached).
3. **Device voice** if neither is available.

After adding or editing kids content, render the new clips:

```bash
npm i --no-save kokoro-js   # one-time
npm run generate-voice      # renders only missing clips; needs ffmpeg
npm run generate-voice -- --prune   # also removes clips no longer used
```

## Ask Questy (AI tutor)

A Socratic tutor powered by Claude Haiku: it answers with hints and guiding questions and doesn't give away the answer to a question the learner hasn't tried yet. It opens from any lesson and from practice; in quizzes and tests it opens only after the learner has answered.

1. Create an API key at https://console.anthropic.com → API Keys.
2. Put it in `.env.local` (and in your host's environment variables): `ANTHROPIC_API_KEY=sk-ant-...`
3. Restart the server. Only the server route `/api/tutor` reads the key.

Without a key the rest of the app works normally. Built-in limits: 30 requests per 10 minutes per IP (in memory, per server instance) and at most 20 messages of up to 4,000 characters each. The tutor is never shown to Sprout learners (ages 3–5), and **Settings → Ask Questy** turns it off on a device. Set a monthly spend limit in the Anthropic Console.

## Indian languages

Quest Academy runs in English, हिन्दी, ಕನ್ನಡ, தமிழ், తెలుగు, मराठी and বাংলা (**Settings → Language**). All translations are AI-made and marked "being reviewed by teachers" until a human pass is done.

- **Interface:** components call `t("key", "English")` (`src/i18n`). `npm run i18n:extract` writes `src/i18n/catalog.json` and lists missing keys per language; translations live in `src/i18n/messages/<locale>.ts`.
- **Lessons:** `public/i18n/<locale>/<course>.json` maps each English string of a course (titles, paragraphs, questions, options, flashcards) to its translation. Lessons, practice and unit menus swap strings at render time, maths and code stay untouched, and learners can tap **Show original**. `npm run i18n:content` shows coverage per course; `-- --missing <course> <locale>` lists what's left and `-- --check <course> <locale>` validates a file. Edit English content as usual: changed strings simply fall back to English until re-translated.
- **Voice:** Indian-script text is read with the device's voice for that language; Questy's Kokoro voice is English-only.

## Design rollback

**Settings → Design** has three choices: **Age designs** (default, one design per profile, above), **Classic** (the original Quest look for everyone — the rollback) and **Studio** (an editorial variant of Classic: hairline borders, indigo and teal, Inter). The choice is a `data-skin` attribute on `<html>`; switching is instant and never touches progress.

## Visual explainers

About 30 core concepts are explained four ways — an animated step-by-step scene narrated by Questy, a hands-on activity, a comic strip and an everyday analogy — pitched so a young child can follow. They appear at the top of the matching lessons and in the gallery at `/explain`. Each lives in `src/explainers/<area>/` and follows the `Explainer` type in `src/explainers/types.ts`.

## Platform layer

Beyond lessons, the platform has the tools a one-stop learning product needs:

- **Library** (`/library`): browse by class (pre-primary to lifelong), by board/exam, or by goal.
- **Parent dashboard** (`/parent`): grown-up gated weekly summary, progress by subject, stickers, suggested next steps, parent controls and a printable weekly report.
- **Insights** (`/insights`): 12-week activity heatmap, accuracy and mastery by subject, study patterns, strongest/weakest skills, milestones.
- **Worksheets** (`/worksheets`): printable question sets with answer keys for every unit, for teachers and tutors.
- **Notebook** (`/notebook`): notes, bookmarks and a doubts list attached to lessons, exportable as Markdown.
- **Competitions** (`/competitions`): a hub for Olympiads, NEET/JEE, CUET, KCET, BITSAT, NDA, CLAT, GATE, CAT, UPSC and scholarships, with preparation plans linking to courses.
- **Public site**: landing page, About, For schools, Privacy and Terms, plus `sitemap.xml` and `robots.txt`.

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
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor (it is safe to run again after updates).
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY`.
4. In Supabase → Authentication → URL Configuration, set **Site URL** to your domain and add `https://your-domain.com/**` to **Redirect URLs** (sign-in links and password resets return there).
5. Email + password and email links are on by default. For launch, set up a custom SMTP sender in Authentication → Emails; Supabase's built-in sender is limited to a few emails an hour.

What is stored in the account: progress, mastery, streaks and rewards; notes, bookmarks and doubts; parent controls and the Ask Questy switch. Guest progress is merged in on first sign-in, and later changes sync across devices (on change, when the tab regains focus, and every few minutes). Signing out clears the device, so a shared computer doesn't keep someone's progress. Learners can change their password and delete their account in Settings → Account.

## Deploying to Vercel

1. Import the repository in Vercel (framework: Next.js; build command and output are the defaults).
2. Add the environment variables from `.env.example` under Project → Settings → Environment Variables: the three Supabase keys, `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_SITE_URL`, and optionally the `TUTOR_DAILY_*` limits.
3. Deploy, then add your domain under Project → Settings → Domains and use the same address in `NEXT_PUBLIC_SITE_URL` and in Supabase's Site URL.

Ask Questy usage is limited per learner per day (signed-in learners get more than guests) and capped for the whole site by `TUTOR_DAILY_BUDGET`, so a leaked link can't run up the API bill. Set a monthly spend limit in the Anthropic console as well.

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
src/content/          lessons (subjects/*), exam bank, course structure (course.ts), videos/,
                      syllabus/ (boards), pathways/ (career pathways), resources/ (case studies, readings, competencies),
                      voice-lines.ts
src/components/       brand, shell, learn (path, blocks, questions), lesson, session, course, exam, code, widgets…
src/lib/              store (progress), mastery, gamification, progress, video matcher, runners, supabase
src/lib/modes.ts      experience profiles; planner.ts + plan-sources/ for the study planner; voice.ts for Questy's voice
scripts/sync-videos.ts, scripts/generate-voice.ts, scripts/voice-corpus.ts
```

## Adding content

Lessons are TypeScript objects typed by `src/content/types.ts`. Add a file under `src/content/subjects/<category>/` and register it in `src/content/index.ts`. It automatically gets:
- a course page and unit pages
- path nodes
- practice sessions, unit quizzes and tests, and a course challenge
- search entries
- video matching
- mastery tracking
