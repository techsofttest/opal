"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
interface ProjectItem {
  id?: number | string;
  image: string;
  title: string;
  tag: string; // Dynamic tag/category straight from the database
  alt?: string;
  wide?: boolean;
  tall?: boolean;
}
export function WorkSection ({project}:{project:ProjectItem[]}){
const [filter, setFilter] = useState("all");

  const dynamicCategories = useMemo(() => {
    const uniqueTags = Array.from(new Set(project.map((item) => item.tag)));
    
    const formatted = uniqueTags.map((tag) => ({
      key: tag,
      label: tag
        .replace(/[-_]/g, " ")
        .replace(/^\w/, (c) => c.toUpperCase()),
    }));

    return [{ key: "all", label: "All" }, ...formatted];
  }, [project]);
  const filteredProjects =
    filter === "all"
      ? project
      : project.filter((item) => item.tag === filter);

  return (
    <section id="work" className="py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-0">
          <div className="grid gap-[14px] max-w-[640px]">
            <div className="reveal">
              <Eyebrow>Our work</Eyebrow>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
              Recent projects across Dubai.
            </h2>
          </div>
          <div
            className="flex flex-wrap gap-2 max-w-none reveal delay-2"
            role="group"
            aria-label="Filter projects"
          >
            {dynamicCategories.map((item) => (
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
          {filteredProjects.map((item, index) => (
            <figure
              key={`${item.title}-${index}`}
              className={`m-0 relative overflow-hidden rounded-[4px] bg-sand-2 group reveal ${
                item.wide ? "col-span-2 max-[520px]:col-auto" : ""
              } ${item.tall ? "row-span-2 max-[520px]:row-auto" : ""}`}
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
                loading="lazy"
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
      </ScrollReveal>
    </section>
  );
};
