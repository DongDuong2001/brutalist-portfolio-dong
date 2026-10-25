import { ArrowUpRight } from "lucide-react"

const socials = [
  { label: "GITHUB", href: "https://github.com/DongDuong2001" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/duong-phu-dong/" },
  { label: "EMAIL", href: "mailto:dongduong840@gmail.com" },
]

const pages = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#technical-skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
]

const accentWord = "font-mono font-bold lowercase tracking-[-0.07em] text-accent"

const externalProps = (href: string) =>
  href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" }

export function Footer() {
  return (
    <section className="bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_35%,var(--accent)_100%)] px-4 pb-10 pt-20 md:px-14">
      <div className="flex flex-col items-center gap-4 pb-28 text-center">
        <p className="text-[clamp(22px,2.4vw,32px)] font-bold tracking-tight">Follow along</p>
        <nav aria-label="Social" className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-[11px] font-extrabold tracking-[0.08em]">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} {...externalProps(href)} className="py-3 hover:underline">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <footer className="relative mx-auto max-w-[1360px] rounded-[18px] bg-ink px-5 pt-[88px] text-[#e6edf3] md:px-14">
        {/* Tab on top of the card, borrowed from the reference layout */}
        <div aria-hidden="true" className="absolute -top-[38px] left-1/2 h-10 w-[min(360px,60%)] -translate-x-1/2 rounded-t-[40px] bg-ink" />

        <h2 className="text-center text-[clamp(44px,6.4vw,100px)] font-black leading-[0.92] tracking-[-0.045em]">
          ALWAYS <span className={accentWord}>shipping</span>
          <br />
          THE <span className={accentWord}>next</span> BUILD.
        </h2>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-10">
          <nav aria-label="Pages" className="flex flex-col gap-1 text-[22px] font-black leading-[1.1] tracking-tight">
            <span className="mb-2 text-[10px] tracking-[0.14em] text-mist">PAGES</span>
            {pages.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-accent">
                {label}
              </a>
            ))}
            <a href="/cv/DuongPhuDong_Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2.5 text-[13px] text-accent">
              RESUME (CV)
            </a>
          </nav>

          <div className="aspect-square w-[clamp(160px,18vw,240px)] overflow-hidden rounded-full border border-[#30363f]">
            <img src="/logo_banner/DuongPhuDong_Logo.jpg" alt="" className="h-full w-full object-cover" />
          </div>

          <nav aria-label="Follow" className="flex flex-col gap-1 text-right text-[22px] font-black leading-[1.1] tracking-tight">
            <span className="mb-2 text-[10px] tracking-[0.14em] text-mist">FOLLOW</span>
            {socials.map(({ label, href }) => (
              <a key={label} href={href} {...externalProps(href)} className="hover:text-accent">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:dongduong840@gmail.com"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-xs font-extrabold tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            WORK WITH ME
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-line-dark pb-7 pt-5 text-[10px] font-bold tracking-[0.08em] text-mist">
          <span>© 2026 DUONG PHU DONG · @3BSTUDIO</span>
          <span>HO CHI MINH CITY, VIETNAM</span>
        </div>
      </footer>
    </section>
  )
}
