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
  const adoptedCount = activeStack.filter((item) => item.level === "ADOPT").length

  return (
    <section id="tech-radar" className="min-h-full">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-10 max-[390px]:py-8 md:py-14 lg:py-16">
        <div className="mb-6 max-[390px]:mb-5 md:mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} TECH RADAR</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Current engineering posture, familiar tooling, and the next capability targets. Tuned to stay dense on small screens and spacious on larger displays.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="border-2 border-foreground bg-card px-2.5 py-2 md:px-3 md:py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground">Active Stack</p>
            <p className="font-mono text-base md:text-lg font-bold">{activeStack.length}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-2.5 py-2 md:px-3 md:py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground">Adopt</p>
            <p className="font-mono text-base md:text-lg font-bold">{adoptedCount}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-2.5 py-2 md:px-3 md:py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground">Familiar</p>
            <p className="font-mono text-base md:text-lg font-bold">{familiarTooling.length}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-2.5 py-2 md:px-3 md:py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground">Learning Next</p>
            <p className="font-mono text-base md:text-lg font-bold">{learningNext.length}</p>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)]">
          <article className="border-2 md:border-4 border-foreground bg-card p-4 max-[390px]:p-3.5 md:p-5 lg:p-6">
            <div className="flex items-end justify-between gap-3 border-b-2 border-foreground pb-2.5 mb-3 md:mb-4">
              <h3 className="font-mono text-lg md:text-xl lg:text-2xl font-bold">ACTIVE STACK</h3>
              <span className="font-mono text-[10px] md:text-xs font-bold text-muted-foreground">
                {adoptedCount}/{activeStack.length} ADOPT
              </span>
            </div>

            <div className="grid gap-2.5 max-[390px]:gap-2 min-[470px]:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              {activeStack.map((item) => (
                <div key={item.name} className="border-2 border-foreground bg-background/70 p-3 max-[390px]:p-2.5 md:p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="font-mono font-bold text-xs md:text-sm leading-tight">{item.name}</p>
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 border-2 border-foreground ${
                        item.level === "ADOPT" ? "bg-accent text-accent-foreground" : "bg-card"
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] md:text-xs text-muted-foreground leading-relaxed">{item.focus}</p>
                  <div className="mt-2.5 h-1.5 border border-foreground/40 bg-muted/70">
                    <div className="h-full w-full bg-accent" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4 md:gap-6 content-start">
            <article className="border-2 md:border-4 border-foreground bg-secondary p-4 max-[390px]:p-3.5 md:p-5 lg:p-6">
              <h3 className="font-mono text-base md:text-lg font-bold border-b-2 border-foreground pb-2 mb-3">FAMILIAR WITH</h3>
              <div className="grid grid-cols-2 min-[420px]:grid-cols-3 lg:grid-cols-2 gap-2">
                {familiarTooling.map((tool) => (
                  <span
                    key={tool}
                    className="border-2 border-foreground bg-card px-2 py-1.5 text-center font-mono text-[10px] md:text-xs font-bold leading-tight"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>

            <article className="border-2 md:border-4 border-foreground bg-card p-4 max-[390px]:p-3.5 md:p-5 lg:p-6">
              <h3 className="font-mono text-base md:text-lg font-bold border-b-2 border-foreground pb-2 mb-3">LEARNING NEXT</h3>
              <div className="grid gap-2.5 max-[390px]:gap-2">
                {learningNext.map((item, index) => (
                  <div key={item.name} className="border-2 border-foreground p-2.5 md:p-3 bg-background/60">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <p className="font-mono font-bold text-xs md:text-sm leading-tight">{item.name}</p>
                      <span className="font-mono text-[10px] font-bold opacity-70">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="font-mono text-[10px] md:text-xs text-muted-foreground leading-relaxed">{item.target}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
