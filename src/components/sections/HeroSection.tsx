import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-tailor.jpg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Master tailor crafting bespoke clothing"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p
            className="font-script text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your Signature Style
          </p>

          {/* Main Heading */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Wardrobe
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            From tailor's needle to your wardrobe — bespoke clothes, handmade with care. 
            Redefining personalized fashion for the modern era.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#about" className="btn-accent text-lg px-10 py-4">
              Explore More
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-10 py-4 text-primary-foreground font-medium rounded-full border-2 border-primary-foreground/30 hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              View Designs
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-float"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
