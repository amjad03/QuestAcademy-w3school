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
