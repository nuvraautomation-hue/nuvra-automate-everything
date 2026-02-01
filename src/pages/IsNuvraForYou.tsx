import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Lightbulb, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const IsNuvraForYou = () => {
  const { t, bookingLink } = useLanguage();

  const idealFor = [
    t("fit.ideal1"),
    t("fit.ideal2"),
    t("fit.ideal3"),
    t("fit.ideal4"),
    t("fit.ideal5"),
  ];

  const notIdealFor = [
    t("fit.notIdeal1"),
    t("fit.notIdeal2"),
    t("fit.notIdeal3"),
  ];

  const examples = [
    {
      situation: t("fit.example1.situation"),
      solution: t("fit.example1.solution"),
    },
    {
      situation: t("fit.example2.situation"),
      solution: t("fit.example2.solution"),
    },
    {
      situation: t("fit.example3.situation"),
      solution: t("fit.example3.solution"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/6 rounded-full blur-[100px]"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Gold accent line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="section-container px-4 relative z-10">
          {/* Hero / Introduction */}
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6">
              {t("fit.title1")} <span className="text-gradient">{t("fit.title2")}</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              {t("fit.intro")}
            </p>
          </motion.div>

          {/* Two columns: Ideal / Not Ideal */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Ideal For */}
            <motion.div 
              className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h2 className="text-base md:text-xl font-bold mb-3 md:mb-6 flex items-center gap-2 md:gap-3 relative z-10">
                <motion.div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </motion.div>
                {t("fit.idealTitle")}
              </h2>
              <motion.ul 
                className="space-y-2 md:space-y-4 relative z-10"
                variants={containerVariants}
              >
                {idealFor.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-2 md:gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-base text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Not Ideal For */}
            <motion.div 
              className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-muted/30 border border-border relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h2 className="text-base md:text-xl font-bold mb-3 md:mb-6 flex items-center gap-2 md:gap-3 relative z-10">
                <motion.div 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                </motion.div>
                {t("fit.notIdealTitle")}
              </h2>
              <motion.ul 
                className="space-y-2 md:space-y-4 relative z-10"
                variants={containerVariants}
              >
                {notIdealFor.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-2 md:gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-xs md:text-base text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Examples Section */}
          <motion.div 
            className="max-w-4xl mx-auto mb-10 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-lg md:text-3xl font-bold text-center mb-6 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t("fit.examplesTitle")}
            </motion.h2>
            <motion.div 
              className="space-y-3 md:space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {examples.map((example, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 md:p-6 rounded-lg md:rounded-xl bg-card border border-border hover:border-primary/30 transition-colors relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ y: -4, x: 4, transition: { duration: 0.3 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start gap-3 md:gap-4 relative z-10">
                    <motion.div 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs md:text-base text-foreground mb-1 md:mb-2">{example.situation}</p>
                      <p className="text-muted-foreground text-xs md:text-sm">{example.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-5 md:p-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-primary/20 relative overflow-hidden group"
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              {/* Animated glow */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="text-xs md:text-sm font-medium text-primary">Consultation gratuite</span>
              </motion.div>

              <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 relative z-10">
                {t("fit.ctaTitle")}
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-5 md:mb-8 relative z-10">
                {t("fit.ctaSubtitle")}
              </p>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="md:h-16 md:px-12 md:text-lg shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.8)] transition-all duration-500">
                  {t("fit.ctaButton")}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IsNuvraForYou;