import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { Footer } from '@/components/layout/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
