import { FadeInStagger, FadeInItem } from "@/components/ui/fade-in"
import { TiltCard } from "@/components/ui/tilt-card"

export function Projects() {
  const projects = [
    {
      title: "GFCC WEBSITE",
      category: "CONTRIBUTION",
      year: "2023",
      description:
        "Contributed reusable UI components and features to the GOLDEN FLAMES COMPETITION CLUB website, enhancing the user interface and component library.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://gfcc-website-project.vercel.app/",
    },
    {
      title: "FLOW FORGE",
      category: "FULL-STACK",
      year: "2025",
      description:
        "A comprehensive project management and workflow automation tool built with modern web technologies.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"],
      link: "https://github.com/lab68dev/flow-forge",
    },
    {
      title: "PIXEL HAVEN",
      category: "WEB APP",
      year: "2025",
      description: "A wallpaper website featuring curated high-quality images with search and download functionality.",
      tech: ["React", "JavaScript", "CSS", "API Integration"],
      link: "https://github.com/F4P1E/pixel-haven-wallpaper-website",
    },
    {
      title: "DEMUSE BLOG",
      category: "BLOG PLATFORM",
      year: "2025",
      description: "A modern blog website with content management and responsive design for sharing articles.",
      tech: ["Next.js", "React", "Tailwind CSS", "Markdown"],
      link: "https://github.com/F4P1E/demuse-blog-website",
    },
    {
      title: "SYNTAX TECH BLOG",
      category: "TECH BLOG",
      year: "2025",
      description: "A technical blog platform focused on programming tutorials and software development insights.",
      tech: ["React", "JavaScript", "CSS", "Content Management"],
      link: "https://github.com/F4P1E/syntax-tech-blog",
    },
    {
      title: "SYNTAX CINEMA APP",
      category: "WEB APP",
      year: "2025",
      description:
        "A movie discovery and browsing web app — cinema-focused UI to explore titles, view details, and track favorites.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/F4P1E/syntax-cinema-app",
    },
    {
      title: "PERSONAL FINANCE TRACK",
      category: "WEB APP",
      year: "2024",
      description:
        "A personal finance management application for tracking expenses, budgeting, and financial goal setting with data visualization.",
      tech: ["Python","Local Storage"],
      link: "https://github.com/F4P1E/Personal-Finance-Track",
    },
    {
      title: "A* DELIVERY DRONE",
      category: "ALGORITHM",
      year: "2024",
      description:
        "Implementation and simulation of the A* pathfinding algorithm to optimize delivery routes for autonomous drones, including a visualizer and route simulation.",
      tech: ["Python", "A*", "Simulation", "Matplotlib"],
      link: "https://github.com/F4P1E/A-Star-Algorithm-for-Delivery-Drone",
    },
    {
      title: "NEO RUST LIBRARY",
      category: "OPEN SOURCE",
      year: "2025",
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
    {
      title: "LAB68DEV PLATFORM",
      category: "STARTUP CREATOR PROJECT",
      year: "2025 - Current",
      description:
        "Lab68 Dev Platform is a monorepo that powers a collaborative product development workspace. It provides dashboards for planning, documentation, meetings, AI-assisted workflows, and role-aware access controls—built on top of Next.js App Router, TypeScript, and a modular component system.",
      tech: ["Next.js", "JavaScript", "TypeScript", "API Integration"],
      link: "https://github.com/lab68dev/lab68dev-platform",
    },
  ]

  return (
    <section id="projects" className="border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="border-2 border-foreground p-2 inline-block mb-8 md:mb-12">
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"} PROJECTS</h2>
        </div>

        <FadeInStagger className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeInItem key={index} className="h-full">
               <TiltCard className="h-full border-2 border-foreground bg-card group hover:bg-accent transition-colors">
                  <div className="border-b-2 border-foreground p-4 md:p-6 bg-secondary">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-[10px] md:text-xs font-bold border-2 border-foreground px-2 py-1">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] md:text-xs font-bold">{project.year}</span>
                    </div>
                    <h3 className="font-mono text-xl md:text-2xl font-bold mt-4">{project.title}</h3>
                  </div>

                  <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                    <p className="leading-relaxed text-sm md:text-base">{project.description}</p>

                    <div>
                      <div className="font-mono text-[10px] md:text-xs font-bold mb-2 md:mb-3">TECH STACK:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="border-2 border-foreground px-2 py-1 font-mono text-[10px] md:text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                    >
                      VIEW PROJECT {"->"}
                    </a>
                  </div>
               </TiltCard>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
