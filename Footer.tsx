import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Sontakke <span className="text-primary">Dental</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              Transforming Smiles, One Patient at a Time.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <Phone className="h-4 w-4" />
              <a href="tel:08856959404" className="hover:text-primary transition-colors">088569 59404</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-background/60 mt-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>Khamgaon, Maharashtra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>Dental Implants</p>
              <p>Root Canal Treatment</p>
              <p>Oral Surgery</p>
              <p>Cosmetic Dentistry</p>
              <p>Pediatric Dentistry</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Sontakke Dental Clinic & Implant Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
