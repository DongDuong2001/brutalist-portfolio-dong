import { nowBuildingProjects, slugifyProjectTitle } from "@/data/projects"

interface NowBuildingRailProps {
  onOpenProjects: () => void
}

export function NowBuildingRail({ onOpenProjects }: NowBuildingRailProps) {
  return (
    <div className="sticky top-0 z-30 border-b-2 border-foreground bg-background/95">
      <div className="px-3 md:px-5 py-2.5 flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
        <button
          onClick={onOpenProjects}
          className="tab-animated-btn shrink-0"
        >
          <span>NOW BUILDING</span>
        </button>

        {nowBuildingProjects.map((project) => (
          <div
            key={project.title}
            className="shrink-0 border-2 border-foreground bg-card px-3 py-1.5 min-w-[200px]"
          >
            <p className="font-mono text-[10px] uppercase tracking-wide opacity-70">in progress</p>
            <p className="font-mono text-xs font-bold">{project.title}</p>
            <div className="mt-1 flex items-center gap-2 text-[10px] font-mono">
              <a
                href={`/projects/${slugifyProjectTitle(project.title)}`}
                className="underline underline-offset-2 hover:text-accent"
              >
                details
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-accent"
                >
                  github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
