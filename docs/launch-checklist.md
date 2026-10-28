# Launch checklist: school demo (about 500 students signing up at once)

Check these before the demo. Items marked **must** decide whether students can sign up at all.

## 1. Supabase → Authentication

### Email confirmation (must)

Supabase's built-in email service sends only a few emails per hour for the whole project (the exact limit is shown under
**Authentication → Rate Limits**). With confirmation on, almost all of 500 students would never get their email, and the app would show
"So many people are signing up that our email service is busy" for most of them.

Do one of these:

- **Easiest for the demo:** **Authentication → Sign In / Providers → Email**: turn **Confirm email** off. Sign-up then signs the student
  in straight away and takes them to `/onboarding`. You can switch it back on after the demo.
- **Or keep confirmation on and add custom SMTP:** **Authentication → Emails → SMTP Settings**, using Resend, SendGrid, Postmark, Amazon SES or similar.
  Then raise **Rate Limits → Rate limit for sending emails** (for example to 1000 per hour), and check that the provider's own plan allows that many.
  Send yourself a test sign-up first and check that it doesn't land in spam. School mail filters often block new senders.

Magic-link sign-in and "Forgot password" also send email, so they share the same limit.

### Auth rate limits (must)

**Authentication → Rate Limits.** The school's 500 students will probably share **one public IP address** (the school's network).
Supabase's sign-up and sign-in limits are counted **per IP**, so the defaults can block most of the class after the first few dozen.
For the demo, raise them, for example:

| Setting | Suggested for the demo |
| --- | --- |
| Sign-ups and sign-ins (per 5 min, per IP) | 1000 or more |
| Token refreshes (per 5 min, per IP) | 3000 or more |
| Verifications / OTP (per 5 min, per IP) | 1000 or more |
| Emails sent per hour | only applies with custom SMTP; see above |

When a limit is hit, the app now says "Too many attempts. Please wait a minute and try again." It doesn't show a raw error.
If students go through a mobile hotspot or home networks instead, the per-IP limits matter less.

### Password rules

**Authentication → Sign In / Providers → Email → Password requirements.** The form asks for at least 8 characters. If you turn on
**Leaked password protection** or stricter character rules, common passwords like `password1` get refused with a friendly
"too easy to guess" message. That's fine, but tell teachers so students aren't surprised.

### Site URL and redirect URLs (must)

**Authentication → URL Configuration.**

- **Site URL:** your production URL, for example `https://questacademy.example`. Not `localhost`.
- **Redirect URLs:** add `https://<your-domain>/**` (and `https://<your-project>-*.vercel.app/**` if you test on preview deployments).
  The app sends email links to `/auth` (then on to `/onboarding` or `/learn`) and password resets to `/auth/reset`. If those URLs aren't
  allowed, Supabase silently falls back to the Site URL.
- Expired or reused links now land on `/auth` with a clear "That email link has expired…" message.

### Database

- Run `supabase/schema.sql` if you haven't already. It creates `learner_state`, `profiles`, `tutor_usage` and the `tutor_take` function.
- Free-plan projects **pause after a week without activity**. Open the dashboard the day before to make sure the project is awake.
- On the free plan, 500 users signing in at once fits within the limits. Watch **Reports → API** during the demo.

## 2. Vercel → Environment variables

| Variable | Why |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Sign-in and cloud sync. Without them the site runs in guest-only mode. |
| `SUPABASE_SERVICE_ROLE_KEY` | The tutor's shared daily limits (and account deletion). Without it only the per-instance burst limit applies. |
| `ANTHROPIC_API_KEY` | AI tutor. |
| `TUTOR_DAILY_BUDGET` | **Must check: the whole site's AI requests per day (default 3000).** 500 students asking about 10 questions each is about 5000, so with the default **everyone** sees "busy" partway through the demo. Set it to something like `15000` for the day, or `0` for no cap. Then set a spend limit in the Anthropic console instead. |
| `TUTOR_DAILY_LIMIT_USER` | Per signed-in student per day (default 60). Fine as is. |
| `TUTOR_DAILY_LIMIT_GUEST` | Per guest **IP** per day (default 15). A whole school on one IP shares this, so make sure students **sign in** before using the tutor. |

Redeploy after changing environment variables.

## 3. How the app behaves under load (already in the code)

- **AI tutor limits.** Burst limiting happens in memory on each serverless instance: 30 requests per 10 minutes **per signed-in student**,
  or 120 per 10 minutes per guest IP. Signed-in students are **never** counted against the shared school IP, so one heavy user can't lock
  out the class. Instances are recycled and scaled out, so this only damps bursts. The durable per-user and site-wide limits live in
  Supabase (`tutor_take`), and if that check errors the app lets the request through instead of locking everyone out. The check of
  who's signed in is cached for 5 minutes per instance, so a chatty student doesn't call Supabase Auth on every message.
- **Cloud sync.** It saves 2.5 s after the last change (debounced), pulls again at most once a minute when the tab regains focus, and also
  every 3 to 4 minutes (randomised per device, so a class that signs in together doesn't sync in lockstep). A token refresh no longer
  restarts the sync timers. 500 students is roughly 2 to 3 small requests per student every few minutes.
- **Onboarding.** Answers are saved on the device, so a refresh or a dropped Wi-Fi connection resumes on the same step. The diagnostic
  quiz can always be skipped, gives up after 10 s if questions don't load, and skips subjects that have no questions.
- **Sign-up form.** It checks the email and password before sending, can't be submitted twice, and shows friendly messages for an
  already-used email, a weak password, a network failure, email or auth rate limits, and expired links. It can resend the confirmation
  email (60 s cooldown).

## 4. Rehearsal (15 minutes, the day before)

1. On a phone (about 375 px wide), sign up with a new email, complete onboarding, and land on the home page.
2. Refresh halfway through onboarding. It should resume on the same step.
3. Sign up again with the same email. You should see "An account with this email already exists".
4. Sign out, then sign in. You should land on `/learn` (onboarding is skipped once it's done).
5. Ask the tutor a question while signed in.
6. In Supabase **Authentication → Users**, check that the test users appear. Delete them afterwards.

## Monitoring, AI cost, payments and compliance (owner steps)

Everything below is optional and switched off until its keys are set. Without them the site builds and runs as before.

### 1. Run the migration

In **Supabase → SQL Editor**, run `supabase/migrations/20261028100000_ops_payments_compliance.sql` (after the school migrations, since it adds a column to `schools`). It creates `ai_usage`, `payments`, `tutor_passes`, `consent_records`, the `grant_tutor_pass` function and the usage report functions. It's safe to run again.

Also check **Project Settings → General → Region** is **Mumbai (ap-south-1)**. The privacy page says data is hosted in India. If your project is somewhere else, either move it or change the "Where your data is stored" section in `src/app/(marketing)/privacy/page.tsx`. In Vercel, set **Settings → Functions → Region** to **Mumbai (bom1)** as well.

### 2. Environment variables (Vercel)

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SENTRY_DSN` | Turns on Sentry error reporting (browser, server, edge). |
| `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT` | Optional. Upload source maps at build time so stack traces are readable. Without the token the build skips the upload. |
| `SENTRY_TRACES_SAMPLE_RATE`, `NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE` | Optional. Performance sampling (defaults 0.05 server, 0.02 browser). |
| `NEXT_PUBLIC_POSTHOG_KEY` | Turns on PostHog analytics **and** the consent banner. Nothing is sent until a visitor taps Allow. |
| `NEXT_PUBLIC_POSTHOG_HOST` | Optional. Default `https://eu.i.posthog.com`. Use `https://us.i.posthog.com` for a US project. |
| `ADMIN_EMAILS` | Comma-separated operator emails (must be confirmed) that can open `/admin/usage`. |
| `USD_INR` | Optional. Exchange rate for cost estimates (default 88). |
| `AI_PRICE_CLAUDE_HAIKU_5_5` | Optional. `input,output,cacheRead,cacheWrite` in US$ per million tokens, if list prices change (default `0.1,0.5,0.01,0.125`). |
| `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` | Razorpay API keys (already used for checkout). |
| `RAZORPAY_WEBHOOK_SECRET` | Secret you choose when creating the webhook (below). |
| `NEXT_PUBLIC_TUTOR_PREMIUM` | `1` puts the live tutor behind the pass. Leave unset to keep it open to everyone. |
| `TUTOR_PRICE_INR`, `TUTOR_PASS_DAYS` | Optional. Price (default 299) and length (default 30 days) of the pass. |
| `RESEND_API_KEY`, `CONSENT_EMAIL_FROM` | Optional. Sends the parent a "please confirm" email after parental consent (e.g. `Quest Academy <consent@your-domain>`; the domain must be verified in Resend). Without them, consent is still recorded, just not email-verified. |
| `NEXT_PUBLIC_GRIEVANCE_OFFICER_NAME`, `NEXT_PUBLIC_GRIEVANCE_EMAIL`, `NEXT_PUBLIC_GRIEVANCE_ADDRESS` | **Must set before launch.** Shown on the privacy page; it shows placeholders until they are set. |

Redeploy after changing them.

### 3. Razorpay webhook

**Razorpay Dashboard → Account & Settings → Webhooks → Add new webhook**

- **URL:** `https://<your-domain>/api/pay/webhook`
- **Secret:** a long random string. Put the same value in `RAZORPAY_WEBHOOK_SECRET`.
- **Active events:** `payment.captured`

The checkout handler and the webhook both grant the pass, and whichever arrives second does nothing, so a learner who closes the tab mid-payment still gets the pass. With Supabase configured, buyers must be signed in. The pass is stored in `tutor_passes` and the live tutor checks it on the server. Test in Razorpay **Test mode** first and confirm a row appears in `payments` with `pass_granted = true`.

### 4. Sentry

Create a **Next.js** project at sentry.io and copy its DSN into `NEXT_PUBLIC_SENTRY_DSN`. For readable stack traces, create an **Organization auth token** (scope: project releases) and set `SENTRY_AUTH_TOKEN`, `SENTRY_ORG` and `SENTRY_PROJECT`. In **Project Settings → Security & Privacy**, keep **Data Scrubber** on and turn on **Prevent Storing of IP Addresses**.

### 5. PostHog

Create a project (EU cloud recommended) and copy the **Project API key** into `NEXT_PUBLIC_POSTHOG_KEY`. In **Project settings**, turn on **Discard client IP data** and keep session replay **off**. Events sent: `signup`, `onboarding_done`, `lesson_start`, `lesson_complete`, `practice_done`, `mock_submit`, `tutor_session_start`, `tutor_session_end`, `voice_engine`, `assignment_done`. Each carries the account id only.

### 6. AI usage page

Open `/admin/usage` signed in with an `ADMIN_EMAILS` account. It shows daily totals, the estimated cost in rupees, the top users and a per-school breakdown. `schools.tutor_daily_cap` is reserved for per-school limits and isn't enforced yet.

### 7. DPDP Act checks

- Fill in the grievance officer variables, and read the privacy and terms pages once. They promise a reply within 7 days and a refund window for unused passes, so change those if they don't match how you work.
- Students aged 18 or under go through a required parental consent step in onboarding (parent email or phone, a consent checkbox, and a timestamp). It is saved to `consent_records` when the student is signed in. Guests' consent is uploaded the first time they sign in.
- Settings → Account offers **Download** (JSON export of everything in the account) and **Delete account**. Delete removes the auth user, and every table cascades. Payments and AI usage rows keep only the amounts.
