import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AutomationSection from "@/components/sections/AutomationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header />
      </div>

      <main className="overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <HeroSection />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AutomationSection />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProcessSection />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTASection />
        </div>
      </main>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
