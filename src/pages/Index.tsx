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
        {/* Gradient transition into dark footer */}
        <div className="h-24 bg-gradient-to-b from-background via-zinc-200 to-zinc-900" />
      </main>
      <Footer />
      <BackToTop />
      <FloatingChat />
    </div>
  );
};

export default Index;
