import { FadeInStagger, FadeInItem } from "@/components/ui/fade-in"
import { TiltCard } from "@/components/ui/tilt-card"

import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="border-2 border-foreground p-2 inline-block mb-8 md:mb-12">
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} PROJECTS</h2>
        </div>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeInItem key={index} className="h-full">
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

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                    >
                      VIEW PROJECT {"->"}
                    </a>
                  </div>
               </TiltCard>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
