"use client"

import { useState, useCallback, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Activity } from "@/components/activity"
import { Interests } from "@/components/interests"
import { Contact } from "@/components/contact"
import { HeroMarquee } from "@/components/hero-marquee"
import { SideNavigation } from "@/components/navigation"

const sections = [
  { id: "home", label: "HOME", shortcut: "01" },
  { id: "skills", label: "SKILLS", shortcut: "02" },
  { id: "projects", label: "PROJECTS", shortcut: "03" },
  { id: "education", label: "EDUCATION", shortcut: "04" },
  { id: "activity", label: "ACTIVITY", shortcut: "05" },
  { id: "interests", label: "INTERESTS", shortcut: "06" },
  { id: "contact", label: "CONTACT", shortcut: "07" },
]

const panelVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? 30 : -30,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? -30 : 30,
  }),
}

export default function Home() {
  const [[activeIndex, direction], setPage] = useState([0, 0])

  const navigateTo = useCallback((index: number) => {
    setPage(([prev]) => [index, index > prev ? 1 : -1])
  }, [])

  // Keyboard navigation (1-7 keys)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      const num = parseInt(e.key)
      if (num >= 1 && num <= sections.length) {
        navigateTo(num - 1)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [navigateTo])

  // Sync URL hash
  useEffect(() => {
    window.history.replaceState(null, "", `#${sections[activeIndex].id}`)
  }, [activeIndex])

  // Handle initial hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const index = sections.findIndex((s) => s.id === hash)
      if (index >= 0) setPage([index, 0])
    }
  }, [])

  const renderSection = () => {
    switch (activeIndex) {
      case 0:
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <HeroMarquee />
          </>
        )
      case 1:
        return <Skills />
      case 2:
        return <Projects />
      case 3:
        return <Education />
      case 4:
        return <Activity />
      case 5:
        return <Interests />
      case 6:
        return <Contact />
      default:
        return <Hero onNavigate={navigateTo} />
    }
  }

  return (
    <div className="h-screen flex bg-background text-foreground selection:bg-accent selection:text-accent-foreground overflow-hidden">
      <SideNavigation
        sections={sections}
        activeIndex={activeIndex}
        onNavigate={navigateTo}
      />

      <main className="flex-1 h-screen overflow-hidden md:ml-[200px] pb-14 md:pb-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full overflow-y-auto"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
