import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="section-container px-4">
          {/* Hero / Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
              {t("fit.title1")} <span className="text-gradient">{t("fit.title2")}</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              {t("fit.intro")}
            </p>
          </div>

          {/* Two columns: Ideal / Not Ideal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-20">
            {/* Ideal For */}
            <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                {t("fit.idealTitle")}
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ideal For */}
            <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-muted/30 border border-border">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                </div>
                {t("fit.notIdealTitle")}
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {notIdealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Examples Section - Compact on mobile */}
          <div className="max-w-4xl mx-auto mb-10 md:mb-20">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10">
              {t("fit.examplesTitle")}
            </h2>
            <div className="space-y-3 md:space-y-6">
              {examples.map((example, index) => (
                <div 
                  key={index} 
                  className="p-4 md:p-6 rounded-lg md:rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm md:text-base text-foreground mb-1 md:mb-2">{example.situation}</p>
                      <p className="text-muted-foreground text-xs md:text-sm">{example.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-6 md:p-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-primary/20">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                {t("fit.ctaTitle")}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                {t("fit.ctaSubtitle")}
              </p>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="md:h-16 md:px-12 md:text-lg">
                  {t("fit.ctaButton")}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IsNuvraForYou;
