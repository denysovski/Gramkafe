import { Navbar } from "@/components/navbar"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-6 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-foreground">Kompletni menu</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Vyberte si kategorii a projdete cely nabidkovy listek vcetne cen.
          </p>
        </div>
      </section>
      <Menu />
      <Footer />
    </main>
  )
}
