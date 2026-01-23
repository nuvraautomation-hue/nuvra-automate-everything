import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-slow" />
        {/* Secondary glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        {/* Gold particles effect */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 left-32 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/30 mb-8 animate-fade-up backdrop-blur-sm shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/90">
              Système d'automatisation IA installé en 7 jours
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Chaque appel manqué vous coûte{" "}
            <span className="text-gradient relative">
              de l'argent
              <span className="absolute -inset-1 bg-primary/10 blur-2xl -z-10 rounded-full" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Installation d'un système d'automatisation IA complet pour entrepreneurs en construction et cliniques privées.
          </p>

          {/* Value Prop */}
          <p className="text-base text-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            On commence par les appels, puis on automatise tout ce qui vous fait perdre du temps et de l'argent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.8)] transition-all duration-500">
              Réserver un audit gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary/40 hover:border-primary hover:bg-primary/10">
              <Phone className="w-5 h-5" />
              Voir une démo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center group">
              <div className="relative">
                <p className="text-3xl font-bold text-gradient">7 jours</p>
                <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-sm text-muted-foreground">Installation complète</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <p className="text-3xl font-bold text-gradient">24/7</p>
                <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-sm text-muted-foreground">Automatisation active</p>
            </div>
            <div className="text-center group">
              <div className="relative">
                <p className="text-3xl font-bold text-gradient">100%</p>
                <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-sm text-muted-foreground">Appels captés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
