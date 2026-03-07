"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Home, Code2, FolderKanban, GraduationCap, Activity, Heart, Mail } from "lucide-react"
import { motion } from "framer-motion"

const SECTION_ICONS: Record<string, React.ElementType> = {
  home: Home,
  skills: Code2,
  projects: FolderKanban,
  education: GraduationCap,
  activity: Activity,
  interests: Heart,
  contact: Mail,
}

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

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 border-foreground bg-background">
        <div className="flex items-stretch">
          {sections.map((section, index) => {
            const Icon = SECTION_ICONS[section.id] || Home
            const isActive = activeIndex === index
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(index)}
                className={`relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute top-0 left-0 right-0 h-0.5 bg-foreground"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="h-4 w-4" />
                <span className="font-mono text-[8px] font-bold leading-none">{section.label}</span>
              </button>
            )
          })}
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center gap-0.5 py-2 px-3 border-l border-foreground/20 text-muted-foreground hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="font-mono text-[8px] font-bold leading-none">
              {theme === "dark" ? "DARK" : "LIGHT"}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
