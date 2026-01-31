import { MessageSquare, Calendar, Users, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const AutomationSection = () => {
  const { t } = useLanguage();

  const automations = [
    {
      icon: MessageSquare,
      titleKey: "automation.feature1.title",
      descKey: "automation.feature1.desc",
    },
    {
      icon: Calendar,
      titleKey: "automation.feature2.title",
      descKey: "automation.feature2.desc",
    },
    {
      icon: Users,
      titleKey: "automation.feature3.title",
      descKey: "automation.feature3.desc",
    },
    {
      icon: Workflow,
      titleKey: "automation.feature4.title",
      descKey: "automation.feature4.desc",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    },
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Premium gold accent */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      <div className="section-container">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            {t("automation.title1")} <span className="text-gradient">{t("automation.title2")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("automation.subtitle")}
          </p>
        </motion.div>

        {/* Grid - 2 colonnes sur mobile */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {automations.map((item, index) => (
            <motion.div
              key={index}
              className="feature-card group relative overflow-hidden p-4 md:p-6"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 md:mb-4 group-hover:from-primary/40 group-hover:to-primary/15 transition-all duration-500 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.div>
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-foreground group-hover:text-gradient transition-all duration-300">{t(item.titleKey)}</h3>
              <p className="text-xs md:text-base text-muted-foreground leading-tight">{t(item.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationSection;
