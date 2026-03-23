"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Clock3, CreditCard, Gift, MapPin, Sparkles } from "lucide-react"

const openingHours = [
  { day: "Pondělí", hours: "08:00-20:00" },
  { day: "Úterý", hours: "08:00-20:00" },
  { day: "Středa", hours: "08:00-20:00" },
  { day: "Čtvrtek", hours: "08:00-20:00" },
  { day: "Pátek", hours: "08:00-20:00" },
  { day: "Sobota", hours: "08:00-20:00" },
  { day: "Neděle", hours: "08:00-20:00" },
]

const tips = [
  {
    icon: Sparkles,
    title: "Kdy dorazit",
    text: "Pro klidnější atmosféru doporučujeme všední dny mezi 13:30-15:30.",
  },
  {
    icon: Gift,
    title: "Doporučení ke kávě",
    text: "K cappuccinu se skvěle hodí domácí zákusek nebo lehký cheesecake dle denní nabídky.",
  },
  {
    icon: Sparkles,
    title: "Objednávky dortů",
    text: "Pro individuální nabídku dortů nám napište e-mail nebo zavolejte a vše spolu doladíme.",
  },
]

export default function KontaktPage() {
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
    <main className="min-h-screen">
      <Navbar />

      <section ref={sectionRef} className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Kontakt</span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground text-balance">
              Vše důležité pro návštěvu Gram Kafé na jednom místě
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Otevírací doba, přehled cen, lokalita a užitečné tipy pro příjemnou návštěvu.
            </p>
          </div>

          <div
            className={`mt-12 grid gap-6 md:grid-cols-3 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <article className="rounded-2xl border border-border/60 bg-card p-6 animate-in fade-in-0 zoom-in-95 duration-300">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Otevírací doba</h2>
              </div>
              <div className="mt-4 space-y-2">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-border/60 bg-card p-6 animate-in fade-in-0 zoom-in-95 duration-300">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Cenové rozpětí</h2>
              </div>
              <p className="mt-4 text-2xl font-sans text-foreground whitespace-nowrap">100-200 Kč / osoba</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Přijímáme hotovost i platební karty, v případě dárkových poukazů zjistěte více {" "}
                <Link href="/darkove-poukazy" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                  zde
                </Link>
                .
              </p>
            </article>

            <article className="rounded-2xl border border-border/60 bg-card p-6 animate-in fade-in-0 zoom-in-95 duration-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Lokalita</h2>
              </div>
              <p className="mt-4 text-foreground">Nádražní 448/2, 589 01 Třešť</p>
              <p className="mt-2 text-sm text-muted-foreground">Dostupné pěšky nedaleko náměstí a autobusového nádraží.</p>
            </article>
          </div>

          <section
            className={`mt-14 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-center font-serif text-3xl md:text-4xl text-foreground">Náš tým</h2>
            <article className="mt-6 rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-sm aspect-4/3">
                  <Image
                    src="images/contact-page-showcase.jpg"
                    alt="Tým Gram Kafé při práci v kavárně"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    V Gram Kafé vás přivítá přátelský tým, který má rád kvalitní kávu i pohodovou atmosféru.
                    Každý den připravujeme nápoje a dezerty s důrazem na chuť, čerstvost a milý přístup.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Rádi vám poradíme s výběrem, doporučíme sladké párování ke kávě a postaráme se, aby se u nás
                    cítili dobře jak pravidelní hosté, tak i ti, kteří přicházejí poprvé.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Za každou objednávkou je zkušenost, pečlivost a skutečný zájem o hosta. Zakládáme si na tom,
                    aby každá návštěva byla příjemná, rychlá a zároveň osobní.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-sm text-foreground">
                      Příjemná obsluha
                    </span>
                    <span className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-sm text-foreground">
                      Profesionalita
                    </span>
                    <span className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-sm text-foreground">
                      Znalost odvětví
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section
            className={`mt-14 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <article className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <h2 className="font-serif text-3xl text-foreground">Friendly tipy</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {tips.map((tip) => (
                  <div key={tip.title} className="rounded-2xl border border-border/60 bg-secondary/40 p-5">
                    <div className="flex items-center gap-2">
                      <tip.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{tip.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <div
            className={`mt-14 overflow-hidden rounded-3xl border border-border/60 shadow-lg transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <iframe
              title="Mapa Gram Kafé"
              src="https://www.google.com/maps?q=N%C3%A1dra%C5%BEn%C3%AD%20448%2F2%2C%20589%2001%20T%C5%99e%C5%A1%C5%A5&output=embed"
              className="h-105 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}





