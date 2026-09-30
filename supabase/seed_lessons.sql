-- Generated from the existing built-in lessons in script.js.
-- Safe to rerun: shared lesson duplicates are ignored.
insert into public.lessons (subject, chapter, title, lesson_type, teacher, video_url)
values
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 1 (Part 1)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/778bb29e-a38f-420b-808d-328bbe643997'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 1 (Part 2)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/fa72c13c-78e8-4939-968a-f006b0599c74'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 1 (Part 3)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/500b6ddf-4510-424a-9816-cbaaf9b1a4fc'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 1 (Part 4)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/d25bf7e4-ac10-4092-b0c8-b3a4d9c01db1'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 2 (Part 1)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/3ead1b7e-7ea9-48ee-9273-af67db708360'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 2 (Part 2)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/e2f9c4af-1c2f-4168-b1cd-242614478d13'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 2 (Part 3)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/7065196a-1d50-4a91-b579-c034fc639550'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 3 (Part 1)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/fa665e63-c91c-4094-b317-2259e20b276e'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 3 (Part 2)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/38ecdb9b-9240-44d4-99d3-2e2682cbd4c3'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 3 (Part 3)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/a1f03c0b-5c82-433e-8721-84dab6f9f8e5'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 4 (Part 1)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/1bb09037-4280-4a18-bb81-70b574ea32c2'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 4 (Part 2)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/17a79553-80b0-4dd6-93c9-4d14d2a0263c'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 4 (Part 3)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/cd3678dd-26d3-4ff2-942c-9a0863539220'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 5 (Part 1)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/98dc9bea-b20c-4f1d-97a1-1d6c7d4a45b5'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 5 (Part 2)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/d1266712-8060-42ba-9443-ffe2d753b635'),
  ('Physics', 'Chapter 1', 'Chapter 1 — Session 6 (Part 1)', 'Video', '', 'https://iframe.mediadelivery.net/embed/159923/0354b97d-56dc-41f3-8473-84f7fec6bd56'),
  ('Math', 'Chapter 1', 'Chapter 1 — Session 1 (Part 1)', 'Video', '', 'https://www.youtube.com/embed/PlBbG5erYHw'),
  ('Math', 'Chapter 1', 'Chapter 1 — Session 1 (Part 2)', 'Video', '', 'https://www.youtube.com/embed/WA1I5plJFEo'),
  ('Math', 'Chapter 1', 'Chapter 1 — Session 2', 'Video', '', 'https://player.vimeo.com/video/1223306027?h=cb7151aa05'),
  ('Math', 'Chapter 1', 'Chapter 1 — Session 3', 'Video', '', 'https://player.vimeo.com/video/1224218470?h=03c3d12e1b&autoplay=0&playsinline=1'),
  ('Math', 'Chapter 1', 'Chapter 1 — Revision', 'Revision', '', 'https://player.vimeo.com/video/1225023885?h=bb3d4ead29'),
  ('Math', 'Chapter 2', 'Chapter 2 — Session 1 (Part 1)', 'Video', '', 'https://player.vimeo.com/video/1227713343?h=be0b60db60'),
  ('Math', 'Chapter 2', 'Chapter 2 — Session 1 (Part 2)', 'Video', '', 'https://player.vimeo.com/video/1228141499?h=b294d1d757'),
  ('Math', 'Chapter 2', 'Chapter 2 — Session 1 (Part 3)', 'Video', '', 'https://player.vimeo.com/video/1229872487?h=a52cbfcc5d'),
  ('Math', 'Chapter 2', 'Chapter 2 — Session 2', 'Video', '', 'https://player.vimeo.com/video/1231219787?h=cbcf6ba189'),
  ('Arabic', null, 'Teacher Portal', 'Course Library', 'Mr. Mohamed Salah', 'https://bassthalk.com/userprofile/courses'),
  ('English', null, 'Teacher Portal', 'Course Library', 'Mr. Ahmed Tarek', 'https://ahmed-tarek.net/userprofile/courses/platform'),
  ('Chemistry', null, 'Teacher Portal', 'Course Library', 'Mr. Abd Elwahab', 'https://youchem.up.railway.app/student-dashboard')
on conflict do nothing;
