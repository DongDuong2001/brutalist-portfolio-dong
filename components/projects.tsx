"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { projects, slugifyProjectTitle, type Project } from "@/data/projects"

// The big, current builds in display order, each with the word set large on its card.
// The first one is the wide lead card. Everything else goes to the archive list.
const FEATURED = [
  { title: "3BCAD", mark: "3BCAD" },
  { title: "H1T MICRO", mark: "H1T" },
  { title: "PUDO CODE SYSTEM", mark: "PUDO" },
  { title: "3B INFRASTRUCTURE", mark: "INFRA" },
  { title: "3BEDITOR", mark: "EDITOR" },
]

const featured = FEATURED.map(({ title, mark }) => {
  const project = projects.find((p) => p.title === title)
  // Fails the static build loudly if a project is renamed in data/projects.ts
  if (!project) throw new Error(`Featured project not found in data/projects.ts: ${title}`)
  return { project, mark }
})
const archive = projects.filter((project) => !FEATURED.some((f) => f.title === project.title))

const projectStatus = (project: Project) => {
  if (project.stage === "now-building") return "building"
  if (project.stage === "scaling") return "scaling"
  return project.year.includes("Current") ? "active" : "shipped"
}

const projectYear = (project: Project) => project.year.match(/\d{4}/)?.[0] ?? project.year

export function Projects() {
  const [showArchive, setShowArchive] = useState(false)

  // Command palette (Ctrl+K) asks to reveal a project by title; archived ones need the list open first
  useEffect(() => {
    const handleOpenProject = (event: Event) => {
      const detail = (event as CustomEvent<{ title?: string }>).detail
      if (!detail?.title) return

      setShowArchive(true)
      requestAnimationFrame(() => {
        document
          .getElementById(`project-${slugifyProjectTitle(detail.title!)}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" })
      })
    }

    window.addEventListener("portfolio:open-project", handleOpenProject)
    return () => window.removeEventListener("portfolio:open-project", handleOpenProject)
  }, [])

  return (
    <section id="projects" className="scroll-mt-16 bg-ink pb-32 text-[#e6edf3]">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line-dark px-4 pb-14 pt-24 md:px-14">
        <h2 className="leading-[0.85]">
          <span className="file-label mb-3.5">
            02 // Selected work <span className="font-jp text-accent">実績</span>
          </span>
          <span className="glitch block text-[clamp(56px,7vw,112px)] font-black tracking-tighter">PROJECTS</span>
        </h2>
        <p className="max-w-[360px] text-sm leading-relaxed text-mist">
          What I&apos;m building now at Three Bugs Studio and H1T MICRO. Earlier work sits in the archive below.
        </p>
      </div>

      {/* Capped at 3 columns: a 2-wide lead card plus 4 others fills every row at both 2 and 3 columns */}
      <ul className="grid grid-cols-1 gap-5 px-4 pt-10 sm:grid-cols-2 md:px-14 lg:grid-cols-3">
        {featured.map(({ project, mark }, index) => {
          const slug = slugifyProjectTitle(project.title)
          return (
            <li key={project.title} className={index === 0 ? "sm:col-span-2" : undefined}>
              <a
                id={`project-${slug}`}
                href={`/projects/${slug}`}
                className="chamfer-lg group flex h-full min-h-[340px] flex-col gap-4 border border-line-dark bg-ink-2 p-5 transition-colors hover:border-accent hover:bg-[#1a0a0d]"
              >
                <span className="flex justify-between gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-mist">
                  <span>P-{String(index + 1).padStart(2, "0")}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                    {projectStatus(project)}
                  </span>
                </span>

                <span className="text-[56px] font-black uppercase leading-none tracking-tighter text-accent transition-transform group-hover:translate-x-1">
                  {mark}
                </span>

                <span className="flex flex-col gap-1">
                  <span className="text-lg font-extrabold leading-tight tracking-tight">{project.title}</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-mist">{project.role ?? project.category}</span>
                </span>

                <span className="line-clamp-3 text-sm leading-relaxed text-[#b9b9be]">{project.description}</span>

                <span className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-line-dark pt-3">
                  <span className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="border border-line-dark px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-mist">
                        {tech}
                      </span>
                    ))}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] font-bold text-accent">
                    {projectYear(project)}
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="px-4 pt-16 md:px-14">
        <button
          type="button"
          onClick={() => setShowArchive((open) => !open)}
          aria-expanded={showArchive}
          aria-controls="project-archive"
          className="flex w-full cursor-pointer items-center justify-between gap-4 border-y border-line-dark py-4 text-left transition-colors hover:text-accent"
        >
          <span className="file-label">
            Archive <span className="font-jp text-accent">保管</span>
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]">
            {showArchive ? "Hide" : `${archive.length} more projects`} {showArchive ? "−" : "+"}
          </span>
        </button>

        {showArchive && (
          <ul id="project-archive" className="font-mono text-[12px]">
            {archive.map((project, index) => {
              const slug = slugifyProjectTitle(project.title)
              return (
                <li key={project.title}>
                  <a
                    id={`project-${slug}`}
                    href={`/projects/${slug}`}
                    className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 border-b border-line-dark py-3 transition-colors hover:bg-[#1a0a0d] hover:text-accent md:grid-cols-[2.5rem_1.2fr_1fr_5rem_5.5rem]"
                  >
                    <span className="text-mist">A-{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-sans text-sm font-extrabold tracking-tight">{project.title}</span>
                    <span className="hidden truncate uppercase tracking-[0.08em] text-mist md:block">{project.category}</span>
                    <span className="text-right text-mist md:text-left">{projectYear(project)}</span>
                    <span className="hidden text-right uppercase tracking-[0.1em] text-mist md:block">{projectStatus(project)}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
