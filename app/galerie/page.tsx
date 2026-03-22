import { Navbar } from "@/components/navbar"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function GaleriePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-6 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-foreground">Galerie</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Klikněte na fotku pro zvětšení a plynulé procházení celé galerie.
          </p>
        </div>
      </section>
      <Gallery />
      <Footer />
    </main>
  )
}
