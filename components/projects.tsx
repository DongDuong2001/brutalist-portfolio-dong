"use client"

import { useState, useMemo } from "react"
import { ExternalLink, Github } from "lucide-react"

import { projects } from "@/data/projects"

const CATEGORIES = ["ALL", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const filtered = useMemo(
    () => (activeFilter === "ALL" ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter],
  )

  const isFeatured = (year: string) => year.includes("Current")

  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-10">
          <div>
            <div className="border-2 border-foreground p-2 inline-block mb-3">
              <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} PROJECTS</h2>
            </div>
            <p className="font-mono text-xs md:text-sm text-muted-foreground">
              {filtered.length} PROJECT{filtered.length !== 1 && "S"}
              {activeFilter !== "ALL" && ` IN ${activeFilter}`}
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-[10px] md:text-xs font-bold px-3 py-1.5 border-2 border-foreground transition-colors ${
                activeFilter === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-background hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project, index) => {
            const featured = isFeatured(project.year)
            return (
              <div
                key={index}
                className={`group border-2 border-foreground bg-card flex flex-col transition-colors hover:bg-secondary ${
                  featured ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : ""
                }`}
              >
                {/* Card header */}
                <div className="border-b-2 border-foreground p-4 md:p-5 bg-secondary">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] md:text-xs font-bold border-2 border-foreground px-2 py-0.5 bg-background shrink-0">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
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

                {/* Card body */}
                <div className="p-4 md:p-5 flex flex-col flex-1 gap-4">
                  <p className="text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="border border-foreground/40 px-2 py-0.5 font-mono text-[10px] md:text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links — pushed to bottom */}
                  <div className="flex gap-2 mt-auto pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs font-bold border-2 border-foreground px-3 py-2.5 bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      LIVE
                    </a>
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs font-bold border-2 border-foreground px-3 py-2.5 hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        SOURCE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
