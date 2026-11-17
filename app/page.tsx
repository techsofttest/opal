import { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FiguresSection } from "@/components/home/FiguresSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FounderSection } from "@/components/home/FounderSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { GroupSection } from "@/components/home/GroupSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
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

export interface AboutSection {
  title: string;
  subtitle: string;
  content: string;
  detail: {
    title: string;
    icon: string;
    option: string;
    description: string;
  }[];
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

export interface GrpSection {
  title: string;
  subtitle: string;
  content: string;
  detail: DetailItem[];
}

export interface LandingPageResponse {
  seo: SeoData;
  hero: Hero;
  certificate:{  title: string;
  image: string;
  option: string;
  description: string;}[];
  about: AboutSection;
  stat:  DetailItem[];
  work: WorkSection;
  cli: WorkSection;
  client: ClientItem[];
  grp: GrpSection;
  founder:AboutSection;
  service:{id:string;
    tag:string;
    title:string;
    content:string;
  }[];
  project:{
    id:string;
    tag:string;
    title:string;
    image:string;}[];
  blog:{
    id:string;
    slug:string;
    title:string;
    content:string;
    read_time:string;
    date:string;
    image:string;
  }[];
  faq:{
    id:string;
    question:string;
    answer:string;
  }[];
}
async function getSEO(): Promise<LandingPageResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/index`, {
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

export default async function Home() {
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
        <HeroSection banner={data?.hero} />
        <FiguresSection stat={data?.stat ?? []} />
        <CertificationsSection certificate={data?.certificate ?? []} />
        <AboutSection about={data?.about} />
        <FounderSection  founder={data?.founder} />
        {data?.cli && data?.client &&<SectorsSection cli={data?.cli} client={data?.client}/>}
        <WorkSection project={data?.project ?? []} />
        <ProcessSection work={data?.work}/>
        <SectorsSection cli={data?.cli} client={data?.client}/>
        <GroupSection grp={data?.grp} />
        <BlogSection blog={data?.blog ?? []}/>
        <FaqSection  faq={data?.faq ?? []} />
        <ContactSection />
      </main>
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </>
  );
}
