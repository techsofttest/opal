import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { InnerHero } from "@/components/ui/InnerHero";
import { BlogSection } from "@/components/home/BlogSection";
import { ClimateSection } from "@/components/home/ClimateSection";
import { ContactSection } from "@/components/home/ContactSection";
export interface SeoData {
  meta_key: string;
  meta_title: string;
  meta_desc: string;
}
export interface Hero {
  title: string;
  subtitle: string;
  content: string;
  detail: {title:string;description:string}[];
  image: string;
}
export interface LandingPageResponse {
  seo: SeoData;
  hero: Hero;
  blog:{
    id:string;
    slug:string;
    title:string;
    content:string;
    read_time:string;
    date:string;
    image:string;
  }[];  page:Hero
}
async function getSEO(): Promise<LandingPageResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/blog`, {
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

export default async function BlogsPage() {
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
          imageSrc={ data?.hero.image || "/img/community-avenue.jpg"}
          imageAlt="Flowering bougainvillea hedge in urban Dubai"
        />
        <BlogSection showAll={true} showAllButton={false} blog={data?.blog ?? []} />
       <ClimateSection page={data?.page}/>
        <ContactSection />
      </main>
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </>
  );
}
