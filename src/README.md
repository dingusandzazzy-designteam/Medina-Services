# Medina Services — Website (Next.js)

Phase 3 build. Next.js (App Router, TypeScript) — single-page home + `/about` + `/contact`.

## Run

```bash
cd src
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

## Structure

```
app/
  layout.tsx        # fonts (Raleway + Cormorant), metadata, nav/footer, JSON-LD
  page.tsx          # home — S1–S10 + Recent Work gallery
  about/page.tsx
  contact/page.tsx
  globals.css       # design system (tokens, motion, all section styles)
  sitemap.ts, robots.ts
components/
  Nav, Footer, Logo, Button, Placeholder, Reveal, Parallax
  sections/         # one component per home section
  forms/LeadForm    # estimate + contact form (UI only — see TODO)
lib/
  content.ts        # ALL copy, verbatim from the closed copy doc
  icons.tsx         # brand line icons (navy/white)
```

## Design source of truth
`../design/` (Art-Direction, tokens-from-brandguide, Motion-Principles) and `../plan/01.IA.md`.

## Known TODOs (later phases)
- **Images** — every `<Placeholder slot="IMG-..">` is a stand-in. Generate from `../prompts/homepage.md`, drop into `public/`, swap for `next/image`.
- **Logo** — placeholder (`components/Logo.tsx`); swap client vector/PNG.
- **Forms (Phase 4)** — `LeadForm` is UI-only; wire `/api/lead` Route Handler → email to info@medinaservices.us + spam protection. Add the booking tool.
- **Build safety nets (Phase 6/9)** — `next.config.mjs` currently sets `ignoreBuildErrors`/`ignoreDuringBuilds`; remove and fix anything surfaced.
