"use client"

import Image from "next/image"
import { Coffee, Heart, Sparkles, Leaf } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Coffee,
    title: "VĂ˝bÄ›rovĂˇ kĂˇva",
    description:
      "PeÄŤlivÄ› vybranĂˇ zrna, citlivĂ© praĹľenĂ­ a preciznĂ­ pĹ™Ă­prava.",
  },
  {
    icon: Heart,
    title: "DomĂˇcĂ­ dezerty",
    description:
      "KaĹľdĂ˝ den ÄŤerstvÄ› pĹ™ipravenĂ© sladkosti z kvalitnĂ­ch surovin.",
  },
  {
    icon: Sparkles,
    title: "SpeciĂˇlnĂ­ nĂˇpoje",
    description:
      "NetradiÄŤnĂ­ limonĂˇdy, ÄŤaje a sezĂłnnĂ­ speciality, kterĂ© stojĂ­ za ochutnĂˇnĂ­.",
  },
  {
    icon: Leaf,
    title: "PĹ™Ă­jemnĂˇ atmosfĂ©ra",
    description:
      "MĂ­sto, kde si odpoÄŤinete, zpomalĂ­te a uĹľijete si pĹ™Ă­tomnĂ˝ okamĹľik.",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-4/5 relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
                alt="ĂštulnĂ˝ interiĂ©r kavĂˇrny"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              NĂˇĹˇ pĹ™Ă­bÄ›h
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
              MĂ­sto, kde mĂˇ kaĹľdĂ˝ ĹˇĂˇlek svĹŻj pĹ™Ă­bÄ›h
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              V Gram Kafé vÄ›Ĺ™Ă­me na jednoduchĂ© radosti: dobĹ™e pĹ™ipravenou kĂˇvu,
              poctivĂ˝ dezert a pĹ™Ă­jemnou spoleÄŤnost. Jsme mĂ­sto, kde se dĂˇ na
              chvĂ­li vypnout od kaĹľdodennĂ­ho ruchu.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              NabĂ­zĂ­me ĹˇirokĂ˝ vĂ˝bÄ›r nĂˇpojĹŻ od klasickĂ©ho espressa aĹľ po sezĂłnnĂ­
              speciality a domĂˇcĂ­ limonĂˇdy. KaĹľdĂ© rĂˇno navĂ­c pĹ™ipravujeme
              ÄŤerstvĂ© dezerty, kterĂ© se skvÄ›le hodĂ­ ke kaĹľdĂ©mu setkĂˇnĂ­.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
