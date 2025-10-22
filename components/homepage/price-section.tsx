"use client"
import { PricingSection } from "@/components/ui/pricing-section"
import type { PricingTier } from "@/components/ui/pricing-card"

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for individuals and small projects",
    features: ["Up to 5 projects", "5GB storage", "Basic analytics", "Community support", "Monthly updates"],
    limitations: ["Advanced analytics", "Priority support", "Custom integrations"],
    cta: "Get started",
    link: "/signup?plan=starter",
  },
  {
    name: "Professional",
    price: { monthly: 79, yearly: 790 },
    description: "For growing teams and businesses",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Weekly updates",
      "Custom integrations",
    ],
    limitations: ["Unlimited storage", "24/7 dedicated support", "SLA guarantee"],
    cta: "Get started",
    link: "/signup?plan=professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 199, yearly: 1990 },
    description: "For large-scale operations",
    features: [
      "Unlimited everything",
      "Unlimited storage",
      "Real-time analytics",
      "24/7 dedicated support",
      "Daily updates",
      "Custom integrations",
      "SLA guarantee",
    ],
    limitations: [],
    cta: "Get started",
    link: "/signup?plan=enterprise",
    highlighted: true,
  },
]

export default function PriceSection() {
  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background rounded-t-4xl">
      <div className="max-w-7xl mx-auto">
        <PricingSection
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your needs"
          frequencies={["monthly", "yearly"]}
          tiers={TIERS}
        />
      </div>
    </section>
  )
}
