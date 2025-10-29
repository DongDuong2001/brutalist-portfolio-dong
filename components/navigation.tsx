"use client"

import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "EDUCATION", href: "#education" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ACTIVITY", href: "#activity" },
    { label: "INTERESTS", href: "#interests" },
    { label: "CONTACT", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-foreground bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-mono text-xl font-bold tracking-tight">{">"} PORTFOLIO</div>

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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-2 border-foreground px-3 py-2 font-mono text-sm"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-foreground py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 font-mono text-sm font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
