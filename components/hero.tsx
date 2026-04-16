"use client"

import { useState, useEffect, useMemo } from "react"

interface HeroProps {
  onNavigate?: (index: number) => void
}

const SESSION_ID_KEY = "portfolio-session-id"
const VIEW_COUNTED_KEY = "portfolio-view-counted"

const profileData = [
  '{',
  '  "location": "HO CHI MINH, VIETNAM",',
  '  "education": "RMIT VIETNAM",',
  '  "projects": "11+ COMPLETED / BUILDING",',
  '  "founder": "@lab68dev",',
  '  "status": "ONLINE"',
  '}',
]

const verticalLinePositions = [
  "left-[10%]",
  "left-[20%]",
  "left-[30%]",
  "left-[40%]",
  "left-[50%]",
  "left-[60%]",
  "left-[70%]",
  "left-[80%]",
  "left-[90%]",
]

const horizontalLinePositions = [
  "top-[12%]",
  "top-[24%]",
  "top-[36%]",
  "top-[48%]",
  "top-[60%]",
  "top-[72%]",
  "top-[84%]",
]

const matrixColumns = [
  {
    leftClass: "left-[4%]",
    phaseClass: "matrix-phase-1",
    content: ["01010110", "$ go run ./cmd/graft", "STATUS: ONLINE", "BUILD OK", "COMMIT feat(hero)"].join("\n"),
  },
  {
    leftClass: "left-[14%]",
    phaseClass: "matrix-phase-2",
    content: ["type App struct {}", "go test ./...", "PASS", "latency < 40ms", "DEPLOY READY"].join("\n"),
  },
  {
    leftClass: "left-[26%]",
    phaseClass: "matrix-phase-3",
    content: ["const version = '2026'", "pnpm build", "chunk graph optimized", "A11Y CHECKED"].join("\n"),
  },
  {
    leftClass: "left-[38%]",
    phaseClass: "matrix-phase-4",
    content: ["SELECT * FROM projects", "WHERE highlighted=true", "ORDER BY year DESC", "rows: 11"].join("\n"),
  },
  {
    leftClass: "left-[52%]",
    phaseClass: "matrix-phase-5",
    content: ["interface Product {}", "ship() => Promise<void>", "quality_gate: pass", "coverage: 93%"].join("\n"),
  },
  {
    leftClass: "left-[64%]",
    phaseClass: "matrix-phase-6",
    content: ["docker compose up", "api healthy", "db connected", "worker running"].join("\n"),
  },
  {
    leftClass: "left-[76%]",
    phaseClass: "matrix-phase-7",
    content: ["git push origin main", "CI: PASS", "LINT: PASS", "TYPECHECK: PASS"].join("\n"),
  },
  {
    leftClass: "left-[88%]",
    phaseClass: "matrix-phase-8",
    content: ["SlideGlint.exe", "Rendering pipeline ready", "fps stable", "UI thread smooth"].join("\n"),
  },
]

const dashboardPanels = [
  {
    panelClass: "top-[8%] left-[8%] w-44",
    phaseClass: "dashboard-phase-1",
    title: "terminal.log",
    lineA: "$ go run ./cmd/graft",
    lineB: "service status: online",
  },
  {
    panelClass: "top-[17%] right-[9%] w-48",
    phaseClass: "dashboard-phase-2",
    title: "build.pipeline",
    lineA: "lint: pass | typecheck: pass",
    lineB: "deploy target: production",
  },
  {
    panelClass: "bottom-[22%] left-[12%] w-52",
    phaseClass: "dashboard-phase-3",
    title: "editor.tsx",
    lineA: "const theme = 'light-mixed'",
    lineB: "responsive: desktop + mobile",
  },
  {
    panelClass: "bottom-[12%] right-[8%] w-48",
    phaseClass: "dashboard-phase-4",
    title: "database.sql",
    lineA: "SELECT award FROM projects",
    lineB: "graft => #3 POD unikorn",
  },
]

export function Hero({ onNavigate }: HeroProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [profileViews, setProfileViews] = useState<number | null>(null)

  const fullText = useMemo(() => profileData.join("\n"), [])

  useEffect(() => {
    if (!isTyping || displayText.length >= fullText.length) {
      setIsTyping(false)
      return
    }

    const nextChar = fullText[displayText.length]
    const delay = nextChar === "\n" ? 180 : [",", ":"].includes(nextChar) ? 110 : 75

    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + nextChar)
    }, delay)

    return () => clearTimeout(timer)
  }, [displayText, fullText, isTyping])

  useEffect(() => {
    let isActive = true

    const getOrCreateSessionId = () => {
      const existing = window.sessionStorage.getItem(SESSION_ID_KEY)
      if (existing) return existing

      const generated = typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`

      window.sessionStorage.setItem(SESSION_ID_KEY, generated)
      return generated
    }

    const updateViews = async () => {
      const sessionId = getOrCreateSessionId()
      const alreadyCounted = window.sessionStorage.getItem(VIEW_COUNTED_KEY) === "1"

      if (!alreadyCounted) {
        const countResponse = await fetch("/api/profile-views", {
          method: "POST",
          headers: { "x-session-id": sessionId },
          cache: "no-store",
        })

        if (countResponse.ok) {
          const countData = (await countResponse.json()) as { total?: number }
          if (isActive && typeof countData.total === "number") {
            setProfileViews(countData.total)
          }
          window.sessionStorage.setItem(VIEW_COUNTED_KEY, "1")
          return
        }
      }

      const readResponse = await fetch("/api/profile-views", { cache: "no-store" })
      if (!readResponse.ok) return

      const readData = (await readResponse.json()) as { total?: number }
      if (isActive && typeof readData.total === "number") {
        setProfileViews(readData.total)
      }
    }

    void updateViews()

    return () => {
      isActive = false
    }
  }, [])

  const handleReplayTyping = () => {
    setDisplayText("")
    setIsTyping(true)
  }

  return (
    <section id="home" className="relative min-h-[calc(100dvh-3.5rem)] md:h-screen flex items-center overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute inset-0 opacity-35">
          {verticalLinePositions.map((positionClass, index) => (
            <span
              key={`v-${index}`}
              className={`absolute top-0 bottom-0 border-l border-accent/20 ${positionClass}`}
            />
          ))}
          {horizontalLinePositions.map((positionClass, index) => (
            <span
              key={`h-${index}`}
              className={`absolute left-0 right-0 border-t border-accent/15 ${positionClass}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {matrixColumns.map((column, index) => (
            <pre
              key={`${column.leftClass}-${index}`}
              className={`matrix-column ${column.leftClass} ${column.phaseClass} ${index > 4 ? "hidden md:block" : ""}`}
            >
              {column.content}
            </pre>
          ))}
        </div>

        <div className="absolute inset-0 hidden md:block">
          {dashboardPanels.map((panel) => (
            <div
              key={panel.title}
              className={`home-dashboard-panel ${panel.panelClass} ${panel.phaseClass}`}
            >
              <div className="home-dashboard-title">{panel.title}</div>
              <div className="home-dashboard-line">{panel.lineA}</div>
              <div className="home-dashboard-line">{panel.lineB}</div>
            </div>
          ))}
        </div>

        <div className="home-scan-x absolute top-0 bottom-0 w-px bg-accent/35" />
        <div className="home-scan-y absolute left-0 right-0 h-px bg-accent/25" />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center">
          <div className="space-y-5 md:space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="border-2 border-foreground p-2 inline-block">
                <span className="font-mono text-xs md:text-sm bg-accent text-accent-foreground px-2 py-1">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <div className="border-2 border-foreground p-2 bg-secondary">
                <span className="font-mono text-[10px] md:text-xs font-bold">
                  PROFILE VIEWS: {profileViews === null ? "..." : profileViews.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 gothic-header">
                FULLSTACK <br />
                <span className="bg-accent text-accent-foreground px-2 italic transform -skew-x-12 inline-block">DEVELOPER</span> <br />
                & TECHNICAL LEADER
              </h1>

              <div className="hero-signature-shell" aria-label="Duong Phu Dong signature">
                <div className="hero-signature-meta">
                  <span>PERSONAL SIGNATURE</span>
                  <span>EST. 2001</span>
                </div>
                <p className="hero-signature-ink">Duong Phu Dong</p>
                <div className="hero-signature-underline" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl font-mono leading-relaxed">
                Full-stack Developer and RMIT Software Engineering student with a track record of shipping production-grade applications to real users. Launched Lab68 CV Builder to #1 Product of the Day on Unikorn and #1 Product of the Week on Forg within a month.
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl font-mono leading-relaxed">
                Experienced in leading backend teams and building secure, scalable systems with React/Next.js, Java (Spring Boot), PostgreSQL, and Go.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onNavigate?.(1)}
                  className="bg-foreground text-background px-6 py-2 font-mono text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-foreground cursor-pointer"
                >
                  VIEW WORK
                </button>
                <button
                  onClick={() => onNavigate?.(7)}
                  className="bg-transparent text-foreground px-6 py-2 font-mono text-sm font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground cursor-pointer"
                >
                  CONTACT ME
                </button>
                <a
                  href="/cv/Duong Phu Dong - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-foreground px-6 py-2 font-mono text-sm font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
                >
                  DOWNLOAD CV
                </a>
                <a
                  href="/api/project-index?style=harvard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-foreground px-6 py-2 font-mono text-sm font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
                >
                  DOWNLOAD PORTFOLIO
                </a>
              </div>
            </div>

            <div className="border-l-4 border-accent pl-3">
              <p className="font-mono text-xs font-bold text-muted-foreground tracking-widest uppercase mb-2">
                SUPPORT — lab68dev
              </p>
              <div className="flex flex-wrap gap-1.5">
                <a
                  href="https://github.com/sponsors/lab68dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-transparent text-foreground px-3 py-1 font-mono text-xs font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  SPONSORS
                </a>
                <a
                  href="https://ko-fi.com/dongphuduong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-transparent text-foreground px-3 py-1 font-mono text-xs font-bold border-2 border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  KO-FI
                </a>
                <a
                  href="https://buymeacoffee.com/lab68dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-transparent text-foreground px-3 py-1 font-mono text-xs font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  COFFEE
                </a>
              </div>
            </div>
          </div>

          {/* Code Editor Window */}
          <div className="border-2 border-foreground bg-card overflow-hidden w-full">
            {/* Window Header */}
            <div className="bg-foreground text-background px-4 py-2 border-b-2 border-foreground">
              <span className="font-mono text-xs font-bold">profile.json</span>
            </div>

            {/* Code Content */}
            <div className="p-4 font-mono text-xs min-h-[170px]">
              <pre className="text-accent whitespace-pre-wrap leading-relaxed overflow-x-auto">
                <span className="text-accent">{displayText}</span>
                {isTyping && <span className="type-cursor">|</span>}
              </pre>
            </div>

            <div className="border-t-2 border-foreground p-3 flex flex-wrap gap-2">
              <button
                onClick={handleReplayTyping}
                className="border-2 border-foreground px-3 py-1 font-mono text-xs font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                REPLAY TYPING
              </button>
              <a
                href="https://github.com/lab68dev"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-foreground px-3 py-1 font-mono text-xs font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                OPEN FOUNDER PROFILE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
