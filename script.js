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

// User-created lessons are stored separately from the built-in lesson list.
let savedLessons = [];
try {
  const storedLessons = JSON.parse(localStorage.getItem("studyos_lessons") || "[]");
  if (Array.isArray(storedLessons)) {
    savedLessons = storedLessons.filter(
      (lesson) => Array.isArray(lesson) && lesson.length >= 5,
    );
    lessons.push(...savedLessons);
  }
} catch (error) {
  console.warn("Could not load saved lessons", error);
}

/* ========================================
   TEACHERS
======================================== */

const teachers = {
  Arabic: "Mr. Mohamed Salah",

  English: "Mr. Ahmed Tarek",

  Chemistry: "Mr. Abd Elwahab",
};

/* ========================================
   DATABASE
======================================== */

const database = [
  [
    "Physics",
    "Chapter 1 — Session 1",
    "Video",
    "Physics teacher",
    "—",
    "High",
    "Not revised",
    "—",
  ],

  [
    "Math",
    "Chapter 1 — Revision",
    "Revision",
    "Math teacher",
    "—",
    "High",
    "Not revised",
    "—",
  ],

  [
    "Chemistry",
    "Your notes",
    "Important notes",
    teachers.Chemistry,
    "—",
    "Medium",
    "Not started",
    "—",
  ],

  [
    "English",
    "Your worksheets",
    "Homework",
    teachers.English,
    "—",
    "Medium",
    "Not started",
    "—",
  ],

  [
    "Arabic",
    "Your lesson notes",
    "Important notes",
    teachers.Arabic,
    "—",
    "Medium",
    "Not started",
    "—",
  ],
];

/* ========================================
   WEEKLY PLAN
======================================== */

const planData = {
  Saturday: ["Physics Part 1"],

  Sunday: ["Math Part 1", "English Part 1"],

  Monday: ["Chemistry — 4h", "Arabic Part 1"],

  Tuesday: ["Math Part 2", "Physics Part 2"],

  Wednesday: ["English Part 2"],

  Thursday: ["Arabic Part 2"],

  Friday: ["Revision / Catch-up"],
};

/* ========================================
   TODAY
======================================== */

const today = [
  ["09:00", "Physics", "Physics Part 1", "Planned"],

  ["12:00", "Math", "Math Part 1", "Planned"],

  ["16:00", "English", "English Part 1", "Planned"],

  ["20:00", "Questions", "Daily questions — all subjects", "Daily"],
];

/* ========================================
   STORAGE
======================================== */

let completed = JSON.parse(localStorage.getItem("studyos_completed") || "[]");

let currentVideoUrl = "";

/* ========================================
   HELPERS
======================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
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
  const subjectLessons = lessons.filter(
    (lesson) => lesson[0] === subject && lesson[2] !== "Course Library",
  );

  if (!subjectLessons.length) {
    return 0;
  }

  const completedLessons = subjectLessons.filter((lesson) =>
    completed.includes(lesson[1]),
  );

  return Math.round((completedLessons.length / subjectLessons.length) * 100);
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
  const videoLessons = lessons.filter(
    (lesson) => lesson[2] !== "Course Library",
  );

  const completedLessons = videoLessons.filter((lesson) =>
    completed.includes(lesson[1]),
  );

  const total = videoLessons.length;

  const done = completedLessons.length;

  const percentage = total ? Math.round((done / total) * 100) : 0;

  $("#overallProgress").textContent = percentage + "%";

  $("#overallBar").style.width = percentage + "%";

  $("#completedCount").textContent = done;
}

/* ========================================
   TODAY TABLE
======================================== */

function renderToday() {
  $("#todayTable").innerHTML = today
    .map((row) => {
      return `

                <tr>

                    <td>

                        <input
                            class="check"
                            type="checkbox"
                            onchange="
                                toast(
                                    this.checked
                                    ? 'Task completed ✓'
                                    : 'Task reopened'
                                )
                            "
                        >

                    </td>

                    <td>
                        ${row[0]}
                    </td>

                    <td>
                        <b>
                            ${row[1]}
                        </b>
                    </td>

                    <td>
                        ${row[2]}
                    </td>

                    <td>
                        <span style="color:var(--orange)">
                            ● ${row[3]}
                        </span>
                    </td>

                </tr>

            `;
    })
    .join("");
}

/* ========================================
   LESSON RENDERING
======================================== */

function renderLessons() {
  const search = $("#lessonSearch").value.toLowerCase().trim();

  const filter = $("#subjectFilter").value;

  const filtered = lessons.filter((lesson) => {
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

      const done = completed.includes(title);

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
                                            data-title="${title}"
                                            ${done ? "checked" : ""}
                                        >

                                        Completed

                                    </label>

                                `
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
      toggleLesson(checkbox.dataset.title, checkbox.checked);
    });
  });

  updateProgress();
}

/* ========================================
   LESSON COMPLETION
======================================== */

function toggleLesson(title, isCompleted) {
  if (isCompleted && !completed.includes(title)) {
    completed.push(title);
  }

  if (!isCompleted) {
    completed = completed.filter((item) => item !== title);
  }

  localStorage.setItem("studyos_completed", JSON.stringify(completed));

  renderLessons();

  renderSubjects();

  toast(isCompleted ? "Lesson completed ✓" : "Lesson reopened");
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

  const filtered = database.filter((row) =>
    row.join(" ").toLowerCase().includes(search),
  );

  $("#dbTable").innerHTML = filtered
    .map((row) => {
      return `

                <tr>

                    <td>
                        <b>
                            ${row[0]}
                        </b>
                    </td>

                    <td>
                        ${row[1]}
                    </td>

                    <td>
                        ${row[2]}
                    </td>

                    <td>
                        ${row[3]}
                    </td>

                    <td>
                        ${row[4]}
                    </td>

                    <td>
                        ${row[5]}
                    </td>

                    <td>
                        ${row[6]}
                    </td>

                    <td>
                        ${row[7]}
                    </td>

                </tr>

            `;
    })
    .join("");
}

/* ========================================
   CALENDAR
======================================== */

function renderCalendar() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  $("#calendar").innerHTML = days
    .map((day, index) => {
      return `

                    <div
                        class="day
                        ${index === 0 ? "active" : ""}">

                        <b>
                            ${shortDays[index]}
                        </b>

                        ${planData[day]
                          .map(
                            (task) =>
                              `<div class="task">
                                            ${task}
                                        </div>`,
                          )
                          .join("")}

                        <div class="task">
                            ❓ Daily questions
                        </div>

                    </div>

                `;
    })
    .join("");
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

/* ADD TASK */

$("#addBtn").addEventListener("click", () => {
  showPage("plan");

  toast("New task mode ready");
});

/* ADD LESSON */
$("#lessonForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const subject = String(formData.get("subject") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const type = String(formData.get("type") || "Video");
  const teacher = String(formData.get("teacher") || "").trim();
  const url = String(formData.get("url") || "").trim();

  if (!subject || !title) return;
  if (!url) {
    event.currentTarget.elements.url.focus();
    toast(type === "Video" ? "Add a video URL" : "Add a portal URL");
    return;
  }

  const lesson = [subject, title, type, teacher, url];
  savedLessons.push(lesson);
  lessons.push(lesson);
  localStorage.setItem("studyos_lessons", JSON.stringify(savedLessons));
  event.currentTarget.reset();
  renderLessons();
  renderSubjects();
  toast("Lesson saved");
});

/* ADD PLAN */

$("#planAdd").addEventListener("click", () => {
  toast("Session added — backend coming later");
});

/* ADD DATABASE RECORD */

$("#dbAdd").addEventListener("click", () => {
  toast("Database record form ready");
});

/* RESET */

$("#resetBtn").addEventListener("click", () => {
  const confirmed = confirm("Reset all completed lessons?");

  if (!confirmed) {
    return;
  }

  localStorage.removeItem("studyos_completed");

  completed = [];

  renderSubjects();

  renderLessons();

  toast("Progress reset");
});

/* ========================================
   INITIALIZE
======================================== */

loadTheme();

renderSubjects();

renderToday();

renderLessons();

renderDatabase();

renderCalendar();
