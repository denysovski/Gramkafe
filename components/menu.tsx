"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Beer, Cake, Coffee, GlassWater, Wine } from "lucide-react"

const categories = [
  {
    id: "sezoni",
    name: "Sezonní nápoje",
    icon: GlassWater,
    items: [
      { name: "Perníkové latte", description: "Horké latte s perníkovým sirupem", price: "89 Kč" },
      { name: "Vánoční punč", description: "0,2 l", price: "69 Kč" },
      { name: "Hruška turbo nápoj", description: "Svařený hruškový juice a koření", price: "85 Kč" },
      { name: "Teplá Matcha tea - marakuja", description: "Jemná kombinace matchy a marakuji", price: "85 Kč" },
      { name: "Chai latte", description: "Výluh assamského čaje a koření s mléčnou pěnou", price: "75 Kč" },
      { name: "Dirty Chai latte", description: "Chai latte doplněné o espresso", price: "99 Kč" },
      { name: "Teplá netradiční limonáda", description: "Libovolná limonáda v horké variantě", price: "70 Kč" },
      { name: "Svařené víno", description: "0,2 l", price: "65 Kč" },
    ],
  },
  {
    id: "kava",
    name: "Káva",
    icon: Coffee,
    items: [
      { name: "Espresso", description: "8 g kávy, 30 ml vody", price: "60 Kč" },
      { name: "Espresso Lungo", description: "Prodloužené espresso", price: "60 Kč" },
      { name: "Espresso Doppio", description: "Dvojité espresso", price: "85 Kč" },
      { name: "Cappuccino", description: "Espresso s horkým naslehaným mlékem", price: "65 Kč" },
      { name: "Flat White", description: "Dvojité espresso a jemná mikropěna", price: "89 Kč" },
      { name: "Latte Macchiato", description: "Espresso, mléko a mléčná pěna", price: "68 Kč" },
      { name: "Vídeňská káva", description: "Prodloužené espresso se slaninkou", price: "65 Kč" },
      { name: "Alžírská káva", description: "Espresso, vaječný likér a slanina", price: "79 Kč" },
      { name: "Ledová káva se zmrzlinou", description: "Vanilková zmrzlina a slanina", price: "89 Kč" },
      { name: "Filtrovaná káva", description: "0,2 l vybrané kávy Doubleshot", price: "69 Kč" },
      { name: "Irská káva", description: "Espresso, irská whisky, smetana", price: "115 Kč" },
      { name: "Alternativní mléko", description: "Příplatek", price: "+10 Kč" },
      { name: "Bezkofeinová káva", description: "Příplatek", price: "+10 Kč" },
    ],
  },
  {
    id: "limonady",
    name: "Netradiční limonády",
    icon: GlassWater,
    items: [
      { name: "Malina a hřebíček", description: "0,4 l", price: "65 Kč" },
      { name: "Víč v jahodách", description: "0,4 l", price: "65 Kč" },
      { name: "Pěkně husté mango", description: "0,4 l", price: "65 Kč" },
      { name: "Bezinka", description: "0,4 l", price: "65 Kč" },
      { name: "Kopřiva a heřmánek", description: "0,4 l", price: "65 Kč" },
      { name: "Dračí dech", description: "0,4 l", price: "65 Kč" },
      { name: "Raci na stromě", description: "0,4 l", price: "65 Kč" },
      { name: "Koření kus", description: "0,4 l", price: "65 Kč" },
    ],
  },
  {
    id: "nealko",
    name: "Nealkoholické nápoje",
    icon: GlassWater,
    items: [
      { name: "Točená Kofola", description: "0,3 l / 0,5 l", price: "39 / 55 Kč" },
      { name: "Coca-Cola", description: "0,33 l", price: "45 Kč" },
      { name: "Tonic / Zázvorový tonic / Růžový", description: "0,33 l", price: "45 Kč" },
      { name: "Rajec (neperlivý/jemně perlivý/perlivý)", description: "0,33 l", price: "35 Kč" },
      { name: "Targa Florio", description: "0,25 l", price: "45 Kč" },
      { name: "Juice dle nabídky", description: "0,25 l", price: "49 Kč" },
      { name: "Voda s citronem", description: "0,2 l / 0,5 l / 1 l", price: "20 / 25 / 50 Kč" },
      { name: "Karásková limonáda", description: "0,33 l (jahoda, bio malina, hrušk, levandule, švestka, med, okurka)", price: "55 Kč" },
      { name: "Bernard Free", description: "0,5 l", price: "45 Kč" },
      { name: "Bernard Free švestka", description: "0,5 l", price: "45 Kč" },
    ],
  },
  {
    id: "alkohol",
    name: "Alkoholické nápoje",
    icon: Beer,
    items: [
      { name: "F.H. Prager 11 cider", description: "0,33 l", price: "55 Kč" },
      { name: "Točené pivo Bernard 11°", description: "0,3 l / 0,5 l", price: "42 / 48 Kč" },
      { name: "Becherovka", description: "0,04 l", price: "45 Kč" },
      { name: "Fernet", description: "0,04 l", price: "45 Kč" },
      { name: "Griotka", description: "0,04 l", price: "45 Kč" },
      { name: "Tullamore", description: "0,04 l", price: "55 Kč" },
      { name: "Jägermeister", description: "0,04 l", price: "55 Kč" },
      { name: "Legendarium Elixir de Cuba", description: "0,04 l", price: "65 Kč" },
      { name: "Rumy dle denní nabídky", description: "0,04 l", price: "80 Kč" },
    ],
  },
  {
    id: "vina",
    name: "Vína",
    icon: Wine,
    items: [
      { name: "Ryzlink vlašský", description: "0,1 l / 0,75 l", price: "40 / 290 Kč" },
      { name: "Rulandské šedé", description: "0,1 l / 0,75 l", price: "40 / 290 Kč" },
      { name: "Hibernal", description: "0,1 l / 0,75 l", price: "40 / 290 Kč" },
      { name: "Dornfelder", description: "0,1 l / 0,75 l", price: "35 / 260 Kč" },
      { name: "Sevar Rosé", description: "0,1 l / 0,75 l", price: "40 / 290 Kč" },
      { name: "Prosecco", description: "0,75 l", price: "250 Kc" },
    ],
  },
  {
    id: "teple",
    name: "Horké nápoje",
    icon: Coffee,
    items: [
      { name: "Ronnefeldt Tea", description: "černý, zelený, ovocný, máty, bylinky, jasmín", price: "59 Kč" },
      { name: "Zelený čaj s mangovým a citronem", description: "Ronnefeldt", price: "59 Kč" },
      { name: "Yuzu Tea", description: "0,33 l", price: "59 Kč" },
      { name: "Pečený čaj", description: "domácí styl", price: "59 Kč" },
      { name: "Zázvorový čaj", description: "0,4 l", price: "65 Kč" },
      { name: "Grog", description: "0,25 l", price: "59 Kč" },
      { name: "Horká Griotka", description: "0,25 l", price: "59 Kč" },
      { name: "Svařený džus", description: "ovocná varianta", price: "59 Kč" },
      { name: "Horká čokoláda Original", description: "klasická", price: "55 Kč" },
      { name: "Horká čokoláda tekutá bílá/tmavá", description: "vysoký podíl kakaa", price: "55 Kč" },
      { name: "Horká čokoláda hustá bílá/tmavá", description: "krémová varianta", price: "55 Kč" },
      { name: "Slaninká navíc", description: "doplněk", price: "15 Kč" },
    ],
  },
  {
    id: "sladke",
    name: "Něco k zakousnutí",
    icon: Cake,
    items: [
      { name: "Francouzská palačinka s marmeládou", description: "+ slaninou", price: "79 Kč" },
      { name: "Francouzská palačinka s nutellou", description: "+ slaninou", price: "79 Kč" },
      { name: "Francouzská palačinka se zmrzlinou", description: "ovocná omáčka + slaninou", price: "89 Kč" },
      { name: "Galeta s goudou a sůnkou", description: "pohánková mouka", price: "95 Kč" },
      { name: "Galeta s goudou a nivou", description: "pohánková mouka", price: "95 Kč" },
      { name: "Panini Prague Ham & Emental", description: "vybraná sůnka a emental", price: "99 Kč" },
      { name: "Panini Swiss", description: "emental, sušená rajčata, camembert", price: "99 Kč" },
      { name: "Panini Beef & Cheddar", description: "hovězí, cheddar, BBQ", price: "99 Kč" },
      { name: "Panini Chicken & Bacon", description: "kuřecí prsa a slanina", price: "99 Kč" },
      { name: "Zmrzlinový pohár malý", description: "1 kopečka + slaninou", price: "75 Kč" },
      { name: "Zmrzlinový pohár střední", description: "2 kopečky + slaninou", price: "85 Kč" },
      { name: "Zmrzlinový pohár velký", description: "3 kopečky + slaninou", price: "95 Kč" },
      { name: "Karamelový pohár", description: "vanilka, banán, karamel + slaninou", price: "69 Kč" },
      { name: "Horké maliny", description: "vanilka + slaninou", price: "69 Kč" },
      { name: "Slaninou navíc", description: "doplněk", price: "15 Kč" },
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

function normalizePrice(price: string) {
  return price.replace(/\bKc\b/g, "Kč").replace(/\s+/g, " ").trim()
}

function splitFlavorTokens(text: string) {
  return text
    .split(/[\/,]/)
    .map((part) => part.trim())
    .filter(Boolean)
}

function getItemMeta(name: string, description: string) {
  let displayName = name.trim()
  let workingDescription = description.trim()
  const flavors: string[] = []

  const nameParenMatch = displayName.match(/\(([^)]+)\)/)
  if (nameParenMatch) {
    flavors.push(...splitFlavorTokens(nameParenMatch[1]))
    displayName = displayName.replace(/\s*\([^)]*\)/, "").trim()
  }

  if (displayName.includes(" / ")) {
    const parts = displayName.split(" / ").map((part) => part.trim()).filter(Boolean)
    if (parts.length > 1) {
      displayName = parts[0]
      flavors.push(...parts.slice(1))
    }
  }

  const descParenMatch = workingDescription.match(/\(([^)]+)\)/)
  if (descParenMatch) {
    flavors.push(...splitFlavorTokens(descParenMatch[1]))
    workingDescription = workingDescription.replace(/\s*\([^)]*\)/, "").trim()
  }

  const hasVolume = /\d/.test(workingDescription) && /\b(l|ml|g)\b/i.test(workingDescription)
  const volume = hasVolume ? workingDescription : ""

  if (!hasVolume && workingDescription.includes(",")) {
    flavors.push(...splitFlavorTokens(workingDescription))
    workingDescription = ""
  }

  if (hasVolume) {
    workingDescription = ""
  }

  return {
    displayName,
    volume,
    description: workingDescription,
    flavors: Array.from(new Set(flavors)).slice(0, 4),
  }
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
                  className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
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
              key={activeCategory}
              className={`mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {previewItems.map((item, index) => (
                <article
                  key={item.name}
                  className="h-full p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 animate-in fade-in-0 slide-in-from-bottom-2"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mt-1 flex items-start justify-between gap-3">
                    <h3 className="font-medium text-lg text-foreground">{getItemMeta(item.name, item.description).displayName}</h3>
                    <span className="text-sm font-semibold text-accent whitespace-nowrap">
                      {normalizePrice(item.price)}{getItemMeta(item.name, item.description).volume ? ` / ${getItemMeta(item.name, item.description).volume}` : ""}
                    </span>
                  </div>

                  {getItemMeta(item.name, item.description).flavors.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {getItemMeta(item.name, item.description).flavors.map((flavor) => (
                        <span
                          key={flavor}
                          className="inline-flex rounded-full border border-border/70 bg-secondary/70 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  )}

                  {getItemMeta(item.name, item.description).description && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {getItemMeta(item.name, item.description).description}
                    </p>
                  )}
                </article>
              ))}

              <Link
                href="/menu"
                className="h-full rounded-2xl bg-primary text-primary-foreground border border-primary/70 p-5 flex flex-col justify-between text-left shadow-lg hover:brightness-110 transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/85">Kompletní nabídka</p>
                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="font-serif text-lg leading-none">Zobrazit více</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
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
                  className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
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
              key={activeCategory + "-items"}
              className={`mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {activeItems.map((item, index) => (
                <article
                  key={item.name}
                  className="group h-full p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 animate-in fade-in-0 slide-in-from-bottom-2"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {getItemMeta(item.name, item.description).displayName}
                    </h3>
                    <span className="text-sm font-medium text-accent whitespace-nowrap">
                      {normalizePrice(item.price)}{getItemMeta(item.name, item.description).volume ? ` / ${getItemMeta(item.name, item.description).volume}` : ""}
                    </span>
                  </div>

                  {getItemMeta(item.name, item.description).flavors.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {getItemMeta(item.name, item.description).flavors.map((flavor) => (
                        <span
                          key={flavor}
                          className="inline-flex rounded-full border border-border/70 bg-secondary/70 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  )}

                  {getItemMeta(item.name, item.description).description && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {getItemMeta(item.name, item.description).description}
                    </p>
                  )}
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
