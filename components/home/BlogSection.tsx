import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Sustainable Landscaping in Dubai: Native Plants That Beat the Summer Heat",
      excerpt:
        "How ghaf trees, bougainvillea, and drought-tolerant desert flora thrive in 48 °C climates while dramatically reducing water demand.",
      date: "OCT 2026",
      readTime: "4 MIN READ",
      category: "Sustainability",
      image: "/img/bougainvillea-hedge.jpg",
      alt: "Dense bougainvillea hedge flowering in Dubai climate",
    },
    {
      id: 2,
      title: "Smart Irrigation & Drip Automation: Cutting Outdoor Water Consumption by 40%",
      excerpt:
        "Modern flow sensors, sub-surface drip lines, and night-cycle controllers engineered to safeguard Dubai's precious water resources.",
      date: "SEP 2026",
      readTime: "5 MIN READ",
      category: "Irrigation",
      image: "/img/team-planting.jpg",
      alt: "Landscaping team installing automated drip irrigation",
    },
    {
      id: 3,
      title: "Architectural Hardscaping & Pool Decks: Heat-Reflective Materials Guide",
      excerpt:
        "Selecting pavers, stone inlays, and shaded pergolas that remain cool to the touch throughout scorching summer afternoons.",
      date: "AUG 2026",
      readTime: "6 MIN READ",
      category: "Design & Build",
      image: "/img/palm-pool.jpg",
      alt: "Reflective pool deck with palm islands and pavers",
    },
  ];

  return (
    <section id="blogs" className="py-[clamp(64px,9vw,120px)] bg-sand">
      <ScrollReveal className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
          <div className="grid gap-[14px] max-w-[640px]">
            <div className="reveal">
              <Eyebrow>Insights &amp; Articles</Eyebrow>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
              Latest thoughts on desert landscaping, design &amp; care.
            </h2>
          </div>
          <a
            className="btn btn-ghost hover:bg-sand-2 text-ink font-semibold reveal delay-2"
            href="#contact"
          >
            All articles
          </a>
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
                  alt={post.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-orange border border-line font-mono text-[0.7rem] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full z-10">
                  {post.category}
                </span>
              </figure>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[0.74rem] text-ink-2 mb-3 tracking-wider">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="heading-display text-[1.3rem] leading-snug group-hover:text-palm transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-ink-2 text-[0.94rem] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-semibold text-[0.88rem] text-palm group-hover:text-brand-orange flex items-center gap-1.5 transition-colors">
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
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
