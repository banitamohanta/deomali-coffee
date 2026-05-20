"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle } from "lucide-react"

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer id="visit" className="bg-espresso-950 text-cream-200 relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-800 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-display text-2xl font-bold text-cream-50 mb-2">Deomali</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-cream-400 mb-4">Coffee Cafe & Roastery</p>
            <p className="text-sm text-cream-400 leading-relaxed">
              Bringing the finest Koraput Arabica to Bhubaneswar. Roasted fresh, served with love.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-forest-400" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-cream-400">Visit Us</span>
            </div>
            <p className="text-sm text-cream-200 leading-relaxed">
              1st floor, Plot 681
              <br />
              Khandagiri Marg
              <br />
              Jagamara, Bhubaneswar
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-forest-400" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-cream-400">Open Hours</span>
            </div>
            <p className="text-sm text-cream-200 leading-relaxed">
              Monday to Sunday
              <br />
              <span className="font-semibold text-cream-100">9 AM to 10 PM</span>
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-4 w-4 text-forest-400" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-cream-400">Connect</span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center hover:bg-forest-800 hover:border-forest-700 transition-all duration-300"
              >
                <Instagram className="h-4 w-4 text-cream-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center hover:bg-forest-800 hover:border-forest-700 transition-all duration-300"
              >
                <Facebook className="h-4 w-4 text-cream-300" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center hover:bg-forest-800 hover:border-forest-700 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 text-cream-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-espresso-900 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-cream-500">
            © 2024 Deomali Coffee. All rights reserved.
          </p>
          <p className="text-xs text-cream-500">
            Crafted with ❤️ in Odisha
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
