-- StudyOS Supabase schema. Run this whole file in the Supabase SQL Editor.
-- The browser app uses only the project's publishable key; RLS protects user data.

create extension if not exists pgcrypto;

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid references auth.users(id) on delete cascade,
  subject text not null,
  chapter text,
  title text not null,
  lesson_type text not null default 'Video',
  teacher text not null default '',
  video_url text not null default '',
  duration numeric(8, 2) check (duration is null or duration >= 0),
  created_at timestamptz not null default now()
);

create unique index if not exists lessons_shared_identity
  on public.lessons (subject, title, video_url) where owner_user_id is null;
create unique index if not exists lessons_owner_identity
  on public.lessons (owner_user_id, subject, title, video_url) where owner_user_id is not null;
create index if not exists lessons_owner_user_id_idx on public.lessons (owner_user_id);

create table if not exists public.completed_lessons (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed_at timestamptz not null default now(),
  constraint completed_lessons_user_lesson_unique unique (user_id, lesson_id)
);

create table if not exists public.study_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  topic text not null,
  record_type text not null check (
    record_type in ('Homework', 'Exam', 'Mistake', 'Flashcard', 'PDF', 'Important note')
  ),
  teacher text not null default '',
  duration numeric(8, 2) check (duration is null or duration >= 0),
  content text not null default '',
  score numeric(10, 2) check (score is null or score >= 0),
  max_score numeric(10, 2) check (max_score is null or max_score >= 0),
  book_page text not null default '',
  resource_url text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists study_records_user_created_idx
  on public.study_records (user_id, created_at desc);

create table if not exists public.study_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  title text not null,
  scheduled_date date not null,
  scheduled_time time,
  status text not null default 'Planned'
    check (status in ('Planned', 'In progress', 'Completed')),
  created_at timestamptz not null default now()
);
create index if not exists study_tasks_user_date_idx
  on public.study_tasks (user_id, scheduled_date, scheduled_time);

create table if not exists public.weekly_plan (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  day_of_week text not null check (
    day_of_week in ('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')
  ),
  subject text not null,
  task text not null,
  duration numeric(8, 2) check (duration is null or duration >= 0),
  constraint weekly_plan_user_item_unique unique (user_id, day_of_week, subject, task),
  created_at timestamptz not null default now()
);
create index if not exists weekly_plan_user_day_idx
  on public.weekly_plan (user_id, day_of_week);

-- Shared read-only templates let new accounts copy the current StudyOS weekly plan.
create table if not exists public.weekly_plan_templates (
  id uuid primary key default gen_random_uuid(),
  day_of_week text not null check (
    day_of_week in ('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')
  ),
  subject text not null,
  task text not null,
  duration numeric(8, 2) check (duration is null or duration >= 0),
  constraint weekly_plan_templates_unique unique (day_of_week, subject, task)
);

insert into public.weekly_plan_templates (day_of_week, subject, task, duration) values
  ('Saturday', 'Physics', 'Physics Part 1', null),
  ('Sunday', 'Math', 'Math Part 1', null),
  ('Sunday', 'English', 'English Part 1', null),
  ('Monday', 'Chemistry', 'Chemistry — 4h', 4),
  ('Monday', 'Arabic', 'Arabic Part 1', null),
  ('Tuesday', 'Math', 'Math Part 2', null),
  ('Tuesday', 'Physics', 'Physics Part 2', null),
  ('Wednesday', 'English', 'English Part 2', null),
  ('Thursday', 'Arabic', 'Arabic Part 2', null),
  ('Friday', 'Revision', 'Revision / Catch-up', null),
  ('Saturday', 'Questions', 'Daily questions for all subjects', null),
  ('Sunday', 'Questions', 'Daily questions for all subjects', null),
  ('Monday', 'Questions', 'Daily questions for all subjects', null),
  ('Tuesday', 'Questions', 'Daily questions for all subjects', null),
  ('Wednesday', 'Questions', 'Daily questions for all subjects', null),
  ('Thursday', 'Questions', 'Daily questions for all subjects', null),
  ('Friday', 'Questions', 'Daily questions for all subjects', null)
on conflict (day_of_week, subject, task) do nothing;

create table if not exists public.user_hidden_lessons (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists study_records_set_updated_at on public.study_records;
create trigger study_records_set_updated_at
before update on public.study_records
for each row execute function public.set_updated_at();

-- Lock down grants first, then give each client role only the operations it needs.
alter table public.lessons enable row level security;
alter table public.completed_lessons enable row level security;
alter table public.study_records enable row level security;
alter table public.study_tasks enable row level security;
alter table public.weekly_plan enable row level security;
alter table public.weekly_plan_templates enable row level security;
alter table public.user_hidden_lessons enable row level security;

revoke all on public.lessons, public.completed_lessons, public.study_records,
  public.study_tasks, public.weekly_plan, public.weekly_plan_templates,
  public.user_hidden_lessons from anon, authenticated;
grant usage on schema public to anon, authenticated;
grant select on public.lessons to anon, authenticated;
grant insert, update, delete on public.lessons to authenticated;
grant select, insert, delete on public.completed_lessons to authenticated;
grant select, insert, update, delete on public.study_records,
  public.study_tasks, public.weekly_plan to authenticated;
grant select on public.weekly_plan_templates to anon, authenticated;
grant select, insert, delete on public.user_hidden_lessons to authenticated;

drop policy if exists "Shared lessons and own lessons are readable" on public.lessons;
create policy "Shared lessons and own lessons are readable" on public.lessons
  for select to anon, authenticated
  using (owner_user_id is null or owner_user_id = (select auth.uid()));
drop policy if exists "Users create only their own lessons" on public.lessons;
create policy "Users create only their own lessons" on public.lessons
  for insert to authenticated
  with check (owner_user_id = (select auth.uid()));
drop policy if exists "Users update only their own lessons" on public.lessons;
create policy "Users update only their own lessons" on public.lessons
  for update to authenticated
  using (owner_user_id = (select auth.uid()))
  with check (owner_user_id = (select auth.uid()));
drop policy if exists "Users delete only their own lessons" on public.lessons;
create policy "Users delete only their own lessons" on public.lessons
  for delete to authenticated using (owner_user_id = (select auth.uid()));

drop policy if exists "Users read their completions" on public.completed_lessons;
create policy "Users read their completions" on public.completed_lessons
  for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Users add their completions" on public.completed_lessons;
create policy "Users add their completions" on public.completed_lessons
  for insert to authenticated
  with check (
    user_id = (select auth.uid())
    and exists (
      select 1 from public.lessons as lesson_row
      where lesson_row.id = completed_lessons.lesson_id
    )
  );
drop policy if exists "Users remove their completions" on public.completed_lessons;
create policy "Users remove their completions" on public.completed_lessons
  for delete to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Users read their study records" on public.study_records;
create policy "Users read their study records" on public.study_records
  for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Users create their study records" on public.study_records;
create policy "Users create their study records" on public.study_records
  for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Users update their study records" on public.study_records;
create policy "Users update their study records" on public.study_records
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
drop policy if exists "Users delete their study records" on public.study_records;
create policy "Users delete their study records" on public.study_records
  for delete to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Users read their tasks" on public.study_tasks;
create policy "Users read their tasks" on public.study_tasks
  for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Users create their tasks" on public.study_tasks;
create policy "Users create their tasks" on public.study_tasks
  for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Users update their tasks" on public.study_tasks;
create policy "Users update their tasks" on public.study_tasks
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
drop policy if exists "Users delete their tasks" on public.study_tasks;
create policy "Users delete their tasks" on public.study_tasks
  for delete to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Users read their weekly plan" on public.weekly_plan;
create policy "Users read their weekly plan" on public.weekly_plan
  for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Users create their weekly plan items" on public.weekly_plan;
create policy "Users create their weekly plan items" on public.weekly_plan
  for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Users update their weekly plan items" on public.weekly_plan;
create policy "Users update their weekly plan items" on public.weekly_plan
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
drop policy if exists "Users delete their weekly plan items" on public.weekly_plan;
create policy "Users delete their weekly plan items" on public.weekly_plan
  for delete to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Anyone can read weekly plan templates" on public.weekly_plan_templates;
create policy "Anyone can read weekly plan templates" on public.weekly_plan_templates
  for select to anon, authenticated using (true);

drop policy if exists "Users read their hidden lessons" on public.user_hidden_lessons;
create policy "Users read their hidden lessons" on public.user_hidden_lessons
  for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Users hide lessons for themselves" on public.user_hidden_lessons;
create policy "Users hide lessons for themselves" on public.user_hidden_lessons
  for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Users unhide lessons for themselves" on public.user_hidden_lessons;
create policy "Users unhide lessons for themselves" on public.user_hidden_lessons
  for delete to authenticated using (user_id = (select auth.uid()));
