export function Activity() {
  const activities = [
    {
      type: "HACKATHON",
      title: "GameJam 2025",
      project: "RMIT University",
      date: "2025",
      description:
        "Participated in RMIT's annual game development hackathon, collaborating on innovative game concepts.",
      link: "https://github.com/Dilson20/RMITGJ2025",
    },
    {
      type: "COMPETITION",
      title: "Gemini API Competition",
      project: "Medical Web App",
      date: "2024",
      description:
        "Developed a medical web application leveraging Google's Gemini API for AI-powered healthcare solutions.",
      link: "https://github.com/F4P1E/Medical-Web-App-Gemini-API",
    },
    {
      type: "COMPETITION",
      title: "VNISA 2023",
      project: "ASEAN Information Security",
      date: "2023",
      description:
        "Competed in 'Sinh viên với An toàn thông tin ASEAN' (Students with ASEAN Information Security) as Team RMIT 01, achieved Top 55.",
      link: "#",
    },
  ]

  return (
    <section id="activity" className="border-b-4 border-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="border-4 border-foreground p-2 inline-block mb-12">
          <h2 className="font-mono text-4xl md:text-6xl font-bold">{">"} ACTIVITY</h2>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="border-4 border-foreground p-6 bg-card hover:bg-secondary transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="border-2 border-foreground px-3 py-1 font-mono text-xs font-bold inline-block">
                    {activity.type}
                  </div>
                  <div className="font-mono text-xs mt-2 text-muted-foreground">{activity.date}</div>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="font-mono text-xl font-bold">{activity.title}</h3>
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

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-4 border-foreground flex items-center justify-center font-mono text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
