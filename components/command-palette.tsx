"use client"

import { useEffect, useMemo, useState } from "react"

import { projects } from "@/data/projects"

type Section = {
  id: string
  label: string
  shortcut: string
}

interface CommandPaletteProps {
  sections: Section[]
  onNavigate: (index: number) => void
}

type CommandItem = {
  id: string
  label: string
  description: string
  run: () => void
  search: string
}

export function CommandPalette({ sections, onNavigate }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionCommands = useMemo<CommandItem[]>(
    () =>
      sections.map((section, index) => ({
        id: `section-${section.id}`,
        label: `${section.shortcut} ${section.label}`,
        description: "Navigate to section",
        run: () => {
          onNavigate(index)
          setOpen(false)
          setQuery("")
        },
        search: `${section.id} ${section.label} ${section.shortcut}`.toLowerCase(),
      })),
    [onNavigate, sections],
  )

  const projectCommands = useMemo<CommandItem[]>(() => {
    const projectSectionIndex = sections.findIndex((section) => section.id === "projects")

    return projects.map((project) => ({
      id: `project-${project.title}`,
      label: project.title,
      description: "Open project card in Projects section",
      run: () => {
        if (projectSectionIndex >= 0) onNavigate(projectSectionIndex)
        window.dispatchEvent(new CustomEvent("portfolio:open-project", { detail: { title: project.title } }))
        setOpen(false)
        setQuery("")
      },
      search: `${project.title} ${project.category} ${project.tech.join(" ")}`.toLowerCase(),
    }))
  }, [onNavigate, sections])

  const commands = useMemo(() => [...sectionCommands, ...projectCommands], [projectCommands, sectionCommands])

  const filtered = useMemo(() => {
    const input = query.trim().toLowerCase()
    if (!input) return commands
    return commands.filter((command) => command.search.includes(input))
  }, [commands, query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((prev) => !prev)
        return
      }

      if (!open) return

      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        return
      }

      if (event.key === "ArrowDown") {
        event.preventDefault()
        setActiveIndex((prev) => (prev + 1) % Math.max(filtered.length, 1))
        return
      }

      if (event.key === "ArrowUp") {
        event.preventDefault()
        setActiveIndex((prev) => (prev - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1))
        return
      }

      if (event.key === "Enter") {
        event.preventDefault()
        const current = filtered[activeIndex]
        if (current) current.run()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, filtered, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div
        className="mx-auto mt-[10vh] w-[min(760px,92vw)] border-2 border-foreground bg-card"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b-2 border-foreground p-3 md:p-4">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type a section or project..."
            className="w-full bg-transparent font-mono text-sm md:text-base outline-none"
          />
          <p className="font-mono text-[10px] md:text-xs text-muted-foreground mt-2">
            CTRL/CMD + K / ENTER to open / ESC to close
          </p>
        </div>

        <div className="max-h-[55vh] overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="p-4 font-mono text-xs text-muted-foreground">No matches found.</p>
          ) : (
            filtered.map((item, index) => (
              <button
                key={item.id}
                onClick={item.run}
                className={`w-full text-left px-4 py-3 border-b border-foreground/20 transition-colors ${
                  index === activeIndex ? "bg-accent text-accent-foreground" : "hover:bg-secondary"
                }`}
              >
                <p className="font-mono text-xs md:text-sm font-bold">{item.label}</p>
                <p className="font-mono text-[10px] md:text-xs opacity-80">{item.description}</p>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
