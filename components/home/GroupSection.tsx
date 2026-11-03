import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const GroupSection = () => {
  const entities = [
    {
      name: "Opal Landscaping LLC",
      desc: "Flagship · Landscaping, pools & maintenance · Dubai",
      isMain: true,
    },
    {
      name: "Opal Flora Plants & Flowers Trading",
      desc: "Nursery and plant supply · Northern Emirates",
      isMain: false,
    },
    {
      name: "Opal Care Technical Services",
      desc: "Technical and facility services · UAE",
      isMain: false,
    },
    {
      name: "Opal Global Trading",
      desc: "Cocopeat and agri-export · Kanhangad, Kerala",
      isMain: false,
    },
    {
      name: "RC Farms",
      desc: "Agriculture · India",
      isMain: false,
    },
    {
      name: "RC Global Solutions LLP",
      desc: "Accounts, design, BOQ and back-office support · Kerala",
      isMain: false,
    },
    {
      name: "RC Mart",
      desc: "Supermarket · Kerala",
      isMain: false,
    },
    {
      name: "RC Café & Restaurant",
      desc: "Hospitality · Kerala",
      isMain: false,
    },
  ];

  return (
    <section id="group" className="bg-sand py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap">
        <div className="reveal">
          <Eyebrow>Part of RC Group</Eyebrow>
        </div>
        <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] max-w-[22ch] reveal delay-1">
          Backed by a group that grows its own supply chain.
        </h2>
        <p className="lead mt-[18px] reveal delay-2">
          RC Group, formally constituted in 2022, connects our landscaping
          work with nurseries, technical services and agri-trade in the UAE and
          India.
        </p>

        {/* Grid with crisp divider lines matching original design */}
        <div className="mt-11 border border-line rounded-[4px] overflow-hidden shadow-sm reveal delay-2">
          <div className="grid grid-cols-4 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 bg-line gap-[1px]">
            {entities.map((ent, idx) => (
              <div
                key={idx}
                className={`p-6 grid gap-[6px] content-start ${
                  ent.isMain
                    ? "bg-palm text-on-palm"
                    : "bg-paper text-ink"
                }`}
              >
                <b className="font-semibold text-[1.02rem]">{ent.name}</b>
                <span
                  className={`text-[0.92rem] leading-snug ${
                    ent.isMain ? "text-on-palm-2" : "text-ink-2"
                  }`}
                >
                  {ent.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
