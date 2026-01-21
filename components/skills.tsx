export function Skills() {
  const skillCategories = [
    {
      category: "PROGRAMMING LANGUAGES",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "C++", level: 70 },
        { name: "Rust", level: 65 },
      ],
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "TOOLS & TECHNOLOGIES",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "WebStorm", level: 85 },
        { name: "PyCharm", level: 80 },
        { name: "RustRover", level: 70 },
        { name: "Docker", level: 75 },
        { name: "MongoDB", level: 75 },

      ],
    },
    {
      category: "CORE SKILLS",
      skills: [
        { name: "Team Communication", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Critical Thinking", level: 85 },
        { name: "Responsive Design", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Timeline Management", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="border-2 border-foreground p-2 inline-block mb-8 md:mb-12">
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} SKILLS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="border-2 md:border-4 border-foreground p-6 md:p-8 bg-card">
              <h3 className="font-mono text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b-2 md:border-b-4 border-foreground pb-2 md:pb-4">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="border-2 border-foreground h-6 md:h-8 relative overflow-hidden bg-background">
                      <div 
                        className="absolute inset-y-0 left-0 bg-accent transition-all duration-300" 
                        style={{ width: `${skill.level}%` } as React.CSSProperties}
                      />
                      <div className="absolute inset-0 flex items-center px-2 font-mono text-xs font-bold">
                        <span className="text-foreground mix-blend-difference">
                          {Array.from({ length: Math.floor(skill.level / 10) }).map((_, i) => (
                            <span key={i}></span>
                          ))}
                        </span>
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
