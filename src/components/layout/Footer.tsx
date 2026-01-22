import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(25_95%_53%)] flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">NUVRA AI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Système d'automatisation IA complet pour entrepreneurs en construction et cliniques privées. Installé en 7 jours.
            </p>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/construction" className="text-muted-foreground hover:text-primary transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/cliniques" className="text-muted-foreground hover:text-primary transition-colors">
                  Cliniques privées
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@nuvra.ai</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NUVRA AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
