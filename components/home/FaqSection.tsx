import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FaqSection ({faq}:{faq:any[]}){
  return (
    <section id="faq" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[0.8fr_1.2fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)]">
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow>FAQ</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            Common questions from Dubai clients.
          </h2>
        </div>
        <div className="min-w-0">
          {faq.map((faq,idx)=>(
          <details key={idx}
            open={idx===0}
            className="border-b border-line py-5 first:border-t reveal"
          >
            <summary className="cursor-pointer font-semibold text-[1.05rem] list-none flex justify-between gap-4 select-none">
              {faq.question}
            </summary>
            <div className="mt-3 text-ink-2 max-w-[62ch]" dangerouslySetInnerHTML={{__html:faq.answer}} />
          </details>))}
        </div>
      </ScrollReveal>
    </section>
  );
};
