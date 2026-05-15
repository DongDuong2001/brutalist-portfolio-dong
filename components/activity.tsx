"use client"

import { motion } from "framer-motion"
import {
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Filter,
  Flag,
  GitBranch,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { useMemo, useState } from "react"

type ActivityTrack = "Startup" | "Company" | "University" | "Competition" | "Desktop" | "Backend" | "Open Source"
type ActivityContext = "University" | "Company" | "Startup" | "Community"
type MissionFilter = "ALL" | "ACADEMIC" | "PROFESSIONAL" | "COMPETITION" | "OPEN SOURCE"

type ActivityItem = {
  type: string
  title: string
  project: string
  date: string
  year: number
  track: ActivityTrack
  context: ActivityContext
  description: string
  link: string
}

const activities: ActivityItem[] = [
  {
    type: "EDUCATION",
    title: "Capstone A",
    project: "RMIT University Vietnam",
    date: "April 08 - May 25, 2026",
    year: 2026,
    track: "University",
    context: "University",
    description:
      "Undertaking Capstone A as part of the Bachelor's program at RMIT University Vietnam, focusing on project planning, research, and initial implementation of the final-year capstone project.",
    link: "#",
  },
  {
    type: "PROJECT LEADER",
    title: "Project Luvcraft",
    project: "Project Pluto Company",
    date: "April 2026 - Present",
    year: 2026,
    track: "Company",
    context: "Company",
    description:
      "Serving as Project Leader and Full-stack Developer for Project Luvcraft at Project Pluto Company, leading a team of 4 while driving product planning, implementation, and delivery across the stack.",
    link: "#",
  },
  {
    type: "BUILDING",
    title: "Graft",
    project: "Go Language Project",
    date: "2026 - Present",
    year: 2026,
    track: "Startup",
    context: "Startup",
    description:
      "Building Graft with Go to focus on reliable backend tooling, performance, and clean developer workflows.",
    link: "https://github.com/DongDuong2001/graft",
  },
  {
    type: "BUILDING",
    title: "SlideGlint",
    project: "Desktop App",
    date: "2026 - Present",
    year: 2026,
    track: "Startup",
    context: "Startup",
    description:
      "Developing SlideGlint as a desktop-first product with smooth interactions and productivity-oriented presentation workflows.",
    link: "https://github.com/DongDuong2001/SlideGlint",
  },
  {
    type: "FOUNDER",
    title: "Founder of lab68dev",
    project: "Freelance Start-up",
    date: "Nov 2025 - Present",
    year: 2025,
    track: "Company",
    context: "Company",
    description:
      "Founded lab68dev, a freelance development start-up focused on building modern web applications and open-source tools for the developer community.",
    link: "https://github.com/lab68dev",
  },
  {
    type: "LEADERSHIP",
    title: "Project Leader - Backend",
    project: "NCT SatEvent - Neo Culture Tech Club",
    date: "2025",
    year: 2025,
    track: "Backend",
    context: "University",
    description:
      "Led backend development for NCT SatEvent platform, architecting scalable APIs, managing database design, and coordinating with frontend teams to deliver event management solutions.",
    link: "https://github.com/rmit-nct/nct-satevent",
  },
  {
    type: "HACKATHON",
    title: "GameJam 2025",
    project: "RMIT University",
    date: "2025",
    year: 2025,
    track: "Competition",
    context: "University",
    description:
      "Participated in RMIT's annual game development hackathon, collaborating on innovative game concepts.",
    link: "https://github.com/Dilson20/RMITGJ2025",
  },
  {
    type: "ROLE",
    title: "Project Contributor",
    project: "Neo Culture Tech Club - RMIT University Vietnam",
    date: "2025",
    year: 2025,
    track: "Open Source",
    context: "University",
    description:
      "Contributed code, documentation, and testing for club projects; collaborated with team members on implementation and demos.",
    link: "#",
  },
  {
    type: "COMPETITION",
    title: "Gemini API Competition",
    project: "Medical Web App",
    date: "2024",
    year: 2024,
    track: "Competition",
    context: "University",
    description:
      "Developed a medical web application leveraging Google's Gemini API for AI-powered healthcare solutions.",
    link: "https://github.com/F4P1E/Medical-Web-App-Gemini-API",
  },
  {
    type: "ROLE",
    title: "Project Researcher",
    project: "Neo Culture Tech Club - RMIT University Vietnam",
    date: "2024",
    year: 2024,
    track: "Open Source",
    context: "University",
    description:
      "Conducted research and prototyping for club projects, performed literature reviews, and helped design experiment workflows and technical proposals.",
    link: "#",
  },
  {
    type: "COMPETITION",
    title: "VNISA 2023",
    project: "ASEAN Information Security",
    date: "2023",
    year: 2023,
    track: "Competition",
    context: "University",
    description:
      "Competed in the ASEAN Information Security student competition as Team RMIT 01, achieved Top 55.",
    link: "#",
  },
]

const missionFilters: Array<{ label: MissionFilter; Icon: LucideIcon }> = [
  { label: "ALL", Icon: Filter },
  { label: "ACADEMIC", Icon: GraduationCap },
  { label: "PROFESSIONAL", Icon: BriefcaseBusiness },
  { label: "COMPETITION", Icon: Trophy },
  { label: "OPEN SOURCE", Icon: GitBranch },
]

function missionMatches(activity: ActivityItem, filter: MissionFilter) {
  if (filter === "ALL") return true
  if (filter === "ACADEMIC") return activity.context === "University" || activity.context === "Community"
  if (filter === "PROFESSIONAL") return activity.context === "Company" || activity.context === "Startup"
  if (filter === "COMPETITION") return activity.track === "Competition"
  return activity.track === "Open Source"
}

function getMissionIcon(activity: ActivityItem): LucideIcon {
  if (activity.track === "Competition") return Trophy
  if (activity.track === "Open Source") return GitBranch
  if (activity.context === "Company" || activity.context === "Startup") return Rocket
  return ShieldCheck
}

export function Activity() {
  const [activeFilter, setActiveFilter] = useState<MissionFilter>("ALL")

  const filteredActivities = useMemo(
    () => activities.filter((activity) => missionMatches(activity, activeFilter)),
    [activeFilter],
  )

  const years = useMemo(
    () => Array.from(new Set(filteredActivities.map((activity) => activity.year))).sort((a, b) => b - a),
    [filteredActivities],
  )

  const summary = useMemo(
    () => ({
      total: filteredActivities.length,
      professional: filteredActivities.filter((activity) => activity.context === "Company" || activity.context === "Startup")
        .length,
      academic: filteredActivities.filter((activity) => activity.context === "University" || activity.context === "Community").length,
      publicLinks: filteredActivities.filter((activity) => activity.link !== "#").length,
    }),
    [filteredActivities],
  )

  return (
    <section id="activity">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-6 md:mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} ACTIVITY</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Mission log for leadership, university work, competitions, startup building, and public code.
          </p>
        </div>

        <div className="mb-6 md:mb-8 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.45fr)]">
          <article className="border-2 md:border-4 border-foreground bg-card">
            <div className="grid md:grid-cols-[minmax(0,1fr)_220px]">
              <div className="p-4 md:p-5 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Mission Control
                </p>
                <h3 className="font-mono text-2xl md:text-3xl font-black uppercase leading-tight mb-3">
                  Timeline of build pressure and delivery signals.
                </h3>
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                  {["LEARN", "LEAD", "SHIP"].map((step, index) => (
                    <div key={step} className="contents">
                      <div className="border-2 border-foreground bg-secondary px-2 py-2 text-center">
                        <p className="font-mono text-[10px] md:text-xs font-black">{step}</p>
                      </div>
                      {index < 2 && <div className="h-0.5 w-5 md:w-8 bg-foreground" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 p-3 md:p-4 content-start">
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Missions</p>
                  <p className="font-mono text-xl font-black">{summary.total}</p>
                </div>
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Professional</p>
                  <p className="font-mono text-xl font-black">{summary.professional}</p>
                </div>
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Academic</p>
                  <p className="font-mono text-xl font-black">{summary.academic}</p>
                </div>
                <div className="border-2 border-foreground bg-background/70 p-2.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Links</p>
                  <p className="font-mono text-xl font-black">{summary.publicLinks}</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="border-2 md:border-4 border-foreground bg-card p-3 md:p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2">Mission Filter</p>
            <div className="grid grid-cols-2 gap-2">
              {missionFilters.map(({ label, Icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`min-h-16 border-2 border-foreground p-2 text-left transition-colors ${
                    activeFilter === label ? "bg-accent text-accent-foreground" : "bg-background hover:bg-secondary"
                  }`}
                >
                  <Icon className="h-4 w-4 mb-1" aria-hidden="true" />
                  <span className="font-mono text-[10px] font-black uppercase leading-tight">{label}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>

        {years.length === 0 ? (
          <div className="border-2 border-foreground p-6 font-mono text-sm bg-card">
            No missions match this filter.
          </div>
        ) : (
          <div className="grid gap-5">
            {years.map((year) => {
              const yearActivities = filteredActivities.filter((activity) => activity.year === year)

              return (
                <section key={year} className="border-2 md:border-4 border-foreground bg-card">
                  <div className="grid lg:grid-cols-[130px_1fr]">
                    <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-foreground bg-secondary p-4">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Year</p>
                      <h3 className="font-mono text-4xl font-black">{year}</h3>
                      <p className="mt-2 font-mono text-[10px] font-bold">{yearActivities.length} MISSIONS</p>
                    </div>

                    <div className="grid gap-3 p-3 md:p-4 md:grid-cols-2">
                      {yearActivities.map((activity, index) => {
                        const Icon = getMissionIcon(activity)

                        return (
                          <motion.article
                            key={`${activity.title}-${activity.date}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.28, delay: index * 0.04 }}
                            className="border-2 border-foreground bg-background/70"
                          >
                            <div className="grid grid-cols-[52px_1fr] h-full">
                              <div className="border-r-2 border-foreground bg-secondary p-2 flex flex-col items-center justify-between">
                                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                                <span className="font-mono text-[10px] font-black text-muted-foreground">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                              </div>

                              <div className="p-3">
                                <div className="flex flex-wrap gap-1.5 mb-2">
                                  <span className="border border-foreground/50 px-2 py-0.5 font-mono text-[10px] font-bold">
                                    {activity.type}
                                  </span>
                                  <span className="border border-foreground/50 px-2 py-0.5 font-mono text-[10px] font-bold bg-accent/15">
                                    {activity.track}
                                  </span>
                                </div>
                                <h4 className="font-mono text-base md:text-lg font-black leading-tight">{activity.title}</h4>
                                <p className="mt-1 font-mono text-[10px] text-muted-foreground">{activity.date}</p>
                                <p className="mt-1 text-sm font-medium text-muted-foreground">{activity.project}</p>
                                <p className="mt-2 text-sm leading-relaxed">{activity.description}</p>

                                {activity.link !== "#" && (
                                  <a
                                    href={activity.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 border-2 border-foreground px-3 py-1.5 font-mono text-xs font-bold hover:bg-foreground hover:text-background transition-colors"
                                  >
                                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                                    View Project
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.article>
                        )
                      })}
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
