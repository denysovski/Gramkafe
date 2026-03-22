"use client"

import { useState, useEffect, useRef } from "react"
import { Coffee, GlassWater, Cake, IceCream } from "lucide-react"

const categories = [
  {
    id: "coffee",
    name: "Coffee",
    icon: Coffee,
    items: [
      {
        name: "Espresso",
        description: "Rich and bold, the classic Italian way",
        price: "65 Kč",
      },
      {
        name: "Cappuccino",
        description: "Velvety foam meets perfect espresso",
        price: "95 Kč",
      },
      {
        name: "Latte",
        description: "Smooth, creamy, and perfectly balanced",
        price: "105 Kč",
      },
      {
        name: "Flat White",
        description: "Silky microfoam with double shot",
        price: "110 Kč",
      },
      {
        name: "Americano",
        description: "Classic espresso with hot water",
        price: "75 Kč",
      },
    ],
  },
  {
    id: "signature",
    name: "Signature Drinks",
    icon: GlassWater,
    items: [
      {
        name: "Pumpkin Latte",
        description: "Seasonal favorite with warm spices",
        price: "125 Kč",
      },
      {
        name: "Chai Latte",
        description: "Aromatic spices with steamed milk",
        price: "115 Kč",
      },
      {
        name: "Fresh Lemonade",
        description: "Hand-squeezed with fresh mint",
        price: "85 Kč",
      },
      {
        name: "Ginger Tea",
        description: "Warming blend with honey and lemon",
        price: "75 Kč",
      },
      {
        name: "Matcha Latte",
        description: "Premium Japanese matcha, perfectly whisked",
        price: "120 Kč",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: Cake,
    items: [
      {
        name: "Laskonka",
        description: "Delicate meringue with buttercream",
        price: "75 Kč",
      },
      {
        name: "Mechový dort",
        description: "Classic moss cake, rich and creamy",
        price: "95 Kč",
      },
      {
        name: "Banánový dortík",
        description: "Fresh banana with chocolate drizzle",
        price: "85 Kč",
      },
      {
        name: "Míša dort",
        description: "Traditional cream cheese delight",
        price: "90 Kč",
      },
      {
        name: "Cheesecake",
        description: "New York style with berry compote",
        price: "110 Kč",
      },
    ],
  },
  {
    id: "extras",
    name: "Extras",
    icon: IceCream,
    items: [
      {
        name: "Panini",
        description: "Fresh ingredients, grilled to order",
        price: "145 Kč",
      },
      {
        name: "Artisan Ice Cream",
        description: "Two scoops of seasonal flavors",
        price: "85 Kč",
      },
      {
        name: "Milkshake",
        description: "Thick and creamy, various flavors",
        price: "115 Kč",
      },
      {
        name: "Croissant",
        description: "Buttery, flaky, freshly baked",
        price: "65 Kč",
      },
    ],
  },
]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee")
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

  const activeItems =
    categories.find((c) => c.id === activeCategory)?.items || []

  return (
    <section ref={sectionRef} id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Our Menu
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            Crafted with passion, served with love
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From premium espresso to homemade treats, discover your new favorite
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div
          className={`mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {activeItems.map((item, index) => (
            <div
              key={item.name}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="text-sm font-medium text-accent">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Price Note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Average price range: 100–200 Kč per person
        </p>
      </div>
    </section>
  )
}
