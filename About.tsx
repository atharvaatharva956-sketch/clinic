import doctorPhoto from "@/assets/doctor-portrait.jpeg";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Award, Clock, HeartPulse } from "lucide-react";

const credentials = [
  { icon: Award, label: "BDS Certified" },
  { icon: Clock, label: "12+ Years Experience" },
  { icon: HeartPulse, label: "100+ Implants" },
];

const About = () => {
  return (
    <AnimatedSection>
      <section id="about" className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-3" />
                <img
                  src={doctorPhoto}
                  alt="Dr. Ashutosh Sontakke"
                  className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>

            {/* Text */}
            <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <span className="section-badge mb-4">About the Doctor</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6 leading-tight">
                Dr. Ashutosh
                <br />
                <span className="text-primary">Sontakke</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Ashutosh Sontakke is a highly accomplished BDS dental surgeon with over 12 years of dedicated practice in modern dentistry. Based in Khamgaon, Maharashtra, Dr. Sontakke has built a reputation for precision, compassion, and excellence — particularly in the field of dental implantology and oral surgery.
                </p>
                <p>
                  With over 100 successful dental implants and complex oral surgeries to his name, Dr. Sontakke brings world-class expertise to every patient. His deep specialization in root canal therapy, implant placement, and surgical procedures is matched only by his commitment to patient comfort and pain-free treatment.
                </p>
                <p className="text-foreground font-medium italic">
                  At Sontakke Dental Clinic, every smile tells a story — and Dr. Sontakke is dedicated to making yours the best chapter yet.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3 mt-8">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                  >
                    <cred.icon className="h-4 w-4" />
                    {cred.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
