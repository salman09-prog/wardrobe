import { Heart } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "How It Works", href: "#process" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Traditional Wear", href: "#gallery" },
      { label: "Formal Suits", href: "#gallery" },
      { label: "Bridal Collection", href: "#gallery" },
      { label: "Casual Wear", href: "#gallery" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4">Wardrobe</h3>
            <p className="font-script text-xl text-primary-foreground/80 mb-4">
              Your Signature Style
            </p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              Reintroducing the art of custom-made apparel. A marketplace for
              handmade, bespoke clothing — crafted with care by skilled
              artisans.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Wardrobe. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" />{" "}
              for Avishkar Research Convention 2023-24
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
