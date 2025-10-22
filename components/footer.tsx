"use client"

import { Mail, Shield, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <a href="https://instagram.com/luzdotma" className="hover:text-primary transition">
                LUZ
              </a>
            </h3>
            <p className="text-sm text-foreground/80 mb-6">
              Building the future of web development, one project at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/luzdotma"
                className="text-foreground/80 hover:text-primary transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform & Legal */}
          <div className="grid grid-cols-2 gap-8">
            {/* Platform */}
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold">Platform</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/80 hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/80 hover:text-primary transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/80 hover:text-primary transition">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold">Legal</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground/80 hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground/80 hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="#" className="text-foreground/80 hover:text-primary transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/20" />

        {/* Bottom - Reduced vertical space */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
          <p className="text-sm text-foreground/80">© 2025 LUZ. All rights reserved.</p>
          <p className="text-sm text-foreground/80">
            Made by{" "}
            <a
              href="https://instagram.com/luzdotma"
              className="font-semibold text-primary hover:text-primary/80 transition"
            >
              LUZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
