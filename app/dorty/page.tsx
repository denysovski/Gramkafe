import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const cakes = [
  {
    name: "Čokoládový dort",
    description: "Intenzivní čokoládový korpus s jemným krémem a elegantním zdobením.",
    details: "70% čokoláda, hedvábná ganache, ruční dekor",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Pistáciový dort",
    description: "Jemný pistáciový krém, lehký korpus a vyvážená sladkost.",
    details: "Pistácie z Bronte, vanilka, jemný mascarpone krém",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Ovocný cheesecake",
    description: "Krémový základ, máslová sušenková vrstva a sezónní ovoce.",
    details: "Lehký cream cheese, citrusová nota, čerstvé ovoce",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Mrkvový dort",
    description: "Vláčný korpus s kořením a sametovým cream cheese krémem.",
    details: "Skořice, pekanové ořechy, karamelizovaná mrkev",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Red Velvet",
    description: "Ikonický dort s jemnou strukturou a kontrastním krémem.",
    details: "Kakaový korpus, krém z philadelphie, výrazná barva",
    image: "images/showcase3.jpg",
  },
  {
    name: "Pistáciovo-malinový dort",
    description: "Jemná pistáciová chuť s lehce kyselým malinovým tónem.",
    details: "Pistáciový krém, malinové jádro, lehký korpus",
    image: "images/showcase1.jpg",
  },
  {
    name: "Karamelový cheesecake",
    description: "Sametový cheesecake s karamelovou vrstvou a jemnou sušenkou.",
    details: "Krémový základ, slaný karamel, sušenkové dno",
    image: "images/instagram-gallery-05.jpg",
  },
  {
    name: "Čokoládový mousse dort",
    description: "Nadýchaná čokoládová pěna s intenzivní chutí kakaa.",
    details: "Mousse z hořké čokolády, jemný piškot, kakaový posyp",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1400&q=80",
  },
]

export default function DortyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-primary animate-in fade-in-0 slide-in-from-bottom-2 duration-500">Dorty</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground animate-in fade-in-0 slide-in-from-bottom-2 duration-700">Dorty v naší nabídce</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-4xl animate-in fade-in-0 slide-in-from-bottom-2 duration-900">
            V naší kavárně připravujeme i dorty na míru. Stačí přijít s představou výsledného vzhledu a chuti -
            společně navrhneme dort, který bude odpovídat vaší příležitosti. Samozřejmostí je zohlednění alergií
            i individuálních chuťových preferencí.
          </p>

          <div className="mt-5 inline-flex max-w-4xl rounded-2xl border border-[#6F4E37]/70 bg-[#6F4E37] px-5 py-3 text-sm md:text-base text-white shadow-sm animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
            Ceny dortů a zákusků jsou individuální, možné po telefonické domluvě nebo při dotazu na e-mailové adrese.
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cakes.map((cake) => (
              <article
                key={cake.name}
                  className="group relative min-h-80 overflow-hidden rounded-3xl border border-border/50 animate-in fade-in-0 zoom-in-95 duration-500"
              >
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                  <h2 className="font-serif text-2xl md:text-3xl text-white">{cake.name}</h2>
                  <p className="mt-2 text-white/90 leading-relaxed">{cake.description}</p>

                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    <div className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/90">
                      Více informací
                    </div>
                    <p className="mt-3 text-sm text-white/90">{cake.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

