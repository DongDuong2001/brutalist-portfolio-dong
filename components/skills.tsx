const stack = [
  ["Next.js", "framework"],
  ["TypeScript", "language"],
  ["Go", "language"],
  ["Python", "language"],
  ["FastAPI", "backend"],
  ["Express.js", "backend"],
  ["PostgreSQL", "database"],
  ["Supabase", "platform"],
  ["Docker", "infra"],
  ["Spring Boot", "backend"],
  ["Tailwind CSS", "ui"],
  ["GitHub Actions", "ci/cd"],
  ["Vercel", "deploy"],
  ["Gemma / HF", "side projects"],
  ["C4 Modeling", "architecture"],
  ["OAuth & JWT", "security"],
]

export function Skills() {
  return (
    <section id="technical-skills" className="scroll-mt-16 px-4 pb-24 pt-36 md:px-14">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-8">
        <h2 className="leading-[0.88]">
          <span className="block text-[clamp(52px,6vw,96px)] font-black tracking-tighter">STACK</span>
          <span className="block text-[clamp(52px,6vw,96px)] font-light tracking-tighter">&amp; TOOLS</span>
        </h2>
        <p className="max-w-[340px] text-sm leading-relaxed text-muted-foreground">
          Technologies I use across shipped products, hackathons and side projects — chosen for reliability first.
        </p>
      </div>

      <ul className="mx-auto mt-16 grid max-w-[1240px] grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] overflow-hidden rounded-lg border border-border bg-card">
        {stack.map(([name, kind]) => (
          <li key={name} className="flex items-baseline justify-between gap-2 border-b border-grid px-4 py-5">
            <span className="text-xl font-extrabold tracking-tight">{name}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">{kind}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
