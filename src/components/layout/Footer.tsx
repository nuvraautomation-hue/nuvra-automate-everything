import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoNuvra from "@/assets/logo-nuvra.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-primary/20 py-16 relative overflow-hidden">
      {/* Premium gold glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoNuvra} alt="Nuvra Automation" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 relative inline-block">
              {t("footer.contact")}
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/50" />
            </h4>
            <ul className="space-y-3 mt-6">
              <li>
                <a 
                  href="mailto:contact@nuvra-automation.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                  contact@nuvra-automation.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14502784744" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
                  +1 (450) 278-4744
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
