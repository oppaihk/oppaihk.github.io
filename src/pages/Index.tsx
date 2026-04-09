import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OpenSourceStackSection from "@/components/OpenSourceStackSection";
import UseCasesSection from "@/components/UseCasesSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import FoundersSection from "@/components/FoundersSection";
import CommitmentSection from "@/components/CommitmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <OpenSourceStackSection />
      <UseCasesSection />
      <MissionVisionSection />
      <FoundersSection />
      <CommitmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
