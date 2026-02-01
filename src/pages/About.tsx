import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import skyFounder from "@/assets/sky-founder.jpg";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero About Section */}
        <section className="py-12 md:py-24 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/8 rounded-full blur-[100px] md:blur-[150px]"
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
          </div>

          {/* Gold accent lines */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2 }}
          />
          
          <div className="section-container relative z-10 px-4">
            <motion.div 
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-4">
                {t("about.title1")} <span className="text-gradient">{t("about.title2")}</span>
              </h1>
            </motion.div>

            {/* Company Section */}
            <motion.div 
              className="max-w-4xl mx-auto mb-8 md:mb-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="feature-card p-5 md:p-12 border-primary/20 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Premium glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.h2 
                  className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gradient"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t("about.company.title")}
                </motion.h2>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed relative z-10">
                  {t("about.company.text1")}
                </p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mt-4 relative z-10">
                  {t("about.company.text2")}
                </p>
              </motion.div>
            </motion.div>

            {/* Founder Section */}
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="feature-card p-5 md:p-12 border-primary/20 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Premium glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center relative z-10">
                  {/* Photo */}
                  <motion.div 
                    className="w-36 h-36 md:w-64 md:h-64 flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.7)] transition-shadow duration-500">
                      <img 
                        src={skyFounder} 
                        alt="Sky - Fondateur de Nuvra" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                  
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.h3 
                      className="text-xl md:text-3xl font-bold mb-3 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {t("about.founder.greeting")} <span className="text-gradient">Sky</span>
                    </motion.h3>
                    <motion.p 
                      className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {t("about.founder.text1")}
                    </motion.p>
                    <motion.p 
                      className="text-sm md:text-lg text-foreground/90 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {t("about.founder.text2")}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;