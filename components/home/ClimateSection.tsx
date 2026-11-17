import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
export interface Hero {
  title: string;
  subtitle: string;
  content: string;
  detail: {title:string;description:string}[];
  image: string;
}
export function ClimateSection({page}:{page?:Hero}){
  return (
    <section className="bg-palm text-on-palm py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-2 max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-center">
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow className="!text-leaf">{page?.title}</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            {page?.subtitle}
          </h2>
          <div className="lead !text-on-palm-2 mt-5 reveal delay-2" dangerouslySetInnerHTML={{__html:page?.content ?? ""}} />
          <figure className="mt-7 grid gap-[10px] m-0 reveal delay-3">
            <video
              src="/img/drip-planting.mp4"
              poster="/img/drip-planting-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="New roundabout planting laid out on drip irrigation lines"
              className="w-full max-w-full aspect-video object-cover rounded-[4px] bg-palm-2 block"
            ></video>
            <figcaption className="font-mono text-[0.74rem] tracking-[0.04em] text-on-palm-2">
              New roundabout planting on drip irrigation, one emitter per plant.
            </figcaption>
          </figure>
        </div>
        <div className="min-w-0 grid border-t border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
          {page?.detail.map((p,idx)=>(
          <div key={idx} className="grid grid-cols-[110px_1fr] max-[860px]:grid-cols-[90px_1fr] gap-[18px] py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)] reveal delay-1">
            <b className="font-mono font-medium text-[0.9rem] text-leaf">{p.title}</b>
            <span className="text-on-palm-2 text-[0.96rem]" dangerouslySetInnerHTML={{__html:p.description}} />
          </div>))}
        </div>
      </ScrollReveal>
    </section>
  );
};
