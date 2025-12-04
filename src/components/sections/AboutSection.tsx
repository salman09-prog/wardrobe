import { Scissors, Heart, Users } from "lucide-react";
import aboutImage from "@/assets/about-craftsmanship.jpg";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Tailoring tools and craftsmanship"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              About Wardrobe
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Reviving the Art of{" "}
              <span className="text-accent">Custom Tailoring</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Wardrobe is an innovative online platform designed to counteract the decline 
              in traditional tailoring amid mass manufacturing dominance. We serve as a 
              marketplace for handmade, custom products, revitalizing the personalized 
              touch of tailor-made clothing.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Through comprehensive research, Wardrobe addresses market gaps, fosters 
              employment opportunities, and rekindles interest in the craftsmanship of 
              personalized fashion. We aim to be a catalyst for renewal in the tailoring 
              and designing sector.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Scissors className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">Craftsmanship</h3>
                <p className="text-muted-foreground text-sm">Expert artisan skills</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">Handmade</h3>
                <p className="text-muted-foreground text-sm">Made with care</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">Community</h3>
                <p className="text-muted-foreground text-sm">Supporting tailors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
