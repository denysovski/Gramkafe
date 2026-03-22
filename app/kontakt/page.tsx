"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BadgePercent, Clock3, CreditCard, Gift, MapPin, Sparkles } from "lucide-react"

const openingHours = [
  { day: "Pondělí", hours: "08:00-20:00" },
  { day: "Úterý", hours: "08:00-20:00" },
  { day: "Středa", hours: "08:00-20:00" },
  { day: "Čtvrtek", hours: "08:00-20:00" },
  { day: "Pátek", hours: "08:00-20:00" },
  { day: "Sobota", hours: "08:00-20:00" },
  { day: "Neděle", hours: "08:00-20:00" },
]

const team = [
  {
    name: "Aneta",
    role: "Head Barista",
    note: "Ladí espresso receptury a doporučí ideální kávu podle vaší chuti.",
  },
  {
    name: "Marek",
    role: "Dessert Chef",
    note: "Stará se o denní nabídku dezertů a sezónní sladké speciality.",
  },
  {
    name: "Klára",
    role: "Guest Care",
    note: "Pomůže s výběrem a postará se o pohodovou atmosféru v kavárně.",
  },
  {
    name: "Tomáš",
    role: "Shift Lead",
    note: "Koordinuje provoz a dohlíží na konzistentní kvalitu servisu.",
  },
]

const busyHours = [
  { label: "Po-Pá 10:30-13:00", level: 88 },
  { label: "Po-Pá 16:00-18:00", level: 74 },
  { label: "So-Ne 10:00-12:30", level: 84 },
  { label: "So-Ne 15:30-17:30", level: 68 },
]

const tips = [
  {
    icon: Sparkles,
    title: "Nejoblíbenější drink",
    text: "Dirty Chai latte (99 Kč): skvělá volba, pokud chcete něco výraznějšího než klasické cappuccino.",
  },
  {
    icon: Gift,
    title: "Doporučený dezert",
    text: "Laskonka + cappuccino: osvědčené kombo, které hosté objednávají nejčastěji.",
  },
]

const saleCode = "GRAMKONTAKT10"

export default function KontaktPage() {
  const [activeMember, setActiveMember] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % team.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const member = team[activeMember]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Kontakt</span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-foreground text-balance">
              Vše důležité pro návštěvu Gram Kafe na jednom místě
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Otevírací doba, přehled cen, lokalita, tým i tipy, kdy je nejlepší dorazit.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border/60 bg-card p-6">
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

            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Cenové rozpětí</h2>
              </div>
              <p className="mt-4 text-3xl font-serif text-foreground">100-200 Kč</p>
              <p className="mt-2 text-sm text-muted-foreground">na osobu</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Přijímáme hotovost i platební karty.
              </p>
            </article>

            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Lokalita</h2>
              </div>
              <p className="mt-4 text-foreground">Olomouc, Česká republika</p>
              <p className="mt-2 text-sm text-muted-foreground">V centru města, dobře dostupné pěšky i MHD.</p>
              <p className="mt-2 text-sm text-muted-foreground">Parkování je možné v okolních ulicích.</p>
            </article>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <h2 className="font-serif text-3xl text-foreground">Náš tým</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Karta se automaticky přepíná každých 5 sekund.
              </p>

              <div className="mt-6 rounded-2xl border border-border/60 bg-secondary/40 p-6 min-h-[190px] transition-all duration-500">
                <p className="text-sm uppercase tracking-widest text-primary">{member.role}</p>
                <h3 className="mt-2 font-serif text-3xl text-foreground">{member.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{member.note}</p>
              </div>

              <div className="mt-5 flex items-center gap-2" aria-label="Indikátor člena týmu">
                {team.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveMember(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeMember ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Zobrazit člena ${item.name}`}
                  />
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <h2 className="font-serif text-3xl text-foreground">Nejrušnější hodiny</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Orientační přehled podle veřejně dostupných údajů Google profilu.
              </p>

              <div className="mt-6 space-y-4">
                {busyHours.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-foreground">{item.label}</span>
                      <span className="text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                Tip: Pokud chcete klidnější návštěvu, zkuste dorazit mezi 13:30-15:30.
              </p>
            </article>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-primary/30 bg-primary/10 p-6 lg:col-span-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                <BadgePercent className="h-4 w-4" />
                Sale tip
              </div>
              <h2 className="mt-4 font-serif text-2xl text-foreground">Extra kód na návštěvu</h2>
              <p className="mt-3 text-muted-foreground">U pokladny řekněte tento kód:</p>
              <p className="mt-4 inline-block rounded-lg bg-card px-4 py-2 text-lg font-semibold tracking-wide text-foreground">
                {saleCode}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Platí pro 10% slevu na nealko nápoj při objednávce dezertu.
              </p>
            </article>

            <article className="rounded-2xl border border-border/60 bg-card p-6 lg:col-span-2">
              <h2 className="font-serif text-3xl text-foreground">Friendly tipy od nás</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
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
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border/60 shadow-lg">
            <iframe
              title="Mapa Gram Kafe"
              src="https://www.google.com/maps?q=Olomouc&output=embed"
              className="h-[420px] w-full"
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
