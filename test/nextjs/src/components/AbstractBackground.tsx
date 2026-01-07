import React from "react";

interface AbstractBackgroundProps {
  variant?: "hero" | "section" | "subtle";
  className?: string;
}

export const AbstractBackground: React.FC<AbstractBackgroundProps> = ({
  variant = "hero",
  className = "",
}) => {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Soft gradient orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-soft/30 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-lavender-soft/40 rounded-full blur-3xl animate-float-delayed opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sand-soft/50 rounded-full blur-3xl animate-pulse-soft opacity-40" />
        
        {/* Flowing lines SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-100 400 Q 300 200, 600 400 T 1200 400 T 1800 400"
            stroke="hsl(var(--primary) / 0.1)"
            strokeWidth="1"
            fill="none"
            className="animate-draw"
            style={{ strokeDasharray: 1000 }}
          />
          <path
            d="M-100 450 Q 350 300, 650 450 T 1250 450 T 1850 450"
            stroke="hsl(var(--lavender) / 0.08)"
            strokeWidth="1"
            fill="none"
            className="animate-draw"
            style={{ strokeDasharray: 1000, animationDelay: "0.3s" }}
          />
          <path
            d="M-100 500 Q 400 350, 700 500 T 1300 500 T 1900 500"
            stroke="hsl(var(--primary) / 0.06)"
            strokeWidth="1"
            fill="none"
            className="animate-draw"
            style={{ strokeDasharray: 1000, animationDelay: "0.6s" }}
          />
        </svg>

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="neural-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.5" fill="hsl(var(--primary))" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary-soft/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-accent-soft/30 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-soft/10 rounded-full blur-3xl" />
    </div>
  );
};
