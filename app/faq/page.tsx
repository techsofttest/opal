import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { FaqSection } from "@/components/home/FaqSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions · Opal Landscaping LLC",
  description:
    "Got questions regarding permits, plant selection, artificial turf, irrigation water consumption, or landscaping costs in Dubai? Find our answers here.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="Help & Advice"
          title="Clear answers to common Dubai landscaping questions."
          description="Everything you need to know about municipal approvals, smart irrigation efficiency, scheduled maintenance contracts, and realistic project budgets."
          imageSrc="/img/stepping-stones.jpg"
          imageAlt="Lit stone stepping slabs crossing an outdoor water feature"
          badgeTag="Architectural Water · Villa Garden"
        />
        <FaqSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
