import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface InnerHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const InnerHero = ({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt
}: InnerHeroProps) => {
  return (
    <section className="bg-sand pt-[clamp(44px,6vw,72px)] pb-[clamp(48px,6vw,80px)] border-b border-line">
      <ScrollReveal className="wrap grid grid-cols-[1.1fr_0.9fr] max-[860px]:grid-cols-1 gap-[clamp(28px,5vw,60px)] items-center">
        <div>
          <div className="reveal">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="heading-display text-[clamp(2.4rem,5.2vw,4.4rem)] mt-4 reveal delay-1 leading-[1.1]">
            {title}
          </h1>
          <div className="lead mt-5 reveal delay-2 text-[1.08rem] leading-relaxed" dangerouslySetInnerHTML={{__html:description}}/>
        </div>

        <figure className="relative aspect-[16/11] max-[860px]:aspect-[16/10] w-full rounded-[6px] overflow-hidden bg-palm m-0 shadow-md reveal delay-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 860px) 100vw, 45vw"
            className="object-cover"
          />
        </figure>
      </ScrollReveal>
    </section>
  );
};

