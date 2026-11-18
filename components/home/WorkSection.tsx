
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface ProjectItem {
  id?: number | string;
  image: string;
  title: string;
  tag: string;
  alt?: string;
  wide?: boolean;
  tall?: boolean;
}

export function WorkSection({ project }: { project: ProjectItem[] }) {
  const [filter, setFilter] = useState("all");

  const dynamicCategories = useMemo(() => {
    const uniqueTags = Array.from(
      new Set(project.map((item) => item.tag).filter(Boolean))
    );

    return [
      { key: "all", label: "All" },
      ...uniqueTags.map((tag) => ({
        key: tag,
        label: tag
          .replace(/[-_]/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase()),
      })),
    ];
  }, [project]);

  const filteredProjects =
    filter === "all"
      ? project
      : project.filter((item) => item.tag === filter);

  return (
    <section id="work" className="py-[clamp(64px,9vw,120px)]">
      <div className="wrap">

        {/* Section Header */}
        <div className="flex justify-between items-end gap-6 flex-wrap mb-8">
          <div className="grid gap-[14px] max-w-[640px]">
            <Eyebrow>Our work</Eyebrow>

            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)]">
              Recent projects across Dubai.
            </h2>
          </div>

          {/* Category Filters */}
         {/* Category Filters */}
<div
  className="
    flex items-center gap-2
    w-full lg:w-auto
    overflow-x-auto
    overflow-y-hidden
    whitespace-nowrap
    pb-2
    scrollbar-hide
    scroll-smooth
    snap-x snap-mandatory
  "
  role="group"
  aria-label="Filter projects"
>
  {dynamicCategories.map((item) => {
    const isActive = filter === item.key;

    return (
      <button
        key={item.key}
        type="button"
        aria-pressed={isActive}
        onClick={() => setFilter(item.key)}
        className={`
          inline-flex items-center justify-center
          whitespace-nowrap shrink-0 snap-start
          text-[0.82rem] sm:text-[0.88rem]
          font-semibold
          py-[0.65em] px-[1.25em]
          rounded-full border
          cursor-pointer
          transition-all duration-300 ease-in-out
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-palm
          focus-visible:ring-offset-2
          ${
            isActive
              ? "bg-palm border-palm text-on-palm shadow-sm"
              : "bg-paper border-line text-ink-2 hover:bg-palm hover:border-palm hover:text-on-palm"
          }
        `}
      >
        {item.label}
      </button>
    );
  })}
</div></div>

        {/* Projects Gallery */}
        <div className="gal" id="gal">
          {filteredProjects.map((item, index) => (
            <figure
              key={item.id ?? `${item.title}-${index}`}
              className={`
                m-0 relative overflow-hidden
                rounded-[4px] bg-sand-2 group
                ${item.wide ? "col-span-2 max-[520px]:col-auto" : ""}
                ${item.tall ? "row-span-2 max-[520px]:row-auto" : ""}
              `}
            >
              <Image
                src={item.image}
                alt={item.alt || item.title}
                fill
                sizes={
                  item.wide
                    ? "(max-width: 520px) 100vw, (max-width: 860px) 100vw, 66vw"
                    : "(max-width: 520px) 100vw, (max-width: 860px) 50vw, 33vw"
                }
                className="object-cover block transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.04]"
              />

              <figcaption className="absolute left-0 right-0 bottom-0 p-[28px_14px_12px] bg-gradient-to-t from-[rgba(8,16,12,0.78)] to-transparent text-[#f2f5ef] text-[0.88rem] grid gap-[2px] z-10">
                <small className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[#cfe0c4]">
                  {item.tag}
                </small>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center py-12 text-ink-2">
            No projects found in this category.
          </p>
        )}

      </div>
    </section>
  );
}
