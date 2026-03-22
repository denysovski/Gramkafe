"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="Premium coffee and desserts at Gram kafé"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block mb-6 text-sm font-medium tracking-widest uppercase text-primary">
          Welcome to
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight text-foreground text-balance">
          Your cozy place for coffee & sweet moments
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Premium coffee, homemade desserts, and signature drinks crafted with
          love in a warm, inviting atmosphere.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base transition-all duration-300 hover:scale-105"
          >
            <Link href="#menu">View Menu</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-base transition-all duration-300"
          >
            <Link href="#visit">Visit Us</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
