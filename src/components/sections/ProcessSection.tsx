import { Search, Mic, Workflow, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Search,
      titleKey: "process.step1.title",
      descKey: "process.step1.desc",
    },
    {
      number: "02",
      icon: Mic,
      titleKey: "process.step2.title",
      descKey: "process.step2.desc",
    },
    {
      number: "03",
      icon: Workflow,
      titleKey: "process.step3.title",
      descKey: "process.step3.desc",
    },
    {
      number: "04",
      icon: TrendingUp,
      titleKey: "process.step4.title",
      descKey: "process.step4.desc",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    },
  };

  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            {t("process.title1")} <span className="text-gradient">{t("process.title2")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>

        {/* Timeline - 2 colonnes sur mobile */}
        <div className="relative">
          {/* Connection Line - Gold gradient */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                variants={itemVariants}
              >
                <motion.div 
                  className="feature-card text-center h-full relative overflow-hidden p-4 md:p-6"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Premium glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number */}
                  <motion.div 
                    className="text-3xl md:text-5xl font-black text-gradient opacity-40 mb-2 md:mb-4 group-hover:opacity-60 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:from-primary/40 group-hover:to-primary/15 transition-all duration-500 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.5)]"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-sm md:text-xl font-semibold mb-2 md:mb-3 text-foreground relative z-10">{t(step.titleKey)}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground relative z-10 leading-tight">{t(step.descKey)}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
