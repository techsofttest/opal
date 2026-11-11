import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { WorkSection } from "@/components/home/WorkSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Our Work · Portfolio · Opal Landscaping LLC",
  description:
    "Explore our completed projects across Dubai: private villa gardens, resort swimming pools, night landscape lighting, and community maintenance.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="Portfolio & Case Studies"
          title="Over AED 550M+ in delivered landscaping projects."
          description="Browse through our residential villas, commercial master-developments, luxury resorts, reflecting pools, and community grounds delivered across the UAE."
          imageSrc="/img/palm-pool.jpg"
          imageAlt="Residential pool deck with palm island planters"
          badgeTag="Pool Deck & Planting · Luxury Residence"
        />
        <WorkSection />
        <SectorsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
