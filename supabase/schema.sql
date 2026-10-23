-- Quest Academy — Supabase schema
-- Run this once in the Supabase SQL editor (Dashboard → SQL → New query).

-- Public profile used for leaderboards & leagues.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default 'Learner',
  avatar text not null default '🦉',
  stage text,
  xp integer not null default 0,
  level integer not null default 1,
  streak integer not null default 0,
  weekly_xp integer not null default 0,
  week text,
  updated_at timestamptz not null default now()
);

create index if not exists profiles_week_xp_idx on public.profiles (week, weekly_xp desc);

-- Full learner progress (lessons, cards, badges, mock results…) as one JSON document.
create table if not exists public.learner_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.learner_state enable row level security;

-- Anyone signed in can read profiles (for the leaderboard); only the owner can write theirs.
drop policy if exists "profiles are readable by signed-in users" on public.profiles;
create policy "profiles are readable by signed-in users" on public.profiles
  for select to authenticated using (true);

drop policy if exists "users upsert their own profile" on public.profiles;
create policy "users upsert their own profile" on public.profiles
  for insert to authenticated with check (auth.uid() = id);

drop policy if exists "users update their own profile" on public.profiles;
create policy "users update their own profile" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Learner state is private to its owner.
drop policy if exists "owner reads state" on public.learner_state;
create policy "owner reads state" on public.learner_state
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "owner inserts state" on public.learner_state;
create policy "owner inserts state" on public.learner_state
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "owner updates state" on public.learner_state;
create policy "owner updates state" on public.learner_state
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- v2: notebook + settings sync, Ask Questy usage limits.
-- Safe to run again on an existing project.
-- ---------------------------------------------------------------------------

-- Notes, bookmarks and doubts, plus small per-learner settings (parent controls, tutor switch).
alter table public.learner_state add column if not exists notebook jsonb not null default '{}'::jsonb;
alter table public.learner_state add column if not exists settings jsonb not null default '{}'::jsonb;

-- Daily Ask Questy usage per learner (or per hashed IP for guests) and in total.
-- Only the server (service role) touches this table; there are no client policies.
create table if not exists public.tutor_usage (
  key text not null,
  day date not null default (now() at time zone 'utc')::date,
  count integer not null default 0,
  primary key (key, day)
);
alter table public.tutor_usage enable row level security;

-- Atomically count one request against `p_key` and the global budget.
-- Returns true when the request is allowed.
create or replace function public.tutor_take(p_key text, p_limit integer, p_global_limit integer)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  today date := (now() at time zone 'utc')::date;
  mine integer;
  total integer;
begin
  insert into tutor_usage (key, day, count) values (p_key, today, 1)
    on conflict (key, day) do update set count = tutor_usage.count + 1
    returning count into mine;
  -- A learner over their own limit must not use up the shared budget.
  if mine > p_limit then
    return false;
  end if;
  insert into tutor_usage (key, day, count) values ('__all__', today, 1)
    on conflict (key, day) do update set count = tutor_usage.count + 1
    returning count into total;
  if p_global_limit > 0 and total > p_global_limit then
    return false;
  end if;
  return true;
end;
$$;

revoke all on function public.tutor_take(text, integer, integer) from public, anon, authenticated;

-- Old usage rows are not needed; run occasionally (or schedule with pg_cron):
-- delete from public.tutor_usage where day < (now() at time zone 'utc')::date - 30;
