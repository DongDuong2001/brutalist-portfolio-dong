export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b-4 border-foreground pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="border-4 border-foreground p-2 inline-block">
              <span className="font-mono text-sm bg-accent text-accent-foreground px-2 py-1">AVAILABLE FOR WORK</span>
            </div>

            <h1 className="font-mono text-6xl md:text-8xl font-bold leading-none text-balance">DƯƠNG PHÚ ĐÔNG</h1>

            <div className="border-l-4 border-accent pl-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                Software Engineering Student at RMIT specializing in building robust, user-friendly applications
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="border-4 border-foreground px-8 py-4 font-mono font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                VIEW WORK
              </a>
              <a
                href="#contact"
                className="border-4 border-foreground px-8 py-4 font-mono font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          <div className="border-4 border-foreground p-8 bg-secondary">
            <div className="space-y-4 font-mono text-sm">
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
                <span className="font-bold">6+ COMPLETED</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="font-bold text-accent">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
