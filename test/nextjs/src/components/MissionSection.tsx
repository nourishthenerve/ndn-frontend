import React from "react";
import { AbstractBackground } from "./AbstractBackground";

export const MissionSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-sage overflow-hidden">
      <AbstractBackground variant="section" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Our Mission
            </span>
          </div>

          {/* Main content */}
          <div className="text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              Bridging Science,{" "}
              <span className="text-primary">Emotional Intelligence</span>
              {" "}&{" "}
              <span className="text-lavender">Spiritual Grounding</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Led by a mental health care professional and specialist physiotherapist with 
              advanced expertise in neurological and psychosomatic rehabilitation, we provide 
              a holistic approach to healing that honours the intricate connection between 
              mind, body, and spirit.
            </p>

            {/* Key pillars */}
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                {
                  title: "Holistic Healing",
                  description: "Integrating physical, emotional, and spiritual dimensions of wellness",
                },
                {
                  title: "Evidence-Based",
                  description: "Grounded in neurological science and proven therapeutic approaches",
                },
                {
                  title: "Compassionate Care",
                  description: "Creating safe spaces for authentic growth and transformation",
                },
              ].map((pillar, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
