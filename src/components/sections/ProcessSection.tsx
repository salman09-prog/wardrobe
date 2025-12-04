import { Search, Ruler, Palette, Package, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Browse & Choose",
    description: "Explore our curated marketplace of skilled tailors and designers. Find the perfect artisan for your style.",
  },
  {
    number: 2,
    icon: Ruler,
    title: "Share Measurements",
    description: "Provide your measurements using our easy guide or book a professional measurement session.",
  },
  {
    number: 3,
    icon: Palette,
    title: "Customize Design",
    description: "Work directly with your chosen artisan to personalize fabric, style, and design details.",
  },
  {
    number: 4,
    icon: Package,
    title: "Artisan Crafts",
    description: "Your garment is handmade with care by skilled craftspeople using premium materials.",
  },
  {
    number: 5,
    icon: Truck,
    title: "Delivery",
    description: "Receive your custom creation, perfectly fitted and beautifully packaged at your doorstep.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
            The Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How <span className="text-accent">It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From selection to delivery, we've made custom clothing simple and delightful.
          </p>
        </div>

        {/* Process Steps - Timeline Style */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Line & Number */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl md:text-2xl font-display font-bold shadow-lg z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-20 md:h-24 bg-border" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 pb-8 md:pb-12 ${
                    index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                  }`}
                >
                  <div className="bg-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-accent text-lg group">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
