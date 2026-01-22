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
    <section className="py-24 bg-card">
      <div className="section-container">
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
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="feature-card text-center h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-black text-gradient opacity-30 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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
