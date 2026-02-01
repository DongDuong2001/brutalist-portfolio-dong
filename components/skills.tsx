import { skills as skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="border-2 border-foreground p-2 inline-block mb-8 md:mb-12">
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} SKILLS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="border-2 md:border-4 border-foreground p-6 md:p-8 bg-card h-full">
              <h3 className="font-mono text-xl md:text-2xl font-bold mb-6 border-b-2 md:border-b-4 border-foreground pb-4 uppercase">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="border-2 border-foreground px-4 py-2 font-mono font-bold hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)]"
                  >
                    {skill.name}
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
