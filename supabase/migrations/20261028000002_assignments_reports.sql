-- Quest Academy — school layer (2/3): assignments, submissions, kudos and weekly parent reports.

create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools (id) on delete cascade,
  class_id uuid not null references public.classes (id) on delete cascade,
  created_by uuid references auth.users (id) on delete set null,
  -- practice: chapter practice set · test: chapter test · mock: a mock test
  kind text not null check (kind in ('practice', 'test', 'mock')),
  -- Chapter id ("kseeb:10:maths:2" or "u.course.topic") or mock id.
  ref text not null,
  title text not null,
  -- Where the student starts (an existing session / mock player URL).
  href text not null,
  -- How the app recognises completion: assessment key ("chapter:<id>:test") or "mock:<id>".
  completion_key text not null,
  note text,
  due_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists assignments_class_idx on public.assignments (class_id, due_at);

create table if not exists public.assignment_submissions (
  assignment_id uuid not null references public.assignments (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  class_id uuid not null references public.classes (id) on delete cascade,
  status text not null default 'done' check (status in ('started', 'done')),
  -- 0–1 fraction correct (mocks: marks / max).
  score numeric,
  detail jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  completed_at timestamptz,
  primary key (assignment_id, user_id)
);
create index if not exists submissions_class_idx on public.assignment_submissions (class_id);

create table if not exists public.kudos (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools (id) on delete cascade,
  class_id uuid references public.classes (id) on delete cascade,
  from_id uuid references auth.users (id) on delete set null,
  from_name text not null default 'Your teacher',
  to_id uuid not null references auth.users (id) on delete cascade,
  badge text not null check (badge in ('star', 'effort', 'improver', 'helper', 'streak', 'creative', 'champion')),
  message text check (char_length(message) <= 280),
  created_at timestamptz not null default now()
);
create index if not exists kudos_to_idx on public.kudos (to_id, created_at desc);
create index if not exists kudos_school_idx on public.kudos (school_id, created_at desc);

create table if not exists public.weekly_reports (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users (id) on delete cascade,
  school_id uuid references public.schools (id) on delete cascade,
  week text not null,
  report jsonb not null,
  text text not null,
  channel text check (channel in ('whatsapp', 'email', 'none')),
  -- sent · not_sent (no sender configured / no contact) · failed
  status text not null default 'not_sent' check (status in ('sent', 'not_sent', 'failed')),
  detail text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  unique (student_id, week)
);
create index if not exists weekly_reports_school_idx on public.weekly_reports (school_id, week);

alter table public.assignments enable row level security;
alter table public.assignment_submissions enable row level security;
alter table public.kudos enable row level security;
alter table public.weekly_reports enable row level security;

-- Assignments: class members read; the class's teacher (or principal) writes.
drop policy if exists "read assignments" on public.assignments;
create policy "read assignments" on public.assignments for select to authenticated
  using (public.in_class(class_id) or public.teaches_class(class_id));
drop policy if exists "teacher writes assignments" on public.assignments;
create policy "teacher writes assignments" on public.assignments for all to authenticated
  using (public.teaches_class(class_id))
  with check (public.teaches_class(class_id) and school_id = (select c.school_id from public.classes c where c.id = class_id));

-- Submissions: the student writes their own for their class's assignments; teacher/principal/parent read.
drop policy if exists "read submissions" on public.assignment_submissions;
create policy "read submissions" on public.assignment_submissions for select to authenticated
  using (user_id = auth.uid() or public.teaches_class(class_id) or public.is_parent_of(user_id));
drop policy if exists "student submits" on public.assignment_submissions;
create policy "student submits" on public.assignment_submissions for insert to authenticated
  with check (user_id = auth.uid() and public.in_class(class_id)
    and class_id = (select a.class_id from public.assignments a where a.id = assignment_id));
drop policy if exists "student updates submission" on public.assignment_submissions;
create policy "student updates submission" on public.assignment_submissions for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid() and public.in_class(class_id));

-- Kudos: teachers of the class send; the student, their parents and staff read.
drop policy if exists "read kudos" on public.kudos;
create policy "read kudos" on public.kudos for select to authenticated using (public.can_view_student(to_id));
drop policy if exists "teacher sends kudos" on public.kudos;
create policy "teacher sends kudos" on public.kudos for insert to authenticated
  with check (from_id = auth.uid() and public.is_school_staff(school_id) and public.can_view_student(to_id));
drop policy if exists "sender deletes kudos" on public.kudos;
create policy "sender deletes kudos" on public.kudos for delete to authenticated using (from_id = auth.uid());

-- Weekly reports are written by the server (cron, service role) only.
drop policy if exists "read reports" on public.weekly_reports;
create policy "read reports" on public.weekly_reports for select to authenticated using (public.can_view_student(student_id));
