import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { ContactSection } from "@/components/home/ContactSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Contact Us · Request a Quote · Opal Landscaping LLC",
  description:
    "Get in touch with Opal Landscaping LLC in Dubai. Book a free site visit or request a quotation for your landscape, pool, or irrigation project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="top">
        <InnerHero
          eyebrow="Get In Touch"
          title="Let's build your dream outdoor environment."
          description="Contact our team of landscape architects, irrigation engineers, and site managers for a free site consultation, quotation, and project review."
          imageSrc="/img/lit-steps.jpg"
          imageAlt="Cantilevered lit garden steps set into terraced lawn"
          badgeTag="Site Consultations · UAE Wide"
        />
        <ContactSection />
        <CertificationsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
