import { Eyebrow } from "@/components/ui/Eyebrow";

export const ProcessSection = () => {
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
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <Eyebrow>How a project runs</Eyebrow>
        <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] max-w-[20ch]">
          Four stages, one accountable team.
        </h2>
        <div className="grid grid-cols-4 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 gap-0 max-[860px]:gap-x-5 max-[860px]:gap-y-3 mt-12 border-t-2 border-palm">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="pt-6 pr-[22px] max-[860px]:pr-0 grid gap-[10px] content-start"
            >
              <span className="font-mono text-[0.8rem] text-palm-2 tracking-[0.08em]">
                {s.num}
              </span>
              <h3 className="heading-display text-[1.45rem]">{s.title}</h3>
              <p className="text-ink-2 text-[0.96rem]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

