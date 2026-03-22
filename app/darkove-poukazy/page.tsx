import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const steps = [
  {
    title: "1. PoĹˇlete nĂˇm e-mail",
    text: "NapiĹˇte na adresu gramkafe@seznam.cz a uveÄŹte jmĂ©no obdarovanĂ©ho a hodnotu poukazu.",
  },
  {
    title: "2. ObdrĹľĂ­te platebnĂ­ kĂłd",
    text: "Do dvou pracovnĂ­ch dnĹŻ vĂˇm poĹˇleme instrukce k platbÄ› pĹ™evodem a unikĂˇtnĂ­ kĂłd.",
  },
  {
    title: "3. DoruÄŤĂ­me vĂˇm poukaz",
    text: "Po pĹ™ijetĂ­ platby vĂˇm poĹˇleme poukaz e-mailem. MĹŻĹľete ho vytisknout nebo ukĂˇzat v telefonu pĹ™i uplatnÄ›nĂ­.",
  },
]

export default function DarkovePoukazyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">DĂˇrkovĂ© poukazy</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground">
            Jak objednat dĂˇrkovĂ˝ poukaz online
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Chcete potÄ›Ĺˇit blĂ­zkĂ© chutnĂ˝m dĂˇrkem? DĂˇrkovĂ˝ poukaz do Gram Kafé je rychlĂ˝ a elegantnĂ­ zpĹŻsob,
            jak darovat zĂˇĹľitek z vĂ˝bÄ›rovĂ© kĂˇvy, dezertĹŻ a pĹ™Ă­jemnĂ©ho posezenĂ­.
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
            <p className="text-foreground font-medium">ObjednĂˇvky pĹ™ijĂ­mĂˇme na: gramkafe@seznam.cz</p>
            <p className="mt-2 text-muted-foreground">
              Do pĹ™edmÄ›tu zprĂˇvy doporuÄŤujeme uvĂ©st: "DĂˇrkovĂ˝ poukaz - Gram Kafé".
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
