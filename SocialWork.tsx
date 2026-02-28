import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Heart, School, Users } from "lucide-react";
import communityCare from "@/assets/community-care.jpg";

const SocialWork = () => {
  return (
    <AnimatedSection>
      <section id="community" className="section-padding bg-warm">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <span className="section-badge bg-warm-foreground/10 text-warm-foreground">Giving Back</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6 leading-tight">
                Beyond the Clinic —
                <br />
                <span className="text-primary">Community Care</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Ashutosh Sontakke strongly believes that quality dental care should be accessible to everyone. As part of his commitment to community wellness, Dr. Sontakke regularly organizes free dental camps at local schools and community centers across the Khamgaon region.
                </p>
                <p>
                  These camps focus on dental hygiene education, early screening, and awareness — ensuring that children and underserved communities receive the care and knowledge they deserve.
                </p>
                <p className="text-foreground font-medium italic">
                  Hundreds of students and community members have benefited from these initiatives — because a healthy smile starts with awareness.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { icon: Heart, label: "Free Dental Camps" },
                  { icon: School, label: "School Programs" },
                  { icon: Users, label: "Community Outreach" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll order-1 lg:order-2" style={{ transitionDelay: "200ms" }}>
              <img
                src={communityCare}
                alt="Community dental care camp"
                className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SocialWork;
