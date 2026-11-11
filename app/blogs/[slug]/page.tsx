import { Metadata } from "next";
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
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blogData";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found · Opal Landscaping LLC",
    };
  }

  return {
    title: `${post.title} · Opal Landscaping LLC`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          alt: post.alt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main id="top" className="bg-sand/30">
        <BlogHeader post={post} />
        <BlogBannerImage image={post.image} alt={post.alt} />

        <section className="wrap max-w-[1040px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-12 items-start">
            <BlogContent post={post} />
            <BlogSidebar />
          </div>
        </section>

        <RelatedBlogs posts={relatedPosts} />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
