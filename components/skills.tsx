import { skills as skillCategories } from "@/data/skills"

function getTierLabel(level: number): string {
  if (level >= 90) return "ELITE"
  if (level >= 80) return "ADVANCED"
  if (level >= 70) return "PRO"
  return "GROWING"
}

function getTierStyle(level: number): string {
  if (level >= 90) return "bg-accent text-accent-foreground border-foreground"
  if (level >= 80) return "bg-secondary text-secondary-foreground border-foreground"
  if (level >= 70) return "bg-card text-foreground border-foreground"
  return "bg-muted text-muted-foreground border-foreground/60"
}

function getBarWidthClass(level: number): string {
  if (level >= 95) return "w-[95%]"
  if (level >= 90) return "w-[90%]"
  if (level >= 85) return "w-[85%]"
  if (level >= 80) return "w-[80%]"
  if (level >= 75) return "w-[75%]"
  if (level >= 70) return "w-[70%]"
  if (level >= 65) return "w-[65%]"
  return "w-[60%]"
}

export function Skills() {
  const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0)
  const totalLevel = skillCategories.reduce(
    (sum, category) => sum + category.skills.reduce((innerSum, skill) => innerSum + skill.level, 0),
    0,
  )
  const averageLevel = totalSkills > 0 ? Math.round(totalLevel / totalSkills) : 0

  const strongestCategory = skillCategories.reduce((best, category) => {
    const categoryAverage =
      Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / Math.max(category.skills.length, 1))

    if (!best || categoryAverage > best.average) {
      return { name: category.category, average: categoryAverage }
    }

    return best
  }, null as { name: string; average: number } | null)

  return (
    <section id="skills">
      <div className="container mx-auto px-4 max-[390px]:px-3.5 py-12 max-[390px]:py-9 md:py-20">
        <div className="mb-8 max-[390px]:mb-6 md:mb-12">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  SKILLS</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Technical command deck with capability tiers, stack confidence, and domain depth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Domains</p>
            <p className="font-mono text-base md:text-lg font-bold">{skillCategories.length}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Total Skills</p>
            <p className="font-mono text-base md:text-lg font-bold">{totalSkills}</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Average Level</p>
            <p className="font-mono text-base md:text-lg font-bold">{averageLevel}%</p>
          </div>
          <div className="border-2 border-foreground bg-card px-3 py-2.5">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wide text-muted-foreground">Strongest Domain</p>
            <p className="font-mono text-xs md:text-sm font-bold leading-tight truncate">
              {strongestCategory ? strongestCategory.name : "N/A"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <article
              key={index}
              className={`skills-deck-card border-2 md:border-4 border-foreground p-4 max-[390px]:p-3 md:p-5 bg-card h-full ${
                index % 2 === 0 ? "skills-deck-card-accent" : "skills-deck-card-muted"
              }`}
            >
              <div className="flex items-end justify-between gap-3 border-b-2 border-foreground pb-3 mb-3">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground mb-1">
                    DOMAIN {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-mono text-base md:text-xl font-bold uppercase leading-tight">{category.category}</h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm md:text-base font-bold">
                    {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / Math.max(category.skills.length, 1))}%
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">domain avg</p>
                </div>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skills-signal-row border-2 border-foreground p-2.5 max-[390px]:p-2 md:p-3">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="font-mono text-xs md:text-sm font-bold leading-tight">{skill.name}</p>
                      <span className="font-mono text-[10px] font-bold border border-foreground/60 px-1.5 py-0.5 shrink-0">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                      <div className="h-2 border border-foreground/50 bg-muted/70">
                        <div className={`h-full ${getBarWidthClass(skill.level)} ${skill.level >= 85 ? "bg-accent" : "bg-foreground"}`} />
                      </div>
                      <span
                        className={`font-mono text-[9px] font-bold border px-1.5 py-0.5 ${getTierStyle(skill.level)}`}
                      >
                        {getTierLabel(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
