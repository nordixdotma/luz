"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop className="w-full h-full object-cover" poster="/hero-background.jpg">
          <source src="/hero-background.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Build Something Amazing
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 text-balance max-w-2xl mx-auto">
          Create beautiful, responsive web experiences with our modern platform. Get started in minutes, not days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white text-white hover:bg-white/10 bg-transparent"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
