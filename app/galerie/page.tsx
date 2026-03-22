import { Navbar } from "@/components/navbar"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function GaleriePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Gallery />
      <Footer />
    </main>
  )
}
