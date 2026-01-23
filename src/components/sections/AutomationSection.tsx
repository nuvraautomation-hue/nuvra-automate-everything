import { Phone, Calendar, Users, Bell, Database, BarChart3 } from "lucide-react";

const automations = [
  {
    icon: Phone,
    title: "Appels entrants",
    description: "Agent vocal IA qui répond 24/7, qualifie et route les appels automatiquement.",
  },
  {
    icon: Calendar,
    title: "Prise de rendez-vous",
    description: "Booking automatique intégré à votre agenda. Zéro intervention manuelle.",
  },
  {
    icon: Users,
    title: "Suivi clients / soumissions",
    description: "Relances automatiques, nurturing et suivi des leads jusqu'à la conversion.",
  },
  {
    icon: Bell,
    title: "Rappels & no-shows",
    description: "SMS et appels de rappel automatiques. Réduction drastique des absences.",
  },
  {
    icon: Database,
    title: "CRM & pipelines",
    description: "Synchronisation automatique des données. Pipeline de vente optimisé.",
  },
  {
    icon: BarChart3,
    title: "Rapports & KPIs",
    description: "Dashboard temps réel. Métriques clés pour piloter votre croissance.",
  },
];

const AutomationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Premium gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Ce qu'on <span className="text-gradient">automatise</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Agents vocaux, CRM, suivis, rappels, nurturing, workflows — un seul système.
          </p>
        </div>

        {/* Grid - 2 colonnes sur mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {automations.map((item, index) => (
            <div
              key={index}
              className="feature-card group relative overflow-hidden p-4 md:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 md:mb-4 group-hover:from-primary/40 group-hover:to-primary/15 transition-all duration-500 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-foreground group-hover:text-gradient transition-all duration-300">{item.title}</h3>
              <p className="text-xs md:text-base text-muted-foreground leading-tight">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
