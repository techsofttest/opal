import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
export function FounderSection ({founder}:{founder?:AboutSection}){
  return (
    <section id="founder" className="bg-white py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[0.85fr_1.15fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-center">
        {/* Founder Portrait */}
        <figure className="relative aspect-[4/5] max-[860px]:aspect-[4/3] max-[520px]:aspect-[1/1] max-w-full rounded-[4px] overflow-hidden bg-palm m-0 shadow-sm reveal">
          {founder?.image &&(<Image
            src={founder?.image || ""}
            alt="Late Mr. Ramachandran Nair, Founder of Opal Landscaping and RC Group"
            fill
            sizes="(max-width: 860px) 100vw, 40vw"
            className="object-cover object-top"
          />)}
        </figure>

        {/* Founder Story and Philosophy */}
        <div className="min-w-0">
          <div className="reveal">
            {founder?.title &&(<Eyebrow>{founder?.title}</Eyebrow>)}
          </div>
          {founder?.subtitle &&(<h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            {founder?.subtitle}
          </h2>)}

          <div  className="[&_blockquote]:mt-7 [&_blockquote]:p-[22px_24px] [&_blockquote]:bg-paper [&_blockquote]:border [&_blockquote]:border-line [&_blockquote]:rounded-[4px] [&_blockquote]:grid [&_blockquote]:gap-[8px] [&_blockquote]:reveal [&_blockquote]:delay-2
            [&_blockquote_p]:font-display [&_blockquote_p]:text-[1.3rem] [&_blockquote_p]:leading-[1.3] [&_blockquote_p]:text-ink
            [&_blockquote_p_strong]:font-mono [&_blockquote_p_strong]:text-[0.75rem] [&_blockquote_p_strong]:tracking-[0.08em] [&_blockquote_p_strong]:text-palm-2 [&_blockquote_p_strong]:uppercase [&_blockquote_p_strong]:font-medium
            [&>p]:mt-6 [&>p]:grid [&>p]:gap-4 [&>p]:text-ink-2 [&>p]:text-[1.02rem] [&>p]:leading-relaxed [&>p]:reveal [&>p]:delay-3"
            dangerouslySetInnerHTML={{ __html: founder?.content ?? "" }} />
          {founder?.detail && founder.detail.length > 0 && (<div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4 mt-8 pt-6 border-t border-line font-mono text-[0.8rem] text-ink-2 reveal delay-4">
            {founder?.detail.map((d,idx)=>(
            <div key={idx}>
              <span className="block text-palm font-bold text-[1.1rem]">{d.title}</span>
              <span className="text-[0.76rem] tracking-[0.06em] uppercase">{d.option}</span>
            </div>))}
          </div>)}
        </div>
      </ScrollReveal>
    </section>
  );
};
