import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { AboutSection } from "@/components/home/AboutSection";
import { FounderSection } from "@/components/home/FounderSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FiguresSection } from "@/components/home/FiguresSection";
import { GroupSection } from "@/components/home/GroupSection";

export const metadata: Metadata = {
  title: "About Us · Opal Landscaping LLC",
  description:
    "Learn about Opal Landscaping LLC, founded in Dubai in 2007 by Mr. Ramachandran Nair. Our story, values, team of 700+, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="Company Profile"
          title="Nurturing outdoor spaces across the UAE since 2007."
          description="Opal Landscaping is the premier landscaping, irrigation, swimming pool, and grounds maintenance contractor in Dubai. Guided by social value, human wellbeing, and environmental stewardship."
          imageSrc="/img/community-avenue.jpg"
          imageAlt="Palm tree avenue and landscaped community by Opal Landscaping"
          badgeTag="Community Landscape · Green Community"
        />
        <AboutSection />
        <FounderSection />
        <FiguresSection />
        <CertificationsSection />
        <GroupSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
