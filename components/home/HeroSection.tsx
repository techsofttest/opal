import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface Hero {
  title: string;
  subtitle: string;
  content: string;
  detail: {
    title: string;
  }[];
  image: string;
}
export function HeroSection({ banner }: { banner?: Hero }) {
  return (
    <section className="bg-sand pt-[clamp(40px,6vw,80px)] pb-[clamp(48px,7vw,96px)]">
      <ScrollReveal className="wrap grid grid-cols-[1.15fr_0.85fr] max-[860px]:grid-cols-1 gap-[clamp(28px,5vw,64px)] items-center">
        <div>
          <div className="reveal">
            {banner?.title && (<h1 className="eyebrow">{banner?.title}</h1>)}
          </div>
          <h1 className="heading-display text-[clamp(2.7rem,6.6vw,5.4rem)] mt-[18px] reveal delay-1 [&_i]:italic [&_i]:text-palm-2 " dangerouslySetInnerHTML={{ __html: banner?.subtitle ?? "" }} />
          {banner?.content &&(<div className="lead mt-[22px] reveal delay-2" dangerouslySetInnerHTML={{ __html: banner?.content ?? "" }} />)}
          <div className="flex flex-wrap gap-3 mt-8 reveal delay-3">
            <a className="btn btn-orange" href="/contact">
              Book a Free Site Visit
            </a>
            <a className="btn btn-ghost" href="/services">
              Our services
            </a>
          </div>
           {banner?.detail && banner.detail.length > 0 && (<div className="flex flex-wrap gap-x-[22px] gap-y-[10px] mt-10 pt-[22px] border-t border-line font-mono text-[0.78rem] text-ink-2 tracking-[0.04em] reveal delay-4">
            {banner?.detail.map((stat, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <i className="w-2 h-2 rounded-full bg-leaf inline-block"></i>
                {stat.title}
              </span>))}
          </div>)}
        </div>

        <figure className="relative aspect-[4/5] max-[860px]:aspect-[16/11] max-w-full rounded-[4px] overflow-hidden bg-palm m-0 reveal delay-2">
          {banner?.image && (<Image
            src={banner?.image ?? ""}
            alt="Resort pool deck at night with lit date palms in island planters"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 45vw"
            className="object-cover"
          />)}
          {/* <figcaption className="absolute left-[14px] right-[14px] bottom-[14px] flex justify-between gap-[10px] font-mono text-[0.7rem] tracking-[0.08em] text-on-palm uppercase [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] z-10">
            <span>Pool deck · palm uplighting</span>
            <span>Dubai</span>
          </figcaption> */}
        </figure>
      </ScrollReveal>
    </section>
  );
};
