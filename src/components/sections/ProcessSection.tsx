import { Search, Mic, Workflow, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit rapide",
    description: "Analyse de vos processus actuels et identification des opportunités d'automatisation.",
  },
  {
    number: "02",
    icon: Mic,
    title: "Installation agent vocal",
    description: "Déploiement de votre agent IA personnalisé. Opérationnel en 48h.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automatisation complète",
    description: "Configuration des workflows, CRM, suivis et intégrations sur mesure.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimisation continue",
    description: "Monitoring, ajustements et amélioration continue de vos performances.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Notre <span className="text-gradient">processus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'audit à l'optimisation, un accompagnement complet en 7 jours.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Gold gradient */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="feature-card text-center h-full relative overflow-hidden">
                  {/* Premium glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number */}
                  <div className="text-5xl font-black text-gradient opacity-40 mb-4 group-hover:opacity-60 transition-opacity duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/40 group-hover:to-primary/15 transition-all duration-500 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.5)]">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground text-sm relative z-10">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
