"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"

interface Section {
  id: string
  label: string
  shortcut: string
}

interface SideNavigationProps {
  sections: Section[]
  activeIndex: number
  onNavigate: (index: number) => void
}

export function SideNavigation({
  sections,
  activeIndex,
  onNavigate,
}: SideNavigationProps) {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleMobileNavigate = (index: number) => {
    onNavigate(index)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (!mobileMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [mobileMenuOpen])

  if (!mounted) return null

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-[200px] border-r-2 border-foreground bg-background z-50 flex-col">
        {/* Logo */}
        <div className="border-b-2 border-foreground p-4 h-16 flex items-center">
          <span className="font-mono text-sm font-bold tracking-tight truncate">
            {">"} DONG.DEV
          </span>
        </div>

        {/* Nav Items */}
        <div className="flex-1 flex flex-col">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onNavigate(index)}
              className={`relative w-full text-left px-4 py-3 font-mono text-xs font-bold border-b border-foreground/20 transition-colors flex items-center gap-3 ${
                activeIndex === index
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <span className="text-[10px] opacity-50">{section.shortcut}</span>
              <span>{section.label}</span>
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-foreground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-foreground p-4 space-y-3">
          <motion.button
            onClick={toggleTheme}
            className="w-full p-2 font-mono text-xs font-bold border-2 border-foreground hover:bg-accent transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            THEME: {theme === "dark" ? "DARK" : "LIGHT"}
          </motion.button>
          <div className="font-mono text-[10px] text-muted-foreground text-center">
            [1-8] NAVIGATE / [CTRL/CMD + K] COMMAND
          </div>
        </div>
      </nav>

      {/* Mobile Floating Menu */}
      <div className="md:hidden">
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close navigation backdrop"
                className="fixed inset-0 z-40 bg-background/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.nav
                aria-label="Mobile navigation"
                className="fixed bottom-20 left-3 right-3 z-50 border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex items-center justify-between border-b-2 border-foreground bg-foreground px-3 py-2 text-background">
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] opacity-80">Navigation</p>
                    <p className="font-mono text-xs font-black">{sections[activeIndex]?.label ?? "HOME"}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center border-2 border-background transition-colors hover:bg-background hover:text-foreground"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3">
                  {sections.map((section, index) => {
                    const isActive = activeIndex === index
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleMobileNavigate(index)}
                        className={`relative min-h-12 border-2 border-foreground px-3 py-2 text-left transition-colors ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "bg-background hover:bg-secondary"
                        }`}
                      >
                        <span className="block font-mono text-[9px] font-bold opacity-70">{section.shortcut}</span>
                        <span className="block font-mono text-[10px] font-black uppercase leading-tight">{section.label}</span>
                        {isActive && (
                          <motion.span
                            layoutId="mobileMenuActive"
                            className="absolute bottom-0 left-0 right-0 h-1 bg-foreground"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    )
                  })}
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-2 border-t-2 border-foreground p-3">
                  <button
                    onClick={toggleTheme}
                    className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-background px-3 py-2 font-mono text-xs font-bold transition-colors hover:bg-foreground hover:text-background"
                  >
                    {theme === "dark" ? (
                      <Moon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Sun className="h-4 w-4" aria-hidden="true" />
                    )}
                    THEME: {theme === "dark" ? "DARK" : "LIGHT"}
                  </button>
                  <span className="inline-flex items-center border-2 border-foreground bg-secondary px-3 py-2 font-mono text-[10px] font-bold">
                    1-8
                  </span>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 border-2 border-foreground bg-accent px-4 py-3 font-mono text-xs font-black uppercase text-accent-foreground shadow-[4px_4px_0_0_var(--foreground)]"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          Menu
        </motion.button>
      </div>
    </>
  )
}
