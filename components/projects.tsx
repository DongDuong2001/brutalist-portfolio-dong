export function Projects() {
  const projects = [
    {
      title: "FLOW FORGE",
      category: "FULL-STACK",
      year: "2024",
      description:
        "A comprehensive project management and workflow automation tool built with modern web technologies.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"],
      link: "https://github.com/lab68dev/flow-forge",
    },
    {
      title: "PIXEL HAVEN",
      category: "WEB APP",
      year: "2024",
      description: "A wallpaper website featuring curated high-quality images with search and download functionality.",
      tech: ["React", "JavaScript", "CSS", "API Integration"],
      link: "https://github.com/F4P1E/pixel-haven-wallpaper-website",
    },
    {
      title: "DEMUSE BLOG",
      category: "BLOG PLATFORM",
      year: "2024",
      description: "A modern blog website with content management and responsive design for sharing articles.",
      tech: ["Next.js", "React", "Tailwind CSS", "Markdown"],
      link: "https://github.com/F4P1E/demuse-blog-website",
    },
    {
      title: "SYNTAX TECH BLOG",
      category: "TECH BLOG",
      year: "2024",
      description: "A technical blog platform focused on programming tutorials and software development insights.",
      tech: ["React", "JavaScript", "CSS", "Content Management"],
      link: "https://github.com/F4P1E/syntax-tech-blog",
    },
    {
      title: "NEO RUST LIBRARY",
      category: "OPEN SOURCE",
      year: "2024",
      description: "Contributing to RMIT NCT's Rust library project for educational and research purposes.",
      tech: ["Rust", "Library Development", "Documentation"],
      link: "https://github.com/rmit-nct/neo-rust-library",
    },
    {
      title: "META FRONTEND PROJECT",
      category: "CERTIFICATION",
      year: "2024",
      description:
        "Capstone project for Meta Frontend Developer Professional Certificate demonstrating full-stack skills.",
      tech: ["React", "JavaScript", "HTML/CSS", "API Integration"],
      link: "https://github.com/F4P1E/meta-frontend-developer-project",
    },
  ]

  return (
    <section id="projects" className="border-b-4 border-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="border-4 border-foreground p-2 inline-block mb-12">
          <h2 className="font-mono text-4xl md:text-6xl font-bold">{">"} PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border-4 border-foreground bg-card group hover:bg-accent transition-colors">
              <div className="border-b-4 border-foreground p-6 bg-secondary">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs font-bold border-2 border-foreground px-2 py-1">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs font-bold">{project.year}</span>
                </div>
                <h3 className="font-mono text-2xl font-bold mt-4">{project.title}</h3>
              </div>

              <div className="p-6 space-y-6">
                <p className="leading-relaxed">{project.description}</p>

                <div>
                  <div className="font-mono text-xs font-bold mb-3">TECH STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="border-2 border-foreground px-3 py-1 font-mono text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 font-mono text-sm font-bold border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  VIEW PROJECT {"->"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
