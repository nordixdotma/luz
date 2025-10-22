"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content:
        "This platform has transformed how our team works. The intuitive interface and powerful features make it a no-brainer.",
      rating: 5,
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      content: "Best investment we made this year. The ROI has been incredible and our productivity has skyrocketed.",
      rating: 5,
      avatar: "/pandoran-bioluminescent-forest.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Studio",
      content: "The design tools are exceptional. We can now iterate faster and deliver better results to our clients.",
      rating: 5,
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "David Park",
      role: "CTO",
      company: "Enterprise Inc",
      content: "Scalability and reliability are top-notch. We handle millions of requests without any issues.",
      rating: 5,
      avatar: "/diverse-group-avatars.png",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Loved by Teams Worldwide</h2>
          <p className="text-lg text-muted-foreground">See what our customers have to say</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-foreground mb-6 line-clamp-4">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
