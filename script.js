/* ========================================
   STUDYOS
   MAIN JAVASCRIPT
======================================== */

/* ========================================
   SUBJECTS
======================================== */

const subjects = [
  ["Math", "🌌", "Algebra, calculus & geometry"],

  ["Physics", "⚡", "Mechanics, electricity & waves"],

  ["Chemistry", "🧪", "Organic, inorganic & physical"],

  ["English", "💎", "Reading, writing & language"],

  ["Arabic", "🪶", "نحو، أدب، قراءة وبلاغة"],
];

/* ========================================
   LESSON DATABASE
======================================== */

const lessons = [
  /* ================= PHYSICS ================= */

  [
    "Physics",
    "Chapter 1 — Session 1 (Part 1)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/778bb29e-a38f-420b-808d-328bbe643997",
  ],

  [
    "Physics",
    "Chapter 1 — Session 1 (Part 2)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/fa72c13c-78e8-4939-968a-f006b0599c74",
  ],

  [
    "Physics",
    "Chapter 1 — Session 1 (Part 3)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/500b6ddf-4510-424a-9816-cbaaf9b1a4fc",
  ],

  [
    "Physics",
    "Chapter 1 — Session 1 (Part 4)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/d25bf7e4-ac10-4092-b0c8-b3a4d9c01db1",
  ],

  [
    "Physics",
    "Chapter 1 — Session 2 (Part 1)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/3ead1b7e-7ea9-48ee-9273-af67db708360",
  ],

  [
    "Physics",
    "Chapter 1 — Session 2 (Part 2)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/e2f9c4af-1c2f-4168-b1cd-242614478d13",
  ],

  [
    "Physics",
    "Chapter 1 — Session 2 (Part 3)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/7065196a-1d50-4a91-b579-c034fc639550",
  ],

  [
    "Physics",
    "Chapter 1 — Session 3 (Part 1)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/fa665e63-c91c-4094-b317-2259e20b276e",
  ],

  [
    "Physics",
    "Chapter 1 — Session 3 (Part 2)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/38ecdb9b-9240-44d4-99d3-2e2682cbd4c3",
  ],

  [
    "Physics",
    "Chapter 1 — Session 3 (Part 3)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/a1f03c0b-5c82-433e-8721-84dab6f9f8e5",
  ],

  [
    "Physics",
    "Chapter 1 — Session 4 (Part 1)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/1bb09037-4280-4a18-bb81-70b574ea32c2",
  ],

  [
    "Physics",
    "Chapter 1 — Session 4 (Part 2)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/17a79553-80b0-4dd6-93c9-4d14d2a0263c",
  ],

  [
    "Physics",
    "Chapter 1 — Session 4 (Part 3)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/cd3678dd-26d3-4ff2-942c-9a0863539220",
  ],

  [
    "Physics",
    "Chapter 1 — Session 5 (Part 1)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/98dc9bea-b20c-4f1d-97a1-1d6c7d4a45b5",
  ],

  [
    "Physics",
    "Chapter 1 — Session 5 (Part 2)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/d1266712-8060-42ba-9443-ffe2d753b635",
  ],

  [
    "Physics",
    "Chapter 1 — Session 6 (Part 1)",
    "Video",
    "",
    "https://iframe.mediadelivery.net/embed/159923/0354b97d-56dc-41f3-8473-84f7fec6bd56",
  ],

  /* ================= MATH ================= */

  [
    "Math",
    "Chapter 1 — Session 1 (Part 1)",
    "Video",
    "",
    "https://www.youtube.com/embed/PlBbG5erYHw",
  ],

  [
    "Math",
    "Chapter 1 — Session 1 (Part 2)",
    "Video",
    "",
    "https://www.youtube.com/embed/WA1I5plJFEo",
  ],

  [
    "Math",
    "Chapter 1 — Session 2",
    "Video",
    "",
    "https://player.vimeo.com/video/1223306027?h=cb7151aa05",
  ],

  [
    "Math",
    "Chapter 1 — Session 3",
    "Video",
    "",
    "https://player.vimeo.com/video/1224218470?h=03c3d12e1b&autoplay=0&playsinline=1",
  ],

  [
    "Math",
    "Chapter 1 — Revision",
    "Revision",
    "",
    "https://player.vimeo.com/video/1225023885?h=bb3d4ead29",
  ],

  [
    "Math",
    "Chapter 2 — Session 1 (Part 1)",
    "Video",
    "",
    "https://player.vimeo.com/video/1227713343?h=be0b60db60",
  ],

  [
    "Math",
    "Chapter 2 — Session 1 (Part 2)",
    "Video",
    "",
    "https://player.vimeo.com/video/1228141499?h=b294d1d757",
  ],

  [
    "Math",
    "Chapter 2 — Session 1 (Part 3)",
    "Video",
    "",
    "https://player.vimeo.com/video/1229872487?h=a52cbfcc5d",
  ],

  [
    "Math",
    "Chapter 2 — Session 2",
    "Video",
    "",
    "https://player.vimeo.com/video/1231219787?h=cbcf6ba189",
  ],

  /* ================= TEACHER PORTALS ================= */

  [
    "Arabic",
    "Teacher Portal",
    "Course Library",
    "Mr. Mohamed Salah",
    "https://bassthalk.com/userprofile/courses",
  ],

  [
    "English",
    "Teacher Portal",
    "Course Library",
    "Mr. Ahmed Tarek",
    "https://ahmed-tarek.net/userprofile/courses/platform",
  ],

  [
    "Chemistry",
    "Teacher Portal",
    "Course Library",
    "Mr. Abd Elwahab",
    "https://youchem.up.railway.app/student-dashboard",
  ],
];

const builtInLessons = lessons.slice();

// These local values are read only to migrate data from the previous version.
let savedLessons = [];
let deletedBuiltInLessons = [];
let legacyCompletedTitles = [];
try {
  const storedDeletedLessons = JSON.parse(
    localStorage.getItem("studyos_deleted_builtin_lessons") || "[]",
  );
  if (Array.isArray(storedDeletedLessons)) {
    deletedBuiltInLessons = storedDeletedLessons.filter(
      (lessonKey) => typeof lessonKey === "string",
    );
  }

  const storedLessons = JSON.parse(
    localStorage.getItem("studyos_lessons") || "[]",
  );
  if (Array.isArray(storedLessons)) {
    savedLessons = storedLessons.filter(
      (lesson) => Array.isArray(lesson) && lesson.length >= 5,
    );
    lessons.push(...savedLessons);
  }
  const storedCompleted = JSON.parse(
    localStorage.getItem("studyos_completed") || "[]",
  );
  if (Array.isArray(storedCompleted)) legacyCompletedTitles = storedCompleted;
} catch (error) {
  console.warn("Could not read legacy StudyOS data", error);
}
const legacySavedLessons = savedLessons.slice();

/* ========================================
   STORAGE
======================================== */

let completed = new Set();
let completionRecords = [];
let currentUser = null;
let supabaseClient = null;
let databaseRecords = [];
let studyTasks = [];
let weeklyPlanRows = [];
let lessonRows = [];
let lessonIdsByKey = new Map();
let hiddenLessonIds = new Set();
let backendErrorMessage = "";
let authMode = "signin";
let tutorConversation = [];
let tutorLoading = false;
let tutorRequestVersion = 0;

let currentVideoUrl = "";

/* ========================================
   HELPERS
======================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const SUPABASE_URL = "https://wskrspqpwbidccbnpfmm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_1e0H0ux_jFoLE5tqONMmuw_QySBhIg7";
const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

/* ========================================
   TOAST
======================================== */

function toast(message = "Saved") {
  const element = $("#toast");

  element.textContent = message;

  element.classList.add("show");

  setTimeout(() => {
    element.classList.remove("show");
  }, 1800);
}

function lessonArrayKey(lesson) {
  return JSON.stringify([
    lesson[0] || "",
    lesson[1] || "",
    lesson[2] || "",
    lesson[3] || "",
    lesson[4] || "",
  ]);
}

function lessonRowKey(lesson) {
  return lessonArrayKey([
    lesson.subject,
    lesson.title,
    lesson.lesson_type,
    lesson.teacher,
    lesson.video_url,
  ]);
}

function lessonArrayFromRow(lesson) {
  return [
    lesson.subject,
    lesson.title,
    lesson.lesson_type,
    lesson.teacher || "",
    lesson.video_url || "",
  ];
}

function lessonId(lesson) {
  return lessonIdsByKey.get(lessonArrayKey(lesson)) || null;
}

function isLessonHidden(lesson) {
  const id = lessonId(lesson);
  const isBuiltIn = builtInLessons.some(
    (builtInLesson) => lessonArrayKey(builtInLesson) === lessonArrayKey(lesson),
  );
  return (
    (id && hiddenLessonIds.has(id)) ||
    (isBuiltIn && deletedBuiltInLessons.includes(lessonArrayKey(lesson)))
  );
}

function visibleLessons() {
  return lessons.filter((lesson) => !isLessonHidden(lesson));
}

function setBackendNotice(message = "", kind = "info") {
  backendErrorMessage = kind === "error" ? message : "";
  const notice = $("#backendNotice");
  notice.textContent = message;
  notice.className = `backend-notice ${kind}`;
  notice.hidden = !message;
}

function friendlyBackendError(error) {
  const message = String(error?.message || "");
  if (
    error?.code === "42P01" ||
    error?.code === "PGRST205" ||
    /does not exist|schema cache/i.test(message)
  ) {
    return "StudyOS tables are not set up yet. Run supabase/schema.sql and supabase/seed_lessons.sql in the Supabase SQL Editor.";
  }
  if (/Failed to fetch|NetworkError|fetch/i.test(message)) {
    return "Supabase could not be reached. Check your connection and the Supabase project URL.";
  }
  return message || "The request could not be completed. Please try again.";
}

function reportBackendError(action, error) {
  console.error(`${action}:`, error);
  const message = friendlyBackendError(error);
  setBackendNotice(message, "error");
  toast(message);
}

function requireSignedIn() {
  if (currentUser) return true;
  setBackendNotice("Sign in to save and sync your personal study data.");
  openModal("authModal");
  return false;
}

function openModal(id) {
  const modal = $("#" + id);
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector("input:not([type=hidden]), select, textarea")?.focus();
}

function closeModal(id) {
  const modal = $("#" + id);
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function updateAuthUI() {
  const signedIn = Boolean(currentUser);
  $("#authUserLabel").textContent = signedIn
    ? currentUser.email || "Signed in"
    : "Signed out";
  $("#authButton").hidden = signedIn;
  $("#signOutButton").hidden = !signedIn;
  $("#authButton").textContent = "Sign in / Sign up";
  if (!backendErrorMessage) {
    setBackendNotice(
      signedIn
        ? "Your study data is syncing with Supabase."
        : "Sign in to sync your progress, tasks, and study records across devices.",
    );
  }
}

function initSupabase() {
  if (!window.supabase?.createClient) {
    setBackendNotice(
      "Supabase could not load. Check your connection; lesson browsing and theme settings are still available.",
      "error",
    );
    return;
  }

  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
  );

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    updateAuthUI();
    window.setTimeout(() => {
      handleAuthStateChange().catch((error) =>
        reportBackendError("Loading account data", error),
      );
    }, 0);
  });

  loadCurrentUser().catch((error) =>
    reportBackendError("Checking sign-in", error),
  );
}

let loadedUserId = null;

async function loadCurrentUser() {
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) throw error;
  currentUser = data.session?.user || null;
  updateAuthUI();
  await handleAuthStateChange();
}

async function handleAuthStateChange() {
  updateAuthUI();
  const nextUserId = currentUser?.id || null;
  if (nextUserId === loadedUserId) return;
  tutorRequestVersion += 1;
  setTutorBusy(false);
  tutorConversation = [];
  renderTutorConversation();
  $("#tutorStatus").textContent = "Ask a question to get started.";
  loadedUserId = nextUserId;

  if (!currentUser) {
    completed = new Set();
    completionRecords = [];
    databaseRecords = [];
    studyTasks = [];
    weeklyPlanRows = [];
    lessonRows = [];
    lessonIdsByKey = new Map();
    hiddenLessonIds = new Set();
    savedLessons = legacySavedLessons.slice();
    lessons.splice(0, lessons.length, ...builtInLessons, ...savedLessons);
    renderSubjects();
    renderLessons();
    renderDatabase();
    renderToday();
    renderCalendar();
    updatePlanStats();
    return;
  }

  try {
    await migrateLegacyLessons();
    await loadLessonCatalog();
    await migrateLegacyHiddenLessons();
    await loadHiddenLessons();
    await migrateLegacyCompletions();
    await loadCompletedLessons();
    await loadStudyRecords();
    await loadTasks();
    await loadWeeklyPlan();
    localStorage.removeItem("studyos_lessons");
    localStorage.removeItem("studyos_completed");
    localStorage.removeItem("studyos_deleted_builtin_lessons");
    deletedBuiltInLessons = [];
    legacySavedLessons.splice(0);
    legacyCompletedTitles = [];
    renderSubjects();
    renderLessons();
    renderDatabase();
    renderToday();
    renderCalendar();
    updatePlanStats();
    setBackendNotice(
      `Signed in as ${currentUser.email}. Your study data is synced.`,
    );
  } catch (error) {
    loadedUserId = null;
    throw error;
  }
}

async function migrateLegacyLessons() {
  for (const lesson of legacySavedLessons) {
    const { data: existing, error: lookupError } = await supabaseClient
      .from("lessons")
      .select("id")
      .eq("owner_user_id", currentUser.id)
      .eq("subject", lesson[0])
      .eq("title", lesson[1])
      .eq("video_url", lesson[4] || "")
      .maybeSingle();
    if (lookupError) throw lookupError;
    if (existing) continue;

    const { error } = await supabaseClient.from("lessons").insert({
      owner_user_id: currentUser.id,
      subject: lesson[0],
      chapter: lesson[1].match(/^Chapter\s+\d+/)?.[0] || "",
      title: lesson[1],
      lesson_type: lesson[2],
      teacher: lesson[3] || "",
      video_url: lesson[4] || "",
    });
    if (error) throw error;
  }
}

async function loadLessonCatalog() {
  const { data, error } = await supabaseClient
    .from("lessons")
    .select(
      "id, owner_user_id, subject, chapter, title, lesson_type, teacher, video_url, duration",
    );
  if (error) throw error;

  lessonRows = data || [];
  lessonIdsByKey = new Map(
    lessonRows.map((row) => [lessonRowKey(row), row.id]),
  );
  savedLessons = lessonRows
    .filter((row) => row.owner_user_id === currentUser.id)
    .map(lessonArrayFromRow);
  lessons.splice(0, lessons.length, ...builtInLessons, ...savedLessons);
}

async function migrateLegacyHiddenLessons() {
  for (const key of deletedBuiltInLessons) {
    const lesson = lessonRows.find((row) => lessonRowKey(row) === key);
    if (!lesson) continue;
    const { data: existing, error: lookupError } = await supabaseClient
      .from("user_hidden_lessons")
      .select("lesson_id")
      .eq("user_id", currentUser.id)
      .eq("lesson_id", lesson.id)
      .maybeSingle();
    if (lookupError) throw lookupError;
    if (existing) continue;
    const { error } = await supabaseClient.from("user_hidden_lessons").insert({
      user_id: currentUser.id,
      lesson_id: lesson.id,
    });
    if (error) throw error;
  }
}

async function loadHiddenLessons() {
  const { data, error } = await supabaseClient
    .from("user_hidden_lessons")
    .select("lesson_id")
    .eq("user_id", currentUser.id);
  if (error) throw error;
  hiddenLessonIds = new Set((data || []).map((row) => row.lesson_id));
}

async function migrateLegacyCompletions() {
  const idsToComplete = new Set();
  for (const lesson of lessons) {
    if (
      legacyCompletedTitles.includes(lesson[1]) &&
      lesson[2] !== "Course Library" &&
      lessonId(lesson)
    ) {
      idsToComplete.add(lessonId(lesson));
    }
  }

  for (const id of idsToComplete) {
    const { data: existing, error: lookupError } = await supabaseClient
      .from("completed_lessons")
      .select("id")
      .eq("user_id", currentUser.id)
      .eq("lesson_id", id)
      .maybeSingle();
    if (lookupError) throw lookupError;
    if (existing) continue;
    const { error } = await supabaseClient.from("completed_lessons").insert({
      user_id: currentUser.id,
      lesson_id: id,
    });
    if (error) throw error;
  }
}

async function loadCompletedLessons() {
  const { data, error } = await supabaseClient
    .from("completed_lessons")
    .select("id, lesson_id, completed_at")
    .eq("user_id", currentUser.id);
  if (error) throw error;
  completionRecords = data || [];
  completed = new Set(completionRecords.map((row) => row.lesson_id));
  renderCurrentStreak();
}

async function loadStudyRecords() {
  const { data, error } = await supabaseClient
    .from("study_records")
    .select("*")
    .eq("user_id", currentUser.id)
    .order("created_at", { ascending: false });
  if (error) throw error;
  databaseRecords = data || [];
}

async function loadTasks() {
  const { data, error } = await supabaseClient
    .from("study_tasks")
    .select("*")
    .eq("user_id", currentUser.id)
    .order("scheduled_date", { ascending: true })
    .order("scheduled_time", { ascending: true });
  if (error) throw error;
  studyTasks = data || [];
}

async function loadWeeklyPlan() {
  let { data, error } = await supabaseClient
    .from("weekly_plan")
    .select("*")
    .eq("user_id", currentUser.id);
  if (error) throw error;

  if (!data?.length) {
    const { data: templates, error: templateError } = await supabaseClient
      .from("weekly_plan_templates")
      .select("day_of_week, subject, task, duration");
    if (templateError) throw templateError;
    if (templates?.length) {
      const { error: insertError } = await supabaseClient
        .from("weekly_plan")
        .insert(templates.map((row) => ({ ...row, user_id: currentUser.id })));
      if (insertError && insertError.code !== "23505") throw insertError;
      ({ data, error } = await supabaseClient
        .from("weekly_plan")
        .select("*")
        .eq("user_id", currentUser.id));
      if (error) throw error;
    }
  }
  weeklyPlanRows = data || [];
}

function authErrorMessage(error) {
  const message = String(error?.message || "");
  if (/invalid login credentials/i.test(message)) {
    return "Email or password is incorrect.";
  }
  if (/already registered/i.test(message)) {
    return "This email already has an account. Sign in instead.";
  }
  return message || "Authentication failed. Please try again.";
}

function setAuthMode(mode) {
  authMode = mode;
  const signingIn = mode === "signin";
  $("#authDialogTitle").textContent = signingIn ? "Sign in" : "Create account";
  $("#authDialogDescription").textContent = signingIn
    ? "Sign in to sync your study data across devices."
    : "Create an account to keep your personal study data private and synced.";
  $("#authSubmitButton").textContent = signingIn ? "Sign in" : "Sign up";
  $("#authModeToggle").textContent = signingIn
    ? "Create account"
    : "I already have an account";
  $("#authForm").elements.password.autocomplete = signingIn
    ? "current-password"
    : "new-password";
  $("#authFormMessage").textContent = "";
}

function localDateString(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function getMonday(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayFromMonday = (monday.getDay() + 6) % 7;
  monday.setDate(monday.getDate() - dayFromMonday);
  return monday;
}

function safeHttpUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function recordPayload(form) {
  const fields = new FormData(form);
  const numberOrNull = (name) => {
    const value = String(fields.get(name) || "").trim();
    return value ? Number(value) : null;
  };
  return {
    subject: String(fields.get("subject") || "").trim(),
    topic: String(fields.get("topic") || "").trim(),
    record_type: String(fields.get("record_type") || "").trim(),
    teacher: String(fields.get("teacher") || "").trim(),
    duration: numberOrNull("duration"),
    content: String(fields.get("content") || "").trim(),
    score: numberOrNull("score"),
    max_score: numberOrNull("max_score"),
    book_page: String(fields.get("book_page") || "").trim(),
    resource_url: String(fields.get("resource_url") || "").trim(),
  };
}

function openRecordForm(record = null) {
  if (!requireSignedIn()) return;
  const form = $("#recordForm");
  form.reset();
  form.elements.id.value = record?.id || "";
  $("#recordDialogTitle").textContent = record ? "Edit record" : "Add a record";
  $("#recordFormMessage").textContent = "";
  if (record) {
    for (const field of [
      "subject",
      "topic",
      "record_type",
      "teacher",
      "duration",
      "content",
      "score",
      "max_score",
      "book_page",
      "resource_url",
    ]) {
      form.elements[field].value = record[field] ?? "";
    }
  }
  openModal("recordModal");
}

async function saveStudyRecord(event) {
  event.preventDefault();
  if (!requireSignedIn()) return;
  const form = event.currentTarget;
  const id = form.elements.id.value;
  const payload = recordPayload(form);
  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;
  $("#recordFormMessage").textContent = "Saving…";

  try {
    let savedRecord;
    if (id) {
      const { data, error } = await supabaseClient
        .from("study_records")
        .update(payload)
        .eq("id", id)
        .eq("user_id", currentUser.id)
        .select()
        .single();
      if (error) throw error;
      savedRecord = data;
      databaseRecords = databaseRecords.map((record) =>
        record.id === id ? savedRecord : record,
      );
    } else {
      const { data, error } = await supabaseClient
        .from("study_records")
        .insert({ ...payload, user_id: currentUser.id })
        .select()
        .single();
      if (error) throw error;
      savedRecord = data;
      databaseRecords.unshift(savedRecord);
    }
    closeModal("recordModal");
    renderDatabase();
    toast(id ? "Record updated" : "Record saved");
  } catch (error) {
    $("#recordFormMessage").textContent = friendlyBackendError(error);
    reportBackendError("Saving study record", error);
  } finally {
    submitButton.disabled = false;
  }
}

async function deleteStudyRecord(id) {
  if (!requireSignedIn()) return;
  const recordIndex = databaseRecords.findIndex((record) => record.id === id);
  if (recordIndex < 0) return;
  const record = databaseRecords[recordIndex];
  if (!confirm(`Delete the ${record.record_type} record “${record.topic}”?`))
    return;

  const userId = currentUser.id;
  databaseRecords.splice(recordIndex, 1);
  renderDatabase();

  try {
    const { data, error } = await supabaseClient
      .from("study_records")
      .delete()
      .eq("id", id)
      .eq("user_id", userId)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!data)
      throw new Error("This record was not found or is no longer available.");
    toast("Record deleted");
  } catch (error) {
    if (currentUser?.id === userId) {
      databaseRecords.splice(recordIndex, 0, record);
      renderDatabase();
    }
    reportBackendError("Deleting study record", error);
  }
}

function openTaskForm() {
  if (!requireSignedIn()) return;
  const form = $("#taskForm");
  form.reset();
  form.elements.scheduled_date.value = localDateString(new Date());
  form.elements.status.value = "Planned";
  $("#taskFormMessage").textContent = "";
  openModal("taskModal");
}

async function addTask(event) {
  event.preventDefault();
  if (!requireSignedIn()) return;
  const form = event.currentTarget;
  const fields = new FormData(form);
  const payload = {
    user_id: currentUser.id,
    title: String(fields.get("title") || "").trim(),
    subject: String(fields.get("subject") || "").trim(),
    scheduled_date: String(fields.get("scheduled_date") || ""),
    scheduled_time: String(fields.get("scheduled_time") || "") || null,
    status: String(fields.get("status") || "Planned"),
  };
  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;
  $("#taskFormMessage").textContent = "Saving…";
  try {
    const { data, error } = await supabaseClient
      .from("study_tasks")
      .insert(payload)
      .select()
      .single();
    if (error) throw error;
    studyTasks.push(data);
    studyTasks.sort((a, b) =>
      `${a.scheduled_date}${a.scheduled_time || ""}`.localeCompare(
        `${b.scheduled_date}${b.scheduled_time || ""}`,
      ),
    );
    closeModal("taskModal");
    renderToday();
    renderCalendar();
    updatePlanStats();
    toast("Task saved");
  } catch (error) {
    $("#taskFormMessage").textContent = friendlyBackendError(error);
    reportBackendError("Saving task", error);
  } finally {
    submitButton.disabled = false;
  }
}

async function updateTask(id, changes) {
  if (!requireSignedIn()) {
    renderToday();
    renderCalendar();
    return;
  }
  const previous = studyTasks.find((task) => task.id === id);
  if (!previous) return;
  const previousStatus = previous.status;
  Object.assign(previous, changes);
  renderToday();
  renderCalendar();
  updatePlanStats();
  try {
    const { data, error } = await supabaseClient
      .from("study_tasks")
      .update(changes)
      .eq("id", id)
      .eq("user_id", currentUser.id)
      .select()
      .single();
    if (error) throw error;
    Object.assign(previous, data);
    renderToday();
    renderCalendar();
    updatePlanStats();
  } catch (error) {
    previous.status = previousStatus;
    renderToday();
    renderCalendar();
    updatePlanStats();
    reportBackendError("Updating task", error);
  }
}

async function deleteTask(id) {
  if (!requireSignedIn()) return;
  const taskIndex = studyTasks.findIndex((task) => task.id === id);
  if (taskIndex < 0) return;
  const task = studyTasks[taskIndex];
  if (!confirm(`Delete the task “${task.title}”?`)) return;

  const userId = currentUser.id;
  studyTasks.splice(taskIndex, 1);
  renderToday();
  renderCalendar();
  updatePlanStats();

  try {
    const { data, error } = await supabaseClient
      .from("study_tasks")
      .delete()
      .eq("id", id)
      .eq("user_id", userId)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!data)
      throw new Error("This task was not found or is no longer available.");
    toast("Task deleted");
  } catch (error) {
    if (currentUser?.id === userId) {
      studyTasks.splice(taskIndex, 0, task);
      renderToday();
      renderCalendar();
      updatePlanStats();
    }
    reportBackendError("Deleting task", error);
  }
}

/* ========================================
   THEME
======================================== */

function loadTheme() {
  const savedTheme = localStorage.getItem("studyos_theme") || "dark";

  document.documentElement.dataset.theme = savedTheme;

  updateThemeButton();
}

function updateThemeButton() {
  const theme = document.documentElement.dataset.theme;

  const button = $("#themeBtn");

  if (button) {
    button.textContent = theme === "dark" ? "☀️" : "🌙";

    button.title =
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  }
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;

  const next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;

  localStorage.setItem("studyos_theme", next);

  updateThemeButton();

  toast(next === "dark" ? "Dark mode enabled 🌙" : "Light mode enabled ☀️");
}

/* ========================================
   SUBJECT PROGRESS
======================================== */

function subjectProgress(subject) {
  const subjectLessons = visibleLessons().filter(
    (lesson) => lesson[0] === subject && lesson[2] !== "Course Library",
  );

  const trackableLessons = subjectLessons.filter((lesson) => lessonId(lesson));
  if (!trackableLessons.length) {
    return 0;
  }

  const completedLessons = trackableLessons.filter((lesson) =>
    completed.has(lessonId(lesson)),
  );

  return Math.round((completedLessons.length / trackableLessons.length) * 100);
}

/* ========================================
   RENDER SUBJECTS
======================================== */

function renderSubjects() {
  const container = $("#subjectCards");

  container.innerHTML = subjects
    .map((subject) => {
      const name = subject[0];
      const icon = subject[1];
      const description = subject[2];

      const progress = subjectProgress(name);

      return `

                <div
                    class="card"
                    data-subject-card="${name}">

                    <div class="subject-icon">
                        ${icon}
                    </div>

                    <h3>
                        ${name}
                    </h3>

                    <p>
                        ${description}
                    </p>

                    <div class="bar">

                        <span
                            style="width:${progress}%">
                        </span>

                    </div>

                    <div class="pct">

                        <span>
                            ${progress}% complete
                        </span>

                        <span>
                            →
                        </span>

                    </div>

                </div>

            `;
    })
    .join("");

  $$("[data-subject-card]").forEach((card) => {
    card.addEventListener("click", () => {
      openLessons(card.dataset.subjectCard);
    });
  });

  renderProgressCards();

  updateProgress();
}

/* ========================================
   PROGRESS CARDS
======================================== */

function renderProgressCards() {
  $("#progressCards").innerHTML = subjects
    .map((subject) => {
      const name = subject[0];
      const icon = subject[1];

      const progress = subjectProgress(name);

      return `

                <div class="card">

                    <div class="subject-icon">
                        ${icon}
                    </div>

                    <h3>
                        ${name}
                    </h3>

                    <p>
                        ${progress}%
                        of listed lessons completed
                    </p>

                    <div class="bar">

                        <span
                            style="width:${progress}%">
                        </span>

                    </div>

                </div>

            `;
    })
    .join("");
}

/* ========================================
   PROGRESS
======================================== */

function updateProgress() {
  const videoLessons = visibleLessons().filter(
    (lesson) => lesson[2] !== "Course Library" && lessonId(lesson),
  );

  const completedLessons = videoLessons.filter((lesson) =>
    completed.has(lessonId(lesson)),
  );

  const total = videoLessons.length;

  const done = completedLessons.length;

  const percentage = total ? Math.round((done / total) * 100) : 0;

  $("#overallProgress").textContent = percentage + "%";

  $("#overallBar").style.width = percentage + "%";

  $("#completedCount").textContent = done;
  $("#yearProgressBar").style.width = percentage + "%";
  $("#yearProgressText").textContent = total
    ? `${percentage}% of listed lessons completed`
    : "Sign in and load the lesson seed to track progress";
  renderCurrentStreak();
}

function renderCurrentStreak() {
  const completedDays = new Set(
    completionRecords.map((record) =>
      localDateString(new Date(record.completed_at)),
    ),
  );
  const today = new Date();
  let cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (!completedDays.has(localDateString(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let streak = 0;
  while (completedDays.has(localDateString(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  $("#dayStreakValue").textContent = streak;
  $("#progressStreakValue").textContent =
    `${streak} day${streak === 1 ? "" : "s"}`;
}

/* ========================================
   TODAY TABLE
======================================== */

function renderToday() {
  const today = localDateString(new Date());
  const todaysTasks = studyTasks
    .filter((task) => task.scheduled_date === today)
    .sort((a, b) =>
      String(a.scheduled_time || "").localeCompare(
        String(b.scheduled_time || ""),
      ),
    );

  const taskRows = todaysTasks.length
    ? todaysTasks
        .map(
          (task) => `
        <tr>
          <td><input class="check task-check" type="checkbox" data-task-id="${task.id}" ${task.status === "Completed" ? "checked" : ""} aria-label="Mark ${escapeHTML(task.title)} complete"></td>
          <td>${escapeHTML((task.scheduled_time || "").slice(0, 5) || "—")}</td>
          <td><b>${escapeHTML(task.subject)}</b></td>
          <td>${escapeHTML(task.title)}</td>
          <td><span style="color:var(--orange)">● ${escapeHTML(task.status)}</span></td>
        </tr>
      `,
        )
        .join("")
    : `<tr><td colspan="5" class="empty-cell">No tasks scheduled for today.</td></tr>`;

  $("#todayTable").innerHTML = `${taskRows}
    <tr>
      <td>—</td><td>Daily</td><td><b>Questions</b></td>
      <td>Daily questions — all subjects</td>
      <td><span style="color:var(--orange)">● Daily</span></td>
    </tr>`;

  $$(".task-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateTask(checkbox.dataset.taskId, {
        status: checkbox.checked ? "Completed" : "Planned",
      });
    });
  });

  $("#plannedTodayValue").textContent =
    `${todaysTasks.length} task${todaysTasks.length === 1 ? "" : "s"}`;
  $("#remainingTasksValue").textContent = todaysTasks.filter(
    (task) => task.status !== "Completed",
  ).length;
}

/* ========================================
   LESSON RENDERING
======================================== */

function renderLessons() {
  const search = $("#lessonSearch").value.toLowerCase().trim();

  const filter = $("#subjectFilter").value;

  const filtered = visibleLessons().filter((lesson) => {
    const matchesSubject = filter === "All subjects" || lesson[0] === filter;

    const matchesSearch = lesson.join(" ").toLowerCase().includes(search);

    return matchesSubject && matchesSearch;
  });

  const grid = $("#lessonGrid");

  if (!filtered.length) {
    grid.innerHTML = `
            <p style="color:var(--muted)">
                No lessons found.
            </p>
        `;

    return;
  }

  grid.innerHTML = filtered
    .map((lesson, index) => {
      const subject = escapeHTML(lesson[0]);

      const title = escapeHTML(lesson[1]);

      const type = escapeHTML(lesson[2]);

      const teacher = escapeHTML(lesson[3]);

      const url = escapeHTML(lesson[4]);

      const isPortal = type === "Course Library";

      const currentLessonId = lessonId(lesson);
      const done = currentLessonId ? completed.has(currentLessonId) : false;

      return `

                    <article
                        class="lesson ${subject.toLowerCase()}">

                        <div class="thumb">

                            <b>
                                ${subject}
                                ·
                                ${title}
                            </b>


                            ${
                              isPortal
                                ? ""
                                : `

                                    <button
                                        class="play"
                                        data-video="${index}"
                                        title="Play lesson">

                                        ▶

                                    </button>

                                `
                            }

                        </div>


                        <div class="lesson-body">

                            <span class="tag">
                                ${type}
                            </span>


                            <h3>
                                ${title}
                            </h3>


                            <small>

                                ${
                                  isPortal
                                    ? teacher
                                    : type + " · Chapter lesson"
                                }

                            </small>


                            ${
                              isPortal
                                ? `

                                    <div
                                        style="margin-top:12px">

                                        <button
                                            class="primary portal-btn"
                                            data-url="${url}">

                                            Open portal ↗

                                        </button>

                                    </div>

                                `
                                : `

                                    <label
                                        style="
                                            display:flex;
                                            gap:8px;
                                            align-items:center;
                                            margin-top:12px;
                                            font-size:12px;
                                            color:var(--muted)
                                        ">

                                        <input
                                            class="check lesson-check"
                                            type="checkbox"
                                            data-lesson-id="${currentLessonId || ""}"
                                            ${done ? "checked" : ""}
                                        >

                                        Completed

                                    </label>

                                `
                            }

                            ${
                              savedLessons.includes(lesson) ||
                              lesson[2] === "Video"
                                ? `
                                    <button
                                        class="lesson-delete"
                                        data-lesson-index="${lessons.indexOf(lesson)}"
                                        type="button"
                                        title="Delete lesson"
                                        aria-label="Delete lesson">
                                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 7h16" />
                                            <path d="M10 11v6M14 11v6" />
                                            <path d="m6 7 1 13h10l1-13M9 7V4h6v3" />
                                        </svg>
                                    </button>
                                `
                                : ""
                            }

                        </div>

                    </article>

                `;
    })
    .join("");

  /* PLAY BUTTONS */

  $$(".play").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.video);

      const lesson = filtered[index];

      openVideo(lesson[4], lesson[1]);
    });
  });

  /* PORTAL BUTTONS */

  $$(".portal-btn").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(button.dataset.url, "_blank", "noopener,noreferrer");
    });
  });

  /* COMPLETION */

  $$(".lesson-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      toggleLesson(checkbox.dataset.lessonId, checkbox.checked);
    });
  });

  /* DELETE USER-CREATED LESSONS AND BUILT-IN VIDEOS */

  $$(".lesson-delete").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonIndex = Number(button.dataset.lessonIndex);
      const lesson = lessons[lessonIndex];
      if (!lesson) return;

      const isSavedLesson = savedLessons.includes(lesson);
      const isBuiltInVideo = !isSavedLesson && lesson[2] === "Video";
      if (!isSavedLesson && !isBuiltInVideo) return;

      if (!confirm(`Delete “${lesson[1]}”?`)) return;
      deleteLesson(lesson, isSavedLesson);
    });
  });

  updateProgress();
}

/* ========================================
   LESSON COMPLETION
======================================== */

async function toggleLesson(id, isCompleted) {
  if (!requireSignedIn()) {
    renderLessons();
    return;
  }
  if (!id) {
    setBackendNotice(
      "Run the lesson seed SQL before saving lesson progress.",
      "error",
    );
    renderLessons();
    return;
  }

  const wasCompleted = completed.has(id);
  if (isCompleted) completed.add(id);
  else completed.delete(id);
  renderLessons();
  renderSubjects();

  try {
    if (isCompleted) {
      const { data, error } = await supabaseClient
        .from("completed_lessons")
        .insert({ user_id: currentUser.id, lesson_id: id })
        .select("id, lesson_id, completed_at")
        .single();
      if (error && error.code !== "23505") throw error;
      if (data) completionRecords.push(data);
    } else {
      const { error } = await supabaseClient
        .from("completed_lessons")
        .delete()
        .eq("user_id", currentUser.id)
        .eq("lesson_id", id);
      if (error) throw error;
      completionRecords = completionRecords.filter(
        (record) => record.lesson_id !== id,
      );
    }
    renderCurrentStreak();
    toast(isCompleted ? "Lesson completed ✓" : "Lesson reopened");
  } catch (error) {
    if (wasCompleted) completed.add(id);
    else completed.delete(id);
    renderLessons();
    renderSubjects();
    reportBackendError("Saving lesson progress", error);
  }
}

async function deleteLesson(lesson, isSavedLesson) {
  if (!requireSignedIn()) return;
  const id = lessonId(lesson);
  if (!id) {
    setBackendNotice(
      "Run the lesson seed SQL before deleting lessons.",
      "error",
    );
    return;
  }

  try {
    if (isSavedLesson) {
      const { error } = await supabaseClient
        .from("lessons")
        .delete()
        .eq("id", id)
        .eq("owner_user_id", currentUser.id);
      if (error) throw error;
      savedLessons = savedLessons.filter(
        (savedLesson) => lessonArrayKey(savedLesson) !== lessonArrayKey(lesson),
      );
      lessons.splice(0, lessons.length, ...builtInLessons, ...savedLessons);
      lessonIdsByKey.delete(lessonArrayKey(lesson));
      completed.delete(id);
      completionRecords = completionRecords.filter(
        (record) => record.lesson_id !== id,
      );
    } else {
      const { error } = await supabaseClient
        .from("user_hidden_lessons")
        .insert({
          user_id: currentUser.id,
          lesson_id: id,
        });
      if (error && error.code !== "23505") throw error;
      hiddenLessonIds.add(id);
    }
    renderLessons();
    renderSubjects();
    renderCurrentStreak();
    toast("Lesson removed from your library");
  } catch (error) {
    reportBackendError("Deleting lesson", error);
  }
}

/* ========================================
   OPEN LESSON
======================================== */

function normalizeVideoUrl(url) {
  try {
    const u = new URL(url, location.href);
    const host = u.hostname.toLowerCase();

    // youtu.be/VIDEO_ID
    if (host === "youtu.be") {
      const id = u.pathname.slice(1).split("/")[0];

      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    // youtube.com/watch?v=VIDEO_ID
    if (host.includes("youtube.com") && u.pathname === "/watch") {
      const id = u.searchParams.get("v");

      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    // youtube.com/shorts/VIDEO_ID
    if (host.includes("youtube.com") && u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/")[2];

      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    // Already an embed URL
    if (host.includes("youtube.com") && u.pathname.startsWith("/embed/")) {
      return u.href;
    }

    return url;
  } catch (error) {
    return url;
  }
}

function prepareVideoUrl(url) {
  const videoUrl = normalizeVideoUrl(url);

  try {
    const u = new URL(videoUrl, location.href);
    const host = u.hostname.toLowerCase();

    // YouTube
    if (host.includes("youtube.com")) {
      u.searchParams.set("playsinline", "1");

      // Only add origin when StudyOS is running through
      // http/https, such as VS Code Live Server.
      if (location.protocol === "http:" || location.protocol === "https:") {
        u.searchParams.set("origin", location.origin);
      }

      return {
        url: u.toString(),
        provider: "youtube",
      };
    }

    // Physics MediaDelivery videos
    if (host.includes("mediadelivery.net")) {
      return {
        url: u.toString(),
        provider: "mediadelivery",
      };
    }

    // Vimeo / other providers
    return {
      url: u.toString(),
      provider: "other",
    };
  } catch (error) {
    return {
      url: videoUrl,
      provider: "other",
    };
  }
}

function openVideo(url, title) {
  const prepared = prepareVideoUrl(url);

  currentVideoUrl = prepared.url;

  $("#videoTitle").textContent = title;

  const frame = $("#videoFrame");

  frame.src = prepared.url;

  // IMPORTANT:
  // YouTube needs the referrer.
  // MediaDelivery Physics videos worked with no-referrer.
  if (prepared.provider === "mediadelivery") {
    frame.referrerPolicy = "no-referrer";
  } else {
    frame.referrerPolicy = "strict-origin-when-cross-origin";
  }

  frame.setAttribute(
    "allow",
    "autoplay; fullscreen; picture-in-picture; encrypted-media",
  );

  $("#videoFallback").style.display = "block";

  $("#videoModal").classList.add("show");

  document.body.style.overflow = "hidden";
}

/* ========================================
   CLOSE VIDEO
======================================== */

function closeVideo() {
  $("#videoFrame").src = "";

  $("#videoModal").classList.remove("show");

  document.body.style.overflow = "";

  currentVideoUrl = "";
}

/* ========================================
   DATABASE
======================================== */

function renderDatabase() {
  const search = $("#dbSearch").value.toLowerCase().trim();

  const filtered = databaseRecords.filter((record) =>
    Object.values(record).join(" ").toLowerCase().includes(search),
  );

  $("#dbTable").innerHTML = filtered.length
    ? filtered
        .map((record) => {
          const resourceUrl = safeHttpUrl(record.resource_url);
          const score =
            record.score == null
              ? "—"
              : `${record.score}${record.max_score == null ? "" : ` / ${record.max_score}`}`;
          return `
          <tr>
            <td><b>${escapeHTML(record.subject)}</b></td>
            <td>${escapeHTML(record.topic)}</td>
            <td>${escapeHTML(record.record_type)}</td>
            <td>${escapeHTML(record.teacher || "—")}</td>
            <td>${record.duration == null ? "—" : `${escapeHTML(record.duration)} min`}</td>
            <td>${escapeHTML(score)}</td>
            <td class="record-content">${escapeHTML(record.content || "—")}</td>
            <td>${escapeHTML(record.book_page || "—")}</td>
            <td>${resourceUrl ? `<a href="${escapeHTML(resourceUrl)}" target="_blank" rel="noopener noreferrer">Open ↗</a>` : "—"}</td>
            <td class="record-actions">
              <button class="icon-btn record-edit" type="button" data-record-id="${record.id}" aria-label="Edit record">Edit</button>
              <button class="icon-btn record-delete" type="button" data-record-id="${record.id}" aria-label="Delete ${escapeHTML(record.record_type)} record: ${escapeHTML(record.topic)}">Delete</button>
            </td>
          </tr>`;
        })
        .join("")
    : `<tr><td colspan="10" class="empty-cell">${currentUser ? "No study records yet. Add your first record." : "Sign in to view your private study records."}</td></tr>`;

  $$(".record-edit").forEach((button) => {
    button.addEventListener("click", () => {
      const record = databaseRecords.find(
        (item) => item.id === button.dataset.recordId,
      );
      if (record) openRecordForm(record);
    });
  });
  $$(".record-delete").forEach((button) => {
    button.addEventListener("click", () =>
      deleteStudyRecord(button.dataset.recordId),
    );
  });
}

/* ========================================
   CALENDAR
======================================== */

function renderCalendar() {
  const weekStart = getMonday(new Date());
  const activeDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  $("#calendar").innerHTML = WEEKDAYS.map((day, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    const dateText = localDateString(date);
    const planItems = weeklyPlanRows.filter((item) => item.day_of_week === day);
    const dayTasks = studyTasks.filter(
      (task) => task.scheduled_date === dateText,
    );
    const planMarkup = planItems
      .map(
        (item) =>
          `<div class="task"><b>${escapeHTML(item.subject)}</b> · ${escapeHTML(item.task)}${item.duration ? ` · ${escapeHTML(item.duration)}h` : ""}</div>`,
      )
      .join("");
    const taskMarkup = dayTasks
      .map(
        (task) => `
      <div class="task task-entry ${task.status === "Completed" ? "task-done" : ""}">
        <label><input class="check task-check" type="checkbox" data-task-id="${task.id}" ${task.status === "Completed" ? "checked" : ""} aria-label="Mark ${escapeHTML(task.title)} complete">
        ${escapeHTML((task.scheduled_time || "").slice(0, 5))} ${escapeHTML(task.subject)} · ${escapeHTML(task.title)}</label>
        <button class="task-delete" type="button" data-task-id="${task.id}" aria-label="Delete task: ${escapeHTML(task.title)}">Delete</button>
      </div>`,
      )
      .join("");
    return `
      <div class="day ${day === activeDay ? "active" : ""}">
        <b>${day.slice(0, 3)} <small>${dateText.slice(5)}</small></b>
        ${planMarkup || ""}
        ${taskMarkup || ""}
        <div class="task daily-questions">❓ Daily questions for all subjects</div>
      </div>`;
  }).join("");

  $$(".task-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateTask(checkbox.dataset.taskId, {
        status: checkbox.checked ? "Completed" : "Planned",
      });
    });
  });
  $$(".task-delete").forEach((button) => {
    button.addEventListener("click", () => deleteTask(button.dataset.taskId));
  });
}

function updatePlanStats() {
  const weekStart = getMonday(new Date());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  const startText = localDateString(weekStart);
  const endText = localDateString(weekEnd);
  const thisWeeksTasks = studyTasks.filter(
    (task) =>
      task.scheduled_date >= startText && task.scheduled_date <= endText,
  );
  const completedCount = thisWeeksTasks.filter(
    (task) => task.status === "Completed",
  ).length;
  const count = thisWeeksTasks.length;
  $("#weeklyPlanCount").textContent = weeklyPlanRows.length;
  $("#weeklyTaskDone").textContent = completedCount;
  $("#weeklyTaskProgress").textContent = count
    ? `${Math.round((completedCount / count) * 100)}%`
    : "0%";
}

/* ========================================
   AI STUDY TUTOR
======================================== */

function normalizeTutorMarkdown(content) {
  const rows = String(content ?? "")
    .replace(/\r\n?/g, "\n")
    .split("\n");
  let insideFence = false;

  return rows
    .map((row) => {
      if (/^\s*```/.test(row)) {
        insideFence = !insideFence;
        return row;
      }
      if (insideFence) return row;

      // Protect math and inline code while fixing only common escaped Markdown.
      const protectedValues = [];
      let normalized = row.replace(
        /(`+)(.*?)\1|\$\$.*?\$\$|\$[^$\n]+\$|\\\[.*?\\\]|\\\(.*?\\\)/g,
        (match) => {
          const marker = `\u0000${protectedValues.length}\u0000`;
          protectedValues.push(match);
          return marker;
        },
      );

      normalized = normalized
        .replace(/^(\s*)\\+(?=(?:#{1,3}|>|[-+*]|\d+[.)])\s?)/, "$1")
        .replace(/\\\*\\\*([\s\S]+?)\\\*\\\*/g, "**$1**")
        .replace(/\\\*([^*\n]+?)\\\*/g, "*$1*")
        .replace(/\\_\\_([^_\n]+?)\\_\\_/g, "__$1__");

      return normalized.replace(
        /\u0000(\d+)\u0000/g,
        (_match, index) => protectedValues[Number(index)],
      );
    })
    .join("\n");
}

function renderTutorInlineMarkdown(text) {
  const protectedValues = [];
  let source = String(text ?? "").replace(
    /(`+)(.*?)\1|\$\$.*?\$\$|\$[^$\n]+\$|\\\[.*?\\\]|\\\(.*?\\\)/g,
    (match) => {
      const marker = `\u0000${protectedValues.length}\u0000`;
      protectedValues.push({ match, isCode: match.startsWith("`") });
      return marker;
    },
  );

  source = escapeHTML(source)
    .replace(/\*\*([^*\n]+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_\n]+?)__/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*([^*\n]+?)\*(?=$|[\s).,!?:;])/g, "$1<em>$2</em>")
    .replace(/(^|[\s(])_([^_\n]+?)_(?=$|[\s).,!?:;])/g, "$1<em>$2</em>")
    .replace(/\u0000(\d+)\u0000/g, (_match, index) => {
      const item = protectedValues[Number(index)];
      return item.isCode
        ? `<code class="ai-inline-code">${escapeHTML(item.match.replace(/^`+|`+$/g, ""))}</code>`
        : escapeHTML(item.match);
    });

  return source;
}

function renderTutorMarkdown(content) {
  const lines = normalizeTutorMarkdown(content).split("\n");
  const blocks = [];
  let paragraph = [];
  let listType = "";
  let listItems = [];
  let quoteLines = [];
  let codeLines = [];
  let codeLanguage = "";
  let insideFence = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(
      `<p>${paragraph.map(renderTutorInlineMarkdown).join("<br>")}</p>`,
    );
    paragraph = [];
  };
  const flushList = () => {
    if (!listType) return;
    blocks.push(
      `<${listType}>${listItems.map((item) => `<li>${renderTutorInlineMarkdown(item)}</li>`).join("")}</${listType}>`,
    );
    listType = "";
    listItems = [];
  };
  const flushQuote = () => {
    if (!quoteLines.length) return;
    blocks.push(
      `<blockquote>${quoteLines.map(renderTutorInlineMarkdown).join("<br>")}</blockquote>`,
    );
    quoteLines = [];
  };

  for (const line of lines) {
    const fence = line.match(/^\s*```\s*([\w+-]*)\s*$/);
    if (fence) {
      flushParagraph();
      flushList();
      flushQuote();
      if (insideFence) {
        const code = codeLines.join("\n");
        if (["math", "perl"].includes(codeLanguage.toLowerCase())) {
          // Keep LaTeX backslashes intact; only the fixed delimiters are added here.
          blocks.push(
            `<div class="ai-math-block">\\[${escapeHTML(code)}\\]</div>`,
          );
        } else {
          blocks.push(
            `<pre class="ai-code-block"><code>${escapeHTML(code)}</code></pre>`,
          );
        }
        codeLines = [];
        codeLanguage = "";
      } else {
        codeLanguage = fence[1];
      }
      insideFence = !insideFence;
      continue;
    }
    if (insideFence) {
      codeLines.push(line);
      continue;
    }

    const heading = line.match(/^\s*(#{1,3})\s+(.+?)\s*#*\s*$/);
    const unordered = line.match(/^\s*[-+*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    const quote = line.match(/^\s*>\s?(.*)$/);

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushQuote();
    } else if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      const level = heading[1].length;
      blocks.push(
        `<h${level}>${renderTutorInlineMarkdown(heading[2])}</h${level}>`,
      );
    } else if (unordered || ordered) {
      flushParagraph();
      flushQuote();
      const nextType = unordered ? "ul" : "ol";
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listItems.push((unordered || ordered)[1]);
    } else if (quote) {
      flushParagraph();
      flushList();
      quoteLines.push(quote[1]);
    } else {
      flushList();
      flushQuote();
      paragraph.push(line);
    }
  }

  flushParagraph();
  flushList();
  flushQuote();
  if (insideFence) {
    const code = codeLines.join("\n");
    if (["math", "perl"].includes(codeLanguage.toLowerCase())) {
      blocks.push(`<div class="ai-math-block">\\[${escapeHTML(code)}\\]</div>`);
    } else {
      blocks.push(
        `<pre class="ai-code-block"><code>${escapeHTML(code)}</code></pre>`,
      );
    }
  }
  return blocks.join("");
}

function renderTutorMath(container) {
  if (typeof window.renderMathInElement !== "function") return;
  try {
    window.renderMathInElement(container, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
      trust: false,
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
    });
  } catch (error) {
    // Keep the Markdown response readable if a math expression cannot be rendered.
    console.warn("AI Tutor math rendering was skipped:", error);
  }
}

function renderTutorConversation() {
  const messages = $("#tutorMessages");
  if (!messages) return;

  const messageMarkup = tutorConversation
    .map(
      (entry) => `
    <article class="ai-message ${entry.role === "user" ? "user" : entry.role === "error" ? "error" : "assistant"}">
      <span class="ai-message-author">${entry.role === "user" ? "You" : entry.role === "error" ? "Tutor status" : "AI Tutor"}</span>
      <div class="ai-message-content">${entry.role === "assistant" ? renderTutorMarkdown(entry.content) : `<p>${escapeHTML(entry.content).replace(/\n/g, "<br>")}</p>`}</div>
    </article>`,
    )
    .join("");
  const loadingMarkup = tutorLoading
    ? `<article class="ai-message assistant ai-thinking"><span class="ai-message-author">AI Tutor</span><p>Thinking through this with you…</p></article>`
    : "";

  messages.innerHTML = `${messageMarkup}${loadingMarkup}`;
  if (!messageMarkup && !tutorLoading) {
    messages.innerHTML = `<div class="ai-chat-empty"><span>🤖</span><p>Your study conversation will appear here.</p><small>Choose a subject, add a topic, and ask a question.</small></div>`;
  }
  messages
    .querySelectorAll(".ai-message.assistant .ai-message-content")
    .forEach(renderTutorMath);
  messages.scrollTop = messages.scrollHeight;
}

async function tutorErrorMessage(error) {
  const status = error?.context?.status;
  if (status === 401)
    return "Your sign-in may have expired. Sign in again, then retry your question.";
  if (status === 404)
    return "The AI Tutor service is not deployed yet. Deploy the Supabase Edge Function, then try again.";
  if (/fetch|network/i.test(String(error?.message || ""))) {
    return "I couldn't reach the AI Tutor service. Check your connection and try again.";
  }
  if (error?.context instanceof Response) {
    try {
      const responseBody = await error.context.clone().json();
      if (typeof responseBody?.error === "string") return responseBody.error;
    } catch {
      // Use the general message below if the Edge Function response was not JSON.
    }
  }
  return "I couldn't get a response right now. Please try again in a moment.";
}

function setTutorBusy(isBusy) {
  tutorLoading = isBusy;
  const sendButton = $("#tutorSend");
  const messageInput = $("#tutorMessage");
  const clearButton = $("#clearTutorChat");
  if (sendButton) sendButton.disabled = isBusy;
  if (messageInput) messageInput.disabled = isBusy;
  if (clearButton) clearButton.disabled = isBusy;
  $$(".ai-starter").forEach((button) => {
    button.disabled = isBusy;
  });
}

async function sendTutorMessage(message) {
  const cleanMessage = String(message || "").trim();
  if (!cleanMessage || tutorLoading) return;
  if (!requireSignedIn()) return;
  if (!supabaseClient) {
    tutorConversation.push({
      role: "error",
      content:
        "Supabase is not available. Check your connection and reload StudyOS.",
    });
    renderTutorConversation();
    return;
  }

  const userId = currentUser.id;
  const requestVersion = ++tutorRequestVersion;
  const conversation = tutorConversation
    .filter((entry) => entry.role === "user" || entry.role === "assistant")
    .slice(-20)
    .map(({ role, content }) => ({ role, content }));
  tutorConversation.push({ role: "user", content: cleanMessage });
  tutorConversation = tutorConversation.slice(-40);
  setTutorBusy(true);
  $("#tutorStatus").textContent = "Your tutor is preparing an explanation…";
  renderTutorConversation();

  try {
    const { data, error } = await supabaseClient.functions.invoke("ai-tutor", {
      body: {
        subject: $("#tutorSubject").value,
        topic: $("#tutorTopic").value.trim(),
        message: cleanMessage,
        conversation,
      },
    });
    if (error) throw error;
    if (requestVersion !== tutorRequestVersion || currentUser?.id !== userId)
      return;
    if (typeof data?.reply !== "string" || !data.reply.trim()) {
      throw new Error("The AI Tutor returned an empty response.");
    }
    tutorConversation.push({ role: "assistant", content: data.reply.trim() });
    tutorConversation = tutorConversation.slice(-40);
    $("#tutorStatus").textContent = "Ready when you are.";
  } catch (error) {
    if (requestVersion !== tutorRequestVersion || currentUser?.id !== userId)
      return;
    const messageText = await tutorErrorMessage(error);
    if (requestVersion !== tutorRequestVersion || currentUser?.id !== userId)
      return;
    tutorConversation.push({ role: "error", content: messageText });
    tutorConversation = tutorConversation.slice(-40);
    $("#tutorStatus").textContent = "The last message could not be sent.";
    console.error("AI Tutor request failed:", error);
  } finally {
    if (requestVersion === tutorRequestVersion) {
      setTutorBusy(false);
      renderTutorConversation();
      $("#tutorMessage").focus();
    }
  }
}

/* ========================================
   NAVIGATION
======================================== */

function showPage(pageId) {
  $$(".content-panel").forEach((panel) => {
    panel.classList.remove("active");
  });

  const target = $("#" + pageId);

  if (target) {
    target.classList.add("active");
  }

  $$(".nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });

  const titles = {
    dashboard: "Good morning, Abed 👋",

    lessons: "Your Lesson Library",

    plan: "Your Study Plan",

    progress: "Progress Center",

    database: "Study Database",

    "ai-tutor": "AI Study Tutor",

    settings: "Settings",
  };

  $("#pageTitle").textContent = titles[pageId] || "StudyOS";
}

/* ========================================
   OPEN SUBJECT
======================================== */

function openLessons(subject) {
  showPage("lessons");

  $("#subjectFilter").value = subject;

  $$(".subject-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.subject === subject);
  });

  renderLessons();
}

/* ========================================
   EVENT LISTENERS
======================================== */

/* NAV */

$$(".nav button").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

$("#dashboardAiTutor").addEventListener("click", () => {
  showPage("ai-tutor");
  $("#tutorMessage").focus();
});

$("#tutorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const messageInput = $("#tutorMessage");
  const message = messageInput.value;
  if (!message.trim()) return;
  if (!requireSignedIn()) return;
  messageInput.value = "";
  sendTutorMessage(message);
});

$("#clearTutorChat").addEventListener("click", () => {
  tutorConversation = [];
  $("#tutorStatus").textContent = "Ask a question to get started.";
  renderTutorConversation();
});

$$(".ai-starter").forEach((button) => {
  button.addEventListener("click", () => {
    $("#tutorMessage").value = button.dataset.tutorPrompt;
    $("#tutorForm").requestSubmit();
  });
});

/* SUBJECT TABS */

$$(".subject-tab").forEach((button) => {
  button.addEventListener("click", () => {
    openLessons(button.dataset.subject);
  });
});

/* SEARCH */

$("#lessonSearch").addEventListener("input", renderLessons);

/* FILTER */

$("#subjectFilter").addEventListener("change", () => {
  const subject = $("#subjectFilter").value;

  $$(".subject-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.subject === subject);
  });

  renderLessons();
});

/* DATABASE SEARCH */

$("#dbSearch").addEventListener("input", renderDatabase);

/* THEME */

$("#themeBtn").addEventListener("click", toggleTheme);

$("#settingsThemeBtn").addEventListener("click", toggleTheme);

/* VIDEO CLOSE */

$("#videoClose").addEventListener("click", closeVideo);

/* CLOSE VIDEO BY CLICKING BACKGROUND */

$("#videoModal").addEventListener("click", (event) => {
  if (event.target === $("#videoModal")) {
    closeVideo();
  }
});

/* ESCAPE KEY */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && $("#videoModal").classList.contains("show")) {
    closeVideo();
  }
  if (event.key === "Escape" && $("#lessonModal").classList.contains("show")) {
    closeLessonForm();
  }
  if (event.key === "Escape") {
    $$(".app-modal.show").forEach((modal) => closeModal(modal.id));
  }
});

$$("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.dataset.closeModal));
});

$$(["#authModal", "#taskModal", "#recordModal"].join(", ")).forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal.id);
  });
});

/* EXTERNAL VIDEO FALLBACK */

$("#openVideoExternal").addEventListener("click", () => {
  if (!currentVideoUrl) {
    return;
  }

  window.open(currentVideoUrl, "_blank", "noopener,noreferrer");
});

/* FOCUS */

$("#focusBtn").addEventListener("click", () => {
  toast("Focus mode activated 🎯");
});

/* AUTHENTICATION */

$("#authButton").addEventListener("click", () => {
  setAuthMode("signin");
  openModal("authModal");
});

$("#authModeToggle").addEventListener("click", () => {
  setAuthMode(authMode === "signin" ? "signup" : "signin");
});

$("#authForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = $("#authFormMessage");
  if (!supabaseClient) {
    message.textContent =
      "Supabase client is unavailable. Check your connection and reload.";
    return;
  }
  const fields = new FormData(form);
  const email = String(fields.get("email") || "").trim();
  const password = String(fields.get("password") || "");
  const button = $("#authSubmitButton");
  button.disabled = true;
  message.textContent =
    authMode === "signin" ? "Signing in…" : "Creating account…";
  try {
    const result =
      authMode === "signin"
        ? await supabaseClient.auth.signInWithPassword({ email, password })
        : await supabaseClient.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: window.location.href.split("#")[0] },
          });
    if (result.error) throw result.error;
    if (authMode === "signup" && !result.data.session) {
      message.textContent =
        "Check your email to confirm the account, then sign in.";
      return;
    }
    closeModal("authModal");
    form.reset();
    toast(authMode === "signin" ? "Signed in" : "Account created");
  } catch (error) {
    message.textContent = authErrorMessage(error);
  } finally {
    button.disabled = false;
  }
});

$("#signOutButton").addEventListener("click", async () => {
  if (!supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (error) reportBackendError("Signing out", error);
  else toast("Signed out");
});

/* ADD TASK */

$("#addBtn").addEventListener("click", () => {
  showPage("plan");
  openTaskForm();
});

/* ADD LESSON */
function closeLessonForm() {
  const modal = $("#lessonModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  $("#lessonAdd").focus();
}

$("#lessonAdd").addEventListener("click", () => {
  if (requireSignedIn()) openModal("lessonModal");
});

$("#lessonClose").addEventListener("click", closeLessonForm);
$("#lessonCancel").addEventListener("click", closeLessonForm);
$("#lessonModal").addEventListener("click", (event) => {
  if (event.target === $("#lessonModal")) closeLessonForm();
});

$("#lessonForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireSignedIn()) return;
  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = String(formData.get("subject") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const type = String(formData.get("type") || "Video");
  const teacher = String(formData.get("teacher") || "").trim();
  const url = String(formData.get("url") || "").trim();
  const durationValue = String(formData.get("duration") || "").trim();

  if (!subject || !title) return;
  if (!url) {
    form.elements.url.focus();
    toast(type === "Video" ? "Add a video URL" : "Add a portal URL");
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("lessons")
      .insert({
        owner_user_id: currentUser.id,
        subject,
        chapter: title.match(/^Chapter\s+\d+/)?.[0] || "",
        title,
        lesson_type: type,
        teacher,
        video_url: url,
        duration: durationValue ? Number(durationValue) : null,
      })
      .select(
        "id, owner_user_id, subject, chapter, title, lesson_type, teacher, video_url, duration",
      )
      .single();
    if (error) throw error;
    const lesson = lessonArrayFromRow(data);
    lessonRows.push(data);
    lessonIdsByKey.set(lessonRowKey(data), data.id);
    savedLessons.push(lesson);
    lessons.push(lesson);
    form.reset();
    closeLessonForm();
    renderLessons();
    renderSubjects();
    toast("Lesson saved");
  } catch (error) {
    reportBackendError("Saving lesson", error);
  }
});

/* ADD PLAN */

$("#planAdd").addEventListener("click", () => {
  openTaskForm();
});

/* ADD DATABASE RECORD */

$("#dbAdd").addEventListener("click", () => {
  openRecordForm();
});

$("#recordForm").addEventListener("submit", saveStudyRecord);
$("#taskForm").addEventListener("submit", addTask);

/* RESET */

$("#resetBtn").addEventListener("click", () => {
  const confirmed = confirm("Reset all completed lessons?");

  if (!confirmed) {
    return;
  }

  if (!requireSignedIn()) return;
  supabaseClient
    .from("completed_lessons")
    .delete()
    .eq("user_id", currentUser.id)
    .then(({ error }) => {
      if (error) throw error;
      completed.clear();
      completionRecords = [];
      renderSubjects();
      renderLessons();
      toast("Progress reset");
    })
    .catch((error) => reportBackendError("Resetting progress", error));
});

/* ========================================
   INITIALIZE
======================================== */

function initializeApp() {
  loadTheme();
  setAuthMode("signin");
  renderSubjects();
  renderToday();
  renderLessons();
  renderDatabase();
  renderCalendar();
  updatePlanStats();
  renderTutorConversation();
  initSupabase();
}

initializeApp();
