import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

import clinicInterior1 from "@/assets/clinic-interior-1.jpeg";
import clinicInterior2 from "@/assets/clinic-interior-2.jpeg";
import clinicExterior1 from "@/assets/clinic-exterior-1.jpeg";
import clinicExterior2 from "@/assets/clinic-exterior-2.jpeg";
import clinicXray from "@/assets/clinic-xray.jpeg";
import clinicInauguration from "@/assets/clinic-inauguration.jpeg";
import doctorEquipment from "@/assets/doctor-equipment.jpeg";

const images = [
  { src: clinicExterior2, alt: "Clinic Exterior - Night View" },
  { src: clinicInterior1, alt: "Clinic Interior" },
  { src: clinicInterior2, alt: "Clinic Entrance" },
  { src: doctorEquipment, alt: "Dr. Sontakke with Equipment" },
  { src: clinicXray, alt: "X-Ray Room" },
  { src: clinicInauguration, alt: "Clinic Inauguration" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <section id="gallery" className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge">Gallery</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-4">
              Our Clinic & <span className="text-primary">Smiles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our state-of-the-art facility and the care we provide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`animate-on-scroll overflow-hidden rounded-xl group ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-primary-foreground hover:text-primary-foreground/70 transition-colors">
            <X className="h-8 w-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </AnimatedSection>
  );
};

export default Gallery;
