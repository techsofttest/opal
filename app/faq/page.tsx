import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { FaqSection } from "@/components/home/FaqSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ContactSection } from "@/components/home/ContactSection";
export interface SeoData {
  meta_key: string;
  meta_title: string;
  meta_desc: string;
}

export interface DetailItem {
  title: string;
  icon: string;
  option: string;
  description: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

export interface WorkSection {
  title: string;
 subtitle: string;
  detail: DetailItem[];
}

export interface ClientItem {
  id: number;
  title: string;
   content: string;
  image: string;
}

export interface LandingPageResponse {
  seo: SeoData;
  hero: Hero;  
  work: WorkSection;
  faq:{
    id:string;
    question:string;
    answer:string;
  }[];
}
async function getSEO(): Promise<LandingPageResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/faq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getSEO();

    return {
      title: data?.seo?.meta_title ?? "Home",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Home",
    };
  }
}

export default async function FaqPage() {
  let data: LandingPageResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
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
        />
        {data?.faq && <FaqSection faq={data?.faq ?? []} />}
       {data?.work && <ProcessSection work={data?.work}/>}
        <ContactSection />
      </main>
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </>
  );
}
