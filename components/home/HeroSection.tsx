import { Eyebrow } from "@/components/ui/Eyebrow";

export const HeroSection = () => {
  return (
    <section className="bg-sand pt-[clamp(40px,6vw,80px)] pb-[clamp(48px,7vw,96px)]">
      <div className="wrap grid grid-cols-[1.15fr_0.85fr] max-[860px]:grid-cols-1 gap-[clamp(28px,5vw,64px)] items-center">
        <div>
          <Eyebrow>Dubai · Since 2007</Eyebrow>
          <h1 className="heading-display text-[clamp(2.7rem,6.6vw,5.4rem)] mt-[18px]">
            We nurture <em className="italic text-palm-2">the nature</em> of the
            UAE.
          </h1>
          <p className="lead mt-[22px]">
            Opal Landscaping designs, builds and maintains outdoor spaces across
            Dubai: private villas, communities, parks and economic zones.
            Landscape, hardscape, irrigation and swimming pools, delivered by one
            team of 700+ people.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a className="btn btn-orange" href="#contact">
              Request a site visit
            </a>
            <a className="btn btn-ghost" href="#services">
              Our services
            </a>
          </div>
          <div className="flex flex-wrap gap-x-[22px] gap-y-[10px] mt-10 pt-[22px] border-t border-line font-mono text-[0.78rem] text-ink-2 tracking-[0.04em]">
            <span className="flex items-center gap-2">
              <i className="w-2 h-2 rounded-full bg-leaf inline-block"></i>
              EcoVadis Platinum
            </span>
            <span className="flex items-center gap-2">
              <i className="w-2 h-2 rounded-full bg-leaf inline-block"></i>
              ISO 45001
            </span>
            <span className="flex items-center gap-2">
              <i className="w-2 h-2 rounded-full bg-leaf inline-block"></i>
              ISO 14001
            </span>
          </div>
        </div>
        <figure className="relative aspect-[4/5] max-[860px]:aspect-[16/11] max-w-full rounded-[4px] overflow-hidden bg-palm m-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/pool-aerial.jpg"
            alt="Resort pool deck at night with lit date palms in island planters"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <figcaption className="absolute left-[14px] right-[14px] bottom-[14px] flex justify-between gap-[10px] font-mono text-[0.7rem] tracking-[0.08em] text-on-palm uppercase [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
            <span>Pool deck · palm uplighting</span>
            <span>Dubai</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

