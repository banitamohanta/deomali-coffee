"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const handleScrollToMenu = () => {
    const element = document.querySelector("#menu")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&q=80"
          alt="Coffee roasting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-transparent to-espresso-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm tracking-[0.3em] uppercase text-cream-300 border border-cream-300/30 rounded-full">
            Est. 2024 • Jagamara, Bhubaneswar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight mb-6"
        >
          Brewing Excellence,
          <br />
          <span className="text-forest-400">Rooted in Odisha.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-cream-200/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the finest single-origin Arabica from the pristine hills of Koraput.
          Roasted right here in Jagamara.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={handleScrollToMenu}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-cream-50 text-espresso-900 font-medium rounded-full hover:bg-forest-600 hover:text-cream-50 transition-all duration-300 shadow-lg"
          >
            View Menu
            <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream-300/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cream-300 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
