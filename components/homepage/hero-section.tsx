"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 text-balance"
          style={{ mixBlendMode: "difference" }}
        >
          Where the creativity & strategy meet
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 text-balance max-w-2xl mx-auto">
          Create beautiful, responsive web experiences with our modern platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white text-black hover:text-black bg-white hover:bg-white"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
