export type ProjectAward = {
  label: string
  platform: string
  url: string
}

export type ProjectKpis = {
  users: string
  launchTime: string
  coreImpact: string
  performance: string
}

export type ProjectCaseStudy = {
  problem: string
  build: string
  result: string
}

export type ProjectStage = "now-building" | "shipped"

export type Project = {
  title: string
  category: string
  year: string
  description: string
  tech: string[]
  link: string
  github?: string
  highlighted?: boolean
  award?: ProjectAward
  awards?: ProjectAward[]
  kpis?: ProjectKpis
  caseStudy?: ProjectCaseStudy
  stage?: ProjectStage
}

export const projects: Project[] = [
  {
    title: "LAB68DEV PLATFORM",
    category: "STARTUP CREATOR PROJECT",
    year: "2025 - Current",
    description:
      "Lab68 Dev Platform is a monorepo that powers a collaborative product development workspace. It provides dashboards for planning, documentation, meetings, AI-assisted workflows, and role-aware access controls—built on top of Next.js App Router, TypeScript, and a modular component system.",
    tech: ["Next.js", "JavaScript", "TypeScript", "API Integration"],
    link: "https://lab68devplatform.vercel.app/",
    github: "https://github.com/lab68dev/lab68dev-platform",
    highlighted: true,
    stage: "shipped",
    award: {
      label: "#1 Product of the Day",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/lab68dev-platform",
    },
    kpis: {
      users: "30+ users",
      launchTime: "Nov 2025",
      coreImpact: "Unified startup workflow",
      performance: "Fast dashboard rendering",
    },
    caseStudy: {
      problem: "Startup teams were juggling docs, tasks, and meetings in disconnected tools.",
      build: "Built a monorepo workspace with role-aware modules for planning, docs, and AI-assisted flows.",
      result: "Launched in Nov 2025, reached 30+ users, and won Product of the Day on Unikorn.",
    },
  },
  {
    title: "LAB68 CV BUILDER",
    category: "STARTUP CREATOR PROJECT",
    year: "2026 - Current",
    description:
      "A modern, multilingual CV/resume builder that lets users create professional resumes with real-time preview, customizable templates, and export functionality — built for speed and simplicity.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://lab68cvbuilder.vercel.app/en",
    github: "https://github.com/lab68dev/lab68cvbuilder",
    highlighted: true,
    stage: "shipped",
    awards: [
      {
        label: "#1 Product of the Week",
        platform: "Forg",
        url: "https://forg.to/products/lab68-cv-builder",
      },
      {
        label: "#1 Product of the Day",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/lab68dev-cv-builder",
      },
    ],
    kpis: {
      users: "100+ users",
      launchTime: "Feb 2026",
      coreImpact: "Faster resume creation",
      performance: "Real-time preview under 60ms",
    },
    caseStudy: {
      problem: "Users needed a fast way to build strong CVs without design tools.",
      build: "Designed a multilingual builder with instant preview, reusable templates, and export support.",
      result: "Launched in Feb 2026, reached 100+ users, and hit #1 on both Forg and Unikorn.",
    },
  },
  {
    title: "ATHERA AI",
    category: "FULL-STACK",
    year: "2025",
    description:
      "An AI-powered wellness platform providing personalized health and wellness recommendations through intelligent automation.",
    tech: ["Next.js", "React", "TypeScript", "AI/ML", "Tailwind CSS"],
    link: "https://atherawellness.vercel.app/",
    github: "https://github.com/DongDuong2001/Athera-AI",
    stage: "shipped",
    caseStudy: {
      problem: "Wellness guidance is often generic and hard to personalize.",
      build: "Built an AI-driven recommendation flow with clear UX and modular services.",
      result: "Delivered a practical wellness MVP with actionable personalized output.",
    },
  },
  {
    title: "GRAFT",
    category: "SYSTEMS / BACKEND",
    year: "2026 - Current",
    description:
      "A Go-based project focused on building reliable backend tooling and workflow automation with performance-first architecture.",
    tech: ["Go", "Backend", "CLI", "Systems Design"],
    link: "",
    github: "https://github.com/DongDuong2001/graft",
    highlighted: true,
    stage: "now-building",
    award: {
      label: "#3 Product of the Day",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/graft",
    },
    kpis: {
      users: "Early access",
      launchTime: "In progress",
      coreImpact: "Backend workflow reliability",
      performance: "Low-latency CLI operations",
    },
    caseStudy: {
      problem: "Backend workflows become fragile and hard to scale under delivery pressure.",
      build: "Implementing a Go-first toolkit focused on reliability, composability, and automation.",
      result: "Already achieved #3 Product of the Day on Unikorn during active build phase.",
    },
  },
  {
    title: "SLIDEGLINT",
    category: "DESKTOP APP",
    year: "2026 - Current",
    description:
      "A desktop application project in active development, centered on polished interactions and productivity-focused presentation workflows.",
    tech: ["Desktop App", "Productivity", "UI/UX", "Cross-Platform"],
    link: "",
    github: "https://github.com/DongDuong2001/SlideGlint",
    highlighted: true,
    stage: "now-building",
    kpis: {
      users: "Private testing",
      launchTime: "In progress",
      coreImpact: "Faster presentation workflow",
      performance: "Smooth desktop interaction",
    },
    caseStudy: {
      problem: "Presentation workflows on desktop tools can feel slow and fragmented.",
      build: "Building a desktop-first app with polished interaction patterns and efficient content flow.",
      result: "Established a stable foundation and iterative releases with growing validation.",
    },
  },
  {
    title: "GFCC WEBSITE",
    category: "CONTRIBUTION",
    year: "2023",
    description:
      "Contributed reusable UI components and features to the GOLDEN FLAMES COMPETITION CLUB website, enhancing the user interface and component library.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://gfcc-website-project.vercel.app/",
    stage: "shipped",
  },
  {
    title: "SYNTAX CINEMA APP",
    category: "WEB APP",
    year: "2025",
    description:
      "A movie discovery and browsing web app — cinema-focused UI to explore titles, view details, and track favorites.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://syntaxcinema.vercel.app/",
    github: "https://github.com/F4P1E/syntax-cinema-app",
    stage: "shipped",
  },
  {
    title: "PERSONAL FINANCE TRACK",
    category: "WEB APP",
    year: "2024",
    description:
      "A personal finance management application for tracking expenses, budgeting, and financial goal setting with data visualization.",
    tech: ["Python", "Local Storage"],
    link: "https://github.com/DongDuong2001/Personal-Finance-Track",
    stage: "shipped",
  },
  {
    title: "A* DELIVERY DRONE",
    category: "ALGORITHM",
    year: "2024",
    description:
      "Implementation and simulation of the A* pathfinding algorithm to optimize delivery routes for autonomous drones, including a visualizer and route simulation.",
    tech: ["Python", "A*", "Simulation", "Matplotlib"],
    link: "https://github.com/F4P1E/A-Star-Algorithm-for-Delivery-Drone",
    stage: "shipped",
  },
  {
    title: "NEO RUST LIBRARY",
    category: "OPEN SOURCE",
    year: "2025",
    description: "Contributing to RMIT NCT's Rust library project for educational and research purposes.",
    tech: ["Rust", "Library Development", "Documentation"],
    link: "https://github.com/rmit-nct/neo-rust-library",
    stage: "shipped",
  },
  {
    title: "META FRONTEND PROJECT",
    category: "CERTIFICATION",
    year: "2024",
    description:
      "Capstone project for Meta Frontend Developer Professional Certificate demonstrating full-stack skills.",
    tech: ["React", "JavaScript", "HTML/CSS", "API Integration"],
    link: "https://meta-frontend-developer-project.vercel.app/",
    github: "https://github.com/F4P1E/meta-frontend-developer-project",
    stage: "shipped",
  },
]

export const nowBuildingProjects = projects.filter((project) => project.stage === "now-building")

export function slugifyProjectTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => slugifyProjectTitle(project.title) === slug)
}