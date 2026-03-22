"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, CreditCard } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Klara N.",
    text: "Miluju zdejší kávu i personál. Nejlepší zastávka cestou do práce.",
  },
  {
    name: "Marek T.",
    text: "Skvělá kombinace příjemné atmosféry, dezertů a poctivého espressa.",
  },
  {
    name: "Eva R.",
    text: "Víkendové snídaně a panini jsou tady top. Vždy se rádi vracíme.",
  },
  {
    name: "Daniela P.",
    text: "Příjemné místo na schůzky i klidné odpoledne. Doporučuji.",
  },
  {
    name: "Petra S.",
    text: "Skvělé prostředí, milá obsluha a výborné dezerty. Ráda se vracím.",
  },
]

export function Visit() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} id="visit" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Kontakt
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
              Stavte se na kĂˇvu i chvĂ­li klidu
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Najdete nĂˇs v centru mÄ›sta. AĹĄ uĹľ se stavĂ­te na rychlĂ© espresso,
              schĹŻzku s pĹ™Ăˇteli nebo klidnĂ© odpoledne, rĂˇdi vĂˇs pĹ™ivĂ­tĂˇme.
            </p>

            {/* Info Cards */}
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">OtevĂ­racĂ­ doba</h3>
                  <p className="mt-1 text-muted-foreground">
                    OtevĹ™eno kaĹľdĂ˝ den do 20:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Po - Ne: 8:00 - 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">CenovĂ© rozpÄ›tĂ­</h3>
                  <p className="mt-1 text-muted-foreground">
                    100 - 200 KÄŤ na osobu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PĹ™ijĂ­mĂˇme hotovost i karty
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Lokalita</h3>
                  <p className="mt-1 text-muted-foreground">
                    V samĂ©m srdci mÄ›sta
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ParkovĂˇnĂ­ v okolĂ­ je snadno dostupnĂ©
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                <Link href="/menu">Zobrazit menu</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 px-8"
              >
                <Link
                  href="mailto:gramkafe@seznam.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gramkafe@seznam.cz
                </Link>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="aspect-4/5 lg:aspect-4/5 rounded-3xl overflow-hidden border border-border/50 shadow-lg">
              <iframe
                title="Mapa Gram Kafé"
                src="https://www.google.com/maps?q=Olomouc&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground text-center">
            Co o nĂˇs Ĺ™Ă­kajĂ­ hostĂ©
          </h3>
          <p className="mt-3 text-center text-muted-foreground">
            Automaticky posouvanĂ˝ vĂ˝bÄ›r recenzĂ­
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article key={item.name} className="w-full shrink-0 p-8 md:p-10">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">"{item.text}"</p>
                  <p className="mt-4 text-sm uppercase tracking-widest text-primary">{item.name}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2" aria-label="IndikĂˇtor recenzĂ­">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
                }`}
                aria-label={`PĹ™ejĂ­t na recenzi ${index + 1}`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-sm text-muted-foreground">
            Recenze {activeTestimonial + 1} z {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
