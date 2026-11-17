import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { SectorsSection } from "@/components/home/SectorsSection";
import { FiguresSection } from "@/components/home/FiguresSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
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
  cli: WorkSection;
  client: ClientItem[];
  stat:  DetailItem[]; 
  certificate:{  title: string;
  image: string;
  option: string;
  description: string;}[];
}
async function getSEO(): Promise<LandingPageResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/client`, {
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

export default async function ClientsPage() {
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
          eyebrow={data?.hero.title || ""}
          title={data?.hero.subtitle || ""}
          description={data?.hero.content || ""}
          imageSrc={data?.hero.image || "/img/palm-pool.jpg"}
          imageAlt="Grounds and park care for prominent business district"
        />
        {data?.cli && data?.client &&<SectorsSection cli={data?.cli} client={data?.client}/>}
        {data?.stat &&<FiguresSection stat={data?.stat ?? []} />}
        {data?.certificate && <CertificationsSection certificate={data?.certificate ?? []} />}
        <ContactSection />
      </main>
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </>
  );
}
