import { Eyebrow } from "@/components/ui/Eyebrow";

export const CsrSection = () => {
  return (
    <section id="csr" className="bg-palm text-on-palm py-[clamp(64px,9vw,120px)]">
      <div className="wrap grid grid-cols-2 max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-start">
        <div className="min-w-0">
          <Eyebrow className="!text-leaf">Giving back · Punarjani</Eyebrow>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px]">
            Punarjani: our founder&apos;s legacy of care.
          </h2>
          <p className="lead !text-on-palm-2 mt-5">
            Every year since 2022, RC Group holds Punarjani on the birthday of
            our founder, the late Mr. Ramachandran Nair, in his memory. It
            carries forward his belief that a business is measured by what it
            gives back to the community.
          </p>
          <div className="flex items-baseline gap-[14px] mt-7">
            <b className="font-display font-normal text-[clamp(2.6rem,5vw,3.6rem)] leading-none text-leaf tabular-nums">
              2022
            </b>
            <span className="text-on-palm-2 text-[0.92rem] max-w-[26ch]">
              held every year in Kanhangad, Kerala
            </span>
          </div>
        </div>
        <div className="min-w-0 grid border-t border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
          <div className="grid gap-1 py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-display font-normal text-[1.25rem]">
              Health screening
            </b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Free women&apos;s wellness camps, including mammography screening,
              run with partner hospitals.
            </span>
          </div>
          <div className="grid gap-1 py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-display font-normal text-[1.25rem]">
              Health awareness
            </b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Public talks by leading doctors, including oncologist Dr. V.P.
              Gangadharan at Punarjani 2026.
            </span>
          </div>
          <div className="grid gap-1 py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-display font-normal text-[1.25rem]">
              Green legacy
            </b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Every attendee receives a fruit-bearing tree sapling to plant at
              home, so each Punarjani grows into new trees across the community.
            </span>
          </div>
          <div className="grid gap-1 py-[18px] border-b border-[color-mix(in_srgb,var(--on-palm)_20%,transparent)]">
            <b className="font-display font-normal text-[1.25rem]">
              Community support
            </b>
            <span className="text-on-palm-2 text-[0.96rem]">
              Food kit donations for families in need.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

