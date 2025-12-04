import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import jacketIllustration from "@/assets/jacket-illustration.png";

const galleryItems = [
  {
    image: gallery1,
    title: "Traditional Ethnic Wear",
    category: "Women's Collection",
  },
  {
    image: gallery2,
    title: "Bespoke Suit Jacket",
    category: "Men's Formal",
  },
  {
    image: gallery3,
    title: "Bridal Lehenga",
    category: "Special Occasions",
  },
  {
    image: jacketIllustration,
    title: "Custom Jacket Design",
    category: "Casual Wear",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Our Creations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sample <span className="text-accent">Designs</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore the artistry of our talented tailors and designers. Each piece tells a story 
            of craftsmanship, tradition, and personalized elegance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="gallery-item group relative aspect-[3/4] bg-muted"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Request Custom Design
          </a>
        </div>
      </div>
    </section>
  );
}
