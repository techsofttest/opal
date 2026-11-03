import { Eyebrow } from "@/components/ui/Eyebrow";

export const ClimateSection = () => {
  return (
    <section className="bg-palm text-on-palm py-[clamp(64px,9vw,120px)]">
      <div className="wrap grid grid-cols-2 max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-center">
        <div className="min-w-0">
          <Eyebrow className="!text-leaf">Designed for 48 °C summers</Eyebrow>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px]">
            Landscapes that survive August look good all year.
          </h2>
          <p className="lead !text-on-palm-2 mt-5">
            Our ISO 14001 environmental system and EcoVadis Platinum rating
            guide how we specify plants, water and materials.
          </p>
          <figure className="mt-7 grid gap-[10px] m-0">
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
          <div className="grid grid-cols-[110px_1fr] max-[860px]:grid-cols-[90px_1fr] gap-[18px] py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-mono font-medium text-[0.9rem] text-leaf">Plants</b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Native and adapted species such as ghaf, bougainvillea and desert
              grasses, grown and hardened in our own nurseries.
            </span>
          </div>
          <div className="grid grid-cols-[110px_1fr] max-[860px]:grid-cols-[90px_1fr] gap-[18px] py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-mono font-medium text-[0.9rem] text-leaf">Water</b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Drip irrigation, soil moisture control and night-time scheduling to
              reduce evaporation.
            </span>
          </div>
          <div className="grid grid-cols-[110px_1fr] max-[860px]:grid-cols-[90px_1fr] gap-[18px] py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-mono font-medium text-[0.9rem] text-leaf">
              Surfaces
            </b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Light, heat-reflective paving and shade structures that keep
              outdoor areas usable.
            </span>
          </div>
          <div className="grid grid-cols-[110px_1fr] max-[860px]:grid-cols-[90px_1fr] gap-[18px] py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-mono font-medium text-[0.9rem] text-leaf">Safety</b>
            <span className="text-on-palm-2 text-[0.96rem]">
              ISO 45001 safety management for every crew, including heat-stress
              controls in summer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

