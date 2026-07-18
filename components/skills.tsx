"use client"

import { skills as skillCategories } from "@/data/skills"
import { Code, Server, Wrench, Shield } from "lucide-react"

const iconsMap: Record<string, any> = {
  LANGUAGES: Code,
  "FRAMEWORKS & LIBRARIES": Server,
  "TOOLS & INFRASTRUCTURE": Wrench,
  CONCEPTS: Shield,
}

export function Skills() {
  return (
    <section id="technical-skills" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-2xl md:text-4xl font-bold">{">"} TECHNICAL SKILLS</h2>
          </div>
          <p className="mt-2 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            Core stack, frameworks, developer tooling, and systems concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = iconsMap[cat.category] || Code
            return (
              <div
                key={cat.category}
                className="border-2 border-foreground bg-card p-6 hover:shadow-[4px_4px_0_0_var(--foreground)] transition-shadow"
              >
                <div className="flex items-center gap-3 border-b border-foreground/10 pb-4 mb-4">
                  <div className="h-8 w-8 bg-secondary border border-foreground flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-mono text-sm font-black uppercase tracking-wider">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 border border-foreground bg-secondary/35 overflow-hidden">
                        <div
                          className="h-full bg-accent border-r border-foreground"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
