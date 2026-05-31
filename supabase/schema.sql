-- Líquen Events — Supabase schema
-- ---------------------------------------------------------------------------
-- Run this once in the Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- to create every table the back-office persists to. Column names match the
-- snake_case rows produced by src/lib/*-store.ts mappers exactly.
--
-- The app connects with the SERVICE ROLE key (server-only), which bypasses RLS.
-- We still enable RLS with NO public policies so the anon/public key can never
-- read or write these tables directly.
-- ---------------------------------------------------------------------------

-- Quotes (orçamentos). The full domain object lives in `data` (jsonb); the
-- flat columns exist for indexing/queries. selectColumns is "data".
create table if not exists public.quotes (
  id          text primary key,
  status      text,
  name        text,
  email       text,
  data        jsonb not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists quotes_created_at_idx on public.quotes (created_at desc);
create index if not exists quotes_status_idx     on public.quotes (status);

-- Proposals (propostas).
create table if not exists public.proposals (
  id           text primary key,
  quote_id     text,
  client_name  text,
  client_email text,
  currency     text default 'EUR',
  line_items   jsonb not null default '[]'::jsonb,
  vat_rate     numeric default 23,
  subtotal     numeric default 0,
  vat          numeric default 0,
  total        numeric default 0,
  valid_until  text,
  notes        text,
  status       text default 'rascunho',
  sent_at      text,
  created_at   timestamptz not null default now()
);
create index if not exists proposals_created_at_idx on public.proposals (created_at desc);
create index if not exists proposals_quote_id_idx    on public.proposals (quote_id);

-- Tasks (tarefas).
create table if not exists public.tasks (
  id           text primary key,
  title        text not null,
  done         boolean not null default false,
  priority     text default 'normal',
  due_date     text,
  quote_id     text,
  client_name  text,
  assignee     text,
  area         text,
  created_at   timestamptz not null default now()
);
create index if not exists tasks_created_at_idx on public.tasks (created_at desc);

-- Calendar events (calendário).
create table if not exists public.calendar_events (
  id          text primary key,
  event_date  text not null,
  title       text not null,
  kind        text default 'evento',
  event_time  text,
  note        text,
  created_at  timestamptz not null default now()
);
create index if not exists calendar_events_date_idx on public.calendar_events (event_date asc);

-- Suppliers (fornecedores).
create table if not exists public.suppliers (
  id          text primary key,
  name        text not null,
  category    text default 'Outro',
  email       text,
  phone       text,
  location    text,
  notes       text,
  created_at  timestamptz not null default now()
);
create index if not exists suppliers_name_idx on public.suppliers (name asc);

-- Web push subscriptions.
create table if not exists public.push_subscriptions (
  endpoint    text primary key,
  keys        jsonb not null,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Lock everything down: enable RLS, define no public policies. The server uses
-- the service_role key (which bypasses RLS), so the app keeps working while the
-- anon/public key is denied all access.
-- ---------------------------------------------------------------------------
alter table public.quotes             enable row level security;
alter table public.proposals          enable row level security;
alter table public.tasks              enable row level security;
alter table public.calendar_events    enable row level security;
alter table public.suppliers          enable row level security;
alter table public.push_subscriptions enable row level security;
