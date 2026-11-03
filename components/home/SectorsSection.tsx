import { Eyebrow } from "@/components/ui/Eyebrow";

export const SectorsSection = () => {
  const sectors = [
    {
      title: "Government & free zones",
      desc: "Multi-site landscape maintenance across business parks and economic zones, with large dedicated teams and full machinery mobilisation.",
      who: "DIEZ · Dubai Holding",
    },
    {
      title: "Hotels & hospitality",
      desc: "Grounds, pool-deck and indoor-plant care for five-star hotels, where the landscape is part of the guest experience every day.",
      who: "Sheraton · Kempinski · Hyatt Regency",
    },
    {
      title: "Developers & communities",
      desc: "Landscape and hardscape packages for residential communities, from construction through defects liability and long-term maintenance.",
      who: "KOJ · Green Community",
    },
    {
      title: "Private villas",
      desc: "Garden design, pools and outdoor living for homeowners who want one contractor handling the whole outdoor space.",
      who: "Villas · Private estates",
    },
  ];

  const clients = [
    "DIEZ",
    "Dubai Holding",
    "KOJ",
    "Sheraton",
    "Kempinski",
    "Hyatt Regency",
    "Green Community",
  ];

  return (
    <section id="sectors" className="py-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-0">
          <div className="grid gap-[14px] max-w-[640px]">
            <Eyebrow>Who we work for</Eyebrow>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)]">
              Trusted by free zones, hotels, developers and homeowners since
              2007.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-5 mt-11">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="p-7 border border-line rounded-[4px] grid gap-3 content-start bg-paper"
            >
              <h3 className="heading-display text-[1.45rem]">{sec.title}</h3>
              <p className="text-ink-2 text-[0.96rem]">{sec.desc}</p>
              <p className="font-mono text-[0.74rem] tracking-[0.06em] text-palm-2 uppercase mt-[6px]">
                {sec.who}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-7 border-t border-line grid gap-[18px]">
          <Eyebrow>Selected clients</Eyebrow>
          <ul className="flex flex-wrap gap-x-[14px] gap-y-3 m-0 p-0 list-none">
            {clients.map((client) => (
              <li
                key={client}
                className="font-display text-[clamp(1.15rem,2vw,1.45rem)] text-ink px-[18px] py-[10px] border border-line rounded-[4px] bg-sand"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

