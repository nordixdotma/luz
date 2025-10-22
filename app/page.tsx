import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PriceSection from "@/components/price-section"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <PriceSection />
      <Testimonials />
      <Footer />
    </main>
  )
}
