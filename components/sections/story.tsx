"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Leaf, Heart } from "lucide-react"

export function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" className="py-20 sm:py-28 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a2c17' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
                alt="Coffee plantation in hills"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/30 to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-cream-50 p-4 sm:p-6 rounded-xl shadow-xl border border-espresso-100 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-forest-600" />
                <span className="text-xs font-medium text-espresso-700 uppercase tracking-wider">Origin</span>
              </div>
              <p className="font-display text-lg sm:text-xl font-bold text-espresso-900">Koraput Hills</p>
              <p className="text-xs text-espresso-500 mt-1">Odisha, India</p>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-forest-600 mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-900 mb-6 leading-tight">
              From the Highest Peak of Odisha
            </h2>
            <div className="space-y-4 text-espresso-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                Named after the highest peak in Odisha, Deomali Coffee was born from a passion for local produce. We source our beans directly from the tribal farmers of Koraput, ensuring sustainable practices and a fair trade ecosystem.
              </p>
              <p className="text-base sm:text-lg">
                Every batch is roasted in-house in Bhubaneswar to bring you a cup that is fresh, ethical, and uniquely ours.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-espresso-200">
              {[
                { icon: Leaf, label: "Sustainable", sub: "Eco-friendly sourcing" },
                { icon: Heart, label: "Fair Trade", sub: "Supporting farmers" },
                { icon: MapPin, label: "Local", sub: "Odisha grown" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-forest-100 mb-2">
                    <item.icon className="h-5 w-5 text-forest-700" />
                  </div>
                  <p className="font-medium text-espresso-900 text-sm">{item.label}</p>
                  <p className="text-xs text-espresso-500 mt-0.5">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
