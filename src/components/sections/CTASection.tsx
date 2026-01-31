import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t, bookingLink } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Premium Background Glow */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-primary/8 rounded-full blur-[100px] md:blur-[150px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary/15 rounded-full blur-[60px] md:blur-[80px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Gold lines */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center px-2">
          {/* Premium badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 md:mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            </motion.div>
            <span className="text-xs md:text-sm font-medium text-primary">{t("cta.badge")}</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-5xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("cta.title1")} <span className="text-gradient relative">
              {t("cta.title2")}
              <motion.span 
                className="absolute -inset-1 bg-primary/10 blur-xl -z-10 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span> {t("cta.title3")}
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("cta.subtitle")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href={bookingLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="shadow-[0_0_50px_-10px_hsl(var(--primary)/0.7)] hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.9)] transition-all duration-500">
                {t("cta.button")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
