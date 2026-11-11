import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const CertificationsSection = () => {
  const items = [
    {
      badge: "EcoVadis",
      title: "EcoVadis Platinum",
      desc: "Top 1% globally in sustainability & CSR",
    },
    {
      badge: "ISO 45001",
      title: "ISO 45001",
      desc: "Occupational health & site safety management",
    },
    {
      badge: "ISO 14001",
      title: "ISO 14001",
      desc: "Environmental management & water stewardship",
    },
    {
      badge: "ISO 9001",
      title: "ISO 9001",
      desc: "Certified quality management in execution",
    },
    {
      badge: "Since 2007",
      title: "19+ Years in the UAE",
      desc: "Proven excellence across Dubai and Emirates",
    },
  ];

  return (
    <section className="bg-sand border-y border-line py-10">
      <ScrollReveal className="wrap">
        <div className="grid grid-cols-5 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-1 gap-6 items-stretch">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-[6px] bg-paper border border-line flex flex-col justify-between reveal delay-${idx + 1
                } transition-transform hover:-translate-y-1 hover:shadow-sm`}
            >
              <div>
                {/* <span className="inline-block font-mono text-[0.7rem] uppercase tracking-wider text-palm font-semibold bg-sand px-2.5 py-1 rounded-full border border-line mb-3">
                  {item.badge}
                </span> */}
                <h3 className="font-bold text-2xl text-ink mb-1.5 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-ink-2 text-[0.84rem] leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

