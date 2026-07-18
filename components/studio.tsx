"use client"

import { Users, Code, Layout, Database } from "lucide-react"

const team = [
  {
    name: "Duong Phu Dong",
    role: "Founder / Systems Architect",
    desc: "System design & overall architecture.",
    Icon: Layout,
  },
  {
    name: "Thu Tran",
    role: "Co-Founder / Creative Director",
    desc: "UI/UX templates & design recommendations.",
    Icon: Users,
  },
  {
    name: "Hao Vu",
    role: "Lead Database & Backend Dev",
    desc: "Database design & core backend programming.",
    Icon: Database,
  },
  {
    name: "Huynh Quang Dong",
    role: "Software Engineer",
    desc: "Full-stack development & core features.",
    Icon: Code,
  },
  {
    name: "Ho Quang Huy",
    role: "Software Engineer",
    desc: "Full-stack development & frontend polish.",
    Icon: Code,
  },
]

export function Studio() {
  return (
    <section id="studio" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-2xl md:text-4xl font-bold">{">"} THREE BUGS STUDIO</h2>
          </div>
          <p className="mt-2 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            Our boutique product studio focusing on reliable architecture, clean design, and fast execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {team.map((member) => {
            const Icon = member.Icon
            return (
              <div
                key={member.name}
                className="border-2 border-foreground bg-card p-4 hover:shadow-[4px_4px_0_0_var(--foreground)] transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-8 w-8 bg-secondary border border-foreground flex items-center justify-center mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-mono text-sm font-black tracking-tight">{member.name}</h3>
                  <p className="font-mono text-[10px] uppercase text-accent font-bold mt-1">{member.role}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{member.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
