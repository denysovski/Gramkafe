"use client"

import { ArrowUp } from "lucide-react"

export function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Zpět nahoru"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#6F4E37] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#5f412d]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
