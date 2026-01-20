import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Activity } from "@/components/activity"
import { Interests } from "@/components/interests"
import { Contact } from "@/components/contact"
import { HeroMarquee } from "@/components/hero-marquee"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HeroMarquee />
        <Education />
        <Skills />
        <Projects />
        <Activity />
        <Interests />
        <Contact />
      </main>
    </div>
  )
}
