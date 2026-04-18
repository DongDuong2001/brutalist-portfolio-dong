export function Education() {
  const education = [
    {
      degree: "BACHELOR OF SOFTWARE ENGINEERING",
      institution: "RMIT University - SGS Campus",
      year: "Currently Studying",
      status: "IN PROGRESS",
      campus: "Ho Chi Minh City",
      focus: ["Full-stack Systems", "Algorithms", "Software Architecture"],
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
      campus: "Canada",
      focus: ["Mathematics", "Science Foundations", "Analytical Thinking"],
      achievements: [
        "Developed foundational skills in mathematics and sciences",
        "Built strong problem-solving capabilities",
        "Prepared for university-level computer science studies",
      ],
    },
  ]

  const totalCredentials = education.length
  const inProgressCount = education.filter((item) => item.status === "IN PROGRESS").length
  const completedCount = education.filter((item) => item.status === "COMPLETED").length
  const totalHighlights = education.reduce((sum, item) => sum + item.achievements.length, 0)
  const focusStack = Array.from(new Set(education.flatMap((item) => item.focus)))

  return (
    <section id="education">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-12 max-[390px]:py-9 md:py-20">
        <div className="mb-8 max-[390px]:mb-6 md:mb-12">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  EDUCATION</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Clean academic timeline with credential status, focus areas, and practical learning outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Credentials</p>
            <p className="font-mono text-base md:text-lg font-bold">{totalCredentials}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">In Progress</p>
            <p className="font-mono text-base md:text-lg font-bold">{inProgressCount}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Completed</p>
            <p className="font-mono text-base md:text-lg font-bold">{completedCount}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Learning Outcomes</p>
            <p className="font-mono text-base md:text-lg font-bold">{totalHighlights}</p>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <aside className="education-quickboard border-2 md:border-4 border-foreground bg-card p-4 max-[390px]:p-3.5 md:p-5 lg:p-6 h-fit xl:sticky xl:top-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1">ACADEMIC SNAPSHOT</p>
            <h3 className="font-mono text-lg md:text-xl font-bold border-b-2 border-foreground pb-2 mb-3">Learning Direction</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Focused on software engineering depth, practical implementation, and long-term system thinking through real product building.
            </p>

            <div className="space-y-2.5">
              <div className="education-mini-row">
                <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Primary Institution</span>
                <span className="font-mono text-[10px] md:text-xs font-bold">RMIT SGS</span>
              </div>
              <div className="education-mini-row">
                <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Current Program</span>
                <span className="font-mono text-[10px] md:text-xs font-bold">Software Engineering</span>
              </div>
              <div className="education-mini-row">
                <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Learning Style</span>
                <span className="font-mono text-[10px] md:text-xs font-bold">Build + Ship</span>
              </div>
            </div>

            <div className="border-t-2 border-foreground mt-4 pt-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground mb-2">Core Focus Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {focusStack.map((item) => (
                  <span
                    key={item}
                    className="border-2 border-foreground bg-secondary/70 px-2 py-1 font-mono text-[10px] md:text-xs font-bold leading-tight"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="education-timeline space-y-4 md:space-y-5">
            {education.map((edu, index) => (
              <article
                key={edu.degree}
                className={`education-card-readable border-2 md:border-4 border-foreground p-4 max-[390px]:p-3.5 md:p-5 bg-card ${
                  index % 2 === 0 ? "education-dossier-card-accent" : "education-dossier-card-muted"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 border-b-2 border-foreground pb-2.5 mb-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-1">
                      Credential {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-mono text-lg md:text-2xl font-bold leading-tight mb-1">{edu.degree}</h3>
                    <p className="text-sm md:text-lg font-medium leading-tight">{edu.institution}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    <span className="font-mono text-[10px] font-bold border-2 border-foreground px-2 py-0.5 bg-card shrink-0">
                      {edu.year}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold border-2 px-2 py-0.5 shrink-0 ${
                        edu.status === "IN PROGRESS"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  <div className="border-2 border-foreground p-2.5">
                    <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Campus</p>
                    <p className="font-mono text-xs md:text-sm font-bold leading-tight">{edu.campus}</p>
                  </div>
                  <div className="border-2 border-foreground p-2.5">
                    <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Primary Track</p>
                    <p className="font-mono text-xs md:text-sm font-bold leading-tight">{edu.focus[0]}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-2">Focus Areas</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focus.map((focusItem) => (
                      <span
                        key={`${edu.degree}-${focusItem}`}
                        className="border border-foreground/60 px-2 py-0.5 font-mono text-[10px] md:text-xs leading-tight"
                      >
                        {focusItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-2">Highlights</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="education-highlight-row flex items-start gap-2.5 border border-foreground/35 px-2.5 py-2">
                        <span className="font-mono text-[10px] text-accent font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <span className="leading-relaxed text-sm md:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
