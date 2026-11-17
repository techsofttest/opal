import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
export interface WorkSection {
  title: string;
 subtitle: string;
  detail: {
      title: string;
  icon: string;
  option: string;
  description: string;
  }[];
}
export function ProcessSection ({work}:{work?:WorkSection}) {
  const steps = [
    {
      num: "01 · SURVEY",
      title: "Site visit",
      desc: "We measure the site, test soil and water supply, and agree your budget and timeline.",
    },
    {
      num: "02 · DESIGN",
      title: "Plan & approvals",
      desc: "Concept, drawings and planting plan, plus any community or authority approvals needed.",
    },
    {
      num: "03 · BUILD",
      title: "Construction",
      desc: "Our own crews and equipment deliver to a weekly work programme with HSE controls on site.",
    },
    {
      num: "04 · CARE",
      title: "Maintenance",
      desc: "Handover into a maintenance plan so the landscape matures instead of declining.",
    },
  ];

  return (
    <section className="py-[clamp(64px,9vw,120px)] bg-palm text-on-palm">
      <ScrollReveal className="wrap">
        <div className="reveal">
          <Eyebrow className="!text-white">{work?.title}</Eyebrow>
        </div>
        <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] max-w-[20ch] reveal delay-1">
          {work?.subtitle}
        </h2>

        {/* Animated Process Flow Divider */}
        <div className="relative mt-12 mb-2 reveal delay-2">
          <div className="h-[3px] w-full rounded-full animated-process-line" />
        </div>

        <div className="grid grid-cols-4 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 gap-0 max-[860px]:gap-x-5 max-[860px]:gap-y-3">
          {work?.detail.map((s, idx) => (
            <div
              key={idx}
              className={`pt-6 pr-[22px] max-[860px]:pr-0 grid gap-[10px] content-start reveal delay-${idx + 1}`}
            >
              <span className="font-mono text-[0.8rem] text-white tracking-[0.08em] font-medium">
                0{idx+1} . {s.title}
              </span>
              <h3 className="heading-display text-[1.45rem] text-on-palm">
                {s.option}
              </h3>
              <div className="text-on-palm-2 text-[0.96rem]" dangerouslySetInnerHTML={{__html:s.description}} />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
