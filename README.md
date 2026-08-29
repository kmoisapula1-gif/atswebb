# Atang Tracing Services — website

This is the Atang Tracing Services marketing site, built as a Next.js
project. It has six pages (Home, About, Services, Clients, POPIA &
Governance, Contact) matching the approved design, and needs no database or
server to run — it's exported as plain HTML/CSS/JS that any web host can
serve.

This README is written for someone who has never worked with a codebase
before. Keep it — it's your reference for the three things you'll actually
need to do: preview changes, swap in real content, and put the site online.

## 1. Preview it on your own computer

You'll need [Node.js](https://nodejs.org) installed (the free "LTS"
version). Then, in this folder:

```bash
npm install       # one-time setup, downloads the project's dependencies
npm run dev        # starts a local preview
```

Open `http://localhost:3000` in your browser. Edit any file and the page
updates automatically — nothing you do here affects the live site until you
rebuild and re-upload (see step 3).

## 2. Add your real content

The design was built with placeholders for a few things that only you (the
client) can supply. Everything else — every word of copy, every colour — is
already final and matches the approved design.

### Photos

Drop real photos into the `public/images/` folder using **exactly these
filenames** (the placeholders currently sitting there tell you what each
one is and its expected shape):

| Filename | Used for | Shape |
|---|---|---|
| `kamogelo.jpg` | Kamogelo's portrait (About, Contact) | portrait, 4:5 |
| `true-family-sunset.jpg` | Home page hero | wide |
| `true-street.jpg` | About page hero | wide |
| `advisor-meeting.jpg` | About page (currently unused directly, kept for future use) | wide |
| `analysts.jpg` | Clients page hero | wide |
| `true-skyline.jpg` | Contact page hero | wide |
| `true-father-daughter.jpg` | Home page, "Why Atang" section | landscape |

A file with the same name simply replaces the placeholder — no code changes
needed. You can regenerate the placeholder set at any time by running
`python3 scripts/make_placeholders.py`.

### The five legal PDFs (POPIA / PAIA)

The Governance page and footer link to five documents that don't exist yet
— your PAIA manual, PAIA request form, privacy notice, and two POPIA forms.
These are legal/compliance documents; get them from whoever handles your
POPIA/PAIA compliance (or ask Claude to help draft starting points, with a
professional reviewing before publishing).

Once you have them:

1. Save the PDFs into `public/documents/` using the exact filenames already
   referenced (see `lib/content.js`, the `formsPolicies` list, and the
   footer links in `components/Footer.js` — both list
   `atang-paia-manual.pdf`, `atang-paia-request-form.pdf`,
   `atang-privacy-notice.pdf`, `atang-popia-request-form.pdf`,
   `atang-popia-objection-form.pdf`).
2. In `lib/content.js`, find the `formsPolicies` array and change
   `available: false` to `available: true` for each document you've added.
   That switches the card from a "PDF pending" notice to a working download
   link.

### Everything else (words, phone numbers, etc.)

Most of the site's copy lives in `lib/content.js` — one file, in plain
English, with comments. Page-specific text (headlines, hero copy) lives at
the top of each page file under `app/` (e.g. `app/about/page.js`).

One thing worth double-checking before launch: the Contact page and footer
promise a **one working day** response time. Make sure that's a commitment
you can actually keep before the site goes live — search the codebase for
"one working day" if you want to change it everywhere at once.

## 3. Put it online (Vercel + GitHub)

This is the path we picked: your code lives in a GitHub repository, and
Vercel watches that repository and republishes the site automatically
every time you (or Claude) push a change. Set-up is one-time; after that,
publishing an update is just `git push`.

### One-time setup

1. **Create the GitHub repository.** On [github.com](https://github.com),
   click **New repository**. Name it something like `atang-website`.
   Leave "Add a README" unchecked (this project already has one). Click
   **Create repository** and leave the page open — it shows you the
   commands from step 2.

2. **Unzip this project** on your computer if you haven't already, then
   open a terminal in that folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit — Atang Tracing Services website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

   Replace `<your-username>/<repo-name>` with what GitHub showed you in
   step 1. If `git` isn't recognised, install it from
   [git-scm.com](https://git-scm.com) first. The first push may open a
   browser window asking you to log in to GitHub — that's expected.

3. **Connect Vercel.** Go to [vercel.com](https://vercel.com) and sign in
   with **Continue with GitHub** (this also grants Vercel permission to
   see your repos). Click **Add New… → Project**, find `atang-website` in
   the list and click **Import**. Vercel auto-detects this as a Next.js
   project — leave every setting on its default and click **Deploy**.
   About a minute later you'll have a live URL ending in `.vercel.app`.

4. **Point your real domain at it.** In the Vercel project, go to
   **Settings → Domains** and add `atangts.co.za` (and `www.atangts.co.za`
   if you want both). Vercel will show you one or two DNS records to add.
   Log in wherever you registered `atangts.co.za`, find its DNS settings,
   and add the records Vercel gave you. This step is easiest to get right
   if you tell Claude who your domain is registered with — the exact DNS
   screen looks different everywhere.

### Every time after that

Whenever you (or Claude, working in a session with access to this code)
change something, publish it with:

```bash
git add .
git commit -m "describe what changed"
git push
```

Vercel picks up the push and republishes automatically — nothing else to
run. (You can still use `npm run build` locally any time just to preview
what the production build looks like.)

Other hosting this project also works with, if you ever change your mind:

- **Traditional web hosting (cPanel, FTP, a hosting company like Afrihost,
  Xneelo, etc.)** — run `npm run build`, then upload the *contents* of the
  `out/` folder it creates (not the folder itself) into your site's public
  folder (often called `public_html` or `www`) via FTP or your host's file
  manager.
- **GitHub Pages** — the same `out/` folder can be published directly; see
  [Next.js's static export guide](https://nextjs.org/docs/app/guides/static-exports)
  if you go this route.

If you're not sure which of these matches your hosting, tell Claude the
name of your hosting provider (or paste the login page you use) and it can
walk you through the exact steps.

## Project structure, briefly

- `app/` — one folder per page (`about/`, `services/`, etc.), each with a
  `page.js` file. `app/page.js` is the homepage.
- `components/` — reusable pieces (header, footer, cards, the checklist,
  the modal) shared across pages.
- `lib/content.js` — most of the site's text and structured content in one
  place.
- `public/images/` — photos. `public/documents/` — the legal PDFs.
- `app/globals.css` — the design system: colours, fonts, spacing, buttons,
  card styles. Change a colour here and it updates everywhere.

## Notes for whoever maintains this later

- Built with Next.js (App Router), exported as a fully static site
  (`output: "export"` in `next.config.mjs`) — no Node.js server, database
  or API routes in production.
- The font (Archivo) is self-hosted via `@fontsource-variable/archivo`
  rather than fetched from Google Fonts at runtime, so the site works
  fully offline / on restricted networks.
- All interactive bits (accordions, the sector/problem selectors, the scam
  checklist, the sample-report modal) are plain React state — nothing is
  sent to a server, matching the design's "nothing you tap here is sent to
  us" promise on the checklist.
- Layout is fully fluid (`repeat(auto-fit, minmax(...))` grids everywhere,
  no fixed breakpoints), per the original design brief.
