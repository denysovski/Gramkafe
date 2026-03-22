"use client"

import Image from "next/image"
import { Coffee, Heart, Sparkles, Leaf } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Coffee,
    title: "Vyberova kava",
    description:
      "Peclive vybrana zrna, citlive prazeni a precizni priprava.",
  },
  {
    icon: Heart,
    title: "Domaci dezerty",
    description:
      "Kazdy den cerstve pripravene sladkosti z kvalitnich surovin.",
  },
  {
    icon: Sparkles,
    title: "Specialni napoje",
    description:
      "Netradicni limonady, caje a sezonni speciality, ktere stoji za ochutnani.",
  },
  {
    icon: Leaf,
    title: "Prijemna atmosfera",
    description:
      "Misto, kde si odpocinete, zpomalite a uzijete si pritomny okamzik.",
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
                alt="Utulny interier kavarny"
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
              Nas pribeh
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
              Misto, kde ma kazdy sacek i kazdy slek svuj pribeh
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              V Gram kafe verime na jednoduche radosti: dobre pripravenou kavu,
              poctivy dezert a prijemnou spolecnost. Jsme misto, kde se da na
              chvili vypnout od kazdodenniho ruchu.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nabizime siroky vyber napoju od klasickeho espressa az po sezonni
              speciality a domaci limonady. Kazde rano navic pripravujeme
              cerstve dezerty, ktere se skvele hodi ke kazdemu setkani.
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
