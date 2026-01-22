import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AutomationSection from "@/components/sections/AutomationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AutomationSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
