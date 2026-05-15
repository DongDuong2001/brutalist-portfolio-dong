"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Briefcase, Shield } from "lucide-react"
import { useMemo, useState } from "react"

type ActivityTrack = "Startup" | "Company" | "University" | "Competition" | "Desktop" | "Backend" | "Open Source"
type ActivityContext = "University" | "Company" | "Startup" | "Community"

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

const trackFilters: Array<"ALL" | ActivityTrack> = [
  "ALL",
  "Startup",
  "Company",
  "University",
  "Competition",
  "Desktop",
  "Backend",
  "Open Source",
]
const contextFilters: Array<"ALL" | ActivityContext> = ["ALL", "University", "Company", "Startup", "Community"]

const yearBadgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

function summarize(text: string, maxLength = 145): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}...`
}

export function Activity() {
  const [yearFilter, setYearFilter] = useState<string>("ALL")
  const [trackFilter, setTrackFilter] = useState<"ALL" | ActivityTrack>("ALL")
  const [contextFilter, setContextFilter] = useState<"ALL" | ActivityContext>("ALL")
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null)

  const yearFilters = useMemo(
    () => [
      "ALL",
      ...Array.from(new Set(activities.map((activity) => String(activity.year)))).sort(
        (a, b) => Number(b) - Number(a),
      ),
    ],
    [],
  )

  const filteredActivities = useMemo(
    () =>
      activities.filter((activity) => {
        const passYear = yearFilter === "ALL" || String(activity.year) === yearFilter
        const passTrack = trackFilter === "ALL" || activity.track === trackFilter
        const passContext = contextFilter === "ALL" || activity.context === contextFilter
        return passYear && passTrack && passContext
      }),
    [contextFilter, trackFilter, yearFilter],
  )

  const groupedByYear = useMemo(
    () =>
      filteredActivities.reduce<Record<number, ActivityItem[]>>((acc, activity) => {
        if (!acc[activity.year]) acc[activity.year] = []
        acc[activity.year].push(activity)
        return acc
      }, {}),
    [filteredActivities],
  )

  const years = useMemo(
    () => Object.keys(groupedByYear).map(Number).sort((a, b) => b - a),
    [groupedByYear],
  )

  const summary = useMemo(
    () => ({
      total: filteredActivities.length,
      academic: filteredActivities.filter((activity) => activity.context === "University" || activity.context === "Community")
        .length,
      professional: filteredActivities.filter((activity) => activity.context === "Company" || activity.context === "Startup")
        .length,
      competition: filteredActivities.filter((activity) => activity.track === "Competition").length,
    }),
    [filteredActivities],
  )

  return (
    <section id="activity">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-8 md:mb-12">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  ACTIVITY ROADMAP</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6 md:mb-8">
          <div className="border-2 border-foreground bg-card px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Milestones</p>
            <p className="font-mono text-lg font-bold">{summary.total}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">University / Community</p>
            <p className="font-mono text-lg font-bold">{summary.academic}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Company / Startup</p>
            <p className="font-mono text-lg font-bold">{summary.professional}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Competition</p>
            <p className="font-mono text-lg font-bold">{summary.competition}</p>
          </div>
        </div>

        <div className="space-y-4 mb-8 md:mb-10">
          <div>
            <p className="font-mono text-xs font-bold mb-2 uppercase tracking-wide">Filter by Year</p>
            <div className="flex flex-wrap gap-2">
              {yearFilters.map((year) => (
                <button
                  key={year}
                  onClick={() => setYearFilter(year)}
                  className={`tab-animated-btn ${yearFilter === year ? "tab-animated-btn-active" : ""}`}
                >
                  <span>{year}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-bold mb-2 uppercase tracking-wide">Filter by Context</p>
            <div className="flex flex-wrap gap-2">
              {contextFilters.map((context) => (
                <button
                  key={context}
                  onClick={() => setContextFilter(context)}
                  className={`tab-animated-btn ${contextFilter === context ? "tab-animated-btn-active" : ""}`}
                >
                  <span>{context}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-bold mb-2 uppercase tracking-wide">Filter by Track</p>
            <div className="flex flex-wrap gap-2">
              {trackFilters.map((track) => (
                <button
                  key={track}
                  onClick={() => setTrackFilter(track)}
                  className={`tab-animated-btn ${trackFilter === track ? "tab-animated-btn-active" : ""}`}
                >
                  <span>{track}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {years.length === 0 ? (
          <div className="border-2 border-foreground p-6 font-mono text-sm bg-card">
            No activities match this filter combination.
          </div>
        ) : (
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 chronicle-spine"></div>

            <div className="space-y-12">
              {years.map((year, yearIndex) => {
                const yearActivities = groupedByYear[year]
                const academicLane = yearActivities.filter(
                  (activity) => activity.context === "University" || activity.context === "Community",
                )
                const professionalLane = yearActivities.filter(
                  (activity) => activity.context === "Company" || activity.context === "Startup",
                )

                return (
                  <motion.div key={year} layout className="relative">
                    <motion.div
                      variants={yearBadgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.35, delay: yearIndex * 0.04 }}
                      className="sticky top-2 z-20 w-fit mx-auto border-2 border-foreground bg-accent px-4 md:px-6 py-2"
                    >
                      <h3 className="font-mono text-2xl md:text-3xl font-bold">{year}</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mt-5">
                      <div className="space-y-3">
                        <p className="chronicle-lane-label chronicle-lane-label-university font-mono text-[10px] md:text-xs font-bold tracking-wider text-muted-foreground px-2 py-1 border-2 border-foreground w-fit">
                          <span className="chronicle-lane-label-content">
                            <span className="chronicle-lane-icon" aria-hidden="true">
                              <Shield className="h-[11px] w-[11px] md:h-3 md:w-3" strokeWidth={2.1} />
                            </span>
                            UNIVERSITY / COMMUNITY
                          </span>
                        </p>

                        {academicLane.length === 0 ? (
                          <div className="border-2 border-dashed border-foreground/40 p-4 font-mono text-xs text-muted-foreground bg-card">
                            No milestones in this lane for current filters.
                          </div>
                        ) : (
                          academicLane.map((activity, index) => {
                            const activityId = `${activity.title}-${activity.date}`
                            const expanded = expandedActivity === activityId

                            return (
                              <motion.article
                                key={activityId}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.32, delay: index * 0.04 }}
                                className="chronicle-card chronicle-card-university border-2 border-foreground p-4 md:p-5 bg-card"
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                  <span className="border-2 border-foreground px-2 py-0.5 font-mono text-[10px] font-bold">
                                    {activity.type}
                                  </span>
                                  <span className="border border-foreground px-2 py-0.5 font-mono text-[10px] font-bold bg-accent/20">
                                    {activity.context}
                                  </span>
                                  <span
                                    className={`border border-foreground/40 px-2 py-0.5 font-mono text-[10px] font-bold ${
                                      activity.track === "Competition" ? "competition-pulse bg-accent text-accent-foreground" : ""
                                    }`}
                                  >
                                    {activity.track}
                                  </span>
                                </div>

                                <h4 className="font-mono text-lg md:text-xl font-bold">{activity.title}</h4>
                                <p className="font-mono text-xs text-muted-foreground mb-2">{activity.date}</p>
                                <p className="text-sm font-medium text-muted-foreground mb-2">{activity.project}</p>
                                <p className="leading-relaxed text-sm mb-3">
                                  {expanded ? activity.description : summarize(activity.description)}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  <button
                                    onClick={() => setExpandedActivity((prev) => (prev === activityId ? null : activityId))}
                                    className="tab-animated-btn"
                                  >
                                    <span>{expanded ? "HIDE DETAILS" : "VIEW DETAILS"}</span>
                                  </button>

                                  {activity.link !== "#" && (
                                    <a
                                      href={activity.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center border-2 border-foreground px-3 py-1.5 font-mono text-xs font-bold hover:bg-foreground hover:text-background transition-colors"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  )}
                                </div>

                                <AnimatePresence>
                                  {expanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.24 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="border-t-2 border-foreground mt-3 pt-3 font-mono text-[11px] text-muted-foreground">
                                        Timeline tag: {activity.type} / {activity.context} / {activity.track}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.article>
                            )
                          })
                        )}
                      </div>

                      <div className="space-y-3">
                        <p className="chronicle-lane-label chronicle-lane-label-company font-mono text-[10px] md:text-xs font-bold tracking-wider text-muted-foreground px-2 py-1 border-2 border-foreground w-fit">
                          <span className="chronicle-lane-label-content">
                            <span className="chronicle-lane-icon" aria-hidden="true">
                              <Briefcase className="h-[11px] w-[11px] md:h-3 md:w-3" strokeWidth={2.1} />
                            </span>
                            COMPANY / STARTUP
                          </span>
                        </p>

                        {professionalLane.length === 0 ? (
                          <div className="border-2 border-dashed border-foreground/40 p-4 font-mono text-xs text-muted-foreground bg-card">
                            No milestones in this lane for current filters.
                          </div>
                        ) : (
                          professionalLane.map((activity, index) => {
                            const activityId = `${activity.title}-${activity.date}`
                            const expanded = expandedActivity === activityId

                            return (
                              <motion.article
                                key={activityId}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.32, delay: index * 0.04 }}
                                className="chronicle-card chronicle-card-company border-2 border-foreground p-4 md:p-5 bg-card"
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                  <span className="border-2 border-foreground px-2 py-0.5 font-mono text-[10px] font-bold">
                                    {activity.type}
                                  </span>
                                  <span className="border border-foreground px-2 py-0.5 font-mono text-[10px] font-bold bg-accent/20">
                                    {activity.context}
                                  </span>
                                  <span
                                    className={`border border-foreground/40 px-2 py-0.5 font-mono text-[10px] font-bold ${
                                      activity.track === "Competition" ? "competition-pulse bg-accent text-accent-foreground" : ""
                                    }`}
                                  >
                                    {activity.track}
                                  </span>
                                </div>

                                <h4 className="font-mono text-lg md:text-xl font-bold">{activity.title}</h4>
                                <p className="font-mono text-xs text-muted-foreground mb-2">{activity.date}</p>
                                <p className="text-sm font-medium text-muted-foreground mb-2">{activity.project}</p>
                                <p className="leading-relaxed text-sm mb-3">
                                  {expanded ? activity.description : summarize(activity.description)}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  <button
                                    onClick={() => setExpandedActivity((prev) => (prev === activityId ? null : activityId))}
                                    className="tab-animated-btn"
                                  >
                                    <span>{expanded ? "HIDE DETAILS" : "VIEW DETAILS"}</span>
                                  </button>

                                  {activity.link !== "#" && (
                                    <a
                                      href={activity.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center border-2 border-foreground px-3 py-1.5 font-mono text-xs font-bold hover:bg-foreground hover:text-background transition-colors"
                                    >
                                      VIEW PROJECT
                                    </a>
                                  )}
                                </div>

                                <AnimatePresence>
                                  {expanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.24 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="border-t-2 border-foreground mt-3 pt-3 font-mono text-[11px] text-muted-foreground">
                                        Timeline tag: {activity.type} / {activity.context} / {activity.track}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.article>
                            )
                          })
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
