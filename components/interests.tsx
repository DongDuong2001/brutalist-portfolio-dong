"use client"

import { motion } from "framer-motion"
import { BookOpen, Camera, Coffee, Flag, Mountain, Trophy, type LucideIcon } from "lucide-react"
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
    description: "Analyzing positions, thinking several moves ahead, and finding the elegant solution under pressure. The board never lies.",
    domain: "STRATEGY",
    mode: "Pattern Search",
    intensity: 5,
    icon: Trophy,
    wide: true,
  },
  {
    title: "SPECIALTY COFFEE",
    description: "From single-origin beans to dialing in the perfect extraction. The ritual of making a great cup is its own kind of engineering.",
    domain: "CRAFT",
    mode: "Calibration",
    intensity: 3,
    icon: Coffee,
  },
  {
    title: "FILM PHOTOGRAPHY",
    description: "Shooting on 35mm forces intentionality. You only get 36 frames, and each one teaches composition and patience.",
    domain: "CRAFT",
    mode: "Intentional Frames",
    intensity: 4,
    icon: Camera,
  },
  {
    title: "HIKING & OUTDOORS",
    description: "A long trail without notifications resets my thinking loop. Some of my best architecture ideas show up mid-climb.",
    domain: "ADVENTURE",
    mode: "Mental Reset",
    intensity: 4,
    icon: Mountain,
    wide: true,
  },
  {
    title: "OPEN SOURCE",
    description: "Building in public and maintaining shared tools is the best accountability system I know.",
    domain: "COMMUNITY",
    mode: "Public Build",
    intensity: 5,
    icon: Flag,
  },
  {
    title: "READING",
    description: "I read systems thinking, behavioral economics, and strong fiction. Distance from tech often improves my product judgment.",
    domain: "STRATEGY",
    mode: "Cross-Discipline Inputs",
    intensity: 3,
    icon: BookOpen,
  },
  {
    title: "MOTORSPORT",
    description: "Formula 1, WEC, and rally: teams solving complex constraints at high speed under pressure.",
    domain: "ADVENTURE",
    mode: "High-Pressure Systems",
    intensity: 5,
    icon: Flag,
  },
]

const domainFilters: Array<"ALL" | InterestDomain> = ["ALL", "STRATEGY", "CRAFT", "ADVENTURE", "COMMUNITY"]
const meterBarHeights = ["h-[6px]", "h-[9px]", "h-[12px]", "h-[15px]", "h-[18px]"]

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

  return (
    <section id="interests">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-12 max-[390px]:py-9 md:py-20">
        <div className="mb-8 max-[390px]:mb-6 md:mb-12">
          <div className="border-2 border-foreground p-2 max-[390px]:p-1.5 inline-block">
            <h2 className="font-mono text-3xl max-[390px]:text-2xl md:text-5xl lg:text-6xl font-bold">{">"}  INTERESTS</h2>
          </div>
        </div>

        <div className="border-2 border-foreground bg-card p-4 max-[390px]:p-3 md:p-5 mb-5 max-[390px]:mb-4 md:mb-7 interest-control-board">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 max-[390px]:gap-2 md:gap-5">
            <div>
              <p className="font-mono text-[10px] max-[390px]:text-[9px] uppercase tracking-[0.18em] max-[390px]:tracking-[0.14em] text-muted-foreground mb-1">Off-hours signal board</p>
              <p className="font-mono text-sm max-[390px]:text-xs md:text-base font-bold">Non-work systems that shape how I build.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 max-[390px]:gap-1.5 md:gap-3 w-full md:w-auto">
              <div className="border-2 border-foreground px-2.5 max-[390px]:px-2 py-1.5 max-[390px]:py-1 bg-background/70">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Total</p>
                <p className="font-mono text-sm max-[390px]:text-xs font-bold">{filteredInterests.length}</p>
              </div>
              <div className="border-2 border-foreground px-2.5 max-[390px]:px-2 py-1.5 max-[390px]:py-1 bg-background/70">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Domain</p>
                <p className="font-mono text-sm max-[390px]:text-xs font-bold">{activeDomain}</p>
              </div>
              <div className="border-2 border-foreground px-2.5 max-[390px]:px-2 py-1.5 max-[390px]:py-1 bg-background/70">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Intensity</p>
                <p className="font-mono text-sm max-[390px]:text-xs font-bold">{averageIntensity.toFixed(1)}/5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 max-[390px]:gap-1.5 mb-6 max-[390px]:mb-5 md:mb-8">
          {domainFilters.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`tab-animated-btn interest-filter-chip ${activeDomain === domain ? "tab-animated-btn-active" : ""}`}
            >
              <span className="interest-filter-chip-label">{domain}</span>
            </button>
          ))}
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
                  className={`interest-signal-card border-2 border-foreground p-5 max-[390px]:p-4 md:p-6 bg-card ${interest.wide ? "xl:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3 max-[390px]:gap-2 mb-4 max-[390px]:mb-3">
                    <span className="inline-flex items-center gap-2 max-[390px]:gap-1.5 border-2 border-foreground px-2 max-[390px]:px-1.5 py-1 max-[390px]:py-0.5 bg-secondary/70">
                      <span className="interest-icon-frame" aria-hidden="true">
                        <Icon className="h-2.5 w-2.5 max-[390px]:h-2 max-[390px]:w-2" strokeWidth={2.2} />
                      </span>
                      <span className="font-mono text-[10px] max-[390px]:text-[9px] font-bold tracking-wider">{interest.domain}</span>
                    </span>
                    <span className="font-mono text-sm max-[390px]:text-xs font-bold text-muted-foreground">#{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="font-mono text-lg max-[390px]:text-base md:text-xl font-bold border-t-2 border-foreground pt-3 max-[390px]:pt-2.5 mb-2 max-[390px]:mb-1.5">{interest.title}</h3>
                  <p className="leading-relaxed text-sm max-[390px]:text-[13px] mb-4 max-[390px]:mb-3">{interest.description}</p>

                  <div className="grid grid-cols-[1fr_auto] items-end gap-3 max-[390px]:gap-2">
                    <div className="border border-foreground/40 px-2.5 max-[390px]:px-2 py-2 max-[390px]:py-1.5 font-mono text-[10px] max-[390px]:text-[9px] uppercase tracking-wider bg-background/50">
                      MODE: {interest.mode}
                    </div>
                    <div className="flex items-end gap-1 max-[390px]:gap-[3px]">
                      {meterBarHeights.map((heightClass, meterIndex) => (
                        <span
                          key={`${interest.title}-meter-${meterIndex}`}
                          className={`w-1.5 max-[390px]:w-[5px] border border-foreground ${heightClass} ${
                            meterIndex < interest.intensity ? "bg-accent" : "bg-transparent"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
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
