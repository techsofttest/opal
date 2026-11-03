import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const AboutSection = () => {
  return (
    <section id="about" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[0.9fr_1.1fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-start">
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow>About us</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            Built on a founder&apos;s belief that green space serves people first.
          </h2>
          <div className="mt-7 p-[22px_24px] bg-sand rounded-[4px] grid gap-[6px] reveal delay-2">
            <q className="font-display text-[1.3rem] leading-[1.3] text-ink [quotes:'“'_'”']">
              Success is measured by what we give back to society and the
              environment.
            </q>
            <small className="font-mono text-[0.75rem] tracking-[0.08em] text-ink-2 uppercase">
              The guiding principle of Mr. Ramachandran Nair, Founder
            </small>
          </div>
        </div>
        <div className="min-w-0 grid gap-[18px] text-ink-2">
          <p className="text-[1.2rem] text-ink reveal delay-1">
            Opal Landscaping was founded in Dubai in 2007 by the late Mr.
            Ramachandran Nair, an entrepreneur and philanthropist who believed
            the social and environmental value of a project mattered more than
            its size.
          </p>
          <p className="reveal delay-2">
            Today we are the flagship company of RC Group, led by Managing
            Director Mrs. Rajani Ramachandran. We carry the founder&apos;s
            principles into every contract: create landscapes that support
            wellbeing, help communities grow, and protect water and soil.
          </p>
          <p className="reveal delay-3">
            Our portfolio covers more than AED 550 million in completed
            projects and over AED 75 million in ongoing work, from single villa
            gardens to multi-zone maintenance contracts. We own our fleet, our
            equipment and our nursery supply, so we control quality and response
            time on every site.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};
