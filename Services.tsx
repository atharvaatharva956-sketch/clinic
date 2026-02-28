import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Stethoscope, Microscope, Scissors, Sparkles, Baby, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacement with 100+ successful cases",
  },
  {
    icon: Microscope,
    title: "Root Canal Treatment",
    desc: "Painless, precision endodontic therapy",
  },
  {
    icon: Scissors,
    title: "Oral & Dental Surgery",
    desc: "Expert surgical care in a safe, sterile environment",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening and smile transformation",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Gentle, child-friendly dental care",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Dentistry",
    desc: "Regular check-ups, cleaning & oral hygiene",
  },
];

const Services = () => {
  return (
    <AnimatedSection>
      <section id="services" className="section-padding bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care with a gentle touch and modern technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="animate-on-scroll bg-card rounded-xl p-8 card-hover border border-border/50 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Services;
