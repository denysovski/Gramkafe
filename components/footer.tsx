import Link from "next/link"
import { Clock3, Coffee, CreditCard, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/galerie", label: "Galerie" },
  { href: "/dorty", label: "Dorty" },
  { href: "/darkove-poukazy", label: "DĂˇrkovĂ© poukazy" },
  { href: "/kontakt", label: "Kontakt" },
]

const socials = [
  { href: "https://www.facebook.com/p/Gram-kaf%C3%A9-T%C5%99e%C5%A1%C5%A5-100046894040066/", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/gramkafe/", label: "Instagram", icon: Instagram },
  { href: "mailto:gramkafe@seznam.cz", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 font-serif text-2xl font-semibold text-foreground">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Coffee className="h-5 w-5" />
              </span>
              Gram KafĂ©
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              ĂštulnĂ© mĂ­sto pro vĂ˝bÄ›rovou kĂˇvu, dezerty a pĹ™Ă­jemnĂˇ setkĂˇnĂ­ v centru Olomouce.
            </p>
            <a
              href="tel:+420000000000"
              className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              +420 000 000 000
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/80">Navigace</h3>
            <div className="mt-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/60 bg-card p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock3 className="h-4 w-4 text-primary" />
                OtevĂ­racĂ­ doba
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Po-Ne: 08:00-20:00</p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <CreditCard className="h-4 w-4 text-primary" />
                CenovĂ© rozpÄ›tĂ­
              </p>
              <p className="mt-2 text-sm text-muted-foreground">100-200 KÄŤ na osobu</p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Lokalita
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Olomouc, ÄŚeskĂˇ republika</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#6F4E37] text-white hover:bg-[#5f412d] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            Â© {new Date().getFullYear()} Gram KafĂ©. VĹˇechna prĂˇva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
