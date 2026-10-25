"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { skills as skillCategories } from "@/data/skills"
import { Code, Server, Designtools, ShieldCheck } from "reicon-react"

const iconsMap: Record<string, any> = {
  LANGUAGES: Code,
  "FRAMEWORKS & LIBRARIES": Server,
  "DATABASES & INFRASTRUCTURE": Designtools,
  "SYSTEMS & ARCHITECTURE": ShieldCheck,
}

// Point on a circle, as % of the square orbit container (0deg = top).
const polar = (angleDeg: number, radiusPct: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { left: `${50 + radiusPct * Math.cos(rad)}%`, top: `${50 + radiusPct * Math.sin(rad)}%` }
}

// Inspired by jatin-yadav05's Radial Orbital Timeline on 21st.dev.
export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = skillCategories[activeIndex]
  const ActiveIcon = iconsMap[active.category] || Code

  return (
    <section id="technical-skills" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border border-border/60 bg-card/70 backdrop-blur-md px-3 py-1.5 inline-block rounded-xl shadow-sm">
            <h2 className="font-mono text-xl md:text-3xl font-bold tracking-tight text-foreground">{">"} TECHNICAL SKILLS & STACK</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Technologies, frameworks, and architecture patterns I actively use in production, hackathons, and local AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
          {/* Orbit map */}
          <div className="group relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[6%] rounded-full border border-dashed border-border/40" />
            <div className="absolute inset-[24%] rounded-full border border-border/30" />
            <div className="absolute inset-[42%] rounded-full bg-accent/10 blur-2xl" />

            {/* Core */}
            <div className="absolute left-1/2 top-1/2 flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/50 bg-card/90 backdrop-blur-xl shadow-[0_0_40px_-8px_var(--accent)]">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">core</span>
              <span className="font-mono text-xs sm:text-sm font-black text-accent">STACK</span>
            </div>

            {/* Outer ring: tools of the active category */}
            <AnimatePresence mode="popLayout">
              {active.items.map((item, i) => {
                // Start at the top so labels avoid the narrow left/right extremes
                const pos = polar((360 / active.items.length) * i, 44)
                return (
                  <motion.span
                    key={`${active.category}-${item}`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.05 } }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    style={pos}
                    className="absolute z-10 max-w-[34%] -translate-x-1/2 -translate-y-1/2 truncate border border-border/50 bg-card/90 backdrop-blur-md px-2 py-1 font-mono text-[9px] sm:text-[10px] font-semibold text-foreground rounded-lg shadow-sm"
                    title={item}
                  >
                    {item}
                  </motion.span>
                )
              })}
            </AnimatePresence>

            {/* Inner ring: categories, slowly orbiting; paused on hover */}
            <div className="absolute inset-0 z-20 animate-[spin_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {skillCategories.map((cat, i) => {
                const Icon = iconsMap[cat.category] || Code
                const isActive = i === activeIndex
                return (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    aria-label={cat.category}
                    style={polar((360 / skillCategories.length) * i, 26)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    {/* Counter-spin keeps the icon upright */}
                    <span
                      className={`flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border backdrop-blur-md transition-all animate-[spin_60s_linear_infinite_reverse] group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
                        isActive
                          ? "border-accent bg-accent text-accent-foreground shadow-[0_0_24px_-2px_var(--accent)] scale-110"
                          : "border-border/60 bg-card/90 text-accent hover:border-accent/60"
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="spotlight border border-border/50 bg-card/75 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
            <div className="flex flex-wrap gap-1.5 mb-5" role="tablist" aria-label="Skill categories">
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.category}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                  className={`px-2.5 py-1 font-mono text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                    i === activeIndex
                      ? "border-accent/50 bg-accent/15 text-accent"
                      : "border-border/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.category}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3.5 border-b border-border/30 pb-3.5 mb-3.5">
                  <div className="h-9 w-9 bg-secondary/40 border border-border/60 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-accent">
                    <ActiveIcon className="h-4 w-4" />
                  </div>
                  <h3 className="font-mono text-sm font-black uppercase tracking-wider text-foreground">{active.category}</h3>
                </div>

                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{active.description}</p>

                <div className="flex flex-wrap gap-2">
                  {active.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center border border-border/50 bg-secondary/30 backdrop-blur-md px-3 py-1.5 font-mono text-xs font-semibold text-foreground rounded-xl shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
