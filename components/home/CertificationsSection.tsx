import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const CertificationsSection = () => {
  const items = [
    {
      title: "EcoVadis Platinum",
      desc: "Top 1% globally in sustainability & CSR",
      icon: "/icons/ecovadis-platinum.png",
      alt: "EcoVadis Platinum Sustainability Icon",
    },
    {
      title: "ISO 45001",
      desc: "Occupational health & site safety management",
      icon: "/icons/iso-45001.png",
      alt: "ISO 45001 Safety Certification Icon",
    },
    {
      title: "ISO 14001",
      desc: "Environmental management & water stewardship",
      icon: "/icons/iso-14001.png",
      alt: "ISO 14001 Environmental Certification Icon",
    },
    {
      title: "ISO 9001",
      desc: "Certified quality management in execution",
      icon: "/icons/iso-9001.png",
      alt: "ISO 9001 Quality Management Icon",
    },
    {
      title: "19+ Years in the UAE",
      desc: "Proven excellence across Dubai and Emirates",
      stat: "19+",
      statSub: "YEARS",
    },
  ];

  return (
    <section className="bg-sand border-y border-line py-12">
      <ScrollReveal className="wrap">
        <div className="grid grid-cols-5 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-1 gap-6 items-stretch">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[8px] bg-white border border-line flex flex-col justify-between reveal delay-${idx + 1
                } transition-transform hover:-translate-y-1 hover:shadow-sm`}
            >
              <div>
                {/* Big icon */}
                <div className="h-16 sm:h-20 w-auto flex items-center justify-start mb-4 shrink-0">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.alt || item.title}
                      width={80}
                      height={80}
                      className="h-16 sm:h-20 w-auto object-contain shrink-0"
                    />
                  ) : (
                    <div className="flex flex-col justify-center leading-none">
                      <span className="font-display text-[2.4rem] sm:text-[2.8rem] font-bold text-gray-400 leading-none tracking-tight">
                        {item.stat}
                      </span>
                      <span className="font-mono text-[0.72rem] tracking-[0.2em] uppercase font-bold text-gray-400 mt-1">
                        {item.statSub}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="font-display font-bold text-[1.18rem] sm:text-[1.25rem] text-ink mb-2 leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-ink-2 text-[0.86rem] leading-relaxed mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
