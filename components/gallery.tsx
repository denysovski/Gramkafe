"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    alt: "Latte art zblízka",
    caption: "Precizní latte art každý den",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    alt: "Barista připravuje espresso",
    caption: "Výběrová zrna a poctivá příprava",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    alt: "Interiér kavárny",
    caption: "Útulný interiér Gram Kafé",
  },
  {
    src: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80",
    alt: "Šálek horké kávy",
    caption: "Místo, kde se zpomaluje",
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    alt: "Káva a dezert",
    caption: "Káva a sladké potěšení",
  },
  {
    src: "https://images.unsplash.com/photo-1461988091159-192b6df7054f?auto=format&fit=crop&w=1200&q=80",
    alt: "Posezení venku před kavárnou",
    caption: "Příjemné posezení i venku",
  },
]

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex])

  return (
    <section ref={sectionRef} id="gallery" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Galerie
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            NĂˇhled do svÄ›ta Gram Kafé
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              } transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } text-left`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`relative ${
                  index === 0 || index === 5
                    ? "aspect-3/4"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-xs md:text-sm text-white/95 font-medium drop-shadow-sm">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-70 bg-black/85 backdrop-blur-sm p-4 md:p-10">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="ZavĹ™Ă­t nĂˇhled"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === null ? 0 : (prev - 1 + images.length) % images.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="PĹ™edchozĂ­ obrĂˇzek"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="DalĹˇĂ­ obrĂˇzek"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
            <div className="relative h-[75vh] w-full overflow-hidden rounded-2xl border border-white/15">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 md:p-6">
                <p className="text-white text-sm md:text-base">{images[activeIndex].caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
