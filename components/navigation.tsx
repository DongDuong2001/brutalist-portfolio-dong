"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "EDUCATION", href: "#education" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ACTIVITY", href: "#activity" },
    { label: "INTERESTS", href: "#interests" },
    { label: "CONTACT", href: "#contact" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-mono text-lg md:text-xl font-bold tracking-tight">{">"} Duong Phu Dong </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="relative p-2 rounded-full border-2 border-foreground hover:bg-accent transition-colors overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === "dark" ? 0 : 180,
                  scale: theme === "dark" ? 1 : 0,
                  opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-4 w-4" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === "dark" ? -180 : 0,
                  scale: theme === "dark" ? 0 : 1,
                  opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Sun className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-2 border-foreground px-3 py-2 font-mono text-xs font-bold"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-foreground py-4 bg-background absolute left-0 right-0 px-4 border-b-2 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 font-mono text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-transparent hover:border-foreground"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme()
                  setIsOpen(false)
                }}
                className="w-full mt-4 border-2 border-foreground px-3 py-3 font-mono text-sm font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" /> LIGHT MODE
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" /> DARK MODE
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
