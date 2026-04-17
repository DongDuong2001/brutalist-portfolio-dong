# Brutalist Portfolio - Duong Phu Dong

[![Buy Me a Coffee](https://img.shields.io/badge/Buy_me_a_coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/lab68dev)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/DDuong884)

Modern, brutalist portfolio built with Next.js App Router and TypeScript.

- Live site: [duongphudong2001.vercel.app](https://duongphudong2001.vercel.app/)
- Repository: [DongDuong2001/brutalist-portfolio-dong](https://github.com/DongDuong2001/brutalist-portfolio-dong)

## Overview

This project is a personal portfolio for Duong Phu Dong with a strong visual identity,
section-based storytelling, and recruiter-focused project discovery.

Main portfolio sections:

- Home
- Projects
- Technical Skills
- Tech Radar
- Education
- Activity
- Interests
- Contact

## Highlights

### User Experience

- Section navigation with keyboard shortcuts (1-8)
- Command palette (Ctrl/Cmd + K) for section and project search
- Theme toggle support (light/dark)
- Highly customized responsive layout across all sections

### Project Discovery and SEO

- Dynamic project detail routes at /projects/:slug
- Dynamic Open Graph images for project detail pages
- Auto-generated sitemap entries for project pages

### API and Backend Utilities

- Contact form email endpoint using Nodemailer
- Profile view counting with session de-duplication
- Neon/Postgres persistence for profile views when DATABASE_URL is configured
- In-memory profile view fallback when DATABASE_URL is not set
- PDF endpoint with:
  - project index mode
  - Harvard-style full portfolio mode

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript 5
- UI: React 19, Radix UI, Lucide React
- Styling: Tailwind CSS 4, PostCSS
- Motion: Framer Motion
- Forms and validation: React Hook Form, Zod
- Email: Nodemailer
- PDF: pdf-lib
- Analytics storage: @neondatabase/serverless (Neon/Postgres)
- Package manager: pnpm

## Project Structure

```text
app/
  api/
    contact/route.ts
    profile-views/route.ts
    project-index/route.ts
  projects/[slug]/
    page.tsx
    opengraph-image.tsx
  sitemap.ts
  robots.ts
  page.tsx
components/
  hero.tsx
  projects.tsx
  skills.tsx
  tech-radar.tsx
  education.tsx
  activity.tsx
  interests.tsx
  contact.tsx
  command-palette.tsx
data/
  projects.ts
  skills.ts
app/globals.css
```

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- pnpm 10+

### Install

```bash
git clone https://github.com/DongDuong2001/brutalist-portfolio-dong.git
cd brutalist-portfolio-dong
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Environment Variables

Create .env.local and set the following values as needed:

- DATABASE_URL
  - Optional
  - Enables persistent profile view tracking in Neon/Postgres
- GMAIL_USER
  - Required for contact email sending
  - Sender Gmail account used by the contact endpoint
- GMAIL_APP_PASSWORD
  - Required for contact email sending
  - App password used by Nodemailer auth

Notes:

- If DATABASE_URL is missing, profile views use in-memory fallback storage.
- Contact form delivery requires both Gmail variables.

## Scripts

- pnpm dev: start development server
- pnpm build: build production bundle
- pnpm start: run production server
- pnpm lint: run lint checks
- pnpm exec tsc --noEmit: run TypeScript checks

## API Routes

- POST /api/contact
  - Sends portfolio contact message via Nodemailer
- GET /api/profile-views
  - Returns total profile view count
- POST /api/profile-views
  - Registers unique session view
  - Requires x-session-id request header
- GET /api/project-index
  - Returns PDF response

PDF query parameters:

- style=harvard
  - Returns full Harvard-style portfolio PDF
- download=1
  - Forces attachment download instead of inline preview

Example routes:

- /api/project-index
- /api/project-index?style=harvard
- /api/project-index?style=harvard&download=1

## Customization Map

Use these files as the primary content and design control points:

- Project content: data/projects.ts
- Skills content: data/skills.ts
- Home section: components/hero.tsx
- Section layouts:
  - components/projects.tsx
  - components/skills.tsx
  - components/tech-radar.tsx
  - components/education.tsx
  - components/activity.tsx
  - components/interests.tsx
  - components/contact.tsx
- Global style language: app/globals.css

## Deployment

This project is optimized for Vercel.

1. Push repository changes to GitHub.
2. Import the project in Vercel.
3. Configure environment variables.
4. Deploy.

Recommended pre-deploy checks:

- pnpm lint
- pnpm exec tsc --noEmit
- Verify /api/contact, /api/profile-views, and /api/project-index

## Contributing

This is a personal portfolio project, but suggestions are welcome.

1. Open an issue with clear context.
2. Create a focused branch.
3. Submit a concise pull request.

## License

MIT. See [LICENSE](LICENSE).

## Contact

Duong Phu Dong

- Portfolio: [duongphudong2001.vercel.app](https://duongphudong2001.vercel.app/)
- GitHub: [github.com/DongDuong2001](https://github.com/DongDuong2001)
- LinkedIn: [linkedin.com/in/duong-phu-dong](https://www.linkedin.com/in/duong-phu-dong/)
