"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const WorkSection = () => {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      c: "villa",
      wide: true,
      tall: true,
      src: "/img/villa-pergola.jpg",
      alt: "Private villa garden with steel pergola, outdoor kitchen and moon-gate seat",
      category: "Villa gardens",
      caption: "Pergola, outdoor kitchen and moon-gate seat",
    },
    {
      c: "villa",
      wide: false,
      tall: true,
      src: "/img/villa-sidepath.jpg",
      alt: "Side passage with large-format paving and curved turf inlay",
      category: "Villa gardens",
      caption: "Paving with curved turf inlay",
    },
    {
      c: "water",
      wide: false,
      tall: false,
      src: "/img/stepping-stones.jpg",
      alt: "Lit stone stepping slabs crossing a reflecting pool",
      category: "Pools & water",
      caption: "Stepping stones over reflecting pool",
    },
    {
      c: "light",
      wide: false,
      tall: false,
      src: "/img/villa-lighting.jpg",
      alt: "Villa garden at night with lit floating benches among ornamental grasses",
      category: "Hardscape & lighting",
      caption: "Floating benches, villa garden",
    },
    {
      c: "water",
      wide: true,
      tall: false,
      src: "/img/palm-pool.jpg",
      alt: "Residential pool deck with uplit date palms in island planters",
      category: "Pools & water",
      caption: "Pool deck with palm islands",
    },
    {
      c: "villa",
      wide: false,
      tall: false,
      src: "/img/olive-planter.jpg",
      alt: "Cloud-pruned olive tree in a raised timber-capped planter with bougainvillea beds",
      category: "Villa gardens",
      caption: "Feature olive in raised planter",
    },
    {
      c: "care",
      wide: true,
      tall: false,
      src: "/img/team-planting.jpg",
      alt: "Opal team planting bougainvillea with support frames and drip irrigation",
      category: "Planting & maintenance",
      caption: "Our team planting bougainvillea",
    },
    {
      c: "theme",
      wide: false,
      tall: true,
      src: "/img/themed-planting.jpg",
      alt: "Dinosaur sculpture set in fountain grass and mature trees",
      category: "Themed parks",
      caption: "Naturalistic planting, themed resort",
    },
    {
      c: "light",
      wide: false,
      tall: false,
      src: "/img/lit-steps.jpg",
      alt: "Cantilevered lit steps set into lawn terraces at a modern villa",
      category: "Hardscape & lighting",
      caption: "Lawn terraces with lit steps",
    },
    {
      c: "care",
      wide: true,
      tall: false,
      src: "/img/community-avenue.jpg",
      alt: "Palm avenue with clipped hedges and new seasonal flower bed",
      category: "Planting & maintenance",
      caption: "Palm avenue, Green Community",
    },
    {
      c: "villa",
      wide: false,
      tall: false,
      src: "/img/villa-terraces.jpg",
      alt: "Villa garden with circular stone platforms set in artificial turf",
      category: "Villa gardens",
      caption: "Circular platforms in turf",
    },
    {
      c: "water",
      wide: false,
      tall: false,
      src: "/img/water-wall.jpg",
      alt: "Water wall with backlit screen above a jacuzzi at night",
      category: "Pools & water",
      caption: "Water wall and jacuzzi",
    },
    {
      c: "care",
      wide: false,
      tall: true,
      src: "/img/bougainvillea-hedge.jpg",
      alt: "Dense clipped bougainvillea hedge along a city roadside",
      category: "Planting & maintenance",
      caption: "Bougainvillea hedge, roadside",
    },
    {
      c: "light",
      wide: false,
      tall: false,
      src: "/img/stair-walls.jpg",
      alt: "Lit staircase between rendered garden walls at dusk",
      category: "Hardscape & lighting",
      caption: "Garden stair and retaining walls",
    },
    {
      c: "theme",
      wide: false,
      tall: false,
      src: "/img/themed-path.jpg",
      alt: "Paved walkway lined with dense hedges leading to a dinosaur sculpture",
      category: "Themed parks",
      caption: "Planted walkways",
    },
    {
      c: "care",
      wide: false,
      tall: false,
      src: "/img/community-gate.jpg",
      alt: "Community entrance planting with clipped hedge, gravel and periwinkle",
      category: "Planting & maintenance",
      caption: "Entrance planting, Green Community East",
    },
    {
      c: "care",
      wide: false,
      tall: true,
      src: "/img/cassia-tree.jpg",
      alt: "Golden shower tree in full bloom in a residential community",
      category: "Planting & maintenance",
      caption: "Cassia in bloom, community streets",
    },
    {
      c: "care",
      wide: false,
      tall: false,
      src: "/img/hedge-care.jpg",
      alt: "Freshly trimmed hedge and lawn in a business district park",
      category: "Planting & maintenance",
      caption: "Hedge and lawn care, business district",
    },
    {
      c: "care",
      wide: false,
      tall: false,
      src: "/img/topiary-ring.jpg",
      alt: "Ring-clipped hedge around a tree in a paved plaza",
      category: "Planting & maintenance",
      caption: "Ring topiary, paved plaza",
    },
  ];

  return (
    <section id="work" className="py-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-0">
          <div className="grid gap-[14px] max-w-[640px]">
            <Eyebrow>Our work</Eyebrow>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)]">
              Recent projects across Dubai.
            </h2>
          </div>
          <div
            className="flex flex-wrap gap-2 max-w-none"
            role="group"
            aria-label="Filter projects"
          >
            {[
              { key: "all", label: "All" },
              { key: "villa", label: "Villa gardens" },
              { key: "water", label: "Pools & water" },
              { key: "light", label: "Hardscape & lighting" },
              { key: "theme", label: "Themed parks" },
              { key: "care", label: "Planting & maintenance" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                aria-pressed={filter === item.key}
                onClick={() => setFilter(item.key)}
                className={`font-inherit text-[0.88rem] font-semibold py-[0.5em] px-[1.1em] rounded-full border cursor-pointer transition-colors ${
                  filter === item.key
                    ? "bg-palm border-palm text-on-palm"
                    : "bg-paper border-line text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gal" id="gal">
          {galleryItems.map((item, index) => {
            const isHidden = filter !== "all" && item.c !== filter;
            if (isHidden) return null;

            return (
              <figure
                key={index}
                className={`m-0 relative overflow-hidden rounded-[4px] bg-sand-2 group ${
                  item.wide ? "col-span-2 max-[520px]:col-auto" : ""
                } ${item.tall ? "row-span-2 max-[520px]:row-auto" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute left-0 right-0 bottom-0 p-[28px_14px_12px] bg-gradient-to-t from-[rgba(8,16,12,0.78)] to-transparent text-[#f2f5ef] text-[0.88rem] grid gap-[2px]">
                  <small className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[#cfe0c4]">
                    {item.category}
                  </small>
                  {item.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

