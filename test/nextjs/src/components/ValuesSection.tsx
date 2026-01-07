import React from "react";

const values = [
  {
    title: "Compassion",
    description: "Meeting every individual with deep understanding and unconditional positive regard.",
  },
  {
    title: "Balance",
    description: "Honouring the equilibrium between all aspects of being—physical, emotional, and spiritual.",
  },
  {
    title: "Inner Light",
    description: "Recognizing and nurturing the innate wisdom and strength within each person.",
  },
  {
    title: "Trust",
    description: "Creating safe, confidential spaces where authentic healing can unfold naturally.",
  },
  {
    title: "Empowerment",
    description: "Guiding individuals to discover their own capacity for growth and transformation.",
  },
  {
    title: "Awareness",
    description: "Cultivating conscious presence as the foundation for lasting change and well-being.",
  },
];

export const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="relative py-24 md:py-32 bg-gradient-sage overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="values-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="hsl(var(--primary))" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#values-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Our Values
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6">
            The Heart of <span className="text-gradient-sage">Our Practice</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every interaction is guided by these core principles, creating a foundation 
            of trust and authentic care.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/30 hover:bg-card hover:border-primary/20 hover:shadow-soft transition-all duration-500 text-center"
            >
              {/* Decorative element */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6 group-hover:via-primary transition-all duration-500" />
              
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
