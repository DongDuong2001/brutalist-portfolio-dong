const education = [
  {
    degree: "BACHELOR OF SOFTWARE ENGINEERING",
    institution: "RMIT University Vietnam",
    year: "Graduating 2027",
    status: "IN PROGRESS",
    campus: "Ho Chi Minh City, Vietnam",
    focus: ["System Architecture", "Distributed Systems", "Full-stack Web Engineering"],
  },
  {
    degree: "HIGH SCHOOL DIPLOMA",
    institution: "Urban International School",
    year: "Completed",
    status: "COMPLETED",
    campus: "Toronto, Canada",
    focus: ["Advanced Functions", "Calculus", "Computer Science"],
  },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-t border-[#d3d9e0] px-4 py-28 md:px-14">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mb-14 leading-[0.88]">
          <span className="block text-[clamp(52px,6vw,96px)] font-light tracking-tighter">ACADEMIC</span>
          <span className="block text-[clamp(52px,6vw,96px)] font-black tracking-tighter">EDUCATION</span>
        </h2>

        <div className="border-t border-border">
          {education.map((item) => (
            <article
              key={item.degree}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-start md:gap-10"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{item.year}</span>
                <span className="w-fit rounded-full bg-ink px-2.5 py-0.5 text-[10px] font-bold tracking-[0.08em] text-accent">
                  {item.status}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight tracking-tight">{item.degree}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {item.institution} · {item.campus}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 md:max-w-[280px] md:justify-end">
                {item.focus.map((skill) => (
                  <li key={skill} className="rounded-md border border-border bg-card px-2.5 py-1 text-[11px] font-bold">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
