# links

A Linktree-style personal link-in-bio page for Kyle Perez Correa, served by a small Node.js/Express app. The UI is built from scratch with a Google Photos–inspired look: an animated background of morphing color orbs (with mouse parallax), a rotating gradient ring around the profile avatar, and translucent "frosted glass" link cards so the moving color shows through. A fixed glass top bar carries quick platform shortcuts plus share/copy/theme actions, and a bottom bar signs off the page. Light/dark theme follows the system preference and can be toggled manually (persisted in `localStorage`). Layout is fully responsive, from small phones up through desktop.

Everything is plain HTML/CSS/vanilla JS on the frontend — no build step, no framework — served by Express so the app has room to grow (APIs, an admin panel, analytics, etc.) without switching stacks.

## Features

- **Top bar** — fixed glass app bar with a brand mark, shortcut icons to a few featured platforms, and Share / Copy link / theme-toggle actions (shortcuts hide on narrow phones so the core actions never overflow)
- **Bottom bar** — simple full-width sign-off bar ("- niruxxdaboi -")
- **Profile header** — generated gradient "initials" avatar with an animated conic-gradient ring, name, tagline
- **Link cards** — one entry per platform (Instagram, GitHub, LinkedIn, Discord, YouTube, TikTok, YouTube Music, Email), translucent/blurred so the background shows through, each with a brand-colored icon, staggered entrance animation, hover elevation + ripple, and a slow-moving background sheen
- **Theming** — light/dark, respects `prefers-color-scheme`, manual override saved per-browser
- **Motion** — background parallax on desktop pointer movement, all animations respect `prefers-reduced-motion`
- **Responsive** — single centered column that scales from ~320px phones to desktop

## Tech stack

- **Server**: Node.js + [Express](https://expressjs.com/) (`server.js`) — static file serving, gzip compression, cache headers, SPA-style fallback for unknown paths
- **Frontend**: static HTML/CSS/JS in `public/`, no framework or bundler

## Project structure

```
links/
├─ server.js                  # Express app entrypoint
├─ package.json                # dependencies + npm scripts
├─ Dockerfile                  # container build (see Hosting)
├─ .dockerignore
├─ deploy/                     # copy-paste hosting configs
│  ├─ links.service            # systemd unit (bare-metal/VPS, no Docker)
│  ├─ Caddyfile                # reverse proxy + auto-HTTPS example
│  └─ nginx.conf.example       # reverse proxy example (pair with certbot)
└─ public/                     # everything Express serves statically
   ├─ index.html                # page markup
   ├─ css/style.css             # theme, layout, animations
   ├─ js/script.js              # link data, rendering, ripple, theme toggle, parallax
   └─ assets/favicon.svg        # gradient "KPC" favicon
```

## Customize

1. **Links** — edit the `LINKS` array at the top of [public/js/script.js](public/js/script.js). Every entry currently has `href: "#"` as a placeholder; swap in your real profile URLs (and update `subtitle` to match).
2. **Name / tagline** — edit the `.name` and `.tagline` text in [public/index.html](public/index.html).
3. **Profile picture** — the avatar is currently a generated "KPC" gradient placeholder. To use a real photo, replace the contents of `#avatar` in [public/index.html](public/index.html) with an `<img>` tag pointing at your photo, e.g.:
   ```html
   <div class="avatar">
     <img src="assets/profile.jpg" alt="Kyle Perez Correa" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />
   </div>
   ```
4. **Top bar shortcuts** — the top bar shows platform icon shortcuts for the first `TOPBAR_SHORTCUT_COUNT` entries in the `LINKS` array (default 3); change that constant in [public/js/script.js](public/js/script.js) to show more or fewer.
5. **Bottom bar text** — edit the `<footer class="bottombar">` text in [public/index.html](public/index.html).

## Requirements

- **Node.js 18 or later** (matches `engines.node` in [package.json](package.json)) — includes `npm`
- **Git**, to clone the repo

No native/compiled dependencies are used (`express` and `compression` are pure JS), so no separate C++ build toolchain is needed on either OS.

### Windows

1. Install Node.js 18+ from [nodejs.org](https://nodejs.org) (LTS installer), or via winget:
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```
2. Install Git from [git-scm.com](https://git-scm.com) if you don't already have it.
3. Verify:
   ```powershell
   node -v
   npm -v
   ```
4. Run the commands in [Run locally](#run-locally) below from PowerShell, Git Bash, or the Windows Terminal.

The **Hosting** section's systemd unit ([deploy/links.service](deploy/links.service)) and the `useradd`/`ufw` commands are Linux-only — they don't apply if you're hosting on Windows Server. The Docker option (Option C) and Caddy/Nginx reverse proxies work the same regardless of OS, as long as your host is Linux; for Windows Server, the Docker option or a Windows-native reverse proxy (e.g. IIS as a reverse proxy) are the practical routes.

### Linux

1. Install Node.js 18+. The simplest cross-distro way is [nvm](https://github.com/nvm-sh/nvm):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   nvm install --lts
   ```
   Or via your distro's package manager (Debian/Ubuntu, may lag behind LTS):
   ```bash
   sudo apt update && sudo apt install -y nodejs npm
   ```
2. Verify:
   ```bash
   node -v
   npm -v
   ```
3. Git is usually preinstalled; if not: `sudo apt install -y git` (or your distro's equivalent).

Linux is also the target for everything in the **Hosting (24/7)** section below (systemd, Caddy, Nginx, ufw) — those steps assume a Linux VPS.

## Run locally

```
npm install
npm start          # http://localhost:3000
```

Auto-reload during development:

```
npm run dev
```

### Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `3000` | Port the Express server listens on |

## Hosting (24/7)

The app is a single stateless Express process — pick whichever of these fits your setup. All of them end with the site reachable over HTTPS on your domain.

### Option A — VPS, bare Node + systemd + reverse proxy (most control)

1. Get the code onto the server and install production deps:
   ```bash
   git clone <your-repo-url> /opt/links
   cd /opt/links
   npm ci --omit=dev
   ```
2. Run it as a service so it restarts on crash/reboot. A ready-made unit is at [deploy/links.service](deploy/links.service) — edit the `User`/`WorkingDirectory` if needed, then:
   ```bash
   sudo useradd -r -s /usr/sbin/nologin links   # if the user doesn't exist yet
   sudo cp deploy/links.service /etc/systemd/system/links.service
   sudo systemctl daemon-reload
   sudo systemctl enable --now links
   journalctl -u links -f   # tail logs
   ```
   The app now listens on `localhost:3000` — it is **not** exposed to the internet yet, on purpose.
3. Put a reverse proxy in front for your domain + TLS. Pick one:
   - **Caddy** (simplest — automatic HTTPS via Let's Encrypt): use [deploy/Caddyfile](deploy/Caddyfile) as `/etc/caddy/Caddyfile`, swap in your domain, `sudo systemctl reload caddy`.
   - **Nginx** + certbot: use [deploy/nginx.conf.example](deploy/nginx.conf.example) as a starting server block, then run `sudo certbot --nginx -d yourdomain.com` to provision TLS.
4. Point your domain's DNS `A`/`AAAA` record at the server's IP, and open ports 80/443 in the firewall (`ufw allow 80,443/tcp` or your cloud provider's security group).

To deploy an update later: `git pull && npm ci --omit=dev && sudo systemctl restart links`.

### Option B — VPS with pm2 (simpler process manager, no systemd)

```bash
npm i -g pm2
cd /opt/links && npm ci --omit=dev
pm2 start server.js --name links
pm2 save
pm2 startup   # prints a command to run once, so pm2 survives reboots
```
Still needs a reverse proxy (Caddy or Nginx, as in Option A) in front for your domain + TLS.

### Option C — Docker (portable, same image anywhere)

```bash
docker build -t links .
docker run -d --name links -p 3000:3000 --restart unless-stopped links
```
Then front it with Caddy/Nginx exactly as in Option A, pointing at `localhost:3000`. To update: rebuild the image and `docker rm -f links` + re-run (or use `docker compose` / a registry + CI if you want zero-downtime deploys later).

### Option D — Managed PaaS (fastest, least control)

Platforms like [Render](https://render.com), [Railway](https://railway.app), or [Fly.io](https://fly.io) can build straight from this repo (`Dockerfile` or `npm start`) and give you HTTPS on a subdomain out of the box — no server to manage, but less low-level customizability than A–C.

---

Because this is a plain Express app, any of the options above is also the natural place to grow the site later — add routes to `server.js` for things like an API, an admin panel to edit links without redeploying, or per-link click analytics.
