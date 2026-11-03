import { Eyebrow } from "@/components/ui/Eyebrow";

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
      <div className="wrap">
        <Eyebrow>Part of RC Group</Eyebrow>
        <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] max-w-[22ch]">
          Backed by a group that grows its own supply chain.
        </h2>
        <p className="lead mt-[18px]">
          RC Group, formally constituted in 2022, connects our landscaping
          work with nurseries, technical services and agri-trade in the UAE and
          India.
        </p>
        <div className="grid grid-cols-4 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 gap-[1px] bg-line border border-line mt-11">
          {entities.map((ent, idx) => (
            <div
              key={idx}
              className={`p-6 grid gap-[6px] content-start ${
                ent.isMain
                  ? "bg-palm text-on-palm"
                  : "bg-sand text-inherit"
              }`}
            >
              <b className="font-semibold">{ent.name}</b>
              <span
                className={`text-[0.92rem] ${
                  ent.isMain ? "text-on-palm-2" : "text-ink-2"
                }`}
              >
                {ent.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

