"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

export function SideNavigation({ sections, activeIndex, onNavigate }: SideNavigationProps) {
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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
            className="w-full flex items-center gap-2 p-2 font-mono text-xs font-bold border-2 border-foreground hover:bg-accent transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
            {theme === "dark" ? "DARK" : "LIGHT"}
          </motion.button>
          <div className="font-mono text-[10px] text-muted-foreground text-center">
            [1-7] NAVIGATE
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 border-foreground bg-background">
        <AnimatePresence mode="wait">
          {!mobileOpen ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between px-4 h-14"
            >
              <span className="font-mono text-xs font-bold">
                {">"} {sections[activeIndex].label}
              </span>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 border-2 border-foreground font-mono text-xs"
                  whileTap={{ scale: 0.95 }}
                >
                  {theme === "dark" ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
                </motion.button>
                <button
                  onClick={() => setMobileOpen(true)}
                  className="px-3 py-2 border-2 border-foreground font-mono text-xs font-bold"
                >
                  MENU
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-background"
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/20">
                <span className="font-mono text-xs font-bold">NAVIGATE</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-1 border-2 border-foreground font-mono text-xs font-bold"
                >
                  CLOSE
                </button>
              </div>
              <div className="grid grid-cols-4 gap-0">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      onNavigate(index)
                      setMobileOpen(false)
                    }}
                    className={`p-3 font-mono text-[10px] font-bold border border-foreground/10 transition-colors ${
                      activeIndex === index
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <div className="text-[8px] opacity-50 mb-1">{section.shortcut}</div>
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
