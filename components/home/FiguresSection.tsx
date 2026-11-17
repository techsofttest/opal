import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FiguresSection ({stat}:{stat:any[]}){
  return (
    <div className="bg-palm text-on-palm py-[clamp(40px,5vw,64px)]">
      <ScrollReveal className="wrap grid grid-cols-4 max-[760px]:grid-cols-2 gap-6 max-[760px]:gap-x-5 max-[760px]:gap-y-7">
        {stat.map((s,idx)=>(
        <div key={idx} className="reveal delay-3">
          <b className="block font-display font-normal text-[clamp(2.2rem,4.5vw,3rem)] leading-none tabular-nums">
            {s.title}
          </b>
          <span className="block mt-2 text-on-palm-2 text-[0.90rem] max-w-[25ch]" dangerouslySetInnerHTML={{__html:s.description }} />
        </div>))}
      </ScrollReveal>
    </div>
  );
};
