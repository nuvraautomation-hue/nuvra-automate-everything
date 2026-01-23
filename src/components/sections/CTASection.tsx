import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Premium Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-primary/8 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary/15 rounded-full blur-[60px] md:blur-[80px] animate-pulse-slow" />
      </div>
      
      {/* Gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center px-2">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 md:mb-8 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Audit gratuit de 15 minutes</span>
          </div>
          
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Prêt à <span className="text-gradient relative">
              automatiser
              <span className="absolute -inset-1 bg-primary/10 blur-xl -z-10 rounded-full" />
            </span> votre business?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
            Réservez un audit gratuit de 15 minutes. On analyse vos processus et on vous montre exactement ce qu'on peut automatiser.
          </p>
          <Button variant="hero" size="xl" className="shadow-[0_0_50px_-10px_hsl(var(--primary)/0.7)] hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.9)] transition-all duration-500">
            Réserver mon audit gratuit
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
