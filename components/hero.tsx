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
} from "lucide-react"

interface HeroProps {
  onNavigate?: (index: number) => void
}

const SESSION_ID_KEY = "portfolio-session-id"
const VIEW_COUNTED_KEY = "portfolio-view-counted"

const dossierRows = [
  { label: "Role", value: "Full-stack & Systems Architect", Icon: BriefcaseBusiness },
  { label: "Education", value: "RMIT Software Engineering (Graduating 2027)", Icon: GraduationCap },
  { label: "Location", value: "Ho Chi Minh City, Vietnam", Icon: MapPin },
  { label: "Specialty", value: "Web Apps & AI Integrations", Icon: Rocket },
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
    <section id="home" className="relative flex flex-col items-center justify-center pt-2 space-y-6 md:space-y-8">
      {/* Responsive Dynamic Video Banner */}
      <div className="w-full relative overflow-hidden border-2 border-foreground bg-black rounded-xl shadow-[4px_4px_0_0_var(--foreground)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[380px] object-contain mx-auto block"
        >
          <source src="/logo_banner/duongphudong_banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 w-full items-stretch">
        {/* Main Bio Panel */}
        <article className="border-2 border-foreground bg-card p-5 sm:p-7 md:p-8 flex flex-col justify-between rounded-xl hover:shadow-[5px_5px_0_0_var(--foreground)] transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-foreground pb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo_banner/DuongPhuDong_Logo.jpg"
                  alt="Duong Phu Dong Logo"
                  className="h-12 w-12 md:h-14 md:w-14 rounded-xl border-2 border-foreground object-cover shadow-[2px_2px_0_0_var(--foreground)] shrink-0"
                />
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    SOFTWARE ENGINEER
                  </p>
                  <p className="font-mono text-sm sm:text-base font-black uppercase">Duong Phu Dong / @lab68dev</p>
                </div>
              </div>
              <div className="border-2 border-foreground bg-accent px-3 py-1 text-accent-foreground font-mono text-xs font-black rounded-md shadow-[2px_2px_0_0_var(--foreground)]">
                AVAILABLE
              </div>
            </div>

            <h1 className="font-mono text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight">
              Systems & <br />
              <span className="text-accent">Full-stack</span> Engineer
            </h1>

            <p className="border-l-4 border-accent pl-3.5 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
              I build reliable web applications, design scalable database architectures, and integrate local AI models into practical software systems while completing my Software Engineering degree at RMIT.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5">
            <button
              onClick={() => onNavigate?.(1)}
              className="inline-flex min-h-10 items-center justify-center gap-2 border-2 border-foreground bg-foreground px-4 py-2 font-mono text-xs font-bold text-background transition-all hover:bg-accent hover:text-accent-foreground rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <Rocket className="h-4 w-4" />
              VIEW PROJECTS
            </button>
            <button
              onClick={() => onNavigate?.(4)}
              className="inline-flex min-h-10 items-center justify-center gap-2 border-2 border-foreground bg-card px-4 py-2 font-mono text-xs font-bold transition-all hover:bg-foreground hover:text-background rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              CONTACT
            </button>
            <a
              href="/cv/DuongPhuDong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 border-2 border-foreground bg-card px-4 py-2 font-mono text-xs font-bold transition-all hover:bg-foreground hover:text-background rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              RESUME (CV)
            </a>
          </div>
        </article>

        {/* Stats & Dossier Panel */}
        <aside className="border-2 border-foreground bg-card flex flex-col justify-between rounded-xl overflow-hidden hover:shadow-[5px_5px_0_0_var(--foreground)] transition-all">
          <div className="flex items-center justify-between border-b-2 border-foreground bg-foreground px-4 py-3 text-background">
            <span className="font-mono text-xs font-bold uppercase tracking-wider">ENGINEER MANIFEST</span>
            <span className="font-mono text-[10px] font-bold">
              VIEWS: {profileViews === null ? "..." : profileViews.toLocaleString()}
            </span>
          </div>

          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center space-y-3.5">
            {dossierRows.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-center gap-3 border-2 border-foreground bg-background/60 p-2.5 rounded-lg hover:bg-secondary/40 transition-colors">
                <div className="h-8 w-8 bg-secondary border border-foreground flex items-center justify-center shrink-0 rounded-md">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="block text-xs font-bold text-foreground leading-snug truncate">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-foreground p-3.5 bg-secondary/10 flex justify-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-foreground bg-background py-2 font-mono text-[10px] font-bold rounded-md transition-all hover:bg-foreground hover:text-background shadow-[1px_1px_0_0_var(--foreground)]"
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
