"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    name: "Laskonka & Cappuccino",
    description:
      "Our signature pairing—delicate meringue meets velvety espresso",
    image: "/images/laskonka.jpg",
    tag: "Fan Favorite",
  },
  {
    name: "Pumpkin Latte",
    description: "Seasonal spiced perfection with homemade pumpkin purée",
    image: "/images/pumpkin-latte.jpg",
    tag: "Seasonal",
  },
  {
    name: "Fresh Lemonades",
    description: "Hand-squeezed daily with fresh herbs and natural sweeteners",
    image: "/images/lemonade.jpg",
    tag: "Refreshing",
  },
  {
    name: "Artisan Ice Cream",
    description: "Creamy, dreamy, and made with local ingredients",
    image: "/images/ice-cream.jpg",
    tag: "Sweet Treat",
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
            Popular Picks
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            What our guests love
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Discover the flavors that keep our guests coming back
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.name}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                  {item.tag}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-medium text-card">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-card/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
