import { TextScramble } from "@/components/ui/text-scramble"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b-2 border-foreground pt-16">
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="border-2 border-foreground p-2 inline-block">
              <span className="font-mono text-xs md:text-sm bg-accent text-accent-foreground px-2 py-1">
                <TextScramble>AVAILABLE FOR WORK</TextScramble>
              </span>
            </div>

            <h1 className="font-mono text-4xl md:text-6xl lg:text-8xl font-bold leading-none text-balance">
              <TextScramble duration={2.5}>DUONG PHU DONG</TextScramble>
            </h1>

            <div className="border-l-2 border-accent pl-4 md:pl-6">
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                Software Engineering Student at RMIT & Founder of{" "}
                <a
                  href="https://github.com/lab68dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-foreground underline decoration-accent decoration-2 hover:text-accent transition-colors"
                >
                  lab68dev
                </a>
                , specializing in building robust, user-friendly applications
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="border-2 border-foreground px-6 py-3 md:px-8 md:py-4 font-mono font-bold hover:bg-foreground hover:text-background transition-colors text-sm md:text-base"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                className="border-2 border-foreground px-6 py-3 md:px-8 md:py-4 font-mono font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors text-sm md:text-base"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          <div className="border-2 border-foreground p-6 md:p-8 bg-secondary mt-8 md:mt-0">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b-2 border-foreground pb-2">
                <span>ROLE:</span>
                <span className="font-bold">
                  <a
                    href="https://github.com/lab68dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-accent decoration-2 hover:text-accent transition-colors"
                  >
                    FOUNDER @ LAB68DEV
                  </a>
                </span>
              </div>
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
                <span>Founder:</span>
                <span className="font-bold">@lab68dev</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="font-bold text-foreground">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                  ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
