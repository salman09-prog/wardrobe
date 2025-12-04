import { AlertTriangle, Package, Ruler, Palette, Frown } from "lucide-react";

const problems = [
  {
    icon: Package,
    title: "Material Issues",
    description: "32.8% of consumers report receiving clothing with wrong or poor quality materials.",
    stat: "32.8%",
  },
  {
    icon: Ruler,
    title: "Different Product",
    description: "24.1% receive products that look different from what they ordered online.",
    stat: "24.1%",
  },
  {
    icon: AlertTriangle,
    title: "Wrong Sizing",
    description: "18.2% face issues with improper sizing and poor fit from mass-produced clothing.",
    stat: "18.2%",
  },
  {
    icon: Palette,
    title: "Lack of Personalization",
    description: "Mass production eliminates uniqueness and personal expression in fashion.",
    stat: "",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Custom Clothing <span className="text-accent">Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The unorganized custom-clothing market suffers from fragmentation, while mass-produced 
            fashion fails to meet individual needs. Our research reveals significant consumer pain points.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <problem.icon className="w-7 h-7 text-accent" />
              </div>
              {problem.stat && (
                <p className="font-display text-3xl font-bold text-accent mb-2">
                  {problem.stat}
                </p>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-card border border-border/50 text-center">
          <div className="flex items-center justify-center mb-4">
            <Frown className="w-8 h-8 text-accent mr-3" />
            <span className="font-display text-2xl font-bold text-accent">Key Finding</span>
          </div>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            According to our findings, <strong>32% of people in the Palghar district</strong> are 
            more inclined to order and purchase traditional clothing online, yet face consistent 
            issues with quality, sizing, and material — problems that Wardrobe is designed to solve.
          </p>
        </div>
      </div>
    </section>
  );
}
