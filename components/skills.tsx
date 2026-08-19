"use client"

import { skills as skillCategories } from "@/data/skills"
import { Code, Server, Designtools, ShieldCheck } from "reicon-react"

const iconsMap: Record<string, any> = {
  LANGUAGES: Code,
  "FRAMEWORKS & LIBRARIES": Server,
  "DATABASES & INFRASTRUCTURE": Designtools,
  "SYSTEMS & ARCHITECTURE": ShieldCheck,
}

export function Skills() {
  return (
    <section id="technical-skills" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border-2 border-foreground p-2 inline-block rounded-xl">
            <h2 className="font-mono text-2xl md:text-4xl font-bold">{">"} TECHNICAL SKILLS & STACK</h2>
          </div>
          <p className="mt-2 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Technologies, frameworks, and architecture patterns I actively use in production, hackathons, and local AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = iconsMap[cat.category] || Code
            return (
              <div
                key={cat.category}
                className="border-2 border-foreground bg-card p-5 md:p-6 rounded-xl hover:shadow-[4px_4px_0_0_var(--foreground)] transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-foreground/10 pb-3 mb-3">
                    <div className="h-8 w-8 bg-secondary border-2 border-foreground rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-black uppercase tracking-wider">{cat.category}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center border border-foreground/30 bg-secondary/35 px-2.5 py-1.5 font-mono text-xs font-semibold text-foreground rounded-md transition-colors hover:border-foreground hover:bg-secondary"
                      >
                        {item}
                      </span>
                    ))}
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
