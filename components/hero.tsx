"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, House, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text and actions */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block mb-6 text-sm font-medium tracking-widest uppercase text-primary">
              Vítejte v
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground text-balance">
              Útulném místě pro skvělou kávu a sladké chvíle
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Výběrová káva, domácí dezerty a nápoje, které si zamilujete.
              Přijďte zpomalit, odpočinout si a užít si příjemnou atmosféru.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#6F4E37] text-white hover:bg-[#5f412d] px-8 py-6 text-base transition-all duration-300"
              >
                <Link href="/menu">Zobrazit menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#6F4E37]/60 bg-transparent text-foreground hover:bg-[#6F4E37] hover:text-white px-8 py-6 text-base transition-all duration-300"
              >
                <Link href="#visit">Navštivte nás</Link>
              </Button>
            </div>
          </div>

          {/* Right: rounded image */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.25rem] border border-border/40 shadow-2xl group">
              <Image
                src="/Gramkafe/images/hero-landing.jpg"
                alt="Interiér kavárny Gram Kafé"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
              {/* Google Rating Badge */}
              <Link
                href="https://maps.app.goo.gl/mm6e2mkiX1HUnzvd9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zobrazit hodnocení na Google"
                className="absolute top-4 right-4 cursor-pointer rounded-2xl border border-white/80 bg-white/95 shadow-xl backdrop-blur-sm px-4 py-3 flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 font-bold text-[22px] leading-none">★</span>
                    <span className="font-bold text-gray-900 text-[20px] leading-none">4,7</span>
                  </div>
                  <span className="text-gray-700 text-[16px] leading-tight">300+ hodnocení</span>
                </div>
              </Link>

              <div className="absolute bottom-4 left-4 flex items-end gap-2 md:gap-3 text-muted-foreground">
                <div className="flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full border-2 border-[#6F4E37] bg-white/95 text-center backdrop-blur-sm shadow-lg animate-in fade-in-0 slide-in-from-bottom-3 animation-duration-[700ms] transition-[background-color,border-color,color] duration-120 ease-linear hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]">
                  <Award className="mb-1 h-4 w-4 md:h-5 md:w-5 transition-colors duration-120 ease-linear" />
                  <p className="text-sm md:text-base font-semibold leading-tight">10+ let</p>
                  <p className="text-[11px] md:text-xs leading-tight">zkušeností</p>
                </div>
                <div
                  className="flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full border-2 border-[#6F4E37] bg-white/95 text-center backdrop-blur-sm shadow-lg animate-in fade-in-0 slide-in-from-bottom-3 animation-duration-[700ms] transition-[background-color,border-color,color] duration-120 ease-linear hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]"
                  style={{ animationDelay: "150ms" }}
                >
                  <House className="mb-1 h-4 w-4 md:h-5 md:w-5 transition-colors duration-120 ease-linear" />
                  <p className="text-sm md:text-base font-semibold leading-tight">domácí</p>
                  <p className="text-[11px] md:text-xs leading-tight">výroba</p>
                </div>
                <div
                  style={{ animationDelay: "300ms" }}
                  className="flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full border-2 border-[#6F4E37] bg-white/95 text-center backdrop-blur-sm shadow-lg animate-in fade-in-0 slide-in-from-bottom-3 animation-duration-[700ms] transition-[background-color,border-color,color] duration-120 ease-linear hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]"
                >
                  <Coffee className="mb-1 h-4 w-4 md:h-5 md:w-5 transition-colors duration-120 ease-linear" />
                  <p className="text-sm md:text-base font-semibold leading-tight">moderní</p>
                  <p className="text-[11px] md:text-xs leading-tight">prostory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}






