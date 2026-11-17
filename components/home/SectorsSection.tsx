
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface WorkSection {
  title: string;
  subtitle: string;
  detail: {
    title: string;
    icon: string;
    option: string;
    description: string;
  }[];
}

export interface ClientItem {
  id: number;
  title: string;
  image: string;
}

interface SectorsSectionProps {
  client?: ClientItem[];
  cli?: WorkSection;
}

const revealDelays = [
  "delay-1",
  "delay-2",
  "delay-3",
  "delay-4",
  "delay-5",
  "delay-6",
];

export function SectorsSection({
  client = [],
  cli,
}: SectorsSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: client.length > 3,
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

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, client.length]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <section id="sectors" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap">

        {/* Section Heading */}
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <div className="grid gap-[14px] max-w-[640px]">
            {cli?.title && (
              <div className="reveal">
                <Eyebrow>{cli.title}</Eyebrow>
              </div>
            )}

            {cli?.subtitle && (
              <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
                {cli.subtitle}
              </h2>
            )}
          </div>
        </div>

        {/* Dynamic Sector Cards */}
        {cli?.detail && cli.detail.length > 0 && (
          <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-5 mt-11">

            {cli.detail.map((sec, idx) => (
              <div
                key={`${sec.title}-${idx}`}
                className={`p-7 border border-line rounded-[4px] grid gap-3 content-start bg-paper reveal ${
                  revealDelays[idx % revealDelays.length]
                }`}
              >
                {sec.option && (
                  <span className="font-mono text-[0.74rem] tracking-[0.06em] text-palm-2 uppercase">
                    {sec.option}
                  </span>
                )}

                <h3 className="heading-display text-[1.45rem]">
                  {sec.title}
                </h3>

                <div
                  className="
                    text-ink-2 text-[0.96rem]
                    [&_p]:mb-3
                    [&_p_strong]:font-mono
                    [&_p_strong]:text-[0.74rem]
                    [&_p_strong]:tracking-[0.06em]
                    [&_p_strong]:text-palm-2
                    [&_p_strong]:uppercase
                    [&_p_strong]:mt-[6px]
                  "
                  dangerouslySetInnerHTML={{
                    __html: sec.description || "",
                  }}
                />
              </div>
            ))}

          </div>
        )}

        {/* Dynamic Clients Section */}
        {client.length > 0 && (
          <div className="mt-14 pt-10 border-t border-line flex flex-col items-center text-center">

            <div className="reveal">
              <Eyebrow>Meet Our Clients</Eyebrow>
            </div>

            <div className="reveal delay-1 w-full max-w-7xl mx-auto mt-6">

              <div
                className="overflow-hidden py-10 cursor-grab active:cursor-grabbing"
                ref={emblaRef}
              >
                <div className="flex -ml-6 sm:-ml-10 items-center">

                  {client.map((item) => (
                    <div
                      key={item.id}
                      className="
                        flex-[0_0_100%]
                        sm:flex-[0_0_50%]
                        md:flex-[0_0_33.333%]
                        min-w-0
                        pl-6 sm:pl-10
                        flex items-center justify-center
                      "
                    >
                      <div className="relative h-44 sm:h-56 md:h-64 lg:h-72 w-full max-w-[420px] flex items-center justify-center p-4">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain"
                        />

                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Dynamic Navigation Indicators */}
              {snapCount > 1 && (
                <div
                  className="flex justify-center items-center gap-3 mt-6"
                  role="tablist"
                  aria-label="Client carousel indicators"
                >
                  {Array.from({ length: snapCount }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollTo(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        selectedIndex === index
                          ? "w-8 bg-palm"
                          : "w-2.5 bg-line hover:bg-ink-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-pressed={selectedIndex === index}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>
        )}

      </ScrollReveal>
    </section>
  );
}
