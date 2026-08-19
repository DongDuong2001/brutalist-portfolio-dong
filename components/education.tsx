"use client"

import { Teacher, Location } from "reicon-react"

const education = [
  {
    degree: "BACHELOR OF SOFTWARE ENGINEERING",
    institution: "RMIT University Vietnam",
    year: "Graduating 2027",
    status: "IN PROGRESS",
    campus: "Ho Chi Minh City, Vietnam",
    focus: ["System Architecture", "Distributed Systems", "Full-stack Web Engineering"],
  },
  {
    degree: "HIGH SCHOOL DIPLOMA",
    institution: "Urban International School",
    year: "Completed",
    status: "COMPLETED",
    campus: "Toronto, Canada",
    focus: ["Advanced Functions", "Calculus", "Computer Science"],
  },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border-2 border-foreground p-2 inline-block rounded-xl">
            <h2 className="font-mono text-2xl md:text-4xl font-bold">{">"} EDUCATION</h2>
          </div>
          <p className="mt-2 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            Academic pathways and core areas of focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="border-2 border-foreground bg-card p-6 rounded-xl hover:shadow-[4px_4px_0_0_var(--foreground)] transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Teacher className="h-5 w-5 text-accent" />
                    <span className="font-mono text-[10px] font-bold bg-accent text-accent-foreground px-2 py-0.5 rounded-md">
                      {item.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                </div>

                <h3 className="font-mono text-lg font-black tracking-tight leading-snug">{item.degree}</h3>
                <p className="text-sm font-medium mt-1 text-foreground/80">{item.institution}</p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3">
                  <Location className="h-3.5 w-3.5" />
                  <span>{item.campus}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-foreground/10 pt-4">
                <p className="font-mono text-[10px] uppercase text-muted-foreground font-bold mb-2">Key Focus Area</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.focus.map((skill) => (
                    <span
                      key={skill}
                      className="border border-foreground/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground bg-secondary/20 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
