"use client"

import { motion } from "framer-motion"
import {
  Activity,
  BookOpen,
  Camera,
  Coffee,
  Compass,
  Flag,
  Gauge,
  Mountain,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { useMemo, useState } from "react"

type InterestDomain = "STRATEGY" | "CRAFT" | "ADVENTURE" | "COMMUNITY"

type InterestItem = {
  title: string
  description: string
  domain: InterestDomain
  mode: string
  intensity: 1 | 2 | 3 | 4 | 5
  icon: LucideIcon
  wide?: boolean
}

const interests: InterestItem[] = [
  {
    title: "CHESS",
    description: "Analyzing positions, thinking several moves ahead, and finding the elegant solution under pressure.",
    domain: "STRATEGY",
    mode: "Pattern Search",
    intensity: 5,
    icon: Trophy,
    wide: true,
  },
  {
    title: "SPECIALTY COFFEE",
    description: "Dialing in extraction, tasting notes, and process variables. A small daily ritual for calibration.",
    domain: "CRAFT",
    mode: "Calibration",
    intensity: 3,
    icon: Coffee,
  },
  {
    title: "FILM PHOTOGRAPHY",
    description: "Shooting 35mm forces patience, composition, and better decisions before the result is visible.",
    domain: "CRAFT",
    mode: "Intentional Frames",
    intensity: 4,
    icon: Camera,
  },
  {
    title: "HIKING & OUTDOORS",
    description: "Long trails reset the thinking loop. Some architecture ideas show up better away from the screen.",
    domain: "ADVENTURE",
    mode: "Mental Reset",
    intensity: 4,
    icon: Mountain,
    wide: true,
  },
  {
    title: "OPEN SOURCE",
    description: "Building in public and maintaining shared tools keeps quality, consistency, and accountability visible.",
    domain: "COMMUNITY",
    mode: "Public Build",
    intensity: 5,
    icon: Flag,
  },
  {
    title: "READING",
    description: "Systems thinking, behavioral economics, and strong fiction sharpen product judgment from outside tech.",
    domain: "STRATEGY",
    mode: "Cross-Discipline Inputs",
    intensity: 3,
    icon: BookOpen,
  },
  {
    title: "MOTORSPORT",
    description: "Formula 1, WEC, and rally: teams solving complex constraints at speed under visible pressure.",
    domain: "ADVENTURE",
    mode: "High-Pressure Systems",
    intensity: 5,
    icon: Flag,
  },
]

const domainFilters: Array<"ALL" | InterestDomain> = ["ALL", "STRATEGY", "CRAFT", "ADVENTURE", "COMMUNITY"]

const domainMeta: Record<InterestDomain, { summary: string; Icon: LucideIcon }> = {
  STRATEGY: {
    summary: "Pattern recognition, patience, and long-range thinking.",
    Icon: Compass,
  },
  CRAFT: {
    summary: "Taste, calibration, and care for small details.",
    Icon: Gauge,
  },
  ADVENTURE: {
    summary: "Reset loops, pressure systems, and outdoor energy.",
    Icon: Mountain,
  },
  COMMUNITY: {
    summary: "Public building, shared tools, and visible accountability.",
    Icon: Activity,
  },
}

function getDomainCount(domain: InterestDomain) {
  return interests.filter((interest) => interest.domain === domain).length
}

export function Interests() {
  const [activeDomain, setActiveDomain] = useState<"ALL" | InterestDomain>("ALL")

  const filteredInterests = useMemo(
    () => interests.filter((interest) => activeDomain === "ALL" || interest.domain === activeDomain),
    [activeDomain],
  )

  const averageIntensity = useMemo(() => {
    if (filteredInterests.length === 0) return 0
    const total = filteredInterests.reduce((sum, item) => sum + item.intensity, 0)
    return Math.round((total / filteredInterests.length) * 10) / 10
  }, [filteredInterests])

  const activeSummary =
    activeDomain === "ALL"
      ? "A compact read on the off-hours systems that shape my technical taste."
      : domainMeta[activeDomain].summary

  return (
    <section id="interests">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-12 max-[390px]:py-9 md:py-20">
        <div className="mb-6 md:mb-8">
          <div className="border-2 border-foreground p-2 max-[390px]:p-1.5 inline-block">
            <h2 className="font-mono text-3xl max-[390px]:text-2xl md:text-5xl lg:text-6xl font-bold">{">"} INTERESTS</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Personal signal board: the hobbies and rituals that influence product taste, systems thinking, and decision-making style.
          </p>
        </div>

        <div className="mb-6 md:mb-8 grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)]">
          <article className="border-2 md:border-4 border-foreground bg-card">
            <div className="grid md:grid-cols-[minmax(0,1fr)_220px]">
              <div className="p-4 md:p-5 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Off-Hours Signal Console
                </p>
                <h3 className="font-mono text-2xl md:text-3xl font-black uppercase leading-tight mb-3">
                  Taste, patience, and pressure handling.
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-3xl">
                  {activeSummary}
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-1 gap-2 p-3 md:p-4">
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Signals</p>
                  <p className="font-mono text-lg md:text-xl font-black">{filteredInterests.length}</p>
                </div>
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Domain</p>
                  <p className="font-mono text-xs md:text-sm font-black leading-tight">{activeDomain}</p>
                </div>
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Intensity</p>
                  <p className="font-mono text-lg md:text-xl font-black">{averageIntensity.toFixed(1)}/5</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="border-2 md:border-4 border-foreground bg-card p-3 md:p-4">
            <div className="grid grid-cols-2 gap-2">
              {(["STRATEGY", "CRAFT", "ADVENTURE", "COMMUNITY"] as InterestDomain[]).map((domain) => {
                const Icon = domainMeta[domain].Icon
                const active = activeDomain === domain

                return (
                  <button
                    key={domain}
                    onClick={() => setActiveDomain(active ? "ALL" : domain)}
                    className={`min-h-24 border-2 border-foreground p-3 text-left transition-colors ${
                      active ? "bg-accent text-accent-foreground" : "bg-background hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span className="font-mono text-[10px] font-black">{getDomainCount(domain)}</span>
                    </div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-wide leading-tight">{domain}</p>
                  </button>
                )
              })}
            </div>
            <button
              onClick={() => setActiveDomain("ALL")}
              className={`mt-2 w-full border-2 border-foreground px-3 py-2 font-mono text-xs font-bold transition-colors ${
                activeDomain === "ALL" ? "bg-accent text-accent-foreground" : "bg-background hover:bg-foreground hover:text-background"
              }`}
            >
              ALL SIGNALS
            </button>
          </aside>
        </div>

        {filteredInterests.length === 0 ? (
          <div className="border-2 border-foreground p-6 font-mono text-sm bg-card">No interests found for this domain.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-[390px]:gap-3 md:gap-5">
            {filteredInterests.map((interest, index) => {
              const Icon = interest.icon

              return (
                <motion.article
                  key={interest.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.28, delay: index * 0.04 }}
                  className={`border-2 md:border-4 border-foreground bg-card ${interest.wide ? "xl:col-span-2" : ""}`}
                >
                  <div className="grid grid-cols-[64px_1fr] h-full">
                    <div className="border-r-2 border-foreground bg-secondary p-3 flex flex-col items-center justify-between gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-card">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-sm font-black text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="p-4 md:p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b-2 border-foreground pb-3 mb-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
                            {interest.domain} / {interest.mode}
                          </p>
                          <h3 className="font-mono text-lg md:text-xl font-black uppercase leading-tight">{interest.title}</h3>
                        </div>
                        <span className="border-2 border-foreground bg-accent px-2 py-1 font-mono text-[10px] font-black text-accent-foreground">
                          {interest.intensity}/5
                        </span>
                      </div>

                      <p className="leading-relaxed text-sm mb-4">{interest.description}</p>

                      <div className="grid grid-cols-[1fr_auto] items-end gap-3">
                        <div className="border border-foreground/40 px-2.5 py-2 font-mono text-[10px] uppercase tracking-wider bg-background/50">
                          MODE: {interest.mode}
                        </div>
                        <div className="flex items-end gap-1">
                          {Array.from({ length: 5 }).map((_, meterIndex) => (
                            <span
                              key={`${interest.title}-meter-${meterIndex}`}
                              className={`h-6 w-2 border border-foreground ${
                                meterIndex < interest.intensity ? "bg-accent" : "bg-transparent"
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
