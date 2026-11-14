# Alex Carter — Developer Portfolio

A premium, fully responsive **Black + Electric Blue** personal portfolio for a
Full-Stack Web Developer, built as a production **Next.js (App Router)** app with a
**PostgreSQL** database (Drizzle ORM) behind the contact form — plus a complete,
ready-to-run **Python / Django** backend for the same contact endpoint under
[`backend/`](#django-backend-local-setup).

- **Live preview (this repo):** run the Next.js app (see below) — the contact form
  really stores messages in PostgreSQL via `POST /api/contact`.
- **Django backend:** `backend/` contains a standalone Django project exposing the
  same form (`/` HTML page) and JSON endpoint (`POST /api/contact/`).

## Design system

| Token        | Value                                   |
| ------------ | --------------------------------------- |
| Background   | `#080B12` (deep black / charcoal)       |
| Accent       | `#1677FF` (electric blue)              |
| Accent soft  | `#389BFF` (soft blue)                   |
| Cards        | `#0E1420` with subtle 1px borders       |
| Typography   | System font stack (no Google Fonts)     |

## What's inside

- **Hero** — full-screen, availability badge, headline, tech chips, CTAs, social
  links, portrait with a floating code card, subtle blue glow and skill badges.
- **About Me** — intro, development approach, career goals, animated quick stats.
- **Technical Skills** — Frontend / Backend / Other groups with honest progress
  bars (HTML5, CSS3, Bootstrap 5, JavaScript, Python, Django, RWD, Git & GitHub,
  SEO, REST API basics).
- **Featured Projects — exactly 6** (HAULNEX Dispatch, SearchGap SEO SaaS,
  E-Commerce Fashion Store, AI Advisor Platform, Pharmacy Management System,
  AI Voice Assistant) with thumbnails, descriptions, tech tags, **Live Demo** and
  **GitHub** buttons. Demo/repo URLs are **editable placeholders** — replace them
  in `src/lib/profile.ts` (never shipped as real working links).
- **Services** — 6 services (frontend, backend, responsive, business, e-commerce,
  maintenance).
- **Development Process** — 4 steps: Planning → UI/UX Design → Development →
  Testing & Deployment.
- **Contact** — validated form (name / email / subject / message) wired to a real
  backend, plus email + social links. Nothing is faked: submissions are stored.
- **Footer** — large premium footer: brand + intro, navigation, services, contact,
  socials, GitHub, email, dynamic copyright year (JS), "Designed & Developed with
  Passion" and a back-to-top button.
- **Navbar** — sticky, active-section highlighting, working mobile hamburger menu,
  "Let's Talk" CTA.
- **Interactions** — smooth scrolling, subtle reveal-on-scroll, hover states,
  back-to-top, `prefers-reduced-motion` support. No heavy animation libraries.

## Project structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # metadata/SEO + CSS imports (Bootstrap 5 first)
│   │   ├── page.tsx            # one-page portfolio (all sections)
│   │   ├── icon.svg            # favicon
│   │   ├── globals.css         # Tailwind preflight import
│   │   └── api/
│   │       ├── health/route.ts # GET /api/health
│   │       └── contact/route.ts# POST /api/contact → PostgreSQL (Drizzle)
│   ├── components/             # Navbar, Hero, About, Skills, Projects, Services,
│   │                           # Process, Contact, Footer, BackToTop, RevealFX, Icons
│   ├── styles/                 # style.css · animations.css · responsive.css
│   ├── lib/profile.ts          # ALL editable content: name, links, projects, skills
│   └── db/                     # Drizzle client + schema (contact_messages table)
├── public/
│   └── assets/
│       ├── images/             # portrait.jpg, about.jpg
│       ├── images/projects/    # 6 project thumbnails
│       └── icons/              # standalone SVG icons (also used by Django template)
├── backend/                    # Django project (see below)
├── drizzle.config.json
└── README.md
```

> Mapping to the classic static layout: `index.html` → `src/app/page.tsx` (anchored
> sections `#home #about #skills #projects #services #contact`), `css/` →
> `src/styles/`, `js/` → the `"use client"` components in `src/components/`,
> `assets/` → `public/assets/`, `backend/` → `backend/`.

## Quick start (Next.js + PostgreSQL app)

```bash
npm install
# .env already contains: DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
npx drizzle-kit push        # create the contact_messages table
npm run dev                 # http://localhost:3000
```

Production:

```bash
npm run build
npm run start               # serves on http://localhost:3000
```

### Contact API

`POST /api/contact` — JSON body `{ "name", "email", "subject", "message" }`.

- `201` → `{ "ok": true, "message": "…" }` (row inserted into `contact_messages`)
- `422` → `{ "ok": false, "message": "…", "errors": { field: "…" } }`
- `400` → invalid JSON · `500` → database error

`GET /api/health` → `{ "ok": true }` when the database is reachable.

## Django backend (local setup)

The same contact feature as a standalone Django project in `backend/`
(HTML form page at `/`, JSON API at `/api/contact/`, messages visible in
Django admin at `/admin/` — create a superuser with `python manage.py createsuperuser`).

```bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt  # installs Django
python manage.py migrate         # creates db.sqlite3 + contact_message table
python manage.py runserver 8000
# open http://127.0.0.1:8000/  (form page)
# POST JSON to http://127.0.0.1:8000/api/contact/
```

To use PostgreSQL instead of SQLite, install `psycopg2-binary` and set the
`DJANGO_DB_*` environment variables (see comments in `backend/config/settings.py`).

## Customizing

Edit **`src/lib/profile.ts`** to change the name, email, social links, hero copy,
skills, all six projects (including replacing the placeholder Live Demo / GitHub
URLs with your real ones), services, process steps and stats. All sections read
from that single file.

## Notes

- No Google Fonts (system font stack), no icon/CDN libraries, no tracking.
- Images are local files in `public/assets/images/` (optimized via `next/image`).
- Fully responsive (mobile / tablet / desktop) and accessibility-friendly
  (semantic landmarks, labels, aria attributes, focus states, reduced motion).
