"use client"

import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reviews = [
  {
    text: "Skvělá atmosféra, výborná káva a laskonka, kterou musíte ochutnat.",
    author: "Marie K.",
    rating: 5,
  },
  {
    text: "Do Gram Kafé chodím pravidelně. Chai latte mě nikdy nezklame.",
    author: "Tomáš V.",
    rating: 5,
  },
  {
    text: "Obsluha je vždy milá a káva chutná skvěle. Můj oblíbený podnik.",
    author: "Anna M.",
    rating: 5,
  },
  {
    text: "Ideální místo na schůzku i na práci. Vždy se zdržím déle, než plánuji.",
    author: "Jakub P.",
    rating: 5,
  },
]

export function Reviews() {
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
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Rating Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.7 / 5</span>
            <span className="text-muted-foreground text-sm">
              (300+ hodnocenĂ­)
            </span>
          </div>
          <h2 className="mt-8 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            HostĂ© nĂˇs doporuÄŤujĂ­
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.author}
              className={`p-6 bg-card rounded-2xl border border-border/50 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">{review.text}</p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                â€” {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
