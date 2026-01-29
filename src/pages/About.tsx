import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import skyFounder from "@/assets/sky-founder.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero About Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
                {t("about.title1")} <span className="text-gradient">{t("about.title2")}</span>
              </h1>
            </div>

            {/* Company Section */}
            <div className="max-w-4xl mx-auto mb-16 md:mb-24">
              <div className="feature-card p-8 md:p-12 border-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">{t("about.company.title")}</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("about.company.text1")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                  {t("about.company.text2")}
                </p>
              </div>
            </div>

            {/* Founder Section */}
            <div className="max-w-4xl mx-auto">
              <div className="feature-card p-8 md:p-12 border-primary/20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Photo */}
                  <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)]">
                      <img 
                        src={skyFounder} 
                        alt="Sky - Fondateur de Nuvra" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {t("about.founder.greeting")} <span className="text-gradient">Sky</span>
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                      {t("about.founder.text1")}
                    </p>
                    <p className="text-base md:text-lg text-foreground/90 font-medium">
                      {t("about.founder.text2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
