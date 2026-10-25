import { projects } from "@/data/projects"

const shippedCount = projects.filter((project) => project.stage !== "now-building").length

const accentWord = "font-mono font-bold lowercase tracking-[-0.06em] text-accent"

function MarqueeRow({ items, className }: { items: string[]; className: string }) {
  // Rendered twice so the -50% keyframe loops without a gap
  const loop = [...items, ...items]
  return (
    <div className={`marquee-row ${className}`}>
      {loop.map((item, index) => (
        <span key={index} aria-hidden={index >= items.length}>
          {item} ·
        </span>
      ))}
    </div>
  )
}

export function Manifesto() {
  return (
    <section className="bg-ink text-[#e6edf3]">
      <div className="relative overflow-hidden py-28">
        <p className="absolute left-1/2 top-7 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.18em] text-mist">
          Engineering from Saigon
        </p>
        <div className="flex flex-col gap-1.5 leading-[0.98]">
          <MarqueeRow
            items={["reliable by design", "built to scale"]}
            className="marquee-left font-mono text-[clamp(48px,7vw,108px)] font-bold tracking-[-0.04em] text-accent"
          />
          <MarqueeRow
            items={["SOFTWARE ENGINEER · HCMC", `${shippedCount} PROJECTS SHIPPED`]}
            className="marquee-right text-[clamp(60px,8.5vw,132px)] font-black tracking-[-0.04em]"
          />
        </div>
      </div>

      <div className="px-4 pb-40 pt-10 md:px-14">
        <p className="mx-auto max-w-[1180px] text-center text-[clamp(40px,6.2vw,94px)] font-black uppercase leading-[0.98] tracking-[-0.035em]">
          <span className={accentWord}>architecting</span> resilient APIs, shipping{" "}
          <span className={accentWord}>products</span>, scaling them for{" "}
          <span className={accentWord}>real users</span>.
        </p>
      </div>
    </section>
  )
}
