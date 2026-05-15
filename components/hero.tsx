"use client"

import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Trophy,
  Users,
} from "lucide-react"

interface HeroProps {
  onNavigate?: (index: number) => void
}

const SESSION_ID_KEY = "portfolio-session-id"
const VIEW_COUNTED_KEY = "portfolio-view-counted"

const heroStats = [
  {
    label: "Top launch",
    value: "#1 Weekly",
    detail: "Lab68 CV Builder on Forg",
  },
  {
    label: "Users",
    value: "100+",
    detail: "Across launched tools",
  },
  {
    label: "Builds",
    value: "11+",
    detail: "Shipped and in progress",
  },
]

const dossierRows = [
  { label: "Role", value: "Full-stack Product Developer", Icon: BriefcaseBusiness },
  { label: "Location", value: "Ho Chi Minh City, Vietnam", Icon: MapPin },
  { label: "Education", value: "RMIT Software Engineering", Icon: GraduationCap },
  { label: "Status", value: "Available for work", Icon: CheckCircle2 },
]

const fitSignals = [
  "Ships production-grade apps from idea to launch.",
  "Comfortable across product UI, backend APIs, data, and deployment.",
  "Founder mindset with public traction, launch awards, and user feedback loops.",
]

const stackHighlights = ["Next.js", "React", "TypeScript", "Spring Boot", "PostgreSQL", "Go"]

const routeStops = ["RMIT", "LAB68DEV", "YOUR TEAM"]

const ticketMeta = [
  { label: "Seat", value: "FULL-STACK" },
  { label: "Class", value: "PRODUCT" },
  { label: "Gate", value: "OPEN" },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/duong-phu-dong/",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/DongDuong2001",
    Icon: Github,
  },
  {
    label: "Email",
    href: "mailto:dongduong840@gmail.com",
    Icon: Mail,
  },
]

export function Hero({ onNavigate }: HeroProps) {
  const [profileViews, setProfileViews] = useState<number | null>(null)

  useEffect(() => {
    let isActive = true

    const getOrCreateSessionId = () => {
      const existing = window.sessionStorage.getItem(SESSION_ID_KEY)
      if (existing) return existing

      const generated =
        typeof crypto !== "undefined" && "randomUUID" in crypto
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

  return (
    <section id="home" className="relative h-[calc(100dvh-3.5rem)] md:h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute inset-0 opacity-35">
          <span className="absolute left-[12%] top-0 bottom-0 border-l border-accent/20" />
          <span className="absolute left-[36%] top-0 bottom-0 border-l border-foreground/10" />
          <span className="absolute left-[64%] top-0 bottom-0 border-l border-foreground/10" />
          <span className="absolute left-[88%] top-0 bottom-0 border-l border-accent/20" />
          <span className="absolute top-[18%] left-0 right-0 border-t border-foreground/10" />
          <span className="absolute top-[52%] left-0 right-0 border-t border-accent/15" />
          <span className="absolute top-[84%] left-0 right-0 border-t border-foreground/10" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex h-full min-h-0 px-4 py-4 md:py-5 lg:py-6">
        <div className="grid min-h-0 w-full items-center gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:gap-6">
          <article className="relative overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)] lg:border-4">
            <div className="grid grid-cols-[1fr_auto] border-b-2 border-foreground">
              <div className="px-3 py-2 md:px-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Candidate Boarding Pass
                </p>
                <p className="font-mono text-xs font-black uppercase md:text-sm">Duong Phu Dong / lab68dev</p>
              </div>
              <div className="border-l-2 border-foreground bg-accent px-3 py-2 text-accent-foreground md:px-4">
                <p className="font-mono text-[9px] font-bold uppercase tracking-wider">Status</p>
                <p className="font-mono text-xs font-black">OPEN</p>
              </div>
            </div>

            <div className="relative grid gap-3 p-3 md:gap-4 md:p-4 lg:grid-cols-[minmax(0,1fr)_130px] xl:grid-cols-[minmax(0,1fr)_150px]">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h1 className="font-mono text-[2.45rem] font-black uppercase leading-[0.88] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl">
                    Full-stack
                    <span className="block text-accent">Product</span>
                    Developer
                  </h1>
                </div>

                <div className="grid grid-cols-3 border-2 border-foreground bg-background/70">
                  {ticketMeta.map((item) => (
                    <div key={item.label} className="border-r-2 border-foreground px-2 py-2 last:border-r-0">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{item.label}</p>
                      <p className="font-mono text-[10px] font-black uppercase leading-tight md:text-xs">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                  {routeStops.map((stop, index) => (
                    <div key={stop} className="contents">
                      <div className="border-2 border-foreground bg-secondary px-2 py-1.5 text-center">
                        <p className="font-mono text-[10px] font-black uppercase">{stop}</p>
                      </div>
                      {index < routeStops.length - 1 && (
                        <div className="h-0.5 w-5 bg-foreground md:w-8" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="max-w-3xl border-l-4 border-accent pl-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  I build production-ready web products with clear UX, reliable backend systems, and launch-focused execution while studying Software Engineering at RMIT.
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="border-2 border-foreground bg-background/70 p-2 md:p-3">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                      <p className="font-mono text-lg font-black leading-tight md:text-2xl">{stat.value}</p>
                      <p className="hidden font-mono text-[10px] leading-snug text-muted-foreground sm:block">{stat.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  <button
                    onClick={() => onNavigate?.(1)}
                    className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-3 py-2 font-mono text-xs font-bold text-background transition-colors hover:bg-accent hover:text-accent-foreground md:px-4 md:text-sm"
                  >
                    <Rocket className="h-4 w-4" aria-hidden="true" />
                    View Work
                  </button>
                  <button
                    onClick={() => onNavigate?.(7)}
                    className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-card px-3 py-2 font-mono text-xs font-bold transition-colors hover:bg-foreground hover:text-background md:px-4 md:text-sm"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contact
                  </button>
                  <a
                    href="/cv/Duong Phu Dong - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-card px-3 py-2 font-mono text-xs font-bold transition-colors hover:bg-foreground hover:text-background md:px-4 md:text-sm"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    CV
                  </a>
                  <a
                    href="/api/project-index?style=harvard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-card px-3 py-2 font-mono text-xs font-bold transition-colors hover:bg-foreground hover:text-background md:px-4 md:text-sm"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    PDF
                  </a>
                </div>
              </div>

              <div className="hidden border-l-2 border-dashed border-foreground pl-3 lg:flex lg:flex-col lg:justify-between">
                <div className="-rotate-2 border-2 border-foreground bg-accent p-2 text-accent-foreground shadow-[3px_3px_0_0_var(--foreground)]">
                  <Trophy className="mb-1 h-5 w-5" aria-hidden="true" />
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider">Launch Stamp</p>
                  <p className="font-mono text-xl font-black leading-none">#1</p>
                  <p className="font-mono text-[10px] font-bold uppercase leading-tight">Product Week</p>
                </div>

                <div className="space-y-1.5">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Boarding Code</p>
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-6 border border-foreground ${
                          index % 3 === 0 || index % 7 === 0 ? "bg-foreground" : "bg-background"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="hidden max-h-[calc(100dvh-3rem)] overflow-hidden border-2 border-foreground bg-card lg:block">
            <div className="flex items-center justify-between gap-3 border-b-2 border-foreground bg-foreground px-3 py-2.5 text-background">
              <span className="font-mono text-xs font-bold uppercase tracking-wider">Signal Manifest</span>
              <span className="font-mono text-[10px] font-bold">
                Views {profileViews === null ? "..." : profileViews.toLocaleString()}
              </span>
            </div>

            <div className="p-3 xl:p-4">
              <div className="mb-3 grid gap-1.5">
                {dossierRows.map(({ label, value, Icon }) => (
                  <div key={label} className="grid grid-cols-[auto_1fr] gap-2.5 border-2 border-foreground bg-background/70 p-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center border-2 border-foreground bg-secondary">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        {label}
                      </span>
                      <span className="block text-xs font-bold leading-snug xl:text-sm">{value}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-3 border-2 border-foreground bg-secondary p-2.5">
                <div className="mb-1.5 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-accent" aria-hidden="true" />
                  <p className="font-mono text-xs font-bold uppercase tracking-wider">Best Proof</p>
                </div>
                <p className="text-xs leading-relaxed xl:text-sm">
                  Lab68 CV Builder reached #1 Product of the Week on Forg and #1 Product of the Day on Unikorn with 100+ users.
                </p>
              </div>

              <div className="mb-3">
                <p className="mb-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Why Recruiters Should Care
                </p>
                <ul className="space-y-1.5">
                  {fitSignals.map((signal, index) => (
                    <li key={signal} className="flex gap-2 text-xs leading-relaxed xl:text-sm">
                      <span className="font-mono text-[10px] font-bold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3 flex flex-wrap gap-1.5">
                {stackHighlights.map((item) => (
                  <span key={item} className="border border-foreground/50 px-2 py-1 font-mono text-[10px] font-bold text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group inline-flex items-center justify-center gap-1.5 border-2 border-foreground px-2 py-2 font-mono text-[10px] font-bold transition-colors hover:bg-foreground hover:text-background"
                    aria-label={label}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{label}</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
