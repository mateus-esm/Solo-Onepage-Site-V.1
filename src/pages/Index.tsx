
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import SolutionsSection from '@/components/SolutionsSection';
import MissionSection from '@/components/MissionSection';
import TechnologySection from '@/components/TechnologySection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import SimulatorSection from '@/components/SimulatorSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white text-solo-black">
      <HeroSection />
      <JourneySection />
      <SolutionsSection />
      <MissionSection />
      <TechnologySection />
      <CaseStudiesSection />
      <SimulatorSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
