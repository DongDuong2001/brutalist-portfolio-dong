import { ArrowUpRight } from "lucide-react"

const disciplines = [
  {
    href: "#projects",
    top: "FRONT",
    copy: "Responsive interfaces in Next.js & React — shipped products and live demos.",
  },
  {
    href: "#technical-skills",
    top: "BACK",
    copy: "APIs, databases and offline AI servers — Go, FastAPI, PostgreSQL, Docker, Gemma.",
  },
]

export function Disciplines() {
  return (
    <section className="relative flex flex-wrap items-center justify-center gap-[clamp(32px,6vw,96px)] overflow-hidden border-t border-[#d3d9e0] px-4 py-28 md:px-14">
      {/* Decorative edge circles: only from 1280px up, so they never cover the links */}
      <div className="absolute -left-[120px] top-1/2 hidden aspect-square w-[360px] -translate-y-1/2 overflow-hidden rounded-full border-[1.5px] border-foreground xl:block">
        <img src="/logo_banner/DuongPhuDong_Logo.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <a
        href="https://lehongkhanh.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -right-[100px] top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 flex-col justify-center gap-1.5 rounded-full bg-ink pl-14 text-[#e6edf3] xl:flex"
      >
        <span className="text-[72px] font-black leading-[0.9] tracking-tighter text-accent">1.6K+</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-mist">Users on H1T Micro ↗</span>
      </a>

      {disciplines.map(({ href, top, copy }) => (
        <a key={top} href={href} className="flex max-w-[280px] flex-col items-center gap-3.5 text-center text-foreground">
          <span className="leading-[0.9]">
            <span className="block text-[clamp(56px,6.4vw,96px)] font-light tracking-tighter">{top}</span>
            <span className="block text-[clamp(56px,6.4vw,96px)] font-black tracking-tighter">END</span>
          </span>
          <span className="text-[13px] leading-normal text-muted-foreground">{copy}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
          </span>
        </a>
      ))}
    </section>
  )
}
