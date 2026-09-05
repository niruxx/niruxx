/* ==========================================================================
   Kyle Perez Correa — Links
   Edit the LINKS array below to point at your real profiles.
   href: "#" is a placeholder — replace with your actual URL.
   ========================================================================== */

const LINKS = [
  {
    name: "Instagram",
    subtitle: "@your-handle",
    href: "#",
    color: "#E1306C",
    icon: "instagram",
  },
  {
    name: "GitHub",
    subtitle: "github.com/your-username",
    href: "#",
    color: "#6e40c9",
    icon: "github",
  },
  {
    name: "LinkedIn",
    subtitle: "in/your-name",
    href: "#",
    color: "#0A66C2",
    icon: "linkedin",
  },
  {
    name: "Discord",
    subtitle: "Join my server",
    href: "#",
    color: "#5865F2",
    icon: "discord",
  },
  {
    name: "YouTube",
    subtitle: "Subscribe on YouTube",
    href: "#",
    color: "#FF0000",
    icon: "youtube",
  },
  {
    name: "TikTok",
    subtitle: "@your-handle",
    href: "#",
    color: "#25F4EE",
    icon: "tiktok",
  },
  {
    name: "YouTube Music",
    subtitle: "Listen to my playlists",
    href: "#",
    color: "#FF0000",
    icon: "youtubemusic",
  },
  {
    name: "Email",
    subtitle: "you@example.com",
    href: "mailto:you@example.com",
    color: "#4285F4",
    icon: "email",
  },
];

const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33Zm0 1.98c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.79.4-1.14.75-.35.35-.57.68-.75 1.14-.14.35-.3.87-.34 1.83-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.4.79.75 1.14.35.35.68.57 1.14.75.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.79-.4 1.14-.75.35-.35.57-.68.75-1.14.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a3 3 0 0 0-.75-1.14 3 3 0 0 0-1.14-.75c-.35-.14-.87-.3-1.83-.34-1.23-.06-1.58-.07-4.73-.07Zm0 3.4a5.42 5.42 0 1 1 0 10.84 5.42 5.42 0 0 1 0-10.84Zm0 1.98a3.44 3.44 0 1 0 0 6.88 3.44 3.44 0 0 0 0-6.88Zm5.63-1.85a1.27 1.27 0 1 1-2.53 0 1.27 1.27 0 0 1 2.53 0Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.95c-2.93.64-3.55-1.24-3.55-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.08.88.1-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.35.1-2.81 0 0 .88-.28 2.88 1.08a10 10 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.46.21 2.54.1 2.81.68.73 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.81 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2.98 8.75h3.9V21h-3.9V8.75Zm6.7 0h3.75v1.68h.05c.52-.98 1.8-2.02 3.71-2.02 3.97 0 4.7 2.6 4.7 6v6.6h-3.9v-5.85c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21H9.68V8.75Z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 5.36A18.2 18.2 0 0 0 15.85 4c-.2.36-.42.84-.58 1.22a16.9 16.9 0 0 0-4.54 0A9.6 9.6 0 0 0 10.15 4a18.2 18.2 0 0 0-4.47 1.37C2.9 9.1 2.24 12.75 2.57 16.34a18.3 18.3 0 0 0 5.55 2.8c.45-.6.85-1.25 1.19-1.93a11.8 11.8 0 0 1-1.87-.9c.16-.11.31-.23.46-.35a13 13 0 0 0 11.2 0c.15.12.3.24.46.35-.6.35-1.22.65-1.87.9.34.68.74 1.33 1.19 1.93a18.2 18.2 0 0 0 5.55-2.8c.4-4.16-.67-7.78-2.83-11ZM9.68 14.1c-.94 0-1.7-.87-1.7-1.94s.75-1.94 1.7-1.94 1.72.88 1.7 1.94c0 1.07-.75 1.94-1.7 1.94Zm4.65 0c-.94 0-1.7-.87-1.7-1.94s.75-1.94 1.7-1.94 1.72.88 1.7 1.94c0 1.07-.75 1.94-1.7 1.94Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 7.19a3 3 0 0 0-2.11-2.13C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.39.56A3 3 0 0 0 .5 7.19 31.6 31.6 0 0 0 0 12c0 1.62.15 3.24.5 4.81a3 3 0 0 0 2.11 2.13C4.5 19.5 12 19.5 12 19.5s7.5 0 9.39-.56a3 3 0 0 0 2.11-2.13c.35-1.57.5-3.19.5-4.81 0-1.62-.15-3.24-.5-4.81ZM9.6 15.4V8.6L15.8 12l-6.2 3.4Z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 1.99h-3.3v14.6a2.9 2.9 0 1 1-2.06-2.78v-3.33a6.2 6.2 0 1 0 5.36 6.14V8.83a8.3 8.3 0 0 0 4.9 1.58V7.1a4.9 4.9 0 0 1-4.9-5.11Z"/></svg>`,
  youtubemusic: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Zm-1.6-13.4v10.4L16.6 12l-6.2-5.2Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm17 3.2-7.4 5.16a1 1 0 0 1-1.14 0L4 8.2V17h16V8.2ZM4.4 7l7.6 5.3L19.6 7H4.4Z"/></svg>`,
};

const CHEVRON = `<svg class="link-card__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;

const TOPBAR_SHORTCUT_COUNT = 3;

function renderTopbarShortcuts() {
  const nav = document.getElementById("topbarActions");
  const divider = nav.querySelector(".topbar__divider");
  const frag = document.createDocumentFragment();

  LINKS.slice(0, TOPBAR_SHORTCUT_COUNT).forEach((link) => {
    const a = document.createElement("a");
    a.className = "topbar__icon-btn topbar__shortcut";
    a.href = link.href;
    a.style.setProperty("--accent", link.color);
    a.setAttribute("aria-label", link.name);
    a.title = link.name;
    if (link.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = ICONS[link.icon] || "";
    a.addEventListener("click", spawnRipple);
    frag.appendChild(a);
  });

  nav.insertBefore(frag, divider);
}

function renderLinks() {
  const container = document.getElementById("links");
  const frag = document.createDocumentFragment();

  LINKS.forEach((link, i) => {
    const a = document.createElement("a");
    a.className = "link-card";
    a.href = link.href;
    a.style.setProperty("--accent", link.color);
    a.style.animationDelay = `${0.12 + i * 0.06}s`;
    if (link.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = `
      <span class="link-card__icon">${ICONS[link.icon] || ""}</span>
      <span class="link-card__body">
        <span class="link-card__title">${link.name}</span>
        <span class="link-card__subtitle">${link.subtitle}</span>
      </span>
      ${CHEVRON}
    `;
    a.addEventListener("click", spawnRipple);
    frag.appendChild(a);
  });

  container.appendChild(frag);
}

/* ---------- click feedback: ripple, for any button/link ----------
   The press/release bounce itself is pure CSS (:active + a `scale`
   transition) so it can never fight the entrance `animation`. */

function spawnRipple(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height) * 1.15;
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

/* ---------- toast ---------- */

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2000);
}

/* ---------- share / copy ---------- */

function initShareAndCopy() {
  const shareBtn = document.getElementById("shareBtn");
  const copyBtn = document.getElementById("copyBtn");

  shareBtn.addEventListener("click", async (e) => {
    spawnRipple(e);
    const shareData = {
      title: document.title,
      text: "Check out my links",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") showToast("Couldn't share");
      }
    } else {
      await copyLink();
    }
  });

  copyBtn.addEventListener("click", async (e) => {
    spawnRipple(e);
    await copyLink(copyBtn);
  });
}

async function copyLink(btn) {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied!");
    if (btn) {
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 1200);
    }
  } catch (err) {
    showToast("Couldn't copy link");
  }
}

/* ---------- theme toggle ---------- */

function initTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);

  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", spawnRipple);
  toggle.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ---------- background parallax ---------- */

function initParallax() {
  const layer = document.getElementById("bgLayer");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!layer || reduceMotion || !window.matchMedia("(hover: hover)").matches) return;

  const MAX = 26; // px of drift
  let raf = null;

  window.addEventListener("mousemove", (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      layer.style.setProperty("--px", `${nx * MAX}px`);
      layer.style.setProperty("--py", `${ny * MAX}px`);
      raf = null;
    });
  });
}

/* ---------- init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderTopbarShortcuts();
  renderLinks();
  initTheme();
  initShareAndCopy();
  initParallax();
});
