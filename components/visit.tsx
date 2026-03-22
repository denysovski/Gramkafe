"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, CreditCard } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Visit() {
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
              Visit Us
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
              We would love to see you
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Drop by for your daily dose of coffee, a sweet escape, or simply
              a cozy corner to relax. Our doors are always open.
            </p>

            {/* Info Cards */}
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Opening Hours</h3>
                  <p className="mt-1 text-muted-foreground">
                    Open daily until 20:00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mon – Sun: 8:00 – 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Price Range</h3>
                  <p className="mt-1 text-muted-foreground">
                    100–200 Kč per person
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cash and cards accepted
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="mt-1 text-muted-foreground">
                    Find us in the heart of the city
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Easy parking nearby
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
                <Link href="#menu">View Menu</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 px-8"
              >
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-secondary border border-border/50">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Find Us Here
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Interactive map coming soon
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="mt-4 text-primary"
                  >
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
