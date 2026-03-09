export function Interests() {
  const interests = [
    {
      title: "FULL-STACK DEVELOPMENT",
      description: "Building end-to-end web applications with modern frameworks and best practices",
      icon: "</>",
    },
    {
      title: "ALGORITHM DESIGN",
      description: "Implementing efficient algorithms and data structures for complex problems",
      icon: "{}",
    },
    {
      title: "UI/UX IMPLEMENTATION",
      description: "Creating accessible, responsive interfaces with attention to user experience",
      icon: "[]",
    },
    {
      title: "AI INTEGRATION",
      description: "Exploring AI APIs and machine learning applications in web development",
      icon: "()",
    },
    {
      title: "USABILITY ENGINEERING",
      description: "Applying usability principles and user-centered design to build intuitive, accessible digital products",
      icon: "##",
    },
    {
      title: "PROJECT MANAGEMENT",
      description: "Planning, coordinating, and delivering software projects efficiently through agile methodologies and clear communication",
      icon: ">>",
    },
  ]

  return (
    <section id="interests">
      <div className="container mx-auto px-4 py-20">
        <div className="border-2 border-foreground p-2 inline-block mb-12">
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  INTERESTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="border-2 border-foreground p-8 bg-card hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl font-bold">{interest.icon}</span>
                  <span className="font-mono text-sm font-bold text-muted-foreground group-hover:text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-mono text-xl font-bold border-t-2 border-foreground pt-4">{interest.title}</h3>

                <p className="leading-relaxed text-sm">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
