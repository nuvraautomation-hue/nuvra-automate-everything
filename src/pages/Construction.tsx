import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, FileText, Users, BarChart3, Phone, Zap } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Suivi automatique des soumissions",
    description: "Chaque soumission est suivie automatiquement. Relances programmées jusqu'à la signature.",
  },
  {
    icon: Users,
    title: "Relances clients intelligentes",
    description: "L'IA contacte vos prospects au bon moment avec le bon message. Conversion maximisée.",
  },
  {
    icon: Phone,
    title: "Qualification + priorisation",
    description: "Les leads sont qualifiés et priorisés automatiquement. Focus sur les projets rentables.",
  },
  {
    icon: BarChart3,
    title: "Intégration CRM complète",
    description: "Synchronisation temps réel avec votre CRM. Pipeline de vente toujours à jour.",
  },
];

const Construction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center bg-hero overflow-hidden pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          <div className="section-container relative z-10 py-20">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
                <HardHat className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Pour entrepreneurs en construction
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Vous travaillez sur le chantier pendant que le{" "}
                <span className="text-gradient">système vend</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                L'agent vocal IA capte les appels. Le système s'occupe des suivis, relances et qualifications. Vous signez les contrats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="xl">
                  Réserver un audit gratuit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                L'agent vocal <span className="text-gradient">déclenche tout</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un appel entrant active une chaîne d'automatisation complète.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="feature-card group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-24 bg-card">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pendant que vous êtes sur le chantier
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>✓ L'agent répond à tous les appels</p>
                <p>✓ Les soumissions sont envoyées automatiquement</p>
                <p>✓ Les relances partent au bon moment</p>
                <p>✓ Les rendez-vous se bookent seuls</p>
                <p>✓ Votre CRM se remplit tout seul</p>
              </div>
              <Button variant="hero" size="xl" className="mt-10">
                Voir comment ça marche
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Prêt à <span className="text-gradient">scaler</span> votre entreprise?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Audit gratuit de 15 minutes. On analyse vos pertes de leads et on vous montre le potentiel.
              </p>
              <Button variant="hero" size="xl">
                Réserver mon audit gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Construction;
