import type { Metadata } from "next";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import {ServiceHeader} from "@/components/service/ServiceHeader";
import {BannerImage} from "@/components/service/BannerImage";
import {RelatedService} from "@/components/service/RelatedService";
import {ServiceContent} from "@/components/service/ServiceContent";
import { ContactSection } from "@/components/home/ContactSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  badge: string | null;
  content: string;
  image: string;
}

interface ServiceDetailResponse {
  seo: {
    meta_key: string | null;
    meta_title: string | null;
    meta_desc: string | null;
  };
  hero: {
    slug: string;
    title: string;
    badge: string | null;
    image: string;
  };
  content: string;
  page: {
    title: string | null;
    content: string | null;
  };
  service: ServiceItem[];
}

async function getServiceDetail(slug: string): Promise<ServiceDetailResponse | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

  try {
    const res = await fetch(`${baseUrl}/service/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return (await res.json()) as ServiceDetailResponse;
  } catch (error) {
    console.error("Service Detail Fetch Error:", error);
    return null;
  }
}

// Dynamic SEO Metadata from `seo` object
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getServiceDetail(slug);

  if (!data) {
    return { title: "Service Not Found | Opal Landscaping" };
  }

  return {
    title: data.seo.meta_title || `${data.hero.title} | Opal Landscaping`,
    description: data.seo.meta_desc || undefined,
    keywords: data.seo.meta_key || undefined,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getServiceDetail(slug);

  if (!data || !data.hero) {
    notFound();
  }

  const { hero, content, page, service: otherServices } = data;

  return (
    <>
      <Header />
        <main id="top" >
      <ServiceHeader post={hero}/>

        {hero.image && (<BannerImage image={hero.image} alt={hero.title} />)}

          <section className="wrap max-w-[1040px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-12 items-start">
        <ServiceContent post={content}/>
        </div></section>


      <RelatedService posts={otherServices} />
      <ContactSection />
    </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}