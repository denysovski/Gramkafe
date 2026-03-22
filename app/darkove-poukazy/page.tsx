import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const steps = [
  {
    title: "1. Poslete nam email",
    text: "Napište na adresu gramkafe@seznam.cz a uvedte jmeno obdarovaneho a hodnotu poukazu.",
  },
  {
    title: "2. Obdrzite platebni kod",
    text: "Do dvou pracovnich dnu vam posleme instrukce k platbe prevodem a unikatni kod.",
  },
  {
    title: "3. Doručíme vam poukaz",
    text: "Po prijeti platby vam posleme poukaz e-mailem. Muzete ho vytisknout nebo ukazat v telefonu pri uplatneni.",
  },
]

export default function DarkovePoukazyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Darkove poukazy</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">
            Jak objednat darkovy poukaz online
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Chcete potesit blizke chutnym darkem? Darkovy poukaz do Gram kafe je rychly a elegantni zpusob,
            jak darovat zazitek z vyberove kavy, dezertu a prijemneho posezeni.
          </p>

          <div className="mt-12 grid gap-6">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
                <h2 className="font-serif text-2xl text-foreground">{step.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-secondary/50 border border-border/60 p-6 md:p-8">
            <p className="text-foreground font-medium">Objednavky prijimame na: gramkafe@seznam.cz</p>
            <p className="mt-2 text-muted-foreground">
              Do predmetu zpravy doporucujeme uvest: "Darkovy poukaz - Gram kafe".
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
