"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    name: "Pistáciový dort s kyselou malinou",
    description:
      "Krémový pistáciový základ s výrazným malinovým akcentem pro perfektně vyváženou chuť.",
    image: "images/showcase1.jpg",
    tag: "Dort",
    href: "/dorty",
  },
  {
    name: "Orange Cold Brew Coffee",
    description: "Osvěžující kombinace cold brew kávy a pomeranče s čistým, lehce citrusovým dozvukem.",
    image: "images/showcase2.jpg",
    tag: "Cold Brew",
    href: "/menu",
  },
  {
    name: "Valentýnské red velvet srdce",
    description: "Limitovaná sladká specialita s jemným krémem, která potěší na první pohled i ochutnání.",
    image: "images/showcase3.jpg",
    tag: "Limitka",
    href: "/dorty",
  },
  {
    name: "Chai latte",
    description: "Aromatický čaj s kořením a sametovým mlékem, ideální pro pomalejší odpoledne.",
    image: "images/showcase4.jpg",
    tag: "Teplé nápoje",
    href: "/menu",
  },
]

export function Highlights() {
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

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Top výběr
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            Co naši hosté milují
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Chutě, kvůli kterým se k nám hosté rádi vracejí
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              aria-label={`Zobrazit více: ${item.name}`}
            >
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                  {item.tag}
                </span>

                <span className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground transition-all duration-300 group-hover:bg-[#6F4E37] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-medium text-card">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-card/90">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

