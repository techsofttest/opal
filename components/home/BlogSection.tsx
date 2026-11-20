"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
interface BlogSectionProps {
  showAll?: boolean;
  showAllButton?: boolean;
    blog:{
    id:string;
    slug:string;
    title:string;
    content:string;
    read_time:string;
    date:string;
    image:string;
  }[];
}

export function BlogSection({
  showAll = false,
  showAllButton = true,blog
}: BlogSectionProps){
const [visibleCount, setVisibleCount] = useState(6);

const posts = showAll
  ? blog.slice(0, visibleCount)
  : blog.slice(0, 3);

const hasMore = showAll && visibleCount < blog.length;

const loadMore = () => {
  setVisibleCount((prev) => prev + 3);
};

  return (
    <section id="blogs" className="py-[clamp(64px,9vw,120px)] bg-sand">
      <ScrollReveal className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
          <div className="grid gap-[14px] max-w-[640px]">
            <div className="reveal">
              <Eyebrow>Insights &amp; Articles</Eyebrow>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
              {showAll
                ? "Expert Insights, Landscaping Tips & Technical Articles"
                : "Latest thoughts on desert landscaping, design & care."}
            </h2>
          </div>
          {showAllButton && (
            <Link
              className="btn btn-ghost hover:bg-sand-2 text-ink font-semibold reveal delay-2"
              href="/blogs"
            >
              All articles
            </Link>
          )}
        </div>

        <div className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-7">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className={`bg-paper border border-line rounded-[6px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md hover:-translate-y-1 reveal delay-${idx + 1}`}
            >
              <figure className="relative aspect-[16/10] overflow-hidden m-0 bg-sand-2">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 860px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-orange border border-line font-mono text-[0.7rem] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full z-10">
                  {post.category}
                </span> */}
              </figure>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[0.74rem] text-ink-2 mb-3 tracking-wider">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.read_time}</span>
                  </div>
                  <h3 className="heading-display text-[1.3rem] leading-snug group-hover:text-palm transition-colors">
                    <Link href={`/blogs/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  {/* <div className="mt-3 text-ink-2 text-[0.94rem] leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{__html:post.content }} /> */}
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="font-semibold text-[0.88rem] text-palm group-hover:text-brand-orange flex items-center gap-1.5 transition-colors"
                  >
                    Read article
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>          
          ))}
          {/* Load More */}
{hasMore && (
  <div className="flex justify-center mt-12 reveal">
    <button
      type="button"
      onClick={loadMore}
      className="btn btn-ghost hover:bg-sand-2 text-ink text-[0.88rem]"
    >
      Load More Articles
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5v14m-7-7h14"
        />
      </svg>
    </button>
  </div>
)}
        </div>
      </ScrollReveal>
    </section>
  );
};
