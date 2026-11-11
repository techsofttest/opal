"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const SectorsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snapIndex = emblaApi.selectedScrollSnap();
    // Map the continuous snap index (0-7) smoothly into 3 indicator dots (0, 1, 2)
    setSelectedIndex(snapIndex % 3);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (dotIndex: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(dotIndex);
  };

  const sectors = [
    {
      title: "Government & free zones",
      desc: "Multi-site landscape maintenance across business parks and economic zones, with large dedicated teams and full machinery mobilisation.",
      who: "DIEZ · Dubai Holding",
    },
    {
      title: "Hotels & hospitality",
      desc: "Grounds, pool-deck and indoor-plant care for five-star hotels, where the landscape is part of the guest experience every day.",
      who: "Sheraton · Kempinski · Hyatt Regency",
    },
    {
      title: "Developers & communities",
      desc: "Landscape and hardscape packages for residential communities, from construction through defects liability and long-term maintenance.",
      who: "KOJ · Green Community",
    },
    {
      title: "Private villas",
      desc: "Garden design, pools and outdoor living for homeowners who want one contractor handling the whole outdoor space.",
      who: "Villas · Private estates",
    },
  ];

  // 4 client images repeated to form a seamless infinite loop showing 3 items at a time
  const clientLogos = [
    { src: "/clients/client-1.webp", alt: "Client logo 1" },
    { src: "/clients/client-2.webp", alt: "Client logo 2" },
    { src: "/clients/client-3.webp", alt: "Client logo 3" },
    { src: "/clients/client-4.webp", alt: "Client logo 4" },
    { src: "/clients/client-1.webp", alt: "Client logo 1 copy" },
    { src: "/clients/client-2.webp", alt: "Client logo 2 copy" },
    { src: "/clients/client-3.webp", alt: "Client logo 3 copy" },
    { src: "/clients/client-4.webp", alt: "Client logo 4 copy" },
  ];

  return (
    <section id="sectors" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-0">
          <div className="grid gap-[14px] max-w-[640px]">
            <div className="reveal">
              <Eyebrow>Who we work for</Eyebrow>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
              Trusted by free zones, hotels, developers and homeowners since
              2007.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-5 mt-11">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className={`p-7 border border-line rounded-[4px] grid gap-3 content-start bg-paper reveal delay-${idx + 1}`}
            >
              <h3 className="heading-display text-[1.45rem]">{sec.title}</h3>
              <p className="text-ink-2 text-[0.96rem]">{sec.desc}</p>
              <p className="font-mono text-[0.74rem] tracking-[0.06em] text-palm-2 uppercase mt-[6px]">
                {sec.who}
              </p>
            </div>
          ))}
        </div>

        {/* Meet Our Clients Section */}
        <div className="mt-14 pt-10 border-t border-line flex flex-col items-center text-center">
          <div className="reveal">
            <Eyebrow>Meet Our Clients</Eyebrow>
          </div>

          {/* Continuous Embla Carousel: 3 images at a time, extra large, centered, no border, no shadow */}
          <div className="reveal delay-1 w-full max-w-7xl mx-auto mt-6">
            <div
              className="overflow-hidden py-10 cursor-grab active:cursor-grabbing"
              ref={emblaRef}
            >
              <div className="flex -ml-6 sm:-ml-10 items-center">
                {clientLogos.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] min-w-0 pl-6 sm:pl-10 flex items-center justify-center"
                  >
                    <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 w-full max-w-[420px] flex items-center justify-center p-4">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Three navigation indicators */}
            <div
              className="flex justify-center items-center gap-3 mt-6"
              role="tablist"
              aria-label="Client carousel indicators"
            >
              {[0, 1, 2].map((dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollTo(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    selectedIndex === dotIdx
                      ? "w-8 bg-palm"
                      : "w-2.5 bg-line hover:bg-ink-2"
                  }`}
                  aria-label={`Go to slide group ${dotIdx + 1}`}
                  aria-pressed={selectedIndex === dotIdx}
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
