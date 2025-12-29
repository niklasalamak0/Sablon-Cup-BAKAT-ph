import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import VideoSection from "@/components/video-section"
import PortfolioSection from "@/components/portfolio-section"
import ProcessSection from "@/components/process-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <PortfolioSection />
      <ProcessSection />
      <Footer />
    </main>
  )
}
