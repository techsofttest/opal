import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface Blog {
  id: number;
  slug: string;
  title: string;
  badge: string | null;
  content: string;
  image: string;
}
export function RelatedService({ posts }: {posts?:Blog[]}){
  if (posts?.length === 0) return null;

  return (
    <section className="py-16 bg-sand">
      <div className="wrap max-w-[1040px]">
        <div className="flex justify-between items-end gap-4 mb-8">
          <div>
            <Eyebrow>Continue Reading</Eyebrow>
            <h2 className="heading-display text-[1.8rem] sm:text-[2.2rem] mt-1 text-ink">
              Explore Other Services
            </h2>
          </div>
          <Link
            href="/blogs"
            className="btn btn-ghost hover:bg-sand-2 text-ink text-[0.88rem]"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts?.slice(0,3).map((related,idx) => (
            <article
              key={idx}
              className="bg-paper rounded-[6px] overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
            >
              <figure className="relative aspect-[16/10] overflow-hidden m-0 bg-sand-2">
                <Image
                  src={related.image}
                  alt={related.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-orange font-mono text-[0.68rem] uppercase tracking-wider font-semibold py-0.5 px-2.5 rounded-full z-10">
                  {related?.badge}
                </span>
              </figure>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="heading-display text-[1.15rem] leading-snug group-hover:text-palm transition-colors">
                    <Link href={`/blogs/${related.slug}`}>
                      {related.title}
                    </Link>
                  </h3>
                </div>
                <Link
                  href={`/blogs/${related.slug}`}
                  className="mt-4 pt-3 text-[0.85rem] font-semibold text-palm group-hover:text-brand-orange flex items-center gap-1"
                >
                 Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

