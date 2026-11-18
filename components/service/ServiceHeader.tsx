import Link from "next/link";
import { FaWhatsapp, FaLinkedinIn, FaEnvelope, FaArrowLeft } from "react-icons/fa6";

interface Hero {
   slug: string;
    title: string;
    badge: string | null;
    image: string;
}

export function ServiceHeader ({ post }: {post?:Hero}){
  return (
    <section className="bg-palm text-on-palm pt-[clamp(32px,5vw,56px)] pb-[clamp(40px,6vw,68px)]">
      <div className="wrap max-w-[900px]">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white hover:text-white transition-colors text-[0.88rem] font-semibold mb-6 group"
        >
          <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
          Back to service
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-leaf/20 text-white font-mono text-[0.72rem] tracking-wider uppercase px-3 py-1 rounded-full font-medium">
            {post?.badge}
          </span>
        </div>

        <h1 className="heading-display text-[clamp(2.1rem,4.5vw,3.6rem)] leading-[1.1] text-white">
          {post?.title}
        </h1>

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
        </div>
      </div>
    </section>
  );
};

