import Link from "next/link"

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/galerie", label: "Galerie" },
  { href: "/dorty", label: "Dorty" },
  { href: "/darkove-poukazy", label: "Dárkové poukazy" },
  { href: "/#visit", label: "Kontakt" },
]

const socials = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "mailto:gramkafe@seznam.cz", label: "gramkafe@seznam.cz" },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Tagline */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold text-foreground"
            >
              Gram kafe
            </Link>
            <p className="mt-2 text-muted-foreground text-sm">
              Útulné místo pro kávu, dezerty a příjemná setkání
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Po - Ne: 8:00 - 20:00</p>
            <p className="text-sm text-muted-foreground">Cenové rozpětí: 100 - 200 Kč na osobu</p>
            <p className="text-sm text-muted-foreground">Olomouc, Česká republika</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
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

          {/* Socials */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gram Kafe. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
