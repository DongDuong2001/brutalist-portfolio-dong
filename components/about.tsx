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
  { label: "Role", value: "Software Engineer — full-stack & system architecture" },
  { label: "Education", value: "B.Eng Software Engineering, RMIT '27" },
  { label: "Focus", value: "Backend architecture & scalability" },
  { label: "Location", value: "Ho Chi Minh City, Vietnam" },
]

export function About() {
  return (
    <section className="bg-blueprint px-4 py-36 md:px-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-10">
        <figure className="flex flex-col gap-2">
          <figcaption className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            Rec ▪ Duong Phu Dong — banner reel
          </figcaption>
          <video
            src="/logo_banner/duongphudong_banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Duong Phu Dong animated banner"
            className="chamfer-lg aspect-video w-full border border-accent/50 bg-black object-contain"
          />
        </figure>

        <div className="flex flex-col gap-6 md:pt-20">
          <span className="file-label">
            Subject <span className="font-jp text-accent">対象</span>
          </span>
          <p className="text-[clamp(22px,2.2vw,30px)] font-semibold leading-tight tracking-[-0.015em]">
            Specialized in architecting robust backend APIs and building responsive frontends, while exploring local LLMs
            through side projects.
          </p>
          <span className="text-[13px] font-bold text-muted-foreground">— Duong Phu Dong</span>
        </div>

        <dl className="flex flex-col border border-line-dark border-t-2 border-t-accent bg-ink px-5 py-2 text-[#e6edf3] md:mt-40">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1 border-b border-line-dark py-3.5 last:border-b-0">
              <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-mist">{label}</dt>
              <dd className="text-[15px] font-bold leading-normal">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
