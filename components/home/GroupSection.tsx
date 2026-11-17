import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
export interface Section {
  title: string;
 subtitle: string;
  content: string;
  detail: {
      title: string;
  icon: string;
  option: string;
  description: string;
  }[];
}
export function GroupSection ({grp}:{grp?:Section}){
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
          <Eyebrow>{grp?.title}</Eyebrow>
        </div>
        <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] max-w-[22ch] reveal delay-1">
         {grp?.subtitle}
        </h2>
        <div className="lead mt-[18px] reveal delay-2" dangerouslySetInnerHTML={{__html:grp?.content ?? ""}} />

        {/* Grid with crisp divider lines matching original design */}
        <div className="mt-11 border border-line rounded-[4px] overflow-hidden shadow-sm reveal delay-2">
          <div className="grid grid-cols-4 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1 bg-line gap-[1px]">
            {grp?.detail.map((ent, idx) => (
              <div
                key={idx}
                className={`p-6 grid gap-[6px] content-start ${
                  0==idx
                    ? "bg-palm text-on-palm"
                    : "bg-paper text-ink"
                }`}
              >
                <b className="font-semibold text-[1.02rem]">{ent.title}</b>
                <span
                  className={`text-[0.92rem] leading-snug ${
                    0==idx ? "text-on-palm-2" : "text-ink-2"
                  }`}
                dangerouslySetInnerHTML={{__html:ent.description}}/>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
