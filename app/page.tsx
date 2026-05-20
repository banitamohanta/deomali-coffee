import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { StorySection } from "@/components/sections/story"
import { MenuSection } from "@/components/sections/menu"
import { FooterSection } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <MenuSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  )
}
