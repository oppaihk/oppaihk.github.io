import HeroSection from "@/components/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import FoundersSection from "@/components/FoundersSection";
import ServicesSection from "@/components/ServicesSection";
import CommitmentSection from "@/components/CommitmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionVisionSection />
      <FoundersSection />
      <ServicesSection />
      <CommitmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
