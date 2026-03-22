import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const cakes = [
  {
    name: "Cokoladovy dort",
    description: "Intenzivni cokoladovy korpus s jemnym kremem a elegantnim zdobenim.",
  },
  {
    name: "Pistaciovy dort",
    description: "Jemny pistaciovy krem, lehky korpus a vyvazena sladkost.",
  },
  {
    name: "Ovovny cheesecake",
    description: "Kremovy zaklad, maslova susenkova vrstva a sezoni ovoce.",
  },
  {
    name: "Mrkvovy dort",
    description: "Vlacny korpus s korenim a sametovym cream cheese kremem.",
  },
  {
    name: "Red Velvet",
    description: "Ikonicky dort s jemnou strukturou a kontrastnim kremem.",
  },
]

export default function DortyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Dorty</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">Dorty v nasi nabidce</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-4xl">
            V nasi kavarne pripravujeme i dorty na miru. Staci prijit s predstvou vysledneho vzhledu a chuti -
            spolecne navrhneme dort, ktery bude odpovidat vasi prilezitosti. Samozrejmosti je zohledneni alergii
            i individualnich chuťovych preferenci.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cakes.map((cake) => (
              <article key={cake.name} className="rounded-2xl border border-border/60 bg-card p-6">
                <h2 className="font-serif text-2xl text-foreground">{cake.name}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{cake.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
