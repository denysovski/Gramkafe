import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Highlights } from "@/components/highlights"
import { Reviews } from "@/components/reviews"
import { Gallery } from "@/components/gallery"
import { Visit } from "@/components/visit"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Highlights />
      <Reviews />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  )
}
