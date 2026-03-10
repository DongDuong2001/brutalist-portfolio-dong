export function Interests() {
  const interests = [
    {
      title: "CHESS",
      description: "Analyzing positions, thinking several moves ahead, and finding the elegant solution under pressure. The board never lies.",
      icon: "♟",
    },
    {
      title: "SPECIALTY COFFEE",
      description: "From single-origin beans to dialing in the perfect extraction. The ritual of making a great cup is its own kind of engineering.",
      icon: "//",
    },
    {
      title: "FILM PHOTOGRAPHY",
      description: "Shooting on 35mm forces intentionality — you only get 36 frames. It rewired how I approach composition and patience.",
      icon: "[]",
    },
    {
      title: "HIKING & OUTDOORS",
      description: "There's no better way to reset than a long trail with no notifications. Some of my best architectural ideas come mid-climb.",
      icon: "~>",
    },
    {
      title: "OPEN SOURCE",
      description: "Contributing to and maintaining open source projects — building things in public is the best accountability system I know.",
      icon: "</>",
    },
    {
      title: "READING",
      description: "Currently into systems thinking, behavioral economics, and good fiction. The further from tech, the more it ends up influencing my work.",
      icon: "{}",
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
