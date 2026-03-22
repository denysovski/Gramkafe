"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Beer, Cake, Coffee, GlassWater, Wine } from "lucide-react"

const categories = [
  {
    id: "sezoni",
    name: "Sezonni napoje",
    icon: GlassWater,
    items: [
      { name: "Pernikove latte", description: "Horke latte s pernikovym sirupem", price: "89 Kc" },
      { name: "Vanocni punc", description: "0,2 l", price: "69 Kc" },
      { name: "Hruskovy turbo napoj", description: "Svareny hruskovy juice a koreni", price: "85 Kc" },
      { name: "Tepla Matcha tea - maracuja", description: "Jemna kombinace matchy a maracuji", price: "85 Kc" },
      { name: "Chai latte", description: "Vyluh assamskeho caje a koreni s mlecnou penou", price: "75 Kc" },
      { name: "Dirty Chai latte", description: "Chai latte doplnene o espresso", price: "99 Kc" },
      { name: "Tepla netradicni limonada", description: "Libovolna limonada v horke variante", price: "70 Kc" },
      { name: "Svarene vino", description: "0,2 l", price: "65 Kc" },
    ],
  },
  {
    id: "kava",
    name: "Kava",
    icon: Coffee,
    items: [
      { name: "Espresso", description: "8 g kavy, 30 ml vody", price: "60 Kc" },
      { name: "Espresso Lungo", description: "Prodlouzene espresso", price: "60 Kc" },
      { name: "Espresso Doppio", description: "Dvojite espresso", price: "85 Kc" },
      { name: "Cappuccino", description: "Espresso s horkym naslehanym mlekem", price: "65 Kc" },
      { name: "Flat White", description: "Dvojite espresso a jemna mikropena", price: "89 Kc" },
      { name: "Latte Macchiato", description: "Espresso, mleko a mlecna pena", price: "68 Kc" },
      { name: "Videnska kava", description: "Prodlouzene espresso se slehackou", price: "65 Kc" },
      { name: "Alzirska kava", description: "Espresso, vajecny liker a slehacka", price: "79 Kc" },
      { name: "Ledova kava se zmrzlinou", description: "Vanilkova zmrzlina a slehacka", price: "89 Kc" },
      { name: "Filtrovana kava", description: "0,2 l vyberove kavy Doubleshot", price: "69 Kc" },
      { name: "Irska kava", description: "Espresso, irska whisky, smetana", price: "115 Kc" },
      { name: "Alternativni mleko", description: "Priplatek", price: "+10 Kc" },
      { name: "Bezkofeinova kava", description: "Priplatek", price: "+10 Kc" },
    ],
  },
  {
    id: "limonady",
    name: "Netradicni limonady",
    icon: GlassWater,
    items: [
      { name: "Malina a hrebicek", description: "0,4 l", price: "65 Kc" },
      { name: "Vici v jahodach", description: "0,4 l", price: "65 Kc" },
      { name: "Pekne husty mango", description: "0,4 l", price: "65 Kc" },
      { name: "Bezinka", description: "0,4 l", price: "65 Kc" },
      { name: "Kopriva a hermanek", description: "0,4 l", price: "65 Kc" },
      { name: "Draci dech", description: "0,4 l", price: "65 Kc" },
      { name: "Raci na strome", description: "0,4 l", price: "65 Kc" },
      { name: "Koreneny kus", description: "0,4 l", price: "65 Kc" },
    ],
  },
  {
    id: "nealko",
    name: "Nealkoholicke napoje",
    icon: GlassWater,
    items: [
      { name: "Tocena Kofola", description: "0,3 l / 0,5 l", price: "39 / 55 Kc" },
      { name: "Coca-Cola", description: "0,33 l", price: "45 Kc" },
      { name: "Tonic / Zazvorovy tonic / Rozovy", description: "0,33 l", price: "45 Kc" },
      { name: "Rajec (neperlivy/jemne perlivy/perlivy)", description: "0,33 l", price: "35 Kc" },
      { name: "Targa Florio", description: "0,25 l", price: "45 Kc" },
      { name: "Juice dle nabidky", description: "0,25 l", price: "49 Kc" },
      { name: "Voda s citronem", description: "0,2 l / 0,5 l / 1 l", price: "20 / 25 / 50 Kc" },
      { name: "Karaskovy limonady", description: "0,33 l (jahoda, bio malina, hruska, levandule, svestka, med, okurka)", price: "55 Kc" },
      { name: "Bernard Free", description: "0,5 l", price: "45 Kc" },
      { name: "Bernard Free svestka", description: "0,5 l", price: "45 Kc" },
    ],
  },
  {
    id: "alkohol",
    name: "Alkoholicke napoje",
    icon: Beer,
    items: [
      { name: "F.H. Prager 11 cider", description: "0,33 l", price: "55 Kc" },
      { name: "Tocene pivo Bernard 11°", description: "0,3 l / 0,5 l", price: "42 / 48 Kc" },
      { name: "Becherovka", description: "0,04 l", price: "45 Kc" },
      { name: "Fernet", description: "0,04 l", price: "45 Kc" },
      { name: "Griotka", description: "0,04 l", price: "45 Kc" },
      { name: "Tullamore", description: "0,04 l", price: "55 Kc" },
      { name: "Jagermeister", description: "0,04 l", price: "55 Kc" },
      { name: "Legendarium Elixir de Cuba", description: "0,04 l", price: "65 Kc" },
      { name: "Rumy dle denni nabidky", description: "0,04 l", price: "80 Kc" },
    ],
  },
  {
    id: "vina",
    name: "Vina",
    icon: Wine,
    items: [
      { name: "Ryzlink vlassky", description: "0,1 l / 0,75 l", price: "40 / 290 Kc" },
      { name: "Rulandske sede", description: "0,1 l / 0,75 l", price: "40 / 290 Kc" },
      { name: "Hibernal", description: "0,1 l / 0,75 l", price: "40 / 290 Kc" },
      { name: "Dornfelder", description: "0,1 l / 0,75 l", price: "35 / 260 Kc" },
      { name: "Sevar Rose", description: "0,1 l / 0,75 l", price: "40 / 290 Kc" },
      { name: "Prosecco", description: "0,75 l", price: "250 Kc" },
    ],
  },
  {
    id: "teple",
    name: "Horke napoje",
    icon: Coffee,
    items: [
      { name: "Ronnefeldt Tea", description: "cerny, zeleny, ovocny, matovy, bylinkovy, jasmim", price: "59 Kc" },
      { name: "Zeleny caj s mangem a citronem", description: "Ronnefeldt", price: "59 Kc" },
      { name: "Yuzu Tea", description: "0,33 l", price: "59 Kc" },
      { name: "Peceny caj", description: "domaci styl", price: "59 Kc" },
      { name: "Zazvorovy caj", description: "0,4 l", price: "65 Kc" },
      { name: "Grog", description: "0,25 l", price: "59 Kc" },
      { name: "Horka Griotka", description: "0,25 l", price: "59 Kc" },
      { name: "Svareny dzus", description: "ovocna varianta", price: "59 Kc" },
      { name: "Horka cokolada Original", description: "klasicka", price: "55 Kc" },
      { name: "Horka cokolada tekuta bila/tmava", description: "vysoky podil kakaa", price: "55 Kc" },
      { name: "Horka cokolada husta bila/tmava", description: "kremova varianta", price: "55 Kc" },
      { name: "Slehacka navic", description: "doplnek", price: "15 Kc" },
    ],
  },
  {
    id: "sladke",
    name: "Neco k zakousnuti",
    icon: Cake,
    items: [
      { name: "Francouzska palacinka s marmeladou", description: "+ slehacka", price: "79 Kc" },
      { name: "Francouzska palacinka s nutellou", description: "+ slehacka", price: "79 Kc" },
      { name: "Francouzska palacinka se zmrzlinou", description: "ovocna omacka + slehacka", price: "89 Kc" },
      { name: "Galeta s goudou a sunkou", description: "pohankova mouka", price: "95 Kc" },
      { name: "Galeta s goudou a nivou", description: "pohankova mouka", price: "95 Kc" },
      { name: "Panini Prague Ham & Emental", description: "vyberova sunka a emental", price: "99 Kc" },
      { name: "Panini Swiss", description: "emental, susena rajcata, camembert", price: "99 Kc" },
      { name: "Panini Beef & Cheddar", description: "hovezi, cheddar, BBQ", price: "99 Kc" },
      { name: "Panini Chicken & Bacon", description: "kureci prsa a slanina", price: "99 Kc" },
      { name: "Zmrzlinovy pohar maly", description: "1 kopecek + slehacka", price: "75 Kc" },
      { name: "Zmrzlinovy pohar stredni", description: "2 kopecky + slehacka", price: "85 Kc" },
      { name: "Zmrzlinovy pohar velky", description: "3 kopecky + slehacka", price: "95 Kc" },
      { name: "Karamelovy pohar", description: "vanilka, banan, karamel + slehacka", price: "69 Kc" },
      { name: "Horke maliny", description: "vanilka + slehacka", price: "69 Kc" },
      { name: "Slehacka navic", description: "doplnek", price: "15 Kc" },
    ],
  },
]

const previewSections = [
  { id: "alkohol", label: "Alkoholické" },
  { id: "nealko", label: "Nealkoholické" },
  { id: "sladke", label: "Dezerty" },
] as const

type MenuProps = {
  preview?: boolean
}

export function Menu({ preview = false }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(
    preview ? "nealko" : categories[0].id
  )
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const activeItems = categories.find((c) => c.id === activeCategory)?.items || []
  const previewItems = activeItems.slice(0, 4)

  return (
    <section ref={sectionRef} id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Nabídka
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            Připravujeme s vášní, podáváme s láskou
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {preview
              ? "Vyberte si sekci, prohlédněte 4 položky a pokračujte na kompletní menu."
              : "Kompletní nápojový a dezertní lístek včetně aktuálních cen."}
          </p>
        </div>

        {preview ? (
          <>
            <div
              className={`mt-12 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {previewSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveCategory(section.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    activeCategory === section.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <div
              className={`mt-10 grid sm:grid-cols-2 xl:grid-cols-5 gap-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {previewItems.map((item, index) => (
                <article
                  key={item.name}
                  className="p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mt-1 flex justify-between items-start gap-3">
                    <h3 className="font-medium text-lg text-foreground">{item.name}</h3>
                    <span className="text-sm font-semibold text-accent">{item.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              ))}

              <Link
                href="/menu"
                className="rounded-2xl bg-primary text-primary-foreground border border-primary/70 p-6 min-h-[210px] flex flex-col items-center justify-center text-center shadow-lg hover:brightness-110 transition-all duration-300"
              >
                <p className="text-sm uppercase tracking-widest text-primary-foreground/85">Kompletní nabídka</p>
                <h3 className="mt-3 font-serif text-2xl">Zobrazit více</h3>
                <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div
              className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            <div
              className={`mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {activeItems.map((item, index) => (
                <article
                  key={item.name}
                  className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-sm font-medium text-accent">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Obsah alergenů a aktuální denní nabídka jsou k dispozici u obsluhy.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
