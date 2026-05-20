"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Coffee, Snowflake, Milk, Croissant } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "hot", label: "Hot Coffees", icon: Coffee },
  { id: "cold", label: "Cold Brews", icon: Snowflake },
  { id: "frappe", label: "Frappes", icon: Milk },
  { id: "bites", label: "Quick Bites", icon: Croissant },
]

const menuItems = {
  hot: [
    { name: "Espresso", desc: "Single / Double", price: "₹ 130 / ₹ 160" },
    { name: "Filter Coffee", desc: "Traditional South Indian style", price: "₹ 190" },
    { name: "Americano", desc: "Espresso with hot water", price: "₹ 180" },
    { name: "Cafe Latte", desc: "Regular", price: "₹ 200" },
    { name: "Cappuccino", desc: "Espresso with steamed milk foam", price: "₹ 200" },
    { name: "Mocha", desc: "Chocolate meets espresso", price: "₹ 220" },
    { name: "Flat White", desc: "Velvety microfoam", price: "₹ 210" },
  ],
  cold: [
    { name: "Vietnamese Cold Coffee", desc: "Sweet condensed milk", price: "₹ 260" },
    { name: "Caramel Cold Coffee", desc: "Buttery caramel swirl", price: "₹ 260" },
    { name: "Hazelnut Iced Latte", desc: "Nutty and refreshing", price: "₹ 270" },
    { name: "Classic Cold Brew", desc: "12-hour steeped", price: "₹ 220" },
    { name: "Irish Black Coffee", desc: "Served cold with a twist", price: "₹ 210" },
  ],
  frappe: [
    { name: "Classic Frappe", desc: "Blended coffee delight", price: "₹ 250" },
    { name: "Choco Chip Mocha Frappe", desc: "Indulgent chocolate chips", price: "₹ 280" },
    { name: "Vanilla Bean Shake", desc: "Creamy vanilla blend", price: "₹ 220" },
  ],
  bites: [
    { name: "Butter Croissant", desc: "Flaky French pastry", price: "₹ 150" },
    { name: "Choco Lava Cake", desc: "Warm gooey center", price: "₹ 180" },
    { name: "Grilled Chicken Sandwich", desc: "Herb-marinated", price: "₹ 220" },
    { name: "Peri Peri Fries", desc: "Spicy seasoned", price: "₹ 160" },
    { name: "Garlic Bread with Cheese", desc: "Classic comfort", price: "₹ 190" },
  ],
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("hot")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-forest-600 mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-900 mb-4">
            Crafted with Care
          </h2>
          <p className="text-espresso-600 max-w-xl mx-auto">
            Every item is prepared fresh, using locally sourced ingredients and our house-roasted Koraput Arabica.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === cat.id
                  ? "bg-espresso-800 text-cream-50 shadow-lg"
                  : "bg-cream-200 text-espresso-700 hover:bg-espresso-100"
              )}
            >
              <cat.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-cream-100 rounded-xl p-5 sm:p-6 border border-espresso-100 hover:border-espresso-200 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-espresso-900 group-hover:text-espresso-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-espresso-500 mt-1">{item.desc}</p>
                  </div>
                  <span className="font-display text-lg font-bold text-forest-700 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <div className="mt-3 h-px bg-espresso-100 group-hover:bg-espresso-200 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
