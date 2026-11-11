import Link from "next/link";
import { BlogPost } from "@/lib/blogData";
import { FaWhatsapp, FaLinkedinIn, FaEnvelope, FaArrowLeft } from "react-icons/fa6";

interface BlogHeaderProps {
  post: BlogPost;
}

export const BlogHeader = ({ post }: BlogHeaderProps) => {
  return (
    <section className="bg-palm text-on-palm pt-[clamp(32px,5vw,56px)] pb-[clamp(40px,6vw,68px)]">
      <div className="wrap max-w-[900px]">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-white hover:text-white transition-colors text-[0.88rem] font-semibold mb-6 group"
        >
          <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-leaf/20 text-white font-mono text-[0.72rem] tracking-wider uppercase px-3 py-1 rounded-full font-medium">
            {post.category}
          </span>
          <span className="text-on-palm-2 font-mono text-[0.78rem]">
            {post.date} · {post.readTime}
          </span>
        </div>

        <h1 className="heading-display text-[clamp(2.1rem,4.5vw,3.6rem)] leading-[1.1] text-white">
          {post.title}
        </h1>

        <p className="lead !text-on-palm-2 mt-5 text-[1.15rem] leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-8 pt-6 flex items-center justify-between flex-wrap gap-4">
          {/* <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-brand-orange text-white flex items-center justify-center font-display text-lg font-bold">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-[0.95rem] text-white">
                {post.author.name}
              </div>
              <div className="text-on-palm-2 text-[0.82rem]">
                {post.author.role}
              </div>
            </div>
          </div> */}

          {/* Social Share */}
          <div className="flex items-center gap-2">
            <span className="text-[0.8rem] font-mono text-on-palm-2 uppercase tracking-wider mr-1">
              Share:
            </span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${post.title} - https://opallandscaping.com/blogs/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-on-palm transition-all text-sm"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://opallandscaping.com/blogs/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center text-on-palm transition-all text-sm"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(
                post.title
              )}&body=${encodeURIComponent(
                `Check out this article: https://opallandscaping.com/blogs/${post.slug}`
              )}`}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-palm flex items-center justify-center text-on-palm transition-all text-sm"
              aria-label="Share via Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

