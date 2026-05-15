import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
  getProjectBySlug,
  projects,
  slugifyProjectTitle,
  type Project,
  type ProjectAward,
  type ProjectCaseStudy,
  type ProjectKpis,
} from "@/data/projects"

type PageProps = {
  params: Promise<{ slug: string }>
}

const DEFAULT_KPIS: ProjectKpis = {
  users: "Early users",
  launchTime: "2-6 weeks",
  coreImpact: "Improved workflow",
  performance: "Production-ready",
}

const DEFAULT_CASE_STUDY: ProjectCaseStudy = {
  problem: "The existing workflow had friction, low visibility, or weak scalability.",
  build: "I designed and shipped a practical implementation focused on product quality and velocity.",
  result: "Delivered measurable product value and stronger reliability for real usage.",
}

function getAwards(project: Project): ProjectAward[] {
  if (project.awards && Array.isArray(project.awards)) return project.awards
  if (project.award) return [project.award]
  return []
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: slugifyProjectTitle(project.title) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    }
  }

  return {
    title: `${project.title} | Project Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Duong Phu Dong`,
      description: project.description,
      type: "article",
      url: `/projects/${slug}`,
      images: [
        {
          url: `/projects/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Duong Phu Dong`,
      description: project.description,
      images: [`/projects/${slug}/opengraph-image`],
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const awards = getAwards(project)
  const kpis = project.kpis ?? DEFAULT_KPIS
  const caseStudy = project.caseStudy ?? DEFAULT_CASE_STUDY

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 md:py-16 space-y-8">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <Link
            href="/#projects"
            className="font-mono text-xs font-bold border-2 border-foreground px-3 py-2 hover:bg-foreground hover:text-background transition-colors"
          >
            BACK TO PORTFOLIO
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs border-2 border-foreground px-3 py-2">{project.category}</span>
            <span className="font-mono text-xs border-2 border-foreground px-3 py-2 bg-secondary">{project.year}</span>
            {project.stage === "now-building" && (
              <span className="font-mono text-xs border-2 border-foreground px-3 py-2 bg-accent text-accent-foreground">
                NOW BUILDING
              </span>
            )}
          </div>
        </div>

        <header className="border-2 border-foreground bg-card">
          <div className="border-b-2 border-foreground bg-secondary p-4 md:p-6">
            <h1 className="font-mono text-3xl md:text-5xl font-bold leading-tight">{project.title}</h1>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            <p className="text-base md:text-lg leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold border-2 border-foreground px-4 py-2 bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  LIVE SITE
                </a>
              )}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  SOURCE CODE
                </a>
              ) : (
                <span className="font-mono text-xs font-bold border-2 border-foreground px-4 py-2 text-muted-foreground bg-muted">
                  PRIVATE REPOSITORY
                </span>
              )}
            </div>
          </div>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="border-2 border-foreground p-3 bg-card">
            <p className="font-mono text-[10px] text-muted-foreground">USERS</p>
            <p className="font-mono text-sm md:text-base font-bold">{kpis.users}</p>
          </div>
          <div className="border-2 border-foreground p-3 bg-card">
            <p className="font-mono text-[10px] text-muted-foreground">LAUNCH TIME</p>
            <p className="font-mono text-sm md:text-base font-bold">{kpis.launchTime}</p>
          </div>
          <div className="border-2 border-foreground p-3 bg-card">
            <p className="font-mono text-[10px] text-muted-foreground">IMPACT</p>
            <p className="font-mono text-sm md:text-base font-bold">{kpis.coreImpact}</p>
          </div>
          <div className="border-2 border-foreground p-3 bg-card">
            <p className="font-mono text-[10px] text-muted-foreground">PERFORMANCE</p>
            <p className="font-mono text-sm md:text-base font-bold">{kpis.performance}</p>
          </div>
        </section>

        <section className="border-2 border-foreground p-4 md:p-6 bg-card space-y-4">
          <h2 className="font-mono text-xl md:text-2xl font-bold">Mini Case Study</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="border-2 border-foreground p-4 bg-background">
              <p className="font-mono text-[10px] font-bold text-accent mb-2">PROBLEM</p>
              <p className="text-sm leading-relaxed">{caseStudy.problem}</p>
            </article>
            <article className="border-2 border-foreground p-4 bg-background">
              <p className="font-mono text-[10px] font-bold text-accent mb-2">BUILD</p>
              <p className="text-sm leading-relaxed">{caseStudy.build}</p>
            </article>
            <article className="border-2 border-foreground p-4 bg-background">
              <p className="font-mono text-[10px] font-bold text-accent mb-2">RESULT</p>
              <p className="text-sm leading-relaxed">{caseStudy.result}</p>
            </article>
          </div>
        </section>

        {awards.length > 0 && (
          <section className="border-2 border-foreground p-4 md:p-6 bg-card space-y-3">
            <h2 className="font-mono text-xl md:text-2xl font-bold">Awards</h2>
            <div className="flex flex-wrap gap-2">
              {awards.map((award) => (
                <a
                  key={`${award.platform}-${award.label}`}
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold border-2 border-foreground px-3 py-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  {award.badge ? (
                    <img
                      src={award.badge.src}
                      alt={award.badge.alt}
                      width={award.badge.width}
                      height={award.badge.height}
                      className="h-10 w-auto max-w-full"
                      loading="lazy"
                    />
                  ) : (
                    `${award.label} - ${award.platform}`
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="border-2 border-foreground p-4 md:p-6 bg-card space-y-3">
          <h2 className="font-mono text-xl md:text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="font-mono text-xs border-2 border-foreground px-3 py-1 bg-background">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
