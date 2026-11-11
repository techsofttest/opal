import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ClimateSection } from "@/components/home/ClimateSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Services · Opal Landscaping LLC",
  description:
    "Comprehensive landscaping services: Landscape design, hardscape, softscape construction, custom swimming pools, smart irrigation, grounds maintenance, and indoor plants.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="End-to-End Solutions"
          title="Complete outdoor solutions for villas, hotels & communities."
          description="From concept development and municipal authority approvals to turnkey execution, swimming pools, automated irrigation, and five-year maintenance programs."
          imageSrc="/img/villa-pergola.jpg"
          imageAlt="Private villa with bespoke pergola and garden design"
          badgeTag="Design & Build · Private Villa"
        />
        <ServicesSection />
        <ProcessSection />
        <ClimateSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
