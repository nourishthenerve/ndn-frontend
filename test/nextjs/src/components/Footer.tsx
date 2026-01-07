import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <span className="font-serif text-2xl font-medium tracking-tight">
                nourish<span className="text-primary-glow">the</span>nerve
              </span>
              <p className="mt-4 text-background/60 text-sm leading-relaxed">
                A sanctuary for emotional healing, neurological rehabilitation, 
                and conscious self-development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg mb-4">Explore</h4>
              <ul className="space-y-3 text-sm text-background/60">
                <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
                <li><a href="#values" className="hover:text-background transition-colors">Our Values</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg mb-4">Connect</h4>
              <p className="text-sm text-background/60 leading-relaxed">
                Based in the United Kingdom<br />
                Serving clients globally through<br />
                secure online sessions.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-background/10 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
            <p>© {new Date().getFullYear()} nourishthenerve. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
