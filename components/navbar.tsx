"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#home-top", label: "Úvod" },
  { href: "/menu", label: "Menu" },
  { href: "/galerie", label: "Galerie" },
  { href: "/dorty", label: "Dorty" },
  { href: "/darkove-poukazy", label: "Dárkové poukazy" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check initial scroll position on mount (handles page refresh mid-scroll)
    setIsScrolled(window.scrollY > 50)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-serif text-2xl font-semibold tracking-tight text-foreground"
          >
            <Image
              src="/Gramkafe/images/coffee-bean.png"
              alt="Ikona kávového zrnka Gram Kafé"
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 object-contain"
              priority
            />
            Gram Kafé
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden min-[1000px]:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <Link href="/menu">Zobrazit menu</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="min-[1000px]:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`min-[1000px]:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-fit rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>
                Zobrazit menu
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}






