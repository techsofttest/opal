import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { SectorsSection } from "@/components/home/SectorsSection";
import { FiguresSection } from "@/components/home/FiguresSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Clients & Sectors · Opal Landscaping LLC",
  description:
    "Trusted by Dubai Holding, DIEZ, KOJ, Sheraton, Kempinski, Hyatt Regency, Green Community, and hundreds of private villa estates since 2007.",
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="Client Partnerships"
          title="Partnering with Dubai's leading developers & hotels."
          description="Delivering high-specification grounds maintenance, pool management, and turnkey construction for public institutions, 5-star hospitality, and private estates."
          imageSrc="/img/hedge-care.jpg"
          imageAlt="Grounds and park care for prominent business district"
          badgeTag="Commercial Maintenance · Business District"
        />
        <SectorsSection />
        <FiguresSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
