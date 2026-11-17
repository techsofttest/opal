import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { WorkSection } from "@/components/home/WorkSection";
import { SectorsSection } from "@/components/home/SectorsSection";
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
  detail: DetailItem[];
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
  project:{
    id:string;
    tag:string;
    title:string;
      wide?: boolean;
    tall?: boolean;
    image:string;}[];
}
async function getSEO(): Promise<LandingPageResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/project`, {
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

export default async function WorkPage() {
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
          imageAlt="Residential pool deck with palm island planters"
        />
      {data?.project &&<WorkSection project={data?.project ?? []} />}
      {data?.cli && data?.client &&<SectorsSection cli={data?.cli} client={data?.client}/>}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
