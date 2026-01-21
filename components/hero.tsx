"use client"

import Link from "next/link"


export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b-2 border-foreground pt-16">
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
            <div className="border-2 border-foreground p-2 inline-block">
              <span className="font-mono text-xs md:text-sm bg-accent text-accent-foreground px-2 py-1">
                AVAILABLE FOR WORK
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4">
                FULLSTACK <br />
                <span className="bg-accent text-accent-foreground px-2 italic transform -skew-x-12 inline-block">DEVELOPER</span> <br />
                & UI DESIGNER
              </h1>
            </div>

            <div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono">
                Building digital experiences with a focus on brutalist aesthetics and
                robust functionality.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="bg-foreground text-background px-8 py-3 font-mono font-bold hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-foreground"
                >
                  VIEW WORK
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent text-foreground px-8 py-3 font-mono font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
                >
                  CONTACT ME
                </Link>
                <a
                  href="/cv/DuongPhuDong_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-foreground px-8 py-3 font-mono font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-lg font-mono">
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>LOCATION:</span>
              <span className="font-bold">HO CHI MINH, VN</span>
            </div>
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>EDUCATION:</span>
              <span className="font-bold">RMIT VIETNAM</span>
            </div>
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>PROJECTS:</span>
              <span className="font-bold">10+ COMPLETED</span>
            </div>
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>FOUNDER:</span>
              <span className="font-bold">
                <a href="https://github.com/lab68dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  @lab68dev
                </a>
              </span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="font-bold text-foreground flex items-center">
                <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
