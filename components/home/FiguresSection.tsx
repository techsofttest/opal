import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const FiguresSection = () => {
  return (
    <div className="bg-palm text-on-palm py-[clamp(40px,5vw,64px)]">
      <ScrollReveal className="wrap grid grid-cols-4 max-[760px]:grid-cols-2 gap-6 max-[760px]:gap-x-5 max-[760px]:gap-y-7">
        <div className="reveal">
          <b className="block font-display font-normal text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none tabular-nums">
            700+
          </b>
          <span className="block mt-2 text-on-palm-2 text-[0.92rem] max-w-[22ch]">
            staff across design, site and maintenance
          </span>
        </div>
        <div className="reveal delay-1">
          <b className="block font-display font-normal text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none tabular-nums">
            100+
          </b>
          <span className="block mt-2 text-on-palm-2 text-[0.92rem] max-w-[22ch]">
            vehicles in our own fleet
          </span>
        </div>
        <div className="reveal delay-2">
          <b className="block font-display font-normal text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none tabular-nums">
            1,000+
          </b>
          <span className="block mt-2 text-on-palm-2 text-[0.92rem] max-w-[22ch]">
            machines and equipment units
          </span>
        </div>
        <div className="reveal delay-3">
          <b className="block font-display font-normal text-[clamp(2.2rem,4.5vw,3rem)] leading-none tabular-nums">
            AED 550M+
          </b>
          <span className="block mt-2 text-on-palm-2 text-[0.90rem] max-w-[25ch]">
            in completed projects since 2007
          </span>
        </div>
      </ScrollReveal>
    </div>
  );
};
