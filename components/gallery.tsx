"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight, Camera, Plus } from "lucide-react"

const images = [
  {
    src: "/images/instagram-gallery-01.jpg",
    alt: "Interiér kavárny Gram Kafé v Třešti",
    caption: "Ranní světlo a první káva dne.",
    year: "2025",
  },
  {
    src: "/images/instagram-gallery-02.jpg",
    alt: "Baristický detail v Gram Kafé",
    caption: "Detail, který dělá atmosféru útulnou.",
    year: "2026",
  },
  {
    src: "/images/instagram-gallery-03.jpg",
    alt: "Posezení a atmosféra kavárny Gram Kafé",
    caption: "Polední pauza, klid a dobrá energie.",
    year: "2025",
  },
  {
    src: "/images/instagram-gallery-04.jpg",
    alt: "Káva servírovaná v Gram Kafé",
    caption: "Káva, která chutná i voní domovem.",
    year: "2026",
  },
  {
    src: "/images/instagram-gallery-05.jpg",
    alt: "Zákusek a káva v Gram Kafé",
    caption: "Odpoledne s dezertem je vždy lepší.",
    year: "2025",
  },
  {
    src: "/images/instagram-gallery-06.jpg",
    alt: "Večerní interiér Gram Kafé",
    year: "2026",
    caption: "Večerní nálada a teplé tóny interiéru.",
  },
  {
    src: "/images/instagram-gallery-07.jpg",
    alt: "Detail servírování v kavárně Gram Kafé",
    caption: "Chvíle, kdy se čas zpomalí.",
    year: "2025",
  },
  {
    src: "/images/instagram-gallery-08.jpg",
    alt: "Stůl s nápojem a dezertem v Gram Kafé",
    caption: "Na stole to hraje barvami i vůní.",
    year: "2026",
  },
  {
    src: "/images/instagram-gallery-09.jpg",
    alt: "Detail kavárenského koutku Gram Kafé",
    caption: "Malý detail, velký dojem.",
    year: "2025",
  },
  {
    src: "/images/instagram-gallery-10.jpg",
    alt: "Stylové prostředí Gram Kafé Třešť",
    caption: "Stylové zákoutí pro vaše setkání.",
    year: "2026",
  },
  {
    src: "/images/instagram-gallery-12.jpg",
    alt: "Večerní moment v Gram Kafé",
    caption: "Finální tečka dne v Gram Kafé.",
    year: "2025",
  },
]

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [renderedIndex, setRenderedIndex] = useState<number | null>(null)
  const [isLightboxVisible, setIsLightboxVisible] = useState(false)
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
      if (renderedIndex === null) return
      if (event.key === "Escape") setIsLightboxVisible(false)
      if (event.key === "ArrowRight") {
        setRenderedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
      }
      if (event.key === "ArrowLeft") {
        setRenderedIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [renderedIndex])

  useEffect(() => {
    if (activeIndex === null) return
    setRenderedIndex(activeIndex)
    const enterTimer = window.setTimeout(() => setIsLightboxVisible(true), 10)
    return () => window.clearTimeout(enterTimer)
  }, [activeIndex])

  useEffect(() => {
    if (isLightboxVisible) return
    if (renderedIndex === null) return

    const closeTimer = window.setTimeout(() => {
      setActiveIndex(null)
      setRenderedIndex(null)
    }, 240)

    return () => window.clearTimeout(closeTimer)
  }, [isLightboxVisible, renderedIndex])

  const openLightbox = (index: number) => {
    setActiveIndex(index)
  }

  const closeLightbox = () => {
    setIsLightboxVisible(false)
  }

  return (
    <section ref={sectionRef} id="gallery" className="py-24 md:py-32 bg-white">
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
            Náhled do světa Gram Kafé
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-6 md:auto-rows-[240px] md:gap-6">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-border/40 shadow-sm transition-all duration-700 ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                    ? "md:col-span-2 md:row-span-2"
                    : index === 2
                      ? "md:col-span-2 md:row-span-2"
                      : index === 3
                        ? "md:col-span-2 md:row-span-2"
                        : index === 4
                          ? "md:col-span-2 md:row-span-2"
                          : "md:col-span-2 md:row-span-2"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } text-left`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`relative ${
                  "aspect-3/4 md:h-full md:aspect-auto"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm">
                  {image.year}
                </span>
                <p className="absolute bottom-[15px] left-[15px] right-3 text-xs md:text-sm text-white/95 font-medium drop-shadow-sm">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}

          <Link
            href="https://www.instagram.com/gramkafe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Označte nás na Instagramu Gram Kafé"
            className="col-span-2 relative overflow-hidden rounded-3xl border border-[#5f412d] bg-[#6F4E37] p-6 text-white shadow-lg md:row-span-2 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="relative mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <Camera className="h-12 w-12" />
                <span className="absolute -right-1 -top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6F4E37]">
                  <Plus className="h-5 w-5" />
                </span>
              </div>
              <h3 className="text-2xl leading-tight">Nevidíte zde svou fotku?</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90 md:text-base">
                Neváhejte a označte nás na Vašem Instagramu nebo Facebooku!
              </p>
            </div>
          </Link>
        </div>
      </div>

      {renderedIndex !== null && (
        <div
          className={`fixed inset-0 z-70 p-4 md:p-10 transition-all duration-300 ${
            isLightboxVisible ? "bg-black/85 opacity-100 backdrop-blur-sm" : "bg-black/0 opacity-0"
          }`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Zavřít náhled"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() =>
              setRenderedIndex((prev) =>
                prev === null ? 0 : (prev - 1 + images.length) % images.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Předchozí obrázek"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() =>
              setRenderedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Další obrázek"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
            <div
              className={`relative h-[75vh] w-full overflow-hidden rounded-2xl border border-white/15 transition-all duration-300 ${
                isLightboxVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[renderedIndex].src}
                alt={images[renderedIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 md:p-6">
                <p className="text-white text-sm md:text-base">{images[renderedIndex].caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


