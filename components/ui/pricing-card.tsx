"use client"
import { BadgeCheck, X, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface PricingTier {
  name: string
  price: Record<string, number>
  description: string
  features: string[]
  limitations?: string[]
  cta: string
  link?: string
  popular?: boolean
  highlighted?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  frequency: string
}

function CountingPrice({ value }: { value: number }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-medium">$</span>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-medium"
      >
        {value}
      </motion.span>
    </div>
  )
}

export function PricingCard({ tier, frequency }: PricingCardProps) {
  const price = tier.price[frequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular
  const billingPeriod = frequency === "yearly" ? "per year" : "per month"

  return (
    <Card
      className={cn(
        "relative flex flex-col gap-6 p-6 transition-all duration-300",
        isHighlighted && "bg-foreground text-background",
        !isHighlighted && "bg-background text-foreground",
        isPopular && "ring-2 ring-primary",
      )}
    >
      {isHighlighted && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      )}
      {isPopular && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      )}

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium capitalize">{tier.name}</h2>
          {isPopular && <Badge className="bg-green-200 text-black rounded-full text-xs">🔥 Most Popular</Badge>}
        </div>

        <div>
          <CountingPrice value={price} />
          <p className="text-xs text-muted-foreground mt-1">{billingPeriod}</p>
        </div>

        <p className="text-sm font-medium">{tier.description}</p>
      </div>

      <ul className="flex-1 space-y-2">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <BadgeCheck className="h-4 w-4 shrink-0 text-green-500" />
            <span className={isHighlighted ? "text-background" : "text-muted-foreground"}>{feature}</span>
          </li>
        ))}
        {tier.limitations && tier.limitations.length > 0 && (
          <>
            {tier.limitations.map((limitation) => (
              <li key={limitation} className="flex items-center gap-2 text-sm opacity-50">
                <X className="h-4 w-4 shrink-0 text-red-500" />
                <span className={isHighlighted ? "text-background" : "text-muted-foreground"}>{limitation}</span>
              </li>
            ))}
          </>
        )}
      </ul>

      <a
        href={tier.link || "#"}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-medium transition-colors",
          isHighlighted
            ? "bg-background text-foreground hover:bg-muted"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        )}
      >
        {tier.cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </Card>
  )
}

export type { PricingTier }
