import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FiguresSection } from "@/components/home/FiguresSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FounderSection } from "@/components/home/FounderSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ClimateSection } from "@/components/home/ClimateSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { GroupSection } from "@/components/home/GroupSection";
import { CsrSection } from "@/components/home/CsrSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <FiguresSection />
        <AboutSection />
        <FounderSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <ClimateSection />
        <SectorsSection />
        <GroupSection />
        <CsrSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
