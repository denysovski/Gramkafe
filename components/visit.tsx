"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, CreditCard, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [timerKey, setTimerKey] = useState(0)
  const [progress, setProgress] = useState(0)
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
    const durationMs = 5000
    const startedAt = Date.now()

    setProgress(0)

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startedAt
      const ratio = Math.min(elapsed / durationMs, 1)
      setProgress(ratio * 100)

      if (ratio >= 1) {
        clearInterval(progressTimer)
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        setTimerKey((prev) => prev + 1)
      }
    }, 50)

    return () => clearInterval(progressTimer)
  }, [activeTestimonial, timerKey])

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index)
    setTimerKey((prev) => prev + 1)
  }

  const goToPrevious = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimerKey((prev) => prev + 1)
  }

  const goToNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    setTimerKey((prev) => prev + 1)
  }

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
              Stavte se na kávu i chvíli klidu
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Najdete nás přímo v Třešti. Ať už se stavíte na rychlé espresso,
              schůzku s přáteli nebo klidné odpoledne, rádi Vás přivítáme.
            </p>

            {/* Info Cards */}
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Otevírací doba</h3>
                  <p className="mt-1 text-muted-foreground">
                    Otevřeno každý den od 8:00 do 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Cenové rozpětí</h3>
                  <p className="mt-1 text-muted-foreground">
                    100 - 200 Kč na osobu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Přijímáme hotovost i karty
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
                    Nádražní 448/2, 589 01 Třešť
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Parkování v okolí je snadno dostupné
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
                className="rounded-full border-[#6F4E37]/60 bg-transparent text-foreground hover:bg-[#6F4E37] hover:text-white px-8 transition-all duration-300"
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
                src="https://www.google.com/maps?q=N%C3%A1dra%C5%BEn%C3%AD%20448%2F2%2C%20589%2001%20T%C5%99e%C5%A1%C5%A5&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <Link
                href="https://maps.google.com/?q=N%C3%A1dra%C5%BEn%C3%AD%20448%2F2%2C%20589%2001%20T%C5%99e%C5%A1%C5%A5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-300"
              >
                Otevřít v Google Maps
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground text-center">
            Co o nás říkají hosté
          </h3>
          <p className="mt-3 text-center text-muted-foreground">
            Automaticky posouvaný výběr recenzí
          </p>

          {/* Desktop: Arrows outside, narrow card */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Předchozí recenze"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-card text-foreground shadow-sm border border-border/60 hover:bg-[#6F4E37] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm max-w-2xl flex-1">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <article key={item.name} className="w-full shrink-0 p-10">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed">"{item.text}"</p>
                    <p className="mt-4 text-sm uppercase tracking-widest text-primary">{item.name}</p>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Další recenze"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-card text-foreground shadow-sm border border-border/60 hover:bg-[#6F4E37] hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile: Arrows inside, full width */}
          <div className="md:hidden mt-8">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Předchozí recenze"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-card/95 text-foreground shadow-sm border border-border/60 hover:bg-[#6F4E37] hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Další recenze"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-card/95 text-foreground shadow-sm border border-border/60 hover:bg-[#6F4E37] hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <article key={item.name} className="w-full shrink-0 p-6 sm:p-8">
                    <p className="text-base sm:text-lg text-foreground leading-relaxed">"{item.text}"</p>
                    <p className="mt-4 text-sm uppercase tracking-widest text-primary">{item.name}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Indicators below */}
          <div className="mt-5 flex items-center justify-center gap-2" aria-label="Indikátor recenzí">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goToTestimonial(index)}
                className={`relative h-2.5 cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "w-8 bg-[#ddcbb8]"
                    : "w-2.5 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Přejít na recenzi ${index + 1}`}
              >
                {index === activeTestimonial && (
                  <span
                    className="absolute left-0 top-0 h-full rounded-full bg-[#6F4E37] transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
