import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServicesSection ({service}:{service:any[]}){

  return (
    <section id="services" className="bg-sand py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
          <div className="grid gap-[14px] max-w-[640px]">
            <div className="reveal">
              <Eyebrow>What we do</Eyebrow>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
              One contractor, from first sketch to year-five maintenance.
            </h2>
          </div>
          <a className="btn btn-ghost reveal delay-2" href="/contact">
            Discuss a project
          </a>
        </div>

        <div className="border-t border-line">
          {service.map((svc, index) => (
            <div
              key={index}
              className="grid grid-cols-[200px_1fr_1.1fr] max-[860px]:grid-cols-1 gap-7 max-[860px]:gap-[10px] py-7 border-b border-line items-start reveal"
            >
              <span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-water pt-[6px]">
                {svc.tag}
              </span>
              <h3 className="heading-display text-[1.45rem]">{svc.title}</h3>
              <div className="min-w-0">
              <div className="[&_p]:text-ink-2 [&_ul]:mt-[10px] [&_ul]:p-0 [&_ul]:list-none [&_ul]:flex [&_ul]:flex-wrap [&_ul]:gap-[6px] [&_ul_li]:text-[0.82rem] [&_ul_li]:px-[10px] [&_ul_li]:py-1 [&_ul_li]:border [&_ul_li]:border-line [&_ul_li]:rounded-full [&_ul_li]:text-ink-2 [&_ul_li]:bg-paper" dangerouslySetInnerHTML={{__html:svc?.content ?? ""}} />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
