import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "L U Z",
  description: "L U Z",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased relative`}>
        <div className="fixed inset-0 w-full h-full -z-50">
          <video autoPlay muted loop className="w-full h-full object-cover" poster="/1poster.jpg">
            <source src="/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/5" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
