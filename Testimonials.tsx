import { useState, useEffect } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Dr. Sontakke performed my root canal with zero pain. Truly exceptional! The entire experience was comfortable and professional.",
    name: "Rajesh Patil",
    detail: "Root Canal Patient",
  },
  {
    text: "Got my implant done here — couldn't be happier. Looks and feels completely natural. Dr. Sontakke is a true expert in his field.",
    name: "Priya Deshmukh",
    detail: "Dental Implant Patient",
  },
  {
    text: "The most professional dental clinic in Khamgaon. Clean, modern, and the staff is incredibly caring. Highly recommended!",
    name: "Suresh Wankhede",
    detail: "Regular Patient",
  },
  {
    text: "My kids love visiting Dr. Sontakke. He's so gentle and patient with children. We wouldn't go anywhere else for dental care.",
    name: "Anjali Sharma",
    detail: "Parent",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection>
      <section id="testimonials" className="section-padding bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4">
              What Our <span className="text-primary">Patients Say</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50 text-center relative">
              <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic min-h-[80px]">
                "{testimonials[active].text}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground text-lg">{testimonials[active].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[active].detail}</p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === active ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonials;
