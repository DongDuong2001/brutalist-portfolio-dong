export type ProjectAward = {
  label: string
  platform: string
  url: string
  badge?: {
    src: string
    alt: string
    width: number
    height: number
  }
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
  role?: string
  proof?: string
  recruiterTakeaway?: string
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
      "Lab68 Dev Platform is a monorepo that powers a collaborative product development workspace. It provides dashboards for planning, documentation, meetings, AI-assisted workflows, and role-aware access controls built on top of Next.js App Router, TypeScript, and a modular component system.",
    tech: ["Next.js", "JavaScript", "TypeScript", "API Integration"],
    link: "https://lab68devplatform.vercel.app/",
    github: "https://github.com/lab68dev/lab68dev-platform",
    highlighted: true,
    role: "Founder / Full-stack Developer",
    proof: "#1 Product of the Day on Unikorn",
    recruiterTakeaway: "Can turn a broad startup workflow into a usable production platform.",
    stage: "shipped",
    award: {
      label: "#1 Product of the Day",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/lab68dev-platform?ref=embed-lab68dev-platform",
      badge: {
        src: "https://unikorn.vn/api/widgets/badge/lab68dev-platform/rank?theme=light&type=daily",
        alt: "lab68dev Platform - Hang ngay",
        width: 250,
        height: 64,
      },
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
      "A modern, multilingual CV/resume builder that lets users create professional resumes with real-time preview, customizable templates, and export functionality built for speed and simplicity.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://lab68cvbuilder.vercel.app/en",
    github: "https://github.com/lab68dev/lab68cvbuilder",
    highlighted: true,
    role: "Founder / Product Engineer",
    proof: "#1 Product of the Week on Forg, #1 Product of the Day on Unikorn",
    recruiterTakeaway: "Strongest proof of user-focused product execution and launch quality.",
    stage: "shipped",
    awards: [
      {
        label: "#1 Product of the Week",
        platform: "Forg",
        url: "https://forg.to/products/lab68-cv-builder",
        badge: {
          src: "https://forg.to/api/badges/launch-winner/lab68-cv-builder",
          alt: "lab68 CV Builder - 1st Place on Forg",
          width: 200,
          height: 64,
        },
      },
      {
        label: "#1 Product of the Day",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/lab68dev-cv-builder?ref=embed-lab68dev-cv-builder",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/lab68dev-cv-builder/rank?theme=light&type=daily",
          alt: "lab68CV Builder - Hang ngay",
          width: 250,
          height: 64,
        },
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
    title: "PUDO CODE SYSTEM",
    category: "METHODOLOGY / AI",
    year: "2026 - Current",
    description:
      "A structured 4-phase methodology (Plan -> Understand -> Develop -> Optimize) for coding with AI assistants. Designed to eliminate 'Chaos Coding' and turn AI from a slot machine into a precision tool.",
    tech: ["AI Prompting", "Workflow", "Documentation", "System Design"],
    link: "https://github.com/DongDuong2001/pudo-code-system",
    github: "https://github.com/DongDuong2001/pudo-code-system",
    highlighted: true,
    role: "Methodology Author / AI Workflow Designer",
    proof: "#2 Product of the Day and #3 Product of the Week on Unikorn",
    recruiterTakeaway: "Shows structured thinking, documentation quality, and AI-assisted engineering maturity.",
    stage: "shipped",
    awards: [
      {
        label: "#2 Product of the Day",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/pudo?ref=embed-pudo",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/pudo/rank?theme=light&type=daily",
          alt: "Pudo - Daily",
          width: 250,
          height: 64,
        },
      },
      {
        label: "#3 Product of the Week",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/pudo?ref=embed-pudo",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/pudo/rank?theme=light&type=weekly",
          alt: "Pudo - Weekly",
          width: 250,
          height: 64,
        },
      },
    ],
    kpis: {
      users: "Public Access",
      launchTime: "May 2026",
      coreImpact: "Precision AI workflows",
      performance: "16+ optimized prompts",
    },
    caseStudy: {
      problem: "AI-assisted development often becomes 'Chaos Coding' without a clear structure, leading to fragile code and wasted time.",
      build: "Codified a repeatable 4-phase cycle and a library of domain-specific skills for agents and humans.",
      result: "Established a standardized operating system for AI development, now integrated as the default workflow for multiple projects.",
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
    role: "Full-stack Developer",
    proof: "AI wellness MVP shipped to web",
    recruiterTakeaway: "Can combine product UX with AI-assisted recommendation flows.",
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
    role: "Backend / Systems Developer",
    proof: "#3 Product of the Day on Unikorn",
    recruiterTakeaway: "Shows backend systems interest beyond web UI work.",
    stage: "now-building",
    award: {
      label: "#3 Product of the Day",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/graft?ref=embed-graft",
      badge: {
        src: "https://unikorn.vn/api/widgets/badge/graft/rank?theme=light&type=daily",
        alt: "Graft - Hang ngay",
        width: 250,
        height: 64,
      },
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
    role: "Desktop Product Builder",
    proof: "Featured on Unikorn during active build",
    recruiterTakeaway: "Expands product craft into polished desktop workflows.",
    stage: "now-building",
    award: {
      label: "Featured",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/slideglint?ref=embed-slideglint",
      badge: {
        src: "https://unikorn.vn/api/widgets/badge/slideglint?theme=light",
        alt: "SlideGlint on Unikorn.vn",
        width: 256,
        height: 64,
      },
    },
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
    role: "Frontend Contributor",
    proof: "Reusable UI contribution",
    recruiterTakeaway: "Comfortable contributing inside existing frontend projects.",
    stage: "shipped",
  },
  {
    title: "SYNTAX CINEMA APP",
    category: "WEB APP",
    year: "2025",
    description:
      "A movie discovery and browsing web app with cinema-focused UI to explore titles, view details, and track favorites.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://syntaxcinema.vercel.app/",
    github: "https://github.com/F4P1E/syntax-cinema-app",
    role: "Frontend / Product Developer",
    proof: "Movie discovery product shipped",
    recruiterTakeaway: "Demonstrates UI polish and consumer-app structure.",
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
    role: "Python App Developer",
    proof: "Finance tracking workflow shipped",
    recruiterTakeaway: "Shows practical data and workflow modeling.",
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
    role: "Algorithm Developer",
    proof: "A* route simulation",
    recruiterTakeaway: "Demonstrates algorithmic problem solving and visualization.",
    stage: "shipped",
  },
  {
    title: "NEO RUST LIBRARY",
    category: "OPEN SOURCE",
    year: "2025",
    description: "Contributing to RMIT NCT's Rust library project for educational and research purposes.",
    tech: ["Rust", "Library Development", "Documentation"],
    link: "https://github.com/rmit-nct/neo-rust-library",
    role: "Open Source Contributor",
    proof: "Rust library contribution",
    recruiterTakeaway: "Shows willingness to work in typed systems and shared codebases.",
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
    role: "Frontend Developer",
    proof: "Meta certificate capstone",
    recruiterTakeaway: "Validates frontend fundamentals and API-driven UI work.",
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
