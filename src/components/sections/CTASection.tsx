import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à <span className="text-gradient">automatiser</span> votre business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Réservez un audit gratuit de 15 minutes. On analyse vos processus et on vous montre exactement ce qu'on peut automatiser.
          </p>
          <Button variant="hero" size="xl">
            Réserver mon audit gratuit
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
