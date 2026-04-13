const activeStack = [
  { name: "Java", level: "ADOPT", focus: "Spring Boot backend services" },
  { name: "Python (FastAPI)", level: "ADOPT", focus: "High-performance API delivery" },
  { name: "TypeScript", level: "ADOPT", focus: "Type-safe frontend systems" },
  { name: "Next.js", level: "ADOPT", focus: "App Router product delivery" },
  { name: "PostgreSQL", level: "ADOPT", focus: "Data modeling + performance" },
]

const learningNext = [
  { name: "AI/ML", target: "Applied models for product features" },
  { name: "Design Patterns", target: "Scalable architecture and code quality" },
  { name: "Advanced System Architecture", target: "Distributed system design at scale" },
]

const familiarTooling = ["CI/CD Pipeline", "Docker", "Kafka", "Redis"]

export function TechRadar() {
  return (
    <section id="tech-radar" className="h-[calc(100dvh-3.5rem)] md:h-full">
      <div className="container mx-auto px-4 py-4 md:py-8 h-full flex flex-col">
        <div className="mb-4 md:mb-6 shrink-0">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} TECH RADAR</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 flex-1 min-h-0">
          <div className="border-2 md:border-4 border-foreground bg-card p-4 md:p-5 flex flex-col min-h-0">
            <h3 className="font-mono text-lg md:text-xl font-bold border-b-2 border-foreground pb-2 mb-3">
              ACTIVE STACK
            </h3>
            <div className="grid gap-2.5">
              {activeStack.map((item) => (
                <div key={item.name} className="border-2 border-foreground p-2.5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="font-mono font-bold text-xs md:text-sm">{item.name}</p>
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 border-2 border-foreground ${
                        item.level === "ADOPT" ? "bg-accent text-accent-foreground" : "bg-background"
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] md:text-xs text-muted-foreground leading-tight">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 md:border-4 border-foreground bg-secondary p-4 md:p-5 flex flex-col min-h-0">
            <h3 className="font-mono text-lg md:text-xl font-bold border-b-2 border-foreground pb-2 mb-3">
              FAMILIAR + LEARNING
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-mono text-[10px] font-bold tracking-wide mb-2">FAMILIAR WITH</p>
                <div className="flex flex-wrap gap-2">
                  {familiarTooling.map((tool) => (
                    <span
                      key={tool}
                      className="border-2 border-foreground bg-accent/15 px-2 py-1 font-mono text-[10px] md:text-xs font-bold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] font-bold tracking-wide mb-2">LEARNING NEXT</p>
                <div className="grid gap-2.5">
              {learningNext.map((item, index) => (
                <div key={item.name} className="border-2 border-foreground p-2.5 bg-background/60">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="font-mono font-bold text-xs md:text-sm">{item.name}</p>
                    <span className="font-mono text-[10px] font-bold opacity-70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] md:text-xs text-muted-foreground leading-tight">{item.target}</p>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
