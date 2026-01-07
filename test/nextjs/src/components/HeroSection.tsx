import React from "react";
import { Button } from "@/components/ui/button";
import { AbstractBackground } from "./AbstractBackground";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <AbstractBackground variant="hero" />
      
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle badge */}
          <div className="animate-fade-up mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-soft/50 text-primary text-sm font-medium tracking-wide">
              Healing • Balance • Resilience
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-6">
            Nourish Your{" "}
            <span className="text-gradient-sage">Nervous System</span>
            <br />
            <span className="text-muted-foreground font-light">Restore Inner Balance</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delayed text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A sanctuary for emotional healing, neurological rehabilitation, and conscious 
            self-development. Where science meets compassion, and healing becomes a journey 
            of transformation.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delayed flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero">
              Begin Your Healing Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up-delayed mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span>UK-Based Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span>Global Online Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span>Evidence-Based Care</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary/50 animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};
