"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Visit Us", href: "#visit" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-espresso-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-espresso-800 border-2 border-espresso-600">
                {/* Placeholder for cafe logo - replace src with actual logo */}
                <img
                  src="/images/logo-placeholder.svg"
                  alt="Deomali Coffee Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-full text-cream-100"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6.01" y1="1" y2="4"/><line x1="10" x2="10.01" y1="1" y2="4"/><line x1="14" x2="14.01" y1="1" y2="4"/></svg></div>'
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "font-display text-lg sm:text-xl font-bold tracking-tight transition-colors",
                  scrolled ? "text-espresso-900" : "text-cream-50"
                )}>
                  Deomali
                </span>
                <span className={cn(
                  "block text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors",
                  scrolled ? "text-espresso-600" : "text-cream-300"
                )}>
                  Coffee & Roastery
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-forest-600 relative group",
                    scrolled ? "text-espresso-700" : "text-cream-100"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-forest-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-espresso-800 hover:bg-espresso-100" : "text-cream-100 hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-espresso-950/98 backdrop-blur-lg pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-display text-3xl text-cream-100 hover:text-forest-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
