"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const images = [
  { src: "/images/cappuccino.jpg", alt: "Cappuccino with latte art" },
  { src: "/images/laskonka.jpg", alt: "Homemade laskonka dessert" },
  { src: "/images/interior.jpg", alt: "Cozy café interior" },
  { src: "/images/pumpkin-latte.jpg", alt: "Seasonal pumpkin latte" },
  { src: "/images/lemonade.jpg", alt: "Fresh homemade lemonade" },
  { src: "/images/outdoor.jpg", alt: "Outdoor seating area" },
]

export function Gallery() {
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
      id="gallery"
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
            Gallery
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            A glimpse into our world
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              } transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`relative ${
                  index === 0 || index === 5
                    ? "aspect-[3/4]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
