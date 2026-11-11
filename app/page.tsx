import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FiguresSection } from "@/components/home/FiguresSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FounderSection } from "@/components/home/FounderSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { GroupSection } from "@/components/home/GroupSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <FiguresSection />
        <CertificationsSection />
        <AboutSection />
        <FounderSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <SectorsSection />
        <GroupSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
