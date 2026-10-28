-- Operations, payments and compliance (DPDP Act 2023).
-- Every table here is written only by the server (service role). Learners can read their own rows.
-- Safe to run more than once.

/* ---------------------------------------------------------------------- */
/* AI usage and cost                                                       */
/* ---------------------------------------------------------------------- */

-- One row per tutor / AI request. user_id is null for guests (guest_key is a hashed IP).
create table if not exists public.ai_usage (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  user_id uuid references auth.users (id) on delete set null,
  school_id uuid references public.schools (id) on delete set null,
  guest_key text,
  route text not null,
  model text not null,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  cache_read_tokens integer not null default 0,
  cache_write_tokens integer not null default 0
);
create index if not exists ai_usage_created_idx on public.ai_usage (created_at);
create index if not exists ai_usage_user_idx on public.ai_usage (user_id, created_at);
create index if not exists ai_usage_school_idx on public.ai_usage (school_id, created_at);
alter table public.ai_usage enable row level security;

-- Per-school daily tutor cap (requests per student per day). Null = the site default
-- (TUTOR_DAILY_LIMIT_USER). Not enforced yet; reserved so schools can be given their own caps.
alter table public.schools add column if not exists tutor_daily_cap integer check (tutor_daily_cap is null or tutor_daily_cap >= 0);

-- Aggregates for /admin/usage. Grouped by model so the app can price each model.
create or replace function public.ai_usage_by_day(p_since timestamptz)
returns table (day date, model text, requests bigint, input_tokens bigint, output_tokens bigint, cache_read_tokens bigint, cache_write_tokens bigint)
language sql stable security definer set search_path = public as $$
  select (created_at at time zone 'Asia/Kolkata')::date, model, count(*), sum(input_tokens), sum(output_tokens), sum(cache_read_tokens), sum(cache_write_tokens)
  from ai_usage where created_at >= p_since group by 1, 2 order by 1 desc;
$$;

create or replace function public.ai_usage_by_user(p_since timestamptz, p_limit integer default 50)
returns table (user_id uuid, guest_key text, model text, requests bigint, input_tokens bigint, output_tokens bigint, cache_read_tokens bigint, cache_write_tokens bigint)
language sql stable security definer set search_path = public as $$
  select user_id, case when user_id is null then guest_key end, model, count(*), sum(input_tokens), sum(output_tokens), sum(cache_read_tokens), sum(cache_write_tokens)
  from ai_usage where created_at >= p_since
  group by 1, 2, 3 order by sum(input_tokens) + 5 * sum(output_tokens) desc limit greatest(1, least(p_limit, 500));
$$;

create or replace function public.ai_usage_by_school(p_since timestamptz)
returns table (school_id uuid, school_name text, model text, requests bigint, users bigint, input_tokens bigint, output_tokens bigint, cache_read_tokens bigint, cache_write_tokens bigint)
language sql stable security definer set search_path = public as $$
  select u.school_id, s.name, u.model, count(*), count(distinct u.user_id), sum(u.input_tokens), sum(u.output_tokens), sum(u.cache_read_tokens), sum(u.cache_write_tokens)
  from ai_usage u left join schools s on s.id = u.school_id
  where u.created_at >= p_since group by 1, 2, 3 order by 4 desc;
$$;

/* ---------------------------------------------------------------------- */
/* Payments and the tutor pass                                             */
/* ---------------------------------------------------------------------- */

-- Kept after account deletion (user_id set null) because payment records are needed for tax and refunds.
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  order_id text not null unique,
  payment_id text unique,
  amount integer not null, -- paise
  currency text not null default 'INR',
  status text not null default 'created' check (status in ('created', 'captured', 'failed', 'refunded')),
  source text, -- 'checkout' (signature verify) or 'webhook'
  pass_granted boolean not null default false,
  created_at timestamptz not null default now(),
  captured_at timestamptz
);
create index if not exists payments_user_idx on public.payments (user_id, created_at desc);
alter table public.payments enable row level security;
drop policy if exists "payments: read own" on public.payments;
create policy "payments: read own" on public.payments for select using (auth.uid() = user_id);

create table if not exists public.tutor_passes (
  user_id uuid primary key references auth.users (id) on delete cascade,
  valid_until timestamptz not null,
  last_payment_id text,
  updated_at timestamptz not null default now()
);
alter table public.tutor_passes enable row level security;
drop policy if exists "tutor_passes: read own" on public.tutor_passes;
create policy "tutor_passes: read own" on public.tutor_passes for select using (auth.uid() = user_id);

-- Record a captured payment and extend the payer's pass exactly once per payment id.
-- Called by both the checkout verify route and the payment.captured webhook; whichever
-- runs second is a no-op. Returns the pass's valid_until (null if the payer is unknown).
create or replace function public.grant_tutor_pass(p_order text, p_payment text, p_user uuid, p_amount integer, p_currency text, p_days integer, p_source text)
returns timestamptz
language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := p_user;
  v_granted boolean;
  v_until timestamptz;
begin
  -- Attach the payment to the order row made at checkout (if any).
  update payments set payment_id = p_payment where order_id = p_order and payment_id is null;
  insert into payments (order_id, payment_id, user_id, amount, currency, status, source, captured_at)
    values (p_order, p_payment, p_user, p_amount, coalesce(p_currency, 'INR'), 'captured', p_source, now())
    on conflict (payment_id) do update
      set status = 'captured',
          user_id = coalesce(payments.user_id, excluded.user_id),
          captured_at = coalesce(payments.captured_at, now()),
          source = coalesce(payments.source, excluded.source)
    returning payments.user_id, payments.pass_granted into v_user, v_granted;
  if v_user is null then return null; end if;
  if v_granted then
    select valid_until into v_until from tutor_passes where user_id = v_user;
    return v_until;
  end if;
  insert into tutor_passes (user_id, valid_until, last_payment_id)
    values (v_user, now() + make_interval(days => p_days), p_payment)
    on conflict (user_id) do update
      set valid_until = greatest(tutor_passes.valid_until, now()) + make_interval(days => p_days),
          last_payment_id = p_payment, updated_at = now()
    returning valid_until into v_until;
  update payments set pass_granted = true where payment_id = p_payment;
  return v_until;
end;
$$;

/* ---------------------------------------------------------------------- */
/* Consent records (DPDP Act 2023)                                         */
/* ---------------------------------------------------------------------- */

-- Append-only log: the latest row per (user, kind) is the current choice.
create table if not exists public.consent_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null check (kind in ('analytics', 'parental', 'terms')),
  granted boolean not null,
  policy_version text not null,
  -- Parental consent only: the guardian's contact, how it was given, and email verification.
  parent_email text,
  parent_phone text,
  method text,
  verify_token_hash text,
  verified_at timestamptz,
  given_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index if not exists consent_user_idx on public.consent_records (user_id, kind, created_at desc);
create unique index if not exists consent_token_idx on public.consent_records (verify_token_hash) where verify_token_hash is not null;
alter table public.consent_records enable row level security;
drop policy if exists "consent: read own" on public.consent_records;
create policy "consent: read own" on public.consent_records for select using (auth.uid() = user_id);

-- Server-only functions.
revoke all on function public.ai_usage_by_day(timestamptz) from public, anon, authenticated;
revoke all on function public.ai_usage_by_user(timestamptz, integer) from public, anon, authenticated;
revoke all on function public.ai_usage_by_school(timestamptz) from public, anon, authenticated;
revoke all on function public.grant_tutor_pass(text, text, uuid, integer, text, integer, text) from public, anon, authenticated;
grant execute on function public.ai_usage_by_day(timestamptz) to service_role;
grant execute on function public.ai_usage_by_user(timestamptz, integer) to service_role;
grant execute on function public.ai_usage_by_school(timestamptz) to service_role;
grant execute on function public.grant_tutor_pass(text, text, uuid, integer, text, integer, text) to service_role;
