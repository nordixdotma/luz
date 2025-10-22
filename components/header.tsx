"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-background"
              }`}
            >
              LUZ
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className={`transition ${
                isScrolled ? "text-foreground hover:text-primary" : "text-background hover:text-background/80"
              }`}
            >
              Home
            </a>
            <a
              href="#pricing"
              className={`transition ${
                isScrolled ? "text-foreground hover:text-primary" : "text-background hover:text-background/80"
              }`}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className={`transition ${
                isScrolled ? "text-foreground hover:text-primary" : "text-background hover:text-background/80"
              }`}
            >
              Testimonials
            </a>
            <a
              href="#"
              className={`transition ${
                isScrolled ? "text-foreground hover:text-primary" : "text-background hover:text-background/80"
              }`}
            >
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className={`${
                isScrolled
                  ? "border-border text-foreground hover:bg-secondary"
                  : "border-background text-black hover:bg-background/10"
              }`}
            >
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X size={24} className={isScrolled ? "text-foreground" : "text-background"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-foreground" : "text-background"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#" className="text-foreground hover:text-primary transition">
              Home
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              About
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
