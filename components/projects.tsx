"use client"

import { useRef } from "react"
import { TiltCard } from "@/components/ui/tilt-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { projects } from "@/data/projects"

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    })
  }

  return (
    <section id="projects" className="border-b-2 border-foreground">
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div className="border-2 border-foreground p-2 inline-block">
              <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} PROJECTS</h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 border-2 border-foreground hover:bg-accent transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 border-2 border-foreground hover:bg-accent transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs text-muted-foreground ml-2">
                {"<-"} SCROLL {"->"}
              </span>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 md:pl-8 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div key={index} className="snap-start shrink-0 w-[85vw] md:w-[420px] lg:w-[450px]">
              <TiltCard className="h-full border-2 border-foreground bg-card group hover:bg-accent transition-colors">
                <div className="border-b-2 border-foreground p-4 md:p-6 bg-secondary">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[10px] md:text-xs font-bold border-2 border-foreground px-2 py-1">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] md:text-xs font-bold">{project.year}</span>
                  </div>
                  <h3 className="font-mono text-xl md:text-2xl font-bold mt-4">{project.title}</h3>
                </div>

                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <p className="leading-relaxed text-sm md:text-base">{project.description}</p>

                  <div>
                    <div className="font-mono text-[10px] md:text-xs font-bold mb-2 md:mb-3">TECH STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="border-2 border-foreground px-2 py-1 font-mono text-[10px] md:text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                    >
                      VIEW PROJECT {"->"}
                    </a>
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                      >
                        GITHUB {"->"}
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        <div className="md:hidden text-center mt-2">
          <span className="font-mono text-[10px] text-muted-foreground">
            {"<-"} SWIPE {"->"}
          </span>
        </div>
      </div>
    </section>
  )
}
