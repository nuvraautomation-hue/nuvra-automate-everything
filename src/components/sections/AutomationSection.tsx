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
    <section className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce qu'on <span className="text-gradient">automatise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agents vocaux, CRM, suivis, rappels, nurturing, workflows — un seul système.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((item, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
  );
};

export default AutomationSection;
