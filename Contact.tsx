import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Dr. Sontakke, I'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}`;
    window.open(`https://wa.me/918856959404?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <AnimatedSection>
      <section id="contact" className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-4">
              Book Your <span className="text-primary">Appointment</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <div className="animate-on-scroll space-y-6">
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: "088569 59404", href: "tel:08856959404" },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "301, Prathameshwara Heights, Jalamb Naka, Nandura Rd, Khamgaon, Maharashtra 444303",
                  },
                  { icon: Clock, label: "Hours", value: "Mon - Sat: 10:00 AM - 8:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-border h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.5!2d76.5711!3d20.7071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzI1LjYiTiA3NsKwMzQnMTYuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
            </div>

            {/* Form */}
            <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 space-y-5">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Request an Appointment</h3>
                <p className="text-muted-foreground text-sm mb-6">Fill in your details and we'll reach out via WhatsApp</p>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Dental Implants</option>
                    <option>Root Canal Treatment</option>
                    <option>Oral Surgery</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Pediatric Dentistry</option>
                    <option>General Check-up</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  {submitted ? "Redirecting to WhatsApp..." : "Send via WhatsApp"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
