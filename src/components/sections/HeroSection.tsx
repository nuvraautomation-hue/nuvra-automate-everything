import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Système d'automatisation IA installé en 7 jours
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Chaque appel manqué vous coûte{" "}
            <span className="text-gradient">de l'argent</span>
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
            <Button variant="hero" size="xl">
              Réserver un audit gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5" />
              Voir une démo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">7 jours</p>
              <p className="text-sm text-muted-foreground">Installation complète</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">24/7</p>
              <p className="text-sm text-muted-foreground">Automatisation active</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">100%</p>
              <p className="text-sm text-muted-foreground">Appels captés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
