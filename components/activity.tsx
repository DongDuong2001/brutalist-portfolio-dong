"use client"

import { useMemo, useState } from "react"

type ActivityTrack = "Startup" | "Desktop" | "Backend" | "Open Source"

type ActivityItem = {
  type: string
  title: string
  project: string
  date: string
  year: number
  track: ActivityTrack
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
    track: "Startup",
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
    track: "Startup",
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
    track: "Backend",
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
    track: "Desktop",
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
    track: "Startup",
    description:
      "Founded lab68dev, a freelance development start-up focused on building modern web applications and open-source tools for the developer community.",
    link: "https://github.com/lab68dev",
  },
  {
    type: "LEADERSHIP",
    title: "Project Leader - Backend",
    project: "NCT SatEvent — Neo Culture Tech Club",
    date: "2025",
    year: 2025,
    track: "Backend",
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
    track: "Startup",
    description:
      "Participated in RMIT's annual game development hackathon, collaborating on innovative game concepts.",
    link: "https://github.com/Dilson20/RMITGJ2025",
  },
  {
    type: "ROLE",
    title: "Project Contributor",
    project: "Neo Culture Tech Club — RMIT University Vietnam",
    date: "2025",
    year: 2025,
    track: "Open Source",
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
    track: "Startup",
    description:
      "Developed a medical web application leveraging Google's Gemini API for AI-powered healthcare solutions.",
    link: "https://github.com/F4P1E/Medical-Web-App-Gemini-API",
  },
  {
    type: "ROLE",
    title: "Project Researcher",
    project: "Neo Culture Tech Club — RMIT University Vietnam",
    date: "2024",
    year: 2024,
    track: "Open Source",
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
    track: "Startup",
    description:
      "Competed in 'Sinh viên với An toàn thông tin ASEAN' (Students with ASEAN Information Security) as Team RMIT 01, achieved Top 55.",
    link: "#",
  },
]

const trackFilters: Array<"ALL" | ActivityTrack> = ["ALL", "Startup", "Desktop", "Backend", "Open Source"]

export function Activity() {
  const [yearFilter, setYearFilter] = useState<string>("ALL")
  const [trackFilter, setTrackFilter] = useState<"ALL" | ActivityTrack>("ALL")

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
        return passYear && passTrack
      }),
    [trackFilter, yearFilter],
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

  return (
    <section id="activity">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-8 md:mb-12">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  ACTIVITY ROADMAP</h2>
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
            <p className="font-mono text-xs font-bold mb-2 uppercase tracking-wide">Filter by Type</p>
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
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="border-2 border-foreground bg-accent px-4 md:px-6 py-2 md:py-3">
                    <h3 className="font-mono text-2xl md:text-3xl font-bold">{year}</h3>
                  </div>
                  <div className="flex-1 border-t-2 border-foreground"></div>
                </div>

                <div className="space-y-4 ml-0 md:ml-8">
                  {groupedByYear[year].map((activity) => (
                    <article
                      key={`${activity.title}-${activity.date}`}
                      className="border-2 border-foreground p-6 bg-card hover:bg-secondary transition-colors relative"
                    >
                      <div className="hidden md:block absolute -left-8 top-8 w-4 h-4 border-2 border-foreground bg-accent"></div>

                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                        <div className="md:w-44 shrink-0">
                          <div className="border-2 border-foreground px-3 py-1 font-mono text-xs font-bold inline-block mb-2">
                            {activity.type}
                          </div>
                          <div className="border border-foreground/30 px-2 py-1 font-mono text-[10px] inline-block ml-2 mb-2">
                            {activity.track}
                          </div>
                          <div className="font-mono text-xs text-muted-foreground">{activity.date}</div>
                        </div>

                        <div className="flex-1 space-y-2">
                          <h4 className="font-mono text-xl font-bold">{activity.title}</h4>
                          <p className="text-sm font-medium text-muted-foreground">{activity.project}</p>
                          <p className="leading-relaxed">{activity.description}</p>
                          {activity.link !== "#" && (
                            <a
                              href={activity.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-sm font-bold text-accent hover:underline mt-2"
                            >
                              VIEW PROJECT
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}