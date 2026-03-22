import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const cakes = [
  {
    name: "Čokoládový dort",
    description: "Intenzivní čokoládový korpus s jemným krémem a elegantním zdobením.",
  },
  {
    name: "Pistáciový dort",
    description: "Jemný pistáciový krém, lehký korpus a vyvážená sladkost.",
  },
  {
    name: "Ovocný cheesecake",
    description: "Krémový základ, máslová sušenková vrstva a sezónní ovoce.",
  },
  {
    name: "Mrkvový dort",
    description: "Vláčný korpus s kořením a sametovým cream cheese krémem.",
  },
  {
    name: "Red Velvet",
    description: "Ikonický dort s jemnou strukturou a kontrastním krémem.",
  },
]

export default function DortyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Dorty</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">Dorty v naší nabídce</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-4xl">
            V naší kavárně připravujeme i dorty na míru. Stačí přijít s představou výsledného vzhledu a chuti -
            společně navrhneme dort, který bude odpovídat vaší příležitosti. Samozřejmostí je zohlednění alergií
            i individuálních chuťových preferencí.
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
