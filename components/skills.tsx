import { CheckCircle2, Code2, Database, Rocket, ShieldCheck, TerminalSquare, Wrench, type LucideIcon } from "lucide-react"

import { skills as skillCategories } from "@/data/skills"

const categoryNarrative: Record<string, { summary: string; signal: string; Icon: LucideIcon }> = {
  LANGUAGES: {
    summary: "Languages used across product UI, APIs, automation, and coursework.",
    signal: "Type-safe app delivery and backend fluency.",
    Icon: Code2,
  },
  "FRAMEWORKS & LIBRARIES": {
    summary: "Frameworks used to ship interfaces, services, and product workflows.",
    signal: "Full-stack implementation speed.",
    Icon: Rocket,
  },
  "TOOLS & INFRASTRUCTURE": {
    summary: "Tools for version control, deployment, database work, and API testing.",
    signal: "Comfortable with the full shipping path.",
    Icon: Wrench,
  },
  CONCEPTS: {
    summary: "Engineering concepts applied across secure apps and service design.",
    signal: "System thinking beyond UI implementation.",
    Icon: ShieldCheck,
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

const summaryCards = [
  { label: "Primary stack", value: "Next.js / React", Icon: Code2 },
  { label: "Backend range", value: "Java / Python / Go", Icon: TerminalSquare },
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
  const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0)

  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-6 md:mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} TECHNICAL SKILLS</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Quick-scan skill map for recruiters: what I use, where I used it, and why it matters.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 mb-5 md:mb-7">
          {summaryCards.map(({ label, value, Icon }) => (
            <div key={label} className="border-2 border-foreground bg-card p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">{label}</p>
              </div>
              <p className="font-mono text-sm md:text-base font-black leading-tight">{value}</p>
            </div>
          ))}
        </div>

        <div className="border-2 md:border-4 border-foreground bg-card p-4 md:p-5 mb-5 md:mb-7">
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                Skill Map
              </p>
              <h3 className="font-mono text-xl md:text-2xl font-black uppercase leading-tight">
                {totalSkills} practical skills across {skillCategories.length} capability groups.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="border-2 border-foreground bg-background/70 p-2.5">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Groups</p>
                <p className="font-mono text-xl font-black">{skillCategories.length}</p>
              </div>
              <div className="border-2 border-foreground bg-background/70 p-2.5">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Skills</p>
                <p className="font-mono text-xl font-black">{totalSkills}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {skillCategories.map((category, categoryIndex) => {
            const narrative = categoryNarrative[category.category]
            const Icon = narrative?.Icon ?? Code2

            return (
              <article key={category.category} className="border-2 md:border-4 border-foreground bg-card">
                <div className="grid lg:grid-cols-[240px_1fr]">
                  <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-foreground bg-secondary p-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-card">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[10px] font-black text-muted-foreground">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-mono text-lg md:text-xl font-black uppercase leading-tight mb-2">
                      {category.category}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                      {narrative?.summary ?? "Applied technical capability across practical software projects."}
                    </p>
                    <div className="border-2 border-foreground bg-card px-3 py-2">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-1">Recruiter Signal</p>
                      <p className="font-mono text-xs font-bold">{narrative?.signal ?? "Practical engineering execution."}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 p-3 md:p-4 md:grid-cols-2 xl:grid-cols-3">
                    {category.skills.map((skill) => {
                      const evidence = getEvidence(skill.name)

                      return (
                        <div key={skill.name} className="border-2 border-foreground bg-background/70 p-3">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="inline-flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                              <h4 className="font-mono text-sm font-black uppercase leading-tight">{skill.name}</h4>
                            </div>
                            <span className="border border-foreground/60 px-2 py-0.5 font-mono text-[10px] font-bold">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="mb-2 h-1.5 border border-foreground/40 bg-muted/70">
                            <div className="h-full bg-accent" style={{ width: `${skill.level}%` }} />
                          </div>

                          <p className="text-xs leading-relaxed mb-1">
                            <span className="font-mono text-[10px] font-bold text-muted-foreground">USED IN: </span>
                            {evidence.usedIn}
                          </p>
                          <p className="text-xs leading-relaxed">
                            <span className="font-mono text-[10px] font-bold text-muted-foreground">PROOF: </span>
                            {evidence.proof}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
