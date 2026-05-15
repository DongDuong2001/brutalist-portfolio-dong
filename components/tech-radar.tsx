import { Brain, Code2, Crosshair, Database, Gauge, Layers3, Rocket, Wrench } from "lucide-react"

const activeStack = [
  { name: "Java", level: "ADOPT", focus: "Spring Boot backend services", x: "62%", y: "26%" },
  { name: "Python", level: "ADOPT", focus: "FastAPI and product automation", x: "34%", y: "31%" },
  { name: "TypeScript", level: "ADOPT", focus: "Type-safe frontend systems", x: "48%", y: "18%" },
  { name: "Next.js", level: "ADOPT", focus: "App Router product delivery", x: "69%", y: "52%" },
  { name: "PostgreSQL", level: "ADOPT", focus: "Data modeling and performance", x: "39%", y: "66%" },
]

const learningNext = [
  { name: "AI/ML", target: "Applied models for product features", Icon: Brain },
  { name: "Design Patterns", target: "Scalable architecture and code quality", Icon: Layers3 },
  { name: "Advanced Architecture", target: "Distributed system design at scale", Icon: Crosshair },
]

const familiarTooling = ["CI/CD Pipeline", "Docker", "Kafka", "Redis"]

const radarStats = [
  { label: "Adopted", value: activeStack.length, Icon: Rocket },
  { label: "Tooling", value: familiarTooling.length, Icon: Wrench },
  { label: "Learning", value: learningNext.length, Icon: Brain },
  { label: "Signal", value: "Product", Icon: Gauge },
]

const quadrants = [
  { label: "Frontend", Icon: Code2 },
  { label: "Backend", Icon: Layers3 },
  { label: "Data", Icon: Database },
  { label: "Systems", Icon: Crosshair },
]

export function TechRadar() {
  return (
    <section id="tech-radar" className="min-h-full">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-10 max-[390px]:py-8 md:py-14 lg:py-16">
        <div className="mb-6 max-[390px]:mb-5 md:mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} TECH RADAR</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Stack radar console for the tools I actively adopt, the infrastructure I understand, and the capabilities I am pushing next.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)]">
          <article className="border-2 md:border-4 border-foreground bg-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-foreground bg-foreground px-4 py-3 text-background">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-75">Radar Mode</p>
                <h3 className="font-mono text-lg md:text-xl font-black uppercase">Current Engineering Posture</h3>
              </div>
              <span className="border-2 border-background px-3 py-1.5 font-mono text-[10px] font-bold">
                {activeStack.length}/{activeStack.length} ADOPT
              </span>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_220px]">
              <div className="p-4 md:p-6">
                <div className="tech-radar-screen relative mx-auto aspect-square max-w-[620px] border-2 border-foreground bg-background overflow-hidden">
                  <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-foreground/30" />
                  <div className="absolute inset-[23%] rounded-full border-2 border-dashed border-foreground/30" />
                  <div className="absolute inset-[38%] rounded-full border-2 border-dashed border-accent/60" />
                  <div className="absolute left-1/2 top-0 bottom-0 border-l border-foreground/25" />
                  <div className="absolute top-1/2 left-0 right-0 border-t border-foreground/25" />
                  <div className="absolute left-1/2 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground bg-accent" />
                  <span className="radar-pulse radar-pulse-1" aria-hidden="true" />
                  <span className="radar-pulse radar-pulse-2" aria-hidden="true" />
                  <span className="radar-sweep" aria-hidden="true" />

                  {quadrants.map(({ label, Icon }, index) => (
                    <div
                      key={label}
                      className={`absolute z-20 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase text-muted-foreground ${
                        index === 0
                          ? "left-3 top-3"
                          : index === 1
                            ? "right-3 top-3"
                            : index === 2
                              ? "left-3 bottom-3"
                              : "right-3 bottom-3"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {label}
                    </div>
                  ))}

                  {activeStack.map((item, index) => (
                    <div
                      key={item.name}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: item.x, top: item.y }}
                    >
                      <div className="group relative">
                        <span className="radar-blip block h-5 w-5 border-2 border-foreground bg-accent shadow-[2px_2px_0_0_var(--foreground)]" />
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap border-2 border-foreground bg-card px-2 py-1 font-mono text-[10px] font-black">
                          {String(index + 1).padStart(2, "0")} {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t-2 lg:border-t-0 lg:border-l-2 border-foreground p-3 md:p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2">Active Signals</p>
                <div className="grid gap-2">
                  {activeStack.map((item) => (
                    <div key={item.name} className="border-2 border-foreground bg-background/70 p-2.5">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="font-mono text-xs font-black">{item.name}</p>
                        <span className="bg-accent text-accent-foreground border-2 border-foreground px-2 py-0.5 font-mono text-[9px] font-bold">
                          {item.level}
                        </span>
                      </div>
                      <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">{item.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-4 content-start">
            <div className="grid grid-cols-2 gap-2">
              {radarStats.map(({ label, value, Icon }) => (
                <div key={label} className="border-2 border-foreground bg-card p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">{label}</p>
                  </div>
                  <p className="font-mono text-lg font-black">{value}</p>
                </div>
              ))}
            </div>

            <article className="border-2 md:border-4 border-foreground bg-secondary p-4">
              <h3 className="font-mono text-base md:text-lg font-black border-b-2 border-foreground pb-2 mb-3">
                Familiar Tooling
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {familiarTooling.map((tool) => (
                  <span
                    key={tool}
                    className="border-2 border-foreground bg-card px-2 py-2 text-center font-mono text-[10px] md:text-xs font-bold leading-tight"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>

            <article className="border-2 md:border-4 border-foreground bg-card p-4">
              <h3 className="font-mono text-base md:text-lg font-black border-b-2 border-foreground pb-2 mb-3">
                Learning Next
              </h3>
              <div className="grid gap-2.5">
                {learningNext.map(({ name, target, Icon }, index) => (
                  <div key={name} className="grid grid-cols-[auto_1fr] gap-2.5 border-2 border-foreground p-2.5 bg-background/60">
                    <span className="inline-flex h-8 w-8 items-center justify-center border-2 border-foreground bg-secondary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-mono font-black text-xs md:text-sm leading-tight">{name}</p>
                        <span className="font-mono text-[10px] font-bold opacity-70">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="font-mono text-[10px] md:text-xs text-muted-foreground leading-relaxed">{target}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
