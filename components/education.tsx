import { BadgeCheck, BookOpen, CheckCircle2, Clock3, Compass, GraduationCap, Layers3, MapPin } from "lucide-react"

const education = [
  {
    degree: "BACHELOR OF SOFTWARE ENGINEERING",
    institution: "RMIT University - SGS Campus",
    year: "Currently Studying",
    status: "IN PROGRESS",
    campus: "Ho Chi Minh City",
    code: "RMIT-SE",
    stamp: "ACTIVE",
    route: "University -> Product Engineering",
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
    code: "UIS-CA",
    stamp: "FOUNDATION",
    route: "Science Foundations -> Software Engineering",
    focus: ["Mathematics", "Science Foundations", "Analytical Thinking"],
    achievements: [
      "Developed foundational skills in mathematics and sciences",
      "Built strong problem-solving capabilities",
      "Prepared for university-level computer science studies",
    ],
  },
]

const learningRoute = ["FOUNDATION", "ENGINEERING", "PRODUCT"]

export function Education() {
  const totalCredentials = education.length
  const inProgressCount = education.filter((item) => item.status === "IN PROGRESS").length
  const completedCount = education.filter((item) => item.status === "COMPLETED").length
  const totalHighlights = education.reduce((sum, item) => sum + item.achievements.length, 0)
  const focusStack = Array.from(new Set(education.flatMap((item) => item.focus)))

  const metrics = [
    { label: "Credentials", value: totalCredentials, Icon: GraduationCap },
    { label: "In Progress", value: inProgressCount, Icon: Clock3 },
    { label: "Completed", value: completedCount, Icon: BadgeCheck },
    { label: "Outcomes", value: totalHighlights, Icon: CheckCircle2 },
  ]

  return (
    <section id="education">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-12 max-[390px]:py-9 md:py-20">
        <div className="mb-6 md:mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} EDUCATION</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Academic passport: where formal study, practical build habits, and long-term engineering direction meet.
          </p>
        </div>

        <div className="mb-5 md:mb-7 border-2 md:border-4 border-foreground bg-card">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]">
            <div className="p-4 md:p-5 border-b-2 lg:border-b-0 lg:border-r-2 border-foreground">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Academic Passport</p>
                  <h3 className="font-mono text-2xl md:text-3xl font-black uppercase leading-tight">Build-Oriented Learning Route</h3>
                </div>
                <div className="border-2 border-foreground bg-accent px-3 py-2 text-accent-foreground">
                  <p className="font-mono text-[9px] uppercase tracking-wider font-bold">Current Gate</p>
                  <p className="font-mono text-sm font-black">RMIT SGS</p>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 mb-4">
                {learningRoute.map((item, index) => (
                  <div key={item} className="contents">
                    <div className="border-2 border-foreground bg-secondary px-2 py-2 text-center">
                      <p className="font-mono text-[10px] md:text-xs font-black uppercase leading-tight">{item}</p>
                    </div>
                    {index < learningRoute.length - 1 && (
                      <div className="h-0.5 w-5 md:w-8 bg-foreground" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-4xl">
                The education story is intentionally practical: learn the fundamentals, test them through coursework, then turn them into shipped products, backend systems, and team delivery experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 p-3 md:p-4 content-start">
              {metrics.map(({ label, value, Icon }) => (
                <div key={label} className="border-2 border-foreground bg-background/70 p-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">{label}</p>
                  </div>
                  <p className="font-mono text-lg md:text-xl font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:gap-6 xl:grid-cols-[minmax(280px,0.42fr)_minmax(0,1fr)]">
          <aside className="border-2 md:border-4 border-foreground bg-card p-4 md:p-5 h-fit xl:sticky xl:top-4">
            <div className="flex items-start justify-between gap-3 border-b-2 border-foreground pb-3 mb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Credential Control</p>
                <h3 className="font-mono text-xl font-black uppercase">Learning Manifest</h3>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-secondary">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <div className="space-y-2.5 mb-4">
              <div className="grid grid-cols-[auto_1fr] gap-2 border-2 border-foreground bg-background/70 p-2.5">
                <MapPin className="h-4 w-4 text-accent mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Primary Campus</p>
                  <p className="font-mono text-xs md:text-sm font-bold">RMIT SGS / Ho Chi Minh City</p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-2 border-2 border-foreground bg-background/70 p-2.5">
                <Layers3 className="h-4 w-4 text-accent mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Learning Style</p>
                  <p className="font-mono text-xs md:text-sm font-bold">Study / Build / Ship</p>
                </div>
              </div>
            </div>

            <div>
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

          <div className="grid gap-4 md:gap-5">
            {education.map((edu, index) => (
              <article key={edu.degree} className="border-2 md:border-4 border-foreground bg-card">
                <div className="grid md:grid-cols-[120px_1fr]">
                  <div className="border-b-2 md:border-b-0 md:border-r-2 border-foreground bg-secondary p-4 flex md:flex-col items-center md:items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Credential</p>
                      <p className="font-mono text-3xl font-black">{String(index + 1).padStart(2, "0")}</p>
                    </div>
                    <div className="border-2 border-foreground bg-card px-2 py-1 rotate-[-2deg]">
                      <p className="font-mono text-[10px] font-black uppercase">{edu.stamp}</p>
                    </div>
                  </div>

                  <div className="p-4 md:p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b-2 border-foreground pb-3 mb-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1">
                          {edu.code} / {edu.route}
                        </p>
                        <h3 className="font-mono text-lg md:text-2xl font-black uppercase leading-tight">{edu.degree}</h3>
                        <p className="text-sm md:text-base font-medium text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
                        <span className="font-mono text-[10px] font-bold border-2 border-foreground px-2 py-0.5 bg-card">
                          {edu.year}
                        </span>
                        <span
                          className={`font-mono text-[10px] font-bold border-2 border-foreground px-2 py-0.5 ${
                            edu.status === "IN PROGRESS"
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid gap-3 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
                      <div>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="border-2 border-foreground p-2.5 bg-background/70">
                            <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Campus</p>
                            <p className="font-mono text-xs md:text-sm font-bold leading-tight">{edu.campus}</p>
                          </div>
                          <div className="border-2 border-foreground p-2.5 bg-background/70">
                            <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground mb-1">Primary Track</p>
                            <p className="font-mono text-xs md:text-sm font-bold leading-tight">{edu.focus[0]}</p>
                          </div>
                        </div>

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
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-2">Learning Evidence</p>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2.5 border border-foreground/35 bg-background/50 px-2.5 py-2">
                              <BookOpen className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="leading-relaxed text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
