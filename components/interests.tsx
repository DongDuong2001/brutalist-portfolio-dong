export function Interests() {
  const interests = [
    {
      title: "CHESS",
      description: "Analyzing positions, thinking several moves ahead, and finding the elegant solution under pressure. The board never lies.",
    },
    {
      title: "SPECIALTY COFFEE",
      description: "From single-origin beans to dialing in the perfect extraction. The ritual of making a great cup is its own kind of engineering.",
    },
    {
      title: "FILM PHOTOGRAPHY",
      description: "Shooting on 35mm forces intentionality — you only get 36 frames. It rewired how I approach composition and patience.",
    },
    {
      title: "HIKING & OUTDOORS",
      description: "There's no better way to reset than a long trail with no notifications. Some of my best architectural ideas come mid-climb.",
    },
    {
      title: "OPEN SOURCE",
      description: "Contributing to and maintaining open source projects — building things in public is the best accountability system I know.",
    },
    {
      title: "READING",
      description: "Currently into systems thinking, behavioral economics, and good fiction. The further from tech, the more it ends up influencing my work.",
    },
    {
      title: "MOTORSPORT",
      description: "Formula 1, WEC, Rally — the engineering as much as the racing. There's something about a team solving problems at 300km/h under pressure that never gets old.",
    },
  ]

  return (
    <section id="interests">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-8 md:mb-12">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold">{">"}  INTERESTS</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="border-2 border-foreground p-6 md:p-8 bg-card hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-wider">INTEREST</span>
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
