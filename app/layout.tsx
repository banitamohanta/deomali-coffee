import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Deomali Coffee Cafe & Roastery | Bhubaneswar",
  description: "Premium single-origin Arabica from Koraput hills. Roasted in-house in Jagamara, Bhubaneswar. Experience the finest specialty coffee in Odisha.",
  keywords: ["coffee", "cafe", "roastery", "Bhubaneswar", "Odisha", "Koraput", "Arabica", "specialty coffee"],
  openGraph: {
    title: "Deomali Coffee Cafe & Roastery",
    description: "Brewing Excellence, Rooted in Odisha",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
