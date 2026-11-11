import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { BlogSection } from "@/components/home/BlogSection";
import { ClimateSection } from "@/components/home/ClimateSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Blogs & Insights · Opal Landscaping LLC",
  description:
    "Explore our guides on native UAE planting, drip irrigation automation, drought-tolerant landscaping, and modern hardscape architecture in Dubai.",
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="Industry Knowledge"
          title="Insights on sustainable desert landscaping & outdoor care."
          description="Practical advice, technical guides, and innovations in arid-climate irrigation, soil science, plant health, and luxury outdoor design in the UAE."
          imageSrc="/img/bougainvillea-hedge.jpg"
          imageAlt="Flowering bougainvillea hedge in urban Dubai"
          badgeTag="Arid Horticulture · Species Guide"
        />
        <BlogSection showAll={true} showAllButton={false} />
        <ClimateSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
