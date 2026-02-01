import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoNuvra from "@/assets/logo-nuvra.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-primary/20 py-10 md:py-16 relative overflow-hidden">
      {/* Premium gold glow effect */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gold accent line at top */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      <div className="section-container relative z-10 px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center mb-4">
              <motion.img 
                src={logoNuvra} 
                alt="Nuvra Automation" 
                className="h-12 md:h-16 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-sm md:text-base text-muted-foreground max-w-sm">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4 relative inline-block text-sm md:text-base">
              {t("footer.contact")}
              <motion.span 
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3 mt-6">
              <motion.li
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="mailto:contact@nuvra-automation.com" 
                  className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span className="truncate">contact@nuvra-automation.com</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="tel:+14502784744" 
                  className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
                  +1 (450) 278-4744
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;