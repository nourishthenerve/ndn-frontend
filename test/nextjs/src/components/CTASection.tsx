import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-soft/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lavender-soft/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sand-soft/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-12" />
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
            Step Into{" "}
            <span className="text-gradient-sage">Balance</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Your journey toward healing, resilience, and inner peace begins with a single step. 
            We're here to walk alongside you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero">
              Begin Your Healing Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline">
              Schedule a Consultation
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-12 text-sm text-muted-foreground">
            Confidential • Compassionate • Professional
          </p>
        </div>
      </div>
    </section>
  );
};
