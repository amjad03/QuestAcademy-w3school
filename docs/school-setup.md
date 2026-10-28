# School setup (owner steps)

The school layer adds principals, teachers, students and parents on top of the existing
Supabase accounts and cloud sync. Pages: `/join`, `/teach`, `/school`, `/compete`, `/reports`.

## 1. Run the migrations

In Supabase → SQL editor, run in order (all are safe to re-run):

1. `supabase/schema.sql` (if not already run)
2. `supabase/migrations/20261028000001_school_core.sql`
3. `supabase/migrations/20261028000002_assignments_reports.sql`
4. `supabase/migrations/20261028000003_engagement.sql`

Or with the CLI: `supabase db push`. Row-level security is on for every table: students see only
their own data and class leaderboards (by nickname), teachers their classes, principals their
school, parents their child.

## 2. Environment variables (Vercel → Settings → Environment Variables)

| Variable | Needed for |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | everything (already set for sync) |
| `SUPABASE_SERVICE_ROLE_KEY` | CSV import, teacher invites, weekly reports, Kinetix sign-in |
| `NEXT_PUBLIC_SITE_URL` | links in invitations |
| `CRON_SECRET` | weekly reports (Vercel sends it to the cron route automatically) |
| `WHATSAPP_TOKEN` | Meta WhatsApp Cloud API permanent access token |
| `WHATSAPP_PHONE_ID` | the sending phone number's ID |
| `WHATSAPP_TEMPLATE_NAME` | e.g. `weekly_progress_report` |
| `WHATSAPP_TEMPLATE_LANG` | template language code, default `en` |
| `WHATSAPP_DEFAULT_COUNTRY_CODE` | for 10-digit numbers, default `91` |
| `REPORT_EMAIL_WEBHOOK_URL`, `REPORT_EMAIL_WEBHOOK_SECRET` | optional email fallback: we POST `{to, subject, text}` |
| `SCHOOL_LOGIN_EMAIL_DOMAIN` | optional: domain for generated student logins (default `<school>.students.invalid`) |
| `KINETIX_*` | see `docs/kinetix-sso.md` |

Without WhatsApp/email settings, reports are still generated weekly, stored, shown in the app
(`/reports`) and logged as **not sent**.

In Supabase → Authentication → URL configuration, add `https://<your-domain>/join` and
`https://<your-domain>/auth/kinetix` to the redirect URLs.

## 3. Weekly cron

`vercel.json` schedules `GET /api/cron/weekly-reports` every Sunday 13:30 UTC (19:00 IST).
Set `CRON_SECRET` and redeploy. Manual run:

```
curl -H "Authorization: Bearer $CRON_SECRET" "https://<domain>/api/cron/weekly-reports?week=2026-10-26"
```

Options: `force=1` resends, `school=<id>` limits to one school. Reports for ~500 students take well
under a minute.

## 4. Register the WhatsApp template

Meta Business Manager → WhatsApp → Message templates → Create. Category **Utility**,
name `weekly_progress_report`, language English. Body (8 variables, in this order):

```
Hello! Here is {{1}}'s Quest Academy report for {{2}}.

⏱ Learning time: {{3}} minutes
📚 Chapters completed: {{4}}
💪 Strengths: {{5}}
🎯 Needs practice: {{6}}
➡️ Next week's focus: {{7}}
🌟 Teacher kudos: {{8}}

Open Quest Academy to see the full report.
```

Footer (optional): `Reply STOP to stop weekly reports.` Wait for approval before setting
`WHATSAPP_TEMPLATE_NAME`. Parents must have opted in (the school collects consent with the phone
number; `guardians.whatsapp_opt_in`).

## 5. Roll out a school

1. The principal signs up, opens `/join?new=school` and creates the school.
2. `/school` → **Setup**: add classes (name, section, grade, board so chapters match the syllabus).
   Each class gets a **student code** and a **teacher code**.
3. Invite teachers by email (or share the teacher code). Teachers sign in and enter the code at `/join`.
4. Import students: **Setup → Import students** (CSV columns `name, class, section, email,
   parent phone, parent email`; email optional). Print the **login slips**; passwords are shown only once.
   Students can also join themselves with the class code.
5. Parents: their phone/email from the CSV receives the weekly report. A parent who signs up with
   that email sees reports at `/reports`.

Seed by script instead: insert into `schools` / `classes` with the service role (codes are
generated automatically), then `insert into memberships (user_id, school_id, role, display_name)
values ('<principal user id>', '<school id>', 'principal', 'Dr. Iyer');`.

## 6. Challenge of the week

Without a row, the app rotates course challenges weekly. To set one:

```sql
insert into challenges (id, title, href, completion_key, description)
values ('2026-11-02', 'Light & reflection challenge', '/session/chapter/cbse_10_science_9/test',
        'chapter:cbse_10_science_9:test', 'Ten questions. One attempt counts for your school.');
```

`id` is the Monday of the week. Schools rank once 3 students have taken part.

## Notes

- Student summaries are written by the student's app on sync (estimated minutes from activity).
  A student who never signs in shows as "not started".
- Preview without Supabase: open `/teach?demo=1` (sample school, nothing saved).
