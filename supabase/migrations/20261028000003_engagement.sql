-- Quest Academy — school layer (3/3): leaderboards, weekly inter-school challenge, Kinetix identities.

-- Challenge of the week. id is the week key (Monday, "YYYY-MM-DD"). Without a row the app
-- picks a default course challenge for the week (src/lib/school/challenge.ts).
create table if not exists public.challenges (
  id text primary key,
  title text not null,
  -- Player URL and the assessment key the app records on completion.
  href text not null,
  completion_key text not null,
  description text,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.challenge_entries (
  challenge_id text not null,
  user_id uuid not null references auth.users (id) on delete cascade,
  school_id uuid references public.schools (id) on delete cascade,
  class_id uuid references public.classes (id) on delete set null,
  score numeric not null check (score >= 0 and score <= 1),
  completed_at timestamptz not null default now(),
  primary key (challenge_id, user_id)
);
create index if not exists challenge_entries_school_idx on public.challenge_entries (challenge_id, school_id);

alter table public.challenges enable row level security;
alter table public.challenge_entries enable row level security;

drop policy if exists "anyone signed in reads challenges" on public.challenges;
create policy "anyone signed in reads challenges" on public.challenges for select to authenticated using (true);

drop policy if exists "read entries" on public.challenge_entries;
create policy "read entries" on public.challenge_entries for select to authenticated using (public.can_view_student(user_id));
drop policy if exists "write own entry" on public.challenge_entries;
create policy "write own entry" on public.challenge_entries for insert to authenticated
  with check (user_id = auth.uid() and public.summary_scope_ok(class_id, school_id));
drop policy if exists "update own entry" on public.challenge_entries;
create policy "update own entry" on public.challenge_entries for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid() and public.summary_scope_ok(class_id, school_id));

-- ---------------------------------------------------------------------------
-- Leaderboards. Only nicknames, avatars-by-initial and XP leave these functions;
-- students who opted out are hidden (they still see their own row).
-- ---------------------------------------------------------------------------

create or replace function public.leaderboard_class(p_class uuid, p_week text)
returns table (user_id uuid, nickname text, weekly_xp integer, streak integer, is_me boolean)
language sql stable security definer set search_path = public as $$
  select m.user_id,
         coalesce(nullif(m.nickname, ''), 'Learner ' || upper(substr(m.user_id::text, 1, 4))),
         coalesce(case when s.week = p_week then s.weekly_xp end, 0),
         coalesce(s.streak, 0),
         m.user_id = auth.uid()
  from memberships m
  left join student_summaries s on s.user_id = m.user_id
  where m.class_id = p_class and m.role = 'student'
    and (public.in_class(p_class) or public.teaches_class(p_class))
    and (not m.leaderboard_hidden or m.user_id = auth.uid())
  order by 3 desc, 2
  limit 100;
$$;

create or replace function public.leaderboard_school(p_school uuid, p_week text)
returns table (user_id uuid, nickname text, class_name text, weekly_xp integer, is_me boolean)
language sql stable security definer set search_path = public as $$
  select m.user_id,
         coalesce(nullif(m.nickname, ''), 'Learner ' || upper(substr(m.user_id::text, 1, 4))),
         c.name || ' ' || c.section,
         coalesce(case when s.week = p_week then s.weekly_xp end, 0),
         m.user_id = auth.uid()
  from memberships m
  join classes c on c.id = m.class_id
  left join student_summaries s on s.user_id = m.user_id
  where m.school_id = p_school and m.role = 'student'
    and exists (select 1 from memberships me where me.user_id = auth.uid() and me.school_id = p_school)
    and (not m.leaderboard_hidden or m.user_id = auth.uid())
  order by 4 desc, 2
  limit 50;
$$;

-- Class-vs-class within a school (average weekly XP per student).
create or replace function public.leaderboard_school_classes(p_school uuid, p_week text)
returns table (class_id uuid, class_name text, students integer, avg_xp numeric, total_xp bigint)
language sql stable security definer set search_path = public as $$
  select c.id, c.name || ' ' || c.section, count(m.user_id)::int,
         round(avg(coalesce(case when s.week = p_week then s.weekly_xp end, 0)), 1),
         sum(coalesce(case when s.week = p_week then s.weekly_xp end, 0))
  from classes c
  join memberships m on m.class_id = c.id and m.role = 'student'
  left join student_summaries s on s.user_id = m.user_id
  where c.school_id = p_school
    and exists (select 1 from memberships me where me.user_id = auth.uid() and me.school_id = p_school)
  group by c.id
  order by 4 desc;
$$;

-- Inter-school ranking for a week's challenge: schools with 3+ entries, by average score.
create or replace function public.challenge_school_ranking(p_challenge text)
returns table (school_id uuid, school_name text, entries integer, avg_score numeric, is_mine boolean)
language sql stable security definer set search_path = public as $$
  select sc.id, sc.name, count(*)::int, round(avg(e.score), 3),
         exists (select 1 from memberships me where me.user_id = auth.uid() and me.school_id = sc.id)
  from challenge_entries e join schools sc on sc.id = e.school_id
  where e.challenge_id = p_challenge and auth.uid() is not null
  group by sc.id
  having count(*) >= 3 or exists (select 1 from memberships me where me.user_id = auth.uid() and me.school_id = sc.id)
  order by 4 desc, 3 desc
  limit 50;
$$;

revoke all on function public.leaderboard_class(uuid, text), public.leaderboard_school(uuid, text),
  public.leaderboard_school_classes(uuid, text), public.challenge_school_ranking(text) from public, anon;
grant execute on function public.leaderboard_class(uuid, text), public.leaderboard_school(uuid, text),
  public.leaderboard_school_classes(uuid, text), public.challenge_school_ranking(text) to authenticated;

-- Principal / teacher analytics: one row per class for the current data (RLS of the caller applies).
create or replace view public.class_overview with (security_invoker = on) as
  select c.id as class_id, c.school_id, c.name, c.section, c.grade, c.board,
         count(s.user_id)::int as students,
         count(s.user_id) filter (where s.last_active > now() - interval '7 days')::int as active_7d,
         coalesce(sum(s.minutes_week), 0)::int as minutes_week,
         round(avg(case when s.chapters_total > 0 then s.chapters_done::numeric / s.chapters_total end), 3) as completion,
         round(avg(s.mock_avg), 3) as mock_avg,
         round(avg(s.accuracy), 3) as accuracy
  from classes c
  left join student_summaries s on s.class_id = c.id
  group by c.id;

-- ---------------------------------------------------------------------------
-- Sign in with Kinetix: external subject → Supabase user, and one-time token ids (replay guard).
-- Server only (service role); no client policies.
-- ---------------------------------------------------------------------------
create table if not exists public.external_identities (
  provider text not null,
  subject text not null,
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (provider, subject)
);
create table if not exists public.sso_token_uses (
  jti text primary key,
  expires_at timestamptz not null
);
alter table public.external_identities enable row level security;
alter table public.sso_token_uses enable row level security;
