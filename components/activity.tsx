export function Activity() {
  const activities = [
    {
      type: "FOUNDER",
      title: "Founder of lab68dev",
      project: "Freelance Start-up",
      date: "Nov 2025 - Present",
      year: 2025,
      description:
        "Founded lab68dev, a freelance development start-up focused on building modern web applications and open-source tools for the developer community.",
      link: "https://github.com/lab68dev",
    },
    {
      type: "HACKATHON",
      title: "GameJam 2025",
      project: "RMIT University",
      date: "2025",
      year: 2025,
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
      description:
        "Competed in 'Sinh viên với An toàn thông tin ASEAN' (Students with ASEAN Information Security) as Team RMIT 01, achieved Top 55.",
      link: "#",
    },
  ]

  // Group activities by year, sorted descending
  const groupedByYear = activities.reduce((acc, activity) => {
    if (!acc[activity.year]) {
      acc[activity.year] = []
    }
    acc[activity.year].push(activity)
    return acc
  }, {} as Record<number, typeof activities>)

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <section id="activity" className="border-b-4 border-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="border-4 border-foreground p-2 inline-block mb-12">
          <h2 className="font-mono text-4xl md:text-6xl font-bold">{">"} ACTIVITY ROADMAP</h2>
        </div>

        <div className="space-y-12">
          {years.map((year) => (
            <div key={year} className="relative">
              {/* Year header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="border-4 border-foreground bg-accent px-6 py-3">
                  <h3 className="font-mono text-3xl font-bold">{year}</h3>
                </div>
                <div className="flex-1 border-t-4 border-foreground"></div>
              </div>

              {/* Activities for this year */}
              <div className="space-y-4 ml-8">
                {groupedByYear[year].map((activity, index) => (
                  <div
                    key={index}
                    className="border-4 border-foreground p-6 bg-card hover:bg-secondary transition-colors relative"
                  >
                    {/* Timeline connector dot */}
                    <div className="absolute -left-8 top-8 w-4 h-4 border-4 border-foreground bg-accent"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="md:w-40 shrink-0">
                        <div className="border-2 border-foreground px-3 py-1 font-mono text-xs font-bold inline-block mb-2">
                          {activity.type}
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
                            VIEW PROJECT {"->"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
