import React from "react";

export const WhoItsForSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-lavender overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-soft/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sand-soft/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Who This Is For
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6 leading-tight">
                A Safe Space for <span className="text-gradient-sage">Your Journey</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                While our practice holds special understanding for Muslim women seeking 
                emotionally and spiritually aligned support, our doors and hearts are 
                open to all who seek healing, growth, and inner peace.
              </p>

              <div className="space-y-4">
                {[
                  "Those seeking calm, conscious mental health care",
                  "Individuals navigating neurological or psychosomatic challenges",
                  "Anyone ready for emotional healing and resilience building",
                  "Those yearning for deeper self-understanding and growth",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Abstract visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-warmth p-8 lg:p-12 relative overflow-hidden">
                {/* Abstract flowing pattern */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    stroke="hsl(var(--primary) / 0.15)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="hsl(var(--lavender) / 0.2)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="90"
                    stroke="hsl(var(--primary) / 0.1)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="60"
                    stroke="hsl(var(--sand) / 0.3)"
                    strokeWidth="1"
                    fill="none"
                  />
                  
                  {/* Flowing curves */}
                  <path
                    d="M100 200 Q 200 100, 300 200 Q 200 300, 100 200"
                    stroke="hsl(var(--primary) / 0.2)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M150 200 Q 200 150, 250 200 Q 200 250, 150 200"
                    stroke="hsl(var(--lavender) / 0.3)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                {/* Center glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary-soft/50 blur-2xl animate-pulse-soft" />
                </div>

                {/* Floating keywords */}
                <div className="relative h-full flex flex-col items-center justify-center space-y-6">
                  {["Light", "Balance", "Vitality", "Healing"].map((word, index) => (
                    <span
                      key={index}
                      className="font-serif text-2xl md:text-3xl text-foreground/80 animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
