import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Highlights } from "@/components/highlights"
import { Visit } from "@/components/visit"
import { Footer } from "@/components/footer"
import { BackToTopButton } from "@/components/back-to-top-button"

export default function Home() {
  return (
    <main id="home-top" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu preview />
      <Highlights />
      <Visit />
      <Footer />
      <BackToTopButton />
    </main>
  )
}
