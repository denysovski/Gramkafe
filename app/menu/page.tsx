import { Navbar } from "@/components/navbar"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Menu />
      <Footer />
    </main>
  )
}
