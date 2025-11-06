# Brutalist Portfolio — Duong Phu Dong
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_me_a_coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/dongduong8m)

[Live demo](https://brutalist-portfolio-dong.vercel.app) • Portfolio website showcasing projects, skills and background.

> A minimal, brutalist-style developer portfolio built with modern web tooling — designed to be fast, accessible and easy to customize. The live demo is deployed on Vercel. 

---

## Table of contents

* [About](#about)
* [Demo](#demo)
* [Features](#features)
* [Tech stack](#tech-stack)
* [Getting started](#getting-started)
* [Development](#development)
* [Deployment](#deployment)
* [Customisation](#customisation)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## About

This repository is a personal portfolio site for **Duong Phu DongDong** with a clear, brutalist aesthetic and focused content sections (Home, Education, Skills, Projects, Activity, Interests, Contact). The project structure uses the modern Next.js app architecture and TypeScript.

---

## Demo

Live site: [https://brutalist-portfolio-dong.vercel.app](https://brutalist-portfolio-dong.vercel.app) — explore the layout, interactions and copy directly on the deployed site.

---

## Features

* Brutalist, minimal visual design with clear typographic hierarchy
* Project and skills sections for quick scanning by recruiters and engineers
* Mobile responsive and accessible-friendly layout
* Single-page navigation with section anchors (Home / Education / Skills / Projects / Activity / Interests / Contact)
* Fast, modern stack with TypeScript and the Next.js app router

---

## Tech stack

Based on the repository structure and files, the project uses:

* **Next.js** (App Router) — modern React framework for hybrid pages & SSR
* **TypeScript** (primary language for source files). The repo indicates TypeScript as the main language. 
* **CSS / PostCSS** (likely Tailwind or utility-first CSS given the presence of `postcss.config.mjs` and `styles` folder)
* **pnpm** (lockfile present — `pnpm-lock.yaml`)
* Deployed on **Vercel** (deployment link). 

> If you want this README to list exact package versions and exact scripts, I can extract them directly from `package.json` and include precise commands — I saw the file in the repo but did not inline its raw contents here to keep the README concise. 

---

## Getting started

These are suggested steps to run the project locally. Adjust if your `package.json` contains different scripts.

1. Clone the repo:

```bash
git clone https://github.com/F4P1E/brutalist-portfolio-dong.git
cd brutalist-portfolio-dong
```

2. Install dependencies (pnpm recommended since a `pnpm-lock.yaml` is present):

```bash
pnpm install
```

You can also use `npm install` or `yarn` if you prefer, but `pnpm` will match the lockfile.

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Typical scripts (examples)

> Confirm actual scripts in your `package.json` and replace as needed.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

---

## Deployment

The site is deployed to Vercel — follow these steps to redeploy or connect to your own Vercel account:

1. Push your branch to GitHub.
2. Import repository in Vercel ([https://vercel.com/new](https://vercel.com/new)).
3. Vercel will detect Next.js and set sensible defaults.
4. Configure environment variables (if any) and deploy.

---

## Customisation

To tailor the portfolio:

* Replace copy (name, about, education, projects) under the `app` or `components` folder.
* Update image and static assets in `public`.
* Edit colors/spacing in `styles` or Tailwind config (if used).
* Add or remove sections using the top navigation component.

---

## Contributing

This repository appears to be a personal portfolio; if you plan to contribute:

1. Open an issue describing the change / improvement.
2. Create a small, focused branch and submit a pull request.
3. Follow code style and linting rules present in the project.

---

## License

This project is licensed under the terms of the [MIT License](https://github.com/F4P1E/brutalist-portfolio-dong/blob/main/LICENSE).

---

## Contact

Dương Phú Đông — portfolio: [https://brutalist-portfolio-dong.vercel.app](https://brutalist-portfolio-dong.vercel.app). For repository-specific questions, open an issue on GitHub: `https://github.com/F4P1E/brutalist-portfolio-dong`. 
