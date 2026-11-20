import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection ({about}:{about:any}){
  return (
    <section id="about" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[0.9fr_1.1fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-start">
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow>{about?.title}</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1" dangerouslySetInnerHTML={{__html:about?.subtitle ?? ""}} />
          {about?.detail?.[0].description && (<div className="mt-7 p-[22px_24px] bg-sand rounded-[4px] grid gap-[6px] reveal delay-2">
            <div className=" [&_blockquote_p]:font-display [&_blockquote_p]:text-[1.3rem] [&_blockquote_p]:leading-[1.3] [&_blockquote_p]:text-ink
            [&_blockquote_p_strong]:font-mono [&_blockquote_p_strong]:text-[0.75rem] [&_blockquote_p_strong]:tracking-[0.08em] [&_blockquote_p_strong]:text-palm-2 [&_blockquote_p_strong]:uppercase [&_blockquote_p_strong]:font-medium
            " dangerouslySetInnerHTML={{__html:about?.detail?.[0].description}} />
          </div>)}
        </div>
        <div className="min-w-0 grid gap-[18px] text-ink-2">
          <div className="[&_strong]:text-[1.2rem] text-ink reveal delay-1" dangerouslySetInnerHTML={{__html:about?.content ?? ""}} />
        </div>
      </ScrollReveal>
    </section>
  );
};
