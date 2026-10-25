const facts = [
  {
    label: "Currently",
    value: (
      <>
        Founder,{" "}
        <a href="https://3bstudio.me" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">
          3bstudio.me
        </a>
        <br />
        Co-Founder,{" "}
        <a href="https://lehongkhanh.vn" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">
          H1T Micro
        </a>{" "}
        — Solution Architect &amp; Backend Engineer, built with Hào, scaling past 1,600+ users
      </>
    ),
  },
  { label: "Role", value: "Full-stack Developer · System Architecture" },
  { label: "Education", value: "B.Eng Software Engineering, RMIT '27" },
  { label: "Focus", value: "Reliability & local LLMs" },
  { label: "Location", value: "Ho Chi Minh City, Vietnam" },
]

export function About() {
  return (
    <section className="bg-blueprint px-4 py-36 md:px-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-10">
        <figure className="flex flex-col gap-2">
          <figcaption className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Duong Phu Dong — banner reel
          </figcaption>
          <video
            src="/logo_banner/duongphudong_banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Duong Phu Dong animated banner"
            className="aspect-video w-full rounded-lg border border-foreground bg-black object-contain shadow-[0_30px_60px_-30px_rgba(14,17,22,0.5)]"
          />
        </figure>

        <div className="flex flex-col gap-6 md:pt-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">About</span>
          <p className="text-[clamp(22px,2.2vw,30px)] font-semibold leading-tight tracking-[-0.015em]">
            Specialized in architecting robust backend APIs, building responsive frontends, and integrating local AI/LLMs
            into production workflows.
          </p>
          <span className="text-[13px] font-bold text-muted-foreground">— Duong Phu Dong</span>
        </div>

        <dl className="flex flex-col rounded-lg bg-ink px-5 py-2 text-[#e6edf3] md:mt-40">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1 border-b border-line-dark py-3.5 last:border-b-0">
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-mist">{label}</dt>
              <dd className="text-[15px] font-bold leading-normal">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
