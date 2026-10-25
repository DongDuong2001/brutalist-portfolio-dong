"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { projects, slugifyProjectTitle, type Project } from "@/data/projects"

const INITIAL_COUNT = 12

// Short typographic mark for the card face: initials, or the first 3 letters of a one-word title
const projectMark = (title: string) => {
  const words = title.split(/[\s-]+/).filter(Boolean)
  return words.length === 1 ? words[0].slice(0, 3) : words.slice(0, 3).map((word) => word[0]).join("")
}

const projectStatus = (project: Project) => {
  if (project.stage === "now-building") return "building"
  if (project.stage === "scaling") return "scaling"
  return project.year.includes("Current") ? "active" : "shipped"
}

const projectYear = (project: Project) => project.year.match(/\d{4}/)?.[0] ?? project.year

export function Projects() {
  const [showAll, setShowAll] = useState(false)

  // Command palette (Ctrl+K) asks to reveal a project card by title
  useEffect(() => {
    const handleOpenProject = (event: Event) => {
      const detail = (event as CustomEvent<{ title?: string }>).detail
      if (!detail?.title) return

      setShowAll(true)
      requestAnimationFrame(() => {
        document
          .getElementById(`project-${slugifyProjectTitle(detail.title!)}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" })
      })
    }

    window.addEventListener("portfolio:open-project", handleOpenProject)
    return () => window.removeEventListener("portfolio:open-project", handleOpenProject)
  }, [])

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="scroll-mt-16 bg-ink pb-40 text-[#e6edf3]">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line-dark px-4 pb-14 pt-24 md:px-14">
        <h2 className="leading-[0.85]">
          <span className="mb-3.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mist">Selected work</span>
          <span className="block text-[clamp(56px,7vw,112px)] font-black tracking-tighter">PROJECTS</span>
        </h2>
        <p className="max-w-[360px] text-sm leading-relaxed text-mist">
          From nutrition platforms to offline AI servers — every build has a problem, an architecture and a result.
        </p>
      </div>

      <div className="stagger grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-4 px-4 pb-20 pt-10 md:px-14">
        {visibleProjects.map((project, index) => {
          const slug = slugifyProjectTitle(project.title)
          return (
            <a
              key={project.title}
              id={`project-${slug}`}
              href={`/projects/${slug}`}
              className="group flex aspect-square flex-col justify-between rounded-lg border border-line-dark bg-ink-2 p-4 transition-colors hover:border-accent"
            >
              <span className="flex justify-between gap-2 text-[10px] font-bold uppercase tracking-widest text-mist">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{projectStatus(project)}</span>
              </span>
              <span className="self-center text-[64px] font-black uppercase leading-none tracking-tighter text-accent transition-transform group-hover:scale-105">
                {projectMark(project.title)}
              </span>
              <span className="flex items-end justify-between gap-2">
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="text-sm font-extrabold tracking-tight">{project.title}</span>
                  <span className="truncate text-[11px] text-mist">{project.role ?? project.category}</span>
                </span>
                <span className="shrink-0 text-[11px] font-extrabold text-accent">{projectYear(project)}</span>
              </span>
            </a>
          )
        })}
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="flex flex-col items-center gap-5 px-4 pt-10 text-center">
          <p className="text-[clamp(22px,2.2vw,30px)] font-bold leading-tight tracking-[-0.015em]">
            See every case study, KPI
            <br />
            and live demo
          </p>
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md bg-accent px-5 text-xs font-extrabold tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            {showAll ? "SHOW FEWER PROJECTS" : `VIEW ALL ${projects.length} PROJECTS`}
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
