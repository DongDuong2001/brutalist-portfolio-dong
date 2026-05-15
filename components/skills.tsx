import { CheckCircle2, Code2, Database, Layers3, Rocket, ShieldCheck, TerminalSquare } from "lucide-react"

import { skills as skillCategories } from "@/data/skills"

const categoryNarrative: Record<string, { summary: string; signal: string }> = {
  LANGUAGES: {
    summary: "Production languages used across web products, APIs, automation, and coursework.",
    signal: "Type-safe app delivery and backend fluency.",
  },
  "FRAMEWORKS & LIBRARIES": {
    summary: "Frameworks used to ship product interfaces, API services, and fast iteration loops.",
    signal: "Full-stack implementation speed.",
  },
  "TOOLS & INFRASTRUCTURE": {
    summary: "Delivery tooling for source control, deployment, database work, and API testing.",
    signal: "Comfortable with the full shipping path.",
  },
  CONCEPTS: {
    summary: "Core engineering concepts applied across secure apps and scalable service design.",
    signal: "System thinking beyond UI implementation.",
  },
}

const evidenceBySkill: Record<string, { usedIn: string; proof: string }> = {
  TypeScript: {
    usedIn: "Lab68 CV Builder, Lab68 Dev Platform, Syntax Cinema",
    proof: "Typed product surfaces and reusable component systems.",
  },
  "JavaScript (ES6+)": {
    usedIn: "Meta frontend capstone, Lab68 Dev Platform",
    proof: "Frontend fundamentals across deployed web apps.",
  },
  SQL: {
    usedIn: "PostgreSQL and Supabase-backed workflows",
    proof: "Data modeling for product dashboards and secure access.",
  },
  HTML5: {
    usedIn: "Portfolio, product pages, frontend capstones",
    proof: "Accessible page structure and responsive layouts.",
  },
  CSS3: {
    usedIn: "Tailwind interfaces and custom visual systems",
    proof: "Polished responsive UI with strong layout control.",
  },
  Java: {
    usedIn: "Spring Boot backend services",
    proof: "API and service-layer implementation experience.",
  },
  Python: {
    usedIn: "Personal Finance Track, A* Delivery Drone",
    proof: "Automation, algorithms, and data visualization.",
  },
  "Next.js (App Router)": {
    usedIn: "Lab68 CV Builder, Lab68 Dev Platform",
    proof: "Production app routing, deployment, and API integration.",
  },
  React: {
    usedIn: "Lab68 products, Athera AI, Syntax Cinema",
    proof: "Component-driven product development.",
  },
  "Node.js": {
    usedIn: "API-backed product workflows",
    proof: "Server-side integration and app plumbing.",
  },
  Express: {
    usedIn: "REST API coursework and backend prototypes",
    proof: "Simple service composition and routing patterns.",
  },
  FastAPI: {
    usedIn: "Python API prototypes",
    proof: "Fast API delivery for data and AI-adjacent features.",
  },
  "Tailwind CSS": {
    usedIn: "Lab68 CV Builder, portfolio, product UIs",
    proof: "Dense, responsive interfaces without heavy CSS overhead.",
  },
  "Spring Boot": {
    usedIn: "Java backend learning and service architecture",
    proof: "Structured backend foundations for enterprise-style apps.",
  },
  "Git / GitHub": {
    usedIn: "All public repositories and team projects",
    proof: "Version control, public code, and collaborative workflows.",
  },
  Docker: {
    usedIn: "Service setup and local development environments",
    proof: "Container-aware development for backend systems.",
  },
  "Supabase (PostgreSQL)": {
    usedIn: "Product database workflows",
    proof: "Relational storage with auth-aware app patterns.",
  },
  "Neon Database": {
    usedIn: "Portfolio analytics and serverless Postgres",
    proof: "Cloud database integration in Next.js APIs.",
  },
  Vercel: {
    usedIn: "Lab68 apps, Athera AI, Syntax Cinema",
    proof: "Fast deployment pipeline for frontend products.",
  },
  "GitHub Actions (CI/CD)": {
    usedIn: "Repository automation and delivery checks",
    proof: "Familiar with automated quality gates.",
  },
  Postman: {
    usedIn: "API testing and backend validation",
    proof: "Practical endpoint testing during development.",
  },
  "REST API Design": {
    usedIn: "Backend leadership and product APIs",
    proof: "Clear contracts between frontend, backend, and data.",
  },
  Microservices: {
    usedIn: "Architecture study and service planning",
    proof: "Understands service boundaries and scaling tradeoffs.",
  },
  "Authentication (JWT/OAuth)": {
    usedIn: "Role-aware product workflows",
    proof: "Secure access patterns for user-facing systems.",
  },
  "Row-Level Security (RLS)": {
    usedIn: "Supabase/PostgreSQL access control",
    proof: "Data isolation awareness for multi-user products.",
  },
}

const capabilitySummary = [
  { label: "Primary stack", value: "Next.js / React", Icon: Code2 },
  { label: "Backend range", value: "Java / Go / Python", Icon: TerminalSquare },
  { label: "Data layer", value: "PostgreSQL / Supabase", Icon: Database },
  { label: "Delivery mode", value: "Build + Ship", Icon: Rocket },
]

function getEvidence(skillName: string) {
  return (
    evidenceBySkill[skillName] ?? {
      usedIn: "Portfolio projects and coursework",
      proof: "Applied in practical builds and technical learning.",
    }
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-8 md:mb-10">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} TECHNICAL STACK</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Evidence-based capability matrix. Each skill is connected to projects, delivery contexts, or engineering outcomes instead of only a self-rated score.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10">
          {capabilitySummary.map(({ label, value, Icon }) => (
            <div key={label} className="border-2 border-foreground bg-card px-3 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">
                  {label}
                </p>
              </div>
              <p className="font-mono text-sm md:text-base font-bold leading-tight">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6">
          {skillCategories.map((category, index) => {
            const narrative = categoryNarrative[category.category]
            const Icon = index % 2 === 0 ? Layers3 : ShieldCheck

            return (
              <article
                key={category.category}
                className={`skills-deck-card border-2 md:border-4 border-foreground bg-card p-4 md:p-5 ${
                  index % 2 === 0 ? "skills-deck-card-accent" : "skills-deck-card-muted"
                }`}
              >
                <div className="flex items-start justify-between gap-4 border-b-2 border-foreground pb-3 mb-4">
                  <div>
                    <span className="font-mono text-[10px] opacity-60 mb-1 block">
                      CAPABILITY_{String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-mono text-xl md:text-2xl font-black uppercase leading-tight break-words">
                      {category.category}
                    </h3>
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border-2 border-foreground bg-secondary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  {narrative?.summary ?? "Applied technical capability across practical software projects."}
                </p>

                <div className="border-2 border-foreground bg-background/70 px-3 py-2 mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                    Recruiter Signal
                  </p>
                  <p className="font-mono text-xs font-bold">{narrative?.signal ?? "Practical engineering execution."}</p>
                </div>

                <div className="grid gap-2.5">
                  {category.skills.map((skill) => {
                    const evidence = getEvidence(skill.name)

                    return (
                      <div key={skill.name} className="skills-signal-row border-2 border-foreground p-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="inline-flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                            <span className="font-mono text-sm font-bold uppercase tracking-tight">{skill.name}</span>
                          </div>
                          <span className="font-mono text-[10px] font-bold tabular-nums text-muted-foreground">
                            {skill.level}% confidence
                          </span>
                        </div>

                        <div className="h-[2px] w-full bg-foreground/10 overflow-hidden mb-2">
                          <div
                            className="h-full bg-accent transition-all duration-500 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        <div className="grid gap-1 text-xs leading-relaxed">
                          <p>
                            <span className="font-mono text-[10px] font-bold text-muted-foreground">USED IN: </span>
                            {evidence.usedIn}
                          </p>
                          <p>
                            <span className="font-mono text-[10px] font-bold text-muted-foreground">PROOF: </span>
                            {evidence.proof}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 md:mt-12 border-t border-foreground/20 pt-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Technical capability report // Evidence beats buzzwords
          </p>
        </div>
      </div>
    </section>
  )
}
