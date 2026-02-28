import heroBg from "@/assets/hero-bg.jpg";
import { Phone, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Beautiful smile" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary-foreground/70 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Sontakke Dental Clinic & Implant Center
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Expert Care.
            <br />
            <span className="italic font-medium">Lasting Smiles.</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in" style={{ animationDelay: "0.6s" }}>
            12+ Years of Trusted Dental Excellence in Khamgaon
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a
              href="tel:08856959404"
              className="flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold text-sm md:text-base hover:bg-primary-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Book Appointment
            </a>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground rounded-full font-medium text-sm md:text-base hover:bg-primary-foreground/10 transition-all"
            >
              Meet Dr. Sontakke
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-float"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
