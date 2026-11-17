"use client";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaWhatsapp } from "react-icons/fa6";
import { useLayoutData } from "@/context/LayoutContext";

export function BlogSidebar ({page}:{page:any}) {
    const { layoutData } = useLayoutData();
    const contact = layoutData?.contact;
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      {/* Site Consultation Card */}
      <div className="bg-palm text-white p-6 sm:p-7 rounded-[10px]">
        <h3 className="heading-display text-[1.35rem] text-white mt-2 mb-3">
          {page?.title}
        </h3>
        <div className="text-on-palm-2 text-[0.92rem] leading-relaxed mb-6" dangerouslySetInnerHTML={{__html:page?.content ?? ""}} />
        <Link
          href="/contact"
          className="btn btn-orange w-full justify-center !text-[0.92rem]"
        >
          Book a Free Site Visit
        </Link>
        <a
          href={`https://wa.me/${contact?.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white btn btn-ghost !text-white hover:!bg-white/10 w-full justify-center !text-[0.92rem] mt-2.5"
        >
          <FaWhatsapp className="text-leaf text-base" /> Chat on WhatsApp
        </a>
      </div>
    </aside>
  );
};
