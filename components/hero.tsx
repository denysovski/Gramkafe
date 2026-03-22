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
              Welcome to
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground text-balance">
              Your cozy place for coffee & sweet moments
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Premium coffee, homemade desserts, and signature drinks crafted
              with love in a warm, inviting atmosphere.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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

          {/* Right: rounded image */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] border border-border/40 shadow-2xl">
              <Image
                src="/images/hero-coffee.jpg"
                alt="Coffee shop interior and bar setup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
