
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import ProofStrip from "@/components/sections/ProofStrip";
import PrizesSection from "@/components/sections/PrizesSection";
import TracksSection from "@/components/sections/TracksSection";
import HowItWorks from "@/components/sections/HowItWorks";
import KeyDates from "@/components/sections/KeyDates";
import EligibilitySection from "@/components/sections/EligibilitySection";
import ParentsSection from "@/components/sections/ParentsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import MobileRegisterBar from "@/components/layout/MobileRegisterBar";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />

      <HeroSection />
      <ProofStrip />
      <PrizesSection />
      <TracksSection />
      <HowItWorks />
      <KeyDates />
      <EligibilitySection />
      <ParentsSection />
      <FAQSection />
      <FinalCTA />

      <Footer />
      <MobileRegisterBar/>
    </main>
  );
}
