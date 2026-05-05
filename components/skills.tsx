import { skills as skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="font-mono text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            Technical Stack
          </h2>
          <div className="h-1 w-20 bg-foreground" />
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <article key={index} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t-4 border-foreground pt-8">
                {/* Category Header */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs opacity-50 mb-2 block">
                    MODULE_{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-2xl md:text-3xl font-black uppercase leading-none break-words">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono text-base font-bold uppercase tracking-tight">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs font-medium tabular-nums opacity-60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[2px] w-full bg-foreground/10 overflow-hidden">
                        <div 
                          className="h-full bg-foreground transition-all duration-500 ease-out" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Minimal Footer Note */}
        <div className="mt-20 border-t border-foreground/20 pt-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            End of technical capability report // Continuous learning active
          </p>
        </div>
      </div>
    </section>
  )
}
