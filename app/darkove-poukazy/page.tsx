import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const steps = [
  {
    title: "1. Pošlete nám e-mail",
    text: "Napište na adresu gramkafe@seznam.cz a uveďte jméno obdarovaného a hodnotu poukazu.",
  },
  {
    title: "2. Obdržíte platební kód",
    text: "Do dvou pracovních dnů vám pošleme instrukce k platbě převodem a unikátní kód.",
  },
  {
    title: "3. Doručíme vám poukaz",
    text: "Po přijetí platby vám pošleme poukaz e-mailem. Můžete ho vytisknout nebo ukázat v telefonu při uplatnění.",
  },
]

export default function DarkovePoukazyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-primary animate-in fade-in-0 slide-in-from-bottom-2 duration-500">Dárkové poukazy</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            Jak objednat dárkový poukaz online
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-in fade-in-0 slide-in-from-bottom-2 duration-900">
            Chcete potěšit blízké chutnou dárkem? Dárkový poukaz do Gram Kafé je rychlý a elegantní způsob,
            jak darovat zážitek z výběrové kávy, dezertů a příjemného posezení.
          </p>

          <div className="mt-12 grid gap-6">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 animate-in fade-in-0 zoom-in-95 duration-500">
                <h2 className="font-serif text-2xl text-foreground">{step.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-secondary/50 border border-border/60 p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            <p className="text-foreground font-medium">Objednávky přijímáme na: gramkafe@seznam.cz</p>
            <p className="mt-2 text-muted-foreground">
              Do předmětu zprávy doporučujeme uvést: "Dárkový poukaz - Gram Kafé".
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
