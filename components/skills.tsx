import { skills as skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          {/* Sword & Hammer - War Tools */}
          <svg className="w-8 h-8 text-accent shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L8 6v2H4v2h2v8H4v2h16v-2h2v-8h2V8h-4V6l-4-4zm0 4l2 2v10l-2 2-2-2V8l2-2z"/>
          </svg>
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  SKILLS</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="border-2 md:border-4 border-foreground p-6 md:p-8 bg-card h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-accent shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                </svg>
                <h3 className="font-mono text-xl md:text-2xl font-bold border-b-2 md:border-b-4 border-foreground pb-4 uppercase flex-1">
                  {category.category}
                </h3>
              </div>

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
