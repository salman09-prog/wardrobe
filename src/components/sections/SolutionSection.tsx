import { Check, Sparkles, ShieldCheck, Palette, Ruler, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Perfect Fit Guarantee",
    description: "Custom measurements ensure every garment fits you perfectly, eliminating sizing issues.",
  },
  {
    icon: Palette,
    title: "Unique Designs",
    description: "Choose from skilled designers or create your own — express your personal style.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every piece is crafted by verified artisans with rigorous quality standards.",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Hand-selected fabrics ensure comfort, durability, and authentic craftsmanship.",
  },
  {
    icon: Award,
    title: "Artisan Marketplace",
    description: "Connect directly with skilled tailors and designers, supporting local craftsmanship.",
  },
  {
    icon: Truck,
    title: "Seamless Delivery",
    description: "From measurement to doorstep — we handle the entire process with care.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Our Solution
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What <span className="text-accent">Wardrobe</span> Offers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're bringing structure and efficiency to the unorganized custom-clothing market, 
            establishing a reliable platform for both artisans and customers alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Checkmark */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Check className="w-4 h-4 text-accent" />
              </div>
            </div>
          ))}
        </div>

        {/* Objectives Banner */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary to-primary/90">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Revive and modernize traditional tailoring while meeting contemporary consumer demands.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Employment
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Generate opportunities by connecting designers and tailors to a broader market.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Organization
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bring structure to the fragmented custom-clothing industry with a reliable platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
