"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Download } from "lucide-react"

interface Section {
  id: string
  label: string
}

interface SideNavigationProps {
  sections: Section[]
  activeIndex: number
  onNavigate: (index: number) => void
}

export function SideNavigation({ sections, activeIndex, onNavigate }: SideNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (index: number) => {
    setMenuOpen(false)
    onNavigate(index)
  }

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-14">
        <button
          type="button"
          onClick={() => handleNavigate(0)}
          className="flex cursor-pointer flex-col items-start leading-[0.9] text-foreground"
          aria-label="Back to top"
        >
          <span className="font-mono text-[15px] font-medium tracking-wide">duong.phu</span>
          <span className="text-[27px] font-black tracking-tighter">DONG</span>
        </button>

        <div className="flex items-center gap-2.5">
          <span className="hidden min-h-11 items-center gap-2 rounded-md border border-border px-3.5 text-xs font-bold text-muted-foreground sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-[#1f8a3b]" />
            Available for work
          </span>
          <a
            href="/cv/DuongPhuDong_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-4 text-[13px] font-extrabold tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden="true" />
            RESUME
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border-[1.5px] border-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 9h16" />
                    <path d="M10 15h10" />
                  </>
                )}
              </svg>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <>
                  <motion.div
                    className="fixed inset-0 z-40"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <motion.nav
                    aria-label="Sections"
                    className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-lg bg-ink text-[#e6edf3] shadow-2xl"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {sections.map((section, index) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => handleNavigate(index)}
                        className={`flex w-full cursor-pointer items-center justify-between border-b border-line-dark px-4 py-3 text-left text-lg font-black tracking-tight last:border-b-0 transition-colors hover:bg-ink-2 ${
                          activeIndex === index ? "text-accent" : ""
                        }`}
                      >
                        {section.label}
                        <span className="text-[10px] font-bold tracking-widest text-mist">{String(index + 1).padStart(2, "0")}</span>
                      </button>
                    ))}
                  </motion.nav>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
