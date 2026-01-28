import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-hero overflow-hidden pt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-primary/8 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
        {/* Secondary glows */}
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        {/* Gold particles effect - hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="hidden md:block absolute top-40 left-32 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary/80 border border-primary/30 mb-6 md:mb-8 animate-fade-up backdrop-blur-sm shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-foreground/90">
              Système IA installé en 7 jours
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Chaque appel manqué vous coûte{" "}
            <span className="text-gradient relative">
              de l'argent
              <span className="absolute -inset-1 bg-primary/10 blur-2xl -z-10 rounded-full" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 animate-fade-up px-2" style={{ animationDelay: "0.2s" }}>
            Installation d'un système d'automatisation IA complet pour entrepreneurs. Plus d'appels manqués, plus de temps perdu.
          </p>

          {/* Value Prop - hidden on mobile for shorter page */}
          <p className="hidden md:block text-base text-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            On commence par les appels, puis on automatise tout ce qui vous fait perdre du temps et de l'argent.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-up px-4" style={{ animationDelay: "0.4s" }}>
            <a href="https://link.nuvra-automation.com/widget/booking/TSKHG4iPAUloDCyxhAqH" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.8)] transition-all duration-500">
                Réserver un audit gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center group">
              <div className="relative">
                <p className="text-2xl md:text-3xl font-bold text-gradient">7 jours</p>
                <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Installation complète</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <p className="text-2xl md:text-3xl font-bold text-gradient">24/7</p>
                <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Automatisation active</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <p className="text-2xl md:text-3xl font-bold text-gradient">100%</p>
                <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Appels captés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
