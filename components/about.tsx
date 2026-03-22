"use client"

import Image from "next/image"
import { Coffee, Heart, Sparkles, Leaf } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description:
      "Carefully sourced beans, expertly roasted and brewed to perfection.",
  },
  {
    icon: Heart,
    title: "Homemade Desserts",
    description:
      "Freshly baked treats made daily with quality ingredients and love.",
  },
  {
    icon: Sparkles,
    title: "Signature Drinks",
    description:
      "Unique lemonades, teas, and specialty drinks you won't find elsewhere.",
  },
  {
    icon: Leaf,
    title: "Cozy Atmosphere",
    description:
      "A warm, welcoming space where you can relax and enjoy the moment.",
  },
]

export function About() {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden">
              <Image
                src="/images/interior.jpg"
                alt="Cozy interior of Gram kafé"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
              A place where every cup tells a story
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Gram kafé, we believe in the simple pleasures of life—a
              perfectly brewed coffee, a slice of homemade cake, and good
              company. Our doors are always open to those seeking a moment of
              peace in their busy day.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              With a wide selection of specialty drinks, from seasonal pumpkin
              lattes to refreshing homemade lemonades, and desserts crafted
              fresh every morning, we invite you to slow down and savor the
              moment.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
