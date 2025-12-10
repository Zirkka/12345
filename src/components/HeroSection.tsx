import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Happy_family_in_modern_home_e8ba2f06.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-6 py-2 mb-8">
          <Shield className="w-5 h-5 text-primary-foreground" />
          <span className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">
            Advanced Fire Prevention
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          Stop The Fire Before It Starts!
        </h1>

        <h2 className="text-3xl sm:text-4xl font-semibold text-white/95 mb-8">
          Save Lives and Money
        </h2>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Protect your assets and ensure peace of mind with advanced fire detection and prevention
          solutions, including arc-fault detection, load analysis, and system optimization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 min-h-14"
            data-testid="button-get-started"
          >
            Get Started Today
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 py-6 min-h-14 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-learn-more"
          >
            Learn How It Works
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
