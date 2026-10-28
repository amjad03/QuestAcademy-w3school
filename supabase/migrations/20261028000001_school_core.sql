-- Quest Academy — school layer (1/3): schools, classes, memberships, join codes,
-- guardians, per-student summaries and weekly progress snapshots.
-- Run after supabase/schema.sql. Safe to run again.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists public.schools (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  city text,
  board text,
  -- Organisation id in Kinetix ERP, for "Sign in with Kinetix" (see docs/kinetix-sso.md).
  kinetix_org_id text unique,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools (id) on delete cascade,
  -- "Class 10", "PUC-1" …; grade/board match the app's syllabus ids so chapters line up.
  name text not null,
  section text not null default 'A',
  grade text,
  board text,
  student_code text not null unique,
  teacher_code text not null unique,
  created_at timestamptz not null default now(),
  unique (school_id, name, section)
);
create index if not exists classes_school_idx on public.classes (school_id);

-- One row per role a user has. Principals have class_id null; parents point at a student.
create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  school_id uuid not null references public.schools (id) on delete cascade,
  class_id uuid references public.classes (id) on delete cascade,
  role text not null check (role in ('student', 'teacher', 'principal', 'parent')),
  student_id uuid references auth.users (id) on delete cascade,
  display_name text not null default 'Learner',
  -- Public name on leaderboards (never the real name), and the privacy opt-out.
  nickname text,
  leaderboard_hidden boolean not null default false,
  roll_no text,
  last_seen_at timestamptz,
  created_at timestamptz not null default now()
);
create unique index if not exists memberships_unique_idx
  on public.memberships (user_id, school_id, coalesce(class_id, '00000000-0000-0000-0000-000000000000'::uuid), role, coalesce(student_id, '00000000-0000-0000-0000-000000000000'::uuid));
create index if not exists memberships_class_idx on public.memberships (class_id, role);
create index if not exists memberships_school_idx on public.memberships (school_id, role);
create index if not exists memberships_user_idx on public.memberships (user_id);

-- Teacher invitations sent by a principal (link: /join?invite=<token>).
create table if not exists public.invites (
  token text primary key default encode(gen_random_bytes(18), 'hex'),
  school_id uuid not null references public.schools (id) on delete cascade,
  class_id uuid references public.classes (id) on delete cascade,
  role text not null default 'teacher' check (role in ('teacher', 'principal')),
  email text,
  created_by uuid references auth.users (id) on delete set null,
  accepted_by uuid references auth.users (id) on delete set null,
  accepted_at timestamptz,
  expires_at timestamptz not null default now() + interval '30 days',
  created_at timestamptz not null default now()
);

-- Parent / guardian contact for weekly reports. A parent account with this email is linked on sign-in.
create table if not exists public.guardians (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users (id) on delete cascade,
  school_id uuid not null references public.schools (id) on delete cascade,
  name text,
  phone text,
  email text,
  whatsapp_opt_in boolean not null default true,
  created_at timestamptz not null default now(),
  unique (student_id, phone),
  unique (student_id, email)
);

-- Per-student summary, written by the app on every cloud sync (see src/lib/school/summary.ts).
create table if not exists public.student_summaries (
  user_id uuid primary key references auth.users (id) on delete cascade,
  school_id uuid references public.schools (id) on delete cascade,
  class_id uuid references public.classes (id) on delete set null,
  display_name text not null default 'Learner',
  week text,
  weekly_xp integer not null default 0,
  xp integer not null default 0,
  streak integer not null default 0,
  best_streak integer not null default 0,
  minutes_week integer not null default 0,
  minutes_total integer not null default 0,
  chapters_done integer not null default 0,
  chapters_total integer not null default 0,
  mock_avg numeric,
  accuracy numeric,
  last_active timestamptz,
  -- { chapters: {id: {done,total,mastery,test}}, topics: [...], weak: [...], mocks: [...], doubts: [...], recent: [...] }
  summary jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
create index if not exists summaries_class_idx on public.student_summaries (class_id, week, weekly_xp desc);
create index if not exists summaries_school_idx on public.student_summaries (school_id, week, weekly_xp desc);

-- One snapshot per student per week (the latest sync of that week wins). Feeds trends and weekly reports.
create table if not exists public.progress_snapshots (
  user_id uuid not null references auth.users (id) on delete cascade,
  week text not null,
  school_id uuid references public.schools (id) on delete cascade,
  class_id uuid references public.classes (id) on delete set null,
  minutes integer not null default 0,
  weekly_xp integer not null default 0,
  chapters_done integer not null default 0,
  streak integer not null default 0,
  summary jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, week)
);
create index if not exists snapshots_school_week_idx on public.progress_snapshots (school_id, week);

-- ---------------------------------------------------------------------------
-- Helper functions (security definer so policies don't recurse through memberships)
-- ---------------------------------------------------------------------------

create or replace function public.is_principal(p_school uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from memberships where user_id = auth.uid() and school_id = p_school and role = 'principal');
$$;

create or replace function public.is_school_staff(p_school uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from memberships where user_id = auth.uid() and school_id = p_school and role in ('teacher', 'principal'));
$$;

-- Teacher of the class, or principal of its school.
create or replace function public.teaches_class(p_class uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from memberships m
    where m.user_id = auth.uid()
      and ((m.role = 'teacher' and m.class_id = p_class)
        or (m.role = 'principal' and m.school_id = (select school_id from classes where id = p_class)))
  );
$$;

create or replace function public.in_class(p_class uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from memberships where user_id = auth.uid() and class_id = p_class);
$$;

create or replace function public.is_parent_of(p_student uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from memberships where user_id = auth.uid() and role = 'parent' and student_id = p_student);
$$;

-- May the caller see this student's school data? (self, their teacher, their principal, their parent)
create or replace function public.can_view_student(p_student uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select p_student = auth.uid()
    or public.is_parent_of(p_student)
    or exists (
      select 1 from memberships s
      where s.user_id = p_student and s.role = 'student'
        and (public.teaches_class(s.class_id) or public.is_principal(s.school_id))
    );
$$;

revoke all on function public.is_principal(uuid), public.is_school_staff(uuid), public.teaches_class(uuid),
  public.in_class(uuid), public.is_parent_of(uuid), public.can_view_student(uuid) from public, anon;
grant execute on function public.is_principal(uuid), public.is_school_staff(uuid), public.teaches_class(uuid),
  public.in_class(uuid), public.is_parent_of(uuid), public.can_view_student(uuid) to authenticated;

-- A student may only file their summary under a class they belong to (and that class's school).
create or replace function public.summary_scope_ok(p_class uuid, p_school uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select (p_class is null and p_school is null)
    or exists (select 1 from memberships m where m.user_id = auth.uid() and m.role = 'student' and m.class_id = p_class and m.school_id = p_school);
$$;
revoke all on function public.summary_scope_ok(uuid, uuid) from public, anon;
grant execute on function public.summary_scope_ok(uuid, uuid) to authenticated;

-- Short, unambiguous join codes (no 0/O/1/I).
create or replace function public.new_join_code(p_len integer default 6) returns text
language plpgsql volatile set search_path = public as $$
declare
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  code text;
begin
  loop
    code := '';
    for i in 1..p_len loop
      code := code || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from classes where student_code = code or teacher_code = code);
  end loop;
  return code;
end;
$$;

create or replace function public.classes_fill_codes() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.student_code is null or new.student_code = '' then new.student_code := public.new_join_code(6); end if;
  if new.teacher_code is null or new.teacher_code = '' then new.teacher_code := 'T' || public.new_join_code(7); end if;
  new.student_code := upper(new.student_code);
  new.teacher_code := upper(new.teacher_code);
  return new;
end;
$$;
drop trigger if exists classes_fill_codes on public.classes;
create trigger classes_fill_codes before insert on public.classes for each row execute function public.classes_fill_codes();
alter table public.classes alter column student_code set default '';
alter table public.classes alter column teacher_code set default '';

-- ---------------------------------------------------------------------------
-- RPCs used by the app
-- ---------------------------------------------------------------------------

-- A principal creates their school (and becomes its principal).
create or replace function public.create_school(p_name text, p_city text default null, p_board text default null, p_display_name text default null)
returns uuid language plpgsql security definer set search_path = public as $$
declare
  sid uuid;
begin
  if auth.uid() is null then raise exception 'not_signed_in'; end if;
  insert into schools (name, city, board, created_by) values (trim(p_name), nullif(trim(p_city), ''), nullif(p_board, ''), auth.uid()) returning id into sid;
  insert into memberships (user_id, school_id, role, display_name) values (auth.uid(), sid, 'principal', coalesce(nullif(trim(p_display_name), ''), 'Principal'));
  return sid;
end;
$$;

-- Join a class with its student code (student) or teacher code (teacher).
create or replace function public.join_with_code(p_code text, p_display_name text default null, p_nickname text default null)
returns table (school_id uuid, class_id uuid, role text)
language plpgsql security definer set search_path = public as $$
declare
  c classes%rowtype;
  r text;
begin
  if auth.uid() is null then raise exception 'not_signed_in'; end if;
  select * into c from classes where student_code = upper(trim(p_code)) or teacher_code = upper(trim(p_code));
  if not found then raise exception 'invalid_code'; end if;
  r := case when c.teacher_code = upper(trim(p_code)) then 'teacher' else 'student' end;
  -- A student belongs to one class at a time: moving class replaces the old membership.
  if r = 'student' then
    delete from memberships m where m.user_id = auth.uid() and m.role = 'student' and m.class_id <> c.id;
  end if;
  insert into memberships (user_id, school_id, class_id, role, display_name, nickname)
    values (auth.uid(), c.school_id, c.id, r, coalesce(nullif(trim(p_display_name), ''), 'Learner'), nullif(trim(p_nickname), ''))
    on conflict do nothing;
  update student_summaries s set school_id = c.school_id, class_id = c.id where s.user_id = auth.uid() and r = 'student';
  return query select c.school_id, c.id, r;
end;
$$;

-- Accept a principal's teacher invitation.
create or replace function public.accept_invite(p_token text, p_display_name text default null)
returns table (school_id uuid, class_id uuid, role text)
language plpgsql security definer set search_path = public as $$
declare
  i invites%rowtype;
begin
  if auth.uid() is null then raise exception 'not_signed_in'; end if;
  select * into i from invites where token = p_token and expires_at > now() and (accepted_by is null or accepted_by = auth.uid());
  if not found then raise exception 'invalid_invite'; end if;
  insert into memberships (user_id, school_id, class_id, role, display_name)
    values (auth.uid(), i.school_id, i.class_id, i.role, coalesce(nullif(trim(p_display_name), ''), 'Teacher'))
    on conflict do nothing;
  update invites set accepted_by = auth.uid(), accepted_at = now() where token = p_token;
  return query select i.school_id, i.class_id, i.role;
end;
$$;

-- Link parent accounts by email to the students whose guardian rows list that email.
create or replace function public.claim_parent_links() returns integer
language plpgsql security definer set search_path = public as $$
declare
  em text := lower((select email from auth.users where id = auth.uid()));
  n integer;
begin
  if em is null then return 0; end if;
  insert into memberships (user_id, school_id, role, student_id, display_name)
    select auth.uid(), g.school_id, 'parent', g.student_id, coalesce(g.name, 'Parent')
    from guardians g where lower(g.email) = em
    on conflict do nothing;
  get diagnostics n = row_count;
  return n;
end;
$$;

-- Mark the caller active (teacher activity on the principal dashboard).
create or replace function public.touch_membership() returns void
language sql security definer set search_path = public as $$
  update memberships set last_seen_at = now() where user_id = auth.uid() and (last_seen_at is null or last_seen_at < now() - interval '10 minutes');
$$;

-- A student changes their leaderboard nickname / privacy.
create or replace function public.set_leaderboard_prefs(p_nickname text, p_hidden boolean) returns void
language sql security definer set search_path = public as $$
  update memberships set nickname = nullif(left(trim(p_nickname), 24), ''), leaderboard_hidden = p_hidden
  where user_id = auth.uid() and role = 'student';
$$;

revoke all on function public.create_school(text, text, text, text), public.join_with_code(text, text, text), public.accept_invite(text, text),
  public.claim_parent_links(), public.touch_membership(), public.set_leaderboard_prefs(text, boolean), public.new_join_code(integer) from public, anon;
grant execute on function public.create_school(text, text, text, text), public.join_with_code(text, text, text), public.accept_invite(text, text),
  public.claim_parent_links(), public.touch_membership(), public.set_leaderboard_prefs(text, boolean) to authenticated;

-- ---------------------------------------------------------------------------
-- Row-level security
-- ---------------------------------------------------------------------------

alter table public.schools enable row level security;
alter table public.classes enable row level security;
alter table public.memberships enable row level security;
alter table public.invites enable row level security;
alter table public.guardians enable row level security;
alter table public.student_summaries enable row level security;
alter table public.progress_snapshots enable row level security;

-- Schools: members read their school; principals edit it. Creation goes through create_school().
drop policy if exists "members read school" on public.schools;
create policy "members read school" on public.schools for select to authenticated
  using (exists (select 1 from memberships m where m.school_id = schools.id and m.user_id = auth.uid()));
drop policy if exists "principal updates school" on public.schools;
create policy "principal updates school" on public.schools for update to authenticated
  using (public.is_principal(id)) with check (public.is_principal(id));

-- Classes: staff see every class of the school; students see their own class (codes are only useful to staff).
drop policy if exists "read classes" on public.classes;
create policy "read classes" on public.classes for select to authenticated
  using (public.is_school_staff(school_id) or public.in_class(id));
drop policy if exists "principal manages classes" on public.classes;
create policy "principal manages classes" on public.classes for all to authenticated
  using (public.is_principal(school_id)) with check (public.is_principal(school_id));

-- Memberships: own rows; teachers see their class; principals see their school; parents see their child's.
drop policy if exists "read memberships" on public.memberships;
create policy "read memberships" on public.memberships for select to authenticated
  using (
    user_id = auth.uid()
    or (class_id is not null and public.teaches_class(class_id))
    or public.is_principal(school_id)
  );
drop policy if exists "principal manages memberships" on public.memberships;
create policy "principal manages memberships" on public.memberships for all to authenticated
  using (public.is_principal(school_id)) with check (public.is_principal(school_id));
drop policy if exists "leave a class" on public.memberships;
create policy "leave a class" on public.memberships for delete to authenticated using (user_id = auth.uid() and role <> 'principal');

-- Invites: principals only (accepting goes through accept_invite()).
drop policy if exists "principal manages invites" on public.invites;
create policy "principal manages invites" on public.invites for all to authenticated
  using (public.is_principal(school_id)) with check (public.is_principal(school_id));

-- Guardians: staff of the student's class/school; the student sees their own.
drop policy if exists "read guardians" on public.guardians;
create policy "read guardians" on public.guardians for select to authenticated
  using (student_id = auth.uid() or public.can_view_student(student_id) and public.is_school_staff(school_id));
drop policy if exists "staff manage guardians" on public.guardians;
create policy "staff manage guardians" on public.guardians for all to authenticated
  using (public.is_school_staff(school_id) and public.can_view_student(student_id))
  with check (public.is_school_staff(school_id) and public.can_view_student(student_id));

-- Summaries / snapshots: the student writes their own (only into a class they belong to); viewers read.
drop policy if exists "read summaries" on public.student_summaries;
create policy "read summaries" on public.student_summaries for select to authenticated using (public.can_view_student(user_id));
drop policy if exists "write own summary" on public.student_summaries;
create policy "write own summary" on public.student_summaries for insert to authenticated
  with check (user_id = auth.uid() and public.summary_scope_ok(class_id, school_id));
drop policy if exists "update own summary" on public.student_summaries;
create policy "update own summary" on public.student_summaries for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid() and public.summary_scope_ok(class_id, school_id));

drop policy if exists "read snapshots" on public.progress_snapshots;
create policy "read snapshots" on public.progress_snapshots for select to authenticated using (public.can_view_student(user_id));
drop policy if exists "write own snapshot" on public.progress_snapshots;
create policy "write own snapshot" on public.progress_snapshots for insert to authenticated
  with check (user_id = auth.uid() and public.summary_scope_ok(class_id, school_id));
drop policy if exists "update own snapshot" on public.progress_snapshots;
create policy "update own snapshot" on public.progress_snapshots for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid() and public.summary_scope_ok(class_id, school_id));
