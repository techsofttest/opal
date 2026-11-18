
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ContactSection } from "@/components/home/ContactSection";

import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogBannerImage } from "@/components/blog/BlogBannerImage";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { RelatedBlogs } from "@/components/blog/RelatedBlogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface SeoData {
  meta_key: string;
  meta_title: string;
  meta_desc: string;
}

interface Hero {
  slug: string;
  title: string;
  badge: string;
  desc: string;
  read_time: string;
  date: string;
  image: string;
}

interface Blog {
  id: string;
  slug: string;
  title: string;
  badge:string;
  content: string;
  read_time: string;
  date: string;
  image: string;
}

interface LandingPageResponse {
  seo: SeoData;
  hero: Hero;
  content: string;
  blog: Blog[];
  page:{
    title:string;
    content:string;
  }
}

async function getBlogData(
  slug: string
): Promise<LandingPageResponse | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  const res = await fetch(
    `${baseUrl}/blog/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getBlogData(slug);

    if (!data) {
      return {
        title: "Article Not Found",
      };
    }

    return {
      title: data.seo?.meta_title || data.hero.title,
      description: data.seo?.meta_desc || data.hero.desc,
      keywords: data.seo?.meta_key || "",
      openGraph: {
        title: data.seo?.meta_title || data.hero.title,
        description: data.seo?.meta_desc || data.hero.desc,
        images: data.hero.image
          ? [
              {
                url: data.hero.image,
                alt: data.hero.title,
              },
            ]
          : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog",
    };
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  let data: LandingPageResponse | null;

  try {
    data = await getBlogData(slug);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }

  if (!data) {
    notFound();
  }

  const post = {
    slug,
    title: data.hero.title,
    desc: data.hero.desc,
    badge:data.hero.badge,
    content: data.content,
    image: data.hero.image,
    alt: data.hero.title,
    date: data.hero.date,
    read_time: data.hero.read_time,
  };

  return (
    <>
      <Header />

      <main id="top" className="bg-sand/30">
        <BlogHeader post={post} />

        <BlogBannerImage
          image={post.image}
          alt={post.alt}
        />

        <section className="wrap max-w-[1040px] pb-20">
            <BlogContent post={post.content} />
        </section>

        <RelatedBlogs posts={data.blog} />

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
