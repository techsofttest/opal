import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const FounderSection = () => {
  return (
    <section id="founder" className="bg-white py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[0.85fr_1.15fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-center">
        {/* Founder Portrait */}
        <figure className="relative aspect-[4/5] max-[860px]:aspect-[4/3] max-[520px]:aspect-[1/1] max-w-full rounded-[4px] overflow-hidden bg-palm m-0 shadow-sm reveal">
          <Image
            src="/founder/founder.jpeg"
            alt="Late Mr. Ramachandran Nair, Founder of Opal Landscaping and RC Group"
            fill
            sizes="(max-width: 860px) 100vw, 40vw"
            className="object-cover object-top"
          />
          <figcaption className="absolute left-[14px] right-[14px] bottom-[14px] flex justify-between gap-[10px] font-mono text-[0.7rem] tracking-[0.08em] text-on-palm uppercase [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] z-10">
            <span>Mr. Ramachandran Nair</span>
          </figcaption>
        </figure>

        {/* Founder Story and Philosophy */}
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow>Our Founder</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            A visionary who nurtured people, landscapes, and communities.
          </h2>

          <div className="mt-7 p-[22px_24px] bg-paper border border-line rounded-[4px] grid gap-[8px] reveal delay-2">
            <q className="font-display text-[1.3rem] leading-[1.3] text-ink [quotes:'“'_'”']">
              Success is measured by what we give back to society and the environment.
            </q>
            <small className="font-mono text-[0.75rem] tracking-[0.08em] text-palm-2 uppercase font-medium">
              The Guiding Light of Mr. Ramachandran Nair
            </small>
          </div>

          <div className="mt-6 grid gap-4 text-ink-2 text-[1.02rem] leading-relaxed reveal delay-3">
            <p>
              The journey of Opal Landscaping began in 2007 when Mr. Ramachandran Nair, a visionary entrepreneur and philanthropist from Kerala, established the company in Dubai with an enduring commitment to excellence, integrity, and social responsibility.
            </p>
            <p>
              He championed the idea that sustainable outdoor spaces enrich human wellbeing and strengthen our connection to nature. His profound philosophy formed the bedrock upon which the diverse entities of the RC Group stand today.
            </p>
          </div>

          <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4 mt-8 pt-6 border-t border-line font-mono text-[0.8rem] text-ink-2 reveal delay-4">
            <div>
              <span className="block text-palm font-bold text-[1.1rem]">2007</span>
              <span className="text-[0.76rem] tracking-[0.06em] uppercase">Founded in Dubai</span>
            </div>
            <div>
              <span className="block text-palm font-bold text-[1.1rem]">Punarjani</span>
              <span className="text-[0.76rem] tracking-[0.06em] uppercase">Annual Legacy of Care</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
