-- Run this in Supabase → SQL Editor after creating a project.
-- Then add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to Vercel (and .env.local for dev).

create table if not exists public.shared_grill_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text not null default '焼肉好き',
  cut text not null,
  heat text not null,
  grill_time text not null,
  sauce text not null default '塩',
  note text not null,
  steps jsonb not null default '[]'::jsonb,
  likes integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.shared_grill_posts enable row level security;

create policy "shared_grill_posts_select_all"
  on public.shared_grill_posts for select
  using (true);

create policy "shared_grill_posts_insert_anon"
  on public.shared_grill_posts for insert
  with check (true);
