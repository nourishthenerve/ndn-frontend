import React from "react";
import { AbstractBackground } from "./AbstractBackground";
import { Brain, Heart, Sparkles, Compass } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Neuro-Psychosomatic Rehabilitation",
    description: "Specialized support for conditions where the nervous system and psyche intertwine, addressing the root causes of physical and emotional symptoms.",
    keywords: ["Nervous System", "Body-Mind Connection", "Neurological Care"],
  },
  {
    icon: Heart,
    title: "Online Mental Health Counselling",
    description: "Compassionate, professional counselling sessions from the comfort of your home. Building emotional resilience and inner strength through guided support.",
    keywords: ["Emotional Healing", "Resilience", "Safe Space"],
  },
  {
    icon: Sparkles,
    title: "Emotional Intelligence Development",
    description: "Cultivate deeper self-awareness and emotional mastery. Learn to navigate life's challenges with grace, clarity, and conscious response.",
    keywords: ["Self-Awareness", "Emotional Mastery", "Inner Wisdom"],
  },
  {
    icon: Compass,
    title: "Conscious Self-Growth Journeys",
    description: "Guided pathways to transformation. Discover your inner light, align with your authentic self, and embrace a life of purpose and vitality.",
    keywords: ["Transformation", "Inner Alignment", "Life Purpose"],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <AbstractBackground variant="subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
            Pathways to <span className="text-gradient-sage">Healing & Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each service is designed to nurture your complete well-being—honouring 
            the connection between mind, body, energy, and spirit.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-sage flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary-soft/50 text-primary text-xs font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-soft/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
