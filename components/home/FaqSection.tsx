import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const FaqSection = () => {
  return (
    <section id="faq" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[0.8fr_1.2fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)]">
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow>FAQ</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            Common questions from Dubai clients.
          </h2>
        </div>
        <div className="min-w-0">
          <details
            open
            className="border-b border-line py-5 first:border-t reveal"
          >
            <summary className="cursor-pointer font-semibold text-[1.05rem] list-none flex justify-between gap-4 select-none">
              What landscaping works best in Dubai&apos;s climate?
            </summary>
            <p className="mt-3 text-ink-2 max-w-[62ch]">
              Drought-tolerant native and adapted plants, drip irrigation and
              heat-reflective paving. We match the planting to sun exposure and
              your water budget so the garden survives summer without heavy
              watering.
            </p>
          </details>
          <details className="border-b border-line py-5 first:border-t reveal delay-1">
            <summary className="cursor-pointer font-semibold text-[1.05rem] list-none flex justify-between gap-4 select-none">
              Can I use artificial grass?
            </summary>
            <p className="mt-3 text-ink-2 max-w-[62ch]">
              Yes. It saves water and maintenance, but the product must be rated
              for high UV and heat. We supply heat-resistant turf and often
              combine it with natural planting for shade and cooling.
            </p>
          </details>
          <details className="border-b border-line py-5 first:border-t reveal delay-2">
            <summary className="cursor-pointer font-semibold text-[1.05rem] list-none flex justify-between gap-4 select-none">
              Do I need a permit for landscaping work?
            </summary>
            <p className="mt-3 text-ink-2 max-w-[62ch]">
              It depends on the project size and your community or authority. We
              check the requirements during the site visit and handle the
              approval drawings for you.
            </p>
          </details>
          <details className="border-b border-line py-5 first:border-t reveal delay-3">
            <summary className="cursor-pointer font-semibold text-[1.05rem] list-none flex justify-between gap-4 select-none">
              How often does a garden need maintenance?
            </summary>
            <p className="mt-3 text-ink-2 max-w-[62ch]">
              Most villa gardens need weekly or fortnightly visits; larger
              sites need daily teams. We set the frequency based on planting,
              irrigation and how you use the space.
            </p>
          </details>
          <details className="border-b border-line py-5 first:border-t reveal delay-4">
            <summary className="cursor-pointer font-semibold text-[1.05rem] list-none flex justify-between gap-4 select-none">
              How much does landscaping cost?
            </summary>
            <p className="mt-3 text-ink-2 max-w-[62ch]">
              Cost depends on area, materials and features such as pools or
              pergolas. We give a written, itemised quotation after a free site
              visit.
            </p>
          </details>
        </div>
      </ScrollReveal>
    </section>
  );
};
