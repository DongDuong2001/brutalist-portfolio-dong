"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowUpRight, ChevronDown, Code2, ExternalLink, Github, LockKeyhole, Rocket, Trophy } from "lucide-react"

import {
  projects,
  slugifyProjectTitle,
  type Project,
  type ProjectAward,
  type ProjectCaseStudy,
  type ProjectKpis,
} from "@/data/projects"

const CATEGORIES = ["ALL", ...Array.from(new Set(projects.map((project) => project.category)))]

const totalAwards = projects.reduce((sum, project) => {
  if (project.awards) return sum + project.awards.length
  if (project.award) return sum + 1
  return sum
}, 0)

const projectSummary = [
  { label: "Shipped", value: String(projects.filter((project) => project.stage !== "now-building").length) },
  { label: "Live demos", value: String(projects.filter((project) => Boolean(project.link)).length) },
  { label: "Launch wins", value: String(totalAwards) },
  { label: "Now building", value: String(projects.filter((project) => project.stage === "now-building").length) },
]

const DEFAULT_KPIS: ProjectKpis = {
  users: "Early users",
  launchTime: "2-6 weeks",
  coreImpact: "Improved workflow",
  performance: "Production-ready",
}

const DEFAULT_CASE_STUDY: ProjectCaseStudy = {
  problem: "The existing workflow had friction, low visibility, or weak scalability.",
  build: "I designed and shipped a practical implementation focused on product quality and velocity.",
  result: "Delivered measurable product value and stronger reliability for real usage.",
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  useEffect(() => {
    const handleOpenProject = (event: Event) => {
      const detail = (event as CustomEvent<{ title?: string }>).detail
      if (!detail?.title) return

      setActiveFilter("ALL")
      setExpandedProject(detail.title)

      const projectId = `project-${slugifyProjectTitle(detail.title)}`
      const projectElement = document.getElementById(projectId)
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }

    window.addEventListener("portfolio:open-project", handleOpenProject)
    return () => window.removeEventListener("portfolio:open-project", handleOpenProject)
  }, [])

  const filteredProjects = useMemo(
    () => (activeFilter === "ALL" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  )

  const getAwards = (project: Project): ProjectAward[] => {
    if (project.awards && Array.isArray(project.awards)) return project.awards
    if (project.award) return [project.award]
    return []
  }

  const getKpis = (project: Project): ProjectKpis => project.kpis ?? DEFAULT_KPIS
  const getCaseStudy = (project: Project): ProjectCaseStudy => project.caseStudy ?? DEFAULT_CASE_STUDY

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 md:mb-10">
          <div className="self-start">
            <div className="border-2 border-foreground p-2 inline-block rounded-xl">
              <h2 className="font-mono text-2xl md:text-4xl font-bold">{">"} PROJECTS</h2>
            </div>
            <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Product case studies: role, problem, build, result, stack, and links.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <a
              href="/api/project-index"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground px-3 py-1 font-mono text-xs font-bold hover:bg-secondary transition-colors rounded-lg"
            >
              PROJECT INDEX PDF
            </a>
            <div className="border-2 border-foreground bg-accent px-4 py-2 inline-block text-accent-foreground font-mono text-xs font-bold rounded-lg shadow-[2px_2px_0_0_var(--foreground)]">
              {filteredProjects.length} PROJECT{filteredProjects.length !== 1 && "S"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
          {projectSummary.map((item) => (
            <div key={item.label} className="border-2 border-foreground bg-card px-3 py-2.5 rounded-xl">
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="font-mono text-base md:text-lg font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`border-2 border-foreground px-3 py-1 font-mono text-xs font-bold transition-all rounded-lg ${
                activeFilter === category ? "bg-accent text-accent-foreground shadow-[2px_2px_0_0_var(--foreground)]" : "bg-card hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const featured = project.year.includes("Current")
            const highlighted = Boolean(project.highlighted)
            const awards = getAwards(project)
            const kpis = getKpis(project)
            const caseStudy = getCaseStudy(project)
            const slug = slugifyProjectTitle(project.title)
            const isExpanded = expandedProject === project.title
            const visibleTech = project.tech.slice(0, 4)
            const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0)
            const activeProject = project.stage === "now-building" || featured
            const statusLabel = project.stage === "now-building" ? "BUILDING" : featured ? "ACTIVE" : "SHIPPED"

            return (
              <article
                key={project.title}
                id={`project-${slug}`}
                className={`group relative flex flex-col overflow-hidden border-2 border-foreground bg-card rounded-xl transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-secondary/55 hover:shadow-[4px_4px_0_0_var(--foreground)] ${
                  featured ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : ""
                } ${highlighted ? "border-l-4 border-l-accent" : ""}`}
              >
                <div className="border-b-2 border-foreground bg-secondary/70 p-4 md:p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <span className="border border-foreground/70 bg-background px-2 py-1 font-mono text-[10px] font-bold uppercase leading-none text-foreground rounded-sm">
                        {project.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 border px-2 py-1 font-mono text-[10px] font-bold uppercase leading-none rounded-sm ${
                          activeProject
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-foreground/30 bg-card text-muted-foreground"
                        }`}
                      >
                        {activeProject && <Rocket className="h-3 w-3" aria-hidden="true" />}
                        {statusLabel}
                      </span>
                    </div>
                    <span className="shrink-0 pt-0.5 font-mono text-[10px] text-muted-foreground md:text-xs">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-mono text-lg font-bold leading-tight md:text-xl">{project.title}</h3>
                      <p className="mt-2 font-mono text-[10px] uppercase text-muted-foreground md:text-xs">
                        {project.role ?? project.category}
                      </p>
                    </div>
                    {highlighted && (
                      <span
                        title="Highlighted project"
                        role="img"
                        aria-label="Highlighted project"
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center border-2 border-foreground bg-foreground text-background rounded-lg shadow-[1px_1px_0_0_var(--foreground)]"
                      >
                        <Trophy className="h-4 w-4" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-1 gap-4">
                  <p className={`text-sm leading-relaxed text-foreground/90 ${isExpanded ? "" : "line-clamp-3"}`}>
                    {project.description}
                  </p>

                  <div className="border-l-4 border-accent bg-secondary/35 px-3 py-2 rounded-r-lg">
                    <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Impact</p>
                    <p className="mt-1 text-xs font-medium leading-relaxed">
                      {project.recruiterTakeaway ?? caseStudy.result}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-y border-foreground/20 py-2.5">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Proof</p>
                      <p className="mt-1 text-xs font-medium leading-relaxed">{project.proof ?? kpis.coreImpact}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Launch</p>
                      <p className="mt-1 font-mono text-xs font-bold leading-relaxed">{kpis.launchTime}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedProject((prev) => (prev === project.title ? null : project.title))}
                    className="flex min-h-10 w-full items-center justify-between gap-3 border-2 border-foreground px-3 py-2 font-mono text-xs font-bold uppercase hover:bg-foreground hover:text-background transition-colors rounded-lg"
                  >
                    <span>{isExpanded ? "Hide case study" : "Case study"}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {isExpanded && (
                    <div className="space-y-4 border-2 border-foreground p-3.5 bg-secondary/5 rounded-xl">
                      <div>
                        <p className="font-mono text-[10px] font-bold text-accent mb-1">Problem</p>
                        <p className="text-xs leading-relaxed">{caseStudy.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold text-accent mb-1">Build</p>
                        <p className="text-xs leading-relaxed">{caseStudy.build}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold text-accent mb-1">Result</p>
                        <p className="text-xs leading-relaxed">{caseStudy.result}</p>
                      </div>

                      {project.contributors && project.contributors.length > 0 && (
                        <div className="border-t border-foreground/20 pt-3">
                          <p className="font-mono text-[10px] font-bold text-accent mb-1">Contributors</p>
                          <div className="flex flex-wrap gap-2">
                            {project.contributors.map((c) => (
                              <a
                                key={c.name}
                                href={c.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[10px] border border-foreground/30 px-2 py-0.5 hover:bg-foreground hover:text-background transition-colors rounded-md"
                              >
                                {c.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    <span className="inline-flex items-center gap-1 border border-foreground/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded-md">
                      <Code2 className="h-3 w-3" />
                      STACK
                    </span>
                    {visibleTech.map((tech) => (
                      <span key={tech} className="border border-foreground/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                    {hiddenTechCount > 0 && (
                      <span className="border border-foreground/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded-md">
                        +{hiddenTechCount}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href={`/projects/${slug}`}
                      className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 border-2 border-foreground px-3 py-2 font-mono text-xs font-bold transition-all hover:bg-foreground hover:text-background rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                      aria-label={`View details of project ${project.title}`}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      DETAILS
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-accent text-accent-foreground transition-all hover:bg-foreground hover:text-background rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                        aria-label={`Visit live website of project ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground transition-all hover:bg-foreground hover:text-background rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                        aria-label={`Visit GitHub repository of project ${project.title}`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
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
