-- Contact form storage for the portfolio.
-- Run once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 100),
  email       text not null check (char_length(email) between 3 and 254),
  subject     text not null check (char_length(subject) between 1 and 150),
  message     text not null check (char_length(message) between 10 and 5000),
  -- true when the email notification to the owner was sent successfully
  notified    boolean not null default false
);

-- Newest messages first in the Table Editor and in queries.
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Row Level Security ON with no policies: the public (anon) key can
-- neither read nor write this table. Only the server, using the secret
-- key (which bypasses RLS), can insert. Visitors' data stays private.
alter table public.contact_messages enable row level security;
