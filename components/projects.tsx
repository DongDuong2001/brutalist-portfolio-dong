"use client"

import { useEffect, useMemo, useState } from "react"

import {
  projects,
  slugifyProjectTitle,
  type Project,
  type ProjectAward,
  type ProjectCaseStudy,
  type ProjectKpis,
} from "@/data/projects"

const CATEGORIES = ["ALL", ...Array.from(new Set(projects.map((project) => project.category)))]

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
    <section id="projects">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 md:mb-10">
          <div className="border-2 border-foreground p-2 inline-block self-start">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  PROJECTS</h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <a
              href="/api/project-index"
              target="_blank"
              rel="noopener noreferrer"
              className="tab-animated-btn"
            >
              <span>PROJECT INDEX PDF</span>
            </a>
            <div className="border-2 md:border-4 border-foreground bg-accent px-4 md:px-6 py-2 md:py-3 inline-block">
              <p className="font-mono text-sm md:text-base font-bold text-accent-foreground">
                {filteredProjects.length} PROJECT{filteredProjects.length !== 1 && "S"}
                {activeFilter !== "ALL" && ` IN ${activeFilter}`}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible md:pb-0 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`tab-animated-btn whitespace-nowrap shrink-0 md:shrink ${
                activeFilter === category ? "tab-animated-btn-active" : ""
              }`}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => {
            const featured = project.year.includes("Current")
            const highlighted = Boolean(project.highlighted)
            const awards = getAwards(project)
            const kpis = getKpis(project)
            const caseStudy = getCaseStudy(project)
            const slug = slugifyProjectTitle(project.title)
            const isExpanded = expandedProject === project.title

            return (
              <article
                key={project.title}
                id={`project-${slug}`}
                className={`group border-2 border-foreground bg-card flex flex-col transition-colors hover:bg-secondary ${
                  featured ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : ""
                } ${highlighted ? "border-l-4 border-l-accent" : ""}`}
              >
                <div className="border-b-2 border-foreground p-4 md:p-5 bg-secondary">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] md:text-xs font-bold border-2 border-foreground px-2 py-0.5 bg-background shrink-0">
                      {project.category}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 justify-end">
                      {highlighted && (
                        <span className="font-mono text-[10px] font-bold bg-foreground text-background px-2 py-0.5">
                          BEST PROJECT
                        </span>
                      )}
                      {featured && (
                        <span className="font-mono text-[10px] font-bold bg-accent text-accent-foreground px-2 py-0.5">
                          ACTIVE
                        </span>
                      )}
                      <span className="font-mono text-[10px] md:text-xs text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                  <h3 className="font-mono text-lg md:text-xl font-bold leading-tight">{project.title}</h3>
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-1 gap-4">
                  <p className={`text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>{project.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-foreground/30 px-2.5 py-1.5 font-mono text-[10px]">
                      <span className="opacity-70">USERS:</span> {kpis.users}
                    </div>
                    <div className="border border-foreground/30 px-2.5 py-1.5 font-mono text-[10px]">
                      <span className="opacity-70">LAUNCH:</span> {kpis.launchTime}
                    </div>
                    <div className="border border-foreground/30 px-2.5 py-1.5 font-mono text-[10px]">
                      <span className="opacity-70">IMPACT:</span> {kpis.coreImpact}
                    </div>
                    <div className="border border-foreground/30 px-2.5 py-1.5 font-mono text-[10px]">
                      <span className="opacity-70">PERF:</span> {kpis.performance}
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedProject((prev) => (prev === project.title ? null : project.title))}
                    className="tab-animated-btn self-start"
                  >
                    <span>{isExpanded ? "HIDE CASE STUDY" : "OPEN CASE STUDY"}</span>
                  </button>

                  {isExpanded && (
                    <div className="space-y-2 border-2 border-foreground p-3">
                      <div>
                        <p className="font-mono text-[10px] font-bold text-accent mb-1">PROBLEM</p>
                        <p className="text-xs leading-relaxed">{caseStudy.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold text-accent mb-1">BUILD</p>
                        <p className="text-xs leading-relaxed">{caseStudy.build}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold text-accent mb-1">RESULT</p>
                        <p className="text-xs leading-relaxed">{caseStudy.result}</p>
                      </div>
                    </div>
                  )}

                  {awards.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {awards.map((award, awardIndex) => (
                        <a
                          key={`${award.platform}-${award.label}-${awardIndex}`}
                          href={award.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center self-start border-2 border-foreground bg-accent/10 px-3 py-1.5 font-mono text-[10px] md:text-xs font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {award.badge ? (
                            <img
                              src={award.badge.src}
                              alt={award.badge.alt}
                              width={award.badge.width}
                              height={award.badge.height}
                              className="h-8 w-auto max-w-full"
                              loading="lazy"
                            />
                          ) : (
                            `${award.label} - ${award.platform}`
                          )}
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-foreground/40 px-2 py-0.5 font-mono text-[10px] md:text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-2 mt-auto pt-2">
                    <a
                      href={`/projects/${slug}`}
                      className="w-full inline-flex items-center justify-center font-mono text-xs font-bold border-2 border-foreground px-3 py-2.5 hover:bg-foreground hover:text-background transition-colors"
                    >
                      DETAILS
                    </a>
                    <div className={`grid gap-2 ${project.link ? "grid-cols-2" : "grid-cols-1"}`}>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-mono text-xs font-bold border-2 border-foreground px-3 py-2.5 bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors"
                        >
                          LIVE SITE
                        </a>
                      )}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-mono text-xs font-bold border-2 border-foreground px-3 py-2.5 hover:bg-foreground hover:text-background transition-colors"
                        >
                          SOURCE CODE
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center font-mono text-xs font-bold border-2 border-foreground px-3 py-2.5 text-muted-foreground bg-muted">
                          PRIVATE
                        </span>
                      )}
                    </div>
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