export function Education() {
  const education = [
    {
      degree: "BACHELOR OF SOFTWARE ENGINEERING",
      institution: "RMIT University - SGS Campus",
      year: "Currently Studying",
      status: "IN PROGRESS",
      achievements: [
        "Focusing on software engineering and full-stack development",
        "Building expertise in algorithms and data structures",
        "Gaining practical experience through coursework projects",
      ],
    },
    {
      degree: "HIGH SCHOOL DIPLOMA",
      institution: "Urban International School - Canada",
      year: "Completed",
      status: "COMPLETED",
      achievements: [
        "Developed foundational skills in mathematics and sciences",
        "Built strong problem-solving capabilities",
        "Prepared for university-level computer science studies",
      ],
    },
  ]

  return (
    <section id="education">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <svg className="w-8 h-8 text-accent shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H5V4h14v14zm-4-7H9v2h6v-2z"/>
          </svg>
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  EDUCATION</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="border-2 md:border-4 border-foreground p-6 md:p-8 bg-card">
              <div className="space-y-6">
                <div className="border-b-2 md:border-b-4 border-foreground pb-4">
                  <h3 className="font-mono text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg font-medium">{edu.institution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  <div className="border-2 border-foreground p-3">
                    <div className="text-muted-foreground mb-1">PERIOD</div>
                    <div className="font-bold">{edu.year}</div>
                  </div>
                  <div className="border-2 border-foreground p-3">
                    <div className="text-muted-foreground mb-1">STATUS</div>
                    <div className="font-bold">{edu.status}</div>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-sm font-bold mb-3 text-accent">HIGHLIGHTS:</div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-mono">{">"}</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
