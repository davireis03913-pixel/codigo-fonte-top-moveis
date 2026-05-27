import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        {/* Clean hard cut + thin metallic divider (MDF sheet style) */}
        <div
          aria-hidden
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, hsl(var(--accent) / 0.5) 20%, hsl(var(--accent) / 0.8) 50%, hsl(var(--accent) / 0.5) 80%, transparent 100%)",
          }}
        />
      </main>
      <Footer />
      <BackToTop />
      <FloatingChat />
    </div>
  );
};

export default Index;
