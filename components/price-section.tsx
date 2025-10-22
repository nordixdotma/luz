"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PriceSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      description: "Perfect for individuals and small projects",
      features: ["Up to 5 projects", "5GB storage", "Basic analytics", "Community support", "Monthly updates"],
    },
    {
      name: "Professional",
      monthlyPrice: 79,
      description: "For growing teams and businesses",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Weekly updates",
        "Custom integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
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
    },
  ]

  return (
    <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Choose the perfect plan for your needs</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-primary transition ${
                  isYearly ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
              <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Save 30%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const yearlyPrice = Math.round(plan.monthlyPrice * 12 * 0.7)
            const displayPrice = isYearly ? yearlyPrice : plan.monthlyPrice

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground ring-2 ring-primary scale-105"
                    : "bg-card text-card-foreground border border-border"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold">${displayPrice}</span>
                  <span
                    className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>

                <Button
                  className={`w-full mb-8 rounded-full font-semibold ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
