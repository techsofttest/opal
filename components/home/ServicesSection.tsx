"use client";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServicesSection({ service }: { service: any[] }) {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";
  
  // State to manage how many services are currently visible
  const [visibleCount, setVisibleCount] = useState(10);

  const displayedServices = service.slice(0, visibleCount);
  const hasMore = visibleCount < service.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <section id="services" className="bg-sand py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
          <div className="grid gap-[14px] max-w-[640px]">
            <div className="reveal">
              <Eyebrow>What we do</Eyebrow>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] reveal delay-1">
              Complete Landscaping Solutions, From Design to Maintenance
            </h2>
          </div>
          {!isServicesPage && (
            <a className="btn btn-ghost reveal delay-2" href="/services">
              View more
            </a>
          )}
        </div>

        <div className="border-t border-line">
          {displayedServices.map((svc, index) => (
            <Link
              href={`/services/${svc.slug}`}
              key={svc.id || index}
              className="grid grid-cols-[200px_1fr_1.1fr] max-[860px]:grid-cols-1 gap-7 max-[860px]:gap-[10px] py-7 border-b border-line items-start reveal"
            >
              <span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-water pt-[6px]">
                {svc.tag}
              </span>
              <h3 className="heading-display text-[1.45rem]">{svc.title}</h3>
              <div className="min-w-0">
                <div
                  className="[&_p]:text-ink-2 [&_ul]:mt-[10px] [&_ul]:p-0 [&_ul]:list-none [&_ul]:flex [&_ul]:flex-wrap [&_ul]:gap-[6px] [&_ul_li]:text-[0.82rem] [&_ul_li]:px-[10px] [&_ul_li]:py-1 [&_ul_li]:border [&_ul_li]:border-line [&_ul_li]:rounded-full [&_ul_li]:text-ink-2 [&_ul_li]:bg-paper"
                  dangerouslySetInnerHTML={{ __html: svc?.content ?? "" }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="btn btn-ghost px-8 py-3 bg-white border border-line rounded-[8px] text-ink font-semibold hover:border-palm transition-colors cursor-pointer"
            >
              Load more ({service.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}