import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t, bookingLink } = useLanguage();

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-hero overflow-hidden pt-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gold glow */}
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-primary/8 rounded-full blur-[80px] md:blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Secondary glows */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        {/* Gold particles effect - hidden on mobile */}
        <motion.div 
          className="hidden md:block absolute top-20 right-20 w-2 h-2 bg-primary rounded-full opacity-60"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="hidden md:block absolute top-40 left-32 w-1.5 h-1.5 bg-primary rounded-full opacity-40"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-40 right-40 w-1 h-1 bg-primary rounded-full opacity-50"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="section-container relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary/80 border border-primary/30 mb-6 md:mb-8 backdrop-blur-sm shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-foreground/90">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-3xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("hero.title1")}{" "}
            <span className="text-gradient relative">
              {t("hero.title2")}
              <motion.span 
                className="absolute -inset-1 bg-primary/10 blur-2xl -z-10 rounded-full"
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
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Value Prop - hidden on mobile for shorter page */}
          <motion.p 
            className="hidden md:block text-base text-foreground/80 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("hero.valueProp")}
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center px-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={bookingLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.8)] transition-all duration-500">
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { stat: t("hero.stat1"), label: t("hero.stat1Label") },
              { stat: t("hero.stat2"), label: t("hero.stat2Label") },
              { stat: t("hero.stat3"), label: t("hero.stat3Label") },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <p className="text-2xl md:text-3xl font-bold text-gradient">{item.stat}</p>
                  <span className="absolute -inset-2 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
